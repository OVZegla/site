import Link from "next/link";
import { ProductVisual } from "@/components/visuals";
import { Badge, StockPill } from "@/components/ui";
import { formatPrice } from "@/lib/format";
import { getCategory } from "@/lib/data/shop";
import type { ShopProduct } from "@/lib/types";

export function ProductCard({ product }: { product: ShopProduct }) {
  const category = getCategory(product.category);
  const hasVariants = Boolean(product.variants?.length);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-none border border-ink-200 bg-white transition hover:border-ink-300 hover:shadow-lg hover:shadow-ink-900/5">
      <Link
        href={`/boutique/${product.category}/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-ink-100"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProductVisual
          seed={product.slug}
          label={product.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.compareAtPrice && (
          <span className="absolute left-3 top-3 rounded-none bg-white px-2.5 py-1 text-xs font-bold text-brand-700">
            Promo
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-500">
            {category?.shortName}
          </span>
          <StockPill stock={product.stock} />
        </div>

        <h3 className="mt-2.5 text-base font-semibold leading-snug text-ink-900">
          <Link
            href={`/boutique/${product.category}/${product.slug}`}
            className="before:absolute before:inset-0"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-1">
          <span className="text-lg font-semibold text-ink-900">
            {hasVariants && (
              <span className="mr-1 text-sm font-normal text-ink-500">dès</span>
            )}
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-ink-500 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="w-full text-xs text-ink-500">
            TTC — {product.unit}
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Badge>{product.leadTime}</Badge>
        </div>
      </div>
    </article>
  );
}
