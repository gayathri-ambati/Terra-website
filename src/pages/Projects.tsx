// import { useMemo, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Search } from 'lucide-react';
// import { projects } from '@/lib/content';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';
// import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

// const SECTORS = ['All', 'Energy & Engineering', 'Agriculture', 'Industry'] as const;

// export function ProjectsPage() {
//   const [sector, setSector] = useState<(typeof SECTORS)[number]>('All');
//   const [query, setQuery] = useState('');

//   const filtered = useMemo(
//     () =>
//       projects.filter(
//         (p) =>
//           (sector === 'All' || p.sector === sector) &&
//           (query.trim() === '' ||
//             (p.title + p.client + p.industry + p.solutions.join(' ')).toLowerCase().includes(query.toLowerCase()))
//       ),
//     [sector, query]
//   );

//   return (
//     <main>
//       <section className="grain relative flex min-h-[60vh] items-end overflow-hidden bg-forest-900 text-ivory">
//         <SceneCanvas variant="energy" />
//         <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
//         <div className="shell relative z-10 pb-20 pt-40">
//           <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
//             <span className="h-px w-10 bg-sage-400" /> Projects & Case Studies
//           </p>
//           <MaskedLines lines={['Proof, not promises.']} className="headline-xl" startDelay={150} />
//         </div>
//       </section>

//       <section className="bg-ivory py-16 md:py-24">
//         <div className="shell">
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
//             <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by sector">
//               {SECTORS.map((s) => (
//                 <button
//                   key={s}
//                   role="tab"
//                   aria-selected={sector === s}
//                   onClick={() => setSector(s)}
//                   className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
//                     sector === s ? 'bg-forest-800 text-ivory' : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
//                   }`}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//             <label className="relative flex items-center md:w-72">
//               <Search size={16} className="absolute left-4 text-charcoal/40" />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search projects…"
//                 className="w-full rounded-full border border-forest-800/20 bg-transparent py-2.5 pl-11 pr-4 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest-800 focus:outline-none"
//                 aria-label="Search projects"
//               />
//             </label>
//           </div>

//           {filtered.length === 0 && (
//             <p className="mt-16 font-body text-base text-charcoal/60">No projects match that search yet.</p>
//           )}

//           <div className="mt-12 grid gap-10 md:grid-cols-2">
//             {filtered.map((p, i) => (
//               <Reveal key={p.slug} delay={(i % 2) * 100} className={i === 0 ? 'md:col-span-2' : ''}>
//                 <Link to={`/projects/${p.slug}`} className="group block">
//                   <ClipReveal className={`relative overflow-hidden rounded-sm ${i === 0 ? 'min-h-[380px]' : 'min-h-[300px]'}`}>
//                     <SceneCanvas variant={p.sector === 'Agriculture' ? 'agri' : p.sector === 'Industry' ? 'industry' : 'energy'} />
//                     <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-900/90 to-transparent p-8">
//                       <div className="flex flex-wrap gap-2">
//                         <span className="rounded-full bg-sage-400/90 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-forest-900">
//                           {p.industry}
//                         </span>
//                         <span className="rounded-full border border-ivory/40 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-ivory">
//                           {p.sector}
//                         </span>
//                       </div>
//                       <h2 className={`mt-3 font-display font-medium text-ivory ${i === 0 ? 'text-4xl' : 'text-3xl'}`}>{p.title}</h2>
//                       <p className="mt-1 font-body text-sm text-ivory/70">{p.location}</p>
//                     </div>
//                   </ClipReveal>
//                   <div className="mt-4 flex items-center justify-between">
//                     <span className="font-body text-sm text-charcoal/70">
//                       {p.results[0].value} · {p.results[0].label}
//                     </span>
//                     <span className="flex items-center gap-2 font-heading text-sm font-semibold text-forest-800">
//                       Case study
//                       <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                     </span>
//                   </div>
//                 </Link>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ClosingCta title={['Your project', 'could be next.']} cta="Discuss a project" />
//     </main>
//   );
// }




