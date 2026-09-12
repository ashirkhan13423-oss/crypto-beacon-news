import fs from 'fs';

// Data for new articles to inject
const newArticles = [
  {
    category: 'security',
    to: '/security/what-is-a-crypto-atm-are-they-safe',
    tag: 'Security · Article',
    title: 'Are Crypto ATMs Safe? Scams and Risks Explained',
    desc: 'Crypto ATMs offer convenience but come with massive fees and significant risks. Learn how they work and the common scams targeting users.',
    hero: 'import hero_atm from "@/assets/security-crypto-atm.jpg";',
    imgVar: 'hero_atm',
    heroPath: 'security-crypto-atm.jpg'
  },
  {
    category: 'security',
    to: '/security/how-to-spot-a-fake-crypto-wallet-app',
    tag: 'Security · Article',
    title: 'How to Spot a Fake Crypto Wallet App Before It Steals Your Funds',
    desc: 'Learn the red flags that distinguish fake crypto wallet apps from legitimate ones: developer mismatches, suspicious permissions, review patterns, and more.',
    hero: 'import hero_fakewallet from "@/assets/security-fake-wallet-app.jpg";',
    imgVar: 'hero_fakewallet',
    heroPath: 'security-fake-wallet-app.jpg'
  },
  {
    category: 'bitcoin',
    to: '/bitcoin/why-bitcoin-mining-uses-so-much-energy',
    tag: 'Bitcoin · Article',
    title: 'Why Bitcoin Mining Uses So Much Energy: The Proof of Work Mechanism',
    desc: 'An objective look at the mechanics of Bitcoin mining, why it requires massive energy consumption, and the debate surrounding its environmental impact.',
    hero: 'import hero_miningenergy from "@/assets/bitcoin-mining-energy.jpg";',
    imgVar: 'hero_miningenergy',
    heroPath: 'bitcoin-mining-energy.jpg'
  },
  {
    category: 'bitcoin',
    to: '/bitcoin/how-does-bitcoin-halving-work',
    tag: 'Bitcoin · Article',
    title: 'How Does Bitcoin Halving Work? The Protocol Mechanism Explained',
    desc: 'A detailed technical explanation of the Bitcoin halving mechanism, how it controls supply issuance, and why it is programmed into the protocol.',
    hero: 'import hero_halvingmech from "@/assets/bitcoin-halving-mechanism.jpg";',
    imgVar: 'hero_halvingmech',
    heroPath: 'bitcoin-halving-mechanism.jpg'
  },
  {
    category: 'guides',
    to: '/guides/what-is-a-smart-contract-explained',
    tag: 'Guides · Article',
    title: 'What Is a Smart Contract? The Vending Machine Analogy',
    desc: 'A plain-language guide to understanding smart contracts, how automated blockchain agreements work, and why they are foundational to decentralized finance.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-guides-smart-contract.png'
  },
  {
    category: 'guides',
    to: '/guides/coin-vs-token-difference',
    tag: 'Guides · Article',
    title: 'Coin vs. Token: What Is the Actual Difference?',
    desc: 'A clear explanation of the difference between cryptocurrency coins and tokens, how they function on different network layers, and why the distinction matters.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-guides-coin-vs-token.png'
  },
  {
    category: 'news',
    to: '/news/why-are-crypto-atms-everywhere',
    tag: 'News · Article',
    title: 'Why Are Crypto ATMs Suddenly Everywhere?',
    desc: 'A look at the economics driving the rapid expansion of cryptocurrency ATMs in gas stations and convenience stores, and the regulatory backlash they are facing.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-news-crypto-atms-everywhere.png'
  },
  {
    category: 'news',
    to: '/news/what-is-on-chain-trading-vs-exchange',
    tag: 'News · Article',
    title: 'What Is On-Chain Trading vs. Exchange Trading?',
    desc: 'A breakdown of the differences between executing trades directly on a blockchain (DeFi) versus using a centralized cryptocurrency exchange.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-news-onchain-vs-exchange.png'
  },
  {
    category: 'ethereum',
    to: '/ethereum/what-is-an-erc-20-token',
    tag: 'Ethereum · Article',
    title: 'What Is an ERC-20 Token? The Standard That Built DeFi',
    desc: 'A plain-language guide to the ERC-20 token standard, how it revolutionized cryptocurrency creation on Ethereum, and why it remains the foundation of decentralized finance.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-ethereum-erc20-token.png'
  },
  {
    category: 'ethereum',
    to: '/ethereum/how-does-ethereum-staking-work',
    tag: 'Ethereum · Article',
    title: 'How Does Ethereum Staking Work? Proof of Stake Explained',
    desc: 'A plain-language guide to how Ethereum\'s Proof of Stake consensus works, what validators do, and how staking yield is generated without mining hardware.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-ethereum-staking-mechanism.png'
  },
  {
    category: 'altcoins',
    to: '/altcoins/what-is-an-ai-crypto-token',
    tag: 'Altcoins · Article',
    title: 'What Is an AI Crypto Token? Mechanics and Hype Explained',
    desc: 'An objective explanation of what AI crypto tokens are, how they attempt to blend blockchain with artificial intelligence, and how to separate the technology from the hype.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-altcoins-ai-crypto-token.png'
  },
  {
    category: 'altcoins',
    to: '/altcoins/why-do-meme-coins-have-value',
    tag: 'Altcoins · Article',
    title: 'Why Do Meme Coins Have Value? The Economics of Attention',
    desc: 'An analytical look at meme coins, explaining how community attention, liquidity, and social momentum temporarily create financial value out of internet jokes.',
    hero: '',
    imgVar: 'undefined',
    heroPath: '/placeholder-altcoins-meme-coin-value.png'
  }
];

