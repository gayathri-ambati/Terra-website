
// import React, { useEffect, useState } from "react";
// import {
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import "./TerraOrbitalHero.css";

// interface Solution {
//   title: string;
//   category: string;
//   headline: string;
//   accent: string;
//   description: string;
//   video: string;
//   image: string;
//   link: string;
// }

// // ========================================
// // TERRA ECOPRENEURS - 8 SOLUTIONS
// // ========================================


// const solutions: Solution[] = [
//   {
//     title: "Energy Efficiency & Audit",
//     category: "ENERGY OPTIMIZATION",
//     headline: "Smarter Energy.",
//     accent: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
//     video: "/videos/energy-audit.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
//     link: "/solutions/energy-efficiency",
//   },
//   {
//     title: "Clean Energy",
//     category: "RENEWABLE ENERGY",
//     headline: "Powering a",
//     accent: "Cleaner Tomorrow.",
//     description:
//       "Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.",
//     video: "/videos/solar.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/clean-energy",
//   },
//   {
//     title: "IBMS",
//     category: "INTELLIGENT BUILDING MANAGEMENT",
//     headline: "Buildings That",
//     accent: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
//     video: "/videos/smart-building.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
//     link: "/solutions/ibms",
//   },
//   {
//     title: "Digital Solutions",
//     category: "DIGITAL TRANSFORMATION",
//     headline: "Transforming Ideas.",
//     accent: "Into Intelligence.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.",
//     video: "/videos/digital-data.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/digital",
//   },
//   {
//     title: "Industrial Automation",
//     category: "INDUSTRIAL INNOVATION",
//     headline: "Automate Today.",
//     accent: "Advance Tomorrow.",
//     description:
//       "Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.",
//     video: "/videos/robotics.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/industrial-automation",
//   },
//   {
//     title: "Pre-fab Structures",
//     category: "SUSTAINABLE CONSTRUCTION",
//     headline: "Build Faster.",
//     accent: "Build Smarter.",
//     description:
//       "Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.",
//     video: "/videos/prefab.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
//     link: "/solutions/prefab",
//   },
//   {
//     title: "Press Components",
//     category: "PRECISION ENGINEERING",
//     headline: "Precision in",
//     accent: "Every Detail.",
//     description:
//       "Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.",
//     video: "/videos/press-parts.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f~mv2.png/v1/fill/w_362,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/press-components",
//   },
//   {
//     title: "Sustainable Management",
//     category: "SUSTAINABLE DEVELOPMENT",
//     headline: "Growing Responsibly.",
//     accent: "Creating Impact.",
//     description:
//       "Drive long-term growth and environmental responsibility through strategic sustainability frameworks built for the modern enterprise.",
//     video: "/videos/intro.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_362,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/sustainable-management",
//   },
// ];


// // ========================================
// // HELPERS
// // ========================================

// const TOTAL_SOLUTIONS = solutions.length;

// const wrap = (index: number): number =>
//   ((index % TOTAL_SOLUTIONS) + TOTAL_SOLUTIONS) % TOTAL_SOLUTIONS;

// // ========================================
// // HERO COMPONENT
// // ========================================

// export default function TerraOrbitalHero() {
//   const [active, setActive] = useState<number>(0);
//   const [paused, setPaused] = useState<boolean>(false);

//   const current = solutions[active];

//   // AUTOMATIC CIRCULATION

//   useEffect(() => {
//     if (paused) return;

//     const timer = window.setInterval(() => {
//       setActive((previous) => wrap(previous + 1));
//     }, 4500);

//     return () => window.clearInterval(timer);
//   }, [paused]);

//   // NAVIGATION

//   const goTo = (index: number) => {
//     setActive(wrap(index));
//   };

//   const goNext = () => {
//     setActive((previous) => wrap(previous + 1));
//   };

//   const goPrevious = () => {
//     setActive((previous) => wrap(previous - 1));
//   };

//   // SEMICIRCLE POSITIONS

//   const getPosition = (index: number) => {
//     let relative = (index - active + TOTAL_SOLUTIONS) % TOTAL_SOLUTIONS;

//     if (relative > TOTAL_SOLUTIONS / 2) {
//       relative -= TOTAL_SOLUTIONS;
//     }

//     const angle = relative * 22.5;
//     const radius = 155;
//     const radians = (angle * Math.PI) / 180;

//     return {
//       x: radius * (1 - Math.cos(radians)),
//       y: radius * Math.sin(radians),
//       active: index === active,
//     };
//   };

//   // ========================================
//   // RENDER
//   // ========================================

//   return (
//     <section className="terra-circular-hero">

//       {/* BACKGROUND VIDEO */}

//       <div className="terra-video-background">

//         <video
//           key={current.video}
//           className="terra-main-video"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           poster={current.image}
//           src={current.video}
//         />

//         <div className="terra-video-overlay" />

//       </div>

//       {/* LEFT CONTENT */}

//       <div className="terra-hero-content">

//         <div className="terra-content-inner">

//           <div className="terra-content-category">
//             <span className="terra-category-dot" />
//             {current.category}
//           </div>

//           <div className="terra-slide-number">
//             {String(active + 1).padStart(2, "0")}
//             <span> / 08</span>
//           </div>

//           <div
//             className="terra-content-animation"
//             key={`content-${active}`}
//           >

//             <h1>
//               {current.headline}
//               <span>{current.accent}</span>
//             </h1>

//             <div className="terra-description-wrap">

//               <div className="terra-description-rule" />

//               <p>{current.description}</p>

//             </div>

//             <div className="terra-content-actions">

//               <a
//                 href={current.link}
//                 className="terra-explore-button"
//               >
//                 Explore solution

//                 <span>
//                   <ArrowUpRight size={19} />
//                 </span>
//               </a>

//               <a
//                 href="/contact"
//                 className="terra-text-button"
//               >
//                 Let's talk
//               </a>

//             </div>

//           </div>

//           <div className="terra-content-bottom">
//             <span>ENGINEERING A SUSTAINABLE FUTURE</span>
//             <div />
//             <span>INNOVATION THROUGH PURPOSE</span>
//           </div>

//         </div>

//       </div>

//       {/* RIGHT SEMICIRCULAR NAVIGATION */}

//       <div className="terra-arc-navigation">

//         {/* SEMICIRCLE TRACK */}

//         <svg
//           className="terra-arc-track"
//           viewBox="0 0 320 420"
//           fill="none"
//           aria-hidden="true"
//         >

//           <path
//             d="M 300 25 A 195 195 0 0 0 300 395"
//             stroke="rgba(139,217,107,0.32)"
//             strokeWidth="1"
//           />

//           <path
//             d="M 300 25 A 195 195 0 0 0 300 395"
//             stroke="rgba(139,217,107,0.12)"
//             strokeWidth="12"
//             strokeLinecap="round"
//           />

//         </svg>

//         {/* ACTIVE CIRCULAR RINGS */}

//         <div className="terra-active-orbit">

//           <div className="terra-orbit-ring ring-one" />

//           <div className="terra-orbit-ring ring-two" />

//           <div className="terra-orbit-ring ring-three" />

//         </div>

//         {/* EIGHT SOLUTION IMAGES */}

//         <div className="terra-arc-items">

//           {solutions.map((solution, index) => {

//             const position = getPosition(index);

//             return (
//               <button
//                 key={solution.title}
//                 type="button"
//                 className={`terra-arc-item ${
//                   position.active ? "is-active" : ""
//                 }`}
//                 style={
//                   {
//                     "--x": `${position.x}px`,
//                     "--y": `${position.y}px`,
//                   } as React.CSSProperties
//                 }
//                 onClick={() => {
//                   setPaused(true);
//                   goTo(index);
//                 }}
//                 aria-label={`Select ${solution.title}`}
//                 aria-pressed={position.active}
//               >

//                 <span className="terra-arc-image">

//                   <img
//                     src={solution.image}
//                     alt={solution.title}
//                     draggable={false}
//                   />

//                 </span>

//                 <span className="terra-arc-index">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <span className="terra-arc-tooltip">
//                   {solution.title}
//                 </span>

//               </button>
//             );

//           })}

//         </div>

//         {/* ACTIVE SOLUTION LABEL */}

//         <div
//           className="terra-arc-active-info"
//           key={`info-${active}`}
//         >

//           <span>NOW EXPLORING</span>

//           <strong>{current.title}</strong>

//         </div>

//       </div>

//       {/* BOTTOM CONTROLS */}

//       <footer className="terra-circular-footer">

//         {/* PROGRESS INDICATORS */}

//         <div className="terra-footer-progress">

//           {solutions.map((solution, index) => (

//             <button
//               key={solution.title}
//               type="button"
//               className={active === index ? "active" : ""}
//               onClick={() => {
//                 setPaused(true);
//                 goTo(index);
//               }}
//               aria-label={`Go to ${solution.title}`}
//               aria-current={active === index ? "true" : undefined}
//             >

//               <span />

//             </button>

//           ))}

//         </div>

//         {/* PREVIOUS / PLAY / NEXT */}

//         <div className="terra-footer-controls">

//           <button
//             type="button"
//             onClick={goPrevious}
//             aria-label="Previous solution"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             type="button"
//             onClick={() => setPaused((value) => !value)}
//             className="terra-pause-control"
//             aria-label={paused ? "Resume circulation" : "Pause circulation"}
//           >
//             {paused ? "PLAY" : "PAUSE"}
//           </button>

//           <button
//             type="button"
//             onClick={goNext}
//             aria-label="Next solution"
//           >
//             <ChevronRight size={18} />
//           </button>

//         </div>

//       </footer>

//     </section>
//   );
// }




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
//   Leaf,
// } from "lucide-react";

// type Slide = {
//   category: string;
//   title: string;
//   highlight: string;
//   description: string;
//   caption: string;
//   tag: string;
//   image: string;
//   video: string;
// };

// const slides: Slide[] = [
//   {
//     category: "ENERGY OPTIMIZATION",
//     title: "Smarter Energy.",
//     highlight: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
//     caption: "Energy Efficiency & Audit",
//     tag: "Make every unit of energy count",
//     image:
//       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/energy-efficiency.mp4",
//   },
//   {
//     category: "RENEWABLE ENERGY",
//     title: "Powering Change.",
//     highlight: "Naturally Better.",
//     description:
//       "Transition to a greener, more resilient future with scalable renewable energy installations designed for lasting environmental and business impact.",
//     caption: "Clean Energy",
//     tag: "Powering a cleaner tomorrow",
//     image:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/clean-energy.mp4",
//   },
//   {
//     category: "SMART INFRASTRUCTURE",
//     title: "Buildings That",
//     highlight: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient integrated building management.",
//     caption: "IBMS",
//     tag: "Intelligence in every space",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/ibms.mp4",
//   },
//   {
//     category: "DIGITAL TRANSFORMATION",
//     title: "Connected Ideas.",
//     highlight: "Infinite Possibilities.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools, connected systems and data-driven architectures.",
//     caption: "Digital Solutions",
//     tag: "Turning technology into opportunity",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/digital-solutions.mp4",
//   },
//   {
//     category: "ADVANCED MANUFACTURING",
//     title: "Precision in",
//     highlight: "Every Movement.",
//     description:
//       "Streamline production lines and accelerate output with state-of-the-art robotic systems and intelligent industrial automation.",
//     caption: "Industrial Automation",
//     tag: "Engineering the future of production",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/industrial-automation.mp4",
//   },
//   {
//     category: "MODULAR CONSTRUCTION",
//     title: "Build Faster.",
//     highlight: "Build Smarter.",
//     description:
//       "Accelerate construction timelines with durable, high-quality and rapidly deployable prefabricated structures.",
//     caption: "Pre-fab Structures",
//     tag: "Beyond traditional construction",
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/prefab-structures.mp4",
//   },
//   {
//     category: "INDUSTRIAL ENGINEERING",
//     title: "Strength Meets",
//     highlight: "Precision.",
//     description:
//       "Secure precision and heavy-duty reliability with custom-engineered press components built for demanding manufacturing applications.",
//     caption: "Press Components",
//     tag: "Precision engineered for performance",
//     image:
//       "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/press-components.mp4",
//   },
//   {
//     category: "RESPONSIBLE GROWTH",
//     title: "Think Long-term.",
//     highlight: "Grow Responsibly.",
//     description:
//       "Drive long-term growth and environmental responsibility with strategic sustainability frameworks built for the modern enterprise.",
//     caption: "Sustainable Management",
//     tag: "Growth with a purpose",
//     image:
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/sustainable-management.mp4",
//   },
// ];

