import type { Metadata } from "next";
import { PrinterCard } from "@/components/PrinterCard";
import { Breadcrumbs, Button, Eyebrow, JsonLd } from "@/components/ui";
import { FileTextIcon } from "@/components/icons";
import { printers } from "@/lib/data/printers";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Imprimantes murales et sol — la gamme complète",
  description:
    "Six modèles d'imprimantes murales et sol conçus et assemblés en France : OPALINE, GRAPHITE Edition, WHITE, RUBY, T1000 et NOMAD. Configuration et tarif sur devis personnalisé.",
  alternates: { canonical: "/imprimantes" },
};

const comparisonRows = [
  { label: "Hauteur d'impression", key: "Hauteur d'impression" },
  { label: "Résolution", key: "Résolution" },
  { label: "Vitesse", key: "Vitesse" },
  { label: "Poids", key: "Poids" },
];

export default function PrintersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Gamme d'imprimantes murales SYMP'S",
    itemListElement: printers.map((printer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: printer.name,
      url: `${siteConfig.url}/imprimantes/${printer.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: "Imprimantes" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Machines sur devis</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Imprimantes murales et sol
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-600">
              Toutes nos machines impriment à l&apos;encre UV directement sur la surface,
              sans support intermédiaire. Elles partagent la même base technique et les
              mêmes consommables : vous pouvez faire évoluer votre parc sans changer de
              stock.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-none border border-brand-200/60 bg-brand-50 p-5">
            <FileTextIcon className="size-6 shrink-0 text-brand-600" />
            <p className="flex-1 text-sm leading-relaxed text-ink-700">
              <strong className="font-semibold text-ink-900">
                Pas d&apos;achat en ligne pour les machines.
              </strong>{" "}
              Chaque imprimante est configurée selon votre activité (hauteur, jeu
              d&apos;encres, formation, financement). Vous recevez une proposition
              chiffrée sous 24 à 48 h.
            </p>
            <Button href="/devis">Demander un devis</Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {printers.map((printer) => (
            <PrinterCard key={printer.slug} printer={printer} />
          ))}
        </div>
      </section>

      <section className="border-t border-ink-200 bg-white py-16 lg:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            Comparatif rapide
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ink-600">
            Les quatre critères qui orientent le plus souvent le choix. Pour le reste,
            appelez-nous : la bonne machine dépend surtout de vos chantiers.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-sm">
              <caption className="sr-only">
                Comparatif des caractéristiques principales des imprimantes SYMP&apos;S
              </caption>
              <thead>
                <tr className="border-b border-ink-200">
                  <th scope="col" className="py-3 pr-4 text-left font-semibold text-ink-900">
                    Modèle
                  </th>
                  {comparisonRows.map((row) => (
                    <th
                      key={row.key}
                      scope="col"
                      className="py-3 pr-4 text-left font-semibold text-ink-900"
                    >
                      {row.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {printers.map((printer) => (
                  <tr key={printer.slug} className="border-b border-ink-100">
                    <th scope="row" className="py-4 pr-4 text-left font-semibold text-ink-900">
                      {printer.name}
                      <span className="mt-0.5 block text-xs font-normal text-ink-500">
                        {printer.range}
                      </span>
                    </th>
                    {comparisonRows.map((row) => (
                      <td key={row.key} className="py-4 pr-4 text-ink-600">
                        {printer.specs.find((spec) => spec.label === row.key)?.value ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
