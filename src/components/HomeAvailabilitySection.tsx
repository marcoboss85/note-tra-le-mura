import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getAirbnbIcalUrl } from "@/config/calendar";
import { fetchAirbnbBlockedDates } from "@/lib/ical-blocked-dates";

const AvailabilityCalendar = dynamic(
  () =>
    import("@/components/AvailabilityCalendar").then(
      (m) => m.AvailabilityCalendar,
    ),
  {
    loading: () => (
      <div
        className="mx-auto min-h-[min(24rem,70vh)] max-w-4xl rounded-lg border border-[#e3dcd4] bg-[#f0ebe3]/50"
        aria-hidden
      />
    ),
  },
);

function AvailabilityFallback() {
  return (
    <div
      className="mx-auto min-h-[min(24rem,70vh)] max-w-4xl animate-pulse rounded-lg border border-[#e3dcd4] bg-[#f0ebe3]/60"
      aria-busy="true"
      aria-label="Loading availability"
    />
  );
}

async function AvailabilityBlock({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const icalUrl = getAirbnbIcalUrl();
  let availabilityStatus: "ok" | "missing_url" | "error" = "missing_url";
  let blockedYmd: string[] = [];
  if (icalUrl) {
    const res = await fetchAirbnbBlockedDates(icalUrl);
    if (res.ok) {
      availabilityStatus = "ok";
      blockedYmd = Array.from(res.blocked);
    } else {
      availabilityStatus = "error";
    }
  }

  return (
    <AvailabilityCalendar
      locale={locale}
      copy={dict.availability}
      blocked={blockedYmd}
      status={availabilityStatus}
    />
  );
}

type Props = {
  locale: Locale;
};

/** Calendario disponibilità: fetch iCal in Suspense così hero e testo non aspettano. */
export function HomeAvailabilitySection({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <section
      id="disponibilita"
      className="border-t border-[#e0d9cf] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-24"
      aria-label={dict.availability.widgetAria}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={dict.availability.heading} />
        <Suspense fallback={<AvailabilityFallback />}>
          <AvailabilityBlock locale={locale} />
        </Suspense>
      </div>
    </section>
  );
}
