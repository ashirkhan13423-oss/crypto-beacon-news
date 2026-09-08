import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/news-liquid-network-hack.jpg";

const URL = "https://www.cryptobeacon.site/news/liquid-network-hack-4000-btc-withdrawal";
const TITLE = "Liquid Network Halts After 4,000 BTC Withdrawal: What Happened? | CryptoBeacon";
const DESC =
  "Liquid Network reported that approximately 4,000 BTC, worth about $320 million, was withdrawn from its federation wallet. Here is what happened, what is confirmed, and what it reveals about Bitcoin sidechain security.";
const PUBLISHED = "2026-09-08";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Liquid Network Halts After $320 Million Bitcoin Withdrawal: What the Incident Reveals About Sidechain Risk",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "CryptoBeacon",
    url: "https://www.cryptobeacon.site",
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
    "Liquid Network hack, Liquid Network 4000 BTC, $320 million Bitcoin withdrawal, LBTC withdrawals suspended, Bitcoin sidechain security, federation wallet exploit, wrapped Bitcoin risk, peg-out authorization",
  articleSection: "News",
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
      name: "News",
      item: "https://www.cryptobeacon.site/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Liquid Network 4,000 BTC Withdrawal",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/news/liquid-network-hack-4000-btc-withdrawal")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: `https://www.cryptobeacon.site${hero}` },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "News" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `https://www.cryptobeacon.site${hero}` },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
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
              <Link to="/news" className="hover:text-secondary">
                News
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Liquid Network 4,000 BTC Withdrawal</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Liquid Network Halts After $320 Million Bitcoin Withdrawal: What the Incident Reveals About Sidechain Risk
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>September 8, 2026</time>} readTime="6 min read" />

        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Live Development: September 8, 2026.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This article covers an active incident. Information regarding recovered funds is based on market reporting and awaits verified onchain or primary confirmation.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Futuristic digital safe or federation vault with glowing chains representing a blockchain network, showing a partial breach"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          On September 6, 2026, the Liquid Network—a major Bitcoin sidechain and settlement network—experienced a critical security incident. Approximately 4,000 BTC (valued at roughly $320 million at the time) were unexpectedly withdrawn from its federation wallet.
        </P>
        <P>
          Following the withdrawal, Liquid paused new transactions and bridge activities, effectively halting the network, while major cryptocurrency exchanges suspended deposits and withdrawals for Liquid Bitcoin (LBTC). 
        </P>
        <P>
          This event has sent ripples through the ecosystem, not just because of the massive sum involved, but because it highlights a fundamental distinction that every crypto user must understand: <strong>Bitcoin-backed sidechains are exposed to a completely different set of risks than Bitcoin's base layer itself.</strong>
        </P>

        <AdUnit />

        <H2 id="what-happened">What Actually Happened?</H2>
        <P>
          The core incident involves the Liquid Network's federation wallet. Liquid is a federated sidechain, meaning that instead of relying on decentralized miners like Bitcoin, it relies on a consortium of functionaries (exchanges, trading desks, and infrastructure providers) to manage the gateway between the main Bitcoin network and the Liquid sidechain.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li><strong>The Withdrawal:</strong> Roughly 4,000 BTC were drained from the federation's reserves. This figure reportedly represented almost all of the available reserves backing LBTC at the time of the event.</li>
          <li><strong>Network Halt:</strong> In response, Liquid took immediate action to pause all new sidechain transactions and bridge activity (the mechanism used to peg-in and peg-out Bitcoin).</li>
          <li><strong>Exchange Action:</strong> Reacting swiftly, exchanges interacting with Liquid restricted LBTC operations to prevent further complications.</li>
        </ul>
        <P>
          Crucially, Liquid operators have stated that the cryptographic key used for the withdrawal was <em>not</em> compromised. The precise technical path of the exploit remains an active area of investigation.
        </P>

        <H2 id="unverified-reports">Developing: Unverified Reports of Returned Funds</H2>
        <P>
          As the situation develops, market coverage has circulated claims that the actors behind the incident may be "white-hat" hackers. Reports suggest that approximately 85% of the drained amount (about 3,400 BTC) has been returned, with the actors retaining roughly 600 BTC.
        </P>
        <div className="border-l-4 border-[#B3261E] bg-[#B3261E]/5 p-lg rounded-r-lg mb-md">
          <p className="font-body-md text-body-md text-on-surface font-semibold">
            Important Note on Claims:
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            While these updates are promising, they lack robust primary confirmation from Liquid or definitive onchain tracing. Until verified, users should treat the partial return of funds as a reported claim rather than an established fact. Onchain messages do not automatically constitute proof of identity or intent.
          </p>
        </div>

        <H2 id="base-layer-vs-sidechain">Why Sidechain Risk Is Not Bitcoin Risk</H2>
        <P>
          The most critical takeaway from this incident is understanding the difference between native Bitcoin and wrapped or sidechain assets like LBTC.
        </P>
        <P>
          Bitcoin’s base layer is secured by proof-of-work mining and thousands of decentralized nodes. There is <strong>no verified evidence that Bitcoin’s base layer was compromised</strong>. This is not a "Bitcoin hack."
        </P>
        <P>
          However, when you lock BTC to mint LBTC on a sidechain, you are introducing new vectors of trust. Users of Liquid and similar systems are dependent on:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li><strong>Federation controls:</strong> Trusting the consortium members to secure the multi-signature wallets holding the underlying BTC.</li>
          <li><strong>Peg-out authorization:</strong> The technical mechanics governing how BTC is released back to users when they burn their LBTC.</li>
          <li><strong>Bridge operations:</strong> The software bridging the two networks, which is historically a prime target for exploits across the entire crypto industry.</li>
          <li><strong>Incident response:</strong> The capability of centralized or federated entities to pause the network when an anomaly is detected.</li>
        </ul>
        <P>
          "Bitcoin-backed" means the asset aims to track Bitcoin's value 1:1, but it does not mean it shares Bitcoin's base-layer security profile. For anyone evaluating wrapped-BTC systems, this event is a stark reminder of the trade-offs between liquidity, speed, and security.
        </P>

        <AdUnit />

        <H2 id="market-impact">Market Impact and Next Steps</H2>
        <P>
          The direct impact of the $320 million withdrawal is largely contained within the Liquid ecosystem, where LBTC liquidity and redemption confidence have been severely impaired in the short term.
        </P>
        <P>
          However, the ripple effects will likely cause exchanges and custodians to tighten monitoring of all wrapped Bitcoin assets. Other bridge-based Bitcoin products may face increased scrutiny and potentially higher risk premiums. The broader market will be watching closely to see if the federation model faces architectural changes following post-mortem investigations.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.reuters.com/technology/bitcoin-based-liquid-network-says-320-million-withdrawn-hack-2026-09-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Reuters — Bitcoin-based Liquid Network says $320 million withdrawn in hack
            </a>
          </li>
          <li>
            <a
              href="https://technode.global/2026/09/07/liquid-network-pauses-320m-bitcoin-withdrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              TechNode — Liquid Network pauses after $320m Bitcoin withdrawal
            </a>
          </li>
          <li>
            <a
              href="https://www.tradingview.com/news/coinpedia%3Adb1462d3b094b%3A0-liquid-network-hack-update-85-of-btc-returned-but-serious-depegging-risks-loom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              TradingView / Coinpedia — Unverified market reports on partial funds return
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is a factual report on an active security incident. It is for informational purposes only. Do not treat unverified claims of recovered funds as confirmed until official statements are provided by Liquid Network operators.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/news/bitcoin-rally-august-2026"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin Rallies Toward $77,000 (Aug 2026)
              </h3>
            </Link>
            <Link
              to="/bitcoin/why-do-bond-yields-affect-bitcoin-price"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Do Bond Yields Affect Bitcoin Price?
              </h3>
            </Link>
            <Link
              to="/guides/why-bitcoin-price-moves-more-than-stocks"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Bitcoin's Price Moves More Than Stocks
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
