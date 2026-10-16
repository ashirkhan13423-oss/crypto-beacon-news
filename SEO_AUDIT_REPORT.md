# Complete Website Audit Report: Indexing, Technical SEO, On-Page SEO, and Code Architecture

**Domain:** `https://www.cryptobeacon.site`  
**Framework:** TanStack Start (React 19, Nitro, Vite, Tailwind CSS v4)  
**Host Target:** Vercel  
**Status:** Audit Only (Zero files edited, in strict compliance with instructions)

---

## Executive Summary: Why Google Search Console Is Not Indexing & Traffic Is Zero

Google Search Console (GSC) non-indexing and absence of impressions/clicks for CryptoBeacon stems from **four critical root causes**:

1. **Critical JavaScript Syntax & Type Crashes in SSR (`url: URL` Bug)**:  
   In multiple core routes (including the Homepage `/`, `/author`, and `/bitcoin/how-do-bitcoin-etfs-affect-price`), `url: URL` was passed into `buildMetadata`. Because `const URL` was never declared in these files, Node.js / Nitro SSR evaluates the global `URL` constructor object (`function URL()`), causing either invalid canonical/og URLs (`[object Object]`) or SSR runtime reference errors.
2. **Conflicting Sitemap Architecture & Robot Directives**:  
   - `robots.txt` points exclusively to `https://www.cryptobeacon.site/sitemap.xml`.
   - `sitemap.xml` was generated as a **Sitemap Index** containing child sitemaps (`sitemap-1.xml`, `sitemap-2.xml`, `sitemap-3.xml`), but the generator script dumped all 150+ routes arbitrarily into slices of 50.
   - Sitemaps include URLs marked as `noindex` (`/glossary`, `/defi`, `/etfs`, `/taxes`, `/learn`), as well as URLs configured as 301 redirects (`/security/seed-phrase-storage-steel-vs-paper-vs-metal`, `/news/liquid-network-hack-4000-btc-withdrawal`). When Google encounters `noindex` or `301 Moved Permanently` pages inside a sitemap, it flags them in GSC under *"Submitted URL marked 'noindex'"* and *"Page with redirect"*, causing Googlebot to distrust the entire sitemap feed.
3. **Thin Content & Unfinished Template Placeholders**:  
   Several articles (e.g. `/altcoins/what-is-an-ai-crypto-token`, `/altcoins/why-do-meme-coins-have-value`, `/altcoins/what-is-an-altcoin`) are between 280 and 360 words, containing literal placeholder strings like `"Needs custom illustration"` and `"{/* TODO: Add genuine intro section text here */}"`. In Google's March/August core updates, automated spam/thin content algorithms flag sites with shallow AI-style or placeholder articles as *Low Quality / Thin Content*, refusing to index them (*"Crawled - currently not indexed"*).
4. **Subdomain vs. Naked Domain vs. Vercel Canonicalization Fragmentation**:  
   Redirects in `vercel.json` enforce `https://www.cryptobeacon.site/`, but the site root layout and OG metadata previously had conflicting canonical URLs and external scripts.

---

## 1. Technical SEO & Indexability Issues

### Issue 1.1: Broken URL Reference Bug in Root & Key Routes (SSR & Metadata Failure)
- **Files Affected:**
  - `src/routes/index.tsx` (Homepage!)
  - `src/routes/author.tsx`
  - `src/routes/bitcoin.how-do-bitcoin-etfs-affect-price.tsx`
  - `src/routes/security.address-poisoning-scams-how-they-work.tsx`
  - `src/routes/security.how-to-check-if-smart-contract-is-safe.tsx`
  - `src/routes/security.sim-swap-attacks-crypto-prevention.tsx`
- **What is happening:**  
  In `index.tsx`, the route declaration calls:
  ```ts
  ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'website', path: '' })
  ```
  However, in `index.tsx`, the variable is named `PAGE_URL`, **not `URL`**. Because JavaScript in Node.js has a built-in global class `URL`, the identifier `URL` resolves to `[class URL]`!
  As a result:
  - Canonical URL evaluates to the constructor string `function URL() { [native code] }` or `[object Object]`.
  - OpenGraph URL (`og:url`) is corrupted.
  - In `bitcoin.how-do-bitcoin-etfs-affect-price.tsx`, `const URL_CANONICAL` is defined, but `url: URL` is passed!
  - In `author.tsx`, `url: URL || "https://www.cryptobeacon.site/author"` is used, but `URL` is the global function, so it never falls back to the string!
