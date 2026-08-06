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
import pausedHero from "@/assets/news-paused-withdrawals.svg";
import { ShieldCheck, BookOpen, ExternalLink, Calendar, CheckCircle2, FileText, BarChart3, HelpCircle } from "lucide-react";

const URL = "https://crypto-beacon-news.vercel.app/";
const TITLE = "Crypto Currency: News, Prices & Meaning | CryptoBeacon";
const DESC =
  "Your definitive guide on what crypto currency is. Get the latest crypto currency news, meaning, and crypto currency prices. Protect your assets today.";
const PUBLISHED_DATE = "2026-01-15";
const MODIFIED_DATE = "2026-08-06";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "CryptoBeacon",
      "alternateName": ["Crypto Beacon", "Crypto Beacon News", "CryptoBeacon News"],
      "url": URL,
      "description": DESC,
      "publisher": {
        "@type": "Organization",
        "name": "CryptoBeacon",
        "url": URL,
        "logo": {
          "@type": "ImageObject",
          "url": "https://crypto-beacon-news.vercel.app/favicon.png"
        },
        "sameAs": [
          "https://en.wikipedia.org/wiki/Cryptocurrency",
          "https://en.wikipedia.org/wiki/Bitcoin",
          "https://en.wikipedia.org/wiki/Ethereum",
          "https://www.fatf-gafi.org"
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": URL,
      "url": URL,
      "name": TITLE,
      "description": DESC,
      "datePublished": PUBLISHED_DATE,
      "dateModified": MODIFIED_DATE,
      "inLanguage": "en-US",
      "isPartOf": { "@type": "WebSite", "@id": URL }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": URL
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Crypto Currency: News, Prices & Meaning",
      "description": DESC,
      "datePublished": PUBLISHED_DATE,
      "dateModified": MODIFIED_DATE,
      "author": {
        "@type": "Organization",
        "name": "CryptoBeacon Editorial"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CryptoBeacon",
        "logo": {
          "@type": "ImageObject",
          "url": "https://crypto-beacon-news.vercel.app/favicon.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": URL
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is crypto currency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A crypto currency is a decentralized digital asset secured by cryptography on distributed blockchain networks, operating independently of central banks."
          }
        },
        {
          "@type": "Question",
          "name": "What is the meaning of crypto currency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The meaning of crypto currency refers to combining cryptography and digital currency to achieve permissionless peer-to-peer ownership without intermediaries."
          }
        },
        {
          "@type": "Question",
          "name": "How are crypto currency prices determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crypto currency prices are determined by global market supply and demand on liquid exchanges, influenced by trading volume, supply caps, liquidity, and adoption."
          }
        },
        {
          "@type": "Question",
          "name": "How is crypto currency different from traditional money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crypto currency relies on decentralized mathematical consensus and fixed supply schedules, whereas fiat money is managed and printed by sovereign central banks."
          }
        }
      ]
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "crypto currency, crypto currency meaning, crypto currency prices, crypto currency news, what is crypto currency, bitcoin, ethereum, crypto security",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://crypto-beacon-news.vercel.app/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://crypto-beacon-news.vercel.app/favicon.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
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
    to: "/guides/exchange-or-personal-wallet-crypto-storage",
    image: exchangeHero,
    alt: "Exchange or Personal Wallet Crypto Storage",
    tag: "Guides · Custody",
    title: "Exchange vs. Personal Wallet: How to Store Crypto Safely",
    desc: "A clear, neutral decision framework based on how you actually use your crypto. Learn when to use self-custody versus centralized exchanges.",
  },
  {
    to: "/guides/what-is-a-crypto-wallet-address",
    image: walletAddressHero,
    alt: "What Is a Crypto Wallet Address",
    tag: "Guides · Security",
    title: "What Is a Crypto Wallet Address? How to Use It Safely",
    desc: "How public keys and wallet addresses work across blockchains, how to share them safely, and how to verify address formats.",
  },
  {
    to: "/bitcoin/what-is-a-bitcoin-wallet",
    image: walletTypesHero,
    alt: "What Is a Bitcoin Wallet",
    tag: "Bitcoin · Custody",
    title: "What Is a Bitcoin Wallet? Hot, Cold & Custodial Explained",
    desc: "Understand how software, hardware, and exchange wallets manage Bitcoin private keys, and how to select the right storage option.",
  },
  {
    to: "/bitcoin/what-is-bitcoin-mining",
    image: bitcoinMiningHero,
    alt: "What Is Bitcoin Mining",
    tag: "Bitcoin · Technology",
    title: "What Is Bitcoin Mining? How New Bitcoin Is Created",
    desc: "Proof-of-Work, block rewards, mining pools, and network difficulty explained in plain language for beginners.",
  },
  {
    to: "/news/what-it-means-when-exchange-pauses-withdrawals",
    image: pausedHero,
    alt: "What Does It Mean When an Exchange Pauses Withdrawals",
    tag: "News · Analysis",
    title: "What It Means When an Exchange Pauses Withdrawals",
    desc: "Your crypto exchange paused withdrawals — is that normal or a red flag? A clear framework for telling routine maintenance from liquidity crises.",
  },
  {
    to: "/news/what-is-a-blockchain-fork",
    image: blockchainForkHero,
    alt: "What Is a Blockchain Fork",
    tag: "News · Technology",
    title: "What Is a Blockchain Fork? Hard & Soft Forks Explained",
    desc: "How consensus rules change on public blockchains, why hard forks create new coins, and what happens to your tokens during a fork.",
  },
  {
    to: "/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
    image: ethereumHero,
    alt: "Incompatible Bitcoin and Ethereum address formats",
    tag: "Ethereum · Guide",
    title: "Can You Send Bitcoin to an Ethereum Address?",
    desc: "Worried you sent Bitcoin to an Ethereum address by mistake? What actually happens, format validation, and wrong-network deposit recovery.",
  },
  {
    to: "/bitcoin/how-to-send-bitcoin-safely",
    image: sendHero,
    alt: "Bitcoin transaction moving safely between wallets",
    tag: "Bitcoin · Guide",
    title: "How to Send Bitcoin Safely: Essential Verification Checklist",
    desc: "How Bitcoin transactions work, common user errors, network fees, address validation, and a pre-flight safety checklist.",
  },
  {
    to: "/news/why-governments-regulate-cryptocurrency",
    image: regulationHero,
    alt: "Government regulatory oversight of cryptocurrency",
    tag: "News · Policy",
    title: "Why Do Governments Regulate Cryptocurrency?",
    desc: "In-depth breakdown of consumer protection, AML/KYC standards, tax mandates, MiCA in the EU, and SEC oversight in the US.",
  },
  {
    to: "/security/how-to-store-crypto-seed-phrase-safely",
    image: seedVault,
    alt: "Secure vault representing safe crypto seed phrase storage",
    tag: "Security · Guide",
    title: "How to Store Your Crypto Seed Phrase Safely",
    desc: "Physical storage methods, steel backups, redundancy planning, and common mistakes to prevent total asset loss.",
  },
  {
    to: "/security/how-to-avoid-crypto-phishing-scams",
    image: phishingHero,
    alt: "Minimalist padlock representing crypto phishing scam protection",
    tag: "Security · Guide",
    title: "How to Avoid Crypto Phishing Scams",
    desc: "Recognizing malicious dApps, fake wallet approval prompts, spoofed search ads, and hardware verification habits.",
  },
  {
    to: "/guides/not-your-keys-not-your-coins-meaning",
    image: nyknycHero,
    alt: "Golden key securing a digital coin",
    tag: "Guides · Concept",
    title: '"Not Your Keys, Not Your Coins" — What It Means',
    desc: "The core principle of cryptographic ownership. Self-custody mechanics, exchange risk factors, and verifying wallet control.",
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
              CryptoBeacon Editorial
            </span>
            <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
              <Calendar className="w-4 h-4 text-secondary" />
              <time dateTime={MODIFIED_DATE}>Last Updated: August 6, 2026</time>
            </span>
          </div>
          
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md leading-tight">
            Crypto Currency: News, Prices &amp; Meaning
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            Welcome to CryptoBeacon — your institutional-grade editorial reference on what <strong>crypto currency</strong> is, the true <strong>crypto currency meaning</strong> behind self-custody and blockchain protocols, and how <strong>crypto currency prices</strong> are evaluated in global markets. Our independent research provides objective analysis on Bitcoin, Ethereum, regulatory policies, and essential security practices.
          </p>
        </section>

        {/* Executive Summary & AEO/GEO Direct Answer Box */}
        <section id="key-takeaways" className="mb-xxl p-lg md:p-xl rounded-2xl border-l-4 border-l-secondary bg-surface-container-low border border-outline-variant shadow-sm max-w-4xl">
          <div className="flex items-center gap-xs font-label-caps text-label-caps text-secondary font-semibold mb-sm uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            Executive Summary &amp; Bottom Line
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-md">
            Key Takeaways: Understanding Crypto Currency
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-md font-body-md text-on-surface">
            <li className="flex items-start gap-xs bg-surface-container-lowest p-sm rounded-lg border border-outline-variant">
              <CheckCircle2 className="w-5 h-5 text-[#0F9D58] shrink-0 mt-0.5" />
              <span><strong>Decentralized Settlement:</strong> A <strong>crypto currency</strong> enables peer-to-peer value transfer without central bank intermediaries.</span>
            </li>
            <li className="flex items-start gap-xs bg-surface-container-lowest p-sm rounded-lg border border-outline-variant">
              <CheckCircle2 className="w-5 h-5 text-[#0F9D58] shrink-0 mt-0.5" />
              <span><strong>Algorithmic Scarcity:</strong> Assets like Bitcoin enforce fixed supply limits (21M BTC max) programmed directly into open-source code.</span>
            </li>
            <li className="flex items-start gap-xs bg-surface-container-lowest p-sm rounded-lg border border-outline-variant">
              <CheckCircle2 className="w-5 h-5 text-[#0F9D58] shrink-0 mt-0.5" />
              <span><strong>Market Valuation:</strong> A <strong>crypto currency price</strong> is established 24/7 by order-book order matching across global spot exchanges.</span>
            </li>
            <li className="flex items-start gap-xs bg-surface-container-lowest p-sm rounded-lg border border-outline-variant">
              <CheckCircle2 className="w-5 h-5 text-[#0F9D58] shrink-0 mt-0.5" />
              <span><strong>Self-Custody Ownership:</strong> Cryptographic private keys give users absolute control over funds, bypassing institutional risk.</span>
            </li>
          </ul>
        </section>

        {/* Detailed Explainer Content (AEO & GEO Extraction Ready) */}
        <section className="mb-xxl max-w-4xl bg-surface-container-lowest p-8 md:p-10 rounded-2xl border border-outline-variant space-y-xl">
          {/* Section 1: Definition & Direct Answer */}
          <div>
            <h2 id="what-is-crypto-currency" className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <BookOpen className="w-6 h-6 text-secondary" />
              What Is Crypto Currency? Meaning &amp; Fundamentals
            </h2>
            
            {/* Direct Answer Box for Featured Snippets */}
            <div className="p-lg rounded-xl border border-secondary/30 bg-secondary/5 mb-lg font-body-lg text-on-surface leading-relaxed">
              <strong className="text-secondary block font-headline-sm text-headline-sm mb-xs">Direct Answer / Definition:</strong>
              A <strong>crypto currency</strong> is a digital or virtual medium of exchange secured by advanced cryptography and maintained across distributed computer networks (blockchains). Unlike fiat currencies issued by sovereign governments, a crypto currency operates on algorithmic consensus rules, providing borderless, transparent, and immutable asset transfer.
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
              The fundamental <strong>crypto currency meaning</strong> rests on replacing institutional trust with mathematical verification. Rather than relying on commercial banks to verify ledger balances, decentralized networks utilize cryptographic public-key infrastructure and distributed validation nodes to guarantee transaction authenticity.
            </p>

            <div className="my-md p-md rounded-xl bg-surface-container-low border border-outline-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Core Technical Characteristics</h3>
              <ul className="list-disc list-inside space-y-2 font-body-md text-on-surface-variant">
                <li><strong>Cryptographic Security:</strong> Uses SHA-256 and secp256k1 elliptic curve cryptography to prevent counterfeiting and double-spending.</li>
                <li><strong>Permissionless Access:</strong> Anyone with an internet connection can generate a wallet address and broadcast transactions 24/7.</li>
                <li><strong>Transparent Ledger:</strong> Every transaction is permanently recorded on a public blockchain visible via block explorers.</li>
                <li><strong>Immutability:</strong> Once confirmed by network nodes, past transaction blocks cannot be altered or retroactively erased.</li>
              </ul>
            </div>
          </div>

          {/* Section 2: How Crypto Currency Works */}
          <div>
            <h2 id="how-crypto-works" className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <FileText className="w-6 h-6 text-secondary" />
              How Crypto Currency Works: Blockchain &amp; Consensus
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
              At the heart of every <strong>crypto currency</strong> ecosystem is a distributed ledger known as a blockchain. When a user sends tokens, the transaction request is cryptographically signed using the sender's private key and broadcast to thousands of independent validator nodes worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-md">
              <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Proof-of-Work (PoW)</h4>
                <p className="font-body-md text-on-surface-variant">
                  Utilized by Bitcoin, miners solve complex cryptographic puzzles requiring computational energy to validate block transactions, receiving newly minted coins as a reward. (Target block frequency: ~10 minutes).
                </p>
              </div>
              <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Proof-of-Stake (PoS)</h4>
                <p className="font-body-md text-on-surface-variant">
                  Utilized by Ethereum, validators lock up collateral (staked ETH) to propose and attest to new blocks, consuming 99.9% less energy while enforcing economic slashing penalties for fraud.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Crypto Currency Prices & Market Valuation */}
          <div>
            <h2 id="crypto-prices" className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <BarChart3 className="w-6 h-6 text-secondary" />
              Crypto Currency Prices &amp; Market Drivers
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
              A <strong>crypto currency price</strong> is governed entirely by open market dynamics on liquid exchanges. Because digital assets trade continuously across international venues, spot prices fluctuate based on macroeconomic shifts, regulatory announcements, and total circulating supply metrics.
            </p>

            {/* Verified Data & Statistics Table */}
            <div className="overflow-x-auto my-md">
              <table className="w-full text-left border-collapse border border-outline-variant rounded-lg">
                <thead>
                  <tr className="bg-surface-container-highest text-on-surface font-body-md">
                    <th className="p-3 border border-outline-variant font-semibold">Key Benchmark Metric</th>
                    <th className="p-3 border border-outline-variant font-semibold">Bitcoin (BTC) Data</th>
                    <th className="p-3 border border-outline-variant font-semibold">Ethereum (ETH) Data</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-on-surface-variant">
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Maximum Supply Cap</td>
                    <td className="p-3 border border-outline-variant">21,000,000 BTC (Hard Cap)</td>
                    <td className="p-3 border border-outline-variant">Dynamic (Deflationary EIP-1559)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Consensus Mechanism</td>
                    <td className="p-3 border border-outline-variant">Proof-of-Work (SHA-256)</td>
                    <td className="p-3 border border-outline-variant">Proof-of-Stake (PoS)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Average Block Time</td>
                    <td className="p-3 border border-outline-variant">~10.0 Minutes</td>
                    <td className="p-3 border border-outline-variant">~12.0 Seconds</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Primary Use Case</td>
                    <td className="p-3 border border-outline-variant">Digital Gold &amp; Store of Value</td>
                    <td className="p-3 border border-outline-variant">Smart Contract Settlement Layer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Crypto vs Fiat Comparison */}
          <div>
            <h2 id="crypto-vs-fiat" className="font-headline-md text-headline-md text-primary mb-md">
              Crypto Currency vs. Traditional Fiat Financial Systems
            </h2>
            <div className="overflow-x-auto mb-md">
              <table className="w-full text-left border-collapse border border-outline-variant rounded-lg">
                <thead>
                  <tr className="bg-surface-container-highest text-on-surface font-body-md">
                    <th className="p-3 border border-outline-variant font-semibold">Dimension</th>
                    <th className="p-3 border border-outline-variant font-semibold">Crypto Currency</th>
                    <th className="p-3 border border-outline-variant font-semibold">Traditional Fiat (USD, EUR)</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-on-surface-variant">
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Issuance &amp; Control</td>
                    <td className="p-3 border border-outline-variant">Decentralized code &amp; consensus</td>
                    <td className="p-3 border border-outline-variant">Central bank monetary policy</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Inflation Risk</td>
                    <td className="p-3 border border-outline-variant">Predictable, programmatic halving</td>
                    <td className="p-3 border border-outline-variant">Subject to currency printing</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Settlement Speed</td>
                    <td className="p-3 border border-outline-variant">Minutes (24/7/365 global)</td>
                    <td className="p-3 border border-outline-variant">1-3 Business Days (SWIFT/ACH)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-outline-variant font-medium text-primary">Asset Custody</td>
                    <td className="p-3 border border-outline-variant">Self-custody via private keys</td>
                    <td className="p-3 border border-outline-variant">Held by commercial banks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: FAQs */}
          <div>
            <h2 id="faq" className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <HelpCircle className="w-6 h-6 text-secondary" />
              Frequently Asked Questions About Crypto Currency
            </h2>
            <div className="space-y-4">
              <details className="group border border-outline-variant rounded-lg bg-surface-container-lowest [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-on-surface font-medium">
                  What is crypto currency?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <p className="px-4 pb-4 leading-relaxed text-on-surface-variant font-body-md">
                  A crypto currency is a digital payment system that operates without central banks or commercial intermediaries. It relies on peer-to-peer cryptography on distributed blockchain networks to verify and record all transactions.
                </p>
              </details>
              
              <details className="group border border-outline-variant rounded-lg bg-surface-container-lowest [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-on-surface font-medium">
                  What is the meaning of crypto currency?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <p className="px-4 pb-4 leading-relaxed text-on-surface-variant font-body-md">
                  The meaning stems from combining "cryptography" and "currency." It refers to digital assets that enforce sovereign individual ownership, open-source auditability, and mathematical scarcity independent of government central banks.
                </p>
              </details>

              <details className="group border border-outline-variant rounded-lg bg-surface-container-lowest [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-on-surface font-medium">
                  How are crypto currency prices determined?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <p className="px-4 pb-4 leading-relaxed text-on-surface-variant font-body-md">
                  A crypto currency price is determined by real-time order-book matching across global exchanges based on market supply and demand, total token liquidity, macroeconomic interest rates, regulatory news, and investor sentiment.
                </p>
              </details>

              <details className="group border border-outline-variant rounded-lg bg-surface-container-lowest [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-on-surface font-medium">
                  How can I store my crypto currency safely?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <p className="px-4 pb-4 leading-relaxed text-on-surface-variant font-body-md">
                  The safest method is using a non-custodial hardware wallet (like Ledger or Trezor) where private keys remain offline, backed up on a physical steel seed phrase plate away from internet malware and exchange insolvency risks.
                </p>
              </details>
            </div>
          </div>

          {/* Section 6: Primary Sources & Research Citations */}
          <div className="pt-6 border-t border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-secondary mb-3 font-semibold uppercase tracking-wider">
              Primary Research &amp; External Citations
            </h3>
            <ul className="space-y-2 font-body-sm text-on-surface-variant">
              <li className="flex items-center gap-xs">
                <ExternalLink className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                  Nakamoto, S. (2008). <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em>.
                </a>
              </li>
              <li className="flex items-center gap-xs">
                <ExternalLink className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://ethereum.org/en/developers/docs/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                  Ethereum Foundation. <em>Ethereum Developer &amp; EVM Architecture Documentation</em>.
                </a>
              </li>
              <li className="flex items-center gap-xs">
                <ExternalLink className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-rba-virtual-assets.html" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                  Financial Action Task Force (FATF). <em>Updated Guidance for a Risk-Based Approach to Virtual Assets</em>.
                </a>
              </li>
              <li className="flex items-center gap-xs">
                <ExternalLink className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://www.bis.org/publ/arpdf/ar2022e3.htm" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                  Bank for International Settlements (BIS). <em>Answering the Crypto Challenge: Monetary Infrastructure</em>.
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Latest Intelligence Grid Section */}
        <section>
          <div className="flex items-center justify-between border-b border-primary pb-sm mb-lg">
            <h2 className="font-headline-md text-headline-md text-primary">Latest Intelligence &amp; Editorial Analysis</h2>
            <span className="font-body-md text-on-surface-variant">Showing All {articles.length} Articles</span>
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
