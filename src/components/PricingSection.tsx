import { pricingContent } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function PricingSection() {
  return (
    <section id="preturi" className="bg-white py-24 md:py-28" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Prețuri</p>
          </Reveal>
          <Reveal>
            <h2
              id="pricing-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              Tarife transparente și accesibile
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance text-gray-salon leading-relaxed">
              Lista de mai jos reflectă tarifele comunicate de salon.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {pricingContent.groups.map((g) => (
            <Reveal key={g.id}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-xl transition hover:-translate-y-1 hover:shadow-salon-lg ${
                  g.featured
                    ? "bg-charcoal text-white shadow-salon-lg"
                    : "bg-cream text-charcoal"
                }`}
              >
                <div className="px-8 pb-4 pt-9 text-center">
                  <div
                    className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
                      g.featured ? "bg-white/10 text-gold-light" : "bg-white text-rose"
                    }`}
                  >
                    <SparkIcon />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                  <p
                    className={`mt-2 text-sm ${
                      g.featured ? "text-white/60" : "text-gray-salon"
                    }`}
                  >
                    {g.description}
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-0 px-8 pb-8">
                  {g.items.map((row, i) => (
                    <li
                      key={i}
                      className={`flex flex-col gap-1.5 border-b py-3 text-sm last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${
                        g.featured ? "border-white/10" : "border-black/[0.06]"
                      }`}
                    >
                      <span
                        className={`min-w-0 shrink-0 sm:max-w-[42%] ${
                          g.featured ? "text-white/90" : "text-charcoal-light"
                        }`}
                      >
                        {row.name}
                      </span>
                      <span
                        className={`min-w-0 font-semibold leading-snug sm:max-w-[55%] sm:text-right ${
                          g.featured ? "text-gold-light" : "text-rose"
                        }`}
                      >
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SparkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}
