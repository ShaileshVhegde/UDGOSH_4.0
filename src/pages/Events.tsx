import EventVisual from "@/components/fest/EventVisual";
import { FestButton } from "@/components/fest/FestButton";
import PageShell from "@/components/fest/PageShell";
import SectionHeading from "@/components/fest/SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  eventCategories,
  events,
  generalRules,
  globalCoordinators,
  type FestivalEvent,
} from "@/data/events";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Info, MessageCircle, Phone } from "lucide-react";
import { useMemo, useState } from "react";

const categoryTone: Record<string, string> = {
  Music: "bg-gradient-to-br from-[#FFF4C2] to-[#F5C518]/30",
  Dance: "bg-gradient-to-br from-[#FFF0F7] to-[#FFD6E8]/70",
  Fashion: "bg-gradient-to-br from-[#FFF0F7] to-[#FF8A65]/25",
  Art: "bg-gradient-to-br from-[#FFF8E7] to-[#FFE8A3]/50",
  Traditional: "bg-gradient-to-br from-[#FFF5DC] to-[#F23A8A]/15",
  Culinary: "bg-gradient-to-br from-[#FFF8E7] to-[#F5C518]/35",
  Digital: "bg-gradient-to-br from-[#FFF0F7] to-[#FF8A65]/20",
  Gaming: "bg-gradient-to-br from-[#FFF3ED] to-[#FFD6E8]/40",
  "General Knowledge": "bg-gradient-to-br from-[#FFF8E7] to-[#FFE8A3]/60",
};

export default function Events() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return events;
    return events.filter((event) => event.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageShell>
      <div className="fest-container pb-16 pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="Competitions"
          title="Festival Events"
          subtitle="18 exciting categories to showcase your talent"
        />

        {/* Coordinators */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white p-5 sm:p-7"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">
                Need help registering?
              </p>
              <h2 className="mt-1 font-display text-2xl font-extrabold text-ink">
                Event Coordinators Details
              </h2>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Event Coordinator
                </p>
                <p className="mt-2 font-semibold text-ink">
                  {globalCoordinators.eventCoordinator.name}
                </p>
                <a
                  href={`tel:${globalCoordinators.eventCoordinator.phone.replace(/\s+/g, "")}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-rose"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {globalCoordinators.eventCoordinator.phone}
                </a>
              </div>
              <div className="rounded-2xl bg-blush/50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Student Coordinator
                </p>
                <ul className="mt-2 space-y-2">
                  {globalCoordinators.studentCoordinators.map((c) => (
                    <li key={c.name}>
                      <p className="font-semibold text-ink">{c.name}</p>
                      <a
                        href={`tel:${c.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-1.5 text-sm text-rose"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Filters */}
        <div className="sticky top-14 z-40 -mx-4 mb-6 bg-ivory/90 px-4 py-3 backdrop-blur-md sm:top-16 sm:mx-0 sm:rounded-2xl sm:border sm:border-ink/10 sm:bg-white/90 sm:px-3">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {eventCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition",
                  activeCategory === category
                    ? "bg-ink text-white"
                    : "bg-white text-muted-foreground ring-1 ring-ink/10 hover:text-ink",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Numbered editorial event list */}
        <div className="space-y-4">
          {filtered.map((event, index) => (
            <EventRow key={event.name} event={event} index={index} />
          ))}
        </div>

        {/* General rules */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[1.75rem] border border-ink/10 bg-plum p-6 text-white sm:p-8"
        >
          <h2 className="font-display text-2xl font-extrabold text-sunshine sm:text-3xl">
            General Rules and Regulations
          </h2>
          <ol className="mt-6 space-y-3">
            {generalRules.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/80 sm:text-base">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sunshine/20 font-display text-xs font-bold text-sunshine">
                  {i + 1}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </motion.section>
      </div>
    </PageShell>
  );
}

function EventRow({ event, index }: { event: FestivalEvent; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35 }}
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-sm transition hover:shadow-md",
        index % 2 === 1 && "lg:bg-[#FFFCF8]",
      )}
    >
      <div className="grid gap-0 lg:grid-cols-[160px_1fr]">
        {/* Event Visual & Badge Column */}
        <div
          className={cn(
            "flex items-center justify-between gap-3 border-b border-ink/5 p-4 sm:p-5 lg:flex-col lg:justify-center lg:border-b-0 lg:border-r lg:p-6",
            categoryTone[event.category] ?? "bg-butter/40",
          )}
        >
          <div className="flex items-center gap-3 lg:flex-col lg:gap-2">
            <span
              className="font-display text-2xl font-extrabold tracking-tight text-ink/40 sm:text-3xl"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              #{number}
            </span>
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/90 p-2 shadow-[0_4px_12px_rgba(42,31,45,0.06)] backdrop-blur-xs">
              <EventVisual name={event.name} category={event.category} className="h-full w-full object-contain" />
            </div>
          </div>
          <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-plum shadow-xs lg:hidden">
            {event.category}
          </span>
        </div>

        {/* Content & Action Buttons */}
        <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="hidden lg:inline-flex mb-2 rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-plum">
              {event.category}
            </div>
            <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">{event.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{event.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-plum/70">
              <span className="font-semibold text-ink">Incharge:</span>
              <span>{event.coordinator}</span>
              <span className="text-ink/30">•</span>
              <span className="font-semibold text-ink">Student:</span>
              <span>{event.S_coordinator}</span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:max-w-xs lg:w-56">
            <FestButton
              href={event.formLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="pink"
              className="w-full !py-2.5 text-sm"
            >
              Register <ExternalLink className="h-4 w-4" />
            </FestButton>
            <FestButton
              href={event.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full !py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Join WhatsApp Group
            </FestButton>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-ink/15 bg-white px-4 py-2.5 text-sm font-bold text-ink transition hover:border-rose hover:bg-blush/30 active:translate-y-0.5"
                >
                  <Info className="h-4 w-4" />
                  Rules & Regulations
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-border bg-ivory text-ink">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 font-display text-2xl">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-xs">
                      <EventVisual name={event.name} category={event.category} className="h-full w-full" />
                    </div>
                    <span>{event.name}</span>
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {event.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-2 space-y-4">
                  <div>
                    <h4 className="mb-2 font-display text-lg font-bold text-rose">Incharge</h4>
                    <div className="rounded-2xl border border-ink/10 bg-white p-4 text-sm">
                      <p className="mb-2">
                        <span className="font-semibold">Event Incharge:</span> {event.coordinator}
                      </p>
                      <p className="mb-3">
                        <span className="font-semibold">Contact:</span> {event.contactNumber}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">Student Coordinator:</span>{" "}
                        {event.S_coordinator}
                      </p>
                      <p>
                        <span className="font-semibold">Contact:</span> {event.S_contactNumber}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 font-display text-lg font-bold text-rose">
                      Rules & Regulations
                    </h4>
                    <div className="rounded-2xl border border-ink/10 bg-white p-4">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
                        {event.rules}
                      </pre>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
