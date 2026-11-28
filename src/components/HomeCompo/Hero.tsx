
// import {
//   useState,
//   useCallback,
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   type CSSProperties,
// } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
// } from 'lucide-react';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string[];
//   headline: [string, string, string];
//   headlineScale: number;
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   tag: string;
// };

// const AUTOPLAY_MS = 8000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';
// const RING_LENGTH = 138.2;
// const DESKTOP_MIN = 1024;

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Wind turbines over green hills',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/31079999/',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable', 'future.'],
//     headlineScale: 1,
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     tag: 'Powering progress with purpose',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Lush forest canopy',
//     },
//     video: {
//       src: '/videos/14160939_1920_1080_60fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Clean energy', 'Efficient operations'],
//     headline: ['Use less energy.', 'Achieve', 'more.'],
//     headlineScale: 1,
//     support:
//       'From energy audits to clean energy, we help organisations lower operating costs and build more resilient operations.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'Contact our team', to: '/contact' },
//     caption: 'Efficiency, clean energy, and smarter buildings',
//     tag: 'Smarter buildings, cleaner power',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Sunlight filtering through a forest',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/33234773/',
//       poster:
//         'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['TRANSFORM', 'Karnataka'],
//     headline: ['Growing opportunity.', 'Restoring', 'livelihoods.'],
//     headlineScale: 0.82,
//     support:
//       'Through the TRANSFORM project, we support Karnataka’s coffee and spice producers with sustainable practices and stronger market connections.',
//     primaryCta: { label: 'Discover TRANSFORM', to: '/agriculture' },
//     secondaryCta: { label: 'See our impact', to: '/impact' },
//     caption: 'Working with coffee and spice producers',
//     tag: 'Rooted in Karnataka’s farms',
//   },
// ];

// const HEADLINE_SIZE = 'clamp(2.5rem, min(5.4vw, 9.5svh), 5.5rem)';

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// /* ------------------------------------------------------------------ */
// /*  WAVE ARC GEOMETRY                                                  */
// /*  One function, arcX(y), defines the shape. The clip, glow and echo  */
// /*  lines are all derived from it, so no lines can ever cross.         */
// /*  x and y are fractions of the hero box (0..1).                      */
// /* ------------------------------------------------------------------ */
// const STEPS = 120;
// const ARC_TOP = 0.68; // where the arc meets the top edge
// const ARC_BOTTOM = 0.845; // where the arc lands on the bottom edge
// const ARC_DEPTH = 0.125; // how far the bulge pushes left
// const ARC_TAIL = 2.2; // higher = bottom sweep happens later

// const arcX = (y: number) =>
//   ARC_TOP +
//   (ARC_BOTTOM - ARC_TOP) * Math.pow(y, ARC_TAIL) -
//   ARC_DEPTH * Math.sin(Math.PI * y);

// function arcPoints(w: number, h: number, d = 0) {
//   const pts: Array<[number, number]> = [];
//   for (let i = 0; i <= STEPS; i++) {
//     const y = i / STEPS;
//     pts.push([(arcX(y) - d * Math.sin(Math.PI * y)) * w, y * h]);
//   }
//   return pts;
// }

// const toPath = (pts: Array<[number, number]>) =>
//   pts
//     .map(([x, y], i) => `${i ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)}`)
//     .join(' ');

// function useBox<T extends HTMLElement>() {
//   const ref = useRef<T | null>(null);
//   const [size, setSize] = useState({ w: 0, h: 0 });

//   useLayoutEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const update = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
//     update();
//     const ro = new ResizeObserver(update);
//     ro.observe(el);
//     return () => ro.disconnect();
//   }, []);

//   return [ref, size] as const;
// }

// function ArcDefs({ w, h }: { w: number; h: number }) {
//   const points = arcPoints(w, h);
//   const clip = `${toPath(points)} L ${w} ${h} L ${w} 0 Z`;
//   const leftClip = `M 0 0 L ${points
//     .map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`)
//     .join(' L ')} L 0 ${h} Z`;

//   return (
//     <svg width="0" height="0" className="absolute" aria-hidden="true">
//       <defs>
//         <clipPath id="hero-arc-clip" clipPathUnits="userSpaceOnUse">
//           <path d={clip} />
//         </clipPath>
//         <clipPath id="hero-left-photo-clip" clipPathUnits="userSpaceOnUse">
//           <path d={leftClip} />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// function ArcGlow({ w, h }: { w: number; h: number }) {
//   const edge = toPath(arcPoints(w, h));

//   return (
//     <svg
//       width={w}
//       height={h}
//       viewBox={`0 0 ${w} ${h}`}
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 overflow-visible"
//     >
//       <defs>
//         <linearGradient
//           id="arc-green"
//           gradientUnits="userSpaceOnUse"
//           x1="0"
//           y1="0"
//           x2="0"
//           y2={h}
//         >
//           <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
//           <stop offset="35%" stopColor={GREEN_SOFT} stopOpacity="1" />
//           <stop offset="100%" stopColor={GREEN} stopOpacity="1" />
//         </linearGradient>

//         <filter id="arc-blur" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="3" />
//         </filter>
//         <filter id="arc-blur-wide" x="-40%" y="-20%" width="180%" height="140%">
//           <feGaussianBlur stdDeviation="22" />
//         </filter>
//       </defs>

//       {/* soft green haze outside the edge */}
//       <path
//         d={toPath(arcPoints(w, h, 0.02))}
//         fill="none"
//         stroke="#55C948"
//         strokeWidth="60"
//         opacity="0.18"
//         filter="url(#arc-blur-wide)"
//       />

//       {/* echo lines: same curve pushed outward, converge at top/bottom */}
//       <path
//         d={toPath(arcPoints(w, h, 0.03))}
//         fill="none"
//         stroke="#9CEB62"
//         strokeWidth="1.2"
//         opacity="0.38"
//       />
//       <path
//         d={toPath(arcPoints(w, h, 0.065))}
//         fill="none"
//         stroke="#9CEB62"
//         strokeWidth="1"
//         opacity="0.22"
//       />

//       {/* glowing green edge */}
//       <path
//         d={edge}
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="8"
//         opacity="0.5"
//         filter="url(#arc-blur)"
//       />
//       <path
//         d={edge}
//         fill="none"
//         stroke="url(#arc-green)"
//         strokeWidth="3"
//         strokeLinejoin="round"
//       />

//       {/* moving shimmer */}
//       <path
//         d={edge}
//         pathLength="100"
//         fill="none"
//         stroke="#F2FFE3"
//         strokeWidth="3.5"
//         strokeLinecap="round"
//         strokeDasharray="6 94"
//         filter="url(#arc-blur)"
//         className="hero-shimmer"
//       />
//     </svg>
//   );
// }

// /* Original bottom wave lines, restored as they were */
// function BackdropWaves() {
//   return (
//     <svg
//       viewBox="0 0 1200 300"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[42%] w-[82%] lg:block"
//     >
//       <defs>
//         <linearGradient id="wave-fade" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor="#1E6A3A" stopOpacity="0" />
//           <stop offset="55%" stopColor="#58B94E" stopOpacity="0.42" />
//           <stop offset="100%" stopColor="#9CEB62" stopOpacity="0.4" />
//         </linearGradient>
//       </defs>
//       {[0, 1, 2, 3, 4, 5].map((i) => (
//         <path
//           key={i}
//           d={`M0 ${120 + i * 9} C 320 ${230 + i * 6}, 760 ${
//             200 + i * 5
//           }, 1200 ${230 + i * 11}`}
//           fill="none"
//           stroke="url(#wave-fade)"
//           strokeWidth="1"
//           vectorEffect="non-scaling-stroke"
//         />
//       ))}
//     </svg>
//   );
// }

// function BlurredLeaves() {
//   return (
//     <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
//       <div
//         className="absolute -left-12 bottom-[12%] h-60 w-28 rotate-[38deg] opacity-80 blur-[3px]"
//         style={{
//           borderRadius: '0 100% 0 100%',
//           backgroundImage:
//             'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)',
//         }}
//       />
//       <div
//         className="absolute -left-8 bottom-[-4%] h-44 w-20 rotate-[72deg] opacity-70 blur-[5px]"
//         style={{
//           borderRadius: '0 100% 0 100%',
//           backgroundImage: 'linear-gradient(135deg, #5FBF3C 0%, #1F5E21 100%)',
//         }}
//       />
//     </div>
//   );
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
//   const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const [boxRef, { w, h }] = useBox<HTMLDivElement>();
//   const isDesktop = w >= DESKTOP_MIN && h > 0;

//   const go = useCallback((direction: 1 | -1) => {
//     setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;
//       if (index === active && isPlaying && !failedVideos.has(index)) {
//         video.muted = true;
//         video.play().catch(() => undefined);
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, isPlaying, failedVideos]);

//   useEffect(() => {
//     if (!isPlaying) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(timer);
//   }, [active, isPlaying, go]);

//   const slide = SLIDES[active];

//   const markVideoReady = (index: number) =>
//     setReadyVideos((current) => new Set(current).add(index));
//   const markVideoFailed = (index: number) =>
//     setFailedVideos((current) => new Set(current).add(index));

//   const clipStyle = useMemo<CSSProperties | undefined>(
//     () => (isDesktop ? { clipPath: 'url(#hero-arc-clip)' } : undefined),
//     [isDesktop]
//   );

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#041F18] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured highlights"
//     >
//       {/* background */}
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_35%,#0B3C2B_0%,#06271D_46%,#041B15_100%)]" />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
//         style={{ clipPath: 'url(#hero-left-photo-clip)' }}
//       >
//         <img
//           src={SLIDES[1].image.src}
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
//         />
//         <div className="absolute inset-0 bg-[#041F18]/40" />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'radial-gradient(ellipse at top left, rgba(14, 23, 20, 0.58) 0%, rgba(3, 18, 14, 0.28) 30%, transparent 68%)',
//           }}
//         />
//       </div>
//       <BackdropWaves />
//       <BlurredLeaves />

//       {/* ---------- ARC MEDIA PANEL ---------- */}
//       <div ref={boxRef} className="absolute inset-0 z-10">
//         {isDesktop && <ArcDefs w={w} h={h} />}

//         <div className="absolute inset-0 overflow-hidden" style={clipStyle}>
//           <div className="absolute inset-0 lg:left-[54%]">
//             {SLIDES.map((item, index) => {
//               const isActive = index === active;
//               const videoIsVisible =
//                 isActive && readyVideos.has(index) && !failedVideos.has(index);

//               return (
//                 <div
//                   key={item.image.src}
//                   aria-hidden={!isActive}
//                   className={`absolute inset-0 transition-opacity duration-1000 ${
//                     isActive ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <div
//                     className={`absolute inset-0 transition-transform ease-out motion-reduce:transition-none ${
//                       isActive
//                         ? 'scale-[1.08] duration-[9000ms]'
//                         : 'scale-100 duration-[1200ms]'
//                     }`}
//                   >
//                     <img
//                       src={item.image.src}
//                       alt={isActive ? item.image.alt : ''}
//                       className="absolute inset-0 h-full w-full object-cover"
//                     />
//                     <video
//                       ref={(element) => {
//                         videoRefs.current[index] = element;
//                       }}
//                       src={item.video.src}
//                       poster={item.video.poster}
//                       muted
//                       loop
//                       playsInline
//                       preload={index === 0 ? 'auto' : 'metadata'}
//                       autoPlay={isActive && isPlaying}
//                       onCanPlay={() => markVideoReady(index)}
//                       onError={() => markVideoFailed(index)}
//                       className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                         videoIsVisible ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="absolute inset-0 bg-[#041F18]/70 lg:hidden" />
//           <div className="absolute inset-0 hidden bg-gradient-to-r from-[#041F18]/48 via-[#041F18]/12 to-transparent lg:block" />
//           <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#041F18]/60 to-transparent" />
//         </div>

//         {isDesktop && <ArcGlow w={w} h={h} />}
//       </div>

//       {/* floating tag chip */}
//       <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
//         <div className="shell relative h-full">
//           <span
//             key={`tag-${active}`}
//             className="hero-chip-in absolute bottom-[19%] right-0 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#06151F]/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
//             style={{ animationDelay: '300ms' }}
//           >
//             <Leaf size={18} style={{ color: GREEN }} />
//             {slide.tag}
//           </span>
//         </div>
//       </div>

//       {/* ---------- TEXT CONTENT ---------- */}
//       <div className="shell relative z-30 flex min-h-[clamp(700px,100svh,920px)] items-center pb-28 pt-28 sm:pb-28 lg:pt-32">
//         <div className="grid w-full max-w-2xl lg:max-w-[54%]">
//           {SLIDES.map((item, index) => {
//             const isActive = index === active;
//             const Heading = index === 0 ? 'h1' : 'h2';

//             return (
//               <div
//                 key={item.caption}
//                 aria-hidden={!isActive}
//                 className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                   isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                 }`}
//               >
//                 <p
//                   className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300 sm:text-xs ${riseClass(
//                     isActive
//                   )}`}
//                   style={riseStyle(isActive, 100)}
//                 >
//                   <span
//                     className="mr-2 h-[3px] w-12 rounded-full"
//                     style={{ backgroundColor: GREEN }}
//                   />
//                   {item.eyebrow.map((label, i) => (
//                     <span key={label} className="flex items-center gap-3">
//                       {i > 0 && (
//                         <span
//                           className="h-1.5 w-1.5 rounded-full"
//                           style={{ backgroundColor: GREEN }}
//                         />
//                       )}
//                       {label}
//                     </span>
//                   ))}
//                 </p>

//                 <Heading
//                   className="font-display font-normal leading-[0.99] tracking-[-0.035em]"
//                   style={{
//                     fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                   }}
//                 >
//                   {item.headline.map((line, i) => (
//                     <span key={line} className="block overflow-hidden pb-[0.06em]">
//                       <span
//                         className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                           isActive ? 'translate-y-0' : 'translate-y-[110%]'
//                         } ${i === 1                         ? 'bg-clip-text text-transparent italic' : 'text-white'}`}
//                         style={{
//                           transitionDelay: isActive ? `${180 + i * 120}ms` : '0ms',
//                           ...(i === 1
//                             ? {
//                                 backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                               }
//                             : null),
//                         }}
//                       >
//                         {line}
//                       </span>
//                     </span>
//                   ))}
//                 </Heading>

//                 <p
//                   className={`mt-6 max-w-[34rem] text-sm leading-relaxed text-white/75 sm:text-base lg:text-[1.05rem] ${riseClass(
//                     isActive
//                   )}`}
//                   style={riseStyle(isActive, 500)}
//                 >
//                   {item.support}
//                 </p>

//                 <div
//                   className={`mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 ${riseClass(
//                     isActive
//                   )}`}
//                   style={riseStyle(isActive, 620)}
//                 >
//                   <Link
//                     to={item.primaryCta.to}
//                     tabIndex={isActive ? 0 : -1}
//                     className="group inline-flex items-center gap-4 rounded-full px-7 py-3.5 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.4)]"
//                     style={{
//                       backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                     }}
//                   >
//                     {item.primaryCta.label}
//                     <ArrowRight
//                       size={18}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </Link>

//                   <Link
//                     to={item.secondaryCta.to}
//                     tabIndex={isActive ? 0 : -1}
//                     className="rounded-full border border-white/55 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-[#7ED957] hover:bg-white/10 hover:text-[#B5F27E]"
//                   >
//                     {item.secondaryCta.label}
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ---------- CONTROLS ---------- */}
//       <div className="absolute bottom-0 left-0 z-40 w-full px-5 pb-5 sm:px-10 sm:pb-6 lg:px-16 xl:px-24">
//         <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 border-t border-white/20 pt-3 sm:pt-4">
//           <div className="flex min-w-0 items-center gap-4">
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//               className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full text-white transition-colors hover:text-[#07110D]"
//             >
//               <svg
//                 viewBox="0 0 48 48"
//                 className="absolute inset-0 h-full w-full -rotate-90"
//                 aria-hidden="true"
//               >
//                 <circle
//                   cx="24"
//                   cy="24"
//                   r="22"
//                   fill="none"
//                   stroke={GREEN}
//                   strokeOpacity="0.4"
//                   strokeWidth="1.5"
//                 />
//                 <circle
//                   key={`ring-${active}`}
//                   cx="24"
//                   cy="24"
//                   r="22"
//                   fill="none"
//                   stroke={GREEN}
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeDasharray={RING_LENGTH}
//                   className="hero-ring"
//                   style={{
//                     animationDuration: `${AUTOPLAY_MS}ms`,
//                     animationPlayState: isPlaying ? 'running' : 'paused',
//                   }}
//                 />
//               </svg>
//               <span className="absolute inset-[4px] rounded-full bg-[#7ED957] opacity-0 transition-opacity group-hover:opacity-100" />
//               <span className="relative">
//                 {isPlaying ? (
//                   <Pause size={16} fill="currentColor" />
//                 ) : (
//                   <Play size={16} fill="currentColor" className="ml-0.5" />
//                 )}
//               </span>
//             </button>

//             <span className="hidden h-6 w-px bg-white/25 sm:block" />
//             <span
//               key={`caption-${active}`}
//               className="hero-chip-in truncate text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs"
//             >
//               {slide.caption}
//             </span>
//           </div>

//           <div className="hidden items-center gap-6 sm:flex lg:absolute lg:left-[57%] lg:-translate-x-1/2">
//             {SLIDES.map((item, index) => {
//               const isCurrent = index === active;
//               return (
//                 <button
//                   key={item.caption}
//                   type="button"
//                   onClick={() => setActive(index)}
//                   aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                   aria-current={isCurrent ? 'true' : undefined}
//                   className="group flex h-8 items-center"
//                 >
//                   <span
//                     className={`font-heading text-xs font-semibold transition-colors ${
//                       isCurrent
//                         ? 'text-white'
//                         : 'text-white/45 group-hover:text-white/80'
//                     }`}
//                   >
//                     0{index + 1}
//                   </span>
//                   <span
//                     className={`ml-3 h-[3px] rounded-full transition-all duration-500 ${
//                       isCurrent
//                         ? 'w-16 bg-[#7ED957] shadow-[0_0_12px_rgba(126,217,87,0.7)]'
//                         : 'w-5 bg-white/30 group-hover:bg-white/60'
//                     }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           <div className="flex shrink-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => go(-1)}
//               aria-label="Previous slide"
//               className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/60 text-white backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               type="button"
//               onClick={() => go(1)}
//               aria-label="Next slide"
//               className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/60 text-white backdrop-blur-sm transition-all hover:translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroChipIn {
//           from { opacity: 0; transform: translateX(18px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes heroRing {
//           from { stroke-dashoffset: ${RING_LENGTH}; }
//           to { stroke-dashoffset: 0; }
//         }
//         @keyframes heroShimmer {
//           from { stroke-dashoffset: 6; }
//           to { stroke-dashoffset: -94; }
//         }
//         .hero-chip-in {
//           opacity: 0;
//           animation: heroChipIn 700ms cubic-bezier(0.16,1,0.3,1) forwards;
//         }
//         .hero-ring {
//           stroke-dashoffset: ${RING_LENGTH};
//           animation-name: heroRing;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         .hero-shimmer {
//           animation: heroShimmer 6s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-chip-in { animation: none; opacity: 1; }
//           .hero-shimmer { animation: none; }
//           .hero-ring { animation: none; stroke-dashoffset: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }



// import {
//   useState,
//   useCallback,
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   type CSSProperties,
// } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
// } from 'lucide-react';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string[];
//   headline: [string, string, string];
//   headlineScale: number;
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   tag: string;
// };

