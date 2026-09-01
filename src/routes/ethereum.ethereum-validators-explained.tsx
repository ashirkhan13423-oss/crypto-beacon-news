import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/ethereum-validators-explained";
const TITLE = "Ethereum Validators Explained: Requirements, Duties & Risks | CryptoBeacon";
const DESC =
  "What is an Ethereum validator? Learn about the 32 ETH requirement, validator duties (proposing and attesting), the validator lifecycle, slashing risks, and what happens when validators go offline.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "How much ETH do you need to be a validator?", a: "Exactly 32 ETH is required to activate a single validator. This ETH is locked as collateral and can be slashed (partially destroyed) if the validator misbehaves. You can stake less than 32 ETH through liquid staking protocols like Lido or RocketPool." },
  { q: "What does a validator actually do?", a: "Validators perform two main duties: proposing blocks (selected randomly once per epoch approximately) and attesting to blocks proposed by others (assigned each epoch). Validators earn small ETH rewards for performing both duties correctly and on time." },
  { q: "What happens if my validator goes offline?", a: "If a validator is offline, it will miss attestations and slowly leak ETH — but at a much smaller rate than slashing. The inactivity penalty rate matches the rate at which the validator would have earned rewards if online. If more than 1/3 of validators go offline simultaneously, a more severe 'inactivity leak' can begin." },
  { q: "Can I withdraw my staked ETH?", a: "Yes. The Shanghai/Capella upgrade (April 2023) enabled validator withdrawals. You can partially withdraw accumulated rewards continuously or fully exit the validator set, which queues your 32 ETH for withdrawal. Exit processing time varies based on the exit queue." },
  { q: "What is the activation queue?", a: "To prevent rapid changes in the validator set, Ethereum limits how many new validators can activate per epoch. During high demand periods, this queue can mean waiting days or weeks from deposit to active validation status." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ethereum Validators Explained: Requirements, Duties & Risks",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "ethereum validator explained, 32 ETH validator requirement, ethereum staking validator duties, validator slashing risk, ethereum validator rewards, ethereum withdrawal staking",
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
    { "@type": "ListItem", position: 3, name: "Ethereum Validators Explained", item: URL },
  ],
};

export const Route = createFileRoute("/ethereum/ethereum-validators-explained")({
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

const lifecycle = [
  { step: "1", state: "Deposit", desc: "Send exactly 32 ETH to the deposit contract. Your validator key pair is generated offline.", color: "#2563EB" },
  { step: "2", state: "Pending", desc: "Enter the activation queue. During high demand, this can take days to weeks.", color: "#F59E0B" },
  { step: "3", state: "Active", desc: "Your validator is live. You earn rewards for proposing blocks and attesting to others.", color: "#0F9D58" },
  { step: "4", state: "Slashed / Exiting", desc: "If dishonest: slashed and force-ejected. If voluntary: submit exit message and enter the exit queue.", color: "#EF4444" },
  { step: "5", state: "Withdrawable", desc: "After exit processing, your 32 ETH (plus rewards, minus penalties) is withdrawable.", color: "#8B5CF6" },
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
            <li><Link to="/ethereum" className="hover:text-secondary">Ethereum</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Ethereum Validators Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Staking
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Ethereum Validators Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The 32 ETH requirement, what validators actually do, the full lifecycle from deposit to withdrawal, and the risks involved.
        </p>
        <Author />

        <H2 id="what-is">What is an Ethereum validator?</H2>
        <P>An Ethereum validator is a node that participates in the Proof-of-Stake consensus process. Validators propose new blocks, attest to blocks proposed by others, and collectively maintain the security and liveness of the Ethereum network. In return, they earn ETH rewards.</P>
        <P>Unlike Bitcoin miners who compete for block rewards through computational work, Ethereum validators are selected pseudo-randomly, weighted by their stake. More validators means more decentralisation and security — as of 2026, Ethereum has over 1 million active validators.</P>

        <H2 id="requirements">The 32 ETH requirement</H2>
        <P>Running a validator requires depositing exactly 32 ETH into Ethereum's deposit contract. This ETH is locked as collateral. It cannot be moved while the validator is active — it ensures validators have "skin in the game." Dishonest behaviour risks this collateral through slashing.</P>
        <P>If you don't have 32 ETH or don't want to manage validator infrastructure yourself, you can use liquid staking protocols: <Link to="/ethereum/what-is-ethereum-staking" className="text-secondary underline">What Is Ethereum Staking? →</Link></P>

        <H2 id="duties">Validator duties</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {[
            { title: "Block Proposing", desc: "Each slot (12 seconds), one validator is randomly selected to propose a block. The proposer earns a larger reward than attesters. The selection probability is proportional to stake.", color: "#627EEA" },
            { title: "Block Attesting", desc: "Every epoch (32 slots, ~6.4 min), validators are assigned to committees. Each committee votes on the validity of the current slot's block. Attestations are the core of Ethereum consensus.", color: "#8B5CF6" },
            { title: "Sync Committees", desc: "A subset of 512 validators serves on a 'sync committee' that runs for ~27 hours. Sync committee members earn additional rewards and their attestations help light clients sync the chain efficiently.", color: "#0F9D58" },
            { title: "Slashing Protection", desc: "Validators must never sign conflicting messages. If they do, other validators can submit 'slashing proofs' that trigger the penalty. Running validator client software with slashing protection databases is essential.", color: "#EF4444" },
          ].map((d) => (
            <div key={d.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h3 className="font-headline-sm text-headline-sm mb-sm" style={{ color: d.color }}>{d.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <H2 id="lifecycle">Validator lifecycle</H2>
        <div className="space-y-sm my-lg">
          {lifecycle.map((l) => (
            <div key={l.step} className="flex gap-md p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: l.color }}>{l.step}</div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary">{l.state}</span>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>

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
            <Link to="/ethereum/proof-of-stake-explained" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Proof of Stake Explained</h3>
            </Link>
            <Link to="/ethereum/what-is-ethereum-staking" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is Ethereum Staking?</h3>
            </Link>
            <Link to="/ethereum/ethereum-complete-beginners-guide" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Ethereum: Complete Guide</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
