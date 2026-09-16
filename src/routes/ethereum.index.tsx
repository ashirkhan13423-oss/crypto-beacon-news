import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/ethereum-address-mismatch.png";
import { Network } from "lucide-react";

import stakingHero from "@/assets/ethereum-staking-hero.png";
import l2Hero from "@/assets/ethereum-layer-2-scaling.png";
import gasFeesHero from "@/assets/ethereum-gas-fees.jpg";
import defiHero from "@/assets/ethereum-defi-explainer.jpg";
import lidoRocketHero from "@/assets/eth-staking-lido-vs-rocketpool.jpg";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ethereum",
  url: "https://www.cryptobeacon.site/ethereum",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Ethereum: Complete Beginner's Guide",
      url: "https://www.cryptobeacon.site/ethereum/ethereum-complete-beginners-guide",
    },
    {
      "@type": "WebPage",
      name: "Staking ETH: Lido vs Rocket Pool — A Tested Comparison (2026)",
      url: "https://www.cryptobeacon.site/ethereum/how-to-stake-eth-on-lido-vs-rocketpool",
    },
    {
      "@type": "WebPage",
      name: "Can You Send Bitcoin to an Ethereum Address? What Actually Happens",
      url: "https://www.cryptobeacon.site/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
    },
    {
      "@type": "WebPage",
      name: "What Is Ethereum Staking? Proof-of-Stake & Yield Mechanics Explained",
      url: "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking",
    },
    {
      "@type": "WebPage",
      name: "Ethereum Layer 2 Scaling & Rollups Explained",
      url: "https://www.cryptobeacon.site/ethereum/ethereum-layer-2-scaling-rollups-explained",
    },
    {
      "@type": "WebPage",
      name: "What Are Ethereum Gas Fees and How to Save on Them?",
      url: "https://www.cryptobeacon.site/ethereum/what-are-gas-fees-how-to-save",
    },
    {
      "@type": "WebPage",
      name: "What Is DeFi? Decentralized Finance Explained for Beginners",
      url: "https://www.cryptobeacon.site/ethereum/what-is-defi-decentralized-finance",
    },
    {
      "@type": "WebPage",
      name: "What is an ERC-20 Token?",
      url: "https://www.cryptobeacon.site/ethereum/what-is-an-erc-20-token",
    },
    {
      "@type": "WebPage",
      name: "How Does Ethereum Staking Work?",
      url: "https://www.cryptobeacon.site/ethereum/how-does-ethereum-staking-work",
    },
  ],
};

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/ethereum/")({ validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Ethereum Hub — CryptoBeacon" },
      {
        name: "description",
        content:
          "Deep coverage of Ethereum: rollups, staking economics, EIPs, and the roadmap toward institutional-grade scalability.",
      },
      { property: "og:title", content: "Ethereum Hub — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Deep coverage of Ethereum: rollups, staking economics, EIPs, and the roadmap toward institutional-grade scalability.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/ethereum" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/ethereum" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: EthereumPage,
});

function EthereumPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center gap-sm mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
              <Network className="text-secondary" style={{ fontSize: "18px" }} />
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary">Ethereum</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            The foundational layer for decentralized applications and finance — smart contract
            architecture, Layer 2 scaling, and Proof-of-Stake consensus.
          </p>
        </header>
        <ArticleGrid category="Ethereum" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
