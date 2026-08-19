import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-layer-2-scaling.png";
import { ChevronRight, Cpu, Layers, Shield, Zap } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-layer-2-scaling-rollups-explained";
const TITLE = "Ethereum Layer 2 Scaling & Rollups Explained | CryptoBeacon";
const DESC =
  "Understand how Optimistic Rollups and Zero-Knowledge (ZK) Rollups scale Ethereum, reduce transaction fees, and preserve Layer 1 security.";
const PUBLISHED = "2026-08-15";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the difference between Optimistic and ZK Rollups?",
    a: "Optimistic Rollups assume transactions are valid by default and use a dispute window with fraud proofs. ZK-Rollups use cryptographic validity proofs (zero-knowledge proofs) to instantly verify transactions mathematically on Layer 1.",
  },
  {
    q: "Do Layer 2 networks compromise security?",
    a: "Stage 2 Rollups inherit the underlying security and censorship resistance of Ethereum Layer 1 because transaction data or state commitments are posted directly to Ethereum mainnet.",
  },
  {
    q: "Why are L2 gas fees so much cheaper than Ethereum mainnet?",
    a: "L2s bundle hundreds of transactions into a single compressed batch before submitting to Layer 1, splitting the base layer gas cost among all users in the batch.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Ethereum Layer 2 Scaling & Rollups Explained",
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
  image: "https://www.cryptobeacon.site/og-image.png",
  inLanguage: "en-US",
  keywords:
    "ethereum layer 2 scaling, optimistic rollups vs zk rollups, arbitrary scaling ethereum, l2 gas fee reduction, EIP-4844 proto-danksharding, Arbitrum Optimism zkSync",
  articleSection: "Ethereum",
  wordCount: 1750,
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ethereum",
      item: "https://www.cryptobeacon.site/ethereum",
    },
    { "@type": "ListItem", position: 3, name: "Ethereum Layer 2 Scaling", item: URL },
  ],
};

export const Route = createFileRoute("/ethereum/ethereum-layer-2-scaling-rollups-explained")({
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
      { property: "article:section", content: "Ethereum" },
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

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-md">
          <ol className="flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>
              <Link to="/" className="hover:text-primary hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li>
              <Link to="/ethereum" className="hover:text-primary hover:underline">
                Ethereum
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li className="text-primary font-medium truncate">
              Ethereum Layer 2 Scaling &amp; Rollups
            </li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Ethereum Layer 2 Scaling &amp; Rollups Explained
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 15, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Multi-layered geometric representation of Ethereum Layer 2 rollup scaling"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              The Blockchain Scalability Challenge
            </h2>
            <p className="mb-md">
              Ethereum Layer 1 processes approximately 15 to 30 transactions per second (TPS). When
              network activity surges, competition for block space drives gas fees up significantly.
              Rather than altering base layer parameters at the cost of decentralization or node
              operator hardware requirements, Ethereum adopted a{" "}
              <strong>rollup-centric roadmap</strong>.
            </p>
            <p>
              Layer 2 (L2) networks execute transactions off-chain in secondary execution
              environments while anchoring their security directly to Ethereum Layer 1 for
              settlement and data availability.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              How Rollups Work: Optimistic vs Zero-Knowledge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-md">
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs flex items-center gap-xs">
                  <Zap className="text-secondary w-5 h-5" /> Optimistic Rollups
                </h3>
                <p className="text-body-md">
                  Assume state transitions are valid by default. Transactions run off-chain and
                  state roots are submitted to L1. A challenge window (typically 7 days) allows
                  network participants to submit <em>fraud proofs</em> if invalid transactions
                  occur. Examples include Arbitrum and Optimism.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs flex items-center gap-xs">
                  <Shield className="text-secondary w-5 h-5" /> ZK-Rollups (Zero Knowledge)
                </h3>
                <p className="text-body-md">
                  Use advanced cryptographic <em>validity proofs</em> (SNARKs or STARKs). Every
                  transaction batch submitted to L1 is accompanied by a mathematical proof
                  confirming correctness, eliminating 7-day withdrawal delays. Examples include
                  zkSync Era and Starknet.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low p-lg rounded-xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              Proto-Danksharding (EIP-4844) &amp; Fee Reduction
            </h2>
            <p className="text-body-md mb-sm">
              EIP-4844 introduced specialized data containers called <strong>blobs</strong> to
              Ethereum blocks. Blobs allow Layer 2 rollups to store transaction data on L1 at a
              fraction of traditional calldata costs without permanently bloating the Ethereum
              execution state, reducing L2 transaction costs by up to 90%.
            </p>
          </section>

          <section className="bg-surface-container-low p-lg rounded-xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">
              Frequently Asked Questions
            </h2>
            <div className="space-y-md">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-outline-variant pb-md last:border-0 last:pb-0"
                >
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{faq.q}</h3>
                  <p className="text-body-md text-on-surface-variant">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
