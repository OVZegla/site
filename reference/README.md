# Référence Shopify

`theme_export__symps-fr-myshopify-com-harmony__15SEP2026-1118am.zip` est
l'export du thème **Harmony** de la preview `symps-fr.myshopify.com`
(15/09/2026). Il sert de source de vérité pour la charte, le contenu éditorial
et les animations du site Next.js.

Ce qu'il contient : Liquid, CSS, JS, `config/settings_data.json` (réglages et
textes de l'éditeur de thème) et les templates de page.

**Ce qu'il ne contient pas : aucune image.** Les visuels sont hébergés sur le
CDN Shopify et doivent être récupérés séparément (voir « Reste à faire »).

## Charte reprise

Source : `config/settings_data.json`.

| Réglage | Valeur | Où dans le code |
|---|---|---|
| `colors_accent` / `heading` / `border` / `price` | `#00287E` | `--color-brand-600` |
| `colors_highlight` | `#E4000D` | `--color-flag-600` |
| `colors_sale_price` | `#c0270b` | `--color-flag-700` |
| `colors_keyboard_focus` | `#87adf5` | `--color-focus` |
| `colors_text` | `#000000` | `--color-ink-950` |
| `colors_img_background` | `#18181a` | `--color-ink-900` |
| `type_header_font` | `jost_n6` | `--font-display` |
| `type_body_font` | `figtree_n4` | `--font-sans` |
| `card_corner_radius` | `0` | angles vifs partout |
| `page_width` | `1300` | `container-page` |

Deux nuances de gris ont été volontairement assombries par rapport au thème,
parce qu'elles ne passaient pas le contraste AA sur blanc : `--color-ink-500`
est à `#6a6e76` et non `#767a82`, et les prix barrés utilisent `ink-500` plutôt
que `ink-400` (`#9c9c9c`, soit 2,75:1).

## Animations reprises

Durées du thème (`assets/base.css`) : `--duration-short` 100 ms,
`--duration-default` 250 ms, `--duration-long` 500 ms,
`--duration-animate` 1000 ms, toutes en `ease`.

| Thème | Portage |
|---|---|
| `<use-animate>` + `theme.initWhenVisible` (IntersectionObserver, seuil 0, désabonnement après déclenchement) | `src/components/Reveal.tsx` |
| `[data-animate^=fade-up]` : `opacity 0 → 1`, `translate3d(0, 5rem, 0) → translateZ(0)`, 500 ms ease | `[data-reveal]` dans `globals.css` |
| `@keyframes zoom-fade` : `scale(1.2) → 1`, 1000 ms ease forwards | `RevealImage` + `[data-reveal-image]` |
| Section `dual-scroll` : média `sticky`, panneaux défilants, fondu 0,3 s | `src/components/AccompanimentScroll.tsx` |

Le thème coupe toutes les animations sous `prefers-reduced-motion: reduce` ;
`globals.css` fait de même.

## Contenu repris

- Page d'accueil (`templates/index.json`) : titres, textes, les quatre parcours
  par besoin, les trois piliers, les cinq volets de l'accompagnement, la FAQ
  (`src/lib/data/faq.ts`) et l'adresse de Ruitz.
- Gamme (`templates/page.{opaline,graphite,m1,black,ruby,white,t1000}.json`) :
  positionnement et caractéristiques des sept machines
  (`src/lib/data/printers.ts`).
- Réseaux sociaux et coordonnées : `src/lib/site.ts`.

## Reste à faire

- [ ] **Images.** Aucune n'est dans l'export. Miroiter la preview
      (`wget --mirror --page-requisites --span-hosts --domains=symps-fr.myshopify.com,cdn.shopify.com`)
      ou exporter le CSV produits, qui contient les URL des visuels. Elles
      remplaceront les compositions SVG de `src/components/visuals.tsx`.
- [ ] **Catalogue boutique.** Les encres, pièces et supports du site sont
      encore des références plausibles mais inventées : à remplacer par
      l'export CSV des produits Shopify (titres, prix, SKU, variantes).
- [ ] **Téléphone.** `src/lib/site.ts` porte un numéro fictif ; le thème ne le
      contient pas.
- [ ] **Pages légales.** CGV et mentions légales restent une trame à faire
      relire.
