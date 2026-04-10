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
      const tl = gsap.timeline();

      // 1. Tranziția cortinei: glisează în sus dezvelind pagina nouă
      tl.to(".template-curtain", {
        yPercent: -100,
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
            clearProps: "all" // Păstrăm style curat după animație pt flexibilitate CSS
          },
          "-=0.4"
        );
      }
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