// const AUTOPLAY = 7500;

// export function TerraOrbitalHero() {
//   const [active, setActive] = useState(0);
//   const [playing, setPlaying] = useState(true);
//   const [videoReady, setVideoReady] = useState(false);
//   const [videoFailed, setVideoFailed] = useState(false);

//   const current = slides[active];

//   const next = () => {
//     setActive((prev) => (prev + 1) % slides.length);
//   };

//   const previous = () => {
//     setActive((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (!playing) return;

//     const timer = window.setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, AUTOPLAY);

//     return () => window.clearInterval(timer);
//   }, [playing]);

//   useEffect(() => {
//     setVideoReady(false);
//     setVideoFailed(false);
//   }, [active]);

//   const selectSlide = (index: number) => {
//     setActive(index);
//     setPlaying(true);
//   };

//   return (
//     <section className="relative isolate min-h-[780px] overflow-hidden bg-[#03150F] text-white lg:min-h-[850px]">

//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0 -z-30">
//         <img
//           key={current.image}
//           src={current.image}
//           alt=""
//           className="h-full w-full animate-[heroZoom_12s_ease-out_forwards] object-cover"
//         />
//       </div>

//       {/* BACKGROUND VIDEO */}
//       <div className="absolute inset-0 -z-20 overflow-hidden">
//         <video
//           key={current.video}
//           src={current.video}
//           autoPlay
//           muted
//           loop
//           playsInline
//           onCanPlay={() => setVideoReady(true)}
//           onError={() => setVideoFailed(true)}
//           className={`h-full w-full object-cover transition-opacity duration-1000 ${
//             videoReady && !videoFailed ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       </div>

//       {/* ATMOSPHERIC OVERLAYS */}
//       <div className="absolute inset-0 -z-10 bg-[#03150F]/75" />

//       <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,17,12,0.96)_0%,rgba(2,17,12,0.82)_38%,rgba(2,17,12,0.35)_75%,rgba(2,17,12,0.55)_100%)]" />

//       <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#03150F_0%,transparent_32%,rgba(3,21,15,0.15)_100%)]" />

//       {/* SOFT ATMOSPHERIC LIGHT */}
//       <div className="pointer-events-none absolute -right-40 top-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-[#79D957]/10 blur-[140px]" />

//       <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[400px] w-[500px] rounded-full bg-[#2E7C43]/15 blur-[120px]" />

//       {/* MAIN CONTENT */}
//       <div className="relative mx-auto flex min-h-[780px] max-w-[1700px] flex-col justify-center px-6 pb-32 pt-32 sm:px-10 lg:min-h-[850px] lg:px-16 xl:px-20">

//         <div className="grid w-full items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">

//           {/* LEFT CONTENT */}
//           <div className="relative z-10 max-w-[800px]">

//             <div
//               key={`category-${active}`}
//               className="mb-10 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
//             >
//               <span className="h-2.5 w-2.5 rounded-full bg-[#85DF63] shadow-[0_0_18px_#85DF63]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
//                 {current.category}
//               </span>
//             </div>

//             {/* NUMBER */}
//             <div
//               key={`number-${active}`}
//               className="mb-7 flex items-center gap-3 animate-[heroReveal_700ms_100ms_ease_both]"
//             >
//               <span className="text-xl font-semibold tracking-wider text-[#88DD64]">
//                 {String(active + 1).padStart(2, "0")}
//               </span>
//               <span className="text-xs tracking-[0.2em] text-white/40">
//                 / 08
//               </span>
//             </div>

//             {/* HEADLINE */}
//             <div
//               key={`heading-${active}`}
//               className="animate-[heroReveal_850ms_150ms_ease_both]"
//             >
//               <h1 className="font-display text-[clamp(3.4rem,7.5vw,7.6rem)] font-normal leading-[0.94] tracking-[-0.075em]">
//                 <span className="block">{current.title}</span>

//                 <span className="mt-2 block font-medium italic tracking-[-0.065em] text-[#85D960]">
//                   {current.highlight}
//                 </span>
//               </h1>
//             </div>

//             {/* DESCRIPTION */}
//             <div
//               key={`description-${active}`}
//               className="mt-10 flex max-w-[570px] animate-[heroReveal_800ms_300ms_ease_both] gap-5 border-l-2 border-[#85D960] py-1 pl-5"
//             >
//               <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//                 {current.description}
//               </p>
//             </div>

//             {/* CTA */}
//             <div className="mt-11 flex animate-[heroReveal_800ms_450ms_ease_both] flex-wrap items-center gap-7">
//               <Link
//                 to="/solutions"
//                 className="group inline-flex items-center gap-5 rounded-full bg-[#85D960] py-2 pl-7 pr-2 text-sm font-semibold text-[#07170D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5EF83] hover:shadow-[0_15px_40px_rgba(133,217,96,0.25)]"
//               >
//                 Explore solution

//                 <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07170D] text-white transition-transform duration-300 group-hover:rotate-45">
//                   <ArrowUpRight size={21} />
//                 </span>
//               </Link>

//               <Link
//                 to="/contact"
//                 className="group flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#85D960]"
//               >
//                 Let's talk
//                 <ArrowRight
//                   size={17}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

//           </div>

//           {/* RIGHT ORBITAL EXPERIENCE */}
//           <div className="relative mx-auto hidden aspect-square w-full max-w-[590px] items-center justify-center lg:flex">

//             {/* ORBIT RINGS */}
//             <div className="absolute h-[88%] w-[88%] rounded-full border border-[#85D960]/10" />
//             <div className="absolute h-[72%] w-[72%] rounded-full border border-[#85D960]/20" />
//             <div className="absolute h-[57%] w-[57%] rounded-full border border-[#85D960]/15" />

//             {/* ROTATING ORBIT */}
//             <div
//               className="absolute inset-0 animate-[orbitRotate_55s_linear_infinite]"
//             >
//               <div className="absolute inset-[5%] rounded-full border border-dashed border-[#85D960]/25" />

//               {slides.map((item, index) => {
//                 const angle =
//                   (index / slides.length) * Math.PI * 2 - Math.PI / 2;

//                 const x = 50 + Math.cos(angle) * 43;
//                 const y = 50 + Math.sin(angle) * 43;

//                 return (
//                   <button
//                     key={item.caption}
//                     onClick={() => selectSlide(index)}
//                     aria-label={`Explore ${item.caption}`}
//                     className="absolute z-20 grid h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#0A2017] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-125 hover:border-[#85D960]"
//                     style={{
//                       left: `${x}%`,
//                       top: `${y}%`,
//                       animation: "orbitCounter 55s linear infinite",
//                     }}
//                   >
//                     <img
//                       src={item.image}
//                       alt=""
//                       className="h-full w-full rounded-full object-cover"
//                     />

//                     {active === index && (
//                       <span className="absolute inset-[-7px] rounded-full border-2 border-[#85D960] shadow-[0_0_25px_rgba(133,217,96,0.5)]" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* ACTIVE VISUAL */}
//             <div className="relative z-10 h-[285px] w-[285px] overflow-hidden rounded-full border-[5px] border-white/80 bg-[#09251A] shadow-[0_0_0_14px_rgba(133,217,96,0.08),0_0_80px_rgba(133,217,96,0.22)] sm:h-[330px] sm:w-[330px]">

//               <img
//                 key={`visual-${active}`}
//                 src={current.image}
//                 alt={current.caption}
//                 className="absolute inset-0 h-full w-full animate-[heroZoom_10s_ease-out_forwards] object-cover"
//               />

//               <video
//                 key={`orbital-video-${active}`}
//                 src={current.video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#03150F]/80 via-transparent to-transparent" />

//               <div className="absolute inset-x-0 bottom-9 text-center">
//                 <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A6EF82]">
//                   0{active + 1} / 08
//                 </span>
//                 <p className="mt-2 px-3 text-sm font-semibold text-white">
//                   {current.caption}
//                 </p>
//               </div>

//             </div>

//             {/* FLOATING LABEL */}
//             <div
//               key={`orbital-label-${active}`}
//               className="absolute -left-2 top-[48%] z-20 max-w-[150px] -translate-x-full -translate-y-1/2 text-right animate-[heroReveal_700ms_ease_both]"
//             >
//               <span className="text-[10px] font-semibold leading-5 text-[#A1E981]">
//                 {current.caption}
//               </span>
//             </div>

//             {/* ORBIT DECORATION */}
//             <div className="pointer-events-none absolute right-[4%] top-[5%] h-2 w-2 rounded-full bg-[#85D960] shadow-[0_0_15px_#85D960]" />

//             <div className="absolute -bottom-3 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#061B13]/70 px-4 py-3 backdrop-blur-xl">
//               <Leaf size={14} className="text-[#85D960]" />
//               <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70">
//                 {current.tag}
//               </span>
//             </div>

//           </div>

//         </div>

//         {/* MOBILE SOLUTION SELECTOR */}
//         <div className="mt-12 flex gap-3 overflow-x-auto pb-3 lg:hidden">
//           {slides.map((item, index) => (
//             <button
//               key={item.caption}
//               onClick={() => selectSlide(index)}
//               className={`flex shrink-0 items-center gap-3 rounded-full border px-3 py-2 transition-all ${
//                 active === index
//                   ? "border-[#85D960] bg-[#85D960]/15"
//                   : "border-white/15 bg-white/5"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="h-9 w-9 rounded-full object-cover"
//               />
//               <span className="text-xs text-white">
//                 {item.caption}
//               </span>
//             </button>
//           ))}
//         </div>

//       </div>

//       {/* BOTTOM NAVIGATION */}
//       <div className="absolute inset-x-0 bottom-0 z-30 px-6 pb-6 sm:px-10 lg:px-16 xl:px-20">

//         <div className="mx-auto max-w-[1700px] border-t border-white/20 pt-5">

//           <div className="flex items-center justify-between gap-5">

//             {/* BRAND MESSAGE */}
//             <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40 md:flex">
//               <span>Engineering a sustainable future</span>
//               <span className="h-px w-9 bg-[#85D960]" />
//               <span>Innovation through purpose</span>
//             </div>

//             {/* PROGRESS */}
//             <div className="flex flex-1 items-center gap-2 sm:max-w-[390px]">
//               {slides.map((item, index) => (
//                 <button
//                   key={item.caption}
//                   onClick={() => selectSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className="group h-6 flex-1 py-2"
//                 >
//                   <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
//                     <span
//                       className={`block h-full rounded-full bg-[#85D960] transition-all duration-500 ${
//                         active === index ? "w-full shadow-[0_0_12px_#85D960]" : "w-0"
//                       }`}
//                     />
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* PLAY AND NAVIGATION */}
//             <div className="flex shrink-0 items-center gap-2">

