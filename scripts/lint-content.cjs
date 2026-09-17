#!/usr/bin/env node
/**
 * lint-content.cjs
 *
 * Content quality linter. Prints WARNINGS but exits with code 0 (never blocks build).
 * Run via: node scripts/lint-content.cjs
 *
 * Warnings issued on:
 *   1.  Body word count < 800
 *   2.  Fewer than 4 FAQs defined
 *   3.  keyTakeaway is empty or missing
 *   4.  Fewer than 3 in-body <Link to= internal links
 *   5.  dateModified more than 12 months in the past
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROUTES_DIR    = path.join(__dirname, '../src/routes');
const METADATA_FILE = path.join(__dirname, '../src/data/generated-metadata.json');

const MIN_WORD_COUNT     = 800;
const MIN_FAQS           = 4;
const MIN_INTERNAL_LINKS = 3;
const MAX_MONTHS_STALE   = 12;

// ─── Same skip logic as validate-articles.cjs ────────────────────────────────
const SKIP_FILES = new Set([
  'index.tsx','author.tsx','about.tsx','contact.tsx','privacy.tsx',
  'terms.tsx','search.tsx','disclaimer.tsx','corrections.tsx',
  'editorial-policy.tsx','affiliate-disclosure.tsx',
]);

function isArticleFile(filename) {
  if (SKIP_FILES.has(filename)) return false;
  if (filename.endsWith('.index.tsx')) return false;
  if (filename.startsWith('__')) return false;
  const parts = filename.replace('.tsx','').split('.');
  if (parts.length < 2) return false;
  return true;
}

// ─── Load generated metadata ──────────────────────────────────────────────────
let generatedMeta = {};
if (fs.existsSync(METADATA_FILE)) {
  generatedMeta = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf8'));
}

function routePathFor(filename) {
  return '/' + filename.replace('.tsx','').split('.').join('/');
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const files = fs.readdirSync(ROUTES_DIR)
  .filter(f => f.endsWith('.tsx') && isArticleFile(f))
  .sort();

const warnings = [];
const now      = new Date();
let   checked  = 0;

for (const file of files) {
  const filePath  = path.join(ROUTES_DIR, file);
  const content   = fs.readFileSync(filePath, 'utf8');
  const routePath = routePathFor(file);
  const meta      = generatedMeta[routePath] ?? {};

  function warn(msg) {
    warnings.push(`  ⚠  ${file}: ${msg}`);
  }

  // ── 1. Word count ──────────────────────────────────────────────────────────
  const wc = meta.wordCount ?? null;
  if (wc !== null && wc < MIN_WORD_COUNT) {
    warn(`Body word count is ${wc} (target: ≥ ${MIN_WORD_COUNT}). Thin content ranks poorly.`);
  }

  // ── 2. FAQ count ───────────────────────────────────────────────────────────
  // Count entries in the faqs array by counting `{ q:` occurrences
  const faqEntries = (content.match(/\{\s*q\s*:/g) || []).length;
  if (faqEntries > 0 && faqEntries < MIN_FAQS) {
    warn(`Only ${faqEntries} FAQ(s) defined (target: ≥ ${MIN_FAQS}). More FAQs improve FAQ rich-result eligibility.`);
  }

  // ── 3. keyTakeaway ────────────────────────────────────────────────────────
  const ktMatch = content.match(/let\s+keyTakeaway\s*=\s*["`']([^"`']*)["`']/);
  const ktConst = content.match(/const\s+keyTakeaway\s*=\s*["`']([^"`']*)["`']/);
  const ktValue = (ktMatch?.[1] ?? ktConst?.[1] ?? null);

  if (ktValue === null) {
    warn('keyTakeaway variable not found — add: let keyTakeaway = "Your direct answer here."');
  } else if (ktValue.trim() === '') {
    warn('keyTakeaway is empty — fill it with a 25–45 word direct answer to the article\'s core question. This is the sentence AI systems quote.');
  }

  // ── 4. In-body internal links ─────────────────────────────────────────────
  // Count <Link to="..." inside body (after <Author), excluding nav/breadcrumb/related sections
  // We strip everything before the first <Author usage and after <RelatedArticles or <SiteFooter
  let body = content;
  const authorIdx = content.indexOf('<Author');
  if (authorIdx !== -1) body = content.slice(authorIdx);
  const footerIdx = body.search(/<(SiteFooter|RelatedArticles|Disclaimer\s*\/>)/);
  if (footerIdx !== -1) body = body.slice(0, footerIdx);

  const internalLinks = (body.match(/<Link\s+to=/g) || []).length;
  if (internalLinks < MIN_INTERNAL_LINKS) {
    warn(`Only ${internalLinks} in-body <Link to= internal link(s) found (target: ≥ ${MIN_INTERNAL_LINKS}). Internal links pass ranking authority.`);
  }

  // ── 5. Stale dateModified ─────────────────────────────────────────────────
  const modifiedMatch = content.match(/(?:let|const)\s+MODIFIED\s*=\s*["`'](\d{4}-\d{2}-\d{2})["`']/);
  if (modifiedMatch) {
    const modDate = new Date(modifiedMatch[1]);
    const monthsDiff = (now.getFullYear() - modDate.getFullYear()) * 12
                     + (now.getMonth() - modDate.getMonth());
    if (monthsDiff > MAX_MONTHS_STALE) {
      warn(`dateModified is ${modifiedMatch[1]} (${monthsDiff} months ago). Consider refreshing the content and updating MODIFIED.`);
    }
  }

  checked++;
}

// ─── Report ────────────────────────────────────────────────────────────────
console.log(`\n📝 Content lint: checked ${checked} article files\n`);

if (warnings.length === 0) {
  console.log('✅ No content quality warnings.\n');
} else {
  console.warn(`${'─'.repeat(70)}`);
  console.warn(`⚠  ${warnings.length} content quality warning(s) — these do not block the build\n`);
  console.warn('   Address these before or shortly after publishing:\n');
  warnings.forEach(w => console.warn(w));
  console.warn(`\n${'─'.repeat(70)}\n`);
}

// Always exit 0 — these are warnings, not failures
process.exit(0);
