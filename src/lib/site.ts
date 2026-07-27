/**
 * Single source of truth for ONE ROOFING business facts (NAP, services, service area).
 * Every page, the footer, the JSON-LD block and the sitemap read from here so the
 * business details can never drift out of sync.
 */

export const site = {
  name: "ONE ROOFING",
  legalName: "ONE ROOFING",
  /** Used for metadataBase, canonicals, sitemap and JSON-LD. */
  url: "https://www.one-roofing.com",
  tagline: "San Francisco & Bay Area Roofing Contractor",
  description:
    "ONE ROOFING is a licensed, bonded and insured roofing contractor serving San Francisco and the Bay Area. Roof replacement, flat roofs, leak repair, gutters, skylights and inspections.",
  phoneDisplay: "+1 (415) 740-9940",
  phoneHref: "tel:+14157409940",
  /** E.164, for schema.org and machine consumption. */
  phoneE164: "+14157409940",
  email: "info@one-roofing.com",
  emailHref: "mailto:info@one-roofing.com",
  address: {
    street: "1160 Battery Street East, Suite 100",
    city: "San Francisco",
    state: "California",
    stateCode: "CA",
    zip: "94111",
    country: "US",
  },
  hours: {
    display: "Mon – Sat, 8:00 AM – 6:00 PM",
    daysDisplay: "Monday – Saturday",
    timeDisplay: "8:00 AM – 6:00 PM",
    /** schema.org openingHours format */
    schema: "Mo-Sa 08:00-18:00",
  },
  geo: {
    // Approximate coordinates for 1160 Battery St E, San Francisco, CA 94111.
    latitude: 37.8009,
    longitude: -122.4009,
  },
  googleReviewsUrl:
    "https://www.google.com/search?q=ONE+ROOFING+1160+Battery+Street+East+San+Francisco",
} as const;

export const stats = [
  {
    value: 300,
    suffix: "+",
    label: "Roofing projects completed",
    detail: "Residential and commercial roofs across the Bay Area.",
  },
  {
    value: 15,
    suffix: "+",
    label: "People on the team",
    detail: "Estimators, foremen and installers — no revolving-door subs.",
  },
  {
    value: 250,
    suffix: "+",
    label: "Satisfied clients",
    detail: "Homeowners, landlords and property managers.",
  },
] as const;

