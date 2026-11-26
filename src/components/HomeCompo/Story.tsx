// import { useEffect, useRef, useState } from 'react';

// const PRINCIPLES = [
//   {
//     number: '01',
//     title: 'Engineering first',
//     body: 'Every claim we make is grounded in measurement. Audits precede action; data follows delivery.',
//     image:
//       'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
//     imageAlt: 'Engineer reviewing equipment and system performance',
//     imageCaption: 'Measure before making a change',
//     video:
//       'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//   },
//   {
//     number: '02',
//     title: 'Ecology as economics',
//     body: 'Sustainability that costs the business is unsustainable. We design for both margins and soil.',
//     image:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
//     imageAlt: 'Solar panels generating clean energy',
//     imageCaption: 'Better outcomes can work together',
//     video:
//       'https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4',
//   },
//   {
//     number: '03',
//     title: 'Partnership over projects',
//     body: 'We stay beyond commissioning — training teams, monitoring systems and sharing results honestly.',
//     image:
//       'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1400&q=85',
//     imageAlt: 'Farmer working in a green field',
//     imageCaption: 'Build progress that lasts',
//     video:
//       'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
//   },
// ];

// const IMAGE_POINTS = [
//   { x: 23, y: 62 },
//   { x: 50, y: 38 },
//   { x: 77, y: 62 },
// ];

// const TRAVELER_POINTS = [
//   { x: 12, y: 79 },
//   { x: 40, y: 48 },
//   { x: 88, y: 79 },
// ];

// function interpolateRoute(progress: number) {
//   const segment = Math.min(Math.floor(progress), 1);
//   const amount = Math.max(0, Math.min(1, progress - segment));
//   const start = TRAVELER_POINTS[segment];
//   const end = TRAVELER_POINTS[segment + 1];

//   return {
//     x: start.x + (end.x - start.x) * amount,
//     y: start.y + (end.y - start.y) * amount,
//   };
// }

// export function Story() {
//   const [progress, setProgress] = useState(0);
//   const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

//   const sectionRef = useRef<HTMLElement>(null);
//   const principleRefs = useRef<Array<HTMLElement | null>>([]);
//   const galleryRef = useRef<HTMLDivElement>(null);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const activeIndex = Math.min(2, Math.round(progress));
//   const activePrinciple = PRINCIPLES[activeIndex];
//   const traveler = interpolateRoute(progress);
//   const isFullyZoomed = Math.abs(progress - activeIndex) < 0.04;
//   const routeProgress = Math.min(1, progress / 2);

//   // Play the active video only after its image finishes zooming into focus.
//   useEffect(() => {
//     if (!isFullyZoomed) {
//       videoRefs.current.forEach((video) => video?.pause());
//       setPlayingVideoIndex(null);
//       return;
//     }

//     let cancelled = false;

//     const timer = window.setTimeout(() => {
//       const video = videoRefs.current[activeIndex];
//       if (!video) return;

//       video.muted = true;

//       video
//         .play()
//         .then(() => {
//           if (!cancelled) setPlayingVideoIndex(activeIndex);
//         })
//         .catch(() => {
//           if (!cancelled) setPlayingVideoIndex(null);
//         });
//     }, 750);

//     return () => {
//       cancelled = true;
//       window.clearTimeout(timer);
//       videoRefs.current.forEach((video) => video?.pause());
//     };
//   }, [activeIndex, isFullyZoomed]);

//   // Link the principle in focus, traveler, and image sizes to scroll position.
//   useEffect(() => {
//     let frameId = 0;

//     const updateScene = () => {
//       cancelAnimationFrame(frameId);

//       frameId = requestAnimationFrame(() => {
//         const centers = principleRefs.current.map((element) => {
//           if (!element) return null;
//           const bounds = element.getBoundingClientRect();
//           return bounds.top + window.scrollY + bounds.height / 2;
//         });

//         if (centers.some((center) => center === null)) return;

//         const viewportCenter = window.scrollY + window.innerHeight / 2;
//         let nextProgress = 0;

//         if (viewportCenter <= centers[0]!) {
//           nextProgress = 0;
//         } else if (viewportCenter >= centers[2]!) {
//           nextProgress = 2;
//         } else {
//           for (let index = 0; index < 2; index++) {
//             const start = centers[index]!;
//             const end = centers[index + 1]!;

