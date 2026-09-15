import type { Printer } from "@/lib/types";

/**
 * Gamme réelle SYMP'S, reprise des pages du thème Shopify Harmony
 * (templates/page.opaline.json, page.m1.json, page.black.json, etc.).
 *
 * Ces machines ne sont jamais vendues en ligne : la configuration, la
 * formation et l'accompagnement sont établis sur devis. Le mode `quote`
 * garantit qu'aucune de ces fiches ne peut exposer de bouton d'achat.
 *
 * Caractéristiques communes annoncées sur le site : impression UV directe,
 * hauteur jusqu'à environ 3,50 m selon le modèle, largeur illimitée par ajout
 * de sections de rail, vitesse de 1 à 7 m²/h selon les paramètres, et suivi de
 * surface compensant des variations pouvant atteindre environ 3 cm.
 */
export const printers: Printer[] = [
  {
    mode: "quote",
    slug: "opaline",
    name: "Opaline",
    range: "Haut de gamme",
    tagline:
      "L'imprimante murale haut de gamme pensée pour une utilisation exigeante",
    intro:
      "Le sommet de la gamme SYMP'S. Une tête couleur et une tête blanche Epson I1600 indépendantes, un écran orientable et une ergonomie conçue pour produire régulièrement, avec confort et précision.",
    description: [
      "L'Opaline s'adresse aux entreprises qui placent la qualité de production, le confort d'utilisation et la richesse des finitions au centre de leur activité. Elle convient aussi bien aux chantiers réguliers qu'aux projets décoratifs à forte exigence.",
      "La configuration SYMP'S utilise deux têtes Epson I1600 : la première imprime les encres CMJN, la seconde est entièrement dédiée à l'encre blanche. Vous pouvez créer une base blanche sous les couleurs, renforcer leur présence sur les supports sombres ou colorés, et travailler des effets de matière.",
      "Son écran orientable et sa structure démontable font la différence au quotidien : installation plus rapide, lecture des réglages dans toutes les positions de travail, transport facilité entre deux chantiers.",
    ],
    highlights: [
      "Double tête Epson I1600 — couleur et blanc",
      "Écran orientable",
      "Structure démontable",
      "Finitions et effets de matière",
    ],
    specs: [
      { label: "Têtes d'impression", value: "2 × Epson I1600 (CMJN + blanc)" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Hauteur d'impression", value: "Jusqu'à environ 3,50 m selon configuration" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Vitesse", value: "1 à 7 m²/h selon le mode et le support" },
      { label: "Suivi de surface", value: "Compense des variations jusqu'à environ 3 cm" },
      { label: "Structure", value: "Démontable, écran orientable" },
    ],
    useCases: [
      "Production régulière en atelier",
      "Projets décoratifs haut de gamme",
      "Hôtellerie et restauration",
      "Agencement et retail",
    ],
    accent: "from-brand-900 to-brand-600",
    badge: "Haut de gamme",
    featured: true,
  },
  {
    mode: "quote",
    slug: "graphite-edition",
    name: "Graphite Edition",
    range: "Professionnelle compacte",
    tagline: "La puissance professionnelle dans un format plus compact",
    intro:
      "Deux têtes Epson I1600, l'impression UV et une architecture démontable optimisée pour les déplacements fréquents. La mobilité sans compromis sur les fonctions professionnelles.",
    description: [
      "La Graphite n'est pas un modèle simplifié. Elle conserve une tête CMJN, une tête blanche, le suivi de surface et la polymérisation UV, tout en réduisant l'encombrement lors des déplacements et des installations.",
      "Elle accompagne les professionnels dans les appartements, les boutiques, les restaurants et les bureaux — partout où l'accès est contraint et où la machine doit être montée puis démontée dans la journée.",
      "La structure démontable facilite le chargement, la manutention et l'organisation dans les espaces restreints.",
    ],
    highlights: [
      "Double tête Epson I1600 — couleur et blanc",
      "Architecture démontable pour les déplacements",
      "Suivi de surface conservé",
      "Adaptée aux espaces restreints",
    ],
    specs: [
      { label: "Têtes d'impression", value: "2 × Epson I1600 (CMJN + blanc)" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Hauteur d'impression", value: "Jusqu'à environ 3,50 m selon configuration" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Vitesse", value: "1 à 7 m²/h selon le mode et le support" },
      { label: "Suivi de surface", value: "Compense des variations jusqu'à environ 3 cm" },
      { label: "Structure", value: "Démontable, optimisée pour le transport" },
    ],
    useCases: [
      "Interventions en appartement",
      "Boutiques et restaurants",
      "Bureaux et espaces tertiaires",
      "Chantiers multi-sites",
    ],
    accent: "from-ink-900 to-ink-700",
    featured: true,
  },
  {
    mode: "quote",
    slug: "m1",
    name: "M1",
    range: "Professionnelle polyvalente",
    tagline:
      "L'imprimante murale professionnelle pour lancer et développer votre activité",
    intro:
      "Double tête Epson I1600, impression UV et structure transportable. Pensée pour celles et ceux qui veulent faire de l'impression murale un véritable métier.",
    description: [
      "La M1 n'est pas une machine limitée aux débutants. C'est une machine professionnelle, précise et robuste, capable de vous accompagner de vos premières réalisations jusqu'au développement de votre activité.",
      "Sa configuration SYMP'S utilise deux têtes Epson I1600 indépendantes : l'une dépose les encres CMJN, l'autre est dédiée à l'encre blanche. Cette séparation permet de préparer une sous-couche blanche avant la couleur et de travailler sur des supports sombres ou colorés.",
      "Photographies, illustrations, portraits, logos ou typographies : la M1 restitue les détails et les nuances d'un fichier correctement préparé, avec une résolution pouvant atteindre 1 800 dpi selon le mode d'impression.",
    ],
    highlights: [
      "Double tête Epson I1600 — couleur et blanc",
      "Jusqu'à 1 800 dpi selon le mode",
      "Structure transportable",
      "Conçue pour durer avec l'activité",
    ],
    specs: [
      { label: "Têtes d'impression", value: "2 × Epson I1600 (CMJN + blanc)" },
      { label: "Résolution", value: "Jusqu'à 1 800 dpi selon le mode" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Hauteur d'impression", value: "Jusqu'à environ 3,50 m selon configuration" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Vitesse", value: "1 à 7 m²/h selon le mode et le support" },
      { label: "Suivi de surface", value: "Compense des variations jusqu'à environ 3 cm" },
    ],
    useCases: [
      "Création et développement d'activité",
      "Décoration intérieure",
      "Commerces et enseignes",
      "Portraits et visuels détaillés",
    ],
    accent: "from-brand-800 to-brand-500",
    badge: "Pour se lancer",
    featured: true,
  },
  {
    mode: "quote",
    slug: "black-2-0",
    name: "Black 2.0",
    range: "2-en-1 mur et sol",
    tagline:
      "L'imprimante professionnelle 2-en-1 pour les murs et les sols",
    intro:
      "Impression verticale et horizontale dans une seule machine. Les murs deviennent des supports de création, et les décors se prolongent directement sur le sol.",
    description: [
      "En mode mural, la Black 2.0 réalise fresques, logos, décors et univers de marque. En mode sol, elle ajoute une dimension supplémentaire aux commerces, hôtels, restaurants, événements et espaces professionnels.",
      "La structure se reconfigure manuellement pour changer l'orientation d'impression. La formation SYMP'S vous apprend chaque étape : conversion, alignement, positionnement et lancement du travail dans les deux modes.",
      "Une tête traite les encres CMJN, la seconde dépose l'encre blanche. Cette séparation permet de travailler les fonds sombres ou colorés et de développer des applications sur certains supports transparents.",
    ],
    highlights: [
      "Impression murale et au sol",
      "Double tête Epson I1600 — couleur et blanc",
      "Reconfiguration manuelle encadrée par la formation",
      "Parcours visuels et signalétique",
    ],
    specs: [
      { label: "Orientations", value: "Verticale (mur) et horizontale (sol)" },
      { label: "Têtes d'impression", value: "2 × Epson I1600 (CMJN + blanc)" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Hauteur d'impression", value: "Jusqu'à environ 3,50 m selon configuration" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Vitesse", value: "1 à 7 m²/h selon le mode et le support" },
      { label: "Conversion mur / sol", value: "Manuelle, procédure apprise en formation" },
    ],
    useCases: [
      "Commerces et hôtels",
      "Événementiel",
      "Signalétique au sol",
      "Univers de marque complets",
    ],
    accent: "from-ink-950 to-ink-800",
  },
  {
    mode: "quote",
    slug: "ruby",
    name: "Ruby",
    range: "2-en-1 motorisée",
    tagline:
      "Une seule machine professionnelle pour imprimer sur les murs et les sols",
    intro:
      "L'impression verticale et horizontale dans une architecture conçue dès l'origine pour les deux usages. La machine complète bascule du mur au sol en environ 60 secondes.",
    description: [
      "En mode vertical, la Ruby imprime directement sur les murs et les supports rigides positionnés face à elle. En mode horizontal, l'ensemble de la machine se réoriente pour que le bloc d'impression travaille au-dessus du sol.",
      "Le système motorisé fait basculer la structure complète en environ 60 secondes. Les têtes restent en place et l'écran conserve sa position sur la structure : vous passez d'une orientation à l'autre avec un minimum de manipulations.",
      "Deux orientations, une multitude d'offres à créer : fresques, illustrations, panoramas et décors personnalisés pour les logements, hôtels, restaurants, bureaux et lieux recevant du public.",
    ],
    highlights: [
      "Bascule motorisée mur / sol en environ 60 s",
      "Architecture conçue pour les deux usages",
      "Écran solidaire de la structure",
      "Double tête Epson I1600 — couleur et blanc",
    ],
    specs: [
      { label: "Orientations", value: "Verticale (mur) et horizontale (sol)" },
      { label: "Conversion mur / sol", value: "Motorisée, environ 60 secondes" },
      { label: "Têtes d'impression", value: "2 × Epson I1600 (CMJN + blanc)" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Hauteur d'impression", value: "Jusqu'à environ 3,50 m selon configuration" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Vitesse", value: "1 à 7 m²/h selon le mode et le support" },
    ],
    useCases: [
      "Logements et hôtels",
      "Restaurants et bureaux",
      "Lieux recevant du public",
      "Panoramas et fresques",
    ],
    accent: "from-flag-700 to-flag-600",
    badge: "Mur et sol",
  },
  {
    mode: "quote",
    slug: "white",
    name: "White",
    range: "Découverte",
    tagline: "Expérimenter l'impression murale et produire ponctuellement",
    intro:
      "Pour les curieux, les créatifs, les établissements pédagogiques et les utilisateurs qui souhaitent découvrir l'impression murale. Le positionnement est volontairement clair : ce n'est pas une machine de production quotidienne.",
    description: [
      "La White est disponible avec une tête d'impression de type Epson DX7 ou DX10. L'équipe SYMP'S vous présente la version proposée et vous aide à choisir celle qui correspond à votre budget et à vos premiers usages.",
      "Elle permet d'apprendre le flux de travail sans complexité inutile : préparer le visuel, positionner la machine face à la surface, lancer l'impression directe sur la paroi, puis effectuer l'entretien courant après utilisation.",
      "Si votre activité se développe et que vous visez une production régulière, nous vous orienterons vers la M1 ou la Graphite Edition.",
    ],
    highlights: [
      "Tête Epson DX7 ou DX10",
      "Flux de travail simplifié",
      "Usage ponctuel et pédagogique",
      "Budget d'entrée de gamme",
    ],
    specs: [
      { label: "Tête d'impression", value: "Epson DX7 ou DX10 selon la version" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Usage", value: "Découverte et projets ponctuels" },
      { label: "Positionnement", value: "Non destinée à une production quotidienne" },
    ],
    useCases: [
      "Découverte de l'impression murale",
      "Établissements pédagogiques",
      "Ateliers créatifs",
      "Petits projets ponctuels",
    ],
    accent: "from-ink-700 to-ink-500",
  },
  {
    mode: "quote",
    slug: "t1000",
    name: "T1000",
    range: "Découverte",
    tagline: "Comprendre, apprendre et créer à son rythme",
    intro:
      "Pour les particuliers, les structures pédagogiques et les ateliers créatifs qui veulent découvrir la logique d'une impression murale sans viser une production quotidienne.",
    description: [
      "La T1000 est proposée avec une tête d'impression de type Epson DX7 ou DX10. Ce choix oriente la configuration vers l'apprentissage et les projets ponctuels, tout en conservant un budget d'entrée de gamme.",
      "Elle permet de parcourir les grandes étapes de l'impression murale : préparer et dimensionner le visuel, installer la structure face à la zone d'impression, lancer l'impression, puis entretenir la machine.",
      "Elle n'est pas adaptée à une activité professionnelle soutenue. Si c'est votre objectif, parlons plutôt de la M1.",
    ],
    highlights: [
      "Tête Epson DX7 ou DX10",
      "Apprentissage pas à pas",
      "Projets ponctuels",
      "Budget d'entrée de gamme",
    ],
    specs: [
      { label: "Tête d'impression", value: "Epson DX7 ou DX10 selon la version" },
      { label: "Encres", value: "UV à polymérisation immédiate" },
      { label: "Largeur d'impression", value: "Illimitée par ajout de sections de rail" },
      { label: "Usage", value: "Apprentissage et projets ponctuels" },
      { label: "Positionnement", value: "Non destinée à une production quotidienne" },
    ],
    useCases: [
      "Particuliers",
      "Structures pédagogiques",
      "Ateliers créatifs",
      "Premiers essais",
    ],
    accent: "from-ink-800 to-ink-600",
  },
];

export function getPrinter(slug: string): Printer | undefined {
  return printers.find((printer) => printer.slug === slug);
}

export const featuredPrinters = printers.filter((printer) => printer.featured);

/**
 * Résout un nom commercial ("Black 2.0") vers sa fiche.
 *
 * Les listes de compatibilité du catalogue boutique désignent les machines par
 * leur nom ; une slugification naïve échouerait sur « Black 2.0 ».
 */
export function getPrinterByName(name: string): Printer | undefined {
  const normalized = name.trim().toLowerCase();
  return printers.find((printer) => printer.name.toLowerCase() === normalized);
}
