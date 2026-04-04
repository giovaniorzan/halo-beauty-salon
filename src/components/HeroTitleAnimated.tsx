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

function tokenize(text: string): { type: "space" | "word"; value: string }[] {
  const raw = text.match(/\S+|\s+/g);
  if (!raw) return [];
  return raw.map((value) => ({
    type: /^\s+$/.test(value) ? "space" : "word",
    value,
  }));
}

function WordStream({
  text,
  accent,
}: {
  text: string;
  accent?: boolean;
}) {
  return (
    <>
      {tokenize(text).map((t, i) =>
        t.type === "space" ? (
          <span key={`s-${i}`}>{t.value}</span>
        ) : (
          <span
            key={`w-${i}`}
            className={`hero-title-word inline-block opacity-0 will-change-transform ${
              accent ? "hero-title-accent-word" : ""
            }`}
          >
            {t.value}
          </span>
        )
      )}
    </>
  );
}

export function HeroTitleAnimated({ before, italic, after, singleLine }: Props) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = root.querySelectorAll<HTMLElement>(".hero-title-word");
    const accentWords = root.querySelectorAll<HTMLElement>(".hero-title-accent-word");

    if (reduced) {
      gsap.set(words, { opacity: 1, x: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(words, { x: -22 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(words, {
        opacity: 1,
        x: 0,
        duration: 0.58,
        stagger: {
          each: 0.065,
          from: "start",
        },
      });

      if (accentWords.length) {
        tl.to(
          accentWords,
          {
            textShadow:
              "0 0 28px rgba(229,154,143,0.55), 0 0 52px rgba(229,154,143,0.28), 0 2px 14px rgba(60,35,30,0.4)",
            filter: "brightness(1.12)",
            duration: 0.85,
            ease: "sine.inOut",
            stagger: 0.04,
          },
          "-=0.15"
        );

        tl.to(
          accentWords,
          {
            textShadow: "0 2px 12px rgba(60,35,30,0.45)",
            filter: "brightness(1)",
            duration: 0.95,
            ease: "sine.inOut",
            stagger: 0.03,
          },
          ">-0.35"
        );
      } else {
        tl.to(
          root,
          {
            textShadow:
              "0 0 36px rgba(255,255,255,0.2), 0 2px 10px rgba(80,50,40,0.55)",
            duration: 0.85,
            ease: "sine.inOut",
          },
          "-=0.15"
        );

        tl.to(
          root,
          {
            textShadow: "0 2px 10px rgba(80,50,40,0.5)",
            duration: 0.95,
            ease: "sine.inOut",
          },
          ">-0.35"
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
        <WordStream text={before} />
      </h1>
    );
  }

  return (
    <h1 id="hero-heading" ref={rootRef} className={h1Class}>
      <WordStream text={before} />
      {italic ? (
        <em className="not-italic text-[#e59a8f] [text-shadow:0_2px_12px_rgba(60,35,30,0.45)]">
          <WordStream text={italic} accent />
        </em>
      ) : null}
      <WordStream text={after} />
    </h1>
  );
}
