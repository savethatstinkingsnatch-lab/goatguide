import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card, Choice, FieldLabel, Frame, PageIntro, TextInput } from "@/components/ui";
import { MilkBox } from "@/components/milk-box";

export const Route = createFileRoute("/care")({
  head: () => ({ meta: [{ title: "Daily care — Goatstead" }] }),
  component: CarePage,
});

type Size = "mini" | "standard" | "large";
type Stage = "maintain" | "pregnant" | "milk";

const sizes: Record<Size, { label: string; weight: number; indoor: number; lot: number; hay: number }> = {
  mini: { label: "Mini", weight: 60, indoor: 15, lot: 200, hay: 0.035 },
  standard: { label: "Standard", weight: 140, indoor: 22, lot: 250, hay: 0.033 },
  large: { label: "Large", weight: 200, indoor: 30, lot: 350, hay: 0.03 },
};

function CarePage() {
  const [countText, setCountText] = useState("4");
  const [size, setSize] = useState<Size>("standard");
  const [stage, setStage] = useState<Stage>("maintain");

  const plan = useMemo(() => {
    const count = Math.min(40, Math.max(1, Math.round(Number(countText) || 1)));
    const spec = sizes[size];
    const stageHay = stage === "maintain" ? 1 : stage === "pregnant" ? 1.15 : 1.3;
    const hay = Math.round(count * spec.weight * spec.hay * stageHay * 10) / 10;
    const waterEach = stage === "milk" ? 3.5 : 2;
    const water = Math.round(count * (size === "mini" ? waterEach * 0.6 : size === "large" ? waterEach * 1.2 : waterEach));
    return {
      count,
      hay,
      water,
      indoor: count * spec.indoor,
      lot: count * spec.lot,
    };
  }, [countText, size, stage]);

  return (
    <Frame>
      <PageIntro
        kicker="Care"
        title="Hay, a dry shed, and a fence they respect."
        lede="Goats select browse — leaves, brush, and weeds — and they also eat grass and other forage. They would rather work a thicket than mow a lawn. Your job is forage, minerals, water, and a boundary that holds when they get ideas."
      />

      <div className="mt-8">
        <MilkBox />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl">Daily feed sketch</h2>
          <p className="mt-2 text-sm text-muted">
            A rough planning example, not a ration. Hay, water, and space swing with animal size, forage quality, weather, and what you are asking them to do. Weigh a few bales once so “a flake” means something.
          </p>
          <div className="mt-4 grid gap-4">
            <FieldLabel label="Goats" hint="Adults in this group">
              <TextInput
                inputMode="numeric"
                value={countText}
                onChange={(event) => setCountText(event.target.value)}
              />
            </FieldLabel>
            <div>
              <p className="text-sm font-medium">Size</p>
              <div role="radiogroup" aria-label="Size" className="mt-2 flex flex-wrap gap-2">
                {(Object.keys(sizes) as Size[]).map((key) => (
                  <Choice key={key} label={sizes[key].label} checked={size === key} onClick={() => setSize(key)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Stage</p>
              <div role="radiogroup" aria-label="Stage" className="mt-2 flex flex-wrap gap-2">
                <Choice label="Maintenance" checked={stage === "maintain"} onClick={() => setStage("maintain")} />
                <Choice label="Late pregnancy" checked={stage === "pregnant"} onClick={() => setStage("pregnant")} />
                <Choice label="In milk" checked={stage === "milk"} onClick={() => setStage("milk")} />
              </div>
            </div>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
            <div>
              <dt className="text-muted">Hay, rough example</dt>
              <dd className="font-display text-2xl tabular-nums">{plan.hay} lb/day</dd>
            </div>
            <div>
              <dt className="text-muted">Water, rough example</dt>
              <dd className="font-display text-2xl tabular-nums">{plan.water} gal/day</dd>
            </div>
            <div>
              <dt className="text-muted">Indoor shelter, example</dt>
              <dd className="tabular-nums">{plan.indoor} sq ft</dd>
            </div>
            <div>
              <dt className="text-muted">Dry lot, example</dt>
              <dd className="tabular-nums">{plan.lot.toLocaleString("en-US")} sq ft</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm text-muted">
            These totals are illustrations from fixed multipliers, not a standard you must meet. The lot figure is not a published minimum.
          </p>
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="text-xl">Grain is a tool, not a hobby</h2>
            <p className="mt-2 text-sm text-muted">
              Forage should be the base of the diet. Maintenance animals on decent hay often need little or no grain. Late pregnancy and real milk production usually need a measured amount, not free choice. Grain can contribute to urinary stones in bucks and wethers when the ration is high in phosphorus or the calcium-to-phosphorus balance is off. Balance any supplemented ration with a vet or nutrition adviser. A clearing herd should live mostly on browse, hay, and mineral.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl">Mineral and baking soda</h2>
            <p className="mt-2 text-sm text-muted">
              Offer a loose mineral formulated for goats, in a covered feeder. Copper needs and toxicity risk depend on the whole diet and local forage. Sheep mineral is not automatically the right substitute, and some goat minerals can cause copper toxicity in sheep. If you keep both species, plan separate minerals with a veterinarian or nutrition adviser. A small free-choice baking soda station can help when rumen pH gets sloppy from too much grain. Salt is often already in the mineral; don’t invent a second program without a reason.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-xl">Fence</h2>
          <p className="mt-2 text-sm text-muted">
            Four to five feet of woven wire, mesh small enough that horns don’t thread it, tight at the ground. A hot offset wire teaches respect. Electric-only works after they are trained, and only while the energizer is actually on. Walk it after storms.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl">Shelter</h2>
          <p className="mt-2 text-sm text-muted">
            A three-sided shed facing away from the weather is enough in most places. They pack in when it rains and ignore it when it doesn’t. Bed it dry. A closed box with no air in July is a pneumonia machine.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl">Do not plant these in reach</h2>
          <p className="mt-2 text-sm text-muted">
            Rhododendron, azalea, mountain laurel, yew, oleander, and wilted cherry leaves. Hungry goats in a stripped paddock will try ornamental hedges they would normally walk past.
          </p>
        </Card>
      </div>
    </Frame>
  );
}
