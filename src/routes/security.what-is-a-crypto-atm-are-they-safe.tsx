import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/security-crypto-atm.jpg";
import { Plus } from "lucide-react";
import { AdUnit } from "@/components/AdUnit";

const URL = "https://www.cryptobeacon.site/security/what-is-a-crypto-atm-are-they-safe";
const TITLE = "What is a Crypto ATM and Are They Safe? | CryptoBeacon";
const DESC = "A comprehensive guide to understanding crypto ATMs, how they work, and essential security tips to keep your funds safe when using them.";
const PUBLISHED = "2026-09-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the most important thing to remember?",
    a: "Always do your own research and prioritize security. Never invest more than you can afford to lose.",
  },
  {
    q: "How can I learn more?",
    a: "Explore the related reading links and continue to educate yourself on the fundamentals of blockchain technology.",
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
        
        <div className="text-center text-xs text-gray-400 mb-4">Advertisement</div>
        <AdUnit />

        
        <P>Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue.</P>
        <P>As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments.</P>
        <P>Here are some key resources to further your understanding:
          <Link to='/security/how-to-avoid-crypto-phishing-scams' className='text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]'>How to Avoid Crypto Phishing Scams</Link>, <Link to='/news/why-are-crypto-atms-everywhere' className='text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]'>Why Are Crypto ATMs Everywhere?</Link>.
        </P>
        
        <H2 id="understanding-the-basics">Understanding the Basics</H2>
        <P> Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.</P>
        <P> Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.</P>
        
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Always prioritize the security of your assets over convenience.</li>
            <li>Understand the underlying technology before participating.</li>
            <li>Stay informed about the latest trends and best practices.</li>
          </ul>
        </div>
        
        <H2 id="technical-considerations">Technical Considerations</H2>
        <P> Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.</P>
        <P> Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.</P>

        <H2 id="future-outlook">Future Outlook</H2>
        <P> Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.</P>
        <P> Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively. Crypto ATMs are physical kiosks that allow users to buy or sell cryptocurrencies using cash or debit cards. While they offer convenience, they also present unique security risks. It is important to verify the machine's operator and ensure you are not falling victim to a scam. Always double-check wallet addresses and be wary of anyone directing you to use a crypto ATM to pay a bill or resolve an issue. Understanding these concepts is crucial for navigating the evolving landscape of digital assets. As the ecosystem matures, the intersection of traditional finance and decentralized technologies continues to create new opportunities and challenges. Participants must remain vigilant, prioritize security, and stay informed about the latest developments. While the core principles remain constant, the specific implementations and best practices are constantly being refined. It is important to approach this space with a long-term perspective and a commitment to ongoing education. The volatility inherent in these markets requires a disciplined approach and a clear understanding of one's own risk tolerance. By building a solid foundation of knowledge, users can better position themselves to participate safely and effectively.</P>
  

        <div className="text-center text-xs text-gray-400 mb-4">Advertisement</div>
        <AdUnit />

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
        
        <div className="text-center text-xs text-gray-400 mb-4 mt-8">Advertisement</div>
        <AdUnit />

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
