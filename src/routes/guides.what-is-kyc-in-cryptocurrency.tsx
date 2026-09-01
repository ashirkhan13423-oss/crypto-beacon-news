import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/what-is-kyc-in-cryptocurrency";
const TITLE = "What Is KYC in Cryptocurrency? Requirements & Why It Matters | CryptoBeacon";
const DESC =
  "What is KYC (Know Your Customer) in crypto? Learn why cryptocurrency exchanges require ID verification, what documents are needed, and the privacy implications for users.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Can I buy cryptocurrency without KYC?", a: "Yes, but it is becoming increasingly difficult. You can buy crypto without KYC through decentralised exchanges (DEXs) if you already have crypto, peer-to-peer platforms (like Bisq or HodlHodl), or Bitcoin ATMs (though many now require ID). Centralised exchanges with fiat on-ramps almost universally require KYC." },
  { q: "Is it safe to give my ID to a crypto exchange?", a: "Major regulated exchanges (like Coinbase or Kraken) use industry-standard encryption and security for user data. However, data breaches have happened in the past (e.g., Binance, Ledger). There is always some privacy risk when submitting personal documents to third parties." },
  { q: "Why do some exchanges require selfies?", a: "Selfies, often holding your ID and a note with today's date, prove 'liveness' — confirming that the person opening the account is the actual owner of the ID and not a bot or a scammer using stolen documents." },
  { q: "What happens if I refuse KYC?", a: "If you refuse KYC on a centralised exchange, you typically cannot deposit fiat currency (USD, EUR, etc.), and your crypto withdrawals will be severely limited or blocked entirely until verification is completed." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is KYC in Cryptocurrency? Requirements & Why It Matters",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "what is KYC crypto, know your customer cryptocurrency, crypto ID verification, buy crypto without KYC, crypto exchange KYC requirements, crypto privacy KYC",
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
    { "@type": "ListItem", position: 3, name: "What Is KYC in Cryptocurrency?", item: URL },
  ],
};

export const Route = createFileRoute("/guides/what-is-kyc-in-cryptocurrency")({
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
            <li className="text-primary">What Is KYC in Cryptocurrency?</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#8B5CF6] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · KYC
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is KYC in Cryptocurrency?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Why cryptocurrency exchanges require you to upload your ID, what the process involves, and the privacy implications of Know Your Customer laws.
        </p>
        <Author />

        <H2 id="what-is">What is KYC?</H2>
        <P>KYC stands for "Know Your Customer" (or "Know Your Client"). It is a mandatory process of identifying and verifying the identity of a user when opening an account and periodically over time. In the crypto world, KYC usually involves providing your full name, date of birth, address, a government-issued ID (passport or driver's licence), and a live selfie.</P>
        <P>KYC is not a crypto invention. It has been a standard requirement for banks, brokerages, and financial institutions for decades. As crypto exchanges became regulated financial entities, they were forced to adopt the same standard.</P>

        <H2 id="why-required">Why do exchanges require KYC?</H2>
        <P>Cryptocurrency exchanges do not implement KYC because they want to — it adds friction, costs money, and deters users. They do it because the law requires it. KYC is the foundational component of AML (Anti-Money Laundering) regulations.</P>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li><strong>Preventing illicit finance:</strong> Regulators require exchanges to ensure terrorists, sanctioned individuals, and criminals cannot move funds through their platforms.</li>
          <li><strong>Tax compliance:</strong> KYC allows exchanges to report user transactions and balances to national tax authorities (like the IRS).</li>
          <li><strong>Fraud prevention:</strong> Verifying identities reduces the risk of scammers opening accounts with stolen credit cards or identity details.</li>
        </ul>

        <H2 id="tiers">The tier system</H2>
        <P>Many exchanges use a tiered KYC system, where providing more information unlocks higher limits:</P>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-md my-lg">
          {[
            { tier: "Tier 1 (Basic)", reqs: "Email, phone number, basic personal details.", limits: "Often limits to small crypto-only withdrawals. Fiat deposits usually prohibited.", color: "#627EEA" },
            { tier: "Tier 2 (Intermediate)", reqs: "Government ID upload and facial recognition selfie.", limits: "Allows standard fiat deposits/withdrawals and high crypto withdrawal limits.", color: "#8B5CF6" },
            { tier: "Tier 3 (Advanced)", reqs: "Proof of address (utility bill) and sometimes proof of funds.", limits: "Unlocks highest institutional limits and OTC desk access.", color: "#0F9D58" },
          ].map((t) => (
            <div key={t.tier} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-sm" style={{ color: t.color }}>{t.tier}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs"><strong>Requirements:</strong> {t.reqs}</p>
              <p className="font-body-sm text-body-sm text-on-surface"><strong>Limits:</strong> {t.limits}</p>
            </div>
          ))}
        </div>

        <H2 id="privacy">Privacy concerns vs KYC</H2>
        <P>KYC represents a fundamental clash with crypto's original cypherpunk ethos of pseudonymity and financial privacy. The main risks for users include:</P>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li><strong>Data breaches:</strong> If an exchange or its third-party KYC provider is hacked, users' passports and selfies are leaked to the dark web, enabling identity theft.</li>
          <li><strong>De-anonymisation:</strong> Once an exchange links your real identity to your crypto wallet address (via a withdrawal), all subsequent on-chain transactions from that wallet are effectively deanonymised to the exchange and law enforcement.</li>
        </ul>
        <P>For users who prioritise privacy, alternatives like decentralised exchanges (DEXs) exist, but they generally cannot interface with the traditional banking system (fiat currency).</P>

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
            <Link to="/guides/what-is-aml-in-crypto" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is AML in Crypto?</h3>
            </Link>
            <Link to="/guides/crypto-regulation-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Regulation Hub</h3>
            </Link>
            <Link to="/guides/how-crypto-exchanges-are-regulated" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How Crypto Exchanges Are Regulated</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
