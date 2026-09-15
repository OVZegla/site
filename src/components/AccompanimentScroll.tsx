"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Port simplifié de la section `dual-scroll` du thème.
 *
 * Thème (assets/section-dual-scroll.js + .css) : la colonne média est en
 * `position: sticky` et les panneaux de texte défilent à côté ; le panneau
 * visible pilote l'image et la couleur de fond, avec une transition
 * `background-color 0.3s ease` et un fondu sur l'image active.
 *
 * Ici le média est remplacé par un panneau de couleur tant que les photos ne
 * sont pas disponibles ; la mécanique de défilement est identique.
 */
export interface AccompanimentPanel {
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

export function AccompanimentScroll({
  panels,
}: {
  panels: AccompanimentPanel[];
}) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActive(index);
          }
        }
      },
      // Bande étroite au centre de l'écran : le panneau actif est celui qu'on lit.
      { rootMargin: "-45% 0px -45% 0px" },
    );

    for (const element of refs.current) {
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-brand-600 text-white">
      <div className="container-page grid gap-0 lg:grid-cols-2">
        <div className="py-16 lg:py-24">
          {panels.map((panel, index) => (
            <div
              key={panel.title}
              ref={(element) => {
                refs.current[index] = element;
              }}
              className={`min-h-[60vh] max-w-xl py-10 transition-opacity duration-500 lg:min-h-[70vh] ${
                active === index ? "opacity-100" : "lg:opacity-40"
              }`}
            >
              <span className="font-display text-sm font-semibold text-brand-200">
                {String(index + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
                {panel.title}
              </h3>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-brand-100">
                {panel.description}
              </p>
              {panel.cta && (
                <Link
                  href={panel.cta.href}
                  className="btn-type mt-8 inline-block border border-white bg-white px-7 py-3.5 text-sm text-brand-600 transition hover:bg-transparent hover:text-white"
                >
                  {panel.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 flex h-[70vh] items-end overflow-hidden">
            {panels.map((panel, index) => (
              <div
                key={panel.title}
                aria-hidden="true"
                className={`absolute inset-0 flex items-end bg-brand-800 p-10 transition-opacity duration-500 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="font-display text-7xl font-semibold text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
