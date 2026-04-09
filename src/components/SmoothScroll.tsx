"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

type Props = {
  children: ReactNode;
};

export function SmoothScroll({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on mobile / touch devices for performance
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReduced) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 1.2,        // duration (seconds) of the smoothing
      effects: true,       // enable data-speed / data-lag attributes
      smoothTouch: false,  // keep native touch on mobile
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        <div className="animate-page-slide">
          {children}
        </div>
      </div>
    </div>
  );
}
