import Link from "next/link";
import { Logo } from "@/components/Logo";
import { shopCategories } from "@/lib/data/shop";
import { printers } from "@/lib/data/printers";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-800 bg-ink-950 text-ink-300">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              Imprimantes murales et sol conçues et assemblées en France. Machines sur
              devis, consommables et pièces détachées en stock permanent.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="block text-white transition hover:text-brand-400"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block transition hover:text-white"
              >
                {siteConfig.email}
              </a>
              <p className="text-ink-400">{siteConfig.hours}</p>
            </div>
          </div>

          <nav aria-label="Imprimantes">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Imprimantes
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {printers.slice(0, 5).map((printer) => (
                <li key={printer.slug}>
                  <Link
                    href={`/imprimantes/${printer.slug}`}
                    className="transition hover:text-white"
                  >
                    {printer.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/devis" className="text-brand-200 transition hover:text-white">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Boutique">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Boutique
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {shopCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/boutique/${category.slug}`}
                    className="transition hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/panier" className="transition hover:text-white">
                  Mon panier
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="transition hover:text-white">
                  Livraison et retours
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Informations">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Informations
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services et SAV
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="transition hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="transition hover:text-white">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="transition hover:text-white">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-800 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} — {siteConfig.address.street},{" "}
            {siteConfig.address.postalCode} {siteConfig.address.city}
          </p>
          <p>Conçu et assemblé en France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
}
