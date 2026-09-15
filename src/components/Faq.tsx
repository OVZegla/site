"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/data/faq";

/**
 * Accordéon FAQ. Le thème utilise `<details>` ; ici l'état est contrôlé pour
 * pouvoir animer la hauteur et n'ouvrir qu'une question à la fois.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="border-t border-ink-200">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={item.question} className="border-b border-ink-200">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="flex w-full items-start gap-4 py-5 text-left transition hover:text-brand-600"
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid size-6 shrink-0 place-items-center border text-sm transition ${
                    isOpen
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-ink-300 text-ink-500"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
                <span className="font-display text-base font-semibold text-brand-600 sm:text-lg">
                  {item.question}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="pb-6 pl-10 pr-4"
            >
              <p className="text-pretty text-base leading-relaxed text-ink-700">
                {item.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
