// All site text lives here.
export const phone = { display: '(204) 230-8145', tel: '+12042308145' };
export const email = 'info@theinstaller.ca';
export const city = 'Winnipeg, Manitoba';
export const facebook = 'https://www.facebook.com/winnipegwindows';
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
// Each service has its own page at /<slug>.
export interface Service {
  key: ServiceKey;
  slug: string;
  name: string;
  short: string;       // card text
  text: string;        // first paragraph
  more: string[];      // further paragraphs on the service page
  list: string[];      // what is included
  h1: string;
  title: string;       // browser/Google title
  description: string; // Google description
  faqs: [string, string][];
  photoCats: string[]; // gallery categories shown on the page
  img?: string;
  workH?: string;     // heading above the photos, when the default "Our <name> work" does not fit
  shareImg?: string;  // photo for link previews when the service has no img
}

const outside: [string, string] = ['Do you work outside Winnipeg?', 'Yes. We are based in Winnipeg and take projects across Manitoba.'];

export const services: Service[] = [
  {
    key: 'curtainwall',
    slug: 'curtain-wall-installation',
    name: 'Curtain wall',
    img: 'curtainwall-1',
    photoCats: ['curtainwall'],
    h1: 'Curtain wall installation in Winnipeg',
    title: 'Curtain Wall Installation in Winnipeg',
    description: 'Aluminum curtain wall supplied and installed in Winnipeg and Manitoba. Layout, anchors, framing, glazing and seals done by one crew. Send drawings for a quote.',
    short: 'Aluminum curtain wall, supplied and installed from anchors to caps.',
    text: 'We supply and install aluminum curtain wall systems on new buildings and additions. Layout, anchors, framing, glass and seals are done by the same crew, so the wall is plumb, tight and ready for inspection.',
    more: [
      'We work from the approved shop drawings and the manufacturer’s installation instructions. Anchors, alignment and joint sizes are checked before the glass goes in, because that is where leaks and call-backs start.',
      'Typical jobs are new commercial and mixed-use buildings, additions, and glazed stair and elevator towers.',
    ],
    list: ['Supply and installation of the complete system', 'Layout and anchor installation', 'Mullions, pressure plates and caps', 'Glass, spandrel and panel infill', 'Perimeter seals and air/vapour barrier tie-in'],
    faqs: [
      ['Do you supply the curtain wall or only install it?', 'We supply and install. You get one price and one company responsible for the material, the installation and the finished wall.'],
      ['What do you need to price a curtain wall job?', 'The elevations, the curtain wall shop drawings if they are ready, and the schedule. Early in a project the architectural drawings are enough for a budget price.'],
      outside,
    ],
  },
  {
    key: 'storefront',
    slug: 'storefront-entrance-installation',
    name: 'Storefront & entrances',
    img: 'storefront-1',
    photoCats: ['storefront'],
    h1: 'Storefront and entrance installation in Winnipeg',
    title: 'Storefront Entrance Installation in Winnipeg',
    description: 'Aluminum storefront and entrances supplied and installed in Winnipeg. A clean way to upgrade an apartment building entrance. Request a quote.',
    short: 'Storefront framing and entrances, supplied and installed.',
    text: 'We supply and install storefront framing and aluminum entrances for apartment buildings, retail and offices. We set the frames, hang and adjust the doors, and leave the entrance working the way it should.',
    more: [
      'An entrance is the most used part of a building, so the details matter: a level sill, square frames, doors that close on their own and latch every time, and seals that keep the wind out in January.',
      'A new aluminum entrance is the simplest way to upgrade an apartment building: it changes how the building looks from the street, stops drafts in the lobby and gives tenants a door that works. We also do new storefronts for retail and offices.',
    ],
    list: ['Supply and installation', 'Apartment building entrance upgrades', 'Aluminum storefront framing', 'Entrance doors, closers and hardware', 'Glass replacement and re-glazing'],
    faqs: [
      ['Can you replace the old entrance of an apartment building?', 'Yes. We supply the new entrance, remove the old frame and doors, set the new one in the existing opening, and seal and finish the perimeter.'],
      ['What do you need to quote a storefront or entrance?', 'Drawings if there are any. For a replacement, photos and rough sizes are enough to start, and we measure on site before ordering.'],
      outside,
    ],
  },
  {
    key: 'partitions',
    slug: 'office-glass-partitions',
    name: 'Office partitions',
    img: 'partition-1',
    photoCats: ['partitions'],
    h1: 'Office glass partitions in Winnipeg',
    title: 'Office Glass Partition Installation Winnipeg',
    description: 'Glass office partitions installed in Winnipeg: framed and frameless glass fronts, meeting rooms and glass doors for offices and tenant fit-ups.',
    short: 'Glass office fronts and interior glazed partitions.',
    text: 'Interior glazed partitions for offices and tenant fit-ups: framed systems, frameless glass fronts and glass doors. We work clean in finished spaces and around other trades.',
    more: [
      'Glass partitions let daylight through an office and still give people a room with a door. We install straight runs, corners, angled and segmented layouts, with swing or sliding glass doors.',
      'The work ranges from a single glass office front to full partition lines in converted industrial and heritage buildings.',
    ],
    list: ['Glass office fronts and meeting rooms', 'Framed and frameless systems', 'Glass doors, pulls and hardware', 'Straight, angled and segmented layouts'],
    faqs: [
      ['Framed or frameless: which do you install?', 'Both. Framed systems use slim aluminum or steel-look profiles; frameless fronts use glass set in floor and ceiling channels with glass doors.'],
      ['What do you need to quote partitions?', 'A floor plan with the partition lines and ceiling heights, and the door locations. Photos of the space help.'],
      outside,
    ],
  },
  {
    key: 'windows',
    slug: 'commercial-window-installation',
    name: 'Aluminum windows',
    img: 'fiberglass-1',
    photoCats: ['windows', 'fiberglass'],
    workH: 'Our aluminum and fiberglass window work',
    h1: 'Commercial window installation in Winnipeg',
    title: 'Commercial Window Installation in Winnipeg',
    description: 'Aluminum and fiberglass windows supplied and installed in Winnipeg for multi-unit buildings and offices. New construction and retrofit.',
    short: 'Aluminum and fiberglass windows for multi-unit buildings and offices.',
    text: 'We supply and install aluminum and fiberglass windows for multi-unit buildings and offices, on new construction and retrofit projects.',
    more: [
      'On new construction we set windows into prepared openings and tie them into the air and water barrier. On retrofit jobs we remove the old units, prepare the opening, and install, insulate and seal the new ones.',
      'Supply and installation come as one package, so the windows are ordered to the sizes we measured and one company answers for the result.',
    ],
    list: ['Supply and installation', 'Aluminum and fiberglass windows', 'Multi-unit buildings and offices', 'New construction and retrofit', 'Flashing, insulation and sealing'],
    faqs: [
      ['Do you supply the windows or only install them?', 'We supply and install. The quote covers the windows, the installation and the sealing.'],
      ['What do you need to quote a window job?', 'The window schedule and elevations for new construction. For a retrofit, the number of openings, rough sizes and photos are enough to start.'],
      outside,
    ],
  },
  {
    key: 'pvc',
    slug: 'apartment-window-replacement',
    name: 'Apartment PVC windows',
    img: 'pvc-1',
    photoCats: ['pvc'],
    h1: 'Apartment window replacement in Winnipeg',
    title: 'Apartment PVC Window Replacement in Winnipeg',
    description: 'PVC window replacement for apartment blocks and townhouses in Winnipeg. Supply and installation for the whole building, with windows from quality local suppliers.',
    short: 'Full-building PVC window replacement for apartment blocks.',
    text: 'We supply and install PVC windows for apartment blocks and townhouses, done as one job for the whole building. The windows come from high-quality local suppliers, built to the sizes we measure.',
    more: [
      'Every opening is measured, the windows are ordered to those sizes, and our crew installs them. One company is responsible for the whole job, from the measurement to the last bead of sealant.',
      'For property managers and building owners that means one quote, one schedule and one contact.',
    ],
    list: ['Supply and installation', 'Whole-building window replacement', 'Apartment blocks and townhouses', 'Windows from high-quality local suppliers', 'Flashing, insulation and sealing'],
    faqs: [
      ['Where do the windows come from?', 'From high-quality local suppliers. They are made to order for each opening.'],
      ['Do you replace windows in single houses?', 'Homeowner jobs are handled by our partner company, The Windows, at thewindows.ca.'],
      outside,
    ],
  },
  {
    key: 'doors',
    slug: 'hollow-metal-door-installation',
    name: 'Hollow metal doors & hardware',
    photoCats: ['doors'],
    shareImg: 'doors-1',
    h1: 'Hollow metal door and hardware installation in Winnipeg',
    title: 'Hollow Metal Door Installation in Winnipeg',
    description: 'Hollow metal frames, doors and finish hardware installed in Winnipeg on commercial and multi-family projects. Labour-only packages welcome.',
    short: 'Frames, doors and hardware installed to the schedule.',
    text: 'We install hollow metal frames, doors and finish hardware on commercial and multi-family projects. Labour-only packages are welcome — send us the door schedule and we will price it.',
    more: [
      'Doors are installed to the door and hardware schedules: frames set plumb and square, doors hung with even gaps, and hardware fitted and adjusted so every opening closes and latches.',
      'We work for door and hardware suppliers who need an install crew, and for general contractors who want the whole door package installed by one company.',
    ],
    list: ['Hollow metal frames and doors', 'Finish hardware installed to the hardware schedule', 'Fire-rated openings', 'Labour-only installation for suppliers and general contractors'],
    faqs: [
      ['Do you take labour-only door packages?', 'Yes. The supplier or general contractor provides the frames, doors and hardware, and we install them to the schedule.'],
      ['What do you need to price a door package?', 'The door schedule, the hardware schedule and the floor plans, plus the project schedule.'],
      outside,
    ],
  },
];

