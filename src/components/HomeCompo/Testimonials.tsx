import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const count = testimonials.length;

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
    <section className="relative overflow-hidden bg-[#EAF0EE] py-20 md:py-28">
      <style>{`
        @keyframes testimonialEnterFromRight {
          from {
            opacity: 0;
            transform: translateX(56px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes testimonialEnterFromLeft {
          from {
            opacity: 0;
            transform: translateX(-56px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-feature {
            animation: none !important;
          }
        }
      `}</style>

      {/* Quiet background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-8 h-72 w-72 rounded-full bg-[#BED8D2]/50 blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#D8D3E8]/50 blur-[100px]" />
      </div>

      <div className="shell relative z-10">
        {/* Heading */}
        <div className="text-center">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-600 sm:text-xs">
              <span className="h-px w-9 bg-forest-600" />
              Voices of partnership
              <span className="h-px w-9 bg-forest-600" />
            </p>

            <h2 className="font-display text-4xl leading-tight text-forest-900 sm:text-5xl">
              Built together. Remembered together.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal/65 sm:text-base">
              Perspectives from the people and organisations working alongside
              Terra.
            </p>
          </Reveal>
        </div>

        {/* Carousel stage */}
        <div className="relative mx-auto mt-12 h-[455px] max-w-[1080px] sm:mt-16 sm:h-[475px]">
          {/* Previous portrait preview */}
          {count > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Show testimonial from ${previous.role}`}
              className="absolute left-0 top-1/2 z-10 hidden h-[270px] w-[210px] -translate-y-1/2 overflow-hidden rounded-[1.4rem] shadow-[0_18px_50px_rgba(22,47,42,0.18)] transition-all duration-500 hover:scale-[1.04] md:block lg:left-2"
            >
              <img
                src={imageFor(previousIndex)}
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0A211A]/85 via-[#0A211A]/5 to-transparent" />
              <span className="absolute inset-x-4 bottom-4 text-left text-white">
                <span className="block text-xs font-semibold">
                  {previous.role}
                </span>
                <span className="mt-1 block text-[10px] text-white/75">
                  {previous.org}
                </span>
              </span>
            </button>
          )}

          {/* Next portrait preview */}
          {count > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label={`Show testimonial from ${next.role}`}
              className="absolute right-0 top-1/2 z-10 hidden h-[270px] w-[210px] -translate-y-1/2 overflow-hidden rounded-[1.4rem] shadow-[0_18px_50px_rgba(22,47,42,0.18)] transition-all duration-500 hover:scale-[1.04] md:block lg:right-2"
            >
              <img
                src={imageFor(nextIndex)}
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0A211A]/85 via-[#0A211A]/5 to-transparent" />
              <span className="absolute inset-x-4 bottom-4 text-left text-white">
                <span className="block text-xs font-semibold">{next.role}</span>
                <span className="mt-1 block text-[10px] text-white/75">
                  {next.org}
                </span>
              </span>
            </button>
          )}

          {/* Featured testimonial */}
          <article
            key={activeIndex}
            className="testimonial-feature absolute left-1/2 top-1/2 z-20 grid h-[390px] w-[min(88vw,700px)] grid-rows-[1fr_132px] overflow-hidden rounded-[1.6rem] bg-white shadow-[0_28px_80px_rgba(22,47,42,0.2)] md:h-[400px] md:grid-cols-[1.08fr_0.92fr] md:grid-rows-1"
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
            <div className="flex min-h-0 flex-col justify-between p-5 sm:p-8">
              <div className="min-h-0 overflow-hidden">
                <span className="mb-3 block font-display text-5xl leading-[0.65] text-[#9BB6A4] sm:text-6xl">
                  “
                </span>

                <p className="overflow-hidden font-display text-lg leading-snug text-forest-900 sm:text-xl md:text-2xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:6]">
                  {active.quote}
                </p>
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  {active.name && (
                    <p className="truncate font-heading text-sm font-semibold text-forest-900">
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

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-800 text-white sm:h-10 sm:w-10">
                  <ArrowRight size={17} />
                </span>
              </div>
            </div>

            {/* Featured portrait */}
            <div className="relative min-h-0 overflow-hidden">
              <img
                key={`portrait-${activeIndex}`}
                src={imageFor(activeIndex)}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A211A]/25 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-[#0A211A]/10" />

              <span className="absolute right-4 top-4 rounded-full border border-white/45 bg-black/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-white backdrop-blur-sm">
                {String(activeIndex + 1).padStart(2, '0')}
                <span className="mx-1.5 text-white/60">/</span>
                {String(count).padStart(2, '0')}
              </span>
            </div>
          </article>
        </div>

        {/* Carousel navigation */}
        <div className="relative z-30 mt-3 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-forest-800/20 bg-white/70 text-forest-800 transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
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
                    : 'w-2 bg-forest-800/25 hover:bg-forest-800/55'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-forest-800/20 bg-white/70 text-forest-800 transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}