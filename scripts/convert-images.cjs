const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const ROUTES_DIR = path.join(__dirname, '../src/routes');

async function processImages() {
  const files = fs.readdirSync(ASSETS_DIR);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const parsed = path.parse(file);
      const webpName = `${parsed.name}.webp`;
      
      console.log(`Converting ${file} to ${webpName}...`);
      await sharp(path.join(ASSETS_DIR, file))
        .webp({ quality: 80 })
        .toFile(path.join(ASSETS_DIR, webpName));
      
      // Optionally delete the old file
      fs.unlinkSync(path.join(ASSETS_DIR, file));
    }
  }

  // Update imports in all route files
  const routes = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith('.tsx'));
  for (const route of routes) {
    const routePath = path.join(ROUTES_DIR, route);
    let content = fs.readFileSync(routePath, 'utf8');
    
    // Replace .jpg, .jpeg, .png in imports
    let modified = content.replace(/import hero from "([^"]+)\.(jpg|jpeg|png)";/g, 'import hero from "$1.webp";');
    modified = modified.replace(/import ([a-zA-Z0-9_]+) from "([^"]+)\.(jpg|jpeg|png)";/g, 'import $1 from "$2.webp";');
    
    if (content !== modified) {
      fs.writeFileSync(routePath, modified, 'utf8');
      console.log(`Updated imports in ${route}`);
    }
  }
}

processImages().catch(console.error);
