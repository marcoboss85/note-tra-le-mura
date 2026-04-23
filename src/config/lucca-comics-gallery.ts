/**
 * Immagini mostrate in `/[locale]/lucca-comics` (sotto `public/`).
 * Per usare una cartella dedicata, aggiungi i file in `public/lucca-comics/`
 * e sostituisci qui i percorsi, es. `"lucca-comics/hero.webp"`.
 * Gli `alt` testuali stanno in `dictionaries` → `luccaComics.galleryImageAlts` (stesso ordine).
 */
export const LUCCA_COMICS_GALLERY = [
  "soggiorno/IMG_4196.webp",
  "camera da letto 1/IMG_4207.webp",
  "camera da letto 2/IMG_4204.webp",
  "soggiorno/IMG_4197.webp",
] as const;

export type LuccaComicsGalleryFile = (typeof LUCCA_COMICS_GALLERY)[number];
