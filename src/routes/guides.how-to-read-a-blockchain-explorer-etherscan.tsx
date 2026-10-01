import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/read-block-explorer.webp";

const URL = "https://www.cryptobeacon.site/guides/how-to-read-a-blockchain-explorer-etherscan";
const TITLE = "How to Read a Blockchain Explorer: Etherscan Guide";
const DESC = "Learn how to use Etherscan to track your crypto transactions, verify smart contracts, and read complex blockchain data like a seasoned professional.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Etherscan does not hold your funds or control the network. It is simply a search engine that displays public data stored on the Ethereum blockchain.";

const faqs = [
  { q: "Why does my transaction say 'Pending'?", a: "A pending transaction has been broadcast to the network but has not yet been included in a block by a validator, usually because the gas fee you offered is too low." },
  { q: "What is an internal transaction?", a: "Internal transactions are transfers of ETH that occur as a result of smart contract executions, rather than direct transfers between user wallets." },
  { q: "Can I cancel a transaction using Etherscan?", a: "No. Etherscan is just a viewer. However, you can use your wallet to broadcast a new transaction with the same 'nonce' and a higher gas fee to replace the pending one." }
];

export const Route = createFileRoute("/guides/how-to-read-a-blockchain-explorer-etherscan")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/how-to-read-a-blockchain-explorer-etherscan', publishedTime: PUBLISHED, section: 'Guides' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: TITLE, description: DESC, imageUrl: "", datePublished: PUBLISHED, dateModified: MODIFIED, url: URL, section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: TITLE, item: URL }
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
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Etherscan Walkthrough</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-blue-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Tools
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How to Read a Blockchain Explorer (Etherscan Walkthrough)
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Etherscan looks intimidating, but it's just a search engine for the Ethereum blockchain. Here is how to navigate it and understand your transactions.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="tx-hash">Tracking a Transaction Hash (TxID)</H2>
        <P>When you send crypto, your wallet provides a Transaction Hash (TxID). Pasting this into the Etherscan search bar brings up the receipt.</P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Status:</strong> Will show Success (green), Pending (orange), or Failed (red). If it failed, hover over the red icon to see the error message (like "Out of Gas").</li>
          <li><strong>From / To:</strong> The wallet address initiating the transaction, and the receiving address or smart contract.</li>
          <li><strong>Value:</strong> The amount of ETH transferred. (Note: ERC-20 token transfers will appear lower down in the "Tokens Transferred" section).</li>
          <li><strong>Transaction Fee:</strong> Exactly how much ETH was paid to the network to process this action.</li>
        </ul>

        <H2 id="wallet-address">Looking Up a Wallet Address</H2>
        <P>Pasting your public wallet address into Etherscan gives you an overview of your entire on-chain history.</P>
        <P>The "ETH Balance" shows your raw Ether, but the dropdown menu labeled "Token Holdings" reveals all your ERC-20 tokens (like USDC or LINK) and NFTs. The table below shows your complete history, categorized into regular Transactions, Internal Transactions, and Token Transfers (ERC-20/ERC-721).</P>

        <H2 id="contracts">Verifying Smart Contracts</H2>
        <P>If you are interacting with a new decentralized app (dApp) or token, you should search its contract address on Etherscan. Click the "Contract" tab with the green checkmark to view the source code. If there is no green checkmark, the code is unverified, meaning it is hidden from the public—a major red flag.</P>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
