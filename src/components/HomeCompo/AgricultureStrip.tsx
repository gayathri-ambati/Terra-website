// import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import {
//   Building2,
//   GraduationCap,
//   Handshake,
//   Sprout,
//   TrendingUp,
// } from 'lucide-react';
// import { MaskedLines, Reveal } from '@/components/Reveal';

// const steps = [
//   {
//     number: '01',
//     shortTitle: 'Listen',
//     title: 'Understand the opportunity',
//     description:
//       'Start with local needs, practical audits, and a shared plan for long-term progress.',
//     image:
//       'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85',
//     imageAlt: 'Green farmland stretching into the distance',
//     icon: Sprout,
//     color: '#D97818',
//     textColor: '#FFFFFF',
//   },
//   {
//     number: '02',
//     shortTitle: 'Train',
//     title: 'Learn together',
//     description:
//       'Farmer field schools build practical knowledge around soil, water, and better practices.',
//     image:
//       'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=700&q=85',
//     imageAlt: 'Cultivated fields in a rural landscape',
//     icon: GraduationCap,
//     color: '#E9B83F',
//     textColor: '#17342B',
//   },
//   {
//     number: '03',
//     shortTitle: 'Strengthen',
//     title: 'Build stronger FPOs',
//     description:
//       'Support producer organisations with the skills and connections to grow with confidence.',
//     image:
//       'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=85',
//     imageAlt: 'Fresh crops growing on a farm',
//     icon: Handshake,
//     color: '#8CA85B',
//     textColor: '#17342B',
//   },
//   {
//     number: '04',
//     shortTitle: 'Build',
//     title: 'Create shared infrastructure',
//     description:
//       'Develop shared resources that help rural enterprises improve quality and reach markets.',
//     image:
//       'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=700&q=85',
//     imageAlt: 'Modern infrastructure and engineering',
//     icon: Building2,
//     color: '#315878',
//     textColor: '#FFFFFF',
//   },
//   {
//     number: '05',
//     shortTitle: 'Prosper',
//     title: 'Grow lasting livelihoods',
//     description:
//       'Connect better practices with resilient businesses and dignified rural livelihoods.',
//     image:
//       'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=85',
//     imageAlt: 'Sunlight over productive farmland',
//     icon: TrendingUp,
//     color: '#35A9C3',
//     textColor: '#10333B',
//   },
// ];

// export function AgricultureStrip() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

//   useEffect(() => {
//     let frameId = 0;

//     const updateParallax = () => {
//       cancelAnimationFrame(frameId);

//       frameId = requestAnimationFrame(() => {
//         const section = sectionRef.current;
//         if (!section) return;

//         const reduceMotion = window.matchMedia(
//           '(prefers-reduced-motion: reduce)'
//         ).matches;

//         imageRefs.current.forEach((image, index) => {
//           if (!image) return;

//           if (reduceMotion) {
//             image.style.transform = 'scale(1.04)';
//             return;
//           }

//           const rect = image.getBoundingClientRect();
//           const distanceFromCenter =
//             rect.top + rect.height / 2 - window.innerHeight / 2;
//           const offset = Math.max(
//             -10,
//             Math.min(10, distanceFromCenter * -0.025)
//           );

//           image.style.transform =
//             `scale(1.12) translate3d(0, ${offset}px, 0)`;
//         });
//       });
//     };

//     updateParallax();
//     window.addEventListener('scroll', updateParallax, { passive: true });
//     window.addEventListener('resize', updateParallax);

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('scroll', updateParallax);
//       window.removeEventListener('resize', updateParallax);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="overflow-hidden bg-[#F2F0E8] py-20 md:py-28"
//     >
//       <div className="shell">
//         {/* Centered introduction */}
//         <div className="mx-auto max-w-5xl text-center">
//           <Reveal>
//             <p className="label-caps mb-6 flex items-center justify-center gap-3 text-forest-600">
//               <span className="h-px w-9 bg-forest-600" />
//               TRANSFORM programme
//               <span className="h-px w-9 bg-forest-600" />
//             </p>
//           </Reveal>

//           <MaskedLines
//             lines={['From factory floors to farm fields.']}
//             className="whitespace-nowrap text-[clamp(0.9rem,4.1vw,3.5rem)] leading-tight text-forest-800"
//           />

//           <Reveal delay={160}>
//             <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
//               TRANSFORM is Terra’s commitment to rural prosperity — farmer
//               field schools, FPO strengthening, and shared infrastructure that
//               helps smallholder agriculture become a viable, dignified business.
//             </p>
//           </Reveal>
//         </div>

//         {/* Desktop animated chevron journey */}
//         <div className="mt-14 hidden lg:block">
//           <div className="grid grid-cols-5">
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               const captionAbove = index % 2 === 0;

