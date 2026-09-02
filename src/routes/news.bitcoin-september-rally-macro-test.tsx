import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/news-btc-september-macro-test.jpg";

const URL =
  "https://www.cryptobeacon.site/news/bitcoin-september-rally-macro-test";
const TITLE =
  "Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed | CryptoBeacon";
const DESC =
  "Brent crude near $96, the U.S. 10-year yield approaching 4.8%, and a 68% chance of a September Fed rate hike are pressuring Bitcoin toward $77K–$78K. Here is the full transmission chain and why Friday's jobs report could be the next catalyst.";
const PUBLISHED = "2026-09-02";

const faqs = [
  {
    q: "Why does rising oil prices affect Bitcoin?",
    a: "Higher oil prices feed directly into broader inflation expectations. When markets anticipate faster inflation, they also price in a more aggressive Federal Reserve — higher interest rates, tighter monetary policy, and a stronger U.S. dollar. All three of these developments increase the opportunity cost of holding non-yielding risk assets like Bitcoin.",
  },
  {
    q: "What is the transmission chain from oil to crypto?",
    a: "The chain runs: higher oil → higher inflation risk → higher rate-hike expectations → higher Treasury yields → stronger dollar → tougher conditions for risk assets like crypto. Each link amplifies the one before it. The war or geopolitical event itself is not the direct driver — the macro repricing is.",
  },
  {
    q: "Why does the U.S. 10-year Treasury yield matter for Bitcoin?",
    a: "The 10-year Treasury yield is a benchmark for the risk-free rate of return. When it rises, investors can earn more from safe government bonds, which makes speculative, non-yielding assets like Bitcoin comparatively less attractive. Institutional allocators in particular weigh this opportunity cost heavily when building portfolios.",
  },
  {
    q: "How could Friday's U.S. jobs report affect Bitcoin?",
    a: "A strong jobs report would reinforce the case for the Federal Reserve to raise rates, which would likely push yields and the dollar higher — negative for Bitcoin in the short term. A weaker-than-expected report could reduce rate-hike expectations and ease pressure on risk assets, potentially giving Bitcoin and crypto markets some breathing room.",
  },
  {
    q: "Has Bitcoin crashed because of these macro pressures?",
    a: "As of September 2, 2026, Bitcoin has not crashed but has slipped toward the $77K–$78K area. Notably, it has retained much of its August rally gains, showing resilience despite the deteriorating macro backdrop. The key question is whether BTC can hold these levels as yields and rate expectations continue to rise.",
  },
  {
    q: "What does a 68% rate-hike probability mean?",
    a: "Federal funds futures markets allow traders to place bets on the likelihood of a Fed rate change. When these markets price a 68% probability of a September rate hike — up from roughly 37% a week earlier — it means the broad market consensus has shifted meaningfully toward expecting tighter monetary policy. This repricing itself moves yields, the dollar, and risk-asset valuations before the Fed even acts.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed",
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
    "Bitcoin September 2026, Bitcoin macro test, oil prices Bitcoin, Treasury yields Bitcoin, Fed rate hike crypto, Bitcoin price September 2026, Brent crude Bitcoin, US Iran tensions crypto, Bitcoin risk assets, CryptoBeacon",
  articleSection: "News",
  wordCount: 2200,
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
      name: "News",
      item: "https://www.cryptobeacon.site/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bitcoin's September Macro Test",
      item: URL,
    },
  ],
};

export const Route = createFileRoute(
  "/news/bitcoin-september-rally-macro-test"
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      {
        property: "og:image",
        content: "https://www.cryptobeacon.site/og-image.png",
      },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "News" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      {
        name: "twitter:image",
        content: "https://www.cryptobeacon.site/og-image.png",
      },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema),
      },
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

