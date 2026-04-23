/**
 * Striscia “Lucca Comics” sotto l’hero: visibile solo in alcuni mesi (fuso Europe/Rome),
 * e disattivabile in qualsiasi momento.
 *
 * Disattivazione manuale: in `.env.local` mettere
 *   NEXT_PUBLIC_HOME_COMICS_BANNER=0
 * (o "false")
 */

const TZ = "Europe/Rome";

function romeMonth(d: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    month: "numeric",
  }).formatToParts(d);
  const v = parts.find((p) => p.type === "month")?.value;
  return v != null ? parseInt(v, 10) : d.getMonth() + 1;
}

/** Aprile (4) – ottobre (10) inclusi, ore italiane. */
const BANNER_FROM_MONTH = 4;
const BANNER_UNTIL_MONTH = 10;

export function isHomeComicsBannerVisible(): boolean {
  const raw = process.env.NEXT_PUBLIC_HOME_COMICS_BANNER?.trim().toLowerCase();
  if (raw === "0" || raw === "false" || raw === "off" || raw === "no") {
    return false;
  }
  const m = romeMonth(new Date());
  return m >= BANNER_FROM_MONTH && m <= BANNER_UNTIL_MONTH;
}
