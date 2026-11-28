// import {
//   useState,
//   useEffect,
//   useRef,
//   useMemo,
//   useCallback,
// } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowLeft,
//   ArrowUpRight,
//   Play,
//   Pause,
//   Leaf,
//   Zap,
//   Globe,
// } from "lucide-react";

// type Solution = {
//   title: string;
//   category: string;
//   headline: string;
//   highlight: string;
//   description: string;
//   image: string;
//   video: string;
//   link: string;
// };

// const TOTAL_SOLUTIONS = 8;
// const INITIAL_INDEX = 1; // starts on "02 / 08 Clean Energy" like the design
// const DWELL_MS = 6000;

// const SOLUTIONS: Solution[] = [
//   {
//     title: "Energy Efficiency & Audit",
//     category: "ENERGY OPTIMIZATION",
//     headline: "Smarter Energy.",
//     highlight: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower costs, and boost performance with data-driven efficiency audits and upgrades.",
//     image:
//       "https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/energy-efficiency.mp4",
//     link: "/solutions/energy-efficiency",
//   },
//   {
//     title: "Clean Energy",
//     category: "RENEWABLE ENERGY",
//     headline: "Powering a",
//     highlight: "Cleaner Tomorrow.",
//     description:
//       "Transition to a greener, more resilient future with our scalable renewable energy installations.",
//     image:
//       "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/clean-energy.mp4",
//     link: "/solutions/clean-energy",
//   },
//   {
//     title: "IBMS",
//     category: "INTELLIGENT BUILDING MANAGEMENT",
//     headline: "Buildings That",
//     highlight: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer, and highly efficient building management.",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/ibms.mp4",
//     link: "/solutions/ibms",
//   },
//   {
//     title: "Digital Solutions",
//     category: "DIGITAL TRANSFORMATION",
//     headline: "Transforming Ideas.",
//     highlight: "Into Intelligence.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools and data-driven architectures.",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/digital-solutions.mp4",
//     link: "/solutions/digital",
//   },
//   {
//     title: "Industrial Automation",
//     category: "INDUSTRIAL INNOVATION",
//     headline: "Automate Today.",
//     highlight: "Advance Tomorrow.",
//     description:
//       "Streamline production lines and accelerate output with our state-of-the-art robotic and automation systems.",
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/industrial-automation.mp4",
//     link: "/solutions/industrial-automation",
//   },
//   {
//     title: "Pre-fab Structures",
//     category: "SUSTAINABLE CONSTRUCTION",
//     headline: "Build Faster.",
//     highlight: "Build Smarter.",
//     description:
//       "Accelerate your construction timeline with durable, high-quality, and rapidly deployable prefabricated structures.",
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/prefab-structures.mp4",
//     link: "/solutions/prefab",
//   },
//   {
//     title: "Press Components",
//     category: "PRECISION ENGINEERING",
//     headline: "Precision in",
//     highlight: "Every Detail.",
//     description:
//       "Secure precision and heavy-duty reliability for your manufacturing needs with custom-engineered press components.",
//     image:
//       "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/press-components.mp4",
//     link: "/solutions/press-components",
//   },
//   {
//     title: "Sustainable Management",
//     category: "SUSTAINABLE DEVELOPMENT",
//     headline: "Growing Responsibly.",
//     highlight: "Creating Impact.",
//     description:
//       "Drive long-term growth and environmental responsibility with strategic frameworks built for the modern enterprise.",
//     image:
//       "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=700&q=85",
//     video: "/videos/sustainable-management.mp4",
//     link: "/solutions/sustainable-management",
//   },
// ];

// const FEATURES = [
//   { icon: Leaf, lines: ["Green", "Planet"] },
//   { icon: Zap, lines: ["Clean", "Energy"] },
//   { icon: Globe, lines: ["Sustainable", "Future"] },
// ];

// // ------------------------------------------------------
// // Helpers
// // ------------------------------------------------------

// const wrap = (value: number, max: number) => ((value % max) + max) % max;
// const pad = (n: number) => String(n).padStart(2, "0");
// const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// // Orbit arc as a cubic bezier in a 100 x 100 box (bulges to the right).
// const orbitPoint = (t: number) => {
//   const u = 1 - t;
//   return {
//     x: u * u * u * 50 + 3 * u * u * t * 88 + 3 * u * t * t * 88 + t * t * t * 50,
//     y: u * u * u * 96 + 3 * u * u * t * 78 + 3 * u * t * t * 22 + t * t * t * 4,
//   };
// };

// // ------------------------------------------------------
// // Small pieces
// // ------------------------------------------------------

// function LeafShape({ className, style }: { className?: string; style?: React.CSSProperties }) {
//   return (
//     <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true">
//       <path
//         d="M10 190C10 90 70 20 190 8c0 100-50 175-180 182z"
//         fill="url(#terraLeafFill)"
//       />
//       <path d="M12 188L150 50" stroke="#04210f" strokeOpacity="0.55" strokeWidth="3" />
//     </svg>
//   );
// }

// // ------------------------------------------------------
// // Main component
// // ------------------------------------------------------

// export function TerraOrbitalSolutionsHero() {
//   const [active, setActive] = useState(INITIAL_INDEX);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [videoReady, setVideoReady] = useState(false);
//   const [videoFailed, setVideoFailed] = useState(false);

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const bgVideoRef = useRef<HTMLVideoElement | null>(null);
//   const [bgReady, setBgReady] = useState(false);
//   const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
//   const posRef = useRef(INITIAL_INDEX);
//   const targetRef = useRef(INITIAL_INDEX);
//   const accRef = useRef(0);
//   const playingRef = useRef(true);
//   const hoverRef = useRef(false);
//   const dragStartY = useRef<number | null>(null);

//   const solution = SOLUTIONS[active];

//   useEffect(() => {
//     playingRef.current = isPlaying;
//   }, [isPlaying]);

//   // ----------------------------------------------------
//   // Navigation
//   // ----------------------------------------------------

