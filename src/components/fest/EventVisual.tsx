import React from "react";

interface EventVisualProps {
  name: string;
  category?: string;
  className?: string;
}

export default function EventVisual({ name, category, className = "w-12 h-12" }: EventVisualProps) {
  switch (name) {
    case "Solo Singing":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Solo Singing Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF8E7" />
          {/* Sound waves */}
          <path d="M42 20C45 23 47 27 47 32C47 37 45 41 42 44" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M47 15C52 19 55 25 55 32C55 39 52 45 47 49" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
          {/* Mic head */}
          <rect x="24" y="14" width="16" height="24" rx="8" fill="#F23A8A" />
          {/* Mic grille mesh lines */}
          <line x1="24" y1="22" x2="40" y2="22" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="24" y1="28" x2="40" y2="28" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="32" y1="14" x2="32" y2="38" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          {/* U cradle */}
          <path d="M20 28C20 35.7 25.4 42 32 42C38.6 42 44 35.7 44 28" stroke="#3D2438" strokeWidth="2.5" strokeLinecap="round" />
          {/* Stand and base */}
          <path d="M32 42V52" stroke="#3D2438" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 52H42" stroke="#3D2438" strokeWidth="3" strokeLinecap="round" />
          {/* Sparkle */}
          <path d="M16 18L17.5 22L21 23.5L17.5 25L16 29L14.5 25L11 23.5L14.5 22L16 18Z" fill="#F5C518" />
        </svg>
      );

    case "Group Singing":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Group Singing Visual">
          <circle cx="32" cy="32" r="28" fill="#FFE8E8" />
          {/* Dual Mics */}
          <rect x="18" y="18" width="13" height="20" rx="6.5" fill="#F23A8A" />
          <path d="M14 29C14 35.5 18.5 40 24.5 40C30.5 40 35 35.5 35 29" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
          <path d="M24.5 40V49" stroke="#3D2438" strokeWidth="2" />
          
          <rect x="33" y="15" width="13" height="20" rx="6.5" fill="#F5C518" />
          <path d="M29 26C29 32.5 33.5 37 39.5 37C45.5 37 50 32.5 50 26" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
          <path d="M39.5 37V49" stroke="#3D2438" strokeWidth="2" />
          <path d="M18 49H46" stroke="#3D2438" strokeWidth="3" strokeLinecap="round" />
          {/* Musical note */}
          <path d="M46 12V22M46 14L54 11V19M46 22A3 3 0 1 1 40 22A3 3 0 0 1 46 22ZM54 19A3 3 0 1 1 48 19A3 3 0 0 1 54 19Z" stroke="#F23A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#F23A8A" />
        </svg>
      );

    case "Ad Arena":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Ad Arena Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF3ED" />
          {/* Megaphone body */}
          <path d="M16 26H22L36 17V45L22 36H16C14.3 36 13 34.7 13 33V29C13 27.3 14.3 26 16 26Z" fill="#F23A8A" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          {/* Handle */}
          <path d="M22 36V46C22 47.7 23.3 49 25 49H27C28.7 49 30 47.7 30 46V33" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
          {/* Sound blast bursts */}
          <path d="M42 22C46 25 48 29 48 31C48 33 46 37 42 40" stroke="#FF8A65" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 16C54 21 57 26 57 31C57 36 54 41 48 46" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
          {/* Sparkles */}
          <circle cx="39" cy="14" r="2" fill="#F5C518" />
          <path d="M44 31H40" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "Solo Dance":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Solo Dance Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF0F7" />
          {/* Dancer figure */}
          <circle cx="32" cy="16" r="5" fill="#3D2438" />
          {/* Dynamic dancer torso & limbs */}
          <path d="M32 21V34M32 24L44 18M32 24L20 28M32 34L23 48M32 34L41 46L46 44" stroke="#3D2438" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Ribbon motion trail */}
          <path d="M14 36C18 30 26 26 34 29C42 32 48 28 52 20" stroke="#F23A8A" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 42C16 38 24 36 32 39C40 42 46 38 50 32" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
          {/* Sparkles */}
          <path d="M48 14L49 17L52 18L49 19L48 22L47 19L44 18L47 17L48 14Z" fill="#F23A8A" />
        </svg>
      );

    case "Group Dance":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Group Dance Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF5DC" />
          {/* Left dancer */}
          <circle cx="21" cy="20" r="4" fill="#F23A8A" />
          <path d="M21 24V34M21 27L13 22M21 27L28 29M21 34L14 45M21 34L26 44" stroke="#F23A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Center dancer (lead) */}
          <circle cx="34" cy="16" r="4.5" fill="#3D2438" />
          <path d="M34 21V33M34 24L44 18M34 24L26 22M34 33L28 47M34 33L42 46" stroke="#3D2438" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Stage floor glow */}
          <ellipse cx="32" cy="50" rx="20" ry="4" fill="#F5C518" fillOpacity="0.4" />
          <path d="M15 15L17 19L21 20L17 21L15 25L13 21L9 20L13 19L15 15Z" fill="#F5C518" />
        </svg>
      );

    case "Fashion Show":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Fashion Show Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF0F7" />
          {/* Hanger / neck */}
          <circle cx="32" cy="14" r="3" stroke="#3D2438" strokeWidth="2" />
          <path d="M24 21C26 18 38 18 40 21" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
          {/* Dress torso */}
          <path d="M25 21L28 32L17 48C24 51 40 51 47 48L36 32L39 21H25Z" fill="#F23A8A" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          {/* Waist belt sash */}
          <path d="M27 32C30 33 34 33 37 32" stroke="#F5C518" strokeWidth="3" strokeLinecap="round" />
          {/* Sparkles */}
          <path d="M46 16L47.5 19L51 20.5L47.5 22L46 25L44.5 22L41 20.5L44.5 19L46 16Z" fill="#F5C518" />
          <circle cx="16" cy="24" r="2" fill="#F23A8A" />
        </svg>
      );

    case "Painting":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Painting Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF8E7" />
          {/* Palette */}
          <path d="M34 14C22 14 14 22 14 33C14 44 23 48 30 48C33 48 35 46 37 44C39 42 42 42 45 44C48 46 50 44 50 41C50 40 49 39 49 38C48 35 50 32 50 30C50 21 43 14 34 14Z" fill="#FFE8A3" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          {/* Thumb hole */}
          <ellipse cx="44" cy="36" rx="3.5" ry="3" fill="#FFF8E7" stroke="#3D2438" strokeWidth="1.5" />
          {/* Color blobs */}
          <circle cx="23" cy="23" r="3" fill="#F23A8A" />
          <circle cx="32" cy="20" r="3" fill="#3D2438" />
          <circle cx="41" cy="24" r="3" fill="#FF8A65" />
          <circle cx="23" cy="33" r="3" fill="#F5C518" />
          {/* Brush */}
          <path d="M48 10L32 36" stroke="#3D2438" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 36L30 40C30 40 33 41 34 38L32 36Z" fill="#F23A8A" stroke="#3D2438" strokeWidth="1" />
        </svg>
      );

    case "Face Painting":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Face Painting Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF3ED" />
          {/* Theatrical Mask */}
          <path d="M18 20C24 16 40 16 46 20C48 28 47 42 32 48C17 42 16 28 18 20Z" fill="#FFFFFF" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          {/* Eye holes */}
          <ellipse cx="25" cy="28" rx="4" ry="2.5" fill="#3D2438" />
          <ellipse cx="39" cy="28" rx="4" ry="2.5" fill="#3D2438" />
          {/* Decorative artistic swirls */}
          <path d="M21 34C24 37 27 36 29 34" stroke="#F23A8A" strokeWidth="2" strokeLinecap="round" />
          <path d="M35 34C37 36 40 37 43 34" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="24" r="2" fill="#FF8A65" />
          {/* Paint brush sweeping past */}
          <path d="M48 12L39 25" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "Pencil Sketch":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Pencil Sketch Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF8E7" />
          {/* Diagonal pencil */}
          <path d="M46 14L50 18L26 44L20 45L21 39L46 14Z" fill="#F5C518" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          <path d="M20 45L23 41L25 43L20 45Z" fill="#3D2438" />
          <path d="M43 17L47 21" stroke="#3D2438" strokeWidth="2" />
          <path d="M47 13L51 17" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
          {/* Sketch cross-hatch strokes */}
          <line x1="14" y1="46" x2="30" y2="52" stroke="#3D2438" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="42" x2="34" y2="48" stroke="#3D2438" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="38" x2="36" y2="44" stroke="#3D2438" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
      );

    case "Mehendi":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Mehendi Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF5DC" />
          {/* Mandala center */}
          <circle cx="32" cy="32" r="6" fill="#F23A8A" stroke="#3D2438" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="12" stroke="#3D2438" strokeWidth="1.5" strokeDasharray="2 3" />
          {/* Henna petal mandala rays */}
          <path d="M32 16C32 20 30 22 30 22C30 22 32 24 32 24C32 24 34 22 34 22C34 22 32 20 32 16Z" fill="#FF8A65" stroke="#3D2438" strokeWidth="1" />
          <path d="M32 48C32 44 30 42 30 42C30 42 32 40 32 40C32 40 34 42 34 42C34 42 32 44 32 48Z" fill="#FF8A65" stroke="#3D2438" strokeWidth="1" />
          <path d="M16 32C20 32 22 30 22 30C22 30 24 32 24 32C24 32 22 34 22 34C22 34 20 32 16 32Z" fill="#FF8A65" stroke="#3D2438" strokeWidth="1" />
          <path d="M48 32C44 32 42 30 42 30C42 30 40 32 40 32C40 32 42 34 42 34C42 34 44 32 48 32Z" fill="#FF8A65" stroke="#3D2438" strokeWidth="1" />
          {/* Corner flourish dots */}
          <circle cx="21" cy="21" r="2" fill="#F5C518" />
          <circle cx="43" cy="21" r="2" fill="#F5C518" />
          <circle cx="21" cy="43" r="2" fill="#F5C518" />
          <circle cx="43" cy="43" r="2" fill="#F5C518" />
        </svg>
      );

    case "Rangoli":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Rangoli Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF0F7" />
          {/* Diya center */}
          <path d="M24 36C24 40.4 27.6 44 32 44C36.4 44 40 40.4 40 36H24Z" fill="#F5C518" stroke="#3D2438" strokeWidth="1.5" />
          {/* Diya flame */}
          <path d="M32 26C32 26 35 30 35 33C35 34.7 33.7 36 32 36C30.3 36 29 34.7 29 33C29 30 32 26 32 26Z" fill="#F23A8A" />
          {/* Rangoli symmetrical floral petals */}
          <path d="M32 14C35 18 35 22 32 24C29 22 29 18 32 14Z" fill="#FF8A65" />
          <path d="M32 50C35 46 35 42 32 40C29 42 29 46 32 50Z" fill="#FF8A65" />
          <path d="M14 32C18 29 22 29 24 32C22 35 18 35 14 32Z" fill="#FF8A65" />
          <path d="M50 32C46 29 42 29 40 32C42 35 46 35 50 32Z" fill="#FF8A65" />
          {/* Kolam geometric boundary ring */}
          <circle cx="32" cy="32" r="22" stroke="#F5C518" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );

    case "Vegetable & Fruit Carving":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Vegetable & Fruit Carving Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF8E7" />
          {/* Carved fruit lotus layers */}
          <path d="M32 16C24 24 22 36 32 46C42 36 40 24 32 16Z" fill="#FF8A65" stroke="#3D2438" strokeWidth="2" />
          <path d="M32 22C27 28 26 36 32 42C38 36 37 28 32 22Z" fill="#FFE8A3" stroke="#3D2438" strokeWidth="1.5" />
          {/* Leaf base */}
          <path d="M18 42C23 39 30 42 32 46C34 42 41 39 46 42C42 48 36 50 32 50C28 50 22 48 18 42Z" fill="#3D2438" />
          {/* Precision chef knife */}
          <path d="M42 16L48 22L45 25L39 19L42 16Z" fill="#F23A8A" stroke="#3D2438" strokeWidth="1.5" />
          <path d="M39 19L27 31" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "News Paper Dress":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="News Paper Dress Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF0F7" />
          {/* Origami folded paper dress */}
          <path d="M26 18L32 14L38 18L35 28L46 48H18L29 28L26 18Z" fill="#FFFFFF" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          {/* Newspaper printed text lines on dress */}
          <line x1="23" y1="36" x2="41" y2="36" stroke="#3D2438" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="21" y1="41" x2="43" y2="41" stroke="#3D2438" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="20" y1="45" x2="44" y2="45" stroke="#3D2438" strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Waist belt sash */}
          <path d="M29 28H35" stroke="#F23A8A" strokeWidth="3" strokeLinecap="round" />
          {/* Scissors */}
          <circle cx="46" cy="18" r="2.5" stroke="#F5C518" strokeWidth="1.5" />
          <circle cx="50" cy="22" r="2.5" stroke="#F5C518" strokeWidth="1.5" />
          <line x1="45" y1="19" x2="39" y2="25" stroke="#F5C518" strokeWidth="1.5" />
          <line x1="49" y1="21" x2="41" y2="27" stroke="#F5C518" strokeWidth="1.5" />
        </svg>
      );

    case "Collage":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Collage Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF8E7" />
          {/* Layered Polaroid 1 */}
          <rect x="14" y="22" width="24" height="26" rx="2" transform="rotate(-10 14 22)" fill="#FFFFFF" stroke="#3D2438" strokeWidth="2" />
          <rect x="17" y="25" width="18" height="14" rx="1" transform="rotate(-10 17 25)" fill="#F5C518" fillOpacity="0.5" />
          {/* Layered Polaroid 2 */}
          <rect x="28" y="16" width="24" height="26" rx="2" transform="rotate(8 28 16)" fill="#FFFFFF" stroke="#3D2438" strokeWidth="2" />
          <rect x="31" y="19" width="18" height="14" rx="1" transform="rotate(8 31 19)" fill="#F23A8A" fillOpacity="0.4" />
          {/* Washi tape strip */}
          <rect x="28" y="12" width="14" height="6" rx="1" transform="rotate(4 28 12)" fill="#FF8A65" />
          <circle cx="22" cy="46" r="2" fill="#F23A8A" />
        </svg>
      );

    case "Photography":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Photography Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF3ED" />
          {/* Camera body */}
          <rect x="14" y="22" width="36" height="26" rx="6" fill="#3D2438" stroke="#3D2438" strokeWidth="2" />
          {/* Pentaprism top bump */}
          <path d="M24 22L27 16H37L40 22H24Z" fill="#3D2438" />
          {/* Red dot badge */}
          <circle cx="20" cy="27" r="2" fill="#F23A8A" />
          {/* Lens */}
          <circle cx="32" cy="35" r="10" fill="#FFFFFF" stroke="#F5C518" strokeWidth="2.5" />
          <circle cx="32" cy="35" r="6" fill="#3D2438" />
          {/* Flash burst */}
          <path d="M44 14L45.5 17L49 18.5L45.5 20L44 23L42.5 20L39 18.5L42.5 17L44 14Z" fill="#F5C518" />
        </svg>
      );

    case "Mobile Gaming":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Mobile Gaming Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF0F7" />
          {/* Smartphone horizontal chassis */}
          <rect x="12" y="20" width="40" height="24" rx="5" fill="#3D2438" stroke="#3D2438" strokeWidth="2" />
          <rect x="15" y="22" width="34" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.1" />
          {/* D-Pad on left */}
          <path d="M21 28V36M17 32H25" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
          {/* Action buttons on right */}
          <circle cx="41" cy="29" r="1.8" fill="#F23A8A" />
          <circle cx="45" cy="32" r="1.8" fill="#FF8A65" />
          <circle cx="41" cy="35" r="1.8" fill="#F5C518" />
          {/* Sparks */}
          <path d="M30 14L32 18L30 22" stroke="#F23A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "Reels Making":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Reels Making Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF5DC" />
          {/* Film clapperboard */}
          <rect x="16" y="24" width="32" height="24" rx="4" fill="#3D2438" stroke="#3D2438" strokeWidth="2" />
          {/* Clapper top */}
          <path d="M16 18H48L46 24H14L16 18Z" fill="#F23A8A" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          <line x1="22" y1="18" x2="26" y2="24" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="32" y1="18" x2="36" y2="24" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="42" y1="18" x2="46" y2="24" stroke="#FFFFFF" strokeWidth="2" />
          {/* Play triangle */}
          <path d="M29 31L38 36L29 41V31Z" fill="#F5C518" />
        </svg>
      );

    case "Quiz":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Quiz Visual">
          <circle cx="32" cy="32" r="28" fill="#FFF8E7" />
          {/* Lightbulb glass */}
          <path d="M24 26C24 21.6 27.6 18 32 18C36.4 18 40 21.6 40 26C40 29.5 38 32 36 34V38H28V34C26 32 24 29.5 24 26Z" fill="#F5C518" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
          {/* Filament */}
          <path d="M30 26L32 24L34 26" stroke="#F23A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Bulb base */}
          <path d="M29 38H35M30 41H34" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
          <path d="M31 43H33" stroke="#3D2438" strokeWidth="2" strokeLinecap="round" />
          {/* Intellect radiance rays */}
          <line x1="32" y1="12" x2="32" y2="15" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="18" y1="18" x2="20" y2="20" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="46" y1="18" x2="44" y2="20" stroke="#F23A8A" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="30" r="1.5" fill="#FF8A65" />
          <circle cx="48" cy="30" r="1.5" fill="#FF8A65" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label={`${name} Visual`}>
          <circle cx="32" cy="32" r="28" fill="#FFF3ED" />
          <path d="M32 16L35 25L44 26L37 32L39 41L32 36L25 41L27 32L20 26L29 25L32 16Z" fill="#F5C518" stroke="#3D2438" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
  }
}
