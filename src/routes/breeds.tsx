import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { breeds, purposeLabel, type Purpose } from "@/data/guide";
import { Choice, Frame, PageIntro } from "@/components/ui";

export const Route = createFileRoute("/breeds")({
  head: () => ({ meta: [{ title: "Breeds — Goatstead" }] }),
  component: BreedsPage,
});

const filters: (Purpose | "all")[] = ["all", "dairy", "meat", "fiber", "companion", "clearing"];

function BreedsPage() {
  const [filter, setFilter] = useState<Purpose | "all">("all");

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    setFilter("all");
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "center" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const shown = breeds.filter((breed) => filter === "all" || breed.purposes.includes(filter));

  return (
    <Frame>
      <PageIntro
        kicker="Breeds"
        title="Pick the job, then the goat."
        lede="There is no best breed. There is a goat that milks, one that grows on brush, one that grows mohair, and one that should not live on a grain bucket."
      />
      <div role="radiogroup" aria-label="Filter breeds" className="mt-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Choice
            key={item}
            label={purposeLabel[item]}
            checked={filter === item}
            onClick={() => setFilter(item)}
          />
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {shown.map((breed) => (
          <article key={breed.id} id={breed.id} className="scroll-mt-28 rounded-3xl border border-line bg-surface p-4">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-2xl">{breed.name}</h2>
              <p className="text-sm text-muted">{breed.size}</p>
            </div>
            <p className="mt-1 text-sm text-muted">{breed.weight}</p>
            <dl className="mt-4 grid gap-3 text-sm">
              <div>
                <dt className="font-medium">Climate</dt>
                <dd className="text-muted">{breed.climate}</dd>
              </div>
              <div>
                <dt className="font-medium">Temperament</dt>
                <dd className="text-muted">{breed.temperament}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm">{breed.notes}</p>
            <p className="mt-3 text-sm text-muted">{breed.watch}</p>
            <p className="mt-3 text-xs font-medium text-muted">
              {breed.purposes.map((purpose) => purposeLabel[purpose]).join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </Frame>
  );
}
