import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/news-crypto-regulation.jpg";

const URL = "https://cryptobeaconnews.lovable.app/news/why-governments-regulate-cryptocurrency";
const TITLE = "Why Do Governments Regulate Cryptocurrency? | Crypto Beacon";
const DESC =
  "A plain-language explainer on why governments regulate crypto, the main categories of rules, and what that means for everyday users.";
const PUBLISHED = "2026-07-05";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is cryptocurrency legal?",
    a: "In most countries, yes — owning and trading it is legal, though specific activities (like operating an exchange) are often regulated or licensed.",
  },
  {
    q: "Does regulation make crypto safer?",
    a: "It reduces certain risks (like platform fraud) but doesn't eliminate market or technical risk.",
  },
  {
    q: "Why do rules vary so much between countries?",
    a: "Because crypto doesn't fit cleanly into existing legal categories — different countries apply different existing frameworks to it.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Do Governments Regulate Cryptocurrency?",
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

export const Route = createFileRoute("/news/why-governments-regulate-cryptocurrency")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "why do governments regulate cryptocurrency, crypto regulation explained simply, why is crypto regulated, types of crypto regulation",
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

const reasons: { icon: string; title: string; body: string }[] = [
  {
    icon: "shield_person",
    title: "Consumer Protection",
    body: "Exchanges and wallet providers hold real value on behalf of users. Licensing and disclosure rules exist so a company can't operate unchecked with people's funds, similar to why banks are regulated.",
  },
  {
    icon: "gavel",
    title: "Preventing Illicit Use",
    body: "Anti-money-laundering (AML) and identity-verification (KYC) rules exist because any system that moves value can be misused for fraud or laundering — this isn't unique to crypto, but crypto's speed and reach make it a focus area.",
  },
  {
    icon: "receipt_long",
    title: "Taxation",
    body: "Most jurisdictions treat crypto as property or an asset, meaning gains are typically taxable. Reporting rules exist so tax authorities can track that, the same as with stocks or real estate.",
  },
];

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
            <li className="text-primary">Why Governments Regulate Crypto</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Why Do Governments Regulate Cryptocurrency?
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 5, 2026</time>
          <span aria-hidden>·</span>
          <span>5 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing government oversight of cryptocurrency"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Crypto was built to work without banks or central authorities — so why do governments
          keep passing rules about it? The short answer: regulation isn't really about controlling
          the technology itself. It's about the same three things governments regulate in every
          financial system: protecting consumers, preventing crime, and collecting tax.
        </P>

        <AdSlot id="top" />

        <H2 id="three-core">The Three Core Reasons</H2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-lg">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-lg rounded-lg border border-outline-variant bg-surface-container-lowest"
            >
              <span
                aria-hidden
                className="material-symbols-outlined text-[#0F9D58]"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
              >
                {r.icon}
              </span>
              <h3 className="mt-sm font-headline-sm text-headline-sm text-primary">{r.title}</h3>
            </div>
          ))}
        </div>

        <P>
          <strong>1. Consumer protection.</strong> Exchanges and wallet providers hold real value
          on behalf of users. Licensing and disclosure rules exist so a company can't operate
          unchecked with people's funds, similar to why banks are regulated.
        </P>
        <P>
          <strong>2. Preventing illicit use.</strong> Anti-money-laundering (AML) and{" "}
          <Link
            to="/security/how-to-avoid-crypto-phishing-scams"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            identity verification
          </Link>{" "}
          (KYC) rules exist because any system that moves value can be misused for fraud or
          laundering — this isn't unique to crypto, but crypto's speed and reach make it a focus
          area.
        </P>
        <P>
          <strong>3. Taxation.</strong> Most jurisdictions treat crypto as property or an asset,
          meaning gains are typically taxable. Reporting rules exist so tax authorities can track
          that, the same as with stocks or real estate.
        </P>

        <AdSlot id="mid" />

        <H2 id="why-differ">Why Rules Differ So Much by Country</H2>
        <P>
          Crypto doesn't fit neatly into existing legal categories — depending on how it's used,
          the same token can look like a currency, a commodity, or a security. Different countries
          have leaned on different existing legal frameworks to regulate it, which is why the rules
          can look so inconsistent from one place to the next. This isn't likely to fully resolve
          any time soon, since it reflects a genuine legal ambiguity, not just slow lawmaking.
        </P>

        <H2 id="what-means">What This Means for Everyday Users</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            Identity verification (KYC) on exchanges exists because of these rules, not because a
            platform is being invasive.
          </li>
          <li>
            Reporting crypto gains at tax time is a real, growing obligation in most
            jurisdictions.
          </li>
          <li>
            Regulation doesn't equal endorsement or risk-free status — a licensed platform still
            carries market and technical risk.
          </li>
        </ul>

        <H2 id="takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              Regulation targets the same concerns as any financial system: consumer protection,
              crime prevention, taxation.
            </li>
            <li>
              Inconsistent global rules stem from real legal ambiguity about what crypto is, not
              just slow governments.
            </li>
            <li>Being regulated doesn't mean an asset or platform is risk-free.</li>
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
            This article is educational only and not legal, tax, or financial advice. Regulations
            vary by jurisdiction and change over time — consult a qualified professional for your
            specific situation.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Avoid Crypto Phishing Scams
              </h3>
            </Link>
            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Store Your Seed Phrase Safely
              </h3>
            </Link>
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Send Bitcoin Safely
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