// const AUTOPLAY_MS = 9000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';
// const RING_LENGTH = 138.2;
// const DESKTOP_MIN = 1024;

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Wind turbines over green hills',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/31079999/',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable', 'future.'],
//     headlineScale: 1,
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     tag: 'Powering progress with purpose',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Industrial energy monitoring screens',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/3195394/',
//       poster:
//         'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Energy', 'Efficiency', 'Audit'],
//     headline: ['Cut the waste.', 'Boost the', 'performance.'],
//     headlineScale: 1,
//     support:
//       'Data-driven efficiency audits and upgrades that lower operating costs, reduce consumption, and unlock measurable performance gains.',
//     primaryCta: { label: 'Book an energy audit', to: '/solutions/energy-efficiency' },
//     secondaryCta: { label: 'How it works', to: '/solutions' },
//     caption: 'Energy efficiency and audit',
//     tag: 'Lower costs, higher output',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Solar panels under bright sky',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/2098989/',
//       poster:
//         'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Renewables', 'Solar', 'Resilience'],
//     headline: ['Clean energy.', 'Built to', 'last.'],
//     headlineScale: 1,
//     support:
//       'Scalable renewable energy installations that future-proof your operations and accelerate the transition to a low-carbon economy.',
//     primaryCta: { label: 'Explore clean energy', to: '/solutions/clean-energy' },
//     secondaryCta: { label: 'Talk to our team', to: '/contact' },
//     caption: 'Clean energy installations',
//     tag: 'Renewable, resilient, ready',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Modern smart building facade',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/3255275/',
//       poster:
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Smart buildings', 'IBMS', 'Automation'],
//     headline: ['One building.', 'Total', 'control.'],
//     headlineScale: 1,
//     support:
//       'Unify and automate your facility’s core operations with intelligent building management systems for safer, smarter, more efficient spaces.',
//     primaryCta: { label: 'Discover IBMS', to: '/solutions/ibms' },
//     secondaryCta: { label: 'See the platform', to: '/solutions' },
//     caption: 'Intelligent building management',
//     tag: 'Smarter, safer buildings',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Digital circuitry and data flow',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/3141208/',
//       poster:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Digital', 'Data', 'Transformation'],
//     headline: ['Digital tools.', 'Real', 'outcomes.'],
//     headlineScale: 1,
//     support:
//       'Empower business transformation with cutting-edge digital tools and data-driven architectures built for scale and clarity.',
//     primaryCta: { label: 'Explore digital', to: '/solutions/digital' },
//     secondaryCta: { label: 'Our approach', to: '/about' },
//     caption: 'Digital solutions and analytics',
//     tag: 'Data-driven transformation',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Robotic automation on a production line',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/2818543/',
//       poster:
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Industry 4.0', 'Robotics', 'Automation'],
//     headline: ['Automate.', 'Accelerate.', 'Scale.'],
//     headlineScale: 1,
//     support:
//       'Streamline production lines and accelerate output with state-of-the-art robotic and industrial automation systems.',
//     primaryCta: { label: 'Explore automation', to: '/solutions/automation' },
//     secondaryCta: { label: 'Request a demo', to: '/contact' },
//     caption: 'Industrial automation',
//     tag: 'Precision at production speed',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Prefabricated modular structure',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/2818543/',
//       poster:
//         'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Pre-fab', 'Modular', 'Speed'],
//     headline: ['Build faster.', 'Build', 'smarter.'],
//     headlineScale: 0.96,
//     support:
//       'Accelerate construction timelines with durable, high-quality, rapidly deployable prefabricated structures.',
//     primaryCta: { label: 'Explore pre-fab', to: '/solutions/prefab' },
//     secondaryCta: { label: 'See projects', to: '/impact' },
//     caption: 'Pre-fabricated structures',
//     tag: 'Deployable at speed',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Precision engineered metal components',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/3195394/',
//       poster:
//         'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Press components', 'Precision', 'Durability'],
//     headline: ['Built to', 'withstand.', 'Engineered to last.'],
//     headlineScale: 0.86,
//     support:
//       'Secure precision and heavy-duty reliability with custom-engineered press components for the most demanding manufacturing needs.',
//     primaryCta: { label: 'Explore components', to: '/solutions/press-components' },
//     secondaryCta: { label: 'Get a quote', to: '/contact' },
//     caption: 'Precision press components',
//     tag: 'Heavy-duty reliability',
//   },
// ];

// const HEADLINE_SIZE = 'clamp(2.5rem, min(5.4vw, 9.5svh), 5.5rem)';

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// /* ------------------------------------------------------------------ */
// /*  WAVE ARC GEOMETRY                                                  */
// /* ------------------------------------------------------------------ */
// const STEPS = 120;
// const ARC_TOP = 0.68;
// const ARC_BOTTOM = 0.845;
// const ARC_DEPTH = 0.125;
// const ARC_TAIL = 2.2;

// const arcX = (y: number) =>
//   ARC_TOP +
//   (ARC_BOTTOM - ARC_TOP) * Math.pow(y, ARC_TAIL) -
//   ARC_DEPTH * Math.sin(Math.PI * y);

// function arcPoints(w: number, h: number, d = 0) {
//   const pts: Array<[number, number]> = [];
//   for (let i = 0; i <= STEPS; i++) {
//     const y = i / STEPS;
//     pts.push([(arcX(y) - d * Math.sin(Math.PI * y)) * w, y * h]);
//   }
//   return pts;
// }

// const toPath = (pts: Array<[number, number]>) =>
//   pts
//     .map(([x, y], i) => `${i ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)}`)
//     .join(' ');

// function useBox<T extends HTMLElement>() {
//   const ref = useRef<T | null>(null);
//   const [size, setSize] = useState({ w: 0, h: 0 });

//   useLayoutEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const update = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
//     update();
//     const ro = new ResizeObserver(update);
//     ro.observe(el);
//     return () => ro.disconnect();
//   }, []);

//   return [ref, size] as const;
// }

// function ArcDefs({ w, h }: { w: number; h: number }) {
//   const points = arcPoints(w, h);
//   const clip = `${toPath(points)} L ${w} ${h} L ${w} 0 Z`;
//   const leftClip = `M 0 0 L ${points
//     .map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`)
//     .join(' L ')} L 0 ${h} Z`;

//   return (
//     <svg width="0" height="0" className="absolute" aria-hidden="true">
//       <defs>
//         <clipPath id="hero-arc-clip" clipPathUnits="userSpaceOnUse">
//           <path d={clip} />
//         </clipPath>
//         <clipPath id="hero-left-photo-clip" clipPathUnits="userSpaceOnUse">
//           <path d={leftClip} />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// function ArcGlow({ w, h }: { w: number; h: number }) {
//   const edge = toPath(arcPoints(w, h));

//   return (
//     <svg
//       width={w}
//       height={h}
//       viewBox={`0 0 ${w} ${h}`}
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 overflow-visible"
//     >
//       <defs>
//         <linearGradient
//           id="arc-green"
//           gradientUnits="userSpaceOnUse"
//           x1="0"
//           y1="0"
//           x2="0"
//           y2={h}
//         >
//           <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
//           <stop offset="35%" stopColor={GREEN_SOFT} stopOpacity="1" />
//           <stop offset="100%" stopColor={GREEN} stopOpacity="1" />
//         </linearGradient>

//         <filter id="arc-blur" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="3" />
//         </filter>
//         <filter id="arc-blur-wide" x="-40%" y="-20%" width="180%" height="140%">
//           <feGaussianBlur stdDeviation="22" />
//         </filter>
//       </defs>

//       <path
//         d={toPath(arcPoints(w, h, 0.02))}
//         fill="none"
//         stroke="#55C948"
//         strokeWidth="60"
//         opacity="0.18"
//         filter="url(#arc-blur-wide)"
//       />

//       <path
//         d={toPath(arcPoints(w, h, 0.03))}
//         fill="none"
//         stroke="#9CEB62"
//         strokeWidth="1.2"
//         opacity="0.38"
//       />
//       <path
//         d={toPath(arcPoints(w, h, 0.065))}
//         fill="none"
//         stroke="#9CEB62"
//         strokeWidth="1"
//         opacity="0.22"
//       />

//       <path
//         d={edge}
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="8"
//         opacity="0.5"
//         filter="url(#arc-blur)"
//       />
//       <path
//         d={edge}
//         fill="none"
//         stroke="url(#arc-green)"
//         strokeWidth="3"
//         strokeLinejoin="round"
//       />

//       <path
//         d={edge}
//         pathLength="100"
//         fill="none"
//         stroke="#F2FFE3"
//         strokeWidth="3.5"
//         strokeLinecap="round"
//         strokeDasharray="6 94"
//         filter="url(#arc-blur)"
//         className="hero-shimmer"
//       />
//     </svg>
//   );
// }

// function BackdropWaves() {
//   return (
//     <svg
//       viewBox="0 0 1200 300"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[42%] w-[82%] lg:block"
//     >
//       <defs>
//         <linearGradient id="wave-fade" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor="#1E6A3A" stopOpacity="0" />
//           <stop offset="55%" stopColor="#58B94E" stopOpacity="0.42" />
//           <stop offset="100%" stopColor="#9CEB62" stopOpacity="0.4" />
//         </linearGradient>
//       </defs>
//       {[0, 1, 2, 3, 4, 5].map((i) => (
//         <path
//           key={i}
//           d={`M0 ${120 + i * 9} C 320 ${230 + i * 6}, 760 ${
//             200 + i * 5
//           }, 1200 ${230 + i * 11}`}
//           fill="none"
//           stroke="url(#wave-fade)"
//           strokeWidth="1"
//           vectorEffect="non-scaling-stroke"
//         />
//       ))}
//     </svg>
//   );
// }

// function BlurredLeaves() {
//   return (
//     <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
//       <div
//         className="absolute -left-12 bottom-[12%] h-60 w-28 rotate-[38deg] opacity-80 blur-[3px]"
//         style={{
//           borderRadius: '0 100% 0 100%',
//           backgroundImage:
//             'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)',
//         }}
//       />
//       <div
//         className="absolute -left-8 bottom-[-4%] h-44 w-20 rotate-[72deg] opacity-70 blur-[5px]"
//         style={{
//           borderRadius: '0 100% 0 100%',
//           backgroundImage: 'linear-gradient(135deg, #5FBF3C 0%, #1F5E21 100%)',
//         }}
//       />
//     </div>
//   );
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
//   const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const [boxRef, { w, h }] = useBox<HTMLDivElement>();
//   const isDesktop = w >= DESKTOP_MIN && h > 0;

//   const go = useCallback((direction: 1 | -1) => {
//     setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;
//       if (index === active && isPlaying && !failedVideos.has(index)) {
//         video.muted = true;
//         video.play().catch(() => undefined);
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, isPlaying, failedVideos]);

//   useEffect(() => {
//     if (!isPlaying) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(timer);
//   }, [active, isPlaying, go]);

//   const slide = SLIDES[active];

//   const markVideoReady = (index: number) =>
//     setReadyVideos((current) => new Set(current).add(index));
//   const markVideoFailed = (index: number) =>
//     setFailedVideos((current) => new Set(current).add(index));

//   const clipStyle = useMemo<CSSProperties | undefined>(
//     () => (isDesktop ? { clipPath: 'url(#hero-arc-clip)' } : undefined),
//     [isDesktop]
//   );

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#041F18] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured highlights"
//     >
//       {/* background */}
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_35%,#0B3C2B_0%,#06271D_46%,#041B15_100%)]" />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
//         style={{ clipPath: 'url(#hero-left-photo-clip)' }}
//       >
//         <img
//           src={SLIDES[1].image.src}
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
//         />
//         <div className="absolute inset-0 bg-[#041F18]/40" />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'radial-gradient(ellipse at top left, rgba(14, 23, 20, 0.58) 0%, rgba(3, 18, 14, 0.28) 30%, transparent 68%)',
//           }}
//         />
//       </div>
//       <BackdropWaves />
//       <BlurredLeaves />

//       {/* ---------- ARC MEDIA PANEL ---------- */}
//       <div ref={boxRef} className="absolute inset-0 z-10">
//         {isDesktop && <ArcDefs w={w} h={h} />}

//         <div className="absolute inset-0 overflow-hidden" style={clipStyle}>
//           <div className="absolute inset-0 lg:left-[54%]">
//             {SLIDES.map((item, index) => {
//               const isActive = index === active;
//               const videoIsVisible =
//                 isActive && readyVideos.has(index) && !failedVideos.has(index);

//               return (
//                 <div
//                   key={item.image.src}
//                   aria-hidden={!isActive}
//                   className={`absolute inset-0 transition-opacity duration-1000 ${
//                     isActive ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <div
//                     className={`absolute inset-0 transition-transform ease-out motion-reduce:transition-none ${
//                       isActive
//                         ? 'scale-[1.08] duration-[9000ms]'
//                         : 'scale-100 duration-[1200ms]'
//                     }`}
//                   >
//                     <img
//                       src={item.image.src}
//                       alt={isActive ? item.image.alt : ''}
//                       className="absolute inset-0 h-full w-full object-cover"
//                     />
//                     <video
//                       ref={(element) => {
//                         videoRefs.current[index] = element;
//                       }}
//                       src={item.video.src}
//                       poster={item.video.poster}
//                       muted
//                       loop
//                       playsInline
//                       preload={index === 0 ? 'auto' : 'metadata'}
//                       autoPlay={isActive && isPlaying}
//                       onCanPlay={() => markVideoReady(index)}
//                       onError={() => markVideoFailed(index)}
//                       className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                         videoIsVisible ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="absolute inset-0 bg-[#041F18]/70 lg:hidden" />
//           <div className="absolute inset-0 hidden bg-gradient-to-r from-[#041F18]/48 via-[#041F18]/12 to-transparent lg:block" />
//           <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#041F18]/60 to-transparent" />
//         </div>

//         {isDesktop && <ArcGlow w={w} h={h} />}
//       </div>

//       {/* floating tag chip */}
//       <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
//         <div className="shell relative h-full">
//           <span
//             key={`tag-${active}`}
//             className="hero-chip-in absolute bottom-[19%] right-0 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#06151F]/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
//             style={{ animationDelay: '300ms' }}
//           >
//             <Leaf size={18} style={{ color: GREEN }} />
//             {slide.tag}
//           </span>
//         </div>
//       </div>

//       {/* ---------- TEXT CONTENT ---------- */}
//       <div className="shell relative z-30 flex min-h-[clamp(700px,100svh,920px)] items-center pb-28 pt-28 sm:pb-28 lg:pt-32">
//         <div className="grid w-full max-w-2xl lg:max-w-[54%]">
//           {SLIDES.map((item, index) => {
//             const isActive = index === active;
//             const Heading = index === 0 ? 'h1' : 'h2';

//             return (
//               <div
//                 key={item.caption}
//                 aria-hidden={!isActive}
//                 className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                   isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                 }`}
//               >
//                 <p
//                   className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300 sm:text-xs ${riseClass(
//                     isActive
//                   )}`}
//                   style={riseStyle(isActive, 100)}
//                 >
//                   <span
//                     className="mr-2 h-[3px] w-12 rounded-full"
//                     style={{ backgroundColor: GREEN }}
//                   />
//                   {item.eyebrow.map((label, i) => (
//                     <span key={label} className="flex items-center gap-3">
//                       {i > 0 && (
//                         <span
//                           className="h-1.5 w-1.5 rounded-full"
//                           style={{ backgroundColor: GREEN }}
//                         />
//                       )}
//                       {label}
//                     </span>
//                   ))}
//                 </p>

//                 <Heading
//                   className="font-display font-normal leading-[0.99] tracking-[-0.035em]"
//                   style={{
//                     fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                   }}
//                 >
//                   {item.headline.map((line, i) => (
//                     <span key={line} className="block overflow-hidden pb-[0.06em]">
//                       <span
//                         className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                           isActive ? 'translate-y-0' : 'translate-y-[110%]'
//                         } ${i === 1 ? 'bg-clip-text text-transparent italic' : 'text-white'}`}
//                         style={{
//                           transitionDelay: isActive ? `${180 + i * 120}ms` : '0ms',
//                           ...(i === 1
//                             ? {
//                                 backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                               }
//                             : null),
//                         }}
//                       >
//                         {line}
//                       </span>
//                     </span>
//                   ))}
//                 </Heading>

//                 <p
//                   className={`mt-6 max-w-[34rem] text-sm leading-relaxed text-white/75 sm:text-base lg:text-[1.05rem] ${riseClass(
//                     isActive
//                   )}`}
//                   style={riseStyle(isActive, 500)}
//                 >
//                   {item.support}
//                 </p>

//                 <div
//                   className={`mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 ${riseClass(
//                     isActive
//                   )}`}
//                   style={riseStyle(isActive, 620)}
//                 >
//                   <Link
//                     to={item.primaryCta.to}
//                     tabIndex={isActive ? 0 : -1}
//                     className="group inline-flex items-center gap-4 rounded-full px-7 py-3.5 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.4)]"
//                     style={{
//                       backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                     }}
//                   >
//                     {item.primaryCta.label}
//                     <ArrowRight
//                       size={18}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </Link>

//                   <Link
//                     to={item.secondaryCta.to}
//                     tabIndex={isActive ? 0 : -1}
//                     className="rounded-full border border-white/55 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-[#7ED957] hover:bg-white/10 hover:text-[#B5F27E]"
//                   >
//                     {item.secondaryCta.label}
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ---------- CONTROLS ---------- */}
//       <div className="absolute bottom-0 left-0 z-40 w-full px-5 pb-5 sm:px-10 sm:pb-6 lg:px-16 xl:px-24">
//         <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 border-t border-white/20 pt-3 sm:pt-4">
//           <div className="flex min-w-0 items-center gap-4">
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//               className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full text-white transition-colors hover:text-[#07110D]"
//             >
//               <svg
//                 viewBox="0 0 48 48"
//                 className="absolute inset-0 h-full w-full -rotate-90"
//                 aria-hidden="true"
//               >
//                 <circle
//                   cx="24"
//                   cy="24"
//                   r="22"
//                   fill="none"
//                   stroke={GREEN}
//                   strokeOpacity="0.4"
//                   strokeWidth="1.5"
//                 />
//                 <circle
//                   key={`ring-${active}`}
//                   cx="24"
//                   cy="24"
//                   r="22"
//                   fill="none"
//                   stroke={GREEN}
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeDasharray={RING_LENGTH}
//                   className="hero-ring"
//                   style={{
//                     animationDuration: `${AUTOPLAY_MS}ms`,
//                     animationPlayState: isPlaying ? 'running' : 'paused',
//                   }}
//                 />
//               </svg>
//               <span className="absolute inset-[4px] rounded-full bg-[#7ED957] opacity-0 transition-opacity group-hover:opacity-100" />
//               <span className="relative">
//                 {isPlaying ? (
//                   <Pause size={16} fill="currentColor" />
//                 ) : (
//                   <Play size={16} fill="currentColor" className="ml-0.5" />
//                 )}
//               </span>
//             </button>

//             <span className="hidden h-6 w-px bg-white/25 sm:block" />
//             <span
//               key={`caption-${active}`}
//               className="hero-chip-in truncate text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs"
//             >
//               {slide.caption}
//             </span>
//           </div>

//           {/* Compact dot indicators for 8 slides */}
//           <div className="hidden items-center gap-2 sm:flex lg:absolute lg:left-[57%] lg:-translate-x-1/2">
//             {SLIDES.map((item, index) => {
//               const isCurrent = index === active;
//               return (
//                 <button
//                   key={item.caption}
//                   type="button"
//                   onClick={() => setActive(index)}
//                   aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                   aria-current={isCurrent ? 'true' : undefined}
//                   className="group grid h-8 place-items-center px-0.5"
//                 >
//                   <span
//                     className={`rounded-full transition-all duration-500 ${
//                       isCurrent
//                         ? 'h-[3px] w-8 bg-[#7ED957] shadow-[0_0_12px_rgba(126,217,87,0.7)]'
//                         : 'h-[3px] w-3 bg-white/30 group-hover:bg-white/60'
//                     }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           <div className="flex shrink-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => go(-1)}
//               aria-label="Previous slide"
//               className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/60 text-white backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               type="button"
//               onClick={() => go(1)}
//               aria-label="Next slide"
//               className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/60 text-white backdrop-blur-sm transition-all hover:translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroChipIn {
//           from { opacity: 0; transform: translateX(18px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes heroRing {
//           from { stroke-dashoffset: ${RING_LENGTH}; }
//           to { stroke-dashoffset: 0; }
//         }
//         @keyframes heroShimmer {
//           from { stroke-dashoffset: 6; }
//           to { stroke-dashoffset: -94; }
//         }
//         .hero-chip-in {
//           opacity: 0;
//           animation: heroChipIn 700ms cubic-bezier(0.16,1,0.3,1) forwards;
//         }
//         .hero-ring {
//           stroke-dashoffset: ${RING_LENGTH};
//           animation-name: heroRing;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         .hero-shimmer {
//           animation: heroShimmer 6s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-chip-in { animation: none; opacity: 1; }
//           .hero-shimmer { animation: none; }
//           .hero-ring { animation: none; stroke-dashoffset: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }



// import {
//   useState,
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   type CSSProperties,
// } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
// } from 'lucide-react';

// type Slide = {
//   video: { src: string; poster: string };
//   fallback: string;
//   eyebrow: string[];
//   headline: [string, string, string];
//   headlineScale: number;
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   tag: string;
//   accent: string;
// };

// const AUTOPLAY_MS = 9000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';
// const RING = 125.6;

