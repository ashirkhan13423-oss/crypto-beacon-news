const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));

let articles = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(routesDir, file), 'utf-8');
  if (!content.includes('createFileRoute')) continue;

  const urlMatch = content.match(/const URL = "(.*?)";/);
  if (!urlMatch) continue;
  const url = urlMatch[1];

  let bodyContent = content;
  // strip out imports, schemas, head, components like SiteHeader, SiteFooter, Author, etc.
  const returnIdx = content.indexOf('return (');
  if (returnIdx > -1) {
    bodyContent = content.substring(returnIdx);
  }
  
  // count H2s
  const h2Count = (bodyContent.match(/<H2/g) || []).length;
  // check FAQ block
  const hasFAQ = content.includes('const faqSchema = {') ? 'yes' : 'no';
  
  // In-body internal links
  // <Link to="/...">
  const inBodyLinks = (bodyContent.match(/<Link to="\//g) || []).length;

  // Real body word count (excluding nav, footer, ad slots, author bio, disclaimer)
  // Just strip out known components and html tags
  let text = bodyContent
    .replace(/<SiteHeader[^>]*>/g, '')
    .replace(/<SiteFooter[^>]*>/g, '')
    .replace(/<Author[^>]*>/g, '')
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/g, '')
    .replace(/<AdSlot[^>]*>/g, '')
    .replace(/<div[^>]*Disclaimer[\s\S]*?<\/div>/ig, '')
    .replace(/Related Reading[\s\S]*?<\/section>/g, '');
  
  // replace html tags
  text = text.replace(/<[^>]+>/g, ' ');
  // replace { ... } expressions roughly
  text = text.replace(/\{[^}]+\}/g, ' ');

  const words = text.split(/\s+/).filter(w => w.length > 0 && w.match(/[a-zA-Z]/));
  const wordCount = words.length;

  articles.push({
    file,
    url,
    wordCount,
    h2Count,
    hasFAQ,
    inBodyLinks
  });
}

articles.sort((a, b) => a.wordCount - b.wordCount);

const table = `| URL | Word Count | H2 Count | FAQ Present | In-Body Links |\n|---|---|---|---|---|\n` +
  articles.map(a => `| ${a.url} | ${a.wordCount} | ${a.h2Count} | ${a.hasFAQ} | ${a.inBodyLinks} |`).join('\n');

fs.writeFileSync(path.join(__dirname, 'audit-table.md'), table);
console.log('Done generating table');
