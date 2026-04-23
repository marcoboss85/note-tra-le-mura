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

const headerPill =
  "pointer-events-auto fixed left-4 top-4 z-[60] flex items-center gap-0.5 rounded-full bg-transparent p-0.5 [filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.65))] md:left-6 md:top-5";
const headerLink =
  "flex h-10 w-10 items-center justify-center rounded-full text-xl leading-none transition md:h-11 md:w-11";

type Props = {
  facebookUrl: string | null;
  instagramUrl: string | null;
  facebookAria: string;
  instagramAria: string;
  /** Sotto mappa: centrato. `header`: fissa in alto a sinistra, stessa altezza delle bandierine. */
  variant?: "default" | "header";
  /** Con `header`: etichetta accessibile per il `nav` (obbligatoria se c’è almeno un link). */
  headerNavAriaLabel?: string;
};

/**
 * Link Facebook e Instagram (sotto mappa o in barra fissa a sinistra) se gli URL in env sono impostati.
 */
export function ContactSocialIcons({
  facebookUrl,
  instagramUrl,
  facebookAria,
  instagramAria,
  variant = "default",
  headerNavAriaLabel = "",
}: Props) {
  if (!facebookUrl && !instagramUrl) {
    return null;
  }
  const isHeader = variant === "header";
  const iconSize = isHeader ? "h-6 w-6 md:h-7 md:w-7" : "h-7 w-7";

  if (isHeader) {
    return (
      <nav
        className={headerPill}
        aria-label={headerNavAriaLabel || "Social"}
      >
        {facebookUrl ? (
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[#1877F2] ${headerLink} hover:bg-[#1e1612]/8`}
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
            className={`text-[#E1306C] ${headerLink} hover:bg-[#1e1612]/8`}
            aria-label={instagramAria}
          >
            <InstagramGlyph className={iconSize} />
          </a>
        ) : null}
      </nav>
    );
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-4">
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
