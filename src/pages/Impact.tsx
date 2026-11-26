// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { impactStats, projects } from '@/lib/content';
// import { CountUp } from '@/lib/reveal';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';
// import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

// const PILLARS = [
//   {
//     title: 'Environmental impact',
//     body: 'Energy saved at source and emissions avoided through efficiency, renewables and electrification — measured against baselines, not estimates.',
//     stats: [impactStats[1], impactStats[2]],
//   },
//   {
//     title: 'Industrial impact',
//     body: 'Operational outcomes our clients run their businesses on: lower specific energy, higher throughput, quality that survives audits.',
//     stats: [impactStats[0], impactStats[5]],
//   },
//   {
//     title: 'Agricultural & social impact',
//     body: 'Livelihoods strengthened through the TRANSFORM programme — capacity built, infrastructure shared, market access earned.',
//     stats: [impactStats[3], impactStats[4]],
//   },
// ];

// export function ImpactPage() {
//   return (
//     <main>
//       <section className="grain relative flex min-h-[85vh] items-end overflow-hidden bg-forest-900 text-ivory">
//         <SceneCanvas variant="impact" className="animate-drift" />
//         <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/50" />
//         <div className="shell relative z-10 pb-24 pt-40">
//           <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
//             <span className="h-px w-10 bg-sage-400" /> Our Impact
//           </p>
//           <MaskedLines
//             lines={['What change', 'looks like, counted.']}
//             className="headline-xl max-w-5xl"
//             startDelay={150}
//           />
//           <Reveal delay={400}>
//             <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-ivory/70">
//               Trust is earned with evidence. Every metric below is illustrative until verified — each published figure will
//               name its source, reporting period and unit.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-ivory py-24 md:py-32">
//         <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {impactStats.map((s, i) => (
//             <Reveal key={s.label} delay={i * 80} className="border-t-2 border-forest-800/15 pt-6">
//               <span className="font-heading text-5xl font-bold tracking-tight text-forest-800 md:text-6xl">
//                 <CountUp value={s.value} suffix={s.suffix} duration={1800 + i * 150} />
//               </span>
//               <p className="mt-3 font-heading text-base font-semibold text-charcoal">{s.label}</p>
//               <p className="mt-1 font-body text-sm text-charcoal/60">{s.note}</p>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <section className="bg-linen py-24 md:py-36">
//         <div className="shell space-y-5">
//           {PILLARS.map((p, i) => (
//             <Reveal key={p.title} delay={i * 80}>
//               <div className="grid gap-8 rounded-sm bg-ivory p-10 md:grid-cols-12 md:p-14">
//                 <div className="md:col-span-7">
//                   <h3 className="font-display text-3xl font-medium text-forest-800 md:text-4xl">{p.title}</h3>
//                   <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-charcoal/75">{p.body}</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-6 md:col-span-5">
//                   {p.stats.map((s) => (
//                     <div key={s.label} className="border-l-2 border-sage-500 pl-4">
//                       <span className="font-heading text-3xl font-bold text-forest-800">
//                         <CountUp value={s.value} suffix={s.suffix} />
//                       </span>
//                       <p className="mt-1 font-body text-xs uppercase tracking-wide text-charcoal/60">{s.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <section className="bg-ivory py-24 md:py-36">
//         <div className="shell">
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <MaskedLines lines={['Impact stories']} className="headline-lg text-forest-800" />
//             <Reveal>
//               <Link to="/projects" className="btn-ghost-dark">
//                 All case studies <ArrowRight size={16} />
//               </Link>
//             </Reveal>
//           </div>
//           <div className="mt-14 grid gap-6 md:grid-cols-3">
//             {projects.map((p, i) => (
//               <Reveal key={p.slug} delay={i * 100}>
//                 <Link to={`/projects/${p.slug}`} className="group block">
//                   <ClipReveal className="relative min-h-[260px] overflow-hidden rounded-sm">
//                     <SceneCanvas variant={p.sector === 'Agriculture' ? 'agri' : 'energy'} />
//                   </ClipReveal>
//                   <div className="mt-5 flex items-center justify-between">
//                     <div>
//                       <span className="label-caps text-forest-600">{p.sector}</span>
//                       <h3 className="mt-2 font-display text-2xl font-medium text-forest-800 transition-colors group-hover:text-forest-600">
//                         {p.title}
//                       </h3>
//                     </div>
//                     <ArrowRight size={20} className="shrink-0 text-forest-800 transition-transform group-hover:translate-x-1" />
//                   </div>
//                 </Link>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ClosingCta title={['Ready to create', 'measurable impact?']} cta="Talk to Terra" />
//     </main>
//   );
// }



