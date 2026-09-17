import { Link } from "@tanstack/react-router";
﻿import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-layer-2-scaling.webp";
import { ChevronRight, Cpu, Layers, Shield, Zap } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-layer-2-scaling-rollups-explained";
const TITLE = "Ethereum Layer 2 Scaling & Rollups Explained | CryptoBeacon";
const DESC =
  "Understand how Optimistic Rollups and Zero-Knowledge (ZK) Rollups scale Ethereum, reduce transaction fees, and preserve Layer 1 security.";
const PUBLISHED = "2026-08-15";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
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




export const Route = createFileRoute("/ethereum/ethereum-layer-2-scaling-rollups-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/ethereum-layer-2-scaling-rollups-explained', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Ethereum Layer 2 Scaling & Rollups Explained | CryptoBeacon", description: "Understand how Optimistic Rollups and Zero-Knowledge (ZK) Rollups scale Ethereum, reduce transaction fees, and preserve Layer 1 security.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-15", dateModified: "2026-08-15", url: "https://www.cryptobeacon.site/ethereum/ethereum-layer-2-scaling-rollups-explained", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "Ethereum Layer 2 Scaling & Rollups Explained | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/ethereum-layer-2-scaling-rollups-explained" }
      ])) }
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
              Ethereum Layer 2 Scaling & Rollups
            </li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Ethereum Layer 2 Scaling & Rollups Explained
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 15, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Multi-layered geometric representation of Ethereum Layer 2 rollup scaling"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <RelatedArticles currentUrl={URL} />
      </article>\n      </main>
      <SiteFooter />
    </div>
  );
}


