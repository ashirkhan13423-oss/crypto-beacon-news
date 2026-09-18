const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const metadataPath = path.join(__dirname, '../src/data/generated-metadata.json');

const files = fs
  .readdirSync(routesDir)
  .filter((f) => f.endsWith('.tsx') && !f.startsWith('__'));
const metadata = {};

// ---------------------------------------------------------------------------
// The Author component measures the textContent of the rendered <article>
// element at runtime (see src/components/Author.tsx, measureArticleReadTime),
// then replaces the label via useEffect. We can't run React here, so we mirror
// the browser's measurement from the route source: isolate the <article> JSX
// region, strip non-rendering code (head blocks, imports, presentational
// components), and resolve the module-scope data arrays the article references
// (FAQ lists, scam catalogs, body maps, etc.) since those strings render into
// the article at runtime. The result is used only as the pre-hydration/SSR
// fallback; the browser always shows the exact dynamic value after mount.
// ---------------------------------------------------------------------------

// Strip "external" self-closing presentational components whose text lives in
// separate files, and JSX brace blocks ({props}, {expressions}, comments) which
// never contribute visible text of their own.
function stripJsxBraceBlocks(text) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '{') {
      let depth = 1;
      let j = i + 1;
      let inStr = false;
      let strQ = '';
      while (j < text.length) {
        const c = text[j];
        if (inStr) {
          if (c === '\\') j++;
          else if (c === strQ) inStr = false;
        } else if (c === "'" || c === '"' || c === '`') {
          inStr = true;
          strQ = c;
        } else if (c === '{') {
          depth++;
        } else if (c === '}') {
          depth--;
          if (depth === 0) break;
        }
        j++;
      }
      i = j + 1;
    } else {
      out += ch;
      i++;
    }
  }
  return out;
}

// Find a module-scope declaration's value, stopping at its closing semicolon.
function declarationValue(src, name) {
  const declRe = new RegExp(
    '(?:^|[;\\s}])(?:const|let|var)\\s+' + name + '\\s*(?::[^=;]*?)?=\\s*'
  );
  const m = src.match(declRe);
  if (!m) return null;
  const start = m.index + m[0].length;
  let depth = 0;
  let state = 'code';
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (state !== 'code') {
      if (ch === '\\') i++;
      else if (
        (state === 'sq' && ch === "'") ||
        (state === 'dq' && ch === '"') ||
        (state === 'tpl' && ch === '`')
      )
        state = 'code';
      continue;
    }
    if (ch === "'") state = 'sq';
    else if (ch === '"') state = 'dq';
    else if (ch === '`') state = 'tpl';
    else if (ch === '{' || ch === '[' || ch === '(') depth++;
    else if (ch === '}' || ch === ']' || ch === ')') depth--;
    else if (ch === ';' && depth === 0) return src.slice(start, i);
  }
  return src.slice(start);
}

// Extract the displayable string literals from a resolved declaration value,
// ignoring URLs, asset paths, and route strings.
function resolveStringLiterals(text) {
  if (!text) return '';
  if (/^["'`](@\/|\.\/|https?:\/\/)/.test(text)) return '';
  const pieces = [];
  const litRe = /`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;
  let m;
  while ((m = litRe.exec(text))) {
    pieces.push(
      m[0]
        .slice(1, -1)
        .replace(/\\n/g, ' ')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\`/g, '`')
        .replace(/\\\\/g, '\\')
    );
  }
  return pieces.join(' ');
}

for (const file of files) {
  const content = fs.readFileSync(path.join(routesDir, file), 'utf-8');

  // Exclude non-articles (hubs, indexes, author, contact, about, etc.)
  if (
    file.endsWith('.index.tsx') ||
    ['index.tsx', 'author.tsx', 'about.tsx', 'contact.tsx', 'privacy.tsx', 'terms.tsx', 'search.tsx', 'disclaimer.tsx', 'corrections.tsx', 'editorial-policy.tsx', 'affiliate-disclosure.tsx'].includes(file) ||
    (file.split('.').length === 2 && !file.includes('index'))
  ) {
    continue;
  }

  // Route path: "bitcoin.what-is-bitcoin.tsx" -> "/bitcoin/what-is-bitcoin"
  const routePath = '/' + file.replace('.tsx', '').split('.').join('/');

  // 1) Drop the head() block and imports: titles, meta descriptions, schema
  //    JSON-LD, and module paths never render inside <article>.
  let cleaned = content
    .replace(/head:\s*\(\)\s*=>[\s\S]*?component:/, 'component: ')
    .replace(/import\s+['"][^'"]*['"]\s*;?/g, ' ')
    .replace(/import\s+[\s\S]*?\s+from\s+['"][^'"]*['"]\s*;?/g, ' ');

  // 2) Isolate the <article> JSX region (same element the browser measures).
  let articleRegion = cleaned;
  const articleStart = cleaned.indexOf('<article');
  const articleEnd = cleaned.indexOf('</article>');
  if (articleStart !== -1 && articleEnd !== -1 && articleEnd > articleStart) {
    articleRegion = cleaned.slice(articleStart, articleEnd + '</article>'.length);
  } else {
    const gridMatch = cleaned.indexOf('<ArticleGrid');
    if (gridMatch !== -1) cleaned = cleaned.slice(0, gridMatch);
    const footerMatch = cleaned.indexOf('<SiteFooter');
    if (footerMatch !== -1) cleaned = cleaned.slice(0, footerMatch);
    const mainEnd = cleaned.indexOf('</main>');
    if (mainEnd !== -1) cleaned = cleaned.slice(0, mainEnd);
    articleRegion = cleaned;
  }

  // 3) Remove presentational components whose text lives in separate files.
  articleRegion = articleRegion.replace(/<(Disclaimer|LastUpdated|RelatedArticles)\s*\/>/g, ' ');

  // 4) Collect module-scope identifiers referenced inside the article region.
  //    Bracket the LEFT edge only ({name…), so {scams.map(…)} and
  //    {faqs.slice(…)} resolve the array name just like the bare {faqs} form.
  const referenced = [];
  for (const m of articleRegion.matchAll(/\{([A-Za-z_$][\w$]*)/g)) {
    if (!referenced.includes(m[1])) referenced.push(m[1]);
  }

  // 5) Resolve each referenced declaration's string content.
  const resolvedText = referenced
    .map((name) => resolveStringLiterals(declarationValue(content, name)))
    .filter(Boolean)
    .join(' ');

  // 6) Strip JSX expressions and tags from the article region.
  const plainText = stripJsxBraceBlocks(articleRegion)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const rawText = (plainText + ' ' + resolvedText)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

  const words = rawText.split(' ').filter((w) => w.length > 0);
  const wordCount = words.length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // Generate fallback description (first 150 chars).
  const first150 = words.join(' ').substring(0, 150).trim();
  const fallbackDesc =
    first150.length === 150 ? first150.replace(/\s+\S*$/, '') + '...' : first150;

  metadata[routePath] = {
    wordCount,
    readTime: `${readTimeMinutes} min read`,
    fallbackDesc,
  };
}

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log(`Generated metadata for ${Object.keys(metadata).length} articles.`);
