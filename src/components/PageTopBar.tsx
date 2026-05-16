import { ContactSocialIcons } from "@/components/ContactSocialIcons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";

export type PageTopBarProps = {
  locale: Locale;
  /** Percorso dopo `/{locale}/` (vuoto sulla home). */
  pathAfterLocale?: string;
  facebookUrl: string | null;
  instagramUrl: string | null;
  facebookAria: string;
  instagramAria: string;
  variant?: "default" | "overHero";
};

/**
 * Barra in cima: social a sinistra, bandiere a destra; scorre con la pagina (non fixed).
 * Server component — niente JS per cambio lingua sulle pagine guida.
 */
export function PageTopBar({
  locale,
  pathAfterLocale = "",
  facebookUrl,
  instagramUrl,
  facebookAria,
  instagramAria,
  variant = "default",
}: PageTopBarProps) {
  const hasSocial = Boolean(facebookUrl || instagramUrl);
  const isOverHero = variant === "overHero";
  if (isOverHero) {
    return (
      <header className="relative z-20 w-full border-0 bg-transparent pt-[max(0.35rem,env(safe-area-inset-top))] pb-2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1.5 py-2 pl-0 pr-0 sm:gap-3 sm:pl-0.5 sm:pr-0.5 md:gap-3 md:px-6">
          <div className="min-w-0 flex-1 [padding-inline-start:max(0px,env(safe-area-inset-left))]">
            {hasSocial ? (
              <ContactSocialIcons
                placement="hero"
                facebookUrl={facebookUrl}
                instagramUrl={instagramUrl}
                facebookAria={facebookAria}
                instagramAria={instagramAria}
              />
            ) : null}
          </div>
          <div className="flex shrink-0 [padding-inline-end:max(0px,env(safe-area-inset-right))]">
            <LanguageSwitcher
              locale={locale}
              pathAfterLocale={pathAfterLocale}
              className="flex flex-shrink-0"
              variant="onPhoto"
            />
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="border-b border-[#e3dcd4] bg-[#f6f2ea]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1.5 py-2 pl-1 pr-1 sm:gap-3 sm:pl-2 sm:pr-2 md:gap-3 md:px-6">
        <div className="min-w-0 flex-1 [padding-inline-start:max(0px,env(safe-area-inset-left))]">
          {hasSocial ? (
            <ContactSocialIcons
              placement="pageTop"
              facebookUrl={facebookUrl}
              instagramUrl={instagramUrl}
              facebookAria={facebookAria}
              instagramAria={instagramAria}
            />
          ) : null}
        </div>
        <div className="flex shrink-0 [padding-inline-end:max(0px,env(safe-area-inset-right))]">
          <LanguageSwitcher
            locale={locale}
            pathAfterLocale={pathAfterLocale}
            className="flex flex-shrink-0"
          />
        </div>
      </div>
    </header>
  );
}
