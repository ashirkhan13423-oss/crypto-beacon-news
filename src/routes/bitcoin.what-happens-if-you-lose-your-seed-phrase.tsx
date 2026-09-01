import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/what-happens-if-you-lose-your-seed-phrase";
const TITLE = "What Happens If You Lose Your Bitcoin Seed Phrase? | CryptoBeacon";
const DESC =
  "Losing your Bitcoin seed phrase with no other backup means permanent, irrecoverable loss of access to your funds. Understand why, what limited options exist, and how to prevent it.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is there any way to recover a lost seed phrase?",
    a: "If the seed phrase itself is lost and you no longer have access to the wallet device, recovery is generally impossible. Bitcoin has no central authority to reset access. Some specialist firms offer partial recovery if you remember most words or have other partial information, but success is not guaranteed and their services can be expensive.",
  },
  {
    q: "What if I still have my hardware wallet device but lost my seed phrase?",
    a: "If the device is functional and you know the PIN, you can still access and move your funds. The seed phrase is only needed if the device is lost, damaged, reset, or the PIN is forgotten. In this situation: move funds immediately to a new wallet with a properly backed-up seed phrase.",
  },
  {
    q: "Can I find my seed phrase in my wallet app?",
    a: "Most wallet apps allow you to view the seed phrase in settings if the wallet is still set up on the device and you have the PIN or password. Check immediately — if the device is still functional, this is your window to retrieve and back up the phrase properly.",
  },
  {
    q: "What is a passphrase and does it help?",
    a: "A BIP-39 passphrase (sometimes called a 25th word) is an additional secret added on top of your seed phrase to create a separate wallet. If you use one, you need both the seed phrase AND the passphrase to recover. It adds security but also another point of potential loss.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Happens If You Lose Your Bitcoin Seed Phrase?",
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
    "lost bitcoin seed phrase, what happens if you lose seed phrase, bitcoin seed phrase recovery, forgot seed phrase, lost crypto wallet recovery",
  articleSection: "Bitcoin",
  wordCount: 800,
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
    { "@type": "ListItem", position: 3, name: "What Happens If You Lose Your Seed Phrase?", item: URL },
  ],
};

export const Route = createFileRoute("/bitcoin/what-happens-if-you-lose-your-seed-phrase")({
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
            <li className="text-primary">What Happens If You Lose Your Seed Phrase?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin · Risk
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Happens If You Lose Your Seed Phrase?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The short answer is the one most people don't want to hear: you likely lose access to your Bitcoin permanently. Here is why, and what limited options exist.
        </p>

        <Author />

        <div className="my-xl p-lg rounded-xl border border-red-500/40 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <div>
            <p className="font-body-lg text-body-lg text-primary font-semibold mb-xs">Still have your wallet device?</p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              If your hardware wallet or phone is still functional and you know the PIN, your funds are still accessible. <strong>Act immediately</strong> — go to settings and retrieve your seed phrase now, then store it physically on paper or metal.
            </p>
          </div>
        </div>

        <H2 id="the-reality">The reality of seed phrase loss</H2>
        <P>
          Bitcoin is designed to be permissionless and censorshipresistant. There is no company, no bank, and no government that holds your private keys on your behalf when you self-custody. This is the property that makes Bitcoin censorship-resistant — and it is also why losing your seed phrase has no remedy.
        </P>
        <P>
          When a bank customer forgets their password, the bank can verify identity and reset it. Bitcoin has no such mechanism. The seed phrase <em>is</em> the identity proof. Without it, the network has no way to distinguish you from a stranger — because it treats everyone the same.
        </P>
        <P>
          Estimates suggest that between 3 and 4 million Bitcoin — roughly 15–20% of the total supply — has been permanently lost, much of it due to lost keys and seed phrases.
        </P>

        <H2 id="scenarios">Three scenarios and their outcomes</H2>
        <div className="space-y-md my-lg">
          {[
            {
              title: "Lost seed phrase, device still works",
              outcome: "✅ Funds accessible (for now)",
              detail: "You can still transact normally. Immediately go to settings, retrieve and physically write down your seed phrase. Then move your funds to a properly backed-up wallet as soon as possible. The risk is one device failure or PIN-forgotten away from total loss.",
              color: "#0F9D58",
            },
            {
              title: "Lost seed phrase, device lost or damaged",
              outcome: "❌ Funds permanently inaccessible",
              detail: "This is the irrecoverable scenario. The private keys derived from that seed phrase existed only on that device and in your backup. With both gone, there is no path to recovery through normal channels.",
              color: "#EF4444",
            },
            {
              title: "Partial seed phrase remembered",
              outcome: "⚠️ Possible specialist recovery",
              detail: "If you remember most words — typically 20+ of 24 or 8+ of 12 — specialist recovery firms can attempt to brute-force the missing words. Success rates vary, costs are significant, and you must trust a third party with your partial phrase. Research firms thoroughly before engaging.",
              color: "#F59E0B",
            },
          ].map((s) => (
            <div key={s.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="flex items-start gap-md mb-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">{s.title}</h3>
                  <span className="font-label-caps text-label-caps mt-xs inline-block" style={{ color: s.color }}>{s.outcome}</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        <H2 id="prevent">Prevention is everything</H2>
        <P>
          The only reliable solution is a physical backup made at wallet setup, stored in at least two separate locations. Many experienced self-custody users keep one copy at home and one in a bank safety deposit box or with a trusted person they have educated on the subject.
        </P>
        <P>
          Metal seed phrase plates (Cryptosteel, Bilodreaux, etc.) are worth considering for long-term or significant-value storage. They survive fire, flooding, and physical damage that would destroy paper.
        </P>
        <P>
          Read the full guide:{" "}
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
            <Link to="/bitcoin/what-is-a-bitcoin-seed-phrase" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is a Bitcoin Seed Phrase?</h3>
            </Link>
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Store a Seed Phrase Safely</h3>
            </Link>
            <Link to="/bitcoin/bitcoin-wallets-complete-guide" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Bitcoin Wallets: Complete Guide</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
