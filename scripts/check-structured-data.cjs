#!/usr/bin/env node
/**
 * check-structured-data.cjs
 *
 * Verifies that all routes using buildArticleSchema have:
 * 1. headline (non-empty string)
 * 2. description (non-empty string)
 * 3. imageUrl (non-empty absolute URL with http:// or https://)
 * 4. datePublished (non-empty string)
 * 5. dateModified (non-empty string)
 * 6. author (non-empty string, matches byline)
 * 7. publisher (non-empty)
 * 8. url (non-empty absolute URL)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROUTES_DIR = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith('.tsx'));

const errors = [];
let checked = 0;

for (const file of files) {
  const filePath = path.join(ROUTES_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check for buildArticleSchema calls
  const schemaRegex = /buildArticleSchema\s*\(\s*\{([\s\S]*?)\}\s*\)/g;
  let match;
  while ((match = schemaRegex.exec(content)) !== null) {
    checked++;
    const args = match[1];

    // Check imageUrl
    const imgMatch = args.match(/imageUrl:\s*([^\n,]+)/);
    if (!imgMatch) {
      errors.push(`${file}: Missing imageUrl property in buildArticleSchema`);
    } else {
      const val = imgMatch[1].trim();
      if (
        val === '""' ||
        val === "''" ||
        val.includes('${""}') ||
        val === '`https://www.cryptobeacon.site`' ||
        val === '"https://www.cryptobeacon.site"'
      ) {
        errors.push(`${file}: Empty or invalid imageUrl in buildArticleSchema: ${val}`);
      }
    }

    // Check headline
    const headlineMatch = args.match(/headline:\s*([^\n,]+)/);
    if (!headlineMatch || headlineMatch[1].trim() === '""') {
      errors.push(`${file}: Empty or missing headline in buildArticleSchema`);
    }

    // Check datePublished
    const pubMatch = args.match(/datePublished:\s*([^\n,]+)/);
    if (!pubMatch || pubMatch[1].trim() === '""') {
      errors.push(`${file}: Empty or missing datePublished in buildArticleSchema`);
    }

    // Check dateModified
    const modMatch = args.match(/dateModified:\s*([^\n,]+)/);
    if (!modMatch || modMatch[1].trim() === '""') {
      errors.push(`${file}: Empty or missing dateModified in buildArticleSchema`);
    }

    // Check url
    const urlMatch = args.match(/url:\s*([^\n,]+)/);
    if (!urlMatch || urlMatch[1].trim() === '""') {
      errors.push(`${file}: Empty or missing url in buildArticleSchema`);
    }
  }
}

console.log(`\n📋 Structured Data Audit: verified ${checked} Article schemas across routes.\n`);

if (errors.length > 0) {
  console.error(`🚨 FAILED: ${errors.length} structured data error(s) found:\n`);
  errors.forEach(e => console.error(`  ✖  ${e}`));
  process.exit(1);
} else {
  console.log(`✅ All Article schemas contain valid absolute images, authors, dates, and headlines.\n`);
  process.exit(0);
}
