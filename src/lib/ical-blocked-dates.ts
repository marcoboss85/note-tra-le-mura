/** Giorni occupati come `YYYY-MM-DD` (mezzogiorno UTC interno solo per calcoli). */

const YMD = /^(\d{4})(\d{2})(\d{2})$/;

function toYmdFromCompact(compact: string): string | null {
  const m = compact.match(YMD);
  if (!m) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

function ymdAddDays(ymd: string, delta: number): string {
  const d = new Date(`${ymd}T12:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + delta);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${mo}-${day}`;
}

/**
 * Estrae da un file `.ics` i giorni con alloggio non disponibile (eventi Airbnb).
 * `DTEND` con `VALUE=DATE` è **esclusivo** (standard iCal all-day).
 */
export function parseIcsToBlockedYmd(ics: string): Set<string> {
  const normalized = ics
    .replace(/\r\n/g, "\n")
    .replace(/\n[ \t]/g, "");
  const blocked = new Set<string>();
  const parts = normalized.split(/BEGIN:VEVENT/gi);
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i].split(/END:VEVENT/i)[0];
    if (!chunk) continue;

    const startRaw = chunk.match(
      /DTSTART(?:;[^:\r\n]+)?:([0-9]{8})(?![0-9])/i,
    );
    if (!startRaw?.[1]) continue;
    const start = toYmdFromCompact(startRaw[1]);
    if (!start) continue;

    const endRaw = chunk.match(/DTEND(?:;[^:\r\n]+)?:([0-9]{8})(?![0-9])/i);
    let endExclusive: string;
    if (endRaw?.[1]) {
      const e = toYmdFromCompact(endRaw[1]);
      endExclusive = e ?? ymdAddDays(start, 1);
    } else {
      endExclusive = ymdAddDays(start, 1);
    }

    /** `DTEND` (VALUE=DATE) è esclusivo: giorni occupati sono start ≤ giorno < endExclusive. */
    let d = start;
    while (d < endExclusive) {
      blocked.add(d);
      d = ymdAddDays(d, 1);
      if (blocked.size > 800) break;
    }
  }
  return blocked;
}

export type IcalFetchResult =
  | { ok: true; blocked: Set<string> }
  | { ok: false; error: "missing_url" | "fetch_failed" | "empty" };

export async function fetchAirbnbBlockedDates(
  icalUrl: string,
): Promise<IcalFetchResult> {
  try {
    const res = await fetch(icalUrl, {
      headers: {
        Accept: "text/calendar,text/plain,*/*",
        "User-Agent":
          "Mozilla/5.0 (compatible; NoteTraLeMura/1.0; +https://notetralemura.it)",
      },
      next: { revalidate: 1800 },
    });
    if (!res.ok) return { ok: false, error: "fetch_failed" };
    const text = await res.text();
    if (!text.includes("BEGIN:VCALENDAR")) return { ok: false, error: "empty" };
    const blocked = parseIcsToBlockedYmd(text);
    return { ok: true, blocked };
  } catch {
    return { ok: false, error: "fetch_failed" };
  }
}
