import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleGrid } from "@/components/ArticleGrid";
import { BookOpen } from "lucide-react";
import { z } from "zod";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto Guides",
  url: "https://www.cryptobeacon.site/guides",
};

const guidesSearchSchema = z.object({
  page: z.number().catch(1).optional().default(1),
});

export const Route = createFileRoute("/guides/")({
  validateSearch: guidesSearchSchema,
  head: () => ({
    meta: [
      { title: "Crypto Currency Guides & Explanations — CryptoBeacon" },
      {
        name: "description",
        content:
          "Comprehensive guides on what crypto currency is, the true crypto currency meaning behind self-custody, wallet management, and securing your crypto currencies.",
      },
      { property: "og:title", content: "Crypto Currency Guides & Explanations — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Comprehensive guides on what crypto currency is, the true crypto currency meaning, and how to store major crypto currencies safely.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/guides" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/guides" }
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: GuidesHub,
});

function GuidesHub() {
  const { page } = Route.useSearch();

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <BookOpen
                className="text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Crypto Currency Guides</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Essential educational references explaining <strong>what crypto currency is</strong>,
            the deeper <strong>crypto currency meaning</strong> of private key custody, and how to
            safely manage major <strong>crypto currencies</strong>.
          </p>
        </header>

        <ArticleGrid category="Guides" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
