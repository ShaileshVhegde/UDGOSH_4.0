import CountdownTimer from "@/components/CountdownTimer";
import DroneBannerAnimation from "@/components/fest/DroneBannerAnimation";
import EventVisual from "@/components/fest/EventVisual";
import { FestButton } from "@/components/fest/FestButton";
import FestiveEdgeFireworks from "@/components/fest/FestiveEdgeFireworks";
import PageShell from "@/components/fest/PageShell";
import { events } from "@/data/events";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Sparkles, Trophy, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const EVENT_DATE = new Date("2026-10-29T09:00:00");

const highlights = [
  {
    title: "18 Exciting Events",
    description: "From singing to gaming, showcase your talent in diverse categories",
    mark: "01",
    tone: "bg-gradient-to-br from-[#FFF4C2] to-[#F5C518]/25 border-amber-300/50",
    icon: Zap,
  },
  {
    title: "Amazing Cash Prizes",
    description: "Exciting rewards, certificates, and attractive cash prizes for top performers",
    mark: "02",
    tone: "bg-gradient-to-br from-[#FFF0F7] to-[#FFD6E8]/70 border-pink-200/60",
    icon: Trophy,
  },
  {
    title: "Cultural Experience",
    description: "Celebrate diversity, build memories, and connect with fellow students",
    mark: "03",
    tone: "bg-gradient-to-br from-[#FFF8E7] to-[#FFE8A3]/45 border-amber-200/60",
    icon: Users,
  },
];

const previewEvents = events.slice(0, 6);

const heroTitleVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -2.5,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 18,
      delay: 0.22,
    },
  },
};

