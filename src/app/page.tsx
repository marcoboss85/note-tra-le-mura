import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

/** Root `/` senza locale: stesso obiettivo del middleware, fallback se il matcher non prende solo `/`. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
