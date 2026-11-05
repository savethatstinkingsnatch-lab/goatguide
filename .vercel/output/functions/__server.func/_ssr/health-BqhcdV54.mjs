import { i as __toESM } from "../_runtime.mjs";
import { a as issues, f as urgencyLabel, u as symptoms } from "./guide-CSOUmwUX.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-Lau3-b6T.mjs";
import { c as PageIntro, o as Frame, s as Note } from "./ui-ChNLjc98.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-BqhcdV54.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rank = {
	emergency: 0,
	today: 1,
	watch: 2
};
function HealthPage() {
	const [picked, setPicked] = (0, import_react.useState)([]);
	const matches = (0, import_react.useMemo)(() => {
		if (picked.length === 0) return [];
		return issues.map((issue) => ({
			issue,
			score: issue.symptoms.filter((symptom) => picked.includes(symptom)).length
		})).filter((item) => item.score > 0).sort((a, b) => rank[a.issue.urgency] - rank[b.issue.urgency] || b.score - a.score);
	}, [picked]);
	function toggle(id) {
		setPicked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Health",
			title: "How fast this needs a vet.",
			lede: "Match what you see to problems keepers actually meet. This sorts urgency. It does not diagnose, dose, or replace someone who has examined the goat."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "What are you seeing?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: symptoms.map((symptom) => {
						const on = picked.includes(symptom.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => toggle(symptom.id),
							className: cn("press inline-flex min-h-11 items-center rounded-full px-3 text-left text-sm font-medium", on ? "bg-ink text-ink-fg" : "border border-line-strong bg-bg text-fg"),
							children: symptom.label
						}, symptom.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Possible matches"
				}), matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Pick one or more signs. Emergencies rise to the top. A goat that is down, blocked, bloated, or stuck in labor does not wait on a checklist."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-4",
					children: matches.map(({ issue }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-line pb-4 last:border-b-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: issue.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("shrink-0 text-xs font-medium", issue.urgency === "emergency" && "text-danger", issue.urgency === "today" && "text-warn", issue.urgency === "watch" && "text-good"),
									children: urgencyLabel[issue.urgency]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: issue.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: issue.steps
							})
						]
					}, issue.id))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Keep these on the shelf in your head"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 divide-y divide-line border-y border-line",
				children: issues.map((issue) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex min-h-11 cursor-pointer items-center justify-between gap-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: issue.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-muted",
							children: urgencyLabel[issue.urgency]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-3 text-sm text-muted",
						children: issue.summary
					})]
				}, issue.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				title: "Biosecurity is cheaper than a closed herd test later",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "CAE, CL, and Johne’s move in with pretty goats. Quarantine a month. Don’t share needles, tattoo ink, or a draining abscess with the main pen. Milk from a CAE-positive doe should not raise kids if you are trying to stay clean." })
			})
		})
	] });
}
//#endregion
export { HealthPage as component };
