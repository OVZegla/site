"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { CartIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { useCart } from "@/lib/cart";
import { siteConfig } from "@/lib/site";

const navigation = [
  { href: "/imprimantes", label: "Imprimantes" },
  { href: "/boutique", label: "Boutique" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

function CartBadge() {
  const { totals, ready } = useCart();
  const count = ready ? totals.itemCount : 0;

  return (
    <Link
      href="/panier"
      className="relative inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-800 transition hover:border-ink-300 hover:bg-ink-50"
    >
      <CartIcon className="size-4.5" />
      <span className="hidden sm:inline">Panier</span>
      {count > 0 && (
        <span
          className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-uv-600 text-[0.6875rem] font-bold text-white"
          aria-hidden="true"
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
      <span className="sr-only">
        {count === 0 ? "Panier vide" : `${count} article${count > 1 ? "s" : ""} au panier`}
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-ink-50/85 backdrop-blur-md">
      <div className="hidden bg-ink-950 py-2 text-xs text-ink-300 md:block">
        <div className="container-page flex items-center justify-between">
          <p>
            Pièces détachées et encres en stock —{" "}
            <span className="text-white">expédition sous 24 h</span>
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
            <span aria-hidden="true" className="text-ink-600">
              |
            </span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-ink-100 text-ink-900"
                        : "text-ink-600 hover:bg-ink-100/70 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CartBadge />
          <Link
            href="/devis"
            className="hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-uv-600 sm:inline-flex"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-800 lg:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            <span className="sr-only">
              {open ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-ink-200 bg-ink-50 lg:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-6">
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-800"
              >
                <CloseIcon className="size-5" />
                <span className="sr-only">Fermer le menu</span>
              </button>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3.5 text-lg font-medium text-ink-900 transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/devis"
              className="mt-4 rounded-full bg-ink-900 px-5 py-3.5 text-center text-base font-semibold text-white"
            >
              Demander un devis
            </Link>
            <div className="mt-6 space-y-1 border-t border-ink-200 pt-6 text-sm text-ink-600">
              <a href={`tel:${siteConfig.phoneHref}`} className="block py-1.5">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block py-1.5">
                {siteConfig.email}
              </a>
              <p className="pt-1.5">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
