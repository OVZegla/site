"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct } from "@/lib/data/shop";
import { computeTotals, lineKey, resolveCart, type CartTotals } from "@/lib/pricing";
import type { CartLine, ResolvedCartLine } from "@/lib/types";

const STORAGE_KEY = "symps.cart.v1";

interface CartContextValue {
  lines: ResolvedCartLine[];
  totals: CartTotals;
  /** `true` tant que le panier stocké n'a pas été relu : évite le flash d'hydratation. */
  ready: boolean;
  add: (slug: string, variantId?: string, quantity?: number) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((entry): CartLine[] => {
      if (typeof entry !== "object" || entry === null) return [];
      const { slug, variantId, quantity } = entry as Record<string, unknown>;
      if (typeof slug !== "string" || typeof quantity !== "number") return [];
      return [
        {
          slug,
          variantId: typeof variantId === "string" ? variantId : undefined,
          quantity,
        },
      ];
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(readStorage());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Stockage indisponible (navigation privée, quota) : le panier reste en mémoire.
    }
  }, [lines, ready]);

  const add = useCallback((slug: string, variantId?: string, quantity = 1) => {
    const product = getProduct(slug);
    // Garde-fou central : seuls les articles du catalogue e-commerce entrent au
    // panier. Les imprimantes (mode `quote`) ne sont pas dans `shopProducts`,
    // donc `getProduct` renvoie `undefined` et l'ajout est ignoré.
    if (!product || product.mode !== "buy") return;

    setLines((current) => {
      const index = current.findIndex(
        (line) => line.slug === slug && line.variantId === variantId,
      );
      if (index === -1) {
        return [...current, { slug, variantId, quantity }];
      }
      const next = [...current];
      next[index] = {
        ...next[index],
        quantity: Math.min(99, next[index].quantity + quantity),
      };
      return next;
    });
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setLines((current) =>
      quantity <= 0
        ? current.filter((line) => lineKey(line.slug, line.variantId) !== key)
        : current.map((line) =>
            lineKey(line.slug, line.variantId) === key
              ? { ...line, quantity: Math.min(99, quantity) }
              : line,
          ),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setLines((current) =>
      current.filter((line) => lineKey(line.slug, line.variantId) !== key),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const resolved = useMemo(() => resolveCart(lines), [lines]);
  const totals = useMemo(() => computeTotals(resolved), [resolved]);

  const value = useMemo(
    () => ({ lines: resolved, totals, ready, add, setQuantity, remove, clear }),
    [resolved, totals, ready, add, setQuantity, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur de <CartProvider>");
  }
  return context;
}
