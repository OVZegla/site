import Stripe from "stripe";

let client: Stripe | null = null;

/**
 * Renvoie le client Stripe, ou `null` si la clé n'est pas configurée.
 *
 * Le site doit rester déployable et navigable sans compte Stripe : dans ce cas
 * le tunnel d'achat affiche un message explicite plutôt que de planter.
 */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!client) {
    client = new Stripe(key, { apiVersion: "2025-08-27.basil" });
  }
  return client;
}
