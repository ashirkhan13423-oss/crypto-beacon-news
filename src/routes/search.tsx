import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import { Search, SearchX, FileSearch } from "lucide-react";


export const Route = createFileRoute("/search")({
  component: SearchPage,
});

// All articles for search
const ARTICLES = [
  {
    title: "How to Send Bitcoin Safely",
    description: "Learn how Bitcoin transactions work, the mistakes that cause permanent loss, and a simple checklist to send Bitcoin safely every time.",
    path: "/bitcoin/how-to-send-bitcoin-safely",
    category: "Bitcoin"
  },
  {
    title: "Can You Send Bitcoin to an Ethereum Address?",
    description: "An explainer on why Bitcoin and Ethereum are separate networks, what happens if you send crypto to the wrong chain, and how to move value safely between them.",
    path: "/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
    category: "Ethereum"
  },
  {
    title: "Should You Keep Your Crypto on an Exchange or Move It to Your Own Wallet?",
    description: "Should your crypto stay on an exchange or move to your own wallet? A clear, neutral decision framework based on how you actually use your crypto.",
    path: "/guides/exchange-or-personal-wallet-crypto-storage",
    category: "Guides"
  },
  {
    title: '"Not Your Keys, Not Your Coins" — What It Actually Means',
    description: 'A plain-language explainer on what "not your keys, not your coins" means, why it matters, and how to tell if you actually control your crypto.',
    path: "/guides/not-your-keys-not-your-coins-meaning",
    category: "Guides"
  },
  {
    title: "What Is a Blockchain Fork?",
    description: "A beginner-friendly explainer on what a blockchain fork is, why they happen, and the difference between hard forks and soft forks.",
    path: "/news/what-is-a-blockchain-fork",
    category: "News"
  },
  {
    title: "Why Governments Regulate Cryptocurrency",
    description: "An objective look at the primary reasons governments regulate cryptocurrency, from preventing money laundering to protecting retail investors.",
    path: "/news/why-governments-regulate-cryptocurrency",
    category: "News"
  },
  {
    title: "How to Avoid Crypto Phishing Scams",
    description: "A comprehensive guide to identifying and avoiding common crypto phishing scams, protecting your seed phrase, and keeping your wallet safe.",
    path: "/security/how-to-avoid-crypto-phishing-scams",
    category: "Security"
  },
  {
    title: "How to Store Your Crypto Seed Phrase Safely",
    description: "Learn how to store your crypto seed phrase safely, avoid the mistakes that cause permanent loss, and choose the right backup method for you.",
    path: "/security/how-to-store-crypto-seed-phrase-safely",
    category: "Security"
  }
];

function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredArticles = query.trim() === "" ? [] : ARTICLES.filter((article) => {
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
              <Search className="text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }} />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Search</h1>
          </div>
          
          <div className="relative max-w-2xl mt-lg">
            <Search className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, guides, and news..."
              className="w-full pl-[52px] pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-xl font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              autoFocus
            />
          </div>
        </header>

        {query.trim() !== "" && (
          <div className="mb-md">
            <h2 className="font-headline-sm text-headline-sm text-on-surface-variant mb-lg">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} for "{query}"
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
                <SearchX className="text-4xl text-on-surface-variant mb-sm" style={{ fontVariationSettings: "'FILL' 1" }} />
                <p className="font-body-lg text-body-lg text-primary font-semibold mb-xs">No results found</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Try adjusting your search or check for typos.</p>
              </div>
            )}
          </div>
        )}
        
        {query.trim() === "" && (
          <div className="py-xxl text-center max-w-2xl mx-auto opacity-60">
            <FileSearch className="text-5xl text-on-surface-variant mb-sm" />
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Type above to search through our articles and guides.
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
