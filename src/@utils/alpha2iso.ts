// https://bobbyhadz.com/blog/typescript-object-with-dynamic-keys

import type { Language } from '../@types';

const alpha2ISOMap: Record<Language, string> = {
  uk: 'uk-UA',
  en: 'en-US',
};

export function alpha2iso(code: Language) {
  return alpha2ISOMap[code];
}
