import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Layers, Coins, Zap, Shield, FileCode, Globe, ArrowRightLeft, Wallet } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-complete-beginners-guide";
const TITLE = "Ethereum Explained: Complete Beginner's Guide | CryptoBeacon";
const DESC =
  "The definitive beginner's guide to Ethereum — what it is, how it works, staking, gas fees, Layer 2, smart contracts, wallets, and how it compares to Bitcoin. All in one place.";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
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
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/ethereum-complete-beginners-guide', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Ethereum Explained: Complete Beginner's Guide | CryptoBeacon", description: "The definitive beginner's guide to Ethereum — what it is, how it works, staking, gas fees, Layer 2, smart contracts, wallets, and how it compares to Bitcoin. All in one place.", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/ethereum/ethereum-complete-beginners-guide", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "Ethereum Explained: Complete Beginner's Guide | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/ethereum-complete-beginners-guide" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

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
          Ethereum is the world's largest programmable <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> — home to <Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link>, NFTs, <Link to="/glossary#staking" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Staking">staking</Link>, and most of the innovation in crypto. This hub links every concept you need to understand it from the ground up.
        </p>

        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <div className="my-xl p-lg rounded-xl border border-[#627EEA]/30 bg-[#627EEA]/5">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Ethereum in one paragraph</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Ethereum is a decentralised blockchain network launched in 2015 by Vitalik Buterin and others. Unlike Bitcoin — which is primarily a store of value and payment network — Ethereum is a programmable platform. Developers can deploy <strong><Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contracts</Link></strong>: self-executing code that runs on the Ethereum Virtual Machine (EVM). This enables everything from decentralised exchanges to lending protocols to NFTs, without any single company controlling the infrastructure.
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
                <RelatedArticles currentUrl={URL} />
        </article>
</main>
      <SiteFooter />
    </div>
  );
}
