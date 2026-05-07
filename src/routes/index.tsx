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
        <Marquee />
        <About />
        <Expertise />
        <Programs />
        <Gallery />
        <Shop />
        <Testimonials />
        <Booking />
        <Journal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ───── HERO ───── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury Parisian wellness suite"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/70" />
      </div>

      <div className="relative mx-auto max-w-[1400px] w-full px-6 lg:px-12 grid md:grid-cols-12 gap-8 items-end animate-fade-up">
        <div className="md:col-span-7">
          <p className="eyebrow text-foreground/80">
            <span className="gold-line" />
            Académie Française · Est. Paris
          </p>
          <h1 className="font-serif text-[14vw] md:text-[7.5vw] leading-[0.95] mt-6 text-foreground">
            The art of <em className="italic font-light">becoming</em>
            <br /> beautifully.
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="text-base leading-relaxed text-foreground/85 max-w-sm">
            A maison of aesthetic mastery — body sculpting, lymphatic drainage,
            maderotherapy and post-operative care, refined through twenty years
            of French expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="btn-luxury">
              Discover the Academy <ArrowUpRight size={14} />
            </Link>
            <Link to="/" className="btn-ghost-luxury">Book a Session</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── MARQUEE ───── */
function Marquee() {
  const items = [
    "Maderotherapy",
    "Lymphatic Drainage",
    "Body Sculpting",
    "Post-operative Care",
    "Metal Therapy",
    "Aesthetic Coaching",
  ];
  return (
    <section className="border-y border-border/60 py-6 overflow-hidden bg-ivory">
      <div className="flex items-center gap-12 whitespace-nowrap animate-[scroll_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-serif italic text-2xl text-foreground/70">
            {t} <span className="mx-6 text-accent">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </section>
  );
}

/* ───── ABOUT ───── */
function About() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="img-zoom rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={founder} alt="Vanessa Saboun" className="w-full h-[640px] object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow"><span className="gold-line" />The Founder</p>
          <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-[1.05]">
            Vanessa Saboun, <em className="italic font-light">a quiet revolution in modern aesthetics.</em>
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed">
            Trained between Paris, Geneva and Saint-Tropez, Vanessa has spent
            two decades shaping the silhouettes — and the confidence — of women
            from across Europe and the Middle East. Her academy is the
            distillation of that craft: an intimate house where post-surgical
            recovery, lymphatic flow and sculptural massage are taught with
            surgical precision and feminine intuition.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <Stat n="20" label="Years of practice" />
            <Stat n="3 200+" label="Students formed" />
            <Stat n="14" label="Countries" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl">{n}</div>
      <p className="eyebrow mt-2 text-[0.6rem]">{label}</p>
    </div>
  );
}

/* ───── EXPERTISE ───── */
function Expertise() {
  const items = [
    { title: "Maderotherapy", body: "Sculpting wood instruments to remodel the silhouette and stimulate circulation.", img: maderotherapy },
    { title: "Lymphatic Drainage", body: "A whisper-soft technique to detoxify, decongest and restore the body's natural flow.", img: drainage },
    { title: "Oils & Creams", body: "House-made formulas: cold-pressed oils and crèmes infused with Mediterranean botanicals.", img: oils },
  ];
  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow"><span className="gold-line" />Our Expertise</p>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 max-w-2xl leading-[1.05]">
              Rituals refined to an <em className="italic font-light">exact science.</em>
            </h2>
          </div>
          <Link to="/" className="text-sm uppercase tracking-[0.22em] underline underline-offset-8 decoration-accent hover:text-accent transition">
            All disciplines
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="hover-lift bg-background rounded-sm overflow-hidden">
              <div className="img-zoom aspect-[4/5]">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{it.body}</p>
                <Link to="/" className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] hover:text-accent transition">
                  Discover <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── PROGRAMS ───── */
