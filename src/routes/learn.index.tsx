import { buildMetadata } from "@/lib/metadata";

import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/learn";
const TITLE = "Learn Crypto: Blockchain, Bitcoin & Ethereum Guides | CryptoBeacon";
const DESC = "Master cryptocurrency fundamentals. Evidence-based educational guides covering blockchain architecture, Bitcoin, Ethereum, and self-custody security.";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/learn', publishedTime: undefined, section: 'Learn' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Learn", item: "https://www.cryptobeacon.site/learn" }
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }
    ]
  }),
  component: LearnHub,
});

function LearnHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Learn Crypto" }]} />
        
        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Learn Crypto: Core Curriculum &amp; Guides
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Welcome to CryptoBeacon’s primary learning center. Navigating decentralized technology requires understanding the fundamental mechanisms that make public blockchains reliable: cryptographic hashing, distributed consensus, peer-to-peer networking, and asymmetric cryptography. Our educational guides are designed to cut through promotional marketing hype, giving you factual, rigorous explanations of how digital assets actually operate.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Whether you are taking your first steps by learning how to set up an independent self-custody wallet, evaluating the differences between Bitcoin and smart-contract networks, or analyzing how proof-of-stake validators secure Ethereum, this curriculum gives you an organized progression. Because blockchain transactions are final and irreversible, mastering security principles early is the most effective way to protect your digital assets.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Begin by mastering the essential core topics below. We strongly recommend reading our introductory guide on <Link to="/guides/what-is-a-private-key" className="text-secondary font-medium hover:underline">what is a private key</Link>, examining <Link to="/guides/hot-wallets-vs-cold-wallets-explained" className="text-secondary font-medium hover:underline">hot wallets vs cold wallets</Link>, and reviewing the <Link to="/glossary" className="text-secondary font-medium hover:underline">A-Z crypto glossary</Link> to build confidence before interacting on-chain.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">Module 01</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Bitcoin Fundamentals</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
              Understand Proof-of-Work consensus, the 21 million coin supply cap, node validation, halving cycles, and the Lightning Network Layer 2.
            </p>
            <Link to="/bitcoin" className="text-secondary font-medium hover:underline">
              Explore Bitcoin Guides →
            </Link>
          </div>
          
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">Module 02</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Ethereum &amp; Smart Contracts</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
              Learn how the Ethereum Virtual Machine (EVM) operates, explore Proof-of-Stake validator dynamics, Layer-2 rollups, and decentralized applications.
            </p>
            <Link to="/ethereum" className="text-secondary font-medium hover:underline">
              Explore Ethereum Guides →
            </Link>
          </div>

          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">Module 03</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Security &amp; Self-Custody</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
              Safeguard your holdings: learn seed phrase storage best practices, identify phishing and address-poisoning attacks, and protect against wallet drainers.
            </p>
            <Link to="/security" className="text-secondary font-medium hover:underline">
              Explore Security Guides →
            </Link>
          </div>

          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">Module 04</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Decentralized Finance (DeFi)</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
              Deep dive into automated market makers, decentralized lending protocols, liquid staking derivatives, and smart contract permission hygiene.
            </p>
            <Link to="/defi" className="text-secondary font-medium hover:underline">
              Explore DeFi Hub →
            </Link>
          </div>

          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">Module 05</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Taxes &amp; Compliance</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
              Understand how crypto disposals, trades, and staking rewards are treated for taxation, along with cost-basis tracking across accounts.
            </p>
            <Link to="/taxes" className="text-secondary font-medium hover:underline">
              Explore Taxes Hub →
            </Link>
          </div>

          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all flex flex-col">
            <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">Module 06</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">ETFs &amp; Institutional Markets</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
              Analyze spot Bitcoin and Ethereum ETF mechanics, institutional custodial trust structures, cash flows, and macro interest rate relationships.
            </p>
            <Link to="/etfs" className="text-secondary font-medium hover:underline">
              Explore ETFs Hub →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
