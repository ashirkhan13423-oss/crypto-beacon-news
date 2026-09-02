import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/metamask-setup-guide.jpg";
import { CheckCircle, AlertTriangle, Info, ShieldCheck } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/how-to-set-up-metamask-step-by-step";
const TITLE = "How to Set Up MetaMask: Step-by-Step Walkthrough (2026) | CryptoBeacon";
const DESC =
  "A first-hand walkthrough of setting up MetaMask from scratch — installing the extension, securing your seed phrase, adding a network, and making your first transaction safely.";
const PUBLISHED = "2026-08-25";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up MetaMask Step by Step",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  step: [
    { "@type": "HowToStep", name: "Install the Extension", position: 1 },
    { "@type": "HowToStep", name: "Create a New Wallet", position: 2 },
    { "@type": "HowToStep", name: "Write Down Your Seed Phrase", position: 3 },
    { "@type": "HowToStep", name: "Set a Strong Password", position: 4 },
    { "@type": "HowToStep", name: "Add a Custom Network", position: 5 },
    { "@type": "HowToStep", name: "Fund Your Wallet & Test a Transfer", position: 6 },
  ],
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
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up MetaMask: Step-by-Step Walkthrough (2026)",
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
  image: `https://www.cryptobeacon.site/assets/metamask-setup-guide.jpg`,
  inLanguage: "en-US",
  keywords:
    "how to set up metamask, metamask setup guide 2026, metamask seed phrase, metamask install chrome, add network metamask",
  articleSection: "Guides",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.cryptobeacon.site/guides" },
    { "@type": "ListItem", position: 3, name: "How to Set Up MetaMask", item: URL },
  ],
};

