import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { AdUnit } from "@/components/AdUnit";
import hero from "@/assets/guides-wallet-address.png";
import { Plus, Copy, QrCode, ShieldCheck } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-crypto-wallet-address";
const TITLE =
  "What Is a Crypto Wallet Address? How It Works and How to Use It Safely | CryptoBeacon";
const DESC =
  "A plain-language guide to what a crypto wallet address is, how it's created, why it's safe to share, and the common mistakes that lead to lost funds.";
const PUBLISHED = "2026-08-06";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is it safe to share your crypto wallet address?",
    a: "Yes — sharing your address is how you receive funds. It's analogous to sharing a bank account number for incoming transfers. You cannot spend funds or reveal your private key by sharing your address.",
  },
  {
    q: "Can two people have the same wallet address?",
    a: "The probability is so astronomically low that it's considered impossible in practice. Addresses are derived from cryptographic keys with an enormous address space — accidental collision has never occurred.",
  },
  {
    q: "Why does my wallet generate a new address for every transaction?",
    a: "Reusing addresses makes it easier to link your transaction history to a single identity. Many modern wallets automatically generate a fresh address for each receive to improve privacy, while still being able to access funds received at any previous address.",
  },
  {
    q: "What happens if I send crypto to the wrong address?",
    a: "If the address is valid on that network, the transaction succeeds and is generally irreversible. Always verify the full address before confirming — a single character error sends funds to a different address.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Is a Crypto Wallet Address? How It Works and How to Use It Safely",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Ashir",
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
    "what is a crypto wallet address, how does a cryptocurrency address work, is it safe to share crypto address, crypto wallet address explained, how to use crypto address safely",
  articleSection: "Guides",
  wordCount: 900,
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
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Is a Crypto Wallet Address?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/what-is-a-crypto-wallet-address")({
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

function AddressAnatomyDiagram() {
  return (
    <figure className="my-xl">
      <div className="rounded-xl bg-[#0A0B0D] p-lg overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Bitcoin example */}
          <div className="mb-lg">
            <p className="font-label-caps text-[11px] uppercase tracking-widest text-[#F7931A] mb-sm">
              Bitcoin Address Example
            </p>
            <div className="rounded-lg bg-[#1A1C23] border border-[#F7931A]/30 p-md font-mono text-sm text-white break-all">
              bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
            </div>
            <p className="text-xs text-[#9CA3AF] mt-xs">
              Starts with <strong className="text-[#F7931A]">bc1</strong> (native SegWit format) ·
              42 characters
            </p>
          </div>
          {/* Ethereum example */}
          <div>
            <p className="font-label-caps text-[11px] uppercase tracking-widest text-[#2563EB] mb-sm">
              Ethereum Address Example
            </p>
            <div className="rounded-lg bg-[#1A1C23] border border-[#2563EB]/30 p-md font-mono text-sm text-white break-all">
              0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            </div>
            <p className="text-xs text-[#9CA3AF] mt-xs">
              Always starts with <strong className="text-[#2563EB]">0x</strong> · 42 characters
              total
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-sm text-center font-body-md text-body-md text-on-surface-variant italic">
        Bitcoin and Ethereum addresses have distinct formats — always check you're using the right
        network for the address type.
      </figcaption>
    </figure>
  );
}

const safetyTips = [
  {
    icon: <Copy />,
    title: "Always Copy, Never Type",
    body: "Addresses are long and a single wrong character sends funds to a different address. Copy directly from the source rather than typing manually.",
  },
  {
    icon: <ShieldCheck />,
    title: "Verify the Full Address",
    body: "Some malware replaces a copied address before you paste it. After pasting, compare the full address against the original — not just the first and last few characters.",
  },
  {
    icon: <QrCode />,
    title: "Use QR Codes for In-Person Sends",
    body: "Scanning a QR code eliminates copy-paste errors entirely and is the safest method for in-person transactions where the recipient can show you their address directly.",
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
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is a Crypto Wallet Address?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is a Crypto Wallet Address? How It Works and How to Use It Safely
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 6, 2026</time>}
          readTime="5 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high" src={hero}
            alt="Illustration of a cryptographic blockchain wallet address with QR code and network nodes"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </figure>

        <P>
          A crypto wallet address is the string of letters and numbers you share with someone when
          you want to receive cryptocurrency. It looks intimidating at first glance, but
          understanding what it is — and what it isn't — is one of the most useful things you can
          know as a crypto user.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-address-is">1. What a Wallet Address Actually Is</H2>
        <P>
          A cryptocurrency address is a unique identifier derived from your wallet's public key — a
          cryptographic string that tells the network where to direct incoming funds. Think of it
          like an account number you can share freely: anyone can send funds to it, but only the
          holder of the corresponding private key can authorise spending from it.
        </P>
        <P>
          Unlike a bank account number, a crypto address is generated mathematically from the
          private key — no central authority assigns it. This means you can generate as many
          addresses as you need, any time, without anyone's permission.
        </P>

        <AdUnit />

        <H2 id="how-created">2. How an Address Is Created</H2>
        <P>
          When a wallet is created, it generates a private key — a large random number. From that
          private key, a public key is derived using elliptic curve cryptography. The address is
          then produced by applying a hash function (and sometimes additional formatting steps) to
          the public key. The process is one-way: you can always go from private key → public key →
          address, but you cannot reverse it to work backwards from an address to a private key.
        </P>
        <P>
          This one-way relationship is the foundation of why sharing your address is safe and losing
          your private key is unrecoverable — they're mathematically linked but one cannot be
          derived from the other.
        </P>

        <H2 id="address-formats">3. Address Formats by Network</H2>
        <P>
          Different blockchains use different address formats. The format is not just cosmetic —
          sending to an address on the wrong network is a common source of lost funds.
        </P>
        <AddressAnatomyDiagram />
        <P>
          For more on what happens when address formats don't match, see our article on{" "}
          <Link
            to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            sending Bitcoin to an Ethereum address
          </Link>
          .
        </P>

        <H2 id="safe-to-share">4. Is It Safe to Share Your Address?</H2>
        <P>
          Yes — sharing your address is how you receive crypto. It's the equivalent of giving
          someone your bank account number for an incoming transfer. Your address does not give
          anyone the ability to spend your funds; only your private key can do that.
        </P>
        <P>
          What sharing an address <em>does</em> reveal is your transaction history at that address,
          since blockchain transactions are public. This is a privacy consideration, not a security
          one — which is why many wallets generate a new address for each receive.
        </P>

        <H2 id="how-to-use-safely">5. How to Use an Address Safely</H2>
        <P>
          The most common source of address-related fund loss isn't sharing an address — it's
          entering or verifying it incorrectly when sending.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-lg">
          {safetyTips.map((tip) => (
            <div
              key={tip.title}
              className="p-lg rounded-lg border border-outline-variant bg-surface-container-lowest flex flex-col gap-sm"
            >
              <div
                aria-hidden
                className="w-10 h-10 rounded-lg bg-[#0F9D58]/10 border border-[#0F9D58]/20 flex items-center justify-center text-[#0F9D58] shrink-0 [&>svg]:w-5 [&>svg]:h-5"
              >
                {tip.icon}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">{tip.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {tip.body}
              </p>
            </div>
          ))}
        </div>

        <P>
          For a full checklist of safe send practices, see{" "}
          <Link
            to="/bitcoin/how-to-send-bitcoin-safely"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            How to Send Bitcoin Safely
          </Link>
          .
        </P>

        <div className="my-xl p-lg rounded-xl border border-outline-variant bg-surface-container-low shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-md font-semibold">Address Anatomy: Quick Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md font-body-md text-body-md text-on-surface">
            <div>
              <h3 className="font-bold text-secondary mb-xs">What it is</h3>
              <ul className="list-disc pl-md space-y-xs leading-relaxed">
                <li>A publicly shareable identifier derived from your private key</li>
                <li>Different blockchains use different address formats</li>
                <li>Safe to share — cannot be used to spend your funds</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-secondary mb-xs">What to watch for</h3>
              <ul className="list-disc pl-md space-y-xs leading-relaxed">
                <li>Address errors when sending are generally irreversible</li>
                <li>Always verify the full address before confirming</li>
                <li>Most modern wallets generate new addresses automatically for privacy</li>
              </ul>
            </div>
          </div>
        </div>

        <AdUnit />

        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="space-y-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">{f.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          A crypto address is one of the first things you encounter and one of the easiest to
          misunderstand. It's safe to share, impossible to guess from a private key, and the only
          thing that determines where funds go. The main risk isn't knowing your address — it's
          entering someone else's incorrectly when sending. Treating address verification as a
          non-negotiable step every time you send is the single most effective habit you can build.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://en.bitcoin.it/wiki/Address"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Wiki — Address (how Bitcoin addresses are generated and formatted)
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/developers/docs/accounts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Accounts (how Ethereum addresses are derived from keys)
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. Always verify addresses directly and independently before
            sending funds.
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
                How to Send Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Can You Send Bitcoin to an Ethereum Address?
              </h3>
            </Link>
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                "Not Your Keys, Not Your Coins" — What It Means
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

