import { i as __toESM } from "../_runtime.mjs";
import { s as purposeLabel, t as breeds } from "./guide-CSOUmwUX.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, i as Choice, o as Frame } from "./ui-ChNLjc98.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breeds-DoRXlfpP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"all",
	"dairy",
	"meat",
	"fiber",
	"companion",
	"clearing"
];
function BreedsPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		const id = window.location.hash.replace("#", "");
		if (!id) return;
		setFilter("all");
		const frame = window.requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({ block: "center" });
		});
		return () => window.cancelAnimationFrame(frame);
	}, []);
	const shown = breeds.filter((breed) => filter === "all" || breed.purposes.includes(filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Breeds",
			title: "Pick the job, then the goat.",
			lede: "There is no best breed. There is a goat that milks, one that grows on brush, one that grows mohair, and one that should never be given a grain bucket."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "radiogroup",
			"aria-label": "Filter breeds",
			className: "mt-6 flex flex-wrap gap-2",
			children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				label: purposeLabel[item],
				checked: filter === item,
				onClick: () => setFilter(item)
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-2",
			children: shown.map((breed) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: breed.id,
				className: "scroll-mt-28 rounded-3xl border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: breed.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: breed.size
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: breed.weight
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-medium",
							children: "Climate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted",
							children: breed.climate
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-medium",
							children: "Temperament"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted",
							children: breed.temperament
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: breed.notes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: breed.watch
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs font-medium text-muted",
						children: breed.purposes.map((purpose) => purposeLabel[purpose]).join(" · ")
					})
				]
			}, breed.id))
		})
	] });
}
//#endregion
export { BreedsPage as component };