//   const goTo = useCallback((index: number) => {
//     let diff = wrap(index - targetRef.current, TOTAL_SOLUTIONS);
//     if (diff > TOTAL_SOLUTIONS / 2) diff -= TOTAL_SOLUTIONS;
//     targetRef.current = Math.round(targetRef.current) + Math.round(diff);
//     accRef.current = 0;
//   }, []);

//   const step = useCallback((dir: number) => {
//     targetRef.current = Math.round(targetRef.current) + dir;
//     accRef.current = 0;
//   }, []);

//   // ----------------------------------------------------
//   // Orbit animation (direct DOM writes, no per-frame re-render)
//   // ----------------------------------------------------

//   const paintOrbit = useCallback(() => {
//     nodeRefs.current.forEach((el, i) => {
//       if (!el) return;
//       const d = wrap(i - posRef.current + TOTAL_SOLUTIONS / 2, TOTAL_SOLUTIONS) - TOTAL_SOLUTIONS / 2;
//       const p = clamp01(0.5 - d / 6);
//       const { x, y } = orbitPoint(p);
//       const scale = 0.5 + 0.5 * Math.pow(Math.sin(Math.PI * p), 6);
//       const a = Math.abs(d);
//       const opacity = a > 2.6 ? 0 : a > 1.8 ? (2.6 - a) / 0.8 : 1;

//       el.style.left = `${x}%`;
//       el.style.top = `${y}%`;
//       el.style.transform = `translate(-50%, -50%) scale(${scale})`;
//       el.style.opacity = String(opacity);
//       el.style.zIndex = String(Math.round(10 + scale * 30));
//       el.style.pointerEvents = opacity < 0.3 ? "none" : "auto";
//     });
//   }, []);

//   useEffect(() => {
//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     let raf = 0;
//     let last = performance.now();

//     const tick = (now: number) => {
//       const dt = Math.min(now - last, 64);
//       last = now;

//       if (playingRef.current && !hoverRef.current && !reduceMotion) {
//         accRef.current += dt;
//         if (accRef.current >= DWELL_MS) {
//           targetRef.current = Math.round(targetRef.current) + 1;
//           accRef.current = 0;
//         }
//       }

//       posRef.current += (targetRef.current - posRef.current) * Math.min(1, dt * 0.006);
//       paintOrbit();

//       const idx = wrap(Math.round(targetRef.current), TOTAL_SOLUTIONS);
//       setActive((prev) => (prev === idx ? prev : idx));

//       raf = requestAnimationFrame(tick);
//     };

//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [paintOrbit]);

//   // ----------------------------------------------------
//   // Change active video
//   // ----------------------------------------------------

//   useEffect(() => {
//     setVideoReady(false);
//     setVideoFailed(false);

//     setBgReady(false);

//     const video = videoRef.current;
//     const bg = bgVideoRef.current;

//     [video, bg].forEach((v) => {
//       if (!v) return;
//       v.muted = true;
//       v.play().catch(() => {
//         // Autoplay restrictions are handled gracefully.
//       });
//     });

//     return () => {
//       video?.pause();
//       bg?.pause();
//     };
//   }, [active]);

//   // ----------------------------------------------------
//   // Decorative wave lines
//   // ----------------------------------------------------

//   const wavePaths = useMemo(() => {
//     return Array.from({ length: 24 }, (_, i) => {
//       let d = "";
//       for (let x = 0; x <= 1600; x += 40) {
//         const y =
//           200 + i * 1.6 -
//           Math.sin(x / 260 + i * 0.07) * (62 - i * 1.1) -
//           Math.sin(x / 90 + i * 0.15) * 5;
//         d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)} `;
//       }
//       return {
//         d,
//         opacity: 0.55 - i * 0.017,
//         width: i % 6 === 0 ? 1.3 : 0.6,
//         light: 45 + i,
//       };
//     });
//   }, []);

//   return (
//     <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#021710] text-white selection:bg-[#7ED957]/30">

//       {/* Shared gradient for leaf shapes */}
//       <svg width="0" height="0" className="absolute" aria-hidden="true">
//         <defs>
//           <linearGradient id="terraLeafFill" x1="0" y1="1" x2="1" y2="0">
//             <stop offset="0" stopColor="#0f5a22" />
//             <stop offset="0.6" stopColor="#2f9a3a" />
//             <stop offset="1" stopColor="#7ED957" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* ================================================= */}
//       {/* BACKGROUND */}
//       {/* ================================================= */}

//       <div className="absolute inset-0 -z-40 bg-gradient-to-b from-[#031c13] to-[#021008]" />

//       {/* Full-section background video (follows the highlighted solution) */}
//       <video
//         key={`bg-${solution.video}`}
//         ref={bgVideoRef}
//         src={solution.video}
//         poster={solution.image}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         aria-hidden="true"
//         onCanPlay={() => setBgReady(true)}
//         className={`pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-1000 ${
//           bgReady ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* Poster shown until the video is ready or if it fails */}
//       <img
//         key={`bg-poster-${active}`}
//         src={solution.image}
//         alt=""
//         aria-hidden="true"
//         className={`pointer-events-none absolute inset-0 -z-[31] h-full w-full object-cover transition-opacity duration-700 ${
//           bgReady ? "opacity-0" : "opacity-100"
//         }`}
//       />

//       {/* Dark green overlays keep text readable over any video */}
//       <div className="pointer-events-none absolute inset-0 -z-20 bg-[#021710]/70" />
//       <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_45%,rgba(17,84,46,0.55),transparent_55%),radial-gradient(ellipse_at_92%_40%,rgba(14,80,44,0.35),transparent_50%)]" />
//       <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#021710]/85 via-[#021710]/35 to-transparent" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-1/3 bg-gradient-to-t from-[#021008] to-transparent" />

