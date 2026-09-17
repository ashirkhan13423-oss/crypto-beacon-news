# CryptoBeacon — Project Rules

## What this project is

CryptoBeacon (www.cryptobeacon.site) is an independent cryptocurrency education
and research site built with Next.js and deployed on Vercel. It has roughly 102
articles across 11 topic hubs: Bitcoin, Ethereum, Security, Guides, News,
Altcoins, Learn, Taxes, DeFi, ETFs, and Glossary.

The sole author is Ashir Khan. The site runs Google AdSense, Google Tag Manager,
and Google Analytics 4.

## The commercial problem being solved

The site currently receives almost no impressions and almost no clicks from
Google Search. The goal of all work in this repo is to make the site
technically and structurally capable of ranking, and of being cited by AI
answer engines.

## Critical context: this is a YMYL site

Cryptocurrency is classified by Google under "Your Money or Your Life" — the
same scrutiny tier as medical and legal content. This has hard consequences
for how you are permitted to work:

- Accuracy is non-negotiable. Never invent a statistic, a fee percentage, a
  date, a block height, or a regulatory claim.
- Never generate or rewrite article body content unless the task explicitly
  asks for it. Structural changes to content are allowed; factual changes
  are not.
- Never fabricate author credentials, review bylines, or expertise claims.
- Never fake or bump a `dateModified` value unless the content genuinely changed
  in that commit.

## Absolute prohibitions

You must never do any of the following, even if it appears to improve a metric:

1. Add FAQPage schema for questions that are not visibly rendered on the page.
   This is a structured-data violation and can trigger a manual penalty.
2. Add Review, Rating, or AggregateRating schema. The site has no reviews.
3. Keyword-stuff any title, description, heading, alt text, or body copy.
4. Generate doorway pages, or programmatically create near-duplicate pages.
5. Hide text via CSS, zero-opacity, off-screen positioning, or color matching.
6. Add any link scheme, link exchange, or automated outbound linking.
7. Mass-generate article text to inflate word counts. Padding is worse than
   being short.
8. Change any legal, disclaimer, editorial policy, or privacy page content.
9. Remove the financial disclaimer from any article.
10. Modify the AdSense publisher ID or GTM container ID.

## Engineering standards

- Prefer a single reusable component or utility over per-page duplication.
  If you find yourself editing the same logic in three files, build an
  abstraction instead.
- All SEO metadata must be generated from one central, typed source of truth.
  No hardcoded meta tags scattered across page files.
- All JSON-LD must be produced by typed helper functions, never handwritten
  inline per page.
- TypeScript strict mode. No `any` in new code.
- No new runtime dependency without stating why an existing one cannot do it.
- Every change must keep `next build` passing. A phase is not complete if the
  build breaks.

## Detect before you assume

Before your first code change, determine and state:
- Next.js version, and whether this is App Router or Pages Router
- How metadata is currently produced (Metadata API, next/head, or a custom layer)
- Where the 102 articles live (MDX files, CMS, JSON, database)
- The exact shape of the article frontmatter or content schema
- Whether a sitemap is generated at build time or served dynamically

Do not write code based on a guess about any of these.

## Definition of done

A task is complete only when:
- `next build` passes with no new warnings
- No TypeScript errors
- You have stated, explicitly, how to verify the change from outside the codebase
- You have listed any file you changed that you were not asked to change