import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { startChecks } from "@/data/guide";
import { Button, CheckRow, Choice, Frame, PageIntro } from "@/components/ui";
import { MilkBox } from "@/components/milk-box";
import { useGuide } from "@/lib/store";

export const Route = createFileRoute("/start")({
  head: () => ({ meta: [{ title: "Start a herd — Goatstead" }] }),
  component: StartPage,
});

type Goal = "dairy" | "meat" | "fiber" | "pets" | "clearing";
type Land = "yard" | "small" | "acreage";
type Climate = "cold" | "mild" | "humid" | "dry";

const goals: { id: Goal; label: string }[] = [
  { id: "dairy", label: "Milk" },
  { id: "meat", label: "Meat" },
  { id: "fiber", label: "Fiber" },
  { id: "pets", label: "Companions" },
  { id: "clearing", label: "Clear brush" },
];

const lands: { id: Land; label: string }[] = [
  { id: "yard", label: "A yard" },
  { id: "small", label: "Under 2 acres" },
  { id: "acreage", label: "Room to rotate" },
];

const climates: { id: Climate; label: string }[] = [
  { id: "cold", label: "Cold winters" },
  { id: "mild", label: "Mild" },
  { id: "humid", label: "Hot and humid" },
  { id: "dry", label: "Hot and dry" },
];

function recommend(goal: Goal, land: Land, climate: Climate) {
  const breeds: { id: string; name: string }[] = [];
  const notes: string[] = [];

  if (land === "yard" && goal === "clearing") {
    notes.push(
      "A yard cannot be a clearing business or a brush project. You need acreage of something they can eat, and portable fence. For the yard itself, keep two minis and buy hay.",
    );
  }

  if (goal === "pets" || land === "yard") {
    breeds.push({ id: "nigerian-dwarf", name: "Nigerian Dwarf" }, { id: "pygmy", name: "Pygmy" });
    notes.push(
      "No intact buck in a suburban yard. Bucks stink in rut, crow with their voices, and escape. Wethers or does only for companions. Grain is how pet males die of stones.",
    );
  } else if (goal === "dairy") {
    if (land === "small") breeds.push({ id: "nigerian-dwarf", name: "Nigerian Dwarf" });
    if (climate === "cold" || climate === "mild") breeds.push({ id: "alpine", name: "Alpine" }, { id: "saanen", name: "Saanen" });
    if (climate === "dry" || climate === "humid") breeds.push({ id: "nubian", name: "Nubian" });
    if (climate !== "cold") breeds.push({ id: "lamancha", name: "LaMancha" });
    notes.push("Start with two does from a tested herd, not a bargain buck. Milk volume follows feed, not wishes.");
  } else if (goal === "meat") {
    if (climate === "humid") {
      breeds.push({ id: "kiko", name: "Kiko" }, { id: "spanish", name: "Spanish" });
      notes.push("In humid country, parasite tolerance beats show muscling. A Kiko or Spanish cross often outlives a pure Boer on the same grass.");
    } else {
      breeds.push({ id: "boer", name: "Boer" }, { id: "kiko", name: "Kiko" });
    }
  } else if (goal === "fiber") {
    breeds.push({ id: "angora", name: "Angora" });
    notes.push("Angoras are a shearing project. Cold rain right after the clip is dangerous. They are a poor brush crew.");
    if (climate === "humid" || climate === "cold") {
      notes.push("This climate fights mohair. If fiber is casual, reconsider before you own a wet, matted herd.");
    }
  } else {
    breeds.push({ id: "kiko", name: "Kiko" }, { id: "spanish", name: "Spanish" });
    notes.push(
      "A working herd is wethers or open does, disbudded or polled if you will use electronet. Leave the buck at home. Horns and netting tangle.",
    );
    if (land !== "acreage") {
      notes.push("Under two acres you can run a training paddock, not a summer of client jobs. Rotate hard or you will just make a dirt lot.");
    }
  }

  if (climate === "humid") {
    notes.push("Humid summers are a parasite business. Learn FAMACHA, use fecals, and rest ground. Stocking rate is a health decision.");
  }
  if (climate === "cold") {
    notes.push("Budget a dry wind break and water that stays liquid. Cold is fine. Cold and wet, on kids or fresh shears, is not.");
  }
  if (climate === "dry") {
    notes.push("Shade and hauling water will limit the herd before acres do.");
  }

  notes.push("Quarantine anything new for 30 days. Ask for CAE, CL, and Johne's results when you are buying breeding stock.");

  const seen = new Set<string>();
  const unique = breeds.filter((breed) => {
    if (seen.has(breed.id)) return false;
    seen.add(breed.id);
    return true;
  });

  return { breeds: unique.slice(0, 3), notes };
}

