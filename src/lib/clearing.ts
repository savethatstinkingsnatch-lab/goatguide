export type Brush = "light" | "moderate" | "heavy";
export type Terrain = "easy" | "mixed" | "steep";
export type Shape = "square" | "long" | "irregular";

export type ClearingInput = {
  acres: number;
  brush: Brush;
  terrain: Terrain;
  shape: Shape;
  herd: number;
  miles: number;
  ratePerGoat: number;
  mobilizationBase: number;
  perMile: number;
  wage: number;
  waterOnSite: boolean;
  secondPass: boolean;
  forHire: boolean;
  ownsFence: boolean;
};

/** Goat-days to defoliate one acre. Roots usually need a second visit. */
export const GOAT_DAYS_PER_ACRE: Record<Brush, number> = {
  light: 110,
  moderate: 240,
  heavy: 460,
};

const TERRAIN_TIME: Record<Terrain, number> = {
  easy: 1,
  mixed: 1.12,
  steep: 1.28,
};

const TERRAIN_PRICE: Record<Terrain, number> = {
  easy: 1,
  mixed: 1.12,
  steep: 1.3,
};

const SHAPE: Record<Shape, number> = {
  square: 1,
  long: 1.22,
  irregular: 1.4,
};

function clamp(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export type ClearingPlan = {
  acres: number;
  herd: number;
  goatDays: number;
  gdPerAcre: number;
  paddocks: number;
  acresPer: number;
  daysEach: number;
  days: number;
  herdForWeek: number;
  side: number;
  perimeter: number;
  rolls: number;
  joule: string;
  waterGal: number;
  hayLb: number;
  dayCharge: number;
  mobilization: number;
  moveFee: number;
  second: number;
  low: number;
  high: number;
  ownHours: number;
  ownCost: number;
  contribution: number;
  gearLow: number;
  gearHigh: number;
};

export function planClearing(input: ClearingInput): ClearingPlan {
  const acres = clamp(input.acres, 0.1, 500);
  const herd = clamp(Math.round(input.herd), 2, 400);
  const miles = clamp(input.miles, 0, 800);
  const rate = clamp(input.ratePerGoat, 0, 80);
  const mobBase = clamp(input.mobilizationBase, 0, 8000);
  const perMile = clamp(input.perMile, 0, 30);
  const wage = clamp(input.wage, 0, 400);

  const gdPerAcre = GOAT_DAYS_PER_ACRE[input.brush] * TERRAIN_TIME[input.terrain];
  const goatDaysExact = gdPerAcre * acres;
  const target = input.forHire ? 12 : 10;
  const minDays = input.forHire ? 3 : 2;
  const rawAcresPer = (herd * target) / gdPerAcre;
  const paddocks = Math.max(1, Math.ceil(acres / rawAcresPer - 1e-9));
  const acresPer = acres / paddocks;
  const daysEach = Math.max(minDays, Math.ceil((gdPerAcre * acresPer) / herd));
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
  const second = input.secondPass ? Math.round(dayCharge * days * 0.45 + mobBase * 0.5) : 0;
  const job = mobilization + dayCharge * days + moveFee + second;
  const low = Math.round(job * 0.92);
  const high = Math.round(job * 1.22);

  const ownHours = Math.round((4 + days * 0.6 + Math.max(0, paddocks - 1) * 1.5 + 2) * 10) / 10;
  const fuel = miles * 2 * 0.7;
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
    gearHigh,
  };
}

export function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function acresText(n: number) {
  const rounded = Math.round(n * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
