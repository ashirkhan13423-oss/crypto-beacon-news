import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/private-key-vs-seed-phrase";
const TITLE = "Private Key vs Seed Phrase: What's the Difference? | CryptoBeacon";
const DESC =
  "Private key vs seed phrase — what each is, how they're related, when each is used, and the security implications of each type of cryptographic secret in self-custody.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What is the difference between a private key and a seed phrase?", a: "A seed phrase is the root backup for an entire HD wallet — from it, every private key is derived. A private key controls a single address. Your seed phrase generates hundreds of private keys; a private key is one leaf on that tree." },
  { q: "Which is more dangerous to lose — private key or seed phrase?", a: "In an HD wallet context, the seed phrase is far more dangerous. It controls everything. A single exposed private key compromises one address; an exposed seed phrase compromises the entire wallet — every address, every chain supported." },
  { q: "Can I back up my wallet with just a private key?", a: "You can back up a single address's funds with just that address's private key. But if you use an HD wallet and want to back up all current and future addresses, the seed phrase is the only complete backup. Backing up individual private keys is error-prone and incomplete." },
  { q: "Is a private key the same as a WIF key?", a: "WIF (Wallet Import Format) is just an encoding format for a private key — the same underlying 256-bit number, encoded differently for human readability. Converting between raw hex and WIF doesn't change the underlying key." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Private Key vs Seed Phrase: What's the Difference?",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "private key vs seed phrase difference, crypto private key explained, bitcoin seed phrase vs private key, which is more secure seed phrase or private key",
  articleSection: "Security",
  wordCount: 800,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Security", item: "https://www.cryptobeacon.site/security" },
    { "@type": "ListItem", position: 3, name: "Private Key vs Seed Phrase", item: URL },
  ],
};

export const Route = createFileRoute("/security/private-key-vs-seed-phrase")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Security" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
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
        <P>Think of the seed phrase as a master key mould and private keys as the actual keys it stamps out. Your seed phrase is input into a deterministic algorithm (BIP-32 HD wallet) that generates a tree of private keys — one for every address your wallet has ever generated, and every one it could generate in the future.</P>
        <P>This is why backing up the seed phrase is sufficient to back up the entire wallet. You don't need to back up individual private keys separately. The seed phrase regenerates all of them when needed.</P>

        <H2 id="when-used">When each is used</H2>
        <P><strong>The seed phrase</strong> is used in two situations: when you initially set up a wallet (you write it down), and when you need to restore a wallet on a new device. In normal operation, you should never need to enter or display your seed phrase.</P>
        <P><strong>Private keys</strong> are used automatically by wallet software every time you sign a transaction. You typically never interact with them directly. They may be exported if you want to import a specific address into a different wallet application, but this should be done with extreme care.</P>

        <H2 id="security">Security implications</H2>
        <P>An exposed seed phrase is far more catastrophic than an exposed private key. A single exposed private key compromises funds at one address — significant, but limited in scope. An exposed seed phrase compromises the entire wallet: every address, every token, every blockchain that wallet supports, including future addresses not yet generated.</P>
        <P>If you believe your seed phrase has been compromised, the response is urgent: create a new wallet on a new device, generate a fresh seed phrase, and transfer all funds to the new wallet immediately before the attacker acts.</P>
        <P>If you believe a single private key has been compromised: move the funds at that specific address to a fresh address and stop using the compromised one.</P>

        <section className="mt-xxl" aria-label="Frequently asked questions">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-lg cursor-pointer list-none">
                  <span className="font-body-lg text-body-lg text-primary font-semibold pr-md">{f.q}</span>
                  <Plus size={18} className="text-secondary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/security/what-is-a-seed-phrase" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is a Seed Phrase?</h3>
            </Link>
            <Link to="/guides/what-is-a-private-key" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Bitcoin Private Keys Explained</h3>
            </Link>
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Store a Seed Phrase Safely</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
