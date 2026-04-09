"use client";

import Link from "next/link";
import { servicesContent } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function ServicesSummary() {
  // Take only top 4 services as a preview
  const topServices = servicesContent.services.filter(s => s.badge).slice(0, 4);

  return (
    <section id="servicii" className="bg-cream py-24 md:py-28" aria-labelledby="services-summary-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Serviciile noastre
            </p>
          </Reveal>
          <Reveal>
            <h2
              id="services-summary-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              Servicii VIP de Înfrumusețare
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance text-gray-salon leading-relaxed">
              Descoperă procedurile de top recomandate de specialiștii noștri pentru o schimbare a look-ului garantată.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topServices.map((s) => (
            <li key={s.id}>
              <Reveal>
                <article className="group h-full overflow-hidden rounded-xl border border-transparent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blush-light hover:shadow-salon-lg">
                  <span className="mb-4 inline-block rounded-full bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                    {s.categoryLabel}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-salon line-clamp-3">{s.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <Reveal>
             <Link 
              href="/servicii" 
              className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-rose shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
            >
              Explorează Toate Serviciile
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
