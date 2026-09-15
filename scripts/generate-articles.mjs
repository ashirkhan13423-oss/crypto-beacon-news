import fs from 'fs';
import path from 'path';

const PUBLISHED = "2026-09-12";

const articles = [
  {
    category: "Guides",
    slug: "what-is-staking-in-crypto",
    title: "What is Staking in Crypto?",
    desc: "A beginner-friendly guide to understanding cryptocurrency staking, how it secures networks, and the risks involved.",
    image: "guides-staking.jpg",
    links: [
      { url: "/ethereum/what-is-ethereum-staking", text: "What is Ethereum Staking" }
    ],
    relatedReading: [
      { url: "/ethereum/what-is-ethereum-staking", label: "Ethereum", title: "Ethereum Staking" },
      { url: "/guides/coin-vs-token-difference", label: "Guides", title: "Coin vs Token" },
      { url: "/guides/what-is-a-smart-contract-explained", label: "Guides", title: "Smart Contract Explained" }
    ],
    faqs: [
      { q: "Is staking risk-free?", a: "No, staking carries risks like slashing penalties, lock-up periods, and smart contract vulnerabilities." },
      { q: "Can I stake Bitcoin?", a: "Bitcoin uses Proof-of-Work and cannot be staked in the traditional sense, though some DeFi platforms offer yield on wrapped Bitcoin." }
    ],
    takeaways: [
      "Staking allows you to earn rewards by participating in network security.",
      "It is only available on Proof-of-Stake blockchains like Ethereum or Solana.",
      "Always consider lock-up periods before committing your assets."
    ],
    bodySections: [
      {
        heading: "Understanding Staking",
        paragraphs: [
          "Staking is the process of actively participating in transaction validation on a Proof-of-Stake (PoS) blockchain. By locking up your funds, you help secure the network.",
          "In return for this service, the network rewards you with additional cryptocurrency. It is often compared to earning interest in a traditional bank account, but the underlying mechanics are vastly different."
        ]
      },
      {
        heading: "The Risks Involved",
        paragraphs: [
          "While the yields can be attractive, staking is not without risk. If the validator you delegate your tokens to acts maliciously or goes offline, you could face 'slashing', meaning a portion of your staked funds is destroyed.",
          "Additionally, many networks enforce a lock-up period, meaning you cannot immediately withdraw and sell your tokens during a market crash."
        ]
      }
    ]
  },
  {
    category: "News",
    slug: "crypto-regulation-updates-2026",
    title: "Global Crypto Regulation Updates 2026",
    desc: "An overview of the latest cryptocurrency regulatory frameworks being adopted around the world in 2026.",
    image: "news-regulation.jpg",
    links: [
      { url: "/news/why-are-crypto-atms-everywhere", text: "Why Are Crypto ATMs Everywhere?" }
    ],
    relatedReading: [
      { url: "/news/why-are-crypto-atms-everywhere", label: "News", title: "Crypto ATMs Everywhere" },
      { url: "/security/what-is-a-crypto-atm-are-they-safe", label: "Security", title: "Crypto ATM Safety" },
      { url: "/guides/coin-vs-token-difference", label: "Guides", title: "Coin vs Token" }
    ],
    faqs: [
      { q: "What is MiCA?", a: "MiCA stands for Markets in Crypto-Assets, a comprehensive regulatory framework established by the European Union to govern digital assets." },
      { q: "Are stablecoins being regulated?", a: "Yes, stablecoins are a primary focus for regulators globally to ensure they are fully backed by fiat reserves and maintain their peg." }
    ],
    takeaways: [
      "Regulatory clarity is increasing globally, with major economies establishing firm frameworks.",
      "Stablecoin issuers are facing the strictest new compliance rules.",
      "Clear regulations may pave the way for increased institutional adoption."
    ],
    bodySections: [
      {
        heading: "The Shift in Regulatory Tone",
        paragraphs: [
          "Throughout 2026, governments have shifted their approach to cryptocurrency from outright hostility to structured regulation. This change is driven by the undeniable growth of decentralized finance and the need to protect retail investors.",
          "Agencies worldwide are now collaborating to create unified standards that prevent regulatory arbitrage while fostering technological innovation."
        ]
      },
      {
        heading: "Impact on DeFi",
        paragraphs: [
          "Decentralized Finance (DeFi) presents a unique challenge for regulators because there is no central entity to hold accountable. Recent frameworks have attempted to classify certain DeFi interfaces as brokers.",
          "The debate continues on how to effectively regulate open-source code without stifling the fundamental ethos of decentralization."
        ]
      }
    ]
  }
];

function generateContent(article) {
  let html = '';
  
  if (article.bodySections && article.bodySections.length > 0) {
    html += `
        <P>Here are some key resources to further your understanding:
          ${article.links.map(link => "<Link to='" + link.url + "' className='text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]'>" + link.text + "</Link>").join(', ')}.
        </P>
    `;

    article.bodySections.forEach((section, index) => {
      html += `\n        <H2 id="${section.heading.toLowerCase().replace(/\\s+/g, '-')}">${section.heading}</H2>`;
      section.paragraphs.forEach(p => {
        html += `\n        <P>${p}</P>`;
      });

      if (index === 0 && article.takeaways) {
        html += `
        
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            ${article.takeaways.map(t => `<li>${t}</li>`).join('\n            ')}
          </ul>
        </div>
        `;
      }
    });
  }
  
  return html;
}

function generateFileContent(article) {
  const url = `https://www.cryptobeacon.site/${article.category.toLowerCase()}/${article.slug}`;
  
  const faqsArrayString = JSON.stringify(article.faqs || [], null, 2).replace(/"([^"]+)":/g, '$1:');
  
  return `import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/${article.image}";
import { Plus } from "lucide-react";
import { AdUnit } from "@/components/AdUnit";

const URL = "${url}";
const TITLE = "${article.title} | CryptoBeacon";
const DESC = "${article.desc}";
const PUBLISHED = "${PUBLISHED}";

const faqs: { q: string; a: string }[] = ${faqsArrayString};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${article.title}",
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
  image: \`https://www.cryptobeacon.site\${hero}\`,
  inLanguage: "en-US",
  articleSection: "${article.category}",
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
      name: "${article.category}",
      item: "https://www.cryptobeacon.site/${article.category.toLowerCase()}",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "${article.title}",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/${article.category.toLowerCase()}/${article.slug}")({
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
      { property: "article:section", content: "${article.category}" },
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
              <Link to="/${article.category.toLowerCase()}" className="hover:text-secondary">
                ${article.category}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">${article.title}</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          ${article.category}
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          ${article.title}
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="${article.title}"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        
        <div className="text-center text-xs text-gray-400 mb-4">Advertisement</div>
        <AdUnit />

        ${generateContent(article)}

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
            ${article.relatedReading.map(r => `<Link
              to="${r.url}"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">${r.label}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                ${r.title}
              </h3>
            </Link>`).join('\n            ')}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
`;
}

articles.forEach(article => {
  const filePath = path.join(process.cwd(), 'src', 'routes', `${article.category.toLowerCase()}.${article.slug}.tsx`);
  fs.writeFileSync(filePath, generateFileContent(article));
  console.log(`Created ${filePath}`);
});

