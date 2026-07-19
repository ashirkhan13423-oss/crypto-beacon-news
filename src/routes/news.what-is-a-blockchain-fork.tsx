import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/news-blockchain-fork.png";

const URL = "https://cryptobeaconnews.lovable.app/news/what-is-a-blockchain-fork";
const TITLE = "What Is a Blockchain Fork? Explained Simply | CryptoBeacon";
const DESC =
  "A plain-language explainer on what a blockchain fork is, the difference between hard and soft forks, and why cryptocurrencies sometimes split into two.";
const PUBLISHED = "2026-07-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "What's the difference between a hard fork and a soft fork?",
    a: "A soft fork is backward-compatible with older software; a hard fork isn't, and can result in two separate chains if support for the old rules continues.",
  },
  {
    q: "Do you automatically get new coins when a fork happens?",
    a: "If you control your private keys at the time of a contentious hard fork, you generally end up with a balance on both chains, but claiming it usually requires wallet software that supports the new chain specifically.",
  },
  {
    q: "Is a blockchain fork a sign something has gone wrong?",
    a: "Not necessarily — many forks are planned, well-supported upgrades. Contentious forks do reflect a real disagreement, but that's different from a technical failure.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Blockchain Fork? Why Cryptocurrencies Sometimes Split in Two",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "CryptoBeacon Editorial" },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://cryptobeaconnews.lovable.app/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://cryptobeaconnews.lovable.app${hero}`,
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

export const Route = createFileRoute("/news/what-is-a-blockchain-fork")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "what is a blockchain fork, hard fork vs soft fork explained, why do cryptocurrencies split, what happens in a crypto fork, hard fork, soft fork, consensus rules, chain split, node, protocol upgrade",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "News" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: ArticlePage,
});

