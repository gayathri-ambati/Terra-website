// import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   BarChart3,
//   Building2,
//   Droplets,
//   Leaf,
//   Recycle,
//   Sun,
//   Wind,
//   Zap,
//   type LucideIcon,
// } from 'lucide-react';
// import { solutions } from '@/lib/content';
// import { Reveal } from '@/components/Reveal';

// /* ---------- SVG geometry (viewBox 560 x 570) ---------- */
// const W = 560;
// const H = 570;
// const CX = 280;
// const CY = 290;
// const RING_OUTER = 230;
// const RING_INNER = 172;
// const ARC_START = 285; // left side
// const ARC_SPAN = 210; // sweeps down through the bottom to the right
// const GAP = 2;

// // Teal-blue (left) -> deep navy-teal (middle) -> forest green (right)
// const COLORS = [
//   '#2F7C96',
//   '#1F6685',
//   '#175774',
//   '#154A62',
//   '#145559',
//   '#1A6148',
//   '#217040',
//   '#2E7D32',
// ];

// // Swap these for any icons you prefer, or add `icon` / `image` to your content data
// const ICONS: LucideIcon[] = [Leaf, Sun, Zap, BarChart3, Building2, Droplets, Wind, Recycle];

// // Pulls labels toward the centre as they go down (stair-step like the reference).
// // Kept small enough that labels never touch the ring.
// const INDENTS = [0, 10, 40, 90];

// const BANNER_IMG =
//   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90';

// function clamp(v: number, min: number, max: number) {
//   return Math.min(max, Math.max(min, v));
// }

// // angle: 0 = top, clockwise
// function polar(radius: number, angle: number) {
//   const r = ((angle - 90) * Math.PI) / 180;
//   return { x: CX + radius * Math.cos(r), y: CY + radius * Math.sin(r) };
// }

// function ringSegment(start: number, end: number) {
//   const os = polar(RING_OUTER, start);
//   const oe = polar(RING_OUTER, end);
//   const ie = polar(RING_INNER, end);
//   const is = polar(RING_INNER, start);
//   return [
//     `M ${os.x} ${os.y}`,
//     `A ${RING_OUTER} ${RING_OUTER} 0 0 1 ${oe.x} ${oe.y}`,
//     `L ${ie.x} ${ie.y}`,
//     `A ${RING_INNER} ${RING_INNER} 0 0 0 ${is.x} ${is.y}`,
//     'Z',
//   ].join(' ');
// }

// // Teardrop: tip at top, round body (r = 160)
// const DROP_PATH =
//   'M280 20 Q345 125 408.9 195.2 A160 160 0 1 1 151.1 195.2 Q215 125 280 20 Z';

// type Solution = (typeof solutions)[number];

// /* Round chip: uses solution.image if the data has one, otherwise the icon */
// function Chip({ solution, index, size = 40 }: { solution: Solution; index: number; size?: number }) {
//   const Icon = ICONS[index % ICONS.length];
//   const image = (solution as { image?: string }).image;

//   return (
//     <span
//       className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full text-white shadow-md ring-2 ring-white"
//       style={{
//         width: size,
//         height: size,
//         background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, #0E3B3A)`,
//       }}
//     >
//       {image ? (
//         <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
//       ) : (
//         <Icon size={size * 0.46} strokeWidth={1.6} />
//       )}
//     </span>
//   );
// }

// export function SolutionIndex() {
//   const items = solutions.slice(0, 8);
//   const step = ARC_SPAN / items.length;

//   const sectionRef = useRef<HTMLElement>(null);
//   const bannerImageRef = useRef<HTMLImageElement>(null);
//   const [hasEntered, setHasEntered] = useState(false);
//   const [hovered, setHovered] = useState<number | null>(null);

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHasEntered(true);
//           io.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   // Banner parallax
//   useEffect(() => {
//     let frame = 0;
//     const update = () => {
//       cancelAnimationFrame(frame);
//       frame = requestAnimationFrame(() => {
//         const section = sectionRef.current;
//         const img = bannerImageRef.current;
//         if (!section || !img) return;
//         if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//           img.style.transform = 'scale(1.06)';
//           return;
//         }
//         const b = section.getBoundingClientRect();
//         const p = clamp((window.innerHeight - b.top) / (window.innerHeight + b.height), 0, 1);
//         img.style.transform = `scale(1.1) translate3d(0, ${(p - 0.5) * -34}px, 0)`;
//       });
//     };
//     update();
//     window.addEventListener('scroll', update, { passive: true });
//     window.addEventListener('resize', update);
//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('scroll', update);
//       window.removeEventListener('resize', update);
//     };
//   }, []);

//   function renderLabel(index: number, side: 'left' | 'right', rank: number) {
//     const solution = items[index];
//     if (!solution) return null;
//     const isOn = hovered === index;
//     const indent = INDENTS[rank] ?? 0;
//     const isLeft = side === 'left';

//     return (
//       <Reveal key={solution.code} delay={rank * 90}>
//         <Link
//           to="/solutions"
//           onMouseEnter={() => setHovered(index)}
//           onMouseLeave={() => setHovered(null)}
//           onFocus={() => setHovered(index)}
//           onBlur={() => setHovered(null)}
//           className={`group flex items-start gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-forest-800/[0.04] ${
//             isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'
//           }`}
//           style={isLeft ? { marginRight: indent } : { marginLeft: indent }}
//         >
//           <span className={`transition-transform duration-300 ${isOn ? 'scale-110' : ''}`}>
//             <Chip solution={solution} index={index} size={44} />
//           </span>

