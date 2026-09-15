export const siteConfig = {
  name: "SYMP'S",
  legalName: "SYMP'S",
  title: "SYMP'S — Imprimantes murales et sol, encres UV et pièces détachées",
  description:
    "Fabricant français d'imprimantes murales et sol. Machines sur devis personnalisé, encres UV, pièces détachées et supports d'impression en stock, expédiés sous 24 h.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.symps.fr",
  locale: "fr_FR",
  phone: "+33 1 23 45 67 89",
  phoneHref: "+33123456789",
  email: "contact@symps.fr",
  address: {
    street: "12 rue de l'Industrie",
    postalCode: "44000",
    city: "Nantes",
    country: "France",
  },
  hours: "Du lundi au vendredi, 9 h – 18 h",
  socials: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

/** Franco de port au-delà de ce montant (en centimes TTC). */
export const FREE_SHIPPING_THRESHOLD = 30000;

/** Forfait de livraison en centimes TTC, sous le seuil de franco. */
export const SHIPPING_FLAT_RATE = 1490;

export const VAT_RATE = 0.2;
