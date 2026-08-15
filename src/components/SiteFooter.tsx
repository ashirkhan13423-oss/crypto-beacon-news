import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/cryptobeacon-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full mt-xxl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-gutter py-xxl max-w-max_width mx-auto">
        <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg pb-lg border-b border-outline-variant">
          <img
            src={logoAsset.url}
            alt="CryptoBeacon - Editorial Rigor and Financial Clarity"
            className="h-14 md:h-16 w-auto"
          />
          <span className="font-body-md text-body-md text-on-surface">
            © 2026 CryptoBeacon. Editorial Rigor. Financial Clarity.
          </span>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Platform
          </span>
          <Link
            to="/"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Home
          </Link>
          <Link
            to="/news"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            News
          </Link>
          <Link
            to="/guides"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Guides
          </Link>
          <Link
            to="/security"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Security
          </Link>
          <Link
            to="/about"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Categories &amp; Hubs
          </span>
          <Link
            to="/news"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            News Hub
          </Link>
          <Link
            to="/guides"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Guides &amp; Tutorials
          </Link>
          <Link
            to="/security"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Security &amp; Phishing
          </Link>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Asset Focus
          </span>
          <Link
            to="/bitcoin"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Bitcoin (BTC)
          </Link>
          <Link
            to="/ethereum"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Ethereum (ETH)
          </Link>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Company &amp; Legal
          </span>
          <Link
            to="/about"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            About &amp; Editorial Standards
          </Link>
          <Link
            to="/contact"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Terms of Service
          </Link>
          <Link
            to="/disclaimer"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Financial Disclaimer
          </Link>
        </div>

        {/* Trending Keywords & Search Index Footer Section */}
        <div className="col-span-1 md:col-span-4 pt-lg mt-lg border-t border-outline-variant">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm block">
            Trending Topics &amp; Search Index
          </span>
          <div className="flex flex-wrap gap-xs font-body-sm text-xs text-on-surface-variant">
            <Link to="/search" search={{ q: "crypto currency" }} className="hover:text-primary hover:underline">
              Crypto Currency
            </Link>
            <span aria-hidden>·</span>
            <Link to="/search" search={{ q: "what is crypto currency" }} className="hover:text-primary hover:underline">
              What Is Crypto Currency
            </Link>
            <span aria-hidden>·</span>
            <Link to="/search" search={{ q: "crypto currency price" }} className="hover:text-primary hover:underline">
              Crypto Currency Price
            </Link>
            <span aria-hidden>·</span>
            <Link to="/search" search={{ q: "crypto currency prices" }} className="hover:text-primary hover:underline">
              Crypto Currency Prices
            </Link>
            <span aria-hidden>·</span>
            <Link to="/search" search={{ q: "crypto currency news" }} className="hover:text-primary hover:underline">
              Crypto Currency News
            </Link>
            <span aria-hidden>·</span>
            <Link to="/search" search={{ q: "crypto currency meaning" }} className="hover:text-primary hover:underline">
              Crypto Currency Meaning
            </Link>
            <span aria-hidden>·</span>
            <Link to="/search" search={{ q: "crypto currencies" }} className="hover:text-primary hover:underline">
              Crypto Currencies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
