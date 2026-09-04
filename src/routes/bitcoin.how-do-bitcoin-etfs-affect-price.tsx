import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { AdUnit } from "@/components/AdUnit";
import hero from "@/assets/bitcoin-etf-effects.jpg";
import { Plus } from "lucide-react";

const URL_CANONICAL =
  "https://www.cryptobeacon.site/bitcoin/how-do-bitcoin-etfs-affect-price";
const TITLE =
  "How Do Bitcoin ETFs Actually Affect the Price? | CryptoBeacon";
const DESC =
  "A plain-language look at the mechanism behind Bitcoin ETF inflows and outflows — and why more money entering a fund doesn't always mean the price goes straight up.";
const PUBLISHED = "2026-09-02";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do Bitcoin ETF inflows guarantee the price will go up?",
    a: "No. The mechanism is real, but timing delays and other market forces mean inflows and price moves don't always align on any single day, even though they're connected over longer periods.",
  },
  {
    q: "What is an authorized participant?",
    a: "A large financial institution with a special arrangement allowing it to create or redeem ETF shares directly with the fund — this is the actual mechanism through which fund demand translates into real Bitcoin purchases or sales.",
  },
  {
    q: "What's the difference between a spot ETF and a futures-based ETF?",
    a: "A spot ETF holds actual Bitcoin, so the creation process described in this article requires buying real BTC. A futures-based ETF holds contracts based on Bitcoin's future price rather than the asset itself, so it doesn't require the same direct spot-market buying.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Do Bitcoin ETFs Actually Affect the Price?",
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
  mainEntityOfPage: { "@type": "WebPage", "@id": URL_CANONICAL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "how do bitcoin ETFs affect price, bitcoin ETF inflows explained, what happens when money flows into a bitcoin ETF, do ETF inflows always raise bitcoin price, spot ETF, authorized participant, creation and redemption, net asset value, custodian, futures-based ETF",
  articleSection: "Bitcoin",
  wordCount: 950,
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
      name: "Bitcoin",
      item: "https://www.cryptobeacon.site/bitcoin",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How Bitcoin ETFs Affect Price",
      item: URL_CANONICAL,
    },
  ],
};