// const SLIDES: Slide[] = [
//   {
//     video: {
//       src: '/videos/intro.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable', 'future.'],
//     headlineScale: 1,
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     tag: 'Powering progress with purpose',
//     accent: '126,217,87',
//   },
//   {
//     video: {
//       src: '/videos/energy-audit.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Energy', 'Efficiency', 'Audit'],
//     headline: ['Cut the waste.', 'Boost the', 'performance.'],
//     headlineScale: 1,
//     support:
//       'Data-driven efficiency audits and upgrades that lower operating costs, reduce consumption, and unlock measurable performance gains.',
//     primaryCta: { label: 'Book an energy audit', to: '/solutions/energy-efficiency' },
//     secondaryCta: { label: 'How it works', to: '/solutions' },
//     caption: 'Energy efficiency and audit',
//     tag: 'Lower costs, higher output',
//     accent: '168,230,120',
//   },
//   {
//     video: {
//       src: '/videos/solar.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Renewables', 'Solar', 'Resilience'],
//     headline: ['Clean energy.', 'Built to', 'last.'],
//     headlineScale: 1,
//     support:
//       'Scalable renewable energy installations that future-proof your operations and accelerate the transition to a low-carbon economy.',
//     primaryCta: { label: 'Explore clean energy', to: '/solutions/clean-energy' },
//     secondaryCta: { label: 'Talk to our team', to: '/contact' },
//     caption: 'Clean energy installations',
//     tag: 'Renewable, resilient, ready',
//     accent: '255,214,102',
//   },
//   {
//     video: {
//       src: '/videos/smart-building.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Smart buildings', 'IBMS', 'Automation'],
//     headline: ['One building.', 'Total', 'control.'],
//     headlineScale: 1,
//     support:
//       'Unify and automate your facility’s core operations with intelligent building management systems for safer, smarter, more efficient spaces.',
//     primaryCta: { label: 'Discover IBMS', to: '/solutions/ibms' },
//     secondaryCta: { label: 'See the platform', to: '/solutions' },
//     caption: 'Intelligent building management',
//     tag: 'Smarter, safer buildings',
//     accent: '126,190,255',
//   },
//   {
//     video: {
//       src: '/videos/digital-data.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Digital', 'Data', 'Transformation'],
//     headline: ['Digital tools.', 'Real', 'outcomes.'],
//     headlineScale: 1,
//     support:
//       'Empower business transformation with cutting-edge digital tools and data-driven architectures built for scale and clarity.',
//     primaryCta: { label: 'Explore digital', to: '/solutions/digital' },
//     secondaryCta: { label: 'Our approach', to: '/about' },
//     caption: 'Digital solutions and analytics',
//     tag: 'Data-driven transformation',
//     accent: '192,160,255',
//   },
//   {
//     video: {
//       src: '/videos/robotics.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Industry 4.0', 'Robotics', 'Automation'],
//     headline: ['Automate.', 'Accelerate.', 'Scale.'],
//     headlineScale: 1,
//     support:
//       'Streamline production lines and accelerate output with state-of-the-art robotic and industrial automation systems.',
//     primaryCta: { label: 'Explore automation', to: '/solutions/automation' },
//     secondaryCta: { label: 'Request a demo', to: '/contact' },
//     caption: 'Industrial automation',
//     tag: 'Precision at production speed',
//     accent: '255,140,120',
//   },
//   {
//     video: {
//       src: '/videos/prefab.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Pre-fab', 'Modular', 'Speed'],
//     headline: ['Build faster.', 'Build', 'smarter.'],
//     headlineScale: 0.96,
//     support:
//       'Accelerate construction timelines with durable, high-quality, rapidly deployable prefabricated structures.',
//     primaryCta: { label: 'Explore pre-fab', to: '/solutions/prefab' },
//     secondaryCta: { label: 'See projects', to: '/impact' },
//     caption: 'Pre-fabricated structures',
//     tag: 'Deployable at speed',
//     accent: '255,205,140',
//   },
//   {
//     video: {
//       src: '/videos/press-parts.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Press components', 'Precision', 'Durability'],
//     headline: ['Built to', 'withstand.', 'Engineered to last.'],
//     headlineScale: 0.86,
//     support:
//       'Secure precision and heavy-duty reliability with custom-engineered press components for the most demanding manufacturing needs.',
//     primaryCta: { label: 'Explore components', to: '/solutions/press-components' },
//     secondaryCta: { label: 'Get a quote', to: '/contact' },
//     caption: 'Precision press components',
//     tag: 'Heavy-duty reliability',
//     accent: '200,200,210',
//   },
// ];

// const HEADLINE_SIZE = 'clamp(2.4rem, min(5.2vw, 9svh), 5.75rem)';

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// function useParallax() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     const coarse = window.matchMedia('(pointer: coarse)').matches;
//     if (reduce || coarse) return;
//     setEnabled(true);

//     const el = ref.current;
//     if (!el) return;

