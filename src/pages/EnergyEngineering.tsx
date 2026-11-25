import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Leaf, Wind } from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const CAPABILITIES = [
  { icon: Gauge, title: 'Energy audit & efficiency', body: 'Investment-grade measurement, load profiling and retrofit roadmaps ranked by payback.' },
  { icon: Wind, title: 'IBMS & control', body: 'HVAC, compressed air, lighting and power converged on one observable platform.' },
  { icon: Leaf, title: 'Automation & drives', body: 'PLC, SCADA and VFD engineering that holds line quality and trims kWh together.' },
];

const ENGINEERING_PROJECTS = projects.filter((p) => p.sector !== 'Agriculture');

export function EnergyPage() {
  return (
    <main>
      <section className="grain relative flex min-h-[80vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant="industry" className="animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
        <div className="shell relative z-10 pb-24 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> Energy & Engineering
          </p>
          <MaskedLines
            lines={['Every kilowatt', 'accounted for.']}
            className="headline-xl max-w-5xl"
            startDelay={150}
          />
          <Reveal delay={350}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-ivory/70">
              Industrial energy is an engineering problem with an economic answer. We measure, model, retrofit and monitor —
              and we stay until the savings are real on the bill.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MaskedLines lines={['The problems', 'we are hired for']} className="headline-md text-forest-800" />
          </div>
          <div className="space-y-8 lg:col-span-7">
            {[
              'Rising power costs with no visibility of where units are actually consumed.',
              'Ageing utilities — compressors, humidification, chilling — running on outdated controls.',
              'Quality and throughput plateaus that manual lines cannot break.',
              'Sustainability commitments with no measurement infrastructure behind them.',
            ].map((c, i) => (
              <Reveal key={c} delay={i * 90} className="flex gap-6 border-t border-forest-800/10 pt-6">
                <span className="font-heading text-sm font-bold text-forest-600">0{i + 1}</span>
                <p className="max-w-xl font-body text-base leading-relaxed text-charcoal/80">{c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest-800 py-24 text-ivory md:py-36">
        <SceneCanvas variant="energy" className="opacity-50" />
        <div className="shell relative z-10">
          <MaskedLines lines={['Capabilities']} className="headline-lg" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 110} className="rounded-sm border border-ivory/15 bg-forest-900/40 p-8">
                <c.icon size={28} className="text-sage-400" />
                <h3 className="mt-6 font-display text-2xl font-medium">{c.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ivory/65">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-24 md:py-36">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <MaskedLines lines={['Engineering in the field']} className="headline-lg text-forest-800" />
            <Reveal>
              <Link to="/projects" className="btn-ghost-dark">
                All projects <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {ENGINEERING_PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <ClipReveal className="relative min-h-[300px] overflow-hidden rounded-sm">
                    <SceneCanvas variant="industry" />
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-900/85 to-transparent p-8">
                      <span className="label-caps text-sage-400">{p.industry}</span>
                      <h3 className="mt-2 font-display text-2xl font-medium text-ivory">{p.title}</h3>
                      <p className="mt-2 font-body text-sm text-ivory/70">{p.results[0].value} — {p.results[0].label}</p>
                    </div>
                  </ClipReveal>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Request a', 'consultation.']} cta="Book an audit walkthrough" />
    </main>
  );
}
