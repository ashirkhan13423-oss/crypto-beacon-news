import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

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

export const Route = createFileRoute("/defi/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "DeFi" }])) },
    ],
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
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Foundations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/ethereum/what-is-defi-decentralized-finance"
              tag="Ethereum · Guide"
              title="What Is DeFi? Decentralized Finance Explained"
              desc="A plain-language introduction to decentralized finance — what it is, how lending protocols and DEXes work, and the real risks beginners should understand before participating."
            />
            <Card
              to="/ethereum/what-is-a-smart-contract"
              tag="Ethereum · Guide"
              title="What is a Smart Contract? How Blockchain Code Works"
              desc="A beginner-friendly explanation of smart contracts, the self-executing code that powers DeFi, NFTs, and the Ethereum network."
            />
            <Card
              to="/ethereum/ethereum-layer-2-scaling-rollups-explained"
              tag="Ethereum · Guide"
              title="Ethereum Layer 2 Scaling & Rollups Explained"
              desc="How rollups compress transactions off-chain and settle them on Ethereum, dramatically reducing gas fees for DeFi users."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Yield & Staking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/ethereum/what-is-ethereum-staking"
              tag="Ethereum · Guide"
              title="What Is Ethereum Staking? Proof-of-Stake & Yield Explained"
              desc="How Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo nodes and liquid staking, and key risks."
            />
            <Card
              to="/ethereum/how-to-stake-eth-on-lido-vs-rocketpool"
              tag="Ethereum · Comparison"
              title="Staking ETH: Lido vs Rocket Pool — A Tested Comparison"
              desc="A hands-on comparison covering yield, smart contract risk, decentralization, and minimum stake requirements for the two dominant liquid staking protocols."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/guides/how-to-set-up-metamask-step-by-step"
              tag="Guides · Walkthrough"
              title="How to Set Up MetaMask: Step-by-Step (2026)"
              desc="Installing MetaMask, securing your seed phrase, adding a network, and making your first transaction safely — the entry point for most DeFi activity."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Risks & Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <Card
              to="/security/defi-risks-explained"
              tag="Security · Guide"
              title="DeFi Risks Explained: Smart Contracts, Rug Pulls & Impermanent Loss"
              desc="A stark look at the hidden dangers of DeFi — smart contract vulnerabilities, impermanent loss in liquidity pools, oracle manipulation, and governance exploits."
            />
            <Card
              to="/security/how-to-revoke-smart-contract-approvals"
              tag="Security · Guide"
              title="How to Revoke Smart Contract Approvals"
              desc="Every DeFi interaction grants token spending permissions to a contract. Learn how to audit and revoke those approvals before they become a liability."
            />
            <Card
              to="/security/how-to-spot-a-rug-pull"
              tag="Security · Guide"
              title="How to Spot a Rug Pull Before It Happens"
              desc="The warning signs that a DeFi project is set up to steal liquidity — anonymous teams, unaudited contracts, honeypot mechanics, and social pressure tactics."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
