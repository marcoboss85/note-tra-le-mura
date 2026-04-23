import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, localeAlternateLanguages } from "@/i18n/config";
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
  const fullTitle = `${dict.cookies.title} | ${dict.hero.brand}`;
  const description = dict.cookies.metaDescription;
  return {
    title: fullTitle,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${raw}/cookie`,
      languages: localeAlternateLanguages("/cookie"),
    },
    ...buildOpenGraphAndTwitter({
      path: `/${raw}/cookie`,
      title: fullTitle,
      description,
      siteName: dict.hero.brand,
      locale,
    }),
  };
}

export default async function CookiePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <div className="min-h-screen px-6 py-16 pb-12 font-[var(--font-ui)] md:px-12 md:py-24 md:pb-16">
      <article className="mx-auto max-w-2xl">
        <Link
          href={base}
          className="text-sm font-medium text-[#4a433c] underline decoration-[#b8b0a8] underline-offset-4 transition hover:decoration-[#6b6259]"
        >
          ← {dict.cookies.backToHome}
        </Link>
        <h1 className="mt-8 font-[var(--font-serif)] text-3xl font-normal tracking-tight text-[#2c241c] md:text-4xl">
          {dict.cookies.title}
        </h1>
        <div className="mt-10 space-y-10 text-[15px] font-normal leading-relaxed text-[#534a42] md:text-base">
          {dict.cookies.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-[var(--font-serif)] text-lg font-normal tracking-tight text-[#2c241c] md:text-xl">
                {s.heading}
              </h2>
              <p className="mt-3">{s.body}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
