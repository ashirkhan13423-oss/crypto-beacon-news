# Pre-Publish Checklist (CryptoBeacon)

**Before publishing any new article or shipping an update to an existing article, you must check the following. The CI pipeline (`npm run build`) will enforce many of these automatically.**

## 1. Metadata & SEO Basics
- [ ] **Title**: Is between 50-60 characters (`TITLE` constant).
- [ ] **Description**: Is between 145-155 characters (`DESC` constant).
- [ ] **URL**: Is descriptive, uses hyphens, and is all lowercase.
- [ ] **Publish Date**: `PUBLISHED` constant is set accurately (YYYY-MM-DD).
- [ ] **Modified Date**: `MODIFIED` constant is updated if this is a significant rewrite (otherwise matches `PUBLISHED`).

## 2. Article Structure & Content
- [ ] **Hero Image**: Uses `.webp`, is 1600x896, and has a descriptive `alt` attribute.
- [ ] **Author**: `<Author />` component is included with correct date.
- [ ] **Key Takeaway**: `keyTakeaway` constant/variable is a 25-45 word direct answer to the core question (extracted for Answer Engines).
- [ ] **Word Count**: Article body is at least 800 words (thin content ranks poorly).
- [ ] **Headings**: Exact ONE `<h1>` (via standard classes, not component). `<h2>` and `<h3>` components are used in strict hierarchy (no `<h3>` before an `<h2>`).

## 3. Internal Linking
- [ ] **In-Body Links**: At least 3 contextual internal `<Link to="...">` tags exist in the body.
- [ ] **Glossary Links**: Glossary terms are linked automatically on their first occurrence (do not manually link glossary terms in the body).
- [ ] **Related Articles**: `<RelatedArticles />` component is included at the bottom, referencing 3 highly relevant existing articles.

## 4. Ads & Monetization
- [ ] **Ad Density**: Never place more than 1 ad per 500 words. Maximum 3 ads total per article.
- [ ] **Minimum Content for Ads**: No ads on articles under 800 words.

## 5. Schema & Structured Data (JSON-LD)
- [ ] **Article Schema**: `buildArticleSchema` is present in the `head` and fully populated.
- [ ] **Breadcrumb Schema**: `buildBreadcrumbSchema` is present with the correct path.
- [ ] **FAQ Schema**: If there are FAQs, `buildFAQSchema` is present.
- [ ] **FAQ Render**: If `buildFAQSchema` is present, there MUST be a visible `<FAQ />` block rendered in the content for users. Aim for at least 4 FAQs.

## 6. Pre-Flight Verification
Run these locally before committing:
```bash
# Checks hard rules (will fail the build if violated)
node scripts/validate-articles.cjs

# Checks content quality (warns on thin content, etc)
node scripts/lint-content.cjs

# Verifies all internal links resolve correctly
npm run check-links
```
