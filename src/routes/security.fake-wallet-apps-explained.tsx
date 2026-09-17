import { Link } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/fake-wallet-apps-explained";
const TITLE = "Fake Crypto Wallet Apps: How to Spot Them Before You Download | CryptoBeacon";
const DESC = "How fake cryptocurrency wallet apps work, how they appear in app stores alongside legitimate wallets, and exactly how to verify you are downloading a genuine...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "How do fake wallet apps get into app stores?", a: "Attackers submit apps with names and icons nearly identical to legitimate wallets, but with slight variations. App store review processes are imperfect and can miss these. Some fake apps also use compromised developer accounts. Once live, they may run benignly for a time to accumulate reviews before activating malicious functionality." },
  { q: "What does a fake wallet app do?", a: "Fake wallet apps typically capture your seed phrase when you enter it during 'setup' and immediately transmit it to the attacker's server. Some generate addresses controlled by the attacker rather than you — you can receive funds but the attacker can withdraw them at any time." },
  { q: "How do I find the real download link for a wallet?", a: "Navigate to the wallet's official website (e.g., metamask.io, exodus.com, ledger.com) and click their app store link from there. Never search for wallets directly in the App Store or Google Play and click the first result." },
  { q: "Is it safe to download a wallet from the App Store or Google Play?", a: "It is safer than random websites, but not foolproof. Fake apps do appear in both stores and may have significant ratings if the attack is recent. Always verify the developer name matches exactly, check the publisher's website link in the listing, and download via the official website's link." },
];




export const Route = createFileRoute("/security/fake-wallet-apps-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/fake-wallet-apps-explained', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Fake Crypto Wallet Apps: How to Spot Them Before You Download | CryptoBeacon", description: "How fake cryptocurrency wallet apps work, how they appear in app stores alongside legitimate wallets, and exactly how to verify you are downloading a genuine...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/fake-wallet-apps-explained", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Fake Crypto Wallet Apps: How to Spot Them Before You Download | CryptoBeacon", item: "https://www.cryptobeacon.site/security/fake-wallet-apps-explained" }
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
          Fake <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> apps have stolen millions from users who thought they were downloading the real thing. Here is how they work and how to avoid them.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="how-work">How fake wallet apps work</H2>
        <P>Fake wallet apps are near-perfect visual clones of legitimate wallets — MetaMask, Trust Wallet, Exodus, Phantom, Ledger Live. They look identical on the app store listing and inside the app itself. The attack mechanism is simple: when you enter your <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrase</Link> to "set up" or "restore" the wallet, the app captures it and transmits it to the attacker's server.</P>
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

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
