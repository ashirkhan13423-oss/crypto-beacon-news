import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/how-ethereum-works";
const TITLE = "How Ethereum Works: EVM, Accounts, Transactions & Consensus | CryptoBeacon";
const DESC =
  "A technical yet accessible explanation of how Ethereum works — the EVM, account types, transaction lifecycle, Proof-of-Stake consensus, and block production explained clearly.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What are the two types of Ethereum accounts?", a: "Externally Owned Accounts (EOAs) are controlled by a private key — these are regular user wallets. Contract Accounts are controlled by smart contract code deployed on the blockchain — no private key exists, and the contract's own code determines how it behaves." },
  { q: "What is a transaction on Ethereum?", a: "A transaction is a signed message from an EOA that changes the state of the blockchain — transferring ETH, deploying a smart contract, or calling a contract function. Every transaction consumes gas and requires a fee paid in ETH." },
  { q: "What is 'finality' in Ethereum?", a: "Finality means a transaction cannot be reversed. Under Ethereum's Proof-of-Stake with Casper FFG, finality is achieved after two checkpoint epochs (~12.8 minutes). Before that point, a transaction is confirmed but theoretically reversible under extreme conditions." },
  { q: "What is the mempool?", a: "The mempool (memory pool) is a waiting room for unconfirmed transactions. When you submit a transaction, it enters the mempool and waits for a validator to include it in a block. Transactions with higher priority fees get picked up faster during congestion." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Ethereum Works: EVM, Accounts, Transactions & Consensus",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "how ethereum works, ethereum EVM explained, ethereum accounts EOA, ethereum transactions, proof of stake consensus ethereum, ethereum block production",
  articleSection: "Ethereum",
  wordCount: 900,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
    { "@type": "ListItem", position: 3, name: "How Ethereum Works", item: URL },
  ],
};

export const Route = createFileRoute("/ethereum/how-ethereum-works")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Ethereum" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
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
          The EVM, account types, transaction lifecycle, validators, and block production — the mechanics behind the world's most programmable blockchain.
        </p>
        <Author />

        <H2 id="state-machine">Ethereum as a state machine</H2>
        <P>The simplest mental model for Ethereum is a global state machine. The "state" is a snapshot of every account balance and every piece of smart contract storage on the network at a given moment. Transactions are inputs that transition the state from one version to the next — every transaction changes something, and every change is recorded permanently.</P>
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
        <P>The EVM is the runtime environment that executes smart contract bytecode. Every full node runs the EVM independently and must arrive at the same output — this determinism is what makes smart contracts trustless. The EVM is stack-based, Turing-complete (with gas limits preventing infinite loops), and sandboxed (contracts cannot access the host system).</P>
        <P>Gas is the unit of computation cost in the EVM. Every operation has a fixed gas cost. If a transaction runs out of gas mid-execution, the state changes are reverted but the gas is still consumed — this prevents spam.</P>

        <H2 id="validators">Validators and block production</H2>
        <P>Under Proof of Stake, validators are chosen pseudo-randomly to propose blocks, weighted by their stake (32 ETH minimum). Other validators form committees that attest to the proposed block's validity. This committee-based approach is more energy-efficient than mining while maintaining decentralisation.</P>
        <P>Validators who behave dishonestly can have their stake <strong>slashed</strong> — burned as a penalty. This economic incentive aligns validators with the network's honest operation. Learn more: <Link to="/ethereum/ethereum-validators-explained" className="text-secondary underline">Ethereum Validators Explained →</Link></P>

        <section className="mt-xxl" aria-label="Frequently asked questions">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-lg cursor-pointer list-none">
                  <span className="font-body-lg text-body-lg text-primary font-semibold pr-md">{f.q}</span>
                  <Plus size={18} className="text-secondary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/ethereum/what-is-ethereum" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is Ethereum?</h3>
            </Link>
            <Link to="/ethereum/proof-of-stake-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Proof of Stake Explained</h3>
            </Link>
            <Link to="/ethereum/ethereum-validators-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Ethereum Validators Explained</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
