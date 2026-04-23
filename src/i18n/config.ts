export const locales = ["it", "en", "de", "sr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** BCP 47 tag for `<html lang>` and `hreflang` (Serbian route uses Latin script). */
export function localeToHrefLang(locale: Locale): string {
  return locale === "sr" ? "sr-Latn" : locale;
}

/** Tag `og:locale` / Open Graph. */
export function localeToOpenGraphTag(locale: Locale): string {
  const map: Record<Locale, string> = {
    it: "it_IT",
    en: "en_GB",
    de: "de_DE",
    sr: "sr_RS",
  };
  return map[locale];
}
