import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-vs-bitcoin";
const TITLE = "Ethereum vs Bitcoin: Key Differences Explained | CryptoBeacon";
const DESC =
  "Ethereum vs Bitcoin compared side-by-side: purpose, supply model, consensus mechanism, programmability, transaction speed, and which use cases each is best suited for.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Is Ethereum better than Bitcoin?", a: "Neither is objectively better — they serve different purposes. Bitcoin excels as a store of value and censorship-resistant money with a fixed supply. Ethereum excels as a programmable platform for decentralised applications. Many investors and developers use both." },
  { q: "Which is more decentralised, Ethereum or Bitcoin?", a: "Bitcoin is widely considered more decentralised at the base layer. Its simpler design, larger number of full nodes, and more distributed mining (historically) give it an edge. Ethereum has more validators but concentration in liquid staking protocols like Lido raises decentralisation questions." },
  { q: "Does Bitcoin have smart contracts?", a: "Bitcoin has limited scripting capability and protocols like Stacks and the Lightning Network expand its functionality. However, it intentionally avoids full Turing-complete programmability for security and simplicity. Ethereum's EVM is the dominant platform for smart contract development." },
  { q: "What is the difference in supply?", a: "Bitcoin has a hard cap of 21 million BTC — no more will ever be created. Ethereum has no hard cap, but EIP-1559 burns a portion of each transaction's fee, making ETH deflationary during periods of high network activity. Bitcoin's fixed supply is by design; Ethereum's flexible supply is debated." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ethereum vs Bitcoin: Key Differences Explained",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "ethereum vs bitcoin, bitcoin vs ethereum differences, which is better bitcoin or ethereum, ethereum supply vs bitcoin supply, proof of work vs proof of stake",
  articleSection: "Ethereum",
  wordCount: 900,
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
    { "@type": "ListItem", position: 2, name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
    { "@type": "ListItem", position: 3, name: "Ethereum vs Bitcoin", item: URL },
  ],
};

export const Route = createFileRoute("/ethereum/ethereum-vs-bitcoin")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Ethereum" },
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

const comparisons = [
  { attribute: "Primary purpose", bitcoin: "Store of value / digital money", ethereum: "Programmable platform for dApps" },
  { attribute: "Created", bitcoin: "2009 by Satoshi Nakamoto", ethereum: "2015 by Vitalik Buterin et al." },
  { attribute: "Consensus", bitcoin: "Proof of Work (mining)", ethereum: "Proof of Stake (validators)" },
  { attribute: "Supply cap", bitcoin: "21 million BTC (hard cap)", ethereum: "No hard cap; EIP-1559 burn" },
  { attribute: "Block time", bitcoin: "~10 minutes", ethereum: "~12 seconds" },
  { attribute: "Smart contracts", bitcoin: "Limited scripting only", ethereum: "Full Turing-complete EVM" },
  { attribute: "Transaction fees", bitcoin: "Paid in BTC (sats)", ethereum: "Gas fees paid in ETH (Gwei)" },
  { attribute: "Main use cases", bitcoin: "Savings, censorship-resistant payments, collateral", ethereum: "DeFi, NFTs, DAOs, stablecoins, L2 settlement" },
  { attribute: "Energy use", bitcoin: "High (Proof of Work)", ethereum: "~99.95% lower (post-Merge, PoS)" },
];

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/ethereum" className="hover:text-secondary">Ethereum</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Ethereum vs Bitcoin</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Comparison
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Ethereum vs Bitcoin
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The two largest blockchains serve fundamentally different purposes. Here is how they compare across every dimension that matters.
        </p>
        <Author />

        <H2 id="the-key-distinction">The key distinction</H2>
        <P>Bitcoin was designed to solve one problem: creating a peer-to-peer electronic cash system without a trusted third party. Ethereum was designed to solve a different problem: enabling arbitrary, trustless computation on a global blockchain. These different design goals result in very different networks, despite sharing some surface-level similarities (both are blockchains, both use cryptography, both are decentralised).</P>
        <P>The simplest summary: <strong>Bitcoin is digital gold. Ethereum is a programmable computer.</strong> Neither description is complete, but they capture the essential difference in purpose.</P>

        <H2 id="comparison-table">Head-to-head comparison</H2>
        <div className="overflow-x-auto my-lg rounded-xl border border-outline-variant">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="p-md font-label-caps text-label-caps text-on-surface-variant">Attribute</th>
                <th className="p-md font-label-caps text-label-caps" style={{ color: "#F7931A" }}>Bitcoin</th>
                <th className="p-md font-label-caps text-label-caps" style={{ color: "#627EEA" }}>Ethereum</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={row.attribute} className={`border-b border-outline-variant ${i % 2 === 0 ? "bg-surface-container-lowest" : ""}`}>
                  <td className="p-md font-body-sm text-body-sm text-on-surface-variant font-semibold">{row.attribute}</td>
                  <td className="p-md font-body-sm text-body-sm text-on-surface">{row.bitcoin}</td>
                  <td className="p-md font-body-sm text-body-sm text-on-surface">{row.ethereum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2 id="supply">Supply: the critical economic difference</H2>
        <P>Bitcoin's 21 million coin hard cap is a core part of its value proposition — it makes Bitcoin programmatically scarce in a way no central bank can override. This is why Bitcoin is often compared to gold as a store of value.</P>
        <P>Ethereum has no hard cap. However, EIP-1559 (August 2021) changed the fee structure so that a portion of every transaction fee is burned — permanently removed from supply. During periods of high network activity, ETH is net deflationary. During low activity, it is slightly inflationary. Whether this model is superior to a hard cap is an ongoing debate in the ecosystem.</P>

        <H2 id="programmability">Programmability: where Ethereum leads</H2>
        <P>Ethereum's EVM allows developers to write smart contracts — self-executing programs that run on the blockchain. This has enabled an enormous ecosystem: DeFi protocols with billions in locked value, NFT marketplaces, stablecoins (USDC, DAI), prediction markets, and more. Almost all major crypto innovations of the past decade have been built on Ethereum or EVM-compatible chains.</P>
        <P>Bitcoin's scripting language is intentionally limited. This is a design choice: Bitcoin's developers believe simplicity reduces attack surface and improves security and predictability. The Lightning Network extends Bitcoin's functionality for payments without adding EVM complexity.</P>

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
            <Link to="/ethereum/what-is-ethereum" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is Ethereum?</h3>
            </Link>
            <Link to="/bitcoin/what-is-a-bitcoin-wallet" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is a Bitcoin Wallet?</h3>
            </Link>
            <Link to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Can You Send Bitcoin to an Ethereum Address?</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
