import { SalonImage } from "@/components/ui/SalonImage";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function AboutSection() {
  const a = site.about;
  const italic = a.titleItalic;
  const titleParts = a.title.split(italic);

  return (
    <section id="despre" className="bg-white py-24 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] max-h-[480px] overflow-hidden rounded-2xl md:max-h-none">
            <SalonImage
              src={a.image}
              alt="Interior Halo Beauty Salon, Iași"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute -bottom-5 -right-5 -z-10 hidden h-48 w-48 rounded-2xl border-[3px] border-gold-light md:block"
              aria-hidden
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Despre noi
            </p>
          </Reveal>
          <Reveal>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              {titleParts.length > 1 ? (
                <>
                  {titleParts[0]}
                  <em className="text-rose not-italic">{italic}</em>
                  {titleParts[1]}
                </>
              ) : (
                a.title
              )}
            </h2>
          </Reveal>
          {a.paragraphs.map((p, i) => (
            <Reveal key={i}>
              <p className="mt-5 text-gray-salon leading-relaxed">{p}</p>
            </Reveal>
          ))}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {a.features.map((f, i) => (
              <Reveal key={i}>
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                    <StarIcon />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-charcoal">
                      {f.title}
                    </h3>
                    <p className="text-xs text-gray-salon">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
