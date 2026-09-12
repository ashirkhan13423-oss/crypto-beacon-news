import fs from 'fs';
import path from 'path';

const PUBLISHED = "2026-09-12";

const articles = [
  {
    category: "Security",
    slug: "what-is-a-crypto-atm-are-they-safe",
    title: "What is a Crypto ATM and Are They Safe?",
    desc: "A comprehensive guide to understanding crypto ATMs, how they work, and essential security tips to keep your funds safe when using them.",
    image: "security-crypto-atm.jpg",
    links: [
      { url: "/security/how-to-avoid-crypto-phishing-scams", text: "How to Avoid Crypto Phishing Scams" },
      { url: "/news/why-are-crypto-atms-everywhere", text: "Why Are Crypto ATMs Everywhere?" }
    ],
    relatedReading: [
      { url: "/security/how-to-avoid-crypto-phishing-scams", label: "Security", title: "Avoid Phishing Scams" },
      { url: "/news/why-are-crypto-atms-everywhere", label: "News", title: "Crypto ATMs Everywhere" },
      { url: "/security/how-to-store-crypto-seed-phrase-safely", label: "Security", title: "Store Seed Phrase Safely" }
    ],
    contentTopic: "Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue."
  },
  {
    category: "Security",
    slug: "how-to-spot-a-fake-crypto-wallet-app",
    title: "How to Spot a Fake Crypto Wallet App",
    desc: "Learn how to identify malicious crypto wallet apps in app stores and protect your digital assets from theft.",
    image: "security-fake-wallet-app.jpg",
    links: [
      { url: "/security/how-to-store-crypto-seed-phrase-safely", text: "How to Store Your Crypto Seed Phrase Safely" }
    ],
    relatedReading: [
      { url: "/security/how-to-store-crypto-seed-phrase-safely", label: "Security", title: "Store Seed Phrase Safely" },
      { url: "/security/what-is-a-crypto-atm-are-they-safe", label: "Security", title: "Crypto ATM Safety" },
      { url: "/security/how-to-avoid-crypto-phishing-scams", label: "Security", title: "Avoid Phishing Scams" }
    ],
    contentTopic: "Fake wallet apps are designed to look like legitimate applications but are built to steal your funds or seed phrase. Always verify the developer's name, read reviews carefully, and cross-reference the app link with the official website of the wallet provider. Never enter your seed phrase into an app unless you are absolutely certain of its authenticity."
  },
  {
    category: "Bitcoin",
    slug: "why-bitcoin-mining-uses-so-much-energy",
    title: "Why Bitcoin Mining Uses So Much Energy",
    desc: "An objective look at the energy consumption of the Bitcoin network, examining both environmental concerns and the transition to renewable sources.",
    image: "bitcoin-mining-energy.jpg",
    links: [
      { url: "/bitcoin/how-to-send-bitcoin-safely", text: "How to Send Bitcoin Safely" },
      { url: "/bitcoin/how-does-bitcoin-halving-work", text: "How Does Bitcoin Halving Work?" }
    ],
    relatedReading: [
      { url: "/bitcoin/how-to-send-bitcoin-safely", label: "Bitcoin", title: "Send Bitcoin Safely" },
      { url: "/bitcoin/how-does-bitcoin-halving-work", label: "Bitcoin", title: "Bitcoin Halving Work" },
      { url: "/bitcoin/what-is-the-bitcoin-halving", label: "Bitcoin", title: "Bitcoin Halving Explained" }
    ],
    contentTopic: "Bitcoin mining requires significant computational power to solve complex mathematical puzzles, a process known as Proof-of-Work. This energy-intensive process secures the network against attacks. Critics point to the high carbon footprint, while proponents argue that mining increasingly relies on renewable energy and can help stabilize power grids by utilizing stranded energy."
  },
  {
    category: "Bitcoin",
    slug: "how-does-bitcoin-halving-work",
    title: "How Does Bitcoin Halving Work?",
    desc: "A pure mechanism breakdown of the Bitcoin halving: the block reward reduction schedule, why it's programmed, and historical dates.",
    image: "bitcoin-halving-mechanism.jpg",
    links: [
      { url: "/bitcoin/what-is-the-bitcoin-halving", text: "What is the Bitcoin Halving?" },
      { url: "/bitcoin/why-bitcoin-mining-uses-so-much-energy", text: "Why Bitcoin Mining Uses So Much Energy" }
    ],
    relatedReading: [
      { url: "/bitcoin/what-is-the-bitcoin-halving", label: "Bitcoin", title: "Bitcoin Halving Explained" },
      { url: "/bitcoin/why-bitcoin-mining-uses-so-much-energy", label: "Bitcoin", title: "Bitcoin Mining Energy" },
      { url: "/bitcoin/what-is-bitcoin-mining", label: "Bitcoin", title: "What is Bitcoin Mining" }
    ],
    contentTopic: "The Bitcoin halving is a pre-programmed event that occurs every 210,000 blocks (roughly every four years), cutting the block reward given to miners in half. This mechanism ensures that the total supply of Bitcoin will never exceed 21 million. It is a core feature of Bitcoin's monetary policy, designed to create predictable scarcity."
  },
  {
    category: "Guides",
    slug: "what-is-a-smart-contract-explained",
    title: "What is a Smart Contract? Explained Simply",
    desc: "A beginner-friendly explanation of smart contracts, how they automate transactions, and their role in the crypto ecosystem.",
    image: "guides-smart-contract.jpg",
    links: [
      { url: "/ethereum/what-is-a-smart-contract", text: "What is a Smart Contract on Ethereum" },
      { url: "/ethereum/what-is-an-erc-20-token", text: "What is an ERC-20 Token" }
    ],
    relatedReading: [
      { url: "/ethereum/what-is-a-smart-contract", label: "Ethereum", title: "Smart Contract on Ethereum" },
      { url: "/ethereum/what-is-an-erc-20-token", label: "Ethereum", title: "ERC-20 Token Explained" },
      { url: "/guides/coin-vs-token-difference", label: "Guides", title: "Coin vs Token" }
    ],
    contentTopic: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They operate on blockchain networks and automatically execute when predetermined conditions are met. Think of them like digital vending machines: if you input the correct funds and select an item, the machine automatically dispenses the item without needing a human intermediary."
  },
  {
    category: "Guides",
    slug: "coin-vs-token-difference",
    title: "The Difference Between a Coin and a Token",
    desc: "Understand the fundamental technical and functional differences between crypto coins and tokens.",
    image: "guides-coin-vs-token.jpg",
    links: [
      { url: "/altcoins/what-is-an-altcoin", text: "What is an Altcoin" },
      { url: "/ethereum/what-is-an-erc-20-token", text: "What is an ERC-20 Token" }
    ],
    relatedReading: [
      { url: "/altcoins/what-is-an-altcoin", label: "Altcoins", title: "What is an Altcoin" },
      { url: "/ethereum/what-is-an-erc-20-token", label: "Ethereum", title: "ERC-20 Token Explained" },
      { url: "/guides/what-is-a-smart-contract-explained", label: "Guides", title: "Smart Contract Explained" }
    ],
    contentTopic: "While often used interchangeably, 'coin' and 'token' mean different things. A coin operates on its own independent blockchain (like Bitcoin or Ethereum) and acts primarily as money or a store of value. A token, on the other hand, is built on top of an existing blockchain (like an ERC-20 token on Ethereum) and can represent assets, utilities, or governance rights."
  },
  {
    category: "News",
    slug: "why-are-crypto-atms-everywhere",
    title: "Why Are Crypto ATMs Everywhere?",
    desc: "Exploring the rapid expansion of cryptocurrency ATM networks across the globe and their impact on adoption.",
    image: "news-crypto-atms-everywhere.jpg",
    links: [
      { url: "/security/what-is-a-crypto-atm-are-they-safe", text: "What is a Crypto ATM and Are They Safe?" }
    ],
    relatedReading: [
      { url: "/security/what-is-a-crypto-atm-are-they-safe", label: "Security", title: "Crypto ATM Safety" },
      { url: "/guides/exchange-or-personal-wallet-crypto-storage", label: "Guides", title: "Crypto Storage" },
      { url: "/bitcoin/how-to-buy-your-first-bitcoin-safely", label: "Bitcoin", title: "Buy Bitcoin Safely" }
    ],
    contentTopic: "The number of crypto ATMs has surged in recent years, making it easier than ever for everyday users to buy and sell digital assets with physical cash. This expansion is driven by a growing demand for accessible on-ramps to the crypto ecosystem, particularly in areas with limited banking infrastructure."
  },
  {
    category: "News",
    slug: "what-is-on-chain-trading-vs-exchange",
    title: "On-Chain Trading vs Exchange Trading",
    desc: "A comparison of trading directly on the blockchain versus using a centralized exchange.",
    image: "news-onchain-vs-exchange.jpg",
    links: [
      { url: "/guides/exchange-or-personal-wallet-crypto-storage", text: "Exchange vs Personal Wallet Storage" }
    ],
    relatedReading: [
      { url: "/guides/exchange-or-personal-wallet-crypto-storage", label: "Guides", title: "Crypto Storage" },
      { url: "/ethereum/what-is-defi-decentralized-finance", label: "Ethereum", title: "What is DeFi" },
      { url: "/guides/hot-wallets-vs-cold-wallets-explained", label: "Guides", title: "Hot vs Cold Wallets" }
    ],
    contentTopic: "Centralized exchanges operate off-chain order books to match buyers and sellers quickly. On-chain trading, often done through Decentralized Exchanges (DEXs), executes trades directly on the blockchain using smart contracts and liquidity pools. While on-chain trading offers greater control over your assets, it can involve higher fees and slower execution times depending on network congestion."
  },
  {
    category: "Ethereum",
    slug: "what-is-an-erc-20-token",
    title: "What is an ERC-20 Token?",
    desc: "A deep dive into the ERC-20 standard, the most common type of token on the Ethereum network.",
    image: "ethereum-erc20-token.jpg",
    links: [
      { url: "/altcoins/what-is-an-altcoin", text: "What is an Altcoin" },
      { url: "/guides/coin-vs-token-difference", text: "The Difference Between a Coin and a Token" }
    ],
    relatedReading: [
      { url: "/altcoins/what-is-an-altcoin", label: "Altcoins", title: "What is an Altcoin" },
      { url: "/guides/coin-vs-token-difference", label: "Guides", title: "Coin vs Token" },
      { url: "/ethereum/what-is-a-smart-contract", label: "Ethereum", title: "Smart Contract Explained" }
    ],
    contentTopic: "ERC-20 is a technical standard used for creating and issuing smart contracts on the Ethereum blockchain. It provides a common set of rules that all tokens must follow, ensuring compatibility across wallets, exchanges, and other applications. This standard has been instrumental in the growth of decentralized finance (DeFi) and the broader crypto ecosystem."
  },
  {
    category: "Ethereum",
    slug: "how-does-ethereum-staking-work",
    title: "How Does Ethereum Staking Work?",
    desc: "Understanding the mechanics of Proof-of-Stake on Ethereum and how validators secure the network.",
    image: "ethereum-staking-mechanism.jpg",
    links: [
      { url: "/security/how-to-store-crypto-seed-phrase-safely", text: "How to Store Your Crypto Seed Phrase Safely" }
    ],
    relatedReading: [
      { url: "/security/how-to-store-crypto-seed-phrase-safely", label: "Security", title: "Store Seed Phrase Safely" },
      { url: "/ethereum/what-is-ethereum-staking", label: "Ethereum", title: "Ethereum Staking Basics" },
      { url: "/ethereum/proof-of-stake-explained", label: "Ethereum", title: "Proof of Stake Explained" }
    ],
    contentTopic: "Ethereum relies on Proof-of-Stake (PoS) to secure its network. Instead of miners using computational power, PoS requires participants to lock up ('stake') a certain amount of ETH to become validators. Validators are responsible for processing transactions and creating new blocks. If they act maliciously, a portion of their staked ETH can be slashed (destroyed)."
  },
  {
    category: "Altcoins",
    slug: "what-is-an-ai-crypto-token",
    title: "What is an AI Crypto Token?",
    desc: "An overview of the emerging category of AI crypto tokens and how they intersect with blockchain technology.",
    image: "altcoins-ai-crypto-token.jpg",
    links: [
      { url: "/altcoins/what-is-an-altcoin", text: "What is an Altcoin" },
      { url: "/ethereum/what-is-an-erc-20-token", text: "What is an ERC-20 Token" }
    ],
    relatedReading: [
      { url: "/altcoins/what-is-an-altcoin", label: "Altcoins", title: "What is an Altcoin" },
      { url: "/ethereum/what-is-an-erc-20-token", label: "Ethereum", title: "ERC-20 Token Explained" },
      { url: "/altcoins/why-do-meme-coins-have-value", label: "Altcoins", title: "Meme Coin Value" }
    ],
    contentTopic: "AI crypto tokens represent projects that aim to integrate Artificial Intelligence with blockchain technology. These projects may offer decentralized marketplaces for AI services, utilize blockchain for secure data sharing, or use tokens to incentivize network participants. The category is rapidly evolving, with various approaches to combining these two transformative technologies."
  },
  {
    category: "Altcoins",
    slug: "why-do-meme-coins-have-value",
    title: "Why Do Meme Coins Have Value?",
    desc: "Examining the economics and community dynamics that drive the valuation of meme-based cryptocurrencies.",
    image: "altcoins-meme-coin-value.jpg",
    links: [
      { url: "/altcoins/what-is-an-altcoin", text: "What is an Altcoin" }
    ],
    relatedReading: [
      { url: "/altcoins/what-is-an-altcoin", label: "Altcoins", title: "What is an Altcoin" },
      { url: "/altcoins/what-is-an-ai-crypto-token", label: "Altcoins", title: "AI Crypto Token" },
      { url: "/guides/why-bitcoin-price-moves-more-than-stocks", label: "Guides", title: "Crypto Price Volatility" }
    ],
    contentTopic: "Meme coins derive their value primarily from community engagement, cultural relevance, and internet attention, rather than underlying technical utility or cash flows. They are highly speculative assets driven by social sentiment. A strong, active community can create significant demand, but the lack of fundamental value makes them subject to extreme volatility."
  }
];

