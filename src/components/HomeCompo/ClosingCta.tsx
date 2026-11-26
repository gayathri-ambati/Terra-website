

import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { MaskedLines, Reveal } from '@/components/Reveal';

interface ClosingCtaProps {
  title?: string[];
  to?: string;
  cta?: string;
  description?: string;
}

const ctaImages = [
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
    alt: 'Green farmland beneath an open sky',
    label: 'Real progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
    alt: 'Solar panels generating clean energy',
    label: 'Clean energy',
  },
  {
    src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=900&q=85',
    alt: 'Wind turbines above a green landscape',
    label: 'A greener tomorrow',
  },
];

export function ClosingCta({
  title = ['Ready to build', 'what lasts?'],
  to = '/contact',
  cta = 'Start a collaboration',
  description = 'Bring us your challenge. Together, we can make progress practical, measurable, and lasting.',
}: ClosingCtaProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F6ED] py-10 sm:py-12 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_42%,rgba(190,229,139,0.26),transparent_35%),radial-gradient(ellipse_at_100%_28%,rgba(202,225,164,0.24),transparent_36%),linear-gradient(180deg,#F7F7EE_0%,#F2F5E9_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 overflow-hidden sm:h-48"
      >
        <img
          src={ctaImages[0].src}
          alt=""
          className="h-full w-full object-cover object-[center_68%] opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#527A35]/40 via-[#F5F6ED]/45 to-transparent" />
      </div>
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-8 rotate-[-28deg] text-lime-700/[0.13]"
        size={170}
        strokeWidth={0.7}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-5 rotate-[35deg] text-lime-700/[0.13]"
        size={180}
        strokeWidth={0.7}
      />

      <div className="shell relative z-10">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/65 bg-gradient-to-br from-[#0B3728] via-[#073322] to-[#06291E] text-white shadow-[0_28px_75px_rgba(16,55,34,0.24)] sm:rounded-[2.25rem] lg:-mx-8 xl:-mx-16">
          {/* Background lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(92,151,93,0.23),transparent_48%),radial-gradient(ellipse_at_5%_100%,rgba(106,155,72,0.13),transparent_38%)]" />
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/[0.08]" />
            <div className="absolute -right-8 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" />
          </div>

          <div className="relative grid min-h-[480px] items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 md:px-14 lg:min-h-[520px] lg:grid-cols-12 lg:gap-5 lg:px-16">
            {/* CTA copy */}
            <div className="relative z-20 lg:col-span-5">
              <Reveal>
                <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-300 sm:text-xs">
                  <span className="h-px w-10 bg-lime-400" />
                  Let’s make progress together
                </p>

                <h2 className="max-w-[620px] font-display text-[clamp(2.8rem,5.1vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-white">
                  {title.map((line, index) => (
                    <MaskedLines
                      key={`${line}-${index}`}
                      lines={[line]}
                      as="span"
                      className="block text-left"
                      lineClassName={
                        index === title.length - 1
                          ? 'font-display italic text-lime-400'
                          : 'font-display text-white'
                      }
                      startDelay={index * 100}
                    />
                  ))}
                </h2>

                <p className="mt-5 max-w-[500px] text-sm leading-relaxed text-white/75 sm:text-base">
                  {description}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <Link
                  to={to}
                  className="group relative mt-7 inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#EAF5CF] py-2 pl-5 pr-2 font-heading text-sm font-semibold text-[#173B29] shadow-[0_10px_26px_rgba(121,205,44,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3F9DE] hover:shadow-[0_12px_30px_rgba(131,219,47,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                >
                  <span className="relative z-10">{cta}</span>

                  <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#183B2D] text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#0A542F]">
                    <ArrowRight size={17} />
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0"
                  />
                </Link>
              </Reveal>

            </div>

            {/* Three-image masonry composition */}
            <div className="relative h-[310px] lg:col-span-7 lg:h-[390px]">
              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-100/10 sm:h-[340px] sm:w-[340px]"
              />

              <Reveal delay={120} className="relative z-10 h-full">
                <div className="grid h-full grid-cols-2 grid-rows-2 gap-3">
                  {/* Tall image */}
                  <figure className="group relative row-span-2 min-h-0 overflow-hidden rounded-[1.3rem] border border-lime-100/30 shadow-[0_24px_50px_rgba(0,0,0,0.35)] sm:rounded-[1.5rem]">
                    <img
                      src={ctaImages[0].src}
                      alt={ctaImages[0].alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/75 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-black/25 px-3.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                      {ctaImages[0].label}
                    </figcaption>
                  </figure>

                  {/* Upper-right image */}
                  <figure className="group relative min-h-0 overflow-hidden rounded-[1.3rem] border border-lime-100/30 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:rounded-[1.5rem]">
                    <img
                      src={ctaImages[1].src}
                      alt={ctaImages[1].alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-sm">
                      {ctaImages[1].label}
                    </figcaption>
                  </figure>

                  {/* Lower-right image */}
                  <figure className="group relative min-h-0 overflow-hidden rounded-[1.3rem] border border-lime-100/30 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:rounded-[1.5rem]">
                    <img
                      src={ctaImages[2].src}
                      alt={ctaImages[2].alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-sm">
                      {ctaImages[2].label}
                    </figcaption>
                  </figure>
                </div>
              </Reveal>

              {/* Terra mark */}
              <div className="absolute left-3 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#E8F4C9] text-[#183B2D] shadow-[0_8px_24px_rgba(29,69,32,0.2)] sm:left-4 sm:h-14 sm:w-14">
                <Leaf size={21} strokeWidth={1.8} />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:inset-x-10" />
        </div>
      </div>
    </section>
  );
}