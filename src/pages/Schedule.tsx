import PageShell from "@/components/fest/PageShell";
import SectionHeading from "@/components/fest/SectionHeading";
import { scheduleData, scheduleNote, type ScheduleItem } from "@/data/schedule";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock3, MapPin } from "lucide-react";

function kindStyles(kind: ScheduleItem["kind"]) {
  switch (kind) {
    case "registration":
      return {
        rail: "bg-rose",
        badge: "bg-rose text-white",
        label: "Start",
      };
    case "prize":
      return {
        rail: "bg-sunshine",
        badge: "bg-sunshine text-ink",
        label: "Finale",
      };
    case "greenroom-boys":
      return {
        rail: "bg-coral",
        badge: "bg-coral/30 text-ink",
        label: "Info",
      };
    case "greenroom-ladies":
      return {
        rail: "bg-rose",
        badge: "bg-blush text-rose",
        label: "Info",
      };
    default:
      return {
        rail: "bg-butter",
        badge: "bg-ink/5 text-ink",
        label: "Event",
      };
  }
}

export default function Schedule() {
  const competitions = scheduleData.filter((item) => item.kind === "competition");
  const specials = scheduleData.filter((item) => item.kind !== "competition");

  return (
    <PageShell>
      <div className="fest-container pb-16 pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="Timeline"
          title="Event Schedule"
          subtitle="Plan your day with our detailed event timeline"
        />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink">
          <span className="h-2 w-2 rounded-full bg-rose" />
          November 22, 2025
        </div>

        {/* Mobile-first stacked timeline */}
        <div className="relative space-y-3">
          <div className="absolute bottom-4 left-[18px] top-4 w-px bg-border sm:left-[22px]" aria-hidden />

          {scheduleData.map((item, index) => {
            const styles = kindStyles(item.kind);
            return (
              <motion.article
                key={`${item.event}-${index}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.3 }}
                className="relative grid grid-cols-[36px_1fr] gap-3 sm:grid-cols-[44px_1fr] sm:gap-4"
              >
                <div className="relative z-10 flex justify-center pt-5">
                  <span
                    className={cn(
                      "h-3.5 w-3.5 rounded-full ring-4 ring-ivory sm:h-4 sm:w-4",
                      styles.rail,
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "rounded-[1.5rem] border border-ink/10 bg-white p-4 sm:p-5",
                    item.kind === "registration" && "bg-blush/40",
                    item.kind === "prize" && "bg-sunshine/30",
                    item.kind.startsWith("greenroom") && "bg-cream",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
                        styles.badge,
                      )}
                    >
                      {styles.label}
                    </span>
                    {item.time ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-2 font-display text-lg font-extrabold text-ink sm:text-xl">
                    {item.event}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-rose" />
                      {item.venue}
                    </span>
                    {item.date ? <span>{item.date}</span> : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Desktop scan helper */}
        <div className="mt-10 hidden overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white lg:block">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-0 border-b border-ink/10 bg-cream px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span>Event Name</span>
            <span>Venue</span>
            <span>Time</span>
            <span>Date</span>
          </div>
          {scheduleData.map((item, index) => (
            <div
              key={`table-${item.event}-${index}`}
              className={cn(
                "grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-0 border-b border-ink/5 px-5 py-3.5 text-sm last:border-b-0",
                index % 2 === 1 && "bg-ivory/70",
              )}
            >
              <span className="font-semibold text-ink">{item.event}</span>
              <span className="text-muted-foreground">{item.venue}</span>
              <span className="text-muted-foreground">{item.time ?? "—"}</span>
              <span className="text-muted-foreground">{item.date ?? "—"}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {competitions.length} competitions listed · {specials.length} special entries
          <br />
          {scheduleNote}
        </p>
      </div>
    </PageShell>
  );
}