// Update index.tsx
let indexContent = fs.readFileSync('src/routes/index.tsx', 'utf8');

const heroImports = newArticles.map(a => a.hero).filter(a => a !== '').join('\n');
indexContent = indexContent.replace('import hero_trezor from "@/assets/trezor-phishing-breach.jpg";', 'import hero_trezor from "@/assets/trezor-phishing-breach.jpg";\n' + heroImports);

const newArticlesArray = newArticles.map(a => `  {
    to: "${a.to}",
    image: ${a.imgVar},
    alt: "",
    tag: "${a.tag}",
    title: "${a.title}",
    desc: "${a.desc}",
  },`).join('\n');

indexContent = indexContent.replace('const articles = [', 'const articles = [\n' + newArticlesArray);

fs.writeFileSync('src/routes/index.tsx', indexContent);
console.log('Updated index.tsx');

// Update Hub Pages
const categories = ['security', 'bitcoin', 'guides', 'news', 'ethereum', 'altcoins'];

for (const cat of categories) {
  const filePath = `src/routes/${cat}.index.tsx`;
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath}`);
    continue;
  }
  
  let hubContent = fs.readFileSync(filePath, 'utf8');
  const catArticles = newArticles.filter(a => a.category === cat);
  
  const hubImports = catArticles.map(a => a.hero).filter(a => a !== '').join('\n');
  if (hubImports) {
    hubContent = hubContent.replace('const collectionSchema', hubImports + '\n\nconst collectionSchema');
  }

  const hubLinks = catArticles.map(a => {
    let imgSrc = '';
    if (a.imgVar !== 'undefined') {
      imgSrc = `<img src={${a.imgVar}} alt="" className="w-full h-full object-cover" loading="lazy" width={1536} height={896} />`;
    } else {
      imgSrc = `<img src="${a.heroPath}" alt="" className="w-full h-full object-cover" loading="lazy" width={1536} height={896} />`;
    }

    return `
          <Link
            to="${a.to}"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              ${imgSrc}
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                ${a.tag}
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                ${a.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                ${a.desc}
              </p>
            </div>
          </Link>`;
  }).join('\n');

  hubContent = hubContent.replace('        </div>\n      </main>', hubLinks + '\n        </div>\n      </main>');
  fs.writeFileSync(filePath, hubContent);
  console.log(`Updated ${filePath}`);
}
