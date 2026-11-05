import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  acresText,
  money,
  planClearing,
  type Brush,
  type Shape,
  type Terrain,
} from "@/lib/clearing";
import { useGuide, type SavedQuote } from "@/lib/store";
import { businessChecks, contractPoints, fenceSteps, plants } from "@/data/guide";
import { Button, Card, CheckRow, Choice, FieldLabel, Frame, Note, PageIntro, TextInput } from "@/components/ui";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/clearing")({
  head: () => ({ meta: [{ title: "Clearing and hire-out — Goatstead" }] }),
  component: ClearingPage,
});

const brushes: { id: Brush; label: string; detail: string }[] = [
  { id: "light", label: "Light", detail: "Tall weeds, scattered briars, saplings you can see through." },
  { id: "moderate", label: "Mixed", detail: "Vines, patches of cane or bramble, and brush you have to push into." },
  { id: "heavy", label: "Thicket", detail: "Blackberry, kudzu, or rose dense enough to hide the ground." },
];

const terrains: { id: Terrain; label: string }[] = [
  { id: "easy", label: "Flat access" },
  { id: "mixed", label: "Some slope" },
  { id: "steep", label: "Steep or rough" },
];

const shapes: { id: Shape; label: string }[] = [
  { id: "square", label: "Squarish" },
  { id: "long", label: "Long" },
  { id: "irregular", label: "Irregular" },
];

