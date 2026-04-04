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
          scrolled ? "bg-cream/95 py-2 shadow-sm backdrop-blur-xl" : "py-4 md:py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-content flex-wrap items-center px-4 sm:px-6 ${
            scrolled ? "justify-between gap-3" : "justify-center gap-5"
          }`}
        >
          <div
            className={`relative flex items-center ${
              scrolled ? "shrink-0 justify-start" : "w-full basis-full justify-center"
            }`}
          >
            {!scrolled && (
              <button
                type="button"
                className="absolute right-0 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 flex-col items-center justify-center gap-1.5 lg:hidden"
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
            )}
            <Link
              href="#acasa"
              className={`flex items-center py-0.5 transition-all duration-300 ${
                scrolled
                  ? "min-h-20 justify-start lg:min-h-32"
                  : "min-h-[11rem] justify-center sm:min-h-[13rem] md:min-h-[15rem] lg:min-h-[17rem] xl:min-h-[18rem]"
              }`}
              onClick={() => setOpen(false)}
            >
              <Image
                src={LOGO_SRC}
                alt="Halo Beauty Salon — logo"
                width={840}
                height={220}
                unoptimized
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "object-left" : "object-center sm:object-left lg:object-center"
                } ${
                  scrolled
                    ? "h-20 max-w-[min(100%,520px)] sm:h-24 sm:max-w-[min(100%,560px)] md:h-28 md:max-w-[min(100%,600px)] lg:h-32 lg:max-w-[min(46vw,440px)] xl:max-w-[min(50vw,480px)]"
                    : "h-[11rem] max-w-[min(96vw,960px)] sm:h-[12.5rem] sm:max-w-[min(94vw,1000px)] md:h-56 md:max-w-[min(92vw,1040px)] lg:h-64 lg:max-w-[min(90vw,1120px)] xl:h-[16.5rem] xl:max-w-[min(88vw,1200px)] 2xl:h-[17.5rem] 2xl:max-w-[min(100%,1200px)]"
                } ${
                  onDarkHero
                    ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
                    : ""
                }`}
              />
            </Link>
          </div>

          <nav
            className={`hidden items-center justify-center gap-4 lg:flex xl:gap-5 ${
              scrolled ? "" : "w-full basis-full"
            }`}
            aria-label="Principal"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-gold-light after:transition-all xl:text-sm ${
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

          <div className="hidden items-center gap-2 2xl:flex">
            <span
              className={`flex items-center gap-1.5 text-[11px] ${
                onDarkHero ? "text-white/80" : "text-gray-salon"
              }`}
            >
              <ClockIcon className="h-3 w-3 shrink-0" />
              {hours}
            </span>
          </div>

          <Link
            href="#contact"
            className={`hidden shrink-0 items-center rounded-full font-semibold text-white transition md:inline-flex ${
              onDarkHero
                ? "border border-white/25 bg-rose/90 px-4 py-2 text-xs shadow-none backdrop-blur-sm hover:border-white/40 hover:bg-rose"
                : "bg-rose px-4 py-2 text-xs shadow-sm hover:bg-rose-deep hover:shadow-md"
            } lg:px-5 lg:text-[13px]`}
          >
            Programează-te
          </Link>

          <button
            type="button"
            className={`flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 lg:hidden ${
              scrolled ? "" : "hidden"
            }`}
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
