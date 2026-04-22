import { isLocale } from "./config";
import { type Messages, dictionaries } from "./dictionaries";

export function getDictionary(locale: string): Messages {
  if (!isLocale(locale)) {
    return dictionaries.it;
  }
  return dictionaries[locale];
}

export type Dictionary = Messages;
