import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-wallets-explained";
const TITLE = "Ethereum Wallets Explained: EOAs, MetaMask & Hardware Wallets | CryptoBeacon";
const DESC =
  "What is an Ethereum wallet? Learn about EOAs vs contract wallets, how MetaMask works, using Ledger with Ethereum, seed phrases on ETH, and how to stay secure.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Is an Ethereum wallet different from a Bitcoin wallet?", a: "They use different key derivation paths (BIP-44 coin type 60 for Ethereum vs 0 for Bitcoin) but the underlying cryptography (secp256k1) is the same. Many HD wallets (like those using a 24-word seed phrase) can generate both Bitcoin and Ethereum wallets from the same seed, using different derivation paths." },
  { q: "What is MetaMask?", a: "MetaMask is the most popular Ethereum browser wallet, available as a browser extension and mobile app. It stores your private keys locally (encrypted with your password) and connects to dApps, signs transactions, and manages multiple Ethereum accounts. It does not hold your keys on any server." },
  { q: "Can I use my Bitcoin seed phrase with an Ethereum wallet?", a: "Technically possible (same BIP-39 standard) but not recommended. Using the same seed phrase for both Bitcoin and Ethereum wallets increases risk — if the seed is compromised, funds on both networks are exposed. Best practice is to use separate seed phrases for separate wallets." },
  { q: "What is a contract wallet?", a: "A contract wallet (or smart contract wallet) is controlled by smart contract code rather than a private key directly. Examples include Safe (formerly Gnosis Safe) and account abstraction wallets. They can support features like multi-signature authorisation, spending limits, and social recovery." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ethereum Wallets Explained: EOAs, MetaMask & Hardware Wallets",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "ethereum wallet explained, metamask wallet, ethereum EOA account, contract wallet ethereum, ledger ethereum, ethereum seed phrase, ethereum hardware wallet",
  articleSection: "Ethereum",
  wordCount: 850,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
    { "@type": "ListItem", position: 3, name: "Ethereum Wallets Explained", item: URL },
  ],
};

export const Route = createFileRoute("/ethereum/ethereum-wallets-explained")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Ethereum" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
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
  return <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/ethereum" className="hover:text-secondary">Ethereum</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Ethereum Wallets Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Wallets
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Ethereum Wallets Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          EOAs vs contract wallets, MetaMask, hardware wallets with Ethereum, seed phrases, and how to stay secure — everything you need to hold ETH safely.
        </p>
        <Author />

        <H2 id="eoa-vs-contract">Two types of Ethereum wallets</H2>
        <P>Ethereum has two types of accounts, each functioning as a wallet in different ways:</P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {[
            { title: "Externally Owned Account (EOA)", desc: "The standard wallet type. Controlled by a private key derived from your seed phrase. This is what MetaMask, Ledger, and most wallets create. You sign transactions with your private key. No code attached to the account.", color: "#627EEA" },
            { title: "Contract Wallet (Smart Contract Wallet)", desc: "Controlled by smart contract code. Examples: Safe, Argent, account abstraction wallets (ERC-4337). Can support multi-sig, spending limits, social recovery, and session keys. More flexible but more complex to set up.", color: "#8B5CF6" },
          ].map((t) => (
            <div key={t.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-sm" style={{ color: t.color }}>{t.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <H2 id="metamask">MetaMask: the dominant Ethereum wallet</H2>
        <P>MetaMask is a browser extension and mobile app that creates and manages Ethereum EOA wallets. It generates a 12-word seed phrase on first setup, derives your private key locally, encrypts it with your password, and stores the encrypted version on your device.</P>
        <P>When you connect MetaMask to a dApp, the website can request transaction signatures. MetaMask displays the transaction details and you approve or reject. <strong>MetaMask never sends your private key to any server.</strong> Your keys are always local.</P>
        <P>Security note: MetaMask is a hot wallet — it runs in a browser or on a phone with internet access. For significant ETH holdings, a hardware wallet paired with MetaMask is the standard security upgrade.</P>

        <H2 id="hardware-wallets">Hardware wallets with Ethereum</H2>
        <P>Hardware wallets like Ledger and Trezor store your Ethereum private keys on a dedicated offline device. When signing a transaction, the signing happens on the device — the private key never touches your computer or the internet.</P>
        <P>You can connect a Ledger or Trezor to MetaMask as the signing backend. This gives you the convenience of MetaMask's interface with the security of hardware key storage. Your Ethereum address (derived from the hardware wallet's seed phrase) appears in MetaMask normally, but every transaction requires physical confirmation on the device.</P>

        <H2 id="seed-phrases">Seed phrases on Ethereum</H2>
        <P>Ethereum wallets use the same BIP-39 seed phrase standard as Bitcoin wallets. Your 12 or 24-word phrase generates a master key, from which the wallet derives your Ethereum private key (and any other keys for other blockchains) using BIP-44 derivation paths.</P>
        <P>The derivation path for Ethereum is <code className="bg-surface-container px-xs py-xs rounded text-sm font-mono">m/44'/60'/0'/0/0</code>. This is why the same seed phrase generates a different address for Bitcoin (coin type 0) and Ethereum (coin type 60).</P>
        <P>For seed phrase security: <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary underline">How to Store a Seed Phrase Safely →</Link></P>

        <H2 id="approvals">A critical Ethereum wallet risk: token approvals</H2>
        <P>Unlike Bitcoin, interacting with Ethereum dApps often requires granting <strong>token approvals</strong> — permissions for a smart contract to spend tokens from your wallet. Malicious or poorly designed contracts can exploit unlimited approvals to drain your wallet.</P>
        <P>Best practices: use limited approvals where possible, and regularly review and revoke unnecessary approvals. Read: <Link to="/security/how-to-revoke-smart-contract-approvals" className="text-secondary underline">How to Revoke Smart Contract Approvals →</Link></P>

        <section className="mt-xxl" aria-label="Frequently asked questions">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-lg cursor-pointer list-none">
                  <span className="font-body-lg text-body-lg text-primary font-semibold pr-md">{f.q}</span>
                  <Plus size={18} className="text-secondary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/ethereum/ethereum-complete-beginners-guide" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Ethereum: Complete Guide</h3>
            </Link>
            <Link to="/security/how-to-revoke-smart-contract-approvals" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Revoke Smart Contract Approvals</h3>
            </Link>
            <Link to="/guides/how-to-set-up-metamask-step-by-step" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Set Up MetaMask</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
