"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductVisual } from "@/components/visuals";
import { CartIcon, LockIcon, TrashIcon, TruckIcon } from "@/components/icons";
import { useCart } from "@/lib/cart";
import { formatPrice, formatPriceShort } from "@/lib/format";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/site";

export function CartView() {
  const { lines, totals, ready, setQuantity, remove } = useCart();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // On n'envoie que des identifiants : le serveur recalcule les prix.
          lines: lines.map((line) => ({
            slug: line.product.slug,
            variantId: line.variant?.id,
            quantity: line.quantity,
          })),
        }),
      });

      const payload: { url?: string; error?: string } = await response.json();

      if (!response.ok || !payload.url) {
        setError(payload.error ?? "Le paiement n'a pas pu démarrer.");
        return;
      }

      window.location.href = payload.url;
    } catch {
      setError("Connexion interrompue. Vérifiez votre réseau et réessayez.");
    } finally {
      setPending(false);
    }
  }

  if (!ready) {
    return (
      <p className="mt-10 text-sm text-ink-500" role="status">
        Chargement du panier…
      </p>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mt-10 rounded-card border border-ink-200 bg-white p-10 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-ink-100 text-ink-500">
          <CartIcon className="size-7" />
        </span>
        <h2 className="mt-5 text-xl font-semibold text-ink-900">
          Votre panier est vide
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
          Les encres, pièces détachées et supports s&apos;achètent directement en ligne.
          Les imprimantes, elles, font l&apos;objet d&apos;un devis personnalisé.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/boutique"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-uv-600"
          >
            Voir la boutique
          </Link>
          <Link
            href="/devis"
            className="rounded-full border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
          >
            Demander un devis machine
          </Link>
        </div>
      </div>
    );
  }

  const freeShippingProgress = Math.min(
    100,
    Math.round((totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100),
  );

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
      <div>
        <ul className="divide-y divide-ink-200 rounded-card border border-ink-200 bg-white">
          {lines.map((line) => (
            <li key={line.key} className="flex gap-4 p-4 sm:gap-5 sm:p-5">
              <Link
                href={`/boutique/${line.product.category}/${line.product.slug}`}
                className="size-20 shrink-0 overflow-hidden rounded-xl bg-ink-100 sm:size-24"
              >
                <ProductVisual
                  seed={line.product.slug}
                  label={line.product.name}
                  className="size-full"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-ink-900 sm:text-base">
                      <Link
                        href={`/boutique/${line.product.category}/${line.product.slug}`}
                        className="hover:text-uv-700"
                      >
                        {line.product.name}
                      </Link>
                    </h2>
                    {line.variant && (
                      <p className="mt-0.5 text-sm text-ink-600">{line.variant.label}</p>
                    )}
                    <p className="mt-0.5 text-xs text-ink-500">
                      Réf. {line.variant?.sku ?? line.product.sku}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(line.key)}
                    className="shrink-0 rounded-lg p-2 text-ink-400 transition hover:bg-ink-100 hover:text-ink-900"
                  >
                    <TrashIcon className="size-4.5" />
                    <span className="sr-only">Retirer {line.product.name} du panier</span>
                  </button>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                  <div className="flex items-center rounded-full border border-ink-200">
                    <button
                      type="button"
                      onClick={() => setQuantity(line.key, line.quantity - 1)}
                      className="size-9 rounded-l-full text-ink-700 transition hover:bg-ink-100"
                    >
                      −<span className="sr-only">Diminuer la quantité</span>
                    </button>
                    <span className="w-9 text-center text-sm font-semibold text-ink-900">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(line.key, line.quantity + 1)}
                      className="size-9 rounded-r-full text-ink-700 transition hover:bg-ink-100"
                    >
                      +<span className="sr-only">Augmenter la quantité</span>
                    </button>
                  </div>
                  <p className="text-sm text-ink-500">
                    <span className="font-semibold text-ink-900">
                      {formatPrice(line.lineTotal)}
                    </span>{" "}
                    <span className="whitespace-nowrap">
                      ({formatPrice(line.unitPrice)} l&apos;unité)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/boutique"
          className="mt-6 inline-block text-sm font-semibold text-ink-900 transition hover:text-uv-600"
        >
          ← Continuer mes achats
        </Link>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-card border border-ink-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-ink-900">Récapitulatif</h2>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-600">
                Sous-total ({totals.itemCount} article{totals.itemCount > 1 ? "s" : ""})
              </dt>
              <dd className="font-medium text-ink-900">{formatPrice(totals.subtotal)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-600">Livraison</dt>
              <dd className="font-medium text-ink-900">
                {totals.shipping === 0 ? "Offerte" : formatPrice(totals.shipping)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-ink-200 pt-3 text-base">
              <dt className="font-semibold text-ink-900">Total TTC</dt>
              <dd className="font-semibold text-ink-900">{formatPrice(totals.total)}</dd>
            </div>
            <div className="flex justify-between gap-4 text-xs">
              <dt className="text-ink-500">dont TVA (20 %)</dt>
              <dd className="text-ink-500">{formatPrice(totals.vat)}</dd>
            </div>
          </dl>

          {totals.remainingForFreeShipping > 0 ? (
            <div className="mt-5 rounded-xl bg-uv-50 p-4">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-uv-700">
                <TruckIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  Plus que{" "}
                  <strong className="font-semibold">
                    {formatPrice(totals.remainingForFreeShipping)}
                  </strong>{" "}
                  pour la livraison offerte.
                </span>
              </p>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-uv-100"
                role="progressbar"
                aria-valuenow={freeShippingProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progression vers la livraison offerte"
              >
                <div
                  className="h-full rounded-full bg-uv-500 transition-all"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-xs font-medium text-emerald-700">
              <TruckIcon className="size-4 shrink-0" />
              Livraison offerte — commande supérieure à{" "}
              {formatPriceShort(FREE_SHIPPING_THRESHOLD)}.
            </p>
          )}

          <button
            type="button"
            onClick={handleCheckout}
            disabled={pending}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-uv-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LockIcon className="size-4.5" />
            {pending ? "Redirection…" : "Passer au paiement"}
          </button>

          {error && (
            <p
              role="alert"
              className="mt-4 rounded-xl bg-red-50 p-4 text-sm leading-relaxed text-red-700"
            >
              {error}
            </p>
          )}

          <p className="mt-4 text-center text-xs leading-relaxed text-ink-500">
            Paiement sécurisé par Stripe. Facture professionnelle envoyée automatiquement.
          </p>
        </div>
      </aside>
    </div>
  );
}
