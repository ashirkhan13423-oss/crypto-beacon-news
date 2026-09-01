import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/fake-wallet-apps-explained";
const TITLE = "Fake Crypto Wallet Apps: How to Spot Them Before You Download | CryptoBeacon";
const DESC =
  "How fake cryptocurrency wallet apps work, how they appear in app stores alongside legitimate wallets, and exactly how to verify you are downloading a genuine wallet application.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "How do fake wallet apps get into app stores?", a: "Attackers submit apps with names and icons nearly identical to legitimate wallets, but with slight variations. App store review processes are imperfect and can miss these. Some fake apps also use compromised developer accounts. Once live, they may run benignly for a time to accumulate reviews before activating malicious functionality." },
  { q: "What does a fake wallet app do?", a: "Fake wallet apps typically capture your seed phrase when you enter it during 'setup' and immediately transmit it to the attacker's server. Some generate addresses controlled by the attacker rather than you — you can receive funds but the attacker can withdraw them at any time." },
  { q: "How do I find the real download link for a wallet?", a: "Navigate to the wallet's official website (e.g., metamask.io, exodus.com, ledger.com) and click their app store link from there. Never search for wallets directly in the App Store or Google Play and click the first result." },
  { q: "Is it safe to download a wallet from the App Store or Google Play?", a: "It is safer than random websites, but not foolproof. Fake apps do appear in both stores and may have significant ratings if the attack is recent. Always verify the developer name matches exactly, check the publisher's website link in the listing, and download via the official website's link." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fake Crypto Wallet Apps: How to Spot Them Before You Download",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "fake crypto wallet app, fake metamask app, fake trust wallet, how to verify legitimate wallet app, fake wallet app store, crypto wallet scam mobile",
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
    { "@type": "ListItem", position: 3, name: "Fake Wallet Apps Explained", item: URL },
  ],
};

export const Route = createFileRoute("/security/fake-wallet-apps-explained")({
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
            <li className="text-primary">Fake Wallet Apps Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Scams
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Fake Crypto Wallet Apps Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Fake wallet apps have stolen millions from users who thought they were downloading the real thing. Here is how they work and how to avoid them.
        </p>
        <Author />

        <H2 id="how-work">How fake wallet apps work</H2>
        <P>Fake wallet apps are near-perfect visual clones of legitimate wallets — MetaMask, Trust Wallet, Exodus, Phantom, Ledger Live. They look identical on the app store listing and inside the app itself. The attack mechanism is simple: when you enter your seed phrase to "set up" or "restore" the wallet, the app captures it and transmits it to the attacker's server.</P>
        <P>Some fakes go further: they generate wallet addresses that appear to belong to you but are actually controlled by the attacker. Any funds sent to those addresses are immediately accessible to the attacker.</P>

        <H2 id="how-appear">How they appear in app stores</H2>
        <P>App stores review submissions but the process is imperfect. Attackers use several tactics:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li><strong>Near-identical names:</strong> "MetaMask - Crypto Wallet & DeFi" vs "MetaMask - Crypto Web3 Wallet"</li>
          <li><strong>Purchased reviews:</strong> Fake five-star reviews to appear legitimate initially</li>
          <li><strong>Delayed activation:</strong> App works normally for weeks, then malicious code activates via an update</li>
          <li><strong>Compromised developer accounts:</strong> Gaining access to legitimate developer accounts and pushing malicious updates</li>
        </ul>

        <H2 id="verify">How to verify a legitimate wallet app</H2>
        <div className="space-y-md my-lg">
          {[
            { step: "1", title: "Start at the official website", desc: "Navigate to the wallet's official website (verify the URL carefully). Find the 'Download' or 'Get the App' page and click their link to the app store. This is the only reliable source." },
            { step: "2", title: "Check the developer name exactly", desc: "In the app store listing, the developer name must match exactly. MetaMask is published by 'ConsenSys'. Trust Wallet by 'DApps Platform Inc'. Search for this on the wallet's website before downloading." },
            { step: "3", title: "Verify the publisher website link", desc: "App store listings show a developer website. Tap/click it and verify it matches the wallet's official domain." },
            { step: "4", title: "Check the download count and history", desc: "Real wallet apps have millions of downloads and have existed for years. Be suspicious of an app with few downloads or a recent creation date." },
            { step: "5", title: "Never restore from an unsolicited recommendation", desc: "If someone in a Telegram group, Discord, or forum recommends a specific app link, do not use it. Find the app independently via the official website." },
          ].map((s) => (
            <div key={s.step} className="flex gap-md p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{s.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

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
            <Link to="/bitcoin/common-bitcoin-wallet-scams" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Common Bitcoin Wallet Scams</h3>
            </Link>
            <Link to="/security/how-to-avoid-crypto-phishing-scams" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Avoid Phishing Scams</h3>
            </Link>
            <Link to="/security/crypto-security-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Security Hub</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
