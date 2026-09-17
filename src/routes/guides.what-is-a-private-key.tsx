import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/guides-private-key.webp";
import { Plus } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-private-key";
const TITLE = "What Is a Private Key in Crypto? A Plain-Language Explainer | CryptoBeacon";
const DESC = "A straightforward explanation of what a cryptocurrency private key is, how it differs from a seed phrase and public address, and why whoever controls it cont...";
const PUBLISHED = "2026-08-29";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "Can I change my private key?",
    a: "No. A private key is mathematically tied to its corresponding public address forever. If you want a new private key, you have to generate a brand new wallet and transfer your funds to the new address.",
  },
  {
    q: "What happens if I lose my private key?",
    a: "If you lose your private key (and you don't have the seed phrase backup), you permanently lose access to the funds associated with it. There is no 'forgot password' button in crypto.",
  },
  {
    q: "Is a private key the same as a seed phrase?",
    a: "No, but they are closely related. A seed phrase (the 12 or 24 words) is a master key that can generate and recover hundreds of individual private keys. Think of the seed phrase as a master password, and a private key as the password for one specific account.",
  },
  {
    q: "Do I need to memorize my private key?",
    a: "No. Private keys are usually handled in the background by your wallet software. You only need to securely store your 12 or 24-word seed phrase.",
  },
];




export const Route = createFileRoute("/guides/what-is-a-private-key")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/what-is-a-private-key', publishedTime: PUBLISHED, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Is a Private Key in Crypto? A Plain-Language Explainer | CryptoBeacon", description: "A straightforward explanation of what a cryptocurrency private key is, how it differs from a seed phrase and public address, and why whoever controls it cont...", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-29", dateModified: "2026-08-29", url: "https://www.cryptobeacon.site/guides/what-is-a-private-key", section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: "What Is a Private Key in Crypto? A Plain-Language Explainer | CryptoBeacon", item: "https://www.cryptobeacon.site/guides/what-is-a-private-key" }
      ])) }
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
        <article>
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
            <li className="text-primary">What Is a Private Key?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#34A853] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is a Private Key in Crypto? A Plain-Language Explainer
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 29, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Glowing golden digital key made of cryptographic symbols opening a dark vault"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          In the physical world, your money is protected by bank vaults, passwords, and legal
          contracts. In cryptocurrency, your money is protected by a single piece of mathematics:
          your <strong><Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private key</Link></strong>.
        </P>
        <P>
          Understanding what a private key is — and how it interacts with public addresses and seed
          phrases — is the first step toward true financial self-sovereignty.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-it">What Is a Private Key?</H2>
        <P>
          A private key is a secret number that allows you to spend your cryptocurrency. It looks like
          a long, random string of alphanumeric characters. For example, a Bitcoin private key might
          look something like this:
        </P>
        <P className="font-mono text-sm bg-surface-container p-sm rounded border border-outline break-all">
          L3W77j24kL1fW14V35vEwM7aJ6tG29fH32pS95hN41rY88dQ91xZ
        </P>
        <P>
          You can think of it as a highly secure password. But unlike a bank password, there is no
          company that can reset it for you if you lose it, and no fraud department that can reverse
          a transaction if someone else gets ahold of it.
        </P>

        <H2 id="how-it-works">How It Works: Signing Transactions</H2>
        <P>
          Your crypto isn't actually "inside" your phone or your hardware <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link>. All cryptocurrency
          lives on the public <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link>. What you actually hold in your wallet is the private key
          that proves ownership over those funds.
        </P>
        <P>
          When you want to send Bitcoin to someone else, you create a transaction message saying
          "Send 1 BTC to Bob." Your wallet software then uses your private key to mathematically{" "}
          <strong>sign</strong> that message.
        </P>
        <P>
          The network sees the signature, verifies that it could only have been created by the
          private key associated with those funds, and approves the transfer — all without ever
          actually revealing the private key to the network.
        </P>

        <H2 id="private-vs-public">Private Key vs. Public Key vs. Address</H2>
        <P>
          Cryptocurrency relies on asymmetric cryptography, which uses pairs of keys.
        </P>
        <div className="border-l-4 border-[#34A853] bg-[#34A853]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Private Key:</strong> The secret password used to sign transactions and spend
              funds. (Never share this).
            </li>
            <li>
              <strong>Public Key:</strong> Mathematically derived from your private key. It's used
              by the network to verify your signature.
            </li>
            <li>
              <strong>Wallet Address:</strong> A shorter, hashed version of your public key. This is
              the "account number" you give to people so they can send you money.
            </li>
          </ul>
        </div>
        <P>
          The math only works in one direction. You can generate a public address from a private key,
          but it is mathematically impossible to guess a private key just by looking at a public
          address.
        </P>

        <H2 id="seed-phrase">Private Keys vs. Seed Phrases</H2>
        <P>
          Managing dozens of long, random alphanumeric strings is difficult for humans. That's why
          modern wallets use a standard called BIP39, which translates your keys into a{" "}
          <strong><Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrase</Link></strong> (usually 12 or 24 English words).
        </P>
        <P>
          The seed phrase acts as a master key. From that one list of words, your wallet can
          derive thousands of individual private keys for Bitcoin, Ethereum, and other networks. When
          we say "secure your private keys," we usually mean "secure your 12-word seed phrase,"
          because it controls all of them.
        </P>

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          <FAQ faqs={faqs} />
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://bitcoin.org/en/glossary/private-key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org Glossary — Private Key
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/en/developers/docs/accounts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Accounts and Keys
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <Disclaimer />
        </div>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
