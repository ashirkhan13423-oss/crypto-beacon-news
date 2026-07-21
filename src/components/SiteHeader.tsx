import { Link } from "@tanstack/react-router";
import { Search, Menu } from "lucide-react";


const navLinks: { label: string; to: string }[] = [
  { label: "News", to: "/news" },
  { label: "Guides", to: "/guides" },
  { label: "Security", to: "/security" },
  { label: "Bitcoin", to: "/bitcoin" },
  { label: "Ethereum", to: "/ethereum" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "About", to: "/about" },
];

export function SiteHeader() {
  return (
    <header className="bg-surface-bright border-b border-outline-variant sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-gutter max-w-max_width mx-auto h-24">
        <Link to="/" className="flex items-center gap-md">
          <img
            alt="CryptoBeacon Logo"
            className="h-16 md:h-20 w-auto"
            src="/favicon.png"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all"
              activeProps={{
                className:
                  "font-label-caps text-label-caps text-primary border-b-2 border-secondary font-bold pb-1 hover:text-secondary transition-all",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-md text-primary">
          <Link to="/search" aria-label="Search" className="cursor-pointer hover:text-secondary transition-all bg-transparent border-0 p-0 flex items-center justify-center">
            <Search />
          </Link>
          <button type="button" aria-label="Open menu" className="cursor-pointer hover:text-secondary transition-all md:hidden bg-transparent border-0 p-0">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
