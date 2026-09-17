import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/what-is-a-seed-phrase";
const TITLE = "What Is a Seed Phrase? Security Guide for Crypto Users | CryptoBeacon";
const DESC = "A security-focused guide to seed phrases — why they are the highest-value target in crypto, how attackers try to steal them, and the threat model every self-...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is a seed phrase in simple terms?", a: "A seed phrase is 12 or 24 words that serve as the master backup for your entire cryptocurrency wallet. Anyone who has these words can regenerate your wallet's private keys and access all your funds on any supported blockchain, on any compatible wallet app." },
  { q: "Why is a seed phrase so valuable to attackers?", a: "A seed phrase is the equivalent of the master key to every account in a bank, plus every safe deposit box, plus an unlimited power of attorney — except that crypto transactions are irreversible. Stealing someone's seed phrase gives instant, irrecoverable access to everything they hold in that wallet." },
  { q: "Where do most seed phrase thefts happen?", a: "The majority happen through phishing (fake wallet websites or apps), social engineering (fake support agents), or digital storage (cloud photos, email drafts, notes apps). Physical theft of written seed phrases is less common but also occurs." },
  { q: "Does the order of words matter?", a: "Yes. A seed phrase must be entered in the exact original order to restore the wallet correctly. The same 12 words in a different order generate a completely different wallet (or an invalid phrase). Always record words with their numbered positions." },
];




export const Route = createFileRoute("/security/what-is-a-seed-phrase")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/what-is-a-seed-phrase', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Is a Seed Phrase? Security Guide for Crypto Users | CryptoBeacon", description: "A security-focused guide to seed phrases — why they are the highest-value target in crypto, how attackers try to steal them, and the threat model every self-...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/what-is-a-seed-phrase", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "What Is a Seed Phrase? Security Guide for Crypto Users | CryptoBeacon", item: "https://www.cryptobeacon.site/security/what-is-a-seed-phrase" }
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
            <li className="text-primary">What Is a Seed Phrase?</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#8B5CF6] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Seed Phrase
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is a Seed Phrase?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          A security-focused explanation of what <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrases</Link> are, why they make you a target, and the threat model every self-custody user must understand.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="what-is">What is a seed phrase?</H2>
        <P>A seed phrase is a sequence of 12 or 24 random words — selected from a standardised list of 2,048 words (BIP-39) — that encodes your <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link>'s master cryptographic secret. Every <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private key</Link> in your wallet is mathematically derived from this phrase. It is the root of everything.</P>
        <P>When you set up a hardware wallet, software wallet, or most non-custodial wallets, the first thing they do is generate a seed phrase and ask you to write it down. This backup is what lets you restore your wallet on a new device if the original is lost, damaged, or stolen.</P>

        <H2 id="why-target">Why seed phrases are the primary target</H2>
        <P>From an attacker's perspective, a seed phrase is the most valuable data they can steal from a crypto user. Unlike a password, it cannot be reset. Unlike a credit card number, there is no fraud department to call. Unlike a private key, a single seed phrase gives access to every address and every <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> supported by that wallet standard.</P>
        <P>The economics are straightforward: stealing one seed phrase can yield immediate, irreversible access to the victim's entire self-custody holdings. This is why enormous resources — sophisticated phishing campaigns, fake apps, social engineering scripts, malware — are deployed specifically to obtain seed phrases.</P>

        <H2 id="attack-vectors">How attackers steal seed phrases</H2>
        <div className="space-y-md my-lg">
          {[
            { method: "Fake wallet websites", desc: "Clones of MetaMask, Trust Wallet, or Ledger websites that prompt 'restoration' — entering your phrase sends it directly to the attacker.", color: "#EF4444" },
            { method: "Phishing emails and DMs", desc: "Messages claiming your wallet needs to be verified, secured, or migrated. They contain links to seed-harvesting sites.", color: "#EF4444" },
            { method: "Fake support agents", desc: "Scammers pose as wallet company employees on Twitter, Discord, Reddit, or Telegram and ask for your seed phrase to 'help' with an issue.", color: "#F59E0B" },
            { method: "Digital storage theft", desc: "If you photograph your seed phrase and it is backed up to iCloud, Google Photos, or Dropbox, attackers who gain access to your cloud account get your phrase.", color: "#F59E0B" },
            { method: "Malware keyloggers", desc: "Malicious software monitors keystrokes and clipboard. If you ever type or paste your seed phrase, it may be captured and sent to an attacker.", color: "#EF4444" },
          ].map((a) => (
            <div key={a.method} className="flex gap-md p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="w-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{a.method}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <H2 id="rules">The non-negotiable rules</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface">
          <li>Never type your seed phrase into any website, app, or form — ever</li>
          <li>Never photograph it or store it digitally in any form</li>
          <li>Never share it with anyone, including family, under any circumstances</li>
          <li>Write it down physically during wallet setup and store it securely offline</li>
          <li>Make at least two physical copies and store them in separate locations</li>
        </ul>
        <P>Full storage guide: <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary underline">How to Store a Seed Phrase Safely →</Link></P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
