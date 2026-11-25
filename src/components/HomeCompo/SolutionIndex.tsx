import { Link } from 'react-router-dom';
import { solutions } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function SolutionIndex() {
  return (
    <section className="grain relative overflow-hidden bg-charcoal py-24 text-ivory md:py-36">
      <SceneCanvas variant="industry" className="opacity-40" />
      <div className="shell relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <MaskedLines lines={['Capabilities']} className="headline-lg" />
          <Reveal>
            <p className="max-w-md font-body text-sm leading-relaxed text-ivory/60">
              Eight disciplines, delivered end-to-end — from the first audit to years of monitored
              performance.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.code} delay={(i % 4) * 80}>
              <Link
                to="/solutions"
                className="group flex h-full flex-col justify-between bg-charcoal/80 p-7 transition-colors duration-300 hover:bg-forest-800"
              >
                <span className="label-caps text-sage-400">{s.code}</span>
                <div className="mt-16">
                  <h3 className="font-heading text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden font-body text-sm leading-relaxed text-ivory/60 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {s.blurb}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}