//       {/* Wave lines */}
//       <svg
//         viewBox="0 0 1600 300"
//         preserveAspectRatio="none"
//         className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[34%] w-full"
//         aria-hidden="true"
//       >
//         {wavePaths.map((p, i) => (
//           <path
//             key={i}
//             d={p.d}
//             fill="none"
//             stroke={`hsl(105 70% ${p.light}%)`}
//             strokeOpacity={p.opacity}
//             strokeWidth={p.width}
//           />
//         ))}
//       </svg>

//       {/* Blurred foreground leaves */}
//       <LeafShape
//         className="pointer-events-none absolute -left-16 -top-14 z-[5] w-[260px] -rotate-[25deg] animate-[terraSway_9s_ease-in-out_infinite_alternate] opacity-90 blur-[3px] sm:w-[300px]"
//       />
//       <LeafShape
//         className="pointer-events-none absolute -bottom-24 -left-32 z-[5] hidden w-[300px] rotate-[35deg] animate-[terraSway_11s_ease-in-out_infinite_alternate] opacity-95 blur-[6px] sm:block"
//       />
//       <LeafShape
//         className="pointer-events-none absolute -bottom-20 -right-20 z-[5] hidden w-[340px] -rotate-[130deg] animate-[terraSway_10s_ease-in-out_infinite_alternate] blur-[4px] md:block"
//       />

//       {/* ================================================= */}
//       {/* MAIN LAYOUT */}
//       {/* ================================================= */}

//       <div className="relative z-10 mx-auto grid w-full max-w-[1800px] flex-1 items-center gap-10 px-6 pb-20 pt-16 sm:px-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,43%)] xl:gap-0 xl:px-[84px] xl:pb-24 xl:pt-20">

//         {/* ============================================= */}
//         {/* LEFT: ACTIVE SOLUTION CONTENT */}
//         {/* ============================================= */}

