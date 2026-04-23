"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type Locale,
  defaultLocale,
  localeToHrefLang,
  locales,
} from "@/i18n/config";

const labels: Record<Locale, { flag: string; name: string }> = {
  it: { flag: "🇮🇹", name: "Italiano" },
  en: { flag: "🇬🇧", name: "English" },
  de: { flag: "🇩🇪", name: "Deutsch" },
  sr: { flag: "🇷🇸", name: "Srpski (latinica)" },
};

const defaultNavClassName = "flex flex-shrink-0 items-center";

type LanguageSwitcherProps = {
  className?: string;
  /** Stile per pill chiare / ombre (barra sull’hero). */
  variant?: "default" | "onPhoto";
};

export function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const current = (parts[0] && locales.includes(parts[0] as Locale)
    ? parts[0]
    : defaultLocale) as Locale;
  const rest = parts.slice(1).join("/");

  const onPhoto = variant === "onPhoto";
  return (
    <nav
      className={className ?? defaultNavClassName}
      aria-label="Choose language"
    >
      <div
        className={`flex items-center gap-0.5 rounded-full p-0.5 ${
          onPhoto
            ? "bg-transparent"
            : "bg-transparent shadow-[0_1px_2px_rgba(30,22,18,0.1)]"
        }`}
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
                  ? onPhoto
                    ? "bg-white/90 text-[#1e1612] shadow-[0_1px_3px_rgba(0,0,0,0.25)]"
                    : "bg-[#2c241c] text-[#faf8f5]"
                  : onPhoto
                    ? "text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] hover:bg-white/18"
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
      </div>
    </nav>
  );
}
