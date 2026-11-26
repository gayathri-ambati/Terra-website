
import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Leaf,
  Play,
  Sprout,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';

const ACTIVE_COLOR = '#0B6038';

const steps = [
  {
    number: '01',
    label: 'Listen',
    title: 'Understand the opportunity',
    description:
      'Start with local needs, practical audits, and a shared plan for long-term progress.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Green farmland stretching into the distance',
    icon: Sprout,
  },
  {
    number: '02',
    label: 'Train',
    title: 'Learn together',
    description:
      'Farmer field schools build practical knowledge around soil, water, and better practices.',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Cultivated fields in a rural landscape',
    icon: GraduationCap,
    quote:
      '“The farmer field school changed how our village thinks about soil and water.”',
    attribution: 'FPO Director, TRANSFORM participant',
  },
  {
    number: '03',
    label: 'Strengthen',
    title: 'Build stronger FPOs',
    description:
      'Support producer organisations with the skills and connections to grow with confidence.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Crops growing in a productive field',
    icon: Handshake,
  },
  {
    number: '04',
    label: 'Build',
    title: 'Create shared infrastructure',
    description:
      'Develop shared resources that help rural enterprises improve quality and reach markets.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Infrastructure and engineering at work',
    icon: Building2,
  },
  {
    number: '05',
    label: 'Prosper',
    title: 'Grow lasting livelihoods',
    description:
      'Connect better practices with resilient businesses and dignified rural livelihoods.',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=90',
    imageAlt: 'Sunlight falling across productive farmland',
    icon: TrendingUp,
  },
];

