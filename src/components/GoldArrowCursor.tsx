"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, summary, label, [data-cursor-hover]";

export function GoldArrowCursor() {
  const [enabled, setEnabled] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("use-gold-arrow-cursor");
    setEnabled(true);

    return () => {
      document.documentElement.classList.remove("use-gold-arrow-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    gsap.set(wrap, { transformOrigin: "0 0", scale: 1 });

    const scaleTo = gsap.quickTo(wrap, "scale", { duration: 0.22, ease: "power2.out" });

    const onMove = (e: MouseEvent) => {
      gsap.set(wrap, { x: e.clientX, y: e.clientY, opacity: 1 });

      const t = e.target as Element | null;
      const over = !!t?.closest?.(INTERACTIVE);
      scaleTo(over ? 1.12 : 1);
    };

    const onLeave = () => {
      gsap.to(wrap, { opacity: 0, duration: 0.2, ease: "power2.out" });
      scaleTo(1);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      className="gold-arrow-cursor-wrap pointer-events-none fixed left-0 top-0 z-[10000] opacity-0 will-change-transform"
      aria-hidden
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="overflow-visible">
        <defs>
          <linearGradient id="gold-arrow-grad" x1="2" y1="2" x2="18" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff4d4" />
            <stop offset="35%" stopColor="#e8c547" />
            <stop offset="100%" stopColor="#a67c00" />
          </linearGradient>
        </defs>
        <path
          d="M2 2v16l5-5 3.5 8 2-1-3.5-9H17L2 2z"
          fill="url(#gold-arrow-grad)"
          stroke="#5c4806"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
