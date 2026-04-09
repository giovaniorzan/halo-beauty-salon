"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryContent } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function GallerySummary() {
  // Take only the first 4 items for the preview
  const items = galleryContent.items.slice(0, 4);

  return (
    <section className="bg-cream py-24 md:py-28" aria-labelledby="gallery-summary-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Portofoliu</p>
          </Reveal>
          <Reveal>
            <h2
              id="gallery-summary-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              Rezultatele Noastre
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid list-none grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item, i) => {
            const featured = item.featured === true;
            return (
              <li
                key={i}
                className={featured ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}
              >
                <Reveal>
                  <Link
                    href="/galerie"
                    className={`group relative block w-full overflow-hidden rounded-lg bg-charcoal/5 text-left ${
                      featured ? "aspect-square md:aspect-auto md:min-h-[320px]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes={
                        featured
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 50vw, 25vw"
                      }
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 transition group-hover:opacity-80" />
                    {item.caption && (
                      <span className="absolute bottom-4 left-4 text-sm font-medium text-white shadow-sm">
                        {item.caption}
                      </span>
                    )}
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 text-center">
          <Reveal>
             <Link 
              href="/galerie" 
              className="group inline-flex items-center gap-3 rounded-full bg-white border border-rose/30 text-rose px-8 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-rose-light hover:text-white"
            >
              Accesează Toată Galeria
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
