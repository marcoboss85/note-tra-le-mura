/**
 * JSON-LD Schema.org per le guide locali (Article).
 *
 * @see https://schema.org/Article
 */
export function buildTravelGuideArticleJsonLd(input: {
  headline: string;
  description: string;
  /** URL canonico assoluto, es. https://www.notetralemura.com/it/where-to-stay-lucca-inside-walls */
  pageUrl: string;
  /** BCP 47, es. it, en, sr-Latn */
  inLanguage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: input.pageUrl,
    inLanguage: input.inLanguage,
    author: {
      "@type": "Organization",
      name: "Note tra le Mura",
    },
    publisher: {
      "@type": "Organization",
      name: "Note tra le Mura",
    },
  };
}
