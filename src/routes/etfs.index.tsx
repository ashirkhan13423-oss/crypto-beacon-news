import { buildMetadata } from "@/lib/metadata";

import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/etfs";
const TITLE = "Crypto ETFs & Institutional Investment | CryptoBeacon";
const DESC = "Learn how spot Bitcoin and Ethereum ETFs operate, examine institutional cash flows and custody models, and evaluate macro market impacts.";

const etfGuides = [
  {
    to: "/bitcoin/how-do-bitcoin-etfs-affect-price",
    tag: "Bitcoin · ETFs",
    title: "How Do Bitcoin ETFs Affect Price? Mechanics & Market Impact",
    desc: "Examine how creation and redemption baskets, authorized participants, and structural spot buying demand influence Bitcoin spot liquidity and pricing."
  },
  {
    to: "/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally",
    tag: "News · Market Flows",
    title: "Bitcoin ETF Outflows & Hawkish Fed Commentary: Market Analysis",
    desc: "How institutional fund flows interact with federal interest rate decisions, macroeconomic sentiment, and short-term market momentum."
  },
  {
    to: "/news/standard-chartered-uae-institutional-bitcoin-ether-trading",
    tag: "News · Institutional Banking",
    title: "Standard Chartered Launches Institutional Bitcoin & Ether Trading",
    desc: "Global investment banking enters crypto spot execution, demonstrating expanding regulated institutional custody and trade rails in the UAE."
  },
  {
    to: "/bitcoin/why-do-bond-yields-affect-bitcoin-price",
    tag: "Macro · Monetary Policy",
    title: "Why Do Bond Yields Affect Bitcoin's Price? Risk-On vs Yield",
    desc: "Understand the mathematical relationship between U.S. Treasury yields, dollar liquidity, cost of capital, and digital asset valuations."
  },
  {
    to: "/news/bitcoin-september-rally-macro-test",
    tag: "News · Macro Analysis",
    title: "Bitcoin September Rally Faces Macroeconomic Test",
    desc: "Analyzing seasonal trading patterns, global central bank liquidity trends, and macroeconomic indicator releases affecting crypto markets."
  }
];

export const Route = createFileRoute("/etfs/")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/etfs', publishedTime: undefined, section: 'ETFs' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "ETFs", item: "https://www.cryptobeacon.site/etfs" }
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }
    ]
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
      <span className="mt-md text-secondary font-medium text-body-md">Read Analysis →</span>
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
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Spot Bitcoin and Ethereum exchange-traded funds (ETFs) represent a transformative bridge connecting traditional capital markets with public blockchains. Approved by major regulatory authorities including the U.S. Securities and Exchange Commission, spot ETFs enable retail and institutional investors to gain audited digital asset exposure through standard brokerage accounts, pension funds, and registered investment advisors without managing cryptographic keys.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Unlike synthetic or derivatives-based products, spot crypto ETFs require custodian trusts to hold physical underlying coins for every outstanding share. CryptoBeacon analyzes the mechanics governing these financial instruments: creation and redemption arbitrage, authorized participant activity, institutional custodian workflows, and broader macroeconomic factors like bond yields and monetary policy. To explore institutional market structure, read our breakdown of <Link to="/bitcoin/how-do-bitcoin-etfs-affect-price" className="text-secondary font-medium hover:underline">how ETFs affect Bitcoin pricing</Link> and our analysis on <Link to="/bitcoin/why-do-bond-yields-affect-bitcoin-price" className="text-secondary font-medium hover:underline">bond yields and digital asset valuation</Link>.
          </p>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            ETF &amp; Institutional Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {etfGuides.map((guide) => (
              <Card key={guide.to} to={guide.to} tag={guide.tag} title={guide.title} desc={guide.desc} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
