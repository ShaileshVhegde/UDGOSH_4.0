import { useEffect, useId, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

export type Stage =
  | "approach" // 0.0s - 1.8s: Drone flies in from outside top-right carrying rolled banner
  | "unroll"   // 1.8s - 3.0s: Drone hovers; pennant unrolls downward smoothly
  | "display"  // 3.0s - 8.0s: Fully open vertical pennant displayed for 5s; fireworks active
  | "retract"  // 8.0s - 9.0s: Banner rolls back up into compact bundle; fireworks vanish
  | "exit"     // 9.0s - 10.4s: Drone carries rolled bundle up & off-screen to top-left
  | "reset";   // 10.4s - 11.2s: Clean off-screen pause before fresh cycle begins

interface FlightCoords {
  startX: number;
  startY: number;
  exitX: number;
  exitY: number;
  isMobile: boolean;
}

/**
 * Propeller rotor with semi-transparent motion-blur disc and spinning blades
 */
function DroneRotor({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      {/* Motion-blur disc halo */}
      <ellipse
        cx="0"
        cy="0"
        rx="14"
        ry="4"
        fill="rgba(245, 197, 24, 0.22)"
        stroke="rgba(245, 197, 24, 0.55)"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      {/*
        Spinning blade group.
        Use pure SVG animateTransform — most reliable across Chrome, Firefox, Safari.
        CSS "animation" on inline SVG <g> with transformOrigin is inconsistent in Firefox.
      */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="0.08s"
          repeatCount="indefinite"
        />
        <path
          d="M -13 -1.2 Q 0 -2.4 13 -1.2 Q 0 0 -13 -1.2 Z"
          fill="#F5C518"
          opacity="0.95"
        />
        <circle cx="0" cy="0" r="2.2" fill="#2A1F2D" />
        <circle cx="0" cy="0" r="1.1" fill="#F5C518" />
      </g>
    </g>
  );
}

/**
 * Custom SVG Drone illustration
 * Quadcopter with dark plum & festival pink canopy, carbon arms,
 * spinning rotors, blinking navigation beacon, sensor lens, and winch latch.
 */
function DroneIllustration({ idPrefix }: { idPrefix: string }) {
  return (
    <svg
      viewBox="0 0 120 68"
      className="h-full w-full overflow-visible drop-shadow-[0_8px_18px_rgba(42,31,45,0.35)] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${idPrefix}-fuselageGrad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#44283D" />
          <stop offset="55%" stopColor="#2A1F2D" />
          <stop offset="100%" stopColor="#19111C" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-festivalAccent`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F23A8A" />
          <stop offset="60%" stopColor="#EA2E82" />
          <stop offset="100%" stopColor="#F5C518" />
        </linearGradient>
        <radialGradient id={`${idPrefix}-beaconGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${idPrefix}-headlightCone`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(245, 197, 24, 0.4)" />
          <stop offset="100%" stopColor="rgba(245, 197, 24, 0)" />
        </linearGradient>
      </defs>

      {/* Soft downward illumination beam */}
      <path
        d="M 52 46 L 40 68 L 80 68 L 68 46 Z"
        fill={`url(#${idPrefix}-headlightCone)`}
        opacity="0.45"
      />

      {/* Carbon fiber diagonal rotor arms */}
      <path d="M 60 36 L 24 18" stroke="#2A1F2D" strokeWidth="4" strokeLinecap="round" />
      <path d="M 60 36 L 96 18" stroke="#2A1F2D" strokeWidth="4" strokeLinecap="round" />
      <path d="M 60 36 L 16 46" stroke="#2A1F2D" strokeWidth="4" strokeLinecap="round" />
      <path d="M 60 36 L 104 46" stroke="#2A1F2D" strokeWidth="4" strokeLinecap="round" />

      {/* Arm trim racing stripes */}
      <path d="M 58 35 L 26 19" stroke="#F5C518" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M 62 35 L 94 19" stroke="#F5C518" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M 58 37 L 20 46" stroke="#F23A8A" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M 62 37 L 100 46" stroke="#F23A8A" strokeWidth="1" strokeOpacity="0.8" />

      {/* Motor hub housings */}
      <circle cx="24" cy="18" r="4.5" fill="#3D2438" stroke="#F5C518" strokeWidth="1" />
      <circle cx="96" cy="18" r="4.5" fill="#3D2438" stroke="#F5C518" strokeWidth="1" />
      <circle cx="16" cy="46" r="4.5" fill="#3D2438" stroke="#F5C518" strokeWidth="1" />
      <circle cx="104" cy="46" r="4.5" fill="#3D2438" stroke="#F5C518" strokeWidth="1" />

      {/* 4 Spinning Rotors */}
      <DroneRotor cx={24} cy={18} />
      <DroneRotor cx={96} cy={18} />
      <DroneRotor cx={16} cy={46} />
      <DroneRotor cx={104} cy={46} />

      {/* Landing skids */}
      <path d="M 44 44 L 40 52 L 32 52" stroke="#2A1F2D" strokeWidth="2" strokeLinecap="round" />
      <path d="M 76 44 L 80 52 L 88 52" stroke="#2A1F2D" strokeWidth="2" strokeLinecap="round" />

      {/* Main Fuselage Canopy */}
      <path
        d="M 46 28 C 46 23 52 19 60 19 C 68 19 74 23 74 28 L 76 38 C 76 44 69 46 60 46 C 51 46 44 44 44 38 Z"
        fill={`url(#${idPrefix}-fuselageGrad)`}
        stroke="#3D2438"
        strokeWidth="1.5"
      />

      {/* Festival Gradient Racing Shell */}
      <path
        d="M 50 30 C 50 25 54 22 60 22 C 66 22 70 25 70 30 L 71 36 C 71 41 66 42 60 42 C 54 42 49 41 49 36 Z"
        fill={`url(#${idPrefix}-festivalAccent)`}
      />

      {/* Front Cockpit Lens / Sensor */}
      <ellipse cx="60" cy="38" rx="5" ry="3.5" fill="#1C0D20" stroke="#38BDF8" strokeWidth="1" />
      <circle cx="61.5" cy="37" r="1.2" fill="#FFFFFF" opacity="0.9" />

      {/* Top Beacon Strobe */}
      <circle cx="60" cy="18" r="4.5" fill={`url(#${idPrefix}-beaconGlow)`} />
      <circle cx="60" cy="18" r="1.8" fill="#38BDF8" className="animate-pulse" />

      {/* Winch Mechanism */}
      <rect x="53" y="44" width="14" height="5" rx="2" fill="#F5C518" stroke="#2A1F2D" strokeWidth="1" />
      <circle cx="56.5" cy="48.5" r="1.2" fill="#10B981" />
      <circle cx="63.5" cy="48.5" r="1.2" fill="#F5C518" />
    </svg>
  );
}

/**
 * Vertical Festival Pennant Component
 * - Fixed top spreader bar with suspension rings and compact rolled bundle
 * - Smooth downward unrolling HTML container revealing full 4.0 pennant
 * - Perfectly synchronized without any SVG clipPath attribute bugs
 */
function VerticalPennant({
  stage,
  sparkleActive,
  idPrefix,
  isMobile,
}: {
  stage: Stage;
  sparkleActive?: boolean;
  idPrefix: string;
  isMobile: boolean;
}) {
  const fullFabricHeight = isMobile ? 86 : 102;

  return (
    <div className="relative flex flex-col items-center justify-start select-none w-full h-full drop-shadow-[0_14px_28px_rgba(242,58,138,0.45)]">
      {/* 
        1. TOP HORIZONTAL SPREADER ROLLER ROD (Always at top)
      */}
      <div className="relative z-20 w-full h-[14px]">
        <svg
          viewBox="0 0 76 14"
          className="w-full h-full overflow-visible select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${idPrefix}-rollerRodGrad`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF4C2" />
              <stop offset="40%" stopColor="#F5C518" />
              <stop offset="85%" stopColor="#D89E00" />
              <stop offset="100%" stopColor="#8A6300" />
            </linearGradient>
            <linearGradient id={`${idPrefix}-coiledRollGrad`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF4C2" />
              <stop offset="25%" stopColor="#F23A8A" />
              <stop offset="70%" stopColor="#B51A5E" />
              <stop offset="100%" stopColor="#2A1F2D" />
            </linearGradient>
          </defs>

          {/* Left cable suspension ring */}
          <path
            d="M 19 5 L 19 2 A 2 2 0 0 1 23 2 L 23 5"
            stroke="#F5C518"
            strokeWidth="1.4"
            fill="none"
          />
          {/* Right cable suspension ring */}
          <path
            d="M 53 5 L 53 2 A 2 2 0 0 1 57 2 L 57 5"
            stroke="#F5C518"
            strokeWidth="1.4"
            fill="none"
          />

          {/* Spreader Bar */}
          <rect
            x="2"
            y="5"
            width="72"
            height="6"
            rx="3"
            fill={`url(#${idPrefix}-rollerRodGrad)`}
            stroke="#D89E00"
            strokeWidth="0.8"
          />
          <line x1="5" y1="6.5" x2="71" y2="6.5" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />

          {/* Left scroll knob finial */}
          <circle cx="2" cy="8" r="3.5" fill="#F5C518" stroke="#D89E00" strokeWidth="1" />
          <circle cx="2" cy="8" r="1.5" fill="#FFFFFF" opacity="0.6" />

          {/* Right scroll knob finial */}
          <circle cx="74" cy="8" r="3.5" fill="#F5C518" stroke="#D89E00" strokeWidth="1" />
          <circle cx="74" cy="8" r="1.5" fill="#FFFFFF" opacity="0.6" />

          {/* Compact coiled fabric bundle shown when rolled */}
          <motion.g
            variants={{
              approach: { opacity: 1 },
              unroll: { opacity: [1, 0], transition: { duration: 0.3 } },
              display: { opacity: 0 },
              retract: { opacity: [0, 0, 1], transition: { duration: 1.0, times: [0, 0.7, 1] } },
              exit: { opacity: 1 },
              reset: { opacity: 1 },
            }}
            animate={stage}
          >
            <rect
              x="5"
              y="7.5"
              width="66"
              height="6.5"
              rx="3.25"
              fill={`url(#${idPrefix}-coiledRollGrad)`}
              stroke="#F5C518"
              strokeWidth="0.8"
            />
            <line x1="8" y1="9" x2="68" y2="9" stroke="#FFFFFF" strokeWidth="1" opacity="0.75" />
            <line x1="8" y1="12" x2="68" y2="12" stroke="#2A1F2D" strokeWidth="1" opacity="0.6" />
          </motion.g>
        </svg>
      </div>

      {/* 
        2. UNROLLING FABRIC BODY CONTAINER (Reveals downwards smoothly from behind spreader bar)
      */}
      <motion.div
        className="relative z-10 w-full -mt-1.5 overflow-hidden flex flex-col items-center"
        variants={{
          approach: { height: 0 },
          unroll: {
            height: fullFabricHeight,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
          },
          display: {
            height: fullFabricHeight,
            transition: { duration: 0.1 },
          },
          retract: {
            height: 0,
            transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] as const },
          },
          exit: { height: 0 },
          reset: { height: 0 },
        }}
        animate={stage}
      >
        <svg
          viewBox="0 0 76 104"
          className="w-full h-[104px] overflow-visible select-none shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${idPrefix}-pennantBodyGrad`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F23A8A" />
              <stop offset="38%" stopColor="#EA2E82" />
              <stop offset="74%" stopColor="#B51A5E" />
              <stop offset="100%" stopColor="#4A1938" />
            </linearGradient>
            <linearGradient id={`${idPrefix}-pennantGoldBorder`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF4C2" />
              <stop offset="45%" stopColor="#F5C518" />
              <stop offset="100%" stopColor="#D89E00" />
            </linearGradient>
            <filter id={`${idPrefix}-text3DShadow`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#2A1F2D" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* Continuous pennant body + triangular tip: Top(4,0) -> Right(72,0) -> Corner(72,74) -> Tip(38,102) -> Corner(4,74) -> Z */}
          <path
            d="M 4 0 L 72 0 L 72 74 L 38 102 L 4 74 Z"
            fill={`url(#${idPrefix}-pennantBodyGrad)`}
            stroke={`url(#${idPrefix}-pennantGoldBorder)`}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Warm ivory inner stitch border */}
          <path
            d="M 7 3 L 69 3 L 69 72 L 38 97.5 L 7 72 Z"
            stroke="rgba(255, 248, 240, 0.5)"
            strokeWidth="0.8"
            strokeDasharray="2 1.5"
            fill="none"
          />

          {/* Subtle fabric lighting sheen */}
          <path
            d="M 7 3 L 38 3 L 38 97.5 L 7 72 Z"
            fill="rgba(255, 255, 255, 0.07)"
          />

          {/* Top Decorative Sparkle Accent */}
          <path
            d="M 38 8 L 39.5 12.5 L 44 12.5 L 40.5 15 L 42 19.5 L 38 17 L 34 19.5 L 35.5 15 L 32 12.5 L 36.5 12.5 Z"
            fill="#F5C518"
            opacity="0.95"
          />

          {/* Grand "4.0" focal typography */}
          <text
            x="38"
            y="49"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="-1.2"
            filter={`url(#${idPrefix}-text3DShadow)`}
          >
            4.0
          </text>

          {/* Specular curved gloss sheen over top of 4.0 */}
          <ellipse
            cx="38"
            cy="33"
            rx="26"
            ry="11"
            fill="rgba(255, 255, 255, 0.16)"
          />

          {/* Secondary festive sub-tag below 4.0 */}
          <text
            x="38"
            y="65"
            textAnchor="middle"
            fill="#FFF4C2"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="800"
            fontSize="7"
            letterSpacing="2"
            opacity="0.95"
          >
            UDGOSH
          </text>

          {/* Subtle diamond sparks framing festival sub-tag */}
          <circle cx="15" cy="63" r="1.2" fill="#F5C518" />
          <circle cx="61" cy="63" r="1.2" fill="#F5C518" />

          {/* Triangular point festival diamond emblem */}
          <polygon
            points="38,77 41.5,83 38,89 34.5,83"
            fill="#F5C518"
            opacity="0.85"
          />

          {/* Golden finial / tassel at the inverted triangular tip */}
          <circle cx="38" cy="101" r="2.2" fill="#F5C518" stroke="#D89E00" strokeWidth="0.8" />
          <path d="M 38 103 L 36 106 L 40 106 Z" fill="#F5C518" />
        </svg>
      </motion.div>

      {/* Sparkle burst particles on unroll complete */}
      {sparkleActive && (
        <>
          <span className="pointer-events-none absolute -top-3 left-1 animate-ping text-[12px] text-sunshine">
            ✨
          </span>
          <span className="pointer-events-none absolute -top-3 right-1 animate-ping text-[12px] text-sunshine [animation-delay:150ms]">
            ✨
          </span>
          <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 animate-ping text-[12px] text-sunshine [animation-delay:300ms]">
            ✨
          </span>
        </>
      )}
    </div>
  );
}

export default function DroneBannerAnimation({
  onDisplayChange,
}: {
  onDisplayChange?: (isDisplaying: boolean) => void;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const idPrefix = useId().replace(/:/g, "_");
  // Keep onDisplayChange in a ref to avoid stale closure without adding it as a dep
  const onDisplayChangeRef = useRef(onDisplayChange);
  useEffect(() => { onDisplayChangeRef.current = onDisplayChange; });

  // Strict sequential coordinated stage controller
  const [stage, setStage] = useState<Stage>("approach");
  const [sparkleBurst, setSparkleBurst] = useState(false);
  const [coords, setCoords] = useState<FlightCoords>({
    startX: 850,
    startY: -320,
    exitX: -650,
    exitY: -320,
    isMobile: false,
  });

  // Calculate dynamic off-screen entry and exit coordinates relative to container
  useEffect(() => {
    function computeCoords() {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      const isMobile = width < 640;

      let startX = isMobile ? 380 : 850;
      let startY = isMobile ? -220 : -320;
      let exitX = isMobile ? -380 : -650;
      let exitY = isMobile ? -220 : -320;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Start completely past right edge of viewport
        startX = Math.max(300, (width - rect.left) + 160);
        startY = Math.min(-180, -rect.top - 120);

        // Exit completely past left edge of viewport
        exitX = Math.min(-300, -rect.right - 160);
        exitY = Math.min(-180, -rect.top - 120);
      }

      setCoords({ startX, startY, exitX, exitY, isMobile });
    }

    computeCoords();
    window.addEventListener("resize", computeCoords);
    return () => window.removeEventListener("resize", computeCoords);
  }, []);

  // Coordinated lifecycle timer: approach -> unroll -> display (5s) -> retract -> exit -> reset
  useEffect(() => {
    const durations: Record<Stage, number> = {
      approach: 1800,
      unroll: 1200,
      display: 5000,
      retract: 1000,
      exit: 1400,
      reset: 800,
    };

    const nextStages: Record<Stage, Stage> = {
      approach: "unroll",
      unroll: "display",
      display: "retract",
      retract: "exit",
      exit: "reset",
      reset: "approach",
    };

    // Notify parent about display stage (fireworks on/off)
    onDisplayChangeRef.current?.(stage === "display");

    if (stage === "unroll") {
      const sparkleTimer = window.setTimeout(() => setSparkleBurst(true), 700);
      const stopSparkleTimer = window.setTimeout(() => setSparkleBurst(false), 1600);
      const mainTimer = window.setTimeout(() => setStage(nextStages[stage]), durations[stage]);
      return () => {
        window.clearTimeout(sparkleTimer);
        window.clearTimeout(stopSparkleTimer);
        window.clearTimeout(mainTimer);
      };
    }

    const timer = window.setTimeout(() => setStage(nextStages[stage]), durations[stage]);
    return () => window.clearTimeout(timer);
  }, [stage]);

  const droneHoverY = coords.isMobile ? -42 : -48;
  const droneWidth = coords.isMobile ? 72 : 84;
  const droneHeight = coords.isMobile ? 40 : 48;

  // Single unified rig animation variants
  const rigVariants: Variants = {
    approach: {
      x: [coords.startX, 0],
      y: [coords.startY, 0],
      rotate: [-7, 0],
      opacity: [0, 1],
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    unroll: {
      x: 0,
      y: [0, -2, 0],
      rotate: [0, 0.5, -0.5, 0],
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    display: {
      x: 0,
      y: [0, -1.5, 0],
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    retract: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
    exit: {
      x: coords.exitX,
      y: coords.exitY,
      rotate: -10,
      opacity: [1, 1, 0],
      transition: {
        duration: 1.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    reset: {
      x: coords.startX,
      y: coords.startY,
      rotate: -7,
      opacity: 0,
      transition: {
        duration: 0.05,
      },
    },
  };

  return (
    <span
      ref={containerRef}
      className="relative inline-block align-middle ml-2 sm:ml-3 select-none"
      style={{
        verticalAlign: "middle",
        width: coords.isMobile ? 66 : 78,
        height: coords.isMobile ? 96 : 114,
      }}
    >
      {/* 
        COORDINATED FLIGHT CARRIER RIG:
        Houses the Drone, the Suspension Cables, and the Vertical Pennant
        as ONE mechanically unified flight vehicle.
        Zero orphaned cables, zero detached parts, zero stuck shadows!
      */}
      <motion.span
        className="absolute inset-0 block pointer-events-none overflow-visible"
        variants={rigVariants}
        animate={stage}
      >
        {/* 1. Quadcopter Drone hovering at calculated altitude above pennant */}
        <span
          className="absolute block pointer-events-none"
          style={{
            top: droneHoverY,
            left: "50%",
            transform: "translateX(-50%)",
            width: droneWidth,
            height: droneHeight,
          }}
        >
          <DroneIllustration idPrefix={idPrefix} />
        </span>

        {/* 
          2. Suspension Cables connecting drone winch to pennant top rings:
          - Drone winch center is at left: 50%, top: droneHoverY + 32px
          - Pennant left ring is at (50% - 17px), top: 4px
          - Pennant right ring is at (50% + 17px), top: 4px
        */}
        <svg
          className="absolute inset-0 pointer-events-none overflow-visible"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <filter id={`${idPrefix}-cableGlow`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#F5C518" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Left suspension cable */}
          <line
            x1="calc(50% - 7px)"
            y1={droneHoverY + (droneHeight * 0.72)}
            x2="calc(50% - 17px)"
            y2="4"
            stroke="#F5C518"
            strokeWidth="1.8"
            strokeDasharray="3 1.5"
            filter={`url(#${idPrefix}-cableGlow)`}
          />

          {/* Right suspension cable */}
          <line
            x1="calc(50% + 7px)"
            y1={droneHoverY + (droneHeight * 0.72)}
            x2="calc(50% + 17px)"
            y2="4"
            stroke="#F5C518"
            strokeWidth="1.8"
            strokeDasharray="3 1.5"
            filter={`url(#${idPrefix}-cableGlow)`}
          />
        </svg>

        {/* 3. Vertical Festival Pennant */}
        <span className="relative z-10 block w-full h-full">
          <VerticalPennant
            stage={stage}
            sparkleActive={sparkleBurst}
            idPrefix={idPrefix}
            isMobile={coords.isMobile}
          />
        </span>
      </motion.span>
    </span>
  );
}
