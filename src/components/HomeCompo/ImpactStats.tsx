import { impactStats } from '@/lib/content';
import { CountUp } from '@/lib/reveal';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function ImpactStats() {
  return (
    <section className="grain relative overflow-hidden bg-forest-900 py-24 text-ivory md:py-36">
      <SceneCanvas variant="impact" className="opacity-60" />
      <div className="shell relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <MaskedLines lines={['Impact, in numbers']} className="headline-lg" />
          <Reveal>
            <p className="max-w-sm font-body text-sm leading-relaxed text-ivory/60">
              Figures shown are illustrative pending verified client data. Every published metric
              will carry its source, period and unit.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-t border-ivory/15 pt-6">
              <span className="font-heading text-5xl font-bold tracking-tight text-sage-400 md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} duration={1800 + i * 150} />
              </span>
              <p className="mt-3 font-heading text-base font-semibold">{s.label}</p>
              <p className="mt-1 font-body text-sm text-ivory/55">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}