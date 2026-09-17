import { createFileRoute } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/ethereum-address-mismatch.webp";
import { Network } from "lucide-react";

import stakingHero from "@/assets/ethereum-staking-hero.webp";
import l2Hero from "@/assets/ethereum-layer-2-scaling.webp";
import gasFeesHero from "@/assets/ethereum-gas-fees.webp";
import defiHero from "@/assets/ethereum-defi-explainer.webp";
import lidoRocketHero from "@/assets/eth-staking-lido-vs-rocketpool.webp";


const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/ethereum/")({ validateSearch: searchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/index', publishedTime: undefined, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum Hub — CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum" }
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }
    ],
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