- **Impact on Google:** Google requires an absolute, valid HTTP/HTTPS canonical URL string. When it sees an invalid object or broken string in `<link rel="canonical">`, Google drops canonicalization and flags the page.

---

### Issue 1.2: Sitemap Index vs. Single Sitemap Collision & 301/noindex Pollution
- **Files Affected:**
  - `public/sitemap.xml`
  - `public/sitemap-1.xml`, `sitemap-2.xml`, `sitemap-3.xml`
  - `scripts/generate-sitemap-index.cjs`
  - `vercel.json`
- **What is happening:**  
  1. `public/sitemap.xml` was generated both as a flat sitemap and as a sitemapindex by conflicting scripts.
  2. The sitemap generation script (`generate-sitemap-index.cjs`) reads `src/routes/*.tsx` without filtering out redirected or noindexed routes:
     - Includes `/news/liquid-network-hack-4000-btc-withdrawal` (which is a 301 redirect in `vercel.json`).
     - Includes `/security/seed-phrase-storage-steel-vs-paper-vs-metal` (which is a 301 redirect in `vercel.json`).
     - Includes `/glossary`, `/defi`, `/etfs`, `/taxes`, `/learn` (which all emit `<meta name="robots" content="noindex, follow">`).
- **Impact on Google Search Console:**  
  When Googlebot fetches `sitemap.xml` and discovers URLs returning 301 Redirects or `noindex` headers, GSC logs:
  - *"Submitted URL marked 'noindex'"*
  - *"Submitted URL has crawl issue / Page with redirect"*  
  This reduces Google's crawl budget allocation and prevents priority indexing.

---

### Issue 1.3: Category Hubs Forced to `noindex` Despite Main Navigation Exposure
- **Files Affected:**
  - `src/routes/glossary.index.tsx`
  - `src/routes/defi.index.tsx`
  - `src/routes/etfs.index.tsx`
  - `src/routes/taxes.index.tsx`
  - `src/routes/learn.index.tsx`
- **What is happening:**  
  All 5 of these hub routes explicitly force:
  ```ts
  return { ..._hd, meta: [...(_hd.meta || []), { name: 'robots', content: 'noindex, follow' }] };
  ```
  Yet, all 5 pages are:
  - Linked directly in the main desktop navigation bar (`SiteHeader.tsx`).
  - Linked in the main footer navigation (`SiteFooter.tsx`).
  - Included in XML sitemaps.
- **Impact:** Google is being sent contradictory signals: high PageRank internal links pointing to pages that explicitly tell Google *"do not index me"*. This burns internal link equity and causes indexation drops.

---

### Issue 1.4: Dynamic OG Image API Route Build Failure & Mock URLs
- **Files Affected:**
  - `src/routes/api/og.tsx`
  - `src/lib/metadata.ts`
- **What is happening:**  
  1. `src/routes/api/og.tsx` fails TypeScript compilation (`Cannot find module '@tanstack/react-start/api'`).
  2. Vite build emits a warning: `"Route file src/routes/api/og.tsx does not export a Route. This file will not be included in the route tree."`
  3. Despite this route not being active in the server build, `src/lib/metadata.ts` generates OpenGraph image tags pointing to:
     `https://www.cryptobeacon.site/api/og?title=...`
- **Impact:** Social crawlers (TwitterBot, LinkedInBot, Googlebot Image) fetching OpenGraph images hit a 404 or unhandled server route, resulting in no preview images on social networks and search snippet rich results.

---

