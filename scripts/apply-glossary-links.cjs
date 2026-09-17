const fs = require("fs");
const path = require("path");

const ROUTES_DIR = path.join(__dirname, "../src/routes");

// Hardcoded for script since we can't easily require tsx
const glossaryTerms = [
  { term: "Blockchain", id: "blockchain" },
  { term: "DeFi", id: "defi" },
  { term: "Gas Fees", id: "gas-fees" },
  { term: "Halving", id: "halving" },
  { term: "KYC", id: "kyc" },
  { term: "Lightning Network", id: "lightning-network" },
  { term: "Mining", id: "mining" },
  { term: "Node", id: "node" },
  { term: "Private Key", id: "private-key" },
  { term: "Proof of Stake", id: "proof-of-stake" },
  { term: "Seed Phrase", id: "seed-phrase" },
  { term: "Short Squeeze", id: "short-squeeze" },
  { term: "Smart Contract", id: "smart-contract" },
  { term: "Stablecoin", id: "stablecoin" },
  { term: "Staking", id: "staking" },
  { term: "Wallet", id: "wallet" }
];

function processArticle(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const filename = path.basename(filePath);
  
  if (filename === "__root.tsx" || filename.includes("index") || filename.includes("glossary")) return;

  const usedTerms = new Set();
  let linksAdded = 0;

  // We want to process text inside <P>...</P> or <p>...</p> or <li>...</li>
  // But we need to ensure we don't break existing JSX tags.
  // We'll split the content by <P>, </P>, <p>, </p>, <li>, </li>
  // Actually, a simpler way: find blocks of <[Pp]>...</[Pp]> and process their contents.

  const blockRegex = /(<[pP](?:\s+[^>]*)?>)([\s\S]*?)(<\/[pP]>)/g;

  content = content.replace(blockRegex, (match, openTag, innerText, closeTag) => {
    if (linksAdded >= 8) return match;

    let newInner = innerText;

    // For each term, see if it exists in the innerText
    // We sort terms by length descending so we match "Smart Contract" before "Smart"
    const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);

    for (const t of sortedTerms) {
      if (linksAdded >= 8) break;
      if (usedTerms.has(t.term)) continue;

      // Ensure we don't replace inside an existing tag (like <Link to="..."> or <a href="..."> or <strong>)
      // A safe way to replace text not inside HTML tags:
      // Split by <...>, replace in text segments, join back.
      const parts = newInner.split(/(<[^>]+>)/g);
      let termFoundInThisBlock = false;

      for (let i = 0; i < parts.length; i++) {
        // Even indices are text nodes, odd indices are tags
        if (i % 2 === 0 && !termFoundInThisBlock) {
          // Use word boundaries \b, case insensitive matching
          // Also handle plurals (s)
          const termRegex = new RegExp(`\\b(${t.term}s?)\\b`, "i");
          if (termRegex.test(parts[i])) {
            parts[i] = parts[i].replace(termRegex, (m) => {
              return `<Link to="/glossary#${t.id}" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: ${t.term}">${m}</Link>`;
            });
            usedTerms.add(t.term);
            linksAdded++;
            termFoundInThisBlock = true;
          }
        }
      }
      newInner = parts.join("");
    }

    return openTag + newInner + closeTag;
  });

  if (linksAdded > 0) {
    // Ensure <Link> is imported
    if (!content.includes('import { Link }') && !content.includes('import { Link,')) {
      content = content.replace(/import {/, "import { Link,");
    }
    fs.writeFileSync(filePath, content, "utf-8");
  }
}

function run() {
  const files = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith(".tsx"));
  for (const file of files) {
    processArticle(path.join(ROUTES_DIR, file));
  }
  console.log("Glossary auto-linking complete.");
}

run();