//           <span className="min-w-0 flex-1">
//             <span
//               className={`flex items-center gap-1.5 font-heading text-[15px] font-semibold leading-snug transition-colors ${
//                 isLeft ? 'justify-end' : 'justify-start'
//               } ${isOn ? 'text-forest-600' : 'text-forest-900'}`}
//             >
//               {solution.title}
//               <ArrowUpRight
//                 size={14}
//                 className="shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
//               />
//             </span>
//             <span className="mt-1 block text-[12.5px] leading-snug text-charcoal/60">
//               {solution.blurb}
//             </span>
//           </span>
//         </Link>
//       </Reveal>
//     );
//   }

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white to-[#F3F6F2]">
//       {/* ---------- Banner ---------- */}
//       <div className="relative h-[300px] overflow-hidden sm:h-[340px] xl:h-[370px]">
//         <img
//           ref={bannerImageRef}
//           src={BANNER_IMG}
//           alt="Renewable energy infrastructure at dusk"
//           className="absolute inset-0 h-full w-full object-cover will-change-transform"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#061D22]/90 via-[#0B3A45]/55 to-[#0B3A45]/20" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(120,200,150,0.18),transparent_55%)]" />
//         <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/30 to-transparent" />

//         <div className="shell relative z-10 pt-8 sm:pt-10 xl:pt-14">
//           <Reveal>
//             <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
//               <span className="h-px w-9 bg-[#C8DDAA]" />
//               Terra Ecopreneurs · Capabilities
//             </p>
//             <h2 className="max-w-[15rem] font-display text-3xl leading-[1.08] text-white sm:max-w-xs sm:text-4xl xl:max-w-sm xl:text-[2.6rem]">
//               Eight disciplines. One purpose.
//             </h2>
//             <p className="mt-4 hidden max-w-xs text-sm leading-relaxed text-white/70 sm:block">
//               Every discipline works as part of one connected system, from the first audit to
//               long-term performance.
//             </p>
//           </Reveal>
//         </div>
//       </div>

//       {/* ---------- Diagram (overlaps the banner, text never does) ---------- */}
//       <div className="shell relative z-10 -mt-[96px] pb-14 sm:-mt-[120px] xl:-mt-[210px] xl:pb-20">
//         <div className="grid items-end xl:grid-cols-[minmax(0,1fr)_560px_minmax(0,1fr)] xl:gap-x-2">
//           {/* Left labels: items 1-4, top to bottom */}
//           <div className="hidden flex-col justify-between gap-2 pb-0 xl:flex xl:h-[340px]">
//             {[0, 1, 2, 3].map((i) => renderLabel(i, 'left', i))}
//           </div>

//           {/* Drop + arc */}
//           <div className="mx-auto w-full max-w-[560px]" style={{ aspectRatio: `${W} / ${H}` }}>
//             <svg
//               viewBox={`0 0 ${W} ${H}`}
//               role="img"
//               aria-label="Eight capabilities forming one connected Terra Ecopreneurs approach"
//               className="h-full w-full overflow-visible"
//             >
//               <defs>
//                 <filter id="dropShadow" x="-25%" y="-20%" width="150%" height="150%">
//                   <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#0B2F2A" floodOpacity="0.22" />
//                 </filter>
//                 <linearGradient id="dropFill" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#FFFFFF" />
//                   <stop offset="100%" stopColor="#EDF1EE" />
//                 </linearGradient>
//               </defs>

//               {/* Arc segments */}
//               {items.map((solution, i) => {
//                 const end = ARC_START - i * step - GAP / 2;
//                 const start = ARC_START - (i + 1) * step + GAP / 2;
//                 const mid = ARC_START - (i + 0.5) * step;
//                 const isOn = hovered === i;
//                 const push = polar(isOn ? 7 : 0, mid);
//                 const center = polar((RING_OUTER + RING_INNER) / 2, mid);
//                 const Icon = ICONS[i % ICONS.length];

//                 return (
//                   <g
//                     key={solution.code}
//                     style={{
//                       opacity: hasEntered ? 1 : 0,
//                       transform: hasEntered ? 'scale(1)' : 'scale(0.8)',
//                       transformOrigin: `${CX}px ${CY}px`,
//                       transition:
//                         'opacity 600ms ease, transform 750ms cubic-bezier(0.2,0.75,0.25,1)',
//                       transitionDelay: `${i * 70}ms`,
//                     }}
//                     onMouseEnter={() => setHovered(i)}
//                     onMouseLeave={() => setHovered(null)}
//                   >
//                     <g
//                       style={{
//                         transform: `translate(${push.x - CX}px, ${push.y - CY}px)`,
//                         transition: 'transform 250ms ease',
//                       }}
//                     >
//                       <path
//                         d={ringSegment(start, end)}
//                         fill={COLORS[i % COLORS.length]}
//                         style={{
//                           filter: isOn ? 'brightness(1.2)' : 'brightness(1)',
//                           transition: 'filter 250ms ease',
//                         }}
//                       />
//                       <Icon
//                         x={center.x - 13}
//                         y={center.y - 21}
//                         size={26}
//                         color="white"
//                         strokeWidth={1.5}
//                       />
//                       <text
//                         x={center.x}
//                         y={center.y + 20}
//                         textAnchor="middle"
//                         dominantBaseline="central"
//                         fill="white"
//                         fillOpacity="0.8"
//                         fontSize="10"
//                         fontFamily="ui-monospace, monospace"
//                         letterSpacing="1.5"
//                       >
//                         {String(i + 1).padStart(2, '0')}
//                       </text>
//                     </g>
//                   </g>
//                 );
//               })}

//               {/* Drop */}
//               <path
//                 d={DROP_PATH}
//                 fill="url(#dropFill)"
//                 filter="url(#dropShadow)"
//                 style={{
//                   opacity: hasEntered ? 1 : 0,
//                   transform: hasEntered ? 'translateY(0)' : 'translateY(-24px)',
//                   transition: 'opacity 700ms ease, transform 900ms cubic-bezier(0.2,0.75,0.25,1)',
//                 }}
//               />

//               <g style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 900ms ease 350ms' }}>
//                 <text
//                   x={CX}
//                   y="212"
//                   textAnchor="middle"
//                   fill="#3E6A55"
//                   fontSize="10.5"
//                   fontWeight="700"
//                   letterSpacing="3"
//                   fontFamily="sans-serif"
//                 >
//                   THE TERRA APPROACH
//                 </text>
//                 <line x1="215" y1="230" x2="345" y2="230" stroke="#C9D3CB" />
//                 <text
//                   x={CX}
//                   y="276"
//                   textAnchor="middle"
//                   fill="#12382C"
//                   fontSize="34"
//                   letterSpacing="1"
//                   className="font-display"
//                   fontFamily="Georgia, serif"
//                 >
//                   SUSTAINABLE
//                 </text>
//                 <text
//                   x={CX}
//                   y="316"
//                   textAnchor="middle"
//                   fill="#12382C"
//                   fontSize="34"
//                   letterSpacing="1"
//                   className="font-display"
//                   fontFamily="Georgia, serif"
//                 >
//                   PROGRESS.
//                 </text>
//                 <line x1="215" y1="340" x2="345" y2="340" stroke="#C9D3CB" />
//               </g>
//             </svg>
//           </div>

//           {/* Right labels: items 8 -> 5, top to bottom (mirrors the arc) */}
//           <div className="hidden flex-col justify-between gap-2 xl:flex xl:h-[340px]">
//             {[7, 6, 5, 4].map((i, rank) => renderLabel(i, 'right', rank))}
//           </div>
//         </div>

//         {/* Below xl: clean 2-column list under the diagram */}
//         <div className="mx-auto mt-6 grid max-w-3xl gap-x-8 sm:grid-cols-2 xl:hidden">
//           {items.map((solution, i) => (
//             <Reveal key={solution.code} delay={(i % 2) * 80}>
//               <Link
//                 to="/solutions"
//                 className="group flex items-start gap-4 border-t border-forest-800/15 py-5 transition-colors hover:border-forest-600"
//               >
//                 <Chip solution={solution} index={i} size={42} />
//                 <span className="min-w-0 flex-1">
//                   <span className="block font-heading text-sm font-semibold text-forest-900 transition-colors group-hover:text-forest-600">
//                     {solution.title}
//                   </span>
//                   <span className="mt-1 block text-xs leading-relaxed text-charcoal/65">
//                     {solution.blurb}
//                   </span>
//                 </span>
//                 <ArrowUpRight
//                   size={16}
//                   className="mt-1 shrink-0 text-forest-800/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </Reveal>
//           ))}
//         </div>

//         <Reveal delay={150}>
//           <div className="mt-10 flex items-center justify-center gap-4 text-center">
//             <span className="h-px w-8 bg-forest-700/30" />
//             <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-800/55">
//               One connected approach to lasting impact
//             </p>
//             <span className="h-px w-8 bg-forest-700/30" />
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }





// import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   BarChart3,
//   Building2,
//   Droplets,
//   Leaf,
//   Recycle,
//   Sun,
//   Wind,
//   Zap,
//   type LucideIcon,
// } from 'lucide-react';
// import { solutions } from '@/lib/content';
// import { Reveal } from '@/components/Reveal';

// /* ---------- SVG geometry ---------- */
// const W = 560;
// const H = 570;
// const CX = 280;
// const CY = 290;
// const RING_OUTER = 230;
// const RING_INNER = 172;
// const ARC_START = 285;
// const ARC_SPAN = 210;
// const GAP = 2;

// const COLORS = [
//   '#2F7C96',
//   '#1F6685',
//   '#175774',
//   '#154A62',
//   '#145559',
//   '#1A6148',
//   '#217040',
//   '#2E7D32',
// ];

