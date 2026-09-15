import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FLAT_RATE } from "@/lib/site";
import { formatPrice, formatPriceShort } from "@/lib/format";

export const metadata: Metadata = {
  title: "Livraison et retours",
  description:
    "Délais d'expédition, frais de port et conditions de retour pour les encres, pièces détachées et supports d'impression.",
  alternates: { canonical: "/livraison" },
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Livraison et retours"
      intro="Tout ce qu'il faut savoir sur l'expédition de vos consommables et la marche à suivre en cas de retour."
      updatedAt="15 septembre 2026"
      sections={[
        {
          title: "Délais d'expédition",
          items: [
            "Encres et pièces détachées en stock : départ sous 24 h ouvrées.",
            "Supports d'impression : départ sous 48 h ouvrées.",
            "Commandes validées avant 14 h : expédition le jour même dans la mesure du possible.",
            "Articles « sur commande » : délai communiqué par e-mail après validation.",
          ],
        },
        {
          title: "Frais de port",
          items: [
            `Livraison offerte dès ${formatPriceShort(FREE_SHIPPING_THRESHOLD)} TTC de commande.`,
            `En dessous de ce montant : forfait de ${formatPrice(SHIPPING_FLAT_RATE)} TTC.`,
            "Livraison en France métropolitaine, Belgique, Luxembourg, Suisse, Allemagne, Espagne et Italie.",
            "Les panneaux de grand format peuvent faire l'objet d'un transport spécifique, chiffré avant expédition.",
          ],
        },
        {
          title: "Suivi de commande",
          paragraphs: [
            "Vous recevez un e-mail de confirmation à la validation du paiement, puis un second avec le numéro de suivi au moment de l'expédition.",
            "Les encres voyagent dans un emballage isotherme afin de préserver leur formulation, y compris en période de fortes chaleurs.",
          ],
        },
        {
          title: "Colis endommagé",
          paragraphs: [
            "Vérifiez l'état du colis à la réception et émettez des réserves précises sur le bordereau du transporteur en cas de dommage visible.",
            "Signalez-nous l'incident sous 48 h avec des photos : nous réexpédions immédiatement et prenons en charge le litige avec le transporteur.",
          ],
        },
        {
          title: "Retours",
          items: [
            "Retour possible sous 14 jours pour les articles neufs, non ouverts et dans leur emballage d'origine.",
            "Encres descellées : retour impossible pour des raisons d'hygiène et de conservation.",
            "Supports découpés sur mesure : non repris.",
            "Contactez-nous avant tout renvoi afin que nous vous transmettions le bon de retour.",
          ],
        },
      ]}
    />
  );
}
