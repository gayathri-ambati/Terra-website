import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { impactStats, projects } from '@/lib/content';
import { CountUp } from '@/lib/reveal';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const PILLARS = [
  {
    title: 'Environmental impact',
    body: 'Energy saved at source and emissions avoided through efficiency, renewables and electrification — measured against baselines, not estimates.',
    stats: [impactStats[1], impactStats[2]],
  },
  {
    title: 'Industrial impact',
    body: 'Operational outcomes our clients run their businesses on: lower specific energy, higher throughput, quality that survives audits.',
    stats: [impactStats[0], impactStats[5]],
  },
  {
    title: 'Agricultural & social impact',
    body: 'Livelihoods strengthened through the TRANSFORM programme — capacity built, infrastructure shared, market access earned.',
    stats: [impactStats[3], impactStats[4]],
  },
];

export function ImpactPage() {
  return (
    <main>
      <section className="grain relative flex min-h-[85vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant="impact" className="animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/50" />
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

      <section className="bg-ivory py-24 md:py-32">
        <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="border-t-2 border-forest-800/15 pt-6">
              <span className="font-heading text-5xl font-bold tracking-tight text-forest-800 md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} duration={1800 + i * 150} />
              </span>
              <p className="mt-3 font-heading text-base font-semibold text-charcoal">{s.label}</p>
              <p className="mt-1 font-body text-sm text-charcoal/60">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-linen py-24 md:py-36">
        <div className="shell space-y-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="grid gap-8 rounded-sm bg-ivory p-10 md:grid-cols-12 md:p-14">
                <div className="md:col-span-7">
                  <h3 className="font-display text-3xl font-medium text-forest-800 md:text-4xl">{p.title}</h3>
                  <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-charcoal/75">{p.body}</p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:col-span-5">
                  {p.stats.map((s) => (
                    <div key={s.label} className="border-l-2 border-sage-500 pl-4">
                      <span className="font-heading text-3xl font-bold text-forest-800">
                        <CountUp value={s.value} suffix={s.suffix} />
                      </span>
                      <p className="mt-1 font-body text-xs uppercase tracking-wide text-charcoal/60">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-36">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <MaskedLines lines={['Impact stories']} className="headline-lg text-forest-800" />
            <Reveal>
              <Link to="/projects" className="btn-ghost-dark">
                All case studies <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <ClipReveal className="relative min-h-[260px] overflow-hidden rounded-sm">
                    <SceneCanvas variant={p.sector === 'Agriculture' ? 'agri' : 'energy'} />
                  </ClipReveal>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="label-caps text-forest-600">{p.sector}</span>
                      <h3 className="mt-2 font-display text-2xl font-medium text-forest-800 transition-colors group-hover:text-forest-600">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowRight size={20} className="shrink-0 text-forest-800 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Ready to create', 'measurable impact?']} cta="Talk to Terra" />
    </main>
  );
}