function AdSlot({ id }: { id: string }) {
  return (
    <div className="my-xl" data-ad-slot={id}>
      <div className="text-center font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant mb-xs">
        Advertisement
      </div>
      <div className="border border-dashed border-outline-variant rounded-lg h-[90px] md:h-[250px] flex items-center justify-center bg-surface-container-lowest">
        <span className="text-xs text-on-surface-variant">Ad Placeholder</span>
      </div>
    </div>
  );
}

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
            <li className="text-primary">What Is a Blockchain Fork?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is a Blockchain Fork? Why Cryptocurrencies Sometimes Split in Two
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 20, 2026</time>
          <span aria-hidden>·</span>
          <span>4 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Abstract illustration representing a blockchain splitting into two separate paths"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          If you've ever noticed two cryptocurrencies with confusingly similar names — Bitcoin and Bitcoin Cash, Ethereum and Ethereum Classic — you've encountered the result of a blockchain fork. This guide explains what a fork actually is, why they happen, and what it means when one occurs.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <AdSlot id="top" />

        <H2 id="what-a-fork-actually-is">What a Fork Actually Is</H2>
        <P>
          A blockchain is governed by a shared set of rules that every participant's software follows to agree on what counts as a valid transaction. A fork happens when that rule set changes — either through an upgrade everyone adopts together, or through a disagreement so significant that the network splits into two separate, independently operating chains.
        </P>

        <H2 id="soft-forks-vs-hard-forks">Soft Forks vs. Hard Forks</H2>
        <P>
          <strong>A soft fork</strong> tightens the rules in a way that's still compatible with older software. Nodes that haven't upgraded still recognize new blocks as valid, even if they can't take full advantage of the new rules. This generally doesn't split the network.
        </P>
        <P>
          <strong>A hard fork</strong> changes the rules in a way that's <em>not</em> backward-compatible. Older software rejects blocks that follow the new rules, and newer software rejects blocks that follow the old ones. If both groups of participants keep running their own version, the result is two separate chains — and, since both usually preserve the transaction history up to the split, holders of the original asset typically end up holding a balance on both resulting chains.
        </P>

        <figure className="my-xl p-xl bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 600 300" className="w-full max-w-[500px] h-auto" aria-label="Diagram showing a shared blockchain splitting into Chain A and Chain B">
            <style>
              {`
                .diagram-text {
                  font-family: "Space Grotesk", sans-serif, system-ui;
                  font-weight: 600;
                  fill: currentColor;
                }
              `}
            </style>
            
            <g stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" className="text-secondary">
              {/* Main trunk */}
              <path d="M 50 150 L 250 150" />
              {/* Branch A (Top) */}
              <path d="M 250 150 C 350 150, 350 70, 450 70" />
              <path d="M 450 70 L 550 70" />
              {/* Branch B (Bottom) */}
              <path d="M 250 150 C 350 150, 350 230, 450 230" className="text-[#0F9D58]" />
              <path d="M 450 230 L 550 230" className="text-[#0F9D58]" />
            </g>

            {/* Nodes */}
            <g fill="currentColor">
              <circle cx="100" cy="150" r="12" className="text-primary" />
              <circle cx="170" cy="150" r="12" className="text-primary" />
              <circle cx="240" cy="150" r="12" className="text-primary" />
              
              <circle cx="380" cy="95" r="12" className="text-secondary" />
              <circle cx="450" cy="70" r="12" className="text-secondary" />
              <circle cx="520" cy="70" r="12" className="text-secondary" />
              
              <circle cx="380" cy="205" r="12" className="text-[#0F9D58]" />
              <circle cx="450" cy="230" r="12" className="text-[#0F9D58]" />
              <circle cx="520" cy="230" r="12" className="text-[#0F9D58]" />
            </g>

            <text x="150" y="110" textAnchor="middle" className="diagram-text text-xl text-primary">Shared History</text>
            <text x="500" y="40" textAnchor="middle" className="diagram-text text-xl text-secondary">Chain A</text>
            <text x="500" y="280" textAnchor="middle" className="diagram-text text-xl text-[#0F9D58]">Chain B</text>
          </svg>
        </figure>

        <AdSlot id="mid" />

        <H2 id="why-forks-happen">Why Forks Happen</H2>
        <P>
          Forks generally stem from one of two situations:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>A planned upgrade</strong> the community broadly agrees on — improving scalability, adding functionality, or fixing an issue — carried out via a coordinated hard fork with wide support.
          </li>
          <li>
            <strong>A genuine disagreement</strong> about the project's direction — for example, differing opinions on transaction capacity or protocol philosophy — that can't be resolved, leading part of the community to continue on a separate chain with the old or modified rules.
          </li>
        </ul>

        <H2 id="what-happens-to-your-coins">What Happens to Your Coins in a Fork</H2>
        <P>
          If you hold the original asset in a wallet where you control the private keys at the moment of a contentious hard fork, you generally end up with a balance on both resulting chains, since the transaction history is shared up to the split point. Accessing the new chain's balance typically requires wallet software that specifically supports it — it doesn't happen automatically inside every wallet.
        </P>
        <P>
          If your coins are held on an exchange at the time of a fork, whether you receive the new asset depends entirely on that platform's individual policy — some list and credit new fork assets, others don't.
        </P>

        <H2 id="is-a-fork-good-or-bad">Is a Fork Good or Bad?</H2>
        <P>
          Neither, inherently — a fork is simply a mechanism for change, and its outcome depends entirely on the specific situation. A well-supported planned upgrade is usually a routine, low-drama event. A contentious split reflects a genuine disagreement within a community and can fragment attention, developer effort, and network security across two smaller chains instead of one larger one. Neither outcome is guaranteed in advance — evaluating a specific fork means looking at the situation on its own terms.
        </P>

        <H2 id="takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              A fork happens when a blockchain's rule set changes — either compatibly (soft fork) or incompatibly (hard fork).
            </li>
            <li>
              A hard fork with lasting disagreement produces two separate, independently operating chains.
            </li>
            <li>
              Holding the original asset at the time of a contentious hard fork generally means a balance on both chains, though accessing it may require specific wallet support.
            </li>
            <li>
              A fork's outcome — whether it strengthens or fragments a project — depends on the specific case, not the mechanism itself.
            </li>
          </ul>
        </div>

        <AdSlot id="bottom" />

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-45">
                  add
                </span>
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          {/* Related content module left empty as per spec "leave the related-content module ready to populate" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="p-lg rounded-lg border border-dashed border-outline-variant flex items-center justify-center text-on-surface-variant font-label-caps text-center min-h-[120px]">
              Related content goes here
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
