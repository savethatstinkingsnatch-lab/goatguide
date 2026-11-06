import { i as __toESM } from "../_runtime.mjs";
import { i as fenceSteps, n as businessChecks, o as plants, r as contractPoints } from "./guide-FvRMF8pV.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useGuide, r as cn } from "./router-BJ7P3SNe.mjs";
import { a as FieldLabel, c as PageIntro, i as Choice, l as TextInput, n as Card, o as Frame, r as CheckRow, s as Note, t as Button } from "./ui-DLTh075-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clearing-BlnJlp_9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Goat-days to defoliate one acre. Roots usually need a second visit. */
var GOAT_DAYS_PER_ACRE = {
	light: 110,
	moderate: 240,
	heavy: 460
};
var TERRAIN_TIME = {
	easy: 1,
	mixed: 1.12,
	steep: 1.28
};
var TERRAIN_PRICE = {
	easy: 1,
	mixed: 1.12,
	steep: 1.3
};
var SHAPE = {
	square: 1,
	long: 1.22,
	irregular: 1.4
};
function clamp(n, min, max) {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, n));
}
function planClearing(input) {
	const acres = clamp(input.acres, .1, 500);
	const herd = clamp(Math.round(input.herd), 2, 400);
	const miles = clamp(input.miles, 0, 800);
	const rate = clamp(input.ratePerGoat, 0, 80);
	const mobBase = clamp(input.mobilizationBase, 0, 8e3);
	const perMile = clamp(input.perMile, 0, 30);
	const wage = clamp(input.wage, 0, 400);
	const gdPerAcre = GOAT_DAYS_PER_ACRE[input.brush] * TERRAIN_TIME[input.terrain];
	const goatDaysExact = gdPerAcre * acres;
	const target = input.forHire ? 12 : 10;
	const minDays = input.forHire ? 3 : 2;
	const rawAcresPer = herd * target / gdPerAcre;
	const paddocks = Math.max(1, Math.ceil(acres / rawAcresPer - 1e-9));
	const acresPer = acres / paddocks;
	const daysEach = Math.max(minDays, Math.ceil(gdPerAcre * acresPer / herd));
	const days = daysEach * paddocks;
	const side = Math.sqrt(acresPer * 43560);
	const perimeter = 4 * side * SHAPE[input.shape];
	const rolls = Math.max(2, Math.ceil(perimeter / 150));
	let joule = "1–2 joule";
	if (rolls > 10) joule = "6 joule, or a smaller paddock";
	else if (rolls > 6) joule = "3–5 joule";
	else if (rolls > 3) joule = "2–3 joule";
	const waterGal = Math.round(herd * 2);
	const hayLb = herd;
	const dayCharge = Math.round(rate * herd * TERRAIN_PRICE[input.terrain]);
	const travel = miles * 2 * perMile;
	const waterFee = input.waterOnSite ? 0 : 85;
	const moveFee = (paddocks - 1) * 70;
	const mobilization = Math.round(mobBase + travel + waterFee);
	const second = input.secondPass ? Math.round(dayCharge * days * .45 + mobBase * .5) : 0;
	const job = mobilization + dayCharge * days + moveFee + second;
	const low = Math.round(job * .92);
	const high = Math.round(job * 1.22);
	const ownHours = Math.round((4 + days * .6 + Math.max(0, paddocks - 1) * 1.5 + 2) * 10) / 10;
	const fuel = miles * 2 * .7;
	const wear = rolls * 7;
	const waterHaul = input.waterOnSite ? 0 : 40;
	const ownCost = Math.round(ownHours * wage + wear + fuel + waterHaul);
	const contribution = Math.round(low - (ownHours * wage + wear + fuel + waterHaul));
	const gearLow = rolls * 180 + 300;
	const gearHigh = rolls * 280 + 700;
	return {
		acres,
		herd,
		goatDays: Math.round(goatDaysExact),
		gdPerAcre: Math.round(gdPerAcre),
		paddocks,
		acresPer,
		daysEach,
		days,
		herdForWeek: Math.max(herd, Math.ceil(goatDaysExact / 7)),
		side: Math.round(side),
		perimeter: Math.round(perimeter),
		rolls,
		joule,
		waterGal,
		hayLb,
		dayCharge,
		mobilization,
		moveFee,
		second,
		low,
		high,
		ownHours,
		ownCost,
		contribution,
		gearLow,
		gearHigh
	};
}
function money(n) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(Math.round(n));
}
function acresText(n) {
	const rounded = Math.round(n * 10) / 10;
	return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
var brushes = [
	{
		id: "light",
		label: "Light",
		detail: "Tall weeds, scattered briars, saplings you can see through."
	},
	{
		id: "moderate",
		label: "Mixed",
		detail: "Vines, patches of cane or bramble, and brush you have to push into."
	},
	{
		id: "heavy",
		label: "Thicket",
		detail: "Blackberry, kudzu, or rose dense enough to hide the ground."
	}
];
var terrains = [
	{
		id: "easy",
		label: "Flat access"
	},
	{
		id: "mixed",
		label: "Some slope"
	},
	{
		id: "steep",
		label: "Steep or rough"
	}
];
var shapes = [
	{
		id: "square",
		label: "Squarish"
	},
	{
		id: "long",
		label: "Long"
	},
	{
		id: "irregular",
		label: "Irregular"
	}
];
function ClearingPage() {
	const [mode, setMode] = (0, import_react.useState)("land");
	const [acres, setAcres] = (0, import_react.useState)("1");
	const [brush, setBrush] = (0, import_react.useState)("moderate");
	const [terrain, setTerrain] = (0, import_react.useState)("mixed");
	const [shape, setShape] = (0, import_react.useState)("irregular");
	const [herd, setHerd] = (0, import_react.useState)("12");
	const [miles, setMiles] = (0, import_react.useState)("15");
	const [client, setClient] = (0, import_react.useState)("");
	const [rate, setRate] = (0, import_react.useState)("4.5");
	const [mob, setMob] = (0, import_react.useState)("200");
	const [perMile, setPerMile] = (0, import_react.useState)("2.5");
	const [wage, setWage] = (0, import_react.useState)("28");
	const [waterOnSite, setWaterOnSite] = (0, import_react.useState)(true);
	const [secondPass, setSecondPass] = (0, import_react.useState)(false);
	const [ownsFence, setOwnsFence] = (0, import_react.useState)(true);
	const [savedNote, setSavedNote] = (0, import_react.useState)("");
	const quotes = useGuide((state) => state.quotes);
	const saveQuote = useGuide((state) => state.saveQuote);
	const removeQuote = useGuide((state) => state.removeQuote);
	const checks = useGuide((state) => state.checks);
	const toggle = useGuide((state) => state.toggle);
	(0, import_react.useEffect)(() => {
		if (window.location.hash === "#rent") setMode("rent");
	}, []);
	const forHire = mode === "rent";
	const plan = (0, import_react.useMemo)(() => planClearing({
		acres: Number(acres),
		brush,
		terrain,
		shape,
		herd: Number(herd),
		miles: forHire ? Number(miles) : 0,
		ratePerGoat: Number(rate),
		mobilizationBase: Number(mob),
		perMile: Number(perMile),
		wage: Number(wage),
		waterOnSite,
		secondPass: forHire && secondPass,
		forHire,
		ownsFence
	}), [
		acres,
		brush,
		terrain,
		shape,
		herd,
		miles,
		rate,
		mob,
		perMile,
		wage,
		waterOnSite,
		secondPass,
		forHire,
		ownsFence
	]);
	function loadQuote(quote) {
		setMode("rent");
		setAcres(String(quote.acres));
		setBrush(quote.brush);
		setTerrain(quote.terrain);
		setShape(quote.shape);
		setHerd(String(quote.herd));
		setMiles(String(quote.miles));
		setClient(quote.client);
		setRate(String(quote.ratePerGoat));
		setMob(String(quote.mobilizationBase));
		setPerMile(String(quote.perMile));
		setWage(String(quote.wage));
		setWaterOnSite(quote.waterOnSite);
		setSecondPass(quote.secondPass);
		setOwnsFence(quote.ownsFence);
		setSavedNote(`Loaded ${quote.client}.`);
		document.getElementById("planner")?.scrollIntoView({ block: "start" });
	}
	function onSave() {
		const name = client.trim() || "Untitled job";
		saveQuote({
			id: crypto.randomUUID(),
			client: name,
			created: Date.now(),
			low: plan.low,
			high: plan.high,
			days: plan.days,
			acres: plan.acres,
			brush,
			terrain,
			shape,
			herd: plan.herd,
			miles: Number(miles) || 0,
			ratePerGoat: Number(rate) || 0,
			mobilizationBase: Number(mob) || 0,
			perMile: Number(perMile) || 0,
			wage: Number(wage) || 0,
			waterOnSite,
			secondPass,
			ownsFence
		});
		setSavedNote(`Saved “${name}” on this device.`);
	}
	const brushDetail = brushes.find((item) => item.id === brush)?.detail;
	const done = businessChecks.filter((item) => checks[item.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Clearing",
			title: "Fence a piece. Let them eat it. Move the fence.",
			lede: "Goats clear land by browsing, not by grazing like sheep. A small, hot paddock forces them onto the brush. When that patch is worked, you pick the net up and do the next one — on your ground, or on a client’s."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "rent",
			className: "mt-6 flex flex-wrap gap-2",
			role: "radiogroup",
			"aria-label": "Whose land",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				label: "My land",
				checked: mode === "land",
				onClick: () => setMode("land")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				label: "Rent the herd out",
				checked: mode === "rent",
				onClick: () => setMode("rent")
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "planner",
			className: "mt-4 grid scroll-mt-28 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: forHire ? "The job" : "This paddock project"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4",
				children: [
					forHire ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						label: "Client",
						hint: "Only stored in this browser",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: client,
							onChange: (event) => setClient(event.target.value),
							placeholder: "Riverside lot"
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						label: "Acres of brush",
						hint: "The whole area you want worked, not the whole farm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							inputMode: "decimal",
							value: acres,
							onChange: (event) => setAcres(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Brush"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-label": "Brush",
							className: "mt-2 flex flex-wrap gap-2",
							children: brushes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								label: item.label,
								checked: brush === item.id,
								onClick: () => setBrush(item.id)
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: brushDetail
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Ground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "radiogroup",
						"aria-label": "Ground",
						className: "mt-2 flex flex-wrap gap-2",
						children: terrains.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: item.label,
							checked: terrain === item.id,
							onClick: () => setTerrain(item.id)
						}, item.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Paddock shape"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "radiogroup",
						"aria-label": "Shape",
						className: "mt-2 flex flex-wrap gap-2",
						children: shapes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: item.label,
							checked: shape === item.id,
							onClick: () => setShape(item.id)
						}, item.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						label: "Goats you will put in",
						hint: "Wethers or open does. Leave bucks and heavily pregnant does at home.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							inputMode: "numeric",
							value: herd,
							onChange: (event) => setHerd(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4 accent-ink",
							checked: waterOnSite,
							onChange: (event) => setWaterOnSite(event.target.checked)
						}), "Water is already on the site"]
					}),
					forHire ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							label: "Miles from your place",
							hint: "One way",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "decimal",
								value: miles,
								onChange: (event) => setMiles(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-4 accent-ink",
								checked: secondPass,
								onChange: (event) => setSecondPass(event.target.checked)
							}), "Include a resprout visit in the quote"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-4 accent-ink",
								checked: ownsFence,
								onChange: (event) => setOwnsFence(event.target.checked)
							}), "I already own the netting and energizer"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "rounded-xl border border-line p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "flex min-h-11 cursor-pointer items-center text-sm font-medium",
								children: "Your rates"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 pb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										label: "Dollars per goat per day",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											inputMode: "decimal",
											value: rate,
											onChange: (event) => setRate(event.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										label: "Mobilization, before mileage",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											inputMode: "decimal",
											value: mob,
											onChange: (event) => setMob(event.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										label: "Dollars per mile, one way, charged both ways",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											inputMode: "decimal",
											value: perMile,
											onChange: (event) => setPerMile(event.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										label: "What your hour is worth",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											inputMode: "decimal",
											value: wage,
											onChange: (event) => setWage(event.target.value)
										})
									})
								]
							})]
						})
					] }) : null
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "Rough plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl",
						children: plan.paddocks === 1 ? "One paddock" : `${plan.paddocks} paddocks, same net`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaddockFigure, {
						acres: acresText(plan.acresPer),
						rolls: plan.rolls,
						side: plan.side,
						shape
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-[1fr_auto] gap-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Goat-days to defoliate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: plan.goatDays.toLocaleString("en-US")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Days the herd is on it"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: plan.days
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Days inside each paddock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: plan.daysEach
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Electronet, 164 ft rolls"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: plan.rolls
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Perimeter of one paddock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "tabular-nums",
								children: [plan.perimeter.toLocaleString("en-US"), " ft"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Energizer, if the fence line is clean"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: plan.joule }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Water to plan on"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "tabular-nums",
								children: [plan.waterGal, " gal/day"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Hay backup"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "tabular-nums",
								children: [plan.hayLb, " lb/day"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Rough example only: about ",
							plan.gdPerAcre,
							" goat-days per acre for this brush and slope setting, so a week on site instead of ",
							plan.days,
							" days would want about ",
							plan.herdForWeek,
							" goats. Real days depend on animal size, the plants, how dense they are, season, terrain, and what “cleared” means. Walk the site and adjust. Control often takes repeated visits over more than one season."
						]
					}),
					plan.days > 14 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "This herd will be there a long time. Clients and neighbors get tired of that, and bored goats test fences. More animals, or less acreage per visit."
					}) : null
				] }), forHire ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "Example quote, not a bid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-display text-3xl tabular-nums",
						children: [
							money(plan.low),
							"–",
							money(plan.high)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-[1fr_auto] gap-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Mobilization and travel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: money(plan.mobilization)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Herd days"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "tabular-nums",
								children: [
									money(plan.dayCharge),
									" × ",
									plan.days
								]
							}),
							plan.moveFee > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Moves between paddocks"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: money(plan.moveFee)
							})] }) : null,
							plan.second > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Resprout visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: money(plan.second)
							})] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Your time on this job"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "tabular-nums",
								children: [plan.ownHours, " hr"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Time, wear, fuel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: money(plan.ownCost)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Left after costs, low quote"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: cn("tabular-nums", plan.contribution < 0 && "text-danger"),
								children: money(plan.contribution)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							plan.contribution < 0 ? "At the rates you entered, the low end of this example does not cover the hours and wear. Raise the goat-day rate or mobilization before you treat it as a price." : "At the rates you entered, the low end of this example still covers the hours, fence wear, and fuel. The high end is room for access you have not seen yet.",
							" ",
							"Price, days, and paddocks are rough. Adjust them after you walk the brush. Control can take repeated visits over multiple seasons."
						]
					}),
					!ownsFence ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Gear to buy before this job can happen: about ",
							money(plan.gearLow),
							"–",
							money(plan.gearHigh),
							" for netting and an energizer. That is startup, not something one invoice should pretend to refund."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onSave,
							children: "Save quote"
						})
					}),
					savedNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: savedNote
					}) : null
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "If you hired it instead"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-3xl tabular-nums",
						children: [
							money(plan.low),
							"–",
							money(plan.high)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Same acres, using the example rates (",
							money(Number(rate) || 0),
							" per goat-day plus ",
							money(Number(mob) || 0),
							" mobilization and no travel). Doing it yourself is roughly ",
							plan.ownHours,
							" hours and ",
							money(plan.ownCost),
							" in time and wear if your hour is worth ",
							money(Number(wage) || 0),
							". These are planning figures, not a bid. Open “Rent the herd out” to change the rates, then adjust after you see the site. Control often takes more than one season."
						]
					})
				] })]
			})]
		}),
		forHire && quotes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Saved quotes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-line border-y border-line",
				children: quotes.map((quote) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: quote.client
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted tabular-nums",
						children: [
							acresText(quote.acres),
							" acres · ",
							quote.days,
							" days · ",
							money(quote.low),
							"–",
							money(quote.high)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => loadQuote(quote),
							children: "Load"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => removeQuote(quote.id),
							children: "Remove"
						})]
					})]
				}, quote.id))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "They clear"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: plants.clears.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: plant }, plant))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "Comes back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted",
						children: plants.repeats.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: plant }, plant))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: "Book the return when leaves push again, often 4–6 weeks. Price it before you leave the first time."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Do not fence them onto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: plants.toxic.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: plant }, plant))
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Poison ivy is a human problem",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Goats eat it. The oil stays on their hair and passes through manure. On a rental, tell the client not to pet the herd or handle droppings barehanded, and wear gloves and sleeves yourself when you load them. A rash on a client is how a clever idea becomes a bad week." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Set the paddock"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-3",
				children: fenceSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 shrink-0 tabular-nums text-muted",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
				}, step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "What the agreement should say"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: contractPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: point
				}, point))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Before you take money"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm tabular-nums text-muted",
					children: [
						done,
						" of ",
						businessChecks.length
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: businessChecks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					checked: Boolean(checks[item.id]),
					label: item.label,
					detail: item.detail,
					onChange: () => toggle(item.id)
				}, item.id))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm text-muted",
			children: "These goat-day, fence, and price figures are rough planning examples. They move with animal size, forage, brush species and density, season, terrain, and the result you actually want. Watch the site and change the plan. Control can take repeated visits over multiple seasons. Voltage, toxic plants, and local fence law are still your problem on the day."
		})
	] });
}
function PaddockFigure({ acres, rolls, side, shape }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative mx-auto w-full max-w-xs border-2 border-dashed border-fg/70", shape === "long" ? "aspect-[2/1]" : "aspect-square"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-2 text-xs text-muted",
					children: "gate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-6 flex flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl tabular-nums",
							children: acres
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "acres inside the net"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm tabular-nums",
							children: [
								rolls,
								" rolls · ",
								side,
								" ft side"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-3 bottom-2 text-xs text-muted",
					children: "water"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: "One enclosure at a time. The net moves. Do not price fence for the whole property if the herd only works a piece of it."
		})]
	});
}
//#endregion
export { ClearingPage as component };
