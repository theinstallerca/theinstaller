// All site text lives here.
export const phone = { display: '(204) 230-8145', tel: '+12042308145' };
export const email = 'info@theinstaller.ca';
export const city = 'Winnipeg, Manitoba';
export const hours = 'Mon–Fri 8:00–17:00';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export type ServiceKey = 'curtainwall' | 'storefront' | 'partitions' | 'windows' | 'pvc' | 'doors';

// `img` is a file name in public/images/projects/ (without .jpg). No img = placeholder drawing.
export const services: { key: ServiceKey; name: string; short: string; text: string; list: string[]; img?: string }[] = [
  {
    key: 'curtainwall',
    name: 'Curtain wall',
    img: 'curtainwall-1',
    short: 'Aluminum curtain wall installed from anchors to caps.',
    text: 'We install aluminum curtain wall systems on new buildings and additions. Layout, anchors, framing, glass and seals are done by the same crew, so the wall is plumb, tight and ready for inspection.',
    list: ['Layout and anchor installation', 'Mullions, pressure plates and caps', 'Glass, spandrel and panel infill', 'Perimeter seals and air/vapour barrier tie-in'],
  },
  {
    key: 'storefront',
    name: 'Storefront & entrances',
    img: 'storefront-1',
    short: 'Storefront framing, entrance doors and vestibules.',
    text: 'Storefront framing and aluminum entrances for retail, offices and apartment buildings. We set the frames, hang and adjust the doors, and leave the entrance working the way it should.',
    list: ['Aluminum storefront framing', 'Entrance doors, closers and hardware', 'Vestibules and apartment building entrances', 'Glass replacement and re-glazing'],
  },
  {
    key: 'partitions',
    name: 'Office partitions',
    img: 'partition-1',
    short: 'Glass office fronts and interior glazed partitions.',
    text: 'Interior glazed partitions for offices and tenant fit-ups: framed systems, frameless glass fronts and glass doors. We work clean in finished spaces and around other trades.',
    list: ['Glass office fronts and meeting rooms', 'Framed and frameless systems', 'Glass doors, pulls and hardware', 'Straight, angled and segmented layouts'],
  },
  {
    key: 'windows',
    name: 'Commercial windows',
    img: 'fiberglass-1',
    short: 'Aluminum and fiberglass windows for commercial and heritage buildings.',
    text: 'Aluminum and fiberglass window installation for commercial, multi-family and heritage buildings, new construction and retrofit.',
    list: ['Aluminum and fiberglass windows', 'New construction and retrofit', 'Heritage building window replacement', 'Flashing, insulation and sealing'],
  },
  {
    key: 'pvc',
    name: 'Apartment PVC windows',
    img: 'pvc-1',
    short: 'Full-building PVC window replacement for apartment blocks.',
    text: 'PVC window replacement for apartment blocks and townhouses, done as one job for the whole building. The windows come from our own shop in Winnipeg, so sizes and delivery are under our control.',
    list: ['Whole-building window replacement', 'Apartment blocks and townhouses', 'Flashing, insulation and sealing', 'PVC windows fabricated in our own shop'],
  },
  {
    key: 'doors',
    name: 'Hollow metal doors & hardware',
    short: 'Frames, doors and hardware installed to the schedule.',
    text: 'We install hollow metal frames, doors and finish hardware on commercial and multi-family projects. Labour-only packages are welcome — send us the door schedule and we will price it.',
    list: ['Hollow metal frames and doors', 'Finish hardware installed to the hardware schedule', 'Fire-rated openings', 'Labour-only installation for suppliers and general contractors'],
  },
];

export const home = {
  kicker: 'Commercial glazing · Winnipeg',
  h1: 'Dedicated to install',
  lead: 'Curtain wall, storefront, office partitions, windows and doors installed for general contractors, suppliers and building owners in Winnipeg and across Manitoba.',
  strip: ['Curtain wall', 'Storefront', 'Office partitions', 'Windows', 'Doors'],
  valuesH: 'How we work',
  valuesP: 'Installation is all we do on site, and we do it carefully.',
  values: [
    ['Read the drawings', 'We work from the shop drawings and the schedule, and raise questions before they turn into rework.'],
    ['Built for Manitoba', 'Seals, anchors and tie-ins done for a climate that goes from +35 to −40.'],
    ['On schedule', 'We show up when we said we would and keep the site superintendent informed.'],
  ] as [string, string][],
  servicesH: 'What we install',
  servicesP: 'Glazing, windows and doors, installed by one crew.',
  whoH: 'Who we work with',
  whoP: 'Most of our work comes from people who need a reliable install crew and a clear price.',
  whoList: [
    'General contractors — complete glazing and door packages',
    'Glazing and door suppliers — labour-only installation',
    'Building owners and property managers — replacement and repair',
  ],
  stepsH: 'From drawings to handover',
  steps: [
    ['Send drawings', 'Email the drawings, the door schedule or just photos and sizes.'],
    ['Quote', 'You get a clear written price for the scope.'],
    ['Install', 'Our crew installs to the shop drawings and the schedule.'],
    ['Handover', 'We walk the work with you and close out deficiencies.'],
  ] as [string, string][],
  ctaH: 'Have a project to price?',
  ctaP: 'Send us the drawings or the door schedule and we will get back to you with a quote.',
};

