import { Link } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/how-ethereum-works";
const TITLE = "How Ethereum Works: EVM, Accounts, Transactions & Consensus | CryptoBeacon";
const DESC = "A technical yet accessible explanation of how Ethereum works — the EVM, account types, transaction lifecycle, Proof-of-Stake consensus, and block production ...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What are the two types of Ethereum accounts?", a: "Externally Owned Accounts (EOAs) are controlled by a private key — these are regular user wallets. Contract Accounts are controlled by smart contract code deployed on the blockchain — no private key exists, and the contract's own code determines how it behaves." },
  { q: "What is a transaction on Ethereum?", a: "A transaction is a signed message from an EOA that changes the state of the blockchain — transferring ETH, deploying a smart contract, or calling a contract function. Every transaction consumes gas and requires a fee paid in ETH." },
  { q: "What is 'finality' in Ethereum?", a: "Finality means a transaction cannot be reversed. Under Ethereum's Proof-of-Stake with Casper FFG, finality is achieved after two checkpoint epochs (~12.8 minutes). Before that point, a transaction is confirmed but theoretically reversible under extreme conditions." },
  { q: "What is the mempool?", a: "The mempool (memory pool) is a waiting room for unconfirmed transactions. When you submit a transaction, it enters the mempool and waits for a validator to include it in a block. Transactions with higher priority fees get picked up faster during congestion." },
];




export const Route = createFileRoute("/ethereum/how-ethereum-works")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/how-ethereum-works', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "How Ethereum Works: EVM, Accounts, Transactions & Consensus | CryptoBeacon", description: "A technical yet accessible explanation of how Ethereum works — the EVM, account types, transaction lifecycle, Proof-of-Stake consensus, and block production ...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/ethereum/how-ethereum-works", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "How Ethereum Works: EVM, Accounts, Transactions & Consensus | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/how-ethereum-works" }
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
            <li className="text-primary">How Ethereum Works</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#8B5CF6] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Explainer
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How Ethereum Works
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The EVM, account types, transaction lifecycle, validators, and block production — the mechanics behind the world's most programmable <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link>.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="state-machine">Ethereum as a state machine</H2>
        <P>The simplest mental model for Ethereum is a global state machine. The "state" is a snapshot of every account balance and every piece of <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contract</Link> storage on the network at a given moment. Transactions are inputs that transition the state from one version to the next — every transaction changes something, and every change is recorded permanently.</P>
        <P>Unlike Bitcoin, where the state is just a list of unspent coin outputs, Ethereum's state is a full database of accounts — each with a balance, nonce, code, and storage. This richer state model is what enables programmability.</P>

        <H2 id="accounts">Two types of accounts</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {[
            { title: "Externally Owned Account (EOA)", items: ["Controlled by a private key", "Can initiate transactions", "Has no code attached", "Regular user wallets (MetaMask, Ledger, etc.)"], color: "#627EEA" },
            { title: "Contract Account", items: ["Controlled by smart contract code", "Cannot initiate transactions independently", "Executes when triggered by an EOA", "DeFi protocols, NFT contracts, DAOs"], color: "#8B5CF6" },
          ].map((t) => (
            <div key={t.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-md" style={{ color: t.color }}>{t.title}</h3>
              <ul className="space-y-xs">
                {t.items.map((i) => <li key={i} className="font-body-md text-body-md text-on-surface flex items-start gap-xs"><span className="text-secondary mt-1">•</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <H2 id="transactions">Transaction lifecycle</H2>
        <P>When you send a transaction on Ethereum, here is what happens:</P>
        <ol className="list-decimal list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li>Your wallet signs the transaction with your private key, specifying recipient, amount, gas limit, and fee.</li>
          <li>The transaction is broadcast to the network and enters the <strong>mempool</strong> — a queue of pending transactions.</li>
          <li>A validator selects your transaction (prioritising higher fees during congestion) and includes it in a proposed block.</li>
          <li>Other validators attest to the block's validity. After sufficient attestations, the block is added to the chain.</li>
          <li>After ~12.8 minutes and two checkpoint epochs, the block reaches <strong>finality</strong> — it cannot be reversed.</li>
        </ol>

        <H2 id="evm">The Ethereum Virtual Machine</H2>
        <P>The EVM is the runtime environment that executes smart contract bytecode. Every full <Link to="/glossary#node" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Node">node</Link> runs the EVM independently and must arrive at the same output — this determinism is what makes smart contracts trustless. The EVM is stack-based, Turing-complete (with gas limits preventing infinite loops), and sandboxed (contracts cannot access the host system).</P>
        <P>Gas is the unit of computation cost in the EVM. Every operation has a fixed gas cost. If a transaction runs out of gas mid-execution, the state changes are reverted but the gas is still consumed — this prevents spam.</P>

        <H2 id="validators">Validators and block production</H2>
        <P>Under <Link to="/glossary#proof-of-stake" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Proof of Stake">Proof of Stake</Link>, validators are chosen pseudo-randomly to propose blocks, weighted by their stake (32 ETH minimum). Other validators form committees that attest to the proposed block's validity. This committee-based approach is more energy-efficient than <Link to="/glossary#mining" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Mining">mining</Link> while maintaining decentralisation.</P>
        <P>Validators who behave dishonestly can have their stake <strong>slashed</strong> — burned as a penalty. This economic incentive aligns validators with the network's honest operation. Learn more: <Link to="/ethereum/ethereum-validators-explained" className="text-secondary underline">Ethereum Validators Explained →</Link></P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
