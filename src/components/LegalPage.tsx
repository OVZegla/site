import { Breadcrumbs } from "@/components/ui";

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export function LegalPage({
  title,
  intro,
  updatedAt,
  sections,
}: {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <div className="container-page py-12 lg:py-16">
      <Breadcrumbs items={[{ label: title }]} />

      <div className="mt-8 max-w-3xl">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink-900">
          {title}
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-600">{intro}</p>
        <p className="mt-3 text-sm text-ink-500">Dernière mise à jour : {updatedAt}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight text-ink-900">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 text-base leading-relaxed text-ink-700"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-base leading-relaxed text-ink-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-uv-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-card border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <strong className="font-semibold">Contenu à valider.</strong> Ce texte est une
          trame de travail : faites-la relire et compléter par votre conseil juridique
          avant la mise en ligne, en particulier les mentions d&apos;immatriculation, les
          conditions de rétractation et la politique de traitement des données.
        </p>
      </div>
    </div>
  );
}
