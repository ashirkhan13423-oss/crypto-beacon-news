import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/hot-vs-cold-wallets.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/hot-wallets-vs-cold-wallets-explained";
const TITLE = "Hot Wallets vs. Cold Wallets: Which is Right for You? | CryptoBeacon";
const DESC =
  "Comparing internet-connected software wallets with offline hardware devices, focusing on the trade-offs between daily convenience and institutional-grade security.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "Can a cold wallet be hacked?",
    a: "It is extremely difficult to remotely hack a cold wallet because its private keys never touch the internet. However, if someone gains physical access to the device and its PIN, or if you accidentally type your seed phrase into a phishing website, your funds can still be stolen.",
  },
  {
    q: "Should I keep all my crypto in a cold wallet?",
    a: "Most security experts recommend keeping the vast majority (e.g., 90%+) of your portfolio in a cold wallet for long-term storage, and only keeping a small amount in a hot wallet for daily trading or decentralized application (dApp) interaction.",
  },
  {
    q: "Are exchange wallets hot or cold?",
    a: "When you hold funds on a centralized exchange (like Coinbase or Binance), the exchange controls the private keys. While they keep the bulk of customer funds in cold storage for security, the wallet interface you interact with functions like a hot wallet. Remember: not your keys, not your coins.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hot Wallets vs. Cold Wallets: Which is Right for You?",
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
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "hot wallet vs cold wallet, hardware wallet, software wallet, crypto storage, secure bitcoin, metamask vs ledger",
  articleSection: "Guides",
  wordCount: 1350,
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cryptobeacon.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hot vs Cold Wallets",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/hot-wallets-vs-cold-wallets-explained")({
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
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-lg font-label-caps text-label-caps text-on-surface-variant"
        >
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Hot vs Cold Wallets</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#34A853] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Hot Wallets vs. Cold Wallets: Which is Right for You?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="6 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high" src={hero}
            alt="Abstract digital illustration representing a glowing digital wallet next to a solid disconnected metallic vault"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          Self-custody—holding your own private keys—is the foundational ethos of cryptocurrency. But once you decide to take your crypto off an exchange, you are faced with a critical decision: should you use a hot wallet or a cold wallet?
        </P>
        <P>
          The choice comes down to a fundamental trade-off between daily convenience and institutional-grade security. This guide explains the differences, the risks, and the best practices for structuring your crypto portfolio.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-a-hot-wallet">What is a Hot Wallet?</H2>
        <P>
          A <strong>hot wallet</strong> is any cryptocurrency wallet that is connected to the internet. This includes software wallets installed as browser extensions (like MetaMask or Rabby), desktop applications, or mobile phone apps (like Trust Wallet or Phantom).
        </P>
        <P>
          Because hot wallets are always online, they are incredibly convenient. You can execute trades, interact with decentralized finance (DeFi) protocols, and mint NFTs in seconds. 
        </P>
        <P>
          However, this internet connectivity is also their greatest vulnerability. Because the private keys (the cryptographic passwords that control your funds) are stored on an internet-connected device, they are susceptible to malware, keyloggers, and remote hacking. If you accidentally download a malicious file or install a compromised browser extension, hackers can extract your private keys and drain your hot wallet entirely.
        </P>

        <H2 id="what-is-a-cold-wallet">What is a Cold Wallet?</H2>
        <P>
          A <strong>cold wallet</strong> (often synonymous with a hardware wallet) is a physical device—usually resembling a USB thumb drive—that stores your private keys completely offline.
        </P>
        <P>
          When you want to send a transaction using a cold wallet, you plug the device into your computer. The transaction data is passed from the computer to the device, the device signs the transaction internally using the offline private keys, and then passes the signed transaction back to the computer. 
        </P>
        <P>
          The critical security feature here is <strong>air-gapping</strong> (or logical isolation). The private keys never leave the physical device and are never exposed to your computer's operating system or the internet. Even if your computer is deeply infected with malware, the hacker cannot extract your private keys because they simply aren't there.
        </P>

        <H2 id="the-hybrid-approach">The Hybrid Approach: Best of Both Worlds</H2>
        <P>
          In traditional finance, you don't carry your life savings in your physical leather wallet; you keep a small amount of cash for daily expenses and leave the rest in a secure bank vault. You should treat cryptocurrency the exact same way.
        </P>
        <P>
          Security experts strongly recommend a two-tiered approach:
        </P>
        
        <div className="border-l-4 border-[#34A853] bg-[#34A853]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li><strong>The Vault (Cold Wallet):</strong> Store the vast majority of your portfolio (90%+) here. Use this exclusively for long-term holding. Never connect this wallet directly to random DeFi websites or minting pages.</li>
            <li><strong>The Pocket Money (Hot Wallet):</strong> Keep a small amount of funds here for daily trading, paying gas fees, and exploring new dApps. If you make a mistake and this wallet is compromised, your main stack remains completely safe.</li>
          </ul>
        </div>

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://bitcoin.org/en/choose-your-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org — Choosing a Secure Wallet
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/en/wallets/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Ethereum Wallets Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.ledger.com/academy/hardwarewallet/what-is-a-hardware-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ledger Academy — What Is a Hardware Wallet?
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Not Your Keys, Not Your Coins
              </h3>
            </Link>
            <Link
              to="/security/hardware-wallet-mistakes-to-avoid"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Hardware Wallet Mistakes to Avoid
              </h3>
            </Link>
            <Link
              to="/security/how-to-revoke-smart-contract-approvals"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Revoke Smart Contract Approvals
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

