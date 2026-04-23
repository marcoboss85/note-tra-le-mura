"use client";

import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

const MD_BREAKPOINT_QUERY = "(min-width: 768px)";

function subscribeMdMatchMedia(cb: () => void) {
  const mq = window.matchMedia(MD_BREAKPOINT_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMdMatchMedia(): boolean {
  return window.matchMedia(MD_BREAKPOINT_QUERY).matches;
}

/** Su schermi piccoli 1 mese; da md in su 2 mesi affiancati (SSR = 1 colonna). */
function useCalendarWindowColumns(): 1 | 2 {
  const wide = useSyncExternalStore(
    subscribeMdMatchMedia,
    getMdMatchMedia,
    () => false,
  );
  return wide ? 2 : 1;
}

function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

type Props = {
  locale: Locale;
  copy: Messages["availability"];
  blocked: string[];
  status: "ok" | "missing_url" | "error";
};

function localeTag(l: Locale): string {
  if (l === "it") return "it-IT";
  if (l === "en") return "en-GB";
  if (l === "de") return "de-DE";
  return "sr-Latn-RS";
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function localYmd(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** Dal mese corrente fino a dicembre dello stesso anno solare. */
function monthStartsThroughDecember(d: Date): { y: number; m0: number }[] {
  const y = d.getFullYear();
  const startM = d.getMonth();
  const out: { y: number; m0: number }[] = [];
  for (let m0 = startM; m0 <= 11; m0++) {
    out.push({ y, m0 });
  }
  return out;
}

function daysInMonth(y: number, m0: number): number {
  return new Date(y, m0 + 1, 0).getDate();
}

function weekDayLabels(localeTagStr: string): string[] {
  const base = new Date(2024, 0, 8);
  const fmt = new Intl.DateTimeFormat(localeTagStr, { weekday: "short" });
  const out: string[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push(fmt.format(d));
  }
  return out;
}

/** Prima lettera di ogni parola maiuscola (es. «aprile» → «Aprile»). */
function titleCaseMonthName(raw: string, localeTagStr: string): string {
  return raw
    .split(/\s+/)
    .map((word) => {
      if (!word) return word;
      const lower = word.toLocaleLowerCase(localeTagStr);
      return (
        lower.charAt(0).toLocaleUpperCase(localeTagStr) + lower.slice(1)
      );
    })
    .join(" ");
}

function monthCaption(
  y: number,
  m0: number,
  template: string,
  localeTagStr: string,
): string {
  const d = new Date(y, m0, 1);
  const mRaw = new Intl.DateTimeFormat(localeTagStr, { month: "long" }).format(
    d,
  );
  const m = titleCaseMonthName(mRaw, localeTagStr);
  const year = String(y);
  return template.replace("{m}", m).replace("{y}", year);
}

function MonthGrid({
  y,
  m0,
  blockedSet,
  todayYmd,
  weekLabels,
  localeTagStr,
  monthCaptionTemplate,
}: {
  y: number;
  m0: number;
  blockedSet: Set<string>;
  todayYmd: string;
  weekLabels: string[];
  localeTagStr: string;
  monthCaptionTemplate: string;
}) {
  const dim = daysInMonth(y, m0);
  const firstJs = new Date(y, m0, 1).getDay();
  const lead = (firstJs + 6) % 7;
  const cells: ({ d: number } | null)[] = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= dim; d++) cells.push({ d });
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);

  const caption = monthCaption(y, m0, monthCaptionTemplate, localeTagStr);

  return (
    <div className="flex min-w-0 flex-col">
      <p className="mb-3 text-center font-[var(--font-serif)] text-base font-normal text-[#342a22] md:text-lg">
        {caption}
      </p>
      <div className="overflow-x-auto rounded-xl border border-[#ddd6ce] bg-[#fcfbf9] p-2 shadow-sm">
        <table className="w-full min-w-[200px] border-collapse text-center text-[12px] md:text-[13px]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {weekLabels.map((w) => (
                <th
                  key={w}
                  scope="col"
                  className="px-0.5 py-1.5 font-[var(--font-ui)] font-medium text-[#6b6259]"
                >
                  {w}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: cells.length / 7 }, (_, row) => (
              <tr key={row}>
                {cells.slice(row * 7, row * 7 + 7).map((cell, j) => {
                  if (!cell) {
                    return (
                      <td
                        key={`e-${row}-${j}`}
                        className="h-8 md:h-9"
                        aria-hidden
                      />
                    );
                  }
                  const ymd = `${y}-${pad2(m0 + 1)}-${pad2(cell.d)}`;
                  const busy = blockedSet.has(ymd);
                  const today = ymd === todayYmd;
                  return (
                    <td key={ymd} className="p-0.5">
                      <div
                        className={`flex h-8 items-center justify-center rounded-md font-[var(--font-ui)] tabular-nums md:h-9 ${
                          busy
                            ? "bg-[#e8e4df] text-[#6b6259] line-through decoration-[#9a928a]"
                            : "bg-[#eef4ee] text-[#243828]"
                        } ${today ? "ring-2 ring-[color:var(--brand-green)] ring-offset-1 ring-offset-[#fcfbf9]" : ""}`}
                      >
                        {cell.d}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AvailabilityCalendar({ locale, copy, blocked, status }: Props) {
  const mounted = useIsClient();
  const [startIndex, setStartIndex] = useState(0);
  const cols = useCalendarWindowColumns();
  const touchStartX = useRef<number | null>(null);

  const tag = localeTag(locale);
  const blockedSet = useMemo(() => new Set(blocked), [blocked]);

  const calendarToday = useMemo(() => new Date(), []);
  const months = useMemo(
    () => monthStartsThroughDecember(calendarToday),
    [calendarToday],
  );
  const maxStart = Math.max(0, months.length - cols);
  const pageStart = Math.min(startIndex, maxStart);

  if (status === "missing_url") {
    return (
      <p className="mx-auto max-w-xl text-center font-[var(--font-body)] text-[15px] leading-relaxed text-[#534a42] md:text-base">
        {copy.notConfigured}
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="mx-auto max-w-xl text-center font-[var(--font-body)] text-[15px] leading-relaxed text-[#7a5448] md:text-base">
        {copy.loadError}
      </p>
    );
  }

  if (!mounted) {
    return (
      <div
        className="mx-auto grid min-h-[220px] max-w-6xl animate-pulse grid-cols-1 gap-6 md:grid-cols-2"
        aria-hidden
      >
        <div className="h-52 rounded-xl bg-[#ebe6df]/80" />
        <div className="hidden h-52 rounded-xl bg-[#ebe6df]/80 md:block" />
      </div>
    );
  }

  const todayYmd = localYmd(calendarToday);
  const weekLabels = weekDayLabels(tag);

  const canPrev = pageStart > 0;
  const canNext = pageStart < maxStart;
  const visible = months.slice(pageStart, pageStart + cols);

  const goPrev = () => {
    setStartIndex((i) => {
      const p = Math.min(i, maxStart);
      return Math.max(0, p - cols);
    });
  };
  const goNext = () => {
    setStartIndex((i) => {
      const p = Math.min(i, maxStart);
      return Math.min(maxStart, p + cols);
    });
  };

  const navBtnClass =
    "shrink-0 self-center rounded-full border border-[#ddd6ce] bg-[#fcfbf9] px-2.5 py-6 font-[var(--font-ui)] text-xl leading-none text-[#342a22] shadow-sm transition hover:bg-[#f5f0ea] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-[#fcfbf9] md:px-3 md:py-8 md:text-2xl";

  return (
    <div className="space-y-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-stretch gap-1 sm:gap-2">
          <button
            type="button"
            className={navBtnClass}
            aria-label={copy.calendarPrevAria}
            disabled={!canPrev}
            onClick={goPrev}
          >
            <span aria-hidden>‹</span>
          </button>
          <div
            className="min-w-0 flex-1"
            onTouchStart={(e) => {
              const t = e.touches[0];
              touchStartX.current = t?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchStartX.current;
              touchStartX.current = null;
              if (start == null) return;
              const end = e.changedTouches[0]?.clientX;
              if (end == null) return;
              const dx = end - start;
              if (dx < -48 && canNext) goNext();
              else if (dx > 48 && canPrev) goPrev();
            }}
          >
            <div
              className={
                cols === 2
                  ? "grid grid-cols-2 gap-8"
                  : "grid grid-cols-1 gap-8"
              }
            >
              {visible.map(({ y, m0 }) => (
                <MonthGrid
                  key={`${y}-${m0}`}
                  y={y}
                  m0={m0}
                  blockedSet={blockedSet}
                  todayYmd={todayYmd}
                  weekLabels={weekLabels}
                  localeTagStr={tag}
                  monthCaptionTemplate={copy.monthCaption}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            className={navBtnClass}
            aria-label={copy.calendarNextAria}
            disabled={!canNext}
            onClick={goNext}
          >
            <span aria-hidden>›</span>
          </button>
        </div>
        {cols === 1 ? (
          <p className="mt-3 text-center font-[var(--font-ui)] text-[11px] text-[#8a8178] md:hidden">
            {copy.calendarSwipeHint}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-[#534a42] md:text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#eef4ee] ring-1 ring-[color:var(--brand-green-line)]/60" />
          {copy.legendFree}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#e8e4df] ring-1 ring-[#d4cdc4]" />
          {copy.legendBusy}
        </span>
      </div>
      <p className="mx-auto max-w-2xl text-center font-[var(--font-ui)] text-[11px] leading-relaxed text-[#8a8178] md:text-xs">
        {copy.disclaimer}
      </p>
    </div>
  );
}
