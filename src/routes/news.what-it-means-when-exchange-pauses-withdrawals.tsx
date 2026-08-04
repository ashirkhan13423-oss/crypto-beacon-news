import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/news-paused-withdrawals.svg";
import { Plus } from "lucide-react";

const URL = "https://crypto-beacon-news.vercel.app/news/what-it-means-when-exchange-pauses-withdrawals";
const TITLE = "What Does It Mean When an Exchange Pauses Withdrawals? | CryptoBeacon";
const DESC =
  "Your crypto exchange paused withdrawals — is that normal or a red flag? A clear framework for telling routine maintenance from a genuine warning sign.";
const PUBLISHED = "2026-08-04";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is a withdrawal pause always a bad sign?",
    a: "No — most are routine, short, asset-specific, and clearly explained. The combination of platform-wide scope, extended duration, and vague communication is what should raise concern, not a pause alone.",
  },
  {
    q: "What should I do if my exchange withdrawal is frozen?",
    a: "Check the platform's official status page or announcement channel first, note whether it's affecting one asset or everything, and give it a reasonable window based on what's been communicated before assuming the worst.",
  },
  {
    q: "Does a withdrawal pause affect crypto in my personal wallet?",
    a: "No — a withdrawal pause is a custodial platform issue. Crypto held in a wallet where you control the private keys is entirely unaffected by any exchange's operational status.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Does It Mean When a Crypto Exchange Pauses Withdrawals?",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "CryptoBeacon Editorial" },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://crypto-beacon-news.vercel.app/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://crypto-beacon-news.vercel.app${hero}`,
  inLanguage: "en-US",
  keywords:
    "what does it mean when an exchange pauses withdrawals, crypto exchange withdrawal freeze explained, is it bad when an exchange stops withdrawals, why do exchanges halt withdrawals",
  articleSection: "News",
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
      item: "https://crypto-beacon-news.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "News",
      item: "https://crypto-beacon-news.vercel.app/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What It Means When Exchange Pauses Withdrawals",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/news/what-it-means-when-exchange-pauses-withdrawals")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "what does it mean when an exchange pauses withdrawals, crypto exchange withdrawal freeze explained, is it bad when an exchange stops withdrawals, why do exchanges halt withdrawals",
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
            <li className="text-primary">Exchange Pauses Withdrawals</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Does It Mean When a Crypto Exchange Pauses Withdrawals?
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>August 4, 2026</time>
          <span aria-hidden>·</span>
          <span>4 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing a paused crypto withdrawal process"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Seeing a withdrawal button greyed out — or a banner saying withdrawals are "temporarily paused" — is unsettling the first time it happens. Most of the time, it's routine. Occasionally, it's a genuine warning sign. The difference matters, and it's usually possible to tell them apart.
        </P>
        <P>
          This article is educational and doesn't reference any specific company or incident. It isn't financial advice.
        </P>

        <AdUnit />

        <H2 id="why-happens">Why Withdrawal Pauses Happen</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Network congestion or maintenance.</strong> Blockchains occasionally get busy, or an exchange performs routine maintenance on a specific asset's withdrawal system. This typically affects one asset at a time and resolves within a defined, short window.
          </li>
          <li>
            <strong>Security holds.</strong> Unusual login activity or account behavior can trigger an automatic, temporary hold as a protective measure — this is about protecting the individual account, not a platform-wide issue.
          </li>
          <li>
            <strong>Regulatory or compliance reviews.</strong> Identity verification updates or compliance checks can pause withdrawals for individual accounts until resolved.
          </li>
          <li>
            <strong>Genuine financial distress.</strong> Less commonly, a platform-wide, indefinite pause across many assets can reflect serious underlying problems with the platform itself.
          </li>
        </ul>

        <H2 id="routine-vs-warning">Routine Pause vs. Genuine Warning Sign</H2>
        
        <div className="overflow-x-auto my-lg rounded-xl border border-outline-variant shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#0F9D58] text-white">
                <th className="p-md font-label-caps text-label-caps font-semibold">Signal</th>
                <th className="p-md font-label-caps text-label-caps font-semibold">Routine</th>
                <th className="p-md font-label-caps text-label-caps font-semibold">Warning Sign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
              <tr>
                <td className="p-md font-body-md text-body-md font-semibold text-primary align-top border-r border-outline-variant">Scope</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top border-r border-outline-variant">One asset or one account</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top">Many assets, platform-wide</td>
              </tr>
              <tr>
                <td className="p-md font-body-md text-body-md font-semibold text-primary align-top border-r border-outline-variant">Duration</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top border-r border-outline-variant">Short, defined window</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top">Extended or "until further notice"</td>
              </tr>
              <tr>
                <td className="p-md font-body-md text-body-md font-semibold text-primary align-top border-r border-outline-variant">Communication</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top border-r border-outline-variant">Clear, specific reason given</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top">Vague, or the explanation keeps changing</td>
              </tr>
              <tr>
                <td className="p-md font-body-md text-body-md font-semibold text-primary align-top border-r border-outline-variant">Deposits</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top border-r border-outline-variant">Deposits and withdrawals often both affected equally, or deposits unaffected while a specific asset's withdrawal is paused for maintenance</td>
                <td className="p-md font-body-md text-body-md text-on-surface-variant align-top">Deposits still accepted while withdrawals stay frozen for an extended period</td>
              </tr>
            </tbody>
          </table>
        </div>

        <P>
          No single signal proves anything on its own — it's the combination and duration that matters most.
        </P>

        <AdUnit />

        <H2 id="what-to-do">What to Do If You See a Withdrawal Pause</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Check the platform's official status page or announcement first</strong>, rather than relying on social media speculation.
          </li>
          <li>
            <strong>Note whether the pause is asset-specific or platform-wide.</strong> A single paused asset with a clear technical reason is a very different situation than an unexplained, all-assets freeze.
          </li>
          <li>
            <strong>Give it a reasonable, defined window before assuming the worst</strong> — most pauses genuinely resolve within the announced timeframe.
          </li>
          <li>
            <strong>If the pause extends well beyond its stated window, or the explanation keeps shifting, treat that as a signal to reduce your exposure</strong> to that platform going forward, even if funds do eventually become accessible again.
          </li>
        </ul>

        <H2 id="self-custody">Why This Connects to Self-Custody</H2>
        <P>
          This is exactly the kind of scenario the "
          <Link to="/guides/exchange-or-personal-wallet-crypto-storage" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">
            exchange vs. personal wallet
          </Link>
          " decision is really about: a withdrawal pause only affects funds you don't directly control. Crypto held in a personal wallet, where you hold the{" "}
          <Link to="/guides/not-your-keys-not-your-coins-meaning" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">
            private keys
          </Link>
          , is entirely unaffected by any individual platform's operational issues — for better or worse, that's the trade-off self-custody involves.
        </P>

        <H2 id="takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Most withdrawal pauses are routine — asset-specific, short, and clearly explained.</li>
            <li>The warning signs to watch for are scope (platform-wide), duration (extended or open-ended), and communication (vague or shifting explanations).</li>
            <li>Checking a platform's official status page is more reliable than reacting to social media speculation in the moment.</li>
            <li>This scenario only affects custodial holdings — it's a direct, practical illustration of why the exchange-vs-wallet custody decision matters.</li>
          </ul>
        </div>

        <AdUnit />

        <H2 id="faq">Frequently Asked Questions</H2>
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
            This article is for informational and educational purposes only and does not reference any specific company, platform, or incident. It isn't financial advice — always consult a platform's official communications for guidance on your specific situation.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/exchange-or-personal-wallet-crypto-storage"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Exchange vs. Personal Wallet
              </h3>
            </Link>
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Not Your Keys, Not Your Coins
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
