import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/crypto-regulation-explained-for-beginners";
const TITLE = "Crypto Regulation Explained for Beginners | CryptoBeacon";
const DESC =
  "A plain-language beginner's guide to cryptocurrency regulation — what it means in practice, what it requires of users and exchanges, and what the difference is between regulated and unregulated crypto.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Does crypto regulation mean crypto is becoming centralised?", a: "Regulation targets the on-ramps and off-ramps to crypto (exchanges, custodians, stablecoin issuers) rather than the blockchain protocols themselves. Bitcoin and Ethereum continue to operate as decentralised networks regardless of regulation. What regulation changes is how businesses serving those networks must operate." },
  { q: "What does regulation mean for average crypto users?", a: "Most users experience regulation through KYC requirements on exchanges (ID verification), tax reporting obligations, and sometimes restricted access to certain tokens or products (e.g., derivatives unavailable in your country). Unregulated aspects — running a self-custody wallet, transacting on-chain — are generally not directly affected." },
  { q: "Can governments shut down Bitcoin?", a: "Governments cannot shut down the Bitcoin network directly — it runs on thousands of nodes distributed globally with no central server. What they can do is ban exchanges from operating, prevent banks from serving crypto businesses, and make crypto use legally risky. China is the main example. The network continues to run regardless." },
  { q: "Is it legal to buy and hold crypto?", a: "In the vast majority of countries, yes. Buying, holding, and selling cryptocurrency is legal, subject to applicable tax obligations. A small number of countries have attempted outright bans (China, some others) but even in those jurisdictions, enforcement is imperfect." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Crypto Regulation Explained for Beginners",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "crypto regulation explained beginners, what does crypto regulation mean, is crypto regulated, cryptocurrency regulation simple explanation, regulated vs unregulated crypto",
  articleSection: "Guides",
  wordCount: 800,
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
    { "@type": "ListItem", position: 3, name: "Crypto Regulation for Beginners", item: URL },
  ],
};

export const Route = createFileRoute("/guides/crypto-regulation-explained-for-beginners")({
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
            <li className="text-primary">Crypto Regulation for Beginners</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Beginner
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Crypto Regulation Explained for Beginners
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Cryptocurrency regulation sounds complicated — but its impact on ordinary users is actually quite simple. This guide explains what it means in practice.
        </p>
        <Author />

        <H2 id="what-is">What does 'regulated' actually mean?</H2>
        <P>When people say crypto is "regulated," they usually mean that businesses operating in the crypto space — exchanges, custodians, stablecoin issuers — are required to follow government rules. The rules typically include: verifying who their customers are (KYC), reporting suspicious activity (AML), holding licences, and meeting financial stability requirements.</P>
        <P>Regulation targets the <em>intermediaries</em>, not the blockchains. Bitcoin and Ethereum are open-source protocols that no government controls. Regulation applies to the companies that help people buy, sell, and store crypto.</P>

        <H2 id="what-it-means-for-you">What regulation means for you as a user</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {[
            { title: "On regulated exchanges", items: ["Must verify your identity (KYC)", "Some tokens may not be available in your country", "Suspicious activity may be reported to authorities", "Your transactions are potentially traceable by regulators"], color: "#2563EB" },
            { title: "In self-custody (wallets)", items: ["Generally not directly regulated yet", "You control your assets without intermediaries", "Transacting on-chain is pseudonymous but traceable", "You are still responsible for tax reporting"], color: "#0F9D58" },
          ].map((t) => (
            <div key={t.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-md" style={{ color: t.color }}>{t.title}</h3>
              <ul className="space-y-xs">
                {t.items.map((i) => <li key={i} className="font-body-md text-body-md text-on-surface flex items-start gap-xs"><span className="text-secondary mt-0.5 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <H2 id="kyc">KYC: the most visible regulation for users</H2>
        <P>When you sign up for Coinbase, Binance, Kraken, or any major exchange, you must verify your identity with a government-issued ID and sometimes a selfie. This is KYC (Know Your Customer) — a legal requirement imposed by financial regulators in most countries.</P>
        <P>KYC connects your real identity to your account. This enables tax authorities to cross-reference exchange records, regulators to investigate fraud, and law enforcement to track illicit flows. Learn more: <Link to="/guides/what-is-kyc-in-cryptocurrency" className="text-secondary underline">What Is KYC in Cryptocurrency? →</Link></P>

        <H2 id="taxes">Taxes: everyone's responsibility</H2>
        <P>Regardless of whether the exchange reports your activity, you are generally legally required to report crypto capital gains and income in most jurisdictions. Many countries require this even without a formal exchange reporting system in place. Ignorance is rarely accepted as a defence.</P>
        <P>Learn more: <Link to="/guides/cryptocurrency-taxes-explained" className="text-secondary underline">Cryptocurrency Taxes Explained →</Link></P>

        <H2 id="ban-vs-regulate">Regulation vs ban: the key distinction</H2>
        <P>A ban prohibits owning, trading, or using crypto. China implemented this in 2021. A regulation framework allows crypto activity within defined rules. The US, EU, UK, Singapore, and most developed economies chose regulation, not prohibition. Understanding this distinction matters: regulated does not mean banned, and it does not mean crypto is becoming centralised.</P>

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
            <Link to="/guides/crypto-regulation-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Regulation Hub</h3>
            </Link>
            <Link to="/guides/what-is-kyc-in-cryptocurrency" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is KYC?</h3>
            </Link>
            <Link to="/guides/cryptocurrency-taxes-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Cryptocurrency Taxes Explained</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
