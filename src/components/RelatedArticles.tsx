import React from "react";
import { Link } from "@tanstack/react-router";
import { articles } from "@/data/articles";

interface RelatedArticlesProps {
  currentUrl: string;
}

export function RelatedArticles({ currentUrl }: RelatedArticlesProps) {
  const current = articles.find(a => a.to === currentUrl);
  if (!current) return null;

  // Extract the main category from the tag (e.g. "Bitcoin · Explainer" -> "Bitcoin")
  const currentCategory = current.tag ? current.tag.split("·")[0].trim() : "";

  // Scoring algorithm for related articles
  const scored = articles
    .filter(a => a.to !== currentUrl) // Never link to self
    .map(a => {
      let score = 0;
      
      const aCategory = a.tag ? a.tag.split("·")[0].trim() : "";
      
      // 1. Same hub first
      if (aCategory === currentCategory && currentCategory !== "") {
        score += 10;
      }
      
      // 2. Shared exact tag (e.g. "Bitcoin · Wallet")
      if (a.tag === current.tag && current.tag !== "") {
        score += 5;
      }
      
      // 3. Recency (newer gets slight bump to break ties)
      const dateVal = new Date(a.publishedDate).getTime();
      // Add a small fractional score based on date to sort newer first
      score += (dateVal / 10000000000000); 

      return { article: a, score };
    });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Take top 3
  const topRelated = scored.slice(0, 3).map(s => s.article);

  if (topRelated.length === 0) return null;

  return (
    <section data-rt-exclude className="mt-xxl">
      <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {topRelated.map(article => (
          <Link
            key={article.to}
            to={article.to}
            className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
          >
            <span className="font-label-caps text-label-caps text-secondary">
              {article.tag ? article.tag.split("·")[0].trim() : "Article"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