export const Route = createFileRoute(
  "/bitcoin/how-do-bitcoin-etfs-affect-price"
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL_CANONICAL },
      {
        property: "og:image",
        content: "https://www.cryptobeacon.site/og-image.png",
      },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Bitcoin" },
      { property: "article:tag", content: "bitcoin basics" },
      { property: "article:tag", content: "ETFs" },
      { property: "article:tag", content: "market structure" },
      { property: "article:tag", content: "beginner guide" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      {
        name: "twitter:image",
        content: "https://www.cryptobeacon.site/og-image.png",
      },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
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

function CreationRedemptionDiagram() {
  const steps = [
    { id: "step-investor", label: ["Investor", "Buys Shares"] },
    { id: "step-nav", label: ["Demand", "Exceeds NAV"] },
    { id: "step-ap", label: ["Authorized Participant", "Creates Shares"] },
    { id: "step-btc", label: ["Fund Buys", "Real Bitcoin"] },
  ];

  return (
    <figure
      aria-label="Creation and redemption flow diagram showing the 4-step process"
      className="my-xl overflow-x-auto"
    >
      <svg
        viewBox="0 0 760 140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="diagram-title-etf"
        className="w-full max-w-3xl mx-auto block"
        style={{ minWidth: "420px", fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <title id="diagram-title-etf">
          ETF Creation and Redemption: 4-step flow
        </title>
        {steps.map((step, i) => {
          const x = i * 190 + 5;
          const isLast = i === steps.length - 1;
          const fill = isLast ? "#0F9D58" : "#0A0B0D";
          const stroke = isLast ? "#0F9D58" : "#2563EB";
          return (
            <g key={step.id} id={step.id}>
              <rect
                x={x}
                y={20}
                width={160}
                height={80}
                rx={10}
                ry={10}
                fill={fill}
                stroke={stroke}
                strokeWidth={isLast ? 2 : 1.5}
              />
              {step.label.map((line, li) => (
                <text
                  key={li}
                  x={x + 80}
                  y={55 + li * 20}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={600}
                  fill="#FFFFFF"
                >
                  {line}
                </text>
              ))}
              {i < steps.length - 1 && (
                <>
                  <line
                    x1={x + 160}
                    y1={60}
                    x2={x + 184}
                    y2={60}
                    stroke="#2563EB"
                    strokeWidth={2}
                  />
                  <polygon
                    points={`${x + 184},55 ${x + 194},60 ${x + 184},65`}
                    fill="#2563EB"
                  />
                </>
              )}
              <text
                x={x + 80}
                y={118}
                textAnchor="middle"
                fontSize={11}
                fill="#6B7280"
                fontWeight={500}
              >
                Step {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="text-center font-body-md text-[12px] text-on-surface-variant mt-sm">
        The creation process — how ETF demand becomes real Bitcoin purchases on
        the open market.
      </figcaption>
    </figure>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        {/* Breadcrumb */}
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
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary text-ellipsis overflow-hidden whitespace-nowrap">
              How Bitcoin ETFs Affect Price
            </li>
          </ol>
        </nav>

        {/* Category badge */}
        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        {/* H1 */}
        <h1
          id="article-title"
          className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight"
        >
          How Do Bitcoin ETFs Actually Affect the Price?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 2, 2026</time>}
          readTime="6 min read"
        />

        {/* Hero */}
        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Illustration representing money flowing into a fund that then purchases Bitcoin"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </figure>

        {/* Intro */}
        <P>
          Headlines about Bitcoin ETF "inflows" and "outflows" show up
          constantly, often paired with a price move on the same day. But the
          relationship is more mechanical — and less automatic — than it first
          appears. This guide explains the actual mechanism connecting ETF
          activity to Bitcoin's price, and why the two don't always move
          together the way headlines suggest.
        </P>
        <P>
          This article is educational. It isn't financial advice, and it doesn't
          recommend any specific fund or investment decision.
        </P>

        {/* Ad Unit #1 — below intro */}
        <p
          className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest text-center mt-xl mb-xs"
          aria-label="Advertisement label"
        >
          Advertisement
        </p>
        <div className="mb-xl">
          <AdUnit />
        </div>

        <H2 id="what-spot-etf-holds">What a Spot Bitcoin ETF Actually Holds</H2>
        <P>
          A spot Bitcoin ETF is a fund that holds real Bitcoin and issues shares
          that trade on a stock exchange, similar to how a stock trades. When you
          buy a share, you're not buying Bitcoin directly — you're buying a claim
          on a portion of the fund's holdings, managed on your behalf.
        </P>

        <H2 id="creation-redemption">
          The Creation and Redemption Mechanism
        </H2>
        <P>
          This is the part most explanations skip over, and it's the actual link
          between ETF activity and Bitcoin's price:
        </P>
        <ol className="list-decimal pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>An investor buys ETF shares</strong> through a regular
            brokerage account, the same way they'd buy shares of a company.
          </li>
          <li>
            <strong>
              Demand pushes the ETF's share price slightly above the value of
              the Bitcoin it holds
            </strong>{" "}
            (its net asset value).
          </li>
          <li>
            <strong>
              Authorized participants — large financial institutions with a
              special arrangement with the fund — step in to close that gap.
            </strong>{" "}
            They do this by creating new ETF shares, which requires the fund to
            acquire more actual Bitcoin to back those new shares.
          </li>
          <li>
            <strong>
              The fund (or its authorized participants) buys real Bitcoin on the
              open market
            </strong>{" "}
            to complete that process.
          </li>
        </ol>
        <P>
          Outflows work in reverse: when investors redeem ETF shares, authorized
          participants remove shares from circulation, and the fund typically
          sells a corresponding amount of Bitcoin to return that capital.
        </P>

        {/* SVG diagram */}
        <CreationRedemptionDiagram />

        {/* Ad Unit #2 — after diagram */}
        <p
          className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest text-center mt-xl mb-xs"
          aria-label="Advertisement label"
        >
          Advertisement
        </p>
        <div className="mb-xl">
          <AdUnit />
        </div>

        <H2 id="why-inflows-dont-always-push">
          Why Inflows Don't Always Push Price Up Immediately
        </H2>
        <P>
          This is the detail most beginner content leaves out entirely.
          Authorized participants don't always buy the underlying Bitcoin at the
          exact same moment investor demand shows up — there can be a delay of
          hours, or until the next trading day, before that spot-market buying
          actually happens. This means a day with strong reported inflows and a
          day with a strong Bitcoin price move don't always line up perfectly,
          even though they're clearly connected over time.
        </P>
        <P>
          It's also worth noting that ETF flow data is typically reported after
          markets close, so on any given day, Bitcoin's price can move before
          that day's flow numbers are even public. Flows and price are related,
          but neither one perfectly leads the other on a day-to-day basis.
        </P>

        <H2 id="why-effect-is-real">Why the Effect Is Still Real Over Time</H2>
        <P>
          Even with that timing nuance, the underlying mechanism is genuine:
          sustained inflows over days or weeks mean authorized participants are
          consistently buying real Bitcoin on the open market to back new shares.
          That sustained buying pressure is a real, structural source of demand —
          distinct from routine trading between existing holders, since it
          represents new capital entering the market specifically because of ETF
          demand.
        </P>
        <P>
          The reverse is also true: sustained outflows mean real Bitcoin is being
          sold to fund redemptions, which is a genuine source of selling
          pressure, not just a symbolic number.
        </P>

        <H2 id="what-this-means-for-news">
          What This Means for Understanding the News
        </H2>
        <P>
          When you see a headline connecting a Bitcoin price move to ETF inflows,
          it's describing something structurally real — but it's rarely the{" "}
          <em>only</em> factor at play on any single day. Short-term price moves
          are shaped by many forces at once (broader{" "}
          <Link
            to="/guides/why-bitcoin-price-moves-more-than-stocks"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            market sentiment
          </Link>
          , futures positioning, macroeconomic news), and ETF flows are one
          identifiable piece of that picture, not a standalone explanation or a
          signal to act on.
        </P>

        {/* Key Takeaways — emerald-accent callout */}
        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>
              Spot Bitcoin ETFs hold real Bitcoin, and the creation/redemption
              process is the actual mechanism connecting fund activity to
              spot-market buying and selling.
            </li>
            <li>
              Because of timing delays in how authorized participants operate,
              day-to-day inflows and price moves don't always align perfectly.
            </li>
            <li>
              Over longer periods, sustained inflows or outflows do represent
              genuine, structural buying or selling pressure — this isn't just a
              symbolic statistic.
            </li>
            <li>
              ETF flows are one contributing factor among several that shape
              Bitcoin's price at any given time, not a standalone signal.
            </li>
          </ul>
        </div>

        {/* Ad Unit #3 — after Key Takeaways, before FAQ */}
        <p
          className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest text-center mt-xl mb-xs"
          aria-label="Advertisement label"
        >
          Advertisement
        </p>
        <div className="mb-xl">
          <AdUnit />
        </div>

        {/* FAQ — accordion */}
        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant mb-xl">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45 shrink-0" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* Conclusion */}
        <H2 id="conclusion">Conclusion</H2>
        <P>
          The link between Bitcoin ETFs and price isn't hype — it's a genuine
          structural mechanism involving real purchases and sales of Bitcoin. But
          it isn't instantaneous or absolute either. Understanding the actual
          creation and redemption process helps make sense of headlines without
          over-reading any single day's numbers as a reliable signal on their
          own.
        </P>

        {/* Disclaimer */}
        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and
            should not be considered financial or investment advice. It does not
            recommend any specific fund, and it does not predict future price
            movement.
          </p>
        </div>

        {/* Related Reading */}
        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">
            Related Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <Link
              to="/guides/why-bitcoin-price-moves-more-than-stocks"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">
                Guides
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Does Bitcoin's Price Move More Than Stocks?
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-the-bitcoin-halving"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">
                Bitcoin
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is the Bitcoin Halving?
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