//             if (viewportCenter >= start && viewportCenter <= end) {
//               nextProgress =
//                 index + (viewportCenter - start) / Math.max(1, end - start);
//               break;
//             }
//           }
//         }

//         setProgress((current) =>
//           Math.abs(current - nextProgress) < 0.004 ? current : nextProgress,
//         );

//         const section = sectionRef.current;
//         const gallery = galleryRef.current;

//         if (
//           section &&
//           gallery &&
//           !window.matchMedia('(prefers-reduced-motion: reduce)').matches
//         ) {
//           const bounds = section.getBoundingClientRect();
//           const distance =
//             bounds.top + bounds.height / 2 - window.innerHeight / 2;
//           const offset = Math.max(-16, Math.min(16, distance * -0.02));

//           gallery.style.transform = `translate3d(0, ${offset}px, 0)`;
//         }
//       });
//     };

//     updateScene();
//     window.addEventListener('scroll', updateScene, { passive: true });
//     window.addEventListener('resize', updateScene);

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('scroll', updateScene);
//       window.removeEventListener('resize', updateScene);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#EEECE2] py-14 sm:py-18 lg:py-20"
//     >
//       <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
//         {/* Principles */}
//         <div className="lg:col-span-5">
//           <div className="mb-8 lg:sticky lg:top-24 lg:z-10 lg:mb-0 lg:bg-[#EEECE2] lg:pb-6">
//             <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-600 sm:text-xs">
//               <span className="h-px w-9 bg-forest-600" />
//               Our philosophy
//             </p>

//             <h2 className="font-display text-3xl leading-tight text-forest-800 sm:text-4xl">
//               Progress with
//               <br />
//               purpose.
//             </h2>
//           </div>

//           <div>
//             {PRINCIPLES.map((principle, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <article
//                   key={principle.number}
//                   ref={(element) => {
//                     principleRefs.current[index] = element;
//                   }}
//                   className="flex min-h-[58svh] scroll-mt-28 flex-col justify-center border-t border-forest-800/15 py-8 sm:py-10"
//                 >
//                   <div
//                     className={`origin-left transition-all duration-500 ${
//                       isActive ? 'translate-x-2 opacity-100' : 'opacity-45'
//                     }`}
//                   >
//                     <div className="flex items-center gap-4">
//                       <span
//                         className={`font-mono text-xs tracking-[0.18em] ${
//                           isActive ? 'text-forest-600' : 'text-forest-800/40'
//                         }`}
//                       >
//                         {principle.number}
//                       </span>
//                       <span
//                         className={`h-px transition-all duration-500 ${
//                           isActive
//                             ? 'w-12 bg-forest-600'
//                             : 'w-5 bg-forest-800/25'
//                         }`}
//                       />
//                     </div>

//                     <h3 className="mt-5 font-display text-3xl leading-tight text-forest-800 sm:text-4xl">
//                       {principle.title}
//                     </h3>

//                     <p className="mt-4 max-w-md font-body text-sm leading-7 text-charcoal/75 sm:text-base">
//                       {principle.body}
//                     </p>
//                   </div>
//                 </article>
//               );
//             })}

//             <div className="border-t border-forest-800/15" />
//           </div>
//         </div>

//         {/* Image and video journey */}
//         <div className="lg:col-span-7">
//           <div className="lg:sticky lg:top-0">
//             <div className="relative h-[480px] overflow-hidden sm:h-[600px] lg:h-[100svh]">
//               <div
//                 ref={galleryRef}
//                 className="absolute inset-0 will-change-transform"
//               >
//                 {/* Route connecting the three scenes */}
//                 <svg
//                   aria-hidden="true"
//                   viewBox="0 0 100 100"
//                   preserveAspectRatio="none"
//                   className="pointer-events-none absolute inset-0 h-full w-full"
//                 >
//                   <path
//                     d="M 7 84 C 14 76, 16 62, 23 62 C 35 62, 39 38, 50 38 C 61 38, 65 62, 77 62 C 84 62, 87 76, 94 84"
//                     fill="none"
//                     stroke="rgba(39, 75, 60, 0.22)"
//                     strokeWidth="0.35"
//                     strokeDasharray="1.2 1.8"
//                     pathLength="1000"
//                   />
//                   <path
//                     d="M 7 84 C 14 76, 16 62, 23 62 C 35 62, 39 38, 50 38 C 61 38, 65 62, 77 62 C 84 62, 87 76, 94 84"
//                     fill="none"
//                     stroke="#9D8B5B"
//                     strokeWidth="0.55"
//                     strokeDasharray="1000"
//                     strokeDashoffset={1000 - routeProgress * 1000}
//                     pathLength="1000"
//                   />
//                 </svg>

