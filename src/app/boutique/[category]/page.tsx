import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs, Eyebrow, JsonLd } from "@/components/ui";
import { categoryIcons } from "@/components/icons";
import { getCategory, getProductsByCategory, shopCategories } from "@/lib/data/shop";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return shopCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} — ${category.tagline}`,
    description: category.description,
    alternates: { canonical: `/boutique/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const Icon = categoryIcons[category.icon];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteConfig.url}/boutique/${category.slug}/${product.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs
            items={[{ href: "/boutique", label: "Boutique" }, { label: category.name }]}
          />

          <div className="mt-8 flex flex-wrap items-start gap-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-uv-50 text-uv-600">
              <Icon className="size-7" />
            </span>
            <div className="max-w-2xl">
              <Eyebrow>{category.tagline}</Eyebrow>
              <h1 className="mt-2.5 text-balance text-4xl font-semibold tracking-tight text-ink-900">
                {category.name}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-600">
                {category.description}
              </p>
            </div>
          </div>

          <nav aria-label="Catégories de la boutique" className="mt-9">
            <ul className="flex flex-wrap gap-2">
              {shopCategories.map((item) => {
                const active = item.slug === category.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/boutique/${item.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition ${
                        active
                          ? "bg-ink-900 text-white"
                          : "border border-ink-200 bg-white text-ink-700 hover:border-ink-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      <section className="container-page py-14 lg:py-16">
        <p className="text-sm text-ink-500">
          {products.length} référence{products.length > 1 ? "s" : ""}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
