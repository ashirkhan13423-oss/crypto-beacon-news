import { Link } from "@tanstack/react-router";
﻿import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-staking-hero.webp";
import { CheckCircle2, ChevronRight, Layers, ShieldCheck, Lock } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking";
const TITLE = "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon";
const DESC =
  "Learn how Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo validator nodes and liquid staking, and key risks.";
const PUBLISHED = "2026-08-15";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "How much ETH is required to run a solo validator node?",
    a: "Solo staking requires exactly 32 ETH deposited into the Ethereum deposit contract. For users with less ETH, pooled or liquid staking services allow participation with any amount.",
  },
  {
    q: "Where does Ethereum staking yield come from?",
    a: "Staking rewards come from protocol inflation (newly minted ETH for consensus participation) plus execution layer priority fees and MEV (Maximal Extractable Value) tips.",
  },
  {
    q: "Can you lose staked ETH?",
    a: "Yes, through slashing. Slashing occurs if a validator node behaves maliciously or violates consensus rules (such as double signing blocks), resulting in a penalty deducted from the staked balance.",
  },
];




export const Route = createFileRoute("/ethereum/what-is-ethereum-staking")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/what-is-ethereum-staking', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon", description: "Learn how Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo validator nodes and liquid staking, and key risks.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-15", dateModified: "2026-08-15", url: "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking" }
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
            <li className="text-primary font-medium truncate">What Is Ethereum Staking?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is Ethereum Staking? Proof-of-Stake & Yield Mechanics Explained
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 15, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="3D Ethereum emblem surrounded by proof-of-stake validator node mesh"
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