import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Factory,
  Sprout,
  TrendingUp,
  Shield,
  Users,
} from 'lucide-react';
import { impactStats, projects } from '@/lib/content';
import { CountUp } from '@/lib/reveal';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const PILLARS = [
  {
    title: 'Environmental impact',
    body: 'Energy saved at source and emissions avoided through efficiency, renewables and electrification — measured against baselines, not estimates.',
    stats: [impactStats[1], impactStats[2]],
    icon: Leaf,
    accent: 'sage',
    index: '01',
  },
  {
    title: 'Industrial impact',
    body: 'Operational outcomes our clients run their businesses on: lower specific energy, higher throughput, quality that survives audits.',
    stats: [impactStats[0], impactStats[5]],
    icon: Factory,
    accent: 'forest',
    index: '02',
  },
  {
    title: 'Agricultural & social impact',
    body: 'Livelihoods strengthened through the TRANSFORM programme — capacity built, infrastructure shared, market access earned.',
    stats: [impactStats[3], impactStats[4]],
    icon: Sprout,
    accent: 'amber',
    index: '03',
  },
];

const ACCENT_MAP = {
  sage: {
    ring: 'ring-sage-500/30',
    iconBg: 'bg-sage-500/15',
    iconText: 'text-sage-600',
    border: 'border-sage-500/40',
    bar: 'bg-sage-500',
  },
  forest: {
    ring: 'ring-forest-800/25',
    iconBg: 'bg-forest-800/10',
    iconText: 'text-forest-800',
    border: 'border-forest-800/30',
    bar: 'bg-forest-800',
  },
  amber: {
    ring: 'ring-amber-600/25',
    iconBg: 'bg-amber-600/10',
    iconText: 'text-amber-700',
    border: 'border-amber-600/40',
    bar: 'bg-amber-600',
  },
} as const;

/**
 * Hero background image.
 * Replace with your own asset (in /public) or an imported asset.
 * Example: import heroBg from '@/assets/impact-hero.jpg';
 */
const HERO_BG =
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80';

/**
 * Fallback images used for the "Impact in the field" cards when a project
 * does not include an `image` field. Keyed by index for simple rotation.
 */
const FIELD_FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80', // solar
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80', // industrial
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80', // agriculture
];

/**
 * Projects may or may not carry an optional image URL depending on the
 * content source. Read it via a narrow typed accessor so this page compiles
 * even when the `Project` type does not declare `image`.
 */
function getProjectImage(project: unknown): string | undefined {
  if (
    project &&
    typeof project === 'object' &&
    'image' in project &&
    typeof (project as { image?: unknown }).image === 'string'
  ) {
    return (project as { image: string }).image;
  }
  return undefined;
}

/* ─────────────────────────────────────────────────────────────
   SECTION A — METHODOLOGY (data)
   ───────────────────────────────────────────────────────────── */
const METHOD_STEPS = [
  {
    step: '01',
    title: 'Baseline first',
    body: 'We capture pre-intervention consumption, throughput and emissions over a defined period — before any claim is made.',
  },
  {
    step: '02',
    title: 'Measured against instruments',
    body: 'Meters, sensors and third-party meter reads — not modelled estimates — form the primary evidence layer.',
  },
  {
    step: '03',
    title: 'Normalised & attributed',
    body: 'Output is normalised for weather, load and product mix so savings reflect the intervention, not the season.',
  },
  {
    step: '04',
    title: 'Independently verified',
    body: 'A named verifier reviews methodology, raw data and calculations before a figure is published.',
  },
];

