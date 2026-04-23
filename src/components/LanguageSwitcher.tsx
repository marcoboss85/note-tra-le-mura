"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, localeToHrefLang, locales } from "@/i18n/config";

const labels: Record<Locale, { flag: string; name: string }> = {
  it: { flag: "🇮🇹", name: "Italiano" },
  en: { flag: "🇬🇧", name: "English" },
  de: { flag: "🇩🇪", name: "Deutsch" },
  sr: { flag: "🇷🇸", name: "Srpski (latinica)" },
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const current = (parts[0] && locales.includes(parts[0] as Locale)
    ? parts[0]
    : "it") as Locale;
  const rest = parts.slice(1).join("/");

  return (
    <nav
      className="pointer-events-auto fixed right-4 top-4 z-[60] flex items-center gap-0.5 rounded-full bg-transparent p-0.5 [filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.65))] md:right-6 md:top-5"
      aria-label="Choose language"
    >
      {locales.map((locale) => {
        const href = `/${locale}${rest ? `/${rest}` : ""}`;
        const active = locale === current;
        const { flag, name } = labels[locale];
        return (
          <Link
            key={locale}
            href={href}
            prefetch
            className={`flex h-10 w-10 items-center justify-center rounded-full text-xl leading-none transition md:h-11 md:w-11 md:text-2xl ${
              active
                ? "bg-[#2c241c] text-[#faf8f5]"
                : "text-[#2c221c] hover:bg-[#1e1612]/8"
            }`}
            hrefLang={localeToHrefLang(locale)}
            aria-current={active ? "true" : undefined}
            aria-label={name}
            title={name}
          >
            <span aria-hidden>{flag}</span>
          </Link>
        );
      })}
    </nav>
  );
}
