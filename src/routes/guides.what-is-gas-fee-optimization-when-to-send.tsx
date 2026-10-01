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
import hero from "@/assets/ethereum-gas-fees.webp";

const URL = "https://www.cryptobeacon.site/guides/what-is-gas-fee-optimization-when-to-send";
const TITLE = "Gas Fee Optimization: Best Time To Send Transactions";
const DESC = "Learn how to optimize Ethereum gas fees by understanding network congestion, base fees, priority tips, and finding the best time to send transactions.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Gas fees are lowest during the weekend (specifically Sunday morning UTC) and highest during US weekday business hours.";

const faqs = [
  { q: "What is Gwei?", a: "Gwei is a denomination of Ether (ETH), specifically one-billionth of an ETH. Gas prices are measured in Gwei." },
  { q: "Will a failed transaction still charge me gas?", a: "Yes. The network still had to process the computational work to determine that the transaction failed, so you must pay for that work." },
  { q: "How can I avoid high gas fees?", a: "Transact during off-peak hours, use Layer 2 networks like Arbitrum or Optimism, and avoid performing complex smart contract interactions during extreme market volatility." }
];

export const Route = createFileRoute("/guides/what-is-gas-fee-optimization-when-to-send")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/what-is-gas-fee-optimization-when-to-send', publishedTime: PUBLISHED, section: 'Guides' }),
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
            <li className="text-primary">Gas Fee Optimization</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-blue-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Economics
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is Gas Fee Optimization? When to Send Transactions
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Don't overpay for blockchain transactions. Learn the mechanics of gas fees and the best times to move your crypto cheaply.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="what-is-gas">Understanding Gas Mechanics</H2>
        <P>Gas is the computational fuel required to process a transaction or execute a smart contract on networks like Ethereum. The fee you pay is calculated by multiplying the gas limit (the amount of computation needed) by the gas price (the current network rate, measured in Gwei).</P>
        <P>Under EIP-1559, this cost is split into two parts: a <strong>Base Fee</strong> (which is burned and determined algorithmically by network demand) and a <strong>Priority Fee</strong> (a tip given to validators to incentivize them to include your transaction faster).</P>

        <H2 id="when-to-send">The Best Time to Transact</H2>
        <P>Network congestion dictates the base fee. The busiest times correspond with peak US and European business hours. Conversely, the quietest times offer the cheapest rates:</P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Best Times:</strong> Saturday and Sunday mornings (UTC), or late nights on weekdays in the US time zones.</li>
          <li><strong>Worst Times:</strong> Tuesday through Thursday, between 8 AM and 1 PM Eastern Time, especially during volatile market events or major NFT mints.</li>
        </ul>

        <H2 id="tools">Tools for Gas Fee Optimization</H2>
        <P>Instead of guessing, use gas trackers to monitor the network in real-time:</P>
        <div className="bg-surface-container p-md rounded-xl border border-outline mb-xl space-y-sm">
          <p><strong>Etherscan Gas Tracker:</strong> Provides a live look at the current Low, Average, and High Gwei costs.</p>
          <p><strong>Blocknative Gas Estimator:</strong> Offers a browser extension that shows the current gas price directly in your toolbar.</p>
          <p><strong>Wallet settings:</strong> Advanced wallets like MetaMask allow you to manually adjust your Max Base Fee and Priority Fee. If you aren't in a rush, you can lower your max fee and wait for network congestion to clear before the transaction processes.</p>
        </div>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
