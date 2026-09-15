"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Port du custom element `<use-animate>` du thème Harmony.
 *
 * Thème (assets/global.js, `theme.initWhenVisible` + `class UseAnimate`) :
 * un IntersectionObserver au seuil 0 pose l'attribut `animate` dès que
 * l'élément entre dans la fenêtre, puis se désabonne — l'animation ne joue
 * donc qu'une fois. Les styles correspondants sont dans `globals.css`.
 *
 * `delay` reproduit les cascades du thème, où les blocs successifs d'une
 * section apparaissent décalés.
 */
export function Reveal({
  children,
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: "div" | "section" | "li" | "article" | "span";
  variant?: "fade-up" | "fade";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Pas d'IntersectionObserver (très vieux navigateur, environnement de
    // test) : on affiche le contenu plutôt que de le laisser invisible.
    if (typeof IntersectionObserver === "undefined") {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px 0px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref polymorphe sur un jeu de balises restreint.
      ref={ref}
      data-reveal={variant}
      data-animate={animate ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}

/**
 * Équivalent de `[data-animate-image] use-animate[data-animate=zoom-fade]` :
 * l'image passe de scale(1.2) opacité 0 à scale(1) opacité 1 en 1000ms.
 */
export function RevealImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px 0px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-image=""
      data-animate={animate ? "" : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
