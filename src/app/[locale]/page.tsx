import Image from "next/image";
import Link from "next/link";
import { IconMail } from "@/components/ContactIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { HomeAvailabilitySection } from "@/components/HomeAvailabilitySection";
import { WhatsAppLogo } from "@/components/WhatsAppLogo";
import { ambienti } from "@/app/gallery-data";
import { type Locale, isLocale, localeAlternateLanguages } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { RoomSlug } from "@/i18n/dictionaries";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  getContactPhoneForLocale,
} from "@/config/contact";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { isHomeComicsBannerVisible } from "@/config/home-comics-banner";
import { getAirbnbListingUrl } from "@/config/airbnb-listing";
import { getOsmEmbedUrl, getOsmViewUrl } from "@/config/property-map";
import { getFacebookPageUrl, getInstagramUrl } from "@/config/social";
import { getPublicLegalDisplay } from "@/config/public-legal";
import { PageTopBar } from "@/components/PageTopBar";
import { ServiceAmenityIcon } from "@/components/ServiceAmenityIcon";
import { PropertyMapMini } from "@/components/PropertyMapMini";
import { buildLodgingJsonLd } from "@/lib/lodging-jsonld";
import { buildOpenGraphAndTwitter, getMetadataBaseUrl } from "@/lib/social-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 1800;

type PageProps = {
  params: Promise<{ locale: string }>;
};

const travelNotes: Record<
  Locale,
  {
    heading: string;
    intro: string;
    cta: string;
    cards: { title: string; body: string; href: string }[];
  }
> = {
  en: {
    heading: "Lucca travel notes",
    intro:
      "Practical guides for international guests planning a stay inside Lucca’s walls.",
    cta: "Read guide",
    cards: [
      {
        title: "How to get to Lucca and where to stay",
        body: "By plane, train or car, parking and staying inside the walls.",
        href: "/where-to-stay-lucca-inside-walls",
      },
      {
        title: "Typical restaurants and local food in Lucca",
        body: "What to taste, where to book, and how to plan dinner from Via Pelleria.",
        href: "/best-restaurants-lucca-local-food",
      },
      {
        title: "Lucca in one day",
        body: "A calm walking plan: morning squares, walls or towers, lunch and evening.",
        href: "/lucca-in-one-day",
      },
      {
        title: "Lucca and surroundings",
        body: "Sea, mountains, art and trekking — day trips by train or car from your base in town.",
        href: "/lucca-and-surroundings",
      },
    ],
  },
  it: {
    heading: "Guide per il soggiorno",
    intro:
      "Consigli pratici per organizzare un soggiorno dentro le mura di Lucca.",
    cta: "Leggi la guida",
    cards: [
      {
        title: "Come arrivare a Lucca e dove soggiornare",
        body: "Aereo, treno, auto, parcheggi e soggiorno dentro le mura.",
        href: "/where-to-stay-lucca-inside-walls",
      },
      {
        title: "Ristoranti tipici e cucina lucchese",
        body: "Cosa assaggiare, dove prenotare e come organizzare la cena.",
        href: "/best-restaurants-lucca-local-food",
      },
      {
        title: "Lucca in un giorno",
        body: "Itinerario a piedi: mattina tra le piazze, mura o torri, pranzo e sera.",
        href: "/lucca-in-one-day",
      },
      {
        title: "Lucca e dintorni",
        body: "Mare, montagna, arte e trekking — gite in treno o in auto con base in città.",
        href: "/lucca-and-surroundings",
      },
    ],
  },
  de: {
    heading: "Lucca-Reisetipps",
    intro:
      "Praktische Hinweise für einen Aufenthalt innerhalb der Stadtmauern von Lucca.",
    cta: "Guide lesen",
    cards: [
      {
        title: "Anreise nach Lucca und Übernachtung",
        body: "Flugzeug, Zug, Auto, Parken und Wohnen innerhalb der Mauern.",
        href: "/where-to-stay-lucca-inside-walls",
      },
      {
        title: "Typische Restaurants und lokale Küche in Lucca",
        body: "Was man probieren sollte und wie man ein Abendessen gut plant.",
        href: "/best-restaurants-lucca-local-food",
      },
      {
        title: "Lucca an einem Tag",
        body: "Ruhiger Tagesplan zu Fuss: Plätze, Mauer oder Türme, Mittag- und Abendessen.",
        href: "/lucca-in-one-day",
      },
      {
        title: "Lucca und Umgebung",
        body: "Meer, Berge, Kunst und Trekking — Tagesausflüge mit Zug oder Auto.",
        href: "/lucca-and-surroundings",
      },
    ],
  },
  sr: {
    heading: "Praktični vodiči za Luku",
    intro:
      "Kratki saveti za boravak unutar zidina Luke, posebno za goste iz inostranstva.",
    cta: "Pročitaj vodič",
    cards: [
      {
        title: "Kako stići u Luku i gde odsesti",
        body: "Avion, voz, auto, parking i boravak unutar zidina.",
        href: "/where-to-stay-lucca-inside-walls",
      },
      {
        title: "Tipični restorani i lokalna hrana u Luci",
        body: "Šta probati, gde rezervisati i kako isplanirati večeru.",
        href: "/best-restaurants-lucca-local-food",
      },
      {
        title: "Luka za jedan dan",
        body: "Plan peške: jutarnji trgovi, zidine ili tornjevi, ručak i veče.",
        href: "/lucca-in-one-day",
      },
      {
        title: "Luka i okolina",
        body: "More, planine, umetnost i trekking — izleti vozom ili autom iz centra.",
        href: "/lucca-and-surroundings",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${locale}`,
      languages: localeAlternateLanguages(""),
    },
    ...buildOpenGraphAndTwitter({
      path: `/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.hero.brand,
      locale,
    }),
  };
}

