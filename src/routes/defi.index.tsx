import { buildMetadata } from "@/lib/metadata";

import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/defi";
const TITLE = "DeFi Explained: Protocols, Smart Contracts & Yield | CryptoBeacon";
const DESC = "Master decentralized finance fundamentals. Explore smart contracts, automated market makers, Ethereum staking protocols, and critical DeFi security risks.";

const defiGuides = [
  {
    to: "/ethereum/what-is-defi-decentralized-finance",
    tag: "DeFi · Fundamentals",
    title: "What Is DeFi? Decentralized Finance Explained",
    desc: "A beginner-friendly overview of how decentralized applications replace traditional banks with automated, self-executing smart contract code."
  },
  {
    to: "/ethereum/what-is-a-smart-contract",
    tag: "Ethereum · Smart Contracts",
    title: "What Is a Smart Contract? How Code Runs on the Blockchain",
    desc: "Understand how smart contracts execute trustlessly on Ethereum and other virtual machine chains to power autonomous financial protocols."
  },
  {
    to: "/ethereum/what-is-ethereum-staking",
    tag: "Ethereum · Staking",
    title: "What Is Ethereum Staking? Proof-of-Stake Consensus & Yield",
    desc: "How staking works on Ethereum after the Merge, how validator rewards are generated, and the difference between solo and pooled staking."
  },
  {
    to: "/ethereum/how-to-stake-eth-on-lido-vs-rocketpool",
    tag: "DeFi · Liquid Staking",
    title: "Staking ETH on Lido vs Rocket Pool: Liquid Staking Comparison",
    desc: "A mechanical comparison of the two largest liquid staking protocols on Ethereum, analyzing fee structures, node operator models, and centralization risks."
  },
  {
    to: "/ethereum/ethereum-layer-2-scaling-rollups-explained",
    tag: "Ethereum · Layer 2",
    title: "Ethereum Layer 2 Scaling: Optimistic & ZK-Rollups Explained",
    desc: "Why DeFi transactions move to Layer 2 networks like Arbitrum and Base, how transaction batches work, and how rollups lower gas fees."
  },
  {
    to: "/guides/how-to-set-up-metamask-step-by-step",
    tag: "Guides · Web3 Wallets",
    title: "How to Set Up MetaMask: Complete Step-by-Step Security Guide",
    desc: "Walk through installing MetaMask, generating your secret recovery phrase, and connecting to decentralized applications safely."
  },
  {
    to: "/security/how-to-revoke-smart-contract-approvals",
    tag: "Security · Token Approvals",
    title: "How to Revoke Smart Contract Approvals & Protect Your Tokens",
    desc: "Why unlimited ERC-20 allowances put your wallet balance at risk, and exact steps to audit and revoke active permissions."
  },
  {
    to: "/security/how-to-spot-a-rug-pull",
    tag: "Security · Due Diligence",
    title: "How to Spot a Rug Pull: Red Flags in DeFi & Token Projects",
    desc: "Learn to identify unverified contract code, unlocked developer liquidity, suspicious token distributions, and deceptive marketing claims."
  },
  {
    to: "/security/defi-risks-explained",
    tag: "Security · Risk Management",
    title: "DeFi Risks Explained: Smart Contract Bugs, Oracles & Impermanent Loss",
    desc: "A thorough examination of protocol exploits, flash loan vulnerabilities, economic design failures, and systemic risks across DeFi."
  }
];

export const Route = createFileRoute("/defi/")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/defi', publishedTime: undefined, section: 'DeFi' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "DeFi", item: "https://www.cryptobeacon.site/defi" }
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
      <span className="mt-md text-secondary font-medium text-body-md">Read Guide →</span>
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
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Decentralized Finance (DeFi) replaces conventional financial intermediaries — such as custodial banks, brokerage firms, and centralized clearinghouses — with autonomous, open-source smart contracts deployed on programmable blockchains. Through these protocols, users can trade assets via automated market makers, supply liquidity for yield, borrow against crypto collateral, and participate in decentralized governance without surrendering custody to an intermediary.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            While DeFi provides transparency and permissionless access, it also exposes participants to novel operational and systemic risks, including smart contract bugs, flash loan manipulation, oracle failures, and phishing drainers. At CryptoBeacon, our DeFi guides focus on the mechanical architecture of these protocols and emphasize self-custody hygiene. Before committing funds, explore our foundational guides on <Link to="/ethereum/what-is-a-smart-contract" className="text-secondary font-medium hover:underline">smart contract basics</Link>, safe wallet configuration with <Link to="/guides/how-to-set-up-metamask-step-by-step" className="text-secondary font-medium hover:underline">MetaMask setup</Link>, and how to audit and <Link to="/security/how-to-revoke-smart-contract-approvals" className="text-secondary font-medium hover:underline">revoke token approvals</Link>.
          </p>
        </div>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Featured DeFi &amp; Staking Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {defiGuides.map((guide) => (
              <Card key={guide.to} to={guide.to} tag={guide.tag} title={guide.title} desc={guide.desc} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