function H3({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 font-headline-sm text-headline-sm text-primary mt-lg mb-sm"
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
      {children}
    </p>
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
            <li className="text-primary text-ellipsis overflow-hidden whitespace-nowrap">
              Bitcoin's September Macro Test
            </li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the
          Fed
        </h1>

        <Author
          publishedDate={
            <time dateTime={PUBLISHED}>September 2, 2026</time>
          }
          readTime="9 min read"
        />

        {/* PROMINENT DATED BANNER */}
        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Last updated: September 2, 2026.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This is a dated market snapshot reflecting conditions around
            September 1–2, 2026. Prices, yields, and rate expectations cited
            below are point-in-time data and will age quickly. This article does
            not predict future price movement.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Illustration showing Bitcoin squeezed between rising oil prices on the left and climbing Treasury yields on the right, with the Federal Reserve building in the background and a Bitcoin price chart showing resilience around $77K"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
          <figcaption className="text-center font-body-sm text-body-sm text-on-surface-variant py-sm px-md">
            Rising oil, climbing yields, and hawkish Fed expectations converge
            on Bitcoin's August gains — September 2, 2026.
          </figcaption>
        </figure>

        <P>
          Bitcoin's impressive August rally is running into a new and
          multi-layered macro headwind. Brent crude has climbed to around $95–$96
          per barrel. The U.S. 10-year Treasury yield has moved toward 4.8%. And
          market pricing for a September Federal Reserve rate hike has jumped to
          roughly 68%, up from about 37% just one week earlier. Bitcoin has
          slipped toward the $77K–$78K area as these forces converge.
        </P>
        <P>
          But the headline-grabbing geopolitical tension — renewed U.S.-Iran
          friction — is not the whole story. What matters for Bitcoin and crypto
          markets is the <strong>transmission chain</strong> that connects a
          Middle East oil-supply shock to the assets in your portfolio. This
          article maps that chain, explains why Friday's U.S. jobs report could
          be the next major catalyst, and assesses whether Bitcoin's recent
          resilience is a sign of structural strength or a temporary pause before
          further downside.
        </P>

        <AdUnit />

        {/* ─── SECTION 1: THE TRANSMISSION CHAIN ─── */}
        <H2 id="transmission-chain">
          The Macro Transmission Chain: From Oil Barrels to Your Bitcoin
          Portfolio
        </H2>
        <P>
          Geopolitical events rarely affect Bitcoin directly. Instead, they
          trigger a cascading sequence of macro repricing. Here is the chain
          CryptoBeacon is tracking in early September 2026:
        </P>

        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-lg">
          <div className="space-y-sm font-body-lg text-body-lg text-on-surface">
            <div className="flex items-center gap-sm">
              <span className="text-2xl">🛢️</span>
              <span>
                <strong>Higher oil prices</strong> — Brent crude at $95–$96/bbl
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-center gap-sm">
              <span className="text-2xl">🔥</span>
              <span>
                <strong>Higher inflation risk</strong> — energy costs feed
                through to CPI
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-center gap-sm">
              <span className="text-2xl">🏦</span>
              <span>
                <strong>Higher rate-hike expectations</strong> — September hike
                probability at ~68%
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-center gap-sm">
              <span className="text-2xl">📈</span>
              <span>
                <strong>Higher Treasury yields</strong> — 10-year approaching
                4.8%
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-center gap-sm">
              <span className="text-2xl">💵</span>
              <span>
                <strong>Stronger U.S. dollar</strong> — DXY rises on
                yield-differential advantage
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-center gap-sm">
              <span className="text-2xl">⚠️</span>
              <span>
                <strong>Tougher conditions for risk assets</strong> — including
                Bitcoin and crypto
              </span>
            </div>
          </div>
        </div>

        <P>
          Each link in this chain amplifies the one before it. The war or
          geopolitical event itself is not the direct driver of Bitcoin's
          price — the <strong>macro repricing</strong> is. Understanding this
          distinction is critical for anyone trying to assess whether the current
          pullback is a structural threat or a temporary headwind.
        </P>

        {/* ─── SECTION 2: OIL ─── */}
        <H2 id="oil-prices">
          Oil Prices and Inflation: Why Brent Crude at $96 Matters
        </H2>
        <P>
          Renewed tensions between the United States and Iran have pushed Brent
          crude to its highest levels in months, trading around $95–$96 per
          barrel. Oil is the most politically sensitive commodity in the world,
          and its price feeds directly into transportation costs, manufacturing
          inputs, and consumer energy bills.
        </P>
        <P>
          When oil prices rise sharply, they generate what economists call a{" "}
          <strong>supply-side inflation shock</strong>. Unlike demand-driven
          inflation (which the Fed can cool by raising rates), supply-side shocks
          present a dilemma: raising rates to combat inflation risks slowing an
          economy that is already absorbing higher energy costs. This tension is
          precisely what makes the current environment challenging for risk
          assets.
        </P>
        <P>
          For Bitcoin specifically, the oil-inflation link matters because it
          resets market expectations about how long the Federal Reserve will
          maintain a restrictive monetary-policy stance — or whether it will
          tighten further.
        </P>

        <AdUnit />

        {/* ─── SECTION 3: YIELDS & THE FED ─── */}
        <H2 id="yields-and-fed">
          Treasury Yields and the Fed: The Opportunity-Cost Squeeze
        </H2>
        <P>
          The U.S. 10-year Treasury yield has moved toward 4.8%, a level that
          represents a meaningful{" "}
          <Link
            to="/bitcoin/why-do-bond-yields-affect-bitcoin-price"
            className="text-secondary hover:underline"
          >
            opportunity cost for non-yielding assets like Bitcoin
          </Link>
          . When investors can earn nearly 5% annually from the safest asset in
          the world — a U.S. government bond — the bar for allocating capital to
          speculative, volatile, non-yielding assets rises significantly.
        </P>

        <H3 id="rate-hike-repricing">
          The Rate-Hike Repricing
        </H3>
        <P>
          Perhaps more consequential than the current yield level is the{" "}
          <strong>speed of the repricing</strong> in rate-hike expectations.
          Federal funds futures now imply a roughly 68% probability that the
          Federal Reserve will raise rates at its September meeting — up from
          about 37% just one week earlier. That kind of rapid shift forces
          simultaneous repricing across:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>Bond markets</strong> — yields rise as traders sell existing
            bonds to reflect higher expected rates.
          </li>
          <li>
            <strong>Currency markets</strong> — the U.S. dollar strengthens as
            higher yields attract foreign capital flows.
          </li>
          <li>
            <strong>Equity markets</strong> — growth stocks and risk assets face
            higher discount rates on future cash flows.
          </li>
          <li>
            <strong>Crypto markets</strong> — Bitcoin competes with a rising
            risk-free rate while also facing a stronger dollar, which
            historically correlates with weaker BTC performance.
          </li>
        </ul>

        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            September 2, 2026 — Key Macro Data Points
          </p>
          <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface mt-xs">
            <li>
              <strong>Brent crude:</strong> ~$95–$96 per barrel
            </li>
            <li>
              <strong>U.S. 10-year Treasury yield:</strong> Approaching 4.8%
            </li>
            <li>
              <strong>September Fed rate-hike probability:</strong> ~68% (up
              from ~37% a week earlier)
            </li>
            <li>
              <strong>Bitcoin:</strong> Trading in the $77K–$78K area
            </li>
            <li>
              <strong>Catalyst:</strong> Renewed U.S.-Iran tensions, oil-supply
              risk, energy-driven inflation expectations
            </li>
          </ul>
        </div>

        {/* ─── SECTION 4: BITCOIN RESILIENCE ─── */}
        <H2 id="bitcoin-resilience">
          Bitcoin's Resilience: Holding the August Rally
        </H2>
        <P>
          Despite this deteriorating macro backdrop, Bitcoin has shown notable
          resilience. After{" "}
          <Link
            to="/news/bitcoin-rally-august-2026"
            className="text-secondary hover:underline"
          >
            rallying sharply in August from the low-$60,000s to above $76,000
          </Link>
          , BTC has held much of those gains, trading in the $77K–$78K range
          rather than giving back the entire move.
        </P>
        <P>
          This resilience is analytically significant. In previous cycles, sharp
          macro-driven repricing events — particularly those involving
          oil-supply shocks and rate-hike fears — have triggered more severe
          Bitcoin selloffs. The fact that BTC is consolidating near recent highs
          rather than collapsing suggests that the current buyer base may be
          structurally different from previous cycles, potentially reflecting
          deeper institutional ownership via{" "}
          <Link
            to="/bitcoin/how-do-bitcoin-etfs-affect-price"
            className="text-secondary hover:underline"
          >
            spot Bitcoin ETFs
          </Link>
          .
        </P>
        <P>
          That said, resilience during the early phase of a macro headwind is
          not the same as immunity. The true test comes if yields continue to
          rise and rate-hike expectations solidify further — which is precisely
          why Friday's jobs report is so important.
        </P>

        <AdUnit />

        {/* ─── SECTION 5: JOBS REPORT ─── */}
        <H2 id="jobs-report-catalyst">
          Why Friday's U.S. Jobs Report Could Be the Next Major Catalyst
        </H2>
        <P>
          The monthly U.S. non-farm payrolls report, due Friday, is now the
          single most important near-term data point for Bitcoin and risk assets
          more broadly. Here is why:
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-lg">
          <div className="border border-[#EF4444]/30 bg-[#EF4444]/5 p-lg rounded-lg">
            <p className="font-headline-sm text-headline-sm text-[#EF4444] font-bold mb-sm">
              🔴 Strong Jobs Report Scenario
            </p>
            <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
              <li>Reinforces the case for a September rate hike</li>
              <li>Pushes 10-year yield closer to or above 5%</li>
              <li>Strengthens the U.S. dollar further</li>
              <li>
                Creates additional headwinds for Bitcoin and risk assets
              </li>
              <li>
                Could trigger a deeper retracement toward the $72K–$74K area
              </li>
            </ul>
          </div>
          <div className="border border-[#0F9D58]/30 bg-[#0F9D58]/5 p-lg rounded-lg">
            <p className="font-headline-sm text-headline-sm text-[#0F9D58] font-bold mb-sm">
              🟢 Weak Jobs Report Scenario
            </p>
            <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
              <li>Reduces September rate-hike probability</li>
              <li>Eases pressure on Treasury yields</li>
              <li>Weakens the U.S. dollar</li>
              <li>
                Gives risk assets — including Bitcoin — breathing room
              </li>
              <li>
                Could support a move back toward the $80K+ area
              </li>
            </ul>
          </div>
        </div>

        <P>
          This binary setup means that Friday's data release is likely to
          produce an outsized market reaction in either direction. Traders and
          investors should be prepared for elevated volatility around the
          release, typically at 8:30 AM ET.
        </P>

        {/* ─── SECTION 6: THE RIGHT QUESTION ─── */}
        <H2 id="the-right-question">
          The Right Question Isn't "Will Bitcoin Crash?"
        </H2>
        <P>
          Much of the commentary circulating on social media focuses on a
          binary framing: will Bitcoin crash or not? That framing misses the
          nuance. The more useful question is:
        </P>
        <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/5 p-lg rounded-r-lg mb-lg">
          <p className="font-headline-md text-headline-md text-primary font-bold italic">
            "Can Bitcoin hold its recent gains while yields and rate
            expectations keep rising?"
          </p>
        </div>
        <P>
          This reframing matters because it shifts the analysis from
          event-driven panic to structural assessment. Bitcoin's ability to
          consolidate in the $77K–$78K range while absorbing a 31-percentage-point swing in rate-hike expectations (from 37% to 68%) is
          itself data. It tells us something about the composition and
          conviction of the current holder base.
        </P>
        <P>
          If Bitcoin can hold the $75K–$77K support zone through the jobs
          report and into mid-September, it would suggest that the structural
          demand from ETF inflows and institutional allocation is absorbing
          macro-driven selling pressure. If it breaks below that zone
          convincingly, it would suggest that the August rally was
          over-extended and vulnerable to a broader macro reset.
        </P>

        {/* ─── SECTION 7: WHAT TO WATCH ─── */}
        <H2 id="what-to-watch">
          What CryptoBeacon Is Watching
        </H2>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>Friday's U.S. non-farm payrolls report</strong> — the most
            immediate catalyst for rate-hike expectations and risk-asset
            positioning.
          </li>
          <li>
            <strong>Brent crude price trajectory</strong> — whether oil
            sustains above $95 or pulls back will directly influence
            inflation expectations and Fed calculus.
          </li>
          <li>
            <strong>U.S. 10-year Treasury yield</strong> — a breach above
            4.8% toward 5% would signal an even more hostile environment for
            non-yielding assets.
          </li>
          <li>
            <strong>Bitcoin ETF flow data</strong> — whether institutional
            buyers are defending positions through inflows or stepping back
            with outflows will indicate conviction levels.
          </li>
          <li>
            <strong>The $75K–$77K support zone</strong> — a clean break below
            this area would shift the technical picture from "healthy
            consolidation" to "breakdown risk."
          </li>
          <li>
            <strong>U.S.-Iran developments</strong> — further escalation could
            push oil higher and accelerate the transmission chain described
            above.
          </li>
        </ul>

        {/* ─── KEY TAKEAWAYS ─── */}
        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>
              Bitcoin's September pullback toward $77K–$78K is driven by a
              macro transmission chain: oil → inflation → rate-hike
              expectations → yields → stronger dollar → risk-asset
              pressure.
            </li>
            <li>
              Brent crude near $96, the 10-year yield approaching 4.8%, and a
              68% September rate-hike probability represent a
              meaningfully deteriorated macro environment compared to August.
            </li>
            <li>
              Bitcoin has shown resilience by holding much of its August rally
              gains, but the true test arrives with Friday's U.S. jobs
              report.
            </li>
            <li>
              A strong jobs report could reinforce tighter policy and push
              Bitcoin lower; a weak report could ease pressure and provide
              breathing room.
            </li>
            <li>
              The right question is not whether Bitcoin will crash but whether
              it can hold the $75K–$77K support zone while macro headwinds
              persist.
            </li>
          </ul>
        </div>

        {/* ─── FAQ SECTION ─── */}
        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="space-y-md mb-xxl">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-outline-variant rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-lg cursor-pointer list-none font-headline-sm text-headline-sm text-primary hover:bg-surface-container-low transition-colors">
                <span>{faq.q}</span>
                <span className="ml-md text-secondary group-open:rotate-180 transition-transform duration-200 flex-shrink-0">
                  ▾
                </span>
              </summary>
              <div className="px-lg pb-lg pt-sm border-t border-outline-variant bg-surface-container-low">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* ─── SOURCES ─── */}
        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.coindesk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CoinDesk — Bitcoin Market Coverage, September 2026
            </a>
          </li>
          <li>
            <a
              href="https://cointelegraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CoinTelegraph — Macro and Crypto Market Analysis, September 2026
            </a>
          </li>
          <li>
            <a
              href="https://www.reuters.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Reuters — Brent Crude Oil Prices and Middle East Tensions
            </a>
          </li>
          <li>
            <a
              href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CME FedWatch Tool — Federal Reserve Rate-Hike Probabilities
            </a>
          </li>
          <li>
            <a
              href="https://fred.stlouisfed.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              FRED (Federal Reserve Economic Data) — U.S. 10-Year Treasury
              Yield
            </a>
          </li>
          <li>
            <a
              href="https://farside.co.uk/bitcoin-etf-flow-all-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Farside Investors — Bitcoin ETF Flow Tracker
            </a>
          </li>
        </ul>

        {/* ─── DISCLAIMER ─── */}
        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is a factual, dated report on market conditions
            published on September 2, 2026. It is for informational purposes
            only and does not constitute financial or investment advice. Prices,
            yields, and rate-hike probabilities are point-in-time data drawn
            from third-party sources and may have changed by the time you read
            this. Past price behaviour does not guarantee future performance.
            Do not make investment decisions based solely on this article.
          </p>
        </div>

        {/* ─── RELATED READING ─── */}
        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">
            Related Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/why-do-bond-yields-affect-bitcoin-price"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">
                Bitcoin
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Do Falling Bond Yields Affect Bitcoin's Price?
              </h3>
            </Link>
            <Link
              to="/news/bitcoin-rally-august-2026"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">
                News
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin Rallies Toward $77,000 (Aug 2026)
              </h3>
            </Link>
            <Link
              to="/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">
                News
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin ETF Outflows and Hawkish Fed Speech
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
