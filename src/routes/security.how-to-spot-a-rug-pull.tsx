import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/spot-rug-pull.webp";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/how-to-spot-a-rug-pull";
const TITLE = "How to Spot a Crypto Rug Pull: Red Flags to Watch For | CryptoBeacon";
const DESC = "Learn how to identify malicious cryptocurrency projects before they steal your funds. A guide to spotting liquidity drainers, hidden mint functions, and dece...";
const PUBLISHED = "2026-08-20";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly is a 'rug pull'?",
    a: "A rug pull is a type of scam where developers launch a new crypto token, pump up the price with marketing, and then abruptly abandon the project — taking all the investors' funds with them.",
  },
  {
    q: "If liquidity is locked, is the project safe?",
    a: "Not necessarily. While locked liquidity prevents the developers from draining the trading pool, they could still execute a 'soft rug' by dumping their massive allocation of developer tokens on the market.",
  },
  {
    q: "Can I recover funds lost in a rug pull?",
    a: "Unfortunately, almost never. Once the funds are drained from the smart contract, they are moved to anonymous wallets and are practically impossible to retrieve.",
  },
  {
    q: "Are meme coins more likely to rug pull?",
    a: "Yes. Because meme coins rely entirely on hype rather than utility, they are the most common vehicle for rug pulls. Anyone can create a token for a few dollars and start marketing it.",
  },
];




export const Route = createFileRoute("/security/how-to-spot-a-rug-pull")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/how-to-spot-a-rug-pull', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "How to Spot a Crypto Rug Pull: Red Flags to Watch For | CryptoBeacon", description: "Learn how to identify malicious cryptocurrency projects before they steal your funds. A guide to spotting liquidity drainers, hidden mint functions, and dece...", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-20", dateModified: "2026-08-20", url: "https://www.cryptobeacon.site/security/how-to-spot-a-rug-pull", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "How to Spot a Crypto Rug Pull: Red Flags to Watch For | CryptoBeacon", item: "https://www.cryptobeacon.site/security/how-to-spot-a-rug-pull" }
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
              <Link to="/security" className="hover:text-secondary">
                Security
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Spotting a Rug Pull</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#EA4335] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Spot a Crypto Rug Pull
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Glowing neon rug being pulled from underneath digital coins"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          In the unregulated corners of decentralized finance (<Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link>), creating a new cryptocurrency
          takes less than five minutes and costs only a few dollars in network fees. This low barrier
          to entry has fueled innovation, but it has also created a golden age for scammers.
        </P>
        <P>
          The "rug pull" is the most common scam in crypto. It occurs when developers launch a token,
          lure in investors with heavy marketing to pump up the price, and then abruptly drain the
          liquidity pool — vanishing into the night and leaving investors holding worthless tokens.
          Fortunately, if you know where to look, a rug pull is highly predictable.
        </P>
        <P>
          I've watched several friends fall victim to these scams because they rushed to buy a token promoted by an influencer without checking if the liquidity was locked. By the time they realized they couldn't sell, the developers had already vanished with the Ethereum in the pool.
        </P>

        {/* Layout D: Horizontal Jump Links */}
        <nav className="my-xl flex flex-wrap gap-sm font-body-md text-body-md">
          {[
            { id: "liquidity", label: "Unlocked Liquidity" },
            { id: "concentration", label: "Wallet Concentration" },
            { id: "honeypots", label: "The Honeypot" },
            { id: "marketing", label: "Deceptive Marketing" },
            { id: "faq", label: "FAQ" },
          ].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-md py-xs rounded-full border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <H2 id="liquidity">1. Red Flag: Unlocked Liquidity</H2>
        <P>
          For a new token to be traded on a decentralized exchange (like Uniswap), the developers
          must supply an initial "liquidity pool" — usually a mix of their new token and a valuable
          asset like ETH or USDC. This pool allows users to instantly swap their ETH for the new token.
        </P>
        <P>
          If the developers retain control of this liquidity pool, they can withdraw the ETH at any
          moment, destroying the ability for anyone else to sell. Legitimate projects use third-party
          <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contracts</Link> to time-lock their liquidity for months or years. If a new project has
          unlocked liquidity, a rug pull is almost guaranteed. You can use <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> explorers or tools like Team Finance to verify if a liquidity pool is genuinely locked.
        </P>

        <H2 id="concentration">2. Red Flag: High Wallet Concentration</H2>
        <P>
          Using a block explorer, you can see exactly which <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallets</Link> hold the most tokens. If a single
          wallet (or a handful of wallets) holds 30%, 50%, or 80% of the total supply, you are in
          danger of a "soft rug."
        </P>
        <P>
          Even if liquidity is locked, developers with massive token allocations can simply dump their
          bags on the open market, crashing the price to near-zero while they walk away with the
          profits. Be wary of projects where the top 10 holders control a disproportionate amount of
          the supply.
        </P>


        <H2 id="honeypots">3. The Sneakiest Scam: The Honeypot</H2>
        <P>
          A honeypot looks like a skyrocketing token because the price only goes up. But it only goes
          up because the smart contract code contains a hidden line that disables selling for anyone
          except the developer.
        </P>
        <P>
          You buy in, see the value of your portfolio double, and try to sell — only to get an error
          message. The only way to detect a honeypot before buying is to read the smart contract code
          or use automated analysis tools (like Token Sniffer) that scan for malicious code snippets.
        </P>

        <H2 id="marketing">4. Red Flag: Deceptive Marketing & Anonymity</H2>
        <P>
          Scam tokens rely on artificial hype. Look out for projects that rely heavily on paid
          influencers, use massive bot armies to spam Twitter or Telegram, and promise unrealistic,
          "guaranteed" returns.
        </P>
        <P>
          Furthermore, while anonymous founders are common in crypto, an anonymous team launching a
          token with unlocked liquidity and flashy marketing is a massive red flag. If they steal the
          money, there are no reputations to ruin and no doors for law enforcement to knock on.
        </P>

        {/* Layout D: Card-based FAQ */}
        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
          <FAQ faqs={faqs} />
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          The lure of finding the next 100x gem causes many investors to ignore obvious red flags. By
          checking for locked liquidity, analyzing wallet distribution, and avoiding projects driven
          purely by paid hype, you can sidestep the vast majority of rug pulls that plague the
          crypto ecosystem.
        </P>

        <H2 id="sources">Sources & Further Reading</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.chainalysis.com/blog/2021-crypto-scam-revenues/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Chainalysis — The Rise of Rug Pulls
            </a>
          </li>
          <li>
            <a
              href="https://coinmarketcap.com/alexandria/glossary/rug-pull"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CoinMarketCap — What is a Rug Pull?
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

