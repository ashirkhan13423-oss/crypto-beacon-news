import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import seedVault from "@/assets/seed-phrase-vault.jpg";
import phishingHero from "@/assets/phishing-padlock.jpg";
import regulationHero from "@/assets/news-crypto-regulation.jpg";
import nyknycHero from "@/assets/keys-coins-meaning.jpg";
import sendHero from "@/assets/bitcoin-send-safely.jpg";
import ethereumHero from "@/assets/ethereum-address-mismatch.png";
import walletTypesHero from "@/assets/bitcoin-what-is-a-wallet.png";
import bitcoinMiningHero from "@/assets/bitcoin-what-is-mining.png";
import exchangeHero from "@/assets/exchange-vs-wallet.png";
import walletAddressHero from "@/assets/guides-wallet-address.png";
import blockchainForkHero from "@/assets/news-blockchain-fork.png";
import pausedHero from "@/assets/news-paused-withdrawals.jpg";
import smartContractHero from "@/assets/security-smart-contract-approvals.jpg";
import halvingHero from "@/assets/bitcoin-halving.jpg";
import gasFeesHero from "@/assets/ethereum-gas-fees.jpg";
import hotColdHero from "@/assets/hot-vs-cold-wallets.jpg";
import hwMistakesHero from "@/assets/hardware-wallet-mistakes.jpg";
import {
  ShieldCheck,
  BookOpen,
  ExternalLink,
  Calendar,
  CheckCircle2,
  FileText,
  BarChart3,
  HelpCircle,
} from "lucide-react";
import { SITE_URL } from "../lib/site-config";

const PAGE_URL = `${SITE_URL}/`;
const TITLE = "Cryptocurrency: News, Prices & Meaning | CryptoBeacon";
const DESC =
  "Your definitive guide on what cryptocurrency is. Get the latest cryptocurrency news, meaning, and cryptocurrency prices. Protect your assets today.";