function formatCount(template: string, n: number) {
  return template.replace(/\{n\}/g, String(n));
}

export default async function Home({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const { propertyAddress } = getPublicLegalDisplay();
  const facebookUrl = getFacebookPageUrl();
  const instagramUrl = getInstagramUrl();
  const contactPhone = getContactPhoneForLocale(locale);
  const whatsappLink = buildWhatsappLink(dict.whatsappMessage, locale);
  const base = `/${locale}`;

  const showComicsHomeBanner = isHomeComicsBannerVisible();
  const airbnbListingUrl = getAirbnbListingUrl();

  const siteBase = getMetadataBaseUrl().origin;
  const lodgingJsonLd = buildLodgingJsonLd({
    name: dict.hero.brand,
    description: dict.meta.description,
    pageUrl: `${siteBase}/${locale}`,
  });

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
      <section
        id="benvenuto"
        className="relative grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] overflow-hidden px-3 sm:px-6 md:px-12"
        aria-label={dict.hero.imageAlt}
      >
        {/*
          Slideshow in layer assoluto pieno schermo; social/bandiere in *flusso* (riga 1) così
          non dipendono da absolute sullo stesso contenitore del transform hero (Vercel/compositing).
        */}
        <div className="absolute inset-0 z-0" aria-hidden>
          <HeroSlideshow imageAlt={dict.hero.imageAlt} />
        </div>
        <PageTopBar
          locale={locale}
          pathAfterLocale=""
          variant="overHero"
          facebookUrl={facebookUrl}
          instagramUrl={instagramUrl}
          facebookAria={dict.contacts.facebookAria}
          instagramAria={dict.contacts.instagramAria}
        />
        <div className="relative z-10 flex w-full min-h-0 items-center py-12 md:py-20">
          <div className="mx-auto w-full max-w-5xl">
          <p className="mb-5 font-[var(--font-caption)] text-xs font-bold uppercase tracking-[0.26em] text-[#141008] md:text-[13px]">
            {dict.hero.kicker}
          </p>
          <h1 className="max-w-3xl font-[var(--font-hero-brand)] text-[2.75rem] font-normal leading-[1.12] tracking-[0.04em] text-[#0f0c08] [text-shadow:0_0_1px_rgba(255,255,255,1),0_0_4px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.85),0_1px_0_rgba(255,255,255,0.95),0_2px_6px_rgba(255,255,255,0.9),0_3px_22px_rgba(255,255,255,0.75),0_4px_40px_rgba(255,255,255,0.55),0_6px_60px_rgba(255,255,255,0.35)] md:text-[4.15rem] md:leading-[1.1]">
            {dict.hero.brand}
          </h1>
          <p className="mt-5 max-w-2xl font-[var(--font-body)] text-base font-bold italic leading-relaxed text-[#15120e] md:text-lg">
            {dict.hero.location}
          </p>
          <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-[#141008] md:max-w-2xl md:text-lg md:leading-8">
            {dict.hero.subtitle}
          </p>
          <p className="mt-4 max-w-xl text-[14px] font-medium leading-relaxed text-[#1a1612] md:max-w-2xl md:text-[15px] md:leading-7">
            {dict.hero.transportNote}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#contatti"
              className="inline-flex items-center rounded-full bg-[#2a4a38] px-7 py-3.5 text-[15px] font-medium tracking-wide text-[#faf8f5] ring-1 ring-[#1a3024]/15 transition-colors duration-300 hover:bg-[#22382c]"
              aria-label={dict.hero.whatsappAria}
            >
              {dict.hero.whatsapp}
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center rounded-full border border-[#5c4d42]/25 bg-[#fcfbf9]/75 px-7 py-3.5 text-[15px] font-medium tracking-wide text-[#2e241c] backdrop-blur-sm transition-colors duration-300 hover:border-[#5c4d42]/40 hover:bg-[#faf8f5]"
            >
              {dict.hero.gallery}
            </a>
          </div>
          </div>
        </div>
      </section>

      {showComicsHomeBanner ? (
        <div
          className="border-b border-[#e0d9cf] bg-[#f0ebe3]/90 px-6 py-4 text-center font-[var(--font-ui)] text-[14px] md:py-5 md:text-[15px]"
          role="complementary"
          aria-label={dict.luccaComics.title}
        >
          <p className="mx-auto max-w-3xl leading-relaxed text-[#0f0c08] [text-shadow:0_0_1px_rgba(255,255,255,1),0_0_4px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.85),0_1px_0_rgba(255,255,255,0.95),0_2px_6px_rgba(255,255,255,0.9),0_3px_22px_rgba(255,255,255,0.75),0_4px_40px_rgba(255,255,255,0.55),0_6px_60px_rgba(255,255,255,0.35)]">
            <span>{dict.luccaComics.homeComicsTeaser}</span>{" "}
            <Link
              href={`${base}/lucca-comics`}
              className="font-semibold text-[#243828] underline decoration-[#b8b0a8] underline-offset-2 [text-shadow:0_0_1px_rgba(255,255,255,1),0_0_4px_rgba(255,255,255,0.9),0_2px_8px_rgba(255,255,255,0.75)] transition hover:decoration-[#5c544c]"
            >
              {dict.luccaComics.homeComicsLinkText}
            </Link>
          </p>
        </div>
      ) : null}

      <HomeAvailabilitySection locale={locale} />

      <section
        id="gallery"
        className="border-t border-[#e0d9cf] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-24"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title={dict.gallery.heading}
            subtitle={dict.gallery.sub}
          />
          <div className="space-y-14 md:space-y-16">
            {ambienti.map((ambiente, ambienteIndex) => {
              const roomTitle = dict.rooms[ambiente.slug as RoomSlug];
              return (
                <div key={ambiente.slug}>
                  <div className="mb-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
                    <h3 className="font-[var(--font-serif)] text-xl font-normal text-[#342a22] md:text-2xl">
                      {roomTitle}
                    </h3>
                    <span className="font-[var(--font-caption)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a8178]">
                      {formatCount(dict.gallery.photoCount, ambiente.immagini.length)}
                    </span>
                  </div>
                  <Link
                    href={`${base}/gallery/${ambiente.slug}`}
                    aria-label={`${dict.gallery.enter}: ${roomTitle}`}
                    className="group mx-auto block max-w-3xl overflow-hidden rounded-xl border border-[#ddd6ce] bg-[#fcfbf9] shadow-sm transition-shadow duration-300 hover:border-[#cbc4bb] hover:shadow-md"
                  >
                    <div className="relative h-56 w-full sm:h-64 md:h-72">
                      <Image
                        src={encodeURI(
                          `/${ambiente.cartella}/${ambiente.immagini[0]}`,
                        )}
                        alt={`${roomTitle} — ${dict.gallery.coverAltSuffix}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 48rem"
                        className="object-cover transition duration-[640ms] ease-out group-hover:scale-[1.02]"
                        priority={ambienteIndex === 0}
                        quality={72}
                        loading={ambienteIndex === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="storia"
        className="border-t border-[#e8e2da] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title={dict.story.heading} />
          <p className="text-[17px] font-normal leading-relaxed text-[#534a42] md:text-lg md:leading-8">
            {dict.story.body}
          </p>
        </div>
      </section>

      <section
        id="servizi"
        className="border-t border-[#e0d9cf] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-24"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeading title={dict.services.heading} />
          <ul className="grid grid-cols-1 gap-4 text-left sm:gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-5">
            {dict.services.items.map((servizio) => (
              <li
                key={`${servizio.icon}-${servizio.title}`}
                className="flex gap-3 rounded-xl border border-[#e3dcd4] bg-[#fcfbf9]/90 p-4 shadow-sm md:gap-4 md:p-5"
              >
                <ServiceAmenityIcon id={servizio.icon} />
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-snug text-[#243828] md:text-base">
                    {servizio.title}
                  </p>
                  <p className="mt-1.5 text-[14px] font-normal leading-relaxed text-[#5c544c] md:text-[15px] md:leading-6">
                    {servizio.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="guide-lucca"
        className="border-t border-[#e8e2da] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            title={travelNotes[locale].heading}
            subtitle={travelNotes[locale].intro}
          />
          <div className="grid gap-4 text-left md:grid-cols-2 md:gap-5">
            {travelNotes[locale].cards.map((card) => (
              <Link
                key={card.href}
                href={`${base}${card.href}`}
                className="group rounded-2xl border border-[#e3dcd4] bg-[#fcfbf9]/90 p-5 shadow-sm transition hover:border-[#cfc6bc] hover:shadow-md md:p-6"
              >
                <h3 className="font-[var(--font-serif)] text-xl font-normal tracking-tight text-[#2c241c] md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5c544c]">
                  {card.body}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#243828] underline decoration-[#b8b0a8] underline-offset-4 transition group-hover:decoration-[#5c544c]">
                  {travelNotes[locale].cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="dicono-di-noi"
        className="border-t border-[#e0d9cf] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-24"
        aria-label={dict.testimonials.heading}
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={dict.testimonials.heading} />
          <p className="text-[17px] font-normal leading-relaxed text-[#534a42] md:text-lg md:leading-8">
            {dict.testimonials.body}
          </p>
          {airbnbListingUrl ? (
            <a
              href={airbnbListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2a4a38] px-7 py-3.5 text-[15px] font-medium tracking-wide text-[#faf8f5] ring-1 ring-[#1a3024]/12 transition-colors duration-300 hover:bg-[#22382c]"
              aria-label={dict.testimonials.ctaAria}
            >
              {dict.testimonials.cta}
            </a>
          ) : null}
        </div>
      </section>

      <section
        id="contatti"
        className="border-t border-[#e8e2da] px-6 pb-36 pt-20 md:px-12 md:pb-40 md:pt-24"
      >
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading title={dict.contacts.heading} />
          <p className="text-[17px] font-normal leading-relaxed text-[#3d4a40] md:text-lg">
            {dict.contacts.body}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:gap-5">
            <p className="flex items-center justify-center gap-3 text-[17px] font-normal text-[#3d4a40] md:text-lg">
              <WhatsAppLogo className="h-[1.25em] w-[1.25em] shrink-0 text-[#2a6a4a]" />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${dict.contacts.whatsappAria}: ${contactPhone.display}`}
                className="font-medium text-[#243828] underline decoration-[#9ab09a] underline-offset-4 transition hover:decoration-[#243828]"
              >
                {contactPhone.display}
              </a>
            </p>
            <p className="flex items-center justify-center gap-3 text-[17px] font-normal text-[#3d4a40] md:text-lg">
              <IconMail className="h-[1.15em] w-[1.15em] shrink-0 text-[#5a6b60]" />
              <a
                href={contactMailtoHref({
                  subject: dict.contacts.mailSubject,
                  body: dict.contacts.mailBodyIntro,
                })}
                aria-label={`${dict.contacts.emailLinkAria}: ${CONTACT_EMAIL}`}
                className="font-medium break-all text-[#243828] underline decoration-[#9ab09a] underline-offset-4 transition hover:decoration-[#243828]"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.contacts.whatsappAria}
              className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-[#2a4a38] px-8 py-3.5 text-[15px] font-medium tracking-wide text-[#faf8f5] ring-1 ring-[#1a3024]/12 transition-colors duration-300 hover:bg-[#22382c]"
            >
              <WhatsAppLogo className="h-6 w-6 shrink-0 text-[#faf8f5]" />
              <span>{dict.contacts.whatsapp}</span>
            </a>
          </div>
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
        </div>
      </section>

      <a
        id="fab-whatsapp-home"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.fabWhatsappAria}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full bg-[#2a4a38] p-3.5 text-[#faf8f5] ring-1 ring-white/35 transition-[bottom,colors] duration-300 hover:bg-[#22382c] md:bottom-7 md:right-8 md:p-4"
      >
        <WhatsAppLogo className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
}
