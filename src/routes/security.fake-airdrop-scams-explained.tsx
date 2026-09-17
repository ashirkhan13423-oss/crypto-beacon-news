import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/fake-airdrop-scams-explained";
const TITLE = "Fake Airdrop Scams Explained: How They Work & How to Stay Safe | CryptoBeacon";
const DESC =
  "How fake crypto airdrop scams work — the approval requests they hide, how to safely verify whether an airdrop is legitimate, and what to do if you've already interacted with one.";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is a crypto airdrop scam?", a: "A fake airdrop scam sends free tokens to your wallet address, then directs you to a website to 'claim' them. The claim process requires you to sign a malicious approval transaction that gives the attacker's contract access to your real tokens or NFTs." },
  { q: "Can simply receiving airdropped tokens harm me?", a: "Receiving tokens passively in your wallet is harmless — tokens cannot steal from you just by being there. The risk occurs only when you interact with those tokens: visiting a claim site, approving transactions, or interacting with a malicious contract." },
  { q: "How do I check if an airdrop is legitimate?", a: "Check the project's official website and social channels for any announcement of an airdrop. Cross-reference on CoinGecko or CoinMarketCap. Search the token contract on Etherscan and check how many addresses received it. A token sent to millions of random wallets with no official announcement is almost certainly a scam." },
  { q: "What should I do if I already visited a fake airdrop site?", a: "If you only visited the site but did not sign any transaction, you are likely unharmed. If you signed a transaction, immediately check your approvals on Etherscan's token approval checker or Revoke.cash and revoke any suspicious approvals. If funds have already been drained, unfortunately they are not recoverable." },
];




export const Route = createFileRoute("/security/fake-airdrop-scams-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/fake-airdrop-scams-explained', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Fake Airdrop Scams Explained: How They Work & How to Stay Safe | CryptoBeacon", description: "How fake crypto airdrop scams work — the approval requests they hide, how to safely verify whether an airdrop is legitimate, and what to do if you've already interacted with one.", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/fake-airdrop-scams-explained", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Fake Airdrop Scams Explained: How They Work & How to Stay Safe | CryptoBeacon", item: "https://www.cryptobeacon.site/security/fake-airdrop-scams-explained" }
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
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Fake Airdrop Scams Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#F59E0B] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Scams
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Fake Airdrop Scams Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          You received tokens you didn't ask for. There is now a website telling you to claim more. Here is exactly what's about to happen if you interact with it — and how to protect yourself.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="how-it-works">How fake airdrop scams work</H2>
        <P>Step 1: The attacker sends a small amount of worthless tokens to thousands of <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> addresses. These tokens often have names designed to look like legitimate projects ("Uniswap V4 Reward", "ETH2 Bonus", etc.).</P>
        <P>Step 2: The token contract has a function that, when queried, returns a URL pointing to a "claim" website. Your wallet or Etherscan may display this URL when you view the token.</P>
        <P>Step 3: The claim website looks professional and shows you a large reward to claim. Clicking "Claim" prompts you to sign an ERC-20 token approval — not a claim transaction, but a permission for the attacker's contract to spend your real tokens.</P>
        <P>Step 4: Once signed, the attacker drains your real valuable tokens (USDC, WETH, etc.) immediately. The "free tokens" you were going to claim were worth nothing; your real tokens are now gone.</P>

        <H2 id="dust-attacks">Dust attacks: the related threat</H2>
        <P>A "dust attack" sends tiny amounts of real cryptocurrency (a few satoshis or wei) to your wallet to de-anonymise it. The attacker then tracks all transactions involving your address to identify you. No immediate theft occurs, but your on-chain privacy is reduced.</P>
        <P>Best practice: do not interact with small, unexpected token or coin amounts in your wallet. You can simply ignore them — receiving tokens passively cannot harm you.</P>

        <H2 id="verify">How to verify if an airdrop is real</H2>
        <ol className="list-decimal list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li>Check the project's official website for any airdrop announcement</li>
          <li>Search the project name on Twitter/X and look for a verified account announcement</li>
          <li>Look up the token contract on Etherscan — check how many addresses received it and when</li>
          <li>Check CoinGecko for the token — legitimate airdropped tokens are usually listed</li>
          <li>Never visit claim sites found via token contract URLs or unsolicited DMs</li>
        </ol>
        <P>Legitimate airdrops from major protocols (Uniswap, Arbitrum, dYdX) are always announced publicly and well in advance. You will hear about them through official channels, not a random token appearing in your wallet.</P>

        <H2 id="red-flags">Airdrop red flags</H2>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li>Token you never interacted with appeared in your wallet</li>
          <li>Token has a URL in its name or contract</li>
          <li>Claim site requires connecting your wallet and signing an approval</li>
          <li>Claim site shows an unusually large reward with urgency pressure</li>
          <li>No official announcement from a verifiable project Twitter/X account</li>
        </ul>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