//               <button
//                 onClick={previous}
//                 aria-label="Previous solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronLeft size={19} />
//               </button>

//               <button
//                 onClick={() => setPlaying(!playing)}
//                 className="flex h-10 items-center gap-2 rounded-full bg-[#85D960] px-5 text-[10px] font-bold uppercase tracking-wider text-[#07170D] transition-all hover:bg-[#A5EF83]"
//               >
//                 {playing ? <Pause size={13} /> : <Play size={13} />}
//                 {playing ? "Pause" : "Play"}
//               </button>

//               <button
//                 onClick={next}
//                 aria-label="Next solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes heroZoom {
//           from { transform: scale(1); }
//           to { transform: scale(1.12); }
//         }

//         @keyframes orbitRotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes orbitCounter {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(-360deg); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             scroll-behavior: auto !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default TerraOrbitalHero;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
//   Leaf,
// } from "lucide-react";

// type Slide = {
//   category: string;
//   title: string;
//   highlight: string;
//   description: string;
//   caption: string;
//   tag: string;
//   image: string;
//   video: string;
// };

// const slides: Slide[] = [
//   {
//     category: "ENERGY OPTIMIZATION",
//     title: "Smarter Energy.",
//     highlight: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
//     caption: "Energy Efficiency & Audit",
//     tag: "Make every unit of energy count",
//     image:
//       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/energy-efficiency.mp4",
//   },
//   {
//     category: "RENEWABLE ENERGY",
//     title: "Powering Change.",
//     highlight: "Naturally Better.",
//     description:
//       "Transition to a greener, more resilient future with scalable renewable energy installations designed for lasting environmental and business impact.",
//     caption: "Clean Energy",
//     tag: "Powering a cleaner tomorrow",
//     image:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/clean-energy.mp4",
//   },
//   {
//     category: "SMART INFRASTRUCTURE",
//     title: "Buildings That",
//     highlight: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient integrated building management.",
//     caption: "IBMS",
//     tag: "Intelligence in every space",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/ibms.mp4",
//   },
//   {
//     category: "DIGITAL TRANSFORMATION",
//     title: "Connected Ideas.",
//     highlight: "Infinite Possibilities.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools, connected systems and data-driven architectures.",
//     caption: "Digital Solutions",
//     tag: "Turning technology into opportunity",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/digital-solutions.mp4",
//   },
//   {
//     category: "ADVANCED MANUFACTURING",
//     title: "Precision in",
//     highlight: "Every Movement.",
//     description:
//       "Streamline production lines and accelerate output with state-of-the-art robotic systems and intelligent industrial automation.",
//     caption: "Industrial Automation",
//     tag: "Engineering the future of production",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/industrial-automation.mp4",
//   },
//   {
//     category: "MODULAR CONSTRUCTION",
//     title: "Build Faster.",
//     highlight: "Build Smarter.",
//     description:
//       "Accelerate construction timelines with durable, high-quality and rapidly deployable prefabricated structures.",
//     caption: "Pre-fab Structures",
//     tag: "Beyond traditional construction",
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/prefab-structures.mp4",
//   },
//   {
//     category: "INDUSTRIAL ENGINEERING",
//     title: "Strength Meets",
//     highlight: "Precision.",
//     description:
//       "Secure precision and heavy-duty reliability with custom-engineered press components built for demanding manufacturing applications.",
//     caption: "Press Components",
//     tag: "Precision engineered for performance",
//     image:
//       "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/press-components.mp4",
//   },
//   {
//     category: "RESPONSIBLE GROWTH",
//     title: "Think Long-term.",
//     highlight: "Grow Responsibly.",
//     description:
//       "Drive long-term growth and environmental responsibility with strategic sustainability frameworks built for the modern enterprise.",
//     caption: "Sustainable Management",
//     tag: "Growth with a purpose",
//     image:
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=85",
//     video: "/videos/sustainable-management.mp4",
//   },
// ];

// const AUTOPLAY = 7500;

// export function TerraOrbitalHero() {
//   const [active, setActive] = useState(0);
//   const [playing, setPlaying] = useState(true);

//   const current = slides[active];

//   const next = () => {
//     setActive((prev) => (prev + 1) % slides.length);
//   };

//   const previous = () => {
//     setActive((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const selectSlide = (index: number) => {
//     setActive(index);
//     setPlaying(true);
//   };

//   useEffect(() => {
//     if (!playing) return;

//     const timer = window.setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, AUTOPLAY);

//     return () => window.clearInterval(timer);
//   }, [playing]);

//   return (
//     <section className="relative isolate min-h-[780px] overflow-hidden bg-[#03150F] text-white lg:min-h-[850px]">

//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0 -z-30">
//         <img
//           key={current.image}
//           src={current.image}
//           alt=""
//           className="h-full w-full object-cover animate-[heroZoom_12s_ease-out_forwards]"
//         />
//       </div>

//       {/* FULL BACKGROUND VIDEO */}
//       <div className="absolute inset-0 -z-20">
//         <video
//           key={current.video}
//           src={current.video}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* DARK CINEMATIC OVERLAY */}
//       <div className="absolute inset-0 -z-10 bg-[#03150F]/70" />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03150F]/95 via-[#03150F]/75 to-[#03150F]/25" />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03150F] via-transparent to-[#03150F]/20" />

//       {/* AMBIENT LIGHT */}
//       <div className="pointer-events-none absolute -right-40 top-[15%] -z-10 h-[600px] w-[600px] rounded-full bg-[#85D960]/10 blur-[150px]" />

//       {/* MAIN CONTENT */}
//       <div className="relative mx-auto flex min-h-[780px] max-w-[1800px] flex-col justify-center px-6 pb-32 pt-32 sm:px-10 lg:min-h-[850px] lg:px-16 xl:px-20">

//         {/* LEFT CONTENT */}
//         <div className="relative z-10 w-full max-w-[900px] lg:max-w-[64%]">

//           {/* CATEGORY */}
//           <div
//             key={`category-${active}`}
//             className="mb-9 flex items-center gap-3 animate-[heroReveal_700ms_ease_both]"
//           >
//             <span className="h-2.5 w-2.5 rounded-full bg-[#85DF63] shadow-[0_0_18px_#85DF63]" />

//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
//               {current.category}
//             </span>
//           </div>

//           {/* SLIDE NUMBER */}
//           <div
//             key={`number-${active}`}
//             className="mb-7 flex items-center gap-3 animate-[heroReveal_700ms_100ms_ease_both]"
//           >
//             <span className="text-xl font-semibold tracking-wider text-[#88DD64]">
//               {String(active + 1).padStart(2, "0")}
//             </span>

//             <span className="text-xs tracking-[0.2em] text-white/40">
//               / 08
//             </span>
//           </div>

//           {/* HEADING */}
//           <div
//             key={`heading-${active}`}
//             className="animate-[heroReveal_850ms_150ms_ease_both]"
//           >
//             <h1 className="font-display text-[clamp(3.2rem,7.2vw,7.4rem)] font-normal leading-[0.96] tracking-[-0.075em]">
//               <span className="block">{current.title}</span>

//               <span className="mt-2 block font-medium italic tracking-[-0.065em] text-[#85D960]">
//                 {current.highlight}
//               </span>
//             </h1>
//           </div>

//           {/* DESCRIPTION */}
//           <div
//             key={`description-${active}`}
//             className="mt-9 flex max-w-[550px] animate-[heroReveal_800ms_300ms_ease_both] gap-5 border-l-2 border-[#85D960] py-1 pl-5"
//           >
//             <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//               {current.description}
//             </p>
//           </div>

//           {/* BUTTONS */}
//           <div className="mt-10 flex flex-wrap items-center gap-7 animate-[heroReveal_800ms_450ms_ease_both]">

//             <Link
//               to="/solutions"
//               className="group inline-flex items-center gap-5 rounded-full bg-[#85D960] py-2 pl-7 pr-2 text-sm font-semibold text-[#07170D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5EF83] hover:shadow-[0_15px_40px_rgba(133,217,96,0.25)]"
//             >
//               Explore solution

//               <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07170D] text-white transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight size={21} />
//               </span>
//             </Link>

//             <Link
//               to="/contact"
//               className="group flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#85D960]"
//             >
//               Let's talk
//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>

//           </div>

//         </div>

//         {/* MOBILE SOLUTION SELECTOR */}
//         <div className="mt-12 flex gap-3 overflow-x-auto pb-3 lg:hidden">
//           {slides.map((item, index) => (
//             <button
//               key={item.caption}
//               onClick={() => selectSlide(index)}
//               className={`flex shrink-0 items-center gap-3 rounded-full border px-3 py-2 transition-all ${
//                 active === index
//                   ? "border-[#85D960] bg-[#85D960]/15"
//                   : "border-white/15 bg-white/5"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="h-9 w-9 rounded-full object-cover"
//               />

//               <span className="text-xs text-white">
//                 {item.caption}
//               </span>
//             </button>
//           ))}
//         </div>

//       </div>

//       {/* ================================================== */}
//       {/* EXTREME RIGHT SEMI-CIRCULAR ORBITAL EXPERIENCE */}
//       {/* ================================================== */}

//       <div className="pointer-events-none absolute right-[-325px] top-1/2 z-10 hidden h-[850px] w-[850px] -translate-y-1/2 items-center justify-center overflow-visible lg:flex xl:right-[-325px]">

//         {/* OUTER GLOW */}
//         <div className="absolute inset-0 rounded-full border border-[#85D960]/10 shadow-[0_0_100px_rgba(133,217,96,0.08)]" />

//         {/* ORBIT RINGS */}
//         <div className="absolute inset-[7%] rounded-full border border-[#85D960]/20" />

//         <div className="absolute inset-[17%] rounded-full border border-[#85D960]/15" />

//         <div className="absolute inset-[28%] rounded-full border border-dashed border-[#85D960]/20" />

//         {/* CENTRAL VIDEO */}
//         <div className="relative z-10 h-[340px] w-[340px] shrink-0 overflow-hidden rounded-full border-[5px] border-white/80 bg-[#09251A] shadow-[0_0_0_16px_rgba(133,217,96,0.08),0_0_100px_rgba(133,217,96,0.20)]">

//           <img
//             key={`center-image-${active}`}
//             src={current.image}
//             alt={current.caption}
//             className="absolute inset-0 h-full w-full object-cover"
//           />

//           <video
//             key={`center-video-${active}`}
//             src={current.video}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 h-full w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#03150F]/90 via-transparent to-transparent" />

//           <div className="absolute inset-x-0 bottom-10 text-center">
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6EF82]">
//               0{active + 1} / 08
//             </span>

//             <p className="mt-2 px-5 text-base font-semibold text-white">
//               {current.caption}
//             </p>
//           </div>

//         </div>

//         {/* EIGHT THUMBNAILS ON THE VISIBLE SEMICIRCLE */}
//         {slides.map((item, index) => {

//           // Distribute all eight thumbnails across the LEFT HALF.
//           const angle = 120 + (index / 7) * 120;

//           const radians = (angle * Math.PI) / 180;

//           const radius = 44;

//           const x = 50 + Math.cos(radians) * radius;
//           const y = 50 + Math.sin(radians) * radius;

