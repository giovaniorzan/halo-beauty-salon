"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const LOGO_SRC = "/images/logo.svg";

const NAV = [
  { href: "/#acasa", label: "Acasă" },
  { href: "/#despre", label: "Despre noi" },
  { href: "/#servicii", label: "Servicii" },
  { href: "/#preturi", label: "Prețuri" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#testimoniale", label: "Recenzii" },
  { href: "/#contact", label: "Contact" },
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
          scrolled ? "bg-cream/95 py-2 shadow-sm backdrop-blur-xl" : "py-3 md:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="#acasa"
            className={`flex shrink-0 items-center py-0.5 transition-all duration-300 ${
              scrolled ? "min-h-14" : "min-h-[7.5rem] sm:min-h-32 md:min-h-36 lg:min-h-40"
            }`}
            onClick={() => setOpen(false)}
          >
            <Image
              src={LOGO_SRC}
              alt="Halo Beauty Salon — logo"
              width={560}
              height={145}
              unoptimized
              className={`w-auto object-contain object-left transition-all duration-300 ${
                scrolled
                  ? "h-12 max-w-[min(100%,240px)] sm:h-14 sm:max-w-[min(100%,280px)] md:h-16 md:max-w-[min(100%,320px)] lg:h-[4.5rem] lg:max-w-[min(100%,360px)]"
                  : "h-[7.5rem] max-w-[min(92vw,520px)] sm:h-32 sm:max-w-[min(90vw,560px)] md:h-36 md:max-w-[min(88vw,600px)] lg:h-40 lg:max-w-[min(40vw,480px)] xl:h-[10.5rem] xl:max-w-[min(44vw,560px)] 2xl:h-44 2xl:max-w-[min(100%,640px)]"
              } ${
                onDarkHero
                  ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
                  : ""
              }`}
            />
          </Link>

          <nav
            className="font-nav hidden items-center gap-4 lg:flex xl:gap-5"
            aria-label="Principal"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] font-normal tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-gold-light after:transition-all xl:text-sm ${
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

          <div className="font-nav hidden items-center gap-2 xl:flex">
            <span
              className={`flex items-center gap-1.5 text-[11px] font-normal tracking-wide ${
                onDarkHero ? "text-white/80" : "text-gray-salon"
              }`}
            >
              <ClockIcon className="h-3 w-3 shrink-0" />
              {hours}
            </span>
          </div>

          <Link
            href="#contact"
            className={`font-nav hidden shrink-0 items-center rounded-full font-semibold tracking-wide text-white transition md:inline-flex ${
              onDarkHero
                ? "border border-white/25 bg-rose/90 px-4 py-2 text-xs shadow-none backdrop-blur-sm hover:border-white/40 hover:bg-rose"
                : "bg-rose px-4 py-2 text-xs shadow-sm hover:bg-rose-deep hover:shadow-md"
            } lg:px-5 lg:text-[13px]`}
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
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 bg-cream backdrop-blur-md transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-nav text-2xl font-normal tracking-wide text-nude-deep transition-colors hover:text-rose-deep active:text-rose-deep"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="font-nav mt-4 inline-flex min-h-12 items-center rounded-full bg-rose px-8 text-sm font-semibold tracking-wide text-white shadow-salon"
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
