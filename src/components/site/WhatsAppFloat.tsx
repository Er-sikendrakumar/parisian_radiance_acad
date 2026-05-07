import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/33000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-foreground text-background rounded-full px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] hover:bg-accent hover:text-accent-foreground transition-all duration-500"
    >
      <MessageCircle size={18} strokeWidth={1.4} />
      <span className="hidden md:inline text-[0.7rem] uppercase tracking-[0.22em]">
        Concierge
      </span>
    </a>
  );
}
