import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  lazyLoad?: boolean;
}

export function ArticleCard({ article, lazyLoad = true }: ArticleCardProps) {
  // If tag is "Security · Article", split by the bullet to get the sub-category
  const parts = article.tag.split("·").map(s => s.trim());
  const categoryStr = parts.join(" · "); // Normalize spacing

  return (
    <Link
      to={article.to}
      className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
    >
      <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
        {article.image ? (
          <img
            src={article.image}
            alt={article.alt || ""}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading={lazyLoad ? "lazy" : "eager"}
            width={1600}
            height={900}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-container-low text-on-surface-variant font-body-lg">
            <span className="opacity-50">CryptoBeacon</span>
          </div>
        )}
      </div>
      <div className="p-lg">
        <span className="font-label-caps text-label-caps text-secondary font-semibold">
          {categoryStr}
        </span>
        <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary line-clamp-3">
          {article.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
          {article.desc}
        </p>
      </div>
    </Link>
  );
}