const floatingSparkVariants: Variants = {
  animate: {
    y: [0, -6, 0],
    rotate: [0, 8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const [isBannerDisplaying, setIsBannerDisplaying] = useState(false);

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle edge fireworks & celebratory sparkles strictly active during banner display */}
        <FestiveEdgeFireworks active={isBannerDisplaying} />

        <div className="pointer-events-none absolute inset-0 fest-grain opacity-60" />
        <div className="pointer-events-none absolute -right-24 top-6 h-72 w-72 rounded-full bg-sunshine/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-4 h-64 w-64 rounded-full bg-rose/15 blur-3xl" />

        <div className="fest-container relative grid items-center gap-8 pb-10 pt-6 sm:gap-10 sm:pb-16 sm:pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:pt-12">
          {/* Hero left content */}
          <div className="relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08 }}
            >
              {/* College Cultural Fest pill */}
              <motion.div variants={heroTitleVariants} className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-plum shadow-xs backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5 text-rose" />
                <span>Inter-Collegiate Cultural Fest</span>
              </motion.div>

              {/* Main UDGOSH 4.0 Hero Title with signature animation & typography */}
              <motion.div variants={heroTitleVariants} className="relative">
                {/* Floating festival decorative spark */}
                <motion.div
                  variants={floatingSparkVariants}
                  animate="animate"
                  className="pointer-events-none absolute -top-4 right-16 hidden text-sunshine sm:block"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                  </svg>
                </motion.div>

                <h1 className="font-display text-[3.25rem] font-extrabold leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
                  <span className="relative inline-block">
                    {/* Subtle warm sunshine-yellow and pink lighting effect glow behind wordmark */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-x-3 -inset-y-1 -z-10 rounded-full bg-gradient-to-r from-sunshine/30 via-rose/20 to-amber-300/25 blur-xl sm:blur-2xl"
                    />
                    {/* Distinctive wordmark combining deep plum/charcoal, warm pink accents, and sunshine-yellow illumination */}
                    <span className="bg-gradient-to-br from-[#1C0D20] via-[#35123A] 55% via-[#751652] 78% to-[#E11D74] bg-clip-text text-transparent filter drop-shadow-[0_2px_14px_rgba(245,197,24,0.28)]">
                      UDGOSH
                    </span>
                  </span>
                  <DroneBannerAnimation onDisplayChange={setIsBannerDisplaying} />
                </h1>
              </motion.div>

              <motion.p
                variants={heroTitleVariants}
                className="mt-4 max-w-xl font-display text-xl font-bold tracking-tight text-plum sm:text-2xl"
              >
                Celebrating the Spectrum of Talent
              </motion.p>

              <motion.p
                variants={heroTitleVariants}
                className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                Organized by Department of BCA, KLE Society&apos;s College of Computer Application,
                Dharwad
              </motion.p>

              <motion.div
                variants={heroTitleVariants}
                className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <div className="inline-flex items-center gap-2 rounded-2xl border border-ink/[0.08] bg-white px-3.5 py-2.5 text-sm font-semibold text-ink shadow-[0_3px_0_0_rgba(42,31,45,0.06)]">
                  <CalendarDays className="h-4 w-4 text-rose" />
                  October 29, 2026
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl border border-ink/[0.08] bg-white px-3.5 py-2.5 text-sm font-medium text-ink/80 shadow-[0_3px_0_0_rgba(42,31,45,0.06)]">
                  <MapPin className="h-4 w-4 shrink-0 text-sunshine" />
                  <span className="line-clamp-2 sm:line-clamp-none">
                    KLE Society&apos;s College of Computer Application Dharwad
                  </span>
                </div>
              </motion.div>

              {/* Main CTAs */}
              <motion.div
                variants={heroTitleVariants}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <FestButton to="/events" variant="pink" pulse className="w-full sm:w-auto">
                  Register Now <ArrowRight className="h-4 w-4" />
                </FestButton>
                <FestButton to="/schedule" variant="secondary" className="w-full sm:w-auto">
                  View Schedule
                </FestButton>
              </motion.div>

              {/* Quick nav pills */}
              <motion.div variants={heroTitleVariants} className="mt-5 flex flex-wrap gap-2">
                {[
                  { to: "/about", label: "About" },
                  { to: "/events", label: "Events" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-full border border-ink/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-rose/40 hover:text-rose"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Hero right countdown card — redesigned, spacious, unclipped */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-sunshine/70 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-2 h-24 w-24 rounded-full bg-rose/30 blur-2xl pointer-events-none" />

            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white p-5 sm:p-7 shadow-[0_20px_50px_rgba(61,36,56,0.08)]">
              {/* Countdown panel header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose">
                      Live Countdown
                    </p>
                    <p className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                      29 October 2026
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-xl border border-ink/10 bg-cream/70 px-2.5 py-1.5 text-xs font-semibold text-plum">
                  <MapPin className="h-3.5 w-3.5 text-rose shrink-0" />
                  <span>RLS Campus, Dharwad</span>
                </div>
              </div>

              {/* Ticking Countdown Timer */}
              <CountdownTimer targetDate={EVENT_DATE} className="mt-5" />

              {/* Fest highlights bar below timer */}
              <div className="mt-5 grid grid-cols-3 gap-2 text-center pt-2">
                {[
                  { n: "18", l: "Competitions", tone: "bg-sunshine/15 border-amber-300/40" },
                  { n: "1", l: "Grand Day", tone: "bg-blush/40 border-pink-200/60" },
                  { n: "₹ Cash", l: "Prizes & Awards", tone: "bg-butter/45 border-amber-200/60" },
                ].map((stat) => (
                  <div key={stat.l} className={cn("rounded-2xl border p-2.5 sm:p-3", stat.tone)}>
                    <p className="font-display text-lg sm:text-xl font-extrabold leading-tight text-ink">{stat.n}</p>
                    <p className="mt-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground truncate">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Marquee ticker with festival sparkles - seamless looping */}
      <section className="overflow-hidden border-y border-ink/10 bg-sunshine py-3 select-none" aria-hidden>
        <div className="fest-marquee flex w-max whitespace-nowrap">
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {events.map((event, i) => (
              <span
                key={`${event.name}-${i}`}
                className="inline-flex items-center gap-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-ink"
              >
                <span className="text-rose">✦</span>
                <span>{event.name}</span>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {events.map((event, i) => (
              <span
                key={`${event.name}-dup-${i}`}
                className="inline-flex items-center gap-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-ink"
              >
                <span className="text-rose">✦</span>
                <span>{event.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why participate section */}
      <section className="fest-container py-14 sm:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose">Why join</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-5xl">
              Why Participate?
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            A bright stage for every talent — traditional, digital, musical, and everything in between.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={cn(
                  "relative overflow-hidden rounded-[1.75rem] border p-6 sm:p-7 shadow-xs",
                  item.tone,
                  index === 1 && "md:translate-y-3",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-ink/30">{item.mark}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 shadow-xs">
                    <Icon className="h-5 w-5 text-ink" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Featured Events Lineup Preview using EventVisual */}
      <section className="bg-white/80 py-14 sm:py-20 border-t border-ink/[0.06]">
        <div className="fest-container">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose">Lineup</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-5xl">
                Find Your Stage
              </h2>
            </div>
            <FestButton to="/events" variant="secondary">
              Explore all 18 events <ArrowRight className="h-4 w-4" />
            </FestButton>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {previewEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-4 rounded-3xl border border-ink/10 bg-ivory p-4 transition duration-200 hover:-translate-y-0.5 hover:border-rose/30 hover:shadow-[0_12px_30px_rgba(61,36,56,0.06)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-xs transition group-hover:scale-105">
                  <EventVisual name={event.name} category={event.category} className="h-full w-full" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-rose">
                    {event.category}
                  </p>
                  <h3 className="truncate font-display text-base sm:text-lg font-bold text-ink">{event.name}</h3>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
