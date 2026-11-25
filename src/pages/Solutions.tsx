import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { solutions } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const SCENE: Record<string, 'energy' | 'agri' | 'industry' | 'hero'> = {
  'Energy Efficiency & Audit': 'energy',
  'Clean Energy': 'hero',
  IBMS: 'industry',
  'Digital Solutions': 'industry',
  'Industrial Automation': 'industry',
  'Prefabricated Structures': 'energy',
  'Press Components': 'industry',
  'Sustainable Management': 'agri',
};

export function SolutionsPage() {
  return (
    <main>
      <section className="grain relative flex min-h-[70vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant="energy" className="animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
        <div className="shell relative z-10 pb-20 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> Solutions
          </p>
          <MaskedLines lines={['Eight disciplines.', 'One accountable partner.']} className="headline-xl max-w-5xl" startDelay={150} />
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="shell space-y-6">
          {solutions.map((s, i) => (
            <Reveal key={s.code} delay={Math.min(i, 2) * 80}>
              <article className={`group grid items-stretch overflow-hidden rounded-sm md:grid-cols-12 ${i % 2 ? '' : ''}`}>
                <div
                  className={`flex flex-col justify-center p-10 md:col-span-5 md:p-14 ${
                    i % 3 === 0 ? 'bg-forest-800 text-ivory' : i % 3 === 1 ? 'bg-linen text-forest-800' : 'bg-sage-400 text-forest-900'
                  }`}
                >
                  <span className={`label-caps ${i % 3 === 0 ? 'text-sage-400' : 'text-forest-600'}`}>{s.code}</span>
                  <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-md font-body text-sm leading-relaxed opacity-80">{s.blurb}</p>
                </div>
                <ClipReveal className="relative min-h-[240px] md:col-span-7">
                  <SceneCanvas variant={SCENE[s.title] ?? 'energy'} />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-forest-900/80 to-transparent p-8">
                    <p className="max-w-md translate-y-4 font-body text-sm leading-relaxed text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-base">
                      {s.detail}
                    </p>
                    <Link
                      to="/contact"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-400 text-forest-900 transition-transform duration-300 hover:scale-110"
                      aria-label={`Enquire about ${s.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </ClipReveal>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta title={['Not sure where', 'to begin?']} cta="Request an energy audit" />
    </main>
  );
}
