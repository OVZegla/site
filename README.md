# SYMP'S — site e-commerce

Site vitrine et boutique en ligne pour SYMP'S : imprimantes murales et sol,
encres UV, pièces détachées et supports d'impression.

## Le principe : deux parcours étanches

C'est la règle structurante du site, appliquée dans le code et pas seulement
dans le contenu.

| | Imprimantes | Encres, pièces, supports |
|---|---|---|
| Mode | `quote` | `buy` |
| Données | `src/lib/data/printers.ts` | `src/lib/data/shop.ts` |
| Parcours | Demande de devis | Panier + Stripe Checkout |
| Prix affiché | Aucun | Prix TTC |
| JSON-LD | `Product` **sans** `offers` | `Product` avec `offers` |

Une imprimante ne peut pas être achetée en ligne, et cela ne repose pas sur
l'absence d'un bouton :

- les machines ne figurent pas dans `shopProducts` ;
- `cart.add()` passe par `getProduct()`, qui ne connaît que le catalogue
  e-commerce, et ignore tout slug inconnu ;
- `/api/checkout` résout à nouveau chaque ligne côté serveur via `resolveCart()`
  et rejette une requête ne contenant aucun article vendable.

Une requête forgée du type `{"lines":[{"slug":"opaline","quantity":1}]}` reçoit
donc un `400`.

## Sécurité des prix

Le panier ne stocke que des identifiants (`slug`, `variantId`, `quantity`).
Les montants sont systématiquement recalculés à partir du catalogue, à
l'affichage comme à la création de la session Stripe. Un prix envoyé par le
client est purement et simplement ignoré.

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables
npm run dev                  # http://localhost:3000
```

Scripts : `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Variables d'environnement

| Variable | Rôle | Sans elle |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URLs canoniques, sitemap, retours Stripe | Valeur par défaut `https://www.symps.fr` |
| `STRIPE_SECRET_KEY` | Paiement en ligne | Le site fonctionne ; le paiement affiche un message explicite |
| `QUOTE_NOTIFICATION_EMAIL` | Destinataire des demandes de devis | Retombe sur `contact@symps.fr` |
| `RESEND_API_KEY` | Envoi réel des e-mails de devis | La demande est tracée dans les logs serveur |

Le site est donc déployable et entièrement navigable avant même l'ouverture du
compte Stripe.

## Structure

```
src/
  app/
    page.tsx                              accueil
    imprimantes/[slug]/                   gamme + fiches machine (devis)
    boutique/[category]/[slug]/           catalogue + fiches produit (achat)
    panier/, commande/confirmation/       tunnel d'achat
    devis/, contact/, services/, a-propos/
    cgv/, mentions-legales/, livraison/
    api/checkout/                         session Stripe Checkout
    api/quote/                            demandes de devis
    sitemap.ts, robots.ts, icon.svg
  components/                             UI, cartes, formulaires
  lib/
    data/printers.ts                      catalogue machines (mode quote)
    data/shop.ts                          catalogue e-commerce (mode buy)
    cart.tsx                              panier (contexte + localStorage)
    pricing.ts                            résolution et totaux
    site.ts                               coordonnées, seuils, TVA
```

## Faire évoluer le catalogue

Tout passe par les deux fichiers de `src/lib/data/`. Ajouter une entrée suffit :
les pages, le sitemap et les données structurées sont générés à partir de là.

- **Une machine** → un objet dans `printers` (`mode: "quote"`).
- **Un article vendable** → un objet dans `shopProducts` (`mode: "buy"`,
  `price` en **centimes TTC**, `category` parmi `encres`, `pieces-detachees`,
  `supports`).
- **Des déclinaisons** (couleur, format) → un tableau `variants`, avec
  `priceDelta` en centimes. Un produit à variantes exige un choix explicite
  avant l'ajout au panier.

Seuils commerciaux (franco de port, forfait de livraison, TVA) :
`src/lib/site.ts`.

## Visuels produits

Les fiches utilisent des compositions SVG générées (`src/components/visuals.tsx`),
déterministes à partir du slug. Pour passer aux photos réelles, remplacer ces
composants par `next/image` : aucune autre partie du site n'a besoin de changer.

## Avant la mise en ligne

- [ ] Remplacer les coordonnées de `src/lib/site.ts` (adresse, téléphone, e-mail).
- [ ] Compléter les mentions légales et les CGV — la trame actuelle doit être
      relue par un conseil juridique.
- [ ] Renseigner `STRIPE_SECRET_KEY` et vérifier une commande de bout en bout.
- [ ] Brancher l'envoi d'e-mails (`RESEND_API_KEY`) et tester une demande de devis.
- [ ] Remplacer les visuels générés par les photos produits.
