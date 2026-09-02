import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/what-is-stablecoin.jpg";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-stablecoin";
const TITLE = "What is a Stablecoin? The Bridge Between Crypto and Fiat | CryptoBeacon";
const DESC =
  "An in-depth explanation of stablecoins like USDC and Tether (USDT), how they maintain their peg to the US dollar, and why they are the backbone of crypto trading.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do stablecoins ever lose their peg?",
    a: "Yes. While rare for top fiat-backed stablecoins, algorithmic stablecoins like Terra's UST have famously collapsed. Even fiat-backed coins like USDC briefly 'de-pegged' during the 2023 banking crisis, though they recovered.",
  },
  {
    q: "Can I earn interest on stablecoins?",
    a: "Yes, many DeFi protocols and centralized exchanges offer yield on stablecoins. However, this yield comes with counterparty risk (if the platform fails) or smart contract risk (if the protocol is hacked).",
  },
  {
    q: "What is the difference between USDT and USDC?",
    a: "Both aim to track the US dollar. USDT (Tether) is the oldest and most traded, but faces recurring criticism over its transparency. USDC (Circle) is generally considered more transparent and regulatory-compliant.",
  },
  {
    q: "Why use a stablecoin instead of just keeping cash in the bank?",
    a: "Stablecoins live on the blockchain, meaning they can be transferred globally 24/7 in seconds, and can interact directly with decentralized finance (DeFi) applications. Traditional bank cash cannot.",
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
    "what is a stablecoin, usdt vs usdc, how do stablecoins work, algorithmic stablecoins, fiat backed crypto",
  articleSection: "Guides",
  wordCount: 1350,
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
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What is a Stablecoin?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/what-is-a-stablecoin")({
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
      { property: "article:section", content: "Guides" },
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
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What is a Stablecoin?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is a Stablecoin?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Glowing gold coin perfectly balanced on a scale with a US dollar sign"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Cryptocurrencies like Bitcoin and Ethereum are famous for their extreme price volatility.
          They can jump 10% in a day or crash just as quickly. While this volatility is attractive to
          speculators, it makes using cryptocurrency for everyday payments, or as a reliable store of
          short-term value, incredibly difficult.
        </P>
        <P>
          Enter the stablecoin. A stablecoin is a cryptocurrency designed to have a stable price,
          typically pegged 1-to-1 with a fiat currency like the US Dollar. It aims to offer the best
          of both worlds: the borderless, fast, and programmable nature of crypto, combined with the
          boring, predictable value of the dollar.
        </P>
        <P>
          When I first started trading, I used to cash out to my bank account every time the market looked shaky, paying hefty wire fees each time. Once I learned I could just swap my crypto into USDC and hold it on-chain, my trading strategy completely changed.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        {/* Layout C: Quote/Warning Banner */}
        <div className="my-xl p-xl rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm text-center">
          <p className="font-display-lg text-display-lg md:text-[2.5rem] text-primary font-bold leading-tight mb-md">
            "A dollar on the blockchain."
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Stablecoins act as the vital bridge between traditional finance and the crypto ecosystem, allowing traders to lock in profits without withdrawing to a bank.
          </p>
        </div>

        <H2 id="how-they-work">1. How Do They Stay Stable?</H2>
        <P>
          Pegging a digital token to a real-world asset requires a mechanism to maintain that peg.
          Broadly speaking, there are three main ways this is achieved:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Fiat-Collateralized:</strong> This is the simplest and most common method. For
            every 1 stablecoin issued on the blockchain, the issuing company holds $1 in a real
            bank account (or equivalent safe assets like short-term US Treasuries). Examples include USDC and
            Tether (USDT). If you want to redeem 100 USDC, the issuer destroys the tokens and wires
            you $100. This model relies on centralized trust in the issuing entity.
          </li>
          <li>
            <strong>Crypto-Collateralized:</strong> These stablecoins are backed by other cryptocurrencies. 
            Because the collateral (like Ethereum) is volatile, these stablecoins are heavily over-collateralized. 
            For example, to mint $100 worth of DAI, you might need to deposit $150 worth of Ethereum. If the 
            price of Ethereum drops too far, the smart contract automatically liquidates the collateral to 
            maintain the peg.
          </li>
          <li>
            <strong>Algorithmic (Non-Collateralized):</strong> These do not rely on traditional
            bank accounts or over-collateralization. Instead, they use complex smart contracts to automatically 
            expand and contract the token supply to maintain the peg, often involving a secondary sister-token. 
            These are highly experimental and carry significant risk of collapse, as seen with Terra's UST.
          </li>
        </ul>

        <H2 id="why-they-matter">2. Why Are They So Important?</H2>
        <P>
          Before stablecoins, if a crypto trader wanted to secure their profits during a market crash,
          they had to sell their Bitcoin for USD and withdraw it to a bank account — a slow, expensive
          process that often took days.
        </P>
        <P>
          Stablecoins solved this by allowing traders to stay within the crypto ecosystem. You can
          swap your volatile Bitcoin for stable USDC in seconds, park it in a digital wallet, and
          wait for the market to calm down. Furthermore, decentralized finance (DeFi) runs almost
          entirely on stablecoins, using them for lending, borrowing, and yield generation.
        </P>

        <AdUnit />

        <H2 id="risks">3. The Risks of Stablecoins</H2>
        <P>
          Calling something "stable" in crypto does not make it risk-free. Fiat-backed stablecoins
          carry <strong>centralization risk</strong>. Because real dollars sit in a real bank, the
          company issuing the stablecoin can be pressured by governments to freeze specific wallet
          addresses. Additionally, if the bank holding the collateral fails, the stablecoin could lose
          its peg.
        </P>
        <P>
          Algorithmic stablecoins carry <strong>death spiral risk</strong>. If the complex economic
          incentives holding the peg together break down during a panic, the token can drop to zero
          in a matter of hours.
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
          Stablecoins are the grease that keeps the crypto economy running. They provide a safe haven
          from volatility without forcing users to interact with slow traditional banking systems.
          However, users must understand that holding a stablecoin means trusting the entity or
          algorithm backing it — they are a powerful tool, but not an absolute guarantee.
        </P>

        <H2 id="sources">Sources & Further Reading</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.federalreserve.gov/publications/stablecoin-report.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              U.S. Federal Reserve — Report on Stablecoins
            </a>
          </li>
          <li>
            <a
              href="https://www.investopedia.com/terms/s/stablecoin.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Investopedia — What is a Stablecoin?
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. "Stable" does not mean risk-free. Always research the backing
            mechanisms of any stablecoin before holding significant amounts.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/ethereum/ethereum-layer-2-scaling-rollups-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Layer 2 Scaling Explained
              </h3>
            </Link>
            <Link
              to="/guides/hardware-wallet-comparison-guide"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Hardware Wallet Comparison
              </h3>
            </Link>
            <Link
              to="/guides/what-it-means-when-exchange-pauses-withdrawals"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                When Exchanges Pause Withdrawals
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

