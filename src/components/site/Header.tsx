import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import React from "react";
import { Menu, X, ShoppingBag, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { to: "/training", label: "Training" },
  { to: "/shop", label: "Shop" },
  { to: "/booking", label: "Booking" },
  { to: "/concierge", label: "Concierge St" },
  { to: "/networks", label: "Networks" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const SHOP_CATEGORIES = [
  { to: "/categorie-produit/maderotherapie", label: "Madérotherapie" },
  { to: "/categorie-produit/metalotherapie", label: "Métalotherapie" },
  { to: "/categorie-produit/huiles-et-cremes", label: "Huiles et crèmes" },
  { to: "/categorie-produit/post-operatoire", label: "Post-opératoire" },
  { to: "/categorie-produit/pour-les-professionnels", label: "Pour les professionnels" },
];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShopMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShopDropdownOpen(true);
  };

  const handleShopMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`} style={{backgroundColor: "#faf5ed"}}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-30">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden lg:flex items-center gap-9 text-[0.9rem] uppercase tracking-[0.22em] font-medium text-foreground/80">
            {NAV.slice(0, 4).map((n) => {
              if (n.label === "Shop") {
                return (
                  <DropdownMenu key={n.to} open={shopDropdownOpen} onOpenChange={setShopDropdownOpen}>
                    <div
                      onMouseEnter={handleShopMouseEnter}
                      onMouseLeave={handleShopMouseLeave}
                    >
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
                          {n.label}
                          <ChevronDown size={16} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="start" 
                        className="min-w-max"
                        onMouseEnter={handleShopMouseEnter}
                        onMouseLeave={handleShopMouseLeave}
                      >
                        {SHOP_CATEGORIES.map((category) => (
                          <DropdownMenuItem key={category.to} asChild>
                            <Link to={category.to as never}>
                              {category.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </div>
                  </DropdownMenu>
                );
              }
              return (
                <Link key={n.to} to={n.to as never} className="hover:text-foreground transition-colors">
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/" className="flex flex-col items-center leading-none">
            <img src={logo} alt="Vanessa Saboun Academy" className="w-full h-full object-cover" style={{ maxWidth: "150px" }} />
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden lg:flex items-center gap-7 text-[0.9rem] uppercase tracking-[0.22em] font-medium text-foreground/80">
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
            {NAV.map((n) => {
              if (n.label === "Shop") {
                return (
                  <div key={n.to} className="flex flex-col gap-2">
                    <div className="font-medium text-foreground/80">{n.label}</div>
                    <div className="flex flex-col gap-2 pl-4 border-l border-border">
                      {SHOP_CATEGORIES.map((category) => (
                        <Link
                          key={category.to}
                          to={category.to as never}
                          onClick={() => setOpen(false)}
                          className="text-xs hover:text-accent transition-colors"
                        >
                          {category.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to as never}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent"
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
