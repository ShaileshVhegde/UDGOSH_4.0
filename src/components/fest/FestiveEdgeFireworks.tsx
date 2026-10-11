import React from "react";

interface FestiveEdgeFireworksProps {
  active: boolean;
}

interface BurstPoint {
  id: string;
  top: string;
  horizontal: string;
  isLeft: boolean;
  scale: number;
  delay: string;
  colorScheme: "gold" | "rose" | "mixed";
}

const BURST_POINTS: BurstPoint[] = [
  // Left viewport edge bursts (subtle, far from center)
  {
    id: "l1",
    top: "14%",
    horizontal: "2.5%",
    isLeft: true,
    scale: 0.9,
    delay: "0s",
    colorScheme: "gold",
  },
  {
    id: "l2",
    top: "36%",
    horizontal: "6%",
    isLeft: true,
    scale: 1.1,
    delay: "0.8s",
    colorScheme: "rose",
  },
  {
    id: "l3",
    top: "58%",
    horizontal: "3%",
    isLeft: true,
    scale: 0.85,
    delay: "1.4s",
    colorScheme: "mixed",
  },
  {
    id: "l4",
    top: "80%",
    horizontal: "5.5%",
    isLeft: true,
    scale: 1.0,
    delay: "0.4s",
    colorScheme: "gold",
  },

  // Right viewport edge bursts (subtle, far from center)
  {
    id: "r1",
    top: "16%",
    horizontal: "3%",
    isLeft: false,
    scale: 1.05,
    delay: "0.3s",
    colorScheme: "rose",
  },
  {
    id: "r2",
    top: "40%",
    horizontal: "5.5%",
    isLeft: false,
    scale: 0.85,
    delay: "1.1s",
    colorScheme: "gold",
  },
  {
    id: "r3",
    top: "64%",
    horizontal: "2.5%",
    isLeft: false,
    scale: 1.1,
    delay: "0.6s",
    colorScheme: "mixed",
  },
  {
    id: "r4",
    top: "82%",
    horizontal: "6%",
    isLeft: false,
    scale: 0.9,
    delay: "1.5s",
    colorScheme: "rose",
  },
];

function FireworkBurst({
  point,
}: {
  point: BurstPoint;
}) {
  const primaryColor =
    point.colorScheme === "gold"
      ? "#F5C518"
      : point.colorScheme === "rose"
        ? "#F23A8A"
        : "#FFA834";
  const secondaryColor =
    point.colorScheme === "gold"
      ? "#FFF2A8"
      : point.colorScheme === "rose"
        ? "#FF85B7"
        : "#F5C518";

  // 8 radiating particle offsets (angles around circle)
  const rays = [
    { dx: 0, dy: -28 },
    { dx: 20, dy: -20 },
    { dx: 28, dy: 0 },
    { dx: 20, dy: 20 },
    { dx: 0, dy: 28 },
    { dx: -20, dy: 20 },
    { dx: -28, dy: 0 },
    { dx: -20, dy: -20 },
  ];

  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: point.top,
        left: point.isLeft ? point.horizontal : undefined,
        right: !point.isLeft ? point.horizontal : undefined,
        transform: `scale(${point.scale})`,
      }}
    >
      {/* Central Expanding Burst */}
      <div
        className="fest-firework relative flex items-center justify-center"
        style={{
          animationDelay: point.delay,
        }}
      >
        <svg
          width="70"
          height="70"
          viewBox="-35 -35 70 70"
          className="overflow-visible"
        >
          {/* Subtle core flash */}
          <circle r="4" fill={primaryColor} opacity="0.9" />
          <circle r="8" fill={secondaryColor} opacity="0.4" />

          {/* Radiating Spark Rays */}
          {rays.map((ray, i) => (
            <g key={i}>
              <line
                x1={ray.dx * 0.35}
                y1={ray.dy * 0.35}
                x2={ray.dx}
                y2={ray.dy}
                stroke={i % 2 === 0 ? primaryColor : secondaryColor}
                strokeWidth={i % 2 === 0 ? "1.8" : "1.2"}
                strokeLinecap="round"
                opacity="0.85"
              />
              <circle
                cx={ray.dx * 1.08}
                cy={ray.dy * 1.08}
                r={i % 2 === 0 ? "1.6" : "1.1"}
                fill={secondaryColor}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Accompanying Twinkling Star Sparkle */}
      <div
        className="fest-sparkle absolute -top-3 -left-3"
        style={{
          animationDelay: `calc(${point.delay} + 0.4s)`,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={secondaryColor}
          className="drop-shadow-[0_0_6px_rgba(245,197,24,0.6)]"
        >
          <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Lightweight SVG celebratory sparkles and tiny firework bursts
 * along the far left and right edges of the hero viewport.
 * - Strictly behind all hero content (z-0)
 * - Appears only when active (banner fully open)
 * - Disappears completely when retracting
 * - Respects prefers-reduced-motion
 */
export default function FestiveEdgeFireworks({ active }: FestiveEdgeFireworksProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity duration-300 select-none ${active ? "opacity-100" : "opacity-0"
        }`}
      style={{
        visibility: active ? "visible" : "hidden",
      }}
    >
      {/* Left Viewport Edge Strip */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 md:w-56 overflow-visible pointer-events-none">
        {BURST_POINTS.filter((p) => p.isLeft).map((point) => (
          <FireworkBurst key={point.id} point={point} />
        ))}
      </div>

      {/* Right Viewport Edge Strip */}
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 md:w-56 overflow-visible pointer-events-none">
        {BURST_POINTS.filter((p) => !p.isLeft).map((point) => (
          <FireworkBurst key={point.id} point={point} />
        ))}
      </div>
    </div>
  );
}
