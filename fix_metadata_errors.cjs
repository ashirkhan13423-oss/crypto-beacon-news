const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'routes');

const fixes = {
  "guides.custodial-vs-non-custodial-wallets-explained.tsx": {
    hero: "exchange-vs-wallet.webp",
    title: "Custodial vs Non-Custodial Crypto Wallets Compared",
    desc: null
  },
  "guides.how-to-move-crypto-from-coinbase-to-hardware-wallet.tsx": {
    hero: "exchange-vs-wallet.webp",
    title: "Transfer Crypto From Coinbase To A Hardware Wallet",
    desc: "Step-by-step guide to transferring crypto from Coinbase to a Ledger or Trezor hardware wallet safely, avoiding high network fees and common mistakes."
  },
  "guides.how-to-read-a-blockchain-explorer-etherscan.tsx": {
    hero: "read-block-explorer.webp",
    title: "How to Read a Blockchain Explorer: Etherscan Guide",
    desc: "Learn how to use Etherscan to track your crypto transactions, verify smart contracts, and read complex blockchain data like a seasoned professional."
  },
  "guides.how-to-verify-a-crypto-wallet-address.tsx": {
    hero: "guides-wallet-address.webp",
    title: "Verify a Crypto Wallet Address Before Sending Funds",
    desc: "Learn essential habits for verifying cryptocurrency wallet addresses to prevent catastrophic losses from typos, clipboard hijackers, and address poison."
  },
  "guides.what-is-a-crypto-cold-wallet-do-you-need-one.tsx": {
    hero: "hot-vs-cold-wallets.webp",
    title: "What Is a Crypto Cold Wallet? Do You Actually Need One?",
    desc: "Learn what a crypto cold wallet is, how hardware storage protects your private keys offline, and whether your cryptocurrency portfolio requires one."
  },
  "guides.what-is-gas-fee-optimization-when-to-send.tsx": {
    hero: "ethereum-gas-fees.webp",
    title: "Gas Fee Optimization: Best Time To Send Transactions",
    desc: null
  },
  "security.address-poisoning-scams-how-they-work.tsx": {
    hero: "phishing-padlock.webp",
    title: "Address Poisoning Scams: How They Work & Avoid Them",
    desc: "Address poisoning is a crypto scam where attackers send zero-value transactions from an address that looks identical to yours. Learn how to stay safe."
  },
  "security.how-to-check-if-smart-contract-is-safe.tsx": {
    hero: "spot-rug-pull.webp",
    title: "Check If a Smart Contract Is Safe Before Interacting",
    desc: "Learn how to verify the safety of a smart contract before interacting. A step-by-step checklist to avoid honeypots, rug pulls, and infinite approvals."
  },
  "security.sim-swap-attacks-crypto-prevention.tsx": {
    hero: "hacked-wallet-emergency.webp",
    title: "SIM Swap Attacks on Crypto Accounts: Prevention Guide",
    desc: "A SIM swap attack allows hackers to bypass SMS 2FA and steal your crypto assets. Learn how this attack works and implement our checklist to prevent it."
  }
};

for (const [filename, fix] of Object.entries(fixes)) {
  const filePath = path.join(srcDir, filename);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 1. Add hero image import if not exists
  if (!content.includes('import hero from')) {
    content = content.replace(
      'import { RelatedArticles } from "@/components/RelatedArticles";',
      `import { RelatedArticles } from "@/components/RelatedArticles";\nimport hero from "@/assets/${fix.hero}";`
    );
  }
  
  // 2. Fix TITLE
  content = content.replace(/const TITLE = "[^"]+";/, `const TITLE = "${fix.title}";`);
  
  // 3. Fix DESC
  if (fix.desc) {
    content = content.replace(/const DESC = "[^"]+";/, `const DESC = "${fix.desc}";`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed ${filename}`);
}
