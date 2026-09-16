const fs = require('fs');
const path = require('path');

const routesDir = path.join(process.cwd(), 'src/routes');

let index = fs.readFileSync(path.join(routesDir, 'index.tsx'), 'utf-8');
index = index.replace(/const TITLE = ".+?";/, 'const TITLE = "Cryptocurrency: Education, Security & Market Analysis | CryptoBeacon";');
index = index.replace(/const DESC =[\s\S]+?const PUBLISHED_DATE/m, 'const DESC =\n  "Your definitive guide on what cryptocurrency is. Get the latest crypto education, security guides, self-custody insights, and market analysis.";\nconst PUBLISHED_DATE');
index = index.replace(/Cryptocurrency prices are determined by global market supply/g, 'Cryptocurrency value is determined by global market supply');
fs.writeFileSync(path.join(routesDir, 'index.tsx'), index);
console.log('Updated index.tsx');

let root = fs.readFileSync(path.join(routesDir, '__root.tsx'), 'utf-8');
root = root.replace(/including real-time crypto currency price updates and crypto currency news/, 'focusing on crypto education, self-custody, and market analysis');
fs.writeFileSync(path.join(routesDir, '__root.tsx'), root);
console.log('Updated __root.tsx');

let bitcoin = fs.readFileSync(path.join(routesDir, 'bitcoin.index.tsx'), 'utf-8');
bitcoin = bitcoin.replace(/Bitcoin \(BTC\): Benchmark Crypto Currency Price & Architecture/g, 'Bitcoin (BTC): Benchmark Crypto Currency Architecture & Analysis');
bitcoin = bitcoin.replace(/global crypto currency price factors/g, 'global crypto currency macro factors');
bitcoin = bitcoin.replace(/crypto currency price<\/strong> drivers/g, 'market</strong> drivers');
fs.writeFileSync(path.join(routesDir, 'bitcoin.index.tsx'), bitcoin);
console.log('Updated bitcoin.index.tsx');
