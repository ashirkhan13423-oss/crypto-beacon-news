import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/hardware-wallet-comparison.jpg";
import { Check, X, ShieldAlert } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/hardware-wallet-comparison-guide";
const TITLE = "Hardware Wallet Comparison Guide: Ledger, Trezor & More | CryptoBeacon";
const DESC =
  "A comprehensive comparison of the top cryptocurrency hardware wallets on the market, helping you choose the right device for self-custody and maximum security.";
const PUBLISHED = "2026-08-20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Sarah Jenkins",
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
  keywords:
    "hardware wallet comparison, ledger vs trezor, best cold wallets 2026, cryptocurrency secure storage, self custody devices",
  articleSection: "Guides",
  wordCount: 1450,
  isAccessibleForFree: true,
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
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hardware Wallet Comparison",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/hardware-wallet-comparison-guide")({
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
      { property: "article:section", content: "Guides" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
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

function ComparisonMatrix() {
  return (
    <div className="my-xl rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden">
      <div className="p-md bg-surface-container-low border-b border-outline-variant">
        <h2 className="font-headline-sm text-headline-sm text-primary">Hardware Wallet Quick Compare</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Side-by-side technical specs for the major models.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-body-md text-body-md whitespace-nowrap">
          <thead className="bg-surface-container-low text-on-surface-variant text-[13px] uppercase tracking-wider">
            <tr>
              <th className="px-md py-sm font-medium">Model</th>
              <th className="px-md py-sm font-medium">Secure Element</th>
              <th className="px-md py-sm font-medium">Open Source</th>
              <th className="px-md py-sm font-medium">Screen Type</th>
              <th className="px-md py-sm font-medium">Air-gapped</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            <tr className="hover:bg-surface-container-low/50">
              <td className="px-md py-md text-primary font-medium">Ledger Nano X</td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /></td>
              <td className="px-md py-md"><X className="w-5 h-5 text-error" /></td>
              <td className="px-md py-md">Monochrome OLED</td>
              <td className="px-md py-md"><X className="w-5 h-5 text-error" /> (Bluetooth/USB)</td>
            </tr>
            <tr className="hover:bg-surface-container-low/50">
              <td className="px-md py-md text-primary font-medium">Trezor Safe 3</td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /></td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /></td>
              <td className="px-md py-md">Monochrome OLED</td>
              <td className="px-md py-md"><X className="w-5 h-5 text-error" /> (USB)</td>
            </tr>
            <tr className="hover:bg-surface-container-low/50">
              <td className="px-md py-md text-primary font-medium">Coldcard Q</td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /> (Dual)</td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /> (Source viewable)</td>
              <td className="px-md py-md">Color LCD</td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /> (MicroSD/NFC)</td>
            </tr>
            <tr className="hover:bg-surface-container-low/50">
              <td className="px-md py-md text-primary font-medium">BitBox02</td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /></td>
              <td className="px-md py-md"><Check className="w-5 h-5 text-[#0F9D58]" /></td>
              <td className="px-md py-md">Monochrome OLED</td>
              <td className="px-md py-md"><X className="w-5 h-5 text-error" /> (USB-C)</td>
            </tr>
          </tbody>
        </table>
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
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Hardware Wallet Comparison</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Hardware Wallet Comparison Guide: Ledger, Trezor & More
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Various physical crypto hardware wallets on a sleek dark surface"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          If you plan to hold a significant amount of cryptocurrency for the long term, moving your
          funds off exchanges and into a hardware wallet is the single most important security upgrade
          you can make. But with so many options on the market, choosing the right device can be
          paralyzing.
        </P>
        <P>
          Hardware wallets (often called "cold wallets") all perform the same core function: they
          generate and store your private keys offline, allowing you to sign transactions without ever
          exposing those keys to your internet-connected computer or phone. However, they differ
          wildly in their security architectures, open-source philosophy, and supported assets.
        </P>
        <P>
          In our extensive testing of these devices, the biggest mistake we see users make isn't choosing the "wrong" brand, but failing to physically write down their recovery seed phrase correctly. I once spent three stressful days trying to recover a test wallet simply because I had hastily scribbled down an 'e' that looked like an 'a'. 
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        {/* Layout B: Removed TOC */}

        <H2 id="why-hardware">Why You Need a Hardware Wallet</H2>
        <P>
          When you keep crypto on an exchange, you have an IOU. When you use a software wallet on
          your phone or laptop (a "hot wallet"), you control the keys, but they are vulnerable to
          malware, keyloggers, and clipboard hijackers on that device.
        </P>
        <P>
          A hardware wallet acts as an isolated, single-purpose computer. Even if your laptop is
          completely compromised with malware, the hacker cannot extract the private keys from the
          hardware wallet when you plug it in. The device only sends the cryptographically signed
          transaction back to the computer, keeping the keys safely locked inside its secure element
          chip.
        </P>

        <H2 id="ledger">Ledger: The Industry Standard</H2>
        <P>
          Ledger is the most recognizable name in crypto hardware, with the Nano S Plus and Nano X
          being their flagship devices.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li><strong>Pros:</strong> Massive asset support, excellent companion app (Ledger Live), Bluetooth support (Nano X), and a true Secure Element chip (CC EAL5+ certified).</li>
          <li><strong>Cons:</strong> Closed-source firmware. Ledger relies on "security through obscurity" for parts of its software stack. Past controversies regarding their opt-in "Recover" service also damaged trust with hardcore privacy advocates.</li>
        </ul>
        <P>
          Ledger remains an excellent choice for users who hold a wide variety of altcoins and want
          a polished, consumer-friendly experience.
        </P>

        <H2 id="trezor">Trezor: The Open-Source Pioneer</H2>
        <P>
          Trezor, created by SatoshiLabs, launched the world's first hardware wallet. Their current
          lineup includes the entry-level Safe 3 and the premium touchscreen Model T.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li><strong>Pros:</strong> 100% open-source software and hardware designs. The community can audit every line of code. The new Safe 3 model finally introduces a dedicated Secure Element.</li>
          <li><strong>Cons:</strong> Slightly less altcoin support natively within the Trezor Suite app compared to Ledger (though third-party integrations bridge the gap). Older models (Model One/Model T) lack a secure element, making them theoretically vulnerable to physical extraction if stolen.</li>
        </ul>
        <P>
          Trezor is beloved by transparency advocates who demand verifiable open-source code over
          closed-box security models.
        </P>
        
        <AdUnit />

        <H2 id="coldcard">Coldcard: The Bitcoin Maximalist's Choice</H2>
        <P>
          Made by Coinkite, the Coldcard is built exclusively for Bitcoin. It looks like a cheap
          calculator but is arguably the most secure retail hardware wallet in existence.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li><strong>Pros:</strong> Fully air-gapped operation (you can sign transactions using a MicroSD card without ever plugging it into a PC). Dual secure elements from different manufacturers. Verifiable source code. Physical security features like epoxy-filled casing.</li>
          <li><strong>Cons:</strong> Bitcoin only. High learning curve. Clunky user interface compared to Ledger/Trezor.</li>
        </ul>
        <P>
          If you only hold Bitcoin and are willing to tolerate a steeper learning curve for maximum
          paranoia-grade security, the Coldcard is the gold standard.
        </P>

        <H2 id="bitbox">BitBox02: The Minimalist Middle Ground</H2>
        <P>
          The Swiss-made BitBox02 combines the open-source ethos of Trezor with the hardware
          security of Ledger in an incredibly sleek package.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li><strong>Pros:</strong> Open-source firmware combined with a Secure Element chip. Very simple backup process using an included MicroSD card (no need to write down words manually unless you want to). Excellent companion app.</li>
          <li><strong>Cons:</strong> Touch sensors on the side of the device can take getting used to. Smaller list of supported altcoins.</li>
        </ul>
        <P>
          The BitBox02 is highly recommended for users who want top-tier security without the extreme
          complexity of a Coldcard, and who prefer open-source firmware over Ledger's approach.
        </P>

        {/* Layout B: Matrix replaces Key Takeaways and FAQ */}
        <ComparisonMatrix />

        <H2 id="conclusion">Conclusion</H2>
        <P>
          There is no single "best" hardware wallet — the right choice depends on your technical
          comfort level, whether you demand open-source code, and whether you hold only Bitcoin or a
          diverse portfolio of altcoins. 
        </P>
        <div className="p-md rounded-lg border border-error/30 bg-error/5 my-md flex items-start gap-md">
          <ShieldAlert className="text-error w-6 h-6 shrink-0 mt-xs" />
          <p className="font-body-md text-body-md text-on-surface">
            <strong>Critical Security Rule:</strong> Never buy a hardware wallet from Amazon, eBay, or 
            any third-party reseller. Always buy directly from the manufacturer's official website to 
            prevent supply-chain attacks where devices are tampered with before reaching you.
          </p>
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. The security of a hardware wallet ultimately 
            depends on how safely you store its backup seed phrase. If you lose the seed phrase, no 
            customer support can recover your funds.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                "Not Your Keys, Not Your Coins" Meaning
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-a-bitcoin-wallet"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Bitcoin Wallet?
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
