import { ArticleCard } from "./ArticleCard";
import { Pagination } from "./Pagination";
import { articles } from "@/data/articles";

const ARTICLES_PER_PAGE = 12;

interface ArticleGridProps {
  category?: string;
  currentPage: number;
}

export function ArticleGrid({ category, currentPage }: ArticleGridProps) {
  // Filter by category if provided, otherwise show all
  let filteredArticles = articles;
  if (category) {
    filteredArticles = articles.filter((a) => {
      const cat = a.tag.split("·")[0].trim();
      return cat === category;
    });
  }

  // Sort newest first
  filteredArticles.sort((a, b) => {
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
  });

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  
  // Ensure page is within bounds
  const validPage = Math.max(1, Math.min(currentPage, Math.max(1, totalPages)));
  
  const startIndex = (validPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  return (
    <div id="article-archive">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {paginatedArticles.map((article) => (
          <ArticleCard key={article.to} article={article} />
        ))}
      </div>
      
      {filteredArticles.length === 0 && (
        <div className="py-xxl text-center text-on-surface-variant font-body-lg">
          No articles found in this category.
        </div>
      )}

      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={validPage} />
      )}
    </div>
  );
}