// const ICONS: LucideIcon[] = [
//   Leaf,
//   Sun,
//   Zap,
//   BarChart3,
//   Building2,
//   Droplets,
//   Wind,
//   Recycle,
// ];

// const INDENTS = [0, 10, 40, 90];

// const BANNER_IMG =
//   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90';

// function clamp(value: number, min: number, max: number) {
//   return Math.min(max, Math.max(min, value));
// }

// // Angle: 0 = top, clockwise
// function polar(radius: number, angle: number) {
//   const radians = ((angle - 90) * Math.PI) / 180;

//   return {
//     x: CX + radius * Math.cos(radians),
//     y: CY + radius * Math.sin(radians),
//   };
// }

// function ringSegment(start: number, end: number) {
//   const outerStart = polar(RING_OUTER, start);
//   const outerEnd = polar(RING_OUTER, end);
//   const innerEnd = polar(RING_INNER, end);
//   const innerStart = polar(RING_INNER, start);

//   return [
//     `M ${outerStart.x} ${outerStart.y}`,
//     `A ${RING_OUTER} ${RING_OUTER} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
//     `L ${innerEnd.x} ${innerEnd.y}`,
//     `A ${RING_INNER} ${RING_INNER} 0 0 0 ${innerStart.x} ${innerStart.y}`,
//     'Z',
//   ].join(' ');
// }

// const DROP_PATH =
//   'M280 20 Q345 125 408.9 195.2 A160 160 0 1 1 151.1 195.2 Q215 125 280 20 Z';

// type Solution = (typeof solutions)[number];

// function Chip({
//   solution,
//   index,
//   size = 40,
// }: {
//   solution: Solution;
//   index: number;
//   size?: number;
// }) {
//   const Icon = ICONS[index % ICONS.length];
//   const image = (solution as { image?: string }).image;

//   return (
//     <span
//       className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full text-white shadow-md ring-2 ring-white"
//       style={{
//         width: size,
//         height: size,
//         background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, #0E3B3A)`,
//       }}
//     >
//       {image ? (
//         <img
//           src={image}
//           alt=""
//           className="h-full w-full object-cover"
//           loading="lazy"
//         />
//       ) : (
//         <Icon size={size * 0.46} strokeWidth={1.6} />
//       )}
//     </span>
//   );
// }

// export function SolutionIndex() {
//   const items = solutions.slice(0, 8);
//   const step = ARC_SPAN / Math.max(items.length, 1);

//   const sectionRef = useRef<HTMLElement>(null);
//   const bannerImageRef = useRef<HTMLImageElement>(null);
//   const ringRef = useRef<SVGGElement>(null);

//   const [hasEntered, setHasEntered] = useState(false);
//   const [hovered, setHovered] = useState<number | null>(null);

//   useEffect(() => {
//     const element = sectionRef.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHasEntered(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, []);

//   // Banner parallax and subtle scroll-linked ring movement.
//   useEffect(() => {
//     let frame = 0;

//     const updateMotion = () => {
//       cancelAnimationFrame(frame);

//       frame = requestAnimationFrame(() => {
//         const section = sectionRef.current;
//         const image = bannerImageRef.current;
//         const ring = ringRef.current;

//         if (!section) return;

//         const reduceMotion = window.matchMedia(
//           '(prefers-reduced-motion: reduce)'
//         ).matches;

//         if (reduceMotion) {
//           if (image) image.style.transform = 'scale(1.04)';
//           if (ring) ring.style.transform = 'none';
//           return;
//         }

//         const bounds = section.getBoundingClientRect();
//         const progress = clamp(
//           (window.innerHeight - bounds.top) /
//             (window.innerHeight + bounds.height),
//           0,
//           1
//         );

//         if (image) {
//           const imageOffset = (progress - 0.5) * -34;
//           image.style.transform =
//             `scale(1.1) translate3d(0, ${imageOffset}px, 0)`;
//         }

//         if (ring) {
//           const ringOffset = (progress - 0.5) * -12;
//           const ringRotation = (progress - 0.5) * 4;
//           ring.style.transform =
//             `translate3d(0, ${ringOffset}px, 0) rotate(${ringRotation}deg)`;
//         }
//       });
//     };

//     updateMotion();
//     window.addEventListener('scroll', updateMotion, { passive: true });
//     window.addEventListener('resize', updateMotion);

//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('scroll', updateMotion);
//       window.removeEventListener('resize', updateMotion);
//     };
//   }, []);

//   function renderLabel(
//     index: number,
//     side: 'left' | 'right',
//     rank: number
//   ) {
//     const solution = items[index];
//     if (!solution) return null;

//     const isActive = hovered === index;
//     const indent = INDENTS[rank] ?? 0;
//     const isLeft = side === 'left';

//     return (
//       <Reveal key={solution.code} delay={rank * 90}>
//         <Link
//           to="/solutions"
//           onMouseEnter={() => setHovered(index)}
//           onMouseLeave={() => setHovered(null)}
//           onFocus={() => setHovered(index)}
//           onBlur={() => setHovered(null)}
//           className={`group flex items-start gap-3 rounded-xl p-2 transition-all duration-300 hover:bg-forest-800/[0.04] ${
//             isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'
//           }`}
//           style={isLeft ? { marginRight: indent } : { marginLeft: indent }}
//         >
//           <span
//             className="transition-transform duration-300"
//             style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
//           >
//             <Chip solution={solution} index={index} size={44} />
//           </span>

//           <span className="min-w-0 flex-1">
//             <span
//               className={`flex items-center gap-1.5 font-heading text-[15px] font-semibold leading-snug transition-colors ${
//                 isLeft ? 'justify-end' : 'justify-start'
//               } ${isActive ? 'text-forest-600' : 'text-forest-900'}`}
//             >
//               {solution.title}
//               <ArrowUpRight
//                 size={14}
//                 className="shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
//               />
//             </span>

