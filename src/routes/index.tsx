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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crypto Currency: News, Prices & Security Guides | CryptoBeacon" },
      {
        name: "description",
        content:
          "Your definitive guide on what crypto currency is. Get the latest crypto currency news, meaning, and crypto currency prices. Protect your assets today.",
      },
      {
        property: "og:title",
        content: "Crypto Currency: News, Prices & Security Guides | CryptoBeacon",
      },
      {
        property: "og:description",
        content:
          "Your definitive guide on what crypto currency is. Get the latest crypto currency news, meaning, and crypto currency prices. Protect your assets today.",
      },
      { property: "og:url", content: "https://crypto-beacon-news.vercel.app/" },
    ],
    links: [{ rel: "canonical", href: "https://crypto-beacon-news.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "name": "CryptoBeacon",
              "alternateName": ["Crypto Beacon", "Crypto Beacon News", "CryptoBeacon News"],
              "url": "https://crypto-beacon-news.vercel.app/"
            },
            {
              "@type": "Article",
              "headline": "Crypto Currency: News, Prices & Meaning",
              "description": "Your definitive guide on what crypto currency is. Get the latest crypto currency news, meaning, and crypto currency prices. Protect your assets today.",
              "author": {
                "@type": "Organization",
                "name": "CryptoBeacon"
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
                "@id": "https://crypto-beacon-news.vercel.app/"
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
                    "text": "Crypto currency is a digital or virtual form of money that uses cryptography for security and operates on decentralized networks like blockchain."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the meaning of crypto currency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The meaning of crypto currency lies in its decentralized nature, removing central authorities like banks and allowing peer-to-peer digital transactions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I check crypto currency prices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Crypto currency prices can be checked on various exchanges and news platforms, reflecting real-time market supply and demand."
                  }
                }
              ]
            }
          ]
        })
      }
    ]
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
        <section className="mb-xxl max-w-3xl">
          <span className="inline-block bg-surface-container-high text-secondary font-label-caps text-label-caps px-md py-xs rounded-full mb-md border border-outline-variant">
            CryptoBeacon
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md">
            Crypto Currency: News, Prices &amp; Meaning
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Institutional-grade coverage of Bitcoin, Ethereum, and the wider digital-asset
            ecosystem. Practical guides on sending crypto safely, self-custody and seed phrase
            storage, scam prevention, and the rules shaping the industry. New analysis and security
            research are published here as they're released.
          </p>
        </section>

        <section className="mb-xxl max-w-4xl bg-surface-container-low p-8 rounded-2xl border border-outline-variant">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">What is Crypto Currency?</h2>
          <div className="space-y-6 font-body-md text-on-surface-variant">
            <p className="text-lg font-medium text-on-surface">
              <strong>Crypto currency is</strong> a digital or virtual form of money secured by cryptography and operating on decentralized networks, independent of traditional banks. 
            </p>

            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Features of Crypto Currency</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Decentralization:</strong> The core <strong>crypto currency meaning</strong> lies in its reliance on blockchain technology rather than a central authority.</li>
                <li><strong>Security:</strong> Cryptography makes it nearly impossible to counterfeit.</li>
                <li><strong>Volatility:</strong> A <strong>crypto currency price</strong> can fluctuate rapidly based on market demand and news.</li>
                <li><strong>Global Access:</strong> You can send assets worldwide instantly, bypassing traditional financial borders.</li>
              </ul>
            </div>

            <p>
              As the ecosystem expands, resources tracking <strong>crypto currency prices</strong> and <strong>crypto currency news</strong> provide transparency on market shifts. Mainstream institutional adoption and regulatory frameworks continue to integrate digital currencies into traditional finance.
            </p>

            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Crypto Currency vs. Traditional Fiat</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-outline-variant rounded-lg">
                  <thead>
                    <tr className="bg-surface-container-highest text-on-surface">
                      <th className="p-3 border border-outline-variant font-medium">Feature</th>
                      <th className="p-3 border border-outline-variant font-medium">Crypto Currency</th>
                      <th className="p-3 border border-outline-variant font-medium">Traditional Fiat (e.g., USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-outline-variant font-medium">Control</td>
                      <td className="p-3 border border-outline-variant">Decentralized (Blockchain)</td>
                      <td className="p-3 border border-outline-variant">Centralized (Central Banks)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-outline-variant font-medium">Supply</td>
                      <td className="p-3 border border-outline-variant">Often capped (e.g., Bitcoin 21M limit)</td>
                      <td className="p-3 border border-outline-variant">Central bank discretion</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-outline-variant font-medium">Transactions</td>
                      <td className="p-3 border border-outline-variant">Peer-to-peer, borderless</td>
                      <td className="p-3 border border-outline-variant">Requires banking intermediaries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <details className="group border border-outline-variant rounded-lg bg-surface-container-lowest [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-on-surface font-medium">
                  What is crypto currency?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </summary>
                <p className="px-4 pb-4 leading-relaxed text-on-surface-variant font-body-md">
                  Crypto currency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that enables anyone anywhere to send and receive payments using cryptography.
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
                  The meaning refers to the fusion of "cryptography" and "currency." It relies on encryption algorithms to create, secure, and verify transactions independently of a central bank.
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
                  A crypto currency price is largely determined by market supply and demand. Trading on global exchanges means prices adjust in real time based on trading volume, news, regulation, and macroeconomic trends.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between border-b border-primary pb-sm mb-lg">
            <h2 className="font-headline-md text-headline-md text-primary">Latest Intelligence</h2>
            <span className="font-body-md text-on-surface-variant">Showing {articles.length} Published Articles</span>
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
