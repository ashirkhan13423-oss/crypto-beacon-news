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

const URL = "https://www.cryptobeacon.site/guides/how-to-verify-a-crypto-wallet-address";
const TITLE = "How to Verify a Crypto Wallet Address Before Sending Funds | CryptoBeacon";
const DESC = "Learn the essential habits for verifying cryptocurrency wallet addresses to prevent catastrophic losses from typos, clipboard hijackers, and address poisoning.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Crypto transactions are irreversible. Never rely on verifying just the first and last few characters of an address.";

const faqs = [
  { q: "What happens if I send crypto to the wrong address?", a: "Because blockchains are immutable, the transaction cannot be reversed or refunded by any company or authority. The funds are permanently lost." },
  { q: "Can I use the same address for different cryptocurrencies?", a: "Usually no. Sending Bitcoin to an Ethereum address will result in a loss. However, EVM-compatible chains (like Ethereum, Polygon, and Arbitrum) do share the same address format (starting with 0x)." },
  { q: "What is a clipboard hijacker?", a: "It is a type of malware that monitors your computer's clipboard. When you copy a crypto address, the malware instantly replaces it with the hacker's address before you paste it." }
];

export const Route = createFileRoute("/guides/how-to-verify-a-crypto-wallet-address")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/how-to-verify-a-crypto-wallet-address', publishedTime: PUBLISHED, section: 'Guides' }),
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
            <li className="text-primary">Verifying Wallet Addresses</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-blue-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Security
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How to Verify a Crypto Wallet Address Before Sending Funds
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          One wrong character means total loss. Here is the strict verification protocol you should follow before every single transaction.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="why-verify">The Threat Landscape</H2>
        <P>You copy an address, paste it, and hit send. What could go wrong? In crypto, a lot. Clipboard hijacking malware can invisibly replace the copied address with a hacker's address. Furthermore, address poisoning scams generate vanity addresses that look identical to your friends' addresses, tricking you into sending funds to the wrong place.</P>

        <H2 id="verification-protocol">The 4-Step Verification Protocol</H2>
        <P>Adopt this process every time you send funds, regardless of the amount:</P>
        <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Never manually type an address:</strong> They are case-sensitive and complex (e.g., Ethereum addresses are 42 characters). Always copy and paste or scan a QR code.</li>
          <li><strong>Check the middle chunk:</strong> Don't just check the first 4 and last 4 characters. Scammers can spoof those easily. Randomly check a 4-character chunk right in the middle of the address against the original source.</li>
          <li><strong>Verify the network:</strong> Ensure both the sender and receiver are on the exact same blockchain network (e.g., sending USDT via the Tron network vs. the Ethereum network). Mismatched networks lead to lost funds.</li>
          <li><strong>Send a micro-test:</strong> If sending a large amount to a new address, send $5 first. Wait for it to clear. Once confirmed by the recipient, send the rest to that exact same address.</li>
        </ol>

        <H2 id="address-books">Use Whitelists and Address Books</H2>
        <P>The best way to avoid address errors is to stop interacting with raw addresses entirely. Use the "Address Book" or "Whitelist" features on your exchange or hardware wallet to save and name addresses you've already verified and successfully tested.</P>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
