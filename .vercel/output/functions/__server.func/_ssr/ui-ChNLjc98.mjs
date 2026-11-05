import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-Lau3-b6T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-ChNLjc98.js
var import_jsx_runtime = require_jsx_runtime();
function Button({ variant = "primary", className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn("press inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium", "disabled:pointer-events-none disabled:opacity-40", variant === "primary" && "bg-ink text-ink-fg hover:opacity-90", variant === "secondary" && "border border-line-strong bg-surface text-fg hover:bg-surface-2", variant === "ghost" && "text-fg hover:bg-surface-2", className),
		...props
	});
}
function Frame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-5xl px-4 pt-8 pb-16 sm:pt-12",
		children
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-muted",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base text-muted",
				children: lede
			})
		]
	});
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-3xl border border-line bg-surface p-4", className),
		children
	});
}
function Note({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-3xl border border-line bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 space-y-2 text-sm text-muted",
			children
		})]
	});
}
function FieldLabel({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block",
				children
			})
		]
	});
}
var controlClass = "h-11 w-full rounded-lg border border-line-strong bg-bg px-3 text-sm tabular-nums text-fg";
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: controlClass,
		...props
	});
}
function Choice({ label, checked, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "radio",
		"aria-checked": checked,
		onClick,
		className: cn("press inline-flex h-11 items-center rounded-full px-3 text-sm font-medium", checked ? "bg-ink text-ink-fg" : "border border-line-strong bg-surface text-fg hover:bg-surface-2"),
		children: label
	});
}
function CheckRow({ checked, label, detail, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex min-h-11 cursor-pointer gap-3 border-b border-line py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange,
			className: "mt-1 size-4 accent-ink"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("block text-sm font-medium", checked && "text-muted line-through"),
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block text-sm text-muted",
			children: detail
		})] })]
	});
}
//#endregion
export { FieldLabel as a, PageIntro as c, Choice as i, TextInput as l, Card as n, Frame as o, CheckRow as r, Note as s, Button as t };
