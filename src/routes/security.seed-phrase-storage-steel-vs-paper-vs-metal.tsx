import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Disclaimer } from "@/components/Disclaimer";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/seed-phrase-steel-vs-paper.jpg";

const PAGE_URL = "https://www.cryptobeacon.site/security/seed-phrase-storage-steel-vs-paper-vs-metal";
const TITLE = "Seed Phrase Backup: Steel vs. Paper vs. Metal | CryptoBeacon";
const DESC = "Paper, DIY steel stamping, or a commercial metal plate — which seed phrase backup holds up to fire, water, and time? A neutral durability comparison.";
const PUBLISHED = "2026-09-27";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Metal backup — DIY stamped or commercial — offers significantly better durability than paper against fire, water, and fading; the difference between them is convenience, not security.";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is a commercial metal backup product worth the extra cost over DIY stamping?",
    a: "Not for security — a well-made DIY stamped steel plate and a quality commercial product offer similar durability. The extra cost buys convenience and polish, not additional protection.",
  },
  {
    q: "Does paper backup ever make sense?",
    a: "For small or short-term holdings, yes, as a starting point — but it should be treated as temporary given its vulnerability to fire, water, and fading.",
  },
  {
    q: "What's the difference between stainless steel and regular steel for this purpose?",
    a: "Stainless steel resists corrosion far better over long time periods. Carbon or regular steel can rust, especially in humid conditions, which can eventually affect legibility.",
  },
  {
    q: "How many backup copies should I actually make?",
    a: "There's no universal number, but relying on a single copy of any medium creates a single point of failure — most guidance favors at least two copies in separate physical locations.",
  },
];

