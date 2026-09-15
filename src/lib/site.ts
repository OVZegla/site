export const siteConfig = {
  name: "SYMP'S",
  legalName: "SYMP'S",
  title: "SYMP'S — Imprimantes murales professionnelles, encres et pièces détachées",
  description:
    "Imprimantes murales professionnelles à double tête Epson I1600, préparées et suivies en France. Machines sur devis avec formation et accompagnement, consommables et pièces détachées en ligne.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.symps.fr",
  locale: "fr_FR",
  phone: "+33 3 21 00 00 00",
  phoneHref: "+33321000000",
  email: "contact@symps.fr",
  address: {
    street: "10 rue des Dames",
    postalCode: "62620",
    city: "Ruitz",
    country: "France",
  },
  hours: "Du lundi au vendredi, 9 h – 18 h",
  socials: {
    instagram: "https://www.instagram.com/sympsfrance/",
    linkedin: "https://fr.linkedin.com/company/symp-s-france",
    facebook: "https://www.facebook.com/people/Symps-France/61569404995941/",
    tiktok: "https://www.tiktok.com/@symps.fr",
  },
} as const;

/** Franco de port au-delà de ce montant (en centimes TTC). */
export const FREE_SHIPPING_THRESHOLD = 30000;

/** Forfait de livraison en centimes TTC, sous le seuil de franco. */
export const SHIPPING_FLAT_RATE = 1490;

export const VAT_RATE = 0.2;
