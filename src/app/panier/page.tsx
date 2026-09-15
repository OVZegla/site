import type { Metadata } from "next";
import { CartView } from "@/components/CartView";
import { Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mon panier",
  description:
    "Récapitulatif de votre commande d'encres, pièces détachées et supports d'impression.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <div className="container-page py-10 lg:py-14">
      <Breadcrumbs items={[{ href: "/boutique", label: "Boutique" }, { label: "Panier" }]} />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        Mon panier
      </h1>
      <CartView />
    </div>
  );
}
