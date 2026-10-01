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
import hero from "@/assets/exchange-vs-wallet.webp";

const URL = "https://www.cryptobeacon.site/guides/how-to-move-crypto-from-coinbase-to-hardware-wallet";
const TITLE = "Transfer Crypto From Coinbase To A Hardware Wallet";
const DESC = "Step-by-step guide to transferring crypto from Coinbase to a Ledger or Trezor hardware wallet safely, avoiding high network fees and common mistakes.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Always send a small test transaction first before transferring your entire balance from Coinbase to your hardware wallet.";

const faqs = [
  { q: "How much does it cost to send from Coinbase to Ledger?", a: "Coinbase charges a network fee which varies based on network congestion. For Bitcoin and Ethereum, this can range from a few dollars to over $20 during busy times." },
  { q: "How long does a transfer take?", a: "Transfers depend on the blockchain network. Bitcoin usually takes 10-30 minutes, while Ethereum and Solana often take less than 5 minutes." },
  { q: "Can I cancel a Coinbase withdrawal?", a: "No. Once a cryptocurrency transaction is broadcasted to the blockchain, it is irreversible." }
];

export const Route = createFileRoute("/guides/how-to-move-crypto-from-coinbase-to-hardware-wallet")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/how-to-move-crypto-from-coinbase-to-hardware-wallet', publishedTime: PUBLISHED, section: 'Guides' }),
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
            <li className="text-primary">Coinbase to Hardware Wallet</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-blue-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Tutorials
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How to Move Crypto from Coinbase to a Hardware Wallet
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Taking self-custody of your crypto is a major step. Here is exactly how to safely withdraw from Coinbase to a Ledger, Trezor, or other hardware wallet.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="preparation">1. Prepare Your Hardware Wallet</H2>
        <P>Before initiating any transfer, ensure your hardware wallet is set up correctly. Plug it in, unlock it with your PIN, and open its companion software (like Ledger Live or Trezor Suite). Install the app for the specific cryptocurrency you want to transfer (e.g., the Bitcoin app or the Ethereum app).</P>

        <H2 id="get-address">2. Get Your Receiving Address</H2>
        <P>In your hardware wallet software, navigate to "Receive." Select the correct account (e.g., Bitcoin) and your hardware device will display an address. <strong>Crucial step:</strong> Verify that the address shown on your computer screen perfectly matches the address displayed on your physical hardware wallet screen. Once verified, copy the address to your clipboard.</P>

        <H2 id="coinbase">3. Initiate the Withdrawal on Coinbase</H2>
        <P>Log into Coinbase, go to "Send & Receive," and select the "Send" tab. Choose the asset you want to transfer. Paste the receiving address you copied from your hardware wallet. Double-check the network (for example, if sending ERC-20 tokens, make sure you are using the Ethereum network).</P>

        <H2 id="test-transaction">4. Send a Test Transaction</H2>
        <P>Never send your entire stack at once. Send a small test amount (e.g., $10). Pay the network fee, confirm the transaction, and wait for it to appear in your hardware wallet software. Once the test transaction arrives successfully, you can repeat the process with the remainder of your funds with complete confidence.</P>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
