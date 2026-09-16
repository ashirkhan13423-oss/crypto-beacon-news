import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-mining-energy.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/why-bitcoin-mining-uses-so-much-energy";
const TITLE = "Why Bitcoin Mining Uses So Much Energy | CryptoBeacon";
const DESC = "An objective look at the energy consumption of the Bitcoin network, examining both environmental concerns and the transition to renewable sources.";
const PUBLISHED = "2026-09-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "How much energy does Bitcoin actually use?",
    a: "Estimates vary, but as of late 2024, the Bitcoin network consumes around 130-150 TWh annually, comparable to the energy usage of a small to medium-sized country like Argentina.",
  },
  {
    q: "Can Bitcoin switch to a greener system like Ethereum did?",
    a: "Technically yes, but practically no. The Bitcoin community overwhelmingly supports Proof-of-Work as the most secure, decentralized consensus mechanism and refuses to switch to Proof-of-Stake.",
  },
  {
    q: "Is Bitcoin mining bad for the environment?",
    a: "It depends on the energy source. While high energy use is a fact, an increasing percentage of mining is powered by renewables, stranded energy, or flared gas that would otherwise be wasted.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Bitcoin Mining Uses So Much Energy",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "CryptoBeacon Editorial",
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
  articleSection: "Bitcoin",
  wordCount: 1850,
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
      name: "Why Bitcoin Mining Uses So Much Energy",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/why-bitcoin-mining-uses-so-much-energy")({
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
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/bitcoin/why-bitcoin-mining-uses-so-much-energy" }],
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
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Why Bitcoin Mining Uses So Much Energy</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Why Bitcoin Mining Uses So Much Energy
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Why Bitcoin Mining Uses So Much Energy"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

<P>One of the most persistent criticisms of Bitcoin is its massive electricity consumption. Headlines often compare the network's energy use to that of entire countries. But <strong>why does Bitcoin mining use so much energy?</strong> It is not a bug or an inefficiency; the high energy consumption is a deliberate design choice that secures the network via a mechanism called Proof-of-Work (PoW).</P>

<H2 id="the-proof-of-work-mechanism">The Proof-of-Work Mechanism</H2>

<P>Bitcoin has no central bank or authority to verify transactions. Instead, it relies on a decentralized network of "miners." These miners run specialized hardware (ASICs) that compete to solve a complex cryptographic puzzle. The first miner to solve the puzzle gets the right to add the next block of transactions to the blockchain and earns the block reward (newly minted Bitcoins) plus transaction fees.</P>

<P>Because the reward is highly lucrative, thousands of miners globally compete constantly. The protocol automatically adjusts the difficulty of the puzzle every two weeks so that a block is solved roughly every 10 minutes, regardless of how many miners are competing. As more miners join, the puzzle gets harder, requiring more computational power, and thus, more electricity.</P>

<H2 id="security-through-energy">Security Through Energy</H2>

<P>The energy spent is what makes Bitcoin secure. To hack the network or reverse a transaction (a 51% attack), an attacker would need to control more than half of the entire network's computing power. Given the current size of the network, acquiring the hardware and electricity to do this is practically impossible and economically unfeasible. In essence, Bitcoin converts physical energy into digital security.</P>

<div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Bitcoin's energy use is a feature, not a bug; it is required by the Proof-of-Work consensus mechanism to secure the network.</li>
            <li>Miners compete to solve cryptographic puzzles, and as the network grows, the difficulty and energy required increase.</li>
            <li>This immense energy expenditure makes the network highly resistant to censorship, hacking, and hostile takeovers.</li>
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
        

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Past performance is not indicative of future results.
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
                Send Bitcoin Safely
              </h3>
            </Link>\n            <Link
              to="/bitcoin/how-does-bitcoin-halving-work"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin Halving Work
              </h3>
            </Link>\n            <Link
              to="/bitcoin/what-is-the-bitcoin-halving"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin Halving Explained
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
