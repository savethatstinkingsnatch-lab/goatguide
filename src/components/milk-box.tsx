import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui";

export function MilkBox() {
  return (
    <Card>
      <h2 className="text-xl">Milk you will drink</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
        <li>Wash the udder and your hands. Use clean stainless or food-grade containers.</li>
        <li>Chill milk quickly.</li>
        <li>
          Pasteurize milk you drink at home unless you fully accept the risks of raw milk. A common home
          method is heating milk to 161°F for 15 seconds (or 145°F for 30 minutes), then chilling fast —
          confirm the method you use with a current extension fact sheet.
        </li>
        <li>Do not sell milk unless your state allows it and you follow those rules.</li>
        <li>
          Do not drink milk from a mastitic half. See the <Link to="/health" className="underline">health page</Link>.
        </li>
        <li>
          For CAE control in kids, many herds pasteurize or heat-treat colostrum — that is separate from
          drinking milk, and already in your CAE note.
        </li>
      </ul>
    </Card>
  );
}
