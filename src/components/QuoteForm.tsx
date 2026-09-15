"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckIcon } from "@/components/icons";
import { printers } from "@/lib/data/printers";

const projectTypes = [
  "Décoration intérieure",
  "Signalétique et retail",
  "Événementiel",
  "Bâtiment et architecture",
  "Création d'activité",
  "Autre",
];

const volumes = [
  "Moins de 50 m² par mois",
  "50 à 200 m² par mois",
  "200 à 500 m² par mois",
  "Plus de 500 m² par mois",
  "Je ne sais pas encore",
];

const timelines = [
  "Dès que possible",
  "Sous 1 à 3 mois",
  "Sous 3 à 6 mois",
  "Je me renseigne",
];

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition placeholder:text-ink-400 focus:border-uv-500 focus:outline-none focus:ring-2 focus:ring-uv-500/20";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("modele") ?? "";
  const initialPrinter = printers.some((printer) => printer.slug === preselected)
    ? preselected
    : "indecis";

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});
    setGlobalError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      printer: formData.get("printer"),
      projectType: formData.get("projectType"),
      volume: formData.get("volume"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("sent");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const data: { errors?: Record<string, string>; error?: string } =
        await response.json();
      setErrors(data.errors ?? {});
      setGlobalError(data.error ?? null);
      setStatus("idle");
    } catch {
      setGlobalError("Connexion interrompue. Réessayez ou appelez-nous directement.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-emerald-200 bg-emerald-50 p-8 text-center lg:p-10">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckIcon className="size-7" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-emerald-900">
          Demande bien reçue
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-800">
          Un technicien étudie votre projet et vous recontacte sous 24 à 48 h ouvrées avec
          une configuration chiffrée. Si votre demande est urgente, appelez-nous
          directement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-ink-200 bg-white p-6 lg:p-8">
      {/* Honeypot anti-spam, invisible pour les humains. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-wide text-ink-900">
          Vos coordonnées
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink-800">
              Nom et prénom <span className="text-uv-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClass}
              placeholder="Camille Dupont"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium text-ink-800">
              Société
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={fieldClass}
              placeholder="Atelier Déco SARL"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink-800">
              E-mail <span className="text-uv-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClass}
              placeholder="camille@exemple.fr"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-ink-800">
              Téléphone <span className="text-uv-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClass}
              placeholder="06 12 34 56 78"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-9">
        <legend className="text-sm font-semibold uppercase tracking-wide text-ink-900">
          Votre projet
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="printer" className="text-sm font-medium text-ink-800">
              Modèle envisagé
            </label>
            <select
              id="printer"
              name="printer"
              defaultValue={initialPrinter}
              className={fieldClass}
            >
              <option value="indecis">Je souhaite être conseillé</option>
              {printers.map((printer) => (
                <option key={printer.slug} value={printer.slug}>
                  {printer.name} — {printer.range}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="projectType" className="text-sm font-medium text-ink-800">
              Type de projet
            </label>
            <select id="projectType" name="projectType" className={fieldClass}>
              <option value="">Sélectionner…</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="volume" className="text-sm font-medium text-ink-800">
              Volume estimé
            </label>
            <select id="volume" name="volume" className={fieldClass}>
              <option value="">Sélectionner…</option>
              {volumes.map((volume) => (
                <option key={volume} value={volume}>
                  {volume}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="text-sm font-medium text-ink-800">
              Échéance
            </label>
            <select id="timeline" name="timeline" className={fieldClass}>
              <option value="">Sélectionner…</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="text-sm font-medium text-ink-800">
            Décrivez votre activité et vos surfaces
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={fieldClass}
            placeholder="Nous sommes une agence de décoration et nous intervenons surtout sur des murs de 2,50 m dans des commerces. Nous imprimons aujourd'hui en sous-traitance…"
          />
        </div>
      </fieldset>

      <div className="mt-7">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={Boolean(errors.consent)}
            className="mt-0.5 size-4.5 shrink-0 rounded border-ink-300 text-uv-600 focus:ring-uv-500"
          />
          <span>
            J&apos;accepte d&apos;être recontacté au sujet de ma demande. Mes données ne
            sont utilisées que pour l&apos;établissement du devis.{" "}
            <span className="text-uv-600">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-600">{errors.consent}</p>
        )}
      </div>

      {globalError && (
        <p
          role="alert"
          className="mt-5 rounded-xl bg-red-50 p-4 text-sm leading-relaxed text-red-700"
        >
          {globalError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 w-full rounded-full bg-ink-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-uv-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande de devis"}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-ink-500">
        Réponse sous 24 à 48 h ouvrées. Demande sans engagement.
      </p>
    </form>
  );
}
