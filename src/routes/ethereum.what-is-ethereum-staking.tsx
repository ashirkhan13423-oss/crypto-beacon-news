import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/ethereum-staking-hero.png";
import { CheckCircle2, ChevronRight, Layers, ShieldCheck, Lock } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking";
const TITLE = "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon";
const DESC =
  "Learn how Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo validator nodes and liquid staking, and key risks.";
const PUBLISHED = "2026-08-15";

const faqs: { q: string; a: string }[] = [
  {
    q: "How much ETH is required to run a solo validator node?",
    a: "Solo staking requires exactly 32 ETH deposited into the Ethereum deposit contract. For users with less ETH, pooled or liquid staking services allow participation with any amount.",
  },
  {
    q: "Where does Ethereum staking yield come from?",
    a: "Staking rewards come from protocol inflation (newly minted ETH for consensus participation) plus execution layer priority fees and MEV (Maximal Extractable Value) tips.",
  },
  {
    q: "Can you lose staked ETH?",
    a: "Yes, through slashing. Slashing occurs if a validator node behaves maliciously or violates consensus rules (such as double signing blocks), resulting in a penalty deducted from the staked balance.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Is Ethereum Staking? Proof-of-Stake and Yield Mechanics Explained",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Marcus Vance",
    jobTitle: "Senior Market & Macro Analyst",
    worksFor: { "@type": "Organization", name: "CryptoBeacon" },
  },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: "https://www.cryptobeacon.site/og-image.png",
  inLanguage: "en-US",
  keywords:
    "ethereum staking explained, what is proof of stake, how eth staking yield works, solo staking vs liquid staking, Lido staking risk, slashing penalties ethereum",
  articleSection: "Ethereum",
  wordCount: 1600,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
    { "@type": "ListItem", position: 3, name: "What Is Ethereum Staking?", item: URL },
  ],
};

export const Route = createFileRoute("/ethereum/what-is-ethereum-staking")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "ethereum staking, proof of stake eth, eth staking yield, solo staking 32 eth, liquid staking derivatives, lido steth, slashing risks",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Ethereum" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
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

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-md">
          <ol className="flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>
              <Link to="/" className="hover:text-primary hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden><ChevronRight className="w-3 h-3" /></li>
            <li>
              <Link to="/ethereum" className="hover:text-primary hover:underline">
                Ethereum
              </Link>
            </li>
            <li aria-hidden><ChevronRight className="w-3 h-3" /></li>
            <li className="text-primary font-medium truncate">What Is Ethereum Staking?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is Ethereum Staking? Proof-of-Stake &amp; Yield Mechanics Explained
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>
            By{" "}
            <Link to="/about" className="text-secondary font-medium hover:underline">
              Marcus Vance
            </Link>{" "}
            (Senior Macro Analyst) · Reviewed by CryptoBeacon Editorial
          </span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>August 15, 2026</time>
          <span aria-hidden>·</span>
          <span>7 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="3D Ethereum emblem surrounded by proof-of-stake validator node mesh"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              The Shift to Proof-of-Stake
            </h2>
            <p className="mb-md">
              In September 2022, Ethereum completed "The Merge," transitioning its consensus mechanism from energy-intensive Proof-of-Work (mining) to Proof-of-Stake (staking). Instead of energy-hungry miners competing to solve cryptographic puzzles, Ethereum security is now maintained by validator nodes who deposit (or "stake") Ether as economic collateral.
            </p>
            <p>
              Staking serves as the security backbone of the Ethereum network. Validators perform crucial functions: proposing new blocks of transactions, attesting to blocks proposed by other validators, and penalizing protocol rule violations. In exchange for committing capital and compute resources, stakers earn yield distributed in ETH.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              How Ethereum Staking Yield Works
            </h2>
            <p className="mb-md">
              Staking rewards are not guaranteed dividends; they are technical compensation for validating network state. Yield comes from three primary components:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-md">
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs flex items-center gap-xs">
                  <ShieldCheck className="text-secondary w-5 h-5" /> Protocol Inflation
                </h3>
                <p className="text-body-md">
                  Newly minted ETH emitted by the beacon chain to reward consensus participation and honest block attestations.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs flex items-center gap-xs">
                  <Layers className="text-secondary w-5 h-5" /> Priority Fees
                </h3>
                <p className="text-body-md">
                  Tips paid directly by users to transaction proposers on the execution layer for faster block inclusion.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs flex items-center gap-xs">
                  <Lock className="text-secondary w-5 h-5" /> MEV Yield
                </h3>
                <p className="text-body-md">
                  Maximal Extractable Value captured via block builders reordering or bundling arbitrage transactions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              Methods of Staking Ethereum
            </h2>
            <div className="space-y-md">
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">1. Solo Staking (The Gold Standard)</h3>
                <p className="text-body-md">
                  Requires 32 ETH and a dedicated hardware node running execution and consensus clients 24/7. Offers total custody control with zero third-party middleman risk, though technical knowledge is mandatory to avoid maintenance offline penalties.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">2. Liquid Staking Pools</h3>
                <p className="text-body-md">
                  Services like Lido or Rocket Pool allow users to deposit any amount of ETH and receive a derivative token (e.g., stETH, rETH) representing their underlying deposit plus accumulated yield. Liquidity is retained while earning rewards, though smart contract risks apply.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">3. Centralized Exchange Staking</h3>
                <p className="text-body-md">
                  Exchanges manage node operation on behalf of users. While convenient, exchange custody introduces counterparty risk ("not your keys, not your coins") and typically incurs higher commission fees.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low p-lg rounded-xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              Frequently Asked Questions
            </h2>
            <div className="space-y-md">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-outline-variant pb-md last:border-0 last:pb-0">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{faq.q}</h3>
                  <p className="text-body-md text-on-surface-variant">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
