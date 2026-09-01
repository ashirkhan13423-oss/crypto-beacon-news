import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-seed-phrase";
const TITLE = "What Is a Bitcoin Seed Phrase? BIP-39 Explained | CryptoBeacon";
const DESC =
  "A Bitcoin seed phrase is the 12 or 24 words that back up your entire wallet. Learn what seed phrases are, how BIP-39 works, 12 vs 24 words, and why losing yours means losing your Bitcoin.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is a Bitcoin seed phrase?",
    a: "A seed phrase (also called a recovery phrase or mnemonic) is a sequence of 12 or 24 common English words that encodes your wallet's master private key. It can be used to restore your entire wallet — every address and key — on any compatible wallet software.",
  },
  {
    q: "What is BIP-39?",
    a: "BIP-39 (Bitcoin Improvement Proposal 39) is the standard that defines how seed phrases are generated and what words can be used. It specifies a list of 2,048 words and the algorithm for converting them into a binary seed used to derive wallet keys.",
  },
  {
    q: "Is 12 words or 24 words more secure?",
    a: "Both are extremely secure against brute-force attacks. A 12-word phrase provides 128 bits of entropy; 24 words provide 256 bits. In practice, either is secure enough — no computer that exists or is conceivable can brute-force either. Some prefer 24 words for additional margin.",
  },
  {
    q: "Can I share part of my seed phrase with someone for help?",
    a: "No. Never share any portion of your seed phrase with anyone. Even sharing the first few words reduces the search space for an attacker. A legitimate support person from any wallet company will never ask for it.",
  },
  {
    q: "What if I lose my seed phrase?",
    a: "If your seed phrase is lost and your wallet device is also lost, damaged, or reset, your funds are permanently inaccessible. There is no recovery authority, no customer support line, and no password reset. This is why a physical backup is essential from day one.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Bitcoin Seed Phrase? BIP-39, 12 vs 24 Words Explained",
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
    logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords:
    "what is a bitcoin seed phrase, BIP39 explained, 12 word seed phrase, 24 word seed phrase, bitcoin recovery phrase, mnemonic wallet backup, how seed phrases work",
  articleSection: "Bitcoin",
  wordCount: 900,
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
    { "@type": "ListItem", position: 3, name: "What Is a Bitcoin Seed Phrase?", item: URL },
  ],
};

export const Route = createFileRoute("/bitcoin/what-is-a-bitcoin-seed-phrase")({
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
    <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">
      {children}
    </h2>
  );
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
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is a Bitcoin Seed Phrase?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#8B5CF6] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin · Essential
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is a Bitcoin Seed Phrase?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The 12 or 24 words printed on a card when you set up a wallet. They look random. They are the most important thing you own in crypto.
        </p>

        <Author />

        {/* Critical warning */}
        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <div>
            <p className="font-body-lg text-body-lg text-on-surface font-semibold mb-xs">Never share your seed phrase with anyone</p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              No wallet company, exchange, or support team will ever ask for it. Anyone who does is attempting to steal your funds.
            </p>
          </div>
        </div>

        <H2 id="what-is">What is a seed phrase?</H2>
        <P>
          A seed phrase — also called a recovery phrase, backup phrase, or mnemonic — is a sequence of 12 or 24 ordinary English words. These words aren't random in the way a password is random. They are generated by your wallet hardware or software using a cryptographically secure random number generator, then encoded into words from a standardised list of 2,048 words defined by <strong>BIP-39</strong>.
        </P>
        <P>
          Examples of words from the BIP-39 list include: abandon, ability, able, above, absent, absorb. Every word you see in your seed phrase comes from this same fixed list — which means the words are designed to be unambiguous, easy to write down, and readable across different fonts and handwriting.
        </P>

        <H2 id="bip39">How BIP-39 works</H2>
        <P>
          BIP-39 (Bitcoin Improvement Proposal 39) is the technical standard, published in 2013, that defines how seed phrases are generated and used. Here is the process in plain terms:
        </P>
        <ol className="list-decimal list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li>Your wallet generates a large random number (128 bits for 12 words, 256 bits for 24 words).</li>
          <li>A checksum is calculated and appended to the random bits.</li>
          <li>The combined bit string is split into groups of 11 bits.</li>
          <li>Each 11-bit group is used as an index into the 2,048-word list.</li>
          <li>The resulting words are your seed phrase.</li>
        </ol>
        <P>
          To restore a wallet, this process runs in reverse: words → bits → seed → master private key → all wallet addresses and keys.
        </P>

        <H2 id="12-vs-24">12 words vs 24 words</H2>
        <P>
          Both are secure. A 12-word phrase provides 128 bits of entropy. A 24-word phrase provides 256 bits. To put this in perspective: brute-forcing a 128-bit phrase would require more attempts than there are atoms in the observable universe. No computer that exists or could be built with current physics can do it.
        </P>
        <P>
          The practical difference is convenience vs margin. A 24-word phrase is longer to transcribe accurately but gives additional security margin against future cryptographic weaknesses that no one expects but some prefer to hedge against. Most hardware wallets and popular software wallets default to 12 or 24 words depending on their implementation.
        </P>

        <H2 id="one-backup">One phrase, all your wallets</H2>
        <P>
          Modern wallets use the HD (Hierarchical Deterministic) standard (BIP-32/44). This means your single seed phrase is the root of a mathematically deterministic tree of keys. Every address your wallet has ever generated — every receiving address, every change address — is derived from this one root.
        </P>
        <P>
          This is why seed phrases are so powerful: you only need to back up one thing. And it is why they are so dangerous: anyone who finds your seed phrase gets access to everything your wallet has ever generated or will generate.
        </P>

        <H2 id="what-not-to-do">What you must never do with a seed phrase</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface">
          <li>Type it into any website or app — even one that looks legitimate</li>
          <li>Store it digitally (notes app, email, cloud storage, screenshot)</li>
          <li>Share it with any person, including support staff or family</li>
          <li>Buy a hardware wallet second-hand if it came with a pre-filled seed phrase</li>
          <li>Photograph it and store the photo on your phone</li>
        </ul>
        <P>
          For how to store it safely:{" "}
          <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary underline">
            How to Store a Seed Phrase Safely →
          </Link>
        </P>

        {/* FAQ */}
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
            <Link to="/bitcoin/bitcoin-wallets-complete-guide" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Bitcoin Wallets: Complete Guide</h3>
            </Link>
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Store a Seed Phrase Safely</h3>
            </Link>
            <Link to="/bitcoin/what-happens-if-you-lose-your-seed-phrase" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Happens If You Lose Your Seed Phrase?</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
