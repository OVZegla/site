/** FAQ reprise telle quelle de la page d'accueil du thème (section `faq`). */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Comment fonctionne une imprimante murale ?",
    answer:
      "Une imprimante murale déplace son bloc d'impression verticalement pendant que la machine avance horizontalement le long du support. Les têtes déposent l'encre directement sur la surface et la lampe UV la polymérise pendant l'impression. Le visuel est préparé sur ordinateur avant d'être envoyé au logiciel de pilotage.",
  },
  {
    question: "Peut-on faire une démonstration avant l'achat ?",
    answer:
      "Oui. Une démonstration peut être organisée afin de découvrir les machines, observer leur fonctionnement et discuter de votre projet. Les modalités dépendent du modèle et de vos disponibilités ; contactez-nous pour convenir d'un rendez-vous.",
  },
  {
    question: "Sur quels supports peut-on imprimer ?",
    answer:
      "Selon la nature du support et sa préparation : mur peint, plâtre, béton, brique, pierre, bois, verre, métal, carrelage, Dibond, Plexiglas, PVC et autres supports rigides.",
  },
  {
    question: "Quelle est la taille maximale d'impression ?",
    answer:
      "Les machines SYMP'S permettent d'imprimer jusqu'à environ 3,50 m de hauteur selon les modèles et configurations, avec une largeur d'impression illimitée grâce au déplacement horizontal de la machine. La largeur peut être prolongée par l'ajout de sections de rail.",
  },
  {
    question: "L'impression est-elle possible sur un mur irrégulier ?",
    answer:
      "Oui, dans les limites du système de suivi de surface. Les configurations présentées peuvent compenser des variations pouvant atteindre environ 3 cm. Les obstacles, ruptures franches ou reliefs trop importants doivent être identifiés avant l'impression.",
  },
  {
    question: "Quelle est la vitesse d'impression ?",
    answer:
      "La vitesse dépend du mode de qualité, du nombre de passages, des dimensions, du support et de l'utilisation éventuelle du blanc. Pour les modèles présentés, la plage de travail annoncée est généralement comprise entre 1 et 7 m²/h selon les paramètres retenus.",
  },
  {
    question: "Proposez-vous une assistance à distance ?",
    answer:
      "Oui. L'équipe SYMP'S peut intervenir à distance pour observer le comportement de la machine, vérifier certains réglages et vous guider dans les étapes du diagnostic. Une intervention en atelier ou un remplacement de pièce peuvent être proposés lorsque la situation l'exige.",
  },
  {
    question: "Réparez-vous les imprimantes murales d'autres marques ?",
    answer:
      "Oui, après étude préalable. Le diagnostic permet d'évaluer la panne, la disponibilité des pièces et la possibilité d'intervention. Certaines machines doivent être expédiées dans nos locaux pour être contrôlées.",
  },
];
