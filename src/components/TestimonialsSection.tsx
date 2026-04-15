import { testimonialsContent } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function TestimonialsSection() {
  return (
    <section
      id="testimoniale"
      className="bg-white py-16 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Testimoniale
            </p>
          </Reveal>
          <Reveal>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              Ce spun clientele noastre
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance text-gray-salon leading-relaxed">
              Recenziile sincere ale celor care ne-au trecut pragul sunt cea mai bună dovadă a
              profesionalismului nostru.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 flex snap-x snap-mandatory overflow-x-auto pb-8 md:grid md:overflow-visible md:pb-0 list-none gap-7 md:grid-cols-2 lg:grid-cols-3 md:mt-14 scrollbar-hide">
          {testimonialsContent.items.map((t, i) => (
            <li key={i} className="min-w-[90vw] shrink-0 snap-center md:min-w-0 md:shrink">
              <Reveal>
                <article className="h-full rounded-xl bg-cream p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-salon">
                  <div className="mb-4 flex gap-0.5" aria-label={`${t.rating} din 5 stele`}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} />
                    ))}
                  </div>
                  <blockquote className="text-sm italic leading-relaxed text-charcoal-light">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blush to-gold-light font-display text-sm font-bold text-white"
                      aria-hidden
                    >
                      {t.initial}
                    </span>
                    <div>
                      <cite className="not-italic font-semibold text-sm text-charcoal">{t.name}</cite>
                      <p className="text-xs text-gray-salon">{t.service}</p>
                    </div>
                  </footer>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg className="h-4 w-4 fill-gold text-gold" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
