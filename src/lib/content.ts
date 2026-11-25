export interface Stat {
  value: number;
  suffix: string;
  label: string;
  note: string;
}

export const company = {
  name: 'Terra Ecopreneurs',
  tagline: 'Engineering a sustainable future through innovation.',
  heroHeadline: ['Progress that', 'respects the planet.', 'Innovation that', 'transforms tomorrow.'],
  heroSupport:
    'Terra Ecopreneurs brings together engineering, technology and sustainable thinking to create meaningful solutions for industries, communities and the environment.',
  intro:
    'From our base in Coimbatore, Tamil Nadu, Terra Ecopreneurs began as a energy services company and has grown into a multi-vertical sustainability enterprise — pairing industrial engineering with rural transformation. We believe progress and ecology are not competing goals; engineering done well achieves both.',
  vision:
    'To be the partner of choice for organisations and communities pursuing measurable, lasting sustainability — where every rupee of efficiency earned protects the environment it comes from.',
  mission:
    'We engineer energy, automation and agricultural solutions that deliver verified outcomes: lower emissions, stronger businesses and thriving rural livelihoods.',
  philosophy: [
    {
      title: 'Engineering first',
      body: 'Every claim we make is grounded in measurement. Audits precede action; data follows delivery.',
    },
    {
      title: 'Ecology as economics',
      body: 'Sustainability that costs the business is unsustainable. We design for both margins and soil.',
    },
    {
      title: 'Partnership over projects',
      body: 'We stay beyond commissioning — training teams, monitoring systems and sharing results honestly.',
    },
  ],
};

/* Impact figures are illustrative placeholders pending verified client data.
   The Impact page labels every metric with its reporting basis. */
export const impactStats: Stat[] = [
  { value: 120, suffix: '+', label: 'Projects completed', note: 'Across energy, industry and agriculture' },
  { value: 42, suffix: ' GWh', label: 'Energy saved', note: 'Cumulative verified efficiency gains' },
  { value: 31, suffix: 'k t', label: 'CO₂ emissions avoided', note: 'Estimated against baseline audits' },
  { value: 7500, suffix: '+', label: 'Farmers supported', note: 'Through the TRANSFORM programme' },
  { value: 64, suffix: '', label: 'Communities reached', note: 'Villages and rural institutions' },
  { value: 85, suffix: '+', label: 'Business partnerships', note: 'Clients, FPOs and institutions' },
];

export const verticals = [
  {
    id: 'energy-engineering',
    title: 'Energy & Engineering',
    summary:
      'Energy audits, efficiency retrofits, building automation and industrial automation — engineered for measured, bankable savings.',
    href: '/energy-engineering',
    theme: 'dark' as const,
  },
  {
    id: 'agriculture',
    title: 'Agriculture & TRANSFORM',
    summary:
      'The TRANSFORM programme builds farmer capacity, strengthens FPOs and develops rural infrastructure across Tamil Nadu.',
    href: '/agriculture',
    theme: 'light' as const,
  },
  {
    id: 'digital',
    title: 'Digital & Prefab',
    summary:
      'Digital solutions for energy intelligence, alongside prefabricated structures and precision press components for industry.',
    href: '/solutions',
    theme: 'dark' as const,
  },
];

export interface Solution {
  title: string;
  code: string;
  blurb: string;
  detail: string;
}

