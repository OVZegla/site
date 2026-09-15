import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Ces pages n'ont aucune valeur en résultat de recherche et leur contenu
      // est propre à chaque visiteur.
      disallow: ["/panier", "/commande/", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
