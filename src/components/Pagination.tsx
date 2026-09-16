import { Link, useSearch } from "@tanstack/react-router";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseSearch?: Record<string, any>;
}

export function Pagination({ totalPages, currentPage, baseSearch = {} }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Build page number array with ellipsis
  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    if (!pages.includes(totalPages)) pages.push(totalPages);
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Pagination" className="mt-xxl flex justify-center items-center gap-sm">
      {/* Previous Button */}
      <Link
        from={undefined}
        search={{ ...baseSearch, page: Math.max(1, currentPage - 1) }}
        className={`px-md py-sm rounded-full font-label-caps text-label-caps border transition-all ${
          currentPage === 1
            ? "border-outline-variant text-on-surface-variant opacity-50 pointer-events-none"
            : "border-secondary text-secondary hover:bg-secondary/10"
        }`}
        aria-disabled={currentPage === 1}
      >
        Prev
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-xs">
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`ellipsis-${idx}`} className="px-sm text-on-surface-variant">
                ...
              </span>
            );
          }
          const isCurrent = p === currentPage;
          return (
            <Link
              key={p}
              from={undefined}
              search={{ ...baseSearch, page: p }}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-label-caps text-label-caps transition-all ${
                isCurrent
                  ? "bg-secondary text-on-primary font-bold"
                  : "hover:bg-surface-container-high text-on-surface"
              }`}
              aria-current={isCurrent ? "page" : undefined}
            >
              {p}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      <Link
        from={undefined}
        search={{ ...baseSearch, page: Math.min(totalPages, currentPage + 1) }}
        className={`px-md py-sm rounded-full font-label-caps text-label-caps border transition-all ${
          currentPage === totalPages
            ? "border-outline-variant text-on-surface-variant opacity-50 pointer-events-none"
            : "border-secondary text-secondary hover:bg-secondary/10"
        }`}
        aria-disabled={currentPage === totalPages}
      >
        Next
      </Link>
    </nav>
  );
}
