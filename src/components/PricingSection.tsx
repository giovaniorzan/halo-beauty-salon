"use client";

import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { parseServicePrice } from "@/lib/parse-service-price";
import { pricingContent } from "@/lib/site";

const PEACH = "#e59a8f";

export function PricingSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const first = pricingContent.groups[0]?.id;
    return first ? new Set([first]) : new Set();
  });

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="preturi" className="bg-cream py-24 md:py-28" aria-labelledby="pricing-heading">
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
            <p className="mt-4 text-balance leading-relaxed text-gray-salon">
              Lista de mai jos reflectă tarifele comunicate de salon.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-black/[0.08]">
          {pricingContent.groups.map((g, gi) => {
            const isOpen = openIds.has(g.id);
            return (
              <div
                key={g.id}
                className={`border-b border-black/[0.08] ${
                  gi % 2 === 0 ? "md:pr-10 lg:pr-16" : "md:pl-10 lg:pl-16"
                }`}
              >
                <button
                  type="button"
                  id={`pricing-trigger-${g.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`pricing-panel-${g.id}`}
                  onClick={() => toggle(g.id)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:items-center md:py-6"
                >
                  <h3 className="font-display max-w-[85%] text-lg font-normal uppercase leading-snug tracking-[0.18em] text-charcoal md:text-xl md:tracking-[0.22em]">
                    {g.title}
                  </h3>
                  <AccordionPlus open={isOpen} />
                </button>

                <div
                  id={`pricing-panel-${g.id}`}
                  role="region"
                  aria-labelledby={`pricing-trigger-${g.id}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <ul
                      className={`pb-8 pt-1 ${
                        gi % 2 === 0 ? "md:max-w-[min(100%,40rem)]" : "md:ml-auto md:max-w-[min(100%,40rem)]"
                      }`}
                    >
                      {g.items.map((row, i) => {
                        const { amount, duration } = parseServicePrice(row.price);
                        return (
                          <li
                            key={i}
                            className="flex flex-col gap-1 border-b border-black/[0.05] py-4 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                          >
                            <div className="min-w-0 flex-1 sm:max-w-[58%]">
                              <p className="font-nav text-[15px] font-normal leading-snug text-charcoal">
                                {row.name}
                              </p>
                              {duration ? (
                                <p className="mt-1 font-nav text-[11px] font-normal tracking-wide text-gray-muted">
                                  {duration}
                                </p>
                              ) : null}
                            </div>
                            <p
                              className="font-nav shrink-0 text-left text-[15px] font-medium leading-snug sm:max-w-[40%] sm:text-right"
                              style={{ color: PEACH }}
                            >
                              {amount}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AccordionPlus({ open }: { open: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/12 text-xl font-light leading-none text-charcoal/40 transition-transform duration-300 ease-in-out md:mt-0 ${
        open ? "rotate-45" : ""
      }`}
      aria-hidden
    >
      +
    </span>
  );
}