//     let raf = 0;
//     const onMove = (e: PointerEvent) => {
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(() => {
//         const r = el.getBoundingClientRect();
//         setPos({
//           x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
//           y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
//         });
//       });
//     };
//     el.addEventListener('pointermove', onMove);
//     return () => {
//       el.removeEventListener('pointermove', onMove);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   return [ref, pos, enabled] as const;
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [prev, setPrev] = useState<number | null>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [ready, setReady] = useState<Set<number>>(() => new Set());
//   const [failed, setFailed] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const [parallaxRef, pointer, parallaxOn] = useParallax();

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((cur) => {
//       const next = (cur + dir + SLIDES.length) % SLIDES.length;
//       setPrev(cur);
//       return next;
//     });
//   }, []);

//   const jumpTo = useCallback((index: number) => {
//     setActive((cur) => {
//       if (cur === index) return cur;
//       setPrev(cur);
//       return index;
//     });
//   }, []);

//   useEffect(() => {
//     if (prev === null) return;
//     const t = window.setTimeout(() => setPrev(null), 1200);
//     return () => window.clearTimeout(t);
//   }, [prev]);

//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;
//       const shouldPlay =
//         (i === active || i === prev) && isPlaying && !failed.has(i);
//       if (shouldPlay) {
//         video.muted = true;
//         video.play().catch(() => undefined);
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, prev, isPlaying, failed]);

//   useEffect(() => {
//     if (!isPlaying) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const t = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(t);
//   }, [active, isPlaying, go]);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.target instanceof HTMLElement) {
//         const tag = e.target.tagName;
//         if (tag === 'INPUT' || tag === 'TEXTAREA') return;
//       }
//       if (e.key === 'ArrowRight') go(1);
//       else if (e.key === 'ArrowLeft') go(-1);
//       else if (e.key === ' ') {
//         e.preventDefault();
//         setIsPlaying((p) => !p);
//       } else if (/^[1-8]$/.test(e.key)) jumpTo(Number(e.key) - 1);
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, [go, jumpTo]);

//   const slide = SLIDES[active];
//   const accent = slide.accent;
//   const px = parallaxOn ? pointer.x - 0.5 : 0;
//   const py = parallaxOn ? pointer.y - 0.5 : 0;

//   const markReady = (i: number) => setReady((s) => new Set(s).add(i));
//   const markFailed = (i: number) => setFailed((s) => new Set(s).add(i));

//   const nextIndex = (active + 1) % SLIDES.length;

//   return (
//     <section
//       ref={parallaxRef}
//       className="relative w-full overflow-hidden bg-[#03100B] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured solutions"
//       style={{ ['--accent' as string]: accent }}
//     >
//       <div className="sr-only" aria-live="polite" aria-atomic="true">
//         Slide {active + 1} of {SLIDES.length}: {slide.caption}
//       </div>

//       {/* ---------- MEDIA STAGE ---------- */}
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => {
//           const isActive = index === active;
//           const isPrev = index === prev;
//           const visible = isActive || isPrev;
//           const videoVisible = visible && ready.has(index) && !failed.has(index);
//           const preload: 'auto' | 'metadata' =
//             index === active || index === nextIndex ? 'auto' : 'metadata';

//           return (
//             <div
//               key={item.caption}
//               aria-hidden={!isActive}
//               className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
//                 isActive ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   transform: parallaxOn
//                     ? `translate3d(${px * -14}px, ${py * -10}px, 0) scale(1.06)`
//                     : undefined,
//                   transition: parallaxOn ? 'transform 400ms ease-out' : undefined,
//                 }}
//               >
//                 <img
//                   src={item.fallback}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//                 <video
//                   ref={(el) => {
//                     videoRefs.current[index] = el;
//                   }}
//                   src={item.video.src}
//                   poster={item.video.poster}
//                   muted
//                   loop
//                   playsInline
//                   preload={preload}
//                   autoPlay={isActive && isPlaying}
//                   onCanPlay={() => markReady(index)}
//                   onError={() => markFailed(index)}
//                   className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                     videoVisible ? 'opacity-100' : 'opacity-0'
//                   } hero-video-in`}
//                 />
//               </div>
//             </div>
//           );
//         })}

//         {/* Layered scrims for left-content readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#03100B] via-[#03100B]/85 to-[#03100B]/5 lg:via-[#03100B]/60" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#03100B] via-transparent to-[#03100B]/40" />

//         {/* Cursor spotlight */}
//         <div
//           className="pointer-events-none absolute inset-0 transition-opacity duration-500"
//           style={{
//             opacity: parallaxOn ? 0.5 : 0.3,
//             background: `radial-gradient(560px circle at ${pointer.x * 100}% ${
//               pointer.y * 100
//             }%, rgba(${accent},0.25), transparent 60%)`,
//           }}
//         />

//         {/* Vignette + grain */}
//         <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_70px_rgba(0,0,0,0.6)]" />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
//           style={{
//             backgroundImage:
//               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
//             backgroundSize: '160px 160px',
//           }}
//         />
//       </div>

//       {/* ---------- TOP PROGRESS RAIL ---------- */}
//       <div className="absolute inset-x-0 top-0 z-30 flex h-[3px] w-full gap-[2px]">
//         {SLIDES.map((item, index) => {
//           const isCurrent = index === active;
//           const isPast = index < active;
//           return (
//             <button
//               key={item.caption}
//               type="button"
//               onClick={() => jumpTo(index)}
//               aria-label={`Show slide ${index + 1}: ${item.caption}`}
//               aria-current={isCurrent ? 'true' : undefined}
//               className="group relative h-full flex-1 overflow-hidden bg-white/12"
//             >
//               <span
//                 className="absolute inset-y-0 left-0 bg-[#7ED957]"
//                 style={{
//                   width: isCurrent ? '100%' : isPast ? '100%' : '0%',
//                   opacity: isCurrent ? 1 : isPast ? 0.42 : 0,
//                   transition: isCurrent
//                     ? 'none'
//                     : 'width 300ms ease, opacity 300ms ease',
//                   animation: isCurrent
//                     ? `heroProgress ${AUTOPLAY_MS}ms linear forwards`
//                     : 'none',
//                   animationPlayState: isPlaying ? 'running' : 'paused',
//                 }}
//               />
//               <span className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/15" />
//             </button>
//           );
//         })}
//       </div>

//       {/* ---------- CONTENT (left column) ---------- */}
//       <div className="relative z-20 flex min-h-[clamp(720px,100svh,960px)] items-center pb-24 pt-24 sm:pb-28 lg:pt-28">
//         <div className="shell w-full">
//           <div className="grid max-w-[min(100%,640px)] gap-10">
//             {/* eyebrow / meta row */}
//             <div
//               key={`meta-${active}`}
//               className="hero-fade-up flex flex-wrap items-center gap-x-4 gap-y-2"
//             >
//               <span
//                 className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm"
//               >
//                 <Leaf size={12} style={{ color: GREEN }} />
//                 {slide.tag}
//               </span>
//               <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50 sm:text-[11px]">
//                 {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
//               </span>
//             </div>

//             {/* animated slides */}
//             <div className="grid">
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const Heading = index === 0 ? 'h1' : 'h2';

//                 return (
//                   <div
//                     key={item.caption}
//                     aria-hidden={!isActive}
//                     className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                       isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                     }`}
//                     style={{ gridArea: '1 / 1' }}
//                   >
//                     {/* eyebrow words */}
//                     <p
//                       className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300 sm:text-xs ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 80)}
//                     >
//                       <span
//                         className="mr-1 h-[2px] w-8 rounded-full"
//                         style={{ backgroundColor: GREEN }}
//                       />
//                       {item.eyebrow.map((label, i) => (
//                         <span key={label} className="flex items-center gap-3">
//                           {i > 0 && (
//                             <span
//                               className="h-1 w-1 rounded-full"
//                               style={{ backgroundColor: GREEN }}
//                             />
//                           )}
//                           {label}
//                         </span>
//                       ))}
//                     </p>

//                     {/* headline */}
//                     <Heading
//                       className="font-display font-normal leading-[0.97] tracking-[-0.04em]"
//                       style={{
//                         fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                       }}
//                     >
//                       {item.headline.map((line, i) => (
//                         <span
//                           key={line}
//                           className="block overflow-hidden pb-[0.06em]"
//                         >
//                           <span
//                             className={`block transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                               isActive
//                                 ? 'translate-y-0 opacity-100 blur-0'
//                                 : 'translate-y-[110%] opacity-60 blur-[2px]'
//                             } ${
//                               i === 1
//                                 ? 'bg-clip-text text-transparent italic'
//                                 : 'text-white'
//                             }`}
//                             style={{
//                               transitionDelay: isActive
//                                 ? `${160 + i * 110}ms`
//                                 : '0ms',
//                               ...(i === 1
//                                 ? {
//                                     backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                                   }
//                                 : null),
//                             }}
//                           >
//                             {line}
//                           </span>
//                         </span>
//                       ))}
//                     </Heading>

//                     {/* support */}
//                     <p
//                       className={`mt-6 max-w-[36rem] text-sm leading-relaxed text-white/75 sm:text-base lg:text-[1.04rem] ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 460)}
//                     >
//                       {item.support}
//                     </p>

//                     {/* CTAs */}
//                     <div
//                       className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 580)}
//                     >
//                       <Link
//                         to={item.primaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#7ED957] px-7 py-3.5 font-heading text-sm font-semibold text-[#06110C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(126,217,87,0.4)]"
//                       >
//                         <span className="relative z-10">
//                           {item.primaryCta.label}
//                         </span>
//                         <ArrowUpRight
//                           size={18}
//                           className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                         />
//                         <span className="absolute inset-0 -translate-x-full bg-[#B5F27E] transition-transform duration-500 group-hover:translate-x-0" />
//                       </Link>

//                       <Link
//                         to={item.secondaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
//                       >
//                         {item.secondaryCta.label}
//                         <ArrowUpRight
//                           size={16}
//                           className="opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* slide rail — horizontal, under content */}
//             <div className="hidden items-center gap-3 border-t border-white/10 pt-6 sm:flex">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
//                 Solutions
//               </span>
//               <div className="flex flex-1 items-center gap-1.5">
//                 {SLIDES.map((item, index) => {
//                   const isCurrent = index === active;
//                   return (
//                     <button
//                       key={item.caption}
//                       type="button"
//                       onClick={() => jumpTo(index)}
//                       aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                       aria-current={isCurrent ? 'true' : undefined}
//                       className="group relative h-6 flex-1"
//                     >
//                       <span
//                         className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
//                           isCurrent
//                             ? 'h-[2px] w-full bg-[#7ED957]'
//                             : 'h-[2px] w-full bg-white/15 group-hover:bg-white/40'
//                         }`}
//                       />
//                     </button>
//                   );
//                 })}
//               </div>
//               <span className="font-heading text-[11px] tabular-nums text-white/60">
//                 {String(active + 1).padStart(2, '0')}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- BOTTOM CONTROL DOCK ---------- */}
//       <div className="absolute inset-x-0 bottom-6 z-30 flex justify-center px-4 sm:bottom-8">
//         <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 p-1.5 backdrop-blur-xl">
//           <button
//             type="button"
//             onClick={() => go(-1)}
//             aria-label="Previous slide"
//             className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             type="button"
//             onClick={() => setIsPlaying((p) => !p)}
//             aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//             className="relative grid h-11 w-11 place-items-center rounded-full bg-[#7ED957] text-[#06110C] transition-transform hover:scale-105"
//           >
//             {isPlaying ? (
//               <Pause size={16} fill="currentColor" />
//             ) : (
//               <Play size={16} fill="currentColor" className="ml-0.5" />
//             )}
//             <svg
//               viewBox="0 0 44 44"
//               className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
//               aria-hidden="true"
//             >
//               <circle
//                 cx="22"
//                 cy="22"
//                 r="20"
//                 fill="none"
//                 stroke="rgba(0,0,0,0.25)"
//                 strokeWidth="2"
//               />
//               <circle
//                 key={`ring-${active}`}
//                 cx="22"
//                 cy="22"
//                 r="20"
//                 fill="none"
//                 stroke="#06110C"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeDasharray={RING}
//                 className="hero-ring"
//                 style={{
//                   animationDuration: `${AUTOPLAY_MS}ms`,
//                   animationPlayState: isPlaying ? 'running' : 'paused',
//                 }}
//               />
//             </svg>
//           </button>

//           <button
//             type="button"
//             onClick={() => go(1)}
//             aria-label="Next slide"
//             className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
//           >
//             <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroProgress { from { width: 0%; } to { width: 100%; } }
//         @keyframes heroRing { from { stroke-dashoffset: ${RING}; } to { stroke-dashoffset: 0; } }
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes heroKenburns {
//           0% { transform: scale(1.04) translate3d(0,0,0); }
//           100% { transform: scale(1.14) translate3d(-1.2%, -0.8%, 0); }
//         }

//         .hero-ring {
//           stroke-dashoffset: ${RING};
//           animation-name: heroRing;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         .hero-fade-up {
//           opacity: 0;
//           animation: heroFadeUp 700ms cubic-bezier(0.16,1,0.3,1) forwards;
//         }
//         .hero-video-in {
//           animation: heroKenburns 14s ease-out forwards;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .hero-ring { animation: none; stroke-dashoffset: 0; }
//           .hero-fade-up { animation: none; opacity: 1; }
//           .hero-video-in { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }



// import {
//   useState,
//   useCallback,
//   useEffect,
//   useRef,
//   type CSSProperties,
// } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
// } from 'lucide-react';

// type Metric = { value: string; label: string };

// type Slide = {
//   video: { src: string; poster: string };
//   fallback: string;
//   eyebrow: string[];
//   headline: [string, string, string];
//   headlineScale: number;
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   tag: string;
//   chapter: string;
//   accent: string;
//   metrics: [Metric, Metric, Metric];
// };

// const AUTOPLAY_MS = 9000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';
// const RING = 125.6;

// const SLIDES: Slide[] = [
//   {
//     video: {
//       src: '/videos/intro.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable', 'future.'],
//     headlineScale: 1,
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     tag: 'Powering progress with purpose',
//     chapter: 'Introduction',
//     accent: '126,217,87',
//     metrics: [
//       { value: '140+', label: 'Projects delivered' },
//       { value: '11', label: 'Industries served' },
//       { value: '4.9/5', label: 'Client rating' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/energy-audit.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Energy', 'Efficiency', 'Audit'],
//     headline: ['Cut the waste.', 'Boost the', 'performance.'],
//     headlineScale: 1,
//     support:
//       'Data-driven efficiency audits and upgrades that lower operating costs, reduce consumption, and unlock measurable performance gains.',
//     primaryCta: { label: 'Book an energy audit', to: '/solutions/energy-efficiency' },
//     secondaryCta: { label: 'How it works', to: '/solutions' },
//     caption: 'Energy efficiency and audit',
//     tag: 'Lower costs, higher output',
//     chapter: 'Energy audit',
//     accent: '168,230,120',
//     metrics: [
//       { value: '−32%', label: 'Average energy use' },
//       { value: '18 mo', label: 'Typical payback' },
//       { value: '2.4M kWh', label: 'Saved annually' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/solar.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Renewables', 'Solar', 'Resilience'],
//     headline: ['Clean energy.', 'Built to', 'last.'],
//     headlineScale: 1,
//     support:
//       'Scalable renewable energy installations that future-proof your operations and accelerate the transition to a low-carbon economy.',
//     primaryCta: { label: 'Explore clean energy', to: '/solutions/clean-energy' },
//     secondaryCta: { label: 'Talk to our team', to: '/contact' },
//     caption: 'Clean energy installations',
//     tag: 'Renewable, resilient, ready',
//     chapter: 'Clean energy',
//     accent: '255,214,102',
//     metrics: [
//       { value: '3.8 MW', label: 'Solar installed' },
//       { value: '−45%', label: 'Grid dependence' },
//       { value: '20 yr', label: 'Asset lifespan' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/smart-building.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Smart buildings', 'IBMS', 'Automation'],
//     headline: ['One building.', 'Total', 'control.'],
//     headlineScale: 1,
//     support:
//       'Unify and automate your facility’s core operations with intelligent building management systems for safer, smarter, more efficient spaces.',
//     primaryCta: { label: 'Discover IBMS', to: '/solutions/ibms' },
//     secondaryCta: { label: 'See the platform', to: '/solutions' },
//     caption: 'Intelligent building management',
//     tag: 'Smarter, safer buildings',
//     chapter: 'IBMS',
//     accent: '126,190,255',
//     metrics: [
//       { value: '99.98%', label: 'System uptime' },
//       { value: '−28%', label: 'HVAC energy' },
//       { value: '24/7', label: 'Live monitoring' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/digital-data.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Digital', 'Data', 'Transformation'],
//     headline: ['Digital tools.', 'Real', 'outcomes.'],
//     headlineScale: 1,
//     support:
//       'Empower business transformation with cutting-edge digital tools and data-driven architectures built for scale and clarity.',
//     primaryCta: { label: 'Explore digital', to: '/solutions/digital' },
//     secondaryCta: { label: 'Our approach', to: '/about' },
//     caption: 'Digital solutions and analytics',
//     tag: 'Data-driven transformation',
//     chapter: 'Digital',
//     accent: '192,160,255',
//     metrics: [
//       { value: '12M+', label: 'Data points/day' },
//       { value: '−40%', label: 'Manual reporting' },
//       { value: '3×', label: 'Faster insights' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/robotics.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Industry 4.0', 'Robotics', 'Automation'],
//     headline: ['Automate.', 'Accelerate.', 'Scale.'],
//     headlineScale: 1,
//     support:
//       'Streamline production lines and accelerate output with state-of-the-art robotic and industrial automation systems.',
//     primaryCta: { label: 'Explore automation', to: '/solutions/automation' },
//     secondaryCta: { label: 'Request a demo', to: '/contact' },
//     caption: 'Industrial automation',
//     tag: 'Precision at production speed',
//     chapter: 'Automation',
//     accent: '255,140,120',
//     metrics: [
//       { value: '+58%', label: 'Line throughput' },
//       { value: '±0.02mm', label: 'Placement accuracy' },
//       { value: '−22%', label: 'Downtime' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/prefab.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Pre-fab', 'Modular', 'Speed'],
//     headline: ['Build faster.', 'Build', 'smarter.'],
//     headlineScale: 0.96,
//     support:
//       'Accelerate construction timelines with durable, high-quality, rapidly deployable prefabricated structures.',
//     primaryCta: { label: 'Explore pre-fab', to: '/solutions/prefab' },
//     secondaryCta: { label: 'See projects', to: '/impact' },
//     caption: 'Pre-fabricated structures',
//     tag: 'Deployable at speed',
//     chapter: 'Pre-fab',
//     accent: '255,205,140',
//     metrics: [
//       { value: '−40%', label: 'Build timeline' },
//       { value: '92%', label: 'Material recovery' },
//       { value: '14 wk', label: 'Avg. delivery' },
//     ],
//   },
//   {
//     video: {
//       src: '/videos/press-parts.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Press components', 'Precision', 'Durability'],
//     headline: ['Built to', 'withstand.', 'Engineered to last.'],
//     headlineScale: 0.86,
//     support:
//       'Secure precision and heavy-duty reliability with custom-engineered press components for the most demanding manufacturing needs.',
//     primaryCta: { label: 'Explore components', to: '/solutions/press-components' },
//     secondaryCta: { label: 'Get a quote', to: '/contact' },
//     caption: 'Precision press components',
//     tag: 'Heavy-duty reliability',
//     chapter: 'Press parts',
//     accent: '200,200,210',
//     metrics: [
//       { value: '50k+', label: 'Units/month' },
//       { value: '±5μm', label: 'Tolerance' },
//       { value: '99.4%', label: 'First-pass yield' },
//     ],
//   },
// ];

// const HEADLINE_SIZE = 'clamp(2.4rem, min(5vw, 8.6svh), 5.4rem)';

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// function useParallax() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     const coarse = window.matchMedia('(pointer: coarse)').matches;
//     if (reduce || coarse) return;
//     setEnabled(true);

//     const el = ref.current;
//     if (!el) return;

//     let raf = 0;
//     const onMove = (e: PointerEvent) => {
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(() => {
//         const r = el.getBoundingClientRect();
//         setPos({
//           x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
//           y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
//         });
//       });
//     };
//     el.addEventListener('pointermove', onMove);
//     return () => {
//       el.removeEventListener('pointermove', onMove);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   return [ref, pos, enabled] as const;
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [prev, setPrev] = useState<number | null>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [ready, setReady] = useState<Set<number>>(() => new Set());
//   const [failed, setFailed] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const [parallaxRef, pointer, parallaxOn] = useParallax();

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((cur) => {
//       const next = (cur + dir + SLIDES.length) % SLIDES.length;
//       setPrev(cur);
//       return next;
//     });
//   }, []);

//   const jumpTo = useCallback((index: number) => {
//     setActive((cur) => {
//       if (cur === index) return cur;
//       setPrev(cur);
//       return index;
//     });
//   }, []);

//   useEffect(() => {
//     if (prev === null) return;
//     const t = window.setTimeout(() => setPrev(null), 1200);
//     return () => window.clearTimeout(t);
//   }, [prev]);

//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;
//       const shouldPlay =
//         (i === active || i === prev) && isPlaying && !failed.has(i);
//       if (shouldPlay) {
//         video.muted = true;
//         video.play().catch(() => undefined);
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, prev, isPlaying, failed]);

//   useEffect(() => {
//     if (!isPlaying) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const t = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(t);
//   }, [active, isPlaying, go]);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.target instanceof HTMLElement) {
//         const tag = e.target.tagName;
//         if (tag === 'INPUT' || tag === 'TEXTAREA') return;
//       }
//       if (e.key === 'ArrowRight') go(1);
//       else if (e.key === 'ArrowLeft') go(-1);
//       else if (e.key === ' ') {
//         e.preventDefault();
//         setIsPlaying((p) => !p);
//       } else if (/^[1-8]$/.test(e.key)) jumpTo(Number(e.key) - 1);
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, [go, jumpTo]);

//   const slide = SLIDES[active];
//   const accent = slide.accent;
//   const px = parallaxOn ? pointer.x - 0.5 : 0;
//   const py = parallaxOn ? pointer.y - 0.5 : 0;

//   const markReady = (i: number) => setReady((s) => new Set(s).add(i));
//   const markFailed = (i: number) => setFailed((s) => new Set(s).add(i));

//   const nextIndex = (active + 1) % SLIDES.length;

//   return (
//     <section
//       ref={parallaxRef}
//       className="relative w-full overflow-hidden bg-[#04120D] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured solutions"
//       style={{ ['--accent' as string]: accent }}
//     >
//       <div className="sr-only" aria-live="polite" aria-atomic="true">
//         Slide {active + 1} of {SLIDES.length}: {slide.caption}
//       </div>

//       {/* ---------- MEDIA WALL ---------- */}
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => {
//           const isActive = index === active;
//           const isPrev = index === prev;
//           const visible = isActive || isPrev;
//           const videoVisible =
//             visible && ready.has(index) && !failed.has(index);
//           const preload: 'auto' | 'metadata' =
//             index === active || index === nextIndex ? 'auto' : 'metadata';

//           return (
//             <div
//               key={item.caption}
//               aria-hidden={!isActive}
//               className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
//                 isActive ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   transform: parallaxOn
//                     ? `translate3d(${px * -14}px, ${py * -10}px, 0) scale(1.06)`
//                     : undefined,
//                   transition: parallaxOn
//                     ? 'transform 400ms ease-out'
//                     : undefined,
//                 }}
//               >
//                 <img
//                   src={item.fallback}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//                 <video
//                   ref={(el) => {
//                     videoRefs.current[index] = el;
//                   }}
//                   src={item.video.src}
//                   poster={item.video.poster}
//                   muted
//                   loop
//                   playsInline
//                   preload={preload}
//                   autoPlay={isActive && isPlaying}
//                   onCanPlay={() => markReady(index)}
//                   onError={() => markFailed(index)}
//                   className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                     videoVisible ? 'opacity-100' : 'opacity-0'
//                   } hero-video-in`}
//                 />
//               </div>
//             </div>
//           );
//         })}

//         {/* asymmetric left block scrim, fades to open before the tiles */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#04120D] via-[#04120D]/85 lg:via-[#04120D]/55 to-transparent" />
//         {/* bottom lift for the ribbon */}
//         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#04120D] via-[#04120D]/60 to-transparent" />
//         {/* top rail scrim */}
//         <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#04120D]/80 to-transparent" />

//         {/* cursor spotlight */}
//         <div
//           className="pointer-events-none absolute inset-0 transition-opacity duration-500"
//           style={{
//             opacity: parallaxOn ? 0.45 : 0.28,
//             background: `radial-gradient(560px circle at ${pointer.x * 100}% ${
//               pointer.y * 100
//             }%, rgba(${accent},0.22), transparent 60%)`,
//           }}
//         />

//         {/* grain over the whole wall */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
//           style={{
//             backgroundImage:
//               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
//             backgroundSize: '160px 160px',
//           }}
//         />
//       </div>

//       {/* ---------- GHOST SERIAL NUMBER (top-left) ---------- */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-5 top-24 z-10 select-none font-display text-[14vw] leading-none tracking-[-0.04em] text-white/[0.06] sm:left-8 lg:left-12 lg:top-28"
//       >
//         {String(active + 1).padStart(2, '0')}
//       </div>

//       {/* ---------- LAYOUT ---------- */}
//       <div className="relative z-20 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
//         <div className="grid min-h-[clamp(760px,100svh,1000px)] grid-cols-1 gap-y-10 py-24 lg:grid-cols-[minmax(0,56%)_minmax(0,1fr)] lg:gap-x-14 lg:py-28">

//           {/* ---------- LEFT: EDITORIAL COLUMN ---------- */}
//           <div className="flex min-w-0 flex-col justify-center">
//             {/* chapter tab rail */}
//             <div className="-mx-1 mb-8 flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//               {SLIDES.map((item, index) => {
//                 const isCurrent = index === active;
//                 return (
//                   <button
//                     key={item.caption}
//                     type="button"
//                     onClick={() => jumpTo(index)}
//                     aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                     aria-current={isCurrent ? 'true' : undefined}
//                     className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
//                       isCurrent
//                         ? 'border-[#7ED957]/60 bg-[#7ED957]/12 text-white'
//                         : 'border-white/10 bg-white/[0.03] text-white/55 hover:border-white/30 hover:text-white/80'
//                     }`}
//                   >
//                     {item.chapter}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* meta */}
//             <div
//               key={`meta-${active}`}
//               className="hero-fade-up mb-7 flex flex-wrap items-center gap-3"
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
//                 <Leaf size={12} style={{ color: GREEN }} />
//                 {slide.tag}
//               </span>
//               <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
//                 {slide.chapter}
//               </span>
//             </div>

//             {/* slides */}
//             <div className="grid">
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const Heading = index === 0 ? 'h1' : 'h2';

//                 return (
//                   <div
//                     key={item.caption}
//                     aria-hidden={!isActive}
//                     className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                       isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                     }`}
//                     style={{ gridArea: '1 / 1' }}
//                   >
//                     <p
//                       className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-lime-300 sm:text-[11px] ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 80)}
//                     >
//                       <span
//                         className="mr-1 h-[2px] w-8 rounded-full"
//                         style={{ backgroundColor: GREEN }}
//                       />
//                       {item.eyebrow.map((label, i) => (
//                         <span key={label} className="flex items-center gap-3">
//                           {i > 0 && (
//                             <span
//                               className="h-1 w-1 rounded-full"
//                               style={{ backgroundColor: GREEN }}
//                             />
//                           )}
//                           {label}
//                         </span>
//                       ))}
//                     </p>

//                     <Heading
//                       className="font-display font-normal leading-[0.96] tracking-[-0.045em]"
//                       style={{
//                         fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                       }}
//                     >
//                       {item.headline.map((line, i) => (
//                         <span
//                           key={line}
//                           className="block overflow-hidden pb-[0.06em]"
//                         >
//                           <span
//                             className={`block transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                               isActive
//                                 ? 'translate-y-0 opacity-100 blur-0'
//                                 : 'translate-y-[110%] opacity-60 blur-[2px]'
//                             } ${
//                               i === 1
//                                 ? 'bg-clip-text text-transparent italic'
//                                 : 'text-white'
//                             }`}
//                             style={{
//                               transitionDelay: isActive
//                                 ? `${160 + i * 110}ms`
//                                 : '0ms',
//                               ...(i === 1
//                                 ? {
//                                     backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                                   }
//                                 : null),
//                             }}
//                           >
//                             {line}
//                           </span>
//                         </span>
//                       ))}
//                     </Heading>

//                     <div
//                       className={`mt-7 flex items-start gap-4 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 420)}
//                     >
//                       <span
//                         className="mt-2 h-px w-10 shrink-0"
//                         style={{ backgroundColor: GREEN }}
//                       />
//                       <p className="max-w-[34rem] text-sm leading-relaxed text-white/75 sm:text-[0.98rem]">
//                         {item.support}
//                       </p>
//                     </div>

//                     <div
//                       className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 540)}
//                     >
//                       <Link
//                         to={item.primaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#7ED957] px-7 py-3.5 font-heading text-sm font-semibold text-[#06110C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(126,217,87,0.4)]"
//                       >
//                         <span className="relative z-10">
//                           {item.primaryCta.label}
//                         </span>
//                         <ArrowUpRight
//                           size={18}
//                           className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                         />
//                         <span className="absolute inset-0 -translate-x-full bg-[#B5F27E] transition-transform duration-500 group-hover:translate-x-0" />
//                       </Link>

//                       <Link
//                         to={item.secondaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
//                       >
//                         {item.secondaryCta.label}
//                         <ArrowUpRight
//                           size={16}
//                           className="opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* transport bar */}
//             <div className="mt-10 flex items-center gap-4">
//               <div className="flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.04] p-1 backdrop-blur-sm">
//                 <button
//                   type="button"
//                   onClick={() => go(-1)}
//                   aria-label="Previous slide"
//                   className="grid h-10 w-10 place-items-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setIsPlaying((p) => !p)}
//                   aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//                   className="relative grid h-10 w-10 place-items-center rounded-full bg-[#7ED957] text-[#06110C] transition-transform hover:scale-105"
//                 >
//                   {isPlaying ? (
//                     <Pause size={14} fill="currentColor" />
//                   ) : (
//                     <Play size={14} fill="currentColor" className="ml-0.5" />
//                   )}
//                   <svg
//                     viewBox="0 0 40 40"
//                     className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
//                     aria-hidden="true"
//                   >
//                     <circle
//                       cx="20"
//                       cy="20"
//                       r="18"
//                       fill="none"
//                       stroke="rgba(0,0,0,0.22)"
//                       strokeWidth="2"
//                     />
//                     <circle
//                       key={`ring-${active}`}
//                       cx="20"
//                       cy="20"
//                       r="18"
//                       fill="none"
//                       stroke="#06110C"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeDasharray={113.1}
//                       className="hero-ring"
//                       style={{
//                         animationDuration: `${AUTOPLAY_MS}ms`,
//                         animationPlayState: isPlaying ? 'running' : 'paused',
//                       }}
//                     />
//                   </svg>
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => go(1)}
//                   aria-label="Next slide"
//                   className="grid h-10 w-10 place-items-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>

//               <div className="min-w-0 flex-1">
//                 <div className="flex items-baseline justify-between gap-3">
//                   <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
//                     Progress
//                   </span>
//                   <span className="font-heading text-[11px] tabular-nums text-white/55">
//                     {String(active + 1).padStart(2, '0')} /{' '}
//                     {String(SLIDES.length).padStart(2, '0')}
//                   </span>
//                 </div>
//                 <div className="mt-2 flex items-center gap-1">
//                   {SLIDES.map((item, index) => {
//                     const isCurrent = index === active;
//                     const isPast = index < active;
//                     return (
//                       <button
//                         key={item.caption}
//                         type="button"
//                         onClick={() => jumpTo(index)}
//                         aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                         aria-current={isCurrent ? 'true' : undefined}
//                         className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/12"
//                       >
//                         <span
//                           className="absolute inset-y-0 left-0 rounded-full bg-[#7ED957]"
//                           style={{
//                             width: isCurrent
//                               ? '100%'
//                               : isPast
//                               ? '100%'
//                               : '0%',
//                             opacity: isCurrent ? 1 : isPast ? 0.45 : 0,
//                             animation: isCurrent
//                               ? `heroProgress ${AUTOPLAY_MS}ms linear forwards`
//                               : 'none',
//                             animationPlayState: isPlaying
//                               ? 'running'
//                               : 'paused',
//                           }}
//                         />
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ---------- RIGHT: TELEMETRY TILES ---------- */}
//           <div className="relative hidden items-end justify-end pb-6 lg:flex">
//             <div
//               className="grid w-full max-w-[420px] gap-3"
//               style={{
//                 transform: parallaxOn
//                   ? `translate3d(${px * 8}px, ${py * 8}px, 0)`
//                   : undefined,
//                 transition: parallaxOn
//                   ? 'transform 400ms cubic-bezier(0.22,1,0.36,1)'
//                   : undefined,
//               }}
//             >
//               {slide.metrics.map((metric, i) => (
//                 <div
//                   key={`${active}-metric-${i}`}
//                   className="hero-fade-up group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl"
//                   style={{
//                     animationDelay: `${180 + i * 100}ms`,
//                     boxShadow:
//                       '0 30px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
//                   }}
//                 >
//                   {/* accent sliver */}
//                   <span
//                     aria-hidden="true"
//                     className="pointer-events-none absolute left-0 top-0 h-full w-[3px]"
//                     style={{
//                       background: `linear-gradient(to bottom, rgba(${accent},0), rgba(${accent},1), rgba(${accent},0))`,
//                       opacity: 0.85,
//                     }}
//                   />

//                   <div className="flex items-start justify-between gap-3">
//                     <div>
//                       <div className="font-display text-3xl leading-none tracking-[-0.02em] text-white sm:text-[2.1rem]">
//                         {metric.value}
//                       </div>
//                       <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
//                         {metric.label}
//                       </div>
//                     </div>
//                     <span
//                       aria-hidden="true"
//                       className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-white/40 transition-colors group-hover:border-[#7ED957]/50 group-hover:text-[#7ED957]"
//                     >
//                       <ArrowUpRight size={12} />
//                     </span>
//                   </div>

//                   {/* mini spark line */}
//                   <svg
//                     viewBox="0 0 100 20"
//                     preserveAspectRatio="none"
//                     className="mt-3 h-4 w-full"
//                     aria-hidden="true"
//                   >
//                     <polyline
//                       points="0,15 12,12 24,14 36,8 48,10 60,5 72,7 84,3 100,4"
//                       fill="none"
//                       stroke={`rgba(${accent},0.7)`}
//                       strokeWidth="1.4"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               ))}

//               {/* tiny sign-off under the stack */}
//               <div className="mt-2 flex items-center justify-between px-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">
//                 <span>Live impact</span>
//                 <span className="tabular-nums">
//                   {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- BOTTOM RIBBON ---------- */}
//       <div className="absolute inset-x-0 bottom-0 z-30 border-t border-white/10 bg-black/35 backdrop-blur-md">
//         <div className="mx-auto flex w-full max-w-[1600px] items-center gap-3 px-5 py-3 sm:px-8 lg:px-12">
//           <span className="hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:inline">
//             Solutions timeline
//           </span>
//           <div className="flex flex-1 items-center gap-1.5">
//             {SLIDES.map((item, index) => {
//               const isCurrent = index === active;
//               const isPast = index < active;
//               return (
//                 <button
//                   key={item.caption}
//                   type="button"
//                   onClick={() => jumpTo(index)}
//                   aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                   aria-current={isCurrent ? 'true' : undefined}
//                   className="group flex flex-1 items-center gap-2"
//                 >
//                   <span className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/12">
//                     <span
//                       className="absolute inset-y-0 left-0 rounded-full bg-[#7ED957]"
//                       style={{
//                         width: isCurrent ? '100%' : isPast ? '100%' : '0%',
//                         opacity: isCurrent ? 1 : isPast ? 0.5 : 0,
//                         animation: isCurrent
//                           ? `heroProgress ${AUTOPLAY_MS}ms linear forwards`
//                           : 'none',
//                         animationPlayState: isPlaying ? 'running' : 'paused',
//                       }}
//                     />
//                   </span>
//                   <span
//                     className={`hidden text-[9px] font-semibold uppercase tracking-[0.22em] transition-colors sm:inline ${
//                       isCurrent
//                         ? 'text-white'
//                         : 'text-white/35 group-hover:text-white/60'
//                     }`}
//                   >
//                     {String(index + 1).padStart(2, '0')}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroProgress { from { width: 0%; } to { width: 100%; } }
//         @keyframes heroRing { from { stroke-dashoffset: 113.1; } to { stroke-dashoffset: 0; } }
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes heroKenburns {
//           0% { transform: scale(1.04) translate3d(0,0,0); }
//           100% { transform: scale(1.14) translate3d(-1.2%, -0.8%, 0); }
//         }

//         .hero-ring {
//           stroke-dashoffset: 113.1;
//           animation-name: heroRing;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         .hero-fade-up {
//           opacity: 0;
//           animation: heroFadeUp 700ms cubic-bezier(0.16,1,0.3,1) forwards;
//         }
//         .hero-video-in {
//           animation: heroKenburns 14s ease-out forwards;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .hero-ring { animation: none; stroke-dashoffset: 0; }
//           .hero-fade-up { animation: none; opacity: 1; }
//           .hero-video-in { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }




// import {
//   useState,
//   useCallback,
//   useEffect,
//   useRef,
//   type CSSProperties,
// } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
// } from 'lucide-react';

// type Slide = {
//   video: { src: string; poster: string };
//   fallback: string;
//   eyebrow: string[];
//   headline: [string, string, string];
//   headlineScale: number;
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   tag: string;
//   chapter: string;
//   accent: string;
//   attribution: string;
// };

// const AUTOPLAY_MS = 9000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';
// const RING = 113.1;

// const SLIDES: Slide[] = [
//   {
//     video: {
//       src: '/videos/intro.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable', 'future.'],
//     headlineScale: 1,
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     tag: 'Powering progress with purpose',
//     chapter: 'Introduction',
//     accent: '126,217,87',
//     attribution: 'Terra Ecopreneurs',
//   },
//   {
//     video: {
//       src: '/videos/energy-audit.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Energy', 'Efficiency', 'Audit'],
//     headline: ['Cut the waste.', 'Boost the', 'performance.'],
//     headlineScale: 1,
//     support:
//       'Data-driven efficiency audits and upgrades that lower operating costs, reduce consumption, and unlock measurable performance gains.',
//     primaryCta: { label: 'Book an energy audit', to: '/solutions/energy-efficiency' },
//     secondaryCta: { label: 'How it works', to: '/solutions' },
//     caption: 'Energy efficiency and audit',
//     tag: 'Lower costs, higher output',
//     chapter: 'Energy audit',
//     accent: '168,230,120',
//     attribution: 'Efficiency practice',
//   },
//   {
//     video: {
//       src: '/videos/solar.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Renewables', 'Solar', 'Resilience'],
//     headline: ['Clean energy.', 'Built to', 'last.'],
//     headlineScale: 1,
//     support:
//       'Scalable renewable energy installations that future-proof your operations and accelerate the transition to a low-carbon economy.',
//     primaryCta: { label: 'Explore clean energy', to: '/solutions/clean-energy' },
//     secondaryCta: { label: 'Talk to our team', to: '/contact' },
//     caption: 'Clean energy installations',
//     tag: 'Renewable, resilient, ready',
//     chapter: 'Clean energy',
//     accent: '255,214,102',
//     attribution: 'Renewables studio',
//   },
//   {
//     video: {
//       src: '/videos/smart-building.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Smart buildings', 'IBMS', 'Automation'],
//     headline: ['One building.', 'Total', 'control.'],
//     headlineScale: 1,
//     support:
//       'Unify and automate your facility’s core operations with intelligent building management systems for safer, smarter, more efficient spaces.',
//     primaryCta: { label: 'Discover IBMS', to: '/solutions/ibms' },
//     secondaryCta: { label: 'See the platform', to: '/solutions' },
//     caption: 'Intelligent building management',
//     tag: 'Smarter, safer buildings',
//     chapter: 'IBMS',
//     accent: '126,190,255',
//     attribution: 'Buildings group',
//   },
//   {
//     video: {
//       src: '/videos/digital-data.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Digital', 'Data', 'Transformation'],
//     headline: ['Digital tools.', 'Real', 'outcomes.'],
//     headlineScale: 1,
//     support:
//       'Empower business transformation with cutting-edge digital tools and data-driven architectures built for scale and clarity.',
//     primaryCta: { label: 'Explore digital', to: '/solutions/digital' },
//     secondaryCta: { label: 'Our approach', to: '/about' },
//     caption: 'Digital solutions and analytics',
//     tag: 'Data-driven transformation',
//     chapter: 'Digital',
//     accent: '192,160,255',
//     attribution: 'Digital practice',
//   },
//   {
//     video: {
//       src: '/videos/robotics.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Industry 4.0', 'Robotics', 'Automation'],
//     headline: ['Automate.', 'Accelerate.', 'Scale.'],
//     headlineScale: 1,
//     support:
//       'Streamline production lines and accelerate output with state-of-the-art robotic and industrial automation systems.',
//     primaryCta: { label: 'Explore automation', to: '/solutions/automation' },
//     secondaryCta: { label: 'Request a demo', to: '/contact' },
//     caption: 'Industrial automation',
//     tag: 'Precision at production speed',
//     chapter: 'Automation',
//     accent: '255,140,120',
//     attribution: 'Robotics lab',
//   },
//   {
//     video: {
//       src: '/videos/prefab.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Pre-fab', 'Modular', 'Speed'],
//     headline: ['Build faster.', 'Build', 'smarter.'],
//     headlineScale: 0.96,
//     support:
//       'Accelerate construction timelines with durable, high-quality, rapidly deployable prefabricated structures.',
//     primaryCta: { label: 'Explore pre-fab', to: '/solutions/prefab' },
//     secondaryCta: { label: 'See projects', to: '/impact' },
//     caption: 'Pre-fabricated structures',
//     tag: 'Deployable at speed',
//     chapter: 'Pre-fab',
//     accent: '255,205,140',
//     attribution: 'Modular systems',
//   },
//   {
//     video: {
//       src: '/videos/press-parts.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80',
//     },
//     fallback:
//       'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2200&q=85',
//     eyebrow: ['Press components', 'Precision', 'Durability'],
//     headline: ['Built to', 'withstand.', 'Engineered to last.'],
//     headlineScale: 0.86,
//     support:
//       'Secure precision and heavy-duty reliability with custom-engineered press components for the most demanding manufacturing needs.',
//     primaryCta: { label: 'Explore components', to: '/solutions/press-components' },
//     secondaryCta: { label: 'Get a quote', to: '/contact' },
//     caption: 'Precision press components',
//     tag: 'Heavy-duty reliability',
//     chapter: 'Press parts',
//     accent: '200,200,210',
//     attribution: 'Components division',
//   },
// ];

// const HEADLINE_SIZE = 'clamp(2.4rem, min(5vw, 8.6svh), 5.4rem)';

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// function useParallax() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     const coarse = window.matchMedia('(pointer: coarse)').matches;
//     if (reduce || coarse) return;
//     setEnabled(true);

//     const el = ref.current;
//     if (!el) return;

//     let raf = 0;
//     const onMove = (e: PointerEvent) => {
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(() => {
//         const r = el.getBoundingClientRect();
//         setPos({
//           x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
//           y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
//         });
//       });
//     };
//     el.addEventListener('pointermove', onMove);
//     return () => {
//       el.removeEventListener('pointermove', onMove);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   return [ref, pos, enabled] as const;
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [prev, setPrev] = useState<number | null>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [ready, setReady] = useState<Set<number>>(() => new Set());
//   const [failed, setFailed] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const [parallaxRef, pointer, parallaxOn] = useParallax();

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((cur) => {
//       const next = (cur + dir + SLIDES.length) % SLIDES.length;
//       setPrev(cur);
//       return next;
//     });
//   }, []);

//   const jumpTo = useCallback((index: number) => {
//     setActive((cur) => {
//       if (cur === index) return cur;
//       setPrev(cur);
//       return index;
//     });
//   }, []);

//   useEffect(() => {
//     if (prev === null) return;
//     const t = window.setTimeout(() => setPrev(null), 1200);
//     return () => window.clearTimeout(t);
//   }, [prev]);

//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;
//       const shouldPlay =
//         (i === active || i === prev) && isPlaying && !failed.has(i);
//       if (shouldPlay) {
//         video.muted = true;
//         video.play().catch(() => undefined);
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, prev, isPlaying, failed]);

//   useEffect(() => {
//     if (!isPlaying) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const t = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(t);
//   }, [active, isPlaying, go]);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.target instanceof HTMLElement) {
//         const tag = e.target.tagName;
//         if (tag === 'INPUT' || tag === 'TEXTAREA') return;
//       }
//       if (e.key === 'ArrowRight') go(1);
//       else if (e.key === 'ArrowLeft') go(-1);
//       else if (e.key === ' ') {
//         e.preventDefault();
//         setIsPlaying((p) => !p);
//       } else if (/^[1-8]$/.test(e.key)) jumpTo(Number(e.key) - 1);
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, [go, jumpTo]);

//   const slide = SLIDES[active];
//   const accent = slide.accent;
//   const px = parallaxOn ? pointer.x - 0.5 : 0;
//   const py = parallaxOn ? pointer.y - 0.5 : 0;

//   const markReady = (i: number) => setReady((s) => new Set(s).add(i));
//   const markFailed = (i: number) => setFailed((s) => new Set(s).add(i));

//   const nextIndex = (active + 1) % SLIDES.length;

//   return (
//     <section
//       ref={parallaxRef}
//       className="relative w-full overflow-hidden bg-[#04120D] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured solutions"
//       style={{ ['--accent' as string]: accent }}
//     >
//       <div className="sr-only" aria-live="polite" aria-atomic="true">
//         Slide {active + 1} of {SLIDES.length}: {slide.caption}
//       </div>

//       {/* ============ DEPTH LAYER 0 — FAR — VIDEO PLANE ============ */}
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => {
//           const isActive = index === active;
//           const isPrev = index === prev;
//           const visible = isActive || isPrev;
//           const videoVisible =
//             visible && ready.has(index) && !failed.has(index);
//           const preload: 'auto' | 'metadata' =
//             index === active || index === nextIndex ? 'auto' : 'metadata';

//           return (
//             <div
//               key={item.caption}
//               aria-hidden={!isActive}
//               className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
//                 isActive ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   transform: parallaxOn
//                     ? `translate3d(${px * -18}px, ${py * -12}px, 0) scale(1.08)`
//                     : undefined,
//                   transition: parallaxOn
//                     ? 'transform 500ms cubic-bezier(0.22,1,0.36,1)'
//                     : undefined,
//                 }}
//               >
//                 <img
//                   src={item.fallback}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//                 <video
//                   ref={(el) => {
//                     videoRefs.current[index] = el;
//                   }}
//                   src={item.video.src}
//                   poster={item.video.poster}
//                   muted
//                   loop
//                   playsInline
//                   preload={preload}
//                   autoPlay={isActive && isPlaying}
//                   onCanPlay={() => markReady(index)}
//                   onError={() => markFailed(index)}
//                   className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                     videoVisible ? 'opacity-100' : 'opacity-0'
//                   } hero-video-in`}
//                 />
//                 {/* per-slide duotone grading overlay */}
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute inset-0 mix-blend-color"
//                   style={{
//                     background: `linear-gradient(135deg, rgba(${item.accent},0.28), transparent 60%)`,
//                     opacity: 0.55,
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         })}

//         {/* film-strip scrims */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#04120D] via-[#04120D]/88 lg:via-[#04120D]/55 to-transparent" />
//         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#04120D] via-[#04120D]/60 to-transparent" />
//         <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#04120D]/85 to-transparent" />

//         {/* cursor spotlight */}
//         <div
//           className="pointer-events-none absolute inset-0 transition-opacity duration-500"
//           style={{
//             opacity: parallaxOn ? 0.5 : 0.28,
//             background: `radial-gradient(620px circle at ${pointer.x * 100}% ${
//               pointer.y * 100
//             }%, rgba(${accent},0.24), transparent 60%)`,
//           }}
//         />

//         {/* grain */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
//           style={{
//             backgroundImage:
//               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
//             backgroundSize: '160px 160px',
//           }}
//         />
//       </div>

//       {/* ============ DEPTH LAYER 1 — MID — BREATHING BLOOM ============ */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[-10%] top-1/2 z-[1] hidden h-[70vh] w-[70vh] -translate-y-1/2 rounded-full blur-[100px] lg:block hero-breathe"
//         style={{
//           background: `radial-gradient(circle, rgba(${accent},0.35), transparent 70%)`,
//           transform: parallaxOn
//             ? `translate3d(calc(-10% + ${px * 24}px), calc(-50% + ${py * 20}px), 0)`
//             : 'translate3d(-10%, -50%, 0)',
//           transition: parallaxOn
//             ? 'transform 600ms cubic-bezier(0.22,1,0.36,1), background 700ms ease'
//             : 'background 700ms ease',
//         }}
//       />

//       {/* ============ DEPTH LAYER 2 — NEAR — EDITORIAL COLUMN ============ */}
//       <div className="relative z-20 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
//         <div className="grid min-h-[clamp(760px,100svh,1000px)] grid-cols-1 gap-y-10 py-24 lg:grid-cols-[minmax(0,60%)_minmax(0,1fr)] lg:gap-x-14 lg:py-28">

//           {/* LEFT — typographic column */}
//           <div
//             className="flex min-w-0 flex-col justify-center"
//             style={{
//               transform: parallaxOn
//                 ? `translate3d(${px * 8}px, ${py * 6}px, 0)`
//                 : undefined,
//               transition: parallaxOn
//                 ? 'transform 500ms cubic-bezier(0.22,1,0.36,1)'
//                 : undefined,
//             }}
//           >
//             {/* chapter rail */}
//             <div className="-mx-1 mb-8 flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//               {SLIDES.map((item, index) => {
//                 const isCurrent = index === active;
//                 return (
//                   <button
//                     key={item.caption}
//                     type="button"
//                     onClick={() => jumpTo(index)}
//                     aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                     aria-current={isCurrent ? 'true' : undefined}
//                     className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
//                       isCurrent
//                         ? 'border-[#7ED957]/60 bg-[#7ED957]/12 text-white'
//                         : 'border-white/10 bg-white/[0.03] text-white/55 hover:border-white/30 hover:text-white/80'
//                     }`}
//                   >
//                     {item.chapter}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* meta chip */}
//             <div
//               key={`meta-${active}`}
//               className="hero-fade-up mb-7 flex flex-wrap items-center gap-3"
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
//                 <Leaf size={12} style={{ color: GREEN }} />
//                 {slide.tag}
//               </span>
//             </div>

//             {/* slide content stack */}
//             <div className="grid">
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const Heading = index === 0 ? 'h1' : 'h2';

//                 return (
//                   <div
//                     key={item.caption}
//                     aria-hidden={!isActive}
//                     className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                       isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                     }`}
//                     style={{ gridArea: '1 / 1' }}
//                   >
//                     <p
//                       className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-lime-300 sm:text-[11px] ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 80)}
//                     >
//                       <span
//                         className="mr-1 h-[2px] w-8 rounded-full"
//                         style={{ backgroundColor: GREEN }}
//                       />
//                       {item.eyebrow.map((label, i) => (
//                         <span key={label} className="flex items-center gap-3">
//                           {i > 0 && (
//                             <span
//                               className="h-1 w-1 rounded-full"
//                               style={{ backgroundColor: GREEN }}
//                             />
//                           )}
//                           {label}
//                         </span>
//                       ))}
//                     </p>

//                     <Heading
//                       className="font-display font-normal leading-[0.96] tracking-[-0.045em]"
//                       style={{
//                         fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                       }}
//                     >
//                       {item.headline.map((line, i) => (
//                         <span
//                           key={line}
//                           className="block overflow-hidden pb-[0.06em]"
//                         >
//                           <span
//                             className={`block transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                               isActive
//                                 ? 'translate-y-0 opacity-100 blur-0'
//                                 : 'translate-y-[110%] opacity-60 blur-[2px]'
//                             } ${
//                               i === 1
//                                 ? 'bg-clip-text text-transparent italic'
//                                 : 'text-white'
//                             }`}
//                             style={{
//                               transitionDelay: isActive
//                                 ? `${160 + i * 110}ms`
//                                 : '0ms',
//                               ...(i === 1
//                                 ? {
//                                     backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                                   }
//                                 : null),
//                             }}
//                           >
//                             {line}
//                           </span>
//                         </span>
//                       ))}
//                     </Heading>

//                     {/* PULL QUOTE support block */}
//                     <div
//                       className={`relative mt-8 max-w-[36rem] pl-8 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 420)}
//                     >
//                       <span
//                         aria-hidden="true"
//                         className="pointer-events-none absolute -left-1 -top-4 select-none font-display text-[5.5rem] leading-none"
//                         style={{ color: `rgba(${accent},0.35)` }}
//                       >
//                         “
//                       </span>
//                       <p className="font-display text-[1.05rem] italic leading-snug text-white/85 sm:text-[1.15rem]">
//                         {item.support}
//                       </p>
//                       <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
//                         — {item.attribution}
//                       </p>
//                     </div>

//                     <div
//                       className={`mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 540)}
//                     >
//                       <Link
//                         to={item.primaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#7ED957] px-7 py-3.5 font-heading text-sm font-semibold text-[#06110C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(126,217,87,0.4)]"
//                       >
//                         <span className="relative z-10">
//                           {item.primaryCta.label}
//                         </span>
//                         <ArrowUpRight
//                           size={18}
//                           className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                         />
//                         <span className="absolute inset-0 -translate-x-full bg-[#B5F27E] transition-transform duration-500 group-hover:translate-x-0" />
//                       </Link>

//                       <Link
//                         to={item.secondaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
//                       >
//                         {item.secondaryCta.label}
//                         <ArrowUpRight
//                           size={16}
//                           className="opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* transport */}
//             <div className="mt-10 flex items-center gap-4">
//               <div className="flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.04] p-1 backdrop-blur-sm">
//                 <button
//                   type="button"
//                   onClick={() => go(-1)}
//                   aria-label="Previous slide"
//                   className="grid h-10 w-10 place-items-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setIsPlaying((p) => !p)}
//                   aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//                   className="relative grid h-10 w-10 place-items-center rounded-full bg-[#7ED957] text-[#06110C] transition-transform hover:scale-105"
//                 >
//                   {isPlaying ? (
//                     <Pause size={14} fill="currentColor" />
//                   ) : (
//                     <Play size={14} fill="currentColor" className="ml-0.5" />
//                   )}
//                   <svg
//                     viewBox="0 0 40 40"
//                     className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
//                     aria-hidden="true"
//                   >
//                     <circle
//                       cx="20"
//                       cy="20"
//                       r="18"
//                       fill="none"
//                       stroke="rgba(0,0,0,0.22)"
//                       strokeWidth="2"
//                     />
//                     <circle
//                       key={`ring-${active}`}
//                       cx="20"
//                       cy="20"
//                       r="18"
//                       fill="none"
//                       stroke="#06110C"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeDasharray={RING}
//                       className="hero-ring"
//                       style={{
//                         animationDuration: `${AUTOPLAY_MS}ms`,
//                         animationPlayState: isPlaying ? 'running' : 'paused',
//                       }}
//                     />
//                   </svg>
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => go(1)}
//                   aria-label="Next slide"
//                   className="grid h-10 w-10 place-items-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>

//               <div className="min-w-0 flex-1">
//                 <div className="flex items-baseline justify-between gap-3">
//                   <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
//                     Timeline
//                   </span>
//                   <span className="font-heading text-[11px] tabular-nums text-white/55">
//                     {String(active + 1).padStart(2, '0')} /{' '}
//                     {String(SLIDES.length).padStart(2, '0')}
//                   </span>
//                 </div>
//                 <div className="mt-2 flex items-center gap-1">
//                   {SLIDES.map((item, index) => {
//                     const isCurrent = index === active;
//                     const isPast = index < active;
//                     return (
//                       <button
//                         key={item.caption}
//                         type="button"
//                         onClick={() => jumpTo(index)}
//                         aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                         aria-current={isCurrent ? 'true' : undefined}
//                         className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/12"
//                       >
//                         <span
//                           className="absolute inset-y-0 left-0 rounded-full bg-[#7ED957]"
//                           style={{
//                             width: isCurrent
//                               ? '100%'
//                               : isPast
//                               ? '100%'
//                               : '0%',
//                             opacity: isCurrent ? 1 : isPast ? 0.45 : 0,
//                             animation: isCurrent
//                               ? `heroProgress ${AUTOPLAY_MS}ms linear forwards`
//                               : 'none',
//                             animationPlayState: isPlaying
//                               ? 'running'
//                               : 'paused',
//                           }}
//                         />
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT — reserved negative space + caption spine */}
//           <div className="relative hidden lg:block">
//             <div
//               className="absolute right-0 top-1/2 -translate-y-1/2"
//               style={{
//                 transform: parallaxOn
//                   ? `translate3d(${px * -6}px, calc(-50% + ${py * -6}px), 0)`
//                   : undefined,
//                 transition: parallaxOn
//                   ? 'transform 500ms cubic-bezier(0.22,1,0.36,1)'
//                   : undefined,
//               }}
//             >
//               <div
//                 key={`spine-${active}`}
//                 className="hero-fade-up flex flex-col items-end gap-4 [writing-mode:vertical-rl] [text-orientation:mixed]"
//               >
//                 <span
//                   className="text-[10px] font-semibold uppercase tracking-[0.42em] transition-colors duration-500"
//                   style={{ color: `rgba(${accent},0.85)` }}
//                 >
//                   {slide.chapter}
//                 </span>
//                 <span className="h-16 w-px bg-white/20" />
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/40">
//                   {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
//                 </span>
//                 <span className="h-16 w-px bg-white/20" />
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/35">
//                   Terra Ecopreneurs
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ============ DEPTH LAYER 3 — NEAREST — TOP CHROME ============ */}
//       <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
//         <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
//           <div className="flex items-center gap-3">
//             <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm">
//               <Leaf size={14} style={{ color: GREEN }} />
//             </span>
//             <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
//               Terra
//             </span>
//           </div>
//           <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/40">
//             Sustainable solutions · 2025
//           </span>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroProgress { from { width: 0%; } to { width: 100%; } }
//         @keyframes heroRing { from { stroke-dashoffset: ${RING}; } to { stroke-dashoffset: 0; } }
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes heroKenburns {
//           0% { transform: scale(1.04) translate3d(0,0,0); }
//           100% { transform: scale(1.14) translate3d(-1.2%, -0.8%, 0); }
//         }
//         @keyframes heroBreathe {
//           0%, 100% { opacity: 0.6; filter: blur(100px); }
//           50% { opacity: 1; filter: blur(120px); }
//         }

//         .hero-ring {
//           stroke-dashoffset: ${RING};
//           animation-name: heroRing;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         .hero-fade-up {
//           opacity: 0;
//           animation: heroFadeUp 700ms cubic-bezier(0.16,1,0.3,1) forwards;
//         }
//         .hero-video-in {
//           animation: heroKenburns 14s ease-out forwards;
//         }
//         .hero-breathe {
//           animation: heroBreathe 9s ease-in-out infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .hero-ring { animation: none; stroke-dashoffset: 0; }
//           .hero-fade-up { animation: none; opacity: 1; }
//           .hero-video-in { animation: none; }
//           .hero-breathe { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }


// import {
//   useState,
//   useCallback,
//   useEffect,
//   useRef,
//   type CSSProperties,
// } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
//   Zap,
//   Globe,
//   Volume2,
//   VolumeX,
//   Maximize,
// } from 'lucide-react';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string[];
//   headline: [string, string];
//   headlineScale: number;
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const AUTOPLAY_MS = 8000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';

// // Full-bleed section background (aerial forest + water works best).
// const BACKGROUND_IMAGE =
//   'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2400&q=85';

// // Add up to 8 slides — the number list, counter and progress adapt automatically.
// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Wind turbines over green hills',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/31079999/',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable future.'],
//     headlineScale: 0.92,
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Lush forest canopy',
//     },
//     video: {
//       src: '/videos/14160939_1920_1080_60fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Clean energy', 'Efficient operations'],
//     headline: ['Use less energy.', 'Achieve more.'],
//     headlineScale: 1,
//     support:
//       'From energy audits to clean energy, we help organisations lower operating costs and build more resilient operations.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'Contact our team', to: '/contact' },
//     caption: 'Efficiency, clean energy, and smarter buildings',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Sunlight filtering through a forest',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/33234773/',
//       poster:
//         'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['TRANSFORM', 'Karnataka'],
//     headline: ['Growing opportunity.', 'Restoring livelihoods.'],
//     headlineScale: 0.8,
//     support:
//       'Through the TRANSFORM project, we support Karnataka’s coffee and spice producers with sustainable practices and stronger market connections.',
//     primaryCta: { label: 'Discover TRANSFORM', to: '/agriculture' },
//     secondaryCta: { label: 'See our impact', to: '/impact' },
//     caption: 'Working with coffee and spice producers',
//   },
// ];

// const FEATURES = [
//   { icon: Leaf, lines: ['Green', 'Planet'] },
//   { icon: Zap, lines: ['Clean', 'Energy'] },
//   { icon: Globe, lines: ['Sustainable', 'Future'] },
// ];

// const HEADLINE_SIZE = 'clamp(2.5rem, min(5.6vw, 9.5svh), 5.75rem)';

// const pad = (n: number) => String(n).padStart(2, '0');

// const formatTime = (seconds: number) => {
//   if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
//   const m = Math.floor(seconds / 60);
//   const s = Math.floor(seconds % 60);
//   return `${m}:${String(s).padStart(2, '0')}`;
// };

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// /* ------------------------------------------------------------------ */
// /*  Decorative pieces                                                  */
// /* ------------------------------------------------------------------ */

// function BlurredLeaves() {
//   const leaf = (className: string, gradient: string) => (
//     <div
//       className={`absolute ${className}`}
//       style={{ borderRadius: '0 100% 0 100%', backgroundImage: gradient }}
//     />
//   );

//   return (
//     <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
//       {leaf(
//         '-left-10 -top-6 h-52 w-24 -rotate-[28deg] opacity-80 blur-[3px]',
//         'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)'
//       )}
//       {leaf(
//         '-left-14 bottom-[14%] h-64 w-28 rotate-[38deg] opacity-80 blur-[4px]',
//         'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)'
//       )}
//       {leaf(
//         '-left-6 -bottom-8 h-44 w-20 rotate-[72deg] opacity-70 blur-[6px]',
//         'linear-gradient(135deg, #5FBF3C 0%, #1F5E21 100%)'
//       )}
//       {leaf(
//         '-right-8 -bottom-10 h-48 w-24 -rotate-[60deg] opacity-80 blur-[4px]',
//         'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)'
//       )}
//     </div>
//   );
// }

// /* Glowing sweep lines that frame the video card (desktop only) */
// function GlowSweeps() {
//   return (
//     <svg
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 z-[8] hidden h-full w-full overflow-visible lg:block"
//     >
//       <defs>
//         <filter id="sweep-blur" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="1.1" />
//         </filter>
//         <linearGradient id="sweep-fade" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={GREEN_SOFT} stopOpacity="0.15" />
//           <stop offset="60%" stopColor={GREEN_SOFT} stopOpacity="1" />
//           <stop offset="100%" stopColor={GREEN} stopOpacity="0.9" />
//         </linearGradient>
//       </defs>

//       {/* top sweep: falls toward the card's top-left corner */}
//       <path
//         d="M 71 0 C 66 9, 62 16, 56 25"
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="6"
//         opacity="0.45"
//         filter="url(#sweep-blur)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 71 0 C 66 9, 62 16, 56 25"
//         fill="none"
//         stroke="url(#sweep-fade)"
//         strokeWidth="2"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 82 0 C 76 8, 70 14, 63 22"
//         fill="none"
//         stroke={GREEN_SOFT}
//         strokeWidth="1"
//         opacity="0.3"
//         vectorEffect="non-scaling-stroke"
//       />

//       {/* bottom sweep: leaves the card's lower-left and runs off the bottom edge */}
//       <path
//         d="M 43 64 C 46 80, 62 90, 82 100"
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="6"
//         opacity="0.4"
//         filter="url(#sweep-blur)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 43 64 C 46 80, 62 90, 82 100"
//         fill="none"
//         stroke={GREEN_SOFT}
//         strokeWidth="2"
//         opacity="0.95"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 41 62 C 43 84, 60 95, 74 100"
//         fill="none"
//         stroke={GREEN_SOFT}
//         strokeWidth="1"
//         opacity="0.3"
//         vectorEffect="non-scaling-stroke"
//       />
//     </svg>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Hero                                                               */
// /* ------------------------------------------------------------------ */

// export function Hero() {
//   const total = SLIDES.length;

//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true); // slideshow auto-advance
//   const [hoverCard, setHoverCard] = useState(false);
//   const [userPaused, setUserPaused] = useState(false); // video paused by the visitor
//   const [muted, setMuted] = useState(true);
//   const [time, setTime] = useState({ current: 0, duration: 0 });
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
//   const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const cardRef = useRef<HTMLDivElement | null>(null);

//   const slide = SLIDES[active];
//   const slideshowRunning = isPlaying && !hoverCard;

//   const go = useCallback(
//     (direction: 1 | -1) => {
//       setActive((index) => (index + direction + total) % total);
//     },
//     [total]
//   );

//   // New slide: reset video UI state
//   useEffect(() => {
//     setUserPaused(false);
//     setTime({ current: 0, duration: 0 });
//   }, [active]);

//   // Play only the active video
//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;
//       video.muted = muted;

//       if (index === active && !userPaused && !failedVideos.has(index)) {
//         video.play().catch(() => {
//           // Unmuted autoplay can be blocked — fall back to muted.
//           if (!video.muted) {
//             video.muted = true;
//             setMuted(true);
//             video.play().catch(() => undefined);
//           }
//         });
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, userPaused, muted, failedVideos]);