export const trustPoints = [
  {
    title: "Licensed, Bonded & Insured",
    detail: "Fully covered on every job site, residential or commercial.",
  },
  {
    title: "Industry-Leading Warranty",
    detail: "Workmanship and materials backed in writing.",
  },
  {
    title: "24/7 Emergency Support",
    detail: "Storm damage and active leaks answered around the clock.",
  },
  {
    title: "100% Satisfaction Guaranteed",
    detail: "We do not call a roof finished until you say it is.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  /** Short label used in nav and compact lists. */
  navTitle: string;
  /** One-line benefit shown on cards. */
  benefit: string;
  metaTitle: string;
  metaDescription: string;
  /** Card / thumbnail image. */
  cardImage: { src: string; width: number; height: number; alt: string };
  /** Large image used at the top of the service page. */
  heroImage: { src: string; width: number; height: number; alt: string };
  intro: string[];
  signs: { heading: string; items: string[] };
  process: { heading: string; items: string[] };
};

export const services: Service[] = [
  {
    slug: "asphalt-shingle-roof-replacement",
    title: "Asphalt Shingle Roof Replacement",
    navTitle: "Asphalt Shingle Roof Replacement",
    benefit:
      "A full tear-off and rebuild for aging, leaking or shingle-shedding roofs.",
    metaTitle: "Asphalt Shingle Roof Replacement in San Francisco & the Bay Area",
    metaDescription:
      "Full asphalt shingle roof replacement by ONE ROOFING. Premium-grade shingles, current installation methods and a written warranty. Serving San Francisco and 30+ Bay Area cities.",
    cardImage: {
      src: "/images/service-asphalt-shingle-roof-replacement.png",
      width: 580,
      height: 385,
      alt: "Storm-damaged asphalt shingles peeled back from a roof, exposing bare decking underneath",
    },
    heroImage: {
      src: "/images/project-completed-roof.jpg",
      width: 1500,
      height: 844,
      alt: "ONE ROOFING installer hand-nailing an architectural asphalt shingle into place on a Bay Area roof",
    },
    intro: [
      "Asphalt shingle roofs give up their weather protection slowly, then all at once. Curling edges, bald patches where the granules have washed off, shingles in the yard after a storm, or a stain spreading across a bedroom ceiling all point to the same conclusion: patching is buying time, not fixing the problem.",
      "ONE ROOFING replaces asphalt shingle roofs end to end — tear-off, deck inspection, underlayment, flashing, ventilation and new premium-grade shingles. We use current installation methods rather than whatever was standard when your original roof went on, and the finished job is backed by our written warranty.",
    ],
    signs: {
      heading: "Signs it is time to replace, not repair",
      items: [
        "Shingles that are curling, cracked, buckled or missing outright",
        "Granules collecting in the gutters and bald spots on the roof surface",
        "Recurring leaks or ceiling stains that keep coming back after repairs",
        "A roof that is at or past the 20-year mark",
        "Daylight or moisture visible in the attic",
      ],
    },
    process: {
      heading: "How the replacement runs",
      items: [
        "On-site inspection and a written, itemised estimate — no guesswork pricing",
        "Full tear-off of the old roofing down to the deck",
        "Deck repair where rot or soft spots are found, before anything new goes down",
        "New underlayment, drip edge and flashing at every penetration and valley",
        "Premium-grade shingle installation, ridge venting and a clean, magnet-swept site",
      ],
    },
  },
  {
    slug: "flat-roof-replacement",
    title: "Flat Roof Replacement",
    navTitle: "Flat Roof Replacement",
    benefit:
      "Durable, fully weatherproofed flat roofing for homes and commercial buildings.",
    metaTitle: "Flat Roof Replacement in San Francisco & the Bay Area",
    metaDescription:
      "Residential and commercial flat roof replacement by ONE ROOFING. Ponding water, cracking and repeat leaks solved with durable weatherproof membrane systems. Licensed, bonded and insured.",
    cardImage: {
      src: "/images/service-flat-roof-replacement.jpg",
      width: 5050,
      height: 3370,
      alt: "Roofers torch-applying a modified bitumen membrane across a flat commercial roof",
    },
    heroImage: {
      src: "/images/service-flat-roof-replacement.jpg",
      width: 5050,
      height: 3370,
      alt: "ONE ROOFING crew heat-welding a new weatherproof membrane onto a flat commercial roof deck",
    },
    intro: [
      "Flat roofs fail differently than pitched ones. Water sits instead of running off, so a low spot that ponds after every storm slowly works its way through seams, cracks and tired membrane until it reaches the structure underneath.",
      "We replace flat roofs on both homes and commercial buildings, using durable weatherproof materials specified for the way the roof actually drains. Slope, seams, edge detail and penetrations all get addressed together — because on a flat roof, a good membrane over bad detailing still leaks.",
    ],
    signs: {
      heading: "Signs your flat roof is done",
      items: [
        "Standing or ponding water that lingers long after the rain stops",
        "Cracking, blistering, splitting or shrinking membrane",
        "Seams and flashings lifting at edges, parapets or roof penetrations",
        "Leaks that reappear in the same place season after season",
        "Interior water staining, damp insulation or a sagging deck",
      ],
    },
    process: {
      heading: "What replacement involves",
      items: [
        "Full survey of drainage, slope, ponding areas and existing membrane condition",
        "Tear-off and inspection of the deck and insulation below",
        "Correction of drainage and slope problems before the new system goes on",
        "New weatherproof membrane with fully sealed seams, edges and penetrations",
        "Final water testing and a written warranty on the completed system",
      ],
    },
  },
  {
    slug: "gutter-downspout-replacement",
    title: "Gutter & Downspout Replacement",
    navTitle: "Gutter & Downspout Replacement",
    benefit:
      "Seamless gutters and downspouts that move water away from the building, not into it.",
    metaTitle: "Gutter & Downspout Replacement in San Francisco & the Bay Area",
    metaDescription:
      "Seamless gutter and downspout replacement by ONE ROOFING. Stop overflow, fascia rot and foundation water damage — and sharpen your home's curb appeal. Serving the Bay Area.",
    cardImage: {
      src: "/images/service-gutter-downspout-replacement.png",
      width: 400,
      height: 265,
      alt: "Seamless gutter and downspout running down the corner of a home's soffit and siding",
    },
    heroImage: {
      src: "/images/one-roofing-crew-at-work.jpg",
      width: 4912,
      height: 4993,
      alt: "ONE ROOFING technicians working from a ladder at the eaves and downspout of a residential property",
    },
    intro: [
      "Gutters are the least glamorous part of a roof and the most likely to cause expensive damage when they fail. Once water spills over the edge instead of running to a downspout, it goes after fascia boards, siding, landscaping and eventually the foundation.",
      "We replace tired, sagging or undersized gutter systems with seamless, high-quality gutters and correctly sized downspouts, pitched and hung so water actually reaches the ground where you want it. The system disappears into the roofline — which is exactly what good gutters should do for curb appeal.",
    ],
    signs: {
      heading: "Signs your gutters need replacing",
      items: [
        "Water sheeting over the front edge during heavy rain",
        "Sagging, pulling away from the fascia, or visibly out of pitch",
        "Rust, splits, or seams that leak no matter how often they are sealed",
        "Rotting fascia boards, stained siding or eroded landscaping below",
        "Pooling water or damp basement walls near the foundation",
      ],
    },
    process: {
      heading: "What we install",
      items: [
        "Seamless gutter runs formed to the length of your roofline",
        "Downspouts sized and placed for the roof area they actually drain",
        "Correct pitch and hanger spacing so nothing sags in five years",
        "Fascia and drip-edge repair where old gutters caused damage",
        "Full removal and disposal of the old system",
      ],
    },
  },
  {
    slug: "skylight-replacement",
    title: "Skylight Replacement",
    navTitle: "Skylight Replacement",
    benefit:
      "Weather-tight skylight installation that ends leaks, drafts and heat loss.",
    metaTitle: "Skylight Replacement & Installation in San Francisco & the Bay Area",
    metaDescription:
      "Weather-tight skylight replacement and installation by ONE ROOFING. Fix leaking, drafty or fogged skylights and cut energy loss without giving up natural light.",
    cardImage: {
      src: "/images/service-skylight-replacement.webp",
      width: 2560,
      height: 1709,
      alt: "Weather-tight skylight flashed into a shingle roof alongside vent penetrations",
    },
    heroImage: {
      src: "/images/service-skylight-replacement.webp",
      width: 2560,
      height: 1709,
      alt: "A replacement skylight installed and flashed into a pitched roof by ONE ROOFING",
    },
    intro: [
      "A skylight is a hole cut in your roof. Done well, it is invisible for decades. Done badly — or left in place twenty years past its service life — it becomes the single most reliable leak on the building.",
      "We replace failing skylights and install new ones as a proper roofing detail, not an afterthought: correct curb, correct flashing kit, correct integration with the surrounding roof covering. The result is a weather-tight unit that stops the drips, kills the draft and stops bleeding heat, while keeping the daylight you wanted in the first place.",
    ],
    signs: {
      heading: "Signs a skylight needs replacing",
      items: [
        "Water dripping or staining around the frame after rain",
        "Condensation or fogging trapped between the glazing layers",
        "Noticeable draft or cold radiating off the unit",
        "Cracked, yellowed or brittle glazing and seals",
        "A visible rise in heating or cooling costs in the room below",
      ],
    },
    process: {
      heading: "How we replace a skylight",
      items: [
        "Assessment of the existing unit, curb, flashing and surrounding roof",
        "Removal of the old skylight and inspection of the deck and framing",
        "Repair of any water-damaged sheathing before the new unit goes in",
        "Installation with a manufacturer flashing kit, correctly layered into the roof",
        "Interior finish check and a water test before we leave",
      ],
    },
  },
  {
    slug: "roof-leakage-repair",
    title: "Roof Leakage Repair",
    navTitle: "Roof Leakage Repair",
    benefit:
      "Fast leak detection and a lasting repair — not a bucket and a bead of sealant.",
    metaTitle: "Roof Leak Repair in San Francisco & the Bay Area | 24/7 Emergency",
    metaDescription:
      "Fast roof leak detection and lasting repair for homes and businesses across San Francisco and the Bay Area. 24/7 emergency support from ONE ROOFING.",
    cardImage: {
      src: "/images/service-roof-leakage-repair.jpg",
      width: 1024,
      height: 683,
      alt: "Gloved hands of a roofer lifting a shingle course to reach the source of a leak",
    },
    heroImage: {
      src: "/images/service-roof-leakage-repair.jpg",
      width: 1024,
      height: 683,
      alt: "ONE ROOFING technician tracing the source of a roof leak across damaged shingles",
    },
    intro: [
      "Water almost never enters where it appears. A stain over the kitchen can start ten feet uphill at a cracked boot, a lifted shingle, a failed valley or a chimney flashing that gave up two winters ago. Guessing wastes money; finding the actual entry point does not.",
      "We locate the true source of the leak, then repair it properly for homes and businesses alike. Active leak in the middle of a storm? That is what our 24/7 emergency support is for — we will stabilise it now and complete the permanent repair in daylight.",
    ],
    signs: {
      heading: "Call us when you see",
      items: [
        "Brown or yellow ceiling and wall stains that keep growing",
        "Dripping during rain, or a musty smell in the attic afterwards",
        "Damp or matted insulation and dark patches on the roof sheathing",
        "Missing, lifted or cracked shingles after a wind event",
        "Rusted, separated or cracked flashing at chimneys, vents and valleys",
      ],
    },
    process: {
      heading: "How we handle a leak",
      items: [
        "Interior and exterior inspection to trace the water back to the entry point",
        "Accurate testing rather than a patch-and-hope guess",
        "Emergency stabilisation the same visit when a leak is active",
        "Permanent repair of the shingles, flashing, valley or penetration at fault",
        "An honest answer if the roof is genuinely past repair — with a replacement option, no pressure",
      ],
    },
  },
  {
    slug: "roof-inspection",
    title: "Professional Roof Inspection",
    navTitle: "Professional Roof Inspection",
    benefit:
      "A thorough, documented assessment after a storm, before a sale, or just for peace of mind.",
    metaTitle: "Professional Roof Inspection in San Francisco & the Bay Area",
    metaDescription:
      "Thorough professional roof inspections from ONE ROOFING — storm damage assessment, pre-sale inspections and preventative check-ups across San Francisco and the Bay Area.",
    cardImage: {
      src: "/images/project-roof-work-a.jpg",
      width: 1024,
      height: 585,
      alt: "ONE ROOFING inspector kneeling on a shingle roof, recording findings on a clipboard",
    },
    heroImage: {
      src: "/images/project-shingle-roof-large.jpg",
      width: 4542,
      height: 2554,
      alt: "ONE ROOFING inspector on a rooftop with a toolbox, assessing roof condition against an open sky",
    },
    intro: [
      "Most roof problems are cheap when you find them early and expensive when you find them from the living room. An inspection is the difference between the two.",
      "We carry out thorough roof assessments with accurate testing — after a storm, ahead of a property sale, or simply because you would rather know. You get a clear picture of what is sound, what is wearing out, and what actually needs doing now versus what can safely wait.",
    ],
    signs: {
      heading: "Good reasons to book an inspection",
      items: [
        "High winds, hail or a heavy storm has just passed through",
        "You are buying or selling and need the roof's real condition documented",
        "The roof is over 15 years old and has never been formally assessed",
        "You want a maintenance plan instead of another surprise repair bill",
        "An insurance claim needs supporting evidence",
      ],
    },
    process: {
      heading: "What the inspection covers",
      items: [
        "Roof covering condition — shingles, membrane, tiles, granule loss and wear",
        "Flashing, valleys, chimneys, vents and every other penetration",
        "Gutters, downspouts, drainage and fascia",
        "Attic and underside checks for moisture, ventilation and daylight",
        "A clear written summary of findings and prioritised recommendations",
      ],
    },
  },
];

export const additionalServices = [
  "Gutter cleaning",
  "Siding repair",
  "Attic insulation",
] as const;

export type City = {
  /**
   * Numeric id inherited from the previous site, where each city lived at
   * `/city/{id}`. The new site keeps those exact URLs so inbound links and
   * indexed pages survive the redesign — do not renumber these.
   */
  id: number;
  name: string;
  /** Unique h1 for `/city/{id}`. Never the same wording twice. */
  headline: string;
  /** Hero sub-line. */
  tagline: string;
  /** Two paragraphs of city-specific intro copy. */
  intro: [string, string];
  /** What the local climate and building stock actually do to roofs here. */
  conditions: string[];
  metaTitle: string;
  metaDescription: string;
};

/**
 * Every Bay Area city we serve, ordered roughly by prominence. This is the
 * single source of truth for the city list: `serviceAreas` (names only) and
 * `serviceRegions` (grouped) are both derived from it.
 */
export const cities: City[] = [
  {
    id: 5,
    name: "San Francisco",
    headline: "San Francisco roofing built for fog, wind and steep rooflines",
    tagline:
      "Victorians in the Mission, flat-roofed buildings across SoMa, and everything in between — inspected, repaired and replaced by our own crews.",
    intro: [
      "San Francisco, CA is where our crews start most mornings — our office is on Battery Street. Roofs here work harder than almost anywhere else in the Bay: marine fog keeps everything damp, wind funnels between the hills, and much of the housing stock was framed long before modern flashing details existed.",
      "We cover the full range the city throws at us — Victorian and Edwardian homes through the Mission and the Haight, low-slope and flat commercial roofs across SoMa, and newer builds out toward Golden Gate Park. Whatever the covering, the job starts with an honest inspection and an itemised written estimate.",
    ],
    conditions: [
      "Marine fog holding damp against the roof covering for days at a time",
      "Wind-driven rain pushing water uphill under shingles and flashing",
      "Century-old Victorian and Edwardian roofs with hand-built flashing details",
      "Flat and low-slope commercial roofs where ponding water is the first failure",
    ],
    metaTitle: "Roofing Contractor in San Francisco, CA",
    metaDescription:
      "Roof replacement, flat roofing, leak repair, gutters, skylights and inspections in San Francisco, CA. Licensed, bonded and insured, with free quotes and 24/7 emergency support.",
  },
  {
    id: 7,
    name: "San Jose",
    headline: "San Jose roofing that survives long, hot South Bay summers",
    tagline:
      "Heat-aged shingles, brittle flat roofs and storm leaks across San Jose and the wider Santa Clara Valley.",
    intro: [
      "San Jose, CA gets more sun and less fog than anywhere else we work, and roofs pay for it. Months of direct heat dry out asphalt shingles, cook the oils out of flat roof membranes and leave seals brittle by the time the first winter storm arrives.",
      "We handle both sides of the city's building stock — family homes across Willow Glen, Almaden and Evergreen, and the low-slope commercial roofs covering offices, retail and light industrial space. Same crews, same premium-grade materials, same written warranty.",
    ],
    conditions: [
      "Granule loss and brittle, curling shingles after years of direct summer heat",
      "Flat roof membranes that shrink, split and pull apart at the seams",
      "Seasonal storms finding every seal the summer dried out",
    ],
    metaTitle: "Roofing Contractor in San Jose, CA",
    metaDescription:
      "Heat-damaged shingles, failing flat roofs and storm leaks fixed properly in San Jose, CA. Roof replacement, repair, gutters and inspections from a licensed, bonded and insured contractor.",
  },
  {
    id: 13,
    name: "Oakland",
    headline: "Oakland roofing for coastal fog and East Bay winter rain",
    tagline:
      "Older housing stock, hillside homes and flat commercial roofs across Oakland and Alameda County.",
    intro: [
      "Oakland, CA takes coastal fog off the Bay, real heat down in the flats through summer and heavy rain all winter. Add a housing stock where plenty of roofs are on their third or fourth covering and the problems tend to show up in the flashing and the deck rather than in the shingles.",
      "We replace and repair roofs across the city — bungalows and Craftsman homes in the flats, steeper hillside properties above them, and the low-slope commercial roofs around downtown and the estuary. Every job starts with finding out what is actually failing.",
    ],
    conditions: [
      "Layers of old roofing hiding a tired, soft deck underneath",
      "Flat and low-slope commercial roofs ponding after every storm",
      "Chimney and addition flashing that has been patched one time too many",
    ],
    metaTitle: "Roofing Contractor in Oakland, CA",
    metaDescription:
      "Roof replacement, leak repair, flat roofing and inspections across Oakland, CA — from Craftsman homes in the flats to commercial roofs downtown. Licensed, bonded and insured.",
  },
  {
    id: 26,
    name: "Berkeley",
    headline: "Berkeley roofing for Craftsman homes, hill lots and rentals",
    tagline:
      "Roofing for one of the East Bay's oldest and most varied housing stocks.",
    intro: [
      "Berkeley, CA has Craftsman and shingle-style homes well over a century old, steep hillside properties above campus, and a large stock of rental housing where the roof tends to get deferred until it leaks.",
      "We work for homeowners, landlords and property managers across all three — honest inspections, leak repairs that address the actual source, and full replacements with the ventilation an old house was never built with.",
    ],
    conditions: [
      "Century-old decks and framing buried under multiple roofing layers",
      "Steep hillside access and complex, multi-plane rooflines",
      "Poor attic ventilation trapping moisture in older homes",
    ],
    metaTitle: "Roofing Contractor in Berkeley, CA",
    metaDescription:
      "Roof replacement, leak repair and inspections for Berkeley, CA homes, hillside properties and rental buildings. Licensed, bonded and insured, with free written estimates.",
  },
  {
    id: 12,
    name: "Palo Alto",
    headline: "Palo Alto roofing for tree-shaded streets and hot summers",
    tagline:
      "Careful roof replacement and repair across Palo Alto, from the older neighbourhoods to downtown.",
    intro: [
      "Palo Alto, CA combines two things roofs do not enjoy: long hot summers and heavy tree cover. The sun bakes the exposed slopes while the shaded ones stay damp, fill the gutters with debris and grow moss.",
      "We work across the city's older streets, its mid-century homes and its downtown commercial buildings, matching materials to the architecture and keeping the flashing, ventilation and drainage right — those details decide how long a roof actually lasts.",
    ],
    conditions: [
      "Leaf and needle debris packing gutters, valleys and downspouts",
      "Shaded slopes staying damp long enough to grow moss",
      "Sun-exposed slopes ageing years faster than the shaded side",
    ],
    metaTitle: "Roofing Contractor in Palo Alto, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Palo Alto, CA. Careful work on tree-shaded, sun-baked and downtown commercial roofs alike. Licensed, bonded and insured.",
  },
  {
    id: 8,
    name: "Mountain View",
    headline: "Mountain View roofing for warm days, cool nights and winter rain",
    tagline:
      "Roof replacement, leak repair and inspections for Mountain View homes, townhomes and commercial buildings.",
    intro: [
      "Mountain View, CA sits right in the middle of the daily temperature swing that quietly wears roofs out — warm afternoons, cool evenings, and materials expanding and contracting every day of the year.",
      "That movement opens nail holes, lifts seals and works flashing loose long before the covering itself looks worn. We inspect for it, repair it where it is caught early, and replace properly when it is not — on single-family homes, townhouse blocks and office roofs alike.",
    ],
    conditions: [
      "Daily heat-and-cool cycling fatiguing seals, fasteners and flashing",
      "Winter rain finding the gaps that a summer of movement opened up",
      "Low-slope roofs on offices and townhomes where drainage is marginal",
    ],
    metaTitle: "Roofing Contractor in Mountain View, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Mountain View, CA for homes, townhomes and commercial buildings. Free quotes and 24/7 emergency support.",
  },
  {
    id: 10,
    name: "Fremont",
    headline: "Fremont roofing for hot summers and heavy winter rain",
    tagline:
      "Roof replacement, leak repair and gutter work for Fremont homes and commercial property.",
    intro: [
      "Fremont, CA swings between genuinely hot summers and heavy winter rain, and a roof has to hold up to both. The heat ages the covering; the rain then finds whatever the heat weakened.",
      "We work across Fremont's mix of post-war tracts, newer subdivisions and light-industrial buildings — leak repairs and full replacements, plus the gutters and downspouts that decide whether all that winter water ends up in the yard or against the foundation.",
    ],
    conditions: [
      "Sun-aged shingles shedding granules and losing flexibility",
      "Undersized or sagging gutters overwhelmed by winter downpours",
      "Flat and low-slope light-industrial roofs holding standing water",
    ],
    metaTitle: "Roofing Contractor in Fremont, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Fremont, CA for homes and commercial buildings. Licensed, bonded and insured with a written workmanship warranty.",
  },
  {
    id: 11,
    name: "Daly City",
    headline: "Daly City roofing built for fog, damp and constant wind",
    tagline:
      "Roofing for one of the dampest, windiest corners of the Peninsula.",
    intro: [
      "Daly City, CA earns its reputation. Fog sits over the ridge for much of the year, the wind rarely lets up, and roofs stay wet long enough for moss, rot and trapped moisture to do real damage under a covering that still looks fine from the street.",
      "We inspect for what the damp is doing below the surface, repair leaks properly instead of sealing over them, and replace roofs with materials and ventilation chosen for a climate that never fully dries out.",
    ],
    conditions: [
      "Moss and organic growth holding water on the roof covering",
      "Damp sheathing and trapped attic moisture from poor ventilation",
      "Constant wind pressure working shingles and flashing loose",
    ],
    metaTitle: "Roofing Contractor in Daly City, CA",
    metaDescription:
      "Fog, damp and wind are hard on Daly City, CA roofs. Roof replacement, leak repair, gutters and inspections from a licensed, bonded and insured Peninsula roofing contractor.",
  },
  {
    id: 9,
    name: "San Bruno",
    headline: "San Bruno roofing built for coastal fog and hilltop wind",
    tagline:
      "Wind-exposed hillside homes and San Mateo County commercial roofs, protected properly.",
    intro: [
      "San Bruno, CA takes weather from both directions — fog rolling in off the coast and wind coming hard over the hills above the city. Roofs on the exposed slopes lose shingles and lift flashing years before the same roof would fail on a sheltered street.",
      "We replace, repair and inspect roofs across San Bruno for homeowners and local businesses, specifying fixings and edge detail for the exposure a building actually has rather than a generic install.",
    ],
    conditions: [
      "High wind lifting shingle courses and ridge caps on exposed slopes",
      "Coastal fog keeping the covering damp for long stretches",
      "Wind-driven rain forced past edge, valley and penetration flashing",
    ],
    metaTitle: "Roofing Contractor in San Bruno, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in San Bruno, CA — specified for hilltop wind and coastal fog. Licensed, bonded and insured, with free quotes.",
  },
  {
    id: 14,
    name: "Sunnyvale",
    headline: "Sunnyvale roofing for warm summers and sudden winter storms",
    tagline:
      "Roof replacement, repair and inspection for Sunnyvale homes and Silicon Valley commercial buildings.",
    intro: [
      "Sunnyvale, CA spends most of the year warm and dry, then takes its winter rain in a handful of concentrated storms. Roofs are rarely tested until they are tested hard, which is why so many leaks here turn up in the same week every year.",
      "We inspect ahead of the season, repair what the last storm found, and replace the roofs that are past patching — on family homes, townhouse complexes and the office and R&D buildings across the city.",
    ],
    conditions: [
      "Sun-hardened shingles that crack once the first real storm hits",
      "Blocked or undersized drainage on low-slope commercial roofs",
      "Skylight and vent penetrations leaking after a long dry spell",
    ],
    metaTitle: "Roofing Contractor in Sunnyvale, CA",
    metaDescription:
      "Roof replacement, leak repair, flat roofing and inspections in Sunnyvale, CA for homes and Silicon Valley commercial property. Free quotes and 24/7 emergency support.",
  },
  {
    id: 15,
    name: "Redwood City",
    headline: "Redwood City roofing for heat, coastal air and winter rain",
    tagline:
      "Roofing for Redwood City homes, waterfront property and commercial buildings.",
    intro: [
      "Redwood City, CA is warm enough inland to age a roof covering quickly and close enough to the water for salt-laden air to go after the metal — fixings, flashing, gutters and vent collars all corrode faster here than a few miles further west.",
      "We replace and repair roofs across the city, from the older neighbourhoods near downtown out to Redwood Shores, specifying materials and metals that will still be doing their job in fifteen years.",
    ],
    conditions: [
      "Corroding flashing, fasteners and gutter hardware near the water",
      "Heat-aged coverings on the inland, sun-exposed side of town",
      "Winter rain exposing tired seals around roof penetrations",
    ],
    metaTitle: "Roofing Contractor in Redwood City, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Redwood City, CA — inland heat and waterfront salt air both accounted for. Licensed, bonded and insured.",
  },
  {
    id: 16,
    name: "Hayward",
    headline: "Hayward roofing for hot summers, Bay winds and heavy rain",
    tagline:
      "Residential and commercial roofing across Hayward and southern Alameda County.",
    intro: [
      "Hayward, CA gets the full mix: real summer heat up in the hills, wind coming off the Bay across the flats, and heavy rain in winter. Roofs here rarely fail for one reason — usually it is heat damage that the wind opens up and the rain then exploits.",
      "We handle leak repairs, full replacements, gutters and inspections for Hayward homeowners and landlords, as well as the warehouses and light-industrial buildings along the Bay edge.",
    ],
    conditions: [
      "Wind lifting shingles and ridge caps across the exposed flats",
      "Large low-slope warehouse roofs with drainage that no longer works",
      "Heat-cracked coverings that only reveal themselves once the rain arrives",
    ],
    metaTitle: "Roofing Contractor in Hayward, CA",
    metaDescription:
      "Roof replacement, leak repair, flat roofing and inspections in Hayward, CA for homes, rentals and industrial buildings. Licensed, bonded and insured, free written estimates.",
  },
  {
    id: 17,
    name: "Foster City",
    headline: "Foster City roofing built for salt air and waterfront wind",
    tagline:
      "Lagoon-side homes and commercial roofs protected against the corrosion the water brings.",
    intro: [
      "Foster City, CA is built around the water, and that is exactly what makes roofs here wear faster than inland ones. Salt-laden air attacks every piece of metal on the roof, and wind coming across open lagoon and Bay puts constant pressure on edges and ridges.",
      "We replace and repair roofs throughout Foster City with corrosion in mind — the flashing, fixings and gutter system matter every bit as much as the covering when the air is this aggressive.",
    ],
    conditions: [
      "Salt air corroding flashing, fasteners, vents and gutter hardware",
      "Sustained wind pressure at exposed ridges, rakes and edges",
      "Low-slope condo and office roofs that pond after every rain",
    ],
    metaTitle: "Roofing Contractor in Foster City, CA",
    metaDescription:
      "Salt air and waterfront wind shorten roof life in Foster City, CA. Roof replacement, leak repair, gutters and inspections from a licensed, bonded and insured contractor.",
  },
  {
    id: 18,
    name: "South San Francisco",
    headline: "South San Francisco roofing for fog, wind and big flat roofs",
    tagline:
      "Homes up on the hill and biotech, warehouse and industrial roofs down on the flat.",
    intro: [
      "South San Francisco, CA has two roofing worlds. Up on the hillsides it is fog, wind and residential roofs taking weather from every direction. Down on the flat it is acres of low-slope commercial, biotech and warehouse roofing where drainage decides everything.",
      "We work on both: residential replacements and leak repairs above, and flat roof replacement, waterproofing and emergency leak response for the commercial property below.",
    ],
    conditions: [
      "Wind-driven rain hammering exposed hillside homes",
      "Large flat roofs where ponding water finds every seam",
      "Persistent fog leaving coverings damp and slow to dry",
    ],
    metaTitle: "Roofing Contractor in South San Francisco, CA",
    metaDescription:
      "Residential and commercial roofing in South San Francisco, CA — hillside re-roofs, flat roof replacement, waterproofing and leak repair. Licensed, bonded and insured.",
  },
  {
    id: 19,
    name: "Pacifica",
    headline: "Pacifica roofing built to take salt air and ocean wind",
    tagline:
      "The most exposed roofs on the Peninsula, specified for the conditions they actually face.",
    intro: [
      "Pacifica, CA asks more of a roof than almost anywhere else we work. Salt air, near-constant wind off the ocean and wind-driven rain shorten the life of a covering that would last comfortably a few miles inland.",
      "We specify and install for that exposure — corrosion-resistant metals, fixing patterns that hold in high wind, and edge and valley detail that assumes water will be pushed uphill rather than run politely off the eaves.",
    ],
    conditions: [
      "Salt corrosion attacking every exposed metal component",
      "Sustained ocean wind lifting coverings and ridge detail",
      "Wind-driven rain forced under laps, flashing and vents",
    ],
    metaTitle: "Roofing Contractor in Pacifica, CA",
    metaDescription:
      "Coastal roofing in Pacifica, CA built for salt air and ocean wind. Roof replacement, leak repair, gutters and inspections from a licensed, bonded and insured contractor.",
  },
  {
    id: 20,
    name: "Atherton",
    headline: "Atherton roofing where the detailing has to be invisible",
    tagline: "Estate roofing done to the standard the architecture demands.",
    intro: [
      "Atherton, CA properties are usually roofed in materials — tile, heavy architectural shingle, standing seam metal — where the workmanship is the whole job. A badly cut valley or a clumsy flashing detail is visible from the driveway, and stays visible for the next thirty years.",
      "We take Atherton replacements and repairs as a craftsmanship job first: clean lines, correct substrate, properly integrated flashing, and a site left immaculate at the end of every day.",
    ],
    conditions: [
      "Complex rooflines with multiple valleys, dormers and transitions",
      "Heavy tile and premium coverings needing the right substrate and support",
      "Mature tree cover dropping debris into valleys and gutters",
    ],
    metaTitle: "Roofing Contractor in Atherton, CA",
    metaDescription:
      "Estate roof replacement and repair in Atherton, CA — tile, architectural shingle and metal, detailed properly. Licensed, bonded and insured, with a written warranty.",
  },
  {
    id: 21,
    name: "Albany",
    headline: "Albany roofing for older East Bay homes on tight lots",
    tagline:
      "Small-lot bungalows and mixed-use buildings, re-roofed without taking the street apart.",
    intro: [
      "Albany, CA is compact, its housing stock is older than most of the East Bay, and the lots leave very little room to work. Roofs here are often on their second or third covering, with flashing details that have been reworked by several different hands.",
      "We strip back to find out what is really going on, repair the deck where it needs it, and re-roof properly — while keeping access, staging and clean-up tight enough to be a good neighbour on a narrow street.",
    ],
    conditions: [
      "Layered old roofing over decks that have never been inspected",
      "Damp lingering on shaded, closely spaced roof planes",
      "Party-wall and neighbouring-roof flashing done badly in the past",
    ],
    metaTitle: "Roofing Contractor in Albany, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Albany, CA. Careful re-roofing of older East Bay homes on tight lots. Licensed, bonded and insured.",
  },
  {
    id: 22,
    name: "Belmont",
    headline: "Belmont roofing for hillside homes and steep pitches",
    tagline: "Steep, awkward hillside roofs replaced and repaired safely.",
    intro: [
      "Belmont, CA is built on hills, and hill roofs are a different job. Steep pitches, split levels, several roof planes meeting at odd angles, and heavy runoff heading downhill fast every winter.",
      "We work these roofs regularly — proper access and fall protection, drainage sized for the volume actually coming off the slope, and valley and transition detail that holds when the water arrives all at once.",
    ],
    conditions: [
      "Fast, high-volume runoff overwhelming undersized gutters",
      "Complex valleys and transitions where roof planes meet",
      "Sun-exposed upper slopes ageing faster than sheltered ones",
    ],
    metaTitle: "Roofing Contractor in Belmont, CA",
    metaDescription:
      "Hillside roof replacement, leak repair and gutter work in Belmont, CA. Steep pitches and complex rooflines handled safely. Licensed, bonded and insured, free quotes.",
  },
  {
    id: 23,
    name: "Brisbane",
    headline: "Brisbane roofing for hillside homes and Bayfront buildings",
    tagline: "A small city with two very different kinds of roof. We do both.",
    intro: [
      "Brisbane, CA packs a lot into a small footprint: houses stacked up the hillside taking wind and fog straight off the ridge, and commercial and industrial buildings down on the Bay margin with wide, low-slope roofs.",
      "We replace and repair both — wind-rated residential installs above, and flat roof systems with the drainage sorted out properly below. Same crews and the same written warranty either way.",
    ],
    conditions: [
      "Ridge-top wind exposure on the hillside streets",
      "Flat commercial roofs holding water after every storm",
      "Fog and damp slowing drying on north-facing slopes",
    ],
    metaTitle: "Roofing Contractor in Brisbane, CA",
    metaDescription:
      "Residential and commercial roofing in Brisbane, CA — hillside re-roofs, flat roof replacement and leak repair. Licensed, bonded and insured, with free written estimates.",
  },
  {
    id: 24,
    name: "Burlingame",
    headline: "Burlingame roofing for period homes and modern rebuilds",
    tagline: "Roofing that respects the architecture — tile, shingle and flat alike.",
    intro: [
      "Burlingame, CA has some of the Peninsula's best-kept period housing sitting alongside substantial modern rebuilds, and the roofing has to suit whichever it is. A tile roof on an older Spanish-influenced home needs very different handling from a contemporary low-slope one.",
      "We replace, repair and inspect across both, and we take the visible details seriously — ridge lines, valleys, gutter profiles and colour matching all get attention, not just watertightness.",
    ],
    conditions: [
      "Ageing tile roofs with failed underlayment beneath sound tiles",
      "Coastal damp and shade encouraging moss on north slopes",
      "Original flashing details on period homes reaching end of life",
    ],
    metaTitle: "Roofing Contractor in Burlingame, CA",
    metaDescription:
      "Roof replacement, tile and shingle repair, gutters and inspections in Burlingame, CA. Period homes and modern rebuilds handled with equal care. Licensed, bonded and insured.",
  },
  {
    id: 25,
    name: "San Mateo",
    headline: "San Mateo roofing for older homes, waterfront blocks and storefronts",
    tagline: "One city, three different kinds of roofing problem — all covered.",
    intro: [
      "San Mateo, CA covers a lot of ground: pre-war homes in the older neighbourhoods, waterfront property out toward the Bay, and a downtown full of low-slope commercial roofs above shops and offices.",
      "The failures differ accordingly — worn-out underlayment inland, corrosion nearer the water, and drainage or membrane problems downtown. We inspect first, then quote for the problem the building actually has.",
    ],
    conditions: [
      "Original underlayment failing under otherwise sound coverings",
      "Salt-air corrosion of roof metalwork nearer the Bay",
      "Downtown low-slope roofs with tired membrane and blocked drains",
    ],
    metaTitle: "Roofing Contractor in San Mateo, CA",
    metaDescription:
      "Roof replacement, flat roofing, leak repair and inspections in San Mateo, CA for homes, waterfront property and downtown commercial buildings. Licensed, bonded and insured.",
  },
  {
    id: 27,
    name: "Campbell",
    headline: "Campbell roofing for warm days and heavy winter downpours",
    tagline: "Roof replacement, repair, gutters and inspections across Campbell.",
    intro: [
      "Campbell, CA runs warm and dry for most of the year and then takes serious rain in short bursts. That combination is hard on roofs: coverings stiffen and dry out through summer, then get asked to shed a lot of water very quickly.",
      "We re-roof and repair across the city's mid-century tracts, newer infill homes and the commercial buildings along the main corridors — including the gutter and downspout capacity that makes all the difference in a downpour.",
    ],
    conditions: [
      "Stiff, sun-aged shingles cracking under sudden heavy rain",
      "Gutters and downspouts undersized for peak storm flow",
      "Vent and skylight seals that fail after long dry spells",
    ],
    metaTitle: "Roofing Contractor in Campbell, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Campbell, CA. Built for warm South Bay summers and sudden winter downpours. Licensed, bonded and insured.",
  },
  {
    id: 28,
    name: "Cupertino",
    headline: "Cupertino roofing for long sun exposure and winter wind",
    tagline: "Roofing for Cupertino homes and Silicon Valley commercial property.",
    intro: [
      "Cupertino, CA gets long, bright, dry summers and a handful of genuinely windy winter storms. The sun does the slow damage, breaking down the covering year after year, and the wind then finds whatever it weakened.",
      "We replace and repair roofs across the city's residential neighbourhoods and its office and campus buildings, choosing materials for UV performance rather than for whatever happens to be cheapest that week.",
    ],
    conditions: [
      "UV breakdown of roof coverings and exposed sealants",
      "Winter wind lifting shingles the sun has already made brittle",
      "Low-slope commercial roofs needing reliable long-term waterproofing",
    ],
    metaTitle: "Roofing Contractor in Cupertino, CA",
    metaDescription:
      "Roof replacement, leak repair, flat roofing and inspections in Cupertino, CA for homes and commercial property. Licensed, bonded and insured, with a written warranty.",
  },
  {
    id: 29,
    name: "Emeryville",
    headline: "Emeryville roofing for lofts, condos and flat commercial roofs",
    tagline: "Mostly flat, mostly commercial, and always about drainage.",
    intro: [
      "Emeryville, CA is dominated by converted lofts, condo blocks and commercial buildings — which means flat and low-slope roofs, shared roof structures, and drainage that has to work perfectly because water has nowhere else to go.",
      "We replace and repair flat roof systems here for owners, HOAs and property managers, including the waterproofing detail at parapets, drains and every penetration, plus emergency leak response when a tenant calls it in.",
    ],
    conditions: [
      "Ponding water on large flat roofs with sluggish drains",
      "Parapet and penetration detail failing before the membrane does",
      "Bay-side damp and salt air working on rooftop metalwork",
    ],
    metaTitle: "Roofing Contractor in Emeryville, CA",
    metaDescription:
      "Flat roof replacement, waterproofing, leak repair and inspections in Emeryville, CA for lofts, condos and commercial buildings. Licensed, bonded and insured.",
  },
  {
    id: 30,
    name: "Los Altos",
    headline: "Los Altos roofing where craftsmanship has to show",
    tagline: "Premium roof replacement and repair for Los Altos homes.",
    intro: [
      "Los Altos, CA properties tend to be roofed in materials that are expected to last decades and look good doing it — architectural shingle, tile, standing seam metal — over rooflines that are rarely simple.",
      "We handle those replacements as a detail job: correct substrate and ventilation, valleys and transitions cut clean, flashing integrated rather than caulked, and mature landscaping protected while we work.",
    ],
    conditions: [
      "Complex rooflines with multiple pitches and transitions",
      "Long summer sun exposure ageing the covering unevenly",
      "Heavy tree cover filling valleys and gutters with debris",
    ],
    metaTitle: "Roofing Contractor in Los Altos, CA",
    metaDescription:
      "Premium roof replacement, tile and shingle repair, gutters and inspections in Los Altos, CA. Licensed, bonded and insured, with an industry-leading written warranty.",
  },
  {
    id: 31,
    name: "Menlo Park",
    headline: "Menlo Park roofing for estates, bungalows and office buildings",
    tagline: "Residential and commercial roofing across Menlo Park and the mid-Peninsula.",
    intro: [
      "Menlo Park, CA runs from substantial west-side estates through modest bungalows to the office buildings over on the Bay side, and each one wants something different from a roof.",
      "We inspect, repair and replace across all of it — premium coverings where the architecture calls for it, straightforward durable systems where it does not, and flat roof work with the drainage handled properly on the commercial side.",
    ],
    conditions: [
      "Mature trees dropping debris into valleys and gutters",
      "Older bungalow roofs already on their second or third covering",
      "Low-slope office roofs where drainage and seams need attention",
    ],
    metaTitle: "Roofing Contractor in Menlo Park, CA",
    metaDescription:
      "Roof replacement, leak repair, flat roofing and inspections in Menlo Park, CA for homes, estates and office buildings. Licensed, bonded and insured, free written estimates.",
  },
  {
    id: 32,
    name: "Millbrae",
    headline: "Millbrae roofing for coastal fog, wind and rainy winters",
    tagline: "Peninsula roofing for homes that sit in the damp most of the year.",
    intro: [
      "Millbrae, CA sits where the fog settles and the wind funnels down off the hills, and its winters are properly wet. Roofs stay damp, moss takes hold on the shaded slopes, and the gutters spend the season working hard.",
      "We replace and repair roofs throughout Millbrae with the ventilation, drainage and durable coverings appropriate for a climate that does not give a roof much time to dry out.",
    ],
    conditions: [
      "Moss and algae on shaded, slow-drying roof slopes",
      "Gutters and downspouts overloaded through a wet winter",
      "Wind-driven rain testing edge and valley flashing",
    ],
    metaTitle: "Roofing Contractor in Millbrae, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Millbrae, CA — built for coastal fog, wind and wet Peninsula winters. Licensed, bonded and insured.",
  },
  {
    id: 33,
    name: "San Carlos",
    headline: "San Carlos roofing for sunny hillsides and winter downpours",
    tagline: "Hillside homes, commercial roofs and everything on the slope between.",
    intro: [
      "San Carlos, CA gets more sun than its neighbours to the north and drains a great deal of hillside water in winter. Roofs are baked through summer, then asked to move serious volumes of water downhill in a matter of hours.",
      "We re-roof and repair across the hill neighbourhoods and the flatter commercial strip, sizing gutters and downspouts for the catchment area a roof actually has rather than for whatever happened to be there before.",
    ],
    conditions: [
      "Sun-aged coverings on exposed, west-facing hillside slopes",
      "High-volume winter runoff overwhelming original gutters",
      "Low-slope commercial roofs needing membrane and drainage work",
    ],
    metaTitle: "Roofing Contractor in San Carlos, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in San Carlos, CA for hillside homes and commercial buildings. Licensed, bonded and insured, with free quotes.",
  },
  {
    id: 34,
    name: "Santa Clara",
    headline: "Santa Clara roofing for hot summers and seasonal rain",
    tagline: "Homes, apartment blocks and commercial roofs across Santa Clara.",
    intro: [
      "Santa Clara, CA gets hot summers, cool evenings and rain concentrated into a few winter months. The daily temperature swing works fasteners and seals loose all summer long; the rain then shows you exactly where.",
      "We inspect, repair and replace roofs across the city — single-family homes, apartment and condo blocks, and the wide low-slope roofs over offices and light industrial buildings.",
    ],
    conditions: [
      "Thermal movement loosening fasteners, seals and flashing",
      "Wide low-slope commercial roofs with marginal fall to the drains",
      "Sun-degraded shingles reaching the end of their life early",
    ],
    metaTitle: "Roofing Contractor in Santa Clara, CA",
    metaDescription:
      "Roof replacement, leak repair, flat roofing and inspections in Santa Clara, CA for homes, apartment blocks and commercial property. Licensed, bonded and insured.",
  },
  {
    id: 35,
    name: "Saratoga",
    headline: "Saratoga roofing for hillside homes and long sun exposure",
    tagline: "Careful roof replacement and repair for Saratoga's hillside properties.",
    intro: [
      "Saratoga, CA bakes. Long dry summers on exposed hillside lots age a roof covering fast, and the winter storms that follow arrive with wind and a great deal of water all at once.",
      "We replace and repair roofs across the town's hillside and valley-floor properties, working around mature landscaping and getting the valleys, transitions and drainage right on rooflines that are rarely straightforward.",
    ],
    conditions: [
      "Heavy sun exposure drying and embrittling the covering",
      "Oak and redwood debris packing valleys and gutters",
      "Storm runoff hitting steep, complex hillside rooflines",
    ],
    metaTitle: "Roofing Contractor in Saratoga, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Saratoga, CA for hillside and valley-floor homes. Licensed, bonded and insured, with a written warranty.",
  },
  {
    id: 36,
    name: "Union City",
    headline: "Union City roofing for a mix of older and newer homes",
    tagline:
      "Straightforward, durable roofing across Union City and southern Alameda County.",
    intro: [
      "Union City, CA has a housing stock spanning several decades, from 1960s and 70s tracts through to much newer subdivisions, plus a solid base of warehouse and light-industrial property.",
      "The older roofs here are typically at or past replacement age, while the newer ones mostly need honest maintenance and the occasional repair. We will tell you which one you have — including when the answer is that it can safely wait.",
    ],
    conditions: [
      "Original tract roofs reaching the end of a 20-year service life",
      "Long dry summers ageing coverings ahead of schedule",
      "Large low-slope industrial roofs with drainage and seam issues",
    ],
    metaTitle: "Roofing Contractor in Union City, CA",
    metaDescription:
      "Roof replacement, leak repair, gutters and inspections in Union City, CA for homes and industrial buildings. Licensed, bonded and insured, with free written estimates.",
  },
];

/** Bay Area cities served, by name. Derived from `cities` — see above. */
export const serviceAreas: readonly string[] = cities.map((city) => city.name);

/**
 * The same cities grouped by sub-region, in rough geographic order within each
 * group. Every entry in `cities` appears in exactly one region.
 */
const regionDefinitions = [
  {
    name: "San Francisco & the Peninsula",
    blurb:
      "Our home turf. Steep city roofs, Victorians with tricky flashing details, and Peninsula homes taking the full brunt of coastal weather.",
    cityIds: [5, 11, 18, 23, 19, 9, 32, 24, 25, 17, 22, 33, 15, 20, 31],
  },
  {
    name: "East Bay",
    blurb:
      "Older housing stock and a lot of flat and low-slope commercial roofs. Drainage and ponding are the usual culprits here.",
    cityIds: [13, 26, 21, 29, 16, 10, 36],
  },
  {
    name: "South Bay & Silicon Valley",
    blurb:
      "Hot, dry summers age a roof covering fast. We see a lot of granule loss and brittle shingles down here.",
    cityIds: [7, 34, 14, 8, 12, 30, 28, 27, 35],
  },
] as const;

export type ServiceRegion = {
  name: string;
  blurb: string;
  cities: City[];
};

export const serviceRegions: ServiceRegion[] = regionDefinitions.map(
  (region) => ({
    name: region.name,
    blurb: region.blurb,
    cities: region.cityIds.map((id) => {
      const city = cities.find((item) => item.id === id);
      if (!city) {
        throw new Error(`serviceRegions references unknown city id: ${id}`);
      }
      return city;
    }),
  }),
);

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
] as const;

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Build-time lookup used by the six static service routes. */
export function requireService(slug: string): Service {
  const service = getService(slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }
  return service;
}

