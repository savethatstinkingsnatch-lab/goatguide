import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Brush, Shape, Terrain } from "@/lib/clearing";

export type SavedQuote = {
  id: string;
  client: string;
  created: number;
  low: number;
  high: number;
  days: number;
  acres: number;
  brush: Brush;
  terrain: Terrain;
  shape: Shape;
  herd: number;
  miles: number;
  ratePerGoat: number;
  mobilizationBase: number;
  perMile: number;
  wage: number;
  waterOnSite: boolean;
  secondPass: boolean;
  ownsFence: boolean;
};

type GuideState = {
  ready: boolean;
  checks: Record<string, boolean>;
  quotes: SavedQuote[];
  toggle: (id: string) => void;
  saveQuote: (quote: SavedQuote) => void;
  removeQuote: (id: string) => void;
};

const memoryStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useGuide = create<GuideState>()(
  persist(
    (set) => ({
      ready: false,
      checks: {},
      quotes: [],
      toggle: (id) =>
        set((state) => ({
          checks: { ...state.checks, [id]: !state.checks[id] },
        })),
      saveQuote: (quote) =>
        set((state) => ({
          quotes: [quote, ...state.quotes.filter((item) => item.id !== quote.id)].slice(0, 12),
        })),
      removeQuote: (id) =>
        set((state) => ({
          quotes: state.quotes.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "goatstead-v1",
      skipHydration: true,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (state) => ({ checks: state.checks, quotes: state.quotes }),
    },
  ),
);

export async function rehydrateGuide() {
  await useGuide.persist.rehydrate();
  useGuide.setState({ ready: true });
}