//   // Auto-advance
//   useEffect(() => {
//     if (!slideshowRunning) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(timer);
//   }, [active, slideshowRunning, go]);

//   const markVideoReady = (index: number) =>
//     setReadyVideos((current) => new Set(current).add(index));
//   const markVideoFailed = (index: number) =>
//     setFailedVideos((current) => new Set(current).add(index));

//   const watchVideo = () => {
//     const video = videoRefs.current[active];
//     if (video) video.currentTime = 0;
//     setMuted(false);
//     setUserPaused(false);
//     setIsPlaying(false);
//     cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//   };

//   const seek = (event: React.MouseEvent<HTMLDivElement>) => {
//     const video = videoRefs.current[active];
//     if (!video || !Number.isFinite(video.duration)) return;
//     const rect = event.currentTarget.getBoundingClientRect();
//     const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
//     video.currentTime = ratio * video.duration;
//   };

//   const goFullscreen = () => {
//     cardRef.current?.requestFullscreen?.().catch(() => undefined);
//   };

//   const progress = time.duration > 0 ? (time.current / time.duration) * 100 : 0;

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#031a12] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured highlights"
//     >
//       {/* ---------- BACKGROUND ---------- */}
//       <img
//         src={BACKGROUND_IMAGE}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 z-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 z-[1] bg-[#04200f]/30" />
//       <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#031a12]/92 via-[#031a12]/50 to-[#031a12]/5" />
//       <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[#031a12]/70 to-transparent" />

