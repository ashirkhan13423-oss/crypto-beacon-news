import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/taxes";
const TITLE = "Crypto Taxes — Capital Gains, Income & Reporting | CryptoBeacon";
const DESC = "Educational guides on cryptocurrency taxation — capital gains events, staking income, cost-basis tracking, and how different jurisdictions classify digital a...";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto Taxes",
  url: URL,
  description: DESC,
  hasPart: [
    { "@type": "WebPage", name: "Crypto Tax Basics for Beginners", url: "https://www.cryptobeacon.site/guides/crypto-tax-basics-for-beginners" },
    { "@type": "WebPage", name: "Cryptocurrency Taxes Explained", url: "https://www.cryptobeacon.site/guides/cryptocurrency-taxes-explained" },
    { "@type": "WebPage", name: "Crypto Portfolio Rebalancing Explained", url: "https://www.cryptobeacon.site/guides/crypto-portfolio-rebalancing-explained" },
    { "@type": "WebPage", name: "What Is a Short Squeeze in Crypto?", url: "https://www.cryptobeacon.site/guides/what-is-a-short-squeeze-crypto-explained" },
    { "@type": "WebPage", name: "Stablecoin Regulation Explained", url: "https://www.cryptobeacon.site/guides/stablecoin-regulation-explained" },
    { "@type": "WebPage", name: "What Is the Clarity Act?", url: "https://www.cryptobeacon.site/news/what-is-the-clarity-act-crypto" },
  ],
};

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/taxes/")({ validateSearch: searchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/taxes/index', publishedTime: undefined, section: 'Taxes' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Taxes", item: "https://www.cryptobeacon.site/taxes" }
      ])) }
    ]
  }),
  component: TaxesHub,
});

function Card({ to, tag, title, desc }: { to: string; tag: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="flex flex-col p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all h-full"
    >
      <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">{tag}</span>
      <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">{title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant flex-grow">{desc}</p>
      <span className="mt-md text-secondary font-medium text-body-md">Read →</span>
    </Link>
  );
}

function TaxesHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Crypto Taxes" }]} />

        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto Taxes
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Most cryptocurrency transactions — trades, swaps, staking rewards, spending, and airdrops — create taxable events in most jurisdictions. The specific rules vary significantly by country. CryptoBeacon covers the foundational concepts that apply broadly: what triggers a capital gains event, how short-term and long-term rates typically differ, how staking income is classified, and what records you need to keep. This content is educational. It is not individualized tax advice for your situation.
          </p>
          {/* INTRO COPY SLOT */}
          <div className="mt-lg prose prose-lg dark:prose-invert text-on-surface">
            {/* TODO: Add genuine intro section text here */}
          </div>
          <div className="p-md rounded-lg bg-surface-container border border-outline-variant">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong>Disclaimer:</strong> This section is for educational purposes only and does not constitute individualized tax or legal advice. Tax laws vary by jurisdiction and change frequently. Consult a qualified tax professional regarding your specific situation before filing.
            </p>
          </div>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Tax Basics
          </h2>
          <ArticleGrid category="Taxes" currentPage={page} />
          </section>
      </main>
      <SiteFooter />
    </div>
  );
}
