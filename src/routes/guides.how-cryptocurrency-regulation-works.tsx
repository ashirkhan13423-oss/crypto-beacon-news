import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/guides/how-cryptocurrency-regulation-works";
const TITLE = "How Cryptocurrency Regulation Works: Agencies, Frameworks & Jurisdictions | CryptoBeacon";
const DESC = "How does cryptocurrency regulation work? An overview of the key regulatory agencies (SEC, CFTC, FinCEN, FCA, MiCA), how different jurisdictions approach cryp...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "Who regulates cryptocurrency in the US?", a: "Multiple agencies have overlapping jurisdiction. The SEC (Securities and Exchange Commission) claims authority over tokens that qualify as securities. The CFTC (Commodity Futures Trading Commission) regulates crypto derivatives and has asserted Bitcoin and Ethereum are commodities. FinCEN (Financial Crimes Enforcement Network) oversees AML compliance for crypto businesses. The IRS handles crypto taxation." },
  { q: "What is MiCA?", a: "MiCA (Markets in Crypto-Assets Regulation) is the EU's comprehensive crypto regulatory framework, effective from 2024. It covers crypto asset issuers, crypto asset service providers (exchanges, wallets, custodians), stablecoin issuers, and DeFi is partially excluded. MiCA creates a single licensing regime allowing an approved entity to operate across all 27 EU member states." },
  { q: "Why does regulatory clarity matter so much for crypto?", a: "Unclear regulation creates compliance risk for businesses, which often respond by exiting jurisdictions or restricting services. US users, for example, lost access to many tokens and features during the 2023–2025 SEC enforcement wave. Regulatory clarity also enables institutional investment — many traditional funds cannot invest in assets with uncertain legal status." },
  { q: "Is DeFi regulated?", a: "DeFi is largely unregulated but increasingly targeted. The CFTC has taken action against DeFi protocols for offering unregistered derivatives. The EU's MiCA initially excludes 'fully decentralised' protocols but requires the European Commission to assess DeFi by 2025. Regulatory approaches to DeFi are still being developed globally." },
];




export const Route = createFileRoute("/guides/how-cryptocurrency-regulation-works")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/how-cryptocurrency-regulation-works', publishedTime: PUBLISHED, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "How Cryptocurrency Regulation Works: Agencies, Frameworks & Jurisdictions | CryptoBeacon", description: "How does cryptocurrency regulation work? An overview of the key regulatory agencies (SEC, CFTC, FinCEN, FCA, MiCA), how different jurisdictions approach cryp...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/guides/how-cryptocurrency-regulation-works", section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: "How Cryptocurrency Regulation Works: Agencies, Frameworks & Jurisdictions | CryptoBeacon", item: "https://www.cryptobeacon.site/guides/how-cryptocurrency-regulation-works" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

const jurisdictions = [
  { jurisdiction: "United States", approach: "Multi-agency, enforcement-led (SEC, CFTC, FinCEN, IRS). No comprehensive federal crypto law as of 2026, though the GENIUS Act (stablecoins) and FIT21 (market structure) passed the House.", color: "#B91C1C" },
  { jurisdiction: "European Union", approach: "MiCA — the world's first comprehensive crypto framework. Covers CAPs, CASPs, stablecoins. Effective 2024. Passporting across 27 member states.", color: "#1D4ED8" },
  { jurisdiction: "United Kingdom", approach: "FCA-led. Crypto exchanges must register. Stablecoins regulated under the Financial Services and Markets Act 2023. Working towards broader regime.", color: "#047857" },
  { jurisdiction: "Singapore", approach: "MAS-supervised. Payment Services Act licenses crypto businesses. Clear framework with reputation for regulatory pragmatism.", color: "#B45309" },
  { jurisdiction: "UAE / Dubai", approach: "VARA (Virtual Assets Regulatory Authority) in Dubai. Aggressive licensing to attract global crypto businesses. One of the most business-friendly major jurisdictions.", color: "#6D28D9" },
  { jurisdiction: "China", approach: "Comprehensive ban on crypto trading and mining since 2021. Hong Kong operates a separate, permissive regime.", color: "#B91C1C" },
];

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <article>
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">How Crypto Regulation Works</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Overview
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How Cryptocurrency Regulation Works
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Crypto regulation is complex, fragmented, and rapidly evolving. This article maps the agencies, frameworks, and jurisdictions that matter most.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="why">Why crypto gets regulated</H2>
        <P>Governments regulate crypto for several overlapping reasons: preventing money laundering and terrorist financing (AML/CFT), collecting taxes on capital gains, protecting retail consumers from fraud and scams, maintaining financial stability (particularly concerning <Link to="/glossary#stablecoin" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Stablecoin">stablecoins</Link>), and asserting monetary sovereignty. Different regulators emphasise different motivations, which is why approaches vary so much.</P>
        <P>Crucially, crypto regulation does not necessarily mean banning crypto. The vast majority of jurisdictions — including the US, EU, UK, and most developed economies — have chosen to regulate rather than prohibit.</P>

        <H2 id="us-agencies">US regulatory agencies</H2>
        <P>The US has no single crypto regulator, creating a patchwork of overlapping jurisdiction:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li><strong>SEC:</strong> Asserts jurisdiction over tokens that are securities under the Howey Test. Has sued multiple exchanges and token issuers.</li>
          <li><strong>CFTC:</strong> Regulates crypto futures and derivatives. Views Bitcoin and Ethereum as commodities, not securities.</li>
          <li><strong>FinCEN:</strong> Requires crypto businesses to register as Money Services Businesses (MSBs) and comply with Bank Secrecy Act (BSA) AML rules.</li>
          <li><strong>IRS:</strong> Treats crypto as property. Capital gains tax applies to crypto disposals (sales, trades, payments).</li>
          <li><strong>OCC / Fed / FDIC:</strong> Regulate bank interactions with crypto; the ability of banks to custody crypto, hold reserves, etc.</li>
        </ul>

        <H2 id="mica">MiCA: Europe's framework</H2>
        <P>The EU's MiCA regulation is the most comprehensive crypto regulatory framework globally. It establishes:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li>Licensing requirements for Crypto Asset Service Providers (exchanges, custodians, advisors)</li>
          <li>White paper requirements for token issuers (similar to prospectus requirements for securities)</li>
          <li>Strict reserve and redemption requirements for stablecoin issuers (EMTs and ARTs)</li>
          <li>Passporting — one EU license allows operation across all 27 member states</li>
        </ul>
        <P>MiCA does not cover NFTs (yet), <Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link> (partially excluded), or central bank digital currencies (CBDCs). These are being addressed in subsequent legislation.</P>

        <H2 id="global">Global overview</H2>
        <div className="overflow-x-auto rounded-xl border border-outline-variant my-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="p-md font-label-caps text-label-caps text-on-surface-variant">Jurisdiction</th>
                <th className="p-md font-label-caps text-label-caps text-on-surface-variant">Regulatory Approach</th>
              </tr>
            </thead>
            <tbody>
              {jurisdictions.map((j, i) => (
                <tr key={j.jurisdiction} className={`border-b border-outline-variant ${i % 2 === 0 ? "bg-surface-container-lowest" : ""}`}>
                  <td className="p-md font-body-sm text-body-sm font-semibold" style={{ color: j.color }}>{j.jurisdiction}</td>
                  <td className="p-md font-body-sm text-body-sm text-on-surface">{j.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
