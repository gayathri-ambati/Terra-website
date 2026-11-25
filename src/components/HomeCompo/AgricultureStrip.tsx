import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function AgricultureStrip() {
  return (
    <section className="bg-linen py-24 md:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-forest-600" /> TRANSFORM programme
            </p>
          </Reveal>
          <MaskedLines
            lines={['From factory', 'floors to farm', 'fields.']}
            className="headline-lg text-forest-800"
          />
          <Reveal delay={250}>
            <p className="mt-8 max-w-lg font-body text-lg leading-relaxed text-charcoal/80">
              TRANSFORM is Terra&apos;s commitment to rural prosperity — farmer field schools, FPO
              strengthening and shared infrastructure that turns small-holder agriculture into a
              viable, dignified business.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: '7,500+', l: 'farmers' },
                { v: '64', l: 'communities' },
                { v: '18%', l: 'income gain' },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-forest-600 pl-4">
                  <span className="font-heading text-2xl font-bold text-forest-800">{s.v}</span>
                  <p className="font-body text-xs uppercase tracking-wide text-charcoal/60">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={450}>
            <Link to="/agriculture" className="btn-primary mt-10">
              The TRANSFORM story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <ClipReveal className="relative min-h-[480px] overflow-hidden rounded-sm">
            <SceneCanvas variant="agri" />
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-900/80 to-transparent p-8">
              <blockquote className="max-w-md font-display text-xl italic leading-snug text-ivory">
                “The farmer field school changed how our village thinks about soil and water.”
              </blockquote>
              <cite className="mt-3 block font-body text-xs not-italic text-ivory/70">
                FPO Director, TRANSFORM participant
              </cite>
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}