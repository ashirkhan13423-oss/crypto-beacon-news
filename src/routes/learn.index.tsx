import { buildMetadata } from "@/lib/metadata";

import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/learn";
const TITLE = "Learn Crypto — Cryptocurrency & Blockchain Basics | CryptoBeacon";
const DESC = "The primary educational entry point for beginners to understand cryptocurrency, blockchain technology, digital asset security, and self-custody.";

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/learn/")({ validateSearch: searchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/learn', publishedTime: undefined, section: 'Learn' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Learn", item: "https://www.cryptobeacon.site/learn" }
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }
    ]
  }),
  component: LearnHub,
});

function LearnHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Learn Crypto" }]} />
        
        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Learn Crypto: The Basics
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Start your journey here. Understand cryptocurrency, blockchain technology, and the fundamentals of digital asset security through clear, evidence-based guides. Our mission at CryptoBeacon is to provide accessible, non-technical explanations of complex concepts.
          </p>
          {/* INTRO COPY SLOT */}
          <div className="mt-lg prose prose-lg dark:prose-invert text-on-surface">
            {/* TODO: Add genuine intro section text here */}
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Whether you are exploring Bitcoin for the first time or looking to dive deeper into smart contracts and decentralized finance (DeFi), our comprehensive curriculum is designed to help you navigate the crypto landscape with confidence. We emphasize self-custody and personal responsibility as core tenets of digital asset ownership.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Take your time reading through these fundamental modules. It is highly recommended to understand how private keys, public addresses, and network transactions operate before making any significant commitments. Education is your strongest defense against scams and costly mistakes in the rapidly evolving world of blockchain.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Bitcoin Basics</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Learn how the world's first cryptocurrency works, from mining to wallets and self-custody.
            </p>
            <Link to="/bitcoin" className="text-secondary font-medium hover:underline">
              Explore Bitcoin →
            </Link>
          </div>
          
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Ethereum Basics</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Discover smart contracts, decentralized finance (DeFi), and the foundational layer of Web3.
            </p>
            <Link to="/ethereum" className="text-secondary font-medium hover:underline">
              Explore Ethereum →
            </Link>
          </div>

          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Security Basics</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Protect your digital assets. Learn about seed phrases, private keys, and avoiding scams.
            </p>
            <Link to="/security" className="text-secondary font-medium hover:underline">
              Explore Security →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
