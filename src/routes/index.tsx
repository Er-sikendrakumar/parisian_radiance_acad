import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

import hero from "@/assets/hero.jpg";
import founder from "@/assets/founder.jpg";
import maderotherapy from "@/assets/maderotherapy.jpg";
import drainage from "@/assets/drainage.jpg";
import oils from "@/assets/oils.jpg";
import training from "@/assets/training.jpg";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Founder />
        <ThreePillars />
        <FeaturedProducts />
        <Stats />
        <SuccessPride />
        <Reviews />
        <GoogleBusiness />
        <NewsArticles />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ───── HERO ───── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Vanessa Saboun aesthetic specialists" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center text-background px-6 animate-fade-up">
        <p className="eyebrow text-background/80"><span className="gold-line" />Vanessa Saboun Academy</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-6 leading-[1.1]">
          Become a specialist in aesthetic care thanks to our{" "}
          <em className="italic font-light">certification, qualifying and diploma</em> training courses
        </h1>
        <div className="mt-10">
          <Link to="/" className="btn-luxury bg-accent text-accent-foreground border-accent hover:bg-transparent hover:text-background">
            Register now <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───── FOUNDER ───── */
function Founder() {
  return (
    <section className="py-28 px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="img-zoom rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={founder} alt="Vanessa Saboun, founder" className="w-full h-[520px] object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow text-accent"><span className="gold-line" />The Founder</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.1]">
            The founder of <em className="italic font-light">Vanessa Saboun Academy</em> ®
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Vanessa, certified lymphologist & osteopath specialist in aesthetic
            and post-operative care. Aesthetic coaching with a personalised
            approach. Each stage is tailored to the morphology of our trainees,
            their physical and emotional well-being through tailor-made
            treatments that meet your needs.
          </p>
          <Link to="/" className="btn-luxury mt-10 bg-accent text-accent-foreground border-accent hover:bg-transparent hover:text-foreground">
            Learn more <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───── THREE PILLARS ───── */
function ThreePillars() {
  const items = [
    { title: "Aesthetic coaching for a stress-free transformation", img: founder },
    { title: "Let our treatments reveal the best version of yourself", img: drainage },
    { title: "Find the perfect training course for you", img: training },
  ];
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-3 gap-8">
        {items.map((it) => (
          <article key={it.title} className="hover-lift">
            <div className="img-zoom aspect-[4/3] rounded-sm overflow-hidden">
              <img src={it.img} alt={it.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-serif text-xl mt-5 leading-snug">{it.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ───── FEATURED PRODUCTS ───── */
function FeaturedProducts() {
  const products = [
    { name: "Cups — Figura Red", price: "€68.00", img: product3 },
    { name: "Post-Operative Cream [1kg] — Figura Red", price: "€124.00", img: product2 },
    { name: "Post-Operative Cream [250g] — Figura Red", price: "€44.00", img: product1 },
    { name: "Post-Operative Cream [500g] — Figura Red", price: "€72.00", img: product4 },
  ];
  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">Our featured products</h2>
          <Link to="/" className="text-sm uppercase tracking-[0.22em] underline underline-offset-8 decoration-accent hover:text-accent transition">
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="img-zoom bg-background rounded-sm overflow-hidden aspect-square">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-base mt-4 leading-snug">{p.name}</h3>
              <span className="text-sm tracking-wider text-accent mt-1 block">{p.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── STATS ───── */
function Stats() {
  const stats = [
    { n: "5k+", label: "Satisfied patients" },
    { n: "800+", label: "Certified interns" },
    { n: "60+", label: "Surgeons collaborators" },
    { n: "14+", label: "Attentive countries" },
  ];
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-5xl md:text-6xl text-accent">{s.n}</div>
            <p className="eyebrow mt-3 text-[0.65rem]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── SUCCESS / PRIDE ───── */
function SuccessPride() {
  const imgs = [training, founder, maderotherapy, drainage];
  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="eyebrow text-accent"><span className="gold-line" />Their success, our pride<span className="gold-line" /></p>
        <p className="mt-6 max-w-2xl mx-auto text-foreground/75 leading-relaxed">
          These graduates have excelled in our training and propelled their
          careers to new heights. It is our pride to give your career a new
          boost and make your professional dreams come true.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {imgs.map((img, i) => (
            <div key={i} className="img-zoom aspect-[4/5] rounded-sm overflow-hidden">
              <img src={img} alt="Graduate" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── REVIEWS ───── */
function Reviews() {
  const quotes = [
    { q: "Vanessa is a professional in her job. She really knows what she is doing right after the consultation. Thank you for your good contribution to my dignity nothing prevents this.", who: "Marina Mouton", days: "1 year ago" },
    { q: "Challenge at the top of the top. Vanessa is very professional and knows the job. Every result was clinging. Highly recommended adding the work to me. Well so soon.", who: "Deya K.", days: "1 year ago" },
    { q: "Great professional!", who: "Adia", days: "2 years ago" },
  ];
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="eyebrow text-accent"><span className="gold-line" />They trusted us: discover their opinions!<span className="gold-line" /></p>
        <div className="mt-10 inline-flex flex-col items-center gap-2">
          <span className="eyebrow text-foreground">Excellent</span>
          <div className="flex gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Based on Google reviews</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {quotes.map((q) => (
            <figure key={q.who} className="bg-ivory p-8 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">G</span>
              </div>
              <div className="font-serif text-base mb-1">{q.who}</div>
              <div className="text-xs text-muted-foreground mb-4">{q.days}</div>
              <blockquote className="text-sm text-foreground/80 leading-relaxed">"{q.q}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── GOOGLE MY BUSINESS ───── */
function GoogleBusiness() {
  const links = ["Pertuis", "Aubagne", "Saint House Beauty Saint Tropez", "Network", "Caen", "Yellow Pages"];
  return (
    <section className="py-20 px-6 lg:px-12 bg-ivory">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="eyebrow text-accent">Google My Business</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {links.map((l) => (
            <a key={l} href="#" className="px-6 py-3 bg-accent text-accent-foreground text-[0.7rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition">
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── NEWS / ARTICLES ───── */
function NewsArticles() {
  const posts = [
    { title: "Why train in the Caleterapia?", date: "05 February 2025", img: maderotherapy },
    { title: "Californian massage: how to make it a complete sensory experience", date: "05 February 2025", img: drainage },
    { title: "Postpartum slimming: the most effective care to regain", date: "05 February 2025", img: oils },
  ];
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-end justify-between mb-12">
          <p className="eyebrow text-accent"><span className="gold-line" />News and latest articles</p>
          <Link to="/blog" className="text-sm uppercase tracking-[0.22em] underline underline-offset-8 decoration-accent hover:text-accent transition">
            View all articles
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer hover-lift bg-ivory rounded-sm overflow-hidden">
              <div className="img-zoom aspect-[4/3]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">By the academy · {p.date}</p>
                <h3 className="font-serif text-xl mt-3 leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <Link to="/blog" className="mt-5 inline-block px-5 py-2 bg-accent text-accent-foreground text-[0.65rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
