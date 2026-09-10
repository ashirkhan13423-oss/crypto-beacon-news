import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/news-bitcoin-fed-inflation-etf-sept2026.jpg";

const SLUG = "bitcoin-jobs-report-september-2026-fed-rate-risk";
const ARTICLE_URL = `https://www.cryptobeacon.site/news/${SLUG}`;
const TITLE =
  "Bitcoin Rises After August Jobs Report as Markets Reprice September Fed Risk | CryptoBeacon";
const DESC =
  "Bitcoin climbed back above $81,000 after the August 2026 U.S. jobs report and Fed Governor Waller's conditional hold stance. We explain the full transmission chain from payrolls to ETF inflows and why the September CPI release is the real test.";
const PUBLISHED = "2026-09-06";

/* ─── FAQ DATA ─────────────────────────────────────────── */
const faqs = [
  {
    q: "Why did Bitcoin rise after the August 2026 jobs report?",
    a: "The August report—162,000 new payrolls, 4.1% unemployment, 3.1% annual wage growth—was softer than some feared. Combined with Fed Governor Christopher Waller's conditional support for holding rates steady, markets repriced the probability of a September rate hike downward. Lower rate-hike expectations reduce the opportunity cost of holding non-yielding assets like Bitcoin, which supported the rally.",
  },
  {
    q: "What is a conditional Fed statement and why does it matter?",
    a: "A conditional statement means the policymaker's stance depends on future data. Waller said he would support holding rates if disinflation continued, not that rates were definitely on hold. If the September CPI or PPI comes in hotter than expected, that condition fails and markets could reprice aggressively in the opposite direction.",
  },
  {
    q: "What was the significance of the $731 million Bitcoin ETF inflow day?",
    a: "It was the largest single-day net inflow into U.S. spot Bitcoin ETFs since January 14, 2026. BlackRock IBIT accounted for roughly $454 million of the total. However, one session does not establish a trend. The key question is whether inflows persist across multiple sessions or whether this was tactical positioning around the macro event.",
  },
  {
    q: "What is the difference between strategic and tactical ETF inflows?",
    a: "Strategic inflows reflect long-term institutional accumulation—funds buying because they want sustained Bitcoin exposure. Tactical inflows are event-driven: funds entering ahead of an expected catalyst and potentially exiting just as quickly when the catalyst resolves. Multiple consecutive sessions of strong inflows are needed to distinguish between the two.",
  },
  {
    q: "Why does the September CPI matter more than the jobs report for Bitcoin?",
    a: "The jobs report influences rate expectations through the labor-market side of the Fed's dual mandate. But inflation data—CPI and PPI—is the direct measure of whether the Fed's disinflation goal is being met. Waller explicitly tied his conditional hold stance to continued disinflation. If the September CPI surprises to the upside, it invalidates the soft-rate narrative that is currently supporting Bitcoin.",
  },
  {
    q: "How does South Korea's tokenized securities roadmap affect crypto markets?",
    a: "The Financial Services Commission's three-phase plan moves tokenized securities infrastructure from pilot projects to regulated market infrastructure covering issuance, ownership records, settlement, and depository operations. The immediate price impact on BTC and ETH is limited, but it is a significant long-term signal: a G20 economy is building the regulatory and technical layer required for mainstream onchain finance.",
  },
];

/* ─── SCHEMA ────────────────────────────────────────────── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Bitcoin Rises After August Jobs Report as Markets Reprice September Fed Risk",
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
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "Bitcoin jobs report September 2026, Bitcoin Fed rate hike September 2026, Christopher Waller Bitcoin, August payrolls crypto impact, Bitcoin ETF inflows, inflation data Bitcoin, Federal Reserve crypto reaction, Bitcoin above 81000, South Korea tokenized securities 2026, Korea blockchain securities roadmap, BlackRock IBIT inflows",
  articleSection: "News",
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
      name: "News",
      item: "https://www.cryptobeacon.site/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bitcoin Rises After August Jobs Report",
      item: ARTICLE_URL,
    },
  ],
};

/* ─── ROUTE ─────────────────────────────────────────────── */
export const Route = createFileRoute(
  "/news/bitcoin-jobs-report-september-2026-fed-rate-risk"
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: ARTICLE_URL },
      { property: "og:image", content: `https://www.cryptobeacon.site${hero}` },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "News" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      {
        name: "twitter:image",
        content: `https://www.cryptobeacon.site${hero}`,
      },
    ],
    links: [{ rel: "canonical", href: ARTICLE_URL }],
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

/* ─── TYPOGRAPHY HELPERS ────────────────────────────────── */
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
      className="scroll-mt-28 font-headline-sm text-headline-sm md:text-headline-md text-primary mt-xl mb-sm"
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

