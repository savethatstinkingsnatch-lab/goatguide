import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { issues, symptoms, urgencyLabel, type Urgency } from "@/data/guide";
import { cn } from "@/lib/cn";
import { Frame, Note, PageIntro } from "@/components/ui";

export const Route = createFileRoute("/health")({
  head: () => ({ meta: [{ title: "Health — Goatstead" }] }),
  component: HealthPage,
});

const rank: Record<Urgency, number> = { emergency: 0, today: 1, watch: 2 };

function HealthPage() {
  const [picked, setPicked] = useState<string[]>([]);

  const matches = useMemo(() => {
    if (picked.length === 0) return [];
    return issues
      .map((issue) => ({
        issue,
        score: issue.symptoms.filter((symptom) => picked.includes(symptom)).length,
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => rank[a.issue.urgency] - rank[b.issue.urgency] || b.score - a.score);
  }, [picked]);

  function toggle(id: string) {
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <Frame>
      <PageIntro
        kicker="Health"
        title="How fast this needs a vet."
        lede="Match what you see to problems keepers actually meet. This sorts urgency. It does not diagnose, dose, or replace someone who has examined the goat."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-3xl border border-line bg-surface p-4">
          <h2 className="text-xl">What are you seeing?</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {symptoms.map((symptom) => {
              const on = picked.includes(symptom.id);
              return (
                <button
                  key={symptom.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(symptom.id)}
                  className={cn(
                    "press inline-flex min-h-11 items-center rounded-full px-3 text-left text-sm font-medium",
                    on ? "bg-ink text-ink-fg" : "border border-line-strong bg-bg text-fg",
                  )}
                >
                  {symptom.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-line p-4">
          <h2 className="text-xl">Possible matches</h2>
          {matches.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              Pick one or more signs. Emergencies rise to the top. A goat that is down, blocked, bloated, or stuck in labor does not wait on a checklist.
            </p>
          ) : (
            <ul className="mt-3 space-y-4">
              {matches.map(({ issue }) => (
                <li key={issue.id} className="border-b border-line pb-4 last:border-b-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg">{issue.name}</h3>
                    <span
                      className={cn(
                        "shrink-0 text-xs font-medium",
                        issue.urgency === "emergency" && "text-danger",
                        issue.urgency === "today" && "text-warn",
                        issue.urgency === "watch" && "text-good",
                      )}
                    >
                      {urgencyLabel[issue.urgency]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{issue.summary}</p>
                  <p className="mt-2 text-sm">{issue.steps}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl">Keep these on the shelf in your head</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {issues.map((issue) => (
            <details key={issue.id} className="group py-1">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 py-2">
                <span className="text-sm font-medium">{issue.name}</span>
                <span className="text-xs font-medium text-muted">{urgencyLabel[issue.urgency]}</span>
              </summary>
              <p className="pb-3 text-sm text-muted">{issue.summary}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-6">
        <Note title="Biosecurity is cheaper than a closed herd test later">
          <p>
            CAE, CL, and Johne’s move in with pretty goats. Quarantine a month. Don’t share needles, tattoo ink, or a draining abscess with the main pen. Milk from a CAE-positive doe should not raise kids if you are trying to stay clean.
          </p>
        </Note>
      </div>
    </Frame>
  );
}