//       <BlurredLeaves />
//       <GlowSweeps />

//       {/* ---------- MAIN ---------- */}
//       <div className="shell relative z-30 flex min-h-[clamp(720px,100svh,960px)] items-center pb-32 pt-28 lg:pb-28 lg:pt-32">
//         <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)_84px] lg:gap-8 xl:gap-10">

//           {/* ===== LEFT: TEXT ===== */}
//           <div className="min-w-0">
//             <div className="grid">
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const Heading = index === 0 ? 'h1' : 'h2';

//                 return (
//                   <div
//                     key={item.caption}
//                     aria-hidden={!isActive}
//                     className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                       isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                     }`}
//                   >
//                     {/* Badge */}
//                     <div
//                       className={`inline-flex max-w-full items-center gap-3.5 rounded-full border border-[#7ED957]/45 bg-[#04240f]/65 py-1.5 pl-1.5 pr-5 backdrop-blur-sm sm:pr-6 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 80)}
//                     >
//                       <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#7ED957]/60 bg-gradient-to-br from-[#1c6b2d] to-[#0a3a1a] sm:h-11 sm:w-11">
//                         <Leaf size={20} style={{ color: GREEN }} />
//                       </span>
//                       <span className="truncate text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-sm">
//                         <span style={{ color: GREEN }}>{item.eyebrow[0]}</span>
//                         <span className="mx-2.5 text-white/70">•</span>
//                         <span className="text-white/75">Solution </span>
//                         <b className="font-semibold text-white">
//                           {pad(index + 1)} / {pad(total)}
//                         </b>
//                       </span>
//                     </div>

//                     {/* Headline */}
//                     <Heading
//                       className="mt-7 font-display font-normal leading-[1.02] tracking-[-0.035em] [text-shadow:0_6px_30px_rgba(0,0,0,0.45)]"
//                       style={{
//                         fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                       }}
//                     >
//                       {item.headline.map((line, i) => (
//                         <span key={line} className="block overflow-hidden pb-[0.08em]">
//                           <span
//                             className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                               isActive ? 'translate-y-0' : 'translate-y-[110%]'
//                             } ${i === 1 ? 'bg-clip-text pr-1 italic text-transparent' : 'text-white'}`}
//                             style={{
//                               transitionDelay: isActive ? `${180 + i * 140}ms` : '0ms',
//                               ...(i === 1
//                                 ? {
//                                     backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                                   }
//                                 : null),
//                             }}
//                           >
//                             {line}
//                           </span>
//                         </span>
//                       ))}
//                     </Heading>

//                     {/* Support */}
//                     <p
//                       className={`mt-6 max-w-[34rem] border-l-[3px] border-[#7ED957] py-0.5 pl-5 text-sm leading-relaxed text-white/85 sm:text-base lg:text-[1.1rem] lg:leading-[1.6] ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 480)}
//                     >
//                       {item.support}
//                     </p>

//                     {/* CTAs */}
//                     <div
//                       className={`mt-8 flex flex-wrap items-center gap-4 sm:gap-5 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 600)}
//                     >
//                       <Link
//                         to={item.primaryCta.to}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-5 rounded-full py-1.5 pl-6 pr-1.5 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.45)] sm:pl-7 sm:text-base"
//                         style={{
//                           backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                         }}
//                       >
//                         {item.primaryCta.label}
//                         <span className="grid h-11 w-11 place-items-center rounded-full bg-[#06200d] text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:h-12 sm:w-12">
//                           <ArrowRight size={19} />
//                         </span>
//                       </Link>

//                       <button
//                         type="button"
//                         onClick={watchVideo}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-3 rounded-full border border-white/45 bg-white/5 py-1.5 pl-1.5 pr-6 font-heading text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-[#7ED957] hover:bg-white/10 sm:text-base"
//                       >
//                         <span className="grid h-10 w-10 place-items-center rounded-full border border-white/60 transition-colors group-hover:border-[#7ED957] group-hover:text-[#7ED957] sm:h-11 sm:w-11">
//                           <Play size={15} fill="currentColor" className="ml-0.5" />
//                         </span>
//                         Watch video
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Feature row */}
//             <ul className="mt-9 flex max-w-[34rem] flex-wrap items-center gap-y-4 border-t border-[#7ED957]/40 pt-6 sm:mt-10 lg:max-w-[36rem]">
//               {FEATURES.map(({ icon: Icon, lines }, i) => (
//                 <li
//                   key={lines.join('-')}
//                   className={`flex items-center gap-3 text-sm leading-snug text-white/90 sm:text-base ${
//                     i === 0 ? 'pr-5 sm:pr-6' : 'border-l border-white/25 px-5 sm:px-6'
//                   }`}
//                 >
//                   <Icon
//                     size={32}
//                     strokeWidth={1.4}
//                     className="shrink-0 drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]"
//                     style={{ color: GREEN }}
//                   />
//                   <span>
//                     {lines[0]}
//                     <br />
//                     {lines[1]}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ===== CENTRE: VIDEO CARD ===== */}
//           <div className="relative z-20 min-w-0">
//             <div
//               ref={cardRef}
//               onMouseEnter={() => setHoverCard(true)}
//               onMouseLeave={() => setHoverCard(false)}
//               className="group relative aspect-video overflow-hidden rounded-[28px] border border-[#a0ff8c]/70 bg-[#06271B] shadow-[0_0_0_1px_rgba(126,217,87,0.3),0_0_50px_rgba(126,217,87,0.45),0_30px_90px_rgba(0,0,0,0.5)] sm:rounded-[36px] lg:aspect-[1.62/1]"
//             >
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const videoIsVisible =
//                   isActive && readyVideos.has(index) && !failedVideos.has(index);

//                 return (
//                   <div
//                     key={item.image.src}
//                     aria-hidden={!isActive}
//                     className={`absolute inset-0 transition-opacity duration-1000 ${
//                       isActive ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <img
//                       src={item.video.poster}
//                       alt={isActive ? item.image.alt : ''}
//                       className="absolute inset-0 h-full w-full object-cover"
//                     />
//                     <video
//                       ref={(element) => {
//                         videoRefs.current[index] = element;
//                       }}
//                       src={item.video.src}
//                       poster={item.video.poster}
//                       muted
//                       loop
//                       playsInline
//                       preload={index === 0 ? 'auto' : 'metadata'}
//                       onCanPlay={() => markVideoReady(index)}
//                       onError={() => markVideoFailed(index)}
//                       onLoadedMetadata={(event) => {
//                         if (index === active)
//                           setTime((t) => ({ ...t, duration: event.currentTarget.duration || 0 }));
//                       }}
//                       onTimeUpdate={(event) => {
//                         if (index === active)
//                           setTime({
//                             current: event.currentTarget.currentTime,
//                             duration: event.currentTarget.duration || 0,
//                           });
//                       }}
//                       className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                         videoIsVisible ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     />
//                   </div>
//                 );
//               })}

//               {/* readability */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02120c]/75 via-transparent to-transparent" />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

//               {/* big play / pause */}
//               <button
//                 type="button"
//                 onClick={() => setUserPaused((paused) => !paused)}
//                 aria-label={userPaused ? 'Play video' : 'Pause video'}
//                 className="absolute inset-0 z-10 grid place-items-center"
//               >
//                 <span
//                   className={`grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-[#0b1f17]/80 text-[#7ED957] shadow-[0_0_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 sm:h-20 sm:w-20 ${
//                     userPaused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
//                   }`}
//                 >
//                   {userPaused ? (
//                     <Play size={30} fill="currentColor" className="ml-1" />
//                   ) : (
//                     <Pause size={28} fill="currentColor" />
//                   )}
//                 </span>
//               </button>

//               {/* player bar */}
//               <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3 pt-8 sm:px-6 sm:pb-4">
//                 <div className="flex items-center gap-3 text-sm text-white sm:gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setUserPaused((paused) => !paused)}
//                     aria-label={userPaused ? 'Play video' : 'Pause video'}
//                     className="transition-colors hover:text-[#7ED957]"
//                   >
//                     {userPaused ? (
//                       <Play size={18} fill="currentColor" />
//                     ) : (
//                       <Pause size={18} fill="currentColor" />
//                     )}
//                   </button>

//                   <span className="tabular-nums text-xs sm:text-sm">
//                     {formatTime(time.current)} / {formatTime(time.duration)}
//                   </span>

//                   <span className="ml-auto" />

//                   <button
//                     type="button"
//                     onClick={() => setMuted((value) => !value)}
//                     aria-label={muted ? 'Unmute video' : 'Mute video'}
//                     className="transition-colors hover:text-[#7ED957]"
//                   >
//                     {muted ? <VolumeX size={19} /> : <Volume2 size={19} />}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={goFullscreen}
//                     aria-label="Fullscreen"
//                     className="transition-colors hover:text-[#7ED957]"
//                   >
//                     <Maximize size={18} />
//                   </button>
//                 </div>

//                 <div
//                   role="progressbar"
//                   aria-label="Video progress"
//                   aria-valuemin={0}
//                   aria-valuemax={100}
//                   aria-valuenow={Math.round(progress)}
//                   onClick={seek}
//                   className="mt-2.5 h-1.5 cursor-pointer overflow-hidden rounded-full bg-white/30"
//                 >
//                   <div
//                     className="h-full rounded-full bg-white"
//                     style={{ width: `${progress}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===== RIGHT: NUMBERED SOLUTIONS ===== */}
//           <nav
//             aria-label="Slides"
//             className="relative z-20 flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:items-start lg:gap-3.5 lg:overflow-visible lg:pb-0"
//           >
//             <span
//               aria-hidden="true"
//               className="pointer-events-none absolute bottom-0 left-[26px] top-0 hidden w-px bg-white/25 lg:block"
//             />
//             {SLIDES.map((item, index) => {
//               const isCurrent = index === active;

//               return (
//                 <button
//                   key={item.caption}
//                   type="button"
//                   onClick={() => setActive(index)}
//                   aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                   aria-current={isCurrent ? 'true' : undefined}
//                   className="group relative flex shrink-0 items-center gap-3 lg:w-full"
//                 >
//                   <span className="grid w-[52px] shrink-0 place-items-center">
//                     <span
//                       className={`block overflow-hidden rounded-full transition-all duration-500 ${
//                         isCurrent
//                           ? 'h-[52px] w-[52px] border-[3px] border-[#7ED957] shadow-[0_0_0_4px_rgba(126,217,87,0.2),0_0_24px_rgba(126,217,87,0.7)]'
//                           : 'h-10 w-10 border border-white/50 opacity-85 group-hover:border-[#B5F27E] group-hover:opacity-100'
//                       }`}
//                     >
//                       <img
//                         src={item.image.src}
//                         alt=""
//                         loading="lazy"
//                         className="h-full w-full object-cover"
//                       />
//                     </span>
//                   </span>
//                   <span
//                     className={`font-heading text-sm font-semibold tabular-nums transition-colors ${
//                       isCurrent
//                         ? 'text-[#B5F27E]'
//                         : 'text-white/60 group-hover:text-white'
//                     }`}
//                   >
//                     {pad(index + 1)}
//                   </span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       {/* ---------- CONTROLS (bottom right) ---------- */}
//       <div className="absolute bottom-6 right-5 z-40 flex items-center gap-4 sm:bottom-8 sm:right-10 lg:right-16 xl:right-24">
//         <button
//           type="button"
//           onClick={() => go(-1)}
//           aria-label="Previous slide"
//           className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/55 text-white backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button
//           type="button"
//           onClick={() => go(1)}
//           aria-label="Next slide"
//           className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/55 text-white backdrop-blur-sm transition-all hover:translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="hidden w-40 sm:block">
//           <div className="flex items-center justify-between text-sm">
//             <span>
//               <b className="font-semibold">{pad(active + 1)}</b>
//               <span className="text-white/60"> / {pad(total)}</span>
//             </span>
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//               className="text-white/70 transition-colors hover:text-[#7ED957]"
//             >
//               {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
//             </button>
//           </div>
//           <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/25">
//             <div
//               key={`progress-${active}`}
//               className="hero-progress h-full rounded-full"
//               style={{
//                 backgroundColor: GREEN,
//                 animationDuration: `${AUTOPLAY_MS}ms`,
//                 animationPlayState: slideshowRunning ? 'running' : 'paused',
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroProgress {
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//         .hero-progress {
//           width: 0%;
//           animation-name: heroProgress;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-progress { animation: none; width: 100%; }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Hero;


// import {
//   useState,
//   useCallback,
//   useEffect,
//   useRef,
//   type CSSProperties,
//   type MouseEvent as ReactMouseEvent,
// } from 'react';
// import { createPortal } from 'react-dom';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
//   Zap,
//   Globe,
//   Volume2,
//   VolumeX,
//   Maximize,
//   X,
// } from 'lucide-react';

// type Slide = {
//   title: string;
//   headline: [string, string];
//   description: string;
//   image: string; // thumbnail + fallback
//   video: string;
//   link: string;
// };

// const AUTOPLAY_MS = 8000;
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';

// // Full-bleed section background (aerial forest + water works best).
// const BACKGROUND_IMAGE =
//   'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2400&q=85';

// // Order = order of the numbered list. The counter, list and progress adapt automatically.
// const SLIDES: Slide[] = [
//   {
//     title: 'Energy Efficiency & Audit',
//     headline: ['Smarter Energy.', 'Greater Efficiency.'],
//     description:
//       'Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.',
//     video: 'https://www.pexels.com/download/video/28652435/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png',
//     link: '/solutions/energy-efficiency',
//   },
//   {
//     title: 'Clean Energy',
//     headline: ['Powering a', 'Cleaner Tomorrow.'],
//     description:
//       'Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.',
//     video: 'https://www.pexels.com/download/video/10312637/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png',
//     link: '/solutions/clean-energy',
//   },
//   {
//     title: 'IBMS',
//     headline: ['Buildings That', 'Think Smarter.'],
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
//     video: 'https://www.pexels.com/download/video/8566709/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png',
//     link: '/solutions/ibms',
//   },
//   {
//     title: 'Digital Solutions',
//     headline: ['Transforming Ideas.', 'Into Intelligence.'],
//     description:
//       'Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.',
//     video: 'https://www.pexels.com/download/video/35977437/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png',
//     link: '/solutions/digital',
//   },
//   {
//     title: 'Industrial Automation',
//     headline: ['Automate Today.', 'Advance Tomorrow.'],
//     description:
//       'Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.',
//     video: 'https://www.pexels.com/download/video/32386532/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png',
//     link: '/solutions/industrial-automation',
//   },
//   {
//     title: 'Pre-fab Structures',
//     headline: ['Build Faster.', 'Build Smarter.'],
//     description:
//       'Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.',
//     video: 'https://www.pexels.com/download/video/29923183/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png',
//     link: '/solutions/prefab',
//   },
//   {
//     title: 'Press Components',
//     headline: ['Precision in', 'Every Detail.'],
//     description:
//       'Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.',
//     video: 'https://www.pexels.com/download/video/31802320/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f3~mv2.png/v1/fill/w_362,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png',
//     link: '/solutions/press-components',
//   },
//   {
//     title: 'Sustainable Management',
//     headline: ['Growing Responsibly.', 'Creating Impact.'],
//     description:
//       'Drive long-term growth and environmental responsibility through strategic sustainability frameworks built for the modern enterprise.',
//     video: 'https://www.pexels.com/download/video/4380227/',
//     image:
//       'https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_362,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png',
//     link: '/solutions/sustainable-management',
//   },
// ];

// const FEATURES = [
//   { icon: Leaf, lines: ['Green', 'Planet'] },
//   { icon: Zap, lines: ['Clean', 'Energy'] },
//   { icon: Globe, lines: ['Sustainable', 'Future'] },
// ];

// const HEADLINE_SIZE = 'clamp(2.5rem, min(5.6vw, 9.5svh), 5.75rem)';

// // Long headlines shrink slightly so they stay inside the text column.
// const scaleFor = (headline: [string, string]) =>
//   Math.min(1, 17 / Math.max(headline[0].length, headline[1].length));

// const pad = (n: number) => String(n).padStart(2, '0');

// const formatTime = (seconds: number) => {
//   if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
//   const m = Math.floor(seconds / 60);
//   const s = Math.floor(seconds % 60);
//   return `${m}:${String(s).padStart(2, '0')}`;
// };

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// /* ------------------------------------------------------------------ */
// /*  Decorative pieces                                                  */
// /* ------------------------------------------------------------------ */

// function BlurredLeaves() {
//   const leaf = (className: string, gradient: string) => (
//     <div
//       className={`absolute ${className}`}
//       style={{ borderRadius: '0 100% 0 100%', backgroundImage: gradient }}
//     />
//   );

//   return (
//     <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
//       {leaf(
//         '-left-10 -top-6 h-52 w-24 -rotate-[28deg] opacity-80 blur-[3px]',
//         'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)'
//       )}
//       {leaf(
//         '-left-14 bottom-[14%] h-64 w-28 rotate-[38deg] opacity-80 blur-[4px]',
//         'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)'
//       )}
//       {leaf(
//         '-left-6 -bottom-8 h-44 w-20 rotate-[72deg] opacity-70 blur-[6px]',
//         'linear-gradient(135deg, #5FBF3C 0%, #1F5E21 100%)'
//       )}
//       {leaf(
//         '-right-8 -bottom-10 h-48 w-24 -rotate-[60deg] opacity-80 blur-[4px]',
//         'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)'
//       )}
//     </div>
//   );
// }

// /* Glowing sweep lines that frame the video card (desktop only) */
// function GlowSweeps() {
//   return (
//     <svg
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 z-[8] hidden h-full w-full overflow-visible lg:block"
//     >
//       <defs>
//         <filter id="sweep-blur" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="1.1" />
//         </filter>
//         <linearGradient id="sweep-fade" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={GREEN_SOFT} stopOpacity="0.15" />
//           <stop offset="60%" stopColor={GREEN_SOFT} stopOpacity="1" />
//           <stop offset="100%" stopColor={GREEN} stopOpacity="0.9" />
//         </linearGradient>
//       </defs>

//       {/* top sweep: falls toward the card's top-left corner */}
//       <path
//         d="M 71 0 C 66 9, 62 16, 56 25"
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="6"
//         opacity="0.45"
//         filter="url(#sweep-blur)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 71 0 C 66 9, 62 16, 56 25"
//         fill="none"
//         stroke="url(#sweep-fade)"
//         strokeWidth="2"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 82 0 C 76 8, 70 14, 63 22"
//         fill="none"
//         stroke={GREEN_SOFT}
//         strokeWidth="1"
//         opacity="0.3"
//         vectorEffect="non-scaling-stroke"
//       />

//       {/* bottom sweep: leaves the card's lower-left and runs off the bottom edge */}
//       <path
//         d="M 43 64 C 46 80, 62 90, 82 100"
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="6"
//         opacity="0.4"
//         filter="url(#sweep-blur)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 43 64 C 46 80, 62 90, 82 100"
//         fill="none"
//         stroke={GREEN_SOFT}
//         strokeWidth="2"
//         opacity="0.95"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M 41 62 C 43 84, 60 95, 74 100"
//         fill="none"
//         stroke={GREEN_SOFT}
//         strokeWidth="1"
//         opacity="0.3"
//         vectorEffect="non-scaling-stroke"
//       />
//     </svg>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Hero                                                               */
// /* ------------------------------------------------------------------ */

// export function Hero() {
//   const total = SLIDES.length;

//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true); // slideshow auto-advance
//   const [hoverCard, setHoverCard] = useState(false);
//   const [userPaused, setUserPaused] = useState(false); // video paused by the visitor
//   const [muted, setMuted] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [time, setTime] = useState({ current: 0, duration: 0 });
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
//   const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const closeButtonRef = useRef<HTMLButtonElement | null>(null);
//   const [modalFailed, setModalFailed] = useState(false);

//   const slide = SLIDES[active];
//   const slideshowRunning = isPlaying && !hoverCard && !modalOpen;

//   const go = useCallback(
//     (direction: 1 | -1) => {
//       setActive((index) => (index + direction + total) % total);
//     },
//     [total]
//   );

//   // New slide: reset video UI state
//   useEffect(() => {
//     setUserPaused(false);
//     setTime({ current: 0, duration: 0 });
//   }, [active]);

//   // Play only the active video
//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;
//       video.muted = muted;

//       if (index === active && !userPaused && !modalOpen && !failedVideos.has(index)) {
//         video.play().catch(() => {
//           // Unmuted autoplay can be blocked — fall back to muted.
//           if (!video.muted) {
//             video.muted = true;
//             setMuted(true);
//             video.play().catch(() => undefined);
//           }
//         });
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, userPaused, muted, modalOpen, failedVideos]);

