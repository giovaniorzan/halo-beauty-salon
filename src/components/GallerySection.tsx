"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { galleryContent } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function GallerySection() {
  const allItems = galleryContent.items;
  
  // Extract unique categories from captions for filtering
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("Toate");
    allItems.forEach(item => {
      if (item.caption) {
        cats.add(item.caption);
      }
    });
    return Array.from(cats);
  }, [allItems]);

  const [cat, setCat] = useState("Toate");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Filtered items
  const items = useMemo(() => {
    if (cat === "Toate") return allItems;
    return allItems.filter((i) => i.caption === cat);
  }, [cat, allItems]);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="galerie" className="bg-cream py-24 md:py-28" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Galerie</p>
          </Reveal>
          <Reveal>
            <h2
              id="gallery-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              Portofoliul nostru
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance text-gray-salon leading-relaxed">
              Descoperă rezultatele muncii noastre — fiecare detaliu contează pentru noi.
            </p>
          </Reveal>
        </div>

        {/* Filter Categories */}
        {categories.length > 2 && (
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`min-h-12 rounded-full px-5 text-sm font-medium transition ${
                  cat === c
                    ? "bg-rose text-white shadow-salon"
                    : "bg-white text-gray-salon hover:bg-blush-light"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <ul className="mt-14 grid list-none grid-cols-2 gap-4 md:grid-cols-4 transition-all duration-500 min-h-[400px]">
          {items.map((item, i) => {
            const featured = item.featured === true;
            return (
              <li
                key={i}
                className={
                  featured
                    ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                    : ""
                }
              >
                <Reveal>
                  <button
                    type="button"
                    onClick={() => openAt(i)}
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
                    <span className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                    {item.caption && (
                      <span className="absolute bottom-3 left-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                        {item.caption}
                      </span>
                    )}
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Imagine mărită"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex min-h-12 min-w-12 items-center justify-center text-3xl text-white"
            onClick={close}
            aria-label="Închide"
          >
            ×
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Următor"
          >
            ›
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[index].src}
              alt={items[index].alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto max-w-full rounded object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
