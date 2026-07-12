import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/ethereum-address-mismatch.png";

const URL = "https://cryptobeaconnews.lovable.app/ethereum/can-you-send-bitcoin-to-an-ethereum-address";
const TITLE = "Can You Send Bitcoin to an Ethereum Address? What Actually Happens | CryptoBeacon";
const DESC =
  "Worried you sent Bitcoin to an Ethereum address by mistake? Here's what actually happens, why it's rarer than you think, and what to check.";
const PUBLISHED = new Date().toISOString().split('T')[0];

const faqs: { q: string; a: string }[] = [
  {
    q: "What happens if I send Bitcoin to an Ethereum address?",
    a: "In most cases, the transaction simply fails — a standard Bitcoin wallet won't recognize a 0x-format address as valid and blocks the send before anything moves.",
  },
  {
    q: "Can lost crypto from a wrong-network deposit be recovered?",
    a: "Sometimes, if it was deposited to an exchange that can identify and correct the mismatch, occasionally for a fee. If it was sent to a valid address you don't control, it's generally considered unrecoverable.",
  },
  {
    q: "Why do Bitcoin and Ethereum addresses look so different?",
    a: "They're built on different underlying systems for tracking ownership, and use different formats as a direct result — it's a structural difference, not a cosmetic one.",
  },
  {
    q: "What is wrapped Bitcoin (WBTC)?",
    a: "A token on the Ethereum network designed to represent the value of Bitcoin, created through a specific deliberate process — not something that happens automatically by sending BTC to an Ethereum address.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can You Send Bitcoin to an Ethereum Address? What Actually Happens",
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
  image: `https://cryptobeaconnews.lovable.app${heroImage}`,
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

export const Route = createFileRoute(
  "/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "can you send bitcoin to an ethereum address, what happens if you send bitcoin to an ethereum address, bitcoin ethereum address format difference, sent crypto wrong network what to do",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Ethereum" },
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

function AddressFormatComparison() {
  return (
    <figure className="my-xl">
      <div className="rounded-xl bg-[#0A0B0D] p-lg overflow-x-auto flex flex-col items-center">
        <svg
          viewBox="0 0 1000 200"
          role="img"
          aria-label="Diagram comparing Bitcoin and Ethereum address formats"
          className="w-full h-auto min-w-[640px]"
          style={{ fontFamily: "'Space Grotesk', monospace" }}
        >
          {/* Bitcoin Address */}
          <rect x="50" y="40" width="400" height="120" rx="10" fill="#1A1C23" stroke="#F7931A" strokeWidth="2" />
          <text x="250" y="80" textAnchor="middle" fill="#F7931A" fontSize="24" fontWeight="bold">Bitcoin</text>
          <text x="250" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="18">bc1q...xyp2</text>
          
          {/* Mismatch Connector */}
          <line x1="450" y1="100" x2="550" y2="100" stroke="#EF4444" strokeWidth="4" strokeDasharray="10, 10" />
          <circle cx="500" cy="100" r="16" fill="#EF4444" />
          <text x="500" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">X</text>
          
          {/* Ethereum Address */}
          <rect x="550" y="40" width="400" height="120" rx="10" fill="#1A1C23" stroke="#2563EB" strokeWidth="2" />
          <text x="750" y="80" textAnchor="middle" fill="#2563EB" fontSize="24" fontWeight="bold">Ethereum</text>
          <text x="750" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="18">0x71C...3B92</text>
        </svg>
      </div>
      <figcaption className="mt-sm text-center font-body-md text-body-md text-on-surface-variant italic">
        Bitcoin and Ethereum use fundamentally different address structures that are incompatible by design.
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
              <Link to="/ethereum" className="hover:text-secondary">
                Ethereum
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Can You Send Bitcoin to an Ethereum Address?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Can You Send Bitcoin to an Ethereum Address? What Actually Happens
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>Today</time>
          <span aria-hidden>·</span>
          <span>4 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={heroImage}
            alt="Illustration representing incompatible Bitcoin and Ethereum address formats"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <P>
          If you hold both Bitcoin and Ethereum, this fear eventually crosses your mind: what if you accidentally send Bitcoin to an Ethereum address? The good news is that this specific mistake is far less common — and far less catastrophic — than most beginners assume, for a simple technical reason: the two networks don't speak the same language.
        </P>
        <P>
          This guide explains why, what genuinely can go wrong, and where the real risk actually hides.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <AdSlot id="top" />

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#why-different" className="hover:underline decoration-secondary">
                Why Bitcoin and Ethereum Addresses Look Different
              </a>
            </li>
            <li>
              <a href="#what-happens" className="hover:underline decoration-secondary">
                What Happens When You Try This Send
              </a>
            </li>
            <li>
              <a href="#real-risk" className="hover:underline decoration-secondary">
                Where the Real Risk Actually Hides
              </a>
            </li>
            <li>
              <a href="#suspect-wrong-network" className="hover:underline decoration-secondary">
                What to Do If You Suspect a Wrong-Network Send
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

        <H2 id="why-different">1. Why Bitcoin and Ethereum Addresses Look Different</H2>
        <P>
          Bitcoin and Ethereum are separate blockchains with entirely different address formats. A Bitcoin address typically starts with 1, 3, or bc1. An Ethereum address always starts with 0x, followed by 40 characters. This isn't a stylistic choice — it reflects genuinely different underlying systems for tracking ownership.
        </P>
        
        <AddressFormatComparison />

        <P>
          Most wallets validate the address format before allowing a transaction to be created. When you paste an Ethereum-style address into a Bitcoin wallet's send field, the wallet typically recognizes it doesn't match a valid Bitcoin address and blocks the transaction before anything is broadcast.
        </P>
        
        <AdSlot id="middle" />

        <H2 id="what-happens">2. What Happens When You Try This Send</H2>
        <P>
          In the most common scenario — trying to send native Bitcoin directly to a 0x-format Ethereum address using a standard Bitcoin wallet — the transaction usually simply fails to send. The wallet's built-in validation catches the format mismatch, and no funds move at all. This is the most frequent outcome, and it means the mistake many beginners fear rarely actually happens the way they picture it.
        </P>

        <H2 id="real-risk">3. Where the Real Risk Actually Hides</H2>
        <P>
          The genuine risk isn't a raw send between two completely different address formats — wallets are generally good at blocking that outright. The real risk shows up in two more subtle situations:
        </P>
        <ul className="list-disc pl-lg mb-md space-y-sm text-on-surface font-body-lg text-body-lg leading-relaxed marker:text-secondary">
          <li>
            <strong>Exchange deposit mix-ups.</strong> If you're depositing to an exchange and select the wrong network for a supported asset (for example, choosing an unsupported or mismatched network for a deposit that expects a specific one), funds can arrive at an address that isn't correctly credited to your account. This is a network-selection error, not a Bitcoin-to-Ethereum address error, but it's the scenario that actually causes losses in practice.
          </li>
          <li>
            <strong>Sending to a valid address you don't control.</strong> If you send crypto to an address that's technically valid for that network but belongs to someone else — a typo that happens to form another real address, for instance — the transaction succeeds and is <Link to="/bitcoin/how-to-send-bitcoin-safely" className="text-secondary hover:underline">irreversible</Link>, regardless of which blockchain is involved.
          </li>
        </ul>
        <P>
          In both cases, the danger isn't the Bitcoin/Ethereum format mismatch — it's a different, more subtle kind of address or network error.
        </P>

        <H2 id="suspect-wrong-network">4. What to Do If You Suspect a Wrong-Network Send</H2>
        <ul className="list-disc pl-lg mb-md space-y-sm text-on-surface font-body-lg text-body-lg leading-relaxed marker:text-secondary">
          <li>
            <strong>If the transaction never went through:</strong> Nothing was lost. Double-check the address format and, importantly, <Link to="/security/how-to-avoid-crypto-phishing-scams" className="text-secondary hover:underline">verify the correct network</Link> before retrying.
          </li>
          <li>
            <strong>If you deposited to an exchange on the wrong network:</strong> Contact the exchange's support promptly with your transaction details. Some exchanges can recover mismatched-network deposits, sometimes for a fee, but recovery is never guaranteed — acting quickly gives you the best chance.
          </li>
          <li>
            <strong>If funds went to a valid address you don't control:</strong> Treat this the same as any other wrong-address send — it's very likely unrecoverable, since blockchain transactions can't be reversed.
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg border-l-4 border-l-[#0F9D58] bg-surface-container-low border border-y-outline-variant border-r-outline-variant">
          <h2 id="key-takeaways" className="font-headline-sm text-headline-sm text-primary mb-sm">
            5. Key Takeaways
          </h2>
          <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>Bitcoin and Ethereum addresses use genuinely different formats, and most wallets validate this before allowing a send.</li>
            <li>Directly sending native Bitcoin to a 0x-format Ethereum address usually fails outright rather than resulting in lost funds.</li>
            <li>The real risk is elsewhere: wrong-network exchange deposits and sends to valid-but-unintended addresses.</li>
            <li>If a send fails due to format mismatch, nothing is lost — but always verify the correct network before retrying.</li>
          </ul>
        </div>
        
        <AdSlot id="bottom" />

        <H2 id="faq">6. Frequently Asked Questions</H2>
        <div className="space-y-sm">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-outline-variant bg-surface-container-lowest"
            >
              <summary className="flex cursor-pointer items-center justify-between p-lg font-headline-sm text-headline-sm text-primary group-hover:text-secondary">
                {faq.q}
                <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-lg pb-lg pt-0">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be considered financial or investment advice. Wallet and exchange behavior can vary by provider; always verify network and address details directly with your specific platform before sending funds.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
