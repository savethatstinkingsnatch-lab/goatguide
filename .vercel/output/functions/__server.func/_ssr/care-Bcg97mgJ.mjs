import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FieldLabel, c as PageIntro, i as Choice, l as TextInput, n as Card, o as Frame } from "./ui-ChNLjc98.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-Bcg97mgJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sizes = {
	mini: {
		label: "Mini",
		weight: 60,
		indoor: 15,
		lot: 200,
		hay: .035
	},
	standard: {
		label: "Standard",
		weight: 140,
		indoor: 22,
		lot: 250,
		hay: .033
	},
	large: {
		label: "Large",
		weight: 200,
		indoor: 30,
		lot: 350,
		hay: .03
	}
};
function CarePage() {
	const [countText, setCountText] = (0, import_react.useState)("4");
	const [size, setSize] = (0, import_react.useState)("standard");
	const [stage, setStage] = (0, import_react.useState)("maintain");
	const plan = (0, import_react.useMemo)(() => {
		const count = Math.min(40, Math.max(1, Math.round(Number(countText) || 1)));
		const spec = sizes[size];
		const stageHay = stage === "maintain" ? 1 : stage === "pregnant" ? 1.15 : 1.3;
		const hay = Math.round(count * spec.weight * spec.hay * stageHay * 10) / 10;
		const waterEach = stage === "milk" ? 3.5 : 2;
		return {
			count,
			hay,
			water: Math.round(count * (size === "mini" ? waterEach * .6 : size === "large" ? waterEach * 1.2 : waterEach)),
			indoor: count * spec.indoor,
			lot: count * spec.lot
		};
	}, [
		countText,
		size,
		stage
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Care",
			title: "Hay, a dry shed, and a fence they respect.",
			lede: "Goats are browsers. They would rather eat brush, leaves, and weeds than mow a lawn. Your job is forage, minerals, water, and a boundary that holds when they get ideas."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Daily feed sketch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "A planning rate, not a ration from a nutritionist. Weigh a few bales once so “a flake” means something."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							label: "Goats",
							hint: "Adults in this group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "numeric",
								value: countText,
								onChange: (event) => setCountText(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Size"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-label": "Size",
							className: "mt-2 flex flex-wrap gap-2",
							children: Object.keys(sizes).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								label: sizes[key].label,
								checked: size === key,
								onClick: () => setSize(key)
							}, key))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Stage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "radiogroup",
							"aria-label": "Stage",
							className: "mt-2 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									label: "Maintenance",
									checked: stage === "maintain",
									onClick: () => setStage("maintain")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									label: "Late pregnancy",
									checked: stage === "pregnant",
									onClick: () => setStage("pregnant")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									label: "In milk",
									checked: stage === "milk",
									onClick: () => setStage("milk")
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Hay, about"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "font-display text-2xl tabular-nums",
							children: [plan.hay, " lb/day"]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Water, about"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "font-display text-2xl tabular-nums",
							children: [plan.water, " gal/day"]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Indoor shelter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "tabular-nums",
							children: [plan.indoor, " sq ft"]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Dry lot minimum"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "tabular-nums",
							children: [plan.lot.toLocaleString("en-US"), " sq ft"]
						})] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Grain is a tool, not a hobby"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Maintenance animals on decent hay often need no grain. Late pregnancy and real milk production usually do — measured, not free choice. Bucks and wethers on grain are how urinary stones happen. A clearing herd should live on browse, hay, and mineral."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Mineral and baking soda"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Loose mineral labeled for goats, in a covered feeder, all the time. It has to contain copper. Sheep mineral does not. A small free-choice baking soda station helps when rumen pH gets sloppy from too much grain. Salt is usually already in the mineral; don’t invent a second program."
				})] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Fence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Four to five feet of woven wire, mesh small enough that horns don’t thread it, tight at the ground. A hot offset wire teaches respect. Electric-only works after they are trained, and only while the energizer is actually on. Walk it after storms."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Shelter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "A three-sided shed facing away from the weather is enough in most places. They pack in when it rains and ignore it when it doesn’t. Bed it dry. A closed box with no air in July is a pneumonia machine."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Do not plant these in reach"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Rhododendron, azalea, mountain laurel, yew, oleander, and wilted cherry leaves. Hungry goats in a stripped paddock will try ornamental hedges they would normally walk past."
				})] })
			]
		})
	] });
}
//#endregion
export { CarePage as component };