/* ─── PAGE COMPONENT ────────────────────────────────────── */
function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">

        {/* ── BREADCRUMB ── */}
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
              Bitcoin Jobs-Report Rally: Fed Risk
            </li>
          </ol>
        </nav>

        {/* ── CATEGORY BADGE ── */}
        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News · Macro Analysis
        </span>

        {/* ── H1 ── */}
        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Bitcoin Rises After August Jobs Report as Markets Reprice September
          Fed Risk
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 6, 2026</time>}
          readTime="7 min read"
        />

        {/* ── DATED SNAPSHOT BANNER ── */}
        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Last updated: September 6, 2026.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This is a dated market snapshot reflecting conditions around
            September 4–6, 2026. Prices, ETF flow totals, and rate expectations
            cited below are point-in-time data and will age quickly. This
            article does not predict future price movement.
          </p>
        </div>

        {/* ── HERO IMAGE ── */}
        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Cinematic editorial illustration showing Bitcoin above the Federal Reserve building, a payroll jobs report, a CPI inflation gauge, and ETF institutional flow arrows representing how macro data drives crypto markets."
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
          <figcaption className="text-center font-body-sm text-body-sm text-on-surface-variant py-sm px-md">
            The August 2026 jobs report, Federal Reserve rate expectations, spot
            ETF flows, and South Korea's tokenization roadmap are the week's
            dominant institutional signals — September 6, 2026.
          </figcaption>
        </figure>

        {/* ── INTRO ── */}
        <P>
          Bitcoin moved back above $81,000 in the days following the U.S.
          Bureau of Labor Statistics August 2026 employment report, and U.S.
          spot Bitcoin exchange-traded funds recorded approximately $730.9
          million in net inflows on a single day — the strongest session since
          January. The proximate cause was not the labor data alone; it was what
          the data implied about the Federal Reserve's next move.
        </P>
        <P>
          This article explains the full transmission chain from payroll numbers
          to rate expectations, why{" "}
          <Link
            to="/bitcoin/why-do-bond-yields-affect-bitcoin-price"
            className="text-secondary hover:underline"
          >
            bond yields and the Fed's policy rate matter for Bitcoin
          </Link>
          , what the ETF inflows actually reveal about institutional
          positioning, and why the September CPI release — not the jobs report
          — is the real confirmation point for this rally. We also cover South
          Korea's tokenized securities roadmap, a different but equally
          important institutional story for digital assets.
        </P>

        <AdUnit />

        {/* ─── SECTION 1: THE JOBS REPORT ─── */}
        <H2 id="jobs-report">
          The August 2026 Jobs Report: What the Numbers Actually Said
        </H2>
        <P>
          On September 4, 2026, the U.S. Bureau of Labor Statistics released
          the August Employment Situation Summary. The headline figures were:
        </P>

        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-lg">
          <p className="font-headline-sm text-headline-sm text-primary font-bold mb-sm">
            August 2026 U.S. Employment — Key Data Points
          </p>
          <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <strong>Nonfarm payrolls:</strong> +162,000 (August)
            </li>
            <li>
              <strong>Unemployment rate:</strong> 4.1% (unchanged)
            </li>
            <li>
              <strong>Average hourly earnings (MoM):</strong> +0.3%
            </li>
            <li>
              <strong>Average hourly earnings (YoY):</strong> +3.1%
            </li>
            <li>
              <strong>Next key data:</strong> September CPI and PPI (approx.
              September 10–11)
            </li>
          </ul>
        </div>

        <P>
          On its own, the jobs report told a story of a labor market that is
          cooling but not collapsing. Payroll growth of 162,000 is below the
          pace that would typically alarm the Fed, and annual wage growth of
          3.1% is moving in the direction the central bank wants — toward levels
          consistent with its 2% inflation target over time.
        </P>
        <P>
          However, a single jobs report is not a policy decision. The market
          reaction was driven by what the report implied in combination with
          existing Fed communication — specifically, remarks made by Governor
          Christopher Waller the day before.
        </P>

        {/* ─── SECTION 2: WALLER / FED ─── */}
        <H2 id="waller-fed-signal">
          What Fed Governor Waller Actually Said — and Why It Moved Markets
        </H2>
        <P>
          On September 3, 2026, Federal Reserve Governor Christopher Waller
          stated publicly that he would be inclined to support holding the
          policy rate steady if incoming data continued to show disinflation. He
          did not say the Fed would cut rates, and he did not commit to any
          specific outcome. His statement was explicitly conditional.
        </P>
        <P>
          That conditionality is the critical detail crypto investors need to
          understand. Markets did not rally because the Fed decided anything.
          Markets rallied because a senior Fed official gave the market
          permission to price in a lower probability of a September rate hike —
          conditional on the inflation path remaining favorable.
        </P>

        <H3 id="transmission-chain">
          The Transmission Chain: From Payrolls to Bitcoin
        </H3>
        <P>
          The mechanism connecting the jobs report and Waller's comments to
          Bitcoin's price runs as follows:
        </P>

        <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/5 p-lg rounded-r-lg mb-lg">
          <div className="space-y-sm font-body-lg text-body-lg text-on-surface">
            <div className="flex items-start gap-sm">
              <span className="text-xl mt-1 flex-shrink-0">📋</span>
              <span>
                <strong>Softer jobs data</strong> — 162K payrolls, steady
                unemployment, moderating wages
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-start gap-sm">
              <span className="text-xl mt-1 flex-shrink-0">🏦</span>
              <span>
                <strong>Lower September rate-hike probability</strong> —
                Waller signals conditional hold if disinflation continues
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-start gap-sm">
              <span className="text-xl mt-1 flex-shrink-0">📉</span>
              <span>
                <strong>Lower Treasury yields</strong> — reduced rate-hike
                expectations ease upward yield pressure
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-start gap-sm">
              <span className="text-xl mt-1 flex-shrink-0">💵</span>
              <span>
                <strong>Softer U.S. dollar</strong> — lower yield differential
                advantage weakens DXY
              </span>
            </div>
            <div className="pl-lg text-secondary font-bold">↓</div>
            <div className="flex items-start gap-sm">
              <span className="text-xl mt-1 flex-shrink-0">₿</span>
              <span>
                <strong>Bitcoin and risk assets rally</strong> — lower
                opportunity cost, improved liquidity expectations
              </span>
            </div>
          </div>
        </div>

        <P>
          This is not a complicated chain, but it is easy to misread. The jobs
          report did not directly cause Bitcoin to rise. It shifted rate-hike
          probabilities, which shifted bond yields, which shifted the dollar,
          which shifted the relative attractiveness of risk assets. Bitcoin is
          at the end of that chain — and it can reverse just as quickly if any
          link breaks.
        </P>

        <AdUnit />

        {/* ─── SECTION 3: ETF INFLOWS ─── */}
        <H2 id="etf-inflows">
          $731 Million in a Day: What the ETF Inflows Tell Us
        </H2>
        <P>
          U.S. spot Bitcoin ETFs recorded approximately $730.9 million in net
          inflows on a single session — the largest single-day inflow since
          January 14, 2026. BlackRock's IBIT accounted for approximately $454
          million of that total. Combined Bitcoin and Ethereum ETF weekly
          inflows for the week ending in early September were reported near
          $1.2 billion.
        </P>
        <P>
          These are large numbers. But they require careful interpretation. As
          covered in our detailed guide on{" "}
          <Link
            to="/bitcoin/how-do-bitcoin-etfs-affect-price"
            className="text-secondary hover:underline"
          >
            how Bitcoin ETFs affect price
          </Link>
          , ETF flow data can reveal fundamentally different things depending on
          whether inflows persist or reverse:
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-lg">
          <div className="border border-[#0F9D58]/30 bg-[#0F9D58]/5 p-lg rounded-lg">
            <p className="font-headline-sm text-headline-sm text-[#0F9D58] font-bold mb-sm">
              🟢 Strategic Accumulation
            </p>
            <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
              <li>Inflows persist across 5–10+ sessions</li>
              <li>Spread across multiple issuers and products</li>
              <li>Not concentrated around a single macro event</li>
              <li>Reflects durable institutional allocation decisions</li>
              <li>Supports sustained spot demand for Bitcoin</li>
            </ul>
          </div>
          <div className="border border-[#F59E0B]/30 bg-[#F59E0B]/5 p-lg rounded-lg">
            <p className="font-headline-sm text-headline-sm text-[#F59E0B] font-bold mb-sm">
              🟡 Tactical Positioning
            </p>
            <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
              <li>Large single-session inflow around a catalyst</li>
              <li>Concentrated in one or two dominant products</li>
              <li>May reverse when the catalyst resolves</li>
              <li>Reflects short-term expectations trading</li>
              <li>Does not guarantee sustained price support</li>
            </ul>
          </div>
        </div>

        <P>
          The $731 million session fits the profile of a large tactical inflow
          around a favorable macro event. That does not make it unimportant —
          it demonstrates that institutional capital is watching macro data and
          is willing to deploy quickly into Bitcoin when the rate narrative
          shifts. But the next five sessions matter more than the biggest one.
          If inflows continue at elevated levels, the strategic accumulation
          interpretation becomes more credible. A rapid reversal would suggest
          tactical event-driven trading.
        </P>

        <H3 id="concentration-risk">
          Why IBIT's Dominance Warrants a Closer Look
        </H3>
        <P>
          BlackRock's IBIT representing roughly 62% of a single day's total
          inflows is worth noting. High concentration in one product means that
          the headline "Bitcoin ETF inflow" figure is heavily influenced by a
          single institutional buyer or group of buyers. This is not necessarily
          negative — IBIT's scale and liquidity are exactly what large
          institutions need — but readers should look at the full issuer-level
          breakdown before drawing broad conclusions about industry-wide demand.
        </P>

        <AdUnit />

        {/* ─── SECTION 4: SOUTH KOREA ─── */}
        <H2 id="south-korea-tokenization">
          South Korea's Tokenized Securities Roadmap: Why Infrastructure Matters
          More Than the Headlines
        </H2>
        <P>
          On September 4, 2026, South Korea's Financial Services Commission
          published a policy roadmap for the digital transformation of
          securities issuance and circulation. The plan is built around a
          three-phase approach involving securities companies and the Korea
          Securities Depository.
        </P>
        <P>
          Most coverage frames this as South Korea launching blockchain
          securities. That framing understates what is actually significant
          about the announcement. The important development is not that stocks
          or bonds will be represented as tokens — dozens of pilot projects have
          demonstrated that is technically feasible. The important development
          is that a G20 regulator is now working on the{" "}
          <strong>infrastructure layer</strong> that makes tokenized securities
          legally and operationally equivalent to conventional ones. This
          connects to the wider global discussion around{" "}
          <Link
            to="/guides/stablecoin-regulation-explained"
            className="text-secondary hover:underline"
          >
            stablecoin regulation
          </Link>{" "}
          and settlement infrastructure.
        </P>

        <H3 id="infrastructure-questions">
          The Questions That Actually Matter for Tokenized Finance
        </H3>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>Who maintains the authoritative ownership record?</strong>{" "}
            In conventional markets, this is the central securities depository.
            In tokenized markets, reconciling onchain state with existing legal
            frameworks requires explicit regulatory answers.
          </li>
          <li>
            <strong>How are transfers legally finalized?</strong> A blockchain
            transaction is irrevocable. Legal transfer of ownership may involve
            additional steps depending on jurisdiction.
          </li>
          <li>
            <strong>
              How are corporate actions such as dividends and voting handled?
            </strong>{" "}
            These require coordination between the issuer, the depository, and
            the token holder — an end-to-end coordination layer that pilot
            projects rarely build completely.
          </li>
          <li>
            <strong>
              What happens when onchain and offchain records conflict?
            </strong>{" "}
            This is the operational risk question that regulators must answer
            before tokenized securities can serve as reliable settlement assets.
          </li>
          <li>
            <strong>How are investors protected in a failure scenario?</strong>{" "}
            Custody, indemnification, and recourse mechanisms all need to be
            defined at a regulatory level.
          </li>
        </ul>
        <P>
          The FSC roadmap signals that Korea is working through these questions
          with a structured, phased approach. For long-term readers tracking
          where digital assets are headed in regulated finance, it is one of
          the more substantive developments of the week. For a broader primer,
          see our{" "}
          <Link
            to="/guides/crypto-regulation-explained-for-beginners"
            className="text-secondary hover:underline"
          >
            introduction to crypto regulation
          </Link>
          .
        </P>

        {/* ─── SECTION 5: WHAT MATTERS NEXT ─── */}
        <H2 id="what-matters-next">
          What Matters Next: The September Inflation Data Is the Real Test
        </H2>
        <P>
          The jobs report established the setup. The ETF inflows demonstrated
          institutional willingness to respond. But the market move is still
          conditional — and the condition is the same one Waller articulated:
          continued disinflation.
        </P>
        <P>
          The September CPI and PPI releases, expected around September 10–11,
          will either confirm or contradict the narrative currently supporting
          Bitcoin:
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-lg">
          <div className="border border-[#0F9D58]/30 bg-[#0F9D58]/5 p-lg rounded-lg">
            <p className="font-headline-sm text-headline-sm text-[#0F9D58] font-bold mb-sm">
              🟢 CPI Confirms Disinflation
            </p>
            <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
              <li>Validates Waller's conditional hold stance</li>
              <li>Reinforces rate-repricing that supported Bitcoin</li>
              <li>Likely extends ETF inflow momentum</li>
              <li>Reduces downside risk from Fed action in September</li>
              <li>Improves risk appetite for major altcoins</li>
            </ul>
          </div>
          <div className="border border-[#EF4444]/30 bg-[#EF4444]/5 p-lg rounded-lg">
            <p className="font-headline-sm text-headline-sm text-[#EF4444] font-bold mb-sm">
              🔴 CPI Surprises to the Upside
            </p>
            <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface">
              <li>Breaks Waller's disinflation condition</li>
              <li>Markets reprice September rate hike upward</li>
              <li>Yields rise, dollar strengthens</li>
              <li>Bitcoin and crypto face renewed pressure</li>
              <li>ETF inflows could stall or reverse quickly</li>
            </ul>
          </div>
        </div>

        <P>
          This binary setup is why a single jobs report does not establish a
          durable bull market. The current rally is built on an expectation.
          That expectation will be tested by hard inflation data within days.
          Investors who understand this distinction can position accordingly —
          not by predicting the CPI outcome, but by understanding how quickly
          the narrative can shift if the data does not cooperate.
        </P>

        {/* ─── KEY TAKEAWAYS ─── */}
        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>
              August payrolls rose 162,000, unemployment held at 4.1%, and
              annual wage growth was 3.1% — a softer-than-feared result that
              reduced rate-hike expectations.
            </li>
            <li>
              Fed Governor Waller's conditional support for a September hold
              was the policy signal that moved markets — but his stance remains
              explicitly data-dependent.
            </li>
            <li>
              Bitcoin's move above $81,000 is an expectations trade, not a
              confirmed policy shift. The September CPI and PPI releases are
              the real confirmation test.
            </li>
            <li>
              The $731 million single-day ETF inflow was the largest since
              January 14. Multiple follow-on sessions are needed to assess
              whether this is strategic accumulation or tactical positioning.
            </li>
            <li>
              South Korea's FSC published a three-phase tokenized securities
              roadmap — a meaningful regulatory infrastructure development with
              significant long-term implications for digital assets in regulated
              markets.
            </li>
          </ul>
        </div>

        {/* ─── FAQ ─── */}
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
              href="https://www.bls.gov/news.release/archives/empsit_09042026.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              U.S. Bureau of Labor Statistics — August 2026 Employment Situation
              Summary
            </a>
          </li>
          <li>
            <a
              href="https://www.federalreserve.gov/newsevents/speech/waller20260903a.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Federal Reserve — Governor Christopher Waller's September 3, 2026
              remarks
            </a>
          </li>
          <li>
            <a
              href="https://www.coindesk.com/markets/2026/09/04/bitcoin-back-above-usd81-000-as-hike-odds-fade-zcash-leads-with-15-jump"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CoinDesk — Bitcoin Back Above $81,000 as Hike Odds Fade
            </a>
          </li>
          <li>
            <a
              href="https://www.theblock.co/news/markets/2026-09-04-us-bitcoin-etfs-largest-inflow-day-since-january-413515"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              The Block — U.S. Bitcoin ETFs Record Largest Inflow Day Since
              January (SoSoValue data)
            </a>
          </li>
          <li>
            <a
              href="https://crypto.news/bitcoin-ethereum-etfs-draw-1-2b-in-weekly-inflows/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Crypto.news — Bitcoin and Ethereum ETFs Draw $1.2B in Weekly
              Inflows
            </a>
          </li>
          <li>
            <a
              href="https://www.fsc.go.kr/eng/pr010101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              South Korea Financial Services Commission — Tokenized Securities
              Policy Roadmap (September 4, 2026)
            </a>
          </li>
          <li>
            <a
              href="https://www.techtimes.com/articles/326765/20260905/south-korea-commits-blockchain-securities-registry-february-2027-stablecoins-next.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Tech Times — South Korea Commits to Blockchain Securities Registry
            </a>
          </li>
          <li>
            <a
              href="https://www.bls.gov/schedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bureau of Labor Statistics — Economic Release Calendar (CPI and
              PPI schedule)
            </a>
          </li>
        </ul>

        {/* ─── DISCLAIMER ─── */}
        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is a factual, dated report on market events published
            on September 6, 2026. It is for informational purposes only and
            does not constitute financial or investment advice. Prices, ETF flow
            figures, and rate-hike probabilities are point-in-time data drawn
            from third-party sources and may have changed by the time you read
            this. Past price behaviour does not guarantee future performance. Do
            not make investment decisions based solely on this article.
          </p>
        </div>

        {/* ─── RELATED READING ─── */}
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
                How Do Bitcoin ETFs Affect Price?
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
                Why Do Bond Yields Affect Bitcoin Price?
              </h3>
            </Link>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
