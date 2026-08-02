import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import seedVault from "@/assets/seed-phrase-vault.jpg";
import phishingHero from "@/assets/phishing-padlock.jpg";
import regulationHero from "@/assets/news-crypto-regulation.jpg";
import nyknycHero from "@/assets/keys-coins-meaning.jpg";
import sendHero from "@/assets/bitcoin-send-safely.jpg";
import ethereumHero from "@/assets/ethereum-address-mismatch.png";

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
            {/* Direct Definition Snippet for AI Overviews */}
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
              As the ecosystem expands, resources like the <strong>fintechzoom.com crypto currency</strong> section or the <strong>chicksx crypto &amp; currency exchange</strong> provide tools to track <strong>crypto currency prices</strong> and read the latest <strong>crypto currency news</strong>. Even political figures are entering the space, with initiatives like the proposed <strong>trump crypto currency</strong> showing the growing mainstream adoption of various <strong>crypto currencies</strong>.
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
                      <td className="p-3 border border-outline-variant">Often capped (e.g., Bitcoin)</td>
                      <td className="p-3 border border-outline-variant">Unlimited (Printed by banks)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-outline-variant font-medium">Transactions</td>
                      <td className="p-3 border border-outline-variant">Peer-to-peer, borderless</td>
                      <td className="p-3 border border-outline-variant">Requires intermediaries</td>
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
                  Crypto currency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments using cryptography.
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
                  The meaning refers to the fusion of "cryptography" and "currency." It relies on encryption algorithms to create, secure, and verify the transfer of funds independently of a central bank.
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
                  A crypto currency price is largely determined by market supply and demand. Trading on exchanges globally means prices can fluctuate heavily based on news, regulation, and macroeconomic factors.
                </p>
              </details>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant">
            <h4 className="font-label-caps text-label-caps text-secondary mb-2">Citations &amp; References</h4>
            <ul className="list-disc list-inside space-y-1 font-body-sm text-on-surface-variant">
              <li>Nakamoto, S. (2008). <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em>.</li>
              <li>Ethereum Foundation. <em>What is Ethereum?</em> Ethereum.org.</li>
              <li>Financial Action Task Force (FATF). <em>Virtual Assets Regulatory Framework</em>.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between border-b border-primary pb-sm mb-lg">
            <h2 className="font-headline-md text-headline-md text-primary">Latest Intelligence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {/* Ethereum Article */}
            <Link
              to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
              className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
            >
              <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
                <img
                  src={ethereumHero}
                  alt="Illustration representing incompatible Bitcoin and Ethereum address formats"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={900}
                />
              </div>
              <div className="p-lg">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  Ethereum · Guide
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                  Can You Send Bitcoin to an Ethereum Address? What Actually Happens
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  Worried you sent Bitcoin to an Ethereum address by mistake? Here's what actually
                  happens, why it's rarer than you think, and what to check.
                </p>
              </div>
            </Link>

            {/* Bitcoin Article */}
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
            >
              <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
                <img
                  src={sendHero}
                  alt="Illustration representing a Bitcoin transaction moving safely between wallets"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={896}
                />
              </div>
              <div className="p-lg">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  Bitcoin · Guide
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                  How to Send Bitcoin Safely
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  How Bitcoin transactions actually work, the mistakes that cause permanent loss,
                  and a simple checklist to send safely every time.
                </p>
              </div>
            </Link>

            {/* News Article */}
            <Link
              to="/news/why-governments-regulate-cryptocurrency"
              className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
            >
              <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
                <img
                  src={regulationHero}
                  alt="Abstract architectural pillars representing government regulation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={896}
                />
              </div>
              <div className="p-lg">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  News · Analysis
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                  Why Governments Regulate Cryptocurrency
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  The primary drivers behind digital asset regulation—consumer protection, financial
                  stability, and anti-money laundering frameworks.
                </p>
              </div>
            </Link>

            {/* Security Seed Phrase */}
            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
            >
              <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
                <img
                  src={seedVault}
                  alt="Illustration of a secure vault representing safe crypto seed phrase storage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1536}
                  height={896}
                />
              </div>
              <div className="p-lg">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  Security · Guide
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                  How to Store Your Crypto Seed Phrase Safely
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  Learn how to store your crypto seed phrase safely, avoid the mistakes that cause
                  permanent loss, and choose the right backup method for you.
                </p>
              </div>
            </Link>

            {/* Security Phishing */}
            <Link
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
            >
              <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
                <img
                  src={phishingHero}
                  alt="Minimalist padlock illustration representing crypto phishing scam protection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={896}
                />
              </div>
              <div className="p-lg">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  Security · Guide
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                  How to Avoid Crypto Phishing Scams
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  How crypto phishing actually works, the red flags that repeat across every
                  version, and the verification habits that keep your wallet safe.
                </p>
              </div>
            </Link>

            {/* Guides NYKNYC */}
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
            >
              <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
                <img
                  src={nyknycHero}
                  alt="Illustration representing a golden key securing a digital coin"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={896}
                />
              </div>
              <div className="p-lg">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  Guides · Concept
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                  "Not Your Keys, Not Your Coins" — What It Means
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  The fundamental rule of digital ownership. What self-custody actually means, why
                  it matters, and when it makes sense to trust an exchange.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
