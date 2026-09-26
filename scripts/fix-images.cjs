const fs = require('fs');
const path = require('path');

const articlesTsPath = 'src/data/articles.ts';
let articlesTs = fs.readFileSync(articlesTsPath, 'utf-8');

const brokenUrlsPath = 'Brocken Main Page Images.txt';
const brokenUrlsText = fs.readFileSync(brokenUrlsPath, 'utf-8');

const brokenUrls = brokenUrlsText.split('\n').map(line => line.trim()).filter(line => line).map(line => new URL(line).pathname);

const assetsDir = 'src/assets';
const assets = fs.readdirSync(assetsDir);

let newImports = [];
let imgCounter = 100;

brokenUrls.forEach(url => {
  const parts = url.split('/');
  const slug = parts[parts.length - 1];
  
  // Try to find a matching image in assets
  let bestMatch = null;
  // some specific known matches
  if (slug === 'what-is-an-ai-crypto-token') bestMatch = 'altcoins-ai-crypto-token.webp';
  else if (slug === 'why-do-meme-coins-have-value') bestMatch = 'altcoins-meme-coin-value.webp';
  else if (slug === 'what-is-an-erc-20-token') bestMatch = 'ethereum-erc20-token.webp';
  else if (slug === 'how-does-ethereum-staking-work') bestMatch = 'ethereum-staking-mechanism.webp';
  else if (slug === 'what-is-a-smart-contract-explained') bestMatch = 'guides-smart-contract.webp';
  else if (slug === 'coin-vs-token-difference') bestMatch = 'guides-coin-vs-token.webp';
  else if (slug === 'why-are-crypto-atms-everywhere') bestMatch = 'news-crypto-atms-everywhere.webp';
  else if (slug === 'what-is-on-chain-trading-vs-exchange') bestMatch = 'news-onchain-vs-exchange.webp';
  else if (slug === 'bitcoin-address-vs-wallet-address') bestMatch = 'guides-wallet-address.webp';
  else if (slug === 'bitcoin-wallets-complete-guide') bestMatch = 'exchange-vs-wallet.webp';
  else if (slug === 'common-bitcoin-wallet-scams') bestMatch = 'security-fake-wallet-app.webp';
  
  if (!bestMatch) {
    // try to find by inclusion
    for (let asset of assets) {
      if (asset.includes('.webp') && asset.split('.')[0].includes(slug.split('-')[0])) {
         bestMatch = asset;
         break;
      }
    }
  }
  
  // if still no match, use a fallback
  if (!bestMatch) bestMatch = 'cryptobeacon-logo.png.asset.json'; // wait, fallback to a valid one
  if (bestMatch === 'cryptobeacon-logo.png.asset.json') bestMatch = 'bitcoin-buy-safely.webp';

  const importName = `hero_fix_${imgCounter++}`;
  
  if (!articlesTs.includes(`import ${importName}`)) {
    newImports.push(`import ${importName} from "@/assets/${bestMatch}";`);
  }
  
  // Replace undefined with the importName
  const regex = new RegExp(`(to:\\s*"${url}",\\s*\\n\\s*image:\\s*)undefined`, 'g');
  articlesTs = articlesTs.replace(regex, `$1${importName}`);
});

// insert new imports at the end of existing imports
const lastImportIdx = articlesTs.lastIndexOf('import ');
const nextLineIdx = articlesTs.indexOf('\n', lastImportIdx);

const newArticlesTs = articlesTs.slice(0, nextLineIdx) + '\n' + newImports.join('\n') + articlesTs.slice(nextLineIdx);

fs.writeFileSync(articlesTsPath, newArticlesTs);
console.log('Fixed ' + brokenUrls.length + ' articles.');
