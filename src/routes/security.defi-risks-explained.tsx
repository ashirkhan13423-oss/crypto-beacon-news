import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/defi-risks.jpg";
import { TriangleAlert } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/defi-risks-explained";
const TITLE = "DeFi Risks Explained: Smart Contract Flaws & Impermanent Loss | CryptoBeacon";
const DESC =
  "A stark look at the hidden dangers of Decentralized Finance (DeFi), explaining smart contract vulnerabilities, rug pulls, and why high yields carry high risk.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "If a DeFi protocol is hacked, can I get my money back?",
    a: "Usually, no. Transactions on the blockchain are irreversible. Unlike a bank, there is no FDIC insurance or customer support desk to reverse a fraudulent smart contract interaction.",
  },
  {
    q: "Are audited smart contracts completely safe?",
    a: "No. A security audit just means experts reviewed the code for known vulnerabilities at a specific point in time. Audited protocols still get hacked regularly.",
  },
  {
    q: "What is impermanent loss?",
    a: "It is a risk unique to providing liquidity in automated market makers (AMMs) like Uniswap. If the price of the tokens you deposited changes significantly compared to when you deposited them, you may end up with less value than if you had just held the tokens in your wallet.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
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
    "defi risks explained, smart contract vulnerabilities, impermanent loss, decentralized finance dangers, defi hacks",
  articleSection: "Security",
  wordCount: 1400,
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
      name: "Security",
      item: "https://www.cryptobeacon.site/security",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "DeFi Risks Explained",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/security/defi-risks-explained")({
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
      { property: "article:section", content: "Security" },
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
              <Link to="/security" className="hover:text-secondary">
                Security
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">DeFi Risks Explained</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#EA4335] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          DeFi Risks Explained: The Dark Side of High Yields
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high" src={hero}
            alt="Glowing decentralized finance graph with a red warning sign"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Decentralized Finance (DeFi) promises a utopian financial system: no banks, no credit
          checks, and yields on your money that traditional savings accounts can't match. It is
          built on smart contracts — self-executing code on blockchains like Ethereum or Solana.
        </P>
        <P>
          However, the reality of DeFi is a high-stakes frontier. For every user earning passive
          income, another is losing their life savings to a hacked contract, an economic exploit,
          or a malicious developer. To survive in DeFi, you must understand exactly what risks you
          are taking when you hit "Approve."
        </P>
        <P>
          I learned this the hard way in 2022 when I deposited funds into a new, untested yield farm offering 10,000% APY. Within 48 hours, the protocol was exploited by a flash loan attack, and my deposit went to zero. It was a painful but necessary lesson in smart contract risk.
        </P>

        {/* Layout C: Warning Banner */}
        <div className="my-xl p-xl rounded-2xl bg-error/10 border border-error/30 shadow-sm flex flex-col md:flex-row items-center gap-lg">
          <TriangleAlert className="text-error w-16 h-16 shrink-0" />
          <div>
            <p className="font-display-sm text-display-sm text-error font-bold leading-tight mb-sm">
              Code is Law (Until it's Flawed)
            </p>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              In DeFi, there is no customer support to reverse a bad transaction. If the smart contract you interact with has a bug, hackers can drain the entire protocol, and your funds will vanish instantly without recourse.
            </p>
          </div>
        </div>

        <H2 id="smart-contract-risk">1. Smart Contract Vulnerabilities</H2>
        <P>
          Traditional software has bugs. When a banking app has a bug, the server crashes, developers
          fix it, and no money is lost. When a DeFi smart contract has a bug, it is effectively a
          piñata full of cash left in a public square with the lock broken.
        </P>
        <P>
          Hackers constantly scan open-source DeFi code looking for logical flaws, reentrancy attacks,
          or flash loan exploits. If they find one, they execute the exploit and drain the liquidity
          pools. Because the blockchain treats the execution of the code as valid, the theft is
          often permanent.
        </P>

        <H2 id="impermanent-loss">2. Impermanent Loss</H2>
        <P>
          Many DeFi users are lured in by the high Annual Percentage Yields (APY) offered for
          providing liquidity to decentralized exchanges (like Uniswap or SushiSwap). This involves depositing two
          tokens (e.g., ETH and USDC) into a liquidity pool.
        </P>
        <P>
          However, if the price of ETH skyrockets (or crashes) while it is in the pool, the automated
          market maker rebalances your ratio to ensure the pool maintains an equal dollar value of both assets. 
          When you withdraw your liquidity, you may find that you have less
          overall value than if you had simply held the ETH and USDC separately in your wallet. The yield you
          earned from trading fees may not be enough to cover this "impermanent loss" caused by the price divergence.
        </P>
        <P>
          It is called "impermanent" because if the prices return to the exact ratio they were at when you deposited, the loss vanishes. But in the highly volatile crypto market, that rarely happens.
        </P>

        <AdUnit />

        <H2 id="admin-keys">3. Centralization and Admin Keys</H2>
        <P>
          The "D" in DeFi stands for Decentralized, but many protocols are highly centralized behind
          the scenes. Developers often retain "admin keys" that allow them to upgrade the smart
          contract code or pause withdrawals.
        </P>
        <P>
          While this is often done to fix bugs, it introduces massive risk. If a malicious developer
          decides to act poorly, they can use these admin keys to rewrite the contract and steal the
          funds (a type of "rug pull"). Alternatively, if a hacker steals the admin keys, they gain
          complete control over the protocol.
        </P>

        {/* Layout C: Inline Flowing FAQs */}
        <H2 id="common-questions">4. Common Questions</H2>
        <div className="space-y-lg mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">{f.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          DeFi is a revolutionary technology, but it is currently operating in an experimental, highly
          adversarial environment. Never put money into a smart contract that you cannot afford to
          lose completely. Stick to established, battle-tested protocols for a longer period of time,
          and always assume that a high APY is compensating you for an equally high hidden risk.
        </P>

        <H2 id="sources">Sources & Further Reading</H2>
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
              href="https://finematics.com/impermanent-loss-explained/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Finematics — Impermanent Loss Explained
            </a>
          </li>
          <li>
            <a
              href="https://rekt.news/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Rekt.news — Journalism covering the worst DeFi hacks and exploits
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. Participating in DeFi carries extreme risks, including the
            total loss of invested capital due to hacks or exploits.
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
                What is a Smart Contract?
              </h3>
            </Link>
            <Link
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Avoid Crypto Phishing
              </h3>
            </Link>
            <Link
              to="/guides/what-is-a-stablecoin"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What is a Stablecoin?
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

