/**
 * Pagine social (link pubblici, solo client se NEXT_PUBLIC).
 * Vedi `.env.example` — in produzione copiare su Vercel.
 */
function trimHttpUrl(raw: string | undefined): string | null {
  const u = raw?.trim();
  if (!u) return null;
  return /^https?:\/\//i.test(u) ? u : null;
}

export function getFacebookPageUrl(): string | null {
  return trimHttpUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL);
}

export function getInstagramUrl(): string | null {
  return trimHttpUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL);
}
