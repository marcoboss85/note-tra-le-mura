"use client";

import { ContactSocialIcons } from "@/components/ContactSocialIcons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export type PageTopBarProps = {
  facebookUrl: string | null;
  instagramUrl: string | null;
  facebookAria: string;
  instagramAria: string;
  /**
   * `overHero`: sopra le foto, sfondo a gradiente scuro / blur leggero (home).
   * `default`: striscia piena sotto l’offset del layout.
   */
  variant?: "default" | "overHero";
};

/**
 * Barra in cima: social a sinistra, bandiere a destra; scorre con la pagina (non fixed).
 * Su `overHero` va messa *dentro* un contenitore `relative` (es. sezione hero).
 */
export function PageTopBar({
  facebookUrl,
  instagramUrl,
  facebookAria,
  instagramAria,
  variant = "default",
}: PageTopBarProps) {
  const hasSocial = Boolean(facebookUrl || instagramUrl);
  const isOverHero = variant === "overHero";
  if (isOverHero) {
    /* relative + flusso: nessun absolute sull'hero, così su tutti i browser/CDN scorre col documento */
    return (
      <header className="relative z-20 w-full border-0 bg-transparent pt-[max(0.35rem,env(safe-area-inset-top))] pb-2">
        {/*
          Su mobile: niente doppio padding con la sezione; bandiere e social più vicini
          ai bordi (più a sinistra / più a destra rispetto a un blocco “centrato”).
        */}
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
          <LanguageSwitcher className="flex flex-shrink-0" />
        </div>
      </div>
    </header>
  );
}