//   // Auto-advance
//   useEffect(() => {
//     if (!slideshowRunning) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
//     return () => window.clearTimeout(timer);
//   }, [active, slideshowRunning, go]);

//   const closeModal = useCallback(() => setModalOpen(false), []);

//   // Video modal: Esc to close, lock page scroll, focus the close button
//   useEffect(() => {
//     if (!modalOpen) return;
//     const onKey = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') closeModal();
//     };
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
//     window.addEventListener('keydown', onKey);
//     closeButtonRef.current?.focus();
//     return () => {
//       window.removeEventListener('keydown', onKey);
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [modalOpen, closeModal]);

//   const markVideoReady = (index: number) =>
//     setReadyVideos((current) => new Set(current).add(index));
//   const markVideoFailed = (index: number) =>
//     setFailedVideos((current) => new Set(current).add(index));

//   const watchVideo = () => {
//     setModalFailed(false);
//     setModalOpen(true);
//   };

//   const seek = (event: ReactMouseEvent<HTMLDivElement>) => {
//     const video = videoRefs.current[active];
//     if (!video || !Number.isFinite(video.duration)) return;
//     const rect = event.currentTarget.getBoundingClientRect();
//     const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
//     video.currentTime = ratio * video.duration;
//   };

//   const goFullscreen = () => {
//     cardRef.current?.requestFullscreen?.().catch(() => undefined);
//   };

//   const progress = time.duration > 0 ? (time.current / time.duration) * 100 : 0;

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#031a12] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured highlights"
//     >
//       {/* ---------- BACKGROUND ---------- */}
//       <img
//         src={BACKGROUND_IMAGE}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 z-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 z-[1] bg-[#04200f]/30" />
//       <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#031a12]/92 via-[#031a12]/50 to-[#031a12]/5" />
//       <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[#031a12]/70 to-transparent" />

//       <BlurredLeaves />
//       <GlowSweeps />

//       {/* ---------- MAIN ---------- */}
//       <div className="shell relative z-30 flex min-h-[clamp(720px,100svh,960px)] items-center pb-32 pt-28 lg:pb-28 lg:pt-32">
//         <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)_84px] lg:gap-8 xl:gap-10">

//           {/* ===== LEFT: TEXT ===== */}
//           <div className="min-w-0">
//             <div className="grid">
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const Heading = index === 0 ? 'h1' : 'h2';

//                 return (
//                   <div
//                     key={item.title}
//                     aria-hidden={!isActive}
//                     className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
//                       isActive ? 'visible opacity-100' : 'invisible opacity-0'
//                     }`}
//                   >
//                     {/* Badge */}
//                     <div
//                       className={`inline-flex max-w-full items-center gap-3.5 rounded-full border border-[#7ED957]/45 bg-[#04240f]/65 py-1.5 pl-1.5 pr-5 backdrop-blur-sm sm:pr-6 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 80)}
//                     >
//                       <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#7ED957]/60 bg-gradient-to-br from-[#1c6b2d] to-[#0a3a1a] sm:h-11 sm:w-11">
//                         <Leaf size={20} style={{ color: GREEN }} />
//                       </span>
//                       <span className="truncate text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-sm">
//                         <span style={{ color: GREEN }}>{item.title}</span>
//                         <span className="mx-2.5 text-white/70">•</span>
//                         <span className="text-white/75">Solution </span>
//                         <b className="font-semibold text-white">
//                           {pad(index + 1)} / {pad(total)}
//                         </b>
//                       </span>
//                     </div>

//                     {/* Headline */}
//                     <Heading
//                       className="mt-7 font-display font-normal leading-[1.02] tracking-[-0.035em] [text-shadow:0_6px_30px_rgba(0,0,0,0.45)]"
//                       style={{
//                         fontSize: `calc(${HEADLINE_SIZE} * ${scaleFor(item.headline)})`,
//                       }}
//                     >
//                       {item.headline.map((line, i) => (
//                         <span key={line} className="block overflow-hidden pb-[0.08em]">
//                           <span
//                             className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                               isActive ? 'translate-y-0' : 'translate-y-[110%]'
//                             } ${i === 1 ? 'bg-clip-text pr-1 italic text-transparent' : 'text-white'}`}
//                             style={{
//                               transitionDelay: isActive ? `${180 + i * 140}ms` : '0ms',
//                               ...(i === 1
//                                 ? {
//                                     backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                                   }
//                                 : null),
//                             }}
//                           >
//                             {line}
//                           </span>
//                         </span>
//                       ))}
//                     </Heading>

//                     {/* Support */}
//                     <p
//                       className={`mt-6 max-w-[34rem] border-l-[3px] border-[#7ED957] py-0.5 pl-5 text-sm leading-relaxed text-white/85 sm:text-base lg:text-[1.1rem] lg:leading-[1.6] ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 480)}
//                     >
//                       {item.description}
//                     </p>

//                     {/* CTAs */}
//                     <div
//                       className={`mt-8 flex flex-wrap items-center gap-4 sm:gap-5 ${riseClass(
//                         isActive
//                       )}`}
//                       style={riseStyle(isActive, 600)}
//                     >
//                       <Link
//                         to={item.link}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-5 rounded-full py-1.5 pl-6 pr-1.5 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.45)] sm:pl-7 sm:text-base"
//                         style={{
//                           backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                         }}
//                       >
//                         Explore this solution
//                         <span className="grid h-11 w-11 place-items-center rounded-full bg-[#06200d] text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:h-12 sm:w-12">
//                           <ArrowRight size={19} />
//                         </span>
//                       </Link>

//                       <button
//                         type="button"
//                         onClick={watchVideo}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group inline-flex items-center gap-3 rounded-full border border-white/45 bg-white/5 py-1.5 pl-1.5 pr-6 font-heading text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-[#7ED957] hover:bg-white/10 sm:text-base"
//                       >
//                         <span className="grid h-10 w-10 place-items-center rounded-full border border-white/60 transition-colors group-hover:border-[#7ED957] group-hover:text-[#7ED957] sm:h-11 sm:w-11">
//                           <Play size={15} fill="currentColor" className="ml-0.5" />
//                         </span>
//                         Watch video
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Feature row */}
//             <ul className="mt-9 flex max-w-[34rem] flex-wrap items-center gap-y-4 border-t border-[#7ED957]/40 pt-6 sm:mt-10 lg:max-w-[36rem]">
//               {FEATURES.map(({ icon: Icon, lines }, i) => (
//                 <li
//                   key={lines.join('-')}
//                   className={`flex items-center gap-3 text-sm leading-snug text-white/90 sm:text-base ${
//                     i === 0 ? 'pr-5 sm:pr-6' : 'border-l border-white/25 px-5 sm:px-6'
//                   }`}
//                 >
//                   <Icon
//                     size={32}
//                     strokeWidth={1.4}
//                     className="shrink-0 drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]"
//                     style={{ color: GREEN }}
//                   />
//                   <span>
//                     {lines[0]}
//                     <br />
//                     {lines[1]}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ===== CENTRE: VIDEO CARD ===== */}
//           <div className="relative z-20 min-w-0">
//             <div
//               ref={cardRef}
//               onMouseEnter={() => setHoverCard(true)}
//               onMouseLeave={() => setHoverCard(false)}
//               className="group relative aspect-video overflow-hidden rounded-[28px] border border-[#a0ff8c]/70 bg-[#06271B] shadow-[0_0_0_1px_rgba(126,217,87,0.3),0_0_50px_rgba(126,217,87,0.45),0_30px_90px_rgba(0,0,0,0.5)] sm:rounded-[36px] lg:aspect-[1.62/1]"
//             >
//               {SLIDES.map((item, index) => {
//                 const isActive = index === active;
//                 const videoIsVisible =
//                   isActive && readyVideos.has(index) && !failedVideos.has(index);

//                 return (
//                   <div
//                     key={item.title}
//                     aria-hidden={!isActive}
//                     className={`absolute inset-0 transition-opacity duration-1000 ${
//                       isActive ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <img
//                       src={item.image}
//                       alt=""
//                       className="absolute inset-0 h-full w-full scale-110 object-cover blur-md"
//                     />
//                     <video
//                       ref={(element) => {
//                         videoRefs.current[index] = element;
//                       }}
//                       src={item.video}
//                       muted
//                       loop
//                       playsInline
//                       preload={index === 0 ? 'auto' : 'metadata'}
//                       onCanPlay={() => markVideoReady(index)}
//                       onError={() => markVideoFailed(index)}
//                       onLoadedMetadata={(event) => {
//                         if (index === active)
//                           setTime((t) => ({ ...t, duration: event.currentTarget.duration || 0 }));
//                       }}
//                       onTimeUpdate={(event) => {
//                         if (index === active)
//                           setTime({
//                             current: event.currentTarget.currentTime,
//                             duration: event.currentTarget.duration || 0,
//                           });
//                       }}
//                       className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                         videoIsVisible ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     />
//                   </div>
//                 );
//               })}

//               {/* readability */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02120c]/75 via-transparent to-transparent" />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

//               {/* big play / pause */}
//               <button
//                 type="button"
//                 onClick={() => setUserPaused((paused) => !paused)}
//                 aria-label={userPaused ? 'Play video' : 'Pause video'}
//                 className="absolute inset-0 z-10 grid place-items-center"
//               >
//                 <span
//                   className={`grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-[#0b1f17]/80 text-[#7ED957] shadow-[0_0_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 sm:h-20 sm:w-20 ${
//                     userPaused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
//                   }`}
//                 >
//                   {userPaused ? (
//                     <Play size={30} fill="currentColor" className="ml-1" />
//                   ) : (
//                     <Pause size={28} fill="currentColor" />
//                   )}
//                 </span>
//               </button>

//               {/* player bar */}
//               <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3 pt-8 sm:px-6 sm:pb-4">
//                 <div className="flex items-center gap-3 text-sm text-white sm:gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setUserPaused((paused) => !paused)}
//                     aria-label={userPaused ? 'Play video' : 'Pause video'}
//                     className="transition-colors hover:text-[#7ED957]"
//                   >
//                     {userPaused ? (
//                       <Play size={18} fill="currentColor" />
//                     ) : (
//                       <Pause size={18} fill="currentColor" />
//                     )}
//                   </button>

//                   <span className="tabular-nums text-xs sm:text-sm">
//                     {formatTime(time.current)} / {formatTime(time.duration)}
//                   </span>

//                   <span className="ml-auto" />

//                   <button
//                     type="button"
//                     onClick={() => setMuted((value) => !value)}
//                     aria-label={muted ? 'Unmute video' : 'Mute video'}
//                     className="transition-colors hover:text-[#7ED957]"
//                   >
//                     {muted ? <VolumeX size={19} /> : <Volume2 size={19} />}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={goFullscreen}
//                     aria-label="Fullscreen"
//                     className="transition-colors hover:text-[#7ED957]"
//                   >
//                     <Maximize size={18} />
//                   </button>
//                 </div>

//                 <div
//                   role="progressbar"
//                   aria-label="Video progress"
//                   aria-valuemin={0}
//                   aria-valuemax={100}
//                   aria-valuenow={Math.round(progress)}
//                   onClick={seek}
//                   className="mt-2.5 h-1.5 cursor-pointer overflow-hidden rounded-full bg-white/30"
//                 >
//                   <div
//                     className="h-full rounded-full bg-white"
//                     style={{ width: `${progress}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===== RIGHT: NUMBERED SOLUTIONS ===== */}
//           <nav
//             aria-label="Slides"
//             className="relative z-20 flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:items-start lg:gap-3.5 lg:overflow-visible lg:pb-0"
//           >
//             <span
//               aria-hidden="true"
//               className="pointer-events-none absolute bottom-0 left-[26px] top-0 hidden w-px bg-white/25 lg:block"
//             />
//             {SLIDES.map((item, index) => {
//               const isCurrent = index === active;

//               return (
//                 <button
//                   key={item.title}
//                   type="button"
//                   onClick={() => setActive(index)}
//                   aria-label={`Show solution ${index + 1}: ${item.title}`}
//                   aria-current={isCurrent ? 'true' : undefined}
//                   className="group relative flex shrink-0 items-center gap-3 lg:w-full"
//                 >
//                   <span className="grid w-[52px] shrink-0 place-items-center">
//                     <span
//                       className={`block overflow-hidden rounded-full transition-all duration-500 ${
//                         isCurrent
//                           ? 'h-[52px] w-[52px] border-[3px] border-[#7ED957] shadow-[0_0_0_4px_rgba(126,217,87,0.2),0_0_24px_rgba(126,217,87,0.7)]'
//                           : 'h-10 w-10 border border-white/50 opacity-85 group-hover:border-[#B5F27E] group-hover:opacity-100'
//                       }`}
//                     >
//                       <img
//                         src={item.image}
//                         alt=""
//                         loading="lazy"
//                         className="h-full w-full object-cover"
//                       />
//                     </span>
//                   </span>
//                   <span
//                     className={`font-heading text-sm font-semibold tabular-nums transition-colors ${
//                       isCurrent
//                         ? 'text-[#B5F27E]'
//                         : 'text-white/60 group-hover:text-white'
//                     }`}
//                   >
//                     {pad(index + 1)}
//                   </span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       {/* ---------- CONTROLS (bottom right) ---------- */}
//       <div className="absolute bottom-6 right-5 z-40 flex items-center gap-4 sm:bottom-8 sm:right-10 lg:right-16 xl:right-24">
//         <button
//           type="button"
//           onClick={() => go(-1)}
//           aria-label="Previous slide"
//           className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/55 text-white backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button
//           type="button"
//           onClick={() => go(1)}
//           aria-label="Next slide"
//           className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/55 text-white backdrop-blur-sm transition-all hover:translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="hidden w-40 sm:block">
//           <div className="flex items-center justify-between text-sm">
//             <span>
//               <b className="font-semibold">{pad(active + 1)}</b>
//               <span className="text-white/60"> / {pad(total)}</span>
//             </span>
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//               className="text-white/70 transition-colors hover:text-[#7ED957]"
//             >
//               {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
//             </button>
//           </div>
//           <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/25">
//             <div
//               key={`progress-${active}`}
//               className="hero-progress h-full rounded-full"
//               style={{
//                 backgroundColor: GREEN,
//                 animationDuration: `${AUTOPLAY_MS}ms`,
//                 animationPlayState: slideshowRunning ? 'running' : 'paused',
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* ---------- WATCH VIDEO MODAL ---------- */}
//       {modalOpen &&
//         createPortal(
//           <div
//             role="dialog"
//             aria-modal="true"
//             aria-label={`${slide.title} video`}
//             className="fixed inset-0 z-[100] grid place-items-center bg-[#021008]/90 p-4 backdrop-blur-md sm:p-8"
//             onClick={closeModal}
//           >
//             <div
//               className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-[#a0ff8c]/60 bg-black shadow-[0_0_0_1px_rgba(126,217,87,0.3),0_0_60px_rgba(126,217,87,0.4)] sm:rounded-[32px]"
//               onClick={(event) => event.stopPropagation()}
//             >
//               <div className="flex items-center justify-between gap-4 bg-[#06271B] px-5 py-3 sm:px-7">
//                 <p className="truncate font-heading text-sm font-semibold sm:text-base">
//                   <span style={{ color: GREEN }}>{slide.title}</span>
//                 </p>
//                 <button
//                   ref={closeButtonRef}
//                   type="button"
//                   onClick={closeModal}
//                   aria-label="Close video"
//                   className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               <div className="relative aspect-video bg-black">
//                 <video
//                   key={slide.video}
//                   src={slide.video}
//                   autoPlay
//                   controls
//                   playsInline
//                   controlsList="nodownload"
//                   onError={() => setModalFailed(true)}
//                   className="absolute inset-0 h-full w-full object-contain"
//                 />
//                 {modalFailed && (
//                   <div className="absolute inset-0 grid place-items-center bg-[#06271B] p-6 text-center text-sm text-white/80">
//                     This video couldn’t be loaded. Please try again later.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>,
//           document.body
//         )}

//       <style>{`
//         @keyframes heroProgress {
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//         .hero-progress {
//           width: 0%;
//           animation-name: heroProgress;
//           animation-timing-function: linear;
//           animation-fill-mode: forwards;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .hero-progress { animation: none; width: 100%; }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Hero;





import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Zap,
  Globe,
  Volume2,
  VolumeX,
  Maximize,
  X,
} from "lucide-react";

type Slide = {
  title: string;
  headline: [string, string];
  description: string;
  image: string;
  video: string;
  link: string;
};

const AUTOPLAY_MS = 8000;
const GREEN = "#7ED957";
const GREEN_SOFT = "#B5F27E";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2400&q=85";

