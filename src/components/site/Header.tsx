import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

const NAV = [
  { to: "/training", label: "Training" },
  { to: "/shop", label: "Shop" },
  { to: "/care", label: "Care" },
  { to: "/professionals", label: "For Professionals" },
  { to: "/concierge", label: "Concierge St Tropez" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden lg:flex items-center gap-9 text-[0.72rem] uppercase tracking-[0.22em] font-medium text-foreground/80">
            {NAV.slice(0, 4).map((n) => (
              <Link key={n.to} to={n.to as never} className="hover:text-foreground transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.18em] text-foreground">
              VANESSA SABOUN
            </span>
            <span className="eyebrow mt-1 text-[0.55rem]">Académie · Paris</span>
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden lg:flex items-center gap-7 text-[0.72rem] uppercase tracking-[0.22em] font-medium text-foreground/80">
              {NAV.slice(4).map((n) => (
                <Link key={n.to} to={n.to as never} className="hover:text-foreground transition-colors">
                  {n.label}
                </Link>
              ))}
            </nav>
            <button aria-label="Search" className="hidden md:block hover:text-accent transition">
              <Search size={18} strokeWidth={1.2} />
            </button>
            <button aria-label="Cart" className="relative hover:text-accent transition">
              <ShoppingBag size={18} strokeWidth={1.2} />
              <span className="absolute -top-1.5 -right-2 text-[0.55rem] bg-accent text-accent-foreground rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade">
          <nav className="flex flex-col px-6 py-8 gap-5 text-sm uppercase tracking-[0.22em]">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to as never}
                onClick={() => setOpen(false)}
                className="hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
