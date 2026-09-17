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

const URL = "https://www.cryptobeacon.site/security/private-key-vs-seed-phrase";
const TITLE = "Private Key vs Seed Phrase: What's the Difference? | CryptoBeacon";
const DESC =
  "Private key vs seed phrase — what each is, how they're related, when each is used, and the security implications of each type of cryptographic secret in self-custody.";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is the difference between a private key and a seed phrase?", a: "A seed phrase is the root backup for an entire HD wallet — from it, every private key is derived. A private key controls a single address. Your seed phrase generates hundreds of private keys; a private key is one leaf on that tree." },
  { q: "Which is more dangerous to lose — private key or seed phrase?", a: "In an HD wallet context, the seed phrase is far more dangerous. It controls everything. A single exposed private key compromises one address; an exposed seed phrase compromises the entire wallet — every address, every chain supported." },
  { q: "Can I back up my wallet with just a private key?", a: "You can back up a single address's funds with just that address's private key. But if you use an HD wallet and want to back up all current and future addresses, the seed phrase is the only complete backup. Backing up individual private keys is error-prone and incomplete." },
  { q: "Is a private key the same as a WIF key?", a: "WIF (Wallet Import Format) is just an encoding format for a private key — the same underlying 256-bit number, encoded differently for human readability. Converting between raw hex and WIF doesn't change the underlying key." },
];




export const Route = createFileRoute("/security/private-key-vs-seed-phrase")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/private-key-vs-seed-phrase', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Private Key vs Seed Phrase: What's the Difference? | CryptoBeacon", description: "Private key vs seed phrase — what each is, how they're related, when each is used, and the security implications of each type of cryptographic secret in self-custody.", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/private-key-vs-seed-phrase", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Private Key vs Seed Phrase: What's the Difference? | CryptoBeacon", item: "https://www.cryptobeacon.site/security/private-key-vs-seed-phrase" }
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
            <li className="text-primary">Private Key vs Seed Phrase</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#8B5CF6] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Explainer
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Private Key vs Seed Phrase
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Both are critical secrets in self-custody — but they operate at different levels. Understanding the distinction is essential for properly securing your crypto.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="key-difference">The core difference</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {[
            { title: "Private Key", items: ["256-bit number (one per address)", "Controls a single wallet address", "Derived FROM the seed phrase", "Used to sign individual transactions", "Stored inside the wallet — rarely exported directly", "Exposure compromises one address"], color: "#F59E0B" },
            { title: "Seed Phrase", items: ["12 or 24 BIP-39 words", "Master root of the entire HD wallet", "Generates ALL private keys in the wallet", "Used to restore/recreate the entire wallet", "Written down during wallet setup", "Exposure compromises everything"], color: "#8B5CF6" },
          ].map((t) => (
            <div key={t.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-md" style={{ color: t.color }}>{t.title}</h3>
              <ul className="space-y-xs">
                {t.items.map((i) => <li key={i} className="font-body-sm text-body-sm text-on-surface flex items-start gap-xs"><span className="text-secondary mt-0.5 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <H2 id="relationship">How they relate</H2>
        <P>Think of the <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrase</Link> as a master key mould and <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private keys</Link> as the actual keys it stamps out. Your seed phrase is input into a deterministic algorithm (BIP-32 HD <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link>) that generates a tree of private keys — one for every address your wallet has ever generated, and every one it could generate in the future.</P>
        <P>This is why backing up the seed phrase is sufficient to back up the entire wallet. You don't need to back up individual private keys separately. The seed phrase regenerates all of them when needed.</P>

        <H2 id="when-used">When each is used</H2>
        <P><strong>The seed phrase</strong> is used in two situations: when you initially set up a wallet (you write it down), and when you need to restore a wallet on a new device. In normal operation, you should never need to enter or display your seed phrase.</P>
        <P><strong>Private keys</strong> are used automatically by wallet software every time you sign a transaction. You typically never interact with them directly. They may be exported if you want to import a specific address into a different wallet application, but this should be done with extreme care.</P>

        <H2 id="security">Security implications</H2>
        <P>An exposed seed phrase is far more catastrophic than an exposed private key. A single exposed private key compromises funds at one address — significant, but limited in scope. An exposed seed phrase compromises the entire wallet: every address, every token, every <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> that wallet supports, including future addresses not yet generated.</P>
        <P>If you believe your seed phrase has been compromised, the response is urgent: create a new wallet on a new device, generate a fresh seed phrase, and transfer all funds to the new wallet immediately before the attacker acts.</P>
        <P>If you believe a single private key has been compromised: move the funds at that specific address to a fresh address and stop using the compromised one.</P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
