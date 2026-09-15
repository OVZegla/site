import type { Metadata } from "next";
import { Breadcrumbs, Button, Eyebrow, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos — fabricant français d'imprimantes murales",
  description:
    "SYMP'S conçoit et assemble en France des imprimantes murales et sol à encre UV. Notre métier : rendre l'impression directe accessible aux professionnels de la décoration et de la signalétique.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Fabriquer en France",
    description:
      "Nos machines sont assemblées et testées dans notre atelier. Ce n'est pas un argument marketing : c'est ce qui nous permet d'avoir les pièces en stock et de réparer vite.",
  },
  {
    title: "Vendre ce qui convient",
    description:
      "Nous préférons vendre une WHITE qui tourne qu'une OPALINE qui dort. D'où le devis systématique : la bonne machine dépend de votre activité, pas de notre marge.",
  },
  {
    title: "Rester joignables",
    description:
      "Un numéro, des techniciens qui décrochent. La plupart des incidents se règlent en visio dans l'heure si on ne vous fait pas attendre trois jours.",
  },
];

const milestones = [
  { year: "2018", text: "Premiers prototypes d'impression verticale dans un atelier nantais." },
  { year: "2020", text: "Lancement de la WHITE, notre première machine de série." },
  { year: "2022", text: "Ouverture du service réparation toutes marques." },
  { year: "2024", text: "Gamme complète murale et sol, avec la RUBY hybride." },
  { year: "2026", text: "Lancement de l'OPALINE et de la NOMAD portable." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-200 bg-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: "À propos" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Qui nous sommes</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              L&apos;impression murale, sans intermédiaire
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-600">
              Nous concevons et assemblons en France des imprimantes qui projettent
              l&apos;encre UV directement sur la surface. Pas de vinyle, pas de collage,
              pas de support intermédiaire : le visuel est dans le mur.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-ink-700">
            <p>
              L&apos;impression murale directe a longtemps été réservée à quelques
              prestataires équipés de machines importées, chères à l&apos;achat et
              impossibles à réparer rapidement. Une panne, et c&apos;était trois semaines
              d&apos;attente pour une pièce venue de l&apos;autre bout du monde.
            </p>
            <p>
              Nous avons pris le problème par l&apos;autre bout : concevoir et assembler
              les machines ici, garder les pièces d&apos;usure en stock, et former
              réellement les utilisateurs. Une imprimante murale n&apos;a de valeur que si
              elle tourne.
            </p>
            <p>
              Aujourd&apos;hui, nos machines équipent des agences de décoration, des
              enseignes de retail, des prestataires événementiels et des artisans qui ont
              fait de l&apos;impression murale leur activité principale. Nous les
              accompagnons de la première démonstration jusqu&apos;au remplacement de la
              tête d&apos;impression, cinq ans plus tard.
            </p>
          </div>

          <div className="rounded-none border border-ink-200 bg-white p-7">
            <h2 className="text-lg font-semibold text-ink-900">Notre parcours</h2>
            <ol className="mt-6 space-y-5">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="flex gap-4">
                  <span className="w-12 shrink-0 text-sm font-bold text-brand-600">
                    {milestone.year}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">
                    {milestone.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-200 bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Nos principes" title="Trois règles qui ne bougent pas" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title}>
                <span className="text-sm font-bold text-brand-600">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="rounded-none border border-ink-200 bg-white p-8 text-center lg:p-12">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            Venez voir les machines tourner
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-600">
            Nous recevons sur rendez-vous à {siteConfig.address.city} pour des
            démonstrations sur vos propres visuels et vos propres supports.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Prendre rendez-vous</Button>
            <Button href="/imprimantes" variant="secondary">
              Découvrir la gamme
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
