"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function PricingSummary() {
  return (
    <section className="py-24 md:py-28 bg-[#fdfaf7] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="mx-auto max-w-content px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Visual Graphic */}
        <Reveal className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl bg-gradient-to-tr from-[#3a3a3a] to-charcoal p-8 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex justify-between items-start relative z-10 border-b border-white/10 pb-6 mb-6">
              <h3 className="font-display text-xl text-gold uppercase tracking-widest">Tratamente Premium</h3>
            </div>
            
            <div className="relative z-10 space-y-6 flex-1 opacity-90">
                <div className="flex justify-between text-white text-sm">
                    <span>Epilare Definitivă Laser</span>
                    <span className="text-peach">Descoperă Pachete</span>
                </div>
                <div className="flex justify-between text-white text-sm">
                    <span>Remodelare Icoone Laser</span>
                    <span className="text-peach">150 lei</span>
                </div>
                <div className="flex justify-between text-white text-sm">
                    <span>Tratamente Faciale</span>
                    <span className="text-peach">De la 240 lei</span>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-widest text-center">Halo Beauty Salon</p>
            </div>
            
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-[50px] pointer-events-none" aria-hidden />
          </div>
        </Reveal>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Transparență</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">
              Listă de Prețuri & Tratamente
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 leading-relaxed text-gray-salon mb-8 text-balance">
              Oferim servicii de cea mai înaltă calitate, la prețuri competitive, menite să scoată în evidență frumusețea ta naturală. Consultă lista detaliată pentru abonamente, oferte speciale și pachete customizate.
            </p>
          </Reveal>
          <Reveal>
            <Link 
              href="/preturi" 
              className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-rose shadow-md"
            >
              Vezi Lista Completă
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
