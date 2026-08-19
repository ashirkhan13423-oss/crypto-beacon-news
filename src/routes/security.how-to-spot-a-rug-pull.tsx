import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/spot-rug-pull.jpg";

const URL = "https://www.cryptobeacon.site/security/how-to-spot-a-rug-pull";
const TITLE = "How to Spot a Crypto Rug Pull: Red Flags to Watch For | CryptoBeacon";
const DESC =
  "Learn how to identify malicious cryptocurrency projects before they steal your funds. A guide to spotting liquidity drainers, hidden mint functions, and deceptive marketing.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly is a 'rug pull'?",
    a: "A rug pull is a type of scam where developers launch a new crypto token, pump up the price with marketing, and then abruptly abandon the project — taking all the investors' funds with them.",
  },
  {
    q: "If liquidity is locked, is the project safe?",
    a: "Not necessarily. While locked liquidity prevents the developers from draining the trading pool, they could still execute a 'soft rug' by dumping their massive allocation of developer tokens on the market.",
  },
  {
    q: "Can I recover funds lost in a rug pull?",
    a: "Unfortunately, almost never. Once the funds are drained from the smart contract, they are moved to anonymous wallets and are practically impossible to retrieve.",
  },
  {
    q: "Are meme coins more likely to rug pull?",
    a: "Yes. Because meme coins rely entirely on hype rather than utility, they are the most common vehicle for rug pulls. Anyone can create a token for a few dollars and start marketing it.",
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
    name: "Sarah Jenkins",
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
    "how to spot a rug pull, crypto scams, locked liquidity, honeypot crypto, soft rug pull",
  articleSection: "Security",
  wordCount: 1250,
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
      name: "How to Spot a Rug Pull",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/security/how-to-spot-a-rug-pull")({
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
            <li className="text-primary">Spotting a Rug Pull</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#EA4335] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Spot a Crypto Rug Pull
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="6 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Glowing neon rug being pulled from underneath digital coins"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          In the unregulated corners of decentralized finance (DeFi), creating a new cryptocurrency
          takes less than five minutes and costs only a few dollars in network fees. This low barrier
          to entry has fueled innovation, but it has also created a golden age for scammers.
        </P>
        <P>
          The "rug pull" is the most common scam in crypto. It occurs when developers launch a token,
          lure in investors with heavy marketing to pump up the price, and then abruptly drain the
          liquidity pool — vanishing into the night and leaving investors holding worthless tokens.
          Fortunately, if you know where to look, a rug pull is highly predictable.
        </P>
        <P>
          I've watched several friends fall victim to these scams because they rushed to buy a token promoted by an influencer without checking if the liquidity was locked. By the time they realized they couldn't sell, the developers had already vanished with the Ethereum in the pool.
        </P>

        {/* Layout D: Horizontal Jump Links */}
        <nav className="my-xl flex flex-wrap gap-sm font-body-md text-body-md">
          {[
            { id: "liquidity", label: "Unlocked Liquidity" },
            { id: "concentration", label: "Wallet Concentration" },
            { id: "honeypots", label: "The Honeypot" },
            { id: "marketing", label: "Deceptive Marketing" },
            { id: "faq", label: "FAQ" },
          ].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-md py-xs rounded-full border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <H2 id="liquidity">1. Red Flag: Unlocked Liquidity</H2>
        <P>
          For a new token to be traded on a decentralized exchange (like Uniswap), the developers
          must supply an initial "liquidity pool" — usually a mix of their new token and a valuable
          asset like ETH. 
        </P>
        <P>
          If the developers retain control of this liquidity pool, they can withdraw the ETH at any
          moment, destroying the ability for anyone else to sell. Legitimate projects use third-party
          smart contracts to time-lock their liquidity for months or years. If a new project has
          unlocked liquidity, a rug pull is almost guaranteed.
        </P>

        <H2 id="concentration">2. Red Flag: High Wallet Concentration</H2>
        <P>
          Using a block explorer, you can see exactly which wallets hold the most tokens. If a single
          wallet (or a handful of wallets) holds 30%, 50%, or 80% of the total supply, you are in
          danger of a "soft rug."
        </P>
        <P>
          Even if liquidity is locked, developers with massive token allocations can simply dump their
          bags on the open market, crashing the price to near-zero while they walk away with the
          profits. Be wary of projects where the top 10 holders control a disproportionate amount of
          the supply.
        </P>

        <AdUnit />

        <H2 id="honeypots">3. The Sneakiest Scam: The Honeypot</H2>
        <P>
          A honeypot looks like a skyrocketing token because the price only goes up. But it only goes
          up because the smart contract code contains a hidden line that disables selling for anyone
          except the developer.
        </P>
        <P>
          You buy in, see the value of your portfolio double, and try to sell — only to get an error
          message. The only way to detect a honeypot before buying is to read the smart contract code
          or use automated analysis tools (like Token Sniffer) that scan for malicious code snippets.
        </P>

        <H2 id="marketing">4. Red Flag: Deceptive Marketing & Anonymity</H2>
        <P>
          Scam tokens rely on artificial hype. Look out for projects that rely heavily on paid
          influencers, use massive bot armies to spam Twitter or Telegram, and promise unrealistic,
          "guaranteed" returns.
        </P>
        <P>
          Furthermore, while anonymous founders are common in crypto, an anonymous team launching a
          token with unlocked liquidity and flashy marketing is a massive red flag. If they steal the
          money, there are no reputations to ruin and no doors for law enforcement to knock on.
        </P>

        {/* Layout D: Card-based FAQ */}
        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">
                {f.q}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          The lure of finding the next 100x gem causes many investors to ignore obvious red flags. By
          checking for locked liquidity, analyzing wallet distribution, and avoiding projects driven
          purely by paid hype, you can sidestep the vast majority of rug pulls that plague the
          crypto ecosystem.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. Investing in micro-cap altcoins and new DeFi projects carries
            a near-certainty of losing your funds.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
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
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Avoid Crypto Phishing Scams
              </h3>
            </Link>
            <Link
              to="/guides/how-to-read-a-block-explorer"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Read a Block Explorer
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
