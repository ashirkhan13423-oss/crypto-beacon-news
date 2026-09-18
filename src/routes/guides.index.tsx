import { createFileRoute } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleGrid } from "@/components/ArticleGrid";
import { BookOpen } from "lucide-react";
import { z } from "zod";

const TITLE = "Cryptocurrency Guides & Explanations — CryptoBeacon";
const DESC = "Comprehensive guides to what cryptocurrency is, the principles of self-custody, wallet management, and securing your digital assets.";
const URL = "https://www.cryptobeacon.site/guides";


const guidesSearchSchema = z.object({
  page: z.number().catch(1).optional().default(1),
});

export const Route = createFileRoute("/guides/")({
  validateSearch: guidesSearchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides', publishedTime: undefined, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Cryptocurrency Guides & Explanations — CryptoBeacon", item: "https://www.cryptobeacon.site/guides" }
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }
    ],
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
            <h1 className="font-display-lg text-display-lg text-primary">Cryptocurrency Guides</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Essential educational references on how <strong>cryptocurrency</strong> works, the
            deeper meaning of <strong>private key custody</strong>, and how to safely manage
            your <strong>digital assets</strong>.
          </p>
        </header>

        <ArticleGrid category="Guides" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
