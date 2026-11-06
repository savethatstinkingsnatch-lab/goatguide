import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { rehydrateGuide } from "@/lib/store";

const NAV = [
  { href: "/here", label: "Start here" },
  { href: "/", label: "Guide" },
  { href: "/start", label: "Start" },
  { href: "/breeds", label: "Breeds" },
  { href: "/care", label: "Care" },
  { href: "/health", label: "Health" },
  { href: "/year", label: "Year" },
  { href: "/clearing", label: "Clearing" },
  { href: "/glossary", label: "Glossary" },
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
          <Link to="/" className="block max-w-xl rounded-md pb-2">
            <span className="block font-display text-xl leading-none">Goatstead</span>
            <span className="mt-1 block text-xs font-medium leading-snug text-muted">
              The Education Revolution Pocket Guide, Volume 27: Goats
            </span>
            <span className="block text-xs leading-snug text-muted">by Blue and the Awesome Dudes</span>
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
          and any contract with a goat vet and someone local who knows livestock law. Blue and the Awesome
          Dudes are not responsible for illness, injury, escape, citations, or herd loss. Part of The
          Education Revolution pocket guide series. Privacy: This guide does not collect your name, email, or
          any personal information. Your checklist marks are saved only on your own device.
        </p>
      </footer>
    </div>
  );
}