import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ArrowUpRight, TrendingUp, MapPin } from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const SECTORS = ['All', 'Energy & Engineering', 'Agriculture', 'Industry'] as const;

/* ── Hardcoded sector images ─────────────────────────────── */
const SECTOR_IMAGES: Record<string, string> = {
  'Energy & Engineering':
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  Agriculture:
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
  Industry:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  default:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
};

const STATS = [
  { value: '120+', label: 'Projects delivered', sub: 'across 3 continents' },
  { value: '18', label: 'Sectors served', sub: 'from agri to heavy industry' },
  { value: '94%', label: 'Client retention', sub: 'multi-phase engagements' },
  { value: '$2.4B', label: 'Assets engineered', sub: 'in lifetime value' },
];

const PROCESS = [
  {
    step: '01',
    title: 'Diagnose',
    body: 'We map the terrain — technical, regulatory, and human — before proposing a single solution.',
  },
  {
    step: '02',
    title: 'Engineer',
    body: 'Multidisciplinary teams design for constructability, then stress-test against reality.',
  },
  {
    step: '03',
    title: 'Deliver',
    body: 'On-site execution with transparent milestones, from first survey to final handover.',
  },
  {
    step: '04',
    title: 'Sustain',
    body: 'Long-term monitoring and optimization keep assets performing decades in.',
  },
];

function sceneVariant(sector: string): 'agri' | 'industry' | 'energy' {
  if (sector === 'Agriculture') return 'agri';
  if (sector === 'Industry') return 'industry';
  return 'energy';
}

