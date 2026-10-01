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
import hero from "@/assets/hot-vs-cold-wallets.webp";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-crypto-cold-wallet-do-you-need-one";
const TITLE = "What Is a Crypto Cold Wallet? Do You Actually Need One?";
const DESC = "Learn what a crypto cold wallet is, how hardware storage protects your private keys offline, and whether your cryptocurrency portfolio requires one.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "A cold wallet never connects your private keys to the internet, making it immune to digital hacks, malware, and remote theft.";

const faqs = [
  { q: "What happens if I lose my cold wallet device?", a: "Your crypto is not lost. The device only holds the keys, not the coins. You can buy a new device from any brand and restore your wallet using your 12 or 24-word seed phrase." },
  { q: "Can a cold wallet be hacked?", a: "Remotely? No. Physically? Yes, if someone steals the device and knows your PIN, or if they find your written seed phrase. This is why physical security is paramount." },
  { q: "Are paper wallets considered cold storage?", a: "Yes, paper wallets are technically cold storage because they are offline. However, they are obsolete, fragile, and prone to user error when sweeping funds. Hardware wallets are the modern standard." }
];

export const Route = createFileRoute("/guides/what-is-a-crypto-cold-wallet-do-you-need-one")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/what-is-a-crypto-cold-wallet-do-you-need-one', publishedTime: PUBLISHED, section: 'Guides' }),
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
            <li className="text-primary">Crypto Cold Wallets</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-blue-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Hardware
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is a Crypto Cold Wallet and Do You Actually Need One?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Cold wallets provide the highest level of security for digital assets by taking your private keys offline. But are they necessary for everyone?
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="what-is">What is Cold Storage?</H2>
        <P>A "cold wallet" (most commonly a hardware wallet like a Ledger or Trezor) is a physical device that generates and stores your cryptocurrency private keys completely offline. When you want to send a transaction, you connect the device to your computer. The transaction is passed to the device, signed internally using the offline keys, and then passed back to the computer to be broadcast to the network. Your keys never touch your computer's memory or the internet.</P>

        <H2 id="hot-vs-cold">Hot vs. Cold</H2>
        <P>Contrast this with a "hot wallet" (like MetaMask, Exodus, or an exchange app). Hot wallets store your private keys in the software on your internet-connected phone or computer. If you accidentally download malware, click a malicious link, or your device is compromised, hackers can extract those keys and drain your funds instantly.</P>

        <H2 id="do-you-need">Do You Actually Need One?</H2>
        <P>Hardware wallets cost between $60 and $200. Here is a simple framework to decide if you need one:</P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Under $500 total value:</strong> A reputable hot wallet or top-tier exchange is likely sufficient. The cost of the device represents too high a percentage of your portfolio.</li>
          <li><strong>$1,000 to $5,000:</strong> Strongly recommended. At this point, the cost of a basic hardware wallet (like a Trezor Safe 3) acts as a cheap insurance policy.</li>
          <li><strong>Over $10,000:</strong> Absolutely mandatory. Holding five figures on an internet-connected device or a centralized exchange is an unacceptable security risk.</li>
        </ul>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
