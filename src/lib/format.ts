const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

/** Formate un montant exprimé en centimes. */
export function formatPrice(cents: number): string {
  return priceFormatter.format(cents / 100);
}

/** Variante compacte, sans centimes quand le montant est rond. */
export function formatPriceShort(cents: number): string {
  if (cents % 100 === 0) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(cents / 100);
  }
  return formatPrice(cents);
}
