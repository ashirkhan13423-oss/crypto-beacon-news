import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/builders";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import etfFedHero from "@/assets/news-bitcoin-etf-fed-stress-test.webp";
import scHero from "@/assets/news-standard-chartered-uae.webp";
import macroTestHero from "@/assets/news-btc-september-macro-test.webp";
import rallyHero from "@/assets/news-bitcoin-rally.webp";
import ethMergeHero from "@/assets/ethereum-merge-two-years.webp";
import clarityActHero from "@/assets/news-clarity-act.webp";
import oilHero from "@/assets/news-oil-btc-impact.webp";
import trezorHero from "@/assets/trezor-phishing-breach.webp";
import symbiosisHero from "@/assets/symbiosis-bridge-exploit-hero.webp";
import { Newspaper } from "lucide-react";

const TITLE = "Crypto News — CryptoBeacon";
const DESC = "Latest crypto news, macroeconomic impacts, institutional adoption, and regulatory updates.";
const URL = "https://www.cryptobeacon.site/news";


const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/news/")({ validateSearch: searchSchema,
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/news', publishedTime: undefined, section: 'News' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Crypto News — CryptoBeacon", item: "https://www.cryptobeacon.site/news" }
      ])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }
    ],
  }),
  component: NewsHub,
});

function NewsCard({ to, image, tag, title, desc, alt }: { to: string; image: string; tag: string; title: string; desc: string; alt: string }) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all h-full"
    >
      <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={1600}
          height={900}
        />
      </div>
      <div className="p-lg flex flex-col flex-grow">
        <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">
          {tag}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-sm group-hover:underline decoration-secondary">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
          {desc}
        </p>
      </div>
    </Link>
  );
}

function NewsHub() {
  const { page } = Route.useSearch();
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <Newspaper className="text-on-surface-variant" style={{ fontSize: "20px" }} />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Crypto News & Analysis</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Objective reporting on cryptocurrency developments that have meaningful relevance to readers, supported by named and verifiable sources. We do not cover every price movement — stories are selected when a development adds useful context beyond the price change itself.
          </p>
        </header>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Security & Breaches
          </h2>
          <ArticleGrid category="News" currentPage={page} />
          </section>
      </main>
      <SiteFooter />
    </div>
  );
}
