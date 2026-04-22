/**
 * URL segreto export iCal Airbnb (Impostazioni annuncio → Disponibilità →
 * Collega calendario → Esporta calendario). Solo server-side.
 */
export function getAirbnbIcalUrl(): string | undefined {
  const u = process.env.AIRBNB_ICAL_URL?.trim();
  return u && u.startsWith("http") ? u : undefined;
}
