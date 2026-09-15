import type { Printer } from "@/lib/types";

/**
 * Gamme d'imprimantes murales et sol. Ces machines ne sont jamais vendues en
 * ligne : la configuration (hauteur d'impression, tête, encres, formation,
 * financement) est établie sur devis. Le mode `quote` garantit qu'aucune de ces
 * fiches ne peut exposer de bouton d'achat.
 */
export const printers: Printer[] = [
  {
    mode: "quote",
    slug: "opaline",
    name: "OPALINE",
    range: "Imprimante murale haut de gamme",
    tagline: "L'élégance française au service de l'impression murale",
    intro:
      "Le vaisseau amiral de la gamme. Un châssis carbone, une tête d'impression dernière génération et une finition jusqu'à 2 800 DPI pour les projets les plus exigeants.",
    description: [
      "L'OPALINE a été conçue pour les ateliers qui veulent produire vite sans jamais transiger sur la qualité. Son châssis en fibre de carbone limite les vibrations, ce qui permet de monter en vitesse tout en conservant une netteté de trait irréprochable.",
      "Son système de calibration automatique lit la planéité du mur avant chaque passage et ajuste la distance buse/surface en temps réel. Résultat : un rendu homogène même sur les supports irréguliers comme la brique, le béton brut ou le crépi fin.",
      "Livrée avec la formation initiale de deux jours dans nos locaux, le kit de démarrage encres UV et un an de maintenance préventive incluse.",
    ],
    highlights: [
      "Résolution jusqu'à 2 800 DPI",
      "Calibration automatique de la planéité",
      "Châssis carbone, 41 kg",
      "Blanc de soutien + vernis sélectif",
    ],
    specs: [
      { label: "Hauteur d'impression", value: "Jusqu'à 3,20 m (extension 4,20 m)" },
      { label: "Longueur d'impression", value: "Illimitée par raboutage automatique" },
      { label: "Résolution", value: "600 à 2 800 DPI" },
      { label: "Vitesse", value: "Jusqu'à 14 m²/h en mode production" },
      { label: "Encres", value: "UV LED — CMJN + Blanc + Vernis" },
      { label: "Tête d'impression", value: "Ricoh Gen 6" },
      { label: "Poids", value: "41 kg" },
      { label: "Alimentation", value: "220 V — 900 W" },
    ],
    useCases: [
      "Fresques murales grand format",
      "Agencement de boutiques et showrooms",
      "Décoration hôtelière haut de gamme",
      "Signalétique architecturale",
    ],
    accent: "from-slate-900 to-slate-700",
    badge: "Best-seller",
    featured: true,
  },
  {
    mode: "quote",
    slug: "graphite-edition",
    name: "GRAPHITE Edition",
    range: "Imprimante murale compacte",
    tagline: "Puissance et précision dans un format ultra compact",
    intro:
      "Le meilleur rapport encombrement / rendement de la gamme. Elle se transporte dans un break et se met en station en moins de dix minutes.",
    description: [
      "La GRAPHITE Edition s'adresse aux professionnels qui enchaînent les chantiers. Pliée, elle tient dans un coffre de break ; dépliée, elle couvre une hauteur de 2,70 m sans rehausse.",
      "Son électronique est directement héritée de l'OPALINE, avec un jeu d'encres identique. Vous pouvez donc mutualiser vos consommables si vous exploitez plusieurs machines.",
      "Idéale comme seconde machine d'atelier ou comme unité mobile dédiée aux interventions rapides en magasin.",
    ],
    highlights: [
      "Mise en station en moins de 10 minutes",
      "28 kg, transport en véhicule léger",
      "Consommables communs avec l'OPALINE",
      "Écran tactile 7 pouces",
    ],
    specs: [
      { label: "Hauteur d'impression", value: "Jusqu'à 2,70 m" },
      { label: "Longueur d'impression", value: "Illimitée" },
      { label: "Résolution", value: "600 à 1 800 DPI" },
      { label: "Vitesse", value: "Jusqu'à 10 m²/h" },
      { label: "Encres", value: "UV LED — CMJN + Blanc" },
      { label: "Tête d'impression", value: "Ricoh Gen 5" },
      { label: "Poids", value: "28 kg" },
      { label: "Alimentation", value: "220 V — 700 W" },
    ],
    useCases: [
      "Interventions en magasin",
      "Vitrines et devantures",
      "Bureaux et espaces de coworking",
      "Chantiers multi-sites",
    ],
    accent: "from-zinc-800 to-zinc-600",
    featured: true,
  },
  {
    mode: "quote",
    slug: "white",
    name: "WHITE",
    range: "Imprimante murale polyvalente",
    tagline: "Le choix idéal pour démarrer une activité d'impression murale",
    intro:
      "Fiable, intuitive et accessible : la WHITE est la porte d'entrée vers l'impression murale professionnelle, sans compromis sur la qualité de rendu.",
    description: [
      "Pensée pour la prise en main rapide, la WHITE fonctionne avec un logiciel simplifié : vous chargez votre visuel, vous validez la hauteur, la machine s'occupe du reste.",
      "C'est le modèle que nous recommandons pour une première machine. Le retour sur investissement moyen constaté chez nos clients se situe entre 8 et 14 mois selon le volume d'activité.",
      "La formation d'une journée et l'accompagnement commercial des trois premiers mois sont inclus dans chaque configuration.",
    ],
    highlights: [
      "Prise en main en une journée",
      "Logiciel simplifié en français",
      "Accompagnement commercial 3 mois",
      "Évolutive vers le blanc de soutien",
    ],
    specs: [
      { label: "Hauteur d'impression", value: "Jusqu'à 2,50 m" },
      { label: "Longueur d'impression", value: "Illimitée" },
      { label: "Résolution", value: "600 à 1 440 DPI" },
      { label: "Vitesse", value: "Jusqu'à 8 m²/h" },
      { label: "Encres", value: "UV LED — CMJN (Blanc en option)" },
      { label: "Tête d'impression", value: "Epson DX" },
      { label: "Poids", value: "32 kg" },
      { label: "Alimentation", value: "220 V — 650 W" },
    ],
    useCases: [
      "Création d'activité",
      "Décoration intérieure résidentielle",
      "Commerces de proximité",
      "Écoles et collectivités",
    ],
    accent: "from-neutral-700 to-neutral-500",
    featured: true,
  },
  {
    mode: "quote",
    slug: "ruby",
    name: "RUBY",
    range: "Imprimante hybride murale et sol",
    tagline: "Une machine, deux plans d'impression",
    intro:
      "La RUBY bascule du mur au sol en quelques secondes. Un seul investissement pour couvrir la totalité des surfaces d'un espace.",
    description: [
      "Le bras de la RUBY pivote à 90° et se verrouille en position sol, avec une gestion de la distance buse/surface recalculée automatiquement. Vous imprimez une fresque murale le matin et un marquage au sol l'après-midi avec la même machine.",
      "Le mode sol accepte les encres à forte adhérence pour béton ciré, résine et carrelage, avec un vernis anti-abrasion optionnel pour les zones de passage intense.",
      "C'est la configuration privilégiée par les agences d'événementiel et les prestataires de retail.",
    ],
    highlights: [
      "Bascule mur / sol en 30 secondes",
      "Vernis anti-abrasion optionnel",
      "Encres à forte adhérence béton et résine",
      "Double jeu de profils colorimétriques",
    ],
    specs: [
      { label: "Hauteur d'impression", value: "Jusqu'à 2,80 m" },
      { label: "Largeur au sol", value: "Jusqu'à 2,80 m, longueur illimitée" },
      { label: "Résolution", value: "600 à 1 800 DPI" },
      { label: "Vitesse", value: "Jusqu'à 11 m²/h" },
      { label: "Encres", value: "UV LED — CMJN + Blanc + Vernis" },
      { label: "Tête d'impression", value: "Ricoh Gen 5" },
      { label: "Poids", value: "39 kg" },
      { label: "Alimentation", value: "220 V — 800 W" },
    ],
    useCases: [
      "Marquage au sol événementiel",
      "Retail et parcours client",
      "Salons et stands",
      "Parkings et zones de circulation",
    ],
    accent: "from-rose-900 to-rose-700",
  },
  {
    mode: "quote",
    slug: "t1000",
    name: "T1000",
    range: "Imprimante murale grande hauteur",
    tagline: "Pour les projets à très grande échelle",
    intro:
      "Façades, halls d'immeubles, parkings silo : la T1000 imprime jusqu'à 6 mètres de hauteur en un seul montage.",
    description: [
      "La T1000 repose sur une colonne modulaire que l'on assemble par sections d'un mètre. Chaque section est détectée automatiquement et intégrée au calcul de trajectoire.",
      "Elle embarque une double alimentation d'encre pour tenir les gros volumes sans interruption, et un système d'aspiration des brouillards conforme aux exigences des chantiers en intérieur.",
      "Machine destinée aux prestataires établis : nous validons systématiquement la faisabilité du projet avant la mise en service.",
    ],
    highlights: [
      "Jusqu'à 6 m de hauteur",
      "Colonne modulaire par sections",
      "Double alimentation d'encre",
      "Aspiration des brouillards intégrée",
    ],
    specs: [
      { label: "Hauteur d'impression", value: "Jusqu'à 6,00 m (colonne modulaire)" },
      { label: "Longueur d'impression", value: "Illimitée" },
      { label: "Résolution", value: "600 à 1 440 DPI" },
      { label: "Vitesse", value: "Jusqu'à 18 m²/h" },
      { label: "Encres", value: "UV LED — CMJN + Blanc + Vernis" },
      { label: "Tête d'impression", value: "Ricoh Gen 6 ×2" },
      { label: "Poids", value: "96 kg (base + 2 sections)" },
      { label: "Alimentation", value: "220 V — 1 400 W" },
    ],
    useCases: [
      "Façades et pignons",
      "Halls d'immeubles et atriums",
      "Parkings silo",
      "Fresques monumentales",
    ],
    accent: "from-slate-800 to-slate-600",
    badge: "Grande hauteur",
  },
  {
    mode: "quote",
    slug: "nomad",
    name: "NOMAD",
    range: "Imprimante portable",
    tagline: "L'impression murale qui tient dans une valise",
    intro:
      "Un format cabine, une batterie intégrée et une autonomie de 3 heures pour les interventions là où il n'y a ni place ni prise de courant.",
    description: [
      "La NOMAD est une unité d'appoint : elle imprime des bandes de 60 cm de haut qu'elle raboute automatiquement, ce qui permet de couvrir de grandes surfaces sans structure au sol.",
      "Sa batterie amovible se recharge en 90 minutes et deux packs suffisent à tenir une journée d'intervention complète.",
      "Parfaite en complément d'une machine d'atelier pour les retouches, les petits formats et les démonstrations client.",
    ],
    highlights: [
      "Batterie amovible, 3 h d'autonomie",
      "11 kg, transport en bagage cabine",
      "Raboutage automatique des bandes",
      "Démarrage par application mobile",
    ],
    specs: [
      { label: "Hauteur d'impression", value: "Bandes de 60 cm, raboutage illimité" },
      { label: "Longueur d'impression", value: "Illimitée" },
      { label: "Résolution", value: "600 à 1 200 DPI" },
      { label: "Vitesse", value: "Jusqu'à 5 m²/h" },
      { label: "Encres", value: "UV LED — CMJN" },
      { label: "Tête d'impression", value: "Epson DX" },
      { label: "Poids", value: "11 kg" },
      { label: "Alimentation", value: "Batterie 48 V ou secteur 220 V" },
    ],
    useCases: [
      "Retouches et finitions",
      "Démonstrations commerciales",
      "Petits formats et logos",
      "Sites sans alimentation électrique",
    ],
    accent: "from-stone-700 to-stone-500",
  },
];

export function getPrinter(slug: string): Printer | undefined {
  return printers.find((printer) => printer.slug === slug);
}

export const featuredPrinters = printers.filter((printer) => printer.featured);
