const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Get all currently existing route files
const routesDir = path.join(process.cwd(), 'src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('_'));

const slugs = files.map(f => {
  let base = f.replace('.tsx', '');
  if (base === 'index') return '/';
  if (base === '__root') return null;
  if (base.endsWith('.index')) base = base.replace('.index', '');
  return '/' + base.replace(/\./g, '/');
}).filter(Boolean);

// 2. Regenerate sitemap.xml
const sitemapPath = 'public/sitemap.xml';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const slug of slugs) {
  xml += `  <url>
    <loc>https://www.cryptobeacon.site${slug === '/' ? '' : slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
}
xml += '</urlset>';
fs.writeFileSync(sitemapPath, xml);
console.log('Regenerated sitemap.xml with', slugs.length, 'URLs');

// 3. Find all historically deleted routes to add to _redirects
const deletedFilesOutput = execSync('git log --all --diff-filter=D --summary').toString();
const deletedLines = deletedFilesOutput.split('\n').filter(l => l.includes('delete mode 100644 src/routes/'));
const deletedSlugs = new Set();
for (const line of deletedLines) {
  const match = line.match(/src\/routes\/(.+)\.tsx$/);
  if (match) {
    let base = match[1];
    if (base === 'index') continue;
    if (base.endsWith('.index')) base = base.replace('.index', '');
    const slug = '/' + base.replace(/\./g, '/');
    if (!slugs.includes(slug)) {
      deletedSlugs.add(slug);
    }
  }
}

// 4. Create _redirects
let redirects = '';
for (const slug of deletedSlugs) {
  redirects += `${slug} 410\n`;
}
if (redirects) {
  fs.writeFileSync('public/_redirects', redirects);
  console.log('Created _redirects with 410 rules for', deletedSlugs.size, 'URLs');
}

// 5. Count articles
const articlesOutput = fs.readFileSync('src/data/articles.ts', 'utf-8');
const articleCountMatch = articlesOutput.match(/export const articles: Article\[\] = \[[\s\S]*?\];/);
let articleCount = 0;
if (articleCountMatch) {
  articleCount = (articleCountMatch[0].match(/to: /g) || []).length;
}
console.log('Sitemap URL count:', slugs.length);
console.log('Published article count:', articleCount);