//               return (
//                 <Reveal key={step.number} delay={index * 100}>
//                   <div
//                     className="relative grid h-[400px] grid-rows-[130px_180px_90px]"
//                     style={{ zIndex: index + 1 }}
//                   >
//                     {/* Alternating descriptions */}
//                     <div
//                       className={`px-5 ${
//                         captionAbove
//                           ? 'row-start-1 self-end pb-4'
//                           : 'row-start-3 self-start pt-4'
//                       }`}
//                     >
//                       <p
//                         className="font-heading text-sm font-semibold sm:text-base"
//                         style={{ color: step.color }}
//                       >
//                         {step.title}
//                       </p>
//                       <p className="mt-2 text-xs leading-relaxed text-charcoal/65 sm:text-sm">
//                         {step.description}
//                       </p>
//                     </div>

//                     {/* Image-backed arrow */}
//                     <div
//                       className={`group relative row-start-2 flex h-[180px] items-center justify-center overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${
//                         index > 0 ? '-ml-[18px]' : ''
//                       }`}
//                       style={{
//                         width:
//                           index < steps.length - 1
//                             ? 'calc(100% + 18px)'
//                             : '100%',
//                         clipPath:
//                           index === 0
//                             ? 'polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%)'
//                             : 'polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%, 18% 50%)',
//                       }}
//                     >
//                       <img
//                         ref={(element) => {
//                           imageRefs.current[index] = element;
//                         }}
//                         src={step.image}
//                         alt={step.imageAlt}
//                         loading="lazy"
//                         className="absolute inset-0 h-full w-full object-cover will-change-transform transition-transform duration-500 group-hover:scale-[1.16]"
//                       />

//                       <span
//                         className="absolute inset-0"
//                         style={{
//                           backgroundColor: step.color,
//                           opacity: 0.76,
//                         }}
//                       />

//                       <span className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20" />

//                       <div className="relative z-10 flex flex-col items-center px-5 text-center">
//                         <span
//                           className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg transition-transform duration-500 group-hover:scale-110"
//                           style={{ color: step.color }}
//                         >
//                           <Icon size={23} strokeWidth={1.8} />
//                         </span>

//                         <span
//                           className="font-heading text-xl font-bold sm:text-2xl"
//                           style={{ color: step.textColor }}
//                         >
//                           {step.shortTitle}
//                         </span>

//                         <span
//                           className="mt-1 font-mono text-[10px] tracking-[0.18em]"
//                           style={{ color: step.textColor, opacity: 0.8 }}
//                         >
//                           {step.number}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile and tablet image timeline */}
//         <div className="relative mt-12 lg:hidden">
//           <div className="absolute bottom-6 left-6 top-6 w-px bg-forest-800/20" />

//           <div className="space-y-7">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <Reveal key={step.number} delay={index * 80}>
//                   <div className="group relative flex gap-5">
//                     <span
//                       className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full text-white shadow-md ring-4 ring-[#F2F0E8] transition-transform duration-300 group-hover:scale-110"
//                       style={{ backgroundColor: step.color }}
//                     >
//                       <Icon size={21} strokeWidth={1.8} />
//                     </span>

//                     <div className="min-w-0 flex-1 border-b border-forest-800/15 pb-6">
//                       <div className="mb-4 flex items-center gap-3">
//                         <span
//                           className="font-mono text-[10px] tracking-[0.16em]"
//                           style={{ color: step.color }}
//                         >
//                           {step.number}
//                         </span>
//                         <h3 className="font-heading text-lg font-semibold text-forest-900">
//                           {step.title}
//                         </h3>
//                       </div>

//                       <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
//                         <img
//                           src={step.image}
//                           alt={step.imageAlt}
//                           loading="lazy"
//                           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                         <span
//                           className="absolute inset-0 mix-blend-multiply"
//                           style={{
//                             backgroundColor: step.color,
//                             opacity: 0.2,
//                           }}
//                         />
//                       </div>

