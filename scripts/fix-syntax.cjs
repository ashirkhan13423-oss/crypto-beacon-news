const fs = require('fs');
const path = require('path');
const ROUTES_DIR = path.join(__dirname, "../src/routes");

const files = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  let content = fs.readFileSync(path.join(ROUTES_DIR, file), 'utf-8');
  if (content.includes('import { Link, createFileRoute, Link }')) {
    content = content.replace('import { Link, createFileRoute, Link }', 'import { createFileRoute, Link }');
    fs.writeFileSync(path.join(ROUTES_DIR, file), content, 'utf-8');
  }
}
console.log("Syntax fixed");