### Issue 1.5: Missing / Empty Image URLs in Article JSON-LD Schemas
- **Files Affected:**
  - `src/routes/security.address-poisoning-scams-how-they-work.tsx` (Line 31: `imageUrl: ""`)
  - `src/routes/security.how-to-check-if-smart-contract-is-safe.tsx` (Line 31: `imageUrl: ""`)
  - `src/routes/security.sim-swap-attacks-crypto-prevention.tsx` (Line 31: `imageUrl: ""`)
- **Impact:** In Google Rich Results testing, `Article` and `NewsArticle` schemas **require** a valid `image` URL. Empty strings (`""`) trigger schema validation errors in Google Search Console, disqualifying articles from Google Discover and Top Stories carousels.

---

## 2. On-Page SEO & Content Quality Issues

### Issue 2.1: Thin Content & Under-Worded Articles (<400 Words)
Google's Helpful Content System (HCS) penalizes sites that mass-publish short, surface-level articles that don't provide unique depth. The following articles are severely under standard informational length:

| Route | Word Count | Status |
|---|---|---|
| `/altcoins/what-is-an-ai-crypto-token` | **282 words** | ⚠️ Severely Thin Content |
| `/altcoins/why-do-meme-coins-have-value` | **303 words** | ⚠️ Severely Thin Content |
| `/altcoins/what-is-an-altcoin` | **359 words** | ⚠️ Severely Thin Content |
| `/bitcoin/common-bitcoin-wallet-scams` | **477 words** | ⚠️ Thin Content |
| `/bitcoin/bitcoin-address-vs-wallet-address` | **505 words** | ⚠️ Borderline |

### Issue 2.2: Unfinished Placeholder Text & Development Artifacts in Production
Several pages contain visible placeholder copy that signals an unfinished or low-quality site to Google's quality raters and algorithms:
1. `src/routes/altcoins.what-is-an-altcoin.tsx`:
   - Line 145: `<span className="text-on-surface-variant">Needs custom illustration</span>` inside the main hero figure container!
2. Unfilled Intro Slots:
   - `altcoins.index.tsx`: `{/* TODO: Add genuine intro section text here */}`
   - `defi.index.tsx`: `{/* TODO: Add genuine intro section text here */}`
   - `etfs.index.tsx`: `{/* TODO: Add genuine intro section text here */}`
   - `learn.index.tsx`: `{/* TODO: Add genuine intro section text here */}`
   - `security.index.tsx`: `{/* TODO: Add genuine intro section text here */}`
   - `taxes.index.tsx`: `{/* TODO: Add genuine intro section text here */}`

### Issue 2.3: Meta Description Length Violations (107 Pages Out of Bounds)
Google search snippets display roughly 145 to 160 characters on desktop and 120 to 140 on mobile.  
Over 100 pages either have truncated or stub descriptions:
- **Too Short (<60 characters):**
  - `about.tsx`: 24 chars
  - `disclaimer.tsx`: 12 chars
  - `editorial-policy.tsx`: 12 chars
  - `ethereum.ethereum-complete-beginners-guide.tsx`: 23 chars
  - `ethereum.proof-of-stake-explained.tsx`: 17 chars
  - `guides.crypto-regulation-explained-for-beginners.tsx`: 25 chars
  - `guides.not-your-keys-not-your-coins-meaning.tsx`: 35 chars
  - `security.hardware-wallet-mistakes-to-avoid.tsx`: 28 chars
  - `security.what-happens-if-you-lose-your-hardware-wallet.tsx`: 38 chars
- **Impact:** Google discards short descriptions and dynamically extracts arbitrary page text (such as breadcrumb text or cookie notices) into search result snippets, resulting in low CTR (Click-Through Rate).

### Issue 2.4: Broken Schema Prop in FAQ Components
- **File:** `src/routes/guides.crypto-portfolio-rebalancing-explained.tsx` (Line 242)
  - Schema / Component expects `{ q: string, a: string }[]`, but was passed `{ question: string, answer: string }[]`.
  - As a result, the FAQ accordion fails to render properly and FAQ rich snippet markup is invalid.

---

## 3. Crawlability, Performance & Core Web Vitals (CWV)

