// https://bobbyhadz.com/blog/typescript-object-with-dynamic-keys

interface IISOmap {
  // 👇️ key         value
  [key: string]: string | number;
}

export const alpha2ISOMap: IISOmap = {
  ua: 'uk-UA',
  en: 'en-US',
};

export function alpha2iso(code: string) {
  return alpha2ISOMap[code];
}
