import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/security-crypto-atm.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/what-is-a-crypto-atm-are-they-safe";
const TITLE = "What is a Crypto ATM and Are They Safe? | CryptoBeacon";
const DESC = "A comprehensive guide to understanding crypto ATMs, how they work, and essential security tips to keep your funds safe when using them.";
const PUBLISHED = "2026-09-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "Are Crypto ATMs physically safe to use?",
    a: "Yes, the machines themselves are generally secure and run by legitimate businesses. The physical danger is no different from using a standard cash ATM.",
  },
  {
    q: "What is the biggest risk of using one?",
    a: "The biggest risk is social engineering. Scammers often trick victims over the phone into depositing cash into a Crypto ATM and sending it to the scammer's wallet.",
  },
  {
    q: "Are they regulated?",
    a: "Yes. In the US, operators must register with FinCEN as Money Services Businesses and comply with Anti-Money Laundering (AML) laws.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is a Crypto ATM and Are They Safe?",
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
  articleSection: "Security",
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
      name: "Security",
      item: "https://www.cryptobeacon.site/security",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What is a Crypto ATM and Are They Safe?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/security/what-is-a-crypto-atm-are-they-safe")({
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
      { property: "article:section", content: "Security" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/security/what-is-a-crypto-atm-are-they-safe" }],
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
              <Link to="/security" className="hover:text-secondary">
                Security
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What is a Crypto ATM and Are They Safe?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is a Crypto ATM and Are They Safe?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="What is a Crypto ATM and Are They Safe?"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

<P>Crypto ATMs are springing up in convenience stores and malls worldwide, providing a quick way to convert cash into Bitcoin. While they offer unparalleled convenience for the underbanked, many users wonder: <strong>What is a crypto ATM, and are they actually safe to use?</strong></P>

<H2 id="how-they-work">How Crypto ATMs Work</H2>

<P>Unlike a traditional ATM that dispenses cash from a bank account, a Crypto ATM takes physical cash and converts it into cryptocurrency. You walk up to the machine, scan a QR code representing your digital wallet address, insert cash, and the machine sends the equivalent amount of Bitcoin (minus a hefty fee) to your wallet.</P>

<P>From a technical standpoint, the machines are safe. They are operated by registered companies that purchase Bitcoin in bulk and resell it to consumers. When you use one, you are genuinely receiving the cryptocurrency you paid for.</P>

<H2 id="the-real-dangers">The Real Dangers: Scams and Fraud</H2>

<P>The danger of Crypto ATMs lies not in the machines themselves, but in how scammers use them. Because transactions are irreversible, scammers love Crypto ATMs. A common tactic involves a fraudster posing as an IRS agent, utility company, or tech support, telling the victim they owe immediate payment to avoid arrest or service shutoff.</P>

<P>The scammer directs the panicked victim to withdraw cash, drive to the nearest Crypto ATM, and scan a QR code provided by the scammer. Once the cash is inserted, the Bitcoin is sent directly to the scammer's wallet, and the money is gone forever.</P>

<div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Crypto ATMs are technically safe and operated by legitimate businesses, but they charge very high fees.</li>
            <li>They are a favorite tool for scammers due to the irreversibility of blockchain transactions.</li>
            <li>Never use a Crypto ATM to send money to someone who contacted you over the phone demanding payment.</li>
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
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Avoid Phishing Scams
              </h3>
            </Link>\n            <Link
              to="/news/why-are-crypto-atms-everywhere"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Crypto ATMs Everywhere
              </h3>
            </Link>\n            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Store Seed Phrase Safely
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
