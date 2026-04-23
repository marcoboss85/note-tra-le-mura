import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, localeToHrefLang, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildOpenGraphAndTwitter } from "@/lib/social-metadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const dict = getDictionary(raw);
  const locale = raw as Locale;
  const fullTitle = `${dict.privacy.title} | ${dict.hero.brand}`;
  const description = dict.privacy.metaDescription;
  return {
    title: fullTitle,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${raw}/privacy`,
      languages: Object.fromEntries(
        locales.map((l) => [localeToHrefLang(l), `/${l}/privacy`]),
      ),
    },
    ...buildOpenGraphAndTwitter({
      path: `/${raw}/privacy`,
      title: fullTitle,
      description,
      siteName: dict.hero.brand,
      locale,
    }),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <main className="min-h-screen bg-[#f6f2ea] px-6 py-16 pb-12 font-[var(--font-ui)] text-[#1e1612] md:px-12 md:py-24 md:pb-16">
      <article className="mx-auto max-w-2xl">
        <Link
          href={base}
          className="text-sm font-medium text-[#4a433c] underline decoration-[#b8b0a8] underline-offset-4 transition hover:decoration-[#6b6259]"
        >
          ← {dict.privacy.backToHome}
        </Link>
        <h1 className="mt-8 font-[var(--font-serif)] text-3xl font-normal tracking-tight text-[#2c241c] md:text-4xl">
          {dict.privacy.title}
        </h1>
        <div className="mt-10 space-y-10 text-[15px] font-normal leading-relaxed text-[#534a42] md:text-base">
          {dict.privacy.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-[var(--font-serif)] text-lg font-normal tracking-tight text-[#2c241c] md:text-xl">
                {s.heading}
              </h2>
              <p className="mt-3">{s.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
