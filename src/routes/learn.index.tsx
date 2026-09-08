import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/learn";
const TITLE = "Learn Crypto — Cryptocurrency & Blockchain Basics | CryptoBeacon";
const DESC = "The primary educational entry point for beginners to understand cryptocurrency, blockchain technology, digital asset security, and self-custody.";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Learn Crypto" }])),
      },
    ],
  }),
  component: LearnHub,
});

function LearnHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Learn Crypto" }]} />
        
        <div className="mb-xxl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Learn Crypto: The Basics
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Start your journey here. Understand cryptocurrency, blockchain technology, and the fundamentals of digital asset security through clear, evidence-based guides.
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
