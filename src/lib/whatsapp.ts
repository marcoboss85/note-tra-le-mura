import { CONTACT_PHONE_E164 } from "@/config/contact";

export function buildWhatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_PHONE_E164}?text=${text}`;
}
