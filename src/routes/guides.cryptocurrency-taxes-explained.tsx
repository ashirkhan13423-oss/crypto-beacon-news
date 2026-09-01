import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/cryptocurrency-taxes-explained";
const TITLE = "Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting | CryptoBeacon";
const DESC =
  "A beginner-friendly guide to cryptocurrency taxes. Learn how capital gains apply to crypto trading, how staking and airdrops are taxed as income, and how to track your crypto for tax reporting.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Is buying and holding crypto a taxable event?", a: "No. Simply buying cryptocurrency with fiat (like USD or EUR) and holding it in your wallet or exchange account is not a taxable event. Taxes only apply when you dispose of the asset (sell, trade, or spend it)." },
  { q: "Do I have to pay taxes if I trade one crypto for another?", a: "Yes. In most jurisdictions (including the US, UK, and Australia), trading one cryptocurrency for another (e.g., trading Bitcoin for Ethereum) is a taxable event. It is treated as selling the first asset for its fiat value, and using that fiat to buy the second. You owe capital gains on the profit made on the first asset." },
  { q: "How are crypto airdrops taxed?", a: "In most tax jurisdictions, airdrops are taxed as ordinary income based on their fair market value on the day you receive them. When you eventually sell the airdropped tokens, any increase in value from the day you received them is taxed as capital gains." },
  { q: "Will the tax authority know about my crypto?", a: "Yes. Major exchanges are legally required to report user activity to tax authorities (e.g., the IRS uses Form 1099). Furthermore, blockchains are public; tax authorities use blockchain analytics tools to trace funds moving from exchanges to private wallets." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "cryptocurrency taxes explained, crypto capital gains tax, is crypto crypto trading taxed, how are airdrops taxed, crypto tax reporting, IRS crypto tax",
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
    { "@type": "ListItem", position: 3, name: "Cryptocurrency Taxes Explained", item: URL },
  ],
};

export const Route = createFileRoute("/guides/cryptocurrency-taxes-explained")({
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
            <li className="text-primary">Crypto Taxes Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#EF4444] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Taxes
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Cryptocurrency Taxes Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          A practical primer on how crypto is taxed. Disclaimer: We are a news site, not tax professionals. Tax rules vary by country; this guide covers the general principles applied by agencies like the IRS, HMRC, and ATO.
        </p>
        <Author />

        <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant my-lg">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <strong>Key Concept:</strong> Tax authorities generally treat cryptocurrency as "property" (like stocks or real estate), not as currency. This classification dictates how it is taxed.
          </p>
        </div>

        <H2 id="non-taxable">What is NOT taxed</H2>
        <P>You do not owe tax simply for participating in crypto. The following actions are generally non-taxable events:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li>Buying crypto with fiat currency (USD, EUR, etc.)</li>
          <li>Holding crypto in your wallet or on an exchange (even if the price goes up 1000%)</li>
          <li>Transferring crypto between your own wallets (e.g., from an exchange to your hardware wallet)</li>
        </ul>

        <H2 id="capital-gains">Capital Gains (Disposals)</H2>
        <P>Taxes apply when you "dispose" of a crypto asset. This triggers Capital Gains Tax on the profit. Disposals include:</P>
        <div className="space-y-sm my-md">
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Selling for fiat</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Selling Bitcoin for USD. You owe tax on the difference between what you bought it for (cost basis) and what you sold it for.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Crypto-to-crypto trades</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Trading Ethereum for Solana. The IRS views this as selling Ethereum for USD, and instantly using that USD to buy Solana. If your Ethereum gained value before the trade, you owe tax on that gain.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Spending crypto on goods</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Buying a coffee with Bitcoin is legally a disposal of property. If the Bitcoin gained value since you bought it, you owe capital gains tax on that fraction of a coin.</p>
          </div>
        </div>

        <H2 id="income">Crypto as Income</H2>
        <P>Sometimes crypto is taxed as ordinary income, usually based on its fair market value on the day you receive it. Common scenarios include:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li><strong>Mining:</strong> Receiving block rewards.</li>
          <li><strong>Staking:</strong> Receiving rewards for securing a Proof of Stake network.</li>
          <li><strong>Airdrops:</strong> Receiving free promotional tokens in your wallet.</li>
          <li><strong>Salary:</strong> Getting paid for work in crypto.</li>
        </ul>

        <H2 id="tracking">How to manage crypto taxes</H2>
        <P>Tracking the cost basis of every trade manually is impossible for active users. The industry standard is to use crypto tax software (like CoinTracker, Koinly, or TokenTax). You connect your exchanges via read-only APIs and upload your public wallet addresses, and the software calculates your capital gains and generates the necessary tax forms automatically.</P>

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
            <Link to="/guides/crypto-regulation-explained-for-beginners" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Regulation for Beginners</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
