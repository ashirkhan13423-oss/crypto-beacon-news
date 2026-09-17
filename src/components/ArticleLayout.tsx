import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, BreadcrumbItem } from "@/components/Breadcrumbs";
import { Author } from "@/components/Author";
import { ArticleAdSlot } from "@/components/AdUnit";
import React, { lazy, Suspense } from "react";

const RelatedArticles = lazy(() => import("@/components/RelatedArticles").then(m => ({ default: m.RelatedArticles })));

interface ArticleLayoutProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage?: string;
  heroAlt?: string;
  tag?: string;
  publishedDate?: string;
  readTime?: string;
  children: React.ReactNode;
}

/**
 * ArticleLayout wraps every article page.
 *
 * Ad slots are injected automatically by ArticleAdSlot — which enforces
 * the density policy (min 800 words, max 3 slots, 1 per 500 words, no slot
 * above first paragraph). No article template needs to place ads manually.
 *
 * Slot positions:
 *   Slot 1 — after the hero image / article header (first natural break)
 *   Slot 2 — mid-article (rendered via children ordering)
 *   Slot 3 — before the footer disclaimer
 *
 * Each slot reserves min-height: 280px before the ad loads → zero CLS.
 */
export function ArticleLayout({
  title,
  description,
  breadcrumbs,
  heroImage,
  heroAlt = "",
  tag,
  publishedDate,
  readTime,
  children,
}: ArticleLayoutProps) {
  // Split children into roughly thirds so slots sit between real content,
  // not above it. For simple articles this just wraps children unchanged.
  const childArray = React.Children.toArray(children);
  const total = childArray.length;

  // Insertion points (as indices into childArray):
  //  After first third  → slot 1
  //  After second third → slot 2
  //  At end             → slot 3
  const third  = Math.max(1, Math.floor(total / 3));
  const twoThird = Math.max(2, Math.floor((2 * total) / 3));

  const before  = childArray.slice(0, third);
  const middle  = childArray.slice(third, twoThird);
  const after   = childArray.slice(twoThird);

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mb-xxl">
          <header className="mb-lg">
            {tag && (
              <span className="font-label-caps text-label-caps text-secondary mb-sm block">
                {tag}
              </span>
            )}
            <h1 className="font-display-lg text-display-lg text-primary mb-md">
              {title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              {description}
            </p>

            <Author publishedDate={publishedDate} readTime={readTime} />

            {heroImage && (
              <div className="my-lg rounded-xl overflow-hidden border border-outline-variant bg-surface-container-low shadow-sm">
                <img
                  src={heroImage}
                  alt={heroAlt}
                  className="w-full h-auto object-cover max-h-[500px]"
                  loading="eager"
                  fetchPriority="high"
                  width={1600}
                  height={896}
                  decoding="async"
                />
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none text-on-surface marker:text-primary prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary prose-img:rounded-xl prose-img:border prose-img:border-outline-variant">
            {/* ── First section of content (no ad above this) ── */}
            {before}

            {/* ── Slot 1: after first natural break, never above first paragraph ── */}
            <ArticleAdSlot slotIndex={1} />

            {/* ── Middle section ── */}
            {middle}

            {/* ── Slot 2: mid-article ── */}
            <ArticleAdSlot slotIndex={2} />

            {/* ── Final section ── */}
            {after}

            {/* ── Slot 3: before end of article (above footer disclaimer) ── */}
            <ArticleAdSlot slotIndex={3} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