export const about = {
  h1: 'About Theinstaller',
  lead: 'A Winnipeg installation company for commercial glazing and doors.',
  p1: 'Theinstaller does one thing: installation. Curtain wall, storefront, office partitions, windows and doors — set properly, sealed properly and finished on time.',
  p2: 'We work for general contractors, for suppliers who need a crew, and directly for building owners. Small tenant fit-up or a full building envelope package, the work gets the same attention.',
  standH: 'What you can expect',
  stand: [
    'A written quote with a clear scope',
    'Work done to the shop drawings and manufacturer instructions',
    'A clean, safe site',
    'Straight answers about schedule and problems',
  ],
  resH: 'Residential windows',
  resP: 'PVC windows for homeowners are made and installed by our partner company, The Windows — same crew, same standards.',
};

export const contact = {
  h1: 'Request a quote',
  lead: 'Tell us about the project. Drawings and schedules can be sent by email after you submit the form.',
  serviceOptions: ['Curtain wall', 'Storefront & entrances', 'Office partitions', 'Commercial windows', 'Apartment PVC windows', 'Hollow metal doors & hardware', 'Other / not sure'],
  ok: 'Thank you — your request was sent. We will get back to you shortly.',
  err: 'Sorry, the form could not be sent. Please email or call us instead.',
  note: 'We reply within one business day.',
};

// Project photos. Files live in public/images/projects/: `name.jpg` (large) and `name-t.jpg` (800x600 tile).
export const categories = [
  { key: 'curtainwall', label: 'Curtain wall' },
  { key: 'storefront', label: 'Storefront entrances' },
  { key: 'partitions', label: 'Office partitions' },
  { key: 'windows', label: 'Commercial windows' },
  { key: 'fiberglass', label: 'Fiberglass windows' },
  { key: 'pvc', label: 'Apartment PVC windows' },
] as const;
export type CategoryKey = (typeof categories)[number]['key'];

export const projects: { img: string; cats: CategoryKey[] }[] = [
  { img: 'curtainwall-1', cats: ['curtainwall'] },
  { img: 'fiberglass-1', cats: ['fiberglass'] },
  { img: 'partition-1', cats: ['partitions'] },
  { img: 'storefront-1', cats: ['storefront'] },
  { img: 'pvc-1', cats: ['pvc'] },
  { img: 'windows-1', cats: ['windows'] },
  { img: 'curtainwall-4', cats: ['curtainwall'] },
  { img: 'fiberglass-4', cats: ['fiberglass'] },
  { img: 'partition-2', cats: ['partitions'] },
  { img: 'storefront-2', cats: ['storefront'] },
  { img: 'pvc-2', cats: ['pvc'] },
  { img: 'curtainwall-2', cats: ['curtainwall'] },
  { img: 'fiberglass-2', cats: ['fiberglass'] },
  { img: 'partition-3', cats: ['partitions'] },
  { img: 'storefront-3', cats: ['storefront', 'windows'] },
  { img: 'pvc-3', cats: ['pvc'] },
  { img: 'curtainwall-3', cats: ['curtainwall'] },
  { img: 'fiberglass-3', cats: ['fiberglass'] },
  { img: 'partition-4', cats: ['partitions'] },
  { img: 'storefront-4', cats: ['storefront'] },
  { img: 'pvc-5', cats: ['pvc'] },
  { img: 'fiberglass-5', cats: ['fiberglass', 'curtainwall'] },
  { img: 'partition-5', cats: ['partitions'] },
  { img: 'storefront-5', cats: ['storefront'] },
  { img: 'pvc-4', cats: ['pvc'] },
  { img: 'curtainwall-5', cats: ['curtainwall'] },
  { img: 'partition-6', cats: ['partitions'] },
  { img: 'storefront-6', cats: ['storefront', 'windows'] },
  { img: 'pvc-6', cats: ['pvc'] },
  { img: 'pvc-7', cats: ['pvc'] },
];
