import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import seedVault from "@/assets/seed-phrase-vault.jpg";
import phishingHero from "@/assets/phishing-padlock.jpg";
import smartContractHero from "@/assets/security-smart-contract-approvals.jpg";
import hwMistakesHero from "@/assets/hardware-wallet-mistakes.jpg";
import verifyTxHero from "@/assets/security-verify-transaction.jpg";
import hackedHero from "@/assets/hacked-wallet-emergency.jpg";

import hero_atm from "@/assets/security-crypto-atm.jpg";
import hero_fakewallet from "@/assets/security-fake-wallet-app.jpg";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto Security & Scam Awareness",
  url: "https://www.cryptobeacon.site/security",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Crypto Security Hub",
      url: "https://www.cryptobeacon.site/security/crypto-security-hub",
    },
    {
      "@type": "WebPage",
      name: "How to Store Your Crypto Seed Phrase Safely",
      url: "https://www.cryptobeacon.site/security/how-to-store-crypto-seed-phrase-safely",
    },
    {
      "@type": "WebPage",
      name: "What to Do If Your Crypto Wallet Is Hacked: Emergency Action Guide",
      url: "https://www.cryptobeacon.site/security/what-to-do-if-your-crypto-wallet-is-hacked",
    },
    {
      "@type": "WebPage",
      name: "How to Avoid Crypto Phishing Scams",
      url: "https://www.cryptobeacon.site/security/how-to-avoid-crypto-phishing-scams",
    },
    {
      "@type": "WebPage",
      name: "How to Revoke Smart Contract Approvals",
      url: "https://www.cryptobeacon.site/security/how-to-revoke-smart-contract-approvals",
    },
    {
      "@type": "WebPage",
      name: "5 Fatal Hardware Wallet Mistakes",
      url: "https://www.cryptobeacon.site/security/hardware-wallet-mistakes-to-avoid",
    },
    {
      "@type": "WebPage",
      name: "How to Verify a Crypto Transaction Using a Block Explorer",
      url: "https://www.cryptobeacon.site/security/how-to-verify-a-crypto-transaction",
    },
    {
      "@type": "WebPage",
      name: "Are Crypto ATMs Safe? Scams and Risks Explained",
      url: "https://www.cryptobeacon.site/security/what-is-a-crypto-atm-are-they-safe",
    },
    {
      "@type": "WebPage",
      name: "How to Spot a Fake Crypto Wallet App Before It Steals Your Funds",
      url: "https://www.cryptobeacon.site/security/how-to-spot-a-fake-crypto-wallet-app",
    },
  ],
};

export const Route = createFileRoute("/security/")({
  head: () => ({
    meta: [
      { title: "Security & Scam Awareness — CryptoBeacon" },
      {
        name: "description",
        content:
          "Wallet safety, phishing awareness, and rug-pull forensics. Practical crypto security guidance.",
      },
      { property: "og:title", content: "Security & Scam Awareness — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Wallet safety, phishing awareness, and rug-pull forensics. Practical crypto security guidance.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/security" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [{ rel: "canonical", href: "https://www.cryptobeacon.site/security" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-md">
            Security & Scam Awareness
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Wallet safety, phishing awareness, and rug-pull forensics — peer-reviewed guidance for
            protecting your assets.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/security/crypto-security-hub"
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
                Security · Hub
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Crypto Security Hub
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The ultimate hub for cryptocurrency security — protecting your seed phrases, avoiding phishing scams, securing exchange accounts, and verifying transactions.
              </p>
            </div>
          </Link>

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
              <p className="font-body-md text-body-md text-on-surface-variant">
                Learn how to store your crypto seed phrase safely, avoid the mistakes that cause
                permanent loss, and choose the right backup method for you.
              </p>
            </div>
          </Link>
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
              <p className="font-body-md text-body-md text-on-surface-variant">
                How crypto phishing actually works, the red flags that repeat across every version,
                and the verification habits that keep your wallet safe.
              </p>
            </div>
          </Link>
          <Link
            to="/security/how-to-revoke-smart-contract-approvals"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={smartContractHero}
                alt="Glowing lock mechanism representing smart contract revokes"
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
                How to Revoke Smart Contract Approvals and Protect Your Crypto
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A deep dive into token allowances, why they are dangerous, and how to revoke them.
              </p>
            </div>
          </Link>
          <Link
            to="/security/hardware-wallet-mistakes-to-avoid"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={hwMistakesHero}
                alt="Glitched digital vault representing operational mistakes"
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
                5 Fatal Hardware Wallet Mistakes and How to Avoid Them
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Buying a hardware wallet isn't enough. Learn the operational security errors to avoid.
              </p>
            </div>
          </Link>
          <Link
            to="/security/how-to-verify-a-crypto-transaction"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={verifyTxHero}
                alt="Glowing transaction ID hash on a dark terminal screen with green verification checkmarks"
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
                How to Verify a Crypto Transaction Using a Block Explorer
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A practical guide to checking the status of any crypto transaction. Learn how to read a transaction ID, understand block confirmations, and know when a payment is truly final.
              </p>
            </div>
          </Link>
          <Link
            to="/security/what-to-do-if-your-crypto-wallet-is-hacked"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={hackedHero}
                alt="Cracked digital security shield with red warning glow and broken blockchain wallet icon"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Security · Article
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What to Do If Your Crypto Wallet Is Hacked: Emergency Action Guide
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                If your crypto wallet has been compromised, every second counts. This emergency guide covers exactly what to do — in order — from the moment you realize something is wrong.
              </p>
            </div>
          </Link>

          <Link
            to="/security/what-is-a-crypto-atm-are-they-safe"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img src={hero_atm} alt="" className="w-full h-full object-cover" loading="lazy" width={1536} height={896} />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Security · Article
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Are Crypto ATMs Safe? Scams and Risks Explained
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Crypto ATMs offer convenience but come with massive fees and significant risks. Learn how they work and the common scams targeting users.
              </p>
            </div>
          </Link>

          <Link
            to="/security/how-to-spot-a-fake-crypto-wallet-app"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img src={hero_fakewallet} alt="" className="w-full h-full object-cover" loading="lazy" width={1536} height={896} />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Security · Article
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                How to Spot a Fake Crypto Wallet App Before It Steals Your Funds
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Learn the red flags that distinguish fake crypto wallet apps from legitimate ones: developer mismatches, suspicious permissions, review patterns, and more.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
