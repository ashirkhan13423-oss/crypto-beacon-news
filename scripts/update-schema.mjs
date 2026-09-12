import fs from 'fs';

const updates = {
  'security.index.tsx': `    {
      "@type": "WebPage",
      name: "Are Crypto ATMs Safe? Scams and Risks Explained",
      url: "https://www.cryptobeacon.site/security/what-is-a-crypto-atm-are-they-safe",
    },
    {
      "@type": "WebPage",
      name: "How to Spot a Fake Crypto Wallet App Before It Steals Your Funds",
      url: "https://www.cryptobeacon.site/security/how-to-spot-a-fake-crypto-wallet-app",
    },
  ],`,
  'bitcoin.index.tsx': `    {
      "@type": "WebPage",
      name: "Why Bitcoin Mining Uses So Much Energy: The Proof of Work Mechanism",
      url: "https://www.cryptobeacon.site/bitcoin/why-bitcoin-mining-uses-so-much-energy",
    },
    {
      "@type": "WebPage",
      name: "How Does Bitcoin Halving Work? The Protocol Mechanism Explained",
      url: "https://www.cryptobeacon.site/bitcoin/how-does-bitcoin-halving-work",
    },
  ],`,
  'guides.index.tsx': `    {
      "@type": "WebPage",
      name: "What is a Smart Contract? Explained Simply",
      url: "https://www.cryptobeacon.site/guides/what-is-a-smart-contract-explained",
    },
    {
      "@type": "WebPage",
      name: "The Difference Between a Coin and a Token",
      url: "https://www.cryptobeacon.site/guides/coin-vs-token-difference",
    },
  ],`,
  'news.index.tsx': `    {
      "@type": "WebPage",
      name: "Why Are Crypto ATMs Everywhere?",
      url: "https://www.cryptobeacon.site/news/why-are-crypto-atms-everywhere",
    },
    {
      "@type": "WebPage",
      name: "On-Chain Trading vs Exchange Trading",
      url: "https://www.cryptobeacon.site/news/what-is-on-chain-trading-vs-exchange",
    },
  ],`,
  'ethereum.index.tsx': `    {
      "@type": "WebPage",
      name: "What is an ERC-20 Token?",
      url: "https://www.cryptobeacon.site/ethereum/what-is-an-erc-20-token",
    },
    {
      "@type": "WebPage",
      name: "How Does Ethereum Staking Work?",
      url: "https://www.cryptobeacon.site/ethereum/how-does-ethereum-staking-work",
    },
  ],`,
  'altcoins.index.tsx': `    {
      "@type": "WebPage",
      name: "What is an AI Crypto Token?",
      url: "https://www.cryptobeacon.site/altcoins/what-is-an-ai-crypto-token",
    },
    {
      "@type": "WebPage",
      name: "Why Do Meme Coins Have Value?",
      url: "https://www.cryptobeacon.site/altcoins/why-do-meme-coins-have-value",
    },
  ],`
};

for (const [file, addition] of Object.entries(updates)) {
  const filepath = `src/routes/${file}`;
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replace("  ],", addition);
  fs.writeFileSync(filepath, content);
  console.log('updated', file);
}
