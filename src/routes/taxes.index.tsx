import { buildMetadata } from "@/lib/metadata";

import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/taxes";
const TITLE = "Crypto Taxes: Capital Gains, Income & Reporting | CryptoBeacon";
const DESC = "Essential crypto tax guides: understand taxable events, cost-basis accounting methods, staking income rules, and regulatory reporting obligations.";

const taxGuides = [
  {
    to: "/guides/crypto-tax-basics-for-beginners",
    tag: "Taxes · Fundamentals",
    title: "Crypto Tax Basics for Beginners: Essential Filing Concepts",
    desc: "A beginner-friendly breakdown of what transactions trigger taxable events, when disposals occur, and how to track cost basis across wallets."
  },
  {
    to: "/guides/cryptocurrency-taxes-explained",
    tag: "Taxes · Capital Gains",
    title: "Cryptocurrency Taxes Explained: Capital Gains vs Income Rules",
    desc: "Understand the critical distinction between capital gains on asset trades versus ordinary income from mining, staking rewards, and airdrops."
  },
  {
    to: "/guides/crypto-portfolio-rebalancing-explained",
    tag: "Guides · Portfolio Management",
    title: "Crypto Portfolio Rebalancing: Tax Implications & Strategies",
    desc: "How adjusting your asset allocation creates taxable disposal events, and how to structure periodic rebalancing methodically."
  },
  {
    to: "/guides/stablecoin-regulation-explained",
    tag: "Regulation · Compliance",
    title: "Stablecoin Regulation Explained: Reserves, Audits & Legal Status",
    desc: "How financial regulators classify fiat-backed and algorithmic stablecoins, tax implications of stablecoin settlements, and yield transparency."
  },
  {
    to: "/news/what-is-the-clarity-act-crypto",
    tag: "Policy · U.S. Legislation",
    title: "What Is the Clarity Act? Proposed U.S. Digital Asset Regulation",
    desc: "An objective examination of legislative efforts to establish jurisdiction between the SEC and CFTC and define regulatory classification."
  },
  {
    to: "/guides/how-crypto-exchanges-are-regulated",
    tag: "Regulation · Exchanges",
    title: "How Crypto Exchanges Are Regulated: Licensing & Tax Reporting",
    desc: "How centralized exchanges report user transactions to tax authorities under Form 1099-DA, CARF, and international reporting frameworks."
  }
];

export const Route = createFileRoute("/taxes/")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/taxes', publishedTime: undefined, section: 'Taxes' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Taxes", item: "https://www.cryptobeacon.site/taxes" }
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
      <span className="mt-md text-secondary font-medium text-body-md">Read Guide →</span>
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
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            In almost every major jurisdiction, cryptocurrency is classified as property or capital assets rather than legal tender. Consequently, everyday transactions — trading one token for another, spending crypto on goods and services, earning proof-of-stake rewards, or receiving airdrops — trigger taxable capital gains or ordinary income recognition events that require accurate record-keeping.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Tax authorities such as the IRS, HMRC, and the Australian Taxation Office increasingly require standardized broker reporting (such as Form 1099-DA in the U.S. and CARF internationally). Our educational guides help you understand how cost-basis methods like FIFO and HIFO work, how staking income is recognized at fair market value upon receipt, and how to maintain auditable transaction logs across wallets. For foundational details, explore <Link to="/guides/crypto-tax-basics-for-beginners" className="text-secondary font-medium hover:underline">crypto tax basics</Link> and our detailed breakdown of <Link to="/guides/cryptocurrency-taxes-explained" className="text-secondary font-medium hover:underline">capital gains vs ordinary income</Link>.
          </p>
          <div className="p-md rounded-lg bg-surface-container border border-outline-variant">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong>Disclaimer:</strong> This section is provided strictly for educational and informational purposes and does not constitute individualized tax, accounting, or legal advice. Digital asset tax laws vary widely by jurisdiction and change frequently. Always consult a qualified, licensed tax professional regarding your personal situation.
            </p>
          </div>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Tax &amp; Regulatory Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {taxGuides.map((guide) => (
              <Card key={guide.to} to={guide.to} tag={guide.tag} title={guide.title} desc={guide.desc} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
