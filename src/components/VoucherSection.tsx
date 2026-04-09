"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function VoucherSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a1a] relative overflow-hidden" aria-labelledby="voucher-heading">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" aria-hidden />
      
      <div className="mx-auto max-w-content px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Visual Gift Card representation */}
        <Reveal className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl bg-gradient-to-tr from-[#2d2d2d] to-[#404040] p-8 shadow-2xl shadow-charcoal-deep border border-white/10 flex flex-col justify-between overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            
            <div className="flex justify-between items-start relative z-10">
              <h3 className="font-display text-2xl text-gold uppercase tracking-[0.2em]">Gift Card</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/50">
                <path d="M20 12V22H4V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7H2V12H22V7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <p className="font-display text-white text-lg tracking-widest opacity-90">{site.siteName}</p>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Premium Salon Experience</p>
            </div>
          </div>
        </Reveal>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Cadoul Perfect</p>
          </Reveal>
          <Reveal>
            <h2 id="voucher-heading" className="font-display text-3xl font-semibold text-white md:text-4xl">
              Oferă o Moment de Răsfăț
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance leading-relaxed text-white/70">
              Surprinde-ți persoanele dragi cu o experiență de beauty și wellness de lux. Voucherele noastre cadou pot fi personalizate pentru orice serviciu (epilare definitivă, remodelare, tratamente faciale) sau pentru o sumă la alegere.
            </p>
          </Reveal>
          <Reveal>
            <a 
              href="#contact" 
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Comandă Voucher
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