//         <div className="relative z-20 min-w-0">
//           <div
//             key={`content-${active}`}
//             className="animate-[terraContentIn_850ms_cubic-bezier(0.16,1,0.3,1)_both]"
//           >
//             {/* Category badge */}
//             <div className="inline-flex items-center gap-4 rounded-full border border-[#7ED957]/35 bg-[#04240f]/65 py-1.5 pl-1.5 pr-7 sm:pr-9">
//               <span className="grid h-10 w-10 place-items-center rounded-full border border-[#7ED957]/50 bg-gradient-to-br from-[#1c6b2d] to-[#0a3a1a] sm:h-11 sm:w-11">
//                 <Leaf size={20} className="text-[#7ED957]" />
//               </span>
//               <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7ED957] sm:text-[13px]">
//                 {solution.category}
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="mt-8 font-display text-[clamp(3rem,5.9vw,6.3rem)] font-normal leading-[1.02] tracking-[-0.045em] [text-shadow:0_6px_30px_rgba(0,0,0,0.45)] sm:mt-9">
//               <span className="block text-white">{solution.headline}</span>
//               <span className="block bg-gradient-to-r from-[#6fd84a] to-[#a7ee66] bg-clip-text pr-1 italic text-transparent">
//                 {solution.highlight}
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-8 max-w-[540px] border-l-[3px] border-[#7ED957] pl-6 text-base leading-relaxed text-white/80 sm:mt-9 sm:pl-7 sm:text-xl sm:leading-[1.6]">
//               {solution.description}
//             </p>

//             {/* CTA */}
//             <div className="mt-10 flex flex-wrap items-center gap-8 sm:mt-11 sm:gap-10">
//               <Link
//                 to={solution.link}
//                 className="group inline-flex items-center gap-8 rounded-full bg-gradient-to-r from-[#8ee65c] to-[#b9f57c] py-2 pl-8 pr-2 text-base font-semibold text-[#06200d] shadow-[0_12px_40px_rgba(126,217,87,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(126,217,87,0.45)] sm:gap-9 sm:text-lg"
//               >
//                 Explore solution
//                 <span className="grid h-12 w-12 place-items-center rounded-full bg-[#06200d] text-white transition-transform duration-300 group-hover:translate-x-1 sm:h-[52px] sm:w-[52px]">
//                   <ArrowRight size={21} />
//                 </span>
//               </Link>

//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center gap-3 border-b-[1.5px] border-[#7ED957] pb-1.5 text-base font-semibold transition-all hover:gap-4 hover:text-[#B5F27E] sm:text-[17px]"
//               >
//                 Let's talk
//                 <ArrowRight size={18} />
//               </Link>
//             </div>

//             {/* Feature row */}
//             <ul className="mt-12 flex flex-wrap items-center gap-y-5 sm:mt-14">
//               {FEATURES.map(({ icon: Icon, lines }, i) => (
//                 <li
//                   key={lines.join("-")}
//                   className={`flex items-center gap-3.5 text-base leading-snug text-white/90 ${
//                     i === 0 ? "pr-6 sm:pr-7" : "border-l border-white/20 px-6 sm:px-7"
//                   }`}
//                 >
//                   <Icon
//                     size={36}
//                     strokeWidth={1.4}
//                     className="shrink-0 text-[#7ED957] drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]"
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
//         </div>

//         {/* ============================================= */}
//         {/* RIGHT: ORBIT (overlapping the card) + VIDEO CARD */}
//         {/* ============================================= */}

//         <div className="relative z-10 min-w-0">

//           {/* Orbit — sits over the card's left edge */}
//           <div
//             className="absolute -left-[195px] top-[8%] z-30 hidden h-[86%] w-[200px] cursor-grab touch-none active:cursor-grabbing xl:block"
//             onPointerDown={(e) => {
//               dragStartY.current = e.clientY;
//             }}
//             onPointerUp={(e) => {
//               if (dragStartY.current === null) return;
//               const delta = e.clientY - dragStartY.current;
//               dragStartY.current = null;
//               if (Math.abs(delta) > 40) step(delta < 0 ? 1 : -1);
//             }}
//             onPointerLeave={() => {
//               dragStartY.current = null;
//             }}
//           >
//             {/* Orbit path */}
//             <svg
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
//               aria-hidden="true"
//             >
//               <defs>
//                 <linearGradient id="terraOrbitGradient" x1="0" y1="1" x2="0" y2="0">
//                   <stop offset="0%" stopColor="#7ED957" stopOpacity="0.1" />
//                   <stop offset="50%" stopColor="#B5F27E" stopOpacity="0.95" />
//                   <stop offset="100%" stopColor="#7ED957" stopOpacity="0.1" />
//                 </linearGradient>
//                 <filter id="terraOrbitGlow">
//                   <feGaussianBlur stdDeviation="2.5" />
//                 </filter>
//               </defs>

//               <path
//                 d="M 50 96 C 88 78, 88 22, 50 4"
//                 fill="none"
//                 stroke="#7ED957"
//                 strokeWidth="8"
//                 opacity="0.18"
//                 filter="url(#terraOrbitGlow)"
//                 vectorEffect="non-scaling-stroke"
//               />
//               <path
//                 d="M 50 96 C 88 78, 88 22, 50 4"
//                 fill="none"
//                 stroke="url(#terraOrbitGradient)"
//                 strokeWidth="1.5"
//                 vectorEffect="non-scaling-stroke"
//               />
//               <path
//                 d="M 30 90 C 70 75, 70 25, 30 10"
//                 fill="none"
//                 stroke="#B5F27E"
//                 strokeWidth="0.8"
//                 opacity="0.25"
//                 vectorEffect="non-scaling-stroke"
//               />
//             </svg>

//             {/* End markers */}
//             <span className="absolute left-[55%] top-[4%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957] shadow-[0_0_14px_#7ED957]" />
//             <span className="absolute left-1/2 top-[96%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957] shadow-[0_0_14px_#7ED957]" />

//             {/* Solution thumbnails */}
//             {SOLUTIONS.map((item, index) => {
//               const isActive = index === active;

//               return (
//                 <button
//                   key={item.title}
//                   ref={(el) => {
//                     nodeRefs.current[index] = el;
//                   }}
//                   type="button"
//                   onClick={() => goTo(index)}
//                   aria-label={`Select ${item.title}`}
//                   aria-current={isActive ? "true" : undefined}
//                   className={`group absolute aspect-square w-[150px] rounded-full opacity-0 outline-none will-change-transform focus-visible:ring-2 focus-visible:ring-[#B5F27E] ${
//                     isActive
//                       ? "border-[3px] border-[#c9ffa6] shadow-[0_0_0_7px_rgba(126,217,87,0.14),0_0_50px_rgba(126,217,87,0.8)]"
//                       : "border-2 border-white/55 shadow-[0_8px_28px_rgba(0,0,0,0.45)] hover:border-[#B5F27E]"
//                   }`}
//                   style={{ left: "50%", top: "96%" }}
//                 >
//                   <span className="absolute inset-0 overflow-hidden rounded-full bg-[#09291B]">
//                     <img
//                       src={item.image}
//                       alt=""
//                       loading="lazy"
//                       className={`h-full w-full object-cover transition-all duration-500 ${
//                         isActive ? "scale-110 brightness-110" : "brightness-90 group-hover:brightness-110"
//                       }`}
//                     />
//                     <span className="absolute inset-0 bg-gradient-to-t from-[#041B14]/40 via-transparent to-transparent" />
//                   </span>

//                   {isActive && (
//                     <>
//                       {/* Tilted orbit ring */}
//                       <svg
//                         viewBox="0 0 100 100"
//                         className="pointer-events-none absolute -left-[22%] -top-[22%] h-[144%] w-[144%] -rotate-[24deg] overflow-visible"
//                         aria-hidden="true"
//                       >
//                         <ellipse
//                           cx="50"
//                           cy="50"
//                           rx="50"
//                           ry="26"
//                           fill="none"
//                           stroke="#B5F27E"
//                           strokeWidth="0.7"
//                           opacity="0.9"
//                         />
//                         <circle cx="96" cy="56" r="1.6" fill="#c9ffa6" />
//                       </svg>

//                       {/* Leaf badge */}
//                       <span className="pointer-events-none absolute -bottom-[2%] -right-[6%] grid h-[42%] w-[42%] place-items-center">
//                         <LeafShape className="h-full w-full drop-shadow-[0_0_8px_rgba(126,217,87,0.9)]" />
//                       </span>
//                     </>
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Video card */}
//           <div
//             className="group relative h-[clamp(420px,70svh,740px)] overflow-hidden rounded-[32px] border-[1.5px] border-[#a0ff8c]/45 bg-[#09271B] shadow-[0_0_0_1px_rgba(126,217,87,0.15),0_0_60px_rgba(126,217,87,0.28),0_40px_100px_rgba(0,0,0,0.5)] sm:rounded-[44px]"
//             onMouseEnter={() => {
//               hoverRef.current = true;
//             }}
//             onMouseLeave={() => {
//               hoverRef.current = false;
//             }}
//           >
//             {/* Poster / fallback */}
//             <img
//               key={`poster-${active}`}
//               src={solution.image}
//               alt={solution.title}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                 videoReady && !videoFailed ? "opacity-0" : "opacity-100"
//               }`}
//             />

//             {/* Video */}
//             <video
//               key={solution.video}
//               ref={videoRef}
//               src={solution.video}
//               poster={solution.image}
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="auto"
//               onCanPlay={() => setVideoReady(true)}
//               onError={() => setVideoFailed(true)}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                 videoReady && !videoFailed ? "opacity-100" : "opacity-0"
//               }`}
//             />

//             {/* Overlays */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02162a]/85 via-[#02162a]/0 to-transparent" />
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

