import { Link } from "@tanstack/react-router";
import { Twitter } from "lucide-react";
import logoAsset from "@/assets/cryptobeacon-logo.png.asset.json";

const linkCls =
  "font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-lg px-gutter md:px-margin py-xxl max-w-max_width mx-auto">
        {/* Branding row */}
        <div className="col-span-2 md:col-span-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg pb-lg border-b border-outline-variant">
          <img
            src={logoAsset.url}
            alt="CryptoBeacon - Editorial Rigor and Financial Clarity"
            className="h-14 md:h-16 w-auto"
          />
          <div className="flex items-center gap-md">
            <span className="font-body-md text-body-md text-on-surface">
              © 2026 CryptoBeacon. Editorial Rigor. Financial Clarity.
            </span>
            <a
              href="https://x.com/crypto__beacon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface hover:text-secondary transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Column 1 — Platform */}
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Platform
          </span>
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/learn" className={linkCls}>Learn</Link>
          <Link to="/guides" className={linkCls}>Guides</Link>
          <Link to="/news" className={linkCls}>News</Link>
          <Link to="/glossary" className={linkCls}>Glossary</Link>
        </div>

        {/* Column 2 — Topics */}
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Topics
          </span>
          <Link to="/bitcoin" className={linkCls}>Bitcoin</Link>
          <Link to="/ethereum" className={linkCls}>Ethereum</Link>
          <Link to="/security" className={linkCls}>Security</Link>
          <Link to="/taxes" className={linkCls}>Taxes</Link>
          <Link to="/altcoins" className={linkCls}>Altcoins</Link>
          <Link to="/defi" className={linkCls}>DeFi</Link>
          <Link to="/etfs" className={linkCls}>ETFs</Link>
        </div>

        {/* Column 3 — Company */}
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Company
          </span>
          <Link to="/about" className={linkCls}>About</Link>
          <Link to="/author" className={linkCls}>Author</Link>
          <Link to="/contact" className={linkCls}>Contact</Link>
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm mt-md">
            Editorial
          </span>
          <Link to="/editorial-policy" className={linkCls}>Editorial Policy</Link>
          <Link to="/corrections" className={linkCls}>Corrections</Link>
          <Link to="/affiliate-disclosure" className={linkCls}>Affiliate Disclosure</Link>
        </div>

        {/* Column 4 — Legal */}
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Legal
          </span>
          <Link to="/privacy" className={linkCls}>Privacy Policy</Link>
          <Link to="/terms" className={linkCls}>Terms of Service</Link>
          <Link to="/disclaimer" className={linkCls}>Financial Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
