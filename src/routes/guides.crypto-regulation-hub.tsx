import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Scale, Globe, FileText, Shield, Building2, DollarSign, AlertTriangle, BookOpen } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/crypto-regulation-hub";
const TITLE = "Cryptocurrency Regulation Hub: Complete Guide | CryptoBeacon";
const DESC =
  "The definitive cryptocurrency regulation hub — how crypto regulation works globally, KYC and AML explained, stablecoin laws, exchange licensing, crypto taxes, and why regulation matters for investors.";
const PUBLISHED = "2026-09-01";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cryptocurrency Regulation Hub: Complete Guide",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "cryptocurrency regulation hub, crypto regulation explained, KYC AML crypto, stablecoin regulation, crypto exchange licensing, cryptocurrency taxes explained",
  articleSection: "Guides",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.cryptobeacon.site/guides" },
    { "@type": "ListItem", position: 3, name: "Crypto Regulation Hub", item: URL },
  ],
};

const sections = [
  { icon: <Globe size={20} />, title: "How Cryptocurrency Regulation Works", desc: "Why crypto is regulated, which agencies are involved, and how the regulatory patchwork of jurisdictions fits together globally.", to: "/guides/how-cryptocurrency-regulation-works", tag: "Overview", color: "#2563EB" },
  { icon: <BookOpen size={20} />, title: "Crypto Regulation for Beginners", desc: "A plain-language introduction to what cryptocurrency regulation means in practice, without the legal jargon.", to: "/guides/crypto-regulation-explained-for-beginners", tag: "Beginner", color: "#0F9D58" },
  { icon: <Shield size={20} />, title: "What Is KYC in Cryptocurrency?", desc: "Know Your Customer explained — what it requires from exchanges, why it exists, and what it means for your privacy.", to: "/guides/what-is-kyc-in-cryptocurrency", tag: "KYC", color: "#8B5CF6" },
  { icon: <FileText size={20} />, title: "What Is AML in Crypto?", desc: "Anti-Money Laundering rules for crypto platforms — FATF, travel rule, transaction monitoring, and what exchanges must report.", to: "/guides/what-is-aml-in-crypto", tag: "AML", color: "#F59E0B" },
  { icon: <DollarSign size={20} />, title: "Stablecoin Regulation Explained", desc: "How governments are regulating stablecoins — reserve requirements, issuer licensing, the MiCA framework, and the US GENIUS Act.", to: "/guides/stablecoin-regulation-explained", tag: "Stablecoins", color: "#0F9D58" },
  { icon: <Building2 size={20} />, title: "How Crypto Exchanges Are Regulated", desc: "Exchange licensing, jurisdiction-shopping, delisting tokens for regulatory compliance, and the global race to regulate CEXes.", to: "/guides/how-crypto-exchanges-are-regulated", tag: "Exchanges", color: "#2563EB" },
  { icon: <DollarSign size={20} />, title: "Cryptocurrency Taxes Explained", desc: "Capital gains, income events, crypto-to-crypto trades, staking rewards, hard forks — a practical tax primer for crypto holders.", to: "/guides/cryptocurrency-taxes-explained", tag: "Taxes", color: "#EF4444" },
  { icon: <AlertTriangle size={20} />, title: "Crypto Regulation vs Crypto Ban", desc: "The difference between regulation and a ban, which countries have banned crypto, and why most governments chose regulation.", to: "/guides/crypto-regulation-vs-cryptocurrency-ban", tag: "Policy", color: "#F59E0B" },
  { icon: <Scale size={20} />, title: "Why Crypto Regulation Matters", desc: "How regulation affects exchange access, token availability, institutional adoption, and what it means for long-term investors.", to: "/guides/why-crypto-regulation-matters", tag: "Analysis", color: "#8B5CF6" },
  { icon: <Globe size={20} />, title: "Why Governments Regulate Cryptocurrency", desc: "The policy motivations behind crypto regulation — financial stability, tax compliance, AML, consumer protection, and national security.", to: "/news/why-governments-regulate-cryptocurrency", tag: "Policy", color: "#2563EB" },
];

export const Route = createFileRoute("/guides/crypto-regulation-hub")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Guides" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Crypto Regulation Hub</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
          Guides · Hub
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mb-md leading-tight">
          Cryptocurrency Regulation Hub
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl max-w-3xl">
          Regulation is the single biggest external force shaping crypto markets. This hub covers how it works, what it requires of exchanges and users, and what it means for long-term holders and investors.
        </p>
        <Author />

        <div className="my-xl p-lg rounded-xl border border-[#2563EB]/30 bg-[#2563EB]/5">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">The landscape in one paragraph</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Crypto regulation differs significantly by jurisdiction. The US applies existing securities and commodities law through the SEC, CFTC, and FinCEN. The EU enacted MiCA — the first comprehensive crypto framework globally. Jurisdictions like Singapore, Dubai, and the UK have created bespoke licensing regimes. A few countries have banned crypto entirely. Understanding this landscape matters enormously for where you trade, what tokens you can access, and how your holdings are taxed.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg text-primary mb-lg">All regulation guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="group flex gap-md p-lg rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: s.color + "20", color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-secondary">{s.tag}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-xs mb-xs group-hover:underline decoration-secondary">{s.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Legal Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This hub is for informational and educational purposes only. Regulation evolves rapidly. Nothing here constitutes legal or financial advice. Consult a qualified professional for your specific jurisdiction and situation.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
