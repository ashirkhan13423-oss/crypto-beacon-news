const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '..', 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

const issues = [];

files.forEach(file => {
  const filePath = path.join(routesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match imageUrl: "..." or imageUrl: `...`
  const matches = [...content.matchAll(/imageUrl:\s*([`"'])(.*?)\1/g)];
  matches.forEach(m => {
    const rawVal = m[2];
    if (!rawVal.trim() || rawVal.includes('${""}') || rawVal === 'https://www.cryptobeacon.site') {
      issues.push({ file, raw: m[0] });
    }
  });

  // Also check if any buildArticleSchema without valid imageUrl exists
  const schemaMatches = [...content.matchAll(/buildArticleSchema\(\s*\{([\s\S]*?)\}\s*\)/g)];
  schemaMatches.forEach(sm => {
    const body = sm[1];
    const imgProp = body.match(/imageUrl:\s*([^\n,]+)/);
    if (!imgProp) {
      issues.push({ file, reason: 'missing imageUrl' });
    } else {
      const val = imgProp[1].trim();
      if (val === '""' || val === "''" || val === '`https://www.cryptobeacon.site${""}`') {
        issues.push({ file, val });
      }
    }
  });
});

console.log('Found empty imageUrl issues in files:');
const uniqueFiles = [...new Set(issues.map(i => i.file))];
console.log(JSON.stringify(uniqueFiles, null, 2));
