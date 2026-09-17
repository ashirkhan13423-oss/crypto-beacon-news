import { buildMetadata } from "@/lib/metadata";

import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/defi";
const TITLE = "DeFi (Decentralized Finance) | CryptoBeacon";
const DESC =
  "Learn how decentralized finance works — smart contracts, lending protocols, DEXes, yield, and the security risks every DeFi user needs to understand.";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "DeFi — Decentralized Finance",
  url: URL,
  description: DESC,
  hasPart: [
    { "@type": "WebPage", name: "What Is DeFi?", url: "https://www.cryptobeacon.site/ethereum/what-is-defi-decentralized-finance" },
    { "@type": "WebPage", name: "What is a Smart Contract?", url: "https://www.cryptobeacon.site/ethereum/what-is-a-smart-contract" },
    { "@type": "WebPage", name: "What Is Ethereum Staking?", url: "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking" },
    { "@type": "WebPage", name: "Staking ETH: Lido vs Rocket Pool", url: "https://www.cryptobeacon.site/ethereum/how-to-stake-eth-on-lido-vs-rocketpool" },
    { "@type": "WebPage", name: "Ethereum Layer 2 Scaling & Rollups Explained", url: "https://www.cryptobeacon.site/ethereum/ethereum-layer-2-scaling-rollups-explained" },
    { "@type": "WebPage", name: "How to Set Up MetaMask", url: "https://www.cryptobeacon.site/guides/how-to-set-up-metamask-step-by-step" },
    { "@type": "WebPage", name: "How to Revoke Smart Contract Approvals", url: "https://www.cryptobeacon.site/security/how-to-revoke-smart-contract-approvals" },
    { "@type": "WebPage", name: "How to Spot a Rug Pull", url: "https://www.cryptobeacon.site/security/how-to-spot-a-rug-pull" },
    { "@type": "WebPage", name: "DeFi Risks Explained", url: "https://www.cryptobeacon.site/security/defi-risks-explained" },
  ],
};

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/defi/")({ validateSearch: searchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/defi', publishedTime: undefined, section: 'Defi' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Defi", item: "https://www.cryptobeacon.site/defi" }
      ])) }
    ]
  }),
  component: DefiHub,
});

function Card({ to, tag, title, desc }: { to: string; tag: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="flex flex-col p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all h-full"
    >
      <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">{tag}</span>
      <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">{title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant flex-grow">{desc}</p>
      <span className="mt-md text-secondary font-medium text-body-md">Read →</span>
    </Link>
  );
}

function DefiHub() {
  const { page } = Route.useSearch();
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "DeFi" }]} />

        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Decentralized Finance (DeFi)
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            DeFi replaces traditional financial intermediaries — banks, brokers, clearinghouses — with self-executing smart contracts deployed on a blockchain. Lending, borrowing, trading, and yield generation all happen through open-source code rather than a central institution. On CryptoBeacon we cover how these protocols actually work, what the real risks are, and the practical steps involved in using DeFi safely — without investment advice or price speculation.
          </p>
          {/* INTRO COPY SLOT */}
          <div className="mt-lg prose prose-lg dark:prose-invert text-on-surface">
            {/* TODO: Add genuine intro section text here */}
          </div>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Foundations
          </h2>
          <ArticleGrid category="DeFi" currentPage={page} />
          </section>
      </main>
      <SiteFooter />
    </div>
  );
}
