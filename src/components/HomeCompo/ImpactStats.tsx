


import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { impactStats } from '@/lib/content';
import { CountUp } from '@/lib/reveal';
import { Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

const STAT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
    alt: 'Modern building representing completed projects',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85',
    alt: 'Solar panels representing energy savings',
  },
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85',
    alt: 'Forest landscape representing emissions avoided',
  },
  {
    src: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85',
    alt: 'Farmer tending crops',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85',
    alt: 'Community members working together',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    alt: 'Colleagues collaborating on a project',
  },
];

export function ImpactStats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const statRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.getAttribute('data-stat-index'));
          setActiveIndex(index);
        });
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    );

    statRefs.current.forEach((stat) => {
      if (stat) observer.observe(stat);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#06170F] py-10 text-[#F4F0E6] sm:py-14 lg:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <SceneCanvas variant="impact" className="opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#06170F]/75 via-[#071A11]/85 to-[#04130C]/95" />
        <div className="absolute -left-48 bottom-[-12rem] h-[35rem] w-[48rem] rounded-full bg-[#67A34A]/[0.16] blur-3xl" />
        <div className="absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#B5F27E]/[0.07] blur-3xl" />
      </div>

      <div className="shell relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 lg:flex lg:h-[calc(100svh-7rem)] lg:flex-col lg:justify-center">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B5F27E] sm:text-xs">
                <span className="h-px w-8 bg-[#B5F27E]" />
                Progress that matters
              </p>
            </Reveal>

            <Reveal>
              <h2 className="max-w-xl font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.075em] text-[#F4F0E6]">
                <span className="block">Impact,</span>
                <span className="block text-[#B5F27E]">measured</span>
                <span className="block">over time.</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-md font-body text-sm leading-6 text-[#F4F0E6]/65 sm:text-base sm:leading-7">
                We believe progress should be clear, meaningful, and grounded
                in evidence. Published figures will include their source,
                period, and unit.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 rounded-2xl border border-[#B5F27E]/25 bg-gradient-to-r from-[#123121]/85 to-[#0B2118]/85 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B5F27E]/40 bg-[#B5F27E]/10 text-[#B5F27E]">
                    <Leaf size={23} strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F4F0E6]/45">
                      Now exploring
                    </p>
                    <p className="mt-1 truncate font-display text-xl leading-tight text-[#F4F0E6] sm:text-2xl">
                      {impactStats[activeIndex]?.label}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs tracking-widest text-[#B5F27E]">
                    {String(activeIndex + 1).padStart(2, '0')}
                    <span className="mx-1.5 text-[#F4F0E6]/25">/</span>
                    {String(impactStats.length).padStart(2, '0')}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="hidden shrink-0 text-[#B5F27E] sm:block"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-4 flex gap-1.5">
                  {impactStats.map((stat, index) => (
                    <span
                      key={stat.label}
                      className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                        index <= activeIndex ? 'bg-[#B5F27E]' : 'bg-[#F4F0E6]/15'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            <p className="mt-6 hidden text-[9px] font-medium uppercase tracking-[0.2em] text-[#F4F0E6]/35 lg:block">
              Scroll to explore the impact
            </p>
          </div>
        </aside>

        <div className="relative space-y-3 pl-8 lg:col-span-7">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-[5px] top-8 w-px bg-gradient-to-b from-transparent via-[#B5F27E]/45 to-transparent"
          />
          {impactStats.map((stat, index) => {
            const image = STAT_IMAGES[index % STAT_IMAGES.length];
            const isActive = index === activeIndex;

            return (
              <Reveal key={stat.label} delay={Math.min(index * 70, 350)}>
                <article
                  ref={(element) => {
                    statRefs.current[index] = element;
                  }}
                  data-stat-index={index}
                  className={`group relative grid h-[132px] grid-cols-[minmax(0,1fr)_38%] overflow-hidden rounded-2xl border bg-gradient-to-r from-[#0B2118]/95 via-[#0B2118]/90 to-[#10291D]/85 shadow-[0_12px_36px_rgba(0,0,0,0.16)] transition-all duration-500 sm:h-[124px] lg:h-[108px] ${
                    isActive
                      ? 'border-[#B5F27E]/45 shadow-[0_14px_42px_rgba(6,23,15,0.35)]'
                      : 'border-[#F4F0E6]/10 hover:border-[#B5F27E]/30'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-8 top-1/2 z-20 h-3 w-3 -translate-y-1/2 rounded-full border transition-all duration-500 ${
                      isActive
                        ? 'border-[#D9FF9B] bg-[#B5F27E] shadow-[0_0_16px_rgba(181,242,126,0.9)]'
                        : 'border-[#B5F27E]/60 bg-[#10261E]'
                    }`}
                  />

                  <div className="relative z-10 flex min-w-0 items-center py-2 pl-4 pr-2 sm:pl-5 lg:pl-6">
                    <div className="min-w-0">
                      <span className="block font-display text-[2.25rem] leading-none tracking-[-0.045em] text-[#B5F27E] sm:text-[2.65rem]">
                        <CountUp
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={1800 + index * 150}
                        />
                      </span>

                      <h3 className="mt-1 font-heading text-xs font-semibold leading-tight text-[#F4F0E6] sm:text-sm lg:text-base">
                        {stat.label}
                      </h3>

                      <p className="mt-1 max-w-[25rem] font-body text-[10px] leading-tight text-[#F4F0E6]/55 sm:text-xs">
                        {stat.note}
                      </p>
                    </div>
                  </div>

                  <figure
                    className="relative h-full min-w-0 overflow-hidden rounded-r-2xl bg-[#1B352A]"
                    style={{
                      clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#10261E]/45 via-transparent to-transparent" />
                  </figure>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}