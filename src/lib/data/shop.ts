import type { ShopCategorySlug, ShopProduct } from "@/lib/types";

export interface ShopCategory {
  slug: ShopCategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
}

export const shopCategories: ShopCategory[] = [
  {
    slug: "encres",
    name: "Encres UV",
    shortName: "Encres",
    tagline: "Cartouches et recharges d'origine",
    description:
      "Encres UV LED formulées pour nos têtes d'impression. Séchage instantané, tenue jusqu'à 10 ans en extérieur, sans odeur résiduelle.",
    icon: "droplet",
  },
  {
    slug: "pieces-detachees",
    name: "Pièces détachées",
    shortName: "Pièces",
    tagline: "Stock permanent, expédition sous 24 h",
    description:
      "Têtes, courroies, capteurs, filtres, lampes LED : les pièces d'usure de toutes nos machines, en stock et expédiées le jour même.",
    icon: "wrench",
  },
  {
    slug: "supports",
    name: "Supports d'impression",
    shortName: "Supports",
    tagline: "Dibond, bois, plexiglas, PVC",
    description:
      "Panneaux prêts à imprimer, découpés sur mesure et traités pour l'accroche des encres UV. Formats standards en stock.",
    icon: "layers",
  },
];

export function getCategory(slug: string): ShopCategory | undefined {
  return shopCategories.find((category) => category.slug === slug);
}

/**
 * Catalogue e-commerce. Tous ces articles sont en mode `buy` : ils passent par
 * le panier et Stripe Checkout. Les prix sont exprimés en centimes TTC.
 */
