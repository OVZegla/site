import Link from "next/link";
import { PrinterVisual } from "@/components/visuals";
import { ArrowRightIcon, FileTextIcon } from "@/components/icons";
import type { Printer } from "@/lib/types";

export function PrinterCard({ printer }: { printer: Printer }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-ink-200 bg-white transition hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5">
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${printer.accent}`}
      >
        <PrinterVisual
          seed={printer.slug}
          label={printer.name}
          className="size-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {printer.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink-900">
            {printer.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
          {printer.range}
        </p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink-900">
          <Link
            href={`/imprimantes/${printer.slug}`}
            className="before:absolute before:inset-0"
          >
            {printer.name}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{printer.tagline}</p>

        <ul className="mt-5 space-y-2 text-sm text-ink-700">
          {printer.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-uv-500"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-ink-900">
          <FileTextIcon className="size-4 text-uv-600" />
          Sur devis personnalisé
          <ArrowRightIcon className="ml-auto size-4 text-ink-400 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
