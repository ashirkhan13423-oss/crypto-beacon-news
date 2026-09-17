import { createFileRoute } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";


const securitySearchSchema = z.object({
  page: z.number().catch(1).optional().default(1),
});

export const Route = createFileRoute("/security/")({
  validateSearch: securitySearchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/index', publishedTime: undefined, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security & Scam Awareness — CryptoBeacon", item: "https://www.cryptobeacon.site/security" }
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
  component: SecurityPage,
});

function SecurityPage() {
  const { page } = Route.useSearch();

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-md">
            Security & Scam Awareness
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Wallet safety, phishing awareness, and rug-pull forensics — peer-reviewed guidance for
            protecting your assets.
          </p>
          {/* INTRO COPY SLOT */}
          <div className="mt-lg prose prose-lg dark:prose-invert text-on-surface">
            {/* TODO: Add genuine intro section text here */}
          </div>
        </header>

        <ArticleGrid category="Security" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
