import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/visuals";
import { Breadcrumbs, Eyebrow, JsonLd, StockPill } from "@/components/ui";
import { TruckIcon, LockIcon, HeadsetIcon } from "@/components/icons";
import {
  getCategory,
  getProduct,
  getProductsByCategory,
  shopProducts,
} from "@/lib/data/shop";
import { getPrinter } from "@/lib/data/printers";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return shopProducts.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/boutique/${product.category}/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `${siteConfig.url}/boutique/${product.category}/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;
  const product = getProduct(slug);

  // L'URL doit refléter la catégorie réelle du produit, sinon 404 : cela évite
  // de multiplier les URLs dupliquées pour une même fiche.
  if (!product || product.category !== categorySlug) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    category: category?.name,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/boutique/${product.category}/${product.slug}`,
      priceCurrency: "EUR",
      price: (product.price / 100).toFixed(2),
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: siteConfig.legalName },
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="container-page py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { href: "/boutique", label: "Boutique" },
            { href: `/boutique/${product.category}`, label: category?.name ?? "" },
            { label: product.name },
          ]}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-card border border-ink-200 bg-ink-100">
              <ProductVisual
                seed={product.slug}
                label={product.name}
                className="aspect-[4/3] w-full"
              />
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: TruckIcon, label: product.leadTime },
                { icon: LockIcon, label: "Paiement sécurisé" },
                { icon: HeadsetIcon, label: "Conseil technique" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-white px-4 py-3 text-xs font-medium text-ink-700"
                >
                  <item.icon className="size-4 shrink-0 text-uv-600" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>{category?.name}</Eyebrow>
              <StockPill stock={product.stock} />
            </div>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-600">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <AddToCart product={product} />
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-900">
                Compatibilité
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.compatibility.map((item) => {
                  const printer = getPrinter(
                    item.toLowerCase().replace(/\s+/g, "-").replace("'", ""),
                  );
                  const target = printer ? `/imprimantes/${printer.slug}` : null;
                  return (
                    <li key={item}>
                      {target ? (
                        <Link
                          href={target}
                          className="inline-block rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 transition hover:border-uv-400 hover:text-uv-700"
                        >
                          {item}
                        </Link>
                      ) : (
                        <span className="inline-block rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700">
                          {item}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink-200 pt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
              Description
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-700">
              {product.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
              Caractéristiques
            </h2>
            <dl className="mt-5 divide-y divide-ink-100 rounded-card border border-ink-200 bg-white px-5 text-sm">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex gap-4 py-3.5">
                  <dt className="w-2/5 shrink-0 text-ink-500">{spec.label}</dt>
                  <dd className="font-medium text-ink-900">{spec.value}</dd>
                </div>
              ))}
              <div className="flex gap-4 py-3.5">
                <dt className="w-2/5 shrink-0 text-ink-500">Référence</dt>
                <dd className="font-medium text-ink-900">{product.sku}</dd>
              </div>
            </dl>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-ink-200 pt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
              Dans la même catégorie
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
