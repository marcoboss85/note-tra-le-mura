"use client";

import type { SVGProps } from "react";

function FacebookGlyph({
  className = "h-7 w-7",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M24 12.073C24 5.405 18.629 0 12 0S0 5.404 0 12.073C0 18.1 4.39 22.9 10.125 24v-8.437H7.077v-3.472h3.047V9.41c0-3.05 1.792-4.74 4.53-4.74 1.24 0 2.55.22 2.55.22v2.8h-1.435c-1.415 0-1.86.88-1.86 1.78v2.15h3.16l-.505 3.47H15.5V24C21.11 22.9 24 18.1 24 12.072z" />
    </svg>
  );
}

function InstagramGlyph({
  className = "h-7 w-7",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

type Props = {
  facebookUrl: string | null;
  instagramUrl: string | null;
  facebookAria: string;
  instagramAria: string;
  /**
   * `map`: sotto la mappa, centrato con margine.
   * `pageTop`: barra in cima, allineate a sinistra.
   * `hero`: come pageTop, con ombra per leggibilità su foto.
   */
  placement?: "map" | "pageTop" | "hero";
};

/**
 * Link Facebook e Instagram (barra in cima o sotto mappa) se gli URL in env sono impostati.
 */
export function ContactSocialIcons({
  facebookUrl,
  instagramUrl,
  facebookAria,
  instagramAria,
  placement = "map",
}: Props) {
  if (!facebookUrl && !instagramUrl) {
    return null;
  }
  const iconSize = "h-7 w-7";
  const topRow = placement === "pageTop" || placement === "hero";
  const rowClass = topRow
    ? `flex min-h-[2.5rem] min-w-0 items-center justify-start gap-4${
        placement === "hero"
          ? " [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.55))]"
          : ""
      }`
    : "mt-4 flex items-center justify-center gap-4";

  return (
    <div className={rowClass}>
      {facebookUrl ? (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] transition hover:opacity-85"
          aria-label={facebookAria}
        >
          <FacebookGlyph className={iconSize} />
        </a>
      ) : null}
      {instagramUrl ? (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E1306C] transition hover:opacity-85"
          aria-label={instagramAria}
        >
          <InstagramGlyph className={iconSize} />
        </a>
      ) : null}
    </div>
  );
}
