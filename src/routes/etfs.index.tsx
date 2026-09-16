import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/etfs";
const TITLE = "Crypto ETFs & Institutional Investment | CryptoBeacon";
const DESC = "Understand how spot Bitcoin and Ethereum ETFs work mechanically, what drives daily inflow and outflow numbers, and how institutional adoption is changing cry...";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto ETFs & Institutional Investment",
  url: URL,
  description: DESC,
  hasPart: [
    { "@type": "WebPage", name: "How Do Bitcoin ETFs Affect Price?", url: "https://www.cryptobeacon.site/bitcoin/how-do-bitcoin-etfs-affect-price" },
    { "@type": "WebPage", name: "Bitcoin ETF Outflows and Hawkish Fed Speech", url: "https://www.cryptobeacon.site/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally" },
    { "@type": "WebPage", name: "Standard Chartered Launches Institutional BTC/ETH Trading", url: "https://www.cryptobeacon.site/news/standard-chartered-uae-institutional-bitcoin-ether-trading" },
    { "@type": "WebPage", name: "Why Do Bond Yields Affect Bitcoin's Price?", url: "https://www.cryptobeacon.site/bitcoin/why-do-bond-yields-affect-bitcoin-price" },
    { "@type": "WebPage", name: "Bitcoin's September Rally Faces a New Macro Test", url: "https://www.cryptobeacon.site/news/bitcoin-september-rally-macro-test" },
  ],
};

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/etfs/")({ validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/etfs" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "ETFs & Institutional" }])) },
    ],
  }),
  component: EtfsHub,
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

function EtfsHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "ETFs & Institutional" }]} />

        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto ETFs &amp; Institutional Investment
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Spot Bitcoin ETFs — approved in the U.S. in January 2024 — allow investors to gain price exposure to Bitcoin through a standard brokerage account without managing private keys or interacting with a crypto exchange. These products hold actual Bitcoin in custody (unlike earlier futures-based ETFs) and track the spot price through a creation and redemption mechanism. CryptoBeacon covers how these products work mechanically, what drives daily inflow and outflow numbers, and what growing institutional participation means for market structure. We report on the mechanics and the data — not price predictions.
          </p>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            How ETFs Work
          </h2>
          <ArticleGrid category="ETFs" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
