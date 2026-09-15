/**
 * audit-sept12.js
 * Scans all Sept 12 2026 articles for:
 *   - Repeated paragraphs (identical <P> or <p> text blocks)
 *   - Identical Key Takeaways sections
 *   - Identical FAQ entries (same q or same a across files or within a file)
 *   - Duplicated sections (identical H2/H3 heading + content blocks)
 */

import { readFileSync } from "fs";
import { basename } from "path";

const files = [
  "src/routes/security.how-to-spot-a-fake-crypto-wallet-app.tsx",
  "src/routes/security.what-is-a-crypto-atm-are-they-safe.tsx",
  "src/routes/news.why-are-crypto-atms-everywhere.tsx",
  "src/routes/news.what-is-on-chain-trading-vs-exchange.tsx",
  "src/routes/news.trezor-brevo-phishing-email-breach-2026.tsx",
  "src/routes/guides.what-is-a-smart-contract-explained.tsx",
  "src/routes/guides.coin-vs-token-difference.tsx",
  "src/routes/ethereum.what-is-an-erc-20-token.tsx",
  "src/routes/ethereum.how-does-ethereum-staking-work.tsx",
  "src/routes/bitcoin.why-bitcoin-mining-uses-so-much-energy.tsx",
  "src/routes/bitcoin.how-does-bitcoin-halving-work.tsx",
  "src/routes/altcoins.why-do-meme-coins-have-value.tsx",
  "src/routes/altcoins.what-is-an-altcoin.tsx",
  "src/routes/altcoins.what-is-an-ai-crypto-token.tsx",
];

// Normalize whitespace for comparison
function norm(s) {
  return s.replace(/\s+/g, " ").trim();
}