export const shopProducts: ShopProduct[] = [
  // ---------------------------------------------------------------- Encres
  {
    mode: "buy",
    slug: "encre-uv-cmjn-1l",
    name: "Encre UV LED — Cartouche 1 L",
    category: "encres",
    sku: "INK-UV-1L",
    price: 18900,
    unit: "la cartouche de 1 L",
    shortDescription:
      "Cartouche d'encre UV LED d'origine, compatible avec l'ensemble de la gamme SYMP'S.",
    description: [
      "Formulation UV LED à séchage instantané, mise au point avec notre fabricant pour les têtes Ricoh et Epson montées sur nos machines.",
      "Excellente accroche sur béton, plâtre, bois, carrelage, métal, brique, marbre et verre. Résistance UV testée à 10 ans en exposition extérieure directe.",
      "Puce de reconnaissance intégrée : la machine détecte automatiquement le niveau et la date de péremption.",
    ],
    specs: [
      { label: "Contenance", value: "1 litre" },
      { label: "Type", value: "UV LED, polymérisation instantanée" },
      { label: "Rendement moyen", value: "35 à 50 m² selon la densité" },
      { label: "Conservation", value: "12 mois à l'abri de la lumière, 15-25 °C" },
      { label: "Norme", value: "Sans COV, sans odeur résiduelle" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000", "NOMAD"],
    variants: [
      { id: "cyan", label: "Cyan", priceDelta: 0, sku: "INK-UV-1L-C" },
      { id: "magenta", label: "Magenta", priceDelta: 0, sku: "INK-UV-1L-M" },
      { id: "jaune", label: "Jaune", priceDelta: 0, sku: "INK-UV-1L-Y" },
      { id: "noir", label: "Noir", priceDelta: 0, sku: "INK-UV-1L-K" },
      { id: "blanc", label: "Blanc de soutien", priceDelta: 3000, sku: "INK-UV-1L-W" },
      { id: "vernis", label: "Vernis sélectif", priceDelta: 4500, sku: "INK-UV-1L-V" },
    ],
    stock: 64,
    leadTime: "Expédition sous 24 h",
    featured: true,
  },
  {
    mode: "buy",
    slug: "pack-encres-cmjn-4x1l",
    name: "Pack encres CMJN — 4 × 1 L",
    category: "encres",
    sku: "INK-UV-PACK-CMYK",
    price: 69900,
    compareAtPrice: 75600,
    unit: "le pack de 4 cartouches",
    shortDescription:
      "Le jeu complet cyan, magenta, jaune et noir. L'option la plus économique pour un réassort classique.",
    description: [
      "Quatre cartouches de 1 litre, une par couleur primaire, conditionnées dans un carton isotherme pour préserver la formulation pendant le transport.",
      "C'est le réassort standard pour une machine en production régulière : comptez un pack tous les 150 à 200 m² imprimés.",
    ],
    specs: [
      { label: "Contenu", value: "1 L cyan, 1 L magenta, 1 L jaune, 1 L noir" },
      { label: "Rendement moyen", value: "150 à 200 m²" },
      { label: "Conservation", value: "12 mois" },
      { label: "Économie", value: "57 € par rapport à l'achat à l'unité" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000", "NOMAD"],
    stock: 28,
    leadTime: "Expédition sous 24 h",
    featured: true,
  },
  {
    mode: "buy",
    slug: "encre-sol-haute-adherence-1l",
    name: "Encre sol haute adhérence — 1 L",
    category: "encres",
    sku: "INK-FLOOR-1L",
    price: 22900,
    unit: "la cartouche de 1 L",
    shortDescription:
      "Formulation renforcée pour l'impression au sol sur béton ciré, résine et carrelage.",
    description: [
      "Encre spécifique aux plans horizontaux, avec un taux de résine plus élevé pour résister au passage et au frottement.",
      "À associer au vernis anti-abrasion pour les zones de circulation intense (halls, parkings, allées de salon).",
      "Réservée aux machines équipées du mode sol : RUBY et T1000.",
    ],
    specs: [
      { label: "Contenance", value: "1 litre" },
      { label: "Résistance", value: "Classe R10 après vernis" },
      { label: "Rendement moyen", value: "30 à 40 m²" },
      { label: "Support", value: "Béton ciré, résine, carrelage, bitume lissé" },
    ],
    compatibility: ["RUBY", "T1000"],
    variants: [
      { id: "cyan", label: "Cyan", priceDelta: 0, sku: "INK-FLOOR-1L-C" },
      { id: "magenta", label: "Magenta", priceDelta: 0, sku: "INK-FLOOR-1L-M" },
      { id: "jaune", label: "Jaune", priceDelta: 0, sku: "INK-FLOOR-1L-Y" },
      { id: "noir", label: "Noir", priceDelta: 0, sku: "INK-FLOOR-1L-K" },
    ],
    stock: 19,
    leadTime: "Expédition sous 24 h",
  },
  {
    mode: "buy",
    slug: "solution-nettoyage-tete-500ml",
    name: "Solution de nettoyage tête — 500 ml",
    category: "encres",
    sku: "INK-CLEAN-500",
    price: 4900,
    unit: "le flacon de 500 ml",
    shortDescription:
      "Le nettoyant d'entretien à utiliser à chaque fin de session pour éviter le bouchage des buses.",
    description: [
      "Solution sans solvant agressif, compatible avec les joints et les membranes de nos têtes d'impression.",
      "Un passage en fin de journée suffit à prolonger significativement la durée de vie de la tête. C'est le geste d'entretien le plus rentable sur une machine d'impression UV.",
    ],
    specs: [
      { label: "Contenance", value: "500 ml" },
      { label: "Usage", value: "Purge quotidienne et nettoyage manuel" },
      { label: "Conservation", value: "24 mois" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000", "NOMAD"],
    stock: 120,
    leadTime: "Expédition sous 24 h",
  },

  // ------------------------------------------------------- Pièces détachées
  {
    mode: "buy",
    slug: "tete-impression-ricoh-gen5",
    name: "Tête d'impression Ricoh Gen 5",
    category: "pieces-detachees",
    sku: "PRT-HEAD-RG5",
    price: 189000,
    unit: "la tête",
    shortDescription:
      "Tête d'impression de rechange d'origine, livrée testée et pré-calibrée sur banc.",
    description: [
      "Chaque tête est montée sur banc de test avant expédition : nous vérifions l'intégralité des buses et nous joignons le relevé au colis.",
      "Le remplacement se fait en atelier ou sur site par nos techniciens. Si vous souhaitez procéder vous-même, la procédure vidéo est fournie et notre support vous accompagne par visio.",
      "Garantie 12 mois hors casse et hors encrassement par encre non conforme.",
    ],
    specs: [
      { label: "Référence", value: "Ricoh Gen 5" },
      { label: "Buses", value: "1 280" },
      { label: "Garantie", value: "12 mois" },
      { label: "Livrée avec", value: "Relevé de test, joints, nappe de connexion" },
    ],
    compatibility: ["GRAPHITE Edition", "RUBY"],
    stock: 6,
    leadTime: "Expédition sous 24 h",
    featured: true,
  },
  {
    mode: "buy",
    slug: "courroie-entrainement-vertical",
    name: "Courroie d'entraînement verticale",
    category: "pieces-detachees",
    sku: "PRT-BELT-V",
    price: 8900,
    unit: "la courroie",
    shortDescription:
      "Pièce d'usure à remplacer toutes les 600 heures d'impression environ.",
    description: [
      "Courroie crantée renforcée fibre de verre, taillée à la longueur exacte de chaque modèle. Choisissez votre machine dans la liste avant d'ajouter au panier.",
      "Un jeu de courroie provoque des décalages de trame visibles en aplat : si vous constatez un léger dédoublement horizontal, c'est généralement la première pièce à contrôler.",
    ],
    specs: [
      { label: "Matériau", value: "Néoprène renforcé fibre de verre" },
      { label: "Durée de vie", value: "≈ 600 heures d'impression" },
      { label: "Montage", value: "20 minutes, sans outil spécifique" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000"],
    variants: [
      { id: "opaline", label: "OPALINE", priceDelta: 1000, sku: "PRT-BELT-V-OPA" },
      { id: "graphite", label: "GRAPHITE Edition", priceDelta: 0, sku: "PRT-BELT-V-GRA" },
      { id: "white", label: "WHITE", priceDelta: 0, sku: "PRT-BELT-V-WHI" },
      { id: "ruby", label: "RUBY", priceDelta: 500, sku: "PRT-BELT-V-RUB" },
      { id: "t1000", label: "T1000", priceDelta: 2500, sku: "PRT-BELT-V-T1K" },
    ],
    stock: 42,
    leadTime: "Expédition sous 24 h",
    featured: true,
  },
  {
    mode: "buy",
    slug: "lampe-uv-led-polymerisation",
    name: "Lampe UV LED de polymérisation",
    category: "pieces-detachees",
    sku: "PRT-LED-UV",
    price: 43500,
    unit: "la lampe",
    shortDescription:
      "Module LED de séchage. À remplacer lorsque le temps de polymérisation s'allonge.",
    description: [
      "Module complet avec dissipateur et connectique. La baisse de puissance d'une lampe UV est progressive : si vos impressions restent collantes plus longtemps qu'avant, c'est le symptôme.",
      "Durée de vie annoncée de 20 000 heures dans des conditions normales d'utilisation.",
    ],
    specs: [
      { label: "Longueur d'onde", value: "395 nm" },
      { label: "Durée de vie", value: "≈ 20 000 heures" },
      { label: "Refroidissement", value: "Dissipateur aluminium + ventilation" },
      { label: "Garantie", value: "12 mois" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000"],
    stock: 14,
    leadTime: "Expédition sous 24 h",
  },
  {
    mode: "buy",
    slug: "capteur-distance-laser",
    name: "Capteur de distance laser",
    category: "pieces-detachees",
    sku: "PRT-SENS-LAS",
    price: 15900,
    unit: "le capteur",
    shortDescription:
      "Capteur de mesure de la planéité du mur, pièce clé de la calibration automatique.",
    description: [
      "Capteur laser de précision qui mesure en continu la distance entre la tête et la surface. Un capteur encrassé ou déréglé se traduit par des variations d'épaisseur d'encre.",
      "Livré calibré, à brancher directement sur la carte mère. Aucun réglage logiciel nécessaire.",
    ],
    specs: [
      { label: "Précision", value: "± 0,05 mm" },
      { label: "Plage de mesure", value: "5 à 120 mm" },
      { label: "Interface", value: "Connecteur JST 4 broches" },
    ],
    compatibility: ["OPALINE", "RUBY", "T1000"],
    stock: 23,
    leadTime: "Expédition sous 24 h",
  },
  {
    mode: "buy",
    slug: "kit-filtres-encre",
    name: "Kit filtres encre — 6 pièces",
    category: "pieces-detachees",
    sku: "PRT-FILT-KIT6",
    price: 6500,
    unit: "le kit de 6",
    shortDescription:
      "Filtres en ligne à changer tous les six mois pour protéger la tête d'impression.",
    description: [
      "Six filtres, un par circuit d'encre, avec les raccords rapides. Le remplacement prend dix minutes et se fait sans purger la machine.",
      "Un filtre saturé fait chuter le débit d'encre et se manifeste par des buses manquantes sur le test d'impression.",
    ],
    specs: [
      { label: "Contenu", value: "6 filtres + 12 raccords rapides" },
      { label: "Seuil de filtration", value: "5 µm" },
      { label: "Périodicité", value: "Tous les 6 mois" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000", "NOMAD"],
    stock: 87,
    leadTime: "Expédition sous 24 h",
  },
  {
    mode: "buy",
    slug: "batterie-nomad-48v",
    name: "Batterie NOMAD 48 V",
    category: "pieces-detachees",
    sku: "PRT-BAT-N48",
    price: 34900,
    unit: "la batterie",
    shortDescription:
      "Pack batterie amovible de rechange pour l'imprimante portable NOMAD.",
    description: [
      "Un second pack permet de tenir une journée d'intervention complète : vous imprimez sur l'un pendant que l'autre charge.",
      "Recharge complète en 90 minutes sur le chargeur fourni avec la machine.",
    ],
    specs: [
      { label: "Tension", value: "48 V" },
      { label: "Capacité", value: "12 Ah" },
      { label: "Autonomie", value: "≈ 3 heures d'impression" },
      { label: "Recharge", value: "90 minutes" },
    ],
    compatibility: ["NOMAD"],
    stock: 17,
    leadTime: "Expédition sous 24 h",
  },
  {
    mode: "buy",
    slug: "roulettes-stabilisatrices",
    name: "Jeu de roulettes stabilisatrices",
    category: "pieces-detachees",
    sku: "PRT-WHEEL-SET",
    price: 12900,
    unit: "le jeu de 4",
    shortDescription:
      "Roulettes de base avec blocage, à remplacer en cas de jeu ou de vibration en production.",
    description: [
      "Quatre roulettes à roulement à billes avec frein individuel et platine de fixation. Une roulette usée introduit des micro-vibrations qui dégradent la netteté du trait.",
      "Compatible avec toutes les bases de machines de la gamme, hors NOMAD.",
    ],
    specs: [
      { label: "Contenu", value: "4 roulettes + visserie" },
      { label: "Charge admissible", value: "60 kg par roulette" },
      { label: "Frein", value: "Individuel, sur chaque roulette" },
    ],
    compatibility: ["OPALINE", "GRAPHITE Edition", "WHITE", "RUBY", "T1000"],
    stock: 31,
    leadTime: "Expédition sous 24 h",
  },

  // -------------------------------------------------------------- Supports
  {
    mode: "buy",
    slug: "panneau-dibond-3mm",
    name: "Panneau Dibond 3 mm",
    category: "supports",
    sku: "SUP-DIB-3",
    price: 4200,
    unit: "le panneau",
    shortDescription:
      "Aluminium composite blanc mat, le support de référence pour un rendu premium et durable.",
    description: [
      "Deux feuilles d'aluminium enserrant un noyau polyéthylène : le Dibond est rigide, léger et parfaitement plan, ce qui en fait le support idéal pour l'impression UV directe.",
      "Face blanche mate pré-traitée pour l'accroche des encres, film de protection à retirer après impression.",
      "Utilisable en extérieur sans traitement complémentaire, avec une tenue de 10 ans.",
    ],
    specs: [
      { label: "Épaisseur", value: "3 mm" },
      { label: "Finition", value: "Blanc mat, traité accroche UV" },
      { label: "Poids", value: "≈ 3,8 kg/m²" },
      { label: "Usage", value: "Intérieur et extérieur" },
    ],
    compatibility: ["Toutes machines", "Découpe sur mesure disponible"],
    variants: [
      { id: "50x70", label: "50 × 70 cm", priceDelta: 0, sku: "SUP-DIB-3-5070" },
      { id: "70x100", label: "70 × 100 cm", priceDelta: 3800, sku: "SUP-DIB-3-70100" },
      { id: "100x150", label: "100 × 150 cm", priceDelta: 10600, sku: "SUP-DIB-3-100150" },
      { id: "150x300", label: "150 × 300 cm", priceDelta: 29800, sku: "SUP-DIB-3-150300" },
    ],
    stock: 210,
    leadTime: "Expédition sous 48 h",
    featured: true,
  },
  {
    mode: "buy",
    slug: "panneau-bois-peuplier",
    name: "Panneau bois peuplier 15 mm",
    category: "supports",
    sku: "SUP-BOI-15",
    price: 3600,
    unit: "le panneau",
    shortDescription:
      "Contreplaqué de peuplier poncé, pour un rendu chaleureux où le veinage reste visible.",
    description: [
      "Contreplaqué léger, poncé en grain 180 et prêt à recevoir l'encre UV. Le bois est laissé brut : l'encre laisse transparaître le veinage, ce qui donne des rendus très recherchés en décoration intérieure.",
      "Pour un blanc opaque, imprimez une couche de blanc de soutien avant la quadri.",
      "Chants bruts, découpe sur mesure possible sur demande.",
    ],
    specs: [
      { label: "Épaisseur", value: "15 mm" },
      { label: "Essence", value: "Peuplier, contreplaqué 5 plis" },
      { label: "Finition", value: "Poncé grain 180, brut" },
      { label: "Usage", value: "Intérieur" },
    ],
    compatibility: ["Toutes machines", "Blanc de soutien recommandé"],
    variants: [
      { id: "40x60", label: "40 × 60 cm", priceDelta: 0, sku: "SUP-BOI-15-4060" },
      { id: "60x90", label: "60 × 90 cm", priceDelta: 2900, sku: "SUP-BOI-15-6090" },
      { id: "100x120", label: "100 × 120 cm", priceDelta: 7400, sku: "SUP-BOI-15-100120" },
    ],
    stock: 145,
    leadTime: "Expédition sous 48 h",
    featured: true,
  },
  {
    mode: "buy",
    slug: "plaque-plexiglas-5mm",
    name: "Plaque plexiglas 5 mm",
    category: "supports",
    sku: "SUP-PLX-5",
    price: 5400,
    unit: "la plaque",
    shortDescription:
      "PMMA transparent poli, pour les effets de profondeur et les impressions rétro-éclairées.",
    description: [
      "Le plexiglas permet des jeux de transparence impossibles sur support opaque : impression en verso avec blanc de soutien, superposition de plusieurs plaques, rétro-éclairage LED.",
      "Chants polis diamant, film de protection sur les deux faces.",
    ],
    specs: [
      { label: "Épaisseur", value: "5 mm" },
      { label: "Matériau", value: "PMMA coulé transparent" },
      { label: "Chants", value: "Polis diamant" },
      { label: "Usage", value: "Intérieur, rétro-éclairage" },
    ],
    compatibility: ["Toutes machines", "Blanc de soutien recommandé"],
    variants: [
      { id: "40x60", label: "40 × 60 cm", priceDelta: 0, sku: "SUP-PLX-5-4060" },
      { id: "60x90", label: "60 × 90 cm", priceDelta: 4600, sku: "SUP-PLX-5-6090" },
      { id: "100x150", label: "100 × 150 cm", priceDelta: 13900, sku: "SUP-PLX-5-100150" },
    ],
    stock: 96,
    leadTime: "Expédition sous 48 h",
  },
  {
    mode: "buy",
    slug: "panneau-pvc-expanse-5mm",
    name: "Panneau PVC expansé 5 mm",
    category: "supports",
    sku: "SUP-PVC-5",
    price: 2200,
    unit: "le panneau",
    shortDescription:
      "Le support économique par excellence : léger, rigide et facile à découper.",
    description: [
      "PVC expansé blanc mat, très léger, idéal pour la PLV, les panneaux temporaires et les maquettes de validation client.",
      "Se découpe au cutter, se perce sans éclat. Usage intérieur ou extérieur abrité.",
    ],
    specs: [
      { label: "Épaisseur", value: "5 mm" },
      { label: "Finition", value: "Blanc mat" },
      { label: "Poids", value: "≈ 2,5 kg/m²" },
      { label: "Usage", value: "Intérieur, extérieur abrité" },
    ],
    compatibility: ["Toutes machines"],
    variants: [
      { id: "50x70", label: "50 × 70 cm", priceDelta: 0, sku: "SUP-PVC-5-5070" },
      { id: "70x100", label: "70 × 100 cm", priceDelta: 1900, sku: "SUP-PVC-5-70100" },
      { id: "100x200", label: "100 × 200 cm", priceDelta: 6300, sku: "SUP-PVC-5-100200" },
    ],
    stock: 340,
    leadTime: "Expédition sous 48 h",
  },
  {
    mode: "buy",
    slug: "toile-adhesive-murale",
    name: "Toile adhésive murale — rouleau 25 m",
    category: "supports",
    sku: "SUP-TOI-25",
    price: 24900,
    unit: "le rouleau de 25 m",
    shortDescription:
      "Toile repositionnable à imprimer puis à poser, pour les murs qui ne peuvent pas être imprimés directement.",
    description: [
      "Toile intissée avec adhésif repositionnable : elle se pose et se retire sans laisser de trace, ce qui en fait la solution pour les locations, les bureaux et les décors temporaires.",
      "Largeur 1,30 m, longueur 25 m. Se découpe aux ciseaux, se pose à deux sans outillage particulier.",
    ],
    specs: [
      { label: "Dimensions", value: "1,30 m × 25 m" },
      { label: "Matériau", value: "Intissé 240 g/m²" },
      { label: "Adhésif", value: "Repositionnable, sans résidu" },
      { label: "Classement au feu", value: "B-s1,d0" },
    ],
    compatibility: ["Toutes machines", "Table d'impression requise"],
    stock: 38,
    leadTime: "Expédition sous 48 h",
  },
  {
    mode: "buy",
    slug: "primaire-accroche-1l",
    name: "Primaire d'accroche — 1 L",
    category: "supports",
    sku: "SUP-PRIM-1L",
    price: 7900,
    unit: "le bidon de 1 L",
    shortDescription:
      "À appliquer sur les surfaces difficiles — verre, métal poli, carrelage émaillé — avant impression.",
    description: [
      "Primaire transparent qui crée une micro-rugosité de surface et multiplie l'adhérence de l'encre UV sur les supports lisses et non poreux.",
      "Application au rouleau ou au pistolet, séchage en 20 minutes. Un litre couvre environ 25 m².",
    ],
    specs: [
      { label: "Contenance", value: "1 litre" },
      { label: "Rendement", value: "≈ 25 m²" },
      { label: "Séchage", value: "20 minutes" },
      { label: "Supports", value: "Verre, métal poli, carrelage émaillé, inox" },
    ],
    compatibility: ["Toutes machines"],
    stock: 72,
    leadTime: "Expédition sous 48 h",
  },
];

export function getProduct(slug: string): ShopProduct | undefined {
  return shopProducts.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ShopCategorySlug): ShopProduct[] {
  return shopProducts.filter((product) => product.category === category);
}

export const featuredProducts = shopProducts.filter((product) => product.featured);
