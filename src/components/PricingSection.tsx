"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { parseServicePrice } from "@/lib/parse-service-price";
import { pricingContent } from "@/lib/site";

const BG = "#fdfaf7";
const PEACH = "#e59a8f";

export function PricingSection({ hideHeader }: { hideHeader?: boolean } = {}) {
  const [activeTabId, setActiveTabId] = useState<string>(
    pricingContent.groups[0]?.id || ""
  );

  const activeGroup = pricingContent.groups.find((g) => g.id === activeTabId);

  return (
    <section
      id="preturi"
      className="py-24 md:py-28"
      style={{ backgroundColor: BG }}
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        {!hideHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Prețuri</p>
            </Reveal>
            <Reveal>
              <h2
                id="pricing-heading"
                className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
              >
                Listă de Prețuri & Tratamente
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-balance leading-relaxed text-gray-salon">
                Alege calitatea și inovația. Descoperă tarifele pentru serviciile noastre premium.
              </p>
            </Reveal>
          </div>
        )}

        {/* Tabs Navigation */}
        <div className={`mt-12 md:mt-16 ${hideHeader ? "mt-0" : ""}`}>
          <div className="flex flex-nowrap gap-3 overflow-x-auto pb-4 scrollbar-hide md:flex-wrap md:justify-center md:pb-0">
            {pricingContent.groups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveTabId(g.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTabId === g.id
                    ? "bg-charcoal text-white shadow-md"
                    : "bg-white text-gray-salon hover:bg-gold/10 hover:text-charcoal"
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 transition-opacity duration-500 min-h-[400px]">
          {activeGroup && (
            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-10 md:p-12">
              {activeGroup.description && (
                <div className="mb-8 rounded-2xl bg-cream/30 p-5 text-center text-sm leading-relaxed text-charcoal/80">
                  {activeGroup.description}
                </div>
              )}

              <ul className="flex flex-col gap-6">
                {activeGroup.items.map((row, i) => {
                  const { amount, duration } = parseServicePrice(row.price);
                  return (
                    <li
                      key={i}
                      className="group flex flex-col justify-between gap-y-2 border-b border-cream/50 pb-6 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:gap-x-6"
                    >
                      <div className="min-w-0 pr-4">
                        <div className="flex items-center gap-3">
                          <p className="font-display text-lg font-medium text-charcoal">
                            {row.name}
                          </p>
                          {row.badge && (
                            <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                              {row.badge}
                            </span>
                          )}
                        </div>
                        {row.benefit && (
                          <p className="mt-1 text-sm text-gray-salon/90">
                            ✓ {row.benefit}
                          </p>
                        )}
                        {duration && (
                          <p className="mt-1 text-xs text-charcoal/40">
                            ⏱ {duration}
                          </p>
                        )}
                      </div>
                      
                      <div className="shrink-0 sm:text-right">
                        <p
                          className="font-display text-lg font-semibold tracking-wide"
                          style={{ color: PEACH }}
                        >
                          {amount}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
