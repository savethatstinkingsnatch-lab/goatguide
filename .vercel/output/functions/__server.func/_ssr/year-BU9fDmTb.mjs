import { i as __toESM } from "../_runtime.mjs";
import { c as seasons } from "./guide-FvRMF8pV.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FieldLabel, c as PageIntro, l as TextInput, n as Card, o as Frame } from "./ui-DLTh075-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/year-BU9fDmTb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function addDays(iso, days) {
	const date = /* @__PURE__ */ new Date(`${iso}T12:00:00`);
	date.setDate(date.getDate() + days);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function YearPage() {
	const [bred, setBred] = (0, import_react.useState)("");
	const due = (0, import_react.useMemo)(() => {
		if (!bred) return null;
		const parsed = /* @__PURE__ */ new Date(`${bred}T12:00:00`);
		if (Number.isNaN(parsed.getTime())) return null;
		return {
			early: addDays(bred, 145),
			peak: addDays(bred, 150),
			late: addDays(bred, 155)
		};
	}, [bred]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Year",
			title: "The work moves with the light.",
			lede: "Most dairy goats breed as days shorten and kid about five months later. Brush control, worms, and hay all have a season too. Miss the window and you spend money catching up."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2",
			children: seasons.map((season) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: season.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: season.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: point
				}, point))
			})] }, season.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Kidding window"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Count about 150 days from a standing breeding, with a window from 145 to 155. Write the buck’s date down. Memory is a bad record."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 max-w-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						label: "Date bred",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "date",
							value: bred,
							onChange: (event) => setBred(event.target.value)
						})
					})
				}),
				due ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid gap-3 border-t border-line pt-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-muted",
							children: "Early"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm font-medium tabular-nums",
							children: due.early
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-muted",
							children: "Most likely"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-display text-xl tabular-nums",
							children: due.peak
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-muted",
							children: "Late"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm font-medium tabular-nums",
							children: due.late
						})] })
					]
				}) : null
			]
		})
	] });
}
//#endregion
export { YearPage as component };
