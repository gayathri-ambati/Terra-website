// components/SolutionsCompo/SolutionsHero.tsx
import { MaskedLines } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function SolutionsHero() {
  return (
    <section className="grain relative flex min-h-[70vh] items-end overflow-hidden bg-forest-900 text-ivory">
      <SceneCanvas variant="energy" className="animate-drift" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
      <div className="shell relative z-10 pb-20 pt-40">
        <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
          <span className="h-px w-10 bg-sage-400" /> Solutions
        </p>
        <MaskedLines
          lines={['Eight disciplines.', 'One accountable partner.']}
          className="headline-xl max-w-5xl"
          startDelay={150}
        />
      </div>
    </section>
  );
}