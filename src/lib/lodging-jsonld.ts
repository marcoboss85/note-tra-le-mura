import { CONTACT_PHONE_E164 } from "@/config/contact";
import { PROPERTY_GEO } from "@/config/property-map";
import { getPublicLegalDisplay } from "@/config/public-legal";
import { getFacebookPageUrl, getInstagramUrl } from "@/config/social";
import { getMetadataBaseUrl, OPEN_GRAPH_IMAGE_PATH } from "@/lib/social-metadata";

/**
 * JSON-LD Schema.org per l’alloggio (home, per lingua).
 * Se cambi indirizzo (es. `NEXT_PUBLIC_PROPERTY_ADDRESS`), aggiorna anche `address` qui.
 *
 * @see https://schema.org/VacationRental
 */
export function buildLodgingJsonLd(input: {
  name: string;
  description: string;
  /** URL canonico della home nella lingua corrente, es. https://dominio.it/it */
  pageUrl: string;
}) {
  const base = getMetadataBaseUrl().origin;
  const imageUrl = `${base}${OPEN_GRAPH_IMAGE_PATH}`;
  const { cin } = getPublicLegalDisplay();
  const sameAs = [
    getFacebookPageUrl(),
    getInstagramUrl(),
  ].filter((u): u is string => u !== null);

  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: input.name,
    description: input.description,
    url: input.pageUrl,
    image: [imageUrl],
    telephone: `+${CONTACT_PHONE_E164}`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Pelleria, 14",
      addressLocality: "Lucca",
      postalCode: "55100",
      addressRegion: "LU",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PROPERTY_GEO.lat,
      longitude: PROPERTY_GEO.lon,
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 6,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "CIN",
      value: cin,
    },
  };
}
