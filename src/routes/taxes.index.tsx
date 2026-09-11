import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/taxes";
const TITLE = "Crypto Taxes — Capital Gains, Income & Reporting | CryptoBeacon";
const DESC =
  "Educational guides on cryptocurrency taxation — capital gains events, staking income, cost-basis tracking, and how different jurisdictions classify digital assets.";

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

export const Route = createFileRoute("/taxes/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Crypto Taxes" }])) },
    ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/guides/crypto-tax-basics-for-beginners"
              tag="Guides · Beginner"
              title="Crypto Tax Basics for Beginners"
              desc="What counts as a taxable event, how capital gains apply to crypto trading, and why trading one cryptocurrency for another triggers a tax liability — covered in plain language."
            />
            <Card
              to="/guides/cryptocurrency-taxes-explained"
              tag="Guides · Explainer"
              title="Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting"
              desc="How capital gains apply to crypto, how staking and airdrop income is typically treated, and what records you need to track your crypto for tax reporting."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Tax Implications of Common Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/guides/crypto-portfolio-rebalancing-explained"
              tag="Guides · Strategy"
              title="Crypto Portfolio Rebalancing Explained"
              desc="Rebalancing your portfolio by selling one asset and buying another triggers capital gains events. This guide walks through the mechanics and the tax math with a worked example."
            />
            <Card
              to="/guides/what-is-a-short-squeeze-crypto-explained"
              tag="Guides · Explainer"
              title="What Is a Short Squeeze in Crypto?"
              desc="Understanding how leveraged positions, margin requirements, and liquidation cascades work — and why each closure event can trigger a capital gains or loss."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Regulation & Reporting Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/guides/stablecoin-regulation-explained"
              tag="Guides · Regulation"
              title="Stablecoin Regulation Explained: Rules, Reserves & MiCA"
              desc="How stablecoins are regulated globally, including reserve requirements, issuer licensing, and MiCA's stablecoin rules — relevant context for stablecoin tax treatment."
            />
            <Card
              to="/news/what-is-the-clarity-act-crypto"
              tag="News · Regulation"
              title="What Is the Clarity Act, and What Would It Actually Change?"
              desc="The proposed U.S. bill that would classify most cryptocurrencies as commodities, with direct implications for how crypto trades and staking income are reported to the IRS."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
