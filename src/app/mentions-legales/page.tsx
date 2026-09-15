import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations relatives à l'éditeur du site, à son hébergeur et au traitement des données personnelles."
      updatedAt="15 septembre 2026"
      sections={[
        {
          title: "Éditeur du site",
          items: [
            `Raison sociale : ${siteConfig.legalName}`,
            `Siège social : ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}, ${siteConfig.address.country}`,
            `Téléphone : ${siteConfig.phone}`,
            `E-mail : ${siteConfig.email}`,
            "Forme juridique, capital social, RCS, numéro de TVA intracommunautaire : à compléter",
            "Directeur de la publication : à compléter",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Le site est hébergé par le prestataire retenu pour le déploiement. Nom, adresse et téléphone de l'hébergeur sont à renseigner ici avant la mise en ligne.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus du site (textes, visuels, logos, descriptions techniques) est protégé par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est soumise à autorisation écrite préalable.",
          ],
        },
        {
          title: "Données personnelles",
          paragraphs: [
            "Les données transmises via les formulaires de devis et de contact sont utilisées exclusivement pour traiter votre demande et vous recontacter. Elles ne sont ni revendues ni transmises à des tiers à des fins commerciales.",
            "Les données de commande sont traitées par notre prestataire de paiement Stripe, qui assure le traitement des informations bancaires. Le site ne stocke aucune donnée de carte.",
            "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Ces droits s'exercent par e-mail à l'adresse indiquée ci-dessus.",
          ],
        },
        {
          title: "Cookies",
          paragraphs: [
            "Le site n'utilise pas de cookie publicitaire ni de traceur tiers. Le panier est conservé localement dans votre navigateur et n'est transmis à nos serveurs qu'au moment du passage en caisse.",
          ],
        },
      ]}
    />
  );
}
