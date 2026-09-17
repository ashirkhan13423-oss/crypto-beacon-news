const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes('This article is for informational and educational purposes only')) continue;

  // Replace paragraph line(s) with <Disclaimer /> component
  const disclaimerRegex = /<p[^>]*>\s*This article is for informational and educational purposes only[^<]*<\/p>/g;
  content = content.replace(disclaimerRegex, '<Disclaimer />');

  // Ensure import of Disclaimer at top
  if (!content.includes('import { Disclaimer }')) {
    content = content.replace(/(import\s+\{[^}]*\}\s+from\s+"[^"]+";\s*)/g, `$1import { Disclaimer } from "@/components/Disclaimer";\n`);
  }

  fs.writeFileSync(filePath, content);
}

console.log('Disclaimer migration done');
