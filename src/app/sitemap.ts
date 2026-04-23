import type { MetadataRoute } from "next";
import { ambienti } from "@/app/gallery-data";
import { locales } from "@/i18n/config";
import { getMetadataBaseUrl } from "@/lib/social-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getMetadataBaseUrl().origin;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = `/${locale}`;

    entries.push({
      url: `${base}${prefix}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    for (const path of ["/cookie", "/privacy", "/lucca-comics"] as const) {
      entries.push({
        url: `${base}${prefix}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }

    for (const { slug } of ambienti) {
      entries.push({
        url: `${base}${prefix}/gallery/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
