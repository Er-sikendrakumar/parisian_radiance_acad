import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.94_0.02_70)] mt-0 pt-24 pb-10 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 max-w-sm">
            <div className="font-serif text-2xl tracking-[0.16em]">VANESSA SABOUN</div>
            <p className="eyebrow mt-1 text-[0.55rem]">Académie · Paris · St Tropez</p>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              A Parisian house dedicated to the art of aesthetic mastery — body
              sculpting, lymphatic drainage and post-operative care, taught with
              French precision.
            </p>
            <div className="flex gap-4 mt-8 text-foreground/70">
              <a href="#" aria-label="Instagram" className="hover:text-accent transition"><Instagram size={18} strokeWidth={1.2} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition"><Facebook size={18} strokeWidth={1.2} /></a>
              <a href="#" aria-label="Youtube" className="hover:text-accent transition"><Youtube size={18} strokeWidth={1.2} /></a>
            </div>
          </div>

          <FooterCol title="Maison" links={[
            ["About", "/"], ["Training", "/training"], ["Shop", "/shop"], ["Care", "/care"],
          ]} />
          <FooterCol title="Expertise" links={[
            ["Maderotherapy", "/"], ["Metal Therapy", "/"], ["Lymphatic Drainage", "/"], ["Post-operative", "/"],
          ]} />
          <FooterCol title="Contact" links={[
            ["Booking", "/"], ["Concierge St Tropez", "/concierge"], ["Press", "/"], ["Journal", "/blog"],
          ]} />
        </div>

        <div className="border-t border-border/70 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} Vanessa Saboun Académie. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">Made in Paris</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="eyebrow mb-5">{title}</h4>
      <ul className="space-y-3 text-sm text-foreground/80">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to as never} className="hover:text-accent transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
