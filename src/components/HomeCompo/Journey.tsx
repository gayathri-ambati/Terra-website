// import { useEffect, useRef, useState } from 'react';
// import { milestones } from '@/lib/content';
// import { ArrowDownRight, ArrowRight } from 'lucide-react';
// import { MaskedLines, Reveal } from '@/components/Reveal';

// const journeyImages = [
//   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
//   'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85',
//   'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1400&q=85',
//   'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=85',
//   'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85',
// ];

// function clamp(value: number, min: number, max: number) {
//   return Math.min(max, Math.max(min, value));
// }

// export function Journey() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const milestoneRefs = useRef<Array<HTMLElement | null>>([]);
//   const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

//   useEffect(() => {
//     let frameId = 0;

//     const updateTimeline = () => {
//       cancelAnimationFrame(frameId);

//       frameId = requestAnimationFrame(() => {
//         const entries = milestoneRefs.current.filter(
//           (entry): entry is HTMLElement => entry !== null
//         );

//         if (!entries.length) return;

//         const anchor = window.innerHeight * 0.48;
//         let closestIndex = 0;
//         let closestDistance = Number.POSITIVE_INFINITY;

//         entries.forEach((entry, index) => {
//           const bounds = entry.getBoundingClientRect();
//           const center = bounds.top + bounds.height / 2;
//           const distance = Math.abs(center - anchor);

//           if (distance < closestDistance) {
//             closestDistance = distance;
//             closestIndex = index;
//           }
//         });

//         setActiveIndex((current) =>
//           current === closestIndex ? current : closestIndex
//         );

//         if (
//           !window.matchMedia('(prefers-reduced-motion: reduce)').matches
//         ) {
//           imageRefs.current.forEach((image) => {
//             if (!image) return;

//             const bounds = image.getBoundingClientRect();
//             const center = bounds.top + bounds.height / 2;
//             const offset = clamp(
//               (window.innerHeight / 2 - center) * 0.025,
//               -12,
//               12
//             );

//             image.style.translate = `0 ${offset}px`;
//           });
//         }
//       });
//     };

//     updateTimeline();
//     window.addEventListener('scroll', updateTimeline, { passive: true });
//     window.addEventListener('resize', updateTimeline);

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('scroll', updateTimeline);
//       window.removeEventListener('resize', updateTimeline);
//     };
//   }, []);

//   const jumpToMilestone = (index: number) => {
//     milestoneRefs.current[index]?.scrollIntoView({
//       behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
//         ? 'auto'
//         : 'smooth',
//       block: 'center',
//     });
//   };

//   if (!milestones.length) return null;

//   return (
//     <section className="overflow-x-clip bg-[#F2F0E8] py-20 md:py-28">
//       <div className="shell">
//         {/* Editorial heading */}
//         <div className="grid gap-6 border-b border-forest-800/15 pb-10 md:grid-cols-12 md:items-end md:pb-14">
//           <div className="md:col-span-7">
//             <Reveal>
//               <p className="label-caps mb-5 flex items-center gap-3 text-forest-600">
//                 <span className="h-px w-9 bg-forest-600" />
//                 Our journey
//               </p>
//             </Reveal>

//             <MaskedLines
//               lines={['The journey so far']}
//               className="headline-lg text-forest-800"
//             />
//           </div>

//           <Reveal className="md:col-span-5 md:justify-self-end">
//             <p className="max-w-md font-body text-sm leading-relaxed text-charcoal/65 sm:text-base">
//               Every milestone marks a step in Terra’s growth—from engineering
//               expertise to a broader commitment to sustainable progress.
//             </p>
//           </Reveal>
//         </div>

//         {/* Mobile year navigation */}
//         <nav
//           aria-label="Jump to a journey milestone"
//           className="mt-7 flex gap-2 overflow-x-auto pb-3 lg:hidden"
//         >
//           {milestones.map((milestone, index) => (
//             <button
//               key={`mobile-${milestone.year}`}
//               type="button"
//               onClick={() => jumpToMilestone(index)}
//               aria-current={activeIndex === index ? 'step' : undefined}
//               className={`shrink-0 rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
//                 activeIndex === index
//                   ? 'border-forest-800 bg-forest-800 text-white'
//                   : 'border-forest-800/20 text-forest-800/65'
//               }`}
//             >
//               {milestone.year}
//             </button>
//           ))}
//         </nav>

