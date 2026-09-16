import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import sendHero from "@/assets/bitcoin-send-safely.jpg";
import walletHero from "@/assets/bitcoin-what-is-a-wallet.png";
import miningHero from "@/assets/bitcoin-what-is-mining.png";
import halvingHero from "@/assets/bitcoin-halving.jpg";
import nodeHero from "@/assets/bitcoin-node-explainer.jpg";
import lightningHero from "@/assets/bitcoin-lightning-network.jpg";
import etfHero from "@/assets/bitcoin-etf-effects.jpg";
import bondYieldsHero from "@/assets/bitcoin-bond-yields.jpg";
import { Bitcoin } from "lucide-react";

import hero_miningenergy from "@/assets/bitcoin-mining-energy.jpg";
import hero_halvingmech from "@/assets/bitcoin-halving-mechanism.jpg";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bitcoin",
  url: "https://www.cryptobeacon.site/bitcoin",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Bitcoin Wallets: Complete Beginner's Guide",
      url: "https://www.cryptobeacon.site/bitcoin/bitcoin-wallets-complete-guide",
    },
    {
      "@type": "WebPage",
      name: "How Do Bitcoin ETFs Actually Move the Price?",
      url: "https://www.cryptobeacon.site/bitcoin/how-do-bitcoin-etfs-affect-price",
    },
    {
      "@type": "WebPage",
      name: "Why Do Falling Bond Yields Affect Bitcoin's Price?",
      url: "https://www.cryptobeacon.site/bitcoin/why-do-bond-yields-affect-bitcoin-price",
    },
    {
      "@type": "WebPage",
      name: "How to Send Bitcoin Safely",
      url: "https://www.cryptobeacon.site/bitcoin/how-to-send-bitcoin-safely",
    },
    {
      "@type": "WebPage",
      name: "What Is a Bitcoin Wallet?",
      url: "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-wallet",
    },
    {
      "@type": "WebPage",
      name: "What Is Bitcoin Mining?",
      url: "https://www.cryptobeacon.site/bitcoin/what-is-bitcoin-mining",
    },
    {
      "@type": "WebPage",
      name: "What is the Bitcoin Halving?",
      url: "https://www.cryptobeacon.site/bitcoin/what-is-the-bitcoin-halving",
    },
    {
      "@type": "WebPage",
      name: "What Is a Bitcoin Node and Why Does Running One Matter?",
      url: "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-node",
    },
    {
      "@type": "WebPage",
      name: "The Bitcoin Lightning Network Explained: Instant, Cheap Bitcoin Payments",
      url: "https://www.cryptobeacon.site/bitcoin/bitcoin-lightning-network-explained",
    },
    {
      "@type": "WebPage",
      name: "Why Bitcoin Mining Uses So Much Energy: The Proof of Work Mechanism",
      url: "https://www.cryptobeacon.site/bitcoin/why-bitcoin-mining-uses-so-much-energy",
    },
    {
      "@type": "WebPage",
      name: "How Does Bitcoin Halving Work? The Protocol Mechanism Explained",
      url: "https://www.cryptobeacon.site/bitcoin/how-does-bitcoin-halving-work",
    },
  ],
};

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/bitcoin/")({ validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Bitcoin (BTC): Benchmark Crypto Currency Architecture & Analysis — CryptoBeacon" },
      {
        name: "description",
        content:
          "Definitive Bitcoin analysis: global crypto currency macro factors, network difficulty, halving mechanics, and transaction security.",
      },
      {
        property: "og:title",
        content: "Bitcoin (BTC): Benchmark Crypto Currency Architecture & Analysis — CryptoBeacon",
      },
      {
        property: "og:description",
        content:
          "Definitive Bitcoin analysis: global crypto currency macro factors, network difficulty, and transaction security.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/bitcoin" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/bitcoin" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: BitcoinPage,
});

function BitcoinPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <Bitcoin
                className="text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Bitcoin (BTC)</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            The foundational <strong>crypto currency</strong> of the digital asset ecosystem —
            in-depth analysis of supply caps, global <strong>market</strong> drivers,
            and network safety.
          </p>
        </header>

        <ArticleGrid category="Bitcoin" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