const SLIDES: Slide[] = [
  {
    title: "Energy Efficiency & Audit",
    headline: ["Smarter Energy.", "Greater Efficiency."],
    description:
      "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
    video: "https://www.pexels.com/download/video/28652435/",
    image:
      "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
    link: "/solutions/energy-efficiency",
  },
  {
    title: "Clean Energy",
    headline: ["Powering a", "Cleaner Tomorrow."],
    description:
      "Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.",
    video: "https://www.pexels.com/download/video/10312637/",
    image:
      "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    link: "/solutions/clean-energy",
  },
  {
    title: "IBMS",
    headline: ["Buildings That", "Think Smarter."],
    description:
      "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
    video: "https://www.pexels.com/download/video/6903977/",
    image:
      "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
    link: "/solutions/ibms",
  },
  {
    title: "Digital Solutions",
    headline: ["Transforming Ideas.", "Into Intelligence."],
    description:
      "Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.",
    video: "https://www.pexels.com/download/video/35977437/",
    image:
      "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    link: "/solutions/digital",
  },
  {
    title: "Industrial Automation",
    headline: ["Automate Today.", "Advance Tomorrow."],
    description:
      "Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.",
    video: "https://www.pexels.com/download/video/32386532/",
    image:
      "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
    link: "/solutions/industrial-automation",
  },
  {
    title: "Pre-fab Structures",
    headline: ["Build Faster.", "Build Smarter."],
    description:
      "Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.",
    video: "https://www.pexels.com/download/video/29923183/",
    image:
      "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
    link: "/solutions/prefab",
  },
  {
    title: "Press Components",
    headline: ["Precision in", "Every Detail."],
    description:
      "Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.",
    video: "https://www.pexels.com/download/video/31802320/",
    image:
      "https://i.pinimg.com/1200x/79/8f/a5/798fa5a60e05706361958a7d97adc4e8.jpg",
    link: "/solutions/press-components",
  },
  {
    title: "Sustainable Management",
    headline: ["Growing Responsibly.", "Creating Impact."],
    description:
      "Drive long-term growth and environmental responsibility through strategic sustainability frameworks built for the modern enterprise.",
    video: "https://www.pexels.com/download/video/4380227/",
    image:
      "https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_362,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
    link: "/solutions/sustainable-management",
  },
];

const FEATURES = [
  { icon: Leaf, lines: ["Green", "Planet"] },
  { icon: Zap, lines: ["Clean", "Energy"] },
  { icon: Globe, lines: ["Sustainable", "Future"] },
];

const HEADLINE_SIZE =
  "clamp(2.5rem, min(5.6vw, 9.5svh), 5.75rem)";

const scaleFor = (headline: [string, string]) =>
  Math.min(
    1,
    17 / Math.max(headline[0].length, headline[1].length)
  );

const pad = (n: number) => String(n).padStart(2, "0");

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);

  return `${m}:${String(s).padStart(2, "0")}`;
};

const riseClass = (isActive: boolean) =>
  `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
    isActive
      ? "translate-y-0 opacity-100"
      : "translate-y-5 opacity-0"
  }`;

const riseStyle = (
  isActive: boolean,
  delay: number
): CSSProperties => ({
  transitionDelay: isActive ? `${delay}ms` : "0ms",
});

/* ---------------------------------------------------- */
/* DECORATIVE LEAVES */
/* ---------------------------------------------------- */

function BlurredLeaves() {
  const leaf = (className: string, gradient: string) => (
    <div
      className={`absolute ${className}`}
      style={{
        borderRadius: "0 100% 0 100%",
        backgroundImage: gradient,
      }}
    />
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5]"
    >
      {leaf(
        "-left-10 -top-6 h-52 w-24 -rotate-[28deg] opacity-80 blur-[3px]",
        "linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)"
      )}

      {leaf(
        "-left-14 bottom-[14%] h-64 w-28 rotate-[38deg] opacity-80 blur-[4px]",
        "linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)"
      )}

      {leaf(
        "-left-6 -bottom-8 h-44 w-20 rotate-[72deg] opacity-70 blur-[6px]",
        "linear-gradient(135deg, #5FBF3C 0%, #1F5E21 100%)"
      )}

      {leaf(
        "-right-8 -bottom-10 h-48 w-24 -rotate-[60deg] opacity-80 blur-[4px]",
        "linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)"
      )}
    </div>
  );
}

/* ---------------------------------------------------- */
/* GLOW SWEEPS */
/* ---------------------------------------------------- */

function GlowSweeps() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[8] hidden h-full w-full overflow-visible lg:block"
    >
      <defs>
        <filter
          id="sweep-blur"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="1.1" />
        </filter>

        <linearGradient
          id="sweep-fade"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={GREEN_SOFT} stopOpacity="0.15" />
          <stop offset="60%" stopColor={GREEN_SOFT} stopOpacity="1" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <path
        d="M 71 0 C 66 9, 62 16, 56 25"
        fill="none"
        stroke={GREEN}
        strokeWidth="6"
        opacity="0.45"
        filter="url(#sweep-blur)"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M 71 0 C 66 9, 62 16, 56 25"
        fill="none"
        stroke="url(#sweep-fade)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M 82 0 C 76 8, 70 14, 63 22"
        fill="none"
        stroke={GREEN_SOFT}
        strokeWidth="1"
        opacity="0.3"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M 43 64 C 46 80, 62 90, 82 100"
        fill="none"
        stroke={GREEN}
        strokeWidth="6"
        opacity="0.4"
        filter="url(#sweep-blur)"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M 43 64 C 46 80, 62 90, 82 100"
        fill="none"
        stroke={GREEN_SOFT}
        strokeWidth="2"
        opacity="0.95"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M 41 62 C 43 84, 60 95, 74 100"
        fill="none"
        stroke={GREEN_SOFT}
        strokeWidth="1"
        opacity="0.3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ---------------------------------------------------- */
/* HERO */
/* ---------------------------------------------------- */

export function Hero() {
  const total = SLIDES.length;

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoverCard, setHoverCard] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const [time, setTime] = useState({
    current: 0,
    duration: 0,
  });

  const [readyVideos, setReadyVideos] = useState<Set<number>>(
    () => new Set()
  );

  const [failedVideos, setFailedVideos] = useState<Set<number>>(
    () => new Set()
  );

  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const [modalFailed, setModalFailed] = useState(false);

  const slide = SLIDES[active];

  const slideshowRunning =
    isPlaying && !hoverCard && !modalOpen;

  /* NAVIGATION */

  const go = useCallback(
    (direction: 1 | -1) => {
      setActive((index) => (index + direction + total) % total);
    },
    [total]
  );

  const selectSlide = useCallback((index: number) => {
    setActive(index);
    setIsPlaying(true);
  }, []);

  /* RESET VIDEO STATE WHEN SLIDE CHANGES */

  useEffect(() => {
    setUserPaused(false);
    setTime({
      current: 0,
      duration: 0,
    });
  }, [active]);

  /* PLAY ACTIVE VIDEO */

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.muted = muted;

      if (
        index === active &&
        !userPaused &&
        !modalOpen &&
        !failedVideos.has(index)
      ) {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (!video.muted) {
              video.muted = true;
              setMuted(true);
              video.play().catch(() => undefined);
            }
          });
        }
      } else {
        video.pause();
      }
    });
  }, [active, userPaused, muted, modalOpen, failedVideos]);

  /* AUTO ADVANCE */

  useEffect(() => {
    if (!slideshowRunning) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      go(1);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [active, slideshowRunning, go]);

  /* MODAL */

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);

    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [modalOpen, closeModal]);

  /* VIDEO EVENTS */

  const markVideoReady = useCallback((index: number) => {
    setReadyVideos((current) => {
      const next = new Set(current);
      next.add(index);
      return next;
    });
  }, []);

  const markVideoFailed = useCallback((index: number) => {
    setFailedVideos((current) => {
      const next = new Set(current);
      next.add(index);
      return next;
    });
  }, []);

  const watchVideo = () => {
    setModalFailed(false);
    setModalOpen(true);
  };

  /* SAFE SEEK */

  const seek = (event: ReactMouseEvent<HTMLDivElement>) => {
    const video = videoRefs.current[active];

    if (
      !video ||
      !Number.isFinite(video.duration) ||
      video.duration <= 0
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    if (rect.width <= 0) return;

    const ratio = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width)
    );

    video.currentTime = ratio * video.duration;
  };

  /* FULLSCREEN */

  const goFullscreen = () => {
    const element = cardRef.current;

    if (!element) return;

    element.requestFullscreen?.().catch(() => undefined);
  };

  /* SAFE PROGRESS */

  const progress =
    time.duration > 0 && Number.isFinite(time.duration)
      ? Math.min(100, (time.current / time.duration) * 100)
      : 0;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#031a12] text-white selection:bg-[#7ED957]/30"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {/* BACKGROUND */}

      <img
        src={BACKGROUND_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-[1] bg-[#04200f]/30" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#031a12]/92 via-[#031a12]/50 to-[#031a12]/5" />

      <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[#031a12]/70 to-transparent" />

      <BlurredLeaves />
      <GlowSweeps />

      {/* MAIN */}

      <div className="shell relative z-30 flex min-h-[clamp(720px,100svh,960px)] items-center pb-32 pt-28 lg:pb-28 lg:pt-32">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)_84px] lg:gap-8 xl:gap-10">

          {/* LEFT CONTENT */}

          <div className="min-w-0">
            <div className="grid">
              {SLIDES.map((item, index) => {
                const isActive = index === active;
                const Heading = index === 0 ? "h1" : "h2";

                return (
                  <div
                    key={item.title}
                    aria-hidden={!isActive}
                    className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
                      isActive
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                  >
                    {/* BADGE */}

                    <div
                      className={`inline-flex max-w-full items-center gap-3.5 rounded-full border border-[#7ED957]/45 bg-[#04240f]/65 py-1.5 pl-1.5 pr-5 backdrop-blur-sm sm:pr-6 ${riseClass(
                        isActive
                      )}`}
                      style={riseStyle(isActive, 80)}
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#7ED957]/60 bg-gradient-to-br from-[#1c6b2d] to-[#0a3a1a] sm:h-11 sm:w-11">
                        <Leaf size={20} style={{ color: GREEN }} />
                      </span>

                      <span className="truncate text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-sm">
                        <span style={{ color: GREEN }}>
                          {item.title}
                        </span>

                        <span className="mx-2.5 text-white/70">
                          •
                        </span>

                        <span className="text-white/75">
                          Solution{" "}
                        </span>

                        <b className="font-semibold text-white">
                          {pad(index + 1)} / {pad(total)}
                        </b>
                      </span>
                    </div>

                    {/* HEADLINE */}

                    <Heading
                      className="mt-7 font-display font-normal leading-[1.02] tracking-[-0.035em] [text-shadow:0_6px_30px_rgba(0,0,0,0.45)]"
                      style={{
                        fontSize: `calc(${HEADLINE_SIZE} * ${scaleFor(
                          item.headline
                        )})`,
                      }}
                    >
                      {item.headline.map((line, i) => (
                        <span
                          key={line}
                          className="block overflow-hidden pb-[0.08em]"
                        >
                          <span
                            className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
                              isActive
                                ? "translate-y-0"
                                : "translate-y-[110%]"
                            } ${
                              i === 1
                                ? "bg-clip-text pr-1 italic text-transparent"
                                : "text-white"
                            }`}
                            style={{
                              transitionDelay: isActive
                                ? `${180 + i * 140}ms`
                                : "0ms",
                              ...(i === 1
                                ? {
                                    backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
                                  }
                                : {}),
                            }}
                          >
                            {line}
                          </span>
                        </span>
                      ))}
                    </Heading>

                    {/* DESCRIPTION */}

                    <p
                      className={`mt-6 max-w-[34rem] border-l-[3px] border-[#7ED957] py-0.5 pl-5 text-sm leading-relaxed text-white/85 sm:text-base lg:text-[1.1rem] lg:leading-[1.6] ${riseClass(
                        isActive
                      )}`}
                      style={riseStyle(isActive, 480)}
                    >
                      {item.description}
                    </p>

                    {/* BUTTONS */}

                    <div
                      className={`mt-8 flex flex-wrap items-center gap-4 sm:gap-5 ${riseClass(
                        isActive
                      )}`}
                      style={riseStyle(isActive, 600)}
                    >
                      <Link
                        to={item.link}
                        tabIndex={isActive ? 0 : -1}
                        className="group inline-flex items-center gap-5 rounded-full py-1.5 pl-6 pr-1.5 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.45)] sm:pl-7 sm:text-base"
                        style={{
                          backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
                        }}
                      >
                        Explore this solution

                        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#06200d] text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:h-12 sm:w-12">
                          <ArrowRight size={19} />
                        </span>
                      </Link>

                      <button
                        type="button"
                        onClick={watchVideo}
                        tabIndex={isActive ? 0 : -1}
                        className="group inline-flex items-center gap-3 rounded-full border border-white/45 bg-white/5 py-1.5 pl-1.5 pr-6 font-heading text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-[#7ED957] hover:bg-white/10 sm:text-base"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/60 transition-colors group-hover:border-[#7ED957] group-hover:text-[#7ED957] sm:h-11 sm:w-11">
                          <Play
                            size={15}
                            fill="currentColor"
                            className="ml-0.5"
                          />
                        </span>

                        Watch video
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FEATURE ROW */}

            <ul className="mt-9 flex max-w-[34rem] flex-wrap items-center gap-y-4 border-t border-[#7ED957]/40 pt-6 sm:mt-10 lg:max-w-[36rem]">
              {FEATURES.map(({ icon: Icon, lines }, i) => (
                <li
                  key={lines.join("-")}
                  className={`flex items-center gap-3 text-sm leading-snug text-white/90 sm:text-base ${
                    i === 0
                      ? "pr-5 sm:pr-6"
                      : "border-l border-white/25 px-5 sm:px-6"
                  }`}
                >
                  <Icon
                    size={32}
                    strokeWidth={1.4}
                    className="shrink-0 drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]"
                    style={{ color: GREEN }}
                  />

                  <span>
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* VIDEO CARD */}

          <div className="relative z-20 min-w-0">
            <div
              ref={cardRef}
              onMouseEnter={() => setHoverCard(true)}
              onMouseLeave={() => setHoverCard(false)}
              className="group relative aspect-video overflow-hidden rounded-[28px] border border-[#a0ff8c]/70 bg-[#06271B] shadow-[0_0_0_1px_rgba(126,217,87,0.3),0_0_50px_rgba(126,217,87,0.45),0_30px_90px_rgba(0,0,0,0.5)] sm:rounded-[36px] lg:aspect-[1.62/1]"
            >
              {SLIDES.map((item, index) => {
                const isActive = index === active;

                const videoIsVisible =
                  isActive &&
                  readyVideos.has(index) &&
                  !failedVideos.has(index);

                return (
                  <div
                    key={item.title}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 h-full w-full scale-110 object-cover blur-md"
                    />

                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      src={item.video}
                      muted
                      loop
                      playsInline
                      preload={index === 0 ? "auto" : "metadata"}
                      onCanPlay={() => markVideoReady(index)}
                      onError={() => markVideoFailed(index)}
                      onLoadedMetadata={(event) => {
                        // Read the value immediately, before using state updater.
                        const duration =
                          Number.isFinite(event.currentTarget.duration)
                            ? event.currentTarget.duration
                            : 0;

                        if (index === active) {
                          setTime((previous) => ({
                            ...previous,
                            duration,
                          }));
                        }
                      }}
                      onTimeUpdate={(event) => {
                        // Capture values before calling setState.
                        const video = event.currentTarget;

                        const currentTime =
                          Number.isFinite(video.currentTime)
                            ? video.currentTime
                            : 0;

                        const duration =
                          Number.isFinite(video.duration)
                            ? video.duration
                            : 0;

                        if (index === active) {
                          setTime({
                            current: currentTime,
                            duration,
                          });
                        }
                      }}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        videoIsVisible
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                );
              })}

              {/* VIDEO OVERLAYS */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02120c]/75 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

              {/* BIG PLAY / PAUSE */}

              <button
                type="button"
                onClick={() => setUserPaused((paused) => !paused)}
                aria-label={userPaused ? "Play video" : "Pause video"}
                className="absolute inset-0 z-10 grid place-items-center"
              >
                <span
                  className={`grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-[#0b1f17]/80 text-[#7ED957] shadow-[0_0_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 sm:h-20 sm:w-20 ${
                    userPaused
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {userPaused ? (
                    <Play
                      size={30}
                      fill="currentColor"
                      className="ml-1"
                    />
                  ) : (
                    <Pause size={28} fill="currentColor" />
                  )}
                </span>
              </button>

              {/* PLAYER BAR */}

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3 pt-8 sm:px-6 sm:pb-4">
                <div className="flex items-center gap-3 text-sm text-white sm:gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setUserPaused((paused) => !paused)
                    }
                    aria-label={
                      userPaused ? "Play video" : "Pause video"
                    }
                    className="transition-colors hover:text-[#7ED957]"
                  >
                    {userPaused ? (
                      <Play size={18} fill="currentColor" />
                    ) : (
                      <Pause size={18} fill="currentColor" />
                    )}
                  </button>

                  <span className="tabular-nums text-xs sm:text-sm">
                    {formatTime(time.current)} /{" "}
                    {formatTime(time.duration)}
                  </span>

                  <span className="ml-auto" />

                  <button
                    type="button"
                    onClick={() => setMuted((value) => !value)}
                    aria-label={
                      muted ? "Unmute video" : "Mute video"
                    }
                    className="transition-colors hover:text-[#7ED957]"
                  >
                    {muted ? (
                      <VolumeX size={19} />
                    ) : (
                      <Volume2 size={19} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={goFullscreen}
                    aria-label="Fullscreen"
                    className="transition-colors hover:text-[#7ED957]"
                  >
                    <Maximize size={18} />
                  </button>
                </div>

                {/* SEEK BAR */}

                <div
                  role="progressbar"
                  aria-label="Video progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                  onClick={seek}
                  className="mt-2.5 h-1.5 cursor-pointer overflow-hidden rounded-full bg-white/30"
                >
                  <div
                    className="h-full rounded-full bg-white transition-[width] duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT NUMBERED NAVIGATION */}

          <nav
            aria-label="Slides"
            className="relative z-20 flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:items-start lg:gap-3.5 lg:overflow-visible lg:pb-0"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-[26px] top-0 hidden w-px bg-white/25 lg:block"
            />

            {SLIDES.map((item, index) => {
              const isCurrent = index === active;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => selectSlide(index)}
                  aria-label={`Show solution ${index + 1}: ${item.title}`}
                  aria-current={isCurrent ? "true" : undefined}
                  className="group relative flex shrink-0 items-center gap-3 lg:w-full"
                >
                  <span className="grid w-[52px] shrink-0 place-items-center">
                    <span
                      className={`block overflow-hidden rounded-full transition-all duration-500 ${
                        isCurrent
                          ? "h-[52px] w-[52px] border-[3px] border-[#7ED957] shadow-[0_0_0_4px_rgba(126,217,87,0.2),0_0_24px_rgba(126,217,87,0.7)]"
                          : "h-10 w-10 border border-white/50 opacity-85 group-hover:border-[#B5F27E] group-hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  </span>

                  <span
                    className={`font-heading text-sm font-semibold tabular-nums transition-colors ${
                      isCurrent
                        ? "text-[#B5F27E]"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {pad(index + 1)}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* BOTTOM CONTROLS */}

      <div className="absolute bottom-6 right-5 z-40 flex items-center gap-4 sm:bottom-8 sm:right-10 lg:right-16 xl:right-24">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/55 text-white backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/55 text-white backdrop-blur-sm transition-all hover:translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
        >
          <ChevronRight size={20} />
        </button>

        <div className="hidden w-40 sm:block">
          <div className="flex items-center justify-between text-sm">
            <span>
              <b className="font-semibold">{pad(active + 1)}</b>
              <span className="text-white/60">
                {" "}
                / {pad(total)}
              </span>
            </span>

            <button
              type="button"
              onClick={() =>
                setIsPlaying((playing) => !playing)
              }
              aria-label={
                isPlaying ? "Pause slideshow" : "Play slideshow"
              }
              className="text-white/70 transition-colors hover:text-[#7ED957]"
            >
              {isPlaying ? (
                <Pause size={14} fill="currentColor" />
              ) : (
                <Play size={14} fill="currentColor" />
              )}
            </button>
          </div>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/25">
            <div
              key={`progress-${active}`}
              className="hero-progress h-full rounded-full"
              style={{
                backgroundColor: GREEN,
                animationDuration: `${AUTOPLAY_MS}ms`,
                animationPlayState: slideshowRunning
                  ? "running"
                  : "paused",
              }}
            />
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}

      {modalOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${slide.title} video`}
            className="fixed inset-0 z-[100] grid place-items-center bg-[#021008]/90 p-4 backdrop-blur-md sm:p-8"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-[#a0ff8c]/60 bg-black shadow-[0_0_0_1px_rgba(126,217,87,0.3),0_0_60px_rgba(126,217,87,0.4)] sm:rounded-[32px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 bg-[#06271B] px-5 py-3 sm:px-7">
                <p className="truncate font-heading text-sm font-semibold sm:text-base">
                  <span style={{ color: GREEN }}>
                    {slide.title}
                  </span>
                </p>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close video"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                <video
                  key={slide.video}
                  src={slide.video}
                  autoPlay
                  controls
                  playsInline
                  controlsList="nodownload"
                  onError={() => setModalFailed(true)}
                  className="absolute inset-0 h-full w-full object-contain"
                />

                {modalFailed && (
                  <div className="absolute inset-0 grid place-items-center bg-[#06271B] p-6 text-center text-sm text-white/80">
                    This video couldn’t be loaded. Please try again later.
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* ANIMATIONS */}

      <style>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .hero-progress {
          width: 0%;
          animation-name: heroProgress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-progress {
            animation: none;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
