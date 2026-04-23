import type { Metadata, Viewport } from "next";
import { getMetadataBaseUrl } from "@/lib/social-metadata";
import {
  Manjari,
  Ovo,
  Pinyon_Script,
  Raleway,
  Roboto,
  Yanone_Kaffeesatz,
} from "next/font/google";
import { HtmlLang } from "@/components/HtmlLang";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import "./globals.css";

/** Corpo: come palazzodipinto.com (`body` in stile.css). */
const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: true,
});

/** Titoli principali / serif: Ovo (stesso sito di riferimento). */
const ovo = Ovo({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

/** Titoli sezione tipo fascia / display: Yanone Kaffeesatz. */
const yanoneSection = Yanone_Kaffeesatz({
  variable: "--font-section",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
});

/** Nome in home: manoscritto da partitura (inchiostro / incisione, hairline). */
const heroBrandScore = Pinyon_Script({
  variable: "--font-hero-brand",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  adjustFontFallback: true,
});

/** UI secondaria / didascalie: come su palazzodipinto.com (Roboto + Manjari). */
const roboto = Roboto({
  variable: "--font-ui",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500"],
  display: "swap",
  adjustFontFallback: true,
});

const manjari = Manjari({
  variable: "--font-caption",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: getMetadataBaseUrl(),
  title: "Note tra le Mura | Lucca",
  description:
    "Boutique apartment in the heart of Lucca — Note tra le Mura.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f2ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${raleway.variable} ${ovo.variable} ${yanoneSection.variable} ${heroBrandScore.variable} ${roboto.variable} ${manjari.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <HtmlLang />
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