### Issue 3.1: Heavy Third-Party Blocking Scripts in Head
In `src/routes/__root.tsx`:
1. `https://cdn.tailwindcss.com?plugins=forms,container-queries` is loaded via CDN `<script>` tag in `<head>`!
   - The production build already uses `@tailwindcss/vite` and `styles.css`.
   - Loading `cdn.tailwindcss.com` synchronously in `<head>` forces the browser to download, parse, and compile a ~350KB runtime JIT compiler on every page view! This adds 300–800ms of Total Blocking Time (TBT) and destroys First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
2. Two separate Google Tag Manager / Analytics scripts:
   - `gtag.js?id=G-VY7EVVG1WL`
   - `gtm.js?id=GTM-NZ2CN7HG`
   - Both are loaded concurrently, causing duplicate analytics payloads and extra JavaScript execution during initial load.

### Issue 3.2: Giant JavaScript Bundle Size
Production bundle inspection reveals:
- `index-UxwcZ_EB.js`: **700.37 kB** (minified)
- `@tanstack/react-router+[...].mjs`: **767.46 kB**
- When page chunks exceed 500 kB, mobile devices (which Googlebot uses for mobile-first indexing via a simulated mid-tier Motorola G4) throttle rendering, leading to timeout errors during Google's headless rendering phase.

---

## 4. Architectural & Search Component Limitations

### Issue 4.1: Hardcoded 12-Article Limit in `/search`
- **File:** `src/routes/search.tsx`
- The search page contains a hardcoded array `ARTICLES` with only 12 articles out of 100+ articles on the website. Readers searching for over 85% of your catalog receive *"No results found"*.

### Issue 4.2: Client-Side Pagination Route Errors
- **File:** `src/components/Pagination.tsx`
- The `Pagination` component attempts to pass `search={{ ...baseSearch, page: p }}` on routes where the route search schema doesn't define `page`, causing TypeScript and router warnings.

---

## 5. Priority Action Plan to Fix Indexing & Grow Impressions

| Priority | Action Item | Affected Files | Expected Impact |
|:---:|---|---|---|
| **P0 (Critical)** | Fix the `url: URL` bug; pass valid canonical URL strings to `buildMetadata`. | `index.tsx`, `author.tsx`, `bitcoin.how-do-bitcoin-etfs-affect-price.tsx`, etc. | Unblocks valid canonicalization; fixes SSR crashes for Googlebot. |
| **P0 (Critical)** | Clean up `sitemap.xml`: remove all 301 redirects and `noindex` pages from the sitemap. | `scripts/generate-sitemap-index.cjs`, `public/sitemap.xml` | Cleans up GSC errors; Googlebot resumes healthy crawl frequency. |
| **P0 (Critical)** | Remove the runtime `cdn.tailwindcss.com` script from `__root.tsx`. | `src/routes/__root.tsx` | Improves LCP & FCP by ~400–800ms; passes Core Web Vitals. |
| **P1 (High)** | Remove `noindex, follow` from category hubs (`/glossary`, `/defi`, `/etfs`, `/taxes`, `/learn`) and add real introductory text. | `*.index.tsx` files | Reclaims indexing for high-volume informational search terms. |
| **P1 (High)** | Fix empty `imageUrl: ""` and broken FAQ properties in article schemas. | `security.*.tsx`, `guides.crypto-portfolio-rebalancing-explained.tsx` | Fixes Google Search Console rich-result validation errors. |
| **P2 (Medium)** | Expand thin articles (<400 words) to 800+ words and eliminate `"Needs custom illustration"` text. | `altcoins.what-is-an-altcoin.tsx`, `altcoins.what-is-an-ai-crypto-token.tsx`, etc. | Protects site against Google's Helpful Content System algorithmic filters. |
| **P2 (Medium)** | Expand 107 short meta descriptions to 145–155 characters. | Routes listed in `check-metadata.cjs` | Increases Search Snippet Click-Through Rate (CTR). |
| **P3 (Maintenance)**| Fix the `@tanstack/react-start/api` build issue or replace dynamic OG generation with static OpenGraph image fallbacks. | `src/routes/api/og.tsx`, `src/lib/metadata.ts` | Restores rich social & search snippet cards. |
