"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  before: string;
  italic: string;
  after: string;
  /** When title has no italic split, pass full string as before and leave italic/after empty */
  singleLine?: boolean;
};

function graphemes(text: string): string[] {
  try {
    const Seg = (
      Intl as typeof Intl & {
        Segmenter?: new (locales?: string, options?: { granularity?: string }) => {
          segment: (input: string) => Iterable<{ segment: string }>;
        };
      }
    ).Segmenter;
    if (Seg) {
      const seg = new Seg("ro", { granularity: "grapheme" });
      return Array.from(seg.segment(text), (s) => s.segment);
    }
  } catch {
    /* no Segmenter */
  }
  return Array.from(text);
}

const ACCENT_SHADOW_GLOW =
  "0 0 20px rgba(237,201,175,0.95), 0 0 42px rgba(212,168,130,0.7), 0 0 64px rgba(183,110,121,0.45), 0 2px 14px rgba(60,35,30,0.38)";
/** Soft rose-gold halo after bloom — rămâne elegant, nu plat */
const ACCENT_SHADOW_LINGER =
  "0 0 28px rgba(212,168,130,0.42), 0 0 48px rgba(183,110,121,0.22), 0 2px 12px rgba(60,35,30,0.42)";

function displayChar(ch: string): string {
  /* Spațiile într-un span inline-block se colapsează vizual; NBSP păstrează golul. */
  if (/^\s$/.test(ch)) return "\u00A0";
  return ch;
}

function CharStream({ text }: { text: string }) {
  const chars = graphemes(text);
  return (
    <>
      {chars.map((ch, i) => {
        const isWs = /^\s$/.test(ch);
        return (
          <span
            key={i}
            className={`hero-title-char inline-block opacity-0 will-change-transform ${
              isWs ? "min-w-[0.25em] whitespace-pre" : ""
            }`}
          >
            {isWs ? displayChar(ch) : ch}
          </span>
        );
      })}
    </>
  );
}

export function HeroTitleAnimated({ before, italic, after, singleLine }: Props) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const accentRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chars = root.querySelectorAll<HTMLElement>(".hero-title-char");
    const accentEl = accentRef.current;

    if (reduced) {
      gsap.set(chars, { opacity: 1, x: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(chars, { x: -10 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(chars, {
        opacity: 1,
        x: 0,
        duration: 0.36,
        stagger: {
          each: 0.028,
          from: "start",
        },
      });

      if (accentEl) {
        tl.to(
          accentEl,
          {
            textShadow: ACCENT_SHADOW_GLOW,
            color: "#f8ece6",
            filter: "brightness(1.1) saturate(1.15)",
            duration: 0.88,
            ease: "power1.out",
          },
          "+=0.05"
        );

        tl.to(
          accentEl,
          {
            textShadow: ACCENT_SHADOW_LINGER,
            color: "#e59a8f",
            filter: "brightness(1.04) saturate(1.08)",
            duration: 1.15,
            ease: "sine.inOut",
          },
          ">"
        );
      } else {
        tl.to(
          root,
          {
            textShadow:
              "0 0 34px rgba(237,201,175,0.18), 0 2px 10px rgba(80,50,40,0.55)",
            duration: 0.85,
            ease: "sine.inOut",
          },
          "+=0.06"
        );

        tl.to(
          root,
          {
            textShadow: "0 2px 10px rgba(80,50,40,0.5)",
            duration: 0.9,
            ease: "sine.inOut",
          },
          ">"
        );
      }
    }, root);

    return () => ctx.revert();
  }, [before, italic, after, singleLine]);

  const h1Class =
    "font-display text-4xl font-semibold leading-tight text-white [text-shadow:0_2px_10px_rgba(80,50,40,0.5)] md:text-5xl lg:text-6xl";

  if (singleLine) {
    return (
      <h1 id="hero-heading" ref={rootRef} className={h1Class}>
        <CharStream text={before} />
      </h1>
    );
  }

  return (
    <h1 id="hero-heading" ref={rootRef} className={h1Class}>
      <CharStream text={before} />
      {italic ? (
        <em
          ref={accentRef}
          className="hero-title-accent not-italic text-[#e59a8f] [text-shadow:0_2px_12px_rgba(60,35,30,0.45)]"
        >
          <CharStream text={italic} />
        </em>
      ) : null}
      <CharStream text={after} />
    </h1>
  );
}