function tagsFor(goal: Goal, land: Land, climate: Climate) {
  const tags = new Set<string>(["all"]);
  if (goal === "dairy") tags.add("dairy");
  if (goal === "meat") tags.add("meat");
  if (goal === "fiber") tags.add("fiber");
  if (goal === "pets") tags.add("companion");
  if (goal === "clearing") tags.add("clearing");
  if (land === "yard") tags.add("yard");
  if (climate === "humid") tags.add("humid");
  if (climate === "cold") tags.add("cold");
  if (climate === "dry") tags.add("dry");
  return tags;
}

function StartPage() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<Goal>("dairy");
  const [land, setLand] = useState<Land>("small");
  const [climate, setClimate] = useState<Climate>("mild");
  const checks = useGuide((state) => state.checks);
  const toggle = useGuide((state) => state.toggle);

  const result = useMemo(() => recommend(goal, land, climate), [goal, land, climate]);
  const tags = useMemo(() => tagsFor(goal, land, climate), [goal, land, climate]);
  const list = startChecks.filter((item) => item.tags.some((tag) => tags.has(tag)));
  const done = list.filter((item) => checks[item.id]).length;

  return (
    <Frame>
      <PageIntro
        kicker="Start"
        title="Get the place ready before the goats."
        lede="Three questions, a short list of breeds that fit, and a checklist you can tick off. It stays in this browser."
      />
      <p className="mt-4 max-w-2xl text-sm text-muted">
        See also Volume 19: Rabbits and Volume 26: Chickens for other small-livestock housing and
        predator-proofing.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-3xl border border-line bg-surface p-4">
          <p className="text-sm font-medium text-muted">
            Step {Math.min(step + 1, 3)} of 3
          </p>
          {step === 0 ? (
            <Question title="What do you want them to do?" value={goal} options={goals} onChange={setGoal} />
          ) : null}
          {step === 1 ? (
            <Question title="What land can they actually use?" value={land} options={lands} onChange={setLand} />
          ) : null}
          {step === 2 || step > 2 ? (
            <Question title="What is the hard season?" value={climate} options={climates} onChange={setClimate} />
          ) : null}
          <div className="mt-4 flex gap-2">
            {step > 0 ? (
              <Button variant="secondary" onClick={() => setStep((value) => Math.max(0, value - 1))}>
                Back
              </Button>
            ) : null}
            {step < 2 ? (
              <Button onClick={() => setStep((value) => value + 1)}>Continue</Button>
            ) : (
              <Button onClick={() => setStep(3)}>{step > 2 ? "Updated" : "See the plan"}</Button>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-line p-4">
          {step < 3 ? (
            <>
              <h2 className="text-xl">The plan lands here</h2>
              <p className="mt-2 text-sm text-muted">
                Answer the three questions. You can change them later; the checklist remembers what you already did.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl">Look first at</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {result.breeds.map((breed) => (
                  <li key={breed.id}>
                    <Link
                      to="/breeds"
                      hash={breed.id}
                      className="inline-flex h-11 items-center rounded-full border border-line-strong px-3 text-sm font-medium hover:bg-surface-2"
                    >
                      {breed.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-3">
                {result.notes.map((note) => (
                  <li key={note} className="text-sm text-muted">
                    {note}
                  </li>
                ))}
              </ul>
              {goal === "clearing" ? (
                <Link
                  to="/clearing"
                  className="press mt-4 inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-ink-fg"
                >
                  Plan the paddock
                </Link>
              ) : null}
            </>
          )}
        </section>
      </div>

      {goal === "dairy" ? (
        <div className="mt-8">
          <MilkBox />
        </div>
      ) : null}

      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-2xl">Setup list</h2>
          <p className="text-sm tabular-nums text-muted">
            {done} of {list.length}
          </p>
        </div>
        <p className="mt-3 text-sm text-muted">
          Read city, county, and HOA rules before you buy goats. Many places limit numbers, ban bucks,
          require setbacks, or treat goats as livestock you cannot keep on a small lot. “They’re pets” is
          not a variance.
        </p>
        <div className="mt-2">
          {list.map((item) => (
            <CheckRow
              key={item.id}
              checked={Boolean(checks[item.id])}
              label={item.label}
              detail={item.detail}
              onChange={() => toggle(item.id)}
            />
          ))}
        </div>
      </section>
    </Frame>
  );
}

function Question<T extends string>({
  title,
  value,
  options,
  onChange,
}: {
  title: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
}) {
  return (
    <div className="mt-3">
      <h2 className="text-xl">{title}</h2>
      <div role="radiogroup" aria-label={title} className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <Choice
            key={option.id}
            label={option.label}
            checked={value === option.id}
            onClick={() => onChange(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
