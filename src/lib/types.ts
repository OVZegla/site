/**
 * Le site expose deux modes de vente distincts et volontairement étanches :
 *
 * - `quote` : les imprimantes murales et sol. Aucun achat en ligne possible,
 *   le parcours se termine sur une demande de devis personnalisée.
 * - `buy`   : les consommables (encres), les pièces détachées et les supports
 *   d'impression. Achat direct via panier + Stripe Checkout.
 *
 * Toute la logique de panier s'appuie sur ce discriminant : un article dont le
 * mode est `quote` ne peut pas entrer dans le panier (cf. `src/lib/cart.tsx`).
 */
export type SaleMode = "quote" | "buy";

export type ShopCategorySlug = "encres" | "pieces-detachees" | "supports";

export interface Spec {
  label: string;
  value: string;
}

export interface Printer {
  mode: "quote";
  slug: string;
  name: string;
  range: string;
  tagline: string;
  intro: string;
  description: string[];
  highlights: string[];
  specs: Spec[];
  useCases: string[];
  accent: string;
  badge?: string;
  featured?: boolean;
}

export interface ProductVariant {
  id: string;
  label: string;
  /** Surcoût en centimes appliqué au prix de base. */
  priceDelta: number;
  sku: string;
}

export interface ShopProduct {
  mode: "buy";
  slug: string;
  name: string;
  category: ShopCategorySlug;
  sku: string;
  /** Prix unitaire TTC en centimes. */
  price: number;
  /** Ancien prix TTC en centimes, pour afficher une remise. */
  compareAtPrice?: number;
  unit: string;
  shortDescription: string;
  description: string[];
  specs: Spec[];
  compatibility: string[];
  variants?: ProductVariant[];
  stock: number;
  leadTime: string;
  featured?: boolean;
}

export interface CartLine {
  slug: string;
  variantId?: string;
  quantity: number;
}

export interface ResolvedCartLine {
  key: string;
  product: ShopProduct;
  variant?: ProductVariant;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}
