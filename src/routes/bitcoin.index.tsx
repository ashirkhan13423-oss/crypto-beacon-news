import { createFileRoute } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import sendHero from "@/assets/bitcoin-send-safely.webp";
import walletHero from "@/assets/bitcoin-what-is-a-wallet.webp";
import miningHero from "@/assets/bitcoin-what-is-mining.webp";
import halvingHero from "@/assets/bitcoin-halving.webp";
import nodeHero from "@/assets/bitcoin-node-explainer.webp";
import lightningHero from "@/assets/bitcoin-lightning-network.webp";
import etfHero from "@/assets/bitcoin-etf-effects.webp";
import bondYieldsHero from "@/assets/bitcoin-bond-yields.webp";
import { Bitcoin } from "lucide-react";

import hero_miningenergy from "@/assets/bitcoin-mining-energy.webp";
import hero_halvingmech from "@/assets/bitcoin-halving-mechanism.webp";


const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/bitcoin/")({ validateSearch: searchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/bitcoin/index', publishedTime: undefined, section: 'Bitcoin' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Bitcoin (BTC): Benchmark Crypto Currency Architecture & Analysis — CryptoBeacon", item: "https://www.cryptobeacon.site/bitcoin" }
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
