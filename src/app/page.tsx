import Link from "next/link";
import { PrinterCard } from "@/components/PrinterCard";
import { ProductCard } from "@/components/ProductCard";
import { Button, Eyebrow, SectionHeading, JsonLd } from "@/components/ui";
import {
  ArrowRightIcon,
  CartIcon,
  FactoryIcon,
  FileTextIcon,
  HeadsetIcon,
  ShieldIcon,
  TruckIcon,
  categoryIcons,
} from "@/components/icons";
import { featuredPrinters } from "@/lib/data/printers";
import { featuredProducts, shopCategories } from "@/lib/data/shop";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: "2 800", unit: "DPI", label: "Résolution maximale" },
  { value: "10", unit: "ans", label: "Tenue des impressions" },
  { value: "24", unit: "h", label: "Expédition des pièces" },
  { value: "100", unit: "%", label: "Assemblé en France" },
];

const guarantees = [
  {
    icon: FactoryIcon,
    title: "Conçu et assemblé en France",
    description:
      "Chaque machine est montée et testée dans notre atelier avant livraison, avec son relevé de contrôle.",
  },
  {
    icon: TruckIcon,
    title: "Stock permanent",
    description:
      "Encres, pièces d'usure et supports expédiés sous 24 à 48 h. Une machine à l'arrêt coûte plus cher qu'un stock.",
  },
  {
    icon: HeadsetIcon,
    title: "Support technique direct",
    description:
      "Un technicien, pas un centre d'appel. Diagnostic par visio et intervention sur site si nécessaire.",
  },
  {
    icon: ShieldIcon,
    title: "Réparation toutes marques",
    description:
      "Nous réparons les imprimantes murales et hybrides de toutes marques, après évaluation préalable.",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "fr-FR",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />

      {/* ------------------------------------------------------------ Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div
          className="absolute -right-32 top-[-10%] size-[34rem] rounded-full bg-uv-600/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-ink-200">
              <span className="size-1.5 rounded-full bg-uv-400" aria-hidden="true" />
              Nouvelle gamme 2026 — OPALINE, GRAPHITE, NOMAD
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              L&apos;impression directe sur vos murs, vos sols et vos supports.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-300">
              Nos imprimantes à encre UV projettent votre visuel directement sur le
              béton, le plâtre, le bois, le carrelage ou le verre. Séchage instantané,
              jusqu&apos;à 2 800 DPI, sans collage ni support intermédiaire.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/devis" variant="light" size="lg">
                <FileTextIcon className="size-5" />
                Demander un devis machine
              </Button>
              <Button
                href="/boutique"
                size="lg"
                className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <CartIcon className="size-5" />
                Boutique consommables
              </Button>
            </div>

            <p className="mt-6 max-w-xl text-sm text-ink-400">
              Les machines sont configurées sur mesure et proposées sur devis. Les
              encres, pièces détachées et supports s&apos;achètent directement en ligne.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="text-3xl font-semibold tracking-tight lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="ml-1 text-lg text-uv-400">{stat.unit}</span>
                  <span className="mt-1.5 block text-sm text-ink-400">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --------------------------------------------- Les deux parcours */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeading
          eyebrow="Deux parcours, une seule maison"
          title="Les machines sur devis, les consommables en un clic"
          description="Une imprimante murale se configure : hauteur, jeu d'encres, formation, financement. C'est pourquoi elle passe par un devis. Tout ce qui la fait tourner au quotidien, en revanche, se commande en ligne."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-card border border-ink-200 bg-white p-8 lg:p-10">
            <span className="grid size-12 place-items-center rounded-xl bg-ink-900 text-white">
              <FileTextIcon className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink-900">
              Imprimantes — sur devis
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Nous étudions votre activité, vos surfaces et votre volume avant de
              recommander une configuration. Vous recevez une proposition chiffrée sous
              24 à 48 h, avec le plan de formation et les options de financement.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-700">
              {[
                "Configuration adaptée à votre activité",
                "Formation et prise en main incluses",
                "Financement en LOA ou crédit-bail",
                "Réponse chiffrée sous 24 à 48 h",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-uv-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/devis">Demander un devis</Button>
              <Button href="/imprimantes" variant="secondary">
                Voir la gamme
              </Button>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-card border border-ink-200 bg-white p-8 lg:p-10">
            <span className="grid size-12 place-items-center rounded-xl bg-uv-600 text-white">
              <CartIcon className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink-900">
              Consommables — achat en ligne
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Encres UV, pièces d&apos;usure et supports d&apos;impression : commande en
              ligne, paiement sécurisé et expédition sous 24 à 48 h. Livraison offerte
              dès 300 € TTC.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {shopCategories.map((category) => {
                const Icon = categoryIcons[category.icon];
                return (
                  <Link
                    key={category.slug}
                    href={`/boutique/${category.slug}`}
                    className="group rounded-xl border border-ink-200 p-4 transition hover:border-uv-400 hover:bg-uv-50"
                  >
                    <Icon className="size-5 text-uv-600" />
                    <span className="mt-3 block text-sm font-semibold text-ink-900">
                      {category.shortName}
                    </span>
                    <span className="mt-0.5 block text-xs text-ink-500">
                      {category.tagline}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8">
              <Button href="/boutique">
                Entrer dans la boutique
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* ------------------------------------------------------ Imprimantes */}
      <section className="border-y border-ink-200 bg-white py-20 lg:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="La gamme"
              title="Une machine pour chaque niveau d'activité"
              description="Du modèle de démarrage à l'unité grande hauteur, toutes nos imprimantes partagent la même base technique et les mêmes consommables."
            />
            <Link
              href="/imprimantes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition hover:text-uv-600"
            >
              Voir les 6 modèles
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrinters.map((printer) => (
              <PrinterCard key={printer.slug} printer={printer} />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Boutique */}
      <section className="container-page py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Boutique"
            title="Ce qui fait tourner votre machine"
            description="Les références les plus commandées par nos clients, disponibles immédiatement."
          />
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition hover:text-uv-600"
          >
            Tout le catalogue
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- Garanties */}
      <section className="border-t border-ink-200 bg-white py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pourquoi SYMP'S"
            title="Un partenaire, pas un fournisseur"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => (
              <div key={item.title}>
                <span className="grid size-11 place-items-center rounded-xl bg-uv-50 text-uv-600">
                  <item.icon className="size-5.5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section className="container-page py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-card bg-ink-950 px-8 py-14 text-white lg:px-14 lg:py-20">
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
          <div
            className="absolute -left-20 bottom-[-40%] size-[28rem] rounded-full bg-uv-600/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <Eyebrow>Parlons de votre projet</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Recevez une configuration chiffrée sous 48 h
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-300">
              Décrivez-nous votre activité et vos surfaces : nous vous répondons avec une
              recommandation de machine, le plan de formation et les options de
              financement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/devis" variant="light" size="lg">
                Demander un devis
              </Button>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
