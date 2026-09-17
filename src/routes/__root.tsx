import { Link } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { buildMetadata } from "@/lib/metadata";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { AdSenseLoader } from "@/components/AdUnit";
import appCss from "../styles.css?url";
import { SITE_URL } from "../lib/site-config";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CryptoBeacon",
  alternateName: ["Crypto Beacon", "Crypto Beacon News", "CryptoBeacon News"],
  url: `${SITE_URL}/`,
  description:
    "Institutional-grade analysis, guides, and security research on Bitcoin, Ethereum, and major crypto currencies, focusing on crypto education, self-custody, and market analysis.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CryptoBeacon",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Looks like this page has moved</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Try searching or browse our popular topics below.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
          <Link
            to="/search"
            search={{ q: "" }}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Search
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
          <Link to="/bitcoin" className="rounded-full border px-3 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors">Bitcoin</Link>
          <Link to="/ethereum" className="rounded-full border px-3 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors">Ethereum</Link>
          <Link to="/security" className="rounded-full border px-3 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors">Security</Link>
          <Link to="/guides" className="rounded-full border px-3 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors">Guides</Link>
          <Link to="/news" className="rounded-full border px-3 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors">News</Link>
          <Link to="/glossary" className="rounded-full border px-3 py-1 text-muted-foreground hover:border-primary hover:text-foreground transition-colors">Glossary</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

import { twConfig } from "../lib/tw-config";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    ...buildMetadata({ title: "CryptoBeacon", description: "Independent cryptocurrency research...", url: "https://www.cryptobeacon.site", type: 'website', path: '/' }),
    
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      // Preconnect to all external origins — eliminates connection latency
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://pagead2.googlesyndication.com" },
      // Google Fonts with display=swap to prevent FOIT (flash of invisible text)
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      { src: "https://cdn.tailwindcss.com?plugins=forms,container-queries" },
      { children: twConfig },
      { src: "https://www.googletagmanager.com/gtag/js?id=G-VY7EVVG1WL", async: true, defer: true },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VY7EVVG1WL');",
      },
      {
        children:
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NZ2CN7HG');",
      },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      {
        children: `if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') { window.location.href = window.location.href.replace('http:', 'https:'); }`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZ2CN7HG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Loads AdSense after idle — does not block LCP */}
      <AdSenseLoader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
