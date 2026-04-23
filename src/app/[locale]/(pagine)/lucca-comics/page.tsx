import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComicsHeroSlideshow } from "@/components/ComicsHeroSlideshow";
import { LUCCA_COMICS_HERO_SLIDES } from "@/config/lucca-comics-hero";
import { LUCCA_COMICS_GALLERY } from "@/config/lucca-comics-gallery";
import {
  type Locale,
  isLocale,
  localeToHrefLang,
  locales,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getOsmEmbedUrl, getOsmViewUrl } from "@/config/property-map";
import { getPublicLegalDisplay } from "@/config/public-legal";
import { getFacebookPageUrl, getInstagramUrl } from "@/config/social";
import { PropertyMapMini } from "@/components/PropertyMapMini";
import { buildOpenGraphAndTwitter } from "@/lib/social-metadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const dict = getDictionary(raw);
  const c = dict.luccaComics;
  const fullTitle = `${c.title} | ${dict.hero.brand}`;
  return {
    title: fullTitle,
    description: c.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${raw}/lucca-comics`,
      languages: Object.fromEntries(
        locales.map((l) => [localeToHrefLang(l), `/${l}/lucca-comics`]),
      ),
    },
    ...buildOpenGraphAndTwitter({
      path: `/${raw}/lucca-comics`,
      title: fullTitle,
      description: c.metaDescription,
      siteName: dict.hero.brand,
      locale: raw,
      imagePath: `/${LUCCA_COMICS_GALLERY[0]}`,
      imageAlt: c.galleryImageAlts[0],
    }),
  };
}

export default async function LuccaComicsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const c = dict.luccaComics;
  const { propertyAddress } = getPublicLegalDisplay();
  const facebookUrl = getFacebookPageUrl();
  const instagramUrl = getInstagramUrl();
  const base = `/${locale}`;
  /** Sezione "Prenotazione diretta" / "Direct booking" (terza, indice 2). */
  const contactCtaSectionIndex = 2;
  const faqJson = faqJsonLd(c.faq);

  return (
    <div className="min-h-screen font-[var(--font-ui)]">
      <section
        className="relative flex min-h-[min(72vh,720px)] flex-col justify-end overflow-hidden px-6 pb-4 pt-8 md:min-h-[min(78vh,820px)] md:px-12 md:pb-6 md:pt-10"
        role="region"
        aria-label={c.heroSlideshowAria}
      >
        <ComicsHeroSlideshow
          slides={LUCCA_COMICS_HERO_SLIDES}
          slideAlts={c.heroSlideAlts}
          ariaLabel={c.heroSlideshowAria}
        />
        <div className="relative z-10 mx-auto w-full max-w-3xl pb-20 md:pb-24">
          <Link
            href={base}
            className="text-sm font-medium text-[#2e261c] underline decoration-[#c5bdb4] underline-offset-4 [text-shadow:0_1px_10px_rgba(255,255,255,0.75)] transition hover:decoration-[#5c544c] hover:[text-shadow:0_1px_12px_rgba(255,255,255,0.9)]"
          >
            ← {c.backToHome}
          </Link>
          <h1 className="mt-6 max-w-3xl font-[var(--font-serif)] text-3xl font-normal tracking-tight text-[#141008] [text-shadow:0_2px_16px_rgba(255,255,255,0.55),0_1px_8px_rgba(255,255,255,0.45)] md:text-4xl md:leading-tight">
            {c.title}
          </h1>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <article className="mx-auto max-w-3xl px-6 py-8 pb-12 md:px-12 md:py-10 md:pb-16">
        <p className="text-[15px] font-normal leading-relaxed text-[#4a433c] md:text-base">
          {c.intro}
        </p>

        <section
          className="mt-10"
          aria-labelledby="comics-gallery-title"
        >
          <h2
            id="comics-gallery-title"
            className="font-[var(--font-serif)] text-xl font-normal tracking-tight text-[#2c241c] md:text-2xl"
          >
            {c.galleryTitle}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {LUCCA_COMICS_GALLERY.map((rel, i) => (
              <figure
                key={rel}
                className="overflow-hidden rounded-2xl border border-[#ddd6ce] bg-[#fcfbf9] shadow-sm"
              >
                <div className="relative h-52 w-full md:h-60">
                  <Image
                    src={encodeURI(`/${rel}`)}
                    alt={
                      c.galleryImageAlts[i] ??
                      `${dict.hero.brand} — Lucca Comics, photo ${i + 1}`
                    }
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-[480ms] ease-out hover:scale-[1.02]"
                    quality={75}
                    priority={i < 2}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-10 text-[15px] font-normal leading-relaxed text-[#534a42] md:text-base">
          {c.sections.map((s, i) => (
            <section key={i} aria-labelledby={`comics-section-${i}`}>
              {i === contactCtaSectionIndex ? (
                <>
                  <h2
                    id={`comics-section-${i}`}
                    className="font-[var(--font-serif)] text-lg font-normal tracking-tight text-[#2c241c] md:text-xl"
                  >
                    {s.heading}
                  </h2>
                  <p className="mt-3">{s.body}</p>
                  <p className="mt-4 text-center">
                    <Link
                      href={`${base}#contatti`}
                      className="inline-flex items-center justify-center rounded-full bg-[#2a4a38] px-6 py-3 text-sm font-medium text-[#faf8f5] ring-1 ring-[#1a3024]/12 transition hover:bg-[#22382c]"
                    >
                      {c.ctaToContacts}
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  <h2
                    id={`comics-section-${i}`}
                    className="font-[var(--font-serif)] text-lg font-normal tracking-tight text-[#2c241c] md:text-xl"
                  >
                    {s.heading}
                  </h2>
                  <p className="mt-3">{s.body}</p>
                </>
              )}
            </section>
          ))}
        </div>

        <section
          className="mt-14 border-t border-[#e8e2da] pt-12"
          aria-labelledby="comics-faq"
        >
          <h2
            id="comics-faq"
            className="font-[var(--font-serif)] text-2xl font-normal tracking-tight text-[#2c241c]"
          >
            {c.faqTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {c.faq.map((item, i) => (
              <li key={i} className="border-b border-[#e8e2da]/80 pb-3 last:border-0">
                <details className="group">
                  <summary className="cursor-pointer list-none font-medium text-[#2c241c] marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="underline decoration-[#c5bdb4] decoration-1 underline-offset-2 group-open:decoration-[#2c241c]">
                      {item.question}
                    </span>
                  </summary>
                  <p className="mt-3 pl-0 text-[15px] font-normal leading-relaxed text-[#534a42]">
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-center text-sm leading-relaxed text-[#5c544c]">
          {c.cta}
        </p>
        <p className="mt-4 text-center">
          <Link
            href={`${base}#contatti`}
            className="inline-flex items-center justify-center rounded-full bg-[#2a4a38] px-6 py-3 text-sm font-medium text-[#faf8f5] ring-1 ring-[#1a3024]/12 transition hover:bg-[#22382c]"
          >
            {c.ctaToContacts}
          </Link>
        </p>
        <PropertyMapMini
          embedUrl={getOsmEmbedUrl()}
          viewUrl={getOsmViewUrl()}
          frameTitle={dict.contacts.mapFrameTitle}
          linkAria={dict.contacts.mapLinkAria}
          addressLine={propertyAddress}
          facebookUrl={facebookUrl}
          instagramUrl={instagramUrl}
          facebookAria={dict.contacts.facebookAria}
          instagramAria={dict.contacts.instagramAria}
        />
      </article>
    </div>
  );
}
