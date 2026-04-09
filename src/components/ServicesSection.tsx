"use client";

import { useMemo, useState } from "react";
import { servicesContent } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function ServicesSection({ hideHeader }: { hideHeader?: boolean } = {}) {
  const [cat, setCat] = useState("all");
  const filtered = useMemo(() => {
    if (cat === "all") return servicesContent.services;
    return servicesContent.services.filter((s) => s.category === cat);
  }, [cat]);

  return (
    <section id="servicii" className="bg-cream py-24 md:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-content px-6">
        {!hideHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Serviciile noastre
              </p>
            </Reveal>
            <Reveal>
              <h2
                id="services-heading"
                className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
              >
                Top Tratamente Faciale și Corporale
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-balance text-gray-salon leading-relaxed">
                Descoperă procedurile premium, personalizate pentru nevoile tale, realizate de experții noștri în estetică și îngrijire.
              </p>
            </Reveal>
          </div>
        )}

        <div className={`flex flex-wrap justify-center gap-2 ${hideHeader ? 'mt-0' : 'mt-12'}`}>
          {servicesContent.categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`min-h-12 rounded-full px-5 text-sm font-medium transition ${
                cat === c.id
                  ? "bg-rose text-white shadow-salon"
                  : "bg-white text-gray-salon hover:bg-blush-light"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((s) => (
            <li key={s.id}>
              <Reveal>
                <article className="group relative h-full overflow-hidden rounded-xl border border-transparent bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:border-blush-light hover:shadow-salon-lg">
                  <div className="absolute left-0 right-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-gold to-blush transition group-hover:scale-x-100" />
                  <span className="mb-4 inline-block rounded-full bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                    {s.categoryLabel}
                  </span>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-charcoal">{s.title}</h3>
                    <span className="font-display text-xl font-bold whitespace-nowrap text-rose">
                      {s.priceDisplay}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-salon">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-muted">
                    <span className="flex items-center gap-1">
                      <ClockSm /> {s.duration}
                    </span>
                    {s.badge && (
                      <span className="flex items-center gap-1 font-medium text-gold-dark">
                        <StarSm /> {s.badge}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClockSm() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function StarSm() {
  return (
    <svg className="h-3.5 w-3.5 fill-gold text-gold" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