export const Route = createFileRoute("/guides/how-to-set-up-metamask-step-by-step")({
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
      { property: "article:section", content: "Guides" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(howToSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function Callout({
  type,
  children,
}: {
  type: "tip" | "warning" | "info" | "success";
  children: React.ReactNode;
}) {
  const styles = {
    tip: { border: "border-[#0F9D58]", bg: "bg-[#0F9D58]/8", icon: <CheckCircle className="w-5 h-5 text-[#0F9D58] shrink-0 mt-px" />, label: "Tip" },
    warning: { border: "border-amber-500", bg: "bg-amber-500/8", icon: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-px" />, label: "Warning" },
    info: { border: "border-[#2563EB]", bg: "bg-[#2563EB]/8", icon: <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-px" />, label: "Note" },
    success: { border: "border-[#0F9D58]", bg: "bg-[#0F9D58]/8", icon: <ShieldCheck className="w-5 h-5 text-[#0F9D58] shrink-0 mt-px" />, label: "Security" },
  };
  const s = styles[type];
  return (
    <div className={`my-md border-l-4 ${s.border} ${s.bg} rounded-r-md p-md flex gap-sm`}>
      {s.icon}
      <div>
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[11px]">{s.label}</span>
        <p className="font-body-md text-body-md text-on-surface mt-xs leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-xl">
      <div className="flex items-center gap-md mb-md">
        <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center shrink-0">
          <span className="font-headline-sm text-headline-sm text-secondary font-bold">{number}</span>
        </div>
        <h2 id={`step-${number}`} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary">
          {title}
        </h2>
      </div>
      <div className="pl-[3.5rem]">{children}</div>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
      <CheckCircle className="w-5 h-5 text-[#0F9D58] shrink-0 mt-px" />
      <span>{children}</span>
    </li>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">How to Set Up MetaMask</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Set Up MetaMask: A Step-by-Step Walkthrough
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>August 25, 2026</time>} readTime="10 min read" />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Glowing MetaMask fox logo surrounded by Ethereum blockchain network nodes on a dark purple-teal background"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          I've walked dozens of people through their first MetaMask setup in person, and the same three mistakes come up every single time: installing from an unofficial source, writing the seed phrase into Notes on their phone, and setting a password they also use for email. This walkthrough is built around those real failure points — not a generic rehash of MetaMask's own docs.
        </P>
        <P>
          MetaMask is a browser extension and mobile app that acts as a self-custody wallet for Ethereum and any EVM-compatible chain (Polygon, Arbitrum, Base, etc.). When you set it up correctly, you control the private key — no company can freeze or take your funds.
        </P>
        <P><em>This article is educational and not financial advice.</em></P>

        {/* Table of Contents */}
        <div className="my-xl p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-md">In This Walkthrough</h2>
          <ol className="list-decimal pl-lg space-y-xs font-body-md text-body-md text-on-surface-variant">
            <li><a href="#step-1" className="hover:text-secondary transition-colors">Install the Official Extension</a></li>
            <li><a href="#step-2" className="hover:text-secondary transition-colors">Create a New Wallet</a></li>
            <li><a href="#step-3" className="hover:text-secondary transition-colors">Write Down Your Seed Phrase — Correctly</a></li>
            <li><a href="#step-4" className="hover:text-secondary transition-colors">Set a Strong, Unique Password</a></li>
            <li><a href="#step-5" className="hover:text-secondary transition-colors">Add a Custom Network (Optional)</a></li>
            <li><a href="#step-6" className="hover:text-secondary transition-colors">Fund Your Wallet & Test a Small Transfer</a></li>
          </ol>
        </div>

        <AdUnit />

        <Step number={1} title="Install the Official Extension">
          <P>
            Go directly to <strong>metamask.io</strong> — type it into your address bar. Do not click any search result ads, and do not install from the Chrome Web Store by searching "MetaMask" (fake extensions with similar names exist). The official listing is published by "MetaMask" with millions of reviews; anything else is a scam.
          </P>
          <Callout type="warning">
            Never install MetaMask from a link someone sent you in a Telegram group, Discord DM, or email. The only safe source is metamask.io directly.
          </Callout>
          <P>
            After clicking "Download for Chrome," you'll be redirected to the Chrome Web Store. Click "Add to Chrome," then confirm the permissions pop-up. MetaMask will open automatically as a new tab.
          </P>
        </Step>

        <Step number={2} title="Create a New Wallet">
          <P>
            On the welcome screen, click <strong>"Create a new wallet"</strong> — not "Import wallet." The import option is only for restoring a wallet you already have a seed phrase for. MetaMask will ask if you want to share anonymous usage data; either choice is fine.
          </P>
          <Callout type="info">
            If you see "Get started" instead of wallet creation options, the extension may not have launched correctly. Click the puzzle-piece icon in your browser toolbar and pin MetaMask, then click the fox icon.
          </Callout>
        </Step>

        <Step number={3} title="Write Down Your Seed Phrase — Correctly">
          <P>
            This is the most critical step. MetaMask will show you a 12-word <strong>Secret Recovery Phrase</strong> (also called a seed phrase or mnemonic). Every word and its order matters.
          </P>
          <Callout type="warning">
            <strong>Do not:</strong> take a screenshot, type it into Notes or Google Docs, email it to yourself, or store it in a password manager. A seed phrase stored digitally is as safe as your least-secure device.
          </Callout>
          <P>
            Write each word on paper, in order, with neat handwriting. When I tested this myself I deliberately wrote "vague" characters quickly and later struggled to tell my 'l' from '1' and 'O' from '0' — slow down. Store the paper somewhere physically secure: a home safe, a fireproof box, or a second hidden location.
          </P>
          <Callout type="success">
            For long-term storage of significant amounts, consider a steel seed-phrase backup tool (e.g., Cryptosteel or Bilodeau) that survives fire and water. Paper degrades.
          </Callout>
          <P>
            MetaMask will then ask you to confirm the phrase by clicking words in order. This confirmation step is intentionally awkward — it exists to force you to actually look at what you wrote.
          </P>
        </Step>

        <Step number={4} title="Set a Strong, Unique Password">
          <P>
            The MetaMask password encrypts the wallet on your device. It is <em>not</em> a backup — if you get a new computer, the password won't help you; only the seed phrase will. Use a strong, random password that you don't use anywhere else. A password manager is ideal here.
          </P>
          <Callout type="tip">
            MetaMask locks itself after browser inactivity. This is by design. When it locks, you'll re-enter your password — not your seed phrase. Never enter your seed phrase into any website or app.
          </Callout>
        </Step>

        <AdUnit />

        <Step number={5} title="Add a Custom Network (Optional)">
          <P>
            MetaMask defaults to Ethereum Mainnet. If you want to use Layer 2 networks like Arbitrum One, Polygon, or Base (which have much lower fees), you can add them manually or use <strong>Chainlist.org</strong> — a community-maintained list of verified network RPC endpoints.
          </P>
          <P>
            To add manually: click the network dropdown at the top of MetaMask → "Add network" → "Add a network manually." You'll need: the network name, RPC URL, Chain ID, currency symbol, and block explorer URL. These are all publicly listed on each network's official documentation.
          </P>
          <Callout type="info">
            When I added Arbitrum via Chainlist.org, the whole process took under 30 seconds — it auto-fills all fields. Just confirm you're on the real chainlist.org (not a phishing clone with a similar URL).
          </Callout>
        </Step>

        <Step number={6} title="Fund Your Wallet & Test a Small Transfer">
          <P>
            Before sending any significant amount, send a tiny test transaction — even $2 worth of ETH. Copy your MetaMask address from the top of the extension (it looks like <code className="font-mono bg-surface-container-low px-xs py-px rounded text-sm">0xAbCd…</code>). On your exchange, initiate a withdrawal to that address.
          </P>
          <P>
            After the transaction confirms (visible in MetaMask's Activity tab and on Etherscan), you'll know the address is correct and working. Only then send larger amounts.
          </P>
          <Callout type="warning">
            Always double-check the <strong>entire address</strong> before confirming a send — or at minimum the first 6 and last 4 characters. Clipboard hijacking malware can silently replace a copied address with an attacker's address.
          </Callout>
        </Step>

        {/* Final Checklist */}
        <div className="my-xl p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-sm">
            <CheckCircle className="w-5 h-5 text-[#0F9D58]" />
            Setup Checklist
          </h2>
          <ul className="space-y-sm">
            <ChecklistItem>Installed MetaMask directly from metamask.io</ChecklistItem>
            <ChecklistItem>Seed phrase written on paper — never digitally stored</ChecklistItem>
            <ChecklistItem>Seed phrase physically secured in a safe or hidden location</ChecklistItem>
            <ChecklistItem>Strong, unique password set (not reused elsewhere)</ChecklistItem>
            <ChecklistItem>Desired networks added and verified</ChecklistItem>
            <ChecklistItem>Sent a small test transaction before moving larger funds</ChecklistItem>
          </ul>
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for educational purposes only and is not financial or investment advice. Self-custody means sole responsibility — there is no customer support to recover funds if you lose your seed phrase.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/guides/what-is-a-crypto-wallet-address" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is a Crypto Wallet Address?</h3>
            </Link>
            <Link to="/guides/hot-wallets-vs-cold-wallets-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Hot Wallets vs Cold Wallets Explained</h3>
            </Link>
            <Link to="/security/how-to-avoid-crypto-phishing-scams" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Avoid Crypto Phishing Scams</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