function ClearingPage() {
  const [mode, setMode] = useState<"land" | "rent">("land");
  const [acres, setAcres] = useState("1");
  const [brush, setBrush] = useState<Brush>("moderate");
  const [terrain, setTerrain] = useState<Terrain>("mixed");
  const [shape, setShape] = useState<Shape>("irregular");
  const [herd, setHerd] = useState("12");
  const [miles, setMiles] = useState("15");
  const [client, setClient] = useState("");
  const [rate, setRate] = useState("4.5");
  const [mob, setMob] = useState("200");
  const [perMile, setPerMile] = useState("2.5");
  const [wage, setWage] = useState("28");
  const [waterOnSite, setWaterOnSite] = useState(true);
  const [secondPass, setSecondPass] = useState(false);
  const [ownsFence, setOwnsFence] = useState(true);
  const [savedNote, setSavedNote] = useState("");

  const quotes = useGuide((state) => state.quotes);
  const saveQuote = useGuide((state) => state.saveQuote);
  const removeQuote = useGuide((state) => state.removeQuote);
  const checks = useGuide((state) => state.checks);
  const toggle = useGuide((state) => state.toggle);

  useEffect(() => {
    if (window.location.hash === "#rent") setMode("rent");
  }, []);

  const forHire = mode === "rent";
  const plan = useMemo(
    () =>
      planClearing({
        acres: Number(acres),
        brush,
        terrain,
        shape,
        herd: Number(herd),
        miles: forHire ? Number(miles) : 0,
        ratePerGoat: Number(rate),
        mobilizationBase: Number(mob),
        perMile: Number(perMile),
        wage: Number(wage),
        waterOnSite,
        secondPass: forHire && secondPass,
        forHire,
        ownsFence,
      }),
    [acres, brush, terrain, shape, herd, miles, rate, mob, perMile, wage, waterOnSite, secondPass, forHire, ownsFence],
  );

  function loadQuote(quote: SavedQuote) {
    setMode("rent");
    setAcres(String(quote.acres));
    setBrush(quote.brush);
    setTerrain(quote.terrain);
    setShape(quote.shape);
    setHerd(String(quote.herd));
    setMiles(String(quote.miles));
    setClient(quote.client);
    setRate(String(quote.ratePerGoat));
    setMob(String(quote.mobilizationBase));
    setPerMile(String(quote.perMile));
    setWage(String(quote.wage));
    setWaterOnSite(quote.waterOnSite);
    setSecondPass(quote.secondPass);
    setOwnsFence(quote.ownsFence);
    setSavedNote(`Loaded ${quote.client}.`);
    document.getElementById("planner")?.scrollIntoView({ block: "start" });
  }

  function onSave() {
    const name = client.trim() || "Untitled job";
    saveQuote({
      id: crypto.randomUUID(),
      client: name,
      created: Date.now(),
      low: plan.low,
      high: plan.high,
      days: plan.days,
      acres: plan.acres,
      brush,
      terrain,
      shape,
      herd: plan.herd,
      miles: Number(miles) || 0,
      ratePerGoat: Number(rate) || 0,
      mobilizationBase: Number(mob) || 0,
      perMile: Number(perMile) || 0,
      wage: Number(wage) || 0,
      waterOnSite,
      secondPass,
      ownsFence,
    });
    setSavedNote(`Saved “${name}” on this device.`);
  }

  const brushDetail = brushes.find((item) => item.id === brush)?.detail;
  const done = businessChecks.filter((item) => checks[item.id]).length;

  return (
    <Frame>
      <PageIntro
        kicker="Clearing"
        title="Fence a piece. Let them eat it. Move the fence."
        lede="Goats clear land by browsing, not by grazing like sheep. A small, hot paddock forces them onto the brush. When that patch is worked, you pick the net up and do the next one — on your ground, or on a client’s."
      />

      <div id="rent" className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Whose land">
        <Choice label="My land" checked={mode === "land"} onClick={() => setMode("land")} />
        <Choice label="Rent the herd out" checked={mode === "rent"} onClick={() => setMode("rent")} />
      </div>

      <div id="planner" className="mt-4 grid scroll-mt-28 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card>
          <h2 className="text-xl">{forHire ? "The job" : "This paddock project"}</h2>
          <div className="mt-4 grid gap-4">
            {forHire ? (
              <FieldLabel label="Client" hint="Only stored in this browser">
                <TextInput value={client} onChange={(event) => setClient(event.target.value)} placeholder="Riverside lot" />
              </FieldLabel>
            ) : null}
            <FieldLabel label="Acres of brush" hint="The whole area you want worked, not the whole farm">
              <TextInput inputMode="decimal" value={acres} onChange={(event) => setAcres(event.target.value)} />
            </FieldLabel>
            <div>
              <p className="text-sm font-medium">Brush</p>
              <div role="radiogroup" aria-label="Brush" className="mt-2 flex flex-wrap gap-2">
                {brushes.map((item) => (
                  <Choice key={item.id} label={item.label} checked={brush === item.id} onClick={() => setBrush(item.id)} />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted">{brushDetail}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Ground</p>
              <div role="radiogroup" aria-label="Ground" className="mt-2 flex flex-wrap gap-2">
                {terrains.map((item) => (
                  <Choice
                    key={item.id}
                    label={item.label}
                    checked={terrain === item.id}
                    onClick={() => setTerrain(item.id)}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Paddock shape</p>
              <div role="radiogroup" aria-label="Shape" className="mt-2 flex flex-wrap gap-2">
                {shapes.map((item) => (
                  <Choice key={item.id} label={item.label} checked={shape === item.id} onClick={() => setShape(item.id)} />
                ))}
              </div>
            </div>
            <FieldLabel label="Goats you will put in" hint="Wethers or open does. Leave bucks and heavily pregnant does at home.">
              <TextInput inputMode="numeric" value={herd} onChange={(event) => setHerd(event.target.value)} />
            </FieldLabel>
            <label className="flex min-h-11 items-center gap-3 text-sm">
              <input
                type="checkbox"
                className="size-4 accent-ink"
                checked={waterOnSite}
                onChange={(event) => setWaterOnSite(event.target.checked)}
              />
              Water is already on the site
            </label>
            {forHire ? (
              <>
                <FieldLabel label="Miles from your place" hint="One way">
                  <TextInput inputMode="decimal" value={miles} onChange={(event) => setMiles(event.target.value)} />
                </FieldLabel>
                <label className="flex min-h-11 items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="size-4 accent-ink"
                    checked={secondPass}
                    onChange={(event) => setSecondPass(event.target.checked)}
                  />
                  Include a resprout visit in the quote
                </label>
                <label className="flex min-h-11 items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="size-4 accent-ink"
                    checked={ownsFence}
                    onChange={(event) => setOwnsFence(event.target.checked)}
                  />
                  I already own the netting and energizer
                </label>
                <details className="rounded-xl border border-line p-3">
                  <summary className="flex min-h-11 cursor-pointer items-center text-sm font-medium">
                    Your rates
                  </summary>
                  <div className="grid gap-3 pb-2">
                    <FieldLabel label="Dollars per goat per day">
                      <TextInput inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} />
                    </FieldLabel>
                    <FieldLabel label="Mobilization, before mileage">
                      <TextInput inputMode="decimal" value={mob} onChange={(event) => setMob(event.target.value)} />
                    </FieldLabel>
                    <FieldLabel label="Dollars per mile, one way, charged both ways">
                      <TextInput inputMode="decimal" value={perMile} onChange={(event) => setPerMile(event.target.value)} />
                    </FieldLabel>
                    <FieldLabel label="What your hour is worth">
                      <TextInput inputMode="decimal" value={wage} onChange={(event) => setWage(event.target.value)} />
                    </FieldLabel>
                  </div>
                </details>
              </>
            ) : null}
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <p className="text-sm font-medium text-muted">Work order</p>
            <h2 className="mt-1 text-2xl">
              {plan.paddocks === 1 ? "One paddock" : `${plan.paddocks} paddocks, same net`}
            </h2>
            <PaddockFigure
              acres={acresText(plan.acresPer)}
              rolls={plan.rolls}
              side={plan.side}
              shape={shape}
            />
            <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2 text-sm">
              <dt className="text-muted">Goat-days to defoliate</dt>
              <dd className="tabular-nums">{plan.goatDays.toLocaleString("en-US")}</dd>
              <dt className="text-muted">Days the herd is on it</dt>
              <dd className="tabular-nums">{plan.days}</dd>
              <dt className="text-muted">Days inside each paddock</dt>
              <dd className="tabular-nums">{plan.daysEach}</dd>
              <dt className="text-muted">Electronet, 164 ft rolls</dt>
              <dd className="tabular-nums">{plan.rolls}</dd>
              <dt className="text-muted">Perimeter of one paddock</dt>
              <dd className="tabular-nums">{plan.perimeter.toLocaleString("en-US")} ft</dd>
              <dt className="text-muted">Energizer, if the fence line is clean</dt>
              <dd>{plan.joule}</dd>
              <dt className="text-muted">Water to plan on</dt>
              <dd className="tabular-nums">{plan.waterGal} gal/day</dd>
              <dt className="text-muted">Hay backup</dt>
              <dd className="tabular-nums">{plan.hayLb} lb/day</dd>
            </dl>
            <p className="mt-4 text-sm text-muted">
              Planning rate for this brush and slope: {plan.gdPerAcre} goat-days per acre. A week on site, instead of {plan.days} days, would want about {plan.herdForWeek} goats.
            </p>
            {plan.days > 14 ? (
              <p className="mt-2 text-sm">
                This herd will be there a long time. Clients and neighbors get tired of that, and bored goats test fences. More animals, or less acreage per visit.
              </p>
            ) : null}
          </Card>

          {forHire ? (
            <Card>
              <p className="text-sm font-medium text-muted">Quote range</p>
              <p className="mt-1 font-display text-3xl tabular-nums">
                {money(plan.low)}–{money(plan.high)}
              </p>
              <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2 text-sm">
                <dt className="text-muted">Mobilization and travel</dt>
                <dd className="tabular-nums">{money(plan.mobilization)}</dd>
                <dt className="text-muted">Herd days</dt>
                <dd className="tabular-nums">
                  {money(plan.dayCharge)} × {plan.days}
                </dd>
                {plan.moveFee > 0 ? (
                  <>
                    <dt className="text-muted">Moves between paddocks</dt>
                    <dd className="tabular-nums">{money(plan.moveFee)}</dd>
                  </>
                ) : null}
                {plan.second > 0 ? (
                  <>
                    <dt className="text-muted">Resprout visit</dt>
                    <dd className="tabular-nums">{money(plan.second)}</dd>
                  </>
                ) : null}
                <dt className="text-muted">Your time on this job</dt>
                <dd className="tabular-nums">{plan.ownHours} hr</dd>
                <dt className="text-muted">Time, wear, fuel</dt>
                <dd className="tabular-nums">{money(plan.ownCost)}</dd>
                <dt className="text-muted">Left after costs, low quote</dt>
                <dd className={cn("tabular-nums", plan.contribution < 0 && "text-danger")}>
                  {money(plan.contribution)}
                </dd>
              </dl>
              <p className="mt-3 text-sm text-muted">
                {plan.contribution < 0
                  ? "The low end does not cover the hours and wear you entered. Raise the goat-day rate or mobilization before you send this."
                  : "The low end still covers the hours, fence wear, and fuel entered above. The high end is room for access you have not seen yet."}
              </p>
              {!ownsFence ? (
                <p className="mt-2 text-sm text-muted">
                  Gear to buy before this job can happen: about {money(plan.gearLow)}–{money(plan.gearHigh)} for netting and an energizer. That is startup, not something one invoice should pretend to refund.
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button onClick={onSave}>Save quote</Button>
              </div>
              {savedNote ? <p className="mt-2 text-sm text-muted">{savedNote}</p> : null}
            </Card>
          ) : (
            <Card>
              <h2 className="text-xl">If you hired it instead</h2>
              <p className="mt-2 font-display text-3xl tabular-nums">
                {money(plan.low)}–{money(plan.high)}
              </p>
              <p className="mt-3 text-sm text-muted">
                Same acres, at {money(Number(rate) || 0)} per goat-day plus a {money(Number(mob) || 0)} mobilization and no travel. Doing it yourself is about {plan.ownHours} hours and {money(plan.ownCost)} in time and wear if your hour is worth {money(Number(wage) || 0)}. Open “Rent the herd out” to change those rates.
              </p>
            </Card>
          )}
        </div>
      </div>

      {forHire && quotes.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-2xl">Saved quotes</h2>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {quotes.map((quote) => (
              <li key={quote.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-medium">{quote.client}</p>
                  <p className="text-sm text-muted tabular-nums">
                    {acresText(quote.acres)} acres · {quote.days} days · {money(quote.low)}–{money(quote.high)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => loadQuote(quote)}>
                    Load
                  </Button>
                  <Button variant="ghost" onClick={() => removeQuote(quote.id)}>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card>
          <h2 className="text-xl">They clear</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {plants.clears.map((plant) => (
              <li key={plant}>{plant}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl">Comes back</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {plants.repeats.map((plant) => (
              <li key={plant}>{plant}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            Book the return when leaves push again, often 4–6 weeks. Price it before you leave the first time.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl">Do not fence them onto</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {plants.toxic.map((plant) => (
              <li key={plant}>{plant}</li>
            ))}
          </ul>
        </Card>
      </section>

      <Note title="Poison ivy is a human problem">
        <p>
          Goats eat it. The oil stays on their hair and passes through manure. On a rental, tell the client not to pet the herd or handle droppings barehanded, and wear gloves and sleeves yourself when you load them. A rash on a client is how a clever idea becomes a bad week.
        </p>
      </Note>

      <section className="mt-8">
        <h2 className="text-2xl">Set the paddock</h2>
        <ol className="mt-3 space-y-3">
          {fenceSteps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm">
              <span className="w-6 shrink-0 tabular-nums text-muted">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">What the agreement should say</h2>
          <ul className="mt-3 space-y-3">
            {contractPoints.map((point) => (
              <li key={point} className="text-sm text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-2xl">Before you take money</h2>
            <p className="text-sm tabular-nums text-muted">
              {done} of {businessChecks.length}
            </p>
          </div>
          <div className="mt-2">
            {businessChecks.map((item) => (
              <CheckRow
                key={item.id}
                checked={Boolean(checks[item.id])}
                label={item.label}
                detail={item.detail}
                onChange={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <p className="mt-8 text-sm text-muted">
        Goat-days are a planning rate for a real defoliation, not a promise the roots are dead. Thickets often need two seasons. Voltage, toxic plants, and local fence law are your problem on the day, not the calculator’s.
      </p>
    </Frame>
  );
}

function PaddockFigure({
  acres,
  rolls,
  side,
  shape,
}: {
  acres: string;
  rolls: number;
  side: number;
  shape: Shape;
}) {
  return (
    <figure className="mt-4">
      <div
        className={cn(
          "relative mx-auto w-full max-w-xs border-2 border-dashed border-fg/70",
          shape === "long" ? "aspect-[2/1]" : "aspect-square",
        )}
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-2 text-xs text-muted">
          gate
        </span>
        <div className="absolute inset-6 flex flex-col items-center justify-center text-center">
          <p className="font-display text-3xl tabular-nums">{acres}</p>
          <p className="text-sm text-muted">acres inside the net</p>
          <p className="mt-2 text-sm tabular-nums">
            {rolls} rolls · {side} ft side
          </p>
        </div>
        <span className="absolute right-3 bottom-2 text-xs text-muted">water</span>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        One enclosure at a time. The net moves. Do not price fence for the whole property if the herd only works a piece of it.
      </figcaption>
    </figure>
  );
}
