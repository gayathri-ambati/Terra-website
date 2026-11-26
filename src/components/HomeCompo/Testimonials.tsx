import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react';
import { testimonials } from '@/lib/content';
import { Reveal } from '@/components/Reveal';

const portraitImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85',
];

type TestimonialDetails = (typeof testimonials)[number] & {
  image?: string;
  name?: string;
};

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(() =>
    testimonials.length > 1 ? 1 : 0
  );
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isCentered, setIsCentered] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const count = testimonials.length;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let observer: IntersectionObserver | undefined;

    const observeCenter = () => {
      observer?.disconnect();
      const inset = Math.round(window.innerHeight * 0.42);
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry) setIsCentered(entry.isIntersecting);
        },
        { rootMargin: `-${inset}px 0px -${inset}px` },
      );
      observer.observe(stage);
    };

    observeCenter();
    window.addEventListener('resize', observeCenter);

    return () => {
      window.removeEventListener('resize', observeCenter);
      observer?.disconnect();
    };
  }, []);

  if (!count) return null;

  const imageFor = (index: number) => {
    const testimonial = testimonials[index] as TestimonialDetails;
    return testimonial.image ?? portraitImages[index % portraitImages.length];
  };

  const goTo = (index: number, travelDirection: 1 | -1) => {
    if (index === activeIndex) return;
    setDirection(travelDirection);
    setActiveIndex(index);
  };

  const previousIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;
  const active = testimonials[activeIndex] as TestimonialDetails;
  const previous = testimonials[previousIndex];
  const next = testimonials[nextIndex];

  const showPrevious = () => goTo(previousIndex, -1);
  const showNext = () => goTo(nextIndex, 1);

  return (
    <section className="relative isolate scroll-mt-20 overflow-hidden bg-[#F5F6ED] py-10 sm:py-12 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_40%,rgba(190,229,139,0.28),transparent_35%),radial-gradient(ellipse_at_100%_32%,rgba(202,225,164,0.24),transparent_36%),linear-gradient(180deg,#F7F7EE_0%,#F2F5E9_100%)]"
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-10 rotate-[-28deg] text-lime-700/[0.12]"
        size={170}
        strokeWidth={0.7}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-8 rotate-[35deg] text-lime-700/[0.12]"
        size={180}
        strokeWidth={0.7}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 overflow-hidden sm:h-48"
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover object-[center_68%] opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#527A35]/45 via-[#F5F6ED]/50 to-transparent" />
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 210"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 h-28 w-full text-lime-700/[0.08] sm:h-36"
      >
        <path
          d="M0 128c115-58 184-18 280 14 112 37 215-3 328-50 144-60 270-14 399 24 77 23 126-8 193-48v142H0Z"
          fill="currentColor"
        />
        <path
          d="M0 178c136-42 238-20 354 2 154 30 242-46 365-58 176-18 294 83 481 10v78H0Z"
          fill="currentColor"
          opacity=".55"
        />
      </svg>

      <style>{`
        @keyframes testimonialEnterFromRight {
          from {
            opacity: 0;
            transform: translateX(48px) scale(0.98);
            clip-path: inset(0 9% 0 0 round 26px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            clip-path: inset(0 0 0 0 round 26px);
          }
        }

        @keyframes testimonialEnterFromLeft {
          from {
            opacity: 0;
            transform: translateX(-48px) scale(0.98);
            clip-path: inset(0 0 0 9% round 26px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            clip-path: inset(0 0 0 0 round 26px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-feature {
            animation: none !important;
          }
        }
      `}</style>

      <div className="shell relative z-10">
        {/* Heading */}
        <div className="text-center">
          <Reveal>
            <p className="mb-3 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-700 sm:text-xs">
              <span className="h-px w-10 bg-forest-600/70" />
              Voices of partnership
              <span className="h-px w-10 bg-forest-600/70" />
            </p>

            <h2 className="font-display text-[clamp(2rem,4.2vw,3.55rem)] leading-[1.08] tracking-[-0.035em] text-forest-900">
              Built together. Remembered{' '}
              <span className="font-display italic text-lime-700">
                together.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/65 sm:text-base">
              Perspectives from the people and organisations working alongside
              Terra.
            </p>
          </Reveal>
        </div>

        {/* Carousel stage */}
        <div
          ref={stageRef}
          className="relative mx-auto mt-7 h-[555px] max-w-[1190px] sm:mt-8 md:h-[405px]"
        >
          {/* Previous portrait preview */}
          {count > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Show testimonial from ${previous.role}`}
              className="absolute left-0 top-1/2 z-10 hidden h-[292px] w-[118px] -translate-y-1/2 overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white p-1 shadow-[0_18px_50px_rgba(22,47,42,0.16)] transition-all duration-500 hover:scale-[1.04] lg:block xl:w-[146px]"
            >
              <img
                src={imageFor(previousIndex)}
                alt=""
                className="h-full w-full rounded-[1.1rem] object-cover"
              />
            </button>
          )}

          {/* Next portrait preview */}
          {count > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label={`Show testimonial from ${next.role}`}
              className="absolute right-0 top-1/2 z-10 hidden h-[292px] w-[118px] -translate-y-1/2 overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white p-1 shadow-[0_18px_50px_rgba(22,47,42,0.16)] transition-all duration-500 hover:scale-[1.04] lg:block xl:w-[146px]"
            >
              <img
                src={imageFor(nextIndex)}
                alt=""
                className="h-full w-full rounded-[1.1rem] object-cover"
              />
            </button>
          )}

          {/* Featured testimonial */}
          <article
            key={activeIndex}
            className={`testimonial-feature absolute left-1/2 top-1/2 z-20 grid h-[510px] w-[min(88vw,810px)] grid-rows-[205px_1fr] overflow-hidden rounded-[1.8rem] border border-lime-800/15 bg-[#FFFDF7] shadow-[0_30px_90px_rgba(40,74,43,0.2)] transition-[scale,opacity] duration-700 ease-out motion-reduce:transition-none md:h-[360px] md:grid-cols-[1.15fr_0.85fr] md:grid-rows-1 lg:w-[min(60vw,810px)] ${
              isCentered
                ? '[scale:1] opacity-100'
                : '[scale:0.94] opacity-90 md:[scale:0.86]'
            }`}
            style={{
              // Individual translate centers the card without conflicting with animation transforms.
              translate: '-50% -50%',
              animationName:
                direction === 1
                  ? 'testimonialEnterFromRight'
                  : 'testimonialEnterFromLeft',
              animationDuration: '650ms',
              animationTimingFunction: 'cubic-bezier(0.2,0.75,0.25,1)',
              animationFillMode: 'both',
            }}
            aria-live="polite"
          >
            {/* Quote and attribution */}
            <div className="order-2 flex min-h-0 flex-col justify-between bg-[linear-gradient(135deg,#FFFDF7_0%,#F8F8EE_100%)] p-5 sm:p-7 md:order-1 md:p-8 lg:p-9">
              <div className="min-h-0 overflow-hidden">
                <span className="mb-2 block font-display text-5xl leading-[0.65] text-lime-600 sm:mb-3 sm:text-6xl">
                  “
                </span>

                <p className="overflow-hidden font-display text-base leading-snug text-forest-900 sm:text-lg md:text-[1.45rem] md:leading-[1.22] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:6]">
                  {active.quote}
                </p>
              </div>

              <div className="mt-3 flex items-end justify-between gap-3 sm:mt-4">
                <div className="min-w-0">
                  {active.name && (
                    <p className="truncate font-heading text-sm font-semibold text-forest-900 sm:text-base">
                      {active.name}
                    </p>
                  )}
                  <p className="mt-1 truncate text-xs font-semibold text-forest-700">
                    {active.role}
                  </p>
                  <p className="mt-1 truncate text-[11px] text-charcoal/55">
                    {active.org}
                  </p>
                </div>

              </div>
            </div>

            {/* Featured portrait */}
            <div
              className="relative order-1 min-h-0 overflow-hidden bg-lime-100 md:order-2"
              style={{ clipPath: 'ellipse(110% 82% at 100% 50%)' }}
            >
              <img
                key={`portrait-${activeIndex}`}
                src={imageFor(activeIndex)}
                alt=""
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A211A]/20 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-[#0A211A]/10" />
            </div>
          </article>
        </div>

        {/* Carousel navigation */}
        <div className="relative z-30 mt-1 flex items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-lime-700/35 bg-white/65 text-forest-800 transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`testimonial-dot-${testimonial.role}`}
                type="button"
                onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 bg-forest-700'
                      : 'w-2 bg-forest-800/20 hover:bg-forest-800/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-lime-700/45 bg-lime-100/65 text-forest-800 transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}