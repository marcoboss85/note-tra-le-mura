import { notFound } from "next/navigation";
import { PageTopBar } from "@/components/PageTopBar";
import { getFacebookPageUrl, getInstagramUrl } from "@/config/social";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/**
 * Pagine oltre la home: striscia social + lingue (server-only, nessun usePathname)
 * così in produzione non si mescolano con la barra sull’hero.
 */
export default async function PagineLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const dict = getDictionary(raw as Locale);
  return (
    <>
      <PageTopBar
        facebookUrl={getFacebookPageUrl()}
        instagramUrl={getInstagramUrl()}
        facebookAria={dict.contacts.facebookAria}
        instagramAria={dict.contacts.instagramAria}
      />
      {children}
    </>
  );
}
