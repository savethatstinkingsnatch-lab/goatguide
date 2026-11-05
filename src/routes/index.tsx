import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { topics } from "@/data/guide";
import { Frame } from "@/components/ui";

export const Route = createFileRoute("/")({
  component: Home,
});

const rules = [
  {
    title: "Two is the minimum",
    text: "A lone goat is a welfare problem. Buy a pair, or don't buy the first one.",
  },
  {
    title: "Fence before animals",
    text: "Woven wire or trained hot wire. Barbed wire is how goats get ruined, not how they stay home.",
  },
  {
    title: "Goat mineral, not sheep mineral",
    text: "They need the copper. Sheep mineral will leave them short, and goat mineral can poison sheep.",
  },
  {
    title: "A tight paddock does the work",
    text: "Browse in a small fence clears land. A loose goat just leaves and eats the roses.",
  },
];

function Home() {
  const [query, setQuery] = useState("");
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topics;
    return topics.filter((topic) => `${topic.title} ${topic.text}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <Frame>
      <p className="text-sm font-medium text-muted">Raise them. Put them on the brush.</p>
      <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
        A field guide for keeping goats, and hiring the herd out to clear land.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted">
        What to buy, what to feed, when to call a vet, and how to fence a paddock so the goats eat
        the thicket instead of the neighborhood. Then price that same herd as a job.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/clearing"
          className="press inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-ink-fg"
        >
          Plan a clearing paddock
        </Link>
        <Link
          to="/start"
          className="press inline-flex h-11 items-center rounded-full border border-line-strong bg-surface px-4 text-sm font-medium"
        >
          I'm getting goats
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Link to="/clearing" className="rounded-3xl border border-line bg-surface p-4 hover:bg-surface-2">
          <p className="text-sm font-medium text-muted">On your place</p>
          <h2 className="mt-2 text-2xl">Fence them in and let them clear it</h2>
          <p className="mt-2 text-sm text-muted">
            Herd size, rolls of electronet, water, and how to split the brush into paddocks they can
            actually finish.
          </p>
        </Link>
        <Link
          to="/clearing"
          hash="rent"
          className="rounded-3xl border border-line bg-surface p-4 hover:bg-surface-2"
        >
          <p className="text-sm font-medium text-muted">For other people</p>
          <h2 className="mt-2 text-2xl">Rent the herd out</h2>
          <p className="mt-2 text-sm text-muted">
            Travel, daily rate, fence moves, and a check on whether the quote covers your hours.
            Saved on this device.
          </p>
        </Link>
      </div>

      <div className="mt-10">
        <label className="block max-w-md">
          <span className="text-sm font-medium">Find a topic</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Parasites, fence, kidding, price"
            className="mt-2 h-11 w-full rounded-lg border border-line-strong bg-surface px-3 text-sm"
          />
        </label>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {shown.length === 0 ? (
            <li className="py-4 text-sm text-muted">Nothing matches that. Try fence, milk, or worms.</li>
          ) : (
            shown.map((topic) => (
              <li key={`${topic.href}-${topic.hash ?? ""}`}>
                <Link to={topic.href} hash={topic.hash} className="flex min-h-11 flex-col justify-center py-3">
                  <span className="text-sm font-medium">{topic.title}</span>
                  <span className="text-sm text-muted">{topic.text}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {rules.map((rule) => (
          <article key={rule.title} className="rounded-3xl border border-line p-4">
            <h2 className="text-xl">{rule.title}</h2>
            <p className="mt-2 text-sm text-muted">{rule.text}</p>
          </article>
        ))}
      </div>
    </Frame>
  );
}
