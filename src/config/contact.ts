import type { Locale } from "@/i18n/config";

/** Cifre in formato E.164 senza il segno + (usato da wa.me/…). */
export const CONTACT_PHONE_E164 = "393336955579";

/** Come mostrato sul sito (stesso numero dell’E.164). */
export const CONTACT_PHONE_DISPLAY = "+39 333 695 5579";

/**
 * Numero dedicato alla sola versione in serbo (`/sr…`): contatti, `tel:` e `wa.me`.
 * `null` = stesso numero delle altre lingue. E.164 senza `+`.
 */
export const contactPhoneSerbian: { e164: string; display: string } | null = {
  e164: "393494345734",
  display: "+39 349 434 5734",
};

export function getContactPhoneForLocale(locale: Locale): {
  e164: string;
  display: string;
} {
  if (locale === "sr" && contactPhoneSerbian) {
    return contactPhoneSerbian;
  }
  return { e164: CONTACT_PHONE_E164, display: CONTACT_PHONE_DISPLAY };
}

export function contactTelHref(): string {
  return `tel:+${CONTACT_PHONE_E164}`;
}

export function contactTelHrefForLocale(locale: Locale): string {
  const { e164 } = getContactPhoneForLocale(locale);
  return `tel:+${e164}`;
}

export const CONTACT_EMAIL = "notetralemura@gmail.com";

export function contactMailtoHref(opts?: {
  subject?: string;
  body?: string;
}): string {
  const base = `mailto:${CONTACT_EMAIL}`;
  if (!opts?.subject?.trim() && !opts?.body?.trim()) {
    return base;
  }
  /** `URLSearchParams` usa `+` per gli spazi: alcuni client di posta lo mostrano letterale; `encodeURIComponent` usa `%20`. */
  const parts: string[] = [];
  if (opts.subject?.trim()) {
    parts.push(`subject=${encodeURIComponent(opts.subject.trim())}`);
  }
  if (opts.body?.trim()) {
    parts.push(`body=${encodeURIComponent(opts.body.trim())}`);
  }
  return `${base}?${parts.join("&")}`;
}