/* ------------------------------------------------------------------ */
/* Cities                                                              */
/* ------------------------------------------------------------------ */

/** URL of a city page. The numeric path is inherited from the old site. */
export function cityPath(city: City): string {
  return `/city/${city.id}`;
}

/** Looks a city up by its route segment. Rejects "05", "5.0", " 5" and so on. */
export function getCity(id: string | number): City | undefined {
  const raw = String(id);
  return cities.find((city) => String(city.id) === raw);
}

export function requireCity(id: string | number): City {
  const city = getCity(id);
  if (!city) {
    throw new Error(`Unknown city id: ${id}`);
  }
  return city;
}

/** The sub-region a city sits in, used for the "nearby areas" internal links. */
export function regionForCity(city: City): ServiceRegion {
  const region = serviceRegions.find((item) =>
    item.cities.some((item2) => item2.id === city.id),
  );
  if (!region) {
    throw new Error(`City ${city.name} is not assigned to a service region`);
  }
  return region;
}

/** Other cities in the same sub-region — real, relevant internal links. */
export function nearbyCities(city: City): City[] {
  return regionForCity(city).cities.filter((item) => item.id !== city.id);
}

/** Canonical OpenGraph metadata block for a service page. */
export function serviceMetadata(slug: string) {
  const service = requireService(slug);
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      type: "website" as const,
      url: `${site.url}/${service.slug}`,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.heroImage.src,
          alt: service.heroImage.alt,
        },
      ],
    },
  };
}

/** Canonical metadata block for a `/city/{id}` page. */
export function cityMetadata(city: City) {
  const url = `${site.url}${cityPath(city)}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: cityPath(city) },
    openGraph: {
      type: "website" as const,
      url,
      title: city.metaTitle,
      description: city.metaDescription,
      images: [
        {
          url: "/images/project-shingle-roof-large.jpg",
          alt: `ONE ROOFING technician on a rooftop serving ${city.name}, California`,
        },
      ],
    },
  };
}
