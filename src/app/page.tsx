import Link from "next/link";
import { PrinterCard } from "@/components/PrinterCard";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { AccompanimentScroll } from "@/components/AccompanimentScroll";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, JsonLd } from "@/components/ui";
import { ArrowRightIcon, CartIcon, FileTextIcon, categoryIcons } from "@/components/icons";
import { featuredPrinters } from "@/lib/data/printers";
import { featuredProducts, shopCategories } from "@/lib/data/shop";
import { faq } from "@/lib/data/faq";
import { siteConfig } from "@/lib/site";

/** Les quatre parcours par besoin de la page d'accueil (section `slideshow`). */
const journeys = [
  {
    heading: "Je lance mon activité",
    subheading: "Modèles à découvrir : Opaline, Graphite et M1.",
    text: "Une première machine professionnelle, une configuration complète et un accompagnement pour commencer sur de bonnes bases.",
    cta: "Trouver ma première machine",
    href: "/imprimantes/m1",
  },
  {
    heading: "Viser le très haut de gamme",
    subheading: "Modèles à découvrir : Opaline, Graphite et Black 2.0.",
    text: "Des modèles pensés pour les professionnels qui placent la précision, l'ergonomie et la qualité de présentation au centre de leur activité.",
    cta: "Découvrir les modèles haut de gamme",
    href: "/imprimantes/opaline",
  },
  {
    heading: "Imprimer sur les murs et les sols",
    subheading: "Modèles recommandés : Black 2.0, Ruby.",
    text: "Développez des projets verticaux et horizontaux avec une machine convertible adaptée aux décors, aux parcours visuels et à la signalétique.",
    cta: "Découvrir l'impression mur et sol",
    href: "/imprimantes/ruby",
  },
  {
    heading: "Découvrir l'impression murale",
    subheading: "Modèles à découvrir : White et T1000.",
    text: "Des modèles d'entrée de gamme pour découvrir l'impression murale et réaliser de premières créations. Ces solutions sont destinées à la découverte et aux usages occasionnels.",
    cta: "Découvrir les modèles d'entrée de gamme",
    href: "/imprimantes/white",
  },
];

/** Section `multicolumn` de la page d'accueil. */
const pillars = [
  {
    title: "Des configurations professionnelles",
    text: "Les modèles présentés sont proposés par SYMP'S en configuration double Epson I1600 : une tête dédiée au blanc et une tête dédiée à la couleur. Cette architecture permet de préparer une sous-couche blanche sur les supports sombres ou colorés, de travailler les blancs de soutien et d'explorer des effets de matière.",
  },
  {
    title: "Une préparation suivie en France",
    text: "Nos équipes préparent les configurations, contrôlent les éléments essentiels et vous accompagnent depuis nos locaux de Ruitz. Vous disposez d'un interlocuteur pour comprendre la machine, organiser votre prise en main et préparer vos premières impressions.",
  },
  {
    title: "Une relation qui continue",
    text: "Formation, assistance technique, diagnostic, réparation, pièces et consommables : l'accompagnement ne s'arrête pas à la livraison. Lorsque votre activité évolue ou qu'un nouveau besoin apparaît, vous pouvez revenir vers nous.",
  },
];

