import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-node-explainer.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-node";
const TITLE = "What Is a Bitcoin Node and Why Does Running One Matter? | CryptoBeacon";
const DESC =
  "A plain-language guide to Bitcoin full nodes — what they do, how they differ from miners, and why running your own node is the strongest form of self-sovereignty in the Bitcoin network.";
const PUBLISHED = "2026-08-29";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a Bitcoin node to use Bitcoin?",
    a: "No. You can send and receive Bitcoin through a wallet without running a node. However, without your own node, your wallet trusts someone else's node to verify that transactions are valid — which is a form of counterparty trust.",
  },
  {
    q: "How much storage does a full node require?",
    a: "As of 2026, the full Bitcoin blockchain is over 600 GB. A pruned node (which only stores recent data) can run in under 10 GB, while still validating every transaction from genesis to the present.",
  },
  {
    q: "Can I mine Bitcoin with a full node?",
    a: "Not on its own. Mining requires specialized ASIC hardware and mining software separate from Bitcoin Core. Running a full node does not make you a miner, although professional miners always run one.",
  },
  {
    q: "What software do I need to run a Bitcoin node?",
    a: "Bitcoin Core is the original and most widely used implementation. It runs on Windows, macOS, and Linux. Plug-and-play node hardware like Umbrel or Start9 makes setup easier for non-technical users.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Bitcoin Node and Why Does Running One Matter?",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Ashir",
    url: "https://www.cryptobeacon.site/author",
    worksFor: { "@type": "Organization", name: "CryptoBeacon" },
  },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "bitcoin node, full node, bitcoin core, how to run a bitcoin node, bitcoin self-sovereignty, SPV wallet, pruned node",
  articleSection: "Bitcoin",
  wordCount: 1400,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cryptobeacon.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bitcoin",
      item: "https://www.cryptobeacon.site/bitcoin",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Is a Bitcoin Node?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/what-is-a-bitcoin-node")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Bitcoin" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
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
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-lg font-label-caps text-label-caps text-on-surface-variant"
        >
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is a Bitcoin Node?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is a Bitcoin Node and Why Does Running One Matter?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 29, 2026</time>}
          readTime="6 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Glowing Bitcoin network node connected to multiple peer nodes via luminous network lines"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          When people talk about Bitcoin, they often focus on wallets, exchanges, and prices. But
          the quiet infrastructure that makes all of that trustworthy is the global network of{" "}
          <strong>full nodes</strong> — computers independently verifying every transaction and
          every block ever added to the chain.
        </P>
        <P>
          Understanding what a node is, and what it actually does, cuts to the heart of why Bitcoin
          is structurally different from a traditional payment system.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-a-node">What Is a Bitcoin Node?</H2>
        <P>
          A Bitcoin node is any computer running Bitcoin software that connects to the peer-to-peer
          Bitcoin network. There are several types, but the most important is the{" "}
          <strong>full node</strong>.
        </P>
        <P>
          A full node downloads the entire Bitcoin blockchain from the genesis block (January 2009)
          to the present, and independently verifies every single transaction against Bitcoin's
          consensus rules. It doesn't trust any other participant — not miners, not exchanges, not
          even the developers who wrote the software. It checks everything itself.
        </P>
        <P>
          This is the fundamental mechanism behind Bitcoin's trustlessness. When you receive a
          payment, a full node confirms that the coins being sent to you were not already spent, that
          the transaction follows the rules, and that the block containing it is valid — all without
          asking anyone's permission.
        </P>

        <H2 id="nodes-vs-miners">Nodes vs. Miners: What's the Difference?</H2>
        <P>
          This is one of the most common points of confusion in Bitcoin. Nodes and miners are
          different roles, even though miners always run nodes.
        </P>
        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Miners</strong> compete to add new blocks to the blockchain. They do this by
              solving a computationally expensive puzzle (Proof-of-Work) using specialized ASIC
              hardware. Miners earn newly issued bitcoin and transaction fees as a reward.
            </li>
            <li>
              <strong>Full nodes</strong> validate the blocks that miners produce. If a miner creates
              an invalid block — one that breaks the rules (e.g., tries to issue more bitcoin than
              the protocol allows) — every full node in the network will reject it. The miner wastes
              their energy and earns nothing.
            </li>
          </ul>
        </div>
        <P>
          This is why running a full node is a form of power within the Bitcoin network. Nodes
          enforce the rules. Miners only produce blocks; they cannot change what the rules are.
        </P>

        <H2 id="types-of-nodes">Full Nodes, Pruned Nodes, and SPV Clients</H2>
        <P>
          Not every "node" stores the full blockchain. There are practical variations:
        </P>
        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Full archival node:</strong> Stores and validates the entire blockchain
              history (600+ GB as of 2026). Used by exchanges, block explorers, and serious
              self-custody setups.
            </li>
            <li>
              <strong>Pruned full node:</strong> Validates every block but deletes old transaction
              data once processed, keeping only the UTXO set (current balances). Requires under
              10 GB. Provides the same validation security as a full archival node.
            </li>
            <li>
              <strong>SPV client (Simplified Payment Verification):</strong> Used by most mobile
              wallets. Downloads only block headers, not full transaction data. Verifies that a
              transaction was included in a block, but trusts that the block itself is valid —
              meaning it inherits some trust assumptions from the full nodes it connects to.
            </li>
          </ul>
        </div>

        <H2 id="why-run-a-node">Why Run Your Own Node?</H2>
        <P>
          If your wallet already works fine, why bother running a node? The answer is about
          verification, privacy, and network health.
        </P>
        <P>
          <strong>Verification:</strong> When you connect your wallet to someone else's node, you
          are trusting that node operator to tell you the truth about your balance and transaction
          history. Your own full node eliminates that dependency entirely — you verify everything
          yourself.
        </P>
        <P>
          <strong>Privacy:</strong> When you query a remote node, that operator can see your IP
          address and the wallet addresses you're checking. With your own node, those queries stay
          local.
        </P>
        <P>
          <strong>Network resilience:</strong> The Bitcoin network is more decentralized and
          censorship-resistant when more independent nodes are running across the globe. Each new
          node makes the network harder to attack or shut down.
        </P>

        <H2 id="how-to-run-a-node">How to Get Started</H2>
        <P>
          The most straightforward path is to download{" "}
          <strong>Bitcoin Core</strong> (bitcoin.org/en/bitcoin-core/), the reference implementation
          of Bitcoin. It runs on Windows, macOS, and Linux. For a pruned setup, you can configure
          it to use under 10 GB of disk space.
        </P>
        <P>
          If you prefer plug-and-play hardware, projects like <strong>Umbrel</strong> (umbrel.com)
          and <strong>Start9</strong> bundle Bitcoin Core with a simple web interface on a dedicated
          device like a Raspberry Pi or a mini PC, making the setup accessible to non-technical
          users.
        </P>
        <P>
          Once your node is synced, you can connect compatible wallets (like Sparrow Wallet) to
          verify your own transactions without relying on any third party.
        </P>

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://bitcoin.org/en/full-node"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org — Running a Full Node
            </a>
          </li>
          <li>
            <a
              href="https://developer.bitcoin.org/devguide/p2p_network.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Developer Guide — P2P Network
            </a>
          </li>
          <li>
            <a
              href="https://bitcoin.org/bitcoin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/what-is-bitcoin-mining"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is Bitcoin Mining?
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-a-bitcoin-wallet"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Bitcoin Wallet?
              </h3>
            </Link>
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Not Your Keys, Not Your Coins
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