export function AgricultureStrip() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

  const currentStep = steps[activeStep];

  useEffect(() => {
    let frameId = 0;

    const updateParallax = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        imageRefs.current.forEach((image) => {
          if (!image) return;

          if (reduceMotion) {
            image.style.translate = '0 0';
            return;
          }

          const bounds = image.getBoundingClientRect();
          const imageCenter = bounds.top + bounds.height / 2;
          const distanceFromCenter = imageCenter - window.innerHeight / 2;
          const offset = Math.max(
            -12,
            Math.min(12, distanceFromCenter * -0.025)
          );

          image.style.translate = `0 ${offset}px`;
        });
      });
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  const showPrevious = () => {
    setActiveStep((current) => (current - 1 + steps.length) % steps.length);
  };

  const showNext = () => {
    setActiveStep((current) => (current + 1) % steps.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#F5F6ED] py-10 sm:py-12 lg:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_42%,rgba(190,229,139,0.28),transparent_35%),radial-gradient(ellipse_at_100%_24%,rgba(202,225,164,0.23),transparent_34%),linear-gradient(180deg,#F7F7EE_0%,#F2F5E9_100%)]"
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-10 rotate-[-28deg] text-lime-700/[0.08]"
        size={230}
        strokeWidth={0.65}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-12 rotate-[35deg] text-lime-700/[0.08]"
        size={190}
        strokeWidth={0.65}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 900 180"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 right-0 h-28 w-[72%] text-lime-700/[0.07] sm:h-36"
      >
        <path
          d="M0 153C146 120 246 143 362 92c138-61 230-34 334-2 74 23 126-3 204-51v141H0Z"
          fill="currentColor"
        />
        <path
          d="M140 180c118-50 237-20 354-75 136-64 245-40 406 6v69H140Z"
          fill="currentColor"
          opacity=".55"
        />
      </svg>

      <div className="shell relative">
        {/* Section introduction */}
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="label-caps mb-3 flex items-center justify-center gap-3 text-forest-700">
              <span className="h-px w-10 bg-forest-600/70" />
              Our approach
              <span className="h-px w-10 bg-forest-600/70" />
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.65rem)] leading-[1.08] tracking-[-0.035em] text-forest-900">
              From factory floors to{' '}
              <span className="font-display italic text-lime-700">
                farm fields.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-3 max-w-[740px] font-body text-sm leading-relaxed text-charcoal/70 sm:text-base">
              TRANSFORM is Terra’s commitment to rural prosperity — farmer
              field schools, FPO strengthening, and shared infrastructure that
              helps smallholder agriculture become a viable, dignified business.
            </p>
          </Reveal>
        </div>

        {/* Interactive chevron navigation */}
        <Reveal delay={200}>
          <div
            role="group"
            className="mx-auto mt-6 max-w-6xl overflow-x-auto pb-2 sm:mt-7"
            aria-label="TRANSFORM programme stages"
          >
            <div className="flex min-w-[760px] items-stretch sm:min-w-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-pressed={isActive}
                    className={`group relative flex min-h-[76px] flex-1 items-center justify-center transition-all duration-300 focus-visible:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 ${
                      index > 0 ? '-ml-5' : ''
                    }`}
                    style={{
                      zIndex: isActive ? 10 : steps.length - index,
                      clipPath:
                        index === 0
                          ? 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)'
                          : 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%, 12% 50%)',
                      backgroundColor: isActive ? ACTIVE_COLOR : '#E9EDE2',
                      color: isActive ? '#FFFFFF' : '#284238',
                      filter: isActive ? 'none' : 'saturate(0.9)',
                      boxShadow: isActive
                        ? '0 10px 24px rgba(62, 190, 52, 0.28)'
                        : 'none',
                    }}
                  >
                    {isActive && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(255,255,255,0.28), transparent 62%)',
                        }}
                      />
                    )}

                    <span className="relative flex items-center gap-2.5 px-5 sm:gap-3">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className={`shrink-0 transition-transform duration-300 ${
                          isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`}
                      />

                      <span className="text-left">
                        <span className="block font-mono text-[9px] font-semibold tracking-[0.12em] opacity-70">
                          {step.number}
                        </span>
                        <span className="mt-0.5 block font-heading text-sm font-semibold sm:text-base">
                          {step.label}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Active stage image and content */}
        <div className="mt-6 grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-10">
          <Reveal className="lg:col-span-7">
            <div className="group relative h-[250px] overflow-hidden rounded-[1.75rem] border-[3px] border-white/95 bg-forest-900 shadow-[0_28px_65px_-36px_rgba(7,50,29,0.5)] sm:h-[320px] lg:h-[350px]">
              {steps.map((step, index) => (
                <img
                  key={step.number}
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                  src={step.image}
                  alt={step.imageAlt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 h-full w-full object-cover transition-[opacity,scale] duration-700 ease-out"
                  style={{
                    opacity: activeStep === index ? 1 : 0,
                    scale: activeStep === index ? '1.04' : '1.1',
                  }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/55 via-transparent to-[#071812]/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071812]/15 to-transparent" />

              <div className="absolute left-5 top-5 z-10 flex items-center gap-2.5 rounded-full border border-white/25 bg-[#174B6D]/85 px-3.5 py-2 text-white shadow-sm backdrop-blur-sm sm:left-6 sm:top-6">
                <span
                  className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(132,226,79,0.8)]"
                />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.18em]">
                  Karnataka · TRANSFORM
                </span>
              </div>

              <Link
                to="/agriculture"
                aria-label="Watch our impact"
                className="absolute left-1/2 top-1/2 z-10 grid h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/55 bg-[#153E2E]/40 text-white shadow-[0_8px_28px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:scale-110 hover:bg-[#153E2E]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 sm:h-[78px] sm:w-[78px]"
              >
                <Play size={29} fill="currentColor" strokeWidth={1.5} />
              </Link>

              <Link
                to="/agriculture"
                className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#10281D]/65 px-3.5 py-2 text-[11px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-[#10281D]/85 sm:bottom-6 sm:left-6"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-forest-900">
                  <Play size={10} fill="currentColor" />
                </span>
                Watch Our Impact
              </Link>

              <div className="absolute bottom-6 right-6 z-10 flex items-end gap-1.5 font-mono text-xs tracking-[0.18em] text-white/85 sm:bottom-9 sm:right-9">
                <span className="text-3xl leading-none text-white">
                  {currentStep.number}
                </span>
                <span className="mb-0.5 text-white/50">/ 05</span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-1">
            <Reveal key={currentStep.number} delay={100}>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#E8EFD8] py-1 pl-1 pr-4">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-white shadow-sm"
                >
                  {(() => {
                    const Icon = currentStep.icon;
                    return <Icon size={18} strokeWidth={1.8} />;
                  })()}
                </span>
                <p
                  className="font-mono text-[10px] font-semibold tracking-[0.16em] text-forest-700 sm:text-xs"
                >
                  FIELD JOURNEY / {currentStep.number}
                </p>
              </div>

              <h3 className="mt-4 font-display text-[clamp(1.75rem,2.7vw,2.55rem)] leading-[1.14] tracking-[-0.02em] text-forest-900">
                {currentStep.title}
              </h3>

              <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-charcoal/75 sm:text-base">
                {currentStep.description}
              </p>

              {currentStep.quote && (
                <blockquote className="mt-4 border-l-2 border-lime-600/50 pl-4">
                  <p className="font-display text-sm italic leading-relaxed text-forest-800/80 sm:text-base">
                    {currentStep.quote}
                  </p>
                  <cite className="mt-1.5 block text-[11px] not-italic text-charcoal/55">
                    {currentStep.attribution}
                  </cite>
                </blockquote>
              )}

              <div className="mt-6 h-px w-full bg-forest-800/15" />

              <div className="mt-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                  Step {currentStep.number} of 05
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous TRANSFORM stage"
                    className="grid h-10 w-10 place-items-center rounded-full border border-lime-700/35 bg-white/50 text-forest-800 transition-all duration-300 hover:-translate-x-0.5 hover:bg-forest-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next TRANSFORM stage"
                    className="grid h-10 w-10 place-items-center rounded-full border border-lime-700/50 bg-lime-100/70 text-forest-800 transition-all duration-300 hover:translate-x-0.5 hover:bg-forest-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 flex gap-2" aria-label="Choose a stage">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`Show stage ${step.number}: ${step.label}`}
                  aria-pressed={activeStep === index}
                  className="group/marker h-1.5 flex-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
                  style={{
                    backgroundColor:
                      activeStep === index ? ACTIVE_COLOR : '#C9D7C8',
                  }}
                >
                  <span className="sr-only">{step.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}