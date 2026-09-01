import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Layers, Coins, Zap, Shield, FileCode, Globe, ArrowRightLeft, Wallet } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-complete-beginners-guide";
const TITLE = "Ethereum Explained: Complete Beginner's Guide | CryptoBeacon";
const DESC =
  "The definitive beginner's guide to Ethereum — what it is, how it works, staking, gas fees, Layer 2, smart contracts, wallets, and how it compares to Bitcoin. All in one place.";
const PUBLISHED = "2026-09-01";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ethereum Explained: Complete Beginner's Guide",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "ethereum explained beginners guide, what is ethereum, how ethereum works, ethereum staking, ethereum gas fees, ethereum vs bitcoin, ethereum layer 2",
  articleSection: "Ethereum",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
    { "@type": "ListItem", position: 3, name: "Ethereum: Complete Beginner's Guide", item: URL },
  ],
};

const sections = [
  { icon: <Globe size={20} />, title: "What Is Ethereum?", desc: "Plain-language intro to what Ethereum is, why it was created, and how it differs from a basic cryptocurrency.", to: "/ethereum/what-is-ethereum", tag: "Start Here", color: "#627EEA" },
  { icon: <Layers size={20} />, title: "How Ethereum Works", desc: "The EVM, accounts, transactions, and Proof-of-Stake consensus explained from first principles.", to: "/ethereum/how-ethereum-works", tag: "Explainer", color: "#8B5CF6" },
  { icon: <Shield size={20} />, title: "Proof of Stake Explained", desc: "How Ethereum's consensus mechanism works, why it replaced mining, and what it means for security.", to: "/ethereum/proof-of-stake-explained", tag: "Consensus", color: "#0F9D58" },
  { icon: <Coins size={20} />, title: "What Is Ethereum Staking?", desc: "Staking mechanics, yield, solo vs liquid staking, and the key risks every staker should understand.", to: "/ethereum/what-is-ethereum-staking", tag: "Staking", color: "#F59E0B" },
  { icon: <Shield size={20} />, title: "Ethereum Validators Explained", desc: "The 32 ETH requirement, validator duties, lifecycle, and what happens if a validator misbehaves.", to: "/ethereum/ethereum-validators-explained", tag: "Staking", color: "#0F9D58" },
  { icon: <Zap size={20} />, title: "What Is Gas on Ethereum?", desc: "Base fee, priority fee, EIP-1559, and practical strategies for minimising transaction costs.", to: "/ethereum/what-are-gas-fees-how-to-save", tag: "Explainer", color: "#EF4444" },
  { icon: <Layers size={20} />, title: "Ethereum Layer 2 Explained", desc: "Rollups (Optimistic vs ZK), blob space (EIP-4844), and how L2s scale Ethereum while preserving security.", to: "/ethereum/ethereum-layer-2-scaling-rollups-explained", tag: "Scaling", color: "#2563EB" },
  { icon: <ArrowRightLeft size={20} />, title: "Ethereum vs Bitcoin", desc: "Side-by-side: purpose, supply model, consensus, programmability, and use cases compared.", to: "/ethereum/ethereum-vs-bitcoin", tag: "Comparison", color: "#F7931A" },
  { icon: <FileCode size={20} />, title: "Ethereum Smart Contracts Explained", desc: "What smart contracts are, how they self-execute, and the risks that come with code-is-law.", to: "/ethereum/what-is-a-smart-contract", tag: "Explainer", color: "#6366F1" },
  { icon: <Wallet size={20} />, title: "Ethereum Wallets Explained", desc: "EOAs vs contract wallets, MetaMask setup, Ledger with Ethereum, and seed phrases on ETH.", to: "/ethereum/ethereum-wallets-explained", tag: "Wallets", color: "#0F9D58" },
  { icon: <Coins size={20} />, title: "Ethereum Transaction Fees Explained", desc: "A deep dive into how fees are calculated, why they spike, and how EIP-1559 changed everything.", to: "/ethereum/ethereum-transaction-fees-explained", tag: "Fees", color: "#EF4444" },
];

export const Route = createFileRoute("/ethereum/ethereum-complete-beginners-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
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
            <li><Link to="/ethereum" className="hover:text-secondary">Ethereum</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Complete Beginner's Guide</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
          Ethereum · Hub
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mb-md leading-tight">
          Ethereum Explained: Complete Beginner's Guide
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl max-w-3xl">
          Ethereum is the world's largest programmable blockchain — home to DeFi, NFTs, staking, and most of the innovation in crypto. This hub links every concept you need to understand it from the ground up.
        </p>

        <Author />

        <div className="my-xl p-lg rounded-xl border border-[#627EEA]/30 bg-[#627EEA]/5">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Ethereum in one paragraph</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Ethereum is a decentralised blockchain network launched in 2015 by Vitalik Buterin and others. Unlike Bitcoin — which is primarily a store of value and payment network — Ethereum is a programmable platform. Developers can deploy <strong>smart contracts</strong>: self-executing code that runs on the Ethereum Virtual Machine (EVM). This enables everything from decentralised exchanges to lending protocols to NFTs, without any single company controlling the infrastructure.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg text-primary mb-lg">Everything in this cluster</h2>
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
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This guide is for informational and educational purposes only. It does not constitute financial or investment advice.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
