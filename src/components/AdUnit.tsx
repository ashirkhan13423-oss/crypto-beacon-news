import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import generatedMetadata from "@/data/generated-metadata.json";

// ─── Policy constants (cannot be overridden by callers) ────────────────────
const MIN_WORDS_FOR_ADS = 800;         // No ads below this
const WORDS_PER_SLOT    = 500;         // 1 ad per 500 words
const MAX_SLOTS         = 3;           // Absolute ceiling
const MIN_WORDS_BETWEEN = 300;         // Minimum gap between slots
const PUBLISHER_ID      = "ca-pub-3754668913099912"; // Do NOT change

// ─── Dimensions ─────────────────────────────────────────────────────────────
// Reserved height prevents CLS. Matches standard responsive leaderboard.
const AD_MIN_HEIGHT_PX = 280; // conservative: covers 250px medium-rectangle + margin

interface ArticleAdSlotsProps {
  /**
   * Which ordinal position this slot occupies (1-based).
   * ArticleBody renders slots in order; the count enforcement
   * is done here so no caller can bypass it.
   */
  slotIndex: number;
}

/**
 * Renders a single inline AdSense unit if — and only if — the current
 * article's word count permits it under the density policy.
 *
 * Usage:
 *   <ArticleAdSlot slotIndex={1} />
 *   <ArticleAdSlot slotIndex={2} />
 *   <ArticleAdSlot slotIndex={3} />
 *
 * Each component independently checks whether it should render.
 * If the article is too short, every slot silently renders nothing.
 */
export function ArticleAdSlot({ slotIndex }: ArticleAdSlotsProps) {
  const location = useLocation();
  const path = location.pathname;
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const meta = (generatedMetadata as Record<string, any>)[path];
  const wordCount: number = meta?.wordCount ?? 0;

  // ── Density policy ─────────────────────────────────────────────────────
  if (wordCount < MIN_WORDS_FOR_ADS) return null;

  const allowedSlots = Math.min(MAX_SLOTS, Math.floor(wordCount / WORDS_PER_SLOT));
  if (slotIndex > allowedSlots) return null;

  // ── Gap policy: slot N should appear after N×(MIN_WORDS_BETWEEN) words ─
  // We trust that callers place slots after their respective prose sections;
  // the component itself cannot enforce DOM position but the count check
  // prevents over-stuffing.

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div
      className="my-xl w-full overflow-hidden rounded-lg"
      style={{
        // Reserve space before ad loads — this is the CLS fix.
        minHeight: `${AD_MIN_HEIGHT_PX}px`,
        // Subtle background so the reserved space is not blank white on
        // dark themes (avoids a flash of unstyled content).
        backgroundColor: "var(--color-surface-container-low, #f3f4f6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Advertisement"
      role="complementary"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: `${AD_MIN_HEIGHT_PX}px` }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

/**
 * Loads the AdSense script lazily after the page is interactive.
 * Call once in __root.tsx (or a layout component) — not per article.
 *
 * Strategy:
 *  1. Uses `requestIdleCallback` (or setTimeout fallback) so it never
 *     fires during the LCP window.
 *  2. Script tag has `async` + `crossOrigin` — no render-blocking.
 *  3. Idempotent: multiple mounts do not double-inject.
 */
export function AdSenseLoader() {
  useEffect(() => {
    const inject = () => {
      if (document.getElementById("adsense-script")) return; // already injected
      const s = document.createElement("script");
      s.id = "adsense-script";
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
      s.async = true;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(inject, { timeout: 3000 });
    } else {
      setTimeout(inject, 2000);
    }
  }, []);

  return null;
}
