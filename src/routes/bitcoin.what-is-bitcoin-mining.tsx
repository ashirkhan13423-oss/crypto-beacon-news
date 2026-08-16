import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/bitcoin-what-is-mining.png";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/what-is-bitcoin-mining";
const TITLE = "What Is Bitcoin Mining? How New Bitcoin Is Created | CryptoBeacon";
const DESC =
  "A plain-language guide to what Bitcoin mining actually is, why it exists, what miners do, and why the process is designed the way it is.";
const PUBLISHED = "2026-08-06";

const faqs: { q: string; a: string }[] = [
  {
    q: "Can anyone mine Bitcoin?",
    a: "Technically yes, but in practice individual mining with a consumer computer is no longer economically viable. Bitcoin mining today is dominated by specialised hardware (ASICs) and large operations with access to cheap electricity.",
  },
  {
    q: "What is a Bitcoin halving?",
    a: "Approximately every four years (every 210,000 blocks), the block reward paid to miners is cut in half. This reduces the rate at which new Bitcoin enters circulation and is part of Bitcoin's fixed supply design.",
  },
  {
    q: "Why does Bitcoin mining use so much energy?",
    a: "Energy use is intentional — it's what makes attacking the network costly. Producing a valid proof-of-work requires real computational effort, which means reversing it or creating a fraudulent chain also requires enormous resources.",
  },
  {
    q: "What happens when all Bitcoin has been mined?",
    a: "The last Bitcoin is expected to be mined around 2140. After that, miners will only earn transaction fees rather than block rewards. Whether that's economically sufficient to sustain the network is an open long-term question.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Is Bitcoin Mining? How New Bitcoin Is Created",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Marcus Vance",
    jobTitle: "Senior Market & Macro Analyst",
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
    "what is bitcoin mining, how does bitcoin mining work, bitcoin proof of work explained, bitcoin block reward, bitcoin mining difficulty, what is a bitcoin halving",
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
      name: "What Is Bitcoin Mining?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/what-is-bitcoin-mining")({
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
      { property: "article:section", content: "Bitcoin" },
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

function AdUnit() {
  return (
    <div className="my-xl flex flex-col items-center justify-center p-md bg-surface-container-lowest border border-outline-variant rounded-lg min-h-[120px] mx-auto w-full max-w-[728px]">
      <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mb-xs">Advertisement</span>
      <div className="w-full h-[90px] bg-surface-container flex items-center justify-center rounded">
        <span className="text-on-surface-variant text-sm">Ad Placeholder</span>
      </div>
    </div>
  );
}

function MiningFlowDiagram() {
  return (
    <figure className="my-xl">
      <div className="rounded-xl bg-[#0A0B0D] p-lg overflow-x-auto">
        <svg
          viewBox="0 0 900 200"
          role="img"
          aria-label="Diagram showing the Bitcoin mining cycle: transactions collected, hashed, block solved, block added, reward paid"
          className="w-full h-auto min-w-[600px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {/* Connector line */}
          <line x1="60" y1="100" x2="840" y2="100" stroke="#F7931A" strokeWidth="1.5" strokeDasharray="6 4" />

          {[
            { cx: 80,  label: "Transactions\nBroadcast" },
            { cx: 260, label: "Miners\nCompete" },
            { cx: 450, label: "Block\nSolved" },
            { cx: 640, label: "Block\nAdded" },
            { cx: 820, label: "Reward\nPaid" },
          ].map((s, i) => (
            <g key={i}>
              <circle cx={s.cx} cy="100" r="38" fill="#0A0B0D" stroke="#F7931A" strokeWidth="2" />
              <text x={s.cx} y="106" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="700">
                {i + 1}
              </text>
              {s.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={s.cx}
                  y={158 + li * 18}
                  textAnchor="middle"
                  fill="#9CA3AF"
                  fontSize="13"
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-sm text-center font-body-md text-body-md text-on-surface-variant italic">
        The Bitcoin mining cycle: broadcasted transactions are collected into a block candidate,
        miners compete to solve a hash puzzle, and the winner adds the block and earns the reward.
      </figcaption>
    </figure>
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
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is Bitcoin Mining?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is Bitcoin Mining? How New Bitcoin Is Created
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By <Link to="/about" className="text-secondary font-medium hover:underline">Marcus Vance</Link> (Senior Macro Analyst) · Reviewed by CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>August 6, 2026</time>
          <span aria-hidden>·</span>
          <span>5 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Abstract illustration of Bitcoin mining with glowing coins and computational nodes"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </figure>

        <P>
          "Mining" is a deliberately evocative word — it suggests effort, scarcity, and reward.
          In Bitcoin's case, that's intentional: mining is the mechanism that creates new Bitcoin,
          processes transactions, and keeps the network secure, all at once. Understanding how it
          works explains a lot about why Bitcoin behaves the way it does.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#what-mining-does" className="hover:underline decoration-secondary">
                What Mining Actually Does
              </a>
            </li>
            <li>
              <a href="#proof-of-work" className="hover:underline decoration-secondary">
                Proof of Work: The Core Mechanism
              </a>
            </li>
            <li>
              <a href="#difficulty-supply" className="hover:underline decoration-secondary">
                Difficulty Adjustment and Fixed Supply
              </a>
            </li>
            <li>
              <a href="#halving" className="hover:underline decoration-secondary">
                The Halving
              </a>
            </li>
            <li>
              <a href="#key-takeaways" className="hover:underline decoration-secondary">
                Key Takeaways
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline decoration-secondary">
                Frequently Asked Questions
              </a>
            </li>
          </ol>
        </aside>

        <H2 id="what-mining-does">1. What Mining Actually Does</H2>
        <P>
          When you send Bitcoin, your transaction is broadcast to the network but doesn't
          immediately become permanent. Miners collect pending transactions into a candidate block,
          then compete to add that block to the blockchain. The winner earns a reward — newly
          created Bitcoin plus transaction fees. This is the only way new Bitcoin enters
          circulation.
        </P>
        <P>
          Mining serves two distinct functions simultaneously: it processes and finalises
          transactions, and it enforces the rules of the network without requiring any central
          authority to do so.
        </P>

        <MiningFlowDiagram />

        <H2 id="proof-of-work">2. Proof of Work: The Core Mechanism</H2>
        <P>
          To add a block, a miner must solve a specific computational puzzle: find a number (called
          a nonce) that, when combined with the block's data and run through a hash function, produces
          an output below a target value. There's no shortcut — the only method is brute-force
          guessing at enormous speed.
        </P>
        <P>
          This is called <strong>proof of work</strong>. The name reflects the key property: you
          can verify a solution instantly, but producing one requires real, measurable computational
          effort. This effort is what makes the system hard to cheat — rewriting Bitcoin's history
          would require outpacing the combined computing power of the entire network, which is
          prohibitively expensive in practice.
        </P>

        <AdUnit />

        <H2 id="difficulty-supply">3. Difficulty Adjustment and Fixed Supply</H2>
        <P>
          Bitcoin's protocol adjusts the puzzle's difficulty roughly every two weeks (every 2,016
          blocks) to maintain a target block time of approximately ten minutes, regardless of how
          much or how little mining power is competing. As more miners join and computing power
          increases, the puzzle gets harder. If miners leave, it gets easier.
        </P>
        <P>
          Bitcoin's total supply is capped at 21 million coins — a rule enforced by the protocol
          itself. No authority can change this without the agreement of the network's participants.
          The predictable, declining rate at which new Bitcoin is issued is part of what gives the
          supply schedule its credibility.
        </P>

        <H2 id="halving">4. The Halving</H2>
        <P>
          Every 210,000 blocks (approximately every four years), the block reward paid to miners is
          cut in half — an event known as the <strong>halving</strong>. This is how Bitcoin's
          supply schedule becomes progressively more restrictive over time. The block reward
          started at 50 BTC, is currently 3.125 BTC (as of 2024), and will continue halving until
          all 21 million Bitcoin have been issued, around the year 2140.
        </P>
        <P>
          After all Bitcoin has been mined, miners will rely entirely on transaction fees for
          income. Whether this creates sufficient economic incentive to sustain the network's
          security long-term is an ongoing debate among researchers and participants.
        </P>

        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Mining creates new Bitcoin and processes transactions, without any central authority.</li>
            <li>Proof of work requires real computational effort, making the network expensive to attack.</li>
            <li>Difficulty adjusts every ~2 weeks to keep block times near 10 minutes.</li>
            <li>Bitcoin's supply is capped at 21 million, enforced by the protocol itself.</li>
            <li>The halving reduces the block reward every ~4 years, progressively slowing new issuance.</li>
          </ul>
        </div>

        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
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

        <H2 id="conclusion">Conclusion</H2>
        <P>
          Bitcoin mining is not just about creating new coins — it's the engine of the entire
          network's security and transaction finality. Proof of work, difficulty adjustment, and
          the halving schedule all work together to produce a system where supply is predictable,
          history is expensive to rewrite, and no central party controls issuance. Understanding
          these mechanics explains much of what makes Bitcoin's design distinct from traditional
          financial systems.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://en.bitcoin.it/wiki/Mining"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Wiki — Mining (how mining works technically)
            </a>
          </li>
          <li>
            <a
              href="https://en.bitcoin.it/wiki/Controlled_supply"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Wiki — Controlled Supply (Bitcoin's fixed supply schedule and halvings)
            </a>
          </li>
          <li>
            <a
              href="https://bitcoin.org/bitcoin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Whitepaper — Satoshi Nakamoto (original design document)
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Mining economics vary significantly by
            hardware, electricity cost, and network conditions.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Send Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-a-bitcoin-wallet"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Bitcoin Wallet?
              </h3>
            </Link>
            <Link
              to="/news/what-is-a-blockchain-fork"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Blockchain Fork?
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