//             <span className="mt-1 block text-[12.5px] leading-snug text-charcoal/60">
//               {solution.blurb}
//             </span>
//           </span>
//         </Link>
//       </Reveal>
//     );
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-gradient-to-b from-white to-[#F3F6F2]"
//     >
//       {/* Banner */}
//       <div className="relative h-[300px] overflow-hidden sm:h-[340px] xl:h-[370px]">
//         <img
//           ref={bannerImageRef}
//           src={BANNER_IMG}
//           alt="Renewable energy infrastructure at dusk"
//           className="absolute inset-0 h-full w-full object-cover will-change-transform"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#061D22]/90 via-[#0B3A45]/55 to-[#0B3A45]/20" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(120,200,150,0.18),transparent_55%)]" />
//         <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/30 to-transparent" />

//         <div className="shell relative z-10 pt-8 sm:pt-10 xl:pt-14">
//           <Reveal>
//             <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
//               <span className="h-px w-9 bg-[#C8DDAA]" />
//               Terra Ecopreneurs · Capabilities
//             </p>

//             <h2 className="whitespace-nowrap font-display text-[clamp(1rem,4vw,2.6rem)] leading-tight text-white">
//               Eight disciplines. One purpose.
//             </h2>

//             <p className="mt-4 hidden max-w-md text-sm leading-relaxed text-white/70 sm:block">
//               Every discipline works as part of one connected system, from the
//               first audit to long-term performance.
//             </p>
//           </Reveal>
//         </div>
//       </div>

//       {/* Diagram */}
//       <div className="shell relative z-10 -mt-[96px] pb-14 sm:-mt-[120px] xl:-mt-[210px] xl:pb-20">
//         <div className="grid items-end xl:grid-cols-[minmax(0,1fr)_560px_minmax(0,1fr)] xl:gap-x-2">
//           {/* Left labels */}
//           <div className="hidden flex-col justify-between gap-2 pb-0 xl:flex xl:h-[340px]">
//             {[0, 1, 2, 3].map((index) =>
//               renderLabel(index, 'left', index)
//             )}
//           </div>

//           {/* Ring and central message */}
//           <div
//             className="mx-auto w-full max-w-[560px]"
//             style={{ aspectRatio: `${W} / ${H}` }}
//           >
//             <svg
//               viewBox={`0 0 ${W} ${H}`}
//               role="img"
//               aria-label="Eight capabilities forming one connected Terra Ecopreneurs approach"
//               className="h-full w-full overflow-visible"
//             >
//               <defs>
//                 <filter
//                   id="dropShadow"
//                   x="-25%"
//                   y="-20%"
//                   width="150%"
//                   height="150%"
//                 >
//                   <feDropShadow
//                     dx="0"
//                     dy="16"
//                     stdDeviation="16"
//                     floodColor="#0B2F2A"
//                     floodOpacity="0.22"
//                   />
//                 </filter>

//                 <linearGradient id="dropFill" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#FFFFFF" />
//                   <stop offset="100%" stopColor="#EDF1EE" />
//                 </linearGradient>
//               </defs>

//               {/* Scroll-linked ring motion; the center message stays still */}
//               <g
//                 ref={ringRef}
//                 style={{
//                   transformOrigin: `${CX}px ${CY}px`,
//                   transition: 'transform 80ms linear',
//                 }}
//               >
//                 {items.map((solution, index) => {
//                   const end = ARC_START - index * step - GAP / 2;
//                   const start =
//                     ARC_START - (index + 1) * step + GAP / 2;
//                   const middle = ARC_START - (index + 0.5) * step;
//                   const isActive = hovered === index;
//                   const push = polar(isActive ? 7 : 0, middle);
//                   const center = polar(
//                     (RING_OUTER + RING_INNER) / 2,
//                     middle
//                   );
//                   const Icon = ICONS[index % ICONS.length];

//                   return (
//                     <g
//                       key={solution.code}
//                       style={{
//                         opacity: hasEntered ? 1 : 0,
//                         transform: hasEntered ? 'scale(1)' : 'scale(0.8)',
//                         transformOrigin: `${CX}px ${CY}px`,
//                         transition:
//                           'opacity 600ms ease, transform 750ms cubic-bezier(0.2,0.75,0.25,1)',
//                         transitionDelay: `${index * 70}ms`,
//                       }}
//                       onMouseEnter={() => setHovered(index)}
//                       onMouseLeave={() => setHovered(null)}
//                     >
//                       <g
//                         style={{
//                           transform: `translate(${push.x - CX}px, ${push.y - CY}px)`,
//                           transition: 'transform 250ms ease',
//                         }}
//                       >
//                         <path
//                           d={ringSegment(start, end)}
//                           fill={COLORS[index % COLORS.length]}
//                           style={{
//                             filter: isActive
//                               ? 'brightness(1.2)'
//                               : 'brightness(1)',
//                             transition: 'filter 250ms ease',
//                           }}
//                         />

//                         <Icon
//                           x={center.x - 13}
//                           y={center.y - 21}
//                           size={26}
//                           color="white"
//                           strokeWidth={1.5}
//                         />

//                         <text
//                           x={center.x}
//                           y={center.y + 20}
//                           textAnchor="middle"
//                           dominantBaseline="central"
//                           fill="white"
//                           fillOpacity="0.8"
//                           fontSize="10"
//                           fontFamily="ui-monospace, monospace"
//                           letterSpacing="1.5"
//                         >
//                           {String(index + 1).padStart(2, '0')}
//                         </text>
//                       </g>
//                     </g>
//                   );
//                 })}
//               </g>

//               {/* Center drop reveal */}
//               <path
//                 d={DROP_PATH}
//                 fill="url(#dropFill)"
//                 filter="url(#dropShadow)"
//                 style={{
//                   opacity: hasEntered ? 1 : 0,
//                   transform: hasEntered
//                     ? 'translateY(0)'
//                     : 'translateY(-24px)',
//                   transition:
//                     'opacity 700ms ease, transform 900ms cubic-bezier(0.2,0.75,0.25,1)',
//                 }}
//               />

//               {/* Center typography */}
//               <g
//                 style={{
//                   opacity: hasEntered ? 1 : 0,
//                   transition: 'opacity 900ms ease 350ms',
//                 }}
//               >
//                 <text
//                   x={CX}
//                   y="212"
//                   textAnchor="middle"
//                   fill="#3E6A55"
//                   fontSize="10.5"
//                   fontWeight="700"
//                   letterSpacing="3"
//                   fontFamily="sans-serif"
//                 >
//                   THE TERRA APPROACH
//                 </text>

//                 <line
//                   x1="215"
//                   y1="230"
//                   x2="345"
//                   y2="230"
//                   stroke="#C9D3CB"
//                 />

//                 <text
//                   x={CX}
//                   y="276"
//                   textAnchor="middle"
//                   fill="#12382C"
//                   fontSize="34"
//                   letterSpacing="1"
//                   fontFamily="Georgia, serif"
//                 >
//                   SUSTAINABLE
//                 </text>

//                 <text
//                   x={CX}
//                   y="316"
//                   textAnchor="middle"
//                   fill="#12382C"
//                   fontSize="34"
//                   letterSpacing="1"
//                   fontFamily="Georgia, serif"
//                 >
//                   PROGRESS.
//                 </text>

//                 <line
//                   x1="215"
//                   y1="340"
//                   x2="345"
//                   y2="340"
//                   stroke="#C9D3CB"
//                 />
//               </g>
//             </svg>
//           </div>

//           {/* Right labels */}
//           <div className="hidden flex-col justify-between gap-2 xl:flex xl:h-[340px]">
//             {[7, 6, 5, 4].map((index, rank) =>
//               renderLabel(index, 'right', rank)
//             )}
//           </div>
//         </div>

//         {/* Mobile and tablet list */}
//         <div className="mx-auto mt-6 grid max-w-3xl gap-x-8 sm:grid-cols-2 xl:hidden">
//           {items.map((solution, index) => (
//             <Reveal key={solution.code} delay={(index % 2) * 80}>
//               <Link
//                 to="/solutions"
//                 onMouseEnter={() => setHovered(index)}
//                 onMouseLeave={() => setHovered(null)}
//                 onFocus={() => setHovered(index)}
//                 onBlur={() => setHovered(null)}
//                 className="group flex items-start gap-4 border-t border-forest-800/15 py-5 transition-colors hover:border-forest-600"
//               >
//                 <Chip solution={solution} index={index} size={42} />

//                 <span className="min-w-0 flex-1">
//                   <span className="block font-heading text-sm font-semibold text-forest-900 transition-colors group-hover:text-forest-600">
//                     {solution.title}
//                   </span>
//                   <span className="mt-1 block text-xs leading-relaxed text-charcoal/65">
//                     {solution.blurb}
//                   </span>
//                 </span>

//                 <ArrowUpRight
//                   size={16}
//                   className="mt-1 shrink-0 text-forest-800/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </Reveal>
//           ))}
//         </div>

//         <Reveal delay={150}>
//           <div className="mt-10 flex items-center justify-center gap-4 text-center">
//             <span className="h-px w-8 bg-forest-700/30" />
//             <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-800/55">
//               One connected approach to lasting impact
//             </p>
//             <span className="h-px w-8 bg-forest-700/30" />
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }


// import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   BarChart3,
//   Building2,
//   Droplets,
//   Leaf,
//   Recycle,
//   Sun,
//   Wind,
//   Zap,
//   type LucideIcon,
// } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Capability = {
//   code: string;
//   title: string;
//   blurb: string;
// };

// const items: Capability[] = [
//   {
//     code: '01',
//     title: 'Energy Efficiency & Audit',
//     blurb:
//       'Walk-through to investment-grade audits; metering, benchmarking and retrofit roadmaps.',
//   },
//   {
//     code: '02',
//     title: 'Clean Energy',
//     blurb:
//       'Solar PV, hybrid systems and decentralised renewables for industry and agriculture.',
//   },
//   {
//     code: '03',
//     title: 'IBMS',
//     blurb:
//       'Integrated building management systems that make every plant visible and controllable.',
//   },
//   {
//     code: '04',
//     title: 'Digital Solutions',
//     blurb:
//       'Energy dashboards, IoT metering and analytics that keep savings honest after handover.',
//   },
//   {
//     code: '05',
//     title: 'Industrial Automation',
//     blurb:
//       'PLC, SCADA and process control engineered for reliability on the factory floor.',
//   },
//   {
//     code: '06',
//     title: 'Prefabricated Structures',
//     blurb:
//       'Fast, low-waste steel buildings for industry and rural infrastructure.',
//   },
//   {
//     code: '07',
//     title: 'Press Components',
//     blurb:
//       'Precision sheet-metal press parts manufactured to client specification.',
//   },
//   {
//     code: '08',
//     title: 'Sustainable Management',
//     blurb:
//       'ESG advisory, carbon accounting and sustainability reporting for growing companies.',
//   },
// ];

// const COLORS = [
//   '#2F7C96',
//   '#1F6685',
//   '#175774',
//   '#154A62',
//   '#145559',
//   '#1A6148',
//   '#217040',
//   '#2E7D32',
// ];

// const ICONS: LucideIcon[] = [
//   Leaf,
//   Sun,
//   Zap,
//   BarChart3,
//   Building2,
//   Droplets,
//   Wind,
//   Recycle,
// ];

// const BANNER_IMG =
//   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90';

// const W = 560;
// const H = 570;
// const CX = 280;
// const CY = 290;
// const RING_OUTER = 230;
// const RING_INNER = 172;
// const ARC_START = 285;
// const ARC_SPAN = 210;
// const GAP = 2;

// function clamp(value: number, min: number, max: number) {
//   return Math.min(max, Math.max(min, value));
// }

// function polar(radius: number, angle: number) {
//   const radians = ((angle - 90) * Math.PI) / 180;

//   return {
//     x: CX + radius * Math.cos(radians),
//     y: CY + radius * Math.sin(radians),
//   };
// }

// function ringSegment(start: number, end: number) {
//   const outerStart = polar(RING_OUTER, start);
//   const outerEnd = polar(RING_OUTER, end);
//   const innerEnd = polar(RING_INNER, end);
//   const innerStart = polar(RING_INNER, start);

//   return [
//     `M ${outerStart.x} ${outerStart.y}`,
//     `A ${RING_OUTER} ${RING_OUTER} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
//     `L ${innerEnd.x} ${innerEnd.y}`,
//     `A ${RING_INNER} ${RING_INNER} 0 0 0 ${innerStart.x} ${innerStart.y}`,
//     'Z',
//   ].join(' ');
// }

// const DROP_PATH =
//   'M280 20 Q345 125 408.9 195.2 A160 160 0 1 1 151.1 195.2 Q215 125 280 20 Z';

// function CapabilityChip({
//   index,
//   size = 46,
// }: {
//   index: number;
//   size?: number;
// }) {
//   const Icon = ICONS[index % ICONS.length];

//   return (
//     <span
//       className="flex shrink-0 items-center justify-center rounded-full text-white shadow-md ring-2 ring-white"
//       style={{
//         width: size,
//         height: size,
//         background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, #0E3B3A)`,
//       }}
//     >
//       <Icon size={size * 0.45} strokeWidth={1.6} />
//     </span>
//   );
// }

// export function SolutionIndex() {
//   const step = ARC_SPAN / items.length;

//   const sectionRef = useRef<HTMLElement>(null);
//   const bannerImageRef = useRef<HTMLImageElement>(null);
//   const ringRef = useRef<SVGGElement>(null);

//   const [hasEntered, setHasEntered] = useState(false);
//   const [hovered, setHovered] = useState<number | null>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHasEntered(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     let frame = 0;

//     const updateMotion = () => {
//       cancelAnimationFrame(frame);

//       frame = requestAnimationFrame(() => {
//         const section = sectionRef.current;
//         if (!section) return;

//         const reduceMotion = window.matchMedia(
//           '(prefers-reduced-motion: reduce)'
//         ).matches;

//         if (reduceMotion) {
//           if (bannerImageRef.current) {
//             bannerImageRef.current.style.transform = 'scale(1.04)';
//           }
//           if (ringRef.current) {
//             ringRef.current.style.transform = 'none';
//           }
//           return;
//         }

//         const bounds = section.getBoundingClientRect();
//         const progress = clamp(
//           (window.innerHeight - bounds.top) /
//             (window.innerHeight + bounds.height),
//           0,
//           1
//         );

//         if (bannerImageRef.current) {
//           const offset = (progress - 0.5) * -30;
//           bannerImageRef.current.style.transform =
//             `scale(1.08) translate3d(0, ${offset}px, 0)`;
//         }

//         if (ringRef.current) {
//           const offset = (progress - 0.5) * -10;
//           const rotation = (progress - 0.5) * 3;
//           ringRef.current.style.transform =
//             `translate3d(0, ${offset}px, 0) rotate(${rotation}deg)`;
//         }
//       });
//     };

//     updateMotion();
//     window.addEventListener('scroll', updateMotion, { passive: true });
//     window.addEventListener('resize', updateMotion);

//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('scroll', updateMotion);
//       window.removeEventListener('resize', updateMotion);
//     };
//   }, []);

//   function renderCapability(
//     index: number,
//     side: 'left' | 'right',
//     rank: number
//   ) {
//     const capability = items[index];
//     const isLeft = side === 'left';
//     const isActive = hovered === index;

//     return (
//       <Reveal key={capability.code} delay={rank * 90}>
//         <Link
//           to="/solutions"
//           onMouseEnter={() => setHovered(index)}
//           onMouseLeave={() => setHovered(null)}
//           onFocus={() => setHovered(index)}
//           onBlur={() => setHovered(null)}
//           className={`group flex min-w-0 items-start gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-forest-800/[0.04] sm:gap-4 ${
//             isLeft ? 'flex-row-reverse text-right' : 'text-left'
//           }`}
//         >
//           <span
//             className="transition-transform duration-300"
//             style={{ transform: isActive ? 'scale(1.08)' : 'scale(1)' }}
//           >
//             <CapabilityChip index={index} />
//           </span>

//           <span className="min-w-0 flex-1">
//             <span
//               className={`flex items-start gap-1.5 font-heading text-base font-semibold leading-snug transition-colors sm:text-lg ${
//                 isLeft ? 'justify-end' : 'justify-start'
//               } ${isActive ? 'text-forest-600' : 'text-forest-900'}`}
//             >
//               {capability.title}
//               <ArrowUpRight
//                 size={15}
//                 className="mt-0.5 shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
//               />
//             </span>

