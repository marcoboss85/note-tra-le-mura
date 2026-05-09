import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, localeAlternateLanguages } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildOpenGraphAndTwitter } from "@/lib/social-metadata";
import { travelGuides } from "@/config/travel-guides";
import { InlineTextLinks } from "@/components/InlineTextLinks";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const path = "/best-restaurants-lucca-local-food";
const pageCopy: Record<Locale, { kicker: string; note: string }> = {
  en: {
    kicker: "Lucca food guide",
    note: "Staying inside the walls makes dinner easy: most central tables are a walk away.",
  },
  it: {
    kicker: "Guida gastronomica di Lucca",
    note: "Dormire dentro le mura rende la cena semplice: molti tavoli del centro sono raggiungibili a piedi.",
  },
  de: {
    kicker: "Lucca Food Guide",
    note: "Wer innerhalb der Mauern wohnt, erreicht viele Restaurants im Zentrum bequem zu Fuss.",
  },
  sr: {
    kicker: "Vodič za hranu u Luci",
    note: "Boravak unutar zidina olakšava večeru: većina centralnih restorana je dostupna peške.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const guide = travelGuides["best-restaurants-lucca-local-food"][locale];
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${locale}${path}`,
      languages: localeAlternateLanguages(path),
    },
    ...buildOpenGraphAndTwitter({
      path: `/${locale}${path}`,
      title: guide.metaTitle,
      description: guide.metaDescription,
      siteName: dict.hero.brand,
      locale,
    }),
  };
}

export default async function RestaurantsGuidePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const guide = travelGuides["best-restaurants-lucca-local-food"][locale];

  return (
    <div className="min-h-screen px-6 py-16 pb-12 font-[var(--font-ui)] md:px-12 md:py-24 md:pb-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href={`/${locale}`}
          className="text-sm font-medium text-[#4a433c] underline decoration-[#b8b0a8] underline-offset-4 transition hover:decoration-[#6b6259]"
        >
          ← {dict.privacy.backToHome}
        </Link>
        <p className="mt-8 font-[var(--font-caption)] text-xs font-bold uppercase tracking-[0.24em] text-[#8a8178]">
          {pageCopy[locale].kicker}
        </p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-normal tracking-tight text-[#2c241c] md:text-5xl md:leading-tight">
          {guide.title}
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-[#534a42] md:text-lg md:leading-8">
          {guide.intro}
        </p>
        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-[#534a42] md:text-base md:leading-7">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-[var(--font-serif)] text-2xl font-normal tracking-tight text-[#2c241c]">
                {section.heading}
              </h2>
              <p className="mt-3">
                <InlineTextLinks text={section.body} links={section.links} />
              </p>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-[#e3dcd4] bg-[#fcfbf9]/90 p-6 text-center">
          <p className="text-[15px] leading-relaxed text-[#5c544c]">
            {pageCopy[locale].note}
          </p>
          <Link
            href={guide.ctaHref}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2a4a38] px-7 py-3.5 text-[15px] font-medium tracking-wide text-[#faf8f5] transition-colors duration-300 hover:bg-[#22382c]"
          >
            {guide.cta}
          </Link>
        </div>
      </article>
    </div>
  );
}