export const home = {
  kicker: 'Commercial glazing · Winnipeg',
  h1: 'Dedicated to install',
  lead: 'Curtain wall, storefront, office partitions, windows and doors installed for general contractors, suppliers and building owners in Winnipeg and across Manitoba.',
  strip: ['Curtain wall', 'Storefront', 'Office partitions', 'Windows', 'Doors'],
  valuesH: 'How we work',
  valuesP: 'We measure, supply and install, and we do it carefully.',
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
  lead: 'A Winnipeg company that supplies and installs commercial glazing, windows and doors.',
  p1: 'Theinstaller takes a job from the first measurement to the finished project. We measure, go through the options with you, recommend what suits the building and the budget, then supply and install it. Curtain wall, storefront, office partitions, windows and doors — set properly, sealed properly and finished on time.',
  p2: 'We work for general contractors, for suppliers who need an install crew, and directly for building owners. Small tenant fit-up or a full building envelope package, the work gets the same attention.',
  standH: 'What you can expect',
  stand: [
    'A written quote with a clear scope',
    'Work done to the shop drawings and manufacturer instructions',
    'A clean, safe site',
    'Straight answers about schedule and problems',
  ],
  resH: 'Residential windows',
  resP: 'PVC windows for homeowners are handled by our partner company, The Windows.',
};

