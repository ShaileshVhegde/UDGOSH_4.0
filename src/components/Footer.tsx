import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border bg-plum text-white sm:mt-24">
      <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-sunshine/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-rose/25 blur-3xl" />

      <div className="fest-container relative py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight">
              UDGOSH <span className="text-sunshine">4.0</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Organized by the Department of BCA, KLE College of Computer Application, Dharwad.
              Celebrating the Spectrum of Talent!
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-butter">
              Spectrum of Talent
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-sunshine">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: "/about", label: "About" },
                { to: "/events", label: "Events" },
                { to: "/schedule", label: "Schedule" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 transition-colors hover:text-sunshine"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-sunshine">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sunshine" />
                <a
                  href="https://maps.app.goo.gl/KgsBeGDFpzsJwjUM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  KLE Society&apos;s College of Computer Application, RLS College, Corporation
                  Circle, Dharwad
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-sunshine" />
                <a href="mailto:klebcadwd@gmail.com" className="hover:text-white">
                  klebcadwd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-sunshine" />
                <a href="tel:+919591909429" className="hover:text-white">
                  +91 9591909429
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dwdklebca?igsh=d2NpeTZrOW02aGZh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white"
                >
                  <Instagram size={16} className="text-sunshine" />
                  @dwdklebca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 KLE Society&apos;s BCA College Dharwad. All rights reserved.</p>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span>Designed &amp; Developed by</span>
            <span className="font-semibold text-white">ಶೈಲೇಶ್ ಹೆಗಡೆ</span>
            <a
              href="https://www.linkedin.com/in/shailesh-v-hegde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-white/10 p-2 transition hover:bg-sunshine hover:text-ink"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com/shailesh__hegde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 transition hover:bg-rose"
            >
              <Instagram size={14} />
            </a>
            <a
              href="mailto:shaileshhegde3@gmail.com"
              aria-label="Email"
              className="rounded-full bg-white/10 p-2 transition hover:bg-butter hover:text-ink"
            >
              <Mail size={14} />
            </a>
            <a
              href="tel:+919113962539"
              aria-label="Phone"
              className="rounded-full bg-white/10 p-2 transition hover:bg-coral"
            >
              <Phone size={14} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