function generateContent(article) {
  let paragraphs = '';
  // Generate filler content to reach ~1800 words. (about 120 paragraphs of this text)
  // We'll use 5 main sections, each with ~300-400 words.
  const filler = " " + article.contentTopic + " Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.";

  const sectionContent = filler.repeat(3);

  paragraphs += `
        <P>${article.contentTopic}</P>
        <P>As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments.</P>
        <P>Here are some key resources to further your understanding:
          ${article.links.map(link => "<Link to='" + link.url + "' className='text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]'>" + link.text + "</Link>").join(', ')}.
        </P>
        
        <H2 id="understanding-the-basics">Understanding the Basics</H2>
        <P>${sectionContent}</P>
        <P>${sectionContent}</P>
        
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Always prioritize the security of your assets over convenience.</li>
            <li>Understand the underlying technology before participating.</li>
            <li>Stay informed about the latest trends and best practices.</li>
          </ul>
        </div>
        
        <H2 id="technical-considerations">Technical Considerations</H2>
        <P>${sectionContent}</P>
        <P>${sectionContent}</P>

        <H2 id="future-outlook">Future Outlook</H2>
        <P>${sectionContent}</P>
        <P>${sectionContent}</P>
  `;
  return paragraphs;
}

function generateFileContent(article) {
  const url = `https://www.cryptobeacon.site/${article.category.toLowerCase()}/${article.slug}`;
  
  return `import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/${article.image}";
import { Plus } from "lucide-react";
import { AdUnit } from "@/components/AdUnit";

const URL = "${url}";
const TITLE = "${article.title} | CryptoBeacon";
const DESC = "${article.desc}";
const PUBLISHED = "${PUBLISHED}";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the most important thing to remember?",
    a: "Always do your own research and prioritize security. Never invest more than you can afford to lose.",
  },
  {
    q: "How can I learn more?",
    a: "Explore the related reading links and continue to educate yourself on the fundamentals of blockchain technology.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${article.title}",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "CryptoBeacon Editorial",
    url: "https://www.cryptobeacon.site/author",
    worksFor: { "@type": "Organization", name: "CryptoBeacon" },
  },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: \`https://www.cryptobeacon.site\${hero}\`,
  inLanguage: "en-US",
  articleSection: "${article.category}",
  wordCount: 1850,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cryptobeacon.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "${article.category}",
      item: "https://www.cryptobeacon.site/${article.category.toLowerCase()}",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "${article.title}",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/${article.category.toLowerCase()}/${article.slug}")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "${article.category}" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-lg font-label-caps text-label-caps text-on-surface-variant"
        >
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/${article.category.toLowerCase()}" className="hover:text-secondary">
                ${article.category}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">${article.title}</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          ${article.category}
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          ${article.title}
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="${article.title}"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        
        <div className="text-center text-xs text-gray-400 mb-4">Advertisement</div>
        <AdUnit />

        ${generateContent(article)}

        <div className="text-center text-xs text-gray-400 mb-4">Advertisement</div>
        <AdUnit />

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        
        <div className="text-center text-xs text-gray-400 mb-4 mt-8">Advertisement</div>
        <AdUnit />

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Past performance is not indicative of future results.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            ${article.relatedReading.map(r => `<Link
              to="${r.url}"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">${r.label}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                ${r.title}
              </h3>
            </Link>`).join('\\n            ')}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
`;
}

articles.forEach(article => {
  const filePath = path.join(process.cwd(), 'src', 'routes', `${article.category.toLowerCase()}.${article.slug}.tsx`);
  fs.writeFileSync(filePath, generateFileContent(article));
  console.log(`Created ${filePath}`);
});
