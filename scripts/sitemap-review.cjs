const fs = require('fs');
const path = require('path');

const reviewList = new Set([
  '/author', '/learn', '/glossary', '/defi', '/etfs', '/taxes',
  '/ethereum/what-is-ethereum-staking', '/ethereum/how-does-ethereum-staking-work', '/ethereum/proof-of-stake-explained', '/ethereum/ethereum-validators-explained',
  '/bitcoin/what-is-the-bitcoin-halving', '/bitcoin/how-does-bitcoin-halving-work',
  '/bitcoin/bitcoin-wallets-complete-guide', '/bitcoin/how-bitcoin-wallets-work', '/bitcoin/what-is-a-bitcoin-wallet',
  '/bitcoin/what-is-a-bitcoin-seed-phrase', '/security/what-is-a-seed-phrase', '/security/how-to-store-crypto-seed-phrase-safely', '/security/seed-phrase-storage-steel-vs-paper-vs-metal',
  '/guides/what-is-a-private-key', '/security/private-key-vs-seed-phrase',
  '/security/how-crypto-phishing-scams-work', '/security/how-to-avoid-crypto-phishing-scams',
  '/security/how-to-revoke-smart-contract-approvals', '/security/how-to-revoke-token-approvals-metamask',
  '/bitcoin/common-bitcoin-wallet-scams', '/security/common-crypto-scams',
  '/ethereum/what-is-a-smart-contract', '/guides/what-is-a-smart-contract-explained',
  '/guides/crypto-regulation-hub', '/guides/crypto-regulation-explained-for-beginners', '/guides/how-cryptocurrency-regulation-works', '/guides/why-governments-regulate-cryptocurrency', '/guides/why-crypto-regulation-matters',
  '/news/liquid-network-3400-btc-returned-320-million-incident', '/news/liquid-network-hack-4000-btc-withdrawal',
  '/news/bitcoin-rally-august-2026', '/news/bitcoin-september-rally-macro-test',
  '/security/what-is-a-crypto-atm-are-they-safe', '/security/how-to-spot-a-fake-crypto-wallet-app',
  '/bitcoin/why-bitcoin-mining-uses-so-much-energy',
  '/guides/coin-vs-token-difference',
  '/news/why-are-crypto-atms-everywhere', '/news/what-is-on-chain-trading-vs-exchange',
  '/ethereum/what-is-an-erc-20-token',
  '/altcoins/what-is-an-ai-crypto-token', '/altcoins/why-do-meme-coins-have-value'
]);

const routesDir = path.join(process.cwd(), 'src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('_'));

const sitemapUrls = [];
const allUrls = [];

for (const file of files) {
  let base = file.replace('.tsx', '');
  if (base === '__root') continue;
  
  let slug = '';
  if (base === 'index') {
    slug = '/';
  } else {
    if (base.endsWith('.index')) base = base.replace('.index', '');
    slug = '/' + base.replace(/\./g, '/');
  }

  const filePath = path.join(routesDir, file);
  allUrls.push(slug);

  if (slug === '/search') continue;
  if (reviewList.has(slug)) continue;

  // Include in sitemap
  const stats = fs.statSync(filePath);
  const lastmod = stats.mtime.toISOString().split('T')[0];
  sitemapUrls.push({ loc: `https://www.cryptobeacon.site${slug === '/' ? '' : slug}`, lastmod });
}

// Generate sitemap
let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const url of sitemapUrls) {
  sitemapXml += `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n  </url>\n`;
}
sitemapXml += '</urlset>';
fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemapXml);

console.log('Total URLs before:', allUrls.length);
console.log('Total URLs in sitemap after cleaning:', sitemapUrls.length);

// Analyze Review List
const reportData = [];
for (const slug of reviewList) {
  const possiblePaths = [
    slug === '/' ? 'index.tsx' : slug.substring(1).replace(/\//g, '.') + '.tsx',
    slug.substring(1).replace(/\//g, '.') + '.index.tsx'
  ];
  let filePath = null;
  let content = '';
  for (const p of possiblePaths) {
    const fullPath = path.join(routesDir, p);
    if (fs.existsSync(fullPath)) {
      filePath = fullPath;
      content = fs.readFileSync(fullPath, 'utf8');
      break;
    }
  }

  if (filePath) {
    const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const wordCount = textOnly.split(' ').filter(w => w.length > 0).length;
    
    // Find paragraphs
    const pTags = content.match(/<[pP][^>]*>([\s\S]*?)<\/[pP]>/g) || [];
    let hasBoilerplate = false;
    for (const p of pTags) {
      if (p.includes("This article is educational") || p.includes("not financial advice")) {
        hasBoilerplate = true;
      }
    }

    reportData.push({
      slug,
      wordCount,
      hasBoilerplate
    });
  } else {
    reportData.push({ slug, wordCount: 0, error: 'Not found' });
  }
}

fs.writeFileSync('review_analysis.json', JSON.stringify(reportData, null, 2));
