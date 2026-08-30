import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/news-bitcoin-etf-fed-stress-test.jpg";

const URL =
  "https://www.cryptobeacon.site/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally";
const TITLE =
  "Bitcoin ETF Outflows and Hawkish Fed Speech: Is the Crypto Rally Losing Momentum? | CryptoBeacon";
const DESC =
  "Bitcoin ETF outflows ended a nine-session inflow streak after Kevin Warsh's hawkish Jackson Hole speech. Here is what the Fed, ETF flows and Ethereum's divergence reveal about the rally's foundations.";
const PUBLISHED = "2026-08-30";

const faqs = [
  {
    q: "What did Kevin Warsh say at Jackson Hole that affected Bitcoin?",
    a: "Federal Reserve Chair Kevin Warsh used his August 30, 2026 Jackson Hole speech to emphasise persistent inflation risks and the Fed's firm commitment to its 2% inflation target. Markets interpreted this hawkish tone as a signal that interest-rate cuts are less likely in the near term, reducing expectations for the kind of easy monetary conditions that tend to support risk assets like Bitcoin.",
  },
  {
    q: "Why do Bitcoin ETF outflows matter for the Bitcoin price?",
    a: "U.S. spot Bitcoin ETFs hold physical Bitcoin purchased directly on the open market. When authorised participants redeem ETF shares (outflows), the ETF must sell the underlying Bitcoin, removing spot demand. Sustained outflows therefore reduce a key source of buy pressure. Conversely, inflows require new Bitcoin purchases, adding to spot demand and historically correlating with price appreciation.",
  },
  {
    q: "Does one day of ETF outflows signal a market top?",
    a: "Not necessarily. A single session of outflows after nine consecutive inflow days is notable but is not sufficient evidence of a durable trend change. Short-term profit-taking, options expiry volatility and macro sentiment shifts can all produce brief outflow sessions without altering the longer-term institutional positioning picture. The critical test is whether outflows persist over multiple sessions.",
  },
  {
    q: "Why did Ethereum ETFs see inflows while Bitcoin ETFs saw outflows?",
    a: "The divergence suggests that at least some institutional capital was rotating within the crypto sector rather than exiting it entirely. Ethereum's current narratives — including staking yields and layer-2 ecosystem growth — may appeal to investors seeking different risk-return profiles. However, the single-session data is insufficient to confirm a sustained rotation; it is a signal worth monitoring, not a concluded trend.",
  },
  {
    q: "What is the opportunity cost argument against Bitcoin in a hawkish rate environment?",
    a: "Bitcoin is a non-yielding asset — it pays no interest or dividends. When the Federal Reserve signals higher-for-longer interest rates, the yield available on safe government bonds rises. This increases the opportunity cost of holding Bitcoin (you give up more guaranteed return to hold it), which makes non-yielding assets comparatively less attractive to institutional allocators benchmarked against risk-free rates.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Bitcoin ETF Outflows and Hawkish Fed Speech: Is the Crypto Rally Losing Momentum?",
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
    "Bitcoin ETF outflows, Bitcoin price August 30 2026, Federal Reserve Jackson Hole Bitcoin, Kevin Warsh crypto speech, Ethereum ETF inflows, Bitcoin institutional demand, crypto market risk-off, Bitcoin rally correction, Bitcoin versus Ethereum ETFs, institutional crypto rotation",
  articleSection: "News",
  wordCount: 1450,
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
      name: "Bitcoin ETF Outflows and Fed Speech",
      item: URL,
    },
  ],
};