export const solutions: Solution[] = [
  {
    title: 'Energy Efficiency & Audit',
    code: 'EE',
    blurb: 'Walk-through to investment-grade audits; metering, benchmarking and retrofit roadmaps.',
    detail:
      'Baseline measurement, load profiling and payback-ranked retrofit plans that turn energy from an overhead into a managed resource.',
  },
  {
    title: 'Clean Energy',
    code: 'CE',
    blurb: 'Solar PV, hybrid systems and decentralised renewables for industry and agriculture.',
    detail:
      'Rooftop and ground-mounted solar, pump and process electrification, and hybrid designs sized to real load profiles.',
  },
  {
    title: 'IBMS',
    code: 'IB',
    blurb: 'Integrated building management systems that make every plant visible and controllable.',
    detail:
      'HVAC, lighting, water and power converged on one platform with analytics, alarm logic and remote command.',
  },
  {
    title: 'Digital Solutions',
    code: 'DS',
    blurb: 'Energy dashboards, IoT metering and analytics that keep savings honest after handover.',
    detail:
      'Persistence matters: continuous monitoring compares live performance against baseline so savings endure.',
  },
  {
    title: 'Industrial Automation',
    code: 'IA',
    blurb: 'PLC, SCADA and process control engineered for reliability on the factory floor.',
    detail:
      'Control-panel design, drives, instrumentation and sequencing — from single machines to full lines.',
  },
  {
    title: 'Prefabricated Structures',
    code: 'PS',
    blurb: 'Fast, low-waste steel buildings for industry and rural infrastructure.',
    detail:
      'Factory-built modules erected on site in weeks — warehouses, schools, cold rooms and utility buildings.',
  },
  {
    title: 'Press Components',
    code: 'PC',
    blurb: 'Precision sheet-metal press parts manufactured to client specification.',
    detail:
      'Tooling, stamping and finishing for electrical, automotive and general engineering customers.',
  },
  {
    title: 'Sustainable Management',
    code: 'SM',
    blurb: 'ESG advisory, carbon accounting and sustainability reporting for growing companies.',
    detail:
      'From disclosure frameworks to reduction roadmaps, we help organisations manage what they measure.',
  },
];

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  sector: 'Energy & Engineering' | 'Agriculture' | 'Industry';
  solutions: string[];
  location: string;
  overview: string;
  challenge: string;
  approach: string;
  execution: string[];
  results: { value: string; label: string }[];
  testimonial?: { quote: string; role: string };
  theme: string;
  accent: 'sage' | 'clay' | 'forest';
}

export const projects: Project[] = [
  {
    slug: 'textile-mill-retrofit',
    title: 'Coimbatore Textile Mill Retrofit',
    client: 'Confidential textile manufacturer',
    industry: 'Textiles',
    sector: 'Energy & Engineering',
    solutions: ['Energy Efficiency & Audit', 'IBMS', 'Digital Solutions'],
    location: 'Coimbatore, Tamil Nadu',
    overview:
      'A 40-year-old spinning mill facing rising power costs commissioned Terra to find savings without stopping production.',
    challenge:
      'Humidification plants, compressors and lighting ran on 1990s controls. No sub-metering existed, so nobody could say where the units went. Management would not tolerate production downtime.',
    approach:
      'We began with an investment-grade audit: temporary metering across all major loads for a full production cycle, then built a savings model ranked by payback and ease of implementation.',
    execution: [
      'Sub-metering network across 46 major loads with live dashboard',
      'Humidification plant retrofit with VFDs and CO₂-based control',
      'Compressor sequencing and leak-reduction programme',
      'LED relamping of the full weaving and spinning halls',
      'Operator training and a 12-month performance monitoring contract',
    ],
    results: [
      { value: '23%', label: 'Reduction in specific energy consumption' },
      { value: '14 mo', label: 'Measured project payback period' },
      { value: '1,900 t', label: 'CO₂ avoided per year' },
    ],
    testimonial: {
      quote:
        'Terra showed us the numbers before we spent a rupee, and the savings showed up on the bills exactly as promised.',
      role: 'Managing Director, client mill',
    },
    theme: 'from-forest-800 via-forest-700 to-forest-900',
    accent: 'sage',
  },
  {
    slug: 'transform-fpo-cluster',
    title: 'TRANSFORM FPO Cluster Programme',
    client: 'Small-holder farmer producer organisations',
    industry: 'Agriculture',
    sector: 'Agriculture',
    solutions: ['Sustainable Management', 'Prefabricated Structures', 'Clean Energy'],
    location: 'Western Tamil Nadu',
    overview:
      'A multi-year programme strengthening farmer producer organisations with training, shared infrastructure and market access.',
    challenge:
      'Small-holder members of FPOs faced post-harvest losses, weak bargaining power and little access to agronomy support. Infrastructure costs were far beyond what any single village could fund.',
    approach:
      'TRANSFORM paired capacity building with shared assets: farmer field schools, collective procurement and marketing, and centrally built processing and storage infrastructure.',
    execution: [
      'Farmer field schools on soil health, water and integrated pest management',
      'Collection centres and grading lines built with prefabricated structures',
      'Solar drying and cold-storage pilots at two hubs',
      'Digital crop advisories through FPO networks',
      'Linkage of member produce to institutional buyers',
    ],
    results: [
      { value: '7,500+', label: 'Farmers supported across the cluster' },
      { value: '31%', label: 'Average post-harvest loss reduction at hubs' },
      { value: '18%', label: 'Gain in net realisation for member farmers' },
    ],
    theme: 'from-linen via-sage-300 to-linen',
    accent: 'forest',
  },
  {
    slug: 'auto-component-automation',
    title: 'Auto Component Line Automation',
    client: 'Tier-2 automotive supplier',
    industry: 'Manufacturing',
    sector: 'Industry',
    solutions: ['Industrial Automation', 'Press Components', 'Energy Efficiency & Audit'],
    location: 'Coimbatore, Tamil Nadu',
    overview:
      'A precision components maker needed to lift output and quality consistency ahead of a major OEM qualification audit.',
    challenge:
      'Manual press lines limited throughput and quality depended on operator skill. Scrap rates were eroding margins, and the OEM audit demanded traceability the plant could not provide.',
    approach:
      'Terra redesigned the press cell around automation with quality built in: servo feeds, in-line inspection and a control layer that logs every part.',
    execution: [
      'Servo-feed press automation with safety-integrated guarding',
      'In-line vision inspection with reject ejection',
      'SCADA layer for batch traceability and OEE reporting',
      'Operator retraining and maintenance handover programme',
    ],
    results: [
      { value: '2.1x', label: 'Line throughput after commissioning' },
      { value: '68%', label: 'Reduction in scrap rate' },
      { value: '100%', label: 'Batch traceability for OEM audit' },
    ],
    theme: 'from-charcoal via-forest-800 to-charcoal',
    accent: 'sage',
  },
];

