"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      // Reset scroll position instantly when new page mounts
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const mm = gsap.matchMedia();

      // Animații doar pe desktop (de la 768px în sus)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline();

        // 1. Tranziția cortinei: glisează spre stânga dezvelind pagina nouă
        tl.to(".template-curtain", {
          xPercent: -100,
          duration: 0.8,
          ease: "power2.inOut",
        });

        // 2. Animația elementelor în cascadă (stagger de jos în sus)
        const elementsToStagger = gsap.utils.toArray("h1, h2, img, .stagger-card", container.current);
        
        if (elementsToStagger.length > 0) {
          tl.from(
            elementsToStagger,
            {
              y: 35,
              opacity: 0,
              stagger: 0.08,
              duration: 0.8,
              ease: "power2.out",
              clearProps: "transform,opacity" // Evităm "all" pentru a nu șterge stilurile inline de la next/image (fill, absolute etc)
            },
            "-=0.4"
          );
        }
      });

      // Pe mobile se scoate cortina și se dezactiveazăanimațiile de tranzitie
      mm.add("(max-width: 767px)", () => {
        gsap.set(".template-curtain", { display: "none" });
      });
    },
    { scope: container, dependencies: [pathname] }
  );

  return (
    <div ref={container} className="relative">
      {/* Cortina care acopera complet portul de vizualizare la intrarea pe pagina */}
      <div 
        className="template-curtain pointer-events-none fixed inset-0 z-[9999] bg-charcoal" 
      />
      {children}
    </div>
  );
}
