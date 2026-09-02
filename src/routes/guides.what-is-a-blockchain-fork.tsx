import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/news-blockchain-fork.png";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-blockchain-fork";
const TITLE = "What Is a Blockchain Fork? Explained Simply | CryptoBeacon";
const DESC =
  "A plain-language explainer on what a blockchain fork is, the difference between hard and soft forks, and why cryptocurrencies sometimes split into two.";
const PUBLISHED = "2026-08-15";

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
  "@type": "NewsArticle",
  headline: "What Is a Blockchain Fork? Why Cryptocurrencies Sometimes Split in Two",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: "2026-08-15",
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
    "what is a blockchain fork, hard fork vs soft fork explained, why do cryptocurrencies split, what happens in a crypto fork, hard fork, soft fork, consensus rules, chain split, node, protocol upgrade",
  articleSection: "Guides",
  wordCount: 1200,
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
      name: "What Is a Blockchain Fork?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/what-is-a-blockchain-fork")({
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
            <li className="text-primary">What Is a Blockchain Fork?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is a Blockchain Fork? Why Cryptocurrencies Sometimes Split in Two
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 15, 2026</time>}
          readTime="7 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Abstract illustration representing a blockchain splitting into two separate paths"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          If you've ever noticed two cryptocurrencies with confusingly similar names — Bitcoin and
          Bitcoin Cash, Ethereum and Ethereum Classic — you've encountered the result of a
          blockchain fork. This guide explains what a fork actually is, why they happen, and what it
          means when one occurs.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-a-fork-actually-is">What a Fork Actually Is</H2>
        <P>
          A blockchain is essentially a distributed ledger governed by a shared set of rules (the protocol) 
          that every participant's software follows to agree on what counts as a valid transaction. Because 
          there is no central server dictating these rules, every participant (node) must run compatible 
          software to stay in sync.
        </P>
        <P>
          A fork happens when that underlying rule set changes. This can happen through a planned upgrade 
          that everyone adopts together (a protocol upgrade), or through a disagreement so significant that 
          the network splits into two separate, independently operating chains. When a split occurs, the 
          blockchain literally branches into two paths: one continuing with the old rules, and one forging 
          ahead with the new rules.
        </P>

        <H2 id="soft-forks-vs-hard-forks">Soft Forks vs. Hard Forks</H2>
        <P>
          <strong>A soft fork</strong> tightens the rules in a way that's still compatible with
          older software (backward-compatible). For example, if a new rule states that block sizes 
          must now be smaller, older nodes will still recognize the new, smaller blocks as valid. 
          Nodes that haven't upgraded can continue to interact with the network, even if they can't 
          take full advantage of the new rules. This generally doesn't split the network because 
          everyone remains on the same chain.
        </P>
        <P>
          <strong>A hard fork</strong> changes the rules in a way that's <em>not</em>{" "}
          backward-compatible. It usually loosens rules or adds new functionality that older software 
          cannot process. Older software rejects blocks that follow the new rules, and newer software 
          rejects blocks that follow the old ones. If both groups of participants (miners, validators, 
          and users) keep running their own versions of the software, the result is two separate chains.
        </P>
        <P>
          Since both chains share the exact same transaction history up to the block where the split 
          occurred, holders of the original asset typically end up holding an equivalent balance on 
          both resulting chains.
        </P>

        <figure className="my-xl p-xl bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center">
          <svg
            viewBox="0 0 600 300"
            className="w-full max-w-[500px] h-auto"
            aria-label="Diagram showing a shared blockchain splitting into Chain A and Chain B"
          >
            <style>
              {`
                .diagram-text {
                  font-family: "Space Grotesk", sans-serif, system-ui;
                  font-weight: 600;
                  fill: currentColor;
                }
              `}
            </style>

            <g
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              className="text-secondary"
            >
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

            <text x="150" y="110" textAnchor="middle" className="diagram-text text-xl text-primary">
              Shared History
            </text>
            <text
              x="500"
              y="40"
              textAnchor="middle"
              className="diagram-text text-xl text-secondary"
            >
              Chain A
            </text>
            <text
              x="500"
              y="280"
              textAnchor="middle"
              className="diagram-text text-xl text-[#0F9D58]"
            >
              Chain B
            </text>
          </svg>
        </figure>

        <H2 id="why-forks-happen">Why Forks Happen</H2>
        <P>Forks generally stem from one of two situations:</P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>A planned upgrade</strong> the community broadly agrees on. Just like your phone 
            operating system requires updates to improve scalability, add functionality, or fix security 
            issues, blockchains must evolve. These are carried out via coordinated hard forks with wide 
            consensus. Everyone upgrades, and the old chain is simply abandoned.
          </li>
          <li>
            <strong>A genuine disagreement</strong> about the project's direction. The most famous example 
            is the 2017 Bitcoin Cash (BCH) split. Part of the community wanted to increase Bitcoin's block 
            size to allow for cheaper, faster transactions, while the other side argued this would make the 
            network too centralized and harder for everyday users to run nodes. The disagreement couldn't be 
            resolved, leading the block-size-increase camp to initiate a hard fork. Both chains continued 
            independently: Bitcoin (BTC) and Bitcoin Cash (BCH).
          </li>
          <li>
            <strong>A philosophical divergence after a hack.</strong> In 2016, a major project on Ethereum 
            (The DAO) was hacked. The Ethereum community controversially decided to hard fork the network to 
            rewrite history and return the stolen funds. Purists who believed "code is law" and history should 
            never be rewritten refused to upgrade, continuing the original chain which is now known as Ethereum 
            Classic (ETC).
          </li>
        </ul>

        <H2 id="what-happens-to-your-coins">What Happens to Your Coins in a Fork</H2>
        <P>
          If you hold the original asset in a wallet where you control the private keys at the
          moment of a contentious hard fork, you generally end up with a balance on both resulting
          chains, since the transaction history is shared up to the split point. Accessing the new
          chain's balance typically requires wallet software that specifically supports it — it
          doesn't happen automatically inside every wallet.
        </P>
        <P>
          If your coins are held on an exchange at the time of a fork, whether you receive the new
          asset depends entirely on that platform's individual policy — some list and credit new
          fork assets, others don't.
        </P>

        <H2 id="is-a-fork-good-or-bad">Is a Fork Good or Bad?</H2>
        <P>
          Neither, inherently — a fork is simply a mechanism for change, and its outcome depends
          entirely on the specific situation. A well-supported planned upgrade is usually a routine,
          low-drama event. A contentious split reflects a genuine disagreement within a community
          and can fragment attention, developer effort, and network security across two smaller
          chains instead of one larger one. Neither outcome is guaranteed in advance — evaluating a
          specific fork means looking at the situation on its own terms.
        </P>

        <H2 id="takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              A fork happens when a blockchain's rule set changes — either compatibly (soft fork) or
              incompatibly (hard fork).
            </li>
            <li>
              A hard fork with lasting disagreement produces two separate, independently operating
              chains.
            </li>
            <li>
              Holding the original asset at the time of a contentious hard fork generally means a
              balance on both chains, though accessing it may require specific wallet support.
            </li>
            <li>
              A fork's outcome — whether it strengthens or fragments a project — depends on the
              specific case, not the mechanism itself.
            </li>
          </ul>
        </div>

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://en.bitcoin.it/wiki/Fork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Wiki — Fork (hard forks, soft forks, and chain splits explained)
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/developers/docs/consensus-mechanisms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Consensus Mechanisms (how a network agrees on rules and upgrades)
            </a>
          </li>
          <li>
            <a
              href="https://bitcoin.org/en/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org — Frequently Asked Questions (protocol upgrades and network rules)
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/how-to-read-a-block-explorer"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Read a Block Explorer
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-bitcoin-mining"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is Bitcoin Mining?
              </h3>
            </Link>
            <Link
              to="/ethereum/proof-of-stake-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Proof of Stake Explained
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}