export const milestones = [
  { year: '2014', title: 'Terra founded', body: 'Established in Coimbatore as an energy services company serving textile and engineering industries.' },
  { year: '2017', title: 'Into automation', body: 'Added industrial automation and building management capabilities after early retrofit success.' },
  { year: '2019', title: 'TRANSFORM begins', body: 'Launched the TRANSFORM agriculture programme with the first farmer field schools.' },
  { year: '2021', title: 'Prefab & manufacturing', body: 'Vertical integration into prefabricated structures and precision press components.' },
  { year: '2023', title: 'Digital platform', body: 'Deployed our own energy-intelligence platform for persistent savings monitoring.' },
  { year: '2025', title: 'Scale of impact', body: 'Crossed 120 projects and 7,500 farmers supported across Tamil Nadu and beyond.' },
];

export const testimonials = [
  {
    quote:
      'Terra treated our energy bill as an engineering problem, not a finance problem. The audit paid for itself before the retrofits even finished.',
    role: 'Operations Head',
    org: 'Textile manufacturing client',
  },
  {
    quote:
      'The farmer field school changed how our village thinks about soil and water. Yields held and input costs fell in the same season.',
    role: 'FPO Director',
    org: 'TRANSFORM programme participant',
  },
  {
    quote:
      'From the first walkthrough to the final invoice, everything was documented. That discipline is rare.',
    role: 'Plant Manager',
    org: 'Automotive component client',
  },
];

export const partners = [
  'Ministry of New & Renewable Energy',
  'Tamil Nadu Agricultural University',
  'SIDBI',
  'Confederation of Indian Industry',
  'NABARD',
  'BEE Certified ESCO programme',
];

export const articles = [
  {
    slug: 'why-audits-fail',
    title: 'Why most energy audits fail to save anything',
    category: 'Energy',
    date: 'Nov 2025',
    read: '6 min',
    excerpt:
      'An audit is only worth the behaviour that follows it. We look at where reports go to die, and how metering keeps savings alive after the consultant leaves.',
  },
  {
    slug: 'fpos-that-work',
    title: 'What separates FPOs that thrive from those that fold',
    category: 'Agriculture',
    date: 'Oct 2025',
    read: '8 min',
    excerpt:
      'Five years into TRANSFORM, the pattern is clear: shared infrastructure matters less than shared governance. Our field notes.',
  },
  {
    slug: 'automation-for-small-plants',
    title: 'Automation is not a luxury anymore — even for small plants',
    category: 'Engineering',
    date: 'Sep 2025',
    read: '5 min',
    excerpt:
      'Falling sensor and drive costs have moved the payback math. A practical guide for plant owners considering their first automation step.',
  },
  {
    slug: 'measure-then-manage',
    title: 'Measure, then manage: a case for sub-metering everything',
    category: 'Sustainability',
    date: 'Aug 2025',
    read: '7 min',
    excerpt:
      'You cannot cut what you cannot see. How granular metering changes the conversation between factory floor and finance office.',
  },
];

export const enquiryTypes = [
  'Energy efficiency / audit enquiry',
  'Clean energy & solar',
  'Automation / IBMS',
  'Prefabricated structures / press components',
  'TRANSFORM / agriculture partnership',
  'Careers',
  'Other',
];
