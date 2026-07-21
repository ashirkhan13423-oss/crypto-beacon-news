import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Users, BookOpen, ShieldCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — CryptoBeacon" },
      {
        name: "description",
        content:
          "Learn about the CryptoBeacon Editorial Team, our evergreen-first editorial standards, and our commitment to rigorous cryptocurrency research.",
      },
      { property: "og:title", content: "About Us — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Learn about the CryptoBeacon Editorial Team, our evergreen-first editorial standards, and our commitment to rigorous cryptocurrency research.",
      },
      { property: "og:url", content: "https://crypto-beacon-news.vercel.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://crypto-beacon-news.vercel.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
            Platform
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-sm leading-tight">
            About CryptoBeacon
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
            Editorial Rigor. Financial Clarity.
          </p>
        </header>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <Users className="text-secondary" /> Who We Are
            </h2>
            <p className="mb-sm">
              CryptoBeacon is run by the <strong>CryptoBeacon Editorial Team</strong>, a dedicated group of 
              independent blockchain analysts, technologists, and researchers. We launched this platform to 
              bridge the gap between highly technical protocol documentation and mainstream financial reporting.
            </p>
            <p>
              In a space often driven by speculation and short-term narratives, our mission is to provide 
              clear, objective, and deeply researched educational content that empowers our readers to make 
              informed decisions about their digital assets and security.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <BookOpen className="text-secondary" /> Editorial Standards
            </h2>
            <div className="space-y-md">
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">No Financial Advice</h3>
                <p className="text-body-md">
                  We are educators, not financial advisors. Nothing on CryptoBeacon constitutes investment, 
                  trading, legal, or financial advice. Our content is designed to help you understand how 
                  blockchain technology works and the structural risks involved—never to tell you what to buy, 
                  sell, or hold.
                </p>
              </div>
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Evergreen-First Focus</h3>
                <p className="text-body-md">
                  Instead of chasing fleeting price action, daily market gossip, or unverified rumors, we focus 
                  on "evergreen" content. We prioritize foundational guides, security best practices, and 
                  architectural deep-dives that will remain relevant and useful to readers for years to come.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <ShieldCheck className="text-secondary" /> How Content is Researched
            </h2>
            <p className="mb-md">
              Trust is our most important metric. To ensure accuracy and authority, our editorial process 
              mandates strict fact-checking against primary sources. When we write about a protocol or security 
              practice, our research involves:
            </p>
            <ul className="list-disc pl-xl space-y-sm marker:text-secondary">
              <li>Direct review of official whitepapers and technical documentation.</li>
              <li>Analysis of open-source GitHub repositories and developer commits.</li>
              <li>Verification of historical events using raw on-chain data and blockchain explorers.</li>
              <li>Consultation with recognized security frameworks and cryptographic standards.</li>
            </ul>
            <p className="mt-md">
              We do not publish unverified claims, nor do we accept paid promotions masquerading as editorial 
              content. If an article includes sponsored content or affiliate links, it will be explicitly 
              and prominently disclosed at the top of the page.
            </p>
          </section>

          <section className="bg-surface-container-high p-lg rounded-xl border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-md mt-xxl">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Get in Touch</h2>
              <p className="text-body-md text-on-surface-variant">
                Have a correction or a topic suggestion? Contact our editorial team.
              </p>
            </div>
            <a 
              href="mailto:editorial@crypto-beacon-news.vercel.app" 
              className="inline-flex items-center gap-xs bg-primary text-primary-foreground px-lg py-sm rounded-full font-label-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail style={{ fontSize: '20px' }} />
              Contact Editorial
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