//             <span className="mt-2 block text-sm leading-relaxed text-charcoal/65 sm:text-[15px]">
//               {capability.blurb}
//             </span>
//           </span>
//         </Link>
//       </Reveal>
//     );
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-gradient-to-b from-white to-[#F3F6F2]"
//     >
//       {/* Banner */}
//       <div className="relative h-[340px] overflow-hidden sm:h-[380px] xl:h-[420px]">
//         <img
//           ref={bannerImageRef}
//           src={BANNER_IMG}
//           alt="Renewable energy infrastructure at dusk"
//           className="absolute inset-0 h-full w-full object-cover will-change-transform"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#061D22]/85 via-[#0B3A45]/55 to-[#0B3A45]/30" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(120,200,150,0.2),transparent_60%)]" />
//         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/25 to-transparent" />

//         <div className="shell relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
//           <Reveal>
//             <p className="mb-4 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
//               <span className="h-px w-8 bg-[#C8DDAA]" />
//               Terra Ecopreneurs · Capabilities
//               <span className="h-px w-8 bg-[#C8DDAA]" />
//             </p>

//             <h2 className="whitespace-nowrap font-display text-[clamp(1rem,4.5vw,3.4rem)] leading-tight text-white">
//               Eight disciplines. One purpose.
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
//               Every discipline works as part of one connected system, from the
//               first audit to long-term performance.
//             </p>
//           </Reveal>
//         </div>
//       </div>

//       {/* Ring overlaps the banner; capability lists start at the banner bottom */}
//       <div className="shell relative z-10 -mt-14 pb-14 sm:-mt-20 sm:pb-16 xl:-mt-[120px] xl:pb-20">
//         <div className="grid items-start xl:grid-cols-[minmax(0,1fr)_500px_minmax(0,1fr)] xl:gap-x-6">
//           {/* Capabilities 01–04: below the banner */}
//           <div className="hidden flex-col gap-3 pt-[120px] xl:flex xl:min-h-[600px]">
//             {[0, 1, 2, 3].map((index) =>
//               renderCapability(index, 'left', index)
//             )}
//           </div>

//           {/* Ring and central message */}
//           <div
//             className="mx-auto w-full max-w-[500px]"
//             style={{ aspectRatio: `${W} / ${H}` }}
//           >
//             <svg
//               viewBox={`0 0 ${W} ${H}`}
//               role="img"
//               aria-label="Eight capabilities surrounding the Terra Ecopreneurs approach"
//               className="h-full w-full overflow-visible"
//             >
//               <defs>
//                 <filter
//                   id="dropShadow"
//                   x="-25%"
//                   y="-20%"
//                   width="150%"
//                   height="150%"
//                 >
//                   <feDropShadow
//                     dx="0"
//                     dy="16"
//                     stdDeviation="16"
//                     floodColor="#0B2F2A"
//                     floodOpacity="0.22"
//                   />
//                 </filter>

//                 <linearGradient id="dropFill" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#FFFFFF" />
//                   <stop offset="100%" stopColor="#EDF1EE" />
//                 </linearGradient>
//               </defs>

//               <g
//                 ref={ringRef}
//                 style={{
//                   transformOrigin: `${CX}px ${CY}px`,
//                   transition: 'transform 80ms linear',
//                 }}
//               >
//                 {items.map((capability, index) => {
//                   const end = ARC_START - index * step - GAP / 2;
//                   const start =
//                     ARC_START - (index + 1) * step + GAP / 2;
//                   const middle = ARC_START - (index + 0.5) * step;
//                   const isActive = hovered === index;
//                   const push = polar(isActive ? 7 : 0, middle);
//                   const center = polar(
//                     (RING_OUTER + RING_INNER) / 2,
//                     middle
//                   );
//                   const Icon = ICONS[index % ICONS.length];

//                   return (
//                     <g
//                       key={capability.code}
//                       style={{
//                         opacity: hasEntered ? 1 : 0,
//                         transform: hasEntered ? 'scale(1)' : 'scale(0.8)',
//                         transformOrigin: `${CX}px ${CY}px`,
//                         transition:
//                           'opacity 600ms ease, transform 750ms cubic-bezier(0.2,0.75,0.25,1)',
//                         transitionDelay: `${index * 70}ms`,
//                       }}
//                       onMouseEnter={() => setHovered(index)}
//                       onMouseLeave={() => setHovered(null)}
//                     >
//                       <g
//                         style={{
//                           transform: `translate(${push.x - CX}px, ${push.y - CY}px)`,
//                           transition: 'transform 250ms ease',
//                         }}
//                       >
//                         <path
//                           d={ringSegment(start, end)}
//                           fill={COLORS[index % COLORS.length]}
//                           style={{
//                             filter: isActive
//                               ? 'brightness(1.2)'
//                               : 'brightness(1)',
//                             transition: 'filter 250ms ease',
//                           }}
//                         />

//                         <Icon
//                           x={center.x - 13}
//                           y={center.y - 21}
//                           size={26}
//                           color="white"
//                           strokeWidth={1.5}
//                         />

//                         <text
//                           x={center.x}
//                           y={center.y + 20}
//                           textAnchor="middle"
//                           dominantBaseline="central"
//                           fill="white"
//                           fillOpacity="0.85"
//                           fontSize="11"
//                           fontFamily="ui-monospace, monospace"
//                           letterSpacing="1.5"
//                         >
//                           {capability.code}
//                         </text>
//                       </g>
//                     </g>
//                   );
//                 })}
//               </g>

//               <path
//                 d={DROP_PATH}
//                 fill="url(#dropFill)"
//                 filter="url(#dropShadow)"
//                 style={{
//                   opacity: hasEntered ? 1 : 0,
//                   transform: hasEntered
//                     ? 'translateY(0)'
//                     : 'translateY(-24px)',
//                   transition:
//                     'opacity 700ms ease, transform 900ms cubic-bezier(0.2,0.75,0.25,1)',
//                 }}
//               />

//               <g
//                 style={{
//                   opacity: hasEntered ? 1 : 0,
//                   transition: 'opacity 900ms ease 350ms',
//                 }}
//               >
//                 <text
//                   x={CX}
//                   y="212"
//                   textAnchor="middle"
//                   fill="#3E6A55"
//                   fontSize="10.5"
//                   fontWeight="700"
//                   letterSpacing="3"
//                   fontFamily="sans-serif"
//                 >
//                   THE TERRA APPROACH
//                 </text>

//                 <line
//                   x1="215"
//                   y1="230"
//                   x2="345"
//                   y2="230"
//                   stroke="#C9D3CB"
//                 />

//                 <text
//                   x={CX}
//                   y="276"
//                   textAnchor="middle"
//                   fill="#12382C"
//                   fontSize="34"
//                   fontFamily="Georgia, serif"
//                 >
//                   SUSTAINABLE
//                 </text>

//                 <text
//                   x={CX}
//                   y="316"
//                   textAnchor="middle"
//                   fill="#12382C"
//                   fontSize="34"
//                   fontFamily="Georgia, serif"
//                 >
//                   PROGRESS.
//                 </text>

//                 <line
//                   x1="215"
//                   y1="340"
//                   x2="345"
//                   y2="340"
//                   stroke="#C9D3CB"
//                 />
//               </g>
//             </svg>
//           </div>

//           {/* Capabilities 08–05: below the banner */}
//           <div className="hidden flex-col gap-3 pt-[120px] xl:flex xl:min-h-[600px]">
//             {[7, 6, 5, 4].map((index, rank) =>
//               renderCapability(index, 'right', rank)
//             )}
//           </div>
//         </div>

//         {/* Mobile and tablet capability list */}
//         <div className="mx-auto mt-8 grid max-w-4xl gap-x-8 sm:grid-cols-2 xl:hidden">
//           {items.map((capability, index) => (
//             <Reveal key={capability.code} delay={(index % 2) * 80}>
//               <Link
//                 to="/solutions"
//                 onMouseEnter={() => setHovered(index)}
//                 onMouseLeave={() => setHovered(null)}
//                 onFocus={() => setHovered(index)}
//                 onBlur={() => setHovered(null)}
//                 className="group flex items-start gap-4 border-t border-forest-800/15 py-5 transition-colors hover:border-forest-600"
//               >
//                 <CapabilityChip index={index} size={46} />

//                 <span className="min-w-0 flex-1">
//                   <span className="block font-heading text-base font-semibold text-forest-900 transition-colors group-hover:text-forest-600">
//                     {capability.title}
//                   </span>
//                   <span className="mt-1.5 block text-sm leading-relaxed text-charcoal/65">
//                     {capability.blurb}
//                   </span>
//                 </span>

//                 <ArrowUpRight
//                   size={17}
//                   className="mt-1 shrink-0 text-forest-800/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </Reveal>
//           ))}
//         </div>

//         <Reveal delay={150}>
//           <div className="mt-10 flex items-center justify-center gap-4 text-center">
//             <span className="h-px w-8 bg-forest-700/30" />
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-800/55">
//               One connected approach to lasting impact
//             </p>
//             <span className="h-px w-8 bg-forest-700/30" />
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Droplets,
  Leaf,
  Recycle,
  Sun,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Capability = {
  code: string;
  title: string;
  blurb: string;
};

const ITEMS: Capability[] = [
  {
    code: '01',
    title: 'Energy Efficiency & Audit',
    blurb:
      'Walk-through to investment-grade audits; metering, benchmarking and retrofit roadmaps.',
  },
  {
    code: '02',
    title: 'Clean Energy',
    blurb:
      'Solar PV, hybrid systems and decentralised renewables for industry and agriculture.',
  },
  {
    code: '03',
    title: 'IBMS',
    blurb:
      'Integrated building management systems that make every plant visible and controllable.',
  },
  {
    code: '04',
    title: 'Digital Solutions',
    blurb:
      'Energy dashboards, IoT metering and analytics that keep savings honest after handover.',
  },
  {
    code: '05',
    title: 'Industrial Automation',
    blurb:
      'PLC, SCADA and process control engineered for reliability on the factory floor.',
  },
  {
    code: '06',
    title: 'Prefabricated Structures',
    blurb:
      'Fast, low-waste steel buildings for industry and rural infrastructure.',
  },
  {
    code: '07',
    title: 'Press Components',
    blurb:
      'Precision sheet-metal press parts manufactured to client specification.',
  },
  {
    code: '08',
    title: 'Sustainable Management',
    blurb:
      'ESG advisory, carbon accounting and sustainability reporting for growing companies.',
  },
];

const COLORS = [
  '#2F7C96',
  '#1F6685',
  '#175774',
  '#154A62',
  '#145559',
  '#1A6148',
  '#217040',
  '#2E7D32',
];

const ICONS: LucideIcon[] = [
  Leaf,
  Sun,
  Zap,
  BarChart3,
  Building2,
  Droplets,
  Wind,
  Recycle,
];

const BANNER_IMG =
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90';

const W = 560;
const H = 570;
const CX = 280;
const CY = 290;
const RING_OUTER = 230;
const RING_INNER = 172;
const ARC_START = 285;
const ARC_SPAN = 210;
const GAP = 2;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function polar(radius: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: CX + radius * Math.cos(radians),
    y: CY + radius * Math.sin(radians),
  };
}

