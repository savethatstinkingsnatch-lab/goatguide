//#region node_modules/.nitro/vite/services/ssr/assets/guide-FvRMF8pV.js
var breeds = [
	{
		id: "nigerian-dwarf",
		name: "Nigerian Dwarf",
		purposes: ["dairy", "companion"],
		size: "Mini",
		weight: "Does about 40–60 lb",
		climate: "Adaptable. Shade and air in heat.",
		temperament: "Bright, people-oriented if handled",
		notes: "The usual homestead milker. Butterfat is high; volume is quarts, not gallons, and it varies with the doe, the feed, and the lactation. Two or three does can cover a household only when those does actually produce enough. Often breed out of season.",
		watch: "Easy to overfeed. Grain can contribute to urinary stones in pet wethers when the ration is high in phosphorus or the calcium-to-phosphorus ratio is off."
	},
	{
		id: "nubian",
		name: "Nubian",
		purposes: ["dairy"],
		size: "Standard",
		weight: "Does about 135 lb and up",
		climate: "Handles heat. Wet cold wind is harder on them.",
		temperament: "Loud, nosy, affectionate",
		notes: "Long ears, roman nose, rich milk with less volume than a Saanen or Alpine. A good fit if you want flavor and can tolerate the voice.",
		watch: "Neighbors hear them. Provide a dry draft break in winter."
	},
	{
		id: "alpine",
		name: "Alpine",
		purposes: ["dairy"],
		size: "Standard",
		weight: "Does about 135 lb",
		climate: "Hardy across cold and mixed weather",
		temperament: "Active, alert, workable",
		notes: "Reliable production and a lot of color patterns. Upright ears. A practical full-size dairy goat if you want more milk than a Nigerian and less noise than a Nubian.",
		watch: "They are athletic. Fence for a jumper, not a sheep."
	},
	{
		id: "saanen",
		name: "Saanen",
		purposes: ["dairy"],
		size: "Standard",
		weight: "Does about 145 lb",
		climate: "Cool and mild. Pale skin can burn.",
		temperament: "Calmer than most dairy breeds",
		notes: "White or cream Swiss dairy goat with high volume. A strong choice when milk in the pail is the whole point.",
		watch: "Sunburn and pink skin. Offer real shade. Production eats feed — budget hay and a milking ration."
	},
	{
		id: "lamancha",
		name: "LaMancha",
		purposes: ["dairy"],
		size: "Standard",
		weight: "Does about 130 lb",
		climate: "Adaptable",
		temperament: "Often steady and quiet",
		notes: "American dairy breed with very short ears, called elf or gopher. Milk and disposition are the reason to keep them; the ears are just how you spot them.",
		watch: "Ear tattoos and scrapes need a closer look because there is less ear to see."
	},
	{
		id: "boer",
		name: "Boer",
		purposes: ["meat"],
		size: "Large",
		weight: "Does often 150–200 lb",
		climate: "Best where parasites are manageable",
		temperament: "Solid, stocky, can be pushy at feed",
		notes: "Fast growth and a muscular carcass. The common show and meat goat. Fine on brush, but not the toughest low-input animal in a humid summer.",
		watch: "In the wet Southeast, plan fecals from the start and use FAMACHA only after formal training and certification. Many keepers cross them onto Kiko or Spanish for hardiness."
	},
	{
		id: "kiko",
		name: "Kiko",
		purposes: ["meat", "clearing"],
		size: "Large",
		weight: "Does often 100–150 lb, bucks heavier",
		climate: "Built for low input and parasite pressure",
		temperament: "Independent, hardy, less pet-like",
		notes: "New Zealand meat goat selected to raise kids on forage. One of the better breeds when the job is brush, rain, and fewer vet calls.",
		watch: "They are not lawn ornaments. Fence well. Don't expect show-ring conformation."
	},
	{
		id: "spanish",
		name: "Spanish",
		purposes: ["meat", "clearing"],
		size: "Medium to large",
		weight: "Varies widely by line",
		climate: "Hot, dry, and rough country",
		temperament: "Wary, tough, good mothers",
		notes: "A landrace, not a single look. Centuries on brush in the South and Southwest. Useful meat and clearing goats when you can find a real herd, not a Boer painted as one.",
		watch: "Ask what the line actually survives on. The name gets used loosely."
	},
	{
		id: "angora",
		name: "Angora",
		purposes: ["fiber"],
		size: "Medium",
		weight: "Does about 80–110 lb",
		climate: "Dry and mild. Miserable in cold rain after shearing.",
		temperament: "Gentler, more weather-sensitive",
		notes: "Mohair, sheared about twice a year. A fiber project, not a brush crew. Kids chill easily until the fleece comes back.",
		watch: "Plan shelter for shear day. Wet matted fleece is a health problem, not a rustic look."
	},
	{
		id: "pygmy",
		name: "Pygmy",
		purposes: ["companion", "meat"],
		size: "Mini",
		weight: "Does about 50–70 lb",
		climate: "Adaptable if they stay dry",
		temperament: "Sturdy, comic, stubborn",
		notes: "A small West African goat kept mostly as a companion. Not a dairy breed. Two wethers in a well-fenced yard is the usual pet setup.",
		watch: "Urinary stones are a risk if wethers get a high-phosphorus or unbalanced grain ration. Forage first; keep grain small and balance any supplement."
	}
];
var purposeLabel = {
	all: "All",
	dairy: "Dairy",
	meat: "Meat",
	fiber: "Fiber",
	companion: "Companions",
	clearing: "Brush"
};
var startChecks = [
	{
		id: "zoning",
		label: "Read city, county, and HOA rules before you buy goats",
		detail: "Many places limit numbers, ban bucks, require setbacks, or treat goats as livestock you cannot keep on a small lot. “They’re pets” is not a variance.",
		tags: ["all"]
	},
	{
		id: "pair",
		label: "Plan on at least two goats",
		detail: "A single goat is a welfare problem. They need a herd mate they can see and touch.",
		tags: ["all"]
	},
	{
		id: "fence-first",
		label: "Finish the fence before the animals arrive",
		detail: "Woven wire about 4–5 feet, tight to the ground, plus a hot wire if they are athletic. No barbed wire as the working fence.",
		tags: ["all"]
	},
	{
		id: "quarantine",
		label: "Quarantine newcomers for 30 days",
		detail: "Separate pen, separate feed, boots you can clean. Test for CAE, CL, and Johne's when the seller will allow it.",
		tags: ["all"]
	},
	{
		id: "mineral",
		label: "Offer a mineral formulated for goats",
		detail: "Copper needs and toxicity risk depend on the whole diet and local forage. Sheep are particularly vulnerable to excess copper. If you keep both, plan separate minerals with a veterinarian or nutrition adviser.",
		tags: ["all"]
	},
	{
		id: "vet",
		label: "Find a vet who actually sees goats",
		detail: "Save the number before kidding season or a down animal. Ask about CDT vaccine and a fecal plan.",
		tags: ["all"]
	},
	{
		id: "cdt",
		label: "Put CDT on the calendar",
		detail: "Clostridium C and D plus tetanus. Does are typically boosted a few weeks before kidding. Kids need their own series.",
		tags: ["all"]
	},
	{
		id: "hoof",
		label: "Get hoof shears and learn a trim",
		detail: "Most goats need a trim every 6–12 weeks unless they live on rock. Overgrown hooves abscess.",
		tags: ["all"]
	},
	{
		id: "shelter",
		label: "A dry, draft-free shed",
		detail: "Goats handle cold better than rain and wind. About 15 square feet indoors for a mini, 20–25 for a standard goat.",
		tags: ["all"]
	},
	{
		id: "water",
		label: "Water that cannot freeze solid or go foul",
		detail: "They drink more than people expect, especially in milk or on browse in summer.",
		tags: ["all"]
	},
	{
		id: "milk-stand",
		label: "A milk stand and a mastitis plan",
		detail: "Strip a few squirts, watch for clots and a hot half, and keep the stand boring and clean.",
		tags: ["dairy"]
	},
	{
		id: "cae",
		label: "Ask for CAE test results on dairy stock",
		detail: "CAE spreads in milk and close contact. Many dairy herds test and pasteurize or heat-treat colostrum.",
		tags: ["dairy"]
	},
	{
		id: "no-grain-pets",
		label: "Keep grain small for pet wethers and bucks",
		detail: "Forage is the base. Grain can contribute to urinary stones, especially if the ration is high in phosphorus or the calcium-to-phosphorus ratio is off. Any supplement needs balancing, not a free-choice bowl.",
		tags: ["companion"]
	},
	{
		id: "famacha",
		label: "Train and certify before you use a FAMACHA card",
		detail: "The card requires formal training and certification. It screens for anemia associated with barber-pole worm. A pale eyelid does not name the cause or choose the treatment. Don't deworm the whole herd on a calendar.",
		tags: ["humid"]
	},
	{
		id: "cold-water",
		label: "Plan unfrozen water and a wind break",
		detail: "Wet plus wind kills kids and freshly shorn goats. Cold alone, if they are dry, usually does not.",
		tags: ["cold"]
	},
	{
		id: "shade",
		label: "Shade and airflow before the first hot week",
		detail: "Goats do not sweat well. A baking metal shed with no air is worse than no shed.",
		tags: ["dry"]
	},
	{
		id: "yard-limit",
		label: "Keep the yard herd small and the fence bored-goat proof",
		detail: "No intact buck in a suburban yard. Bucks stink in rut, crow with their voices, and escape. Wethers or does only for companions. A yard is a dry lot. All their feed is what you bring. Two minis is plenty to start.",
		tags: ["yard"]
	},
	{
		id: "clear-herd",
		label: "For brush, choose wethers or open does, not a buck",
		detail: "Disbudded or polled animals tangle less in electronet. Train them on hot wire at home first.",
		tags: ["clearing"]
	}
];
var businessChecks = [
	{
		id: "policy",
		label: "Liability policy that covers stock on someone else's land",
		detail: "Ask for care, custody, and control, not only injuries on your farm. Get this before the first paid job.",
		tags: ["rent"]
	},
	{
		id: "agreement",
		label: "A one-page agreement",
		detail: "What “cleared” means, who checks daily, dogs confined, hidden hazards, weather delays, deposit, and that you are not leaving a lawn.",
		tags: ["rent"]
	},
	{
		id: "tester",
		label: "A fence tester and a spare net repair kit",
		detail: "If the far end drops under about 5,000 volts, goats start doing math.",
		tags: ["rent"]
	},
	{
		id: "train",
		label: "Train the herd on electronet at home",
		detail: "The first time they learn a fence is optional should not be in a client's front ravine.",
		tags: ["rent"]
	},
	{
		id: "transport",
		label: "Transport that does not depend on luck",
		detail: "A trailer or rack you have loaded on a calm day. Panels. No piling goats into an open truck bed.",
		tags: ["rent"]
	},
	{
		id: "ivy",
		label: "A poison-ivy protocol",
		detail: "Urushiol stays on hair and in manure. Gloves, sleeves, and a warning that clients should not pet the crew mid-job.",
		tags: ["rent"]
	},
	{
		id: "nights",
		label: "A night plan for dogs and coyotes",
		detail: "Electronet deters; it is not a vault. Some herds come home at dusk. Some stay with a guardian dog.",
		tags: ["rent"]
	},
	{
		id: "walk",
		label: "Walk every site before you price it",
		detail: "Wells, scrap, cliffs, neighbors' dogs, and a hillside of rhododendron change the job or cancel it.",
		tags: ["rent"]
	}
];
var symptoms = [
	{
		id: "off",
		label: "Off feed or standing apart"
	},
	{
		id: "pale",
		label: "Pale inner eyelids"
	},
	{
		id: "jaw",
		label: "Swelling under the jaw"
	},
	{
		id: "bloat",
		label: "Tight, drum-like left side"
	},
	{
		id: "strain",
		label: "Straining, little or no urine"
	},
	{
		id: "labor",
		label: "Active labor with no progress"
	},
	{
		id: "kidscour",
		label: "Scours in a kid"
	},
	{
		id: "scour",
		label: "Scours in an adult"
	},
	{
		id: "limp",
		label: "Limping"
	},
	{
		id: "udder",
		label: "Hot, hard, or clumpy udder"
	},
	{
		id: "cough",
		label: "Cough or hard breathing"
	},
	{
		id: "down",
		label: "Down and cannot rise"
	},
	{
		id: "abscess",
		label: "Lump or abscess"
	},
	{
		id: "itch",
		label: "Itching or hair loss"
	},
	{
		id: "neuro",
		label: "Staggering or star-gazing"
	}
];
var issues = [
	{
		id: "calculi",
		name: "Urinary blockage",
		urgency: "emergency",
		symptoms: [
			"strain",
			"off",
			"down",
			"neuro"
		],
		summary: "Mostly wethers and bucks. Stones block the urethra. They strain, look constipated, dribble, or stop urinating, then crash.",
		steps: "This is an emergency, not a home remedy. Call a vet now. Later, keep forage as the base, grain small and balanced for calcium and phosphorus, water available, and a goat mineral — not an unbalanced pet ration."
	},
	{
		id: "bloat",
		name: "Bloat",
		urgency: "emergency",
		symptoms: [
			"bloat",
			"off",
			"down",
			"neuro"
		],
		summary: "The left flank drums tight, often after lush pasture or a grain spill. They may kick at the belly, grind teeth, or go down.",
		steps: "Remove the feed. Keep them moving only if they are still up and a vet is already on the way. A tight, miserable goat is not a wait-until-morning problem."
	},
	{
		id: "kidding",
		name: "Kidding trouble",
		urgency: "emergency",
		symptoms: [
			"labor",
			"down",
			"off"
		],
		summary: "Active pushing with no kid, or a visible foot and nose that does not advance, should not run past about half an hour.",
		steps: "Clean hands, see what is presented, and call the vet if you do not know the correction. Have your kit ready before the due window, not during it."
	},
	{
		id: "down",
		name: "Down goat",
		urgency: "emergency",
		symptoms: [
			"down",
			"neuro",
			"off"
		],
		summary: "A goat that cannot stand may be hypocalcemia, pregnancy toxemia, pneumonia, poisoning, injury, or a parasite crash.",
		steps: "Get them sternal, sheltered, and call a vet. Do not pour oral fluids into a goat that cannot swallow."
	},
	{
		id: "poison",
		name: "Possible poisoning",
		urgency: "emergency",
		symptoms: [
			"neuro",
			"off",
			"down",
			"bloat"
		],
		summary: "Rhododendron, azalea, mountain laurel, yew, oleander, and wilted cherry leaves are classic killers. Hungry goats in a bare paddock sample things they would otherwise skip.",
		steps: "Separate them from the plant, bring a sample, and call a vet. Do not fence a herd onto a hedge of laurel and hope they know better."
	},
	{
		id: "haemonchus",
		name: "Barber-pole worm",
		urgency: "today",
		symptoms: [
			"pale",
			"jaw",
			"off",
			"down"
		],
		summary: "Haemonchus sucks blood. Eyelids go pale, then bottle jaw, then sudden death. It is the central health problem of humid goat country.",
		steps: "A pale eyelid needs a same-day veterinary assessment. It does not by itself diagnose barber-pole worm or tell you which treatment to use. FAMACHA, and only after formal training and certification, is a screen for anemia associated with that worm. Do not deworm the whole herd on a calendar. Fecals help your vet avoid selecting resistant worms."
	},
	{
		id: "ketosis",
		name: "Pregnancy toxemia",
		urgency: "today",
		symptoms: [
			"off",
			"down",
			"neuro"
		],
		summary: "Late pregnancy, often fat does or those carrying multiples, stop eating and get dull or wobbly. Energy demand outruns intake.",
		steps: "Call the vet the same day. Prevention is body condition and rising energy in the last six weeks, not a crash diet or a sudden feast."
	},
	{
		id: "milkfever",
		name: "Hypocalcemia",
		urgency: "today",
		symptoms: [
			"down",
			"off",
			"neuro"
		],
		summary: "Low calcium around kidding. They go stiff, cold, or down, sometimes looking like a neurological case.",
		steps: "This is a same-day vet call. Calcium is not something to guess with a drench if you have never done it."
	},
	{
		id: "coccidia",
		name: "Coccidiosis",
		urgency: "today",
		symptoms: ["kidscour", "off"],
		summary: "Kids, especially in wet crowded pens, get diarrhea, straining, and a dull coat. It damages the gut if you wait.",
		steps: "Talk to your vet about a kid protocol before kidding, not after the tails are pasted. Adults rarely look like this; kids do."
	},
	{
		id: "pneumonia",
		name: "Pneumonia",
		urgency: "today",
		symptoms: [
			"cough",
			"off",
			"down"
		],
		summary: "Fever, cough, noisy or fast breathing. Often follows weather swings, transport, or a wet drafty shed.",
		steps: "Take a temperature and call. Respiratory disease in goats moves quickly, especially in kids."
	},
	{
		id: "mastitis",
		name: "Mastitis",
		urgency: "today",
		symptoms: ["udder", "off"],
		summary: "One half becomes hot, hard, or watery, sometimes with clots. She may refuse the kid or the stand.",
		steps: "Milk out, keep the area clean, and call. Don't keep selling or drinking that milk. A half that goes cold and blue is an emergency."
	},
	{
		id: "scours",
		name: "Adult scours",
		urgency: "watch",
		symptoms: ["scour", "off"],
		summary: "A feed change, too much grain, worms, or coccidia. One pile after new hay is not the same as a goat going hollow.",
		steps: "Pull grain, offer hay and water, check eyelids, and call if they are weak, bloody, or still scouring the next day."
	},
	{
		id: "hoof",
		name: "Hoof rot or scald",
		urgency: "watch",
		symptoms: ["limp"],
		summary: "Soft, smelly tissue between the toes, worse in mud. Also look for a stone, a sprain, or an abscess.",
		steps: "Trim, get them onto dry ground, and treat as your vet recommends. A goat lame on one leg with a hot foot may have an abscess to open."
	},
	{
		id: "cl",
		name: "Abscess and CL",
		urgency: "watch",
		symptoms: ["abscess"],
		summary: "Caseous lymphadenitis causes internal and external abscesses and contaminates pens for a long time. Not every lump is CL, but treat pus as contagious until you know.",
		steps: "Isolate. Do not lance an abscess in the main pen or on a client site. Ask a vet about testing and whether that animal belongs in the herd."
	},
	{
		id: "skin",
		name: "Lice or mites",
		urgency: "watch",
		symptoms: ["itch"],
		summary: "Rubbing, bald patches, or tiny moving lice in the coat. More obvious in winter.",
		steps: "Confirm what you are looking at before you treat. Many products are species-specific and some are illegal in milkers."
	}
];
var urgencyLabel = {
	emergency: "Emergency",
	today: "Call today",
	watch: "Watch closely"
};
var seasons = [
	{
		id: "spring",
		name: "Spring",
		points: [
			"Kidding if you bred in the fall. Sleep near the barn when does bag up and the ligaments soften.",
			"Kids and coccidia: dry bedding beats any bottle of medicine you forgot to buy.",
			"Turnout onto growing browse. Shift paddocks before the favorite plants are down to sticks.",
			"If you are FAMACHA-certified, score eyelids as the grass rises. Barber pole wakes up with the warmth. A pale lid still needs a vet, not a herd-wide dewormer.",
			"Hoof trim after the mud, and CDT boosters on the schedule your vet set."
		]
	},
	{
		id: "summer",
		name: "Summer",
		points: [
			"Shade, airflow, and water you would drink yourself. Heat stress looks like panting and a goat that will not graze.",
			"Parasites peak. Score eyelids, run fecals, and rest paddocks. Do not deworm by the calendar.",
			"Clearing jobs fit this season. Move the net when the paddock is worked, not when it is dirt.",
			"Flies and wet udders. Keep maternity and milking areas scraped.",
			"Make or buy winter hay now. Later is more expensive and worse."
		]
	},
	{
		id: "fall",
		name: "Fall",
		points: [
			"Most dairy breeds cycle as days shorten. Bucks get loud and fragrant. House them apart.",
			"Breed for a kidding window you can actually attend. Gestation is about 150 days.",
			"Body condition before winter. A thin doe has nothing to give in late pregnancy.",
			"Second-pass brush. Resprouts in autumn are where woody plants actually lose.",
			"Check fence before the rut. A bored buck is an engineer."
		]
	},
	{
		id: "winter",
		name: "Winter",
		points: [
			"Dry shelter and liquid water matter more than heat lamps.",
			"The last six weeks of pregnancy need better hay or a measured grain bump. Fat and starvation both end badly.",
			"Kidding kit: lube, gloves, iodine, towels, a heat plan for kids, colostrum idea if a doe has none.",
			"Hooves still grow. Ice and deep mud hide problems until they are lame.",
			"Clearing slows. Browse is dormant and goats push fences when they are bored and hungry."
		]
	}
];
var fenceSteps = [
	"Walk the ground. Flag wells, scrap, cliffs, bee hives, and any solid stand of rhododendron, laurel, or yew.",
	"Cut a corridor for the net. Vegetation lying on the wire steals the shock, and then the goats learn the fence is a suggestion.",
	"Set corners so the net stays off metal. A T-post touching the hot strands grounds the whole paddock.",
	"Unroll goat-height electronet, about 42 inches. Sheep net is a jumping lesson. Overlap ends and leave a gate you can open without wrestling.",
	"Three ground rods, about 6 feet, in damp soil, spaced several feet apart. Dry gravel needs a longer drink of water on the rods.",
	"Energize and test the far end. Keep it at or above about 5,000 volts, higher if the herd is bold. Under 3,000, they will try.",
	"Water, loose goat mineral, and a little hay go in before the goats do. A bare paddock plus toxic leftovers is how poisonings happen.",
	"Watch the first hour. Pull any animal that is determined to defeat the net. Horns and electronet tangle — disbudded or polled herds are the rental standard.",
	"Every day: voltage, water, head count, and a look for a goat on the wrong side. When they camp on the fence and ignore the brush, move them.",
	"Rest the patch 4–6 weeks and come back for resprouts. One pass is a haircut. The second pass is the control."
];
var contractPoints = [
	"“Cleared” means browse defoliated and woody plants stressed, not bare dirt, stumps pulled, or a finish mow.",
	"The client confines dogs, marks hazards, and says who may open the gate.",
	"Someone looks at the herd every day. Say whether that is you, them, or both, and what a photo check is worth.",
	"Poison ivy and oak oil stays on hair and manure. Handlers and clients wear sleeves and do not cuddle the crew.",
	"Weather, a dead energizer, or a predator night can pause the clock. Write that down.",
	"A deposit before you haul. Travel is real money even if they cancel the morning you load.",
	"A second visit for resprouts is a separate line, priced before you leave the first time.",
	"You carry insurance that contemplates animals on land you do not own. The agreement is not a substitute for that."
];
var plants = {
	clears: [
		"Blackberry and other briars",
		"Kudzu",
		"Poison ivy and poison oak",
		"Multiflora rose",
		"Honeysuckle, privet, buckthorn",
		"Autumn olive and bush honeysuckle",
		"Sericea lespedeza and a lot of broadleaf weeds",
		"Saplings and low limbs they can reach"
	],
	repeats: [
		"Huge bramble crowns — leaves go, crowns return",
		"Autumn olive and tree of heaven resprouts",
		"Black locust and other root-sprouters",
		"Anything they only hedge the outside of",
		"Vines in trees they cannot climb safely"
	],
	toxic: [
		"Rhododendron, azalea, mountain laurel",
		"Yew",
		"Oleander",
		"Wilted wild cherry leaves",
		"Large amounts of nightshade or bracken",
		"Ornamental hedges you cannot identify"
	]
};
var topics = [
	{
		href: "/here",
		title: "Start here",
		text: "Seven steps before the first goat: rules, a pair, fence, quarantine, hay, CDT, and a vet."
	},
	{
		href: "/start",
		title: "Before the first goat",
		text: "Herd size, quarantine, and what has to be built before the trailer arrives."
	},
	{
		href: "/breeds",
		title: "Breeds",
		text: "Dairy, meat, fiber, pets, and the hardy goats that actually work brush."
	},
	{
		href: "/care",
		title: "Feed, fence, shelter",
		text: "Hay math, copper, dry-lot space, and fence that survives a bored goat."
	},
	{
		href: "/health",
		title: "Health watch",
		text: "Match what you see to how fast it becomes a vet call."
	},
	{
		href: "/year",
		title: "The keeper's year",
		text: "Breeding, kidding, parasites, and a 150-day due window."
	},
	{
		href: "/clearing",
		title: "Fence a clearing paddock",
		text: "Netting, stocking, water, and how many days your herd needs on the brush."
	},
	{
		href: "/clearing",
		hash: "rent",
		title: "Rent the herd out",
		text: "Price a client job, including travel, moves, and whether it pays your time."
	},
	{
		href: "/glossary",
		title: "Glossary",
		text: "Doe, buck, wether, CDT, FAMACHA, CAE, CL, Johne’s, and electronet."
	}
];
//#endregion
export { issues as a, seasons as c, topics as d, urgencyLabel as f, fenceSteps as i, startChecks as l, businessChecks as n, plants as o, contractPoints as r, purposeLabel as s, breeds as t, symptoms as u };
