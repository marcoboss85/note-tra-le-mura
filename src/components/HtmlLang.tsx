"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isLocale, localeToHrefLang, type Locale } from "@/i18n/config";

export function HtmlLang() {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0];

  useEffect(() => {
    if (segment && isLocale(segment)) {
      document.documentElement.lang = localeToHrefLang(segment as Locale);
    }
  }, [segment]);

  return null;
}
