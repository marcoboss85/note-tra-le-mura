"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 5500;

type Props = {
  /** Segmenti percorso sotto `public/`, es. `esterno/IMG_4215.webp` */
  slides: readonly string[];
  /** Stesso ordine; usati come `alt` su ogni slide. */
  slideAlts: readonly string[];
  /** Etichetta per regione e per i pulsanti frecce (accessibilità). */
  ariaLabel: string;
};

export function ComicsHeroSlideshow({
  slides,
  slideAlts,
  ariaLabel,
}: Props) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const next = useCallback(() => {
    if (count === 0) return;
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      return;
    }
    const id = window.setInterval(next, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count, next]);

  if (count === 0) {
    return null;
  }

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="flex h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:duration-0"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((rel, i) => {
            const src = encodeURI(`/${rel}`);
            const warmLate = i >= 2;
            return (
              <div
                key={`${rel}-${i}`}
                className="relative h-full min-w-full shrink-0"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className={
                    i === 0
                      ? "object-cover object-[center_30%] [filter:saturate(0.9)_contrast(1.03)_brightness(1.02)]"
                      : warmLate
                        ? "object-cover object-center [filter:saturate(0.9)_contrast(1.06)_brightness(1.05)_sepia(0.2)_hue-rotate(-8deg)]"
                        : "object-cover object-center [filter:saturate(0.9)_contrast(1.03)_brightness(1.02)]"
                  }
                  quality={75}
                />
                {warmLate ? (
                  <>
                    <div
                      className="absolute inset-0 bg-[#d8b892]/40 mix-blend-multiply"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-[#e8c896]/28 mix-blend-soft-light"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-[#c9a070]/16 mix-blend-color"
                      aria-hidden
                    />
                  </>
                ) : (
                  <div
                    className="absolute inset-0 bg-[#e8d4bc]/28 mix-blend-multiply"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-white/35" />
        <span className="sr-only">
          {ariaLabel}: {slideAlts.join(" — ")}
        </span>
      </div>

      {count > 1 ? (
        <nav
          className="pointer-events-auto absolute bottom-6 left-0 right-0 z-[30] flex justify-center gap-2 px-4 md:bottom-8"
          aria-label={ariaLabel}
        >
          {slides.map((rel, i) => (
            <button
              key={rel + String(i)}
              type="button"
              aria-label={`${i + 1} / ${count}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === index
                  ? "w-8 bg-[#faf8f5]/92"
                  : "w-2 bg-[#faf8f5]/40 hover:bg-[#faf8f5]/65"
              }`}
            />
          ))}
        </nav>
      ) : null}
    </>
  );
}