//           return (
//             <button
//               key={item.caption}
//               onClick={() => selectSlide(index)}
//               aria-label={`Explore ${item.caption}`}
//               className={`pointer-events-auto absolute z-30 h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-[#09251A] p-1 shadow-[0_8px_35px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-125 ${
//                 active === index
//                   ? "scale-110 border-[#85D960] shadow-[0_0_30px_rgba(133,217,96,0.45)]"
//                   : "border-white/60 hover:border-[#85D960]"
//               }`}
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.caption}
//                 className="h-full w-full rounded-full object-cover"
//               />

//               {active === index && (
//                 <span className="absolute inset-[-8px] rounded-full border border-[#85D960]/80" />
//               )}
//             </button>
//           );
//         })}

//         {/* CURRENT SOLUTION LABEL */}
//         <div className="absolute left-[5%] top-1/2 z-40 w-[165px] -translate-x-full -translate-y-1/2 text-right">
//           <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1E981]">
//             NOW EXPLORING
//           </span>

//           <p className="mt-2 text-sm font-semibold text-white">
//             {current.caption}
//           </p>
//         </div>

//         {/* GREEN ORBIT ACCENT */}
//         <div className="absolute left-[5%] top-[12%] h-2 w-2 rounded-full bg-[#85D960] shadow-[0_0_20px_#85D960]" />

//       </div>

//       {/* BOTTOM NAVIGATION */}
//       <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-6 sm:px-10 lg:px-16 xl:px-20">

//         <div className="mx-auto max-w-[1800px] border-t border-white/20 pt-5">

//           <div className="flex items-center justify-between gap-5">

//             {/* BRAND MESSAGE */}
//             <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40 md:flex">
//               <span>Engineering a sustainable future</span>
//               <span className="h-px w-9 bg-[#85D960]" />
//               <span>Innovation through purpose</span>
//             </div>

//             {/* EIGHT PROGRESS INDICATORS */}
//             <div className="flex flex-1 items-center gap-2 sm:max-w-[390px]">
//               {slides.map((item, index) => (
//                 <button
//                   key={item.caption}
//                   onClick={() => selectSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className="group h-6 flex-1 py-2"
//                 >
//                   <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
//                     <span
//                       className={`block h-full rounded-full bg-[#85D960] transition-all duration-500 ${
//                         active === index
//                           ? "w-full shadow-[0_0_12px_#85D960]"
//                           : "w-0"
//                       }`}
//                     />
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* CONTROLS */}
//             <div className="flex shrink-0 items-center gap-2">

//               <button
//                 onClick={previous}
//                 aria-label="Previous solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronLeft size={19} />
//               </button>

//               <button
//                 onClick={() => setPlaying(!playing)}
//                 className="flex h-10 items-center gap-2 rounded-full bg-[#85D960] px-5 text-[10px] font-bold uppercase tracking-wider text-[#07170D] transition-all hover:bg-[#A5EF83]"
//               >
//                 {playing ? <Pause size={13} /> : <Play size={13} />}
//                 {playing ? "Pause" : "Play"}
//               </button>

//               <button
//                 onClick={next}
//                 aria-label="Next solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes heroZoom {
//           from {
//             transform: scale(1);
//           }
//           to {
//             transform: scale(1.12);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             scroll-behavior: auto !important;
//           }
//         }
//       `}</style>

//     </section>
//   );
// }

// export default TerraOrbitalHero;




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
//   Leaf,
// } from "lucide-react";

// type Solution = {
//   title: string;
//   category: string;
//   headline: string;
//   accent: string;
//   description: string;
//   video: string;
//   image: string;
//   link: string;
// };

// const solutions: Solution[] = [
//   {
//     title: "Energy Efficiency & Audit",
//     category: "ENERGY OPTIMIZATION",
//     headline: "Smarter Energy.",
//     accent: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
//     video: "/videos/energy-audit.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
//     link: "/solutions/energy-efficiency",
//   },
//   {
//     title: "Clean Energy",
//     category: "RENEWABLE ENERGY",
//     headline: "Powering a",
//     accent: "Cleaner Tomorrow.",
//     description:
//       "Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.",
//     video: "/videos/solar.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/clean-energy",
//   },
//   {
//     title: "IBMS",
//     category: "INTELLIGENT BUILDING MANAGEMENT",
//     headline: "Buildings That",
//     accent: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
//     video: "/videos/smart-building.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
//     link: "/solutions/ibms",
//   },
//   {
//     title: "Digital Solutions",
//     category: "DIGITAL TRANSFORMATION",
//     headline: "Transforming Ideas.",
//     accent: "Into Intelligence.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.",
//     video: "/videos/digital-data.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/digital",
//   },
//   {
//     title: "Industrial Automation",
//     category: "INDUSTRIAL INNOVATION",
//     headline: "Automate Today.",
//     accent: "Advance Tomorrow.",
//     description:
//       "Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.",
//     video: "/videos/robotics.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/industrial-automation",
//   },
//   {
//     title: "Pre-fab Structures",
//     category: "SUSTAINABLE CONSTRUCTION",
//     headline: "Build Faster.",
//     accent: "Build Smarter.",
//     description:
//       "Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.",
//     video: "/videos/prefab.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
//     link: "/solutions/prefab",
//   },
//   {
//     title: "Press Components",
//     category: "PRECISION ENGINEERING",
//     headline: "Precision in",
//     accent: "Every Detail.",
//     description:
//       "Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.",
//     video: "/videos/press-parts.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f3~mv2.png/v1/fill/w_362,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/press-components",
//   },
//   {
//     title: "Sustainable Management",
//     category: "SUSTAINABLE DEVELOPMENT",
//     headline: "Growing Responsibly.",
//     accent: "Creating Impact.",
//     description:
//       "Drive long-term growth and environmental responsibility through strategic sustainability frameworks built for the modern enterprise.",
//     video: "/videos/intro.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_362,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/sustainable-management",
//   },
// ];

// const AUTOPLAY = 7500;

// export function TerraOrbitalHero() {
//   const [active, setActive] = useState(0);
//   const [playing, setPlaying] = useState(true);

//   const current = solutions[active];

//   const next = () => {
//     setActive((prev) => (prev + 1) % solutions.length);
//   };

//   const previous = () => {
//     setActive((prev) => (prev - 1 + solutions.length) % solutions.length);
//   };

//   const selectSlide = (index: number) => {
//     setActive(index);
//     setPlaying(true);
//   };

//   useEffect(() => {
//     if (!playing) return;

//     const timer = window.setInterval(() => {
//       setActive((prev) => (prev + 1) % solutions.length);
//     }, AUTOPLAY);

//     return () => window.clearInterval(timer);
//   }, [playing]);

//   return (
//     <section className="relative isolate min-h-[650px] overflow-hidden bg-[#03150F] text-white lg:min-h-[740px]">

//       {/* BACKGROUND IMAGE FALLBACK */}
//       <div className="absolute inset-0 -z-30">
//         <img
//           key={current.image}
//           src={current.image}
//           alt=""
//           className="h-full w-full object-cover animate-[heroZoom_12s_ease-out_forwards]"
//         />
//       </div>

//       {/* FULL BACKGROUND VIDEO */}
//       <div className="absolute inset-0 -z-20">
//         <video
//           key={current.video}
//           src={current.video}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* CINEMATIC OVERLAYS */}
//       <div className="absolute inset-0 -z-10 bg-[#03150F]/65" />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03150F]/95 via-[#03150F]/75 to-[#03150F]/25" />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03150F] via-transparent to-[#03150F]/20" />

//       {/* AMBIENT LIGHT */}
//       <div className="pointer-events-none absolute -right-40 top-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#85D960]/10 blur-[140px]" />

//       <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[350px] w-[350px] rounded-full bg-[#2E7C43]/15 blur-[120px]" />

//       {/* MAIN CONTENT */}
//       <div className="relative mx-auto flex min-h-[650px] max-w-[1800px] flex-col justify-center px-6 pb-28 pt-28 sm:px-10 lg:min-h-[740px] lg:px-16 xl:px-20">

//         {/* LEFT CONTENT */}
//         <div className="relative z-10 w-full max-w-[900px] lg:max-w-[65%]">

//           {/* CATEGORY */}
//           <div
//             key={`category-${active}`}
//             className="mb-7 flex items-center gap-3 animate-[heroReveal_700ms_ease_both]"
//           >
//             <span className="h-2.5 w-2.5 rounded-full bg-[#85DF63] shadow-[0_0_18px_#85DF63]" />

//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
//               {current.category}
//             </span>
//           </div>

//           {/* SLIDE NUMBER */}
//           <div
//             key={`number-${active}`}
//             className="mb-5 flex items-center gap-3 animate-[heroReveal_700ms_100ms_ease_both]"
//           >
//             <span className="text-xl font-semibold tracking-wider text-[#88DD64]">
//               {String(active + 1).padStart(2, "0")}
//             </span>

//             <span className="text-xs tracking-[0.2em] text-white/40">
//               / 08
//             </span>
//           </div>

//           {/* HEADLINE */}
//           <div
//             key={`heading-${active}`}
//             className="animate-[heroReveal_850ms_150ms_ease_both]"
//           >
//             <h1 className="font-display text-[clamp(3rem,6.8vw,6.8rem)] font-normal leading-[0.96] tracking-[-0.075em]">
//               <span className="block">{current.headline}</span>

//               <span className="mt-2 block font-medium italic tracking-[-0.065em] text-[#85D960]">
//                 {current.accent}
//               </span>
//             </h1>
//           </div>

//           {/* DESCRIPTION */}
//           <div
//             key={`description-${active}`}
//             className="mt-7 flex max-w-[550px] animate-[heroReveal_800ms_300ms_ease_both] gap-5 border-l-2 border-[#85D960] py-1 pl-5"
//           >
//             <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//               {current.description}
//             </p>
//           </div>

//           {/* CTA BUTTONS */}
//           <div className="mt-8 flex flex-wrap items-center gap-7 animate-[heroReveal_800ms_450ms_ease_both]">

//             <Link
//               to={current.link}
//               className="group inline-flex items-center gap-5 rounded-full bg-[#85D960] py-2 pl-7 pr-2 text-sm font-semibold text-[#07170D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5EF83] hover:shadow-[0_15px_40px_rgba(133,217,96,0.25)]"
//             >
//               Explore solution

//               <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07170D] text-white transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight size={21} />
//               </span>
//             </Link>

//             <Link
//               to="/contact"
//               className="group flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#85D960]"
//             >
//               Let's talk

//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>

//           </div>

//         </div>

//         {/* MOBILE SOLUTION SELECTOR */}
//         <div className="mt-9 flex gap-3 overflow-x-auto pb-3 lg:hidden">
//           {solutions.map((item, index) => (
//             <button
//               key={item.title}
//               onClick={() => selectSlide(index)}
//               className={`flex shrink-0 items-center gap-3 rounded-full border px-3 py-2 transition-all ${
//                 active === index
//                   ? "border-[#85D960] bg-[#85D960]/15"
//                   : "border-white/15 bg-white/5"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="h-9 w-9 rounded-full object-cover"
//               />

//               <span className="text-xs text-white">
//                 {item.title}
//               </span>
//             </button>
//           ))}
//         </div>

//       </div>

//       {/* ================================================= */}
//       {/* EXTREME RIGHT SEMI-CIRCULAR ORBITAL EXPERIENCE */}
//       {/* ================================================= */}