//                       <p className="text-sm leading-relaxed text-charcoal/70">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Sprout,
  TrendingUp,
} from 'lucide-react';
import { MaskedLines, Reveal } from '@/components/Reveal';

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
    color: '#D97818',
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
    color: '#D8AA37',
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
    color: '#839D58',
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
    color: '#315878',
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
    color: '#3297A9',
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
      className="relative overflow-hidden bg-[#F2F0E8] py-20 md:py-28"
    >
      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#D97818]/[0.06] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-[#3297A9]/[0.07] blur-3xl"
      />

      <div className="shell relative">
        {/* Section introduction */}
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="label-caps mb-6 flex items-center justify-center gap-3 text-forest-600">
              <span className="h-px w-9 bg-forest-600" />
              TRANSFORM programme
              <span className="h-px w-9 bg-forest-600" />
            </p>
          </Reveal>

          <MaskedLines
            lines={['From factory floors to farm fields.']}
            className="whitespace-nowrap text-[clamp(0.9rem,4.1vw,3.5rem)] leading-tight text-forest-800"
          />

          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
              TRANSFORM is Terra’s commitment to rural prosperity — farmer
              field schools, FPO strengthening, and shared infrastructure that
              helps smallholder agriculture become a viable, dignified business.
            </p>
          </Reveal>
        </div>

        {/* Interactive chevron navigation */}
        <Reveal delay={200}>
          <div
            className="mt-12 overflow-x-auto pb-3"
            aria-label="TRANSFORM programme stages"
          >
            <div className="flex min-w-[760px] items-stretch">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-pressed={isActive}
                    className={`group relative flex min-h-[112px] flex-1 items-center justify-center transition-all duration-300 focus-visible:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 ${
                      index > 0 ? '-ml-5' : ''
                    }`}
                    style={{
                      zIndex: isActive ? 10 : steps.length - index,
                      clipPath:
                        index === 0
                          ? 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)'
                          : 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%, 12% 50%)',
                      backgroundColor: isActive ? step.color : '#E4E5DD',
                      color: isActive ? '#FFFFFF' : '#284238',
                      filter: isActive ? 'none' : 'saturate(0.85)',
                    }}
                  >
                    {/* Inner glow on active */}
                    {isActive && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(255,255,255,0.35), transparent 60%)',
                        }}
                      />
                    )}

                    <span className="relative flex items-center gap-3 px-5">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className={`shrink-0 transition-transform duration-300 ${
                          isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`}
                      />

                      <span className="text-left">
                        <span className="block font-mono text-[9px] tracking-[0.18em] opacity-70">
                          {step.number}
                        </span>
                        <span className="mt-1 block font-heading text-base font-semibold sm:text-lg">
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
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-forest-900 shadow-[0_30px_70px_-35px_rgba(7,24,18,0.6)] sm:min-h-[460px]">
              {steps.map((step, index) => (
                <img
                  key={step.number}
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                  src={step.image}
                  alt={step.imageAlt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 h-full w-full scale-[1.06] object-cover transition-[opacity,scale] duration-700 ease-out"
                  style={{
                    opacity: activeStep === index ? 1 : 0,
                    scale: activeStep === index ? '1.06' : '1.12',
                  }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/85 via-[#071812]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071812]/25 to-transparent" />

              {/* Corner accents */}
              <div aria-hidden className="absolute left-4 top-4 z-10 h-5 w-5 border-l border-t border-white/40" />
              <div aria-hidden className="absolute right-4 top-4 z-10 h-5 w-5 border-r border-t border-white/40" />
              <div aria-hidden className="absolute bottom-4 left-4 z-10 h-5 w-5 border-b border-l border-white/40" />
              <div aria-hidden className="absolute bottom-4 right-4 z-10 h-5 w-5 border-b border-r border-white/40" />

              <div className="absolute left-7 top-7 z-10 flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-white backdrop-blur-sm">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: currentStep.color }}
                />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]">
                  Karnataka · TRANSFORM
                </span>
              </div>

              {currentStep.quote && (
                <div className="absolute bottom-6 left-6 z-10 max-w-lg sm:bottom-9 sm:left-9">
                  <span
                    aria-hidden
                    className="mb-3 block h-px w-10"
                    style={{ backgroundColor: currentStep.color }}
                  />
                  <p className="font-display text-xl leading-snug text-white sm:text-2xl">
                    {currentStep.quote}
                  </p>
                  <p className="mt-3 text-xs text-white/70">
                    {currentStep.attribution}
                  </p>
                </div>
              )}

              <div className="absolute bottom-6 right-6 z-10 flex items-end gap-1.5 font-mono text-xs tracking-[0.18em] text-white/85 sm:bottom-9 sm:right-9">
                <span className="text-3xl leading-none text-white">
                  {currentStep.number}
                </span>
                <span className="mb-0.5 text-white/50">/ 05</span>
              </div>

              {/* Active step progress */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/20">
                <div
                  className="h-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                    backgroundColor: currentStep.color,
                  }}
                />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal key={currentStep.number} delay={100}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: currentStep.color }}
                >
                  {(() => {
                    const Icon = currentStep.icon;
                    return <Icon size={18} strokeWidth={1.8} />;
                  })()}
                </span>
                <p
                  className="font-mono text-xs tracking-[0.2em]"
                  style={{ color: currentStep.color }}
                >
                  FIELD JOURNEY / {currentStep.number}
                </p>
              </div>

              <h3 className="mt-5 font-display text-3xl leading-tight text-forest-800 sm:text-4xl">
                {currentStep.title}
              </h3>

              <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-charcoal/70">
                {currentStep.description}
              </p>

              <div className="mt-8 h-px w-full bg-forest-800/15" />

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                  Step {currentStep.number} of 05
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous TRANSFORM stage"
                    className="grid h-11 w-11 place-items-center rounded-full border border-forest-800/20 text-forest-800 transition-all duration-300 hover:-translate-x-0.5 hover:bg-forest-800 hover:text-white"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next TRANSFORM stage"
                    className="grid h-11 w-11 place-items-center rounded-full border border-forest-800/20 text-forest-800 transition-all duration-300 hover:translate-x-0.5 hover:bg-forest-800 hover:text-white"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Small step markers for touch users */}
            <div className="mt-8 flex gap-2" aria-label="Choose a stage">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`Show stage ${step.number}: ${step.label}`}
                  aria-pressed={activeStep === index}
                  className="group/marker h-1.5 flex-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeStep === index ? step.color : '#C9CEC2',
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