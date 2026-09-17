#!/usr/bin/env node
/**
 * validate-articles.cjs
 *
 * Build-time validator. Exits with code 1 if ANY hard rule is violated.
 * Run via: node scripts/validate-articles.cjs
 *
 * Hard rules (build FAILS):
 *   1.  Missing TITLE, DESC, hero image import, PUBLISHED date, or <Author usage
 *   2.  TITLE outside 50-60 characters
 *   3.  DESC outside 145-155 characters
 *   4.  buildArticleSchema() missing required fields
 *   5.  buildFAQSchema present without a visible <FAQ component (or vice-versa)
 *   6.  Ad density violation (more ArticleAdSlots than policy allows)
 *   7.  Heading hierarchy violation (h2 before h1, h3 before h2, multiple h1s)
 *   8.  <img tag with empty or missing alt attribute
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Config ─────────────────────────────────────────────────────────────────
const ROUTES_DIR    = path.join(__dirname, '../src/routes');
const METADATA_FILE = path.join(__dirname, '../src/data/generated-metadata.json');

const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESC_MIN  = 145;
const DESC_MAX  = 155;

// Ad-density policy (must match AdUnit.tsx)
const MIN_WORDS_FOR_ADS = 800;
const WORDS_PER_SLOT    = 500;
const MAX_SLOTS         = 3;

// ─── Helpers ─────────────────────────────────────────────────────────────────
/**
 * Returns true if this route file is a real article (not an index/hub/utility page).
 * Mirrors the logic in generate-metadata.cjs.
 */
const SKIP_FILES = new Set([
  'index.tsx','author.tsx','about.tsx','contact.tsx','privacy.tsx',
  'terms.tsx','search.tsx','disclaimer.tsx','corrections.tsx',
  'editorial-policy.tsx','affiliate-disclosure.tsx',
]);

function isArticleFile(filename) {
  if (SKIP_FILES.has(filename)) return false;
  if (filename.endsWith('.index.tsx')) return false;
  if (filename.startsWith('__')) return false;
  // Single-segment routes like "bitcoin.tsx", "ethereum.tsx" are hubs
  const parts = filename.replace('.tsx','').split('.');
  if (parts.length < 2) return false;
  return true;
}

/** Extract a simple string literal value from `const NAME = "..."` or `const NAME = '...'` */
function extractConst(content, name) {
  // Handles both single-line and DESC spanning two lines with concatenation
  const re = new RegExp(`const\\s+${name}\\s*=\\s*[\\s\\S]*?["\`](.*?)["\`]\\s*;`, 'm');
  const m = content.match(re);
  if (!m) return null;
  return m[1];
}

/** Count occurrences of a pattern in a string */
function countMatches(content, re) {
  return (content.match(re) || []).length;
}

// ─── Load generated word-count data ──────────────────────────────────────────
let generatedMeta = {};
if (fs.existsSync(METADATA_FILE)) {
  generatedMeta = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf8'));
}

function wordCountFor(filename) {
  const parts = filename.replace('.tsx','').split('.');
  const routePath = '/' + parts.join('/');
  return generatedMeta[routePath]?.wordCount ?? null;
}

// ─── Main validation ──────────────────────────────────────────────────────────
const files = fs.readdirSync(ROUTES_DIR)
  .filter(f => f.endsWith('.tsx') && isArticleFile(f))
  .sort();

const errors   = []; // hard failures — exit 1
let   checked  = 0;