function ringSegment(start: number, end: number) {
  const outerStart = polar(RING_OUTER, start);
  const outerEnd = polar(RING_OUTER, end);
  const innerEnd = polar(RING_INNER, end);
  const innerStart = polar(RING_INNER, start);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${RING_OUTER} ${RING_OUTER} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${RING_INNER} ${RING_INNER} 0 0 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
}

const DROP_PATH =
  'M280 20 Q345 125 408.9 195.2 A160 160 0 1 1 151.1 195.2 Q215 125 280 20 Z';

function CapabilityChip({
  index,
  size = 46,
}: {
  index: number;
  size?: number;
}) {
  const Icon = ICONS[index % ICONS.length];

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full text-white shadow-md ring-2 ring-white"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, #0E3B3A)`,
      }}
    >
      <Icon size={size * 0.45} strokeWidth={1.6} />
    </span>
  );
}

export function SolutionIndex() {
  const step = ARC_SPAN / ITEMS.length;

  const sectionRef = useRef<HTMLElement>(null);
  const bannerImageRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<SVGGElement>(null);

  const [hasEntered, setHasEntered] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

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

  // Scroll-linked banner parallax and subtle ring movement.
  useEffect(() => {
    let frame = 0;

    const updateMotion = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (reduceMotion) {
          if (bannerImageRef.current) {
            bannerImageRef.current.style.transform = 'scale(1.04)';
          }
          if (ringRef.current) {
            ringRef.current.style.transform = 'none';
          }
          return;
        }

        const bounds = section.getBoundingClientRect();
        const progress = clamp(
          (window.innerHeight - bounds.top) /
            (window.innerHeight + bounds.height),
          0,
          1
        );

        if (bannerImageRef.current) {
          const imageOffset = (progress - 0.5) * -34;
          bannerImageRef.current.style.transform =
            `scale(1.12) translate3d(0, ${imageOffset}px, 0)`;
        }

        if (ringRef.current) {
          const ringOffset = (progress - 0.5) * -12;
          const rotation = (progress - 0.5) * 3;
          ringRef.current.style.transform =
            `translate3d(0, ${ringOffset}px, 0) rotate(${rotation}deg)`;
        }
      });
    };

    updateMotion();
    window.addEventListener('scroll', updateMotion, { passive: true });
    window.addEventListener('resize', updateMotion);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateMotion);
      window.removeEventListener('resize', updateMotion);
    };
  }, []);

  function renderCapability(
    index: number,
    side: 'left' | 'right',
    rank: number
  ) {
    const capability = ITEMS[index];
    const isLeft = side === 'left';
    const isActive = hovered === index;

    return (
      <Reveal key={capability.code} delay={rank * 100}>
        <Link
          to="/solutions"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(index)}
          onBlur={() => setHovered(null)}
          className={`group flex min-w-0 items-start gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-forest-800/[0.04] sm:gap-4 ${
            isLeft ? 'flex-row-reverse text-right' : 'text-left'
          }`}
        >
          <span
            className="transition-transform duration-300"
            style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
          >
            <CapabilityChip index={index} />
          </span>

          <span className="min-w-0 flex-1">
            <span
              className={`flex items-start gap-1.5 font-heading text-base font-semibold leading-snug transition-colors sm:text-lg ${
                isLeft ? 'justify-end' : 'justify-start'
              } ${isActive ? 'text-forest-600' : 'text-forest-900'}`}
            >
              {capability.title}
              <ArrowUpRight
                size={15}
                className="mt-0.5 shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </span>

            <span className="mt-2 block text-sm leading-relaxed text-charcoal/65 sm:text-[15px]">
              {capability.blurb}
            </span>
          </span>
        </Link>
      </Reveal>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F3F6F2]"
    >
      {/* Full-bleed hero banner */}
      <div className="relative pb-4 pt-4 sm:pb-6 sm:pt-6 xl:pt-8">
        <div className="shell relative">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
            <div className="relative h-[280px] sm:h-[360px] xl:h-[440px]">
              {/* Full-bleed image */}
              <img
                ref={bannerImageRef}
                src={BANNER_IMG}
                alt="Renewable energy infrastructure at dusk"
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
              />

              {/* Gradient overlays for legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061D22]/85 via-[#0B3A45]/55 to-[#0B3A45]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D22]/60 via-transparent to-[#061D22]/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(120,200,150,0.18),transparent_65%)]" />

              {/* Corner accents */}
              <div aria-hidden className="absolute left-5 top-5 z-10 h-6 w-6 border-l border-t border-white/30 sm:left-7 sm:top-7" />
              <div aria-hidden className="absolute right-5 top-5 z-10 h-6 w-6 border-r border-t border-white/30 sm:right-7 sm:top-7" />
              <div aria-hidden className="absolute bottom-5 left-5 z-10 h-6 w-6 border-b border-l border-white/30 sm:bottom-7 sm:left-7" />
              <div aria-hidden className="absolute bottom-5 right-5 z-10 h-6 w-6 border-b border-r border-white/30 sm:bottom-7 sm:right-7" />

              {/* Text overlay */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
                <Reveal>
                  <p className="mb-3 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
                    <span className="h-px w-8 bg-[#C8DDAA]" />
                    Terra Ecopreneurs · Capabilities
                    <span className="h-px w-8 bg-[#C8DDAA]" />
                  </p>

                  <h2 className="whitespace-nowrap font-display text-[clamp(1rem,4.5vw,3rem)] leading-tight text-white">
                    Eight disciplines. One purpose.
                  </h2>

                  <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm lg:text-base">
                    Every discipline works as part of one connected system, from
                    the first audit to long-term performance.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ring overlaps the hero */}
      <div className="shell relative z-10 -mt-16 pb-12 sm:-mt-24 sm:pb-14 xl:-mt-[140px] xl:pb-16">
        <div className="grid items-start xl:grid-cols-[minmax(0,1fr)_500px_minmax(0,1fr)] xl:gap-x-6">
          {/* Capabilities 01–04 */}
          <div className="hidden flex-col gap-3 pt-[120px] xl:flex xl:min-h-[600px]">
            {[0, 1, 2, 3].map((index) =>
              renderCapability(index, 'left', index)
            )}
          </div>

          {/* Animated capability ring */}
          <div
            className="mx-auto w-full max-w-[500px]"
            style={{ aspectRatio: `${W} / ${H}` }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              aria-label="Eight capabilities surrounding the Terra Ecopreneurs approach"
              className="h-full w-full overflow-visible"
            >
              <defs>
                <filter
                  id="dropShadow"
                  x="-25%"
                  y="-20%"
                  width="150%"
                  height="150%"
                >
                  <feDropShadow
                    dx="0"
                    dy="16"
                    stdDeviation="16"
                    floodColor="#0B2F2A"
                    floodOpacity="0.22"
                  />
                </filter>

                <linearGradient id="dropFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#EDF1EE" />
                </linearGradient>
              </defs>

              <g
                ref={ringRef}
                style={{
                  transformOrigin: `${CX}px ${CY}px`,
                  transition: 'transform 80ms linear',
                }}
              >
                {ITEMS.map((capability, index) => {
                  const end = ARC_START - index * step - GAP / 2;
                  const start = ARC_START - (index + 1) * step + GAP / 2;
                  const middle = ARC_START - (index + 0.5) * step;
                  const isActive = hovered === index;
                  const push = polar(isActive ? 7 : 0, middle);
                  const center = polar((RING_OUTER + RING_INNER) / 2, middle);
                  const Icon = ICONS[index % ICONS.length];

                  return (
                    <g
                      key={capability.code}
                      style={{
                        opacity: hasEntered ? 1 : 0,
                        transform: hasEntered ? 'scale(1)' : 'scale(0.78)',
                        transformOrigin: `${CX}px ${CY}px`,
                        transition:
                          'opacity 650ms ease, transform 800ms cubic-bezier(0.2,0.75,0.25,1)',
                        transitionDelay: `${index * 80}ms`,
                      }}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <g
                        style={{
                          transform: `translate(${push.x - CX}px, ${push.y - CY}px)`,
                          transition:
                            'transform 280ms cubic-bezier(0.2,0.75,0.25,1)',
                        }}
                      >
                        <path
                          d={ringSegment(start, end)}
                          fill={COLORS[index % COLORS.length]}
                          style={{
                            filter: isActive
                              ? 'brightness(1.2)'
                              : 'brightness(1)',
                            transition: 'filter 250ms ease',
                          }}
                        />

                        <Icon
                          x={center.x - 13}
                          y={center.y - 21}
                          size={26}
                          color="white"
                          strokeWidth={1.5}
                        />

                        <text
                          x={center.x}
                          y={center.y + 20}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fillOpacity="0.85"
                          fontSize="11"
                          fontFamily="ui-monospace, monospace"
                          letterSpacing="1.5"
                        >
                          {capability.code}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>

              {/* Center droplet reveals after the ring */}
              <path
                d={DROP_PATH}
                fill="url(#dropFill)"
                filter="url(#dropShadow)"
                style={{
                  opacity: hasEntered ? 1 : 0,
                  transform: hasEntered
                    ? 'translateY(0)'
                    : 'translateY(-24px)',
                  transition:
                    'opacity 700ms ease, transform 900ms cubic-bezier(0.2,0.75,0.25,1)',
                  transitionDelay: '250ms',
                }}
              />

              {/* Center message */}
              <g
                style={{
                  opacity: hasEntered ? 1 : 0,
                  transition: 'opacity 900ms ease 500ms',
                }}
              >
                <text
                  x={CX}
                  y="212"
                  textAnchor="middle"
                  fill="#3E6A55"
                  fontSize="10.5"
                  fontWeight="700"
                  letterSpacing="3"
                  fontFamily="sans-serif"
                >
                  THE TERRA APPROACH
                </text>

                <line x1="215" y1="230" x2="345" y2="230" stroke="#C9D3CB" />

                <text
                  x={CX}
                  y="276"
                  textAnchor="middle"
                  fill="#12382C"
                  fontSize="34"
                  fontFamily="Georgia, serif"
                >
                  SUSTAINABLE
                </text>

                <text
                  x={CX}
                  y="316"
                  textAnchor="middle"
                  fill="#12382C"
                  fontSize="34"
                  fontFamily="Georgia, serif"
                >
                  PROGRESS.
                </text>

                <line x1="215" y1="340" x2="345" y2="340" stroke="#C9D3CB" />
              </g>
            </svg>
          </div>

          {/* Capabilities 08–05 */}
          <div className="hidden flex-col gap-3 pt-[120px] xl:flex xl:min-h-[600px]">
            {[7, 6, 5, 4].map((index, rank) =>
              renderCapability(index, 'right', rank)
            )}
          </div>
        </div>

        {/* Mobile and tablet capability list */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-x-8 sm:grid-cols-2 xl:hidden">
          {ITEMS.map((capability, index) => (
            <Reveal key={capability.code} delay={(index % 2) * 80}>
              <Link
                to="/solutions"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                className="group flex items-start gap-4 border-t border-forest-800/15 py-5 transition-colors hover:border-forest-600"
              >
                <CapabilityChip index={index} />

                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-base font-semibold text-forest-900 transition-colors group-hover:text-forest-600">
                    {capability.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-charcoal/65">
                    {capability.blurb}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-forest-800/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-10 flex items-center justify-center gap-4 text-center">
            <span className="h-px w-8 bg-forest-700/30" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-800/55">
              One connected approach to lasting impact
            </p>
            <span className="h-px w-8 bg-forest-700/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}