




import { useEffect, useRef, useState } from 'react';
import { milestones } from '@/lib/content';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  Globe2,
  Handshake,
  Leaf,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const milestoneColors = [
  '#12AAB0',
  '#258FA5',
  '#315D73',
  '#718DB9',
  '#4D5C78',
  '#71974E',
  '#D28A3B',
];

const milestoneIcons = [
  Building2,
  Zap,
  Award,
  TrendingUp,
  Handshake,
  Globe2,
  Leaf,
];

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollTimeline = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * 500,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  };

  if (!milestones.length) return null;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F8F9F8] py-20 text-[#172A31] md:py-28"
    >
      <div className="shell">
        {/* Centered heading and timeline controls */}
        <div className="grid gap-6 border-b border-[#17363A]/10 pb-8 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          <div className="hidden sm:block" />

          <div className="text-center">
            <Reveal>
              <p className="mb-4 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#168F96] sm:text-xs">
                <span className="h-px w-9 bg-[#168F96]" />
                Terra Ecopreneurs · Milestones
                <span className="h-px w-9 bg-[#168F96]" />
              </p>

              <h2 className="font-display text-4xl leading-tight text-[#17363A] sm:text-5xl">
                The journey so far
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#536266] sm:text-base">
                Explore the milestones that have shaped Terra’s story.
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center gap-2 sm:justify-self-end">
            <button
              type="button"
              onClick={() => scrollTimeline(-1)}
              aria-label="Scroll timeline left"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#17363A]/20 text-[#17363A] transition-all duration-300 hover:border-[#168F96] hover:bg-[#168F96] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168F96]"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() => scrollTimeline(1)}
              aria-label="Scroll timeline right"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#17363A]/20 text-[#17363A] transition-all duration-300 hover:border-[#168F96] hover:bg-[#168F96] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168F96]"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Connected infographic timeline */}
        <div
          ref={trackRef}
          className="mt-12 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Journey milestones"
        >
          <div
            className="relative grid h-[480px] min-w-max grid-flow-col gap-x-5"
            style={{ gridAutoColumns: '230px' }}
          >
            {/* Timeline rail */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[226px] h-[2px] bg-[#68777A]/70"
            />

            {milestones.map((milestone, index) => {
              const Icon = milestoneIcons[index % milestoneIcons.length];
              const color =
                milestoneColors[index % milestoneColors.length];
              const isAbove = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <Reveal key={milestone.year} delay={index * 75}>
                  <article
                    tabIndex={0}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                    className="group relative h-[460px] w-[230px] cursor-default outline-none"
                    style={{
                      opacity: hasEntered ? 1 : 0,
                      translate: hasEntered ? '0 0' : '0 18px',
                      transition:
                        'opacity 600ms ease, translate 650ms cubic-bezier(0.2,0.75,0.25,1)',
                      transitionDelay: `${index * 75}ms`,
                    }}
                  >
                    {/* Description above or below the node */}
                    <div
                      className={`absolute left-1 right-1 z-20 rounded-md border px-3 py-3 text-center transition-all duration-300 ${
                        isAbove ? 'top-0 h-[145px]' : 'top-[306px] h-[145px]'
                      } ${
                        isActive
                          ? 'border-[#168F96] bg-white shadow-[0_8px_24px_rgba(23,54,58,0.08)]'
                          : 'border-transparent group-hover:border-[#168F96]/70 group-hover:bg-white/80 group-hover:shadow-[0_8px_24px_rgba(23,54,58,0.08)] group-focus:border-[#168F96]/70 group-focus:bg-white/80'
                      }`}
                    >
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.14em]"
                        style={{ color }}
                      >
                        {milestone.year}
                      </p>

                      <h3 className="mt-2 font-heading text-base font-bold leading-snug text-[#17363A] transition-colors duration-300 group-hover:text-[#168F96] group-focus:text-[#168F96]">
                        {milestone.title}
                      </h3>

                      <p className="mx-auto mt-2 max-w-[210px] overflow-hidden text-xs leading-relaxed text-[#59676A] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                        {milestone.body}
                      </p>
                    </div>

                    {/* Connector from text to icon node */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 w-px -translate-x-1/2 transition-colors duration-300 ${
                        isAbove
                          ? 'top-[145px] h-[31px]'
                          : 'top-[274px] h-[32px]'
                      }`}
                      style={{ backgroundColor: isActive ? color : '#AEB8B8' }}
                    />

                    {/* Icon node */}
                    <div
                      className={`absolute left-1/2 top-[176px] z-20 grid h-[100px] w-[100px] -translate-x-1/2 place-items-center rounded-full border-2 bg-[#F8F9F8] transition-all duration-500 ${
                        isActive
                          ? 'scale-110 shadow-[0_10px_30px_rgba(18,170,176,0.18)]'
                          : 'shadow-[0_5px_16px_rgba(23,54,58,0.08)] group-hover:scale-105'
                      }`}
                      style={{ borderColor: isActive ? color : '#6F7C7E' }}
                    >
                      <span
                        className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-full text-white transition-transform duration-500 group-hover:rotate-[-6deg] group-focus:rotate-[-6deg]"
                        style={{
                          background: `linear-gradient(145deg, ${color}, #17363A)`,
                        }}
                      >
                        <Icon
                          className="relative z-10 block"
                          size={30}
                          color="#FFFFFF"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>

                      {/* Pointer accent */}
                      <span
                        aria-hidden="true"
                        className={`absolute left-1/2 h-0 w-0 -translate-x-1/2 ${
                          isAbove
                            ? '-top-[10px] border-x-[8px] border-b-[10px] border-x-transparent'
                            : '-bottom-[10px] border-x-[8px] border-t-[10px] border-x-transparent'
                        }`}
                        style={{
                          borderBottomColor: isAbove ? color : undefined,
                          borderTopColor: !isAbove ? color : undefined,
                        }}
                      />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-[#17363A]/10 pt-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#829092]">
            {milestones.length} milestones in Terra’s story
          </p>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#829092] sm:hidden">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
}