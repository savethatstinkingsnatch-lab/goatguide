import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, o as Frame } from "./ui-Ur8DFsfx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/here-DydhSMnC.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Check local rules.",
	"Buy at least two goats (they are herd animals).",
	"Finish woven + electric fence before they arrive.",
	"Quarantine and ask for CAE/CL/Johne’s tests.",
	"Feed hay and goat mineral; almost no grain for wethers.",
	"Put CDT and FAMACHA on the calendar.",
	"Find a goat vet before kidding season."
];
function HerePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Start here",
			title: "New to goats?",
			lede: "Seven steps, in order. The rest of this guide is free to read. Nothing here is locked."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 max-w-2xl space-y-4",
			children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-6 shrink-0 tabular-nums text-muted",
					children: index + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
			}, step))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/start",
				className: "press inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-ink-fg",
				children: "Open the setup list"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/glossary",
				className: "press inline-flex h-11 items-center rounded-full border border-line-strong bg-surface px-4 text-sm font-medium",
				children: "Glossary"
			})]
		})
	] });
}
//#endregion
export { HerePage as component };
