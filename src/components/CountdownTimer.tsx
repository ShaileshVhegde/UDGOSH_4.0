import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({
  targetDate,
  className,
}: {
  targetDate: Date;
  className?: string;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetDate));
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    {
      label: "Days",
      value: timeLeft.days,
      gradient: "from-[#FFF4C2] to-[#F5C518]/25 border-amber-300/50",
      accent: "text-amber-900",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      gradient: "from-[#FFF8E7] to-[#FFE8A3]/35 border-amber-200/60",
      accent: "text-amber-900/90",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      gradient: "from-[#FFF0F7] to-[#FFD6E8]/45 border-pink-200/60",
      accent: "text-rose-950",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      gradient: "from-[#FFF3ED] to-[#FF8A65]/25 border-orange-200/60",
      accent: "text-orange-950",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-2 min-[440px]:grid-cols-4 gap-2.5 sm:gap-3.5",
        className,
      )}
    >
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          className={cn(
            "relative flex min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl",
            "border bg-gradient-to-b p-3 sm:p-4 text-center",
            "shadow-[0_4px_16px_rgba(42,31,45,0.06),0_1px_0_0_rgba(255,255,255,0.8)_inset]",
            unit.gradient,
          )}
        >
          {/* Subtle top gloss highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/70" />

          <div
            className={cn(
              "font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl lg:text-4xl",
              "tabular-nums text-ink select-none",
            )}
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {unit.value.toString().padStart(2, "0")}
          </div>

          <div className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-plum/70 sm:text-xs">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
