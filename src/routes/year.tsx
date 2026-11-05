import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { seasons } from "@/data/guide";
import { Card, FieldLabel, Frame, PageIntro, TextInput } from "@/components/ui";

export const Route = createFileRoute("/year")({
  head: () => ({ meta: [{ title: "The year — Goatstead" }] }),
  component: YearPage,
});

function addDays(iso: string, days: number) {
  const date = new Date(`${iso}T12:00:00`);
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function YearPage() {
  const [bred, setBred] = useState("");
  const due = useMemo(() => {
    if (!bred) return null;
    const parsed = new Date(`${bred}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return null;
    return { early: addDays(bred, 145), peak: addDays(bred, 150), late: addDays(bred, 155) };
  }, [bred]);

  return (
    <Frame>
      <PageIntro
        kicker="Year"
        title="The work moves with the light."
        lede="Most dairy goats breed as days shorten and kid about five months later. Brush control, worms, and hay all have a season too. Miss the window and you spend money catching up."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {seasons.map((season) => (
          <Card key={season.id}>
            <h2 className="text-2xl">{season.name}</h2>
            <ul className="mt-3 space-y-2">
              {season.points.map((point) => (
                <li key={point} className="text-sm text-muted">
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="mt-4">
        <h2 className="text-xl">Kidding window</h2>
        <p className="mt-2 text-sm text-muted">
          Count about 150 days from a standing breeding, with a window from 145 to 155. Write the buck’s date down. Memory is a bad record.
        </p>
        <div className="mt-4 max-w-xs">
          <FieldLabel label="Date bred">
            <TextInput type="date" value={bred} onChange={(event) => setBred(event.target.value)} />
          </FieldLabel>
        </div>
        {due ? (
          <dl className="mt-4 grid gap-3 border-t border-line pt-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-muted">Early</dt>
              <dd className="text-sm font-medium tabular-nums">{due.early}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Most likely</dt>
              <dd className="font-display text-xl tabular-nums">{due.peak}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Late</dt>
              <dd className="text-sm font-medium tabular-nums">{due.late}</dd>
            </div>
          </dl>
        ) : null}
      </Card>
    </Frame>
  );
}
