import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import authorAvatar from "@/assets/ashir.webp";
import generatedMetadata from "@/data/generated-metadata.json";

const WORDS_PER_MINUTE = 200;

function measureArticleReadTime(): string | null {
  if (typeof document === "undefined") return null;
  const article = document.querySelector("article");
  if (!article) return null;

  // Count the actual rendered text of the article body, excluding the author
  // box, nav elements (breadcrumbs/TOC), diagrams, and related-reading blocks.
  const clone = article.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll("[data-rt-exclude], nav, svg, script, style, noscript")
    .forEach((el) => el.remove());

  const text = (clone.textContent ?? "")
    .replace(/&[a-zA-Z#0-9]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return null;
  const words = text.split(" ").length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

interface AuthorProps {
  publishedDate?: React.ReactNode;
  readTime?: string;
}

export function Author({ publishedDate, readTime }: AuthorProps) {
  const location = useLocation();
  const path = location.pathname;

  // Hydration-safe initial value: render the generated read time on both
  // server and first client render, then replace it with the exact value
  // measured from the rendered article body once the page has mounted.
  const generatedMeta = (generatedMetadata as Record<string, { readTime?: string } | undefined>)[
    path
  ];
  const fallbackReadTime = readTime || generatedMeta?.readTime || null;
  const [displayReadTime, setDisplayReadTime] = useState<string | null>(fallbackReadTime);

  useEffect(() => {
    const measured = measureArticleReadTime();
    if (measured) setDisplayReadTime(measured);
  }, []);

  return (
    <div
      data-rt-exclude
      className="mt-md mb-lg flex flex-col sm:flex-row items-start sm:items-center gap-md p-md bg-surface-container-low border border-outline-variant rounded-xl max-w-3xl"
    >
      <img
        src={authorAvatar}
        alt="Ashir Khan"
        className="w-14 h-14 rounded-full object-cover border-2 border-primary-container shrink-0"
      />
      <div className="space-y-xs">
        <div className="flex flex-wrap items-center gap-sm font-body-md text-body-md text-on-surface-variant">
          <span>
            By{" "}
            <Link to="/author" className="text-secondary font-medium hover:underline">
              Ashir Khan
            </Link>
          </span>
          {publishedDate && (
            <>
              <span aria-hidden>·</span>
              {publishedDate}
            </>
          )}
          {displayReadTime && (
            <>
              <span aria-hidden>·</span>
              <span>{displayReadTime}</span>
            </>
          )}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Ashir Khan writes about cryptocurrency security, self-custody, macro market analysis, and
          regulatory policy at CryptoBeacon.
        </p>
      </div>
    </div>
  );
}
