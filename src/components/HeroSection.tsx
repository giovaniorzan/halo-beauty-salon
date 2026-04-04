import Link from "next/link";
import { SalonImage } from "@/components/ui/SalonImage";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function HeroSection() {
  const h = site.hero;
  const italic = h.titleItalic;
  const titleParts = h.title.split(italic);

  return (
    <section
      id="acasa"
      className="relative flex min-h-screen items-center bg-charcoal"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <SalonImage
          src={h.heroImage}
          alt="Salon Halo Beauty — interior și atmosferă premium"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/40 to-charcoal/30"
          aria-hidden
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-content px-6 pb-24 pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light md:text-sm">
            {h.label}
          </p>
        </Reveal>
        <Reveal>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <em className="text-blush not-italic">{italic}</em>
                {titleParts[1]}
              </>
            ) : (
              h.title
            )}
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            {h.description}
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose px-9 text-sm font-semibold text-white transition hover:bg-rose-deep hover:shadow-lg"
            >
              Programează-te acum
              <ArrowRightIcon />
            </Link>
            <Link
              href="#servicii"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/30 px-8 text-sm font-semibold text-white transition hover:border-gold hover:bg-gold/10"
            >
              Descoperă serviciile
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 inline-block rounded-xl border border-white/15 bg-white/10 px-7 py-5 text-white backdrop-blur-md md:mt-16">
            <h2 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-gold-light">
              Program
            </h2>
            <p className="text-sm leading-relaxed opacity-90">
              {site.contact.hours.weekdays}
              <br />
              {site.contact.hours.saturday}
              <br />
              {site.contact.hours.sunday}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
