import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto Security & Scam Awareness",
  url: "https://www.cryptobeacon.site/security",
};

const securitySearchSchema = z.object({
  page: z.number().catch(1).optional().default(1),
});

export const Route = createFileRoute("/security/")({
  validateSearch: securitySearchSchema,
  head: () => ({
    meta: [
      { title: "Security & Scam Awareness — CryptoBeacon" },
      {
        name: "description",
        content:
          "Wallet safety, phishing awareness, and rug-pull forensics. Practical crypto security guidance.",
      },
      { property: "og:title", content: "Security & Scam Awareness — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Wallet safety, phishing awareness, and rug-pull forensics. Practical crypto security guidance.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/security" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/security" }
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
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
        </header>

        <ArticleGrid category="Security" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