const PUBLISHED_DATE = "2026-01-15";
const MODIFIED_DATE = "2026-08-06";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "CryptoBeacon",
      alternateName: ["Crypto Beacon", "Crypto Beacon News", "CryptoBeacon News"],
      url: PAGE_URL,
      description: DESC,
      publisher: {
        "@type": "Organization",
        name: "CryptoBeacon",
        url: PAGE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.png`,
        },
        sameAs: [
          "https://en.wikipedia.org/wiki/Cryptocurrency",
          "https://en.wikipedia.org/wiki/Bitcoin",
          "https://en.wikipedia.org/wiki/Ethereum",
          "https://www.fatf-gafi.org",
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: TITLE,
      description: DESC,
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      inLanguage: "en-US",
      isPartOf: { "@type": "WebSite", "@id": PAGE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Cryptocurrency: News, Prices & Meaning",
      description: DESC,
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      author: [{ "@type": "Person", name: "Ashir", url: PAGE_URL }],
      publisher: {
        "@type": "Organization",
        name: "CryptoBeacon",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": PAGE_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What exactly is cryptocurrency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryptocurrency is a decentralized digital asset secured by cryptography on distributed blockchain networks, operating independently of central banks.",
          },
        },
        {
          "@type": "Question",
          name: "How does digital money differ from traditional fiat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryptocurrency combines cryptography and digital currency to achieve permissionless peer-to-peer ownership without intermediaries.",
          },
        },
        {
          "@type": "Question",
          name: "What drives the value of digital assets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryptocurrency prices are determined by global market supply and demand on liquid exchanges, influenced by trading volume, supply caps, liquidity, and adoption.",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homepageSchema),
      },
    ],
  }),
  component: IndexPage,
});

const articles = [
  {
    to: "/security/how-to-revoke-smart-contract-approvals",
    image: smartContractHero,
    alt: "Glowing lock mechanism representing smart contract revokes",
    tag: "Security · Guide",
    title: "How to Revoke Smart Contract Approvals and Protect Your Crypto",
    desc: "An in‑depth analysis of token allowance vulnerabilities, real‑world attack case studies, and step‑by‑step revocation strategies with practical security tooling.",
  },
  {
    to: "/bitcoin/what-is-the-bitcoin-halving",
    image: halvingHero,
    alt: "Golden block splitting in half representing the halving",
    tag: "Bitcoin · Explainer",
    title: "What is the Bitcoin Halving?",
    desc: "A comprehensive financial breakdown of Bitcoin’s immutable 21‑million supply, including historical block subsidy halving impacts on market dynamics and miner economics.",
  },
  {
    to: "/ethereum/what-are-gas-fees-how-to-save",
    image: gasFeesHero,
    alt: "Glowing data packets flowing through a network representing gas fees",
    tag: "Ethereum · Explainer",
    title: "What Are Ethereum Gas Fees and How to Save on Them?",
    desc: "A detailed explainer on Ethereum network congestion, Gwei pricing mechanics, and actionable fee‑saving techniques leveraging Optimism, Arbitrum, and other Layer‑2 solutions.",
  },
  {
    to: "/guides/hot-wallets-vs-cold-wallets-explained",
    image: hotColdHero,
    alt: "Digital wallet connected to network lines contrasted with a metallic vault",
    tag: "Guides · Storage",
    title: "Hot Wallets vs. Cold Wallets: Which is Right for You?",
    desc: "A side‑by‑side comparison of hot software wallets versus cold hardware devices, highlighting security trade‑offs, user experience, and long‑term custodial considerations.",
  },
  {
    to: "/security/hardware-wallet-mistakes-to-avoid",
    image: hwMistakesHero,
    alt: "Glitched digital vault representing operational mistakes",
    tag: "Security · Guide",
    title: "5 Fatal Hardware Wallet Mistakes and How to Avoid Them",
    desc: "Beyond purchasing a hardware wallet, discover critical operational security pitfalls—such as firmware updates, seed‑phrase handling, and supply‑chain attacks—and how to mitigate them.",
  },
  {
    to: "/guides/exchange-or-personal-wallet-crypto-storage",
    image: exchangeHero,
    alt: "Exchange or Personal Wallet Crypto Storage",
    tag: "Guides · Custody",
    title: "Exchange vs. Personal Wallet: How to Store Crypto Safely",
    desc: "A decision framework evaluating self‑custody versus centralized exchange storage, incorporating risk appetite, transaction frequency, and regulatory landscape insights.",
  },
  {
    to: "/guides/what-is-a-crypto-wallet-address",
    image: walletAddressHero,
    alt: "What Is a Crypto Wallet Address",
    tag: "Guides · Security",
    title: "What Is a Crypto Wallet Address? How to Use It Safely",
    desc: "Explains public‑key cryptography behind wallet addresses across multiple blockchains, safe sharing practices, and verification of address formats to prevent phishing.",
  },
  {
    to: "/bitcoin/what-is-a-bitcoin-wallet",
    image: walletTypesHero,
    alt: "What Is a Bitcoin Wallet",
    tag: "Bitcoin · Custody",
    title: "What Is a Bitcoin Wallet? Hot, Cold & Custodial Explained",
    desc: "Deep dive into Bitcoin wallet architectures—software, hardware, and custodial—examining private‑key management, recovery options, and selecting optimal storage based on security needs.",
  },
  {
    to: "/bitcoin/what-is-bitcoin-mining",
    image: bitcoinMiningHero,
    alt: "What Is Bitcoin Mining",
    tag: "Bitcoin · Technology",
    title: "What Is Bitcoin Mining? How New Bitcoin Is Created",
    desc: "A beginner‑friendly guide to Proof‑of‑Work mining, block reward economics, mining pool dynamics, and difficulty adjustment algorithms demystified.",
  },
  {
    to: "/guides/what-it-means-when-exchange-pauses-withdrawals",
    image: pausedHero,
    alt: "What Does It Mean When an Exchange Pauses Withdrawals",
    tag: "News · Analysis",
    title: "What It Means When an Exchange Pauses Withdrawals",
    desc: "Analyzes exchange withdrawal pauses, distinguishing routine maintenance from liquidity crises with a diagnostic framework and real‑world examples.",
  },
  {
    to: "/guides/what-is-a-blockchain-fork",
    image: blockchainForkHero,
    alt: "What Is a Blockchain Fork",
    tag: "News · Technology",
    title: "What Is a Blockchain Fork? Hard & Soft Forks Explained",
    desc: "Insight into blockchain consensus rule changes, the economic rationale behind hard forks creating new tokens, and token migration impacts on holders.",
  },
  {
    to: "/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
    image: ethereumHero,
    alt: "Incompatible Bitcoin and Ethereum address formats",
    tag: "Ethereum · Guide",
    title: "Can You Send Bitcoin to an Ethereum Address?",
    desc: "Explores cross‑chain address incompatibility, what occurs when Bitcoin is sent to an Ethereum address, validation safeguards, and recovery procedures for mistaken deposits.",
  },
  {
    to: "/bitcoin/how-to-send-bitcoin-safely",
    image: sendHero,
    alt: "Bitcoin transaction moving safely between wallets",
    tag: "Bitcoin · Guide",
    title: "How to Send Bitcoin Safely: Essential Verification Checklist",
    desc: "Step‑by‑step guide to Bitcoin transaction mechanics, common user pitfalls, fee estimation, address validation, and a pre‑flight safety checklist for secure transfers.",
  },
  {
    to: "/guides/why-governments-regulate-cryptocurrency",
    image: regulationHero,
    alt: "Government regulatory oversight of cryptocurrency",
    tag: "News · Policy",
    title: "Why Do Governments Regulate Cryptocurrency?",
    desc: "Comprehensive overview of global cryptocurrency regulation: consumer protection, AML/KYC compliance, tax obligations, EU MiCA framework, and US SEC enforcement trends.",
  },
  {
    to: "/security/how-to-store-crypto-seed-phrase-safely",
    image: seedVault,
    alt: "Secure vault representing safe crypto seed phrase storage",
    tag: "Security · Guide",
    title: "How to Store Your Crypto Seed Phrase Safely",
    desc: "Best‑practice physical storage techniques for seed phrases, steel backup durability, redundancy planning, and avoidance of catastrophic loss scenarios.",
  },
  {
    to: "/security/how-to-avoid-crypto-phishing-scams",
    image: phishingHero,
    alt: "Minimalist padlock representing crypto phishing scam protection",
    tag: "Security · Guide",
    title: "How to Avoid Crypto Phishing Scams",
    desc: "Detecting malicious dApps, counterfeit wallet approval dialogs, spoofed advertisements, and implementing hardware verification routines to thwart phishing attacks.",
  },
  {
    to: "/guides/not-your-keys-not-your-coins-meaning",
    image: nyknycHero,
    alt: "Golden key securing a digital coin",
    tag: "Guides · Concept",
    title: '"Not Your Keys, Not Your Coins" — What It Means',
    desc: "Fundamental concepts of cryptographic ownership, self‑custody mechanics, exchange risk assessment, and verification techniques for wallet control.",
  },
];

function IndexPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow max-w-max_width mx-auto px-gutter md:px-margin py-xxl w-full">
        {/* Main Hero Header */}
        <section className="mb-xl max-w-4xl">
          <div className="flex flex-wrap items-center gap-sm mb-md">
            <span className="inline-block bg-surface-container-high text-secondary font-label-caps text-label-caps px-md py-xs rounded-full border border-outline-variant font-semibold">
              Ashir
            </span>
            <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
              <Calendar className="w-4 h-4 text-secondary" />
              <time dateTime={MODIFIED_DATE}>Last Updated: August 6, 2026</time>
            </span>
          </div>

          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md leading-tight">
            Cryptocurrency: News, Prices &amp; Meaning
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            Welcome to CryptoBeacon — your institutional-grade editorial reference on what{" "}
            <strong>cryptocurrency</strong> is, how <strong>blockchain technology</strong> enables
            self-custody and permissionless transactions, and how cryptocurrency prices are
            evaluated in global markets. Our independent research provides objective analysis on
            Bitcoin, Ethereum, regulatory policies, and essential security practices.
          </p>
        </section>

        {/* Category Hubs Section */}
        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg pb-xs border-b border-outline-variant">
            Explore Research Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-lg">
            <Link
              to="/bitcoin"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <BarChart3 className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Bitcoin Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Bitcoin &amp; Mining Economics
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Deep-dives into Proof-of-Work mechanisms, algorithmic scarcity, halving dynamics, and hardware self-custody.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Bitcoin Articles →
              </span>
            </Link>

            <Link
              to="/ethereum"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <FileText className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Ethereum Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Ethereum &amp; Smart Contracts
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Analysis of gas fees, EVM execution, Layer-2 scaling solutions, smart contract architectures, and staking mechanisms.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Ethereum Articles →
              </span>
            </Link>

            <Link
              to="/guides"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <BookOpen className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Guides Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Foundational Crypto Guides
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Beginner-friendly explainers covering public address verification, wallet architectures, blockchain explorers, and tax fundamentals.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Guides →
              </span>
            </Link>

            <Link
              to="/security"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <ShieldCheck className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Security Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Self-Custody &amp; Threat Analysis
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Advanced threat mitigation, phishing countermeasures, seed phrase physical storage protocols, and smart contract allowance revoking.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Security Guides →
              </span>
            </Link>

            <Link
              to="/news"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <ExternalLink className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  News Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Market &amp; Policy Analysis
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Analytical news reports on policy regulation, market cycles, exchange reserve transparency, and macroeconomic telemetry.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View News &amp; Updates →
              </span>
            </Link>
          </div>
        </section>

        {/* Latest Intelligence Grid Section */}
        <section>
          <div className="flex items-center justify-between border-b border-primary pb-sm mb-lg">
            <h2 className="font-headline-md text-headline-md text-primary">
              Latest Intelligence &amp; Editorial Analysis
            </h2>
            <span className="font-body-md text-on-surface-variant">
              Showing All {articles.length} Articles
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {articles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col"
              >
                <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
                  <img
                    src={a.image}
                    alt={a.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1600}
                    height={900}
                  />
                </div>
                <div className="p-lg flex flex-col flex-grow">
                  <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">
                    {a.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-sm group-hover:underline decoration-secondary">
                    {a.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
                    {a.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
