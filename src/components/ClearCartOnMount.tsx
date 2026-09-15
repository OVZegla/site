"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart";

/**
 * Vide le panier une fois le paiement confirmé par Stripe.
 *
 * Le composant ne rend rien : il est monté sur la page de confirmation, qui
 * n'est atteinte qu'après la redirection `success_url` de Stripe.
 */
export function ClearCartOnMount() {
  const { clear, ready } = useCart();

  useEffect(() => {
    if (ready) clear();
  }, [ready, clear]);

  return null;
}
