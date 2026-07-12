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
      { title: "CryptoBeacon — Editorial Rigor. Financial Clarity." },
      {
        name: "description",
        content:
          "Institutional-grade analysis, guides, and security research on Bitcoin, Ethereum, and the digital-asset ecosystem.",
      },
      { property: "og:title", content: "CryptoBeacon — Editorial Rigor. Financial Clarity." },
      {
        property: "og:description",
        content:
          "Institutional-grade analysis, guides, and security research on Bitcoin, Ethereum, and the digital-asset ecosystem.",
      },
      { property: "og:url", content: "https://cryptobeaconnews.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://cryptobeaconnews.lovable.app/" }],
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
            Editorial Rigor. Financial Clarity.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Institutional-grade coverage of Bitcoin, Ethereum, and the wider digital-asset
            ecosystem. New analysis, guides, and security research will appear here as it's
            published.
          </p>
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
                  Worried you sent Bitcoin to an Ethereum address by mistake? Here's what actually happens, why it's rarer than you think, and what to check.
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
                  How Bitcoin transactions actually work, the mistakes that cause permanent loss, and a simple checklist to send safely every time.
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
                  The primary drivers behind digital asset regulation—consumer protection, financial stability, and anti-money laundering frameworks.
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
                  Learn how to store your crypto seed phrase safely, avoid the mistakes that cause permanent loss, and choose the right backup method for you.
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
                  How crypto phishing actually works, the red flags that repeat across every version, and the verification habits that keep your wallet safe.
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
                  The fundamental rule of digital ownership. What self-custody actually means, why it matters, and when it makes sense to trust an exchange.
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
