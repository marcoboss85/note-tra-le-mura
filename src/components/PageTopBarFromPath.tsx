import { headers } from "next/headers";
import { PageTopBar, type PageTopBarProps } from "@/components/PageTopBar";
import { isLocale, type Locale } from "@/i18n/config";

type Props = Omit<PageTopBarProps, "locale" | "pathAfterLocale"> & {
  locale: Locale;
};

/** Barra con percorsi lingua da `x-pathname` (impostato in proxy). */
export async function PageTopBarFromPath({
  locale,
  ...rest
}: Props) {
  const pathname = (await headers()).get("x-pathname") ?? `/${locale}`;
  const parts = pathname.split("/").filter(Boolean);
  const resolvedLocale =
    parts[0] && isLocale(parts[0]) ? (parts[0] as Locale) : locale;
  const pathAfterLocale = parts.slice(1).join("/");

  return (
    <PageTopBar
      locale={resolvedLocale}
      pathAfterLocale={pathAfterLocale}
      {...rest}
    />
  );
}