// Extract paragraph text blocks (lines between > tags that look like body text)
function extractParagraphs(content) {
  const paragraphs = [];
  // Match JSX paragraph content: text between > and </ on potentially multiple lines
  // Simpler approach: find all string literals and JSX text blocks
  const lines = content.split("\n");
  let currentP = "";
  let inP = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    // Detect paragraph-like components
    if (trimmed.match(/<P>|<p\s/) && !trimmed.match(/<\/P>|<\/p>/)) {
      inP = true;
      currentP = trimmed;
    } else if (inP) {
      currentP += " " + trimmed;
      if (trimmed.match(/<\/P>|<\/p>/)) {
        inP = false;
        const text = norm(currentP.replace(/<[^>]+>/g, "").replace(/\{["' ]\}/g, " "));
        if (text.length > 40) {
          paragraphs.push(text);
        }
        currentP = "";
      }
    } else if (trimmed.match(/<P>/) && trimmed.match(/<\/P>/)) {
      const text = norm(trimmed.replace(/<[^>]+>/g, "").replace(/\{["' ]\}/g, " "));
      if (text.length > 40) {
        paragraphs.push(text);
      }
    }
  }
  return paragraphs;
}

// Extract FAQ entries
function extractFAQs(content) {
  const faqs = [];
  // Pattern: { q: "...", a: "..." }
  const faqRegex = /\{\s*q:\s*"([^"]+)"\s*,\s*a:\s*"([^"]+)"\s*\}/g;
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    faqs.push({ q: match[1], a: match[2] });
  }
  return faqs;
}

// Extract Key Takeaways (look for "Key Takeaway" heading followed by list items)
function extractKeyTakeaways(content) {
  const takeaways = [];
  const lines = content.split("\n");
  let inTakeaways = false;
  
  for (const line of lines) {
    if (line.includes("Key Takeaway") || line.includes("key-takeaway")) {
      inTakeaways = true;
      continue;
    }
    if (inTakeaways) {
      if (line.includes("</li>") || line.includes("<li>") || line.includes("<li")) {
        const text = norm(line.replace(/<[^>]+>/g, "").replace(/\{["' ]\}/g, " "));
        if (text.length > 10) {
          takeaways.push(text);
        }
      }
      // End of takeaways section
      if (line.match(/<\/div>/) && !line.includes("<li")) {
        if (takeaways.length > 0) break;
      }
      if (line.match(/<H2|<h2/) && !line.includes("Key Takeaway")) {
        break;
      }
    }
  }
  return takeaways;
}

// Extract H2 section headings
function extractH2Headings(content) {
  const headings = [];
  const h2Regex = /<H2[^>]*>([^<]*(?:<[^/][^>]*>[^<]*)*)<\/H2>/g;
  let match;
  while ((match = h2Regex.exec(content)) !== null) {
    headings.push(norm(match[1].replace(/<[^>]+>/g, "")));
  }
  // Also try lowercase h2
  const h2Lower = /id="([^"]+)"[^>]*>([^<]+)/g;
  while ((match = h2Lower.exec(content)) !== null) {
    const text = norm(match[2]);
    if (text.length > 5 && !headings.includes(text)) {
      headings.push(text);
    }
  }
  return headings;
}

console.log("=" .repeat(80));
console.log("AUDIT: September 12, 2026 Articles — Duplicate Content Scan");
console.log("=".repeat(80));
console.log();

const allData = [];

for (const filePath of files) {
  const content = readFileSync(filePath, "utf-8");
  const name = basename(filePath, ".tsx");
  const paragraphs = extractParagraphs(content);
  const faqs = extractFAQs(content);
  const takeaways = extractKeyTakeaways(content);
  const headings = extractH2Headings(content);
  
  allData.push({ name, filePath, paragraphs, faqs, takeaways, headings, content });
}

// === WITHIN-FILE ANALYSIS ===
console.log("─".repeat(80));
console.log("1. WITHIN-FILE DUPLICATE PARAGRAPHS");
console.log("─".repeat(80));

for (const article of allData) {
  const seen = new Map();
  const dupes = [];
  for (const p of article.paragraphs) {
    const key = p.toLowerCase();
    if (seen.has(key)) {
      dupes.push(p.substring(0, 80) + "...");
    } else {
      seen.set(key, true);
    }
  }
  if (dupes.length > 0) {
    console.log(`\n⚠️  ${article.name}`);
    console.log(`   ${dupes.length} repeated paragraph(s):`);
    for (const d of dupes) {
      console.log(`     → "${d}"`);
    }
  }
}

// === CROSS-FILE ANALYSIS ===
console.log("\n" + "─".repeat(80));
console.log("2. CROSS-FILE IDENTICAL PARAGRAPHS (same paragraph in 2+ articles)");
console.log("─".repeat(80));

const paragraphIndex = new Map();
for (const article of allData) {
  for (const p of article.paragraphs) {
    const key = p.toLowerCase();
    if (!paragraphIndex.has(key)) {
      paragraphIndex.set(key, []);
    }
    const existing = paragraphIndex.get(key);
    if (!existing.includes(article.name)) {
      existing.push(article.name);
    }
  }
}

let crossParaDupes = 0;
for (const [text, articles] of paragraphIndex) {
  if (articles.length > 1) {
    crossParaDupes++;
    console.log(`\n⚠️  Shared across ${articles.length} articles:`);
    console.log(`   Text: "${text.substring(0, 100)}..."`);
    for (const a of articles) {
      console.log(`     → ${a}`);
    }
  }
}
if (crossParaDupes === 0) console.log("\n   ✅ No cross-file paragraph duplicates found.");

// === FAQ ANALYSIS ===
console.log("\n" + "─".repeat(80));
console.log("3. IDENTICAL FAQs (same question or answer across articles)");
console.log("─".repeat(80));

const faqQIndex = new Map();
const faqAIndex = new Map();
for (const article of allData) {
  for (const faq of article.faqs) {
    const qKey = faq.q.toLowerCase();
    const aKey = faq.a.toLowerCase().substring(0, 100);
    
    if (!faqQIndex.has(qKey)) faqQIndex.set(qKey, []);
    if (!faqQIndex.get(qKey).includes(article.name)) faqQIndex.get(qKey).push(article.name);
    
    if (!faqAIndex.has(aKey)) faqAIndex.set(aKey, []);
    if (!faqAIndex.get(aKey).includes(article.name)) faqAIndex.get(aKey).push(article.name);
  }
  
  // Within-file FAQ dupes
  const seenQ = new Set();
  for (const faq of article.faqs) {
    const qKey = faq.q.toLowerCase();
    if (seenQ.has(qKey)) {
      console.log(`\n⚠️  ${article.name} — DUPLICATE FAQ question within file:`);
      console.log(`   Q: "${faq.q}"`);
    }
    seenQ.add(qKey);
  }
}

let crossFAQDupes = 0;
for (const [q, articles] of faqQIndex) {
  if (articles.length > 1) {
    crossFAQDupes++;
    console.log(`\n⚠️  Same FAQ question in ${articles.length} articles:`);
    console.log(`   Q: "${q}"`);
    for (const a of articles) console.log(`     → ${a}`);
  }
}
if (crossFAQDupes === 0) console.log("\n   ✅ No cross-file FAQ duplicates found.");

// === KEY TAKEAWAYS ANALYSIS ===
console.log("\n" + "─".repeat(80));
console.log("4. IDENTICAL KEY TAKEAWAYS");
console.log("─".repeat(80));

const takeawayIndex = new Map();
for (const article of allData) {
  if (article.takeaways.length === 0) continue;
  const key = article.takeaways.map(t => t.toLowerCase()).join("|||");
  if (!takeawayIndex.has(key)) takeawayIndex.set(key, []);
  takeawayIndex.get(key).push(article.name);
}

let identicalTakeaways = 0;
for (const [key, articles] of takeawayIndex) {
  if (articles.length > 1) {
    identicalTakeaways++;
    console.log(`\n⚠️  IDENTICAL Key Takeaways block shared by ${articles.length} articles:`);
    for (const a of articles) console.log(`     → ${a}`);
    console.log(`   Content: "${key.substring(0, 150)}..."`);
  }
}

// Also check individual takeaway items cross-file
const singleTakeawayIndex = new Map();
for (const article of allData) {
  for (const t of article.takeaways) {
    const key = t.toLowerCase();
    if (!singleTakeawayIndex.has(key)) singleTakeawayIndex.set(key, []);
    if (!singleTakeawayIndex.get(key).includes(article.name)) {
      singleTakeawayIndex.get(key).push(article.name);
    }
  }
}

for (const [text, articles] of singleTakeawayIndex) {
  if (articles.length > 1) {
    identicalTakeaways++;
    console.log(`\n⚠️  Same takeaway bullet in ${articles.length} articles:`);
    console.log(`   "${text.substring(0, 120)}..."`);
    for (const a of articles) console.log(`     → ${a}`);
  }
}

if (identicalTakeaways === 0) console.log("\n   ✅ No identical takeaways found.");

// === SECTION HEADING ANALYSIS ===
console.log("\n" + "─".repeat(80));
console.log("5. DUPLICATED SECTION HEADINGS (same H2 across articles)");
console.log("─".repeat(80));

const headingIndex = new Map();
for (const article of allData) {
  for (const h of article.headings) {
    const key = h.toLowerCase();
    if (key.length < 10) continue; // skip generic short headings
    if (!headingIndex.has(key)) headingIndex.set(key, []);
    if (!headingIndex.get(key).includes(article.name)) {
      headingIndex.get(key).push(article.name);
    }
  }
}

let headingDupes = 0;
for (const [heading, articles] of headingIndex) {
  if (articles.length > 1) {
    headingDupes++;
    console.log(`\n⚠️  Heading "${heading}" appears in ${articles.length} articles:`);
    for (const a of articles) console.log(`     → ${a}`);
  }
}
if (headingDupes === 0) console.log("\n   ✅ No cross-file heading duplicates found.");

// === LARGE-BLOCK DUPLICATION CHECK ===
console.log("\n" + "─".repeat(80));
console.log("6. LARGE CONTENT BLOCK DUPLICATION (200+ char identical blocks)");
console.log("─".repeat(80));

// Extract all substantial text blocks (200+ chars, stripped of JSX)
function extractTextBlocks(content) {
  const blocks = [];
  // Split by section markers or large gaps
  const sections = content.split(/(?=<H2|<h2|{\/\*.*─)/);
  for (const section of sections) {
    const text = norm(section.replace(/<[^>]+>/g, "").replace(/\{[^}]*\}/g, " "));
    if (text.length > 200) {
      blocks.push(text.substring(0, 300));
    }
  }
  return blocks;
}

const blockIndex = new Map();
for (const article of allData) {
  const blocks = extractTextBlocks(article.content);
  for (const block of blocks) {
    const key = block.toLowerCase();
    if (!blockIndex.has(key)) blockIndex.set(key, []);
    if (!blockIndex.get(key).includes(article.name)) {
      blockIndex.get(key).push(article.name);
    }
  }
}

let blockDupes = 0;
for (const [text, articles] of blockIndex) {
  if (articles.length > 1) {
    blockDupes++;
    console.log(`\n⚠️  Identical block in ${articles.length} articles:`);
    console.log(`   "${text.substring(0, 120)}..."`);
    for (const a of articles) console.log(`     → ${a}`);
  }
}
if (blockDupes === 0) console.log("\n   ✅ No large block duplicates found.");

// === FINAL CLASSIFICATION ===
console.log("\n" + "=".repeat(80));
console.log("CLASSIFICATION SUMMARY");
console.log("=".repeat(80));

const issues = new Map();
for (const article of allData) {
  issues.set(article.name, []);
}

// Re-check within-file paragraph dupes
for (const article of allData) {
  const seen = new Set();
  for (const p of article.paragraphs) {
    const key = p.toLowerCase();
    if (seen.has(key)) {
      issues.get(article.name).push("repeated-paragraph-within");
    }
    seen.add(key);
  }
}

// Cross-file paragraph dupes
for (const [, articles] of paragraphIndex) {
  if (articles.length > 1) {
    for (const a of articles) {
      issues.get(a).push("cross-file-paragraph-dupe");
    }
  }
}

// Cross-file FAQ dupes  
for (const [, articles] of faqQIndex) {
  if (articles.length > 1) {
    for (const a of articles) {
      if (issues.has(a)) issues.get(a).push("cross-file-faq-dupe");
    }
  }
}

// Heading dupes
for (const [, articles] of headingIndex) {
  if (articles.length > 1) {
    for (const a of articles) {
      if (issues.has(a)) issues.get(a).push("cross-file-heading-dupe");
    }
  }
}

console.log();
for (const [name, issueList] of issues) {
  const unique = [...new Set(issueList)];
  let status;
  if (unique.includes("repeated-paragraph-within")) {
    status = "BROKEN";
  } else if (unique.length > 1) {
    status = "PARTIALLY AFFECTED";
  } else if (unique.length === 1) {
    status = "PARTIALLY AFFECTED";
  } else {
    status = "CLEAN";
  }
  
  const route = name.replace(/\./g, "/");
  const url = `https://www.cryptobeacon.site/${route}`;
  console.log(`${status.padEnd(20)} ${url}`);
  if (unique.length > 0) {
    console.log(`${"".padEnd(20)} Issues: ${unique.join(", ")}`);
  }
}

console.log("\n" + "=".repeat(80));
console.log("END OF AUDIT");
console.log("=".repeat(80));
