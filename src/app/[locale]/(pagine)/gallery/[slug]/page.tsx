import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ambienti } from "@/app/gallery-data";
import type { RoomSlug } from "@/i18n/dictionaries";
import { type Locale, isLocale, localeToHrefLang, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildOpenGraphAndTwitter } from "@/lib/social-metadata";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function formatCount(template: string, n: number) {
  return template.replace(/\{n\}/g, String(n));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const ambiente = ambienti.find((item) => item.slug === slug);
  if (!ambiente) {
    return {};
  }
  const roomTitle = dict.rooms[ambiente.slug as RoomSlug];
  const fullTitle = `${roomTitle} | ${dict.hero.brand}`;
  const description = dict.galleryPage.metaDescription.replace(
    "{room}",
    roomTitle,
  );
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `/${locale}/gallery/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [localeToHrefLang(l), `/${l}/gallery/${slug}`]),
      ),
    },
    ...buildOpenGraphAndTwitter({
      path: `/${locale}/gallery/${slug}`,
      title: fullTitle,
      description,
      siteName: dict.hero.brand,
      locale,
    }),
  };
}

export default async function AmbienteGalleryPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const ambiente = ambienti.find((item) => item.slug === slug);

  if (!ambiente) {
    notFound();
  }

  const roomTitle = dict.rooms[ambiente.slug as RoomSlug];
  const base = `/${locale}`;

  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-12 md:pt-24">
        <Link
          href={`${base}#gallery`}
          className="inline-flex items-center rounded-full border border-[#d4cdc4] bg-[#fcfbf9]/90 px-5 py-2.5 font-[var(--font-ui)] text-sm font-medium text-[#4a433c] transition-colors duration-300 hover:border-[#cbc4bb] hover:bg-[#faf8f5]"
        >
          ← {dict.galleryPage.back}
        </Link>
        <h1 className="mt-8 font-[var(--font-serif)] text-4xl font-normal tracking-tight text-[#2c241c] md:text-5xl md:leading-tight">
          {roomTitle}
        </h1>
        <p className="mt-4 font-[var(--font-ui)] text-[15px] font-normal leading-relaxed text-[#6b6259] md:text-base">
          {formatCount(
            dict.gallery.roomPhotosIntro,
            ambiente.immagini.length,
          )}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12 md:pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ambiente.immagini.map((nomeFile, index) => (
            <figure
              key={`${ambiente.slug}-${nomeFile}`}
              className="overflow-hidden rounded-2xl border border-[#ddd6ce] bg-[#fcfbf9]"
            >
              <div className="relative h-64 md:h-72">
                <Image
                  src={encodeURI(`/${ambiente.cartella}/${nomeFile}`)}
                  alt={`${roomTitle} — ${dict.galleryPage.photoAltSuffix} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-[640ms] ease-out hover:scale-[1.02]"
                  priority={index < 2}
                  quality={72}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
