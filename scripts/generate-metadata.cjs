const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const metadataPath = path.join(__dirname, '../src/data/generated-metadata.json');

const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));
const metadata = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(routesDir, file), 'utf-8');
  
  // Exclude non-articles (like hubs, index.tsx, author, contact, about, etc.)
  if (file.endsWith('.index.tsx') || ['index.tsx', 'author.tsx', 'about.tsx', 'contact.tsx', 'privacy.tsx', 'terms.tsx', 'search.tsx', 'disclaimer.tsx', 'corrections.tsx', 'editorial-policy.tsx', 'affiliate-disclosure.tsx'].includes(file) || file.split('.').length === 2 && !file.includes('index')) {
      // Also exclude root layout components or single word routes that might not be articles
      continue;
  }
  
  // Extract route path: "bitcoin.what-is-bitcoin.tsx" -> "/bitcoin/what-is-bitcoin"
  const routeParts = file.replace('.tsx', '').split('.');
  const routePath = '/' + routeParts.join('/');
  
  // Find everything between <Author /> and <SiteFooter /> or </main>
  let bodyContent = content;
  const authorMatch = content.match(/<Author[\s\S]*?\/>/);
  if (authorMatch) {
      bodyContent = content.slice(authorMatch.index + authorMatch[0].length);
  } else {
      const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
      if (headerMatch) {
          bodyContent = content.slice(headerMatch.index + headerMatch[0].length);
      }
  }
  
  const articleGridMatch = bodyContent.indexOf('<ArticleGrid');
  if (articleGridMatch !== -1) bodyContent = bodyContent.slice(0, articleGridMatch);
  
  const siteFooterMatch = bodyContent.indexOf('<SiteFooter');
  if (siteFooterMatch !== -1) bodyContent = bodyContent.slice(0, siteFooterMatch);

  const mainEndMatch = bodyContent.indexOf('</main>');
  if (mainEndMatch !== -1) bodyContent = bodyContent.slice(0, mainEndMatch);
  
  // Remove <Disclaimer />
  bodyContent = bodyContent.replace(/<Disclaimer\s*\/>/g, '');
  
  // Strip JSX/HTML tags
  let plainText = bodyContent.replace(/<[^>]+>/g, ' ');
  // Replace `{/* comments */}`
  plainText = plainText.replace(/{\/\*[\s\S]*?\*\/}/g, ' ');
  
  // Decode simple HTML entities if necessary
  plainText = plainText.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  
  // Replace all newlines and multiple spaces with a single space
  plainText = plainText.replace(/\s+/g, ' ').trim();
  
  // Count words
  const words = plainText.split(' ').filter(w => w.length > 0);
  const wordCount = words.length;
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 225));
  
  // Generate fallback description (first 150 chars)
  const first150 = plainText.substring(0, 150).trim();
  const fallbackDesc = first150.length === 150 ? first150.replace(/\s+\S*$/, '') + '...' : first150;
  
  metadata[routePath] = {
      wordCount,
      readTime: `${readTimeMinutes} min read`,
      fallbackDesc
  };
}

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log(`Generated metadata for ${Object.keys(metadata).length} articles.`);
