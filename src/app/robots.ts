import type { MetadataRoute } from "next";
import { getMetadataBaseUrl } from "@/lib/social-metadata";

export default function robots(): MetadataRoute.Robots {
  const base = getMetadataBaseUrl().origin;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
