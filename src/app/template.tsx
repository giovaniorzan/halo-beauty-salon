"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial position outside the screen on the right
    gsap.set(containerRef.current, {
      x: "50%",
      opacity: 0,
    });

    // Tween into position
    gsap.to(containerRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all", // CRITICAL: remove transforms after animation to stop them from breaking fixed components
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full will-change-transform">
      {children}
    </div>
  );
}
