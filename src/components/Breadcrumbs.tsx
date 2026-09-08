import { Link } from "@tanstack/react-router";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-lg font-label-caps text-label-caps text-on-surface-variant"
    >
      <ol className="flex flex-wrap items-center gap-xs">
        <li>
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-xs">
            <span aria-hidden>/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-secondary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Generate JSON-LD BreadcrumbList schema from breadcrumb items */
export function breadcrumbSchemaFromItems(
  items: BreadcrumbItem[],
  siteUrl = "https://www.cryptobeacon.site"
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.to ? { item: `${siteUrl}${item.to}` } : {}),
      })),
    ],
  };
}