//                 {PRINCIPLES.map((principle, index) => {
//                   const distance = Math.abs(index - progress);
//                   const imageScale = Math.max(0.48, 1 - distance * 0.48);
//                   const isActive = activeIndex === index;
//                   const showVideo = playingVideoIndex === index;
//                   const point = IMAGE_POINTS[index];

//                   return (
//                     <figure
//                       key={principle.number}
//                       className={`absolute overflow-hidden transition-all duration-700 ease-out ${
//                         isActive ? 'z-20 opacity-100' : 'z-10 opacity-65'
//                       }`}
//                       style={{
//                         left: `${point.x}%`,
//                         top: `${point.y}%`,
//                         width: `${46 * imageScale}%`,
//                         height: `${60 * imageScale}%`,
//                         transform: 'translate(-50%, -50%)',
//                         borderRadius: '48% 52% 55% 45% / 42% 46% 54% 58%',
//                         filter: isActive ? 'saturate(1)' : 'saturate(0.68)',
//                       }}
//                     >
//                       <img
//                         src={principle.image}
//                         alt={principle.imageAlt}
//                         loading={index === 0 ? 'eager' : 'lazy'}
//                         referrerPolicy="no-referrer"
//                         className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                           isActive && !showVideo ? 'opacity-100' : 'opacity-0'
//                         }`}
//                       />

//                       <video
//                         ref={(element) => {
//                           videoRefs.current[index] = element;
//                         }}
//                         src={principle.video}
//                         poster={principle.image}
//                         muted
//                         loop
//                         playsInline
//                         preload="metadata"
//                         onError={() => {
//                           if (index === activeIndex) setPlayingVideoIndex(null);
//                         }}
//                         className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                           isActive && showVideo ? 'opacity-100' : 'opacity-0'
//                         }`}
//                       />

//                       <div
//                         className={`absolute inset-0 transition-opacity duration-500 ${
//                           isActive
//                             ? 'bg-gradient-to-t from-[#081610]/75 via-transparent to-transparent'
//                             : 'bg-[#081610]/15'
//                         }`}
//                       />

//                       <figcaption
//                         className={`absolute bottom-[12%] left-[12%] right-[10%] text-white transition-opacity duration-500 ${
//                           isActive ? 'opacity-100' : 'opacity-0'
//                         }`}
//                       >
//                         <span className="font-mono text-[9px] tracking-[0.18em] text-[#E1D2A7]">
//                           {principle.number} / FIELD NOTES
//                         </span>
//                         <span className="mt-2 block font-display text-xl leading-tight sm:text-2xl">
//                           {principle.imageCaption}
//                         </span>
//                       </figcaption>
//                     </figure>
//                   );
//                 })}

//                 {/* Traveler moves along the route */}
//                 <div
//                   className="absolute z-30 transition-[left,top] duration-300 ease-out"
//                   style={{
//                     left: `${traveler.x}%`,
//                     top: `${traveler.y}%`,
//                     transform: 'translate(-50%, -50%)',
//                   }}
//                   aria-hidden="true"
//                 >
//                   <svg
//                     viewBox="0 0 32 40"
//                     className="h-8 w-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
//                     fill="none"
//                   >
//                     <circle
//                       cx="16"
//                       cy="7"
//                       r="4"
//                       fill="#EEECE2"
//                       stroke="#9D8B5B"
//                       strokeWidth="1.5"
//                     />
//                     <path
//                       d="M16 12v11m0-7-7 5m7-5 7 4m-7 3-6 10m6-10 7 9"
//                       stroke="#EEECE2"
//                       strokeWidth="2.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               <div className="absolute right-5 top-5 z-30 font-mono text-xs tracking-widest text-white/80 sm:right-8 sm:top-8">
//                 {String(activeIndex + 1).padStart(2, '0')}
//                 <span className="mx-2 text-white/45">/</span>
//                 03
//               </div>