for (const file of files) {
  const filePath = path.join(ROUTES_DIR, file);
  const content  = fs.readFileSync(filePath, 'utf8');

  function err(msg) {
    errors.push(`  ✖  ${file}: ${msg}`);
  }

  // ── 1. Required fields ────────────────────────────────────────────────────
  const title     = extractConst(content, 'TITLE');
  const desc      = extractConst(content, 'DESC');
  const published = extractConst(content, 'PUBLISHED');

  if (!title)     err('Missing TITLE constant');
  if (!desc)      err('Missing DESC constant');
  if (!published) err('Missing PUBLISHED constant');

  // Hero image: must have an import of the form `import hero from "@/assets/..."`
  if (!/import\s+hero\s+from\s+["']@\/assets\//.test(content)) {
    err('Missing hero image import (expected: import hero from "@/assets/...")');
  }

  // Author component must be used
  if (!/<Author[\s/>]/.test(content)) {
    err('Missing <Author /> component — article has no author attribution');
  }

  // ── 2. Title character range ───────────────────────────────────────────────
  if (title) {
    if (title.length < TITLE_MIN || title.length > TITLE_MAX) {
      err(`TITLE is ${title.length} chars (must be ${TITLE_MIN}–${TITLE_MAX}): "${title}"`);
    }
  }

  // ── 3. Description character range ────────────────────────────────────────
  if (desc) {
    if (desc.length < DESC_MIN || desc.length > DESC_MAX) {
      err(`DESC is ${desc.length} chars (must be ${DESC_MIN}–${DESC_MAX})`);
    }
  }

  // ── 4. JSON-LD completeness ────────────────────────────────────────────────
  if (/buildArticleSchema\s*\(/.test(content)) {
    // Extract the argument object to check required fields
    const schemaCall = content.match(/buildArticleSchema\s*\(\s*\{([\s\S]*?)\}\s*\)/);
    if (schemaCall) {
      const args = schemaCall[1];
      const required = ['headline', 'description', 'imageUrl', 'datePublished', 'dateModified', 'url', 'section'];
      for (const field of required) {
        if (!args.includes(field + ':') && !args.includes(field + ' :')) {
          err(`buildArticleSchema() is missing required field: "${field}"`);
        }
      }
    }
  } else {
    // Every article should have a schema
    err('Missing buildArticleSchema() call — article has no JSON-LD structured data');
  }

  // ── 5. FAQPage schema ↔ visible FAQ block consistency ─────────────────────
  const hasFaqSchema = /buildFAQSchema\s*\(/.test(content);
  const hasFaqBlock  = /<FAQ[\s\n{/>]/.test(content);

  if (hasFaqSchema && !hasFaqBlock) {
    err('buildFAQSchema() is present but no visible <FAQ component found — FAQPage schema without markup is misleading to crawlers');
  }
  if (hasFaqBlock && !hasFaqSchema) {
    err('<FAQ component is rendered but no buildFAQSchema() call found — visible FAQs must be backed by JSON-LD');
  }

  // ── 6. Ad density ─────────────────────────────────────────────────────────
  const wc = wordCountFor(file);
  const adSlotMatches = content.match(/<ArticleAdSlot\s+slotIndex=\{(\d+)\}/g) || [];
  const adSlotCount   = adSlotMatches.length;

  if (adSlotCount > 0) {
    if (wc !== null && wc < MIN_WORDS_FOR_ADS) {
      err(`Ad slots present on article with only ${wc} words (minimum: ${MIN_WORDS_FOR_ADS}). Remove all <ArticleAdSlot /> components.`);
    }
    if (adSlotCount > MAX_SLOTS) {
      err(`${adSlotCount} ad slots declared (maximum: ${MAX_SLOTS})`);
    }
    if (wc !== null) {
      const allowed = Math.min(MAX_SLOTS, Math.floor(wc / WORDS_PER_SLOT));
      if (adSlotCount > allowed) {
        err(`${adSlotCount} ad slots declared but word count (${wc}) only permits ${allowed} slot(s) (1 per ${WORDS_PER_SLOT} words)`);
      }
    }
  }

  // ── 7. Heading hierarchy ──────────────────────────────────────────────────
  // Extract h1/h2/h3 tags in order of appearance
  const headingRe = /<(h[123])[^>]*>/gi;
  const headings  = [];
  let m;
  while ((m = headingRe.exec(content)) !== null) {
    headings.push(m[1].toLowerCase());
  }
  // Also catch H2/H3 helper component patterns like `<H2` or `<H3`
  const h2helpers = countMatches(content, /<H2[\s\n{/>]/g);
  const h3helpers = countMatches(content, /<H3[\s\n{/>]/g);

  const h1Count = headings.filter(h => h === 'h1').length;
  if (h1Count === 0) {
    err('No <h1> found — every article must have exactly one H1');
  }
  if (h1Count > 1) {
    err(`${h1Count} <h1> tags found — exactly one H1 is required`);
  }

  // Check order: first occurrence of each level
  const firstH1 = headings.indexOf('h1');
  const firstH2 = headings.indexOf('h2');
  const firstH3 = headings.indexOf('h3');

  if (firstH2 !== -1 && firstH1 !== -1 && firstH2 < firstH1) {
    err('<h2> appears before <h1> — heading hierarchy violated');
  }
  if (firstH3 !== -1 && firstH2 === -1 && h2helpers === 0) {
    err('<h3> appears without any preceding <h2> — heading hierarchy violated (h1 → h2 → h3 required)');
  }

  // ── 8. Images missing alt text ────────────────────────────────────────────
  // Find all <img tags and check each for a non-empty alt attribute
  const imgRe = /<img([\s\S]*?)\/>/g;
  while ((m = imgRe.exec(content)) !== null) {
    const attrs = m[1];
    // Check for alt="" (empty) or no alt at all
    const hasAlt = /alt\s*=\s*\{[^}]+\}/.test(attrs) || /alt\s*=\s*"[^"]+"/.test(attrs) || /alt\s*=\s*'[^']+'/.test(attrs);
    const hasEmptyAlt = /alt\s*=\s*["']["']/.test(attrs);
    if (!hasAlt || hasEmptyAlt) {
      // Determine approximate line number
      const before = content.slice(0, m.index);
      const lineNo = before.split('\n').length;
      err(`<img> at line ~${lineNo} is missing a descriptive alt attribute`);
    }
  }

  checked++;
}

// ─── Report ────────────────────────────────────────────────────────────────
console.log(`\n📋 Article validation: checked ${checked} article files\n`);

if (errors.length === 0) {
  console.log('✅ All articles passed validation.\n');
  process.exit(0);
} else {
  console.error(`\n${'═'.repeat(70)}`);
  console.error(`🚨 BUILD FAILED — ${errors.length} validation error(s) found:\n`);
  errors.forEach(e => console.error(e));
  console.error(`\n${'═'.repeat(70)}`);
  console.error(`\nFix all errors above before deploying. See CONTENT_CHECKLIST.md for guidance.\n`);
  process.exit(1);
}
