import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-transaction-fees-explained";
const TITLE = "Ethereum Transaction Fees Explained: Gas, EIP-1559 & How to Save | CryptoBeacon";
const DESC =
  "How Ethereum transaction fees (gas) work — base fee, priority fee (tip), EIP-1559, why fees spike, and practical strategies for reducing what you pay.";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is a gas fee on Ethereum?", a: "A gas fee is the cost of performing any operation on the Ethereum network. Each operation (sending ETH, calling a contract function, minting an NFT) consumes a certain amount of 'gas' — a unit of computational work. The fee you pay is gas used × gas price." },
  { q: "What did EIP-1559 change?", a: "EIP-1559 (August 2021) replaced the simple gas auction with a two-part fee: a base fee (set by the protocol and burned) plus a priority fee (tip you set to incentivise validators). The base fee adjusts automatically based on network demand. This made fee estimation more predictable and made ETH deflationary during high-usage periods." },
  { q: "Why do Ethereum gas fees spike?", a: "Fees spike when demand for block space exceeds supply. Each block has a gas limit (target ~15 million gas, max 30 million). When many users compete to get into the next block — during an NFT mint, DeFi liquidation cascade, or market volatility — the base fee rises rapidly." },
  { q: "What is the cheapest time to transact on Ethereum?", a: "Ethereum L1 fees tend to be lowest during weekends (especially Sunday evenings UTC) and during market quiet periods. However, for routine transactions, Layer 2 networks (Arbitrum, Optimism, Base) are now consistently cheaper than L1 regardless of timing." },
  { q: "What happens if I set my gas too low?", a: "If you set the priority fee below what validators require, your transaction may sit in the mempool for a long time or eventually be dropped. Setting the gas limit too low means the transaction will fail mid-execution — the gas is consumed but the state change is reverted." },
];




export const Route = createFileRoute("/ethereum/ethereum-transaction-fees-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/ethereum-transaction-fees-explained', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Ethereum Transaction Fees Explained: Gas, EIP-1559 & How to Save | CryptoBeacon", description: "How Ethereum transaction fees (gas) work — base fee, priority fee (tip), EIP-1559, why fees spike, and practical strategies for reducing what you pay.", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/ethereum/ethereum-transaction-fees-explained", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "Ethereum Transaction Fees Explained: Gas, EIP-1559 & How to Save | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/ethereum-transaction-fees-explained" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

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
            <li className="text-primary">Ethereum Transaction Fees Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Fees
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Ethereum Transaction Fees Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Gas, base fee, priority fee, EIP-1559, Gwei — fees on Ethereum can feel opaque. Here is the full picture, plainly explained.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="what-is-gas">What is gas?</H2>
        <P>Gas is the unit that measures computational effort on the Ethereum network. Every operation has a cost in gas: a simple ETH transfer costs 21,000 gas. A complex <Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link> interaction might cost 200,000+ gas. Gas is not ETH — it is a unit of work. The fee you pay is: <strong>gas used × gas price (in Gwei)</strong>.</P>
        <P>Gwei is a denomination of ETH: 1 ETH = 1,000,000,000 Gwei. When your <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> shows "10 Gwei" as the gas price, it means 0.00000001 ETH per unit of gas. A 21,000 gas transfer at 10 Gwei costs 0.00021 ETH.</P>

        <H2 id="eip1559">EIP-1559: how fees work today</H2>
        <P>Before August 2021, Ethereum used a simple auction: highest bidder gets in the block. This made fees unpredictable and often wasteful. EIP-1559 replaced this with a two-component fee structure:</P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {[
            { title: "Base Fee", desc: "Set by the protocol algorithmically. Adjusts up or down by up to 12.5% per block based on whether the previous block was over or under the target gas usage (15M gas). The base fee is burned — permanently removed from ETH supply.", color: "#EF4444" },
            { title: "Priority Fee (Tip)", desc: "A tip you set to incentivise validators to include your transaction. During low congestion, a tiny tip (0.1–1 Gwei) is sufficient. During high congestion, you may need to tip more to be competitive.", color: "#0F9D58" },
          ].map((t) => (
            <div key={t.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-sm" style={{ color: t.color }}>{t.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <P>Total fee = (base fee + priority fee) × gas used. The base fee is burned; the priority fee goes to validators.</P>

        <H2 id="why-spike">Why do fees spike?</H2>
        <P>Each Ethereum block targets 15 million gas of usage (max 30 million). When demand for block space exceeds 15M gas, the base fee rises. During high-profile NFT mints, DeFi liquidation cascades, or market crashes, thousands of users submit transactions simultaneously. The base fee can increase rapidly — sometimes 10–50× within minutes — making simple transactions cost $50–$200+ in extreme cases.</P>

        <H2 id="save">How to reduce what you pay</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li><strong>Use Layer 2 networks:</strong> Arbitrum, Optimism, and Base process transactions for cents rather than dollars, settling proofs to Ethereum L1. This is the most significant fee reduction available.</li>
          <li><strong>Transact during low activity:</strong> Sunday evenings UTC typically have lower base fees. Gas tracker tools (Etherscan Gas Tracker, Blocknative) show real-time and historical fee data.</li>
          <li><strong>Set a max fee cap:</strong> EIP-1559 wallets let you set a maximum fee you are willing to pay. If the base fee drops to your level, your transaction executes — useful for non-urgent transfers.</li>
          <li><strong>Batch transactions:</strong> Some dApps allow batching multiple actions into one transaction, amortising the 21,000 gas base overhead across multiple operations.</li>
        </ul>
        <P>For a deeper look at Layer 2: <Link to="/ethereum/ethereum-layer-2-scaling-rollups-explained" className="text-secondary underline">Ethereum Layer 2 Scaling Explained →</Link></P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