//       <div
//         className="pointer-events-none absolute right-[-310px] top-1/2 z-10 hidden h-[740px] w-[740px] -translate-y-1/2 items-center justify-center overflow-visible lg:flex"
//       >

//         {/* OUTER ORBIT */}
//         <div className="absolute inset-0 rounded-full border border-[#85D960]/10 shadow-[0_0_100px_rgba(133,217,96,0.08)]" />

//         {/* ORBIT RINGS */}
//         <div className="absolute inset-[8%] rounded-full border border-[#85D960]/20" />

//         <div className="absolute inset-[18%] rounded-full border border-[#85D960]/15" />

//         <div className="absolute inset-[29%] rounded-full border border-dashed border-[#85D960]/20" />

//         {/* INNER ORBIT GLOW */}
//         <div className="absolute inset-[32%] rounded-full bg-[#85D960]/5 blur-[60px]" />

//         {/* CENTRAL IMAGE */}
//         <div className="relative z-10 h-[300px] w-[300px] shrink-0 overflow-hidden rounded-full border-[5px] border-white/80 bg-[#09251A] shadow-[0_0_0_14px_rgba(133,217,96,0.08),0_0_90px_rgba(133,217,96,0.20)]">

//           <img
//             key={`center-image-${active}`}
//             src={current.image}
//             alt={current.title}
//             className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#03150F]/90 via-transparent to-transparent" />

//           <div className="absolute inset-x-0 bottom-8 text-center">
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6EF82]">
//               0{active + 1} / 08
//             </span>

//             <p className="mt-2 px-5 text-sm font-semibold text-white">
//               {current.title}
//             </p>
//           </div>

//         </div>

//         {/* EIGHT SOLUTION THUMBNAILS */}
//         {solutions.map((item, index) => {
//           const angle = 120 + (index / 7) * 120;
//           const radians = (angle * Math.PI) / 180;
//           const radius = 43;

//           const x = 50 + Math.cos(radians) * radius;
//           const y = 50 + Math.sin(radians) * radius;

//           return (
//             <button
//               key={item.title}
//               onClick={() => selectSlide(index)}
//               aria-label={`Explore ${item.title}`}
//               className={`pointer-events-auto absolute z-30 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-[#09251A] p-1 shadow-[0_8px_35px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-125 ${
//                 active === index
//                   ? "scale-110 border-[#85D960] shadow-[0_0_30px_rgba(133,217,96,0.45)]"
//                   : "border-white/60 hover:border-[#85D960]"
//               }`}
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-full w-full rounded-full object-cover"
//               />

//               {active === index && (
//                 <span className="absolute inset-[-8px] rounded-full border border-[#85D960]/80" />
//               )}
//             </button>
//           );
//         })}

//         {/* ACTIVE SOLUTION LABEL */}
//         <div className="absolute left-[5%] top-1/2 z-40 w-[160px] -translate-x-full -translate-y-1/2 text-right">
//           <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1E981]">
//             NOW EXPLORING
//           </span>

//           <p className="mt-2 text-sm font-semibold text-white">
//             {current.title}
//           </p>
//         </div>

//         {/* ORBIT DECORATION */}
//         <div className="absolute left-[5%] top-[12%] h-2 w-2 rounded-full bg-[#85D960] shadow-[0_0_20px_#85D960]" />

//         <div className="absolute left-[5%] bottom-[12%] h-2 w-2 rounded-full bg-[#85D960] shadow-[0_0_20px_#85D960]" />

//       </div>

//       {/* BOTTOM NAVIGATION */}
//       <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-5 sm:px-10 lg:px-16 xl:px-20">

//         <div className="mx-auto max-w-[1800px] border-t border-white/20 pt-4">

//           <div className="flex items-center justify-between gap-5">

//             {/* BRAND MESSAGE */}
//             <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40 md:flex">
//               <span>Engineering a sustainable future</span>

//               <span className="h-px w-9 bg-[#85D960]" />

//               <span>Innovation through purpose</span>
//             </div>

//             {/* EIGHT PROGRESS INDICATORS */}
//             <div className="flex flex-1 items-center gap-2 sm:max-w-[390px]">
//               {solutions.map((item, index) => (
//                 <button
//                   key={item.title}
//                   onClick={() => selectSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className="group h-6 flex-1 py-2"
//                 >
//                   <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
//                     <span
//                       className={`block h-full rounded-full bg-[#85D960] transition-all duration-500 ${
//                         active === index
//                           ? "w-full shadow-[0_0_12px_#85D960]"
//                           : "w-0"
//                       }`}
//                     />
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* PLAY AND NAVIGATION */}
//             <div className="flex shrink-0 items-center gap-2">

//               <button
//                 onClick={previous}
//                 aria-label="Previous solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronLeft size={19} />
//               </button>

//               <button
//                 onClick={() => setPlaying(!playing)}
//                 className="flex h-10 items-center gap-2 rounded-full bg-[#85D960] px-5 text-[10px] font-bold uppercase tracking-wider text-[#07170D] transition-all hover:bg-[#A5EF83]"
//               >
//                 {playing ? <Pause size={13} /> : <Play size={13} />}

//                 {playing ? "Pause" : "Play"}
//               </button>

//               <button
//                 onClick={next}
//                 aria-label="Next solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes heroZoom {
//           from {
//             transform: scale(1);
//           }
//           to {
//             transform: scale(1.12);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             scroll-behavior: auto !important;
//           }
//         }
//       `}</style>

//     </section>
//   );
// }

// export default TerraOrbitalHero;






// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
// } from "lucide-react";

// type Solution = {
//   title: string;
//   category: string;
//   headline: string;
//   accent: string;
//   description: string;
//   video: string;
//   image: string;
//   link: string;
// };

// // =====================================================
// // 8 TERRA ECOPRENEURS SOLUTIONS
// // =====================================================

// const solutions: Solution[] = [
//   {
//     title: "Energy Efficiency & Audit",
//     category: "ENERGY OPTIMIZATION",
//     headline: "Smarter Energy.",
//     accent: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
//     video: "https://www.pexels.com/download/video/10312637/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
//     link: "/solutions/energy-efficiency",
//   },
//   {
//     title: "Clean Energy",
//     category: "RENEWABLE ENERGY",
//     headline: "Powering a",
//     accent: "Cleaner Tomorrow.",
//     description:
//       "Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.",
//     video: "/videos/solar.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/clean-energy",
//   },
//   {
//     title: "IBMS",
//     category: "INTELLIGENT BUILDING MANAGEMENT",
//     headline: "Buildings That",
//     accent: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
//     video: "/videos/smart-building.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
//     link: "/solutions/ibms",
//   },
//   {
//     title: "Digital Solutions",
//     category: "DIGITAL TRANSFORMATION",
//     headline: "Transforming Ideas.",
//     accent: "Into Intelligence.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.",
//     video: "/videos/digital-data.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/digital",
//   },
//   {
//     title: "Industrial Automation",
//     category: "INDUSTRIAL INNOVATION",
//     headline: "Automate Today.",
//     accent: "Advance Tomorrow.",
//     description:
//       "Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.",
//     video: "/videos/robotics.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/industrial-automation",
//   },
//   {
//     title: "Pre-fab Structures",
//     category: "SUSTAINABLE CONSTRUCTION",
//     headline: "Build Faster.",
//     accent: "Build Smarter.",
//     description:
//       "Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.",
//     video: "/videos/prefab.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
//     link: "/solutions/prefab",
//   },
//   {
//     title: "Press Components",
//     category: "PRECISION ENGINEERING",
//     headline: "Precision in",
//     accent: "Every Detail.",
//     description:
//       "Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.",
//     video: "/videos/press-parts.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f3~mv2.png/v1/fill/w_362,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/press-components",
//   },
//   {
//     title: "Sustainable Management",
//     category: "SUSTAINABLE DEVELOPMENT",
//     headline: "Growing Responsibly.",
//     accent: "Creating Impact.",
//     description:
//       "Drive long-term growth and environmental responsibility through strategic sustainability frameworks built for the modern enterprise.",
//     video: "/videos/intro.mp4",
//     image:
//       "https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_362,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/sustainable-management",
//   },
// ];

// const AUTOPLAY = 7500;

// // =====================================================
// // HERO COMPONENT
// // =====================================================

// export function TerraOrbitalHero() {
//   const [active, setActive] = useState(0);
//   const [playing, setPlaying] = useState(true);
//   const [videoReady, setVideoReady] = useState(false);
//   const [videoFailed, setVideoFailed] = useState(false);

//   const current = solutions[active];

//   // Navigation
//   const next = () => {
//     setActive((prev) => (prev + 1) % solutions.length);
//   };

//   const previous = () => {
//     setActive(
//       (prev) => (prev - 1 + solutions.length) % solutions.length
//     );
//   };

//   const selectSlide = (index: number) => {
//     setActive(index);
//     setPlaying(true);
//   };

//   // Autoplay
//   useEffect(() => {
//     if (!playing) return;

//     const timer = window.setInterval(() => {
//       setActive((prev) => (prev + 1) % solutions.length);
//     }, AUTOPLAY);

//     return () => window.clearInterval(timer);
//   }, [playing]);

//   // Reset video loading state
//   useEffect(() => {
//     setVideoReady(false);
//     setVideoFailed(false);
//   }, [active]);

//   // Eight positions along a left-facing 180-degree arc.
//   // The active solution occupies the middle position.
//   const arcAngles = [
//     75, 105, 135, 165, 195, 225, 255, 285,
//   ];

//   return (
//     <section className="relative isolate min-h-[650px] overflow-hidden bg-[#03150F] text-white lg:min-h-[740px]">

//       {/* ============================================= */}
//       {/* BACKGROUND IMAGE */}
//       {/* ============================================= */}

//       <div className="absolute inset-0 -z-30">
//         <img
//           key={current.image}
//           src={current.image}
//           alt=""
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* ============================================= */}
//       {/* BACKGROUND VIDEO */}
//       {/* ============================================= */}

//       <div className="absolute inset-0 -z-20 overflow-hidden">
//         <video
//           key={current.video}
//           src={current.video}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           onCanPlay={() => setVideoReady(true)}
//           onError={() => setVideoFailed(true)}
//           className={`h-full w-full object-cover transition-opacity duration-1000 ${
//             videoReady && !videoFailed
//               ? "opacity-100"
//               : "opacity-0"
//           }`}
//         />
//       </div>

//       {/* ============================================= */}
//       {/* CINEMATIC OVERLAYS */}
//       {/* ============================================= */}

//       <div className="absolute inset-0 -z-10 bg-[#03150F]/65" />

//       <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,17,12,0.96)_0%,rgba(2,17,12,0.80)_38%,rgba(2,17,12,0.38)_75%,rgba(2,17,12,0.55)_100%)]" />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03150F] via-transparent to-[#03150F]/20" />

//       {/* AMBIENT LIGHT */}

//       <div className="pointer-events-none absolute -right-40 top-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#85D960]/10 blur-[140px]" />

//       <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[350px] w-[350px] rounded-full bg-[#2E7C43]/15 blur-[120px]" />

//       {/* ============================================= */}
//       {/* MAIN CONTENT */}
//       {/* ============================================= */}

//       <div className="relative mx-auto flex min-h-[650px] max-w-[1800px] flex-col justify-center px-6 pb-28 pt-24 sm:px-10 lg:min-h-[740px] lg:px-16 xl:px-20">

//         {/* LEFT CONTENT */}

//         <div className="relative z-20 w-full max-w-[900px] lg:max-w-[65%]">

//           {/* CATEGORY */}

