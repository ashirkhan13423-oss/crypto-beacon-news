import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import seedVault from "@/assets/seed-phrase-vault.jpg";
import phishingHero from "@/assets/phishing-padlock.jpg";

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
      { property: "og:url", content: "https://crypto-beacon-news.vercel.app/security" },
    ],
    links: [{ rel: "canonical", href: "https://crypto-beacon-news.vercel.app/security" }],
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
            Wallet safety, phishing awareness, and rug-pull forensics — peer-reviewed guidance
            for protecting your assets.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
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
                How crypto phishing actually works, the red flags that repeat across every
                version, and the verification habits that keep your wallet safe.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
