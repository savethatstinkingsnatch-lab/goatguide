import { createFileRoute } from "@tanstack/react-router";
import { Frame, PageIntro } from "@/components/ui";

export const Route = createFileRoute("/glossary")({
  head: () => ({ meta: [{ title: "Glossary — Goats: Goatstead" }] }),
  component: GlossaryPage,
});

const terms = [
  ["Doe", "Female goat."],
  ["Buck", "Intact male."],
  ["Wether", "Castrated male."],
  ["Kid", "Baby goat."],
  ["Browse", "Leaves, brush, and weeds goats prefer over lawn grass."],
  ["CDT", "Vaccine for Clostridium C and D plus tetanus."],
  ["FAMACHA", "Eyelid-color check for barber-pole worm anemia."],
  ["CAE", "Caprine arthritis encephalitis (virus; milk/contact)."],
  ["CL", "Caseous lymphadenitis (abscess disease)."],
  ["Johne’s", "Chronic gut disease; hard to clear from a herd."],
  ["Urinary calculi", "Stones that block bucks/wethers; linked to wrong grain rations."],
  ["Electronet", "Portable electric net fencing for goats."],
  ["Pasteurize", "Heat milk to kill germs before drinking."],
];

function GlossaryPage() {
  return (
    <Frame>
      <PageIntro
        kicker="Glossary"
        title="Words this guide uses."
        lede="Short definitions. The longer explanations live on Care, Health, and Clearing."
      />
      <dl className="mt-8 max-w-2xl divide-y divide-line border-y border-line">
        {terms.map(([term, meaning]) => (
          <div key={term} className="grid gap-1 py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
            <dt className="text-sm font-medium">{term}</dt>
            <dd className="text-sm text-muted">{meaning}</dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}
