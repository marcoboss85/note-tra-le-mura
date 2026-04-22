"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

const STORAGE_KEY = "sito-note-cookie-consent-v1";

type Props = {
  locale: Locale;
  copy: Messages["cookieBanner"];
};

export function CookieConsent({ locale, copy }: Props) {
  const panelTitleId = useId();
  const [hydrated, setHydrated] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const base = `/${locale}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setShowBar(true);
    } catch {
      setShowBar(true);
    }
    setHydrated(true);
  }, []);

  /** Segnala al CSS che il banner è visibile (es. FAB WhatsApp sulla home). */
  useEffect(() => {
    if (!hydrated) return;
    const el = document.documentElement;
    if (showBar) {
      el.setAttribute("data-cookie-consent-visible", "");
    } else {
      el.removeAttribute("data-cookie-consent-visible");
    }
    return () => el.removeAttribute("data-cookie-consent-visible");
  }, [hydrated, showBar]);

  const persist = useCallback(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ v: 1, savedAt: Date.now() }),
      );
    } catch {
      /* ignore quota / private mode */
    }
    setShowBar(false);
    setPanelOpen(false);
  }, []);

  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [panelOpen]);

  if (!hydrated || !showBar) return null;

  return (
    <>
      {panelOpen ? (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-[#1a1612]/45 p-4 pb-8 backdrop-blur-[2px] sm:items-center sm:pb-4"
          role="presentation"
          onClick={() => setPanelOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={panelTitleId}
            className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-[#ddd6ce] bg-[#fcfbf9] px-6 py-6 font-[var(--font-ui)] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id={panelTitleId}
              className="font-[var(--font-serif)] text-xl font-normal text-[#2c241c]"
            >
              {copy.panelTitle}
            </h2>

            <section className="mt-6 border-t border-[#ebe6df] pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6259]">
                {copy.necessaryTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a433c]">
                {copy.necessaryDesc}
              </p>
            </section>

            <section className="mt-5 border-t border-[#ebe6df] pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6259]">
                {copy.optionalIntro}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b6259]">
                {copy.optionalNone}
              </p>
            </section>

            <div className="mt-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="rounded-full border border-[#d4cdc4] bg-transparent px-5 py-2.5 text-sm font-medium text-[#4a433c] transition hover:bg-[#f3f1ed]"
              >
                {copy.panelClose}
              </button>
              <button
                type="button"
                onClick={persist}
                className="rounded-full bg-[#2a4a38] px-5 py-2.5 text-sm font-medium text-[#faf8f5] ring-1 ring-[#1a3024]/15 transition hover:bg-[#22382c]"
              >
                {copy.savePreferences}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#d4cdc4] bg-[#fcfbf9]/97 px-4 py-4 font-[var(--font-ui)] shadow-[0_-8px_30px_rgba(44,36,28,0.08)] backdrop-blur-md md:px-8 md:py-5"
        role="region"
        aria-label={copy.barAria}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="max-w-2xl pr-2 text-left text-[13px] leading-relaxed text-[#4a433c] md:text-sm">
            {copy.message}{" "}
            <Link
              href={`${base}/cookie`}
              className="font-medium text-[#243828] underline decoration-[#b8b0a8] underline-offset-2 hover:decoration-[#5c544c]"
            >
              {copy.policyLink}
            </Link>
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
            <button
              type="button"
              onClick={() => setPanelOpen(true)}
              className="rounded-full border border-[#c5bdb4] bg-transparent px-4 py-2.5 text-sm font-medium text-[#3d3834] transition hover:border-[#a69e95] hover:bg-[#f6f2ea]"
            >
              {copy.preferences}
            </button>
            <button
              type="button"
              onClick={persist}
              className="rounded-full bg-[#2a4a38] px-5 py-2.5 text-sm font-medium text-[#faf8f5] ring-1 ring-[#1a3024]/12 transition hover:bg-[#22382c]"
            >
              {copy.accept}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
