import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-defi-explainer.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/what-is-defi-decentralized-finance";
const TITLE = "What Is DeFi? Decentralized Finance Explained for Beginners | CryptoBeacon";
const DESC =
  "A plain-language introduction to decentralized finance (DeFi) — what it is, how lending protocols and DEXes work, and the real risks beginners should understand before participating.";
const PUBLISHED = "2026-08-29";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is DeFi safe for beginners?",
    a: "DeFi carries significant risks including smart contract bugs, liquidation risk, impermanent loss, and scams. Beginners should start with small amounts they can afford to lose completely, research each protocol carefully, and understand that DeFi is largely unregulated with no consumer protection.",
  },
  {
    q: "Do I need KYC (identity verification) to use DeFi?",
    a: "No. That is one of the defining properties of DeFi — you interact with smart contracts directly using only a wallet. No account registration, no identity documents, no counterparty who holds your funds.",
  },
  {
    q: "What is Total Value Locked (TVL)?",
    a: "TVL is the total market value of assets deposited into a DeFi protocol. It is a common metric for measuring the adoption and scale of a protocol. A high TVL suggests more users trust the protocol with their funds, but it does not guarantee safety.",
  },
  {
    q: "Can I lose all my money in DeFi?",
    a: "Yes. Smart contract exploits, market crashes causing liquidations, rug pulls (where developers abandon projects and drain funds), and oracle manipulation attacks have collectively caused billions of dollars in losses. Only deposit funds you can afford to lose entirely.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is DeFi? Decentralized Finance Explained for Beginners",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Ashir",
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
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "what is defi, decentralized finance explained, defi lending, decentralized exchange, DEX, liquidity pool, yield farming, aave, uniswap",
  articleSection: "Ethereum",
  wordCount: 1500,
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
      name: "Ethereum",
      item: "https://www.cryptobeacon.site/ethereum",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Is DeFi?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/ethereum/what-is-defi-decentralized-finance")({
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
      { property: "article:section", content: "Ethereum" },
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
              <Link to="/ethereum" className="hover:text-secondary">
                Ethereum
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is DeFi?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is DeFi? Decentralized Finance Explained for Beginners
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 29, 2026</time>}
          readTime="7 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Glowing Ethereum logo at the center of an interconnected DeFi protocol ecosystem"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          Decentralized finance — commonly called <strong>DeFi</strong> — refers to financial
          services built on public blockchains using smart contracts. It's one of the most
          transformative and controversial applications of Ethereum, and understanding its basic
          mechanics is essential for anyone navigating the crypto ecosystem today.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-defi">What Makes Finance "Decentralized"?</H2>
        <P>
          In traditional finance, a bank accepts your deposits, lends them to borrowers, and keeps
          track of who owns what. You trust the bank — and the regulations governing it — to handle
          your money correctly. The bank is the intermediary.
        </P>
        <P>
          DeFi replaces the bank with <strong>smart contracts</strong>: programs deployed on a
          blockchain that execute automatically when predefined conditions are met. When you deposit
          into a DeFi lending protocol, you're not trusting a company — you're trusting the code.
          The protocol operates 24/7, globally, with no account minimums, no identity verification,
          and no central entity that can freeze your funds.
        </P>
        <P>
          This is both its defining strength and its defining risk. Code can be buggy, audits can
          miss vulnerabilities, and there is no FDIC insurance or consumer protection on losses.
        </P>

        <H2 id="lending-borrowing">Lending and Borrowing Protocols</H2>
        <P>
          Lending is one of DeFi's most established use cases. Protocols like{" "}
          <strong>Aave</strong> and <strong>Compound</strong> allow users to deposit crypto
          assets into liquidity pools and earn variable interest rates paid by borrowers.
        </P>
        <P>
          DeFi loans are <strong>overcollateralized</strong>: you must deposit more value than you
          borrow. For example, to borrow $500 worth of USDC, you might need to deposit $1,000 worth
          of ETH as collateral. If the value of your collateral drops below a set threshold
          (e.g., the ETH price falls sharply), the protocol automatically liquidates it to repay
          lenders. This eliminates counterparty default risk — at the cost of requiring significant
          capital to borrow.
        </P>

        <H2 id="dex">Decentralized Exchanges (DEXes)</H2>
        <P>
          A decentralized exchange allows users to swap one crypto token for another directly from
          their wallet, without a centralized order book or a company holding custody.
        </P>
        <P>
          Most DEXes use an <strong>Automated Market Maker (AMM)</strong> model instead of a
          traditional order book. In an AMM, liquidity providers deposit pairs of tokens (e.g., ETH
          and USDC) into a pool. The pool uses a mathematical formula to set the exchange rate
          automatically. When you swap ETH for USDC on a DEX like <strong>Uniswap</strong>, you're
          trading against the pool — not another person.
        </P>
        <P>
          Liquidity providers earn a share of the trading fees generated by the pool, but they also
          face a risk called <strong>impermanent loss</strong>: when the price of the pooled assets
          diverges significantly, LPs can end up with less value than if they had simply held the
          assets.
        </P>

        <H2 id="risks">The Real Risks of DeFi</H2>
        <P>
          DeFi is high-risk. The risks are not hypothetical — they have caused billions of dollars
          in documented losses:
        </P>
        <div className="border-l-4 border-[#627EEA] bg-[#627EEA]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Smart contract exploits:</strong> Bugs in the code can be exploited by
              attackers to drain all funds in a protocol. Even audited protocols have been hacked.
            </li>
            <li>
              <strong>Rug pulls:</strong> Malicious developers can launch a protocol, attract
              deposits, and then disappear with user funds. This is especially common with
              anonymous teams in newer projects.
            </li>
            <li>
              <strong>Liquidation risk:</strong> If your collateral's value drops faster than you can
              react, your position can be automatically liquidated.
            </li>
            <li>
              <strong>Oracle manipulation:</strong> DeFi protocols rely on external price feeds
              called oracles. Attackers can manipulate these feeds to trigger incorrect liquidations
              or drain protocols.
            </li>
          </ul>
        </div>

        <H2 id="getting-started">Getting Started With DeFi</H2>
        <P>
          To interact with DeFi, you need a self-custody wallet (MetaMask is the most widely
          supported), some ETH for gas fees, and the specific tokens you want to use. You
          connect your wallet directly to the protocol's website — no account creation required.
        </P>
        <P>
          The safest starting point is a reputable, battle-tested protocol with a long security
          track record, a publicly available audit, and transparent on-chain activity. Start with
          amounts you can afford to lose entirely while you learn how each protocol works.
        </P>

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

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://ethereum.org/en/defi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Decentralized Finance (DeFi)
            </a>
          </li>
          <li>
            <a
              href="https://aave.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Aave — Protocol Documentation
            </a>
          </li>
          <li>
            <a
              href="https://uniswap.org/whitepaper-v3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Uniswap v3 — Core Whitepaper
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/ethereum/what-is-a-smart-contract"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Smart Contract?
              </h3>
            </Link>
            <Link
              to="/security/defi-risks-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                DeFi Risks Explained
              </h3>
            </Link>
            <Link
              to="/security/how-to-revoke-smart-contract-approvals"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Revoke Smart Contract Approvals
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
