import { FREE_SHIPPING_THRESHOLD, SHIPPING_FLAT_RATE, VAT_RATE } from "@/lib/site";
import { getProduct } from "@/lib/data/shop";
import type { CartLine, ResolvedCartLine } from "@/lib/types";

export function lineKey(slug: string, variantId?: string): string {
  return variantId ? `${slug}::${variantId}` : slug;
}

/**
 * Résout des lignes de panier (slug + variante + quantité) contre le catalogue.
 *
 * Les prix ne viennent JAMAIS du client : le panier ne stocke que des
 * identifiants, et le montant est recalculé ici, aussi bien pour l'affichage
 * que pour la création de la session Stripe.
 */
export function resolveCart(lines: CartLine[]): ResolvedCartLine[] {
  const resolved: ResolvedCartLine[] = [];

  for (const line of lines) {
    const product = getProduct(line.slug);
    if (!product) continue;

    const variant = line.variantId
      ? product.variants?.find((candidate) => candidate.id === line.variantId)
      : undefined;

    // Une variante demandée mais introuvable signifie un panier périmé.
    if (line.variantId && !variant) continue;
    // Un produit à variantes exige un choix explicite.
    if (product.variants?.length && !variant) continue;

    const quantity = Math.max(1, Math.min(99, Math.floor(line.quantity)));
    const unitPrice = product.price + (variant?.priceDelta ?? 0);

    resolved.push({
      key: lineKey(product.slug, variant?.id),
      product,
      variant,
      quantity,
      unitPrice,
      lineTotal: unitPrice * quantity,
    });
  }

  return resolved;
}

export interface CartTotals {
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  vat: number;
  remainingForFreeShipping: number;
}

export function computeTotals(lines: ResolvedCartLine[]): CartTotals {
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_RATE;
  const total = subtotal + shipping;

  return {
    itemCount,
    subtotal,
    shipping,
    total,
    vat: Math.round(total - total / (1 + VAT_RATE)),
    remainingForFreeShipping: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal),
  };
}
