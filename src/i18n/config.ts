export const locales = ["it", "en", "sr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** BCP 47 tag for `<html lang>` and `hreflang` (Serbian route uses Latin script). */
export function localeToHrefLang(locale: Locale): string {
  return locale === "sr" ? "sr-Latn" : locale;
}
