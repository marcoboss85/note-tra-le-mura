import Link from "next/link";
import { IconLocation } from "@/components/ContactIcons";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
import { getPublicLegalDisplay } from "@/config/public-legal";

type Props = {
  locale: Locale;
  copy: Messages["legal"];
};

export function LegalCompliance({ locale, copy }: Props) {
  const d = getPublicLegalDisplay();
  const base = `/${locale}`;
  const cin = d.cin.trim();
  const addr = d.propertyAddress.trim();
  const owner = d.operatorName.trim();

  return (
    <footer
      className="border-t border-[#dcd4cb] bg-[#e8e4dc] px-5 py-4 font-[var(--font-ui)] text-[#5c544c] md:px-10 md:py-5"
      aria-label={copy.widgetAria}
    >
      <div className="mx-auto max-w-5xl text-center text-[11px] leading-relaxed md:text-xs">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
          <span>
            <span className="text-[#8a8178]">CIN </span>
            {cin ? (
              <span className="font-mono tracking-tight text-[#3d3834]">{cin}</span>
            ) : (
              <span className="text-[#8a8178]">{copy.pending}</span>
            )}
          </span>
          <span className="text-[#c4bcb3]" aria-hidden>
            ·
          </span>
          <span>
            <span className="text-[#8a8178]">{copy.ownerLabel}: </span>
            {owner ? (
              <span className="text-[#4a433c]">{owner}</span>
            ) : (
              <span className="text-[#8a8178]">{copy.pending}</span>
            )}
          </span>
          <span className="text-[#c4bcb3]" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-1">
            <IconLocation className="h-3.5 w-3.5 shrink-0 text-[#8a8178]" />
            {addr ? (
              <span className="text-[#4a433c]">{addr}</span>
            ) : (
              <span className="text-[#8a8178]">{copy.pending}</span>
            )}
          </span>
          <span className="text-[#c4bcb3]" aria-hidden>
            ·
          </span>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <Link
              href={`${base}/privacy`}
              className="text-[#4a433c] underline decoration-[#b8b0a8] underline-offset-[3px] transition hover:decoration-[#5c544c]"
            >
              {copy.linkPrivacy}
            </Link>
            <span className="text-[#c4bcb3]" aria-hidden>
              ·
            </span>
            <Link
              href={`${base}/cookie`}
              className="text-[#4a433c] underline decoration-[#b8b0a8] underline-offset-[3px] transition hover:decoration-[#5c544c]"
            >
              {copy.linkCookies}
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
