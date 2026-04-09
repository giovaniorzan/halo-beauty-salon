"use client";

import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  title: string;
  description: string;
  label: string;
};

export function PageHero({ title, description, label }: PageHeroProps) {
  return (
    <section 
      id="hero" // We use 'hero' ID so the SiteHeader knows to use the transparent white-text version when overlapping!
      className="relative flex min-h-[50vh] md:min-h-[60vh] items-center justify-center overflow-hidden bg-charcoal pt-24 pb-12"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute -left-[20%] top-[-10%] h-[50vw] w-[50vw] rounded-full bg-gold/10 blur-[100px]" />
        <div className="absolute right-[-10%] top-[40%] h-[30vw] w-[30vw] rounded-full bg-peach/10 blur-[80px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-content px-6 text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold shadow-sm backdrop-blur-md">
            {label}
          </span>
        </Reveal>
        <Reveal>
          <h1 className="mb-6 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl text-balance mx-auto">
            {title}
          </h1>
        </Reveal>
        <Reveal>
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl text-balance leading-relaxed">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