export const Route = createFileRoute("/security/seed-phrase-storage-steel-vs-paper-vs-metal")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: PAGE_URL,
      type: "article",
      path: "/security/seed-phrase-storage-steel-vs-paper-vs-metal",
      publishedTime: PUBLISHED,
      section: "Security",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildArticleSchema({
            headline: TITLE,
            description: DESC,
            imageUrl: `https://www.cryptobeacon.site${hero}`,
            datePublished: PUBLISHED,
            dateModified: MODIFIED,
            url: PAGE_URL,
            section: "Security",
            isNews: false,
          })
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbSchema([
            { name: "Home", item: "https://www.cryptobeacon.site/" },
            { name: "Security", item: "https://www.cryptobeacon.site/security" },
            { name: "Seed Phrase Storage: Steel vs. Paper vs. Metal", item: PAGE_URL },
          ])
        ),
      },
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
          <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
            <ol className="flex flex-wrap items-center gap-xs">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
              <li aria-hidden>/</li>
              <li className="text-primary">Seed Phrase Storage: Steel vs. Paper</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Security
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            Seed Phrase Storage: Steel Plates vs. Paper vs. Metal Backup Compared
          </h1>

          <Author publishedDate={<time dateTime={PUBLISHED}>September 27, 2026</time>} />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Illustration comparing paper and metal seed phrase backup mediums"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
          </figure>

          <P>
            Once you have decided to back up your seed phrase offline — the right call, as covered in our{" "}
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              seed phrase storage guide
            </Link>{" "}
            — the next question is which physical medium to actually use. Paper is free and familiar. Metal costs more but survives things paper cannot. This article compares the real categories on durability, cost, and effort, without steering you toward any specific product.
          </P>
          <P><em>This article is educational. It is not financial advice.</em></P>


          <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
              <li><a href="#categories" className="hover:underline decoration-secondary">The Three Real Categories</a></li>
              <li><a href="#durability" className="hover:underline decoration-secondary">Durability Comparison</a></li>
              <li><a href="#cost" className="hover:underline decoration-secondary">Cost and Effort Comparison</a></li>
              <li><a href="#stakes" className="hover:underline decoration-secondary">Matching Medium to Stakes</a></li>
              <li><a href="#regardless" className="hover:underline decoration-secondary">Things That Matter Regardless of Medium</a></li>
              <li><a href="#takeaways" className="hover:underline decoration-secondary">Key Takeaways</a></li>
              <li><a href="#faq" className="hover:underline decoration-secondary">Frequently Asked Questions</a></li>
            </ol>
          </aside>

          <H2 id="categories">The Three Real Categories</H2>
          <P>Most physical backup options fall into one of three categories:</P>
          <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li><strong>Paper</strong> — written or printed by hand.</li>
            <li><strong>DIY metal stamping</strong> — you personally stamp letters into a blank metal plate using basic hand tools.</li>
            <li><strong>Commercial metal backup products</strong> — pre-made systems (stamped plates, punch-letter tile kits, capsule-and-rod systems) designed specifically for this purpose.</li>
          </ol>

          <H2 id="durability">Durability Comparison</H2>
          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold">Threat</th>
                  <th className="p-md font-semibold border-l border-white/20">Paper</th>
                  <th className="p-md font-semibold border-l border-white/20">DIY Stamped Metal</th>
                  <th className="p-md font-semibold border-l border-white/20">Commercial Metal Product</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Fire</td>
                  <td className="p-md border-l border-outline-variant">Fails at normal paper-burning temperatures</td>
                  <td className="p-md border-l border-outline-variant">Withstands typical house-fire temperatures (steel)</td>
                  <td className="p-md border-l border-outline-variant">Withstands typical house-fire temperatures; some rated for higher/longer exposure</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Water/flood</td>
                  <td className="p-md border-l border-outline-variant">Ink runs, paper degrades</td>
                  <td className="p-md border-l border-outline-variant">Unaffected (stainless steel does not corrode in water)</td>
                  <td className="p-md border-l border-outline-variant">Unaffected; some include waterproof cases</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Corrosion over years</td>
                  <td className="p-md border-l border-outline-variant">N/A (fire/water are bigger risks first)</td>
                  <td className="p-md border-l border-outline-variant">Minimal with stainless steel; carbon steel can rust</td>
                  <td className="p-md border-l border-outline-variant">Minimal — reputable products use stainless/marine-grade materials</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Fading/illegibility</td>
                  <td className="p-md border-l border-outline-variant">Ink fades, handwriting can smudge</td>
                  <td className="p-md border-l border-outline-variant">Stamped characters do not fade</td>
                  <td className="p-md border-l border-outline-variant">Stamped/engraved characters do not fade</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">Physical damage</td>
                  <td className="p-md border-l border-outline-variant">Tears easily</td>
                  <td className="p-md border-l border-outline-variant">Steel resists bending; sharp impacts can still dent</td>
                  <td className="p-md border-l border-outline-variant">Designed for impact resistance; varies by product</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="cost">Cost and Effort Comparison</H2>
          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold"></th>
                  <th className="p-md font-semibold border-l border-white/20">Paper</th>
                  <th className="p-md font-semibold border-l border-white/20">DIY Stamped Metal</th>
                  <th className="p-md font-semibold border-l border-white/20">Commercial Metal Product</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Upfront cost</td>
                  <td className="p-md border-l border-outline-variant">Essentially free</td>
                  <td className="p-md border-l border-outline-variant">Low — a blank plate and stamping kit</td>
                  <td className="p-md border-l border-outline-variant">Moderate to significant, depending on the product</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Time/effort</td>
                  <td className="p-md border-l border-outline-variant">Minutes</td>
                  <td className="p-md border-l border-outline-variant">30–60 minutes, some hand strength required</td>
                  <td className="p-md border-l border-outline-variant">Minutes to assemble (punch-tile kits) or similar effort to DIY stamping</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Skill required</td>
                  <td className="p-md border-l border-outline-variant">None</td>
                  <td className="p-md border-l border-outline-variant">Low — steady hands help</td>
                  <td className="p-md border-l border-outline-variant">None to low, depending on design</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">Best suited for</td>
                  <td className="p-md border-l border-outline-variant">Small, short-term amounts you will upgrade soon</td>
                  <td className="p-md border-l border-outline-variant">Anyone comfortable with basic manual effort, wanting durability without extra cost</td>
                  <td className="p-md border-l border-outline-variant">Anyone wanting a polished, purpose-built solution and willing to pay for convenience</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="stakes">What Actually Matters Most: Matching Medium to Stakes</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>Small or experimental holdings:</strong> paper is a reasonable starting point, but should be treated as temporary rather than a permanent plan.
            </li>
            <li>
              <strong>Meaningful long-term holdings:</strong> metal in some form is worth the modest cost or effort — the failure modes paper cannot survive (fire, water, fading) are exactly the accidents that cause real,{" "}
              <Link to="/bitcoin/how-to-send-bitcoin-safely" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
                irreversible losses
              </Link>.
            </li>
            <li>
              <strong>DIY vs. commercial:</strong> this is almost entirely a convenience decision, not a security one. A carefully DIY-stamped stainless steel plate and a well-made commercial product offer comparable durability. Pay for a commercial product if you want a polished, quick, zero-effort setup; do it yourself if you are comfortable with basic tools and want to save money.
            </li>
          </ul>

          <H2 id="regardless">A Few Things That Matter Regardless of Medium</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>Multiple copies, multiple locations</strong> matters more than which single medium you choose — a single copy of anything is still a single point of failure. This principle applies whether you are using a{" "}
              <Link to="/security/what-is-a-seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
                standard BIP-39 seed phrase
              </Link>{" "}
              or any other wallet backup format. Storing one metal plate in a home safe and another in a bank safety deposit box ensures that even if one location suffers a catastrophic event (like a severe natural disaster or theft), you still have access to your funds. The goal of a secure backup plan is redundancy.
            </li>
            <li>
              <strong>Test legibility before relying on it.</strong> For DIY stamping specifically, do a practice stamp on scrap metal first to confirm your lettering is consistent and readable. Some people find that their first few attempts at stamping metal result in characters that are too shallow, crooked, or overlapping. Taking the time to practice ensures that when you stamp your actual seed phrase, every single word is unambiguous.
            </li>
            <li>
              <strong>Material matters within the metal category too.</strong> Stainless steel resists corrosion far better than plain carbon steel, which can rust over years — check what material any plate (DIY blank or commercial product) is actually made of. Titanium is another excellent option offered by some commercial products due to its extremely high melting point and superior corrosion resistance, though it is usually more expensive. Always avoid cheap metals like aluminum for long-term storage, as its low melting point makes it vulnerable to typical house fires.
            </li>
            <li>
              <strong>Keep it hidden and secure.</strong> While metal plates protect against environmental damage, they do not protect against theft. A fireproof backup does you no good if it is left in plain sight on your desk. Ensure your backup medium is stored in a location that is difficult for casual intruders to find, such as a hidden floor safe or a securely locked document box.
            </li>
          </ul>

          <H2 id="takeaways">Key Takeaways</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>Paper is free and fine for small, temporary holdings, but fails against fire, water, and fading — exactly the accidents that cause permanent loss.</li>
            <li>DIY stamped steel and commercial metal products offer comparable durability; the difference between them is convenience and cost, not security.</li>
            <li>Stainless steel resists corrosion significantly better than carbon steel — material matters within the metal category, not just metal vs. paper.</li>
            <li>Multiple copies in separate locations matter more than which single medium you pick.</li>
          </ul>

          <H2 id="faq">Frequently Asked Questions</H2>
          <div className="mb-xl">
            <FAQ faqs={faqs} />
          </div>

          <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
              Financial Disclaimer
            </h3>
            <Disclaimer />
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-xs">
              This article does not endorse or recommend any specific brand or product.
            </p>
          </div>

          <RelatedArticles currentUrl={PAGE_URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
