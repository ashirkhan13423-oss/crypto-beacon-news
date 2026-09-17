import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    // Only run on the client after mount. We query the DOM for H2 and H3 elements inside the main content area.
    const elements = Array.from(document.querySelectorAll("main h2, main h3"));
    
    // We only care about headings that have an ID (which we'll ensure they do)
    const tocItems: TOCItem[] = elements
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      }));

    setHeadings(tocItems);
  }, []);

  if (headings.length === 0) {
    return null; // Don't render if there are no headings (e.g. short articles)
  }

  return (
    <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low" aria-label="Table of contents">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
        Table of Contents
      </h2>
      <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={heading.level === 3 ? "ml-md list-none text-on-surface-variant before:content-['—_']" : ""}
          >
            <a 
              href={`#${heading.id}`} 
              className="hover:underline decoration-secondary"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
