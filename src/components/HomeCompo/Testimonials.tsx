import { testimonials } from '@/lib/content';
import { Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function Testimonials() {
  return (
    <section className="grain relative overflow-hidden bg-forest-900 py-24 text-ivory md:py-36">
      <SceneCanvas variant="impact" className="opacity-40" />
      <div className="shell relative z-10 grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.role}
            delay={i * 120}
            className="flex flex-col justify-between border-t border-ivory/15 pt-8"
          >
            <blockquote className="font-display text-xl italic leading-snug">
              “{t.quote}”
            </blockquote>
            <div className="mt-8">
              <p className="font-heading text-sm font-semibold text-sage-400">{t.role}</p>
              <p className="font-body text-xs text-ivory/50">{t.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}