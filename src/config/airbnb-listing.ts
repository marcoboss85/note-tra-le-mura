/**
 * URL pubblico della **scheda annuncio** su Airbnb (foto, prezzi, recensioni).
 * Da `.env`: `NEXT_PUBLIC_AIRBNB_LISTING_URL` — stesso indirizzo che vedi in alto nel browser
 * quando apri l’annuncio in modalità “ospite” (es. `https://www.airbnb.it/rooms/...`).
 */
export function getAirbnbListingUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_AIRBNB_LISTING_URL?.trim();
  if (!raw) {
    return null;
  }
  if (!/^https?:\/\//i.test(raw)) {
    return null;
  }
  return raw;
}