export function ProjectsPage() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesSector = sector === 'All' || p.sector === sector;
      const haystack = [p.title, p.client, p.industry, p.solutions.join(' ')]
        .join(' ')
        .toLowerCase();
      return matchesSector && (q === '' || haystack.includes(q));
    });
  }, [sector, query]);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="grain relative flex min-h-[60vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant="energy" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
        <div className="pointer-events-none absolute right-8 top-32 hidden h-40 w-px bg-gradient-to-b from-transparent via-sage-400/50 to-transparent md:block" />
        <div className="shell relative z-10 pb-20 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> Projects &amp; Case Studies
          </p>
          <MaskedLines lines={['Proof, not promises.']} className="headline-xl" startDelay={150} />
          <p className="mt-6 max-w-xl font-body text-base text-ivory/70">
            Every project below began as a hard problem. Here's how we solved it — and what it
            changed on the ground.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────── */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="shell">
          {/* Filter bar */}
          <div className="flex flex-col justify-between gap-6 rounded-sm border border-forest-800/10 bg-white/40 p-4 backdrop-blur md:flex-row md:items-center md:p-5">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by sector">
              {SECTORS.map((s) => (
                <button
                  key={s}
                  role="tab"
                  aria-selected={sector === s}
                  onClick={() => setSector(s)}
                  className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
                    sector === s
                      ? 'bg-forest-800 text-ivory shadow-sm'
                      : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <label className="relative flex items-center md:w-72">
              <Search size={16} className="absolute left-4 text-charcoal/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-forest-800/20 bg-transparent py-2.5 pl-11 pr-4 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest-800 focus:outline-none"
                aria-label="Search projects"
              />
            </label>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-16 rounded-sm border border-dashed border-forest-800/20 p-12 text-center">
              <p className="font-display text-2xl text-forest-800">Nothing here — yet.</p>
              <p className="mt-2 font-body text-sm text-charcoal/60">
                No projects match that search. Try a different sector or keyword.
              </p>
            </div>
          )}

          {/* Project cards */}
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {filtered.map((p, i) => {
              const result = p.results?.[0];
              const imageSrc = SECTOR_IMAGES[p.sector] ?? SECTOR_IMAGES.default;
              return (
                <Reveal
                  key={p.slug}
                  delay={(i % 2) * 100}
                  className={i === 0 ? 'md:col-span-2' : ''}
                >
                  <Link to={`/projects/${p.slug}`} className="group block">
                    {/* Fixed height so the card can never collapse to 0 */}
                    <div
                      className={`relative overflow-hidden rounded-sm bg-forest-900 ${
                        i === 0 ? 'h-[380px]' : 'h-[300px]'
                      }`}
                    >
                      {/* Fallback animated scene (sits behind the photo) */}
                      <div className="absolute inset-0">
                        <SceneCanvas variant={sceneVariant(p.sector)} />
                      </div>

                      {/* Real project photo — hardcoded per sector */}
                      <img
                        src={imageSrc}
                        alt={p.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Hover ring */}
                      <div className="pointer-events-none absolute inset-0 z-10 ring-0 ring-sage-400/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-sage-400/60" />

                      {/* Text overlay */}
                      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-forest-900/90 via-forest-900/50 to-transparent p-8">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-sage-400/90 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-forest-900">
                            {p.industry}
                          </span>
                          <span className="rounded-full border border-ivory/40 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-ivory">
                            {p.sector}
                          </span>
                        </div>
                        <h2
                          className={`mt-3 font-display font-medium text-ivory ${
                            i === 0 ? 'text-4xl' : 'text-3xl'
                          }`}
                        >
                          {p.title}
                        </h2>
                        <p className="mt-1 flex items-center gap-1.5 font-body text-sm text-ivory/70">
                          <MapPin size={13} className="text-sage-400" />
                          {p.location}
                        </p>
                      </div>

                      {/* Index number */}
                      <span className="absolute right-6 top-6 z-20 font-display text-6xl font-medium leading-none text-ivory/30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Result + CTA row */}
                    <div className="mt-4 flex items-center justify-between border-t border-forest-800/10 pt-3">
                      <span className="flex items-center gap-2 font-body text-sm text-charcoal/70">
                        <TrendingUp size={15} className="text-forest-800" />
                        {result ? `${result.value} · ${result.label}` : p.client}
                      </span>
                      <span className="flex items-center gap-1 font-heading text-sm font-semibold text-forest-800">
                        Case study
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-800 py-20 text-ivory md:py-28">
        <span className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[22rem] font-medium leading-none text-ivory/[0.04]">
          N°
        </span>
        <div className="shell relative z-10">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-caps mb-4 flex items-center gap-3 text-sage-400">
                <span className="h-px w-10 bg-sage-400" /> By the numbers
              </p>
              <h2 className="font-display text-4xl font-medium md:text-5xl">
                Impact measured in <span className="italic text-sage-400">outcomes.</span>
              </h2>
            </div>
            <p className="max-w-xs font-body text-sm text-ivory/60">
              Not slide-deck promises. Figures drawn from delivered, operating assets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-ivory/10 md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-forest-800 p-6 transition-colors duration-300 hover:bg-forest-700 md:p-8"
              >
                <p className="font-display text-4xl font-medium text-sage-400 md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-wide text-ivory">
                  {s.label}
                </p>
                <p className="mt-1 font-body text-xs text-ivory/50">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-sage-50 py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="label-caps mb-4 flex items-center gap-3 text-forest-800">
                <span className="h-px w-10 bg-forest-800" /> How we deliver
              </p>
              <h2 className="font-display text-4xl font-medium text-forest-900 md:text-5xl">
                From first <span className="italic text-forest-700">survey</span> to final
                handover.
              </h2>
              <p className="mt-5 max-w-sm font-body text-base text-charcoal/70">
                Every engagement follows the same disciplined arc — whether it's a solar farm or a
                processing plant.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 font-heading text-sm font-semibold text-ivory transition-colors hover:bg-forest-700"
              >
                Start a project
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <ol className="relative border-l border-forest-800/15 pl-8 md:pl-12">
              {PROCESS.map((p) => (
                <li key={p.step} className="group relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-forest-800/30 bg-sage-50 transition-colors group-hover:border-forest-800 md:-left-[57px]">
                    <span className="h-2 w-2 rounded-full bg-forest-800" />
                  </span>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm font-semibold text-sage-400">
                      {p.step}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-forest-900">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-md font-body text-base text-charcoal/70">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Featured Case Study (spotlight) ───────────────────── */}
<section className="bg-forest-900 py-20 text-ivory md:py-28">
  <div className="shell">
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      {/* Image collage */}
      <Reveal className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
            alt="Featured solar and storage project"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
          <span className="absolute left-6 top-6 rounded-full bg-sage-400 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-forest-900">
            Featured
          </span>
        </div>

        {/* Floating metric card */}
        <div className="absolute -bottom-6 -right-4 w-44 rounded-sm border border-ivory/15 bg-forest-800/95 p-5 backdrop-blur md:-right-8">
          <p className="font-display text-4xl font-medium text-sage-400">-42%</p>
          <p className="mt-1 font-body text-xs leading-relaxed text-ivory/60">
            grid energy cost after commissioning
          </p>
        </div>
      </Reveal>

      {/* Copy */}
      <div>
        <p className="label-caps mb-4 flex items-center gap-3 text-sage-400">
          <span className="h-px w-10 bg-sage-400" /> Case study spotlight
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
          Powering a region with{' '}
          <span className="italic text-sage-400">renewable energy.</span>
        </h2>
        <p className="mt-5 max-w-lg font-body text-base text-ivory/70">
          A 120 MW hybrid solar-and-storage facility delivered on a compressed timeline, now
          supplying clean power to over 80,000 homes — and cutting the operator's energy costs by
          nearly half.
        </p>

        {/* Metric row */}
        <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-sm bg-ivory/10">
          {[
            { value: '120 MW', label: 'Capacity' },
            { value: '80k+', label: 'Homes powered' },
            { value: '18 mo', label: 'Build time' },
          ].map((m) => (
            <div key={m.label} className="bg-forest-900 p-4 md:p-5">
              <p className="font-display text-2xl font-medium text-ivory">{m.value}</p>
              <p className="mt-1 font-body text-xs text-ivory/50">{m.label}</p>
            </div>
          ))}
        </div>

        <Link
          to="/projects"
          className="mt-10 inline-flex items-center gap-2 font-heading text-sm font-semibold text-sage-400 transition-colors hover:text-ivory"
        >
          Read the full case study
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  </div>
</section>

{/* ── Sectors We Serve ───────────────────────────────────── */}
<section className="bg-ivory py-20 md:py-28">
  <div className="shell">
    <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="label-caps mb-4 flex items-center gap-3 text-forest-800">
          <span className="h-px w-10 bg-forest-800" /> Where we work
        </p>
        <h2 className="font-display text-4xl font-medium text-forest-900 md:text-5xl">
          Sectors we <span className="italic text-forest-700">serve.</span>
        </h2>
      </div>
      <p className="max-w-xs font-body text-sm text-charcoal/60">
        Deep domain expertise across the industries that move economies forward.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          name: 'Energy & Engineering',
          desc: 'Solar, wind, storage, and grid infrastructure built to last decades.',
          img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Agriculture',
          desc: 'Irrigation, processing, and agri-tech systems that scale with the harvest.',
          img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Industry',
          desc: 'Heavy manufacturing, logistics, and plant engineering with zero compromise.',
          img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        },
      ].map((s, i) => (
        <Reveal key={s.name} delay={i * 100}>
          <div className="group relative h-[420px] overflow-hidden rounded-sm bg-forest-900">
            <img
              src={s.img}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className="font-display text-sm font-semibold text-sage-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-ivory">{s.name}</h3>
              <p className="mt-2 max-w-xs font-body text-sm text-ivory/60 transition-all duration-500 group-hover:text-ivory/90">
                {s.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-sage-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Explore <ArrowRight size={15} />
              </span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <ClosingCta title={['Your project', 'could be next.']} cta="Discuss a project" />
    </main>
  );
}