/** Section `dual-scroll` : L'accompagnement SYMP'S. */
const accompaniment = [
  {
    title: "L'accompagnement SYMP'S",
    description:
      "Vous n'achetez pas seulement une imprimante. Vous intégrez un environnement conçu pour vous aider à la comprendre, à l'utiliser et à faire progresser votre activité.",
  },
  {
    title: "Formation à la machine",
    description:
      "Montage, positionnement, réglages, préparation du support, lancement d'une impression et entretien courant : la formation vous aide à acquérir les bases nécessaires pour travailler dans de bonnes conditions.",
  },
  {
    title: "Préparation des fichiers",
    description:
      "Nous vous accompagnons sur les dimensions, la résolution, le détourage, les zones de blanc, les fichiers TIFF et les étapes nécessaires avant impression.",
  },
  {
    title: "Support technique",
    description:
      "En cas de question ou de difficulté, notre équipe peut vous aider à observer les symptômes, vérifier les réglages et avancer méthodiquement dans le diagnostic.",
  },
  {
    title: "Développement de l'activité",
    description:
      "Nous pouvons également vous aider à clarifier vos offres, vos cibles, vos supports de communication et la manière de présenter vos réalisations.",
    cta: { label: "Découvrir l'accompagnement SYMP'S", href: "/services" },
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "fr-FR",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* --------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
        <div
          className="absolute -right-40 top-[-20%] size-[36rem] rounded-none bg-brand-600/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative flex min-h-[32rem] flex-col justify-end py-20 lg:min-h-[40rem] lg:py-28">
          <Reveal className="max-w-3xl">
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Imprimantes murales professionnelles, avec formation et
              accompagnement.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-200">
              Du premier projet au suivi technique, SYMP&apos;S vous accompagne dans le
              choix, la prise en main et l&apos;utilisation de votre imprimante murale.
              Découvrez des configurations professionnelles à double tête Epson I1600,
              pensées pour imprimer en couleur et en blanc sur une grande variété de
              supports.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/devis" variant="light" size="lg">
                <FileTextIcon className="size-5" />
                Demander un devis
              </Button>
              <Button
                href="/boutique"
                size="lg"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                <CartIcon className="size-5" />
                Boutique consommables
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------- Quelle imprimante pour vous */}
      <section className="container-page py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Quelle imprimante murale est faite pour vous ?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-700">
            Votre machine doit correspondre à votre activité, à vos déplacements, aux
            supports que vous souhaitez imprimer et aux projets que vous voulez
            développer. Explorez la gamme selon votre besoin. Si plusieurs modèles
            peuvent convenir, notre équipe vous aide à comparer leurs usages et leurs
            différences.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
          {journeys.map((journey, index) => (
            <Reveal as="li" key={journey.heading} delay={index * 80}>
              <Link
                href={journey.href}
                className="group flex h-full flex-col bg-white p-7 transition hover:bg-brand-50 lg:p-9"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {journey.subheading}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {journey.heading}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink-700">
                  {journey.text}
                </p>
                <span className="btn-type mt-auto flex items-center gap-2 pt-7 text-sm text-brand-600">
                  {journey.cta}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* --------------------------------------- Une machine ne suffit pas */}
      <section className="border-y border-ink-200 bg-ink-50 py-20 lg:py-24">
        <div className="container-page">
          <Reveal className="ml-auto max-w-3xl lg:text-right">
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
              Une machine ne suffit pas. Il faut aussi savoir sur qui compter.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-700">
              L&apos;achat d&apos;une imprimante murale engage votre activité. La qualité
              d&apos;impression compte, mais la préparation de la machine, la formation,
              la disponibilité des consommables et la capacité à obtenir de l&apos;aide
              comptent tout autant. SYMP&apos;S vous accompagne avant, pendant et après
              la livraison.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-ink-200 bg-ink-200 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80} className="h-full">
                <div className="h-full bg-white p-7 lg:p-8">
                  <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-ink-700">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Gamme machines */}
      <section className="container-page py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>La gamme</Eyebrow>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold sm:text-4xl">
              Sept modèles, de la découverte à la production
            </h2>
          </Reveal>
          <Link
            href="/imprimantes"
            className="btn-type text-sm text-brand-600 transition hover:text-brand-800"
          >
            Voir toute la gamme →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrinters.map((printer, index) => (
            <Reveal key={printer.slug} delay={index * 80} className="h-full">
              <PrinterCard printer={printer} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 border border-brand-200 bg-brand-50 p-6 lg:p-7">
          <div className="flex flex-wrap items-center gap-5">
            <FileTextIcon className="size-6 shrink-0 text-brand-600" />
            <p className="flex-1 text-pretty leading-relaxed text-ink-700">
              <strong className="font-semibold text-brand-600">
                Les machines ne sont pas vendues en ligne.
              </strong>{" "}
              Chaque configuration est établie selon votre activité, avec la formation et
              l&apos;accompagnement associés. Réponse chiffrée sous 24 à 48 h.
            </p>
            <Button href="/devis">Demander un devis</Button>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------- L'accompagnement SYMP'S */}
      <AccompanimentScroll panels={accompaniment} />

      {/* ----------------------------------------------- Des murs et la boutique */}
      <section className="container-page py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Des murs, mais pas seulement.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-700">
            Selon la nature du support et sa préparation, les imprimantes murales peuvent
            travailler sur de nombreux matériaux : mur peint, plâtre, béton, brique,
            pierre, bois, verre, métal, carrelage, Dibond, Plexiglas, PVC et autres
            supports rigides.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="font-display text-2xl font-semibold">
            Les consommables nécessaires à votre activité
          </h3>
          <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-ink-700">
            Encres, produits d&apos;entretien, pièces et accessoires : retrouvez les
            références nécessaires à l&apos;utilisation et au suivi de votre machine. Une
            partie des consommables est tenue en stock dans nos locaux de Ruitz afin de
            faciliter le réapprovisionnement de nos clients.
          </p>
          <ul className="mt-8 grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-3">
            {shopCategories.map((category) => {
              const Icon = categoryIcons[category.icon];
              return (
                <li key={category.slug}>
                  <Link
                    href={`/boutique/${category.slug}`}
                    className="group flex h-full flex-col bg-white p-6 transition hover:bg-brand-50"
                  >
                    <Icon className="size-6 text-brand-600" />
                    <span className="mt-4 font-display text-lg font-semibold text-brand-600">
                      {category.name}
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-ink-600">
                      {category.tagline}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <Reveal key={product.slug} delay={index * 70} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button href="/boutique" variant="secondary">
            Découvrir la boutique
            <ArrowRightIcon className="size-4" />
          </Button>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------- FAQ */}
      <section className="border-t border-ink-200 bg-ink-50 py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">FAQ</h2>
            <p className="mt-4 text-pretty leading-relaxed text-ink-700">
              Les questions qui reviennent le plus souvent avant un premier achat. Si la
              vôtre n&apos;y est pas, appelez-nous.
            </p>
            <Button href="/contact" variant="secondary" className="mt-7">
              Poser une question
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={faq} />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- Nos locaux */}
      <section className="bg-brand-600 text-white">
        <div className="container-page py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">Parlons de votre projet</Eyebrow>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Nos locaux à Ruitz
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">
                  Adresse
                </dt>
                <dd className="mt-1.5 text-lg">
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">
                  Horaires d&apos;ouverture
                </dt>
                <dd className="mt-1.5 text-lg">{siteConfig.hours}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/devis" variant="light" size="lg">
                Demander un devis
              </Button>
              <Button
                href="/contact"
                size="lg"
                className="border border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Nous contacter
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
