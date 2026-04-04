"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, summary, label, [data-cursor-hover]";

export function RoseGoldCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringGlowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("use-rosegold-cursor");
    setEnabled(true);

    return () => {
      document.documentElement.classList.remove("use-rosegold-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const glow = ringGlowRef.current;
    if (!ring || !dot || !glow) return;

    gsap.set([ring, dot], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gsap.set(dot, { x: e.clientX, y: e.clientY });

      const t = e.target as Element | null;
      const over = !!t?.closest?.(INTERACTIVE);
      glow.classList.toggle("rose-cursor-mag", over);

      gsap.to([ring, dot], { opacity: 1, duration: 0.2, overwrite: "auto" });
    };

    const onLeave = () => {
      gsap.to([ring, dot], { opacity: 0, duration: 0.25, ease: "power2.out" });
      glow.classList.remove("rose-cursor-mag");
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
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-10 w-10 opacity-0 will-change-transform"
        aria-hidden
      >
        <div
          ref={ringGlowRef}
          className="rose-cursor-ring-inner h-full w-full rounded-full border border-[rgba(212,168,130,0.55)] bg-transparent shadow-[0_0_22px_rgba(183,110,121,0.22),0_0_14px_rgba(237,201,175,0.35)]"
        />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-2 w-2 opacity-0 will-change-transform rounded-full bg-gradient-to-br from-[#f8ece6] via-[#d4a574] to-[#c4868a] shadow-[0_0_10px_rgba(212,168,130,0.85),0_0_4px_rgba(183,110,121,0.5)]"
        aria-hidden
      />
    </>
  );
}
