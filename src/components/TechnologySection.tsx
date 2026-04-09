"use client";

import { Reveal } from "@/components/Reveal";

const technologies = [
  {
    name: "Elysion Pro 3W",
    category: "Epilare Definitivă Laser",
    description: "Tehnologie cu putere înaltă de răcire, asigurând o ședință confortabilă și rapidă pentru epilare permanentă de precizie pe orice zonă a corpului.",
    icon: "✨",
  },
  {
    name: "Icoone Laser Med",
    category: "Remodelare Corporală",
    description: "Cea mai avansată metodă non-invazivă. Folosește role robotizate și Laser + LED pentru a trata celulita, a reduce grăsimea și a reda fermitatea pielii.",
    icon: "🧬",
  },
  {
    name: "Intraceuticals",
    category: "Oxigen Hiperbaric",
    description: "Infuzie profundă cu acid hialuronic și vitamine. Cunoscut drept 'Tratamentul Madonnei', revitalizează instantaneu tenul înainte de orice eveniment.",
    icon: "🫧",
  },
  {
    name: "Dermapen",
    category: "Microneedling Facial",
    description: "Dispozitiv medical de înaltă precizie care activează colagenul pentru atenuarea ridurilor fine, estomparea petelor și a cicatricilor post-acneice.",
    icon: "🔬",
  },
];

export function TechnologySection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-content px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Inovație & Rezultate</p>
          </Reveal>
          <Reveal>
            <h2 id="tech-heading" className="font-display text-3xl font-semibold text-charcoal md:text-4xl">
              Tehnologia Noastră
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance leading-relaxed text-gray-salon">
              Rezultatele exceptionale necesită aparatură excepțională. Investim constant în echipamente de top din industria esteticii la nivel mondial.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name}>
              <div 
                className="group relative flex h-full flex-col justify-between rounded-3xl bg-cream/30 p-8 pt-10 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-cream/60 hover:shadow-xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    {tech.icon}
                  </div>
                  <h3 className="mb-2 font-display text-xl font-medium text-charcoal">{tech.name}</h3>
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gold/80">{tech.category}</p>
                  <p className="text-sm leading-relaxed text-gray-salon mb-6">{tech.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -mt-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-peach/5 blur-[100px] pointer-events-none" aria-hidden />
    </section>
  );
}
