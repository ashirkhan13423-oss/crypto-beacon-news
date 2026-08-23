import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useEffect, useState } from "react";
import { Search, SearchX, FileSearch } from "lucide-react";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => ({
    meta: [
      { title: "Search — CryptoBeacon" },
      {
        name: "description",
        content:
          "Search CryptoBeacon's articles and guides on Bitcoin, Ethereum, wallets, self-custody, and crypto security.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: "https://www.cryptobeacon.site/search" },
    ],
  }),
  component: SearchPage,
});

// All 12 articles for search index
const ARTICLES = [
  {
    title: "How to Send Bitcoin Safely",
    description:
      "Learn how Bitcoin transactions work, the mistakes that cause permanent loss, and a simple checklist to send Bitcoin safely every time.",
    path: "/bitcoin/how-to-send-bitcoin-safely",
    category: "Bitcoin",
  },
  {
    title: "What Is a Bitcoin Wallet? Hot, Cold & Custodial Explained",
    description:
      "Understand how software, hardware, and exchange wallets manage Bitcoin private keys, and how to select the right storage option.",
    path: "/bitcoin/what-is-a-bitcoin-wallet",
    category: "Bitcoin",
  },
  {
    title: "What Is Bitcoin Mining? How New Bitcoin Is Created",
    description:
      "Proof-of-Work, block rewards, mining pools, and network difficulty explained in plain language for beginners.",
    path: "/bitcoin/what-is-bitcoin-mining",
    category: "Bitcoin",
  },
  {
    title: "Can You Send Bitcoin to an Ethereum Address?",
    description:
      "An explainer on why Bitcoin and Ethereum are separate networks, what happens if you send crypto to the wrong chain, and how to move value safely between them.",
    path: "/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
    category: "Ethereum",
  },
  {
    title: "What Is Ethereum Staking? Proof-of-Stake & Yield Mechanics Explained",
    description:
      "Learn how Proof-of-Stake works, solo staking vs liquid staking, protocol inflation, and key validator risks.",
    path: "/ethereum/what-is-ethereum-staking",
    category: "Ethereum",
  },
  {
    title: "Ethereum Layer 2 Scaling & Rollups Explained",
    description:
      "Understand Optimistic vs ZK Rollups, blob space (EIP-4844), and how L2s scale Ethereum while preserving security.",
    path: "/ethereum/ethereum-layer-2-scaling-rollups-explained",
    category: "Ethereum",
  },
  {
    title: "Should You Keep Your Crypto on an Exchange or Move It to Your Own Wallet?",
    description:
      "Comparing exchange custody vs personal wallet custody across top crypto currencies.",
    path: "/guides/exchange-or-personal-wallet-crypto-storage",
    category: "Guides",
  },
  {
    title: '"Not Your Keys, Not Your Coins" — What It Actually Means',
    description:
      "The foundational crypto currency meaning of self-custody: why private key ownership matters when holding crypto currencies.",
    path: "/guides/not-your-keys-not-your-coins-meaning",
    category: "Guides",
  },
  {
    title: "What Is a Crypto Wallet Address? How to Use It Safely",
    description:
      "How public keys and wallet addresses work across major crypto currencies, address format validation, and transfer safety.",
    path: "/guides/what-is-a-crypto-wallet-address",
    category: "Guides",
  },
  {
    title: "What Is a Blockchain Fork? Hard & Soft Forks Explained",
    description:
      "A beginner-friendly explainer on what a blockchain fork is, hard vs soft forks, and what happens to crypto currency prices during network splits.",
    path: "/guides/what-is-a-blockchain-fork",
    category: "Guides",
  },
  {
    title: "Why Do Governments Regulate Cryptocurrency?",
    description:
      "An in-depth editorial guide on why governments regulate crypto, political policy shifts, SEC oversight, and MiCA.",
    path: "/guides/why-governments-regulate-cryptocurrency",
    category: "Guides",
  },
  {
    title: "What Does It Mean When an Exchange Pauses Withdrawals?",
    description:
      "Your crypto exchange paused withdrawals — is that normal or a red flag? A clear framework for telling routine maintenance from liquidity crises.",
    path: "/guides/what-it-means-when-exchange-pauses-withdrawals",
    category: "Guides",
  },
  {
    title: "How to Avoid Crypto Phishing Scams",
    description:
      "A comprehensive guide to identifying and avoiding common crypto phishing scams, protecting your seed phrase, and keeping your wallet safe.",
    path: "/security/how-to-avoid-crypto-phishing-scams",
    category: "Security",
  },
  {
    title: "How to Store Your Crypto Seed Phrase Safely",
    description:
      "Learn how to store your crypto seed phrase safely, avoid the mistakes that cause permanent loss, and choose the right backup method for you.",
    path: "/security/how-to-store-crypto-seed-phrase-safely",
    category: "Security",
  },
];

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    navigate({ search: { q: value } });
  };

  const filteredArticles =
    query.trim() === ""
      ? []
      : ARTICLES.filter((article) => {
          const searchLower = query.toLowerCase();
          return (
            article.title.toLowerCase().includes(searchLower) ||
            article.description.toLowerCase().includes(searchLower) ||
            article.category.toLowerCase().includes(searchLower)
          );
        });

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <Search
                className="text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Search</h1>
          </div>

          <div className="relative max-w-2xl mt-lg">
            <Search className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Search articles, guides, and news..."
              className="w-full pl-[52px] pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-xl font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              autoFocus
            />
          </div>
        </header>

        {query.trim() !== "" && (
          <div className="mb-md">
            <h2 className="font-headline-sm text-headline-sm text-on-surface-variant mb-lg">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? "s" : ""} for "
              {query}"
            </h2>

            {filteredArticles.length > 0 ? (
              <div className="flex flex-col gap-md max-w-3xl">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.path}
                    to={article.path}
                    className="block p-lg rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
                  >
                    <span className="font-label-caps text-label-caps text-secondary font-semibold">
                      {article.category}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-sm mb-xs">
                      {article.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-xxl text-center max-w-2xl mx-auto border border-dashed border-outline-variant rounded-xl bg-surface-container-lowest">
                <SearchX
                  className="text-4xl text-on-surface-variant mb-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                />
                <p className="font-body-lg text-body-lg text-primary font-semibold mb-xs">
                  No results found
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Try adjusting your search or check for typos.
                </p>
              </div>
            )}
          </div>
        )}


      </main>
      <SiteFooter />
    </div>
  );
}
