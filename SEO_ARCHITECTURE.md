# CryptoBeacon SEO & Content Architecture

This document outlines the systematic approach to SEO, content structure, and monetization on the CryptoBeacon platform. It describes how the metadata layer, schema builders, internal linking engine, and ad components work together.

## 1. The Metadata Layer

CryptoBeacon relies on a programmatic metadata layer built on top of TanStack Router's `head` API.

**How it works:**
*   Each article defines route-specific constants (`TITLE`, `DESC`, `PUBLISHED`, `MODIFIED`).
*   The `buildMetadata()` function in `src/lib/metadata.ts` generates standardized OpenGraph, Twitter Cards, and canonical tags.
*   **Violations are fatal:** CI (`validate-articles.cjs`) fails if titles aren't 50-60 chars or descriptions aren't 145-155 chars.

## 2. Schema Builders (JSON-LD)

To dominate Google's Rich Results, we use explicit JSON-LD schema generation via `schema-dts`.

**The Builders (`src/lib/schema/builders.ts`):**
*   `buildArticleSchema`: Used on all content. Distinguishes between standard articles and `NewsArticle` (based on the `isNews` flag).
*   `buildFAQSchema`: Automatically builds `FAQPage` schema from an array of Q&A objects. **Rule:** If this schema is present, the `<FAQ />` component MUST be rendered on the page to prevent Google penalties for hidden schema.
*   `buildBreadcrumbSchema`: Links the page into the site hierarchy.
*   `buildOrganizationSchema` / `buildWebSiteSchema`: Injected globally at the root layout.

## 3. The Ad Engine & Density Control

We use Google AdSense, but we strictly manage ad injection to prevent CLS (Cumulative Layout Shift) and avoid ad density penalties.

**The `<ArticleAdSlot />` Component:**
*   Reserves a minimum height (e.g., `min-h-[280px]`) via CSS to prevent content jumping when the ad loads.
*   **Strict Density Policy:**
    *   0 ads allowed on articles under 800 words.
    *   Maximum 1 ad per 500 words.
    *   Absolute maximum of 3 ads per page.
*   CI enforces these limits based on a calculated word count generated prior to build.

## 4. Internal Linking Engine

Internal links are the cheapest ranking lever. CryptoBeacon automates and enforces internal linking.

*   **Contextual Links:** Writers must include at least 3 manual contextual links (`<Link to="...">`) in the body (enforced via `lint-content.cjs`).
*   **Glossary Auto-linking:** The build pipeline can automatically link the *first* occurrence of a glossary term to its definition, preventing manual over-linking spam.
*   **Related Articles:** The `<RelatedArticles />` component acts as a programmatic bottom-of-funnel link layer, passing authority to 3 specified siblings.

## 5. Answer Engine Extraction (`keyTakeaway`)

To rank in AI Overviews (SGE, Perplexity, ChatGPT), every article includes a `keyTakeaway` variable.
*   This is a 25-45 word, self-contained sentence that directly answers the article's core question.
*   It is rendered visually distinct at the top of the article body to maximize extraction likelihood by AI parsers.

## 6. How to Add a New Article

1.  **Create the Route:** Create a new file in `src/routes/` following the naming convention (e.g., `bitcoin.how-to-do-x.tsx`).
2.  **Copy a Template:** Copy an existing article's structure.
3.  **Define Constants:** Set `TITLE`, `DESC`, `PUBLISHED`, `MODIFIED`, and `keyTakeaway`.
4.  **Define FAQs:** Create the `faqs` array and pass it to both `buildFAQSchema` and the `<FAQ />` component.
5.  **Add JSON-LD:** Include `buildArticleSchema` and `buildBreadcrumbSchema` in the route's `head`.
6.  **Write Content:** Ensure >800 words, use standard `<h2>` and `<h3>` tags correctly, and include >3 internal links.
7.  **Validate:** Run `npm run build` locally. If `validate-articles.cjs` or `lint-content.cjs` complains, fix the issues.
