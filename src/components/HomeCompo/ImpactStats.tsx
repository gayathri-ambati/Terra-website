// import { impactStats } from '@/lib/content';
// import { CountUp } from '@/lib/reveal';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';

// const STAT_IMAGES = [
//   {
//     src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
//     alt: 'Modern building representing completed projects',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
//     alt: 'Solar panels representing energy savings',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
//     alt: 'Forest landscape representing emissions avoided',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=85',
//     alt: 'Farmer tending crops',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85',
//     alt: 'Community members working together',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
//     alt: 'Colleagues collaborating on a project',
//   },
// ];

// export function ImpactStats() {
//   return (
//     <section className="relative bg-forest-900 py-10 text-ivory sm:py-14">
//       {/* Background texture */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <SceneCanvas variant="impact" className="opacity-20" />
//         <div className="absolute inset-0 bg-gradient-to-br from-forest-900/75 via-forest-900/70 to-forest-900/95" />
//       </div>

//       <div className="shell relative z-10 grid gap-8 lg:grid-cols-12 lg:gap-14">
//         {/* Sticky introduction */}
//         <div className="lg:col-span-5">
//           <div className="lg:sticky lg:top-32 lg:flex lg:h-[calc(100svh-8rem)] lg:flex-col lg:justify-center">
//             <Reveal>
//               <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-sage-400 sm:text-xs">
//                 <span className="h-px w-9 bg-sage-400" />
//                 Progress that matters
//               </p>
//             </Reveal>

//             <MaskedLines
//               lines={['Impact, measured', 'over time.']}
//               className="headline-lg max-w-xl text-ivory"
//             />

//             <Reveal delay={150}>
//               <p className="mt-5 max-w-md font-body text-sm leading-6 text-ivory/70 sm:text-base sm:leading-7">
//                 We believe progress should be clear, meaningful, and grounded
//                 in evidence. Published figures will include their source,
//                 period, and unit.
//               </p>
//             </Reveal>

//             <div className="mt-8 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ivory/45 lg:flex">
//               <span className="h-px w-8 bg-sage-400/70" />
//               Scroll to explore
//             </div>

//             <div className="mt-10 hidden max-w-xs border-l border-sage-400/40 pl-4 lg:block">
//               <p className="font-display text-lg italic leading-snug text-ivory/70">
//                 “Better outcomes begin with practical action.”
//               </p>
//               <span className="mt-3 block text-[9px] uppercase tracking-[0.16em] text-ivory/40">
//                 Terra Ecopreneurs
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Editorial stats sequence */}
//         <div className="lg:col-span-7">
//           {impactStats.map((stat, index) => {
//             const image = STAT_IMAGES[index % STAT_IMAGES.length];

//             return (
//               <Reveal
//                 key={stat.label}
//                 delay={Math.min(index * 80, 400)}
//                 className="group border-t border-ivory/20 py-7 sm:py-8"
//               >
//                 <div className="grid grid-cols-[32px_1fr] items-center gap-3 sm:grid-cols-[42px_1fr_200px] sm:gap-5 lg:grid-cols-[48px_1fr_220px]">
//                   <span className="self-start pt-2 font-mono text-[10px] tracking-widest text-ivory/40 sm:text-xs">
//                     0{index + 1}
//                   </span>

//                   <div>
//                     <span className="block font-heading text-4xl font-bold tracking-tight text-sage-400 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ivory sm:text-5xl lg:text-6xl">
//                       <CountUp
//                         value={stat.value}
//                         suffix={stat.suffix}
//                         duration={1800 + index * 150}
//                       />
//                     </span>

//                     <h3 className="mt-2 font-heading text-base font-semibold text-ivory sm:text-lg">
//                       {stat.label}
//                     </h3>

//                     <p className="mt-1 max-w-lg font-body text-sm leading-6 text-ivory/60">
//                       {stat.note}
//                     </p>
//                   </div>

//                   <div className="relative hidden h-[118px] overflow-hidden rounded-tl-[36px] rounded-br-[36px] bg-forest-800 sm:block lg:h-[136px]">
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       loading="lazy"
//                       referrerPolicy="no-referrer"
//                       className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
//                     />
//                     <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-forest-900/35 to-transparent" />
//                   </div>
//                 </div>
//               </Reveal>
//             );
//           })}