//           <div
//             key={`category-${active}`}
//             className="mb-7 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
//           >
//             <span className="h-2.5 w-2.5 rounded-full bg-[#85DF63] shadow-[0_0_18px_#85DF63]" />

//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
//               {current.category}
//             </span>
//           </div>

//           {/* SLIDE NUMBER */}

//           <div
//             key={`number-${active}`}
//             className="mb-5 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
//           >
//             <span className="text-xl font-semibold tracking-wider text-[#88DD64]">
//               {String(active + 1).padStart(2, "0")}
//             </span>

//             <span className="text-xs tracking-[0.2em] text-white/40">
//               / 08
//             </span>
//           </div>

//           {/* HEADLINE */}

//           <div
//             key={`heading-${active}`}
//             className="animate-[heroReveal_850ms_ease_both]"
//           >
//             <h1 className="font-display text-[clamp(3rem,6.8vw,6.8rem)] font-normal leading-[0.96] tracking-[-0.075em]">

//               <span className="block">
//                 {current.headline}
//               </span>

//               <span className="mt-2 block font-medium italic tracking-[-0.065em] text-[#85D960]">
//                 {current.accent}
//               </span>

//             </h1>
//           </div>

//           {/* DESCRIPTION */}

//           <div
//             key={`description-${active}`}
//             className="mt-7 flex max-w-[550px] animate-[heroReveal_800ms_200ms_ease_both] gap-5 border-l-2 border-[#85D960] py-1 pl-5"
//           >
//             <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//               {current.description}
//             </p>
//           </div>

//           {/* CTA BUTTONS */}

//           <div className="mt-8 flex flex-wrap items-center gap-7">

//             <Link
//               to={current.link}
//               className="group inline-flex items-center gap-5 rounded-full bg-[#85D960] py-2 pl-7 pr-2 text-sm font-semibold text-[#07170D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5EF83] hover:shadow-[0_15px_40px_rgba(133,217,96,0.25)]"
//             >
//               Explore solution

//               <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07170D] text-white transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight size={21} />
//               </span>
//             </Link>

//             <Link
//               to="/contact"
//               className="group flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#85D960]"
//             >
//               Let's talk

//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>

//           </div>

//         </div>

//         {/* ========================================= */}
//         {/* MOBILE SOLUTION SELECTOR */}
//         {/* ========================================= */}

//         <div className="mt-10 flex gap-3 overflow-x-auto pb-3 lg:hidden">

//           {solutions.map((item, index) => (
//             <button
//               key={item.title}
//               onClick={() => selectSlide(index)}
//               className={`flex shrink-0 items-center gap-3 rounded-full border px-3 py-2 transition-all ${
//                 active === index
//                   ? "border-[#85D960] bg-[#85D960]/15"
//                   : "border-white/15 bg-white/5"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="h-9 w-9 rounded-full object-cover"
//               />

//               <span className="text-xs text-white">
//                 {item.title}
//               </span>
//             </button>
//           ))}

//         </div>

//       </div>

//       {/* ============================================= */}
//       {/* DYNAMIC HALF-CIRCLE ORBIT */}
//       {/* EXTREME RIGHT SIDE */}
//       {/* ============================================= */}

//       <div className="pointer-events-none absolute right-[-340px] top-1/2 z-10 hidden h-[680px] w-[680px] -translate-y-1/2 overflow-visible lg:block">

//         {/* OUTER HALF-CIRCLE */}

//         <svg
//           viewBox="0 0 680 680"
//           className="absolute inset-0 h-full w-full overflow-visible"
//           fill="none"
//         >

//           <path
//             d="M340 0 A340 340 0 0 0 340 680"
//             stroke="#85D960"
//             strokeOpacity="0.25"
//             strokeWidth="1.5"
//           />

//           <path
//             d="M340 55 A285 285 0 0 0 340 625"
//             stroke="#85D960"
//             strokeOpacity="0.15"
//             strokeWidth="1"
//           />

//           <path
//             d="M340 120 A220 220 0 0 0 340 560"
//             stroke="#85D960"
//             strokeOpacity="0.12"
//             strokeWidth="1"
//           />

//           <path
//             d="M340 0 A340 340 0 0 0 340 680"
//             stroke="#85D960"
//             strokeOpacity="0.12"
//             strokeWidth="8"
//             strokeDasharray="2 18"
//           />

//         </svg>

//         {/* ORBIT GLOW */}

//         <div className="absolute left-[5%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#85D960]/[0.06] blur-[75px]" />

//         {/* ========================================= */}
//         {/* 8 MOVING SOLUTION THUMBNAILS */}
//         {/* ========================================= */}

//         {solutions.map((item, index) => {

//           // Rotate all solutions around the half-circle.
//           // The active solution moves to the center slot.

//           const slot =
//             (index - active + 4 + solutions.length) %
//             solutions.length;

//           const angle = arcAngles[slot];

//           const radians = (angle * Math.PI) / 180;

//           const radius = 46;

//           const x = 50 + Math.cos(radians) * radius;
//           const y = 50 + Math.sin(radians) * radius;

//           const isActive = active === index;

//           return (
//             <button
//               key={item.title}
//               onClick={() => selectSlide(index)}
//               aria-label={`Explore ${item.title}`}
//               className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#09251A] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                 isActive
//                   ? "h-[108px] w-[108px] border-[4px] border-white p-1 shadow-[0_0_0_12px_rgba(133,217,96,0.13),0_0_55px_rgba(133,217,96,0.45)]"
//                   : "h-[68px] w-[68px] border-2 border-white/50 p-1 opacity-80 hover:scale-110 hover:border-[#85D960] hover:opacity-100"
//               }`}
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//                 zIndex: isActive ? 40 : 20,
//               }}
//             >

//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-full w-full rounded-full object-cover"
//               />

//               {/* ACTIVE GLOW RING */}

//               {isActive && (
//                 <>
//                   <span className="absolute inset-[-10px] rounded-full border border-[#85D960]/80 animate-pulse" />

//                   <span className="absolute inset-[-18px] rounded-full border border-[#85D960]/20" />
//                 </>
//               )}

//             </button>
//           );
//         })}

//         {/* ========================================= */}
//         {/* ACTIVE SOLUTION LABEL */}
//         {/* ========================================= */}

//         <div
//           key={`orbit-label-${active}`}
//           className="absolute left-[5%] top-1/2 z-40 w-[190px] -translate-x-full -translate-y-1/2 text-right animate-[heroReveal_600ms_ease_both]"
//         >
//           <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
//             NOW EXPLORING
//           </span>

//           <p className="mt-2 text-sm font-semibold text-[#A1E981]">
//             {current.title}
//           </p>

//           <span className="mt-2 block text-[9px] text-white/40">
//             {String(active + 1).padStart(2, "0")} / 08
//           </span>
//         </div>

//         {/* ORBIT CENTER DECORATION */}

//         <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#85D960] shadow-[0_0_20px_#85D960]" />

//       </div>

//       {/* ============================================= */}
//       {/* BOTTOM NAVIGATION */}
//       {/* ============================================= */}

//       <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-5 sm:px-10 lg:px-16 xl:px-20">

//         <div className="mx-auto max-w-[1800px] border-t border-white/20 pt-4">

//           <div className="flex items-center justify-between gap-5">

//             {/* BRAND MESSAGE */}

//             <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40 md:flex">

//               <span>
//                 Engineering a sustainable future
//               </span>

//               <span className="h-px w-9 bg-[#85D960]" />

//               <span>
//                 Innovation through purpose
//               </span>

//             </div>

//             {/* PROGRESS INDICATORS */}

//             <div className="flex flex-1 items-center gap-2 sm:max-w-[390px]">

//               {solutions.map((item, index) => (
//                 <button
//                   key={item.title}
//                   onClick={() => selectSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className="group h-6 flex-1 py-2"
//                 >

//                   <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">

//                     <span
//                       className={`block h-full rounded-full bg-[#85D960] transition-all duration-500 ${
//                         active === index
//                           ? "w-full shadow-[0_0_12px_#85D960]"
//                           : "w-0"
//                       }`}
//                     />

//                   </span>

//                 </button>
//               ))}

//             </div>

//             {/* PLAY / PAUSE / NAVIGATION */}

//             <div className="flex shrink-0 items-center gap-2">

//               <button
//                 onClick={previous}
//                 aria-label="Previous solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronLeft size={19} />
//               </button>

//               <button
//                 onClick={() => setPlaying(!playing)}
//                 aria-label={playing ? "Pause autoplay" : "Play autoplay"}
//                 className="flex h-10 items-center gap-2 rounded-full bg-[#85D960] px-5 text-[10px] font-bold uppercase tracking-wider text-[#07170D] transition-all hover:bg-[#A5EF83]"
//               >

//                 {playing ? (
//                   <Pause size={13} />
//                 ) : (
//                   <Play size={13} />
//                 )}

//                 {playing ? "Pause" : "Play"}

//               </button>

//               <button
//                 onClick={next}
//                 aria-label="Next solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ============================================= */}
//       {/* ANIMATIONS */}
//       {/* ============================================= */}

//       <style>{`

//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             scroll-behavior: auto !important;
//             transition-duration: 0.01ms !important;
//           }
//         }

//       `}</style>

//     </section>
//   );
// }

// export default TerraOrbitalHero;




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
// } from "lucide-react";

// type Solution = {
//   title: string;
//   category: string;
//   headline: string;
//   accent: string;
//   description: string;
//   video: string;
//   image: string;
//   link: string;
// };

// // =====================================================
// // 8 TERRA ECOPRENEURS SOLUTIONS
// // =====================================================

// const solutions: Solution[] = [
//   {
//     title: "Energy Efficiency & Audit",
//     category: "ENERGY OPTIMIZATION",
//     headline: "Smarter Energy.",
//     accent: "Greater Efficiency.",
//     description:
//       "Cut energy waste, lower operational costs and boost performance through data-driven energy audits, intelligent monitoring and efficiency upgrades.",
//     video: "https://www.pexels.com/download/video/28652435/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
//     link: "/solutions/energy-efficiency",
//   },
//   {
//     title: "Clean Energy",
//     category: "RENEWABLE ENERGY",
//     headline: "Powering a",
//     accent: "Cleaner Tomorrow.",
//     description:
//       "Transition to a greener, more resilient future with scalable renewable energy installations and sustainable power solutions.",
//     video: "https://www.pexels.com/download/video/10312637/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/clean-energy",
//   },
//   {
//     title: "IBMS",
//     category: "INTELLIGENT BUILDING MANAGEMENT",
//     headline: "Buildings That",
//     accent: "Think Smarter.",
//     description:
//       "Unify and automate your facility's core operations for smarter, safer and highly efficient building management through integrated intelligent systems.",
//     video: "https://www.pexels.com/download/video/8566709/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
//     link: "/solutions/ibms",
//   },
//   {
//     title: "Digital Solutions",
//     category: "DIGITAL TRANSFORMATION",
//     headline: "Transforming Ideas.",
//     accent: "Into Intelligence.",
//     description:
//       "Empower your business transformation with cutting-edge digital tools, connected technologies and data-driven architectures.",
//     video: "https://www.pexels.com/download/video/35977437/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/digital",
//   },
//   {
//     title: "Industrial Automation",
//     category: "INDUSTRIAL INNOVATION",
//     headline: "Automate Today.",
//     accent: "Advance Tomorrow.",
//     description:
//       "Streamline production lines and accelerate output with state-of-the-art robotic systems, intelligent automation and advanced industrial technologies.",
//     video: "https://www.pexels.com/download/video/32386532/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/industrial-automation",
//   },
//   {
//     title: "Pre-fab Structures",
//     category: "SUSTAINABLE CONSTRUCTION",
//     headline: "Build Faster.",
//     accent: "Build Smarter.",
//     description:
//       "Accelerate your construction timeline with durable, high-quality and rapidly deployable prefabricated structures designed for modern infrastructure.",
//     video: "https://www.pexels.com/download/video/29923183/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_362,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
//     link: "/solutions/prefab",
//   },
//   {
//     title: "Press Components",
//     category: "PRECISION ENGINEERING",
//     headline: "Precision in",
//     accent: "Every Detail.",
//     description:
//       "Deliver precision and heavy-duty reliability for your manufacturing requirements with custom-engineered press components and quality-driven engineering.",
//     video: "https://www.pexels.com/download/video/31802320/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f3~mv2.png/v1/fill/w_362,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
//     link: "/solutions/press-components",
//   },
//   {
//     title: "Sustainable Management",
//     category: "SUSTAINABLE DEVELOPMENT",
//     headline: "Growing Responsibly.",
//     accent: "Creating Impact.",
//     description:
//       "Drive long-term growth and environmental responsibility through strategic sustainability frameworks built for the modern enterprise.",
//     video: "https://www.pexels.com/download/video/4380227/",
//     image:
//       "https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_362,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
//     link: "/solutions/sustainable-management",
//   },
// ];

