import { company } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function Story() {
  return (
    <section className="bg-linen py-24 md:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-2">
        <ClipReveal className="relative min-h-[420px] overflow-hidden rounded-sm">
          <SceneCanvas variant="agri" />
        </ClipReveal>
        <div>
          <Reveal>
            <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-forest-600" /> Our philosophy
            </p>
          </Reveal>
          <MaskedLines
            lines={['Engineering done well', 'protects both margins', 'and soil.']}
            className="headline-md text-forest-800"
          />
          <div className="mt-10 space-y-8">
            {company.philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="flex gap-6 border-t border-forest-800/10 pt-6">
                <span className="font-heading text-sm font-bold text-forest-600">0{i + 1}</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800">{p.title}</h3>
                  <p className="mt-1 max-w-md font-body text-sm leading-relaxed text-charcoal/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}