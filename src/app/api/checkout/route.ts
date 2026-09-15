import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { computeTotals, resolveCart } from "@/lib/pricing";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FLAT_RATE, siteConfig } from "@/lib/site";
import type { CartLine } from "@/lib/types";

export const runtime = "nodejs";

function parseLines(payload: unknown): CartLine[] {
  if (typeof payload !== "object" || payload === null) return [];
  const { lines } = payload as Record<string, unknown>;
  if (!Array.isArray(lines)) return [];

  return lines.flatMap((entry): CartLine[] => {
    if (typeof entry !== "object" || entry === null) return [];
    const { slug, variantId, quantity } = entry as Record<string, unknown>;
    if (typeof slug !== "string") return [];
    return [
      {
        slug,
        variantId: typeof variantId === "string" ? variantId : undefined,
        quantity: typeof quantity === "number" ? quantity : 1,
      },
    ];
  });
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const lines = parseLines(payload);
  if (lines.length === 0) {
    return NextResponse.json({ error: "Votre panier est vide." }, { status: 400 });
  }

  // Le client n'envoie que des identifiants : les prix sont systématiquement
  // recalculés ici depuis le catalogue, jamais lus depuis la requête.
  const resolved = resolveCart(lines);
  if (resolved.length === 0) {
    return NextResponse.json(
      { error: "Aucun article de votre panier n'est disponible à la vente." },
      { status: 400 },
    );
  }

  const totals = computeTotals(resolved);
  const stripe = getStripe();

  if (!stripe) {
    return NextResponse.json(
      {
        error:
          "Le paiement en ligne n'est pas encore activé. Renseignez STRIPE_SECRET_KEY pour l'ouvrir, ou contactez-nous pour finaliser la commande.",
        code: "stripe_not_configured",
      },
      { status: 503 },
    );
  }

  const origin = request.headers.get("origin") ?? siteConfig.url;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "fr",
      currency: "eur",
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["FR", "BE", "LU", "CH", "DE", "ES", "IT"] },
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      line_items: resolved.map((line) => ({
        quantity: line.quantity,
        price_data: {
          currency: "eur",
          unit_amount: line.unitPrice,
          product_data: {
            name: line.variant
              ? `${line.product.name} — ${line.variant.label}`
              : line.product.name,
            description: line.product.shortDescription.slice(0, 250),
            metadata: {
              sku: line.variant?.sku ?? line.product.sku,
              slug: line.product.slug,
            },
          },
        },
      })),
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name:
              totals.shipping === 0
                ? `Livraison offerte (dès ${FREE_SHIPPING_THRESHOLD / 100} € TTC)`
                : "Livraison standard 48-72 h",
            fixed_amount: { amount: totals.shipping, currency: "eur" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 2 },
              maximum: { unit: "business_day", value: 4 },
            },
          },
        },
      ],
      success_url: `${origin}/commande/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/panier`,
      metadata: {
        subtotal: String(totals.subtotal),
        shipping: String(totals.shipping),
        flat_rate: String(SHIPPING_FLAT_RATE),
      },
    });

    if (!session.url) {
      throw new Error("Stripe n'a pas renvoyé d'URL de paiement.");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] création de session Stripe échouée", error);
    return NextResponse.json(
      { error: "Le paiement est temporairement indisponible. Réessayez dans un instant." },
      { status: 502 },
    );
  }
}
