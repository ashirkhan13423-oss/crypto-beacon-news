import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/defi";
const TITLE = "DeFi (Decentralized Finance) | CryptoBeacon";
const DESC = "Learn about Decentralized Finance (DeFi), how DEXs work, liquidity pools, yield farming, and the critical risks you need to understand.";

export const Route = createFileRoute("/defi/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "DeFi" }])),
      },
    ],
  }),
  component: DefiHub,
});

function DefiHub() {
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
            DeFi removes the middlemen from financial services like lending, borrowing, and trading by replacing traditional intermediaries with smart contracts that execute automatically on a blockchain. Instead of relying on a bank to approve your loan or a brokerage to settle your trade, DeFi protocols allow users to interact directly with each other through transparent, open-source code.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            The DeFi ecosystem primarily operates on the Ethereum network and its Layer 2 scaling solutions, although alternative blockchains like Solana and Avalanche also host growing DeFi ecosystems. Core DeFi primitives include decentralized exchanges (DEXs) such as Uniswap and Curve, lending and borrowing platforms like Aave and Compound, and yield aggregators that automatically optimize returns across multiple protocols.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            While DeFi offers unprecedented financial accessibility and composability, it also carries significant risks that every participant must understand. Smart contract vulnerabilities, impermanent loss in liquidity pools, oracle manipulation attacks, and governance exploits have collectively resulted in billions of dollars in losses. Our guides below provide honest, security-focused analysis of how these systems work and where the real dangers lie.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">What Is DeFi?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              A plain-language introduction to decentralized finance and how it works.
            </p>
            <Link to="/ethereum/what-is-defi-decentralized-finance" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
          
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">DeFi Risks Explained</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              A stark look at the hidden dangers, smart contract flaws, and impermanent loss.
            </p>
            <Link to="/security/defi-risks-explained" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
