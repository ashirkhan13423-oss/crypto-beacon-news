import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Shield, AlertTriangle, Lock, Eye, Key, Smartphone, Globe, UserX, Wifi } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/crypto-security-hub";
const TITLE = "Crypto Security Hub: Complete Guide to Protecting Your Assets | CryptoBeacon";
const DESC =
  "The definitive crypto security hub — phishing scams, wallet drainers, fake apps, seed phrase storage, private keys, 2FA, exchange security, and everything you need to protect your cryptocurrency.";
const PUBLISHED = "2026-09-01";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Crypto Security Hub: Complete Guide to Protecting Your Assets",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "crypto security guide, crypto phishing scams, bitcoin wallet security, seed phrase safety, crypto scam prevention, exchange account security",
  articleSection: "Security",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Security", item: "https://www.cryptobeacon.site/security" },
    { "@type": "ListItem", position: 3, name: "Crypto Security Hub", item: URL },
  ],
};

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
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Security" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
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
          Crypto scams are growing in sophistication every year. This hub covers every major threat — from phishing and wallet drainers to fake apps and exchange account takeovers — with practical defence guides for each.
        </p>

        <Author />

        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">The single most important rule</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Your seed phrase and private keys are never needed by any legitimate service, website, support agent, or application. If anything asks for them, it is a scam. No exceptions.
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
      </main>
      <SiteFooter />
    </div>
  );
}
