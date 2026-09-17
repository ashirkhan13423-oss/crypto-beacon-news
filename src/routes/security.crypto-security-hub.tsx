import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Shield, AlertTriangle, Lock, Eye, Key, Smartphone, Globe, UserX, Wifi } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/crypto-security-hub";
const TITLE = "Crypto Security Hub: Complete Guide to Protecting Your Assets | CryptoBeacon";
const DESC = "The definitive crypto security hub — phishing scams, wallet drainers, fake apps, seed phrase storage, private keys, 2FA, exchange security, and everything yo...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const sections = [
  { icon: <AlertTriangle size={20} />, title: "What Is a Crypto Phishing Attack?", desc: "How phishing targets crypto users, what makes it different from regular email scams, and why it is so effective.", to: "/security/how-to-avoid-crypto-phishing-scams", tag: "Phishing", color: "#EF4444" },
  { icon: <Globe size={20} />, title: "How Crypto Phishing Scams Work", desc: "The technical mechanics: DNS hijacking, fake dApps, approval phishing, spear phishing — a full breakdown.", to: "/security/how-crypto-phishing-scams-work", tag: "Phishing", color: "#EF4444" },
  { icon: <Eye size={20} />, title: "How to Identify a Fake Crypto Website", desc: "URL inspection, SSL certificate checks, Whois lookups, and clipboard address verification — a practical detection guide.", to: "/security/how-to-identify-a-fake-crypto-website", tag: "Scam Detection", color: "#F59E0B" },
  { icon: <Shield size={20} />, title: "Crypto Wallet Drainer Scams Explained", desc: "How approval scams, setApprovalForAll exploits, and wallet drainers steal funds instantly — and how to detect them.", to: "/security/crypto-wallet-drainer-scams-explained", tag: "Drainers", color: "#EF4444" },
  { icon: <Key size={20} />, title: "What Is a Seed Phrase?", desc: "A security-angle explainer of why seed phrases are the highest-value target in crypto and what attackers do to get them.", to: "/security/what-is-a-seed-phrase", tag: "Seed Phrase", color: "#8B5CF6" },
  { icon: <Lock size={20} />, title: "How to Store a Seed Phrase Safely", desc: "Paper vs metal, geographic distribution, mistakes that cost people their funds — a complete backup strategy guide.", to: "/security/how-to-store-crypto-seed-phrase-safely", tag: "Essential", color: "#0F9D58" },
  { icon: <Key size={20} />, title: "Private Key vs Seed Phrase", desc: "What the difference is, when you'd use each, and the security implications of each type of secret.", to: "/security/private-key-vs-seed-phrase", tag: "Explainer", color: "#8B5CF6" },
  { icon: <UserX size={20} />, title: "Common Crypto Scams", desc: "Rug pulls, fake giveaways, pump and dump, romance scams, pig butchering — the full taxonomy of crypto fraud.", to: "/security/common-crypto-scams", tag: "Scams", color: "#EF4444" },
  { icon: <Wifi size={20} />, title: "Fake Airdrop Scams Explained", desc: "How fake airdrops work, the approval requests they hide, and how to safely verify whether an airdrop is real.", to: "/security/fake-airdrop-scams-explained", tag: "Scams", color: "#F59E0B" },
  { icon: <Smartphone size={20} />, title: "Fake Wallet Apps Explained", desc: "App store clones, how to verify official wallet apps, and the red flags that distinguish fakes from real software.", to: "/security/fake-wallet-apps-explained", tag: "Scams", color: "#EF4444" },
  { icon: <Shield size={20} />, title: "Exchange Account Security", desc: "Strong passwords, withdrawal whitelists, API key security, and phishing-resistant authentication for exchange accounts.", to: "/security/exchange-account-security", tag: "Accounts", color: "#2563EB" },
  { icon: <Lock size={20} />, title: "Two-Factor Authentication for Crypto", desc: "SMS vs TOTP vs hardware security keys — setup, strengths, and weaknesses of each 2FA method for crypto accounts.", to: "/security/two-factor-authentication-for-crypto", tag: "2FA", color: "#0F9D58" },
];

export const Route = createFileRoute("/security/crypto-security-hub")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/crypto-security-hub', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Crypto Security Hub: Complete Guide to Protecting Your Assets | CryptoBeacon", description: "The definitive crypto security hub — phishing scams, wallet drainers, fake apps, seed phrase storage, private keys, 2FA, exchange security, and everything yo...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/crypto-security-hub", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Crypto Security Hub: Complete Guide to Protecting Your Assets | CryptoBeacon", item: "https://www.cryptobeacon.site/security/crypto-security-hub" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

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
            <li className="text-primary">Crypto Security Hub</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
          Security · Hub
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mb-md leading-tight">
          Crypto Security Hub
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl max-w-3xl">
          Crypto scams are growing in sophistication every year. This hub covers every major threat — from phishing and <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> drainers to fake apps and exchange account takeovers — with practical defence guides for each.
        </p>

        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">The single most important rule</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Your <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrase</Link> and <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private keys</Link> are never needed by any legitimate service, website, support agent, or application. If anything asks for them, it is a scam. No exceptions.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg text-primary mb-lg">All security guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="group flex gap-md p-lg rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: s.color + "20", color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-secondary">{s.tag}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-xs mb-xs group-hover:underline decoration-secondary">{s.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This hub is for informational and educational purposes only. Security practices evolve — always verify information against current guidance from wallet providers and official security researchers.
          </p>
        </div>
                <RelatedArticles currentUrl={URL} />
        </article>
</main>
      <SiteFooter />
    </div>
  );
}