//         <div className="mt-8 grid gap-10 lg:mt-14 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
//           {/* Sticky desktop year navigator */}
//           <aside className="hidden lg:block">
//             <div className="sticky top-24">
//               <p className="label-caps mb-7 text-forest-600">
//                 Milestones
//               </p>

//               <div className="relative">
//                 <div className="absolute bottom-4 left-[5px] top-4 w-px bg-forest-800/15" />
//                 <div
//                   className="absolute left-[5px] top-4 w-px bg-forest-600 transition-[height] duration-300"
//                   style={{
//                     height:
//                       milestones.length <= 1
//                         ? '100%'
//                         : `calc((100% - 2rem) * ${activeIndex / (milestones.length - 1)})`,
//                   }}
//                 />

//                 <div className="space-y-5">
//                   {milestones.map((milestone, index) => {
//                     const isActive = activeIndex === index;

//                     return (
//                       <button
//                         key={`desktop-${milestone.year}`}
//                         type="button"
//                         onClick={() => jumpToMilestone(index)}
//                         aria-current={isActive ? 'step' : undefined}
//                         className="group relative flex w-full items-center gap-4 py-1 text-left"
//                       >
//                         <span
//                           className={`relative z-10 h-[11px] w-[11px] shrink-0 rounded-full ring-4 ring-[#F2F0E8] transition-all duration-300 ${
//                             isActive
//                               ? 'scale-110 bg-sage-400 shadow-[0_0_0_5px_rgba(137,165,108,0.16)]'
//                               : 'bg-forest-800/30 group-hover:bg-forest-600'
//                           }`}
//                         />

//                         <span
//                           className={`font-display text-xl transition-colors ${
//                             isActive
//                               ? 'text-forest-700'
//                               : 'text-forest-800/40 group-hover:text-forest-800/75'
//                           }`}
//                         >
//                           {milestone.year}
//                         </span>

//                         {isActive && (
//                           <ArrowRight
//                             size={15}
//                             className="ml-auto text-forest-600"
//                           />
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               <p className="mt-10 max-w-[180px] text-xs leading-relaxed text-charcoal/50">
//                 Scroll to move through the milestones.
//               </p>
//             </div>
//           </aside>

//           {/* Milestone stories */}
//           <div className="min-w-0">
//             <div className="space-y-10 md:space-y-16">
//               {milestones.map((milestone, index) => {
//                 const isActive = activeIndex === index;
//                 const image = journeyImages[index % journeyImages.length];

//                 return (
//                   <Reveal key={milestone.year} delay={(index % 2) * 80}>
//                     <article
//                       ref={(element) => {
//                         milestoneRefs.current[index] = element;
//                       }}
//                       className="grid scroll-mt-24 gap-6 border-b border-forest-800/15 pb-10 md:grid-cols-12 md:items-center md:gap-8 md:pb-16"
//                     >
//                       <div className="md:col-span-5">
//                         <p
//                           className={`font-display text-4xl leading-none transition-colors duration-300 md:text-5xl ${
//                             isActive
//                               ? 'text-forest-600'
//                               : 'text-forest-800/35'
//                           }`}
//                         >
//                           {milestone.year}
//                         </p>

//                         <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-forest-900 md:text-2xl">
//                           {milestone.title}
//                         </h3>

//                         <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70 md:text-base">
//                           {milestone.body}
//                         </p>
//                       </div>

//                       <div className="md:col-span-7">
//                         <div className="group relative h-[240px] overflow-hidden rounded-[1.5rem] bg-forest-900 sm:h-[310px]">
//                           <img
//                             ref={(element) => {
//                               imageRefs.current[index] = element;
//                             }}
//                             src={image}
//                             alt={`${milestone.title} milestone`}
//                             loading={index === 0 ? 'eager' : 'lazy'}
//                             className="h-full w-full scale-[1.04] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.09]"
//                           />

//                           <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/55 via-transparent to-transparent" />

//                           <span className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-black/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white backdrop-blur-sm">
//                             CHAPTER {String(index + 1).padStart(2, '0')}
//                           </span>

//                           <span
//                             className={`absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/45 text-white transition-all duration-300 ${
//                               isActive
//                                 ? 'bg-white/15 opacity-100'
//                                 : 'opacity-70 group-hover:bg-white/15 group-hover:opacity-100'
//                             }`}
//                           >
//                             <ArrowDownRight size={17} />
//                           </span>
//                         </div>
//                       </div>
//                     </article>
//                   </Reveal>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




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