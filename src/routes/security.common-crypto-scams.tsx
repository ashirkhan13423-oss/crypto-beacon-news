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

const URL = "https://www.cryptobeacon.site/security/common-crypto-scams";
const TITLE = "Common Crypto Scams: Rug Pulls, Pig Butchering & More | CryptoBeacon";
const DESC = "The most common crypto scams explained — rug pulls, fake giveaways, pump and dump, romance/pig butchering scams, and exit scams — with red flags to identify ...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is a rug pull in crypto?", a: "A rug pull is when the developers of a crypto project abandon it after raising funds, draining liquidity from a decentralised exchange, or selling all their tokens — leaving investors with worthless holdings. The name comes from 'pulling the rug out' from under investors." },
  { q: "What is pig butchering?", a: "Pig butchering (SHA ZHU PAN) is an investment fraud where scammers build a fake romantic or friendly relationship with victims over weeks or months, then introduce them to a fake investment platform. Victims invest increasingly large sums before the scammer disappears with everything. The 'pig' (victim) is fattened before the 'butchering' (theft)." },
  { q: "Are celebrity crypto giveaways real?", a: "No. No legitimate celebrity — Elon Musk, MrBeast, CZ, Vitalik — runs a crypto giveaway where you send crypto and get double back. This scam format has existed since 2017 and is always fraudulent. The accounts promoting these are fake or compromised." },
  { q: "How does a pump and dump work?", a: "Coordinated groups accumulate a low-cap token, promote it aggressively in Telegram/Discord groups to attract buyers and inflate the price, then sell (dump) all their holdings at the peak — crashing the price and leaving late buyers with losses." },
];




export const Route = createFileRoute("/security/common-crypto-scams")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/common-crypto-scams', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Common Crypto Scams: Rug Pulls, Pig Butchering & More | CryptoBeacon", description: "The most common crypto scams explained — rug pulls, fake giveaways, pump and dump, romance/pig butchering scams, and exit scams — with red flags to identify ...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/common-crypto-scams", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Common Crypto Scams: Rug Pulls, Pig Butchering & More | CryptoBeacon", item: "https://www.cryptobeacon.site/security/common-crypto-scams" }
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

const scams = [
  { name: "Rug Pull", how: "Developers create a token or DeFi protocol, attract investment, then abandon the project — draining liquidity pools or selling all developer-held tokens, leaving other holders with worthless assets.", redFlags: ["Anonymous team with no verifiable identity", "No code audit from a reputable firm", "Locked liquidity that expires soon", "Sudden large sell pressure from dev wallets"], color: "#EF4444" },
  { name: "Pump and Dump", how: "Coordinated groups accumulate a low-market-cap token, then aggressively promote it (Telegram, Discord, Twitter) to attract buyers and inflate the price. Once sufficiently inflated, they sell everything simultaneously.", redFlags: ["Unsolicited DMs promoting a 'hidden gem'", "Token with no utility or roadmap", "Price chart shows parabolic rise with no news catalyst", "Telegram groups with thousands of members created recently"], color: "#F59E0B" },
  { name: "Fake Celebrity Giveaways", how: "Scammers create fake accounts impersonating celebrities or verified accounts and run giveaway posts: 'Send 1 ETH, receive 2 ETH back.' They collect sent funds and send nothing.", redFlags: ["Any 'send X to receive 2X' offer", "Verified-looking but recently created accounts", "YouTube livestreams with fake celebrity faces", "Urgency pressure ('limited time only')"], color: "#EF4444" },
  { name: "Pig Butchering (SHA ZHU PAN)", how: "Long-term social engineering: scammers build relationships over weeks via dating apps, social media, or WhatsApp. After establishing trust, they introduce victims to a 'profitable investment platform' (fake exchange) and encourage increasingly large deposits before the scammer disappears.", redFlags: ["Romantic interest from a stranger online who quickly mentions crypto", "A friend who 'made a lot' and wants to share the platform", "Platform that shows large profits but prevents withdrawal", "Requests to pay 'taxes' or 'fees' to release funds"], color: "#EF4444" },
  { name: "Exit Scam", how: "A seemingly legitimate exchange, lending platform, or project raises funds and either suddenly shuts down, halts withdrawals citing technical issues, and then disappears with customer funds.", redFlags: ["High advertised APYs with vague explanations", "Platform that limits or delays withdrawals", "No publicly verifiable identity for leadership", "Centralized custody with no transparency about reserves"], color: "#F59E0B" },
];

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
            <li className="text-primary">Common Crypto Scams</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Scams
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Common Crypto Scams
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The five most common cryptocurrency scams — how they work, what they look like in practice, and the specific red flags that identify each one.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="scams">The five scam types</H2>
        <div className="space-y-xl my-lg">
          {scams.map((s) => (
            <div key={s.name} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-md text-headline-md mb-md" style={{ color: s.color }}>{s.name}</h3>
              <div className="mb-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs block">How it works</span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">{s.how}</p>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary mb-xs block">Red flags</span>
                <ul className="space-y-xs">
                  {s.redFlags.map((r) => <li key={r} className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs"><span className="text-red-400 mt-0.5 shrink-0">⚠</span>{r}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <H2 id="universal">The universal scam filter</H2>
        <P>Across every crypto scam, one principle holds: <strong>if something promises outsized returns with no credible mechanism, it is a scam.</strong> Crypto markets are competitive and efficient. Legitimate 2x guaranteed returns don't exist. Any promise of them is extracting value from you, not creating it.</P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