//             {/* Counter */}
//             <div className="absolute right-5 top-5 z-10 flex items-center gap-3 rounded-full border border-white/15 bg-[#03160f]/80 px-4 py-2.5 text-sm backdrop-blur-md sm:right-8 sm:top-8 sm:gap-3.5 sm:px-5 sm:text-[17px]">
//               <span className="font-bold">{pad(active + 1)}</span>
//               <span className="text-white/60">/ {pad(TOTAL_SOLUTIONS)}</span>
//               <button
//                 type="button"
//                 onClick={() => step(-1)}
//                 aria-label="Previous solution"
//                 className="text-white transition-colors hover:text-[#7ED957]"
//               >
//                 <ArrowLeft size={17} />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => step(1)}
//                 aria-label="Next solution"
//                 className="text-white transition-colors hover:text-[#7ED957]"
//               >
//                 <ArrowRight size={17} />
//               </button>
//             </div>

//             {/* Caption */}
//             <div
//               key={`caption-${active}`}
//               className="absolute bottom-0 left-0 right-0 z-10 animate-[terraContentIn_700ms_ease_both] p-6 pr-24 sm:p-10 sm:pr-28"
//             >
//               <span className="inline-block rounded-md bg-[#7ED957] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#06200d]">
//                 Terra Ecopreneur's
//               </span>

//               <h2 className="mb-2 mt-3 font-display text-3xl font-normal tracking-[-0.03em] text-white sm:text-5xl">
//                 {solution.title}
//               </h2>

//               <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/90 sm:text-sm">
//                 <span className="hidden h-px w-8 bg-white/60 sm:block" />
//                 Engineering a better future
//               </p>

//               {videoFailed && (
//                 <span className="sr-only">Video unavailable, showing poster image</span>
//               )}
//             </div>

//             {/* Play / pause the slideshow */}
//             <button
//               type="button"
//               onClick={() => setIsPlaying((v) => !v)}
//               aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//               className="absolute bottom-6 right-6 z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-white/85 bg-white/10 text-white shadow-[0_0_30px_rgba(126,217,87,0.5)] backdrop-blur-md transition-all hover:bg-[#7ED957] hover:text-[#06200d] sm:bottom-10 sm:right-10 sm:h-[66px] sm:w-[66px]"
//             >
//               {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
//             </button>
//           </div>

//           {/* Mobile / tablet selector */}
//           <div className="mt-8 xl:hidden">
//             <div className="flex gap-3 overflow-x-auto pb-3">
//               {SOLUTIONS.map((item, index) => {
//                 const isActive = active === index;

//                 return (
//                   <button
//                     key={item.title}
//                     type="button"
//                     onClick={() => goTo(index)}
//                     className={`flex shrink-0 items-center gap-3 rounded-full border py-2 pl-2 pr-5 transition-all duration-300 ${
//                       isActive
//                         ? "border-[#7ED957] bg-[#7ED957]/10"
//                         : "border-white/15 bg-white/[0.03]"
//                     }`}
//                   >
//                     <img
//                       src={item.image}
//                       alt=""
//                       className={`h-10 w-10 rounded-full object-cover ${
//                         isActive ? "ring-2 ring-[#7ED957]" : ""
//                       }`}
//                     />
//                     <span
//                       className={`text-xs font-medium ${
//                         isActive ? "text-[#B5F27E]" : "text-white/65"
//                       }`}
//                     >
//                       {item.title}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================================================= */}
//       {/* ANIMATIONS */}
//       {/* ================================================= */}

//       <style>{`
//         @keyframes terraContentIn {
//           from { opacity: 0; transform: translateY(22px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes terraSway {
//           from { translate: 0 0; }
//           to { translate: 6px 8px; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default TerraOrbitalSolutionsHero;




import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Play,
  Pause,
  Leaf,
  Zap,
  Globe,
} from "lucide-react";

type Solution = {
  title: string;
  category: string;
  headline: string;
  accent: string;
  description: string;
  image: string;
  video: string;
  link: string;
};

const TOTAL_SOLUTIONS = 8;
const INITIAL_INDEX = 1; // starts on "02 / 08 Clean Energy" like the design
const DWELL_MS = 6000;

