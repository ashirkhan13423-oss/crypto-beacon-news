import fs from 'fs';

const urls = [
  'security/what-is-a-crypto-atm-are-they-safe',
  'security/how-to-spot-a-fake-crypto-wallet-app',
  'bitcoin/why-bitcoin-mining-uses-so-much-energy',
  'bitcoin/how-does-bitcoin-halving-work',
  'guides/what-is-a-smart-contract-explained',
  'guides/coin-vs-token-difference',
  'news/why-are-crypto-atms-everywhere',
  'news/what-is-on-chain-trading-vs-exchange',
  'ethereum/what-is-an-erc-20-token',
  'ethereum/how-does-ethereum-staking-work',
  'altcoins/what-is-an-ai-crypto-token',
  'altcoins/why-do-meme-coins-have-value'
];

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
let newUrls = urls.map(url => `  <url>
    <loc>https://www.cryptobeacon.site/${url}</loc>
    <lastmod>2026-09-12</lastmod>
    <changefreq>never</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n');
sitemap = sitemap.replace('</urlset>', newUrls + '\n</urlset>');
fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap updated');
