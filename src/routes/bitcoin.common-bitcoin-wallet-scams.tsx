import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/bitcoin/common-bitcoin-wallet-scams";
const TITLE = "Common Bitcoin Wallet Scams: How to Spot and Avoid Them | CryptoBeacon";
const DESC = "Fake wallet apps, clipboard hijackers, seed phrase phishing, and supply chain attacks on hardware wallets — the most common Bitcoin wallet scams explained wi...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "What is a clipboard hijacking attack?",
    a: "Clipboard hijacking malware monitors your clipboard and replaces any copied Bitcoin address with the attacker's address. This means if you copy an address and paste it without checking, you may send funds to a scammer. Always verify the full address after pasting.",
  },
  {
    q: "How do I know if a wallet app is legitimate?",
    a: "Always download wallet apps from the official website of the wallet provider, not from app store search results. Cross-check the developer name, review count, and date of publication. Some legitimate wallets are: Exodus (download from exodus.com), Electrum (from electrum.org). If in doubt, visit the official site first.",
  },
  {
    q: "Can a hardware wallet come pre-compromised?",
    a: "Yes. Buying a hardware wallet from a third-party seller (Amazon resellers, eBay, grey market) carries the risk that the device has been tampered with or comes with a pre-generated seed phrase. Always buy directly from the manufacturer. If it arrives with a seed phrase already written on a card, do not use it.",
  },
  {
    q: "What is a seed phrase phishing attack?",
    a: "Attackers create fake wallet websites or send emails claiming your wallet needs to be 'restored' or 'verified'. They direct you to enter your seed phrase on a malicious site. Legitimate wallets never ask for your seed phrase online. Never enter it into any website.",
  },
];




export const Route = createFileRoute("/bitcoin/common-bitcoin-wallet-scams")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/bitcoin/common-bitcoin-wallet-scams', publishedTime: PUBLISHED, section: 'Bitcoin' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Common Bitcoin Wallet Scams: How to Spot and Avoid Them | CryptoBeacon", description: "Fake wallet apps, clipboard hijackers, seed phrase phishing, and supply chain attacks on hardware wallets — the most common Bitcoin wallet scams explained wi...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/bitcoin/common-bitcoin-wallet-scams", section: "Bitcoin", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
        { name: "Common Bitcoin Wallet Scams: How to Spot and Avoid Them | CryptoBeacon", item: "https://www.cryptobeacon.site/bitcoin/common-bitcoin-wallet-scams" }
      ])) }
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

const scams = [
  {
    num: "01",
    title: "Fake wallet apps",
    how: "Attackers upload near-perfect clones of popular wallets (MetaMask, Trust Wallet, Exodus) to app stores. The apps look identical but silently transmit your seed phrase or private keys to the attacker's servers the moment you enter them.",
    defend: "Download only from the official wallet website. Search the developer's site for the official app store link rather than searching within the app store directly.",
    severity: "#EF4444",
  },
  {
    num: "02",
    title: "Seed phrase phishing sites",
    how: "Fake wallet websites — often ranking in paid search results — claim you need to 'restore' or 'verify' your wallet. They prompt you to enter your seed phrase, which goes directly to the attacker.",
    defend: "Your seed phrase never needs to be entered online. No legitimate service will ever ask for it. If a site does, close it immediately.",
    severity: "#EF4444",
  },
  {
    num: "03",
    title: "Clipboard hijacking malware",
    how: "Malicious software monitors your clipboard. When you copy a crypto address, it silently replaces it with the attacker's address. If you paste without verifying, you send funds to the wrong place.",
    defend: "Always check the last 6–8 characters of a pasted address against the original. Some hardware wallets display the address on their screen for you to verify before signing.",
    severity: "#F59E0B",
  },
  {
    num: "04",
    title: "Pre-seeded hardware wallets",
    how: "Compromised hardware wallets bought from third-party sellers arrive with a seed phrase already written on an included card, or on a slip inside the packaging. The attacker retains a copy of that phrase and waits for funds to arrive.",
    defend: "Buy hardware wallets only from the manufacturer directly. If a seed phrase comes pre-written on any included material, discard the device — generate your own fresh seed during setup.",
    severity: "#EF4444",
  },
  {
    num: "05",
    title: "Support impersonation scams",
    how: "\"Crypto support agents\" contact users on Twitter, Reddit, Telegram, or Discord claiming to help with wallet issues. They escalate to asking for seed phrases under the guise of troubleshooting.",
    defend: "No legitimate wallet company has unsolicited support agents in social media DMs. Never share your seed phrase with anyone in any channel.",
    severity: "#F59E0B",
  },
];

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
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Common Bitcoin Wallet Scams</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin · Security
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Common Bitcoin Wallet Scams
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Self-custody is powerful — but it also makes you the primary target. These are the scams that drain <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallets</Link> every week, and exactly what to watch for.
        </p>

        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            <strong>The golden rule:</strong> Your <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrase</Link> and <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private keys</Link> are never needed by any legitimate service, website, or support agent. If anything ever asks for them, it is a scam.
          </p>
        </div>

        <H2 id="scams">The five most common wallet scams</H2>
        <div className="space-y-lg my-lg">
          {scams.map((s) => (
            <div key={s.num} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="flex items-start gap-md mb-md">
                <span className="font-mono text-2xl font-bold" style={{ color: s.severity }}>{s.num}</span>
                <h3 className="font-headline-md text-headline-md text-primary pt-1">{s.title}</h3>
              </div>
              <div className="mb-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs block">How it works</span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">{s.how}</p>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary mb-xs block">How to defend yourself</span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">{s.defend}</p>
              </div>
            </div>
          ))}
        </div>

        <H2 id="general-rules">General rules for wallet safety</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface">
          <li>Generate your seed phrase on a device that has never been connected to the internet (hardware wallet or air-gapped computer)</li>
          <li>Write the seed phrase on paper or metal immediately — never type it or photograph it</li>
          <li>Store backups in physically separate, secure locations</li>
          <li>Verify every address character-by-character before signing a transaction</li>
          <li>Keep your wallet software and firmware updated</li>
          <li>Use a hardware wallet for any amount you would not want to lose</li>
        </ul>

        {/* FAQ */}
        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