export const Route = createFileRoute(
  "/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally"
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
              Bitcoin ETF Outflows &amp; Fed Speech
            </li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Bitcoin's Rally Meets Its First Institutional Stress Test: What the
          Fed, ETF Flows and Ethereum's Divergence Reveal
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 30, 2026</time>}
          readTime="7 min read"
        />

        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Last updated: August 30, 2026.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This is a dated market snapshot reflecting events on or around
            August 30, 2026. Figures and ETF data cited below are drawn from
            reports available at publication time and will age quickly. This
            article does not predict future price movement.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Illustration showing the Federal Reserve seal with downward red arrows on the left, a Bitcoin chart with a dip in the centre, and Ethereum with upward green arrows on the right, representing ETF flow divergence on August 30 2026"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
          <figcaption className="text-center font-body-sm text-body-sm text-on-surface-variant py-sm px-md">
            Fed hawkishness met Bitcoin ETF outflows while Ethereum funds
            continued to attract institutional capital — August 30, 2026.
          </figcaption>
        </figure>

        <P>
          For nine consecutive trading sessions, U.S. spot Bitcoin ETFs reported
          net inflows — a sustained run that coincided with Bitcoin climbing from
          the low-$60,000s to the high-$70,000s in a matter of days. Then, on
          August 30, 2026, two things happened almost simultaneously: Federal
          Reserve Chair Kevin Warsh delivered a hawkish speech at Jackson Hole,
          and the ETF inflow streak ended with approximately{" "}
          <strong>$201.9 million in net outflows</strong> from Bitcoin funds.
          Bitcoin fell roughly 3% during the session, trading around the
          high-$70,000s by the close.
        </P>
        <P>
          This article does not call a market top. What it does is explain what
          these three data points — a central bank signal, a shift in ETF flows
          and a divergence between Bitcoin and Ethereum — mean for how investors
          should read the underlying structure of the rally.
        </P>

        <AdUnit />

        <H2 id="what-warsh-said">
          What Kevin Warsh Said at Jackson Hole — and Why It Moved Markets
        </H2>
        <P>
          Jackson Hole is the Federal Reserve's annual economic symposium in
          Wyoming, and it carries outsized market significance because Fed chairs
          have historically used the platform to preview major policy shifts.
          Kevin Warsh's August 30, 2026 speech was not a surprise in its
          direction — it emphasised persistent inflation risks and reaffirmed the
          Fed's commitment to its <strong>2% inflation objective</strong>.
        </P>
        <P>
          The market impact, however, was immediate. The speech reduced
          expectations for near-term interest-rate cuts. For risk assets, this
          matters because lower rates reduce the{" "}
          <Link
            to="/bitcoin/why-do-bond-yields-affect-bitcoin-price"
            className="text-secondary hover:underline"
          >
            opportunity cost of holding non-yielding assets like Bitcoin
          </Link>
          . When rates are expected to stay higher for longer, the guaranteed
          return available on safe government bonds makes the case for allocating
          capital to Bitcoin comparatively weaker.
        </P>

        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            August 30, 2026 — Key Data Points
          </p>
          <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface mt-xs">
            <li>
              <strong>Bitcoin price move:</strong> Approximately minus 3% during
              the session, trading around the high-$70,000s.
            </li>
            <li>
              <strong>Bitcoin ETF flows:</strong> Approximately minus $201.9
              million net outflow, ending a nine-session inflow streak.
            </li>
            <li>
              <strong>Ethereum ETF flows:</strong> Approximately plus $102.1
              million net inflow, extending a multi-session positive streak.
            </li>
            <li>
              <strong>Macro catalyst:</strong> Kevin Warsh's hawkish Jackson
              Hole address on inflation and monetary-policy credibility.
            </li>
          </ul>
        </div>

        <H2 id="etf-outflows-explained">
          Why Bitcoin ETF Outflows Are a Meaningful Signal — but Not a Verdict
        </H2>
        <P>
          Understanding why ETF outflows move markets requires a brief look at
          how{" "}
          <Link
            to="/bitcoin/how-do-bitcoin-etfs-affect-price"
            className="text-secondary hover:underline"
          >
            spot Bitcoin ETFs mechanically affect the spot price
          </Link>
          . When an investor buys a share in a spot Bitcoin ETF, an authorised
          participant creates new ETF shares by purchasing physical Bitcoin. When
          they redeem shares (an outflow), the underlying Bitcoin must be sold.
          That means ETF outflows translate directly into spot sell pressure.
        </P>
        <P>
          After nine sessions of continuous inflows — reportedly totalling more
          than <strong>$3 billion</strong> according to Bitcoin Magazine, citing
          Farside data — the reversal carries weight. That multi-session inflow
          run was itself cited as a key driver of Bitcoin's rally. Ending it
          removes a predictable and visible source of buying demand.
        </P>
        <P>
          That said, a single-session outflow after nine positive days is not
          equivalent to a confirmed trend reversal. Short-term profit-taking
          after a sharp rally, combined with macro uncertainty from a central
          bank speech, is a plausible and non-extraordinary explanation. The
          question that matters for the weeks ahead is whether institutional
          buyers return in subsequent sessions or whether the outflow persists.
        </P>

        <H2 id="ethereum-divergence">
          The Ethereum Divergence: Rotation or Coincidence?
        </H2>
        <P>
          The most analytically interesting data point from August 30 is not the
          Bitcoin ETF outflow in isolation — it is the{" "}
          <strong>
            simultaneous Ethereum ETF inflow of approximately $102.1 million
          </strong>
          . On the same day that Bitcoin funds bled capital, Ethereum funds
          attracted it.
        </P>
        <P>
          There are at least three explanations for this divergence, and they
          have very different implications:
        </P>

        <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface mb-lg">
          <li>
            <strong>Institutional rotation within crypto.</strong> Some large
            allocators may be shifting exposure from Bitcoin to Ethereum, perhaps
            because Ethereum's staking yield and layer-2 ecosystem provide a
            return profile that is less negatively affected by higher-for-longer
            rates. If this is the case, the total crypto market is not losing
            institutional interest — it is reorganising it.
          </li>
          <li>
            <strong>Independent buying on different narratives.</strong>{" "}
            Ethereum's inflows may be driven by ETH-specific factors — upcoming
            protocol developments, staking yield comparisons, exchange listings
            — that are unrelated to the Bitcoin/Fed dynamic. The two data points
            would then be coincidental rather than causal.
          </li>
          <li>
            <strong>Profit-taking from Bitcoin, parking in ETH.</strong> A
            subset of investors may have reduced Bitcoin exposure after a sharp
            rally (locking in gains) while deploying the proceeds into Ethereum,
            treating the pair as a relative-value trade rather than an exit from
            crypto.
          </li>
        </ol>

        <P>
          A single session of divergence is insufficient to confirm any of these
          explanations. It is, however, sufficient to make this a story worth
          watching: if ETH inflows continue while BTC outflows persist over
          multiple sessions, the rotation thesis gains traction.
        </P>

        <AdUnit />

        <H2 id="macro-pressure-on-btc">
          How a Hawkish Fed Creates Pressure on Bitcoin — and Why It Is Not the
          Whole Story
        </H2>
        <P>
          The standard macro argument against Bitcoin in a hawkish rate
          environment runs as follows. Because Bitcoin is a{" "}
          <strong>non-yielding asset</strong>, it must compete for capital
          against yield-bearing alternatives like government bonds and
          money-market funds. When the Federal Reserve signals that rates will
          remain elevated, the risk-free yield on safe assets rises. That
          increases the opportunity cost of holding Bitcoin — you give up more
          guaranteed return to hold it.
        </P>
        <P>
          This relationship is real, but it is not deterministic. Bitcoin has
          previously rallied during periods of high interest rates when other
          drivers — institutional adoption, regulatory clarity, halving-cycle
          dynamics, or ETF flow momentum — were sufficiently strong to outweigh
          the macro headwind. The bond-yield relationship matters more as a
          marginal influence than as a binary switch.
        </P>

        <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/5 p-lg rounded-r-lg mb-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            What Would Confirm a Deeper Correction vs. a Temporary Setback?
          </p>
          <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface mt-xs">
            <li>
              <strong>Deeper correction signal:</strong> Multiple consecutive
              sessions of Bitcoin ETF net outflows exceeding $150 million,
              sustained over a week or more without recovery.
            </li>
            <li>
              <strong>Temporary setback signal:</strong> Outflows reverse within
              two to three sessions as macro sentiment stabilises, with Bitcoin
              price holding above its rally's mid-point support.
            </li>
            <li>
              <strong>Rotation confirmed:</strong> Ethereum ETF inflows persist
              for five or more sessions while Bitcoin funds remain flat or
              negative.
            </li>
            <li>
              <strong>Risk-off event:</strong> Broad equity market decline
              alongside crypto selling, with no ETH divergence — suggesting
              macro exits rather than internal rotation.
            </li>
          </ul>
        </div>

        <H2 id="options-expiry">
          The $6.4 Billion Options Expiry: Context, Not Cause
        </H2>
        <P>
          Reports noted that a large Bitcoin options expiry — cited at
          approximately <strong>$6.4 billion in notional value</strong> — was
          scheduled around this period. Options expiries can amplify short-term
          price volatility because dealers hedging their positions buy or sell
          the underlying asset as the expiry approaches, a phenomenon known as
          delta hedging.
        </P>
        <P>
          However, attributing the session's move solely to the options expiry
          would be an oversimplification. The Fed speech provided the directional
          catalyst; the options market may have amplified the move. These are
          complementary explanations rather than competing ones. Readers should
          resist any narrative that singles out the options expiry as the primary
          cause.
        </P>

        <H2 id="what-this-means-for-readers">
          What This Means for CryptoBeacon Readers
        </H2>
        <P>
          The most useful framing for this event is as a{" "}
          <strong>stress test</strong> for the recent rally, not as a verdict on
          it. Bitcoin climbed sharply over a multi-week period supported by a
          visible and measurable driver: sustained ETF inflows from institutional
          allocators. That driver has now paused. The question is whether it
          resumes.
        </P>

        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>ETF flow data is now a leading indicator worth tracking
            daily.</strong> The nine-session inflow streak was not a coincidence
            — it corresponded with a specific period of rising institutional
            demand. Monitoring whether it resumes is more informative than
            watching the price alone.
          </li>
          <li>
            <strong>Fed communication will continue to matter.</strong> Jackson
            Hole speeches are infrequent, but Federal Open Market Committee
            minutes and Fed Chair press conferences provide regular opportunities
            for market-moving signals. The relationship between
            monetary-policy expectations and Bitcoin demand is active, not
            historical.
          </li>
          <li>
            <strong>
              The Bitcoin-Ethereum divergence is a separate story worth
              following.
            </strong>{" "}
            If Ethereum ETF inflows persist while Bitcoin funds stagnate, it
            would represent a meaningful shift in how institutions are allocating
            within the digital-asset space — with implications for relative
            price performance and portfolio construction.
          </li>
        </ul>

        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>
              Kevin Warsh's hawkish Jackson Hole speech on August 30, 2026
              reduced expectations for near-term Fed rate cuts, triggering a
              risk-off move in Bitcoin and broader markets.
            </li>
            <li>
              U.S. spot Bitcoin ETFs recorded approximately $201.9 million in
              net outflows, ending nine consecutive sessions of inflows that had
              contributed to Bitcoin's rally.
            </li>
            <li>
              U.S. spot Ethereum ETFs recorded approximately $102.1 million in
              net inflows on the same day — a divergence that raises the
              possibility of institutional rotation rather than a full crypto
              market exit.
            </li>
            <li>
              A single session of outflows is not evidence of a trend reversal;
              the key signal to watch is whether flows recover or deteriorate
              over the next five to ten sessions.
            </li>
            <li>
              The $6.4 billion options expiry may have amplified session
              volatility but is unlikely to be the primary driver of the
              directional move.
            </li>
          </ul>
        </div>

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
                  ?
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

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.axios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Axios — Coverage of Kevin Warsh's Jackson Hole Address, August
              2026
            </a>
          </li>
          <li>
            <a
              href="https://cryptorank.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CryptoRank — Bitcoin Market Response to Jackson Hole Speech,
              August 30, 2026
            </a>
          </li>
          <li>
            <a
              href="https://crypto.news"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Crypto.news — Bitcoin ETF Outflows Report, August 30, 2026
            </a>
          </li>
          <li>
            <a
              href="https://www.binance.com/en/news"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Binance News — ETF Flow Summary Citing Farside Data, August 30,
              2026
            </a>
          </li>
          <li>
            <a
              href="https://bitcoinmagazine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Magazine — ETF-Driven Rally and Subsequent Pullback
              Analysis, August 2026
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

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is a factual, dated report on market events published
            on August 30, 2026. It is for informational purposes only and does
            not constitute financial or investment advice. ETF flow figures are
            sourced from third-party reports and have not been independently
            verified from primary issuer dashboards. Past flow patterns do not
            guarantee future price performance. Do not make investment decisions
            based solely on this article.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">
            Related Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/how-do-bitcoin-etfs-affect-price"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">
                Bitcoin
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How Do Bitcoin ETFs Actually Move the Price?
              </h3>
            </Link>
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
