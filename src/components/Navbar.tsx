import { FestButton } from "@/components/fest/FestButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const INSTITUTION_LOGO =
  "https://harmless-tapir-303.convex.cloud/api/storage/0dd0b620-60f9-44f2-9f79-8e93c7d8b422";
const BCA_COLLEGE_LOGO =
  "https://harmless-tapir-303.convex.cloud/api/storage/1b48c767-65a6-4f9b-b921-f5235cdbe42f";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Schedule", path: "/schedule" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* College branding strip — warm ivory surface, balanced responsive alignment */}
      <header className="border-b border-ink/[0.08] bg-[#FAF5EB]/95 backdrop-blur-sm">
        <div className="fest-container py-2.5 sm:py-3.5 lg:py-4">
          <div className="flex items-center justify-between gap-2.5 sm:gap-6 lg:gap-8">
            {/* Left institutional logo (KLE Society) */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-16 sm:w-16 md:h-18 md:w-18 lg:h-20 lg:w-20">
              <img
                src={INSTITUTION_LOGO}
                alt="KLE Society Institutional Logo"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>

            {/* Center college heading with controlled width & prominent balanced typography */}
            <div className="min-w-0 max-w-3xl flex-1 px-1 sm:px-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-plum/80 sm:text-xs md:text-sm">
                KLE SOCIETY&apos;S
              </p>
              <h1 className="font-display text-xs min-[380px]:text-sm sm:text-xl md:text-2xl lg:text-[1.85rem] font-extrabold leading-tight tracking-[-0.015em] text-[#1B1120] text-balance">
                COLLEGE OF COMPUTER APPLICATION
              </h1>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-[9.5px] font-bold tracking-wider text-rose sm:text-xs md:text-sm">
                <span className="hidden h-1 w-1 rounded-full bg-rose sm:inline-block" />
                <span>RLS COLLEGE, CORPORATION CIRCLE, DHARWAD</span>
                <span className="hidden h-1 w-1 rounded-full bg-rose sm:inline-block" />
              </div>
            </div>

            {/* Right KLE BCA Dharwad logo — slightly larger for recognition */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-[5.25rem] lg:w-[5.25rem]">
              <img
                src={BCA_COLLEGE_LOGO}
                alt="KLE BCA Dharwad Logo"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Sticky festival navigation */}
      <nav
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-ivory/95 shadow-[0_8px_30px_rgba(61,36,56,0.08)] backdrop-blur-md"
            : "border-transparent bg-ivory/80 backdrop-blur-sm",
        )}
      >
        <div className="fest-container">
          <div className="flex h-14 items-center justify-between sm:h-16">
            <Link to="/" className="group flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sunshine font-display text-xs font-extrabold text-ink shadow-[0_3px_0_0_#e0a800] sm:h-9 sm:w-9 sm:text-sm">
                4.0
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                UDGOSH
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                    isActive(link.path)
                      ? "bg-blush text-rose"
                      : "text-muted-foreground hover:bg-white hover:text-ink",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <FestButton
                to="/events"
                variant="pink"
                pulse
                className="ml-2 !px-4 !py-2 text-sm"
              >
                Register Now
              </FestButton>
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-ink/10 bg-white text-ink lg:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border bg-white lg:hidden"
            >
              <div className="fest-container space-y-1 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "block rounded-2xl px-4 py-3.5 text-base font-semibold",
                      isActive(link.path)
                        ? "bg-blush text-rose"
                        : "text-ink hover:bg-muted",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <FestButton to="/events" variant="pink" pulse className="mt-2 w-full">
                  Register Now
                </FestButton>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </>
  );
}
