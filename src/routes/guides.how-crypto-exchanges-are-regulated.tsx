import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/how-crypto-exchanges-are-regulated";
const TITLE = "How Crypto Exchanges Are Regulated: Licensing & Compliance | CryptoBeacon";
const DESC =
  "A guide to how cryptocurrency exchanges are regulated — licensing regimes, geographic restrictions, asset listing rules, and how exchanges handle regulatory compliance.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Why do some exchanges not allow US users?", a: "The US has complex regulatory requirements, and agencies like the SEC and CFTC aggressively enforce against exchanges offering unregistered securities or derivatives. To avoid legal liability and massive fines, many international exchanges (like Binance.com or Bybit) block US users entirely using IP blocking and KYC verification." },
  { q: "What does it mean when an exchange is 'licensed'?", a: "A licensed exchange has applied for and received formal authorisation to operate in a specific jurisdiction. This usually requires proving they have adequate capital, robust cybersecurity, strict KYC/AML processes, and competent management. Examples include a BitLicense in New York or MAS approval in Singapore." },
  { q: "Why do exchanges delist tokens?", a: "Exchanges often delist tokens due to regulatory pressure. If the SEC claims a token is an unregistered security, US exchanges will typically delist it to avoid being accused of facilitating illegal securities trading. They may also delist privacy coins (like Monero) to comply with AML requirements." },
  { q: "Are decentralised exchanges (DEXs) regulated?", a: "Currently, DEXs operate in a regulatory grey area. Because they are self-executing code (smart contracts) with no central company custodying funds, traditional financial regulations are difficult to apply. However, regulators are increasingly targeting the developers who build DEX interfaces or the governance token holders." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Crypto Exchanges Are Regulated: Licensing & Compliance",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "crypto exchange regulation, how are crypto exchanges regulated, crypto exchange licensing, why exchanges delist tokens, crypto exchange US restrictions, regulated vs unregulated exchange",
  articleSection: "Guides",
  wordCount: 850,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.cryptobeacon.site/guides" },
    { "@type": "ListItem", position: 3, name: "How Crypto Exchanges Are Regulated", item: URL },
  ],
};

export const Route = createFileRoute("/guides/how-crypto-exchanges-are-regulated")({
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
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
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
            <li className="text-primary">Exchange Regulation</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Exchanges
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How Crypto Exchanges Are Regulated
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Why your exchange asks for ID, why certain tokens get delisted, and how the global patchwork of licensing shapes the platforms you use.
        </p>
        <Author />

        <H2 id="licensing">The shift from wild west to licensed entities</H2>
        <P>In crypto's early days, exchanges launched globally from offshore jurisdictions with zero oversight. Today, operating a centralised exchange (CEX) requires extensive licensing. Regulators categorise exchanges as Virtual Asset Service Providers (VASPs) or Money Services Businesses (MSBs), bringing them under the umbrella of traditional financial law.</P>

        <H2 id="requirements">What regulators require of exchanges</H2>
        <P>To receive and maintain a license in a major jurisdiction, an exchange must prove compliance in four main areas:</P>
        <ul className="list-disc list-inside space-y-md mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li><strong>AML & KYC:</strong> They must verify the identity of every customer and monitor transactions to prevent money laundering and terrorist financing. <Link to="/guides/what-is-aml-in-crypto" className="text-secondary hover:underline">Learn more about AML</Link>.</li>
          <li><strong>Asset Custody & Segregation:</strong> Post-FTX, regulators demand proof that customer funds are segregated from the exchange's corporate funds and are backed 1:1, often requiring independent Proof of Reserves audits.</li>
          <li><strong>Market Integrity:</strong> The exchange must have surveillance systems to prevent wash trading, spoofing, and market manipulation on their order books.</li>
          <li><strong>Capital Requirements:</strong> Exchanges must hold sufficient capital reserves to survive market downturns without risking user funds.</li>
        </ul>

        <H2 id="geofencing">Geofencing and fragmentation</H2>
        <P>Because regulation varies wildly by country, exchanges use "geofencing" — restricting access based on a user's location (via IP address and KYC data). This leads to a fragmented market:</P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">The "Global" Exchange</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Often based offshore. Offers thousands of tokens, high leverage, and derivatives. Blocks US and UK users entirely to avoid the wrath of the SEC and FCA.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">The "Local" Exchange</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">E.g., Coinbase US or Binance US. Fully licensed locally. Offers fewer tokens, lower leverage, and strict fiat on-ramps to comply with local laws.</p>
          </div>
        </div>

        <H2 id="listing-rules">Token listing and delisting</H2>
        <P>Exchanges do not list tokens purely based on demand. In the US, exchanges are terrified of listing a token that the SEC might later classify as an unregistered security. If they do, they face lawsuits. Therefore, compliance departments heavily vet tokens before listing, and will rapidly delist tokens if regulatory action is taken against the token's founders (e.g., XRP in 2020).</P>
        <P>Similarly, privacy coins like Monero (XMR) have been delisted by numerous exchanges globally because their anonymity features make it impossible for the exchange to comply with the FATF Travel Rule for AML.</P>

        <section className="mt-xxl" aria-label="Frequently asked questions">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-lg cursor-pointer list-none">
                  <span className="font-body-lg text-body-lg text-primary font-semibold pr-md">{f.q}</span>
                  <Plus size={18} className="text-secondary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/guides/how-cryptocurrency-regulation-works" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How Regulation Works</h3>
            </Link>
            <Link to="/guides/what-is-kyc-in-cryptocurrency" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is KYC?</h3>
            </Link>
            <Link to="/guides/what-is-aml-in-crypto" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is AML in Crypto?</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
