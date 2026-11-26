// import { Link } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';

// interface ClosingCtaProps {
//   title?: string[];
//   to?: string;
//   cta?: string;
// }

// export function ClosingCta({
//   title = ['Let us build', 'what lasts.'],
//   to = '/contact',
//   cta = 'Start a conversation',
// }: ClosingCtaProps) {
//   return (
//     <section className="grain relative overflow-hidden bg-forest-800 py-28 text-ivory md:py-40">
//       <SceneCanvas variant="contact" className="opacity-70" />
//       <div className="shell relative z-10 text-center">
//         <MaskedLines lines={title} className="headline-xl mx-auto max-w-4xl" />
//         <Reveal delay={300}>
//           <Link to={to} className="btn-primary mt-12">
//             {cta} <ArrowUpRight size={16} />
//           </Link>
//         </Reveal>
//       </div>
//     </section>
//   );
// }


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
    label: 'Rural livelihoods',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
    alt: 'Solar panels generating clean energy',
    label: 'Clean energy',
  },
  {
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85',
    alt: 'Renewable energy infrastructure at dusk',
    label: 'Engineering',
  },
];

export function ClosingCta({
  title = ['Ready to build', 'what lasts?'],
  to = '/contact',
  cta = 'Start a conversation',
  description = 'Bring us your challenge. Together, we can make progress practical, measurable, and lasting.',
}: ClosingCtaProps) {
  return (
    <section className="bg-[#F2F0E8] py-12 sm:py-16 md:py-20">
      <div className="shell">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#202522] text-white shadow-[0_24px_70px_rgba(16,37,29,0.16)] sm:rounded-[2rem]">
          {/* Background lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(104,145,104,0.28),transparent_42%)]" />
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/[0.08]" />
            <div className="absolute -right-8 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" />
          </div>

          <div className="relative grid min-h-[470px] items-center gap-8 px-6 py-12 sm:px-10 md:px-14 lg:grid-cols-12 lg:gap-4 lg:px-16">
            {/* CTA copy */}
            <div className="relative z-20 lg:col-span-6">
              <Reveal>
                <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B9D19E] sm:text-xs">
                  <span className="h-px w-9 bg-[#B9D19E]" />
                  Let’s make progress together
                </p>

                <MaskedLines
                  lines={title}
                  className="headline-lg max-w-xl text-white"
                />

                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                  {description}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <Link
                  to={to}
                  className="group relative mt-8 inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#F4F3EC] py-2 pl-5 pr-2 font-heading text-sm font-semibold text-[#17231C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9E6CB] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className="relative z-10">{cta}</span>

                  <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#183B2D]/10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#183B2D] group-hover:text-white">
                    <ArrowRight size={17} />
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0"
                  />
                </Link>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-8 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40">
                  <Leaf size={13} className="text-[#B9D19E]" />
                  Engineering · Ecology · Enterprise
                </div>
              </Reveal>
            </div>

            {/* Three-image masonry composition */}
            <div className="relative h-[310px] lg:col-span-6 lg:h-[390px]">
              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[340px] sm:w-[340px]"
              />

              <Reveal delay={120}>
                <div className="relative z-10 grid h-full grid-cols-[1.08fr_0.92fr] grid-rows-2 gap-3 sm:gap-4">
                  {/* Tall image */}
                  <figure className="group relative row-span-2 min-h-0 overflow-hidden rounded-[1.2rem] border border-white/20 shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
                    <img
                      src={ctaImages[0].src}
                      alt={ctaImages[0].alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/75 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-black/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {ctaImages[0].label}
                    </figcaption>
                  </figure>

                  {/* Upper-right image */}
                  <figure className="group relative min-h-0 overflow-hidden rounded-[1.2rem] border border-white/20 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
                    <img
                      src={ctaImages[1].src}
                      alt={ctaImages[1].alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-black/15 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:text-[9px]">
                      {ctaImages[1].label}
                    </figcaption>
                  </figure>

                  {/* Lower-right image */}
                  <figure className="group relative min-h-0 overflow-hidden rounded-[1.2rem] border border-white/20 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
                    <img
                      src={ctaImages[2].src}
                      alt={ctaImages[2].alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-black/15 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:text-[9px]">
                      {ctaImages[2].label}
                    </figcaption>
                  </figure>
                </div>
              </Reveal>

              {/* Terra mark */}
              <div className="absolute -left-3 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-[#DCE8D0] text-[#183B2D] shadow-lg sm:left-2 sm:h-14 sm:w-14">
                <Leaf size={21} />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:inset-x-10" />
        </div>
      </div>
    </section>
  );
}