//           <div className="border-t border-ivory/20" />
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from 'react';
import { impactStats } from '@/lib/content';
import { CountUp } from '@/lib/reveal';
import { MaskedLines, Reveal } from '@/components/Reveal';
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
    <section className="relative bg-[#10261E] py-12 text-[#F4F0E6] sm:py-16 lg:py-20">
      {/* Soft atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <SceneCanvas variant="impact" className="opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#10261E]/80 via-[#10261E]/85 to-[#091710]/95" />
        <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#B7A06A]/[0.06] blur-3xl" />
      </div>

      <div className="shell relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Sticky editorial introduction */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 lg:flex lg:h-[calc(100svh-7rem)] lg:flex-col lg:justify-center">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C9B783] sm:text-xs">
                <span className="h-px w-10 bg-[#C9B783]" />
                Progress that matters
              </p>
            </Reveal>

            <MaskedLines
              lines={['Impact, measured', 'over time.']}
              className="headline-lg max-w-xl text-[#F4F0E6]"
            />

            <Reveal delay={150}>
              <p className="mt-6 max-w-md font-body text-sm leading-7 text-[#F4F0E6]/65 sm:text-base">
                We believe progress should be clear, meaningful, and grounded
                in evidence. Published figures will include their source,
                period, and unit.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-[#F4F0E6]/15 pt-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F4F0E6]/40">
                    Now exploring
                  </p>
                  <p className="mt-2 font-display text-xl text-[#C9B783]">
                    {impactStats[activeIndex]?.label}
                  </p>
                </div>

                <span className="font-mono text-xs tracking-widest text-[#F4F0E6]/45">
                  {String(activeIndex + 1).padStart(2, '0')}
                  <span className="mx-2 text-[#F4F0E6]/25">/</span>
                  {String(impactStats.length).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-5 flex gap-1.5">
                {impactStats.map((stat, index) => (
                  <span
                    key={stat.label}
                    className={`h-px flex-1 transition-colors duration-500 ${
                      index <= activeIndex ? 'bg-[#C9B783]' : 'bg-[#F4F0E6]/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 hidden text-[9px] font-medium uppercase tracking-[0.2em] text-[#F4F0E6]/35 lg:block">
              Scroll to follow the story
            </p>
          </div>
        </aside>

        {/* Image-led impact stories */}
        <div className="lg:col-span-7">
          {impactStats.map((stat, index) => {
            const image = STAT_IMAGES[index % STAT_IMAGES.length];

            return (
              <Reveal key={stat.label} delay={Math.min(index * 70, 350)}>
                <article
                  ref={(element) => {
                    statRefs.current[index] = element;
                  }}
                  data-stat-index={index}
                  className="group grid min-h-[230px] items-center gap-6 border-t border-[#F4F0E6]/15 py-8 sm:min-h-[250px] sm:grid-cols-[1fr_220px] sm:gap-8 lg:grid-cols-[1fr_250px]"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="mt-2 font-mono text-[10px] tracking-widest text-[#C9B783]/65">
                      0{index + 1}
                    </span>

                    <div>
                      <span className="block font-display text-5xl leading-none tracking-tight text-[#C9B783] sm:text-6xl lg:text-7xl">
                        <CountUp
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={1800 + index * 150}
                        />
                      </span>

                      <h3 className="mt-3 font-heading text-base font-semibold text-[#F4F0E6] sm:text-lg">
                        {stat.label}
                      </h3>

                      <p className="mt-2 max-w-sm font-body text-sm leading-6 text-[#F4F0E6]/55">
                        {stat.note}
                      </p>
                    </div>
                  </div>

                  <figure className="relative hidden h-[145px] overflow-hidden rounded-tl-[54px] rounded-br-[54px] bg-[#1B352A] sm:block lg:h-[165px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#10261E]/35 to-transparent" />
                    <span className="absolute bottom-3 right-4 font-mono text-[9px] tracking-widest text-white/75">
                      TERRA / 0{index + 1}
                    </span>
                  </figure>
                </article>
              </Reveal>
            );
          })}

          <div className="border-t border-[#F4F0E6]/15" />
        </div>
      </div>
    </section>
  );
}