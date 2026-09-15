import type { MetadataRoute } from "next";
import { printers } from "@/lib/data/printers";
import { shopCategories, shopProducts } from "@/lib/data/shop";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: "/", priority: 1, changeFrequency: "weekly" },
    { url: "/imprimantes", priority: 0.9, changeFrequency: "monthly" },
    { url: "/boutique", priority: 0.9, changeFrequency: "weekly" },
    { url: "/devis", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services", priority: 0.7, changeFrequency: "monthly" },
    { url: "/a-propos", priority: 0.5, changeFrequency: "yearly" },
    { url: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { url: "/livraison", priority: 0.4, changeFrequency: "yearly" },
    { url: "/cgv", priority: 0.3, changeFrequency: "yearly" },
    { url: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    ...route,
    url: `${siteConfig.url}${route.url}`,
    lastModified: now,
  }));

  const printerRoutes: MetadataRoute.Sitemap = printers.map((printer) => ({
    url: `${siteConfig.url}/imprimantes/${printer.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = shopCategories.map((category) => ({
    url: `${siteConfig.url}/boutique/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = shopProducts.map((product) => ({
    url: `${siteConfig.url}/boutique/${product.category}/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...printerRoutes, ...categoryRoutes, ...productRoutes];
}
