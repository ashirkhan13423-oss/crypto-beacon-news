const fs = require('fs');
const path = require('path');

const routesDir = path.join(process.cwd(), 'src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('_'));

const urls = [];

for (const f of files) {
  let base = f.replace('.tsx', '');
  if (base === '__root') continue;
  let slug = '';
  if (base === 'index') {
    slug = '/';
  } else {
    if (base.endsWith('.index')) base = base.replace('.index', '');
    slug = '/' + base.replace(/\./g, '/');
  }
  
  if (slug === '/search') continue; // Exclude /search

  const stats = fs.statSync(path.join(routesDir, f));
  const lastmod = stats.mtime.toISOString();

  urls.push({ loc: `https://www.cryptobeacon.site${slug === '/' ? '' : slug}`, lastmod });
}

// Split into chunks of 50
const CHUNK_SIZE = 50;
const chunks = [];
for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
  chunks.push(urls.slice(i, i + CHUNK_SIZE));
}

let sitemapIndexXml = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

chunks.forEach((chunk, index) => {
  const sitemapFilename = `sitemap-${index + 1}.xml`;
  let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const url of chunk) {
    sitemapXml += `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }
  
  sitemapXml += '</urlset>';
  fs.writeFileSync(path.join(process.cwd(), `public/${sitemapFilename}`), sitemapXml);
  
  sitemapIndexXml += `  <sitemap>\n    <loc>https://www.cryptobeacon.site/${sitemapFilename}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>\n`;
});

sitemapIndexXml += '</sitemapindex>';
fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemapIndexXml);

console.log(`Generated sitemap index with ${chunks.length} sitemaps containing ${urls.length} total URLs.`);
