import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/altcoins";
const TITLE = "Altcoins & Stablecoins | CryptoBeacon";
const DESC =
  "Educational guides on stablecoins, altcoin risk mechanics, blockchain forks, and how to evaluate cryptocurrency projects beyond Bitcoin and Ethereum.";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Altcoins & Stablecoins",
  url: URL,
  description: DESC,
  hasPart: [
    { "@type": "WebPage", name: "What Is an Altcoin?", url: "https://www.cryptobeacon.site/altcoins/what-is-an-altcoin" },
    { "@type": "WebPage", name: "What is a Stablecoin?", url: "https://www.cryptobeacon.site/guides/what-is-a-stablecoin" },
    { "@type": "WebPage", name: "Stablecoin Regulation Explained", url: "https://www.cryptobeacon.site/guides/stablecoin-regulation-explained" },
    { "@type": "WebPage", name: "What Is a Blockchain Fork?", url: "https://www.cryptobeacon.site/guides/what-is-a-blockchain-fork" },
    { "@type": "WebPage", name: "What Is a Short Squeeze in Crypto?", url: "https://www.cryptobeacon.site/guides/what-is-a-short-squeeze-crypto-explained" },
    { "@type": "WebPage", name: "How to Spot a Rug Pull", url: "https://www.cryptobeacon.site/security/how-to-spot-a-rug-pull" },
    {
      "@type": "WebPage",
      name: "What is an AI Crypto Token?",
      url: "https://www.cryptobeacon.site/altcoins/what-is-an-ai-crypto-token",
    },
    {
      "@type": "WebPage",
      name: "Why Do Meme Coins Have Value?",
      url: "https://www.cryptobeacon.site/altcoins/why-do-meme-coins-have-value",
    },
  ],
};

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/altcoins/")({ validateSearch: searchSchema,
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
      { rel: "canonical", href: "https://www.cryptobeacon.site/altcoins" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Altcoins" }])) },
    ],
  }),
  component: AltcoinsHub,
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

function AltcoinsHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Altcoins" }]} />

        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Altcoins &amp; Stablecoins
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            "Altcoin" covers every cryptocurrency other than Bitcoin. CryptoBeacon's current coverage in this section focuses on the mechanics that apply broadly across the altcoin market: how stablecoins work and how they're regulated, what happens when a blockchain forks into two competing chains, how short squeezes and leverage affect smaller-cap tokens, and the specific risks — including rug pulls — that are more common in altcoin markets than in Bitcoin or Ethereum. Guides on specific networks (Solana, XRP, Avalanche) are planned for a future update.
          </p>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Getting Started
          </h2>
          <ArticleGrid category="Altcoins" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
