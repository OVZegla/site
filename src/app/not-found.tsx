import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 lg:py-32">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-uv-600">
          Erreur 404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink-900">
          Cette page n&apos;existe pas
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-600">
          Le lien est peut-être obsolète, ou la référence a été retirée du catalogue.
          Reprenez par l&apos;une de ces pages.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-uv-600"
          >
            Accueil
          </Link>
          <Link
            href="/boutique"
            className="rounded-full border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
          >
            Boutique
          </Link>
          <Link
            href="/imprimantes"
            className="rounded-full border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
          >
            Imprimantes
          </Link>
        </div>
      </div>
    </div>
  );
}
