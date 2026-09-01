import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/how-to-identify-a-fake-crypto-website";
const TITLE = "How to Identify a Fake Crypto Website: 7 Checks | CryptoBeacon";
const DESC =
  "Learn how to spot a fake crypto website before it's too late — URL inspection, SSL certificate checks, Whois lookups, typosquatting red flags, and clipboard address verification.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What is typosquatting?", a: "Typosquatting is when an attacker registers a domain that is nearly identical to a legitimate one — often with a single character changed, replaced with a lookalike (rn vs m), or a different TLD (.net instead of .com). For example, 'uniswap.oom' or 'metamásk.io' (with an accented á)." },
  { q: "Does HTTPS mean a website is safe?", a: "No. HTTPS (the padlock icon) only means the connection between your browser and the server is encrypted. It says nothing about whether the server itself is legitimate or controlled by an attacker. Phishing sites can and do use HTTPS with valid certificates." },
  { q: "What is a Whois lookup?", a: "Whois is a public database of domain registration information. You can look up when a domain was registered, who registered it (sometimes anonymised), and what registrar was used. Legitimate crypto projects typically have long-established domains. A 2-week-old domain claiming to be a major protocol is a major red flag." },
  { q: "How do I verify the correct URL for a crypto project?", a: "Go to the project's official Twitter/X, GitHub, CoinGecko page, or CoinMarketCap listing, and click the website link from there. Legitimate projects list their official URLs on these third-party platforms. Avoid clicking links from search engine ads or DMs." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Identify a Fake Crypto Website: 7 Checks",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "how to identify fake crypto website, fake crypto website checker, typosquatting crypto, whois domain check, crypto phishing site detection, fake defi protocol",
  articleSection: "Security",
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
    { "@type": "ListItem", position: 2, name: "Security", item: "https://www.cryptobeacon.site/security" },
    { "@type": "ListItem", position: 3, name: "How to Identify a Fake Crypto Website", item: URL },
  ],
};

export const Route = createFileRoute("/security/how-to-identify-a-fake-crypto-website")({
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

const checks = [
  { num: "01", check: "Inspect the full URL character by character", detail: "Check the domain name letter by letter. Look for lookalike characters: 'rn' (r+n) vs 'm', 'vv' vs 'w', '0' vs 'o', accented letters (á, ë). Also check the TLD — .com, .io, .org, .net all look similar in quick scanning." },
  { num: "02", check: "Verify the domain age via Whois", detail: "Use whois.domaintools.com or a similar tool. Legitimate protocols have domains registered years ago. A 2-week-old domain claiming to be Uniswap or Aave is definitively fake, regardless of how good it looks." },
  { num: "03", check: "Check the SSL certificate issuer", detail: "Click the padlock icon → 'Connection is secure' → 'Certificate is valid'. Legitimate major sites often use OV (Organisation Validated) or EV (Extended Validation) certificates showing the company name. Note: HTTPS alone is not proof of legitimacy." },
  { num: "04", check: "Cross-reference with CoinGecko or CoinMarketCap", detail: "Major token and protocol pages on CoinGecko and CoinMarketCap list the official website. Navigate to the site via these links rather than following search results or third-party links." },
  { num: "05", check: "Verify the URL via the project's official social accounts", detail: "Check the project's verified Twitter/X, Telegram, or Discord for the official URL. Be careful: fake accounts also exist. Verified marks and follower counts help, but cross-check across multiple platforms." },
  { num: "06", check: "Always verify pasted wallet addresses", detail: "Clipboard hijacking malware replaces copied addresses with attacker addresses. After pasting any address, check the first 6 and last 6 characters against the original. Many hardware wallets display the destination address on-screen for independent verification." },
  { num: "07", check: "Check for search engine ads", detail: "Never click paid search results (labelled 'Sponsored' or 'Ad') for crypto sites. Attackers buy ads for keywords like 'MetaMask' or 'Uniswap' that link to identical-looking phishing sites. Always scroll past ads to organic results or use bookmarks." },
];

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
            <li className="text-primary">Identify a Fake Crypto Website</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#F59E0B] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Scam Detection
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How to Identify a Fake Crypto Website
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Modern phishing sites are visually indistinguishable from the real thing. These seven checks take under two minutes and will catch the vast majority of fakes before you connect your wallet.
        </p>
        <Author />

        <H2 id="checks">The seven checks</H2>
        <div className="space-y-md my-lg">
          {checks.map((c) => (
            <div key={c.num} className="flex gap-md p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <span className="font-mono text-xl font-bold text-[#F59E0B] shrink-0 w-8">{c.num}</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">{c.check}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <H2 id="bookmarks">The best protection: bookmarks</H2>
        <P>The single most effective habit against fake crypto websites is using browser bookmarks for every site you regularly use. When you are already on the legitimate site, bookmark it. Never navigate to DeFi sites, exchanges, or wallet providers by searching — always use your bookmarks.</P>
        <P>This eliminates the risk of typosquatting, poisoned search results, and paid ads entirely for your regular sites.</P>

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
            <Link to="/security/how-crypto-phishing-scams-work" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How Phishing Scams Work</h3>
            </Link>
            <Link to="/security/crypto-wallet-drainer-scams-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Wallet Drainer Scams Explained</h3>
            </Link>
            <Link to="/security/crypto-security-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Security Hub</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
