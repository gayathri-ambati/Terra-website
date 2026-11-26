import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Zap, Sprout } from 'lucide-react';
import { company } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';

export function BrandIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory py-20 sm:py-24 md:py-32">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-sage-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-forest-600/5 blur-3xl"
      />

      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Intro copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-forest-600">
              <span className="h-px w-10 bg-forest-600" />
              Who we are
            </p>
          </Reveal>

          <MaskedLines
            lines={[
              'Nature inspires.',
              'Engineering transforms.',
              'Impact defines us.',
            ]}
            className="headline-lg max-w-4xl text-forest-800"
          />

          <Reveal delay={250}>
            <p className="mt-7 max-w-2xl font-body text-base leading-8 text-charcoal/80 sm:text-lg">
              {company.intro}
            </p>
          </Reveal>

          <Reveal delay={350}>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-forest-800/20 bg-white/70 px-5 py-3 font-heading text-sm font-semibold text-forest-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-forest-800/50 hover:bg-white hover:shadow-md"
            >
              <span>The Terra story</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-forest-800/10 pt-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-forest-700/75">
                <Leaf size={15} />
                Planet-minded
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-forest-700/75">
                <Zap size={15} />
                Engineering-led
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-forest-700/75">
                <Sprout size={15} />
                Built for lasting impact
              </span>
            </div>
          </Reveal>
        </div>

        {/* Editorial image and unboxed figures */}
        <div className="lg:col-span-6">
          <Reveal delay={150}>
            <figure className="group relative">
              <div className="relative h-[360px] overflow-hidden rounded-tl-[120px] rounded-br-[120px] bg-forest-800 sm:h-[460px] lg:h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85"
                  alt="Solar panels generating clean energy"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/75 via-transparent to-[#071610]/10" />

                <figcaption className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10">
                  <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-sage-400">
                    Energy &amp; engineering
                  </span>
                  <span className="block max-w-md font-display text-3xl leading-tight sm:text-4xl">
                    Measured savings.
                    <br />
                    Made to last.
                  </span>
                </figcaption>

                <span className="absolute right-6 top-6 font-mono text-xs tracking-widest text-white/85 sm:right-8 sm:top-8">
                  TERRA / 01
                </span>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-7 grid grid-cols-2 border-t border-forest-800/15 pt-5">
              <div className="pr-5 sm:pr-8">
                <p className="font-display text-4xl font-medium tracking-tight text-forest-800 sm:text-5xl">
                  10<span className="text-forest-600">+</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/70 sm:text-sm">
                  years of engineering for the real world
                </p>
              </div>

              <div className="border-l border-forest-800/15 pl-5 sm:pl-8">
                <p className="font-display text-4xl font-medium tracking-tight text-forest-800 sm:text-5xl">
                  3
                </p>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/70 sm:text-sm">
                  verticals united by one purpose
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}