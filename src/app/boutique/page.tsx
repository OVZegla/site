import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs, Eyebrow, JsonLd } from "@/components/ui";
import { ArrowRightIcon, LockIcon, TruckIcon, categoryIcons } from "@/components/icons";
import { getProductsByCategory, shopCategories, shopProducts } from "@/lib/data/shop";
import { FREE_SHIPPING_THRESHOLD, siteConfig } from "@/lib/site";
import { formatPriceShort } from "@/lib/format";

export const metadata: Metadata = {
  title: "Boutique — encres UV, pièces détachées et supports d'impression",
  description:
    "Commandez en ligne vos encres UV, pièces détachées et supports d'impression (Dibond, bois, plexiglas, PVC). Stock permanent, expédition sous 24 à 48 h, paiement sécurisé.",
  alternates: { canonical: "/boutique" },
};

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Boutique SYMP'S",
    url: `${siteConfig.url}/boutique`,
    numberOfItems: shopProducts.length,
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: "Boutique" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Achat en ligne</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Encres, pièces détachées et supports
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-600">
              Tout ce qui fait tourner votre machine au quotidien, en stock et expédié
              sous 24 à 48 h. Paiement sécurisé, facture professionnelle automatique.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-600">
            <li className="flex items-center gap-2">
              <TruckIcon className="size-4.5 text-brand-600" />
              Livraison offerte dès {formatPriceShort(FREE_SHIPPING_THRESHOLD)} TTC
            </li>
            <li className="flex items-center gap-2">
              <LockIcon className="size-4.5 text-brand-600" />
              Paiement sécurisé par Stripe
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightIcon className="size-4.5 text-brand-600" />
              Retour sous 14 jours
            </li>
          </ul>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {shopCategories.map((category) => {
            const Icon = categoryIcons[category.icon];
            const count = getProductsByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/boutique/${category.slug}`}
                className="group rounded-none border border-ink-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <span className="grid size-11 place-items-center rounded-none bg-brand-50 text-brand-600">
                  <Icon className="size-5.5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-ink-900">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                  {count} référence{count > 1 ? "s" : ""}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {shopCategories.map((category) => {
        const products = getProductsByCategory(category.slug);
        return (
          <section key={category.slug} className="container-page pb-16 lg:pb-20">
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-ink-200 pt-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm text-ink-600">{category.tagline}</p>
              </div>
              <Link
                href={`/boutique/${category.slug}`}
                className="text-sm font-semibold text-ink-900 transition hover:text-brand-600"
              >
                Voir la catégorie →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="container-page pb-20">
        <div className="rounded-none border border-ink-200 bg-white p-8 text-center lg:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Vous cherchez une machine, pas un consommable ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-600">
            Les imprimantes murales et sol ne sont pas vendues en ligne : elles sont
            configurées selon votre activité et proposées sur devis personnalisé.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/imprimantes"
              className="rounded-none border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
            >
              Voir la gamme
            </Link>
            <Link
              href="/devis"
              className="rounded-none bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
