import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Meno byte in risposta, niente header inutile. */
  poweredByHeader: false,
  compress: true,
  /** Produzione: meno JavaScript (rimuove console.* lato client). */
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /** Allinea i quality usati nel codice (evita fallback e avvisi in build). */
    qualities: [72, 75, 80],
  },
};

export default nextConfig;
