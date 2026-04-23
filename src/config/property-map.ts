/**
 * Geolocalizzazione struttura (Via Pelleria, Lucca). Embed OpenStreetMap, no Google.
 */
export const PROPERTY_GEO = {
  lat: 43.8451997,
  lon: 10.4984804,
} as const;

/** Lato della bounding box in gradi (≈ due isolati, zoom 17–18). */
const BBOX_DEG = 0.00165;

/**
 * Iframe ufficiale OSM: bbox = min lon, min lat, max lon, max lat; marker = lat,lon.
 */
export function getOsmEmbedUrl(): string {
  const { lat, lon } = PROPERTY_GEO;
  const d = BBOX_DEG;
  const minLon = lon - d;
  const minLat = lat - d * 0.78;
  const maxLon = lon + d;
  const maxLat = lat + d * 0.78;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${lat}%2C${lon}`;
}

export function getOsmViewUrl(): string {
  const { lat, lon } = PROPERTY_GEO;
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}&zoom=18`;
}
