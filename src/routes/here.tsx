import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, PageIntro } from "@/components/ui";

export const Route = createFileRoute("/here")({
  head: () => ({ meta: [{ title: "Start here — Goats: Goatstead" }] }),
  component: HerePage,
});

const steps = [
  "Check local rules.",
  "Buy at least two goats (they are herd animals).",
  "Finish woven + electric fence before they arrive.",
  "Quarantine and ask for CAE/CL/Johne’s tests.",
  "Feed hay and goat mineral; almost no grain for wethers.",
  "Put CDT and FAMACHA on the calendar.",
  "Find a goat vet before kidding season.",
];

function HerePage() {
  return (
    <Frame>
      <PageIntro
        kicker="Start here"
        title="New to goats?"
        lede="Seven steps, in order. The rest of this guide is free to read. Nothing here is locked."
      />
      <ol className="mt-8 max-w-2xl space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm">
            <span className="w-6 shrink-0 tabular-nums text-muted">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/start"
          className="press inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-ink-fg"
        >
          Open the setup list
        </Link>
        <Link
          to="/glossary"
          className="press inline-flex h-11 items-center rounded-full border border-line-strong bg-surface px-4 text-sm font-medium"
        >
          Glossary
        </Link>
      </div>
    </Frame>
  );
}
