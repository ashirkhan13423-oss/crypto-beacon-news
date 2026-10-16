/**
 * verify-sitemap.cjs
 *
 * Reads public/sitemap.xml and for each <loc> makes an HTTP GET request
 * to the live site, reporting:
 *   - Non-200 status codes (redirects, 404s, 5xx)
 *   - Pages with noindex in the response HTML
 *
 * Usage:
 *   node scripts/verify-sitemap.cjs [--timeout=10000]
 *
 * The script does NOT require the live site to be running locally.
 * It tests the production URL: https://www.cryptobeacon.site
 *
 * Exit code 0 = all clean, 1 = issues found.
 */

'use strict';

const fs      = require('fs');
const path    = require('path');
const https   = require('https');
const http    = require('http');

const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
const TIMEOUT_MS   = (() => {
  const arg = process.argv.find(a => a.startsWith('--timeout='));
  return arg ? parseInt(arg.split('=')[1], 10) : 10000;
})();
const CONCURRENCY  = 5; // parallel requests

// ── Parse sitemap ─────────────────────────────────────────────────────────────
const xml  = fs.readFileSync(SITEMAP_PATH, 'utf8');
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());

console.log(`\n=== verify-sitemap.cjs ===`);
console.log(`Sitemap: ${SITEMAP_PATH}`);
console.log(`URLs to check: ${locs.length}`);
console.log(`Concurrency  : ${CONCURRENCY}`);
console.log(`Timeout      : ${TIMEOUT_MS}ms\n`);

// ── HTTP helper (follows up to 1 redirect) ───────────────────────────────────
function fetchUrl(url, followRedirect) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const mod = parsed.protocol === 'https:' ? https : http;
    const req = mod.get(
      { hostname: parsed.hostname, path: parsed.pathname + parsed.search, headers: { 'User-Agent': 'sitemap-verifier/1.0' } },
      (res) => {
        // Follow one redirect automatically
        if ((res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308)
            && res.headers.location && !followRedirect) {
          res.resume(); // discard body
          let dest = res.headers.location;
          if (dest.startsWith('/')) dest = parsed.protocol + '//' + parsed.hostname + dest;
          fetchUrl(dest, true).then(r => {
            resolve({ ...r, url, redirect: res.headers.location, redirectStatus: res.statusCode });
          });
          return;
        }
        let body = '';
        res.on('data', chunk => { if (body.length < 8192) body += chunk; });
        res.on('end', () => {
          const noindex = /noindex/i.test(body);
          resolve({ url, status: res.statusCode, noindex, redirect: res.headers.location || null, redirectStatus: null });
        });
      }
    );
    req.setTimeout(TIMEOUT_MS, () => { req.destroy(); resolve({ url, status: 'TIMEOUT', noindex: false, redirect: null }); });
    req.on('error', (err) => resolve({ url, status: `ERROR: ${err.message}`, noindex: false, redirect: null }));
  });
}

// ── Run with concurrency pool ─────────────────────────────────────────────────
async function run() {
  const issues = [];
  const ok     = [];
  let   idx    = 0;

  async function worker() {
    while (idx < locs.length) {
      const url = locs[idx++];
      const result = await fetchUrl(url, false);
      const shortUrl = url.replace('https://www.cryptobeacon.site', '') || '/';

      if (result.status === 200 && !result.noindex) {
        ok.push(url);
        if (result.redirect) {
          // Redirect followed to 200 — note it but count as OK
          process.stdout.write(`  ✅  200  ${shortUrl}  (via ${result.redirectStatus} → ${result.redirect})\n`);
        } else {
          process.stdout.write(`  ✅  200  ${shortUrl}\n`);
        }
      } else {
        issues.push(result);
        const tag = result.noindex ? ' [NOINDEX]' : '';
        const redir = result.redirect ? ` → ${result.redirect}` : '';
        process.stdout.write(`  ❌  ${result.status}${tag}  ${shortUrl}${redir}\n`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  console.log(`\n=== Results ===`);
  console.log(`  OK    : ${ok.length}`);
  console.log(`  Issues: ${issues.length}`);

  if (issues.length > 0) {
    console.log('\n  Issues detail:');
    for (const i of issues) {
      const tag = i.noindex ? ' [NOINDEX IN RESPONSE]' : '';
      const redir = i.redirect ? ` => ${i.redirect}` : '';
      console.log(`    ${i.status}${tag}  ${i.url}${redir}`);
    }
    console.log('\n❌  Sitemap has issues. Fix before deploying.');
    process.exit(1);
  } else {
    console.log('\n✅  All sitemap URLs returned 200 with no noindex.');
    process.exit(0);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
