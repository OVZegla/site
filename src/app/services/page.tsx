import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Button, Eyebrow, SectionHeading } from "@/components/ui";
import {
  FactoryIcon,
  HeadsetIcon,
  ShieldIcon,
  TruckIcon,
  WrenchIcon,
  FileTextIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services, maintenance et réparation toutes marques",
  description:
    "Formation, maintenance préventive, réparation d'imprimantes murales et hybrides toutes marques, support technique par visio et pièces détachées en stock permanent.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: FactoryIcon,
    title: "Formation et prise en main",
    description:
      "Une à deux journées dans nos locaux ou chez vous, selon la machine. Vous repartez avec vos premiers tirages réussis, pas avec un manuel.",
    points: [
      "Réglages colorimétriques par type de support",
      "Préparation de fichiers et gestion du blanc",
      "Entretien quotidien et gestes qui sauvent la tête",
    ],
  },
  {
    icon: WrenchIcon,
    title: "Réparation toutes marques",
    description:
      "Nous réparons les imprimantes murales et hybrides de toutes marques, après une évaluation préalable par téléphone ou visio.",
    points: [
      "Diagnostic chiffré avant toute intervention",
      "Atelier ou déplacement sur site",
      "Prêt de machine possible selon disponibilité",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Contrat de maintenance",
    description:
      "Une visite préventive annuelle, le remplacement des pièces d'usure et une priorité d'intervention en cas de panne.",
    points: [
      "Visite préventive annuelle incluse",
      "Priorité d'intervention sous 48 h",
      "Tarif pièces préférentiel",
    ],
  },
  {
    icon: HeadsetIcon,
    title: "Support technique",
    description:
      "Un technicien au bout du fil, pas un centre d'appel. La plupart des incidents se résolvent en visio, dans l'heure.",
    points: [
      "Assistance téléphonique et visio",
      "Procédures vidéo pour les opérations courantes",
      "Accompagnement au remplacement de pièces",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Accompagnement</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Une machine qui tourne, toute l&apos;année
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-600">
              Vendre une imprimante murale, c&apos;est facile. La maintenir en production
              l&apos;est moins. C&apos;est là que se joue l&apos;essentiel de notre
              métier : formation, stock de pièces, diagnostic rapide et réparation.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-none border border-ink-200 bg-white p-7 lg:p-8"
            >
              <span className="grid size-12 place-items-center rounded-none bg-brand-50 text-brand-600">
                <service.icon className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-ink-900">
                {service.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-700">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-none bg-brand-500"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-200 bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pièces et consommables"
            title="Le stock, c'est le vrai service après-vente"
            description="Une machine immobilisée trois semaines faute d'une courroie à 89 €, c'est un mois de chiffre d'affaires perdu. Nous gardons en stock permanent les pièces d'usure de toute la gamme."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/boutique/pieces-detachees">
              <WrenchIcon className="size-4.5" />
              Voir les pièces détachées
            </Button>
            <Button href="/boutique/encres" variant="secondary">
              <TruckIcon className="size-4.5" />
              Commander des encres
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="rounded-none bg-ink-950 px-8 py-12 text-white lg:px-12 lg:py-16">
          <div className="max-w-2xl">
            <FileTextIcon className="size-7 text-brand-400" />
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold text-white">
              Une panne, un doute, un projet ?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-300">
              Décrivez-nous la situation : nous vous répondons avec un diagnostic ou une
              proposition chiffrée, sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="light" size="lg">
                Nous écrire
              </Button>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center rounded-none border border-white/20 px-6 py-3.5 text-base font-semibold transition hover:bg-white/10"
              >
                {siteConfig.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-ink-400">
              Vous cherchez plutôt une machine ?{" "}
              <Link href="/devis" className="font-semibold text-white hover:text-brand-400">
                Demandez un devis
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