// const AUTOPLAY = 7500;

// // =====================================================
// // HERO COMPONENT
// // =====================================================

// export function TerraOrbitalHero() {
//   const [active, setActive] = useState(0);
//   const [playing, setPlaying] = useState(true);
//   const [videoReady, setVideoReady] = useState(false);
//   const [videoFailed, setVideoFailed] = useState(false);

//   const current = solutions[active];

//   // Navigation
//   const next = () => {
//     setActive((prev) => (prev + 1) % solutions.length);
//   };

//   const previous = () => {
//     setActive(
//       (prev) => (prev - 1 + solutions.length) % solutions.length
//     );
//   };

//   const selectSlide = (index: number) => {
//     setActive(index);
//     setPlaying(true);
//   };

//   // Autoplay
//   useEffect(() => {
//     if (!playing) return;

//     const timer = window.setInterval(() => {
//       setActive((prev) => (prev + 1) % solutions.length);
//     }, AUTOPLAY);

//     return () => window.clearInterval(timer);
//   }, [playing]);

//   // Reset video loading state
//   useEffect(() => {
//     setVideoReady(false);
//     setVideoFailed(false);
//   }, [active]);

//   // Eight positions along a left-facing 180-degree arc.
//   const arcAngles = [75, 105, 135, 165, 195, 225, 255, 285];

//   return (
//     <section className="relative isolate min-h-[650px] overflow-hidden bg-[#03150F] text-white lg:min-h-[740px]">

//       {/* ============================================= */}
//       {/* BACKGROUND IMAGE */}
//       {/* ============================================= */}

//       <div className="absolute inset-0 -z-30">
//         <img
//           key={current.image}
//           src={current.image}
//           alt=""
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* ============================================= */}
//       {/* BACKGROUND VIDEO */}
//       {/* ============================================= */}

//       <div className="absolute inset-0 -z-20 overflow-hidden">
//         <video
//           key={current.video}
//           src={current.video}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           onCanPlay={() => setVideoReady(true)}
//           onError={() => setVideoFailed(true)}
//           className={`h-full w-full object-cover transition-opacity duration-1000 ${
//             videoReady && !videoFailed
//               ? "opacity-100"
//               : "opacity-0"
//           }`}
//         />
//       </div>

//       {/* ============================================= */}
//       {/* MAIN CONTENT */}
//       {/* ============================================= */}

//       <div className="relative mx-auto flex min-h-[650px] max-w-[1800px] flex-col justify-center px-6 pb-28 pt-24 sm:px-10 lg:min-h-[740px] lg:px-16 xl:px-20">

//         {/* LEFT CONTENT */}

//         <div className="relative z-20 w-full max-w-[900px] lg:max-w-[65%]">

//           {/* CATEGORY */}

//           <div
//             key={`category-${active}`}
//             className="mb-7 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
//           >
//             <span className="h-2.5 w-2.5 rounded-full bg-[#85DF63] shadow-[0_0_18px_#85DF63]" />

//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
//               {current.category}
//             </span>
//           </div>

//           {/* SLIDE NUMBER */}

//           <div
//             key={`number-${active}`}
//             className="mb-5 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
//           >
//             <span className="text-xl font-semibold tracking-wider text-[#88DD64]">
//               {String(active + 1).padStart(2, "0")}
//             </span>

//             <span className="text-xs tracking-[0.2em] text-white/40">
//               / 08
//             </span>
//           </div>

//           {/* HEADLINE */}

//           <div
//             key={`heading-${active}`}
//             className="animate-[heroReveal_850ms_ease_both]"
//           >
//             <h1 className="font-display text-[clamp(3rem,6.8vw,6.8rem)] font-normal leading-[0.96] tracking-[-0.075em]">
//               <span className="block">
//                 {current.headline}
//               </span>

//               <span className="mt-2 block font-medium italic tracking-[-0.065em] text-[#85D960]">
//                 {current.accent}
//               </span>
//             </h1>
//           </div>

//           {/* DESCRIPTION */}

//           <div
//             key={`description-${active}`}
//             className="mt-7 flex max-w-[550px] animate-[heroReveal_800ms_200ms_ease_both] gap-5 border-l-2 border-[#85D960] py-1 pl-5"
//           >
//             <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//               {current.description}
//             </p>
//           </div>

//           {/* CTA BUTTONS */}

//           <div className="mt-8 flex flex-wrap items-center gap-7">

//             <Link
//               to={current.link}
//               className="group inline-flex items-center gap-5 rounded-full bg-[#85D960] py-2 pl-7 pr-2 text-sm font-semibold text-[#07170D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5EF83] hover:shadow-[0_15px_40px_rgba(133,217,96,0.25)]"
//             >
//               Explore solution

//               <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07170D] text-white transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight size={21} />
//               </span>
//             </Link>

//             <Link
//               to="/contact"
//               className="group flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#85D960]"
//             >
//               Let's talk

//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>

//           </div>

//         </div>

//         {/* ========================================= */}
//         {/* MOBILE SOLUTION SELECTOR */}
//         {/* ========================================= */}

//         <div className="mt-10 flex gap-3 overflow-x-auto pb-3 lg:hidden">

//           {solutions.map((item, index) => (
//             <button
//               key={item.title}
//               onClick={() => selectSlide(index)}
//               className={`flex shrink-0 items-center gap-3 rounded-full border px-3 py-2 transition-all ${
//                 active === index
//                   ? "border-[#85D960] bg-[#85D960]/15"
//                   : "border-white/15 bg-white/5"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="h-9 w-9 rounded-full object-cover"
//               />

//               <span className="text-xs text-white">
//                 {item.title}
//               </span>
//             </button>
//           ))}

//         </div>

//       </div>

//       {/* ============================================= */}
//       {/* DYNAMIC HALF-CIRCLE ORBIT */}
//       {/* ============================================= */}

//       <div className="pointer-events-none absolute right-[-340px] top-1/2 z-10 hidden h-[680px] w-[680px] -translate-y-1/2 overflow-visible lg:block">

//         {/* OUTER HALF-CIRCLE */}

//         <svg
//           viewBox="0 0 680 680"
//           className="absolute inset-0 h-full w-full overflow-visible"
//           fill="none"
//         >
//           <path
//             d="M340 0 A340 340 0 0 0 340 680"
//             stroke="#85D960"
//             strokeOpacity="0.25"
//             strokeWidth="1.5"
//           />

//           <path
//             d="M340 55 A285 285 0 0 0 340 625"
//             stroke="#85D960"
//             strokeOpacity="0.15"
//             strokeWidth="1"
//           />

//           <path
//             d="M340 120 A220 220 0 0 0 340 560"
//             stroke="#85D960"
//             strokeOpacity="0.12"
//             strokeWidth="1"
//           />

//           <path
//             d="M340 0 A340 340 0 0 0 340 680"
//             stroke="#85D960"
//             strokeOpacity="0.12"
//             strokeWidth="8"
//             strokeDasharray="2 18"
//           />
//         </svg>

//         {/* ORBIT GLOW */}

//         <div className="absolute left-[5%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#85D960]/[0.06] blur-[75px]" />

//         {/* 8 MOVING SOLUTION THUMBNAILS */}

//         {solutions.map((item, index) => {
//           const slot =
//             (index - active + 4 + solutions.length) %
//             solutions.length;

//           const angle = arcAngles[slot];
//           const radians = (angle * Math.PI) / 180;
//           const radius = 46;

//           const x = 50 + Math.cos(radians) * radius;
//           const y = 50 + Math.sin(radians) * radius;

//           const isActive = active === index;

//           return (
//             <button
//               key={item.title}
//               onClick={() => selectSlide(index)}
//               aria-label={`Explore ${item.title}`}
//               className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#09251A] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                 isActive
//                   ? "h-[108px] w-[108px] border-[4px] border-white p-1 shadow-[0_0_0_12px_rgba(133,217,96,0.13),0_0_55px_rgba(133,217,96,0.45)]"
//                   : "h-[68px] w-[68px] border-2 border-white/50 p-1 opacity-80 hover:scale-110 hover:border-[#85D960] hover:opacity-100"
//               }`}
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//                 zIndex: isActive ? 40 : 20,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-full w-full rounded-full object-cover"
//               />

//               {isActive && (
//                 <>
//                   <span className="absolute inset-[-10px] rounded-full border border-[#85D960]/80 animate-pulse" />
//                   <span className="absolute inset-[-18px] rounded-full border border-[#85D960]/20" />
//                 </>
//               )}
//             </button>
//           );
//         })}

//         {/* ACTIVE SOLUTION LABEL */}

//         <div
//           key={`orbit-label-${active}`}
//           className="absolute left-[5%] top-1/2 z-40 w-[190px] -translate-x-full -translate-y-1/2 text-right animate-[heroReveal_600ms_ease_both]"
//         >
//           <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
//             NOW EXPLORING
//           </span>

//           <p className="mt-2 text-sm font-semibold text-[#A1E981]">
//             {current.title}
//           </p>

//           <span className="mt-2 block text-[9px] text-white/40">
//             {String(active + 1).padStart(2, "0")} / 08
//           </span>
//         </div>

//         {/* ORBIT CENTER DECORATION */}

//         <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#85D960] shadow-[0_0_20px_#85D960]" />

//       </div>

//       {/* ============================================= */}
//       {/* BOTTOM NAVIGATION */}
//       {/* ============================================= */}

//       <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-5 sm:px-10 lg:px-16 xl:px-20">

//         <div className="mx-auto max-w-[1800px] border-t border-white/20 pt-4">

//           <div className="flex items-center justify-between gap-5">

//             {/* BRAND MESSAGE */}

//             <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40 md:flex">
//               <span>
//                 Engineering a sustainable future
//               </span>

//               <span className="h-px w-9 bg-[#85D960]" />

//               <span>
//                 Innovation through purpose
//               </span>
//             </div>

//             {/* PROGRESS INDICATORS */}

//             <div className="flex flex-1 items-center gap-2 sm:max-w-[390px]">

