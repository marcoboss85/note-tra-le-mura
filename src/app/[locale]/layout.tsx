import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieConsent } from "@/components/CookieConsent";
import { LegalCompliance } from "@/components/LegalCompliance";
import {
  isLocale,
  localeAlternateLanguages,
  locales,
  type Locale,
} from "@/i18n/config";
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
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: localeAlternateLanguages(""),
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
      {/*
        Un solo <main>. Barra a striscia: solo layout (pagine) su cookie, privacy, gallery, lucca-comics.
        Home: barra sull’hero in page.tsx.
      */}
      <main
        id="main-content"
        className="min-h-full w-full bg-[#f6f2ea] text-[#1e1612]"
      >
        {children}
      </main>
      <CookieConsent locale={locale as Locale} copy={dict.cookieBanner} />
      <LegalCompliance locale={locale as Locale} copy={dict.legal} />
    </>
  );
}
