"use client";

import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { parseServicePrice } from "@/lib/parse-service-price";
import { pricingContent } from "@/lib/site";

const BG = "#fdfaf7";
const TITLE = "#333";
const SERVICE = "#444";
const DURATION_GRAY = "#a8a0a0";
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
    <section
      id="preturi"
      className="py-24 md:py-28"
      style={{ backgroundColor: BG }}
      aria-labelledby="pricing-heading"
    >
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

        <div className="mt-16 w-full border-t border-[#e0d8d0]">
          {pricingContent.groups.map((g) => {
            const isOpen = openIds.has(g.id);
            return (
              <div key={g.id} className="border-b border-[#e0d8d0]">
                <button
                  type="button"
                  id={`pricing-trigger-${g.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`pricing-panel-${g.id}`}
                  onClick={() => toggle(g.id)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 py-[25px] text-left transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfaf7]"
                >
                  <h3
                    className="font-display text-[20px] font-normal uppercase leading-snug"
                    style={{ color: TITLE, letterSpacing: "2px" }}
                  >
                    {g.title}
                  </h3>
                  <AccordionChevron open={isOpen} />
                </button>

                <div
                  id={`pricing-panel-${g.id}`}
                  role="region"
                  aria-labelledby={`pricing-trigger-${g.id}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  style={{ transitionDuration: "400ms" }}
                >
                  <div className="min-h-0">
                    <ul
                      className="pb-[25px] font-display leading-[1.8]"
                      style={{ paddingTop: "4px" }}
                    >
                      {g.items.map((row, i) => {
                        const { amount, duration } = parseServicePrice(row.price);
                        return (
                          <li
                            key={i}
                            className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-8 py-[25px]"
                          >
                            <div className="min-w-0 text-left">
                              <p
                                className="text-base font-normal normal-case"
                                style={{ color: SERVICE }}
                              >
                                {row.name}
                              </p>
                              {duration ? (
                                <p
                                  className="mt-1 text-left text-[11px] font-normal"
                                  style={{ color: DURATION_GRAY }}
                                >
                                  {duration}
                                </p>
                              ) : null}
                            </div>
                            <p
                              className="max-w-[min(100%,22rem)] text-right text-base font-semibold leading-[1.8]"
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

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#333]/45 transition-transform duration-[400ms] ease-in-out ${
        open ? "-rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
