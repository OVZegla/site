import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { FREE_SHIPPING_THRESHOLD, siteConfig } from "@/lib/site";
import { formatPriceShort } from "@/lib/format";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente applicables aux commandes d'encres, pièces détachées et supports d'impression.",
  alternates: { canonical: "/cgv" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions générales de vente"
      intro="Ces conditions s'appliquent aux ventes en ligne d'encres, de pièces détachées et de supports d'impression. Les imprimantes murales et sol font l'objet d'un devis et d'un contrat distincts."
      updatedAt="15 septembre 2026"
      sections={[
        {
          title: "1. Champ d'application",
          paragraphs: [
            "Les présentes conditions régissent exclusivement les commandes passées via la boutique en ligne du site : encres UV, pièces détachées et supports d'impression.",
            "Les imprimantes murales et sol ne sont pas commercialisées en ligne. Leur vente fait l'objet d'un devis nominatif, puis d'un bon de commande signé assorti de conditions spécifiques (configuration, formation, garantie, financement).",
          ],
        },
        {
          title: "2. Prix",
          paragraphs: [
            "Les prix affichés sont exprimés en euros, toutes taxes comprises, au taux de TVA en vigueur en France (20 %). Ils s'entendent hors frais de livraison, indiqués avant la validation de la commande.",
            `La livraison est offerte à partir de ${formatPriceShort(FREE_SHIPPING_THRESHOLD)} TTC de commande.`,
          ],
        },
        {
          title: "3. Commande et paiement",
          paragraphs: [
            "La commande est réputée ferme à la validation du paiement. Le paiement est assuré par Stripe : les données bancaires transitent directement vers ce prestataire et ne sont jamais stockées sur nos serveurs.",
            "Une facture est adressée par e-mail dès l'enregistrement du paiement.",
          ],
        },
        {
          title: "4. Livraison",
          items: [
            "Pièces détachées et encres en stock : expédition sous 24 h ouvrées.",
            "Supports d'impression : expédition sous 48 h ouvrées.",
            "Délai d'acheminement indicatif : 2 à 4 jours ouvrés en France métropolitaine.",
            "Les articles signalés « sur commande » font l'objet d'un délai communiqué par e-mail après validation.",
          ],
        },
        {
          title: "5. Droit de rétractation",
          paragraphs: [
            "Conformément au Code de la consommation, le client consommateur dispose d'un délai de quatorze jours à compter de la réception pour exercer son droit de rétractation, sans justification.",
            "Les encres dont l'emballage scellé a été ouvert après livraison ne peuvent être reprises pour des raisons d'hygiène et de conservation. Les supports découpés sur mesure sont également exclus du droit de rétractation.",
            "Les commandes professionnelles ne bénéficient pas de plein droit de ce délai ; les retours sont alors traités au cas par cas.",
          ],
        },
        {
          title: "6. Garanties",
          paragraphs: [
            "Les pièces détachées bénéficient d'une garantie de douze mois, hors casse, mauvaise manipulation et encrassement par des consommables non conformes.",
            "Les garanties légales de conformité et des vices cachés s'appliquent dans les conditions prévues par la loi.",
          ],
        },
        {
          title: "7. Réclamations et litiges",
          paragraphs: [
            `Toute réclamation doit être adressée à ${siteConfig.email} ou au ${siteConfig.phone}. Nous nous engageons à répondre sous cinq jours ouvrés.`,
            "À défaut d'accord amiable, le litige relève de la compétence des juridictions françaises. Le consommateur peut recourir gratuitement à un médiateur de la consommation.",
          ],
        },
      ]}
    />
  );
}
