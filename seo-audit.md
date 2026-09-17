# CryptoBeacon Technical SEO Audit

## 1. Architecture Discovery

*   **Framework & Router (BLOCKER / HIGH):** The project rules state this is a Next.js application, but the codebase is actually built with **Vite and TanStack Router** (`@tanstack/react-start` / `@tanstack/react-router`). There is no `next.config.js`. This is a critical discrepancy between documented architecture and actual implementation.
*   **Deployment Config (LOW):** Deployed on Vercel (`vercel.json` present), but also contains Cloudflare (`_headers`, `_redirects`) and Vite-specific configurations.
*   **Article Content Format (MEDIUM):** Articles are not Markdown/MDX or CMS-driven. They are hardcoded as React components directly within individual `.tsx` files in `src/routes/` (e.g., `src/routes/bitcoin.what-is-bitcoin-mining.tsx`).
*   **Frontmatter Schema (HIGH):** There is no unified frontmatter schema. Metadata (title, description, publish date) is defined as local variables (e.g., `const TITLE`, `const DESC`) at the top of every single route file.
*   **Routing (LOW):** Routing maps 1:1 with file names using TanStack Router's file-based routing (`createFileRoute`).

## 2. Metadata Layer

*   **`<title>` and Meta Description (HIGH):** Produced individually inside each file's `head()` method returning a `meta` array.
*   **Source of Truth (BLOCKER):** **Metadata is duplicated per page.** There is no central SEO wrapper or typed layer. Every route manually re-implements `og:title`, `twitter:card`, and schema.
*   **Canonical Tags (HIGH):** Canonicals are present but are hardcoded strings in each file (e.g., `href: "https://www.cryptobeacon.site/bitcoin/what-is-bitcoin-mining"`). A typo could cause severe indexing issues.
*   **Open Graph Image (MEDIUM):** The OG image is static for all pages (`"https://www.cryptobeacon.site/og-image.png"`). It is not generated dynamically per article.
*   **Missing Metadata:** Needs runtime verification for all 102 routes, but structural analysis indicates the pattern is manually copied. Errors are highly likely due to lack of an abstraction layer.

## 3. Structured Data

*   **Inventory (HIGH):** `NewsArticle`, `FAQPage`, and `BreadcrumbList` JSON-LD are manually constructed as JavaScript objects and injected via the `head()` method in each route.
*   **Validity (HIGH):** Because schema is hand-written per page, it relies on the author avoiding typos. `Publisher` and `Author` data are hardcoded in every file instead of imported from a shared constant.
*   **Missing Schemas (MEDIUM):** `WebSite` with `SearchAction`, `Organization`, and standalone `Person` schemas appear to be missing globally.
*   **Visible Content Flag (BLOCKER):** While `FAQPage` schema exists in many articles, you must ensure that every question in the `faqSchema` is explicitly rendered in the DOM. Currently, the `faqs` array is mapped to both schema and DOM, which is good, but fragile.

## 4. Crawlability

*   **Sitemap (HIGH):** `sitemap.xml` exists in `/public/`, but it is a static file (`21KB`). It is not dynamically generated at build time, meaning it will easily fall out of sync with actual routes.
*   **robots.txt (LOW):** Exists. It globally allows all agents (`User-agent: *`, `Allow: /`) and links to the sitemap.
*   **Bot Blockings (BLOCKER):** `robots.txt` does **NOT** block `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Bingbot`, or `Applebot-Extended`. If the goal is to control AI citations or scraping, this is a blocker.
*   **llms.txt (LOW):** An `llms.txt` file exists in the `public` directory.
*   **Noindex (LOW):** Unknown — needs runtime check, though no explicit noindex tags were found in the sampled route heads.

## 5. Content Structure

*   **Read Time (HIGH):** Read time is **hardcoded** in the frontmatter (e.g., `readTime="7 min read"`), not calculated dynamically from body word count.
*   **Ad Slot Insertions (MEDIUM):** Ad slots appear missing or structurally inconsistent in the raw `.tsx` markup. Further runtime checks are needed to determine insertion ratios.
*   **Content Statistics (Sampled List):** 
*(Showing shortest and longest pages based on body word count analysis)*
    *   `/altcoins` - 4 words
    *   `/security/common-crypto-scams` - 90 words
    *   `/security/how-to-verify-a-crypto-transaction` - 617 words
    *   `/bitcoin/what-is-bitcoin-mining` - 805 words
    *   `/security/how-to-store-crypto-seed-phrase-safely` - 1,607 words

*(Note: Articles under 300 words should be flagged for "thin content" risks on a YMYL site).*

## 6. Semantic HTML

*   **H1 Tags (MEDIUM):** Pages use custom `<H2>` components for subheadings, and a standard `<h1>` for the main title. 
*   **Semantic Wrappers (HIGH):** Content relies heavily on `<div>` and `<main>`. Explicit `<article>` wrappers are missing in the analyzed layouts.
*   **Tables and Lists (LOW):** Needs comprehensive runtime check, but manual `<ul>` elements are used in articles.

## 7. Internal Linking

*   **In-Body Links (HIGH):** Very sparse. Many articles have 2 or fewer internal links in the body content. 
*   **Orphan Pages (BLOCKER):** Because links are manually coded into paragraphs, establishing a precise orphan list requires an AST parser or crawler. However, structural analysis indicates high likelihood of orphaned content due to lack of a global taxonomy or CMS relationship mapping.

---

## Execution Recommendations & Feedback

**Feedback on Phased Plan:** I strongly advise pausing any Next.js specific optimizations, as the repository is entirely built on **Vite and TanStack Router**. You must either migrate to Next.js (if the documented rules are the strict desired state) or update the technical strategy to target TanStack Router's server-side rendering (SSR) and metadata paradigms.

**Recommended Execution Order:**
1.  **BLOCKER:** Resolve the framework discrepancy (Next.js vs TanStack Router).
2.  **BLOCKER:** Centralize SEO metadata. Create a wrapper component or utility function to generate `<title>`, `<meta>`, canonicals, and JSON-LD from a single typed source of truth.
3.  **BLOCKER:** Automate `sitemap.xml` generation based on the TanStack route tree.
4.  **HIGH:** Update `robots.txt` to explicitly manage AI crawler bots.
5.  **HIGH:** Calculate "read time" dynamically based on body word count to avoid hardcoded inaccuracies.
