import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-wallets-explained";
const TITLE = "Ethereum Wallets Explained: EOAs, MetaMask & Hardware Wallets | CryptoBeacon";
const DESC =
  "What is an Ethereum wallet? Learn about EOAs vs contract wallets, how MetaMask works, using Ledger with Ethereum, seed phrases on ETH, and how to stay secure.";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "Is an Ethereum wallet different from a Bitcoin wallet?", a: "They use different key derivation paths (BIP-44 coin type 60 for Ethereum vs 0 for Bitcoin) but the underlying cryptography (secp256k1) is the same. Many HD wallets (like those using a 24-word seed phrase) can generate both Bitcoin and Ethereum wallets from the same seed, using different derivation paths." },
  { q: "What is MetaMask?", a: "MetaMask is the most popular Ethereum browser wallet, available as a browser extension and mobile app. It stores your private keys locally (encrypted with your password) and connects to dApps, signs transactions, and manages multiple Ethereum accounts. It does not hold your keys on any server." },
  { q: "Can I use my Bitcoin seed phrase with an Ethereum wallet?", a: "Technically possible (same BIP-39 standard) but not recommended. Using the same seed phrase for both Bitcoin and Ethereum wallets increases risk — if the seed is compromised, funds on both networks are exposed. Best practice is to use separate seed phrases for separate wallets." },
  { q: "What is a contract wallet?", a: "A contract wallet (or smart contract wallet) is controlled by smart contract code rather than a private key directly. Examples include Safe (formerly Gnosis Safe) and account abstraction wallets. They can support features like multi-signature authorisation, spending limits, and social recovery." },
];




export const Route = createFileRoute("/ethereum/ethereum-wallets-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/ethereum-wallets-explained', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Ethereum Wallets Explained: EOAs, MetaMask & Hardware Wallets | CryptoBeacon", description: "What is an Ethereum wallet? Learn about EOAs vs contract wallets, how MetaMask works, using Ledger with Ethereum, seed phrases on ETH, and how to stay secure.", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/ethereum/ethereum-wallets-explained", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "Ethereum Wallets Explained: EOAs, MetaMask & Hardware Wallets | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/ethereum-wallets-explained" }
      ])) }
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
        <article>
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
          EOAs vs contract <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallets</Link>, MetaMask, hardware wallets with Ethereum, <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrases</Link>, and how to stay secure — everything you need to hold ETH safely.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

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
        <P>MetaMask is a browser extension and mobile app that creates and manages Ethereum EOA wallets. It generates a 12-word seed phrase on first setup, derives your <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private key</Link> locally, encrypts it with your password, and stores the encrypted version on your device.</P>
        <P>When you connect MetaMask to a dApp, the website can request transaction signatures. MetaMask displays the transaction details and you approve or reject. <strong>MetaMask never sends your private key to any server.</strong> Your keys are always local.</P>
        <P>Security note: MetaMask is a hot wallet — it runs in a browser or on a phone with internet access. For significant ETH holdings, a hardware wallet paired with MetaMask is the standard security upgrade.</P>

        <H2 id="hardware-wallets">Hardware wallets with Ethereum</H2>
        <P>Hardware wallets like Ledger and Trezor store your Ethereum private keys on a dedicated offline device. When signing a transaction, the signing happens on the device — the private key never touches your computer or the internet.</P>
        <P>You can connect a Ledger or Trezor to MetaMask as the signing backend. This gives you the convenience of MetaMask's interface with the security of hardware key storage. Your Ethereum address (derived from the hardware wallet's seed phrase) appears in MetaMask normally, but every transaction requires physical confirmation on the device.</P>

        <H2 id="seed-phrases">Seed phrases on Ethereum</H2>
        <P>Ethereum wallets use the same BIP-39 seed phrase standard as Bitcoin wallets. Your 12 or 24-word phrase generates a master key, from which the wallet derives your Ethereum private key (and any other keys for other <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchains</Link>) using BIP-44 derivation paths.</P>
        <P>The derivation path for Ethereum is <code className="bg-surface-container px-xs py-xs rounded text-sm font-mono">m/44'/60'/0'/0/0</code>. This is why the same seed phrase generates a different address for Bitcoin (coin type 0) and Ethereum (coin type 60).</P>
        <P>For seed phrase security: <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary underline">How to Store a Seed Phrase Safely →</Link></P>

        <H2 id="approvals">A critical Ethereum wallet risk: token approvals</H2>
        <P>Unlike Bitcoin, interacting with Ethereum dApps often requires granting <strong>token approvals</strong> — permissions for a <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contract</Link> to spend tokens from your wallet. Malicious or poorly designed contracts can exploit unlimited approvals to drain your wallet.</P>
        <P>Best practices: use limited approvals where possible, and regularly review and revoke unnecessary approvals. Read: <Link to="/security/how-to-revoke-smart-contract-approvals" className="text-secondary underline">How to Revoke Smart Contract Approvals →</Link></P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