const SOLUTIONS: Solution[] = [
  {
    title: "Energy Efficiency & Audit",
    category: "ENERGY OPTIMIZATION",
    headline: "Smarter Energy.",
    accent: "Greater Efficiency.",
    description:
      "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
    video: "https://www.pexels.com/download/video/28652435/",
    image:
      "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
    link: "/solutions/energy-efficiency",
  },
  {
    title: "Clean Energy",
    category: "RENEWABLE ENERGY",
    headline: "Powering a",
    accent: "Cleaner Tomorrow.",
    description:
      "Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.",
    video: "https://www.pexels.com/download/video/10312637/",
    image:
      "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    link: "/solutions/clean-energy",
  },
  {
    title: "IBMS",
    category: "INTELLIGENT BUILDING MANAGEMENT",
    headline: "Buildings That",
    accent: "Think Smarter.",
    description:
      "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
    video: "https://www.pexels.com/download/video/8566709/",
    image:
      "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
    link: "/solutions/ibms",
  },
  {
    title: "Digital Solutions",
    category: "DIGITAL TRANSFORMATION",
    headline: "Transforming Ideas.",
    accent: "Into Intelligence.",
    description:
      "Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.",
    video: "https://www.pexels.com/download/video/35977437/",
    image:
      "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    link: "/solutions/digital",
  },
  {
    title: "Industrial Automation",
    category: "INDUSTRIAL INNOVATION",
    headline: "Automate Today.",
    accent: "Advance Tomorrow.",
    description:
      "Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.",
    video: "https://www.pexels.com/download/video/32386532/",
    image:
      "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
    link: "/solutions/industrial-automation",
  },
  {
    title: "Pre-fab Structures",
    category: "SUSTAINABLE CONSTRUCTION",
    headline: "Build Faster.",
    accent: "Build Smarter.",
    description:
      "Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.",
    video: "https://www.pexels.com/download/video/29923183/",
    image:
      "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
    link: "/solutions/prefab",
  },
  {
    title: "Press Components",
    category: "PRECISION ENGINEERING",
    headline: "Precision in",
    accent: "Every Detail.",
    description:
      "Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.",
    video: "https://www.pexels.com/download/video/31802320/",
    image:
      "https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f3~mv2.png/v1/fill/w_362,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    link: "/solutions/press-components",
  },
  {
    title: "Sustainable Management",
    category: "SUSTAINABLE DEVELOPMENT",
    headline: "Growing Responsibly.",
    accent: "Creating Impact.",
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

// ------------------------------------------------------
// Helpers
// ------------------------------------------------------

const wrap = (value: number, max: number) => ((value % max) + max) % max;
const pad = (n: number) => String(n).padStart(2, "0");
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// Orbit arc as a cubic bezier in a 100 x 100 box (bulges to the right).
const orbitPoint = (t: number) => {
  const u = 1 - t;
  return {
    x: u * u * u * 50 + 3 * u * u * t * 88 + 3 * u * t * t * 88 + t * t * t * 50,
    y: u * u * u * 96 + 3 * u * u * t * 78 + 3 * u * t * t * 22 + t * t * t * 4,
  };
};

// ------------------------------------------------------
// Small pieces
// ------------------------------------------------------

function LeafShape({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true">
      <path
        d="M10 190C10 90 70 20 190 8c0 100-50 175-180 182z"
        fill="url(#terraLeafFill)"
      />
      <path d="M12 188L150 50" stroke="#04210f" strokeOpacity="0.55" strokeWidth="3" />
    </svg>
  );
}

// ------------------------------------------------------
// Main component
// ------------------------------------------------------

export function TerraOrbitalSolutionsHero() {
  const [active, setActive] = useState(INITIAL_INDEX);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const [bgReady, setBgReady] = useState(false);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const posRef = useRef(INITIAL_INDEX);
  const targetRef = useRef(INITIAL_INDEX);
  const accRef = useRef(0);
  const playingRef = useRef(true);
  const hoverRef = useRef(false);
  const dragStartY = useRef<number | null>(null);

  const solution = SOLUTIONS[active];

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  // ----------------------------------------------------
  // Navigation
  // ----------------------------------------------------

  const goTo = useCallback((index: number) => {
    let diff = wrap(index - targetRef.current, TOTAL_SOLUTIONS);
    if (diff > TOTAL_SOLUTIONS / 2) diff -= TOTAL_SOLUTIONS;
    targetRef.current = Math.round(targetRef.current) + Math.round(diff);
    accRef.current = 0;
  }, []);

  const step = useCallback((dir: number) => {
    targetRef.current = Math.round(targetRef.current) + dir;
    accRef.current = 0;
  }, []);

  // ----------------------------------------------------
  // Orbit animation (direct DOM writes, no per-frame re-render)
  // ----------------------------------------------------

  const paintOrbit = useCallback(() => {
    nodeRefs.current.forEach((el, i) => {
      if (!el) return;
      const d = wrap(i - posRef.current + TOTAL_SOLUTIONS / 2, TOTAL_SOLUTIONS) - TOTAL_SOLUTIONS / 2;
      const p = clamp01(0.5 - d / 6);
      const { x, y } = orbitPoint(p);
      const scale = 0.5 + 0.5 * Math.pow(Math.sin(Math.PI * p), 6);
      const a = Math.abs(d);
      const opacity = a > 2.6 ? 0 : a > 1.8 ? (2.6 - a) / 0.8 : 1;

      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(Math.round(10 + scale * 30));
      el.style.pointerEvents = opacity < 0.3 ? "none" : "auto";
    });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;

      if (playingRef.current && !hoverRef.current && !reduceMotion) {
        accRef.current += dt;
        if (accRef.current >= DWELL_MS) {
          targetRef.current = Math.round(targetRef.current) + 1;
          accRef.current = 0;
        }
      }

      posRef.current += (targetRef.current - posRef.current) * Math.min(1, dt * 0.006);
      paintOrbit();

      const idx = wrap(Math.round(targetRef.current), TOTAL_SOLUTIONS);
      setActive((prev) => (prev === idx ? prev : idx));

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paintOrbit]);

  // ----------------------------------------------------
  // Change active video
  // ----------------------------------------------------

  useEffect(() => {
    setVideoReady(false);
    setVideoFailed(false);

    setBgReady(false);

    const video = videoRef.current;
    const bg = bgVideoRef.current;

    [video, bg].forEach((v) => {
      if (!v) return;
      v.muted = true;
      v.play().catch(() => {
        // Autoplay restrictions are handled gracefully.
      });
    });

    return () => {
      video?.pause();
      bg?.pause();
    };
  }, [active]);

  // ----------------------------------------------------
  // Decorative wave lines
  // ----------------------------------------------------

  const wavePaths = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      let d = "";
      for (let x = 0; x <= 1600; x += 40) {
        const y =
          200 + i * 1.6 -
          Math.sin(x / 260 + i * 0.07) * (62 - i * 1.1) -
          Math.sin(x / 90 + i * 0.15) * 5;
        d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)} `;
      }
      return {
        d,
        opacity: 0.55 - i * 0.017,
        width: i % 6 === 0 ? 1.3 : 0.6,
        light: 45 + i,
      };
    });
  }, []);

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#021710] text-white selection:bg-[#7ED957]/30">

      {/* Shared gradient for leaf shapes */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="terraLeafFill" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#0f5a22" />
            <stop offset="0.6" stopColor="#2f9a3a" />
            <stop offset="1" stopColor="#7ED957" />
          </linearGradient>
        </defs>
      </svg>

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 -z-40 bg-gradient-to-b from-[#031c13] to-[#021008]" />

      {/* Full-section background video (follows the highlighted solution) */}
      <video
        key={`bg-${solution.video}`}
        ref={bgVideoRef}
        src={solution.video}
        poster={solution.image}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setBgReady(true)}
        className={`pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-1000 ${
          bgReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Poster shown until the video is ready or if it fails */}
      <img
        key={`bg-poster-${active}`}
        src={solution.image}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-[31] h-full w-full object-cover transition-opacity duration-700 ${
          bgReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark green overlays keep text readable over any video */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#021710]/70" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_45%,rgba(17,84,46,0.55),transparent_55%),radial-gradient(ellipse_at_92%_40%,rgba(14,80,44,0.35),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#021710]/85 via-[#021710]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-1/3 bg-gradient-to-t from-[#021008] to-transparent" />

      {/* Wave lines */}
      <svg
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[34%] w-full"
        aria-hidden="true"
      >
        {wavePaths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            fill="none"
            stroke={`hsl(105 70% ${p.light}%)`}
            strokeOpacity={p.opacity}
            strokeWidth={p.width}
          />
        ))}
      </svg>

      {/* Blurred foreground leaves */}
      <LeafShape
        className="pointer-events-none absolute -left-16 -top-14 z-[5] w-[260px] -rotate-[25deg] animate-[terraSway_9s_ease-in-out_infinite_alternate] opacity-90 blur-[3px] sm:w-[300px]"
      />
      <LeafShape
        className="pointer-events-none absolute -bottom-24 -left-32 z-[5] hidden w-[300px] rotate-[35deg] animate-[terraSway_11s_ease-in-out_infinite_alternate] opacity-95 blur-[6px] sm:block"
      />
      <LeafShape
        className="pointer-events-none absolute -bottom-20 -right-20 z-[5] hidden w-[340px] -rotate-[130deg] animate-[terraSway_10s_ease-in-out_infinite_alternate] blur-[4px] md:block"
      />

      {/* ================================================= */}
      {/* MAIN LAYOUT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1800px] flex-1 items-center gap-10 px-6 pb-20 pt-16 sm:px-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,43%)] xl:gap-0 xl:px-[84px] xl:pb-24 xl:pt-20">

        {/* ============================================= */}
        {/* LEFT: ACTIVE SOLUTION CONTENT */}
        {/* ============================================= */}

        <div className="relative z-20 min-w-0">
          <div
            key={`content-${active}`}
            className="animate-[terraContentIn_850ms_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            {/* Category badge */}
            <div className="inline-flex items-center gap-4 rounded-full border border-[#7ED957]/35 bg-[#04240f]/65 py-1.5 pl-1.5 pr-7 sm:pr-9">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-[#7ED957]/50 bg-gradient-to-br from-[#1c6b2d] to-[#0a3a1a] sm:h-11 sm:w-11">
                <Leaf size={20} className="text-[#7ED957]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7ED957] sm:text-[13px]">
                {solution.category}
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 font-display text-[clamp(3rem,5.9vw,6.3rem)] font-normal leading-[1.02] tracking-[-0.045em] [text-shadow:0_6px_30px_rgba(0,0,0,0.45)] sm:mt-9">
              <span className="block text-white">{solution.headline}</span>
              <span className="block bg-gradient-to-r from-[#6fd84a] to-[#a7ee66] bg-clip-text pr-1 italic text-transparent">
                {solution.accent}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[540px] border-l-[3px] border-[#7ED957] pl-6 text-base leading-relaxed text-white/80 sm:mt-9 sm:pl-7 sm:text-xl sm:leading-[1.6]">
              {solution.description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-8 sm:mt-11 sm:gap-10">
              <Link
                to={solution.link}
                className="group inline-flex items-center gap-8 rounded-full bg-gradient-to-r from-[#8ee65c] to-[#b9f57c] py-2 pl-8 pr-2 text-base font-semibold text-[#06200d] shadow-[0_12px_40px_rgba(126,217,87,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(126,217,87,0.45)] sm:gap-9 sm:text-lg"
              >
                Explore solution
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#06200d] text-white transition-transform duration-300 group-hover:translate-x-1 sm:h-[52px] sm:w-[52px]">
                  <ArrowRight size={21} />
                </span>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border-b-[1.5px] border-[#7ED957] pb-1.5 text-base font-semibold transition-all hover:gap-4 hover:text-[#B5F27E] sm:text-[17px]"
              >
                Let's talk
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Feature row */}
            <ul className="mt-12 flex flex-wrap items-center gap-y-5 sm:mt-14">
              {FEATURES.map(({ icon: Icon, lines }, i) => (
                <li
                  key={lines.join("-")}
                  className={`flex items-center gap-3.5 text-base leading-snug text-white/90 ${
                    i === 0 ? "pr-6 sm:pr-7" : "border-l border-white/20 px-6 sm:px-7"
                  }`}
                >
                  <Icon
                    size={36}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#7ED957] drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]"
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
        </div>

        {/* ============================================= */}
        {/* RIGHT: ORBIT (overlapping the card) + VIDEO CARD */}
        {/* ============================================= */}

        <div className="relative z-10 min-w-0">

          {/* Orbit — sits over the card's left edge */}
          <div
            className="absolute -left-[195px] top-[8%] z-30 hidden h-[86%] w-[200px] cursor-grab touch-none active:cursor-grabbing xl:block"
            onPointerDown={(e) => {
              dragStartY.current = e.clientY;
            }}
            onPointerUp={(e) => {
              if (dragStartY.current === null) return;
              const delta = e.clientY - dragStartY.current;
              dragStartY.current = null;
              if (Math.abs(delta) > 40) step(delta < 0 ? 1 : -1);
            }}
            onPointerLeave={() => {
              dragStartY.current = null;
            }}
          >
            {/* Orbit path */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="terraOrbitGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#7ED957" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#B5F27E" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7ED957" stopOpacity="0.1" />
                </linearGradient>
                <filter id="terraOrbitGlow">
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
              </defs>

              <path
                d="M 50 96 C 88 78, 88 22, 50 4"
                fill="none"
                stroke="#7ED957"
                strokeWidth="8"
                opacity="0.18"
                filter="url(#terraOrbitGlow)"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 50 96 C 88 78, 88 22, 50 4"
                fill="none"
                stroke="url(#terraOrbitGradient)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 30 90 C 70 75, 70 25, 30 10"
                fill="none"
                stroke="#B5F27E"
                strokeWidth="0.8"
                opacity="0.25"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* End markers */}
            <span className="absolute left-[55%] top-[4%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957] shadow-[0_0_14px_#7ED957]" />
            <span className="absolute left-1/2 top-[96%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957] shadow-[0_0_14px_#7ED957]" />

            {/* Solution thumbnails */}
            {SOLUTIONS.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.title}
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Select ${item.title}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group absolute aspect-square w-[150px] rounded-full opacity-0 outline-none will-change-transform focus-visible:ring-2 focus-visible:ring-[#B5F27E] ${
                    isActive
                      ? "border-[3px] border-[#c9ffa6] shadow-[0_0_0_7px_rgba(126,217,87,0.14),0_0_50px_rgba(126,217,87,0.8)]"
                      : "border-2 border-white/55 shadow-[0_8px_28px_rgba(0,0,0,0.45)] hover:border-[#B5F27E]"
                  }`}
                  style={{ left: "50%", top: "96%" }}
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full bg-[#09291B]">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className={`h-full w-full object-cover transition-all duration-500 ${
                        isActive ? "scale-110 brightness-110" : "brightness-90 group-hover:brightness-110"
                      }`}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#041B14]/40 via-transparent to-transparent" />
                  </span>

                  {isActive && (
                    <>
                      {/* Tilted orbit ring */}
                      <svg
                        viewBox="0 0 100 100"
                        className="pointer-events-none absolute -left-[22%] -top-[22%] h-[144%] w-[144%] -rotate-[24deg] overflow-visible"
                        aria-hidden="true"
                      >
                        <ellipse
                          cx="50"
                          cy="50"
                          rx="50"
                          ry="26"
                          fill="none"
                          stroke="#B5F27E"
                          strokeWidth="0.7"
                          opacity="0.9"
                        />
                        <circle cx="96" cy="56" r="1.6" fill="#c9ffa6" />
                      </svg>

                      {/* Leaf badge */}
                      <span className="pointer-events-none absolute -bottom-[2%] -right-[6%] grid h-[42%] w-[42%] place-items-center">
                        <LeafShape className="h-full w-full drop-shadow-[0_0_8px_rgba(126,217,87,0.9)]" />
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Video card */}
          <div
            className="group relative h-[clamp(420px,70svh,740px)] overflow-hidden rounded-[32px] border-[1.5px] border-[#a0ff8c]/45 bg-[#09271B] shadow-[0_0_0_1px_rgba(126,217,87,0.15),0_0_60px_rgba(126,217,87,0.28),0_40px_100px_rgba(0,0,0,0.5)] sm:rounded-[44px]"
            onMouseEnter={() => {
              hoverRef.current = true;
            }}
            onMouseLeave={() => {
              hoverRef.current = false;
            }}
          >
            {/* Poster / fallback */}
            <img
              key={`poster-${active}`}
              src={solution.image}
              alt={solution.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                videoReady && !videoFailed ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video */}
            <video
              key={solution.video}
              ref={videoRef}
              src={solution.video}
              poster={solution.image}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              onError={() => setVideoFailed(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                videoReady && !videoFailed ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02162a]/85 via-[#02162a]/0 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            {/* Counter */}
            <div className="absolute right-5 top-5 z-10 flex items-center gap-3 rounded-full border border-white/15 bg-[#03160f]/80 px-4 py-2.5 text-sm backdrop-blur-md sm:right-8 sm:top-8 sm:gap-3.5 sm:px-5 sm:text-[17px]">
              <span className="font-bold">{pad(active + 1)}</span>
              <span className="text-white/60">/ {pad(TOTAL_SOLUTIONS)}</span>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous solution"
                className="text-white transition-colors hover:text-[#7ED957]"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next solution"
                className="text-white transition-colors hover:text-[#7ED957]"
              >
                <ArrowRight size={17} />
              </button>
            </div>

            {/* Caption */}
            <div
              key={`caption-${active}`}
              className="absolute bottom-0 left-0 right-0 z-10 animate-[terraContentIn_700ms_ease_both] p-6 pr-24 sm:p-10 sm:pr-28"
            >
              <span className="inline-block rounded-md bg-[#7ED957] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#06200d]">
                Terra Ecopreneur's
              </span>

              <h2 className="mb-2 mt-3 font-display text-3xl font-normal tracking-[-0.03em] text-white sm:text-5xl">
                {solution.title}
              </h2>

              <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/90 sm:text-sm">
                <span className="hidden h-px w-8 bg-white/60 sm:block" />
                Engineering a better future
              </p>

              {videoFailed && (
                <span className="sr-only">Video unavailable, showing poster image</span>
              )}
            </div>

            {/* Play / pause the slideshow */}
            <button
              type="button"
              onClick={() => setIsPlaying((v) => !v)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="absolute bottom-6 right-6 z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-white/85 bg-white/10 text-white shadow-[0_0_30px_rgba(126,217,87,0.5)] backdrop-blur-md transition-all hover:bg-[#7ED957] hover:text-[#06200d] sm:bottom-10 sm:right-10 sm:h-[66px] sm:w-[66px]"
            >
              {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
            </button>
          </div>

          {/* Mobile / tablet selector */}
          <div className="mt-8 xl:hidden">
            <div className="flex gap-3 overflow-x-auto pb-3">
              {SOLUTIONS.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`flex shrink-0 items-center gap-3 rounded-full border py-2 pl-2 pr-5 transition-all duration-300 ${
                      isActive
                        ? "border-[#7ED957] bg-[#7ED957]/10"
                        : "border-white/15 bg-white/[0.03]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className={`h-10 w-10 rounded-full object-cover ${
                        isActive ? "ring-2 ring-[#7ED957]" : ""
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${
                        isActive ? "text-[#B5F27E]" : "text-white/65"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ANIMATIONS */}
      {/* ================================================= */}

      <style>{`
        @keyframes terraContentIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes terraSway {
          from { translate: 0 0; }
          to { translate: 6px 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default TerraOrbitalSolutionsHero;