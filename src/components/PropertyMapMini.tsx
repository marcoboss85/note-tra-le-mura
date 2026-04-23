import { ContactSocialIcons } from "@/components/ContactSocialIcons";

type Props = {
  embedUrl: string;
  viewUrl: string;
  frameTitle: string;
  linkAria: string;
  addressLine: string;
  /** Da `NEXT_PUBLIC_FACEBOOK_URL` / `NEXT_PUBLIC_INSTAGRAM_URL`; se mancano, non mostra le icone. */
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  facebookAria?: string;
  instagramAria?: string;
};

/**
 * Anteprima mappa (OpenStreetMap, embed ufficiale); click apre mappa a tutto schermo.
 * Sotto l’indirizzo: Facebook / Instagram se configurati.
 */
export function PropertyMapMini({
  embedUrl,
  viewUrl,
  frameTitle,
  linkAria,
  addressLine,
  facebookUrl = null,
  instagramUrl = null,
  facebookAria = "",
  instagramAria = "",
}: Props) {
  const hasSocial = Boolean(facebookUrl || instagramUrl);
  return (
    <div className="mt-8 flex flex-col items-center gap-2.5 text-center">
      <a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkAria}
        className="block size-[16.25rem] overflow-hidden rounded-lg bg-[#e6e0d5] ring-1 ring-[#c4bbae]/90 shadow-sm transition hover:ring-[#8a7f72]"
      >
        <iframe
          title={frameTitle}
          src={embedUrl}
          className="pointer-events-none h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </a>
      <p className="max-w-xs font-[var(--font-caption)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a5a4e]">
        {addressLine}
      </p>
      {hasSocial ? (
        <ContactSocialIcons
          facebookUrl={facebookUrl}
          instagramUrl={instagramUrl}
          facebookAria={facebookAria}
          instagramAria={instagramAria}
        />
      ) : null}
    </div>
  );
}
