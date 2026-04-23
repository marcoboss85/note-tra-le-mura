/** Ordine: lingue prioritarie per ospiti internazionali (EN, DE), poi IT e SR. */
export const locales = ["en", "de", "it", "sr"] as const;
export type Locale = (typeof locales)[number];

/** Lingua di ingresso da `/` e fallback middleware: inglese. */
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Hreflang per sottopagine: `pathAfterLocale` es. `""` (home), `/privacy`, `/lucca-comics`, `/gallery/slug`.
 * Include `x-default` → versione inglese (defaultLocale).
 */
export function localeAlternateLanguages(pathAfterLocale: string): Record<string, string> {
  const p =
    pathAfterLocale === "" || pathAfterLocale === "/"
      ? ""
      : pathAfterLocale.startsWith("/")
        ? pathAfterLocale
        : `/${pathAfterLocale}`;
  const map = Object.fromEntries(
    locales.map((l) => [localeToHrefLang(l), `/${l}${p}`]),
  ) as Record<string, string>;
  map["x-default"] = `/${defaultLocale}${p}`;
  return map;
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
