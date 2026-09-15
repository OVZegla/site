"use client";

import { useState } from "react";
import Link from "next/link";
import { CartIcon, CheckIcon } from "@/components/icons";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import type { ShopProduct } from "@/lib/types";

export function AddToCart({ product }: { product: ShopProduct }) {
  const { add } = useCart();
  const variants = product.variants ?? [];
  const [variantId, setVariantId] = useState(variants[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const variant = variants.find((candidate) => candidate.id === variantId);
  const unitPrice = product.price + (variant?.priceDelta ?? 0);

  function handleAdd() {
    add(product.slug, variant?.id, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2600);
  }

  return (
    <div className="rounded-card border border-ink-200 bg-white p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-3xl font-semibold tracking-tight text-ink-900">
          {formatPrice(unitPrice)}
        </span>
        {product.compareAtPrice && (
          <span className="text-base text-ink-400 line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
        <span className="w-full text-sm text-ink-500">
          TTC — {product.unit} · Réf. {variant?.sku ?? product.sku}
        </span>
      </div>

      {variants.length > 0 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-ink-900">
            {product.category === "supports" ? "Format" : "Déclinaison"}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {variants.map((option) => {
              const selected = option.id === variantId;
              return (
                <label
                  key={option.id}
                  className={`cursor-pointer rounded-full border px-3.5 py-2 text-sm font-medium transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-uv-600 ${
                    selected
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-ink-200 bg-white text-ink-700 hover:border-ink-400"
                  }`}
                >
                  <input
                    type="radio"
                    name={`variant-${product.slug}`}
                    value={option.id}
                    checked={selected}
                    onChange={() => setVariantId(option.id)}
                    className="sr-only"
                  />
                  {option.label}
                  {option.priceDelta > 0 && (
                    <span className={selected ? "text-ink-300" : "text-ink-500"}>
                      {" "}
                      +{formatPrice(option.priceDelta)}
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-ink-200">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="size-11 rounded-l-full text-lg text-ink-700 transition hover:bg-ink-100 disabled:opacity-40"
            disabled={quantity <= 1}
          >
            −<span className="sr-only">Diminuer la quantité</span>
          </button>
          <input
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(event) =>
              setQuantity(
                Math.max(1, Math.min(99, Number(event.target.value) || 1)),
              )
            }
            aria-label="Quantité"
            className="w-12 border-x border-ink-200 bg-transparent py-2.5 text-center text-sm font-semibold text-ink-900 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(99, value + 1))}
            className="size-11 rounded-r-full text-lg text-ink-700 transition hover:bg-ink-100"
          >
            +<span className="sr-only">Augmenter la quantité</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-uv-600"
        >
          {added ? <CheckIcon className="size-5" /> : <CartIcon className="size-5" />}
          {added ? "Ajouté au panier" : "Ajouter au panier"}
        </button>
      </div>

      <p aria-live="polite" className="sr-only">
        {added ? `${product.name} ajouté au panier.` : ""}
      </p>

      {added && (
        <Link
          href="/panier"
          className="mt-3 block rounded-full border border-ink-200 px-6 py-3 text-center text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
        >
          Voir le panier et commander
        </Link>
      )}

      <dl className="mt-6 space-y-2 border-t border-ink-100 pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-500">Disponibilité</dt>
          <dd className="font-medium text-ink-900">
            {product.stock > 0 ? `${product.stock} en stock` : "Sur commande"}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-500">Expédition</dt>
          <dd className="font-medium text-ink-900">{product.leadTime}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-500">Livraison offerte</dt>
          <dd className="font-medium text-ink-900">dès 300 € TTC</dd>
        </div>
      </dl>
    </div>
  );
}
