import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { rehydrateGuide } from "@/lib/store";

const NAV = [
  { href: "/", label: "Guide" },
  { href: "/start", label: "Start" },
  { href: "/breeds", label: "Breeds" },
  { href: "/care", label: "Care" },
  { href: "/health", label: "Health" },
  { href: "/year", label: "Year" },
  { href: "/clearing", label: "Clearing" },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    void rehydrateGuide();
  }, []);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line bg-bg">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 pt-3">
          <Link to="/" className="shrink-0 rounded-md">
            <span className="block font-display text-xl leading-none">Goatstead</span>
            <span className="mt-1 block text-xs font-medium text-muted">Field guide</span>
          </Link>
        </div>
        <nav aria-label="Guide" className="mx-auto flex w-full max-w-5xl gap-1 overflow-x-auto px-2">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex h-11 shrink-0 items-center border-b-2 px-3 text-sm font-medium",
                  active ? "border-ink text-fg" : "border-transparent text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
      <footer className="border-t border-line">
        <p className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted">
          Planning notes for keepers, not veterinary, legal, or insurance advice. Confirm illness, stocking,
          and any contract with a goat vet and someone local who knows livestock law.
        </p>
      </footer>
    </div>
  );
}
