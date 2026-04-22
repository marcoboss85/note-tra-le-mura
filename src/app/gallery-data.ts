export type Ambiente = {
  slug: string;
  titolo: string;
  cartella: string;
  immagini: string[];
};

export const ambienti: Ambiente[] = [
  {
    slug: "soggiorno",
    titolo: "Soggiorno",
    cartella: "soggiorno",
    immagini: [
      "IMG_4196.webp",
      "IMG_4197.webp",
      "IMG_4198.webp",
      "IMG_4199.webp",
      "IMG_4216.webp",
    ],
  },
  {
    slug: "cucina",
    titolo: "Cucina",
    cartella: "cucina",
    immagini: ["IMG_4200.webp", "IMG_4201.webp", "IMG_4202.webp", "IMG_4203.webp", "IMG_4238.webp"],
  },
  {
    slug: "camera-da-letto-1",
    titolo: "Camera da letto 1",
    cartella: "camera da letto 1",
    immagini: ["IMG_4207.webp", "IMG_4208.webp", "IMG_4209.webp"],
  },
  {
    slug: "camera-da-letto-2",
    titolo: "Camera da letto 2",
    cartella: "camera da letto 2",
    immagini: ["IMG_4204.webp", "IMG_4205.webp", "IMG_4206.webp"],
  },
  {
    slug: "bagni",
    titolo: "Bagni",
    cartella: "bagni",
    immagini: ["IMG_4210.webp", "IMG_4211.webp", "IMG_4212.webp", "IMG_4213.webp", "IMG_4214.webp"],
  },
  {
    slug: "esterno",
    titolo: "Esterno",
    cartella: "esterno",
    immagini: ["IMG_4215.webp", "IMG_4217.webp", "IMG_4239.webp"],
  },
];
