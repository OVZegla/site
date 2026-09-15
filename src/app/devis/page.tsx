import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import { Breadcrumbs, Eyebrow } from "@/components/ui";
import { CheckIcon, HeadsetIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demander un devis pour une imprimante murale",
  description:
    "Recevez sous 24 à 48 h une configuration chiffrée d'imprimante murale ou sol adaptée à votre activité : machine, encres, formation et financement.",
  alternates: { canonical: "/devis" },
};

const steps = [
  {
    title: "Vous décrivez votre projet",
    description:
      "Activité, surfaces, volume mensuel, échéance. Cinq minutes suffisent, et rien n'est définitif.",
  },
  {
    title: "Un technicien vous rappelle",
    description:
      "Nous validons ensemble les contraintes réelles : hauteur sous plafond, accès, nature des supports.",
  },
  {
    title: "Vous recevez une proposition chiffrée",
    description:
      "Machine, jeu d'encres, formation, maintenance et options de financement, détaillés ligne par ligne.",
  },
];

const included = [
  "Étude de faisabilité de votre projet",
  "Recommandation de machine argumentée",
  "Plan de formation et prise en main",
  "Simulation de rentabilité sur 24 mois",
  "Options de financement (LOA, crédit-bail)",
  "Contrat de maintenance chiffré",
];

export default function QuotePage() {
  return (
    <>
      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: "Demande de devis" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Sans engagement</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Demander un devis
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-600">
              Nos imprimantes ne sont pas vendues sur catalogue : chaque configuration est
              construite à partir de votre activité réelle. Décrivez-nous votre projet,
              nous revenons vers vous sous 24 à 48 h ouvrées.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink-900">
              Comment ça se passe
            </h2>
            <ol className="mt-6 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-none bg-ink-900 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-xl font-semibold tracking-tight text-ink-900">
              Ce que contient le devis
            </h2>
            <ul className="mt-5 space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-none bg-ink-950 p-6 text-white">
              <HeadsetIcon className="size-6 text-brand-400" />
              <h2 className="mt-4 font-display text-lg font-semibold text-white">Vous préférez en parler ?</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Un technicien répond directement, du lundi au vendredi de 9 h à 18 h.
              </p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-4 inline-block text-lg font-semibold text-white transition hover:text-brand-400"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="rounded-none border border-ink-200 bg-white p-8 text-sm text-ink-500">
                Chargement du formulaire…
              </div>
            }
          >
            <QuoteForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
