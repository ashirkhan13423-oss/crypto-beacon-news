import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-merge-two-years.jpg";
import { Check, X } from "lucide-react";

const URL = "https://www.cryptobeacon.site/news/ethereum-merge-two-years-later";
const TITLE = "The Ethereum Merge: Two Years Later — What Actually Changed | CryptoBeacon";
const DESC =
  "A factual retrospective on the Ethereum Merge at its two-year mark (September 2024): what the upgrade delivered, what it didn't, and what the data shows now.";
const PUBLISHED = "2026-08-25";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "The Ethereum Merge: Two Years Later — What Actually Changed",
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
    logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site/assets/ethereum-merge-two-years.jpg`,
  inLanguage: "en-US",
  keywords:
    "ethereum merge anniversary, ethereum proof of stake results, did the merge work, ethereum energy usage after merge, ethereum staking data 2026",
  articleSection: "News",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://www.cryptobeacon.site/news" },
    { "@type": "ListItem", position: 3, name: "Ethereum Merge: Two Years Later", item: URL },
  ],
};

export const Route = createFileRoute("/news/ethereum-merge-two-years-later")({
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
      { property: "article:section", content: "News" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">
      {children}
    </h2>
  );
}

type TimelineItem = { date: string; event: string; detail: string };

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="my-xl relative">
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-outline-variant" aria-hidden />
      <div className="space-y-xl">
        {items.map((item, i) => (
          <div key={i} className="flex gap-lg">
            <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center shrink-0 z-10 text-secondary font-bold text-xs">
              {i + 1}
            </div>
            <div className="pb-md">
              <time className="font-label-caps text-label-caps text-secondary text-[11px] uppercase tracking-wider">{item.date}</time>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs mb-xs">{item.event}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultRow({ label, delivered }: { label: string; delivered: boolean }) {
  return (
    <div className="flex items-center gap-md py-sm border-b border-outline-variant last:border-0">
      {delivered
        ? <Check className="w-5 h-5 text-[#0F9D58] shrink-0" />
        : <X className="w-5 h-5 text-error shrink-0" />
      }
      <span className={`font-body-md text-body-md ${delivered ? "text-on-surface" : "text-on-surface-variant"}`}>{label}</span>
    </div>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg text-center">
      <div className="font-display-lg text-display-lg md:text-[2.5rem] md:font-bold text-secondary leading-none mb-xs">{value}</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">{label}</div>
    </div>
  );
}

function ArticlePage() {
  const timelineItems: TimelineItem[] = [
    {
      date: "Dec 2020",
      event: "Beacon Chain Launches",
      detail: "Ethereum's proof-of-stake chain goes live alongside the existing proof-of-work chain, allowing validators to begin staking ETH — but transactions still run on the old chain.",
    },
    {
      date: "Sep 15, 2022",
      event: "The Merge Executes",
      detail: "At 06:42:42 UTC, Ethereum's mainnet execution layer merges with the Beacon Chain consensus layer. Proof-of-work mining stops instantly. The network continues without interruption — no downtime, no forks.",
    },
    {
      date: "Apr 2023",
      event: "Shanghai / Shapella Upgrade",
      detail: "Staked ETH withdrawals enabled for the first time, completing the economic loop. Validators could now exit and receive their staked ETH back.",
    },
    {
      date: "Mar 2024",
      event: "Dencun Upgrade",
      detail: "Introduces 'blob' data structures (EIP-4844), dramatically cutting Layer 2 transaction fees by up to 90% on networks like Arbitrum and Base.",
    },
    {
      date: "Aug 2026",
      event: "Two-Year Mark",
      detail: "Ethereum has now processed over two years of proof-of-stake transactions with no successful 51% attack, a validator set exceeding 1 million, and annualized energy consumption roughly 99.95% lower than under proof-of-work.",
    },
  ];

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/news" className="hover:text-secondary">News</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Ethereum Merge: Two Years Later</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          The Ethereum Merge: Two Years Later — What the Data Actually Shows
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>August 25, 2026</time>} readTime="7 min read" />

        {/* Dated Banner */}
        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">Retrospective as of August 2026.</p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This article is a factual look at what the Merge delivered (and didn't) over its first two years. It does not predict future Ethereum price or development timelines.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Ethereum diamond logo merging with a proof-of-stake network symbol against a dark space background"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          On September 15, 2022, Ethereum stopped mining. In the space of one block, the world's second-largest blockchain switched from proof-of-work (PoW) to proof-of-stake (PoS) in a live transition watched by hundreds of thousands of developers and investors. The Merge had been in development for seven years. It worked on the first try. Now, two years later, it's worth looking at the data rather than the narrative.
        </P>

        <AdUnit />

        <H2 id="what-it-promised">What the Merge Promised</H2>
        <P>
          Ethereum's developers were careful to scope the Merge narrowly. It was not supposed to lower transaction fees, speed up the chain, or enable new smart contract features directly. The stated goals were: (1) eliminate proof-of-work energy consumption, (2) create the foundation for future scalability upgrades (sharding, later replaced by a rollup-centric roadmap), and (3) issue less ETH per block.
        </P>

        <H2 id="the-timeline">Key Milestones</H2>
        <Timeline items={timelineItems} />

        <H2 id="what-changed">What the Data Shows: Changed vs. Unchanged</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg my-xl">
          {/* What changed */}
          <div className="rounded-xl border border-[#0F9D58]/40 bg-[#0F9D58]/5 p-lg">
            <h3 className="font-headline-sm text-headline-sm text-[#0F9D58] mb-md flex items-center gap-sm">
              <Check className="w-5 h-5" /> What Changed
            </h3>
            <ResultRow label="Energy usage dropped ~99.95%" delivered={true} />
            <ResultRow label="New ETH issuance reduced by ~88%" delivered={true} />
            <ResultRow label="Staking enabled (32 ETH to run a validator)" delivered={true} />
            <ResultRow label="Validator count exceeded 1 million" delivered={true} />
            <ResultRow label="Post-Dencun: L2 fees cut up to 90%" delivered={true} />
          </div>
          {/* What didn't change */}
          <div className="rounded-xl border border-error/30 bg-error/5 p-lg">
            <h3 className="font-headline-sm text-headline-sm text-error mb-md flex items-center gap-sm">
              <X className="w-5 h-5" /> What Didn't Change (at Merge)
            </h3>
            <ResultRow label="Mainnet transaction fees (unchanged at Merge)" delivered={false} />
            <ResultRow label="Block times or transaction throughput" delivered={false} />
            <ResultRow label="Smart contract functionality" delivered={false} />
            <ResultRow label="Wallet addresses or private keys" delivered={false} />
          </div>
        </div>

        <AdUnit />

        <H2 id="by-the-numbers">By the Numbers (August 2026)</H2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md my-xl">
          <StatBox value="~99.95%" label="Energy reduction vs. proof-of-work" />
          <StatBox value="1M+" label="Active validators on the Beacon Chain" />
          <StatBox value="~88%" label="Reduction in new ETH issuance per year" />
          <StatBox value="0" label="Successful 51% attacks since the Merge" />
        </div>

        <H2 id="what-this-isnt">What This Article Isn't Saying</H2>
        <P>
          This is a factual retrospective — not a price prediction or an endorsement of Ethereum as an investment. Whether Ethereum's price performance since the Merge reflects the upgrade's technical success is a separate question, and one this article deliberately does not answer. ETH's price has been driven by macro conditions, Layer 2 competition, and market sentiment that are independent of the Merge's technical execution.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a href="https://ethereum.org/en/roadmap/merge/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">
              Ethereum.org — The Merge
            </a>
          </li>
          <li>
            <a href="https://ultrasound.money/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">
              UltraSound.Money — ETH issuance tracker
            </a>
          </li>
          <li>
            <a href="https://beaconcha.in/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">
              Beaconcha.in — Beacon Chain validator statistics
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is informational and not financial advice. Past technical upgrades do not predict future price performance.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/ethereum/what-is-ethereum-staking" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is Ethereum Staking?</h3>
            </Link>
            <Link to="/ethereum/ethereum-layer-2-scaling-rollups-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Ethereum Layer 2 & Rollups Explained</h3>
            </Link>
            <Link to="/ethereum/what-are-gas-fees-how-to-save" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Are Gas Fees & How to Save on Them?</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
