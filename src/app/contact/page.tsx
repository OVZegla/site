import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Eyebrow, JsonLd } from "@/components/ui";
import { CartIcon, FileTextIcon, HeadsetIcon, WrenchIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Joignez l'équipe SYMP'S : conseil machine, support technique, commande de pièces détachées ou réparation toutes marques.",
  alternates: { canonical: "/contact" },
};

const routes = [
  {
    icon: FileTextIcon,
    title: "Vous cherchez une machine",
    description:
      "Le formulaire de devis nous donne tout ce qu'il faut pour vous répondre précisément dès le premier échange.",
    href: "/devis",
    cta: "Demander un devis",
  },
  {
    icon: CartIcon,
    title: "Vous avez besoin de consommables",
    description:
      "Encres, pièces d'usure et supports se commandent directement en ligne, expédition sous 24 à 48 h.",
    href: "/boutique",
    cta: "Aller à la boutique",
  },
  {
    icon: WrenchIcon,
    title: "Votre machine a un problème",
    description:
      "Appelez-nous : la plupart des incidents se diagnostiquent en visio dans l'heure, toutes marques confondues.",
    href: "/services",
    cta: "Voir nos services",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    url: `${siteConfig.url}/contact`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Nous joindre</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Parlons de votre besoin
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-600">
              Un technicien répond directement, du lundi au vendredi de 9 h à 18 h. Pas de
              serveur vocal, pas de ticket qui attend trois jours.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <div className="rounded-none bg-ink-950 p-7 text-white">
              <HeadsetIcon className="size-7 text-brand-400" />
              <h2 className="mt-5 font-display text-xl font-semibold text-white">Coordonnées</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-ink-400">Téléphone</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="text-lg font-semibold transition hover:text-brand-400"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-400">E-mail</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium transition hover:text-brand-400"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-400">Atelier et showroom</dt>
                  <dd className="mt-1 not-italic">
                    <address className="not-italic leading-relaxed">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                      <br />
                      {siteConfig.address.country}
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-400">Horaires</dt>
                  <dd className="mt-1">{siteConfig.hours}</dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-ink-400">
                Visites du showroom sur rendez-vous, pour que la machine qui vous
                intéresse soit installée et prête à imprimer vos visuels.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink-900">
              Le chemin le plus rapide vers une réponse
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Selon votre besoin, un canal est plus efficace qu&apos;un autre.
            </p>

            <div className="mt-8 space-y-4">
              {routes.map((route) => (
                <article
                  key={route.title}
                  className="flex flex-wrap items-start gap-5 rounded-none border border-ink-200 bg-white p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-none bg-brand-50 text-brand-600">
                    <route.icon className="size-5.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-ink-900">
                      {route.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {route.description}
                    </p>
                  </div>
                  <Link
                    href={route.href}
                    className="rounded-none border border-ink-300 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
                  >
                    {route.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
