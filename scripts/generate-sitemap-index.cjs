/**
 * generate-sitemap-index.cjs
 *
 * Generates a single public/sitemap.xml containing only URLs that:
 *   1. Are NOT redirect sources listed in vercel.json
 *   2. Do NOT have a <meta name="robots" content="noindex"> in their route file
 *   3. Are NOT layout-only files (Outlet-only, no head/component of their own)
 *   4. Are NOT redirect-stub files (beforeLoad: redirect)
 *   5. Are NOT under src/routes/api/
 *   6. Are NOT special routes (__root, search)
 *
 * <lastmod> is extracted from the route file's `const PUBLISHED` or `MODIFIED` date.
 * Falls back to file mtime if no date constant is found.
 *
 * Usage: node scripts/generate-sitemap-index.cjs
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const BASE_URL   = 'https://www.cryptobeacon.site';
const ROUTES_DIR = path.join(process.cwd(), 'src/routes');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// ── 1. Read redirect sources from vercel.json ─────────────────────────────────
const vercelJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'vercel.json'), 'utf8'));

const redirectSources = new Set(
  (vercelJson.redirects || [])
    // Skip host-conditional redirects (they have a `has` condition)
    .filter(r => !r.has)
    .map(r => r.source)
);

console.log(`\nRedirect sources excluded (${redirectSources.size}):`);
for (const s of redirectSources) console.log(`  - ${s}`);

// ── 2. Patterns that mark a file as NOT a real indexable page ─────────────────
const NOINDEX_RE      = /noindex/;
const REDIRECT_STUB_RE = /beforeLoad.*redirect|throw\s+redirect\s*\(/s;
// Layout-only: exports a Route whose component is just <Outlet /> with no head
const OUTLET_ONLY_RE  = /component:\s*\(\)\s*=>\s*<Outlet\s*\/>/;

// ── 3. Walk src/routes/ (top-level only; skip api/ subdirectory) ──────────────
const files = fs.readdirSync(ROUTES_DIR, { withFileTypes: true })
  .filter(e => e.isFile() && e.name.endsWith('.tsx') && !e.name.startsWith('_'))
  .map(e => e.name);

// ── 4. Build URL list ─────────────────────────────────────────────────────────
const removed = [];
const urls    = [];

for (const f of files) {
  let base = f.replace(/\.tsx$/, '');
  let slug;

  if (base === 'index') {
    slug = '/';
  } else {
    if (base.endsWith('.index')) base = base.replace(/\.index$/, '');
    slug = '/' + base.replace(/\./g, '/');
  }

  const filePath = path.join(ROUTES_DIR, f);
  const source   = fs.readFileSync(filePath, 'utf8');

  // Skip: vercel.json redirect source
  if (redirectSources.has(slug)) {
    removed.push({ slug, reason: 'vercel.json redirect source' });
    continue;
  }

  // Skip: noindex meta tag in route
  if (NOINDEX_RE.test(source)) {
    removed.push({ slug, reason: 'route sets noindex' });
    continue;
  }

  // Skip: redirect-stub files (beforeLoad throws redirect)
  if (REDIRECT_STUB_RE.test(source)) {
    removed.push({ slug, reason: 'redirect-stub route (beforeLoad redirect)' });
    continue;
  }

  // Skip: layout-only Outlet files (no real page content)
  if (OUTLET_ONLY_RE.test(source)) {
    removed.push({ slug, reason: 'layout-only Outlet route (no content)' });
    continue;
  }

  // Skip: /search (noindex is set, but catch it here explicitly too)
  if (slug === '/search') {
    removed.push({ slug, reason: 'noindex (search page)' });
    continue;
  }

  // Extract lastmod from PUBLISHED or MODIFIED constant (YYYY-MM-DD)
  const dateMatch = source.match(/const\s+(?:PUBLISHED|MODIFIED)\s*=\s*["'](\d{4}-\d{2}-\d{2})["']/);
  let lastmod;
  if (dateMatch) {
    lastmod = dateMatch[1];
  } else {
    // Fallback: file mtime as ISO date (YYYY-MM-DD)
    const mtime = fs.statSync(filePath).mtime;
    lastmod = mtime.toISOString().slice(0, 10);
  }

  const loc = BASE_URL + (slug === '/' ? '' : slug);
  urls.push({ loc, lastmod });
}

// Sort by loc for stable output
urls.sort((a, b) => a.loc.localeCompare(b.loc));

// ── 5. Write single flat sitemap.xml ─────────────────────────────────────────
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const { loc, lastmod } of urls) {
  xml += `  <url>\n`;
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
}
xml += '</urlset>\n';

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');

// ── 6. Delete old child sitemap files ─────────────────────────────────────────
let deletedCount = 0;
const childPattern = /^sitemap-\d+\.xml$/;
for (const f of fs.readdirSync(PUBLIC_DIR)) {
  if (childPattern.test(f)) {
    fs.unlinkSync(path.join(PUBLIC_DIR, f));
    console.log(`Deleted old child sitemap: ${f}`);
    deletedCount++;
  }
}

// ── 7. Report ─────────────────────────────────────────────────────────────────
console.log('\n── URLs removed ──────────────────────────────────────────');
for (const r of removed) {
  console.log(`  REMOVED  ${r.slug.padEnd(70)} reason: ${r.reason}`);
}

console.log('\n── Summary ───────────────────────────────────────────────');
console.log(`  URLs before filtering : ${urls.length + removed.length}`);
console.log(`  URLs removed          : ${removed.length}`);
console.log(`  URLs in sitemap.xml   : ${urls.length}`);
console.log(`  Child sitemaps deleted: ${deletedCount}`);
console.log(`\n  ✅  Written: public/sitemap.xml (single flat sitemap, ${urls.length} URLs)`);
