import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrinterVisual } from "@/components/visuals";
import { PrinterCard } from "@/components/PrinterCard";
import { Breadcrumbs, Button, Eyebrow, JsonLd } from "@/components/ui";
import { CheckIcon, FileTextIcon, HeadsetIcon } from "@/components/icons";
import { getPrinter, printers } from "@/lib/data/printers";
import { shopProducts } from "@/lib/data/shop";
import { ProductCard } from "@/components/ProductCard";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return printers.map((printer) => ({ slug: printer.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const printer = getPrinter(slug);
  if (!printer) return {};

  return {
    title: `${printer.name} — ${printer.range}`,
    description: printer.intro,
    alternates: { canonical: `/imprimantes/${printer.slug}` },
    openGraph: {
      title: `${printer.name} — ${printer.range}`,
      description: printer.intro,
      url: `${siteConfig.url}/imprimantes/${printer.slug}`,
    },
  };
}

export default async function PrinterPage({ params }: PageProps) {
  const { slug } = await params;
  const printer = getPrinter(slug);
  if (!printer) notFound();

  const related = printers.filter((item) => item.slug !== printer.slug).slice(0, 3);
  const consumables = shopProducts
    .filter((product) => product.compatibility.includes(printer.name))
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: printer.name,
    description: printer.intro,
    category: printer.range,
    brand: { "@type": "Brand", name: siteConfig.name },
    url: `${siteConfig.url}/imprimantes/${printer.slug}`,
    // Volontairement sans `offers` : cette machine n'est pas vendue en ligne,
    // le parcours se termine sur une demande de devis.
    additionalProperty: printer.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className={`bg-gradient-to-br ${printer.accent} text-white`}>
        <div className="container-page py-10 lg:py-14">
          <div className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white/90">
            <Breadcrumbs
              items={[
                { href: "/imprimantes", label: "Imprimantes" },
                { label: printer.name },
              ]}
            />
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {printer.range}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {printer.name}
              </h1>
              <p className="mt-4 text-xl text-white/90">{printer.tagline}</p>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-white/80">
                {printer.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`/devis?modele=${printer.slug}`} variant="light" size="lg">
                  <FileTextIcon className="size-5" />
                  Demander un devis
                </Button>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <HeadsetIcon className="size-5" />
                  Parler à un technicien
                </a>
              </div>

              <p className="mt-5 text-sm text-white/70">
                Machine non vendue en ligne — configuration et tarif établis sur devis.
              </p>
            </div>

            <div className="rounded-card border border-white/15 bg-white/5 p-6">
              <PrinterVisual
                seed={printer.slug}
                label={printer.name}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Présentation</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900">
              Ce que fait la {printer.name}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700">
              {printer.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-semibold tracking-tight text-ink-900">
              Points forts
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {printer.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4 text-sm text-ink-700"
                >
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-uv-600" />
                  {highlight}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold tracking-tight text-ink-900">
              Usages typiques
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {printer.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-700"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-ink-900">
                Caractéristiques techniques
              </h2>
              <dl className="mt-5 divide-y divide-ink-100 text-sm">
                {printer.specs.map((spec) => (
                  <div key={spec.label} className="flex gap-4 py-3">
                    <dt className="w-2/5 shrink-0 text-ink-500">{spec.label}</dt>
                    <dd className="font-medium text-ink-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 rounded-card bg-ink-950 p-6 text-white">
              <h2 className="text-lg font-semibold">Combien ça coûte ?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Le prix dépend de la configuration : hauteur d&apos;impression, jeu
                d&apos;encres, options logicielles, formation et financement. Nous
                établissons une proposition chiffrée sous 24 à 48 h, sans engagement.
              </p>
              <Button
                href={`/devis?modele=${printer.slug}`}
                variant="light"
                className="mt-5 w-full"
              >
                Obtenir mon devis
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {consumables.length > 0 && (
        <section className="border-t border-ink-200 bg-white py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Boutique</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                  Consommables compatibles {printer.name}
                </h2>
              </div>
              <Link
                href="/boutique"
                className="text-sm font-semibold text-ink-900 transition hover:text-uv-600"
              >
                Tout le catalogue →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {consumables.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-page py-16 lg:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
          Autres modèles de la gamme
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <PrinterCard key={item.slug} printer={item} />
          ))}
        </div>
      </section>
    </>
  );
}
