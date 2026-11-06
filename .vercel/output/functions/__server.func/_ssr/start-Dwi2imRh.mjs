import { i as __toESM } from "../_runtime.mjs";
import { l as startChecks } from "./guide-OW7O4lDa.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useGuide } from "./router-0SQVn0KG.mjs";
import { c as PageIntro, i as Choice, o as Frame, r as CheckRow, t as Button } from "./ui-Ur8DFsfx.mjs";
import { t as MilkBox } from "./milk-box-DH7_IdS_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-Dwi2imRh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var goals = [
	{
		id: "dairy",
		label: "Milk"
	},
	{
		id: "meat",
		label: "Meat"
	},
	{
		id: "fiber",
		label: "Fiber"
	},
	{
		id: "pets",
		label: "Companions"
	},
	{
		id: "clearing",
		label: "Clear brush"
	}
];
var lands = [
	{
		id: "yard",
		label: "A yard"
	},
	{
		id: "small",
		label: "Under 2 acres"
	},
	{
		id: "acreage",
		label: "Room to rotate"
	}
];
var climates = [
	{
		id: "cold",
		label: "Cold winters"
	},
	{
		id: "mild",
		label: "Mild"
	},
	{
		id: "humid",
		label: "Hot and humid"
	},
	{
		id: "dry",
		label: "Hot and dry"
	}
];
function recommend(goal, land, climate) {
	const breeds = [];
	const notes = [];
	if (land === "yard" && goal === "clearing") notes.push("A yard cannot be a clearing business or a brush project. You need acreage of something they can eat, and portable fence. For the yard itself, keep two minis and buy hay.");
	if (goal === "pets" || land === "yard") {
		breeds.push({
			id: "nigerian-dwarf",
			name: "Nigerian Dwarf"
		}, {
			id: "pygmy",
			name: "Pygmy"
		});
		notes.push("No intact buck in a suburban yard. Bucks stink in rut, crow with their voices, and escape. Wethers or does only for companions. Grain is how pet males die of stones.");
	} else if (goal === "dairy") {
		if (land === "small") breeds.push({
			id: "nigerian-dwarf",
			name: "Nigerian Dwarf"
		});
		if (climate === "cold" || climate === "mild") breeds.push({
			id: "alpine",
			name: "Alpine"
		}, {
			id: "saanen",
			name: "Saanen"
		});
		if (climate === "dry" || climate === "humid") breeds.push({
			id: "nubian",
			name: "Nubian"
		});
		if (climate !== "cold") breeds.push({
			id: "lamancha",
			name: "LaMancha"
		});
		notes.push("Start with two does from a tested herd, not a bargain buck. Milk volume follows feed, not wishes.");
	} else if (goal === "meat") {
		if (climate === "humid") {
			breeds.push({
				id: "kiko",
				name: "Kiko"
			}, {
				id: "spanish",
				name: "Spanish"
			});
			notes.push("In humid country, parasite tolerance beats show muscling. A Kiko or Spanish cross often outlives a pure Boer on the same grass.");
		} else breeds.push({
			id: "boer",
			name: "Boer"
		}, {
			id: "kiko",
			name: "Kiko"
		});
	} else if (goal === "fiber") {
		breeds.push({
			id: "angora",
			name: "Angora"
		});
		notes.push("Angoras are a shearing project. Cold rain right after the clip is dangerous. They are a poor brush crew.");
		if (climate === "humid" || climate === "cold") notes.push("This climate fights mohair. If fiber is casual, reconsider before you own a wet, matted herd.");
	} else {
		breeds.push({
			id: "kiko",
			name: "Kiko"
		}, {
			id: "spanish",
			name: "Spanish"
		});
		notes.push("A working herd is wethers or open does, disbudded or polled if you will use electronet. Leave the buck at home. Horns and netting tangle.");
		if (land !== "acreage") notes.push("Under two acres you can run a training paddock, not a summer of client jobs. Rotate hard or you will just make a dirt lot.");
	}
	if (climate === "humid") notes.push("Humid summers are a parasite business. Learn FAMACHA, use fecals, and rest ground. Stocking rate is a health decision.");
	if (climate === "cold") notes.push("Budget a dry wind break and water that stays liquid. Cold is fine. Cold and wet, on kids or fresh shears, is not.");
	if (climate === "dry") notes.push("Shade and hauling water will limit the herd before acres do.");
	notes.push("Quarantine anything new for 30 days. Ask for CAE, CL, and Johne's results when you are buying breeding stock.");
	const seen = /* @__PURE__ */ new Set();
	return {
		breeds: breeds.filter((breed) => {
			if (seen.has(breed.id)) return false;
			seen.add(breed.id);
			return true;
		}).slice(0, 3),
		notes
	};
}
function tagsFor(goal, land, climate) {
	const tags = /* @__PURE__ */ new Set(["all"]);
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
	const [step, setStep] = (0, import_react.useState)(0);
	const [goal, setGoal] = (0, import_react.useState)("dairy");
	const [land, setLand] = (0, import_react.useState)("small");
	const [climate, setClimate] = (0, import_react.useState)("mild");
	const checks = useGuide((state) => state.checks);
	const toggle = useGuide((state) => state.toggle);
	const result = (0, import_react.useMemo)(() => recommend(goal, land, climate), [
		goal,
		land,
		climate
	]);
	const tags = (0, import_react.useMemo)(() => tagsFor(goal, land, climate), [
		goal,
		land,
		climate
	]);
	const list = startChecks.filter((item) => item.tags.some((tag) => tags.has(tag)));
	const done = list.filter((item) => checks[item.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Start",
			title: "Get the place ready before the goats.",
			lede: "Three questions, a short list of breeds that fit, and a checklist you can tick off. It stays in this browser."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-sm text-muted",
			children: "See also Volume 19: Rabbits and Volume 26: Chickens for other small-livestock housing and predator-proofing."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium text-muted",
						children: [
							"Step ",
							Math.min(step + 1, 3),
							" of 3"
						]
					}),
					step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Question, {
						title: "What do you want them to do?",
						value: goal,
						options: goals,
						onChange: setGoal
					}) : null,
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Question, {
						title: "What land can they actually use?",
						value: land,
						options: lands,
						onChange: setLand
					}) : null,
					step === 2 || step > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Question, {
						title: "What is the hard season?",
						value: climate,
						options: climates,
						onChange: setClimate
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2",
						children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => setStep((value) => Math.max(0, value - 1)),
							children: "Back"
						}) : null, step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep((value) => value + 1),
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(3),
							children: step > 2 ? "Updated" : "See the plan"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-3xl border border-line p-4",
				children: step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "The plan lands here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Answer the three questions. You can change them later; the checklist remembers what you already did."
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "Look first at"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-2",
						children: result.breeds.map((breed) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/breeds",
							hash: breed.id,
							className: "inline-flex h-11 items-center rounded-full border border-line-strong px-3 text-sm font-medium hover:bg-surface-2",
							children: breed.name
						}) }, breed.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: result.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted",
							children: note
						}, note))
					}),
					goal === "clearing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/clearing",
						className: "press mt-4 inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-ink-fg",
						children: "Plan the paddock"
					}) : null
				] })
			})]
		}),
		goal === "dairy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MilkBox, {})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Setup list"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums text-muted",
						children: [
							done,
							" of ",
							list.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Read city, county, and HOA rules before you buy goats. Many places limit numbers, ban bucks, require setbacks, or treat goats as livestock you cannot keep on a small lot. “They’re pets” is not a variance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
						checked: Boolean(checks[item.id]),
						label: item.label,
						detail: item.detail,
						onChange: () => toggle(item.id)
					}, item.id))
				})
			]
		})
	] });
}
function Question({ title, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "radiogroup",
			"aria-label": title,
			className: "mt-3 flex flex-wrap gap-2",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				label: option.label,
				checked: value === option.id,
				onClick: () => onChange(option.id)
			}, option.id))
		})]
	});
}
//#endregion
export { StartPage as component };
