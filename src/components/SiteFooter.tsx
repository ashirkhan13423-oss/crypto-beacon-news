import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/cryptobeacon-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-gutter md:px-margin py-xxl max-w-max_width mx-auto">
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
            to="/news"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            News
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
          <Link
            to="/news"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            News &amp; Updates
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
            to="/author"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all"
          >
            Author
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
      </div>
    </footer>
  );
}
