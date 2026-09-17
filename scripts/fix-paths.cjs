const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, '../src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.index.tsx'));
for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\/index', publishedTime/g, "', publishedTime");
  fs.writeFileSync(filePath, content);
}
