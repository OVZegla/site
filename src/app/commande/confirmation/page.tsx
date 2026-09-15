import type { Metadata } from "next";
import Link from "next/link";
import { ClearCartOnMount } from "@/components/ClearCartOnMount";
import { CheckIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commande confirmée",
  description: "Votre commande a bien été enregistrée.",
  robots: { index: false, follow: false },
};

export default function OrderConfirmationPage() {
  return (
    <div className="container-page py-20 lg:py-28">
      <ClearCartOnMount />
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-none bg-emerald-50 text-emerald-600">
          <CheckIcon className="size-8" />
        </span>
        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Merci, votre commande est enregistrée
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-600">
          Vous recevez d&apos;ici quelques minutes un e-mail de confirmation avec votre
          facture. Les articles en stock partent sous 24 à 48 h ouvrées, et le numéro de
          suivi vous est envoyé dès l&apos;expédition.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/boutique"
            className="rounded-none bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Retour à la boutique
          </Link>
          <Link
            href="/contact"
            className="rounded-none border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
          >
            Nous contacter
          </Link>
        </div>

        <p className="mt-8 text-sm text-ink-500">
          Une question sur votre commande ?{" "}
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="font-semibold text-ink-900 hover:text-brand-600"
          >
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
