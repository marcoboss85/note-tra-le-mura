import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieConsent } from "@/components/CookieConsent";
import { LegalCompliance } from "@/components/LegalCompliance";
import { isLocale, localeToHrefLang, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const languages = Object.fromEntries(
    locales.map((l) => [localeToHrefLang(l), `/${l}`]),
  ) as Record<string, string>;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale as Locale);
  return (
    <>
      {children}
      <CookieConsent locale={locale as Locale} copy={dict.cookieBanner} />
      <LegalCompliance locale={locale as Locale} copy={dict.legal} />
    </>
  );
}