function Programs() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <p className="eyebrow"><span className="gold-line" />Training Programs</p>
          <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-[1.05]">
            Become a <em className="italic font-light">master</em> of the modern silhouette.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-lg">
            Six certification paths — from the foundational Maderotherapy I to
            the elite Post-Operative Specialist — each delivered in our
            Parisian atelier with intimate cohorts of twelve.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["Maderotherapy · Foundation", "5 days"],
              ["Lymphatic Drainage · Vodder Method", "7 days"],
              ["Post-Operative Specialist", "10 days"],
              ["Metal Therapy · Cryo-sculpting", "4 days"],
              ["Master Class · Aesthetic Coaching", "3 days"],
            ].map(([t, d]) => (
              <li key={t} className="flex items-center justify-between py-5 group cursor-pointer">
                <span className="font-serif text-xl group-hover:translate-x-2 transition-transform duration-500">{t}</span>
                <span className="eyebrow text-[0.6rem]">{d}</span>
              </li>
            ))}
          </ul>
          <Link to="/" className="btn-luxury mt-10">
            Apply for 2026 cohort <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
          <div className="img-zoom rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={training} alt="Atelier Paris" className="w-full h-[680px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── GALLERY ───── */
function Gallery() {
  const imgs = [maderotherapy, drainage, oils, training];
  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow"><span className="gold-line" />Transformations</p>
          <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-[1.05]">
            Results, <em className="italic font-light">quietly remarkable.</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {imgs.map((img, i) => (
            <div key={i} className={`img-zoom overflow-hidden rounded-sm ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}>
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── SHOP ───── */
function Shop() {
  const products = [
    { name: "Crème Sculptante", price: "€86", img: product1, tag: "Bestseller" },
    { name: "Huile Précieuse", price: "€72", img: product2, tag: "New" },
    { name: "Bois de Massage", price: "€124", img: product3 },
    { name: "Outil Métal Thérapie", price: "€158", img: product4 },
  ];
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow"><span className="gold-line" />La Boutique</p>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-[1.05]">
              The <em className="italic font-light">house</em> collection.
            </h2>
          </div>
          <Link to="/" className="text-sm uppercase tracking-[0.22em] underline underline-offset-8 decoration-accent hover:text-accent transition">
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative img-zoom bg-ivory rounded-sm overflow-hidden aspect-[4/5]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                {p.tag && (
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em]">
                    {p.tag}
                  </span>
                )}
                <button className="absolute bottom-4 left-4 right-4 bg-foreground text-background py-3 text-[0.7rem] uppercase tracking-[0.24em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Quick Add
                </button>
              </div>
              <div className="mt-5 flex items-start justify-between">
                <h3 className="font-serif text-lg">{p.name}</h3>
                <span className="text-sm tracking-wider">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── TESTIMONIALS ───── */
function Testimonials() {
  const quotes = [
    {
      q: "Vanessa's hands have a memory of their own. After my surgery, her care gave me back not just my body, but my confidence.",
      who: "Sophie L.",
      role: "Patient · Paris",
    },
    {
      q: "The most rigorous training I have ever followed. Six months later, my client list has tripled.",
      who: "Camila R.",
      role: "Maderotherapist · Madrid",
    },
    {
      q: "An atelier where craft is treated as ceremony. Every detail is considered.",
      who: "Léa M.",
      role: "Aesthetician · Geneva",
    },
  ];
  return (
    <section className="py-32 px-6 lg:px-12 bg-[oklch(0.94_0.02_70)]">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow text-center"><span className="gold-line" />Whispers<span className="gold-line" /></p>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {quotes.map((q) => (
            <figure key={q.who} className="text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 text-accent mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-snug italic text-foreground/85">
                "{q.q}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="font-serif text-base">{q.who}</div>
                <div className="eyebrow mt-1 text-[0.6rem]">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── BOOKING CTA ───── */
function Booking() {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center text-background">
        <p className="eyebrow text-background/70"><span className="gold-line" />By Appointment</p>
        <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[1.02]">
          Step into the <em className="italic font-light">house.</em>
        </h2>
        <p className="mt-8 text-background/85 leading-relaxed max-w-xl mx-auto">
          Private consultations at our Parisian atelier and seasonal residency
          in Saint-Tropez. Each guest is received personally.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-luxury bg-background text-foreground border-background hover:bg-transparent hover:text-background">
            Reserve a session <ArrowUpRight size={14} />
          </Link>
          <Link to="/" className="btn-ghost-luxury text-background border-background hover:bg-background hover:text-foreground">
            WhatsApp Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───── JOURNAL ───── */
function Journal() {
  const posts = [
    { title: "The science of lymphatic flow", cat: "Wellness", img: drainage },
    { title: "Preparing for cosmetic surgery", cat: "Care", img: founder },
    { title: "Inside the Saint-Tropez residency", cat: "Maison", img: hero },
  ];
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow"><span className="gold-line" />Le Journal</p>
            <h2 className="font-serif text-5xl md:text-6xl mt-4">From the atelier.</h2>
          </div>
          <Link to="/blog" className="text-sm uppercase tracking-[0.22em] underline underline-offset-8 decoration-accent hover:text-accent transition">
            Read all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="img-zoom rounded-sm overflow-hidden aspect-[4/5]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="eyebrow mt-6">{p.cat}</p>
              <h3 className="font-serif text-2xl mt-3 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