export const contact = {
  h1: 'Request a quote for glazing installation in Winnipeg',
  lead: 'Tell us about the project. Drawings and schedules can be sent by email after you submit the form.',
  serviceOptions: ['Curtain wall', 'Storefront & entrances', 'Office partitions', 'Aluminum windows', 'Apartment PVC windows', 'Hollow metal doors & hardware', 'Other / not sure'],
  ok: 'Thank you — your request was sent. We will get back to you shortly.',
  err: 'Sorry, the form could not be sent. Please email or call us instead.',
  note: 'We reply within one business day.',
};

// Project photos. Files live in public/images/projects/: `name.jpg` (large) and `name-t.jpg` (800x600 tile).
export const categories = [
  { key: 'curtainwall', label: 'Curtain wall' },
  { key: 'storefront', label: 'Storefront entrances' },
  { key: 'partitions', label: 'Office partitions' },
  { key: 'windows', label: 'Aluminum windows', tag: 'Commercial windows' },
  { key: 'fiberglass', label: 'Fiberglass windows', tag: 'Commercial windows' },
  { key: 'pvc', label: 'Apartment PVC windows' },
  { key: 'doors', label: 'Steel doors', tag: 'Hollow metal doors' },
] as const;
export type CategoryKey = (typeof categories)[number]['key'];

// Photo caption (visible) and alt text (for search engines). `tag` is an extra search term
// added to the alt text only, e.g. aluminum and fiberglass photos are also "Commercial windows".
export function photoCaption(cats: readonly CategoryKey[]): string {
  return cats.map((k) => categories.find((c) => c.key === k)!.label).join(' · ');
}
export function photoAlt(cats: readonly CategoryKey[], desc: string): string {
  const tags = new Set<string>();
  for (const k of cats) {
    const c = categories.find((x) => x.key === k)!;
    if ('tag' in c) tags.add(c.tag);
  }
  const extra = tags.size ? ` (${[...tags].join(', ')})` : '';
  return `${desc} – ${photoCaption(cats)}${extra}, installed by Theinstaller, Winnipeg`;
}