/* ─────────────────────────────────────────────────────────────
   SECTION B — VOICES FROM THE FIELD (data)
   ───────────────────────────────────────────────────────────── */
const FIELD_VOICES = [
  {
    quote:
      'The baseline showed us we were burning 18% more than we thought. Two quarters later, that gap is gone — and we can prove it to our board.',
    name: 'Plant Operations Lead',
    role: 'Manufacturing client',
    tag: 'Industrial',
  },
  {
    quote:
      'The shared cold-storage unit changed our harvest window. We stop losing produce to heat, and we finally negotiate from a position of surplus.',
    name: 'Cooperative Chair',
    role: 'TRANSFORM programme',
    tag: 'Agricultural',
  },
  {
    quote:
      'Every figure they reported survived our audit. That is rare enough that we now use their methodology as our internal benchmark.',
    name: 'Independent Verifier',
    role: 'Third-party auditor',
    tag: 'Verification',
  },
];

export function ImpactPage() {
  return (
    <main>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="grain relative flex min-h-[90vh] items-end overflow-hidden bg-forest-900 text-ivory">
        {/* Background image */}
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Animated scene canvas layered over the image for texture */}
        <SceneCanvas variant="impact" className="animate-drift opacity-25" />

        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-forest-900/40" />
        <div className="absolute inset-0 bg-forest-900/30 mix-blend-multiply" />

        {/* Floating stat ribbon (desktop) */}
        <div className="absolute right-0 top-0 z-10 hidden h-full w-px bg-ivory/10 lg:block" />
        <div className="absolute right-8 top-1/3 z-10 hidden flex-col gap-8 lg:flex">
          {impactStats.slice(0, 3).map((s) => (
            <div key={s.label} className="text-right">
              <div className="font-heading text-2xl font-bold text-sage-400">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 max-w-[120px] font-body text-[10px] uppercase tracking-widest text-ivory/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="shell relative z-10 pb-24 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> Our Impact
          </p>
          <MaskedLines
            lines={['What change', 'looks like, counted.']}
            className="headline-xl max-w-5xl"
            startDelay={150}
          />
          <Reveal delay={400}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-ivory/70">
              Trust is earned with evidence. Every metric below is illustrative until verified — each published figure will
              name its source, reporting period and unit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── STATS BENTO ───────────────────── */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        {/* Decorative background number */}
        <span className="pointer-events-none absolute -right-8 top-8 select-none font-display text-[18rem] leading-none text-forest-800/[0.03] md:text-[26rem]">
          06
        </span>

        <div className="shell relative">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-caps mb-4 flex items-center gap-3 text-forest-600">
                <span className="h-px w-8 bg-forest-600" /> By the numbers
              </p>
              <h2 className="headline-lg max-w-2xl text-forest-800">Six metrics. One direction.</h2>
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal/60">
              Each figure is tracked against a named baseline and reporting period. Verified data published quarterly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-forest-800/10 bg-linen/40 p-8 transition-all duration-500 hover:border-forest-800/25 hover:bg-linen">
                  {/* Hover accent bar */}
                  <span className="absolute left-0 top-0 h-full w-0 bg-forest-800 transition-all duration-500 group-hover:w-1" />

                  <div className="flex items-start justify-between">
                    <span className="font-heading text-5xl font-bold tracking-tight text-forest-800 md:text-6xl">
                      <CountUp value={s.value} suffix={s.suffix} duration={1800 + i * 150} />
                    </span>
                    <span className="font-mono text-xs text-charcoal/30">0{i + 1}</span>
                  </div>

                  <div className="mt-8">
                    <p className="font-heading text-base font-semibold text-charcoal">{s.label}</p>
                    <p className="mt-1 font-body text-sm text-charcoal/60">{s.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── PILLARS — TIMELINE ───────────────── */}
      <section className="relative bg-linen py-24 md:py-36">
        <div className="shell">
          <div className="mb-20 max-w-2xl">
            <p className="label-caps mb-4 flex items-center gap-3 text-forest-600">
              <span className="h-px w-8 bg-forest-600" /> Three pillars
            </p>
            <h2 className="headline-lg text-forest-800">Impact that compounds across sectors.</h2>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-forest-800/15 md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-0">
              {PILLARS.map((p, i) => {
                const accent = ACCENT_MAP[p.accent as keyof typeof ACCENT_MAP];
                const Icon = p.icon;
                const isEven = i % 2 === 0;

                return (
                  <Reveal key={p.title} delay={i * 100}>
                    <div className="relative md:grid md:grid-cols-2 md:gap-16 md:py-12">
                      {/* Timeline node */}
                      <div className="absolute left-6 top-8 z-10 -translate-x-1/2 md:left-1/2 md:top-12">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-linen bg-ivory ring-4 ${accent.ring}`}
                        >
                          <Icon size={20} className={accent.iconText} strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Content card */}
                      <div
                        className={`${
                          isEven ? 'md:col-start-1 md:pr-8' : 'md:col-start-2 md:pl-8'
                        } ml-16 md:ml-0`}
                      >
                        <div className="group relative overflow-hidden rounded-sm bg-ivory p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg md:p-10">
                          {/* Corner accent */}
                          <div className={`absolute right-0 top-0 h-1 w-16 ${accent.bar}`} />
                          <span className="font-mono text-xs text-charcoal/30">{p.index}</span>

                          <h3 className="mt-3 font-display text-2xl font-medium text-forest-800 md:text-3xl">
                            {p.title}
                          </h3>
                          <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75 md:text-base">
                            {p.body}
                          </p>

                          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-forest-800/10 pt-6">
                            {p.stats.map((s) => (
                              <div key={s.label}>
                                <span className={`font-heading text-2xl font-bold ${accent.iconText}`}>
                                  <CountUp value={s.value} suffix={s.suffix} />
                                </span>
                                <p className="mt-1 font-body text-[10px] uppercase tracking-wider text-charcoal/50">
                                  {s.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── HOW WE MEASURE ──────────────── */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        {/* Decorative background word */}
        <span className="pointer-events-none absolute -left-6 bottom-0 select-none font-display text-[14rem] leading-none text-forest-800/[0.03] md:text-[20rem]">
          Proof
        </span>

        <div className="shell relative">
          <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-start">
            {/* Left: heading + intro */}
            <div className="md:sticky md:top-28">
              <p className="label-caps mb-4 flex items-center gap-3 text-forest-600">
                <span className="h-px w-8 bg-forest-600" /> Methodology
              </p>
              <h2 className="headline-lg text-forest-800">
                How we measure, so numbers mean something.
              </h2>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-charcoal/70">
                Every figure on this page follows the same four-step discipline. No metric ships
                without a named baseline, a reporting window, and a verifier. This is what lets a
                client, an auditor, or a community trust the same number.
              </p>

              <Reveal delay={200}>
                <Link
                  to="/methodology"
                  className="group mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest-800"
                >
                  Read the full methodology
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            </div>

            {/* Right: numbered steps */}
            <div className="space-y-px">
              {METHOD_STEPS.map((item, i) => (
                <Reveal key={item.step} delay={i * 90}>
                  <div className="group relative flex gap-6 border-t border-forest-800/10 py-8 transition-colors hover:border-forest-800/30">
                    <span className="font-mono text-xs text-charcoal/30 transition-colors group-hover:text-sage-600">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-charcoal/60">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── IMPACT IN THE FIELD ──────────────── */}
      <section className="relative overflow-hidden bg-forest-900 py-24 text-ivory md:py-36">
        <SceneCanvas variant="agri" className="opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-900/95 to-forest-900" />

        <div className="shell relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-caps mb-4 flex items-center gap-3 text-sage-400">
                <span className="h-px w-8 bg-sage-400" /> Case studies
              </p>
              <MaskedLines lines={['Impact in the field']} className="headline-lg text-ivory" />
            </div>
            <Reveal>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-sm border border-ivory/20 px-6 py-3 font-heading text-sm font-medium text-ivory transition-colors hover:border-sage-400 hover:text-sage-400"
              >
                All case studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => {
              // Prefer project-specific image, then fall back to curated defaults.
              const imageUrl =
                getProjectImage(p) ?? FIELD_FALLBACK_IMAGES[i % FIELD_FALLBACK_IMAGES.length];

              return (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link to={`/projects/${p.slug}`} className="group block">
                    {/* Image container */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-forest-800">
                      {/* Fallback canvas underneath — visible if image fails */}
                      <div className="absolute inset-0">
                        <SceneCanvas variant={p.sector === 'Agriculture' ? 'agri' : 'energy'} />
                      </div>

                      {/* Image */}
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={p.title}
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                          className="relative h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                        />
                      )}

                      {/* Base gradient for legibility */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/20 to-forest-900/30" />

                      {/* Hover tint */}
                      <div className="pointer-events-none absolute inset-0 bg-sage-500/0 transition-colors duration-500 group-hover:bg-sage-500/10" />

                      {/* Index badge */}
                      <span className="absolute left-4 top-4 rounded-sm bg-ivory/10 px-2 py-1 font-mono text-[10px] text-ivory/90 backdrop-blur-sm">
                        0{i + 1}
                      </span>

                      {/* Sector tag */}
                      <span className="absolute right-4 top-4 rounded-sm bg-forest-900/60 px-2 py-1 font-body text-[10px] uppercase tracking-wider text-sage-400 backdrop-blur-sm">
                        {p.sector}
                      </span>

                      {/* Title inside image */}
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className="font-display text-2xl font-medium leading-tight text-ivory transition-colors group-hover:text-sage-300">
                          {p.title}
                        </h3>
                        <div className="mt-3 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-ivory/70 transition-colors group-hover:text-sage-400">
                          <span>Read story</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── VOICES FROM THE FIELD ──────────────── */}
      <section className="relative overflow-hidden bg-linen py-24 md:py-32">
        <div className="shell">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-caps mb-4 flex items-center gap-3 text-forest-600">
                <span className="h-px w-8 bg-forest-600" /> Voices from the field
              </p>
              <h2 className="headline-lg max-w-2xl text-forest-800">
                The people behind the numbers.
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal/60">
              Impact isn't only a figure on a dashboard — it's a shift in how a plant runs, a farm
              yields, or a community earns.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FIELD_VOICES.map((v, i) => (
              <Reveal key={v.name} delay={i * 100}>
                <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-forest-800/10 bg-ivory p-8 transition-all duration-500 hover:border-forest-800/25 hover:shadow-lg">
                  {/* Corner accent */}
                  <span className="absolute right-0 top-0 h-1 w-16 bg-sage-500 transition-all duration-500 group-hover:w-24" />

                  {/* Tag */}
                  <span className="font-body text-[10px] uppercase tracking-widest text-sage-600">
                    {v.tag}
                  </span>

                  {/* Quote */}
                  <blockquote className="mt-6 flex-1">
                    <p className="font-display text-lg font-medium leading-snug text-forest-800 md:text-xl">
                      &ldquo;{v.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Attribution */}
                  <figcaption className="mt-8 border-t border-forest-800/10 pt-6">
                    <p className="font-heading text-sm font-semibold text-charcoal">{v.name}</p>
                    <p className="mt-1 font-body text-xs text-charcoal/50">{v.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── TRUST STRIP ──────────────── */}
      <section className="bg-ivory py-16">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-8 border-y border-forest-800/10 py-8">
            {[
              { icon: Shield, label: 'Third-party verified' },
              { icon: TrendingUp, label: 'Baseline-tracked' },
              { icon: Users, label: 'Community-audited' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-charcoal/60">
                <Icon size={18} className="text-forest-600" strokeWidth={1.75} />
                <span className="font-heading text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Ready to create', 'measurable impact?']} cta="Talk to Terra" />
    </main>
  );
}

export default ImpactPage;