import type { Locale } from "@/i18n/config";
import { getContactPhoneForLocale } from "@/config/contact";

export function buildWhatsappLink(message: string, locale: Locale) {
  const e164 = getContactPhoneForLocale(locale).e164;
  const text = encodeURIComponent(message);
  return `https://wa.me/${e164}?text=${text}`;
}