// `alt` describes what the photo shows, in a few words, for search engines and screen readers. Each photo needs its own.
export const projects: { img: string; cats: CategoryKey[]; alt: string }[] = [
  { img: 'curtainwall-1', cats: ['curtainwall'], alt: 'Glass stair tower beside an exterior steel staircase' },
  { img: 'fiberglass-1', cats: ['fiberglass'], alt: 'Six-storey building with black-framed window walls on every floor' },
  { img: 'partition-1', cats: ['partitions'], alt: 'Frameless glass front and double glass doors at an office reception' },
  { img: 'storefront-1', cats: ['storefront'], alt: 'Dark bronze aluminum storefront entrance to a brick apartment building' },
  { img: 'pvc-1', cats: ['pvc'], alt: 'White PVC windows in a three-storey orange brick apartment building' },
  { img: 'windows-1', cats: ['windows'], alt: 'Aluminum ribbon windows on an industrial building' },
  { img: 'partition-2', cats: ['partitions'], alt: 'Curved frameless glass partition with a black frame in a lobby' },
  { img: 'storefront-2', cats: ['storefront'], alt: 'Dark aluminum entrance with sidelights and transoms on a brick apartment building' },
  { img: 'partition-3', cats: ['partitions'], alt: 'Black-framed glass partition wall under steel roof trusses in a converted industrial building' },
  { img: 'storefront-3', cats: ['storefront', 'windows'], alt: 'White aluminum double entrance doors and storefront windows with patterned glass' },
  { img: 'partition-4', cats: ['partitions'], alt: 'Black steel-framed glass partition beside heritage winch machinery' },
  { img: 'storefront-4', cats: ['storefront'], alt: 'Black aluminum entrance door with sidelight on a stucco apartment building' },
  { img: 'pvc-5', cats: ['pvc'], alt: 'Dark-framed PVC windows in a row of townhouses' },
  { img: 'fiberglass-5', cats: ['fiberglass', 'curtainwall'], alt: 'Four-storey apartment building with black windows and a glass curtain wall at street level' },
  { img: 'partition-5', cats: ['partitions'], alt: 'Tall black-framed glass partition wall in a converted industrial building' },
  { img: 'storefront-5', cats: ['storefront'], alt: 'Black aluminum storefront entrance with door and transom in a brick building' },
  { img: 'partition-6', cats: ['partitions'], alt: 'Row of glass-fronted offices with black frames and glass doors' },
  { img: 'storefront-6', cats: ['storefront', 'windows'], alt: 'White aluminum entrance and windows on a single-storey stone-faced building' },
  { img: 'pvc-8', cats: ['pvc'], alt: 'New black-framed windows in a three-storey red brick apartment building' },
  { img: 'pvc-9', cats: ['pvc'], alt: 'White PVC windows in a three-storey brown brick apartment building' },
  { img: 'pvc-10', cats: ['pvc'], alt: 'White PVC windows in a row of dark stucco apartment blocks' },
  { img: 'pvc-11', cats: ['pvc'], alt: 'White PVC windows in a yellow brick apartment building with a canopied entrance' },
  { img: 'pvc-12', cats: ['pvc'], alt: 'White PVC windows and a black glazed entrance in a brick apartment building' },
  { img: 'pvc-13', cats: ['pvc'], alt: 'White PVC slider windows along a red brick apartment building' },
  { img: 'pvc-14', cats: ['pvc'], alt: 'Black-framed windows and balcony doors in a six-storey white apartment building' },
  { img: 'fiberglass-6', cats: ['fiberglass', 'curtainwall'], alt: 'Six floors of black-framed window wall on a mixed-use building' },
  { img: 'fiberglass-7', cats: ['fiberglass'], alt: 'Black fiberglass windows and arched dormers in a brick heritage house' },
  { img: 'fiberglass-8', cats: ['fiberglass'], alt: 'Dark-framed fiberglass windows in a six-storey brick heritage building' },
  { img: 'storefront-7', cats: ['storefront', 'windows'], alt: 'Street-level storefront glazing in a yellow brick heritage building' },
  { img: 'partition-7', cats: ['partitions'], alt: 'Frameless glass office pods with black channels and a wood surround' },
  { img: 'partition-8', cats: ['partitions'], alt: 'Black-framed glass office front with a glass door along an open-plan corridor' },
  { img: 'partition-9', cats: ['partitions'], alt: 'Black-framed glass partition wall with a hinged glass door in an office corridor' },
  { img: 'storefront-8', cats: ['storefront'], alt: 'Aluminum storefront with entrance door on a metal-clad commercial building' },
  { img: 'storefront-9', cats: ['storefront'], alt: 'Black aluminum entrance door with sidelights under a steel canopy' },
  { img: 'storefront-10', cats: ['storefront'], alt: 'Black aluminum entrance door with sidelights in a red brick wall' },
  { img: 'storefront-11', cats: ['storefront'], alt: 'Black aluminum entrance with sidelights and transom on a brick apartment building' },
  { img: 'storefront-12', cats: ['storefront'], alt: 'Black aluminum storefront with entrance door and three glass panels' },
  { img: 'storefront-13', cats: ['storefront'], alt: 'Black aluminum vestibule door with sidelites in an apartment building lobby' },
  { img: 'storefront-14', cats: ['storefront'], alt: 'Black aluminum storefront with a glass entrance door under an apartment building canopy' },
  { img: 'curtainwall-6', cats: ['curtainwall'], alt: 'Street-level glass curtain wall with an aluminum entrance door' },
  { img: 'curtainwall-7', cats: ['curtainwall'], alt: 'Glass wall with entrance door and glazed overhead door in a concrete facade' },
  { img: 'doors-1', cats: ['doors'], alt: 'Grey hollow metal door with a vision panel in a brick wall' },
];
