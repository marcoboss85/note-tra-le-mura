import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Vercel / edge: `redirects` qui è gestito a livello di hosting (in più al middleware),
   * così `https://…vercel.app/` non finisce in 404 se la root non passa da middleware.
   */
  async redirects() {
    return [
      { source: "/", destination: "/it", permanent: false },
    ];
  },
  /**
   * Accesso al dev server da altri dispositivi sulla LAN (es. telefono su 192.168.x).
   * Evita il blocco di HMR e risorse /_next da origine diversa.
   */
  allowedDevOrigins: ["192.168.1.16"],
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