//               {solutions.map((item, index) => (
//                 <button
//                   key={item.title}
//                   onClick={() => selectSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className="group h-6 flex-1 py-2"
//                 >
//                   <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
//                     <span
//                       className={`block h-full rounded-full bg-[#85D960] transition-all duration-500 ${
//                         active === index
//                           ? "w-full shadow-[0_0_12px_#85D960]"
//                           : "w-0"
//                       }`}
//                     />
//                   </span>
//                 </button>
//               ))}

//             </div>

//             {/* PLAY / PAUSE / NAVIGATION */}

//             <div className="flex shrink-0 items-center gap-2">

//               <button
//                 onClick={previous}
//                 aria-label="Previous solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronLeft size={19} />
//               </button>

//               <button
//                 onClick={() => setPlaying(!playing)}
//                 aria-label={playing ? "Pause autoplay" : "Play autoplay"}
//                 className="flex h-10 items-center gap-2 rounded-full bg-[#85D960] px-5 text-[10px] font-bold uppercase tracking-wider text-[#07170D] transition-all hover:bg-[#A5EF83]"
//               >
//                 {playing ? (
//                   <Pause size={13} />
//                 ) : (
//                   <Play size={13} />
//                 )}

//                 {playing ? "Pause" : "Play"}
//               </button>

//               <button
//                 onClick={next}
//                 aria-label="Next solution"
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ============================================= */}
//       {/* ANIMATIONS */}
//       {/* ============================================= */}

//       <style>{`
//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             scroll-behavior: auto !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>

//     </section>
//   );
// }

// export default TerraOrbitalHero;








import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

type Solution = {
  title: string;
  category: string;
  headline: string;
  accent: string;
  description: string;
  video: string;
  image: string;
  link: string;
};

// =====================================================
// 8 TERRA ECOPRENEURS SOLUTIONS
// =====================================================

const solutions: Solution[] = [
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

const AUTOPLAY = 7500;

// =====================================================
// HERO COMPONENT
// =====================================================

export function TerraOrbitalHero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const current = solutions[active];

  // Navigation
  const next = () => {
    setActive((prev) => (prev + 1) % solutions.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + solutions.length) % solutions.length
    );
  };

  const selectSlide = (index: number) => {
    setActive(index);
    setPlaying(true);
  };

  // Autoplay
  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % solutions.length);
    }, AUTOPLAY);

    return () => window.clearInterval(timer);
  }, [playing]);

  // Reset video loading state
  useEffect(() => {
    setVideoReady(false);
    setVideoFailed(false);
  }, [active]);

  // Eight positions along a left-facing 180-degree arc.
  const arcAngles = [75, 105, 135, 165, 195, 225, 255, 285];

  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#03150F] text-white lg:min-h-[740px]">

      {/* ============================================= */}
      {/* BACKGROUND IMAGE */}
      {/* ============================================= */}

      <div className="absolute inset-0 -z-30">
        <img
          key={current.image}
          src={current.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* ============================================= */}
      {/* BACKGROUND VIDEO */}
      {/* ============================================= */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          key={current.video}
          src={current.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady && !videoFailed
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      </div>

      {/* ============================================= */}
      {/* SUBTLE VIDEO OVERLAY */}
      {/* ============================================= */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-black/20" />

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#03150F]/55 via-transparent to-transparent" />

      {/* ============================================= */}
      {/* MAIN CONTENT */}
      {/* ============================================= */}

      <div className="relative mx-auto flex min-h-[650px] max-w-[1800px] flex-col justify-center px-6 pb-28 pt-24 sm:px-10 lg:min-h-[740px] lg:px-16 xl:px-20">

        {/* LEFT CONTENT */}

        <div className="relative z-20 w-full max-w-[900px] lg:max-w-[65%]">

          {/* CATEGORY */}

          <div
            key={`category-${active}`}
            className="mb-7 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#85DF63] shadow-[0_0_18px_#85DF63]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
              {current.category}
            </span>
          </div>

          {/* SLIDE NUMBER */}

          <div
            key={`number-${active}`}
            className="mb-5 flex animate-[heroReveal_700ms_ease_both] items-center gap-3"
          >
            <span className="text-xl font-semibold tracking-wider text-[#88DD64]">
              {String(active + 1).padStart(2, "0")}
            </span>

            <span className="text-xs tracking-[0.2em] text-white/40">
              / 08
            </span>
          </div>

          {/* HEADLINE */}

          <div
            key={`heading-${active}`}
            className="animate-[heroReveal_850ms_ease_both]"
          >
            <h1 className="font-display text-[clamp(3rem,6.8vw,6.8rem)] font-normal leading-[0.96] tracking-[-0.075em]">
              <span className="block">
                {current.headline}
              </span>

              <span className="mt-2 block font-medium italic tracking-[-0.065em] text-[#85D960]">
                {current.accent}
              </span>
            </h1>
          </div>

          {/* DESCRIPTION */}

          <div
            key={`description-${active}`}
            className="mt-7 flex max-w-[550px] animate-[heroReveal_800ms_200ms_ease_both] gap-5 border-l-2 border-[#85D960] py-1 pl-5"
          >
            <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              {current.description}
            </p>
          </div>

          {/* CTA BUTTONS */}

          <div className="mt-8 flex flex-wrap items-center gap-7">

            <Link
              to={current.link}
              className="group inline-flex items-center gap-5 rounded-full bg-[#85D960] py-2 pl-7 pr-2 text-sm font-semibold text-[#07170D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5EF83] hover:shadow-[0_15px_40px_rgba(133,217,96,0.25)]"
            >
              Explore solution

              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07170D] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={21} />
              </span>
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#85D960]"
            >
              Let's talk

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

        {/* ========================================= */}
        {/* MOBILE SOLUTION SELECTOR */}
        {/* ========================================= */}

        <div className="mt-10 flex gap-3 overflow-x-auto pb-3 lg:hidden">

          {solutions.map((item, index) => (
            <button
              key={item.title}
              onClick={() => selectSlide(index)}
              className={`flex shrink-0 items-center gap-3 rounded-full border px-3 py-2 transition-all ${
                active === index
                  ? "border-[#85D960] bg-[#85D960]/15"
                  : "border-white/15 bg-white/5"
              }`}
            >
              <img
                src={item.image}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />

              <span className="text-xs text-white">
                {item.title}
              </span>
            </button>
          ))}

        </div>

      </div>

      {/* ============================================= */}
      {/* DYNAMIC HALF-CIRCLE ORBIT */}
      {/* ============================================= */}

      <div className="pointer-events-none absolute right-[-340px] top-1/2 z-10 hidden h-[680px] w-[680px] -translate-y-1/2 overflow-visible lg:block">

        {/* OUTER HALF-CIRCLE */}

        <svg
          viewBox="0 0 680 680"
          className="absolute inset-0 h-full w-full overflow-visible"
          fill="none"
        >
          <path
            d="M340 0 A340 340 0 0 0 340 680"
            stroke="#85D960"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />

          <path
            d="M340 55 A285 285 0 0 0 340 625"
            stroke="#85D960"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          <path
            d="M340 120 A220 220 0 0 0 340 560"
            stroke="#85D960"
            strokeOpacity="0.12"
            strokeWidth="1"
          />

          <path
            d="M340 0 A340 340 0 0 0 340 680"
            stroke="#85D960"
            strokeOpacity="0.12"
            strokeWidth="8"
            strokeDasharray="2 18"
          />
        </svg>

        {/* ORBIT GLOW */}

        <div className="absolute left-[5%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#85D960]/[0.06] blur-[75px]" />

        {/* 8 MOVING SOLUTION THUMBNAILS */}

        {solutions.map((item, index) => {
          const slot =
            (index - active + 4 + solutions.length) %
            solutions.length;

          const angle = arcAngles[slot];
          const radians = (angle * Math.PI) / 180;
          const radius = 46;

          const x = 50 + Math.cos(radians) * radius;
          const y = 50 + Math.sin(radians) * radius;

          const isActive = active === index;

          return (
            <button
              key={item.title}
              onClick={() => selectSlide(index)}
              aria-label={`Explore ${item.title}`}
              className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#09251A] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "h-[108px] w-[108px] border-[4px] border-white p-1 shadow-[0_0_0_12px_rgba(133,217,96,0.13),0_0_55px_rgba(133,217,96,0.45)]"
                  : "h-[68px] w-[68px] border-2 border-white/50 p-1 opacity-80 hover:scale-110 hover:border-[#85D960] hover:opacity-100"
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                zIndex: isActive ? 40 : 20,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full rounded-full object-cover"
              />

              {isActive && (
                <>
                  <span className="absolute inset-[-10px] rounded-full border border-[#85D960]/80 animate-pulse" />
                  <span className="absolute inset-[-18px] rounded-full border border-[#85D960]/20" />
                </>
              )}
            </button>
          );
        })}

        {/* ACTIVE SOLUTION LABEL */}

        <div
          key={`orbit-label-${active}`}
          className="absolute left-[5%] top-1/2 z-40 w-[190px] -translate-x-full -translate-y-1/2 text-right animate-[heroReveal_600ms_ease_both]"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
            NOW EXPLORING
          </span>

          <p className="mt-2 text-sm font-semibold text-[#A1E981]">
            {current.title}
          </p>

          <span className="mt-2 block text-[9px] text-white/40">
            {String(active + 1).padStart(2, "0")} / 08
          </span>
        </div>

        {/* ORBIT CENTER DECORATION */}

        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#85D960] shadow-[0_0_20px_#85D960]" />

      </div>

      {/* ============================================= */}
      {/* BOTTOM NAVIGATION */}
      {/* ============================================= */}

      <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-5 sm:px-10 lg:px-16 xl:px-20">

        <div className="mx-auto max-w-[1800px] border-t border-white/20 pt-4">

          <div className="flex items-center justify-between gap-5">

            {/* BRAND MESSAGE */}

            <div className="hidden items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40 md:flex">
              <span>
                Engineering a sustainable future
              </span>

              <span className="h-px w-9 bg-[#85D960]" />

              <span>
                Innovation through purpose
              </span>
            </div>

            {/* PROGRESS INDICATORS */}

            <div className="flex flex-1 items-center gap-2 sm:max-w-[390px]">

              {solutions.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => selectSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group h-6 flex-1 py-2"
                >
                  <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
                    <span
                      className={`block h-full rounded-full bg-[#85D960] transition-all duration-500 ${
                        active === index
                          ? "w-full shadow-[0_0_12px_#85D960]"
                          : "w-0"
                      }`}
                    />
                  </span>
                </button>
              ))}

            </div>

            {/* PLAY / PAUSE / NAVIGATION */}

            <div className="flex shrink-0 items-center gap-2">

              <button
                onClick={previous}
                aria-label="Previous solution"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                onClick={() => setPlaying(!playing)}
                aria-label={playing ? "Pause autoplay" : "Play autoplay"}
                className="flex h-10 items-center gap-2 rounded-full bg-[#85D960] px-5 text-[10px] font-bold uppercase tracking-wider text-[#07170D] transition-all hover:bg-[#A5EF83]"
              >
                {playing ? (
                  <Pause size={13} />
                ) : (
                  <Play size={13} />
                )}

                {playing ? "Pause" : "Play"}
              </button>

              <button
                onClick={next}
                aria-label="Next solution"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all hover:border-[#85D960] hover:bg-[#85D960] hover:text-[#07170D]"
              >
                <ChevronRight size={19} />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ============================================= */}
      {/* ANIMATIONS */}
      {/* ============================================= */}

      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </section>
  );
}

export default TerraOrbitalHero;
