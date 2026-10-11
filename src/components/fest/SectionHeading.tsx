import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "mb-8 sm:mb-12",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center rounded-full border border-rose/25 bg-blush/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-plum sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
