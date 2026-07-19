import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import regulationHero from "@/assets/news-crypto-regulation.jpg";
import blockchainForkHero from "@/assets/news-blockchain-fork.png";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Crypto News — CryptoBeacon" },
      {
        name: "description",
        content:
          "Evergreen explainers and editorial coverage of the crypto industry, its rules, and what they mean for everyday users.",
      },
      { property: "og:title", content: "Crypto News — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Evergreen explainers and editorial coverage of the crypto industry, its rules, and what they mean for everyday users.",
      },
      { property: "og:url", content: "https://cryptobeaconnews.lovable.app/news" },
    ],
    links: [{ rel: "canonical", href: "https://cryptobeaconnews.lovable.app/news" }],
  }),
  component: NewsHub,
});

function NewsHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <span
                className="material-symbols-outlined text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              >
                newspaper
              </span>
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary">
              News
            </h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Evergreen explainers on how the crypto industry actually works — the rules, the
            institutions, and what they mean for everyday users.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/news/why-governments-regulate-cryptocurrency"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={regulationHero}
                alt="Illustration representing government oversight of cryptocurrency"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Why Do Governments Regulate Cryptocurrency?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language explainer on why governments regulate crypto, the main categories
                of rules, and what that means for everyday users.
              </p>
            </div>
          </Link>

          <Link
            to="/news/what-is-a-blockchain-fork"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={blockchainForkHero}
                alt="Abstract illustration representing a blockchain splitting into two separate paths"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is a Blockchain Fork?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language explainer on what a blockchain fork is, the difference between hard and soft forks, and why cryptocurrencies sometimes split into two.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
