"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 5500;

/** WebP ottimizzati (vedi `npm run optimize:hero`). */
const SLIDE_PATHS = [
  "/foto-sfondo.webp",
  "/sfondo-2.webp",
  "/sfondo-3.webp",
  "/sofndo-4.webp",
] as const;

type Props = {
  imageAlt: string;
};

export function HeroSlideshow({ imageAlt }: Props) {
  const [index, setIndex] = useState(0);
  const count = SLIDE_PATHS.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      return;
    }
    const id = window.setInterval(next, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="will-change-transform flex h-full w-full transform-gpu transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:duration-0"
          style={{ transform: `translate3d(-${index * 100}%,0,0)` }}
        >
          {SLIDE_PATHS.map((src, i) => {
            const warmLate = i >= 3;
            return (
            <div key={src} className="relative h-full min-w-full shrink-0">
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                sizes="100vw"
                decoding="async"
                className={
                  i === 0
                    ? "object-cover object-[center_23%] [filter:saturate(0.9)_contrast(1.03)_brightness(1.02)]"
                    : warmLate
                      ? "object-cover object-center [filter:saturate(0.9)_contrast(1.06)_brightness(1.05)_sepia(0.26)_hue-rotate(-10deg)]"
                      : "object-cover object-center [filter:saturate(0.9)_contrast(1.03)_brightness(1.02)]"
                }
                quality={75}
              />
              {warmLate ? (
                <>
                  <div
                    className="absolute inset-0 bg-[#d8b892]/45 mix-blend-multiply"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[#e8c896]/32 mix-blend-soft-light"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[#c9a070]/18 mix-blend-color"
                    aria-hidden
                  />
                </>
              ) : (
                <div
                  className="absolute inset-0 bg-[#e8d4bc]/30 mix-blend-multiply"
                  aria-hidden
                />
              )}
            </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-white/35" />
        <span className="sr-only">{imageAlt}</span>
      </div>

      <nav
        className="pointer-events-auto absolute bottom-8 left-0 right-0 z-[2] flex justify-center gap-2 px-4 md:bottom-10"
        aria-label={imageAlt}
      >
        {SLIDE_PATHS.map((_, i) => (
          <button
            key={SLIDE_PATHS[i]}
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
    </>
  );
}
