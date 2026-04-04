"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const LOGO_SRC = "/images/logo.svg";

const NAV = [
  { href: "#acasa", label: "Acasă" },
  { href: "#despre", label: "Despre noi" },
  { href: "#servicii", label: "Servicii" },
  { href: "#preturi", label: "Prețuri" },
  { href: "#galerie", label: "Galerie" },
  { href: "#testimoniale", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#acasa");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hours = site.contact.hours.headerShort;
  /** Peste hero fundalul e întunecat — linkuri și text trebuie deschise */
  const onDarkHero = !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          scrolled ? "bg-cream/95 py-2.5 shadow-sm backdrop-blur-xl" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6">
          <Link
            href="#acasa"
            className="flex min-h-12 shrink-0 items-center py-1"
            onClick={() => setOpen(false)}
          >
            <Image
              src={LOGO_SRC}
              alt="Halo Beauty Salon — logo"
              width={220}
              height={58}
              unoptimized
              className={`h-9 w-auto max-h-[52px] max-w-[min(100%,240px)] object-contain object-left transition-[filter] duration-300 md:h-11 md:max-h-[58px] ${
                onDarkHero
                  ? "brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                  : ""
              }`}
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Principal"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-gold-light after:transition-all ${
                  onDarkHero
                    ? active === item.href
                      ? "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.65)] after:w-full"
                      : "text-white/90 after:w-0 hover:text-white hover:after:w-full [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]"
                    : active === item.href
                      ? "text-charcoal after:w-full"
                      : "text-charcoal-light after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <span
              className={`flex items-center gap-1.5 text-xs ${
                onDarkHero ? "text-white/80" : "text-gray-salon"
              }`}
            >
              <ClockIcon className="h-3.5 w-3.5 shrink-0" />
              {hours}
            </span>
          </div>

          <Link
            href="#contact"
            className="hidden min-h-12 items-center rounded-full bg-rose px-6 text-sm font-semibold text-white transition hover:bg-rose-deep hover:shadow-lg md:inline-flex"
          >
            Programează-te
          </Link>

          <button
            type="button"
            className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={open}
            aria-label="Deschide meniul"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-6 rounded-full transition ${
                onDarkHero && !open ? "bg-white" : "bg-charcoal"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition ${
                onDarkHero && !open ? "bg-white" : "bg-charcoal"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition ${
                onDarkHero && !open ? "bg-white" : "bg-charcoal"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 bg-cream/98 backdrop-blur-lg transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-display text-2xl text-charcoal"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="mt-4 inline-flex min-h-12 items-center rounded-full bg-rose px-8 text-sm font-semibold text-white"
          onClick={() => setOpen(false)}
        >
          Programează-te
        </Link>
      </div>
    </>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
