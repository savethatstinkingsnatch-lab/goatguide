import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, o as Frame } from "./ui-DLTh075-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/glossary-BaFoJkr8.js
var import_jsx_runtime = require_jsx_runtime();
var terms = [
	["Doe", "Female goat."],
	["Buck", "Intact male."],
	["Wether", "Castrated male."],
	["Kid", "Baby goat."],
	["Browse", "Leaves, brush, and weeds goats prefer over lawn grass."],
	["CDT", "Vaccine for Clostridium C and D plus tetanus."],
	["FAMACHA", "A trained, certified eyelid-color screen for anemia associated with barber-pole worm. A pale lid does not name the cause or the treatment."],
	["CAE", "Caprine arthritis encephalitis (virus; milk/contact)."],
	["CL", "Caseous lymphadenitis (abscess disease)."],
	["Johne’s", "Chronic gut disease; hard to clear from a herd."],
	["Urinary calculi", "Stones that can block bucks and wethers. Grain can contribute when the ration is high in phosphorus or the calcium-to-phosphorus ratio is off."],
	["Electronet", "Portable electric net fencing for goats."],
	["Pasteurize", "Heat milk to kill germs before drinking."]
];
function GlossaryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Glossary",
		title: "Words this guide uses.",
		lede: "Short definitions. The longer explanations live on Care, Health, and Clearing."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "mt-8 max-w-2xl divide-y divide-line border-y border-line",
		children: terms.map(([term, meaning]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-1 py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm font-medium",
				children: term
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm text-muted",
				children: meaning
			})]
		}, term))
	})] });
}
//#endregion
export { GlossaryPage as component };
