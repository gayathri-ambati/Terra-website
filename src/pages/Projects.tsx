import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Factory,
  Leaf,
  MapPin,
  Search,
  Sun,
} from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';
import solarTeamworkVideo from '@/assets/solarteamworkvideo.mp4';
import solarVideo from '@/assets/solarvideo.mp4';

const SECTORS = ['All', 'Energy & Engineering', 'Agriculture', 'Industry'] as const;
type Sector = (typeof SECTORS)[number];

const SECTOR_IMAGES: Record<string, string> = {
  'Energy & Engineering':
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85',
  Agriculture:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
  Industry:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85',
};

const OUTCOMES = [
  {
    value: '23%',
    label: 'less energy used',
    detail: 'Textile mill retrofit',
    image: SECTOR_IMAGES['Energy & Engineering'],
    alt: 'Solar panels in a renewable energy installation',
  },
  {
    value: '7,500+',
    label: 'farmers supported',
    detail: 'TRANSFORM FPO programme',
    image: SECTOR_IMAGES.Agriculture,
    alt: 'Agricultural fields under a broad open sky',
  },
  {
    value: '2.1×',
    label: 'line throughput',
    detail: 'Auto component automation',
    image: SECTOR_IMAGES.Industry,
    alt: 'Industrial engineering equipment on a factory floor',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Understand the real challenge',
    body: 'We listen first, then map the technical, operational and human realities on the ground.',
    image: SECTOR_IMAGES.Industry,
    alt: 'Engineer working with industrial equipment',
  },
  {
    step: '02',
    title: 'Design for your context',
    body: 'A practical, multidisciplinary plan shaped around your goals, budget and day-to-day operations.',
    image: SECTOR_IMAGES['Energy & Engineering'],
    alt: 'Solar panels designed for a working energy site',
  },
  {
    step: '03',
    title: 'Deliver with your team',
    body: 'Clear milestones and close collaboration keep implementation grounded in the way you work.',
    image: SECTOR_IMAGES.Agriculture,
    alt: 'Cultivated land and farming landscape',
  },
  {
    step: '04',
    title: 'Measure what changes',
    body: 'We track outcomes after handover so the benefits last beyond the initial project.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Renewable energy infrastructure at dusk',
  },
];

const SECTOR_DETAILS = [
  {
    name: 'Energy & Engineering',
    descriptor: 'Practical energy systems, engineered to perform.',
    image: SECTOR_IMAGES['Energy & Engineering'],
    icon: Sun,
    count: '01',
  },
  {
    name: 'Agriculture',
    descriptor: 'Resilient infrastructure for stronger rural economies.',
    image: SECTOR_IMAGES.Agriculture,
    icon: Leaf,
    count: '02',
  },
  {
    name: 'Industry',
    descriptor: 'Smarter operations built around people and production.',
    image: SECTOR_IMAGES.Industry,
    icon: Factory,
    count: '03',
  },
];

