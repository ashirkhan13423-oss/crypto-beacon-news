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

const URL = "https://www.cryptobeacon.site/security/address-poisoning-scams-how-they-work";
const TITLE = "Address Poisoning Scams: How They Work and How to Avoid Them | CryptoBeacon";
const DESC = "Address poisoning is a crypto scam where attackers send zero-value transactions from an address that looks almost identical to yours. Learn how it works and how to protect yourself.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Never copy-paste an address from your transaction history. Always verify the full address, not just the first and last characters.";

const faqs = [
  { q: "What is address poisoning?", a: "Address poisoning is a scam where an attacker sends a tiny or zero-value transaction to your wallet from an address that closely resembles one you frequently use, hoping you'll copy it from your transaction history for future transfers." },
  { q: "Can address poisoning drain my wallet?", a: "No. The scammer does not gain access to your wallet or private keys. The only way you lose funds is if you mistakenly copy the poisoned address and send crypto to it." },
  { q: "How do scammers get an address that looks like mine?", a: "They use vanity address generators to brute-force an address that matches the first and last 4-6 characters of a legitimate address in your transaction history." }
];

export const Route = createFileRoute("/security/address-poisoning-scams-how-they-work")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/address-poisoning-scams-how-they-work', publishedTime: PUBLISHED, section: 'Security' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: TITLE, description: DESC, imageUrl: "", datePublished: PUBLISHED, dateModified: MODIFIED, url: URL, section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
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
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Address Poisoning Scams</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Phishing
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Address Poisoning Scams: How They Work and How to Avoid Them
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Address poisoning relies on the human habit of verifying only the start and end of a crypto address. Here's how scammers exploit this and how to stay safe.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="mechanics">How Address Poisoning Works</H2>
        <P>The mechanics of an address poisoning attack are simple but highly effective because they exploit human convenience rather than complex smart contract vulnerabilities.</P>
        
        <ol className="list-decimal pl-lg space-y-md mb-xl font-body-lg text-body-lg text-on-surface">
          <li><strong>Monitoring:</strong> Scammers use bots to monitor blockchain networks (like Ethereum, Polygon, or BNB Chain) for regular transactions between two wallets.</li>
          <li><strong>Generation:</strong> The scammer uses a vanity address generator to create a custom address that shares the exact first 4-5 and last 4-5 characters of the address you regularly send funds to.</li>
          <li><strong>Poisoning:</strong> The scammer sends a transaction of $0.00 to your wallet from the spoofed address. This "poisons" your transaction history, placing the fake address right next to the real one.</li>
          <li><strong>The Trap:</strong> The next time you want to send crypto, you might open your wallet, go to your transaction history, copy the most recent address that "looks right," and send a large sum. The funds go directly to the scammer.</li>
        </ol>

        <H2 id="flowchart">The Attack Flowchart</H2>
        <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant mb-xl">
          <div className="flex flex-col md:flex-row gap-sm text-sm">
            <div className="flex-1 bg-surface-container p-sm rounded-lg border border-outline">
              <span className="font-bold text-primary block mb-xs">1. Observation</span>
              User sends 1 ETH to `0xAb...C123`
            </div>
            <div className="hidden md:flex items-center justify-center text-on-surface-variant">→</div>
            <div className="flex-1 bg-surface-container p-sm rounded-lg border border-outline">
              <span className="font-bold text-primary block mb-xs">2. Spoofing</span>
              Bot generates `0xAb...dC123` (fake)
            </div>
            <div className="hidden md:flex items-center justify-center text-on-surface-variant">→</div>
            <div className="flex-1 bg-surface-container p-sm rounded-lg border border-outline">
              <span className="font-bold text-primary block mb-xs">3. Poisoning</span>
              Bot sends 0 ETH from fake address to User
            </div>
            <div className="hidden md:flex items-center justify-center text-on-surface-variant">→</div>
            <div className="flex-1 bg-surface-container p-sm rounded-lg border border-outline border-red-500">
              <span className="font-bold text-red-500 block mb-xs">4. Execution</span>
              User copies fake address from history and sends funds
            </div>
          </div>
        </div>

        <H2 id="prevention">How to Avoid Address Poisoning</H2>
        <P>Preventing address poisoning is entirely about changing your habits when initiating transactions:</P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Never copy-paste from transaction history:</strong> This is the most crucial rule. Always get the address directly from the recipient or a trusted saved address book.</li>
          <li><strong>Verify the entire address:</strong> Do not just check the first and last four characters. Verify every single character, or at least a random chunk in the middle.</li>
          <li><strong>Use the address book feature:</strong> Most modern wallets allow you to save trusted addresses to an address book. Use this feature and label your addresses clearly.</li>
          <li><strong>Use ENS or Web3 Domains:</strong> Whenever possible, send to human-readable names like <code>alice.eth</code> instead of raw hexadecimal strings.</li>
        </ul>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
