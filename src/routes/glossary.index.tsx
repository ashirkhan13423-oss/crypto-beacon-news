import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/glossary";
const TITLE = "Crypto Glossary — A-Z Cryptocurrency Terms | CryptoBeacon";
const DESC = "A comprehensive A-Z glossary of cryptocurrency, blockchain, and DeFi terminology. Clear definitions with practical context.";

const glossaryTerms = [
  { term: "Blockchain", slug: "/guides/what-is-a-blockchain-fork", definition: "A distributed digital ledger that records transactions across a network of computers." },
  { term: "DeFi", slug: "/ethereum/what-is-defi-decentralized-finance", definition: "Decentralized Finance — financial services built on blockchains without traditional intermediaries." },
  { term: "Gas Fees", slug: "/ethereum/what-are-gas-fees-how-to-save", definition: "The cost of executing a transaction or smart contract on a blockchain like Ethereum." },
  { term: "Halving", slug: "/bitcoin/what-is-the-bitcoin-halving", definition: "A programmed event that cuts the block reward miners receive in half, reducing the rate of new Bitcoin issuance." },
  { term: "KYC", slug: "/guides/what-is-kyc-in-cryptocurrency", definition: "Know Your Customer — identity verification required by regulated exchanges and financial institutions." },
  { term: "Lightning Network", slug: "/bitcoin/bitcoin-lightning-network-explained", definition: "A Layer-2 payment protocol that enables fast, cheap Bitcoin transactions off-chain." },
  { term: "Mining", slug: "/bitcoin/what-is-bitcoin-mining", definition: "The process of validating transactions and adding new blocks to a Proof-of-Work blockchain." },
  { term: "Node", slug: "/bitcoin/what-is-a-bitcoin-node", definition: "A computer that maintains a copy of the blockchain and validates transactions independently." },
  { term: "Private Key", slug: "/guides/what-is-a-private-key", definition: "A secret cryptographic string that proves ownership of blockchain assets and authorizes transactions." },
  { term: "Proof of Stake", slug: "/ethereum/proof-of-stake-explained", definition: "A consensus mechanism where validators stake cryptocurrency as collateral to secure the network." },
  { term: "Seed Phrase", slug: "/security/what-is-a-seed-phrase", definition: "A set of 12 or 24 words that acts as a master backup for a cryptocurrency wallet." },
  { term: "Short Squeeze", slug: "/guides/what-is-a-short-squeeze-crypto-explained", definition: "A rapid price increase caused by forced buying as short sellers close losing positions." },
  { term: "Smart Contract", slug: "/ethereum/what-is-a-smart-contract", definition: "Self-executing code deployed on a blockchain that runs automatically when conditions are met." },
  { term: "Stablecoin", slug: "/guides/what-is-a-stablecoin", definition: "A cryptocurrency designed to maintain a stable value, typically pegged to the US dollar." },
  { term: "Staking", slug: "/ethereum/what-is-ethereum-staking", definition: "Locking up cryptocurrency to help secure a Proof-of-Stake network in exchange for rewards." },
  { term: "Wallet", slug: "/bitcoin/what-is-a-bitcoin-wallet", definition: "Software or hardware that stores cryptographic keys and enables sending and receiving cryptocurrency." },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const Route = createFileRoute("/glossary/")({
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
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Glossary" }])),
      },
    ],
  }),
  component: GlossaryHub,
});

function GlossaryHub() {
  const grouped = alphabet.map((letter) => ({
    letter,
    terms: glossaryTerms.filter((t) => t.term[0].toUpperCase() === letter),
  }));

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Glossary" }]} />

        <div className="mb-xxl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto Glossary
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            A clear, no-jargon reference for the most important terms in cryptocurrency and blockchain. Each definition includes links to our in-depth guides for further reading.
          </p>
        </div>

        {/* A-Z Navigation */}
        <nav className="flex flex-wrap gap-xs mb-xl" aria-label="Alphabetical navigation">
          {alphabet.map((letter) => {
            const hasTerms = glossaryTerms.some((t) => t.term[0].toUpperCase() === letter);
            return (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className={`w-9 h-9 flex items-center justify-center rounded-md font-label-caps text-label-caps transition-all ${
                  hasTerms
                    ? "bg-surface-container text-primary hover:bg-secondary hover:text-white"
                    : "bg-surface-container-low text-on-surface-variant/40 cursor-default"
                }`}
              >
                {letter}
              </a>
            );
          })}
        </nav>

        {/* Terms */}
        <div className="space-y-xl">
          {grouped
            .filter((g) => g.terms.length > 0)
            .map((g) => (
              <section key={g.letter} id={`letter-${g.letter}`} className="scroll-mt-28">
                <h2 className="font-headline-lg text-headline-lg text-primary border-b border-outline-variant pb-sm mb-md">
                  {g.letter}
                </h2>
                <div className="space-y-md">
                  {g.terms.map((t) => (
                    <div key={t.term} className="p-md rounded-lg border border-outline-variant bg-surface-container-low">
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
                        {t.term}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                        {t.definition}
                      </p>
                      <Link to={t.slug} className="text-secondary font-medium text-sm hover:underline">
                        Read Full Guide →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
