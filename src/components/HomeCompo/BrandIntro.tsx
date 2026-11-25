import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function BrandIntro() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="label-caps mb-8 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-forest-600" /> Who we are
            </p>
          </Reveal>
          <MaskedLines
            lines={['Nature inspires.', 'Engineering transforms.', 'Impact defines us.']}
            className="headline-lg text-forest-800"
          />
          <Reveal delay={250}>
            <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">
              {company.intro}
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 font-heading text-sm font-semibold text-forest-800"
            >
              <span className="border-b border-forest-800/40 pb-1 transition-colors group-hover:border-forest-800">
                The Terra story
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-5 lg:col-span-5">
          <ClipReveal className="relative min-h-[280px] overflow-hidden rounded-sm bg-forest-800">
            <SceneCanvas variant="energy" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-ivory">
              <span className="label-caps text-sage-400">Energy & Engineering</span>
              <p className="mt-2 font-display text-2xl">Measured savings, engineered.</p>
            </div>
          </ClipReveal>
          <div className="grid grid-cols-2 gap-5">
            <ClipReveal delay={150} className="min-h-[220px] rounded-sm bg-sage-400 p-6 text-forest-900">
              <span className="font-display text-5xl font-medium">
                10<span className="text-forest-600">+</span>
              </span>
              <p className="mt-3 font-body text-sm leading-snug">
                years of engineering for the real world
              </p>
            </ClipReveal>
            <ClipReveal delay={300} className="min-h-[220px] rounded-sm bg-linen p-6 text-forest-800">
              <span className="font-display text-5xl font-medium">3</span>
              <p className="mt-3 font-body text-sm leading-snug">
                verticals united by one purpose
              </p>
            </ClipReveal>
          </div>
        </div>
      </div>
    </section>
  );
}