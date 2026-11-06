import { i as __toESM } from "../_runtime.mjs";
import { d as topics } from "./guide-OW7O4lDa.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Frame } from "./ui-Ur8DFsfx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DYtBDgTd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rules = [
	{
		title: "Two is the minimum",
		text: "A lone goat is a welfare problem. Buy a pair, or don't buy the first one."
	},
	{
		title: "Fence before animals",
		text: "Woven wire or trained hot wire. Barbed wire is how goats get ruined, not how they stay home."
	},
	{
		title: "Goat mineral, not sheep mineral",
		text: "They need the copper. Sheep mineral will leave them short, and goat mineral can poison sheep."
	},
	{
		title: "A tight paddock does the work",
		text: "Browse in a small fence clears land. A loose goat just leaves and eats the roses."
	}
];
function Home() {
	const [query, setQuery] = (0, import_react.useState)("");
	const shown = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return topics;
		return topics.filter((topic) => `${topic.title} ${topic.text}`.toLowerCase().includes(q));
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-muted",
			children: "Raise them. Put them on the brush."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-3xl text-4xl sm:text-5xl",
			children: "A field guide for keeping goats, and hiring the herd out to clear land."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-base text-muted",
			children: "What to buy, what to feed, when to call a vet, and how to fence a paddock so the goats eat the thicket instead of the neighborhood. Then price that same herd as a job."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/clearing",
				className: "press inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-ink-fg",
				children: "Plan a clearing paddock"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/start",
				className: "press inline-flex h-11 items-center rounded-full border border-line-strong bg-surface px-4 text-sm font-medium",
				children: "I'm getting goats"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/clearing",
				className: "rounded-3xl border border-line bg-surface p-4 hover:bg-surface-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "On your place"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl",
						children: "Fence them in and let them clear it"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Herd size, rolls of electronet, water, and how to split the brush into paddocks they can actually finish."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/clearing",
				hash: "rent",
				className: "rounded-3xl border border-line bg-surface p-4 hover:bg-surface-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "For other people"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl",
						children: "Rent the herd out"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Travel, daily rate, fence moves, and a check on whether the quote covers your hours. Saved on this device."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "Find a topic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Parasites, fence, kidding, price",
					className: "mt-2 h-11 w-full rounded-lg border border-line-strong bg-surface px-3 text-sm"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line border-y border-line",
				children: shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-4 text-sm text-muted",
					children: "Nothing matches that. Try fence, milk, or worms."
				}) : shown.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: topic.href,
					hash: topic.hash,
					className: "flex min-h-11 flex-col justify-center py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: topic.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: topic.text
					})]
				}) }, `${topic.href}-${topic.hash ?? ""}`))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 sm:grid-cols-2",
			children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: rule.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: rule.text
				})]
			}, rule.title))
		})
	] });
}
//#endregion
export { Home as component };
