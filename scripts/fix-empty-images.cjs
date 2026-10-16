const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '..', 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace imageUrl: "" or imageUrl: '' with "https://www.cryptobeacon.site/og-image.png"
  content = content.replace(/imageUrl:\s*["']\s*["']/g, 'imageUrl: "https://www.cryptobeacon.site/og-image.png"');

  // Replace imageUrl: `https://www.cryptobeacon.site${""}` or variants with empty template expression
  content = content.replace(/imageUrl:\s*`https:\/\/www\.cryptobeacon\.site\$\{\s*["']\s*["']\s*\}`/g, 'imageUrl: "https://www.cryptobeacon.site/og-image.png"');

  // Replace imageUrl: `https://www.cryptobeacon.site${hero}` where hero is not defined or empty
  content = content.replace(/imageUrl:\s*`https:\/\/www\.cryptobeacon\.site`(?!\/)/g, 'imageUrl: "https://www.cryptobeacon.site/og-image.png"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed++;
    console.log(`Fixed empty imageUrl in ${file}`);
  }
});

console.log(`Finished fixing. Total files modified: ${totalFixed}`);
