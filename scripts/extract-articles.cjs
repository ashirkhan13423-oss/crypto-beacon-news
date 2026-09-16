const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const indexFile = path.join(routesDir, 'index.tsx');
const c = fs.readFileSync(indexFile, 'utf-8');

const importLines = c.match(/import\s+[a-zA-Z0-9_]+\s+from\s+['"].*?['"]/g) || [];
const imageImports = importLines.filter(line => line.includes('@/assets/'));

const articlesMatch = c.match(/const articles = \[([\s\S]*?)\];/);
if (articlesMatch) {
  let articlesText = articlesMatch[1];
  
  // Parse the array roughly by finding each block
  const blocks = articlesText.match(/\{[\s\S]*?\}/g);
  
  const parsedArticles = blocks.map(block => {
    const toMatch = block.match(/to:\s*['"]([^'"]+)['"]/);
    const to = toMatch ? toMatch[1] : '';
    
    let publishedDate = "2026-01-01"; // Fallback date
    if (to) {
      // Find corresponding file
      // to: /news/symbiosis-bitcoin-bridge...
      // file: news.symbiosis-bitcoin-bridge...tsx
      const slugParts = to.split('/').filter(Boolean); // ['news', 'symbiosis-...']
      const filename = slugParts.join('.') + '.tsx';
      const filepath = path.join(routesDir, filename);
      
      if (fs.existsSync(filepath)) {
        const fileContent = fs.readFileSync(filepath, 'utf-8');
        // Match const PUBLISHED = "2026-09-02" or similar
        const dateMatch = fileContent.match(/(?:PUBLISHED|publishedDate|datePublished).*?['"]([0-9]{4}-[0-9]{2}-[0-9]{2})['"]/);
        if (dateMatch) {
          publishedDate = dateMatch[1];
        }
      } else {
        console.warn('File not found for route:', to, '->', filename);
      }
    }
    
    // Inject publishedDate into the block
    return block.replace(/\}$/, `  publishedDate: "${publishedDate}",\n}`);
  });

  const output = `
${imageImports.join(';\n')};

export type Article = {
  to: string;
  image?: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
  publishedDate: string;
};

export const articles: Article[] = [
  ${parsedArticles.join(',\n  ')}
];
`;
  
  const dataDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  fs.writeFileSync(path.join(dataDir, 'articles.ts'), output);
  console.log('Created src/data/articles.ts with published dates');
}