//               <p className="absolute bottom-5 right-5 z-30 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/65 sm:bottom-8 sm:right-8">
//                 A considered path forward
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from 'react';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Engineering first',
    body: 'Every claim we make is grounded in measurement. Audits precede action; data follows delivery.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Engineer reviewing equipment and system performance',
    imageCaption: 'Measure before making a change',
  },
  {
    number: '02',
    title: 'Ecology as economics',
    body: 'Sustainability that costs the business is unsustainable. We design for both margins and soil.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Solar panels generating clean energy',
    imageCaption: 'Better outcomes can work together',
  },
  {
    number: '03',
    title: 'Partnership over projects',
    body: 'We stay beyond commissioning — training teams, monitoring systems and sharing results honestly.',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Farmer working in a green field',
    imageCaption: 'Build progress that lasts',
  },
];

const SCENE_POINTS = [
  { x: 24, y: 66 },
  { x: 50, y: 36 },
  { x: 76, y: 66 },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getTravelerPosition(progress: number) {
  const segment = Math.min(Math.floor(progress), SCENE_POINTS.length - 2);
  const amount = clamp(progress - segment, 0, 1);
  const start = SCENE_POINTS[segment];
  const end = SCENE_POINTS[segment + 1];

  return {
    x: start.x + (end.x - start.x) * amount,
    y: start.y + (end.y - start.y) * amount,
  };
}

export function Story() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const principleRefs = useRef<Array<HTMLElement | null>>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  const lastIndex = PRINCIPLES.length - 1;
  const boundedProgress = clamp(progress, 0, lastIndex);
  const activeIndex = Math.round(boundedProgress);
  const traveler = getTravelerPosition(boundedProgress);

  useEffect(() => {
    let frameId = 0;

    const updateScene = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const items = principleRefs.current;

        if (items.length !== PRINCIPLES.length || items.some((item) => !item)) {
          return;
        }

        const viewportAnchor = window.innerHeight * 0.5;
        const centers = items.map((item) => {
          const rect = item!.getBoundingClientRect();
          return rect.top + rect.height / 2;
        });

        let nextProgress = 0;

        if (viewportAnchor <= centers[0]) {
          nextProgress = 0;
        } else if (viewportAnchor >= centers[lastIndex]) {
          nextProgress = lastIndex;
        } else {
          for (let index = 0; index < lastIndex; index += 1) {
            const start = centers[index];
            const end = centers[index + 1];

            if (viewportAnchor >= start && viewportAnchor <= end) {
              const distance = Math.max(1, end - start);
              nextProgress = index + (viewportAnchor - start) / distance;
              break;
            }
          }
        }

        setProgress((current) =>
          Math.abs(current - nextProgress) < 0.002 ? current : nextProgress
        );

        const section = sectionRef.current;
        const gallery = galleryRef.current;

        if (section && gallery) {
          const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;

          if (reduceMotion) {
            gallery.style.transform = 'none';
          } else {
            const rect = section.getBoundingClientRect();
            const drift = clamp(
              (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.015,
              -12,
              12
            );

            gallery.style.transform = `translate3d(0, ${drift}px, 0)`;
          }
        }
      });
    };

    updateScene();
    window.addEventListener('scroll', updateScene, { passive: true });
    window.addEventListener('resize', updateScene);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateScene);
      window.removeEventListener('resize', updateScene);
    };
  }, [lastIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#EEECE2] py-14 sm:py-18 lg:py-20"
    >
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Sticky philosophy heading and scrolling principles */}
        <div className="lg:col-span-5">
          <header className="mb-8 lg:sticky lg:top-8 lg:z-10 lg:mb-0 lg:bg-[#EEECE2] lg:pb-6">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-600 sm:text-xs">
              <span className="h-px w-9 bg-forest-600" />
              Our philosophy
            </p>

            <h2 className="font-display text-3xl leading-[1.08] text-forest-800 sm:text-4xl">
              Engineering done well
              <br />
              protects both margins
              <br />
              and soil.
            </h2>
          </header>

          <div>
            {PRINCIPLES.map((principle, index) => {
              const isActive = activeIndex === index;
              const distance = Math.min(Math.abs(boundedProgress - index), 1);

              return (
                <article
                  key={principle.number}
                  ref={(element) => {
                    principleRefs.current[index] = element;
                  }}
                  className="flex min-h-[58svh] scroll-mt-20 flex-col justify-center border-t border-forest-800/15 py-8 sm:py-10"
                >
                  <div
                    className="origin-left"
                    style={{
                      opacity: 1 - distance * 0.48,
                      transform: `translateX(${isActive ? 8 : 0}px)`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs tracking-[0.18em] ${
                          isActive ? 'text-forest-600' : 'text-forest-800/40'
                        }`}
                      >
                        {principle.number}
                      </span>

                      <span
                        className={`h-px ${
                          isActive
                            ? 'w-12 bg-forest-600'
                            : 'w-5 bg-forest-800/25'
                        }`}
                      />
                    </div>

                    <h3 className="mt-5 font-display text-3xl leading-tight text-forest-800 sm:text-4xl">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-md font-body text-sm leading-7 text-charcoal/75 sm:text-base">
                      {principle.body}
                    </p>
                  </div>
                </article>
              );
            })}

            <div className="border-t border-forest-800/15" />
          </div>
        </div>

        {/* Scroll-synced image journey — full-bleed, no dark block */}
        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-0">
            <div className="relative h-[520px] sm:h-[640px] lg:h-[100svh]">
              <div
                ref={galleryRef}
                className="absolute inset-0 will-change-transform"
              >
                {/* Path — drawn directly on the cream background */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <path
                    d="M 24 66 C 33 66, 40 36, 50 36 S 67 66, 76 66"
                    fill="none"
                    stroke="rgba(39, 75, 60, 0.22)"
                    strokeWidth="0.45"
                    strokeDasharray="1.4 2"
                    vectorEffect="non-scaling-stroke"
                  />

                  <path
                    d="M 24 66 C 33 66, 40 36, 50 36 S 67 66, 76 66"
                    fill="none"
                    stroke="#9D8B5B"
                    strokeWidth="0.6"
                    strokeDasharray="1000"
                    strokeDashoffset={
                      1000 - (boundedProgress / lastIndex) * 1000
                    }
                    pathLength="1000"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Images — free-floating, no card frame */}
                {PRINCIPLES.map((principle, index) => {
                  const distance = Math.min(
                    Math.abs(boundedProgress - index),
                    1
                  );
                  const scale = 1 - distance * 0.3;
                  const opacity = 1 - distance * 0.25;
                  const point = SCENE_POINTS[index];
                  const isActive = index === activeIndex;

                  return (
                    <figure
                      key={principle.number}
                      className="absolute"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        width: `${42 * scale}%`,
                        height: `${56 * scale}%`,
                        opacity,
                        transform: 'translate(-50%, -50%)',
                        filter: `saturate(${1 - distance * 0.3}) brightness(${
                          1 - distance * 0.15
                        })`,
                        zIndex: 20 - Math.round(distance * 10),
                      }}
                    >
                      {/* Off-white frame — like a printed photo on a page */}
                      <div className="relative h-full w-full bg-white p-2 shadow-[0_20px_50px_-25px_rgba(39,75,60,0.35)] sm:p-3">
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            src={principle.image}
                            alt={principle.imageAlt}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 h-full w-full object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                          <figcaption
                            className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-500"
                            style={{ opacity: isActive ? 1 : 0 }}
                          >
                            <span className="font-mono text-[9px] tracking-[0.18em] text-[#E1D2A7]">
                              {principle.number}
                            </span>
                            <span className="mt-1 block font-display text-sm leading-tight text-white sm:text-base">
                              {principle.imageCaption}
                            </span>
                          </figcaption>
                        </div>
                      </div>
                    </figure>
                  );
                })}

                {/* Station dots on the path */}
                {SCENE_POINTS.map((point, i) => (
                  <div
                    key={i}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  >
                    <span
                      className={`block rounded-full border-2 transition-all duration-500 ${
                        i === activeIndex
                          ? 'h-3 w-3 border-[#9D8B5B] bg-[#9D8B5B]'
                          : 'h-2.5 w-2.5 border-forest-800/30 bg-[#EEECE2]'
                      }`}
                    />
                  </div>
                ))}

                {/* Traveller */}
                <div
                  className="absolute z-30"
                  style={{
                    left: `${traveler.x}%`,
                    top: `${traveler.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 32 40"
                    className="h-8 w-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    fill="none"
                  >
                    <circle
                      cx="16"
                      cy="7"
                      r="4"
                      fill="#EEECE2"
                      stroke="#9D8B5B"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 12v11m0-7-7 5m7-5 7 4m-7-1-6 10m6-10 7 9"
                      stroke="#274B3C"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Minimal index — just text on the cream, no chip */}
              <div className="absolute bottom-6 right-6 z-30 text-right">
                <div className="font-display text-4xl leading-none text-forest-800/80">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
                <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-forest-800/40">
                  / {String(PRINCIPLES.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}