export function ProjectsPage() {
  const [sector, setSector] = useState<Sector>('All');
  const [query, setQuery] = useState('');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    setReduceMotion(preference.matches);
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesSector = sector === 'All' || project.sector === sector;
      const haystack = [
        project.title,
        project.client,
        project.industry,
        project.solutions.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return matchesSector && (q === '' || haystack.includes(q));
    });
  }, [sector, query]);

  return (
    <main>
      <section className="grain relative flex min-h-[68svh] items-end overflow-hidden bg-forest-900 text-ivory md:min-h-[74svh]">
        <video
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={SECTOR_IMAGES['Energy & Engineering']}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={solarTeamworkVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/65 to-forest-900/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-900/80 to-transparent" />

        <div className="shell relative z-10 grid w-full gap-12 pb-14 pt-36 md:grid-cols-[1fr_auto] md:items-end md:pb-20">
          <div className="max-w-4xl">
            <p className="label-caps mb-6 flex items-center gap-3 text-sage-300">
              <span className="h-px w-10 bg-sage-300" />
              Projects &amp; case studies
            </p>
            <MaskedLines
              lines={['Real work.', 'Lasting change.']}
              className="headline-xl"
              startDelay={150}
            />
            <Reveal delay={260}>
              <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-ivory/75 md:text-lg">
                Every engagement starts with your goals. Explore how we turn complex challenges
                into measurable progress across energy, agriculture and industry.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-sage-300 px-6 py-3.5 font-heading text-sm font-semibold text-forest-900 transition-all hover:bg-ivory"
                >
                  Explore our work
                  <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/45 px-6 py-3.5 font-heading text-sm font-semibold text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
                >
                  Start a conversation <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500} className="hidden md:block">
            <p className="max-w-[150px] border-l border-sage-300/70 pl-4 font-body text-xs leading-relaxed text-ivory/60">
              From first conversation to outcomes you can measure.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-7 right-8 hidden items-center gap-3 font-heading text-[10px] uppercase tracking-[0.2em] text-ivory/55 lg:flex">
          <span className="h-px w-8 bg-ivory/40" />
          Terra in the field
        </div>
      </section>

      <section id="projects" className="bg-[#f4f3ec] py-20 md:py-32">
        <div className="shell">
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="label-caps mb-4 flex items-center gap-3 text-forest-700">
                  <span className="h-px w-10 bg-forest-700" />
                  A closer look at our work
                </p>
                <h2 className="max-w-3xl font-display text-4xl font-medium leading-[0.98] tracking-tight text-forest-900 md:text-6xl">
                  Designed for change.
                  <span className="mt-1 block italic text-forest-700">Proven in the real world.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <p className="max-w-sm border-l border-forest-800/20 pl-5 font-body text-sm leading-relaxed text-charcoal/65 md:mb-1">
                Every project is shaped around a real challenge—and the people who need the
                solution to work.
              </p>
            </Reveal>
          </div>

          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-forest-900/10 bg-white/75 p-4 shadow-[0_8px_30px_rgba(27,42,32,0.04)] md:flex-row md:items-center md:justify-between md:p-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
              {SECTORS.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={sector === item}
                  onClick={() => setSector(item)}
                  className={`rounded-full px-4 py-2.5 font-heading text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                    sector === item
                      ? 'bg-forest-900 text-ivory'
                      : 'border border-forest-900/15 text-forest-900 hover:border-forest-900/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="relative flex items-center md:w-72">
              <Search size={16} className="absolute left-4 text-charcoal/45" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-forest-900/15 bg-transparent py-2.5 pl-11 pr-4 font-body text-sm text-charcoal placeholder:text-charcoal/45 focus:border-forest-800 focus:outline-none focus:ring-2 focus:ring-forest-800/10"
                aria-label="Search projects"
              />
            </label>
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-forest-900/20 bg-white/50 px-6 py-16 text-center">
              <p className="font-display text-2xl text-forest-900">No matching projects.</p>
              <p className="mt-2 font-body text-sm text-charcoal/60">
                Try another keyword or choose a different sector.
              </p>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project, index) => {
              const result = project.results[0];
              const image = SECTOR_IMAGES[project.sector];
              const featured = index === 0 && filtered.length > 1;

              return (
                <Reveal
                  key={project.slug}
                  delay={(index % 2) * 100}
                  variant={featured ? 'scale' : 'fade'}
                  className={featured ? 'md:col-span-2' : ''}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] shadow-[0_12px_40px_rgba(27,42,32,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(27,42,32,0.14)] ${
                      featured
                        ? 'bg-forest-900 text-ivory md:grid md:grid-cols-[1.08fr_0.92fr]'
                        : 'bg-white text-forest-900'
                    }`}
                  >
                    <div
                      className={`group/image relative overflow-hidden ${
                        featured ? 'min-h-[300px] md:min-h-[440px]' : 'min-h-[230px]'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.sector} project in ${project.location}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 ${
                          featured
                            ? 'bg-gradient-to-t from-forest-900/70 via-forest-900/10 to-forest-900/10 md:bg-gradient-to-r md:from-transparent md:to-forest-900/10'
                            : 'bg-gradient-to-t from-forest-900/55 via-transparent to-forest-900/10'
                        }`}
                      />
                      {featured && (
                        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-forest-900/35 px-3.5 py-2 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-sage-300" />
                          Featured project
                        </span>
                      )}
                      <span className="absolute right-5 top-5 rounded-full border border-white/35 bg-forest-900/25 px-3.5 py-2 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        {project.sector}
                      </span>
                      <span className="absolute bottom-5 left-5 flex items-center gap-2 font-body text-xs text-white/90">
                        <MapPin size={14} className="text-sage-300" />
                        {project.location}
                      </span>
                    </div>

                    <div
                      className={`flex flex-1 flex-col justify-between p-6 sm:p-8 ${
                        featured ? 'md:p-10' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <span
                            className={`label-caps ${
                              featured ? 'text-sage-300' : 'text-forest-700'
                            }`}
                          >
                            {project.industry}
                          </span>
                          <span
                            className={`font-display text-3xl ${
                              featured ? 'text-ivory/20' : 'text-forest-900/15'
                            }`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3
                          className={`mt-4 font-display font-medium leading-tight transition-colors ${
                            featured
                              ? 'text-3xl text-ivory group-hover:text-sage-300 sm:text-4xl'
                              : 'text-2xl text-forest-900 group-hover:text-forest-700 sm:text-3xl'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`mt-4 line-clamp-3 font-body text-sm leading-relaxed ${
                            featured ? 'text-ivory/70' : 'text-charcoal/65'
                          }`}
                        >
                          {project.overview}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.solutions.slice(0, 2).map((solution) => (
                            <span
                              key={solution}
                              className={`rounded-full border px-3 py-1.5 font-heading text-[10px] font-medium ${
                                featured
                                  ? 'border-ivory/15 text-ivory/70'
                                  : 'border-forest-900/10 text-forest-800/75'
                              }`}
                            >
                              {solution}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`mt-7 border-t pt-5 ${
                          featured ? 'border-ivory/15' : 'border-forest-900/10'
                        }`}
                      >
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p
                              className={`font-display text-3xl font-medium ${
                                featured ? 'text-sage-300' : 'text-forest-800'
                              }`}
                            >
                              <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-current/60">
                                Result
                              </span>
                              {result.value}
                            </p>
                            <p
                              className={`mt-1 max-w-[260px] font-body text-xs leading-relaxed ${
                                featured ? 'text-ivory/55' : 'text-charcoal/55'
                              }`}
                            >
                              {result.label}
                            </p>
                          </div>
                          <span
                            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                              featured
                                ? 'border border-ivory/25 text-ivory group-hover:border-sage-300 group-hover:bg-sage-300 group-hover:text-forest-900'
                                : 'border border-forest-900/15 text-forest-900 group-hover:border-forest-900 group-hover:bg-forest-900 group-hover:text-white'
                            }`}
                          >
                            <ArrowUpRight size={18} />
                          </span>
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

      <section className="relative overflow-hidden bg-forest-900 py-20 text-ivory md:py-28">
        <div className="absolute inset-0 opacity-15">
          <img
            src={SECTOR_IMAGES['Energy & Engineering']}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/95 to-forest-900/75" />
        <div className="shell relative z-10">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <p className="label-caps mb-4 flex items-center gap-3 text-sage-300">
                <span className="h-px w-10 bg-sage-300" />
                The work, in numbers
              </p>
              <h2 className="font-display text-4xl font-medium md:text-5xl">
                Progress you can <span className="italic text-sage-300">measure.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xs font-body text-sm leading-relaxed text-ivory/60">
                Outcomes from the case studies featured above—not promises, but results delivered.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {OUTCOMES.map((outcome, index) => (
              <Reveal key={outcome.value} delay={index * 100} variant="scale">
                <article className="group relative min-h-[270px] overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={outcome.image}
                    alt={outcome.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <p className="font-display text-5xl font-medium text-sage-300 sm:text-6xl">
                      {outcome.value}
                    </p>
                    <p className="mt-2 font-heading text-sm font-semibold text-ivory">
                      {outcome.label}
                    </p>
                    <p className="mt-1 font-body text-xs text-ivory/55">{outcome.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ede4] py-20 md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal variant="left">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-forest-900 shadow-[0_24px_70px_rgba(16,37,29,0.18)] sm:min-h-[500px]">
              <video
                autoPlay={!reduceMotion}
                muted
                loop
                playsInline
                preload="metadata"
                poster={SECTOR_IMAGES['Energy & Engineering']}
                aria-label="Terra team working on renewable energy"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={solarVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-transparent to-forest-900/10" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="label-caps text-sage-300">Energy in action</p>
                  <p className="mt-2 max-w-sm font-display text-2xl text-white sm:text-3xl">
                    Better systems. A lighter footprint.
                  </p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-white/50 text-white sm:grid">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </div>
          </Reveal>

          <div className="py-2">
            <Reveal delay={100}>
              <p className="label-caps mb-5 flex items-center gap-3 text-forest-700">
                <span className="h-px w-10 bg-forest-700" />
                Engineering with purpose
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight text-forest-900 md:text-5xl">
                Good work is felt <span className="italic text-forest-700">on the ground.</span>
              </h2>
              <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-charcoal/70">
                The best solutions fit the people, places and operations they serve. We work
                alongside clients to make change practical—from cleaner energy to more resilient
                farms and better-performing facilities.
              </p>
            </Reveal>
            <div className="mt-9 space-y-4">
              {[
                'Designed around each client’s priorities',
                'Delivered with clarity and close collaboration',
                'Measured beyond the day of handover',
              ].map((item, index) => (
                <Reveal key={item} delay={160 + index * 80}>
                  <div className="flex items-center gap-4 border-b border-forest-900/10 pb-4">
                    <span className="font-display text-sm text-forest-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="font-body text-sm text-charcoal/75">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={420}>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest-800 transition-colors hover:text-forest-600"
              >
                Talk with our team <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3ec] py-20 md:py-28">
        <div className="shell">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <p className="label-caps mb-4 flex items-center gap-3 text-forest-700">
                <span className="h-px w-10 bg-forest-700" />
                How we work
              </p>
              <h2 className="max-w-2xl font-display text-4xl font-medium text-forest-900 md:text-5xl">
                A thoughtful process. <span className="italic text-forest-700">Real momentum.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xs font-body text-sm leading-relaxed text-charcoal/65">
                A clear path from understanding the need to making the result last.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, index) => (
              <Reveal key={item.step} delay={index * 80} variant="fade">
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(27,42,32,0.06)]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 to-transparent" />
                    <span className="absolute bottom-4 left-5 font-display text-4xl text-white/80">
                      {item.step}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-medium leading-snug text-forest-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/65">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ede4] py-20 md:py-28">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="label-caps mb-4 flex items-center gap-3 text-forest-700">
                <span className="h-px w-10 bg-forest-700" />
                Where we work
              </p>
              <h2 className="font-display text-4xl font-medium text-forest-900 md:text-5xl">
                Three sectors. <span className="italic text-forest-700">One shared future.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal/65">
                Explore the work that connects resilient communities, capable industry and a
                cleaner energy future.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SECTOR_DETAILS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.name} delay={index * 100} variant="scale">
                  <button
                    type="button"
                    onClick={() => {
                      setSector(item.name as Sector);
                      document
                        .getElementById('projects')
                        ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
                    }}
                    className="group relative flex min-h-[390px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-forest-900 p-6 text-left sm:min-h-[440px] sm:p-8"
                  >
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/35 to-forest-900/10" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white">
                        <Icon size={19} />
                      </span>
                      <span className="font-display text-4xl text-white/55">{item.count}</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-display text-3xl font-medium text-white">{item.name}</h3>
                      <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-white/70">
                        {item.descriptor}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-sage-300">
                        View projects
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ClosingCta
        title={['Your next challenge', 'starts a conversation.']}
        cta="Discuss a project"
        description="Tell us what you want to change. We’ll work with you to find a practical way forward."
      />
    </main>
  );
}
