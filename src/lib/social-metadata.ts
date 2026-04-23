import type { Metadata } from "next";
import { type Locale, localeToOpenGraphTag, locales } from "@/i18n/config";

/** Immagine condivisa per anteprime (rispetta `metadataBase`). */
export const OPEN_GRAPH_IMAGE_PATH = "/foto-sfondo.webp";

/**
 * Base URL per metadata assolute: produzione, anteprima Vercel, o localhost.
 * Impostare `NEXT_PUBLIC_SITE_URL` in produzione (es. `https://tuodominio.it`).
 */
export function getMetadataBaseUrl(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv.endsWith("/") ? fromEnv.slice(0, -1) : fromEnv);
    } catch {
      // fallback sotto
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

type BuildOgArgs = {
  /** Percorso assoluto del sito, es. `/${locale}` o `/${locale}/lucca-comics` */
  path: string;
  title: string;
  description: string;
  siteName: string;
  locale: Locale;
  /**
   * Percorso sotto `public/`, con slash iniziale (es. `/soggiorno/x.webp`).
   * Se assente, si usa `OPEN_GRAPH_IMAGE_PATH`.
   */
  imagePath?: string;
  /** Testo alternativo per l’immagine in anteprima; default = `siteName`. */
  imageAlt?: string;
};

export function buildOpenGraphAndTwitter(
  a: BuildOgArgs,
): Pick<Metadata, "openGraph" | "twitter"> {
  const alternate = locales
    .filter((l) => l !== a.locale)
    .map((l) => localeToOpenGraphTag(l));
  const image = a.imagePath ?? OPEN_GRAPH_IMAGE_PATH;
  const imageAlt = a.imageAlt ?? a.siteName;
  return {
    openGraph: {
      type: "website",
      siteName: a.siteName,
      title: a.title,
      description: a.description,
      url: a.path,
      locale: localeToOpenGraphTag(a.locale),
      alternateLocale: alternate,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.description,
      images: [image],
    },
  };
}
