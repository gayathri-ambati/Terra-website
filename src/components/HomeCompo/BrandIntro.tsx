// import { Fragment, useLayoutEffect, useRef } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Leaf,
//   Sprout,
//   Globe2,
//   Users,
//   Lightbulb,
//   HeartHandshake,
// } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = {
//   forest:
//     "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90",
//   aerial:
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=90",
//   leaf:
//     "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1500&q=90",
//   landscape:
//     "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2400&q=90",
//   canopy:
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=90",
//   agriculture:
//     "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90",
// };

// const CHAPTERS = [
//   {
//     no: "01",
//     label: "Our mission",
//     lines: ["Empower", "every farmer."],
//     body: "Making agriculture more sustainable, productive, and resilient through practical solutions, accessible technology, and responsible farming practices.",
//     image: images.agriculture,
//     alt: "Green agricultural fields stretching across the landscape",
//   },
//   {
//     no: "02",
//     label: "Our approach",
//     lines: ["Progress", "grows together."],
//     body: "Working alongside farmers, local communities, and industry stakeholders to understand real challenges and develop solutions that create measurable impact.",
//     image: images.canopy,
//     alt: "Sunlight filtering through a lush green forest",
//   },
// ];

// const PILLARS = [
//   {
//     no: "01",
//     icon: Users,
//     title: ["People", "First"],
//     body: "Empowering farmers and communities through opportunities, knowledge, and meaningful partnerships.",
//   },
//   {
//     no: "02",
//     icon: Lightbulb,
//     title: ["Innovation", "with Purpose"],
//     body: "Bringing together technology, practical thinking, and sustainable solutions to address real agricultural challenges.",
//   },
//   {
//     no: "03",
//     icon: Leaf,
//     title: ["Sustainability", "by Design"],
//     body: "Promoting responsible practices that protect natural resources and support long-term environmental balance.",
//   },
//   {
//     no: "04",
//     icon: HeartHandshake,
//     title: ["Impact", "that Lasts"],
//     body: "Creating measurable improvements in livelihoods, agricultural productivity, and community resilience.",
//   },
// ];

// const IMPACTS = [
//   {
//     no: "01",
//     title: "Stronger livelihoods",
//     body: "Creating better opportunities for farmers and agricultural communities.",
//   },
//   {
//     no: "02",
//     title: "Responsible farming",
//     body: "Encouraging practices that protect natural resources and support productivity.",
//   },
//   {
//     no: "03",
//     title: "Meaningful innovation",
//     body: "Connecting practical technology with real-world agricultural needs.",
//   },
//   {
//     no: "04",
//     title: "Lasting resilience",
//     body: "Building a stronger agricultural ecosystem for future generations.",
//   },
// ];

// const MARQUEE_WORDS = [
//   "People First",
//   "Purposeful Innovation",
//   "Sustainable Growth",
//   "Lasting Impact",
// ];

// function SplitChars({
//   text,
//   charClass,
//   className = "",
// }: {
//   text: string;
//   charClass: string;
//   className?: string;
// }) {
//   return (
//     <span className={className} aria-hidden="true">
//       {text.split(" ").map((word, wordIndex) => (
//         <Fragment key={wordIndex}>
//           <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
//             {Array.from(word).map((char, charIndex) => (
//               <span
//                 key={charIndex}
//                 className={`${charClass} inline-block will-change-transform`}
//               >
//                 {char}
//               </span>
//             ))}
//           </span>
//           {wordIndex < text.split(" ").length - 1 ? " " : null}
//         </Fragment>
//       ))}
//     </span>
//   );
// }

// export function BrandIntro() {
//   const root = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const element = root.current;
//     if (!element) return;

//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       mm.add(
//         "(prefers-reduced-motion: no-preference)",
//         () => {
//           const select = gsap.utils.selector(element);

//           // INTRO TEXT REVEAL
//           gsap.from(select(".intro-char"), {
//             yPercent: 120,
//             rotate: 5,
//             duration: 1.2,
//             stagger: 0.025,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".living-intro")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.from(select(".intro-detail"), {
//             y: 25,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".living-intro")[0],
//               start: "top 80%",
//             },
//           });

//           // FIRST SECTION IMAGE REVEAL
//           gsap.from(select(".intro-visual-main"), {
//             clipPath: "inset(12% 0% 0% 0% round 180px 180px 12px 12px)",
//             scale: 1.08,
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".intro-visual")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.from(select(".intro-visual-circle"), {
//             scale: 0.75,
//             opacity: 0,
//             rotation: -12,
//             duration: 1.3,
//             delay: 0.2,
//             ease: "back.out(1.4)",
//             scrollTrigger: {
//               trigger: select(".intro-visual")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.to(select(".intro-visual-main img"), {
//             yPercent: -10,
//             ease: "none",
//             scrollTrigger: {
//               trigger: select(".intro-visual")[0],
//               start: "top bottom",
//               end: "bottom top",
//               scrub: 1,
//             },
//           });

//           // ORIGINAL GROW CINEMATIC REVEAL
//           const hero = select(".hero-pin")[0];
//           const heroFrame = select(".hero-frame")[0];
//           const heroImage = select(".intro-image")[0];

//           if (hero && heroFrame && heroImage) {
//             if (window.matchMedia("(min-width: 1024px)").matches) {
//               gsap
//                 .timeline({
//                   scrollTrigger: {
//                     trigger: hero,
//                     start: "top top",
//                     end: "+=110%",
//                     pin: true,
//                     scrub: 1,
//                     anticipatePin: 1,
//                   },
//                 })
//                 .fromTo(
//                   heroFrame,
//                   {
//                     clipPath:
//                       "inset(13% 30% 10% 30% round 50% 50% 0% 0%)",
//                   },
//                   {
//                     clipPath:
//                       "inset(0% 0% 0% 0% round 0% 0% 0% 0%)",
//                     ease: "none",
//                     duration: 1,
//                   },
//                   0
//                 )
//                 .fromTo(
//                   heroImage,
//                   { scale: 1.35 },
//                   { scale: 1, ease: "none", duration: 1 },
//                   0
//                 );
//             } else {
//               gsap.fromTo(
//                 heroFrame,
//                 {
//                   clipPath:
//                     "inset(12% 12% 8% 12% round 50% 50% 0% 0%)",
//                 },
//                 {
//                   clipPath:
//                     "inset(0% 0% 0% 0% round 0% 0% 0% 0%)",
//                   duration: 1.5,
//                   ease: "power4.out",
//                   scrollTrigger: {
//                     trigger: hero,
//                     start: "top 75%",
//                   },
//                 }
//               );

//               gsap.to(heroImage, {
//                 yPercent: 10,
//                 scale: 1.1,
//                 ease: "none",
//                 scrollTrigger: {
//                   trigger: hero,
//                   start: "top bottom",
//                   end: "bottom top",
//                   scrub: 1,
//                 },
//               });
//             }
//           }

//           // 02.5 — SPLIT VIDEO REVEAL
//           const videoSection = select(".terra-video-section")[0];
//           const videoFrame = select(".terra-video-frame")[0];
//           const videoContent = select(".terra-video-content")[0];

//           if (videoSection && videoFrame && videoContent) {
//             gsap.from(videoFrame, {
//               clipPath: "inset(8% 8% 8% 8% round 30px)",
//               scale: 0.96,
//               opacity: 0,
//               duration: 1.4,
//               ease: "power4.out",
//               scrollTrigger: {
//                 trigger: videoSection,
//                 start: "top 75%",
//                 once: true,
//               },
//             });

//             gsap.from(videoContent.children, {
//               y: 35,
//               opacity: 0,
//               duration: 1,
//               stagger: 0.12,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: videoSection,
//                 start: "top 75%",
//                 once: true,
//               },
//             });
//           }

//           // CINEMATIC MISSION AND APPROACH STORY
//           if (window.matchMedia("(min-width: 1024px)").matches) {
//             const pin = select(".chapters-pin")[0];
//             const chapterImages = select(".chapter-img");
//             const photos = select(".chapter-photo");
//             const texts = select(".chapter-text");
//             const dots = select(".chapter-dot");

//             if (pin && chapterImages.length) {
//               gsap.set(chapterImages.slice(1), {
//                 clipPath: "inset(100% 0% 0% 0%)",
//               });

//               gsap.set(texts.slice(1), {
//                 opacity: 0,
//                 y: 60,
//               });

//               gsap.set(dots.slice(1), {
//                 opacity: 0.3,
//                 height: 16,
//               });

//               const story = gsap.timeline({
//                 scrollTrigger: {
//                   trigger: pin,
//                   start: "top top",
//                   end: "+=200%",
//                   pin: true,
//                   scrub: 1,
//                   anticipatePin: 1,
//                 },
//               });

//               story
//                 .fromTo(
//                   photos[0],
//                   { scale: 1.2 },
//                   { scale: 1.05, duration: 2, ease: "none" },
//                   0
//                 )
//                 .fromTo(
//                   texts[0],
//                   { y: 60, opacity: 0 },
//                   {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.8,
//                     ease: "power3.out",
//                   },
//                   0.1
//                 );

//               for (let i = 1; i < chapterImages.length; i++) {
//                 const position = i * 2;

//                 story
//                   .to(
//                     texts[i - 1],
//                     {
//                       opacity: 0,
//                       y: -45,
//                       duration: 0.6,
//                     },
//                     position - 0.2
//                   )
//                   .to(
//                     chapterImages[i],
//                     {
//                       clipPath: "inset(0% 0% 0% 0%)",
//                       duration: 1.2,
//                       ease: "power2.inOut",
//                     },
//                     position - 0.2
//                   )
//                   .fromTo(
//                     photos[i],
//                     { scale: 1.25 },
//                     {
//                       scale: 1.05,
//                       duration: 2,
//                       ease: "none",
//                     },
//                     position - 0.2
//                   )
//                   .to(
//                     texts[i],
//                     {
//                       opacity: 1,
//                       y: 0,
//                       duration: 0.8,
//                       ease: "power3.out",
//                     },
//                     position + 0.4
//                   )
//                   .to(
//                     dots[i - 1],
//                     {
//                       opacity: 0.3,
//                       height: 16,
//                       duration: 0.4,
//                     },
//                     position
//                   )
//                   .to(
//                     dots[i],
//                     {
//                       opacity: 1,
//                       height: 56,
//                       duration: 0.4,
//                     },
//                     position
//                   );
//               }

//               story.to({}, { duration: 0.5 });
//             }
//           } else {
//             // MOBILE CHAPTER REVEALS
//             select(".chapter-card").forEach((card) => {
//               const photo = card.querySelector(".chapter-card-photo");
//               const text = card.querySelector(".chapter-card-text");

//               if (photo) {
//                 gsap.from(photo, {
//                   scale: 1.15,
//                   duration: 1.4,
//                   ease: "power3.out",
//                   scrollTrigger: {
//                     trigger: card,
//                     start: "top 80%",
//                   },
//                 });
//               }

//               if (text) {
//                 gsap.from(text, {
//                   y: 35,
//                   opacity: 0,
//                   duration: 0.9,
//                   ease: "power3.out",
//                   scrollTrigger: {
//                     trigger: card,
//                     start: "top 70%",
//                   },
//                 });
//               }
//             });
//           }

//           // MARQUEE
//           const track = select(".marquee-track")[0];

//           if (track) {
//             const marquee = gsap.to(track, {
//               xPercent: -50,
//               duration: 35,
//               ease: "none",
//               repeat: -1,
//             });

//             const marqueeBand = select(".marquee-band")[0];

//             if (marqueeBand) {
//               ScrollTrigger.create({
//                 trigger: marqueeBand,
//                 start: "top bottom",
//                 end: "bottom top",
//                 onUpdate: (self) => {
//                   const speed =
//                     1 + Math.min(Math.abs(self.getVelocity()) / 350, 4);

//                   marquee.timeScale(self.direction * speed);

//                   gsap.to(marquee, {
//                     timeScale: self.direction,
//                     duration: 1,
//                     ease: "power3.out",
//                   });
//                 },
//               });
//             }
//           }

//           // WHAT DRIVES US REVEAL
//           const pillars = select(".pillar");
//           const pillarsSection = select(".pillars-section")[0];

//           if (pillars.length && pillarsSection) {
//             gsap.from(pillars, {
//               y: 65,
//               opacity: 0,
//               duration: 1,
//               stagger: 0.14,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: pillarsSection,
//                 start: "top 75%",
//               },
//             });
//           }

//           // IMPACT IMAGE PARALLAX
//           const impactImage = select(".impact-image")[0];
//           const impactFrame = select(".impact-frame")[0];

//           if (impactImage && impactFrame) {
//             gsap.fromTo(
//               impactImage,
//               { yPercent: -8, scale: 1.12 },
//               {
//                 yPercent: 8,
//                 scale: 1,
//                 ease: "none",
//                 scrollTrigger: {
//                   trigger: impactFrame,
//                   start: "top bottom",
//                   end: "bottom top",
//                   scrub: 1,
//                 },
//               }
//             );

//             gsap.from(impactFrame, {
//               clipPath: "inset(10% 6% 10% 6%)",
//               duration: 1.5,
//               ease: "power4.out",
//               scrollTrigger: {
//                 trigger: impactFrame,
//                 start: "top 80%",
//               },
//             });
//           }

//           // IMPACT ITEMS
//           const impactItems = select(".impact-item");
//           const metricsGrid = select(".metrics-grid")[0];

//           if (impactItems.length && metricsGrid) {
//             gsap.from(impactItems, {
//               y: 50,
//               opacity: 0,
//               duration: 0.9,
//               stagger: 0.14,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: metricsGrid,
//                 start: "top 85%",
//               },
//             });
//           }

//           // FLOATING DECORATIVE ELEMENTS
//           const floatingElements = select(".organic-float");

//           if (floatingElements.length) {
//             gsap.to(floatingElements, {
//               y: -18,
//               rotation: 8,
//               duration: 4,
//               repeat: -1,
//               yoyo: true,
//               ease: "sine.inOut",
//               stagger: 0.7,
//             });
//           }
//         }
//       );
//     }, element);

//     const refresh = () => ScrollTrigger.refresh();
//     window.addEventListener("load", refresh);

//     return () => {
//       window.removeEventListener("load", refresh);
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={root}
//       className="relative overflow-x-clip bg-ivory text-forest-800"
//     >
//       {/* SCROLL PROGRESS */}
//       <div className="sticky top-0 z-[60] -mb-[3px] h-[3px] w-full">
//         <div className="scroll-progress h-full origin-left scale-x-0 bg-forest-600" />
//       </div>

//       {/* =========================================
//           01 — INTRODUCTION
//       ========================================= */}
//       <div className="living-intro relative px-5 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:py-40">
//         <div className="relative z-10 mx-auto max-w-[1700px]">
//           <div className="intro-detail mb-16 flex items-center justify-between border-b border-forest-800/20 pb-5">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-forest-700" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
//                 About Terra Ecopreneurs
//               </span>
//             </div>

//             <span className="font-mono text-[10px] tracking-widest text-forest-700/50">
//               GROWING TOGETHER — 001
//             </span>
//           </div>

//           <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
//             {/* LEFT CONTENT */}
//             <div className="relative z-10 lg:col-span-7">
//               <h1
//                 aria-label="Building a future where agriculture and nature thrive together."
//                 className="font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] tracking-[-0.09em]"
//               >
//                 <span className="block">
//                   <SplitChars text="Growing a" charClass="intro-char" />
//                 </span>

//                 <span className="block">
//                   <SplitChars text="better" charClass="intro-char" />{" "}
//                   <SplitChars
//                     text="future."
//                     charClass="intro-char"
//                     className="italic text-forest-600"
//                   />
//                 </span>
//               </h1>

//               <div className="intro-detail mt-12 flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
//                 <p className="max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
//                   We are a team of innovators, sustainability advocates, and
//                   problem-solvers committed to transforming agriculture through
//                   meaningful innovation. Together with farmers, communities,
//                   and industry partners, we create opportunities for a more
//                   sustainable future.
//                 </p>

//                 <div className="flex shrink-0 items-center gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/30">
//                     <ArrowDown size={17} />
//                   </div>

//                   <span className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em]">
//                     Discover more
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT VISUAL COMPOSITION */}
//             <div className="intro-visual relative mx-auto h-[480px] w-full max-w-[540px] lg:col-span-5 lg:h-[650px]">
//               <div className="intro-visual-main absolute right-0 top-0 h-[82%] w-[76%] overflow-hidden rounded-t-[180px] rounded-b-[12px] shadow-2xl shadow-forest-900/15">
//                 <img
//                   src={images.agriculture}
//                   alt="Lush green agricultural fields"
//                   className="h-[115%] w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
//               </div>

//               <div className="intro-visual-circle absolute bottom-[3%] left-0 z-10 h-[210px] w-[210px] overflow-hidden rounded-full border-[8px] border-ivory shadow-2xl shadow-forest-900/20 sm:h-[260px] sm:w-[260px] lg:bottom-[5%] lg:h-[290px] lg:w-[290px]">
//                 <img
//                   src={images.forest}
//                   alt="Rich green forest canopy"
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               <div className="organic-float absolute right-[3%] top-[12%] z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-ivory/90 text-forest-700 shadow-lg backdrop-blur-sm sm:h-20 sm:w-20">
//                 <Sprout size={35} strokeWidth={1} />
//               </div>

//               <div className="absolute bottom-[2%] right-[2%] z-20 hidden items-center gap-3 sm:flex">
//                 <span className="h-px w-8 bg-forest-600/60" />
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-700">
//                   Rooted in nature
//                 </span>
//               </div>

//               <div className="pointer-events-none absolute -right-3 top-6 h-[82%] w-[76%] rounded-t-[180px] rounded-b-[12px] border border-forest-800/20" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           02 — ORIGINAL GROW CINEMATIC REVEAL
//       ========================================= */}
//       <div className="hero-pin relative h-[88svh] min-h-[600px] overflow-hidden bg-ivory lg:h-screen">
//         <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
//           <span className="earth-back font-display text-[clamp(5rem,22vw,26rem)] leading-none tracking-[-0.1em] text-transparent [-webkit-text-stroke:1px_rgba(27,67,50,0.28)]">
//             GROW
//           </span>
//         </div>

//         <div className="hero-frame absolute inset-0 z-10 overflow-hidden">
//           <img
//             src={images.aerial}
//             alt="Sunlight over a lush natural landscape"
//             className="intro-image h-full w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-[#122B20]/30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/80 via-transparent to-[#122B20]/10" />
//         </div>

//         <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
//           <span className="font-display text-[clamp(5rem,22vw,26rem)] leading-none tracking-[-0.1em] text-white/[0.12] [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">
//             GROW
//           </span>
//         </div>

//         <div className="organic-float absolute right-[13%] top-[18%] z-30 text-white/70">
//           <Leaf size={55} strokeWidth={0.8} />
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end gap-8 px-6 pb-10 sm:px-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between lg:px-20">
//           <div className="max-w-4xl">
//             <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9E7C9]">
//               <span className="h-px w-10 bg-[#D9E7C9]" />
//               Our purpose
//             </p>

//             <h2 className="font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.87] tracking-[-0.075em] text-white">
//               Agriculture
//               <br />
//               meets
//               <span className="italic text-[#D9E7C9]"> innovation.</span>
//             </h2>
//           </div>

//           <div className="flex max-w-[270px] items-center gap-4 text-white/80">
//             <Globe2 size={30} strokeWidth={1} />

//             <p className="text-xs leading-6">
//               Building stronger agricultural communities through
//               sustainability, innovation, and meaningful partnerships.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           02.5 — WHITE SPLIT VIDEO SECTION
//       ========================================= */}
//       <section className="terra-video-section relative overflow-hidden bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
//         <div className="mx-auto max-w-[1700px]">

//           {/* TOP LABEL */}
//           <div className="mb-12 flex items-center justify-between gap-4 border-b border-forest-800/15 pb-5">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-forest-700" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-forest-700">
//                 The Terra experience
//               </span>
//             </div>

//             <span className="font-mono text-[10px] tracking-widest text-forest-700/50">
//               NATURE IN MOTION — 003
//             </span>
//           </div>

//           {/* SPLIT LAYOUT */}
//           <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

//             {/* LEFT — VIDEO */}
//             <div className="terra-video-frame group relative h-[420px] overflow-hidden rounded-[1.5rem] bg-forest-900 sm:h-[550px] lg:h-[680px]">
//               <video
//                 className="terra-video absolute inset-0 h-full w-full object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="metadata"
//                 poster={images.aerial}
//               >
//                 <source
//                   src="https://media.istockphoto.com/id/2292801163/video/close-up-view-of-engine-gears-rotating-with-metal-chain.mp4?s=mp4-480x480-is&k=20&c=wMbt-yAUFi0xp4jKx894O7bjczc59qJMOvnLVl-XqYc="
//                   type="video/mp4"
//                 />
//                 Your browser does not support HTML5 video.
//               </video>

//               {/* VIDEO OVERLAY */}
//               <div className="absolute inset-0 bg-[#10271D]/15 transition-colors duration-700 group-hover:bg-[#10271D]/5" />

//               {/* VIDEO LABEL */}
//               <div className="absolute left-6 top-6 sm:left-9 sm:top-9">
//                 <span className="rounded-full border border-white/50 bg-black/10 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
//                   Terra / In motion
//                 </span>
//               </div>

//               {/* BOTTOM VIDEO TEXT */}
//               <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
//                 <div className="flex items-center gap-3 text-white">
//                   <span className="h-px w-8 bg-white" />
//                   <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
//                     Nature in every frame
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — CONTENT */}
//             <div className="terra-video-content relative py-6 lg:py-12">

//               <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-forest-600">
//                 <span className="h-px w-10 bg-forest-600" />
//                 Rooted in nature
//               </p>

//               <h2 className="font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.075em] text-forest-900">
//                 Every seed
//                 <br />
//                 <span className="italic text-forest-600">
//                   holds a future.
//                 </span>
//               </h2>

//               <p className="mt-9 max-w-lg text-base leading-8 text-charcoal/65 sm:text-lg">
//                 Every transformation begins with a small step. We believe
//                 in empowering farmers, embracing innovation, and nurturing
//                 a sustainable relationship between people and nature.
//               </p>

//               <div className="mt-12 flex items-center gap-5">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest-800/20 text-forest-700 transition-all duration-500 hover:bg-forest-800 hover:text-white">
//                   <Sprout size={26} strokeWidth={1} />
//                 </div>

//                 <div>
//                   <p className="font-display text-xl tracking-tight text-forest-900">
//                     Growing with purpose.
//                   </p>
//                   <p className="mt-1 text-xs tracking-wide text-charcoal/50">
//                     Building a greener tomorrow, together.
//                   </p>
//                 </div>
//               </div>

//               {/* DECORATIVE DETAIL */}
//               <div className="mt-16 flex items-center gap-4 border-t border-forest-800/15 pt-6">
//                 <span className="font-mono text-xs text-forest-600">
//                   01 / 03
//                 </span>
//                 <div className="h-px flex-1 bg-forest-800/15" />
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-700/50">
//                   Sustainable by nature
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           03 — OUR MISSION / OUR APPROACH
//       ========================================= */}

     

//       {/* MOBILE STACKED STORY */}
//       <div className="block lg:hidden">
//         {CHAPTERS.map((chapter) => (
//           <div
//             key={chapter.no}
//             className="chapter-card relative h-[85vh] min-h-[560px] overflow-hidden bg-[#10271D]"
//           >
//             <img
//               src={chapter.image}
//               alt={chapter.alt}
//               loading="lazy"
//               className="chapter-card-photo absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#10271D]/40" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/90 via-transparent to-[#10271D]/20" />

//             <div className="chapter-card-text absolute inset-x-0 bottom-0 px-6 pb-12 sm:px-12">
//               <div className="mb-5 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />

//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {chapter.no} — {chapter.label}
//                 </span>
//               </div>

//               <h2 className="font-display text-[clamp(3.2rem,13vw,6rem)] leading-[0.9] tracking-[-0.07em] text-white">
//                 {chapter.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">
//                   {chapter.lines[1]}
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
//                 {chapter.body}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* =========================================
//           04 — MARQUEE
//       ========================================= */}
//       <div className="marquee-band overflow-hidden bg-forest-800 py-7 text-ivory">
//         <div className="marquee-track flex w-max items-center whitespace-nowrap">
//           {[0, 1].map((copy) => (
//             <div
//               key={copy}
//               className="flex items-center"
//               aria-hidden={copy === 1}
//             >
//               {MARQUEE_WORDS.map((word) => (
//                 <span
//                   key={`${copy}-${word}`}
//                   className="flex items-center"
//                 >
//                   <span className="px-8 font-display text-5xl tracking-[-0.05em] sm:text-7xl">
//                     {word}
//                   </span>

//                   <Leaf
//                     size={34}
//                     strokeWidth={1}
//                     className="text-[#B5F27E]"
//                   />
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* =========================================
//           05 — WHAT DRIVES US
//       ========================================= */}
//       <div className="pillars-section relative overflow-hidden bg-[#E7EBDD] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//                 The Terra mindset
//               </p>

//              <h2 className="whitespace-nowrap font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.9] tracking-[-0.075em]">
//   What drives{" "}
//   <span className="italic text-forest-600">us forward.</span>
// </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-7 text-charcoal/65">
//               Our values shape every decision we make and every partnership
//               we build. They guide us towards meaningful and lasting change.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
//             {PILLARS.map((pillar) => {
//               const Icon = pillar.icon;

//               return (
//                 <div
//                   key={pillar.no}
//                   className="pillar group relative min-h-[390px] overflow-hidden rounded-[1.8rem] border border-forest-800/15 p-7 transition-colors duration-700 hover:border-forest-800 sm:p-9"
//                 >
//                   <span className="absolute inset-0 translate-y-full bg-forest-800 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

//                   <div className="relative z-10 flex h-full flex-col transition-colors duration-500 group-hover:text-white">
//                     <div className="flex items-start justify-between">
//                       <span className="font-mono text-xs text-forest-600 transition-colors duration-500 group-hover:text-[#B5F27E]">
//                         {pillar.no} /
//                       </span>

//                       <ArrowUpRight
//                         size={20}
//                         className="translate-x-0 translate-y-0 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
//                       />
//                     </div>

//                     <div className="my-auto py-12">
//                       <Icon
//                         size={65}
//                         strokeWidth={0.8}
//                         className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
//                       />
//                     </div>

//                     <div>
//                       <h3 className="font-display text-3xl tracking-[-0.055em] sm:text-4xl">
//                         {pillar.title[0]}
//                         <br />
//                         {pillar.title[1]}
//                       </h3>

//                       <p className="mt-5 max-w-xs text-sm leading-7 text-charcoal/65 transition-colors duration-500 group-hover:text-white/75">
//                         {pillar.body}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

   
//     </section>
//   );
// }

import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Handshake,
  Leaf,
  Sprout,
  Users,
  Globe2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import growthVideo from "../../assets/solarvideo.mp4";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const images = {
  forest:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90",
  aerial:
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=90",
  landscape:
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2400&q=90",
  canopy:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=90",
  agriculture:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90",
};

const HERO_TAGS = [
  { label: "Farms", icon: Sprout },
  { label: "Communities", icon: Users },
  { label: "Partners", icon: Handshake },
  { label: "Nature", icon: Leaf },
];

/* -------------------------------------------------------------------------- */
/*  SMALL HELPERS                                                             */
/* -------------------------------------------------------------------------- */

/** Masked line — the inner span slides up from beneath its parent. */
function Line({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block overflow-hidden ${className}`}
    >
      <span className="line-inner block will-change-transform">
        {children}
      </span>
    </span>
  );
}

/** Rotating circular text badge — text is fitted exactly to the circle. */
function SpinBadge() {
  return (
    <div className="relative h-32 w-32 rounded-full bg-ivory shadow-xl shadow-forest-900/15 sm:h-40 sm:w-40">
      <svg
        viewBox="0 0 200 200"
        className="spin-badge absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <path
            id="badge-circle"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>
        <text
          className="fill-forest-800"
          style={{ fontSize: 15, fontWeight: 600 }}
        >
          <textPath
            href="#badge-circle"
            textLength="448"
            lengthAdjust="spacing"
          >
            GROW TOGETHER • A GREENER TOMORROW •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-[#B5F27E] sm:h-[68px] sm:w-[68px]">
          <Sprout size={34} strokeWidth={1.4} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  COMPONENT                                                                 */
/* -------------------------------------------------------------------------- */

export function BrandIntro() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(element);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        const cleanups: Array<() => void> = [];

        /* ---------- scroll progress ---------- */
        gsap.to(q(".scroll-progress"), {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });

        /* ---------- 01 HERO ENTRANCE ---------- */
        const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
        heroTl
          .from(q(".hero-line .line-inner"), {
            yPercent: 115,
            rotate: 3,
            duration: 1.3,
            stagger: 0.12,
          })
          .from(
            q(".hero-fade"),
            { y: 24, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out" },
            0.7
          )
          // shapes rise & unmask
          .from(
            q(".hero-shape"),
            {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 1.5,
              stagger: 0.14,
              ease: "power4.inOut",
              clearProps: "clipPath",
            },
            0.5
          )
          .from(
            q(".hero-shape-img"),
            { scale: 1.45, duration: 1.8, stagger: 0.14, ease: "power3.out" },
            0.5
          )
          .from(
            q(".hero-pop"),
            {
              scale: 0,
              opacity: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "back.out(1.7)",
            },
            1.4
          )
          .from(
            q(".hero-ring"),
            { scale: 0.7, opacity: 0, duration: 1.6, ease: "power3.out" },
            0.4
          );

        /* scroll-linked parallax inside each shape */
        q(".hero-shape-img").forEach((img, i) => {
          gsap.to(img, {
            yPercent: i % 2 === 0 ? -8 : 8,
            ease: "none",
            scrollTrigger: {
              trigger: q(".hero-gallery")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        /* ambient loops */
        gsap.to(q(".spin-badge"), {
          rotate: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });

        gsap.to(q(".hero-ring"), {
          rotate: 360,
          duration: 90,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });

        gsap.to(q(".organic-float"), {
          y: -16,
          rotation: 8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.7,
        });

        /* ---------- mouse-driven depth (desktop) ---------- */
        if (isDesktop && window.matchMedia("(hover: hover)").matches) {
          const heroRoot = q(".hero-root")[0] as HTMLElement | undefined;
          const depthEls = q(".depth") as HTMLElement[];

          if (heroRoot && depthEls.length) {
            const movers = depthEls.map((el) => ({
              depth: parseFloat(el.dataset.depth || "0"),
              x: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
              y: gsap.quickTo(el, "y", { duration: 1, ease: "power3.out" }),
            }));

            const onMove = (e: PointerEvent) => {
              const r = heroRoot.getBoundingClientRect();
              const nx = (e.clientX - r.left) / r.width - 0.5;
              const ny = (e.clientY - r.top) / r.height - 0.5;
              movers.forEach((m) => {
                m.x(-nx * m.depth * 60);
                m.y(-ny * m.depth * 60);
              });
            };
            const onLeave = () =>
              movers.forEach((m) => {
                m.x(0);
                m.y(0);
              });

            heroRoot.addEventListener("pointermove", onMove);
            heroRoot.addEventListener("pointerleave", onLeave);
            cleanups.push(() => {
              heroRoot.removeEventListener("pointermove", onMove);
              heroRoot.removeEventListener("pointerleave", onLeave);
            });
          }
        }

        /* ---------- 02 GROW (pinned expand) ---------- */
        const growPin = q(".grow-pin")[0];
        const growFrame = q(".grow-frame")[0];
        const growImg = q(".grow-img")[0];
        if (growPin && growFrame && growImg) {
          const growVideo = q(".grow-video")[0] as HTMLVideoElement | undefined;
          let videoPlayAttempted = false;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: growPin,
              start: "top top",
              end: isDesktop ? "+=140%" : "+=90%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              onUpdate: (self) => {
                if (!growVideo) return;

                if (self.progress >= 0.84 && !videoPlayAttempted) {
                  videoPlayAttempted = true;
                  void growVideo.play().catch((error: unknown) => {
                    if (error instanceof DOMException && error.name === "AbortError") {
                      return;
                    }
                    growVideo.controls = true;
                    console.error("Unable to autoplay the GROWTH video.", error);
                  });
                } else if (self.progress < 0.8 && videoPlayAttempted) {
                  growVideo.pause();
                  videoPlayAttempted = false;
                }
              },
            },
          });

          tl.fromTo(
            growFrame,
            { clipPath: "inset(22% 34% 22% 34% round 999px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              ease: "none",
              duration: 0.66,
            },
            0
          )
            .fromTo(
              growImg,
              { scale: 1.4 },
              { scale: 1, ease: "none", duration: 0.66 },
              0
            )
            .fromTo(
              q(".grow-word-l"),
              { xPercent: 0 },
              { xPercent: -38, ease: "none", duration: 0.66 },
              0
            )
            .fromTo(
              q(".grow-word-r"),
              { xPercent: 0 },
              { xPercent: 38, ease: "none", duration: 0.66 },
              0
            )
            .to(
              q(".grow-word-l, .grow-word-r, .grow-annotation"),
              { autoAlpha: 0, ease: "none", duration: 0.2 },
              0.8
            )
            .to(
              growFrame,
              { autoAlpha: 0, ease: "none", duration: 0.2 },
              0.8
            )
            .fromTo(
              growVideo ?? [],
              { autoAlpha: 0 },
              { autoAlpha: 1, ease: "none", duration: 0.2 },
              0.8
            )
            .fromTo(
              q(".grow-caption"),
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, ease: "power3.out", duration: 0.45 },
              0.6
            );

          if (growVideo) {
            cleanups.push(() => growVideo.pause());
          }
        }

        return () => cleanups.forEach((fn) => fn());
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const growFrame = q(".grow-frame")[0];
        const growVideo = q(".grow-video")[0] as HTMLVideoElement | undefined;
        if (!growFrame || !growVideo) return;

        gsap.set(growFrame, { autoAlpha: 0 });
        gsap.set(q(".grow-word-l"), { autoAlpha: 0 });
        gsap.set(q(".grow-word-r"), { autoAlpha: 0 });
        gsap.set(q(".grow-annotation"), { autoAlpha: 0 });
        gsap.set(growVideo, { autoAlpha: 1 });
        growVideo.controls = true;

        return () => {
          growVideo.pause();
          growVideo.controls = false;
        };
      });
    }, element);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-x-clip bg-ivory text-forest-800"
    >
      {/* SCROLL PROGRESS */}
      <div className="sticky top-0 z-[60] -mb-[3px] h-[3px] w-full">
        <div className="scroll-progress h-full origin-left scale-x-0 bg-forest-600" />
      </div>

      {/* ====================================================================
          01 — HERO
      ==================================================================== */}
      <header className="hero-root relative overflow-hidden px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-14 lg:py-16">
        {/* dotted texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(27,67,50,0.13) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at 70% 60%, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 70% 60%, black 0%, transparent 70%)",
          }}
        />
        {/* soft glows */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#E7EBDD] blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#D9E7C9]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1700px]">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* LEFT — message and values */}
            <div className="hero-copy lg:col-span-5">
              <div className="hero-fade flex items-center gap-4">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-[#B5F27E]/70 bg-[#EAF2D7] px-4 py-2.5 text-sm font-semibold text-forest-700 shadow-sm shadow-forest-900/5">
                  <Leaf size={19} strokeWidth={1.8} />
                  Green Future Together
                </span>
                <span className="hidden h-px w-20 bg-forest-700/45 sm:block" />
              </div>

              <h1
                aria-label="We are a team of innovators, sustainability advocates, and problem-solvers committed to transforming agriculture through meaningful innovation."
                className="mt-7 font-heading text-[clamp(1.35rem,2.4vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.055em] text-charcoal sm:text-[clamp(1.65rem,2.4vw,2.9rem)]"
              >
                <span aria-hidden="true">
                  <Line className="hero-line">We are a team of innovators,</Line>
                  <Line className="hero-line">
                    <span className="text-forest-600">sustainability advocates,</span>
                  </Line>
                  <Line className="hero-line">and problem-solvers committed</Line>
                  <Line className="hero-line">to transforming agriculture</Line>
                  <Line className="hero-line">
                    through{" "}
                    <span className="text-forest-600">meaningful innovation.</span>
                  </Line>
                </span>
              </h1>

              <p className="hero-fade mt-6 max-w-xl font-body text-base leading-7 text-charcoal/65 sm:text-lg sm:leading-8">
                Together with farmers, communities, and industry partners, we
                create opportunities for a more sustainable future.
              </p>

              <div className="hero-fade mt-8 flex flex-wrap items-center gap-x-4 gap-y-6 xl:flex-nowrap">
                <a
                  href="#grow"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-forest-800 py-2 pl-6 pr-2 text-sm font-semibold text-ivory shadow-lg shadow-forest-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
                >
                  Discover More
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B5F27E] text-forest-900 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight size={20} />
                  </span>
                </a>

                <span
                  aria-hidden="true"
                  className="hidden h-14 w-px shrink-0 bg-forest-800/10 xl:block"
                />

                <ul className="grid w-full max-w-[280px] grid-cols-4 gap-1 sm:w-auto">
                  {HERO_TAGS.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex min-w-[58px] flex-col items-center gap-2 text-center"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E6B8] bg-[#EDF4DF] text-forest-700 transition-all duration-300 hover:-translate-y-1 hover:bg-[#DDEBC6]">
                        <Icon size={23} strokeWidth={1.7} />
                      </span>
                      <span className="text-[9px] font-medium text-charcoal/65 sm:text-[10px]">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — layered landscape gallery */}
            <div className="hero-gallery relative h-[390px] sm:h-[520px] lg:col-span-7 lg:mt-0 lg:h-[620px]">
              {/* orbit ring */}
              <svg
                viewBox="0 0 600 600"
                className="hero-ring pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 text-forest-700/25"
                aria-hidden="true"
              >
                <circle
                  cx="300"
                  cy="300"
                  r="290"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 10"
                />
                <circle cx="300" cy="10" r="6" fill="#B5F27E" />
              </svg>

              {/* sun glow behind arch */}
              <div className="pointer-events-none absolute bottom-[12%] left-[8%] h-[55%] w-[40%] rounded-full bg-[#B5F27E]/40 blur-3xl" />

              {/* ARCH — sunset field */}
              <div
                data-depth="0.45"
                className="depth absolute bottom-0 left-[1%] z-10 h-[92%] w-[66%]"
              >
                <div className="hero-shape group relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] border border-white/60 shadow-2xl shadow-forest-900/25">
                  <img
                    src={images.agriculture}
                    alt="Lush green agricultural fields"
                    className="hero-shape-img h-[120%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/35 via-transparent to-transparent" />
                </div>
              </div>

              {/* CIRCLE — landscape */}
              <div
                data-depth="0.8"
                className="depth absolute left-[46%] top-[2%] z-20 w-[38%]"
              >
                <div className="hero-shape group aspect-square overflow-hidden rounded-full border-[6px] border-ivory shadow-2xl shadow-forest-900/20 sm:border-8">
                  <img
                    src={images.landscape}
                    alt="Open landscape under a wide sky"
                    className="hero-shape-img h-[120%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* DARK CARD */}
              <div
                data-depth="1.1"
                className="depth absolute bottom-0 left-[55%] z-30 h-[30%] w-[40%]"
              >
                <div className="hero-shape group flex h-full w-full cursor-default items-center justify-between overflow-hidden rounded-2xl bg-forest-800 px-4 text-ivory shadow-2xl shadow-forest-900/30 transition-colors duration-500 hover:bg-forest-700 sm:px-7">
                  <div>
                    <p className="font-mono text-[8px] tracking-widest text-[#B5F27E] sm:text-[10px]">
                      EST. WITH PURPOSE
                    </p>
                    <p className="mt-2 font-display text-lg leading-tight tracking-[-0.04em] sm:text-3xl">
                      Farmers
                      <br />
                      <span className="italic text-[#D9E7C9]">first.</span>
                    </p>
                  </div>
                  <ArrowUpRight
                    size={26}
                    strokeWidth={1}
                    className="shrink-0 text-[#B5F27E] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* TALL PILL — forest */}
              <div
                data-depth="0.6"
                className="depth absolute bottom-0 right-0 z-10 h-[78%] w-[25%]"
              >
                <div className="hero-shape group h-full w-full overflow-hidden rounded-[999px] border-[5px] border-ivory/90 shadow-2xl shadow-forest-900/25">
                  <img
                    src={images.canopy}
                    alt="Sunlight through a forest canopy"
                    className="hero-shape-img h-[120%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* SPIN BADGE */}
              <div
                data-depth="1.4"
                className="depth absolute left-[37%] top-[1%] z-40 hidden sm:block"
              >
                <div className="hero-pop organic-float">
                  <SpinBadge />
                </div>
              </div>

              {/* FLOATING LEAF */}
              <div
                data-depth="1.6"
                className="depth absolute right-[24%] top-[26%] z-30 hidden text-forest-600 lg:block"
              >
                <div className="hero-pop organic-float">
                  <Leaf size={48} strokeWidth={0.9} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          02 — GROW · PINNED EXPANDING REVEAL
      ==================================================================== */}
      <div
        id="grow"
        className="grow-pin relative h-[100svh] min-h-[620px] overflow-hidden bg-forest-900"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(33,82,52,0.9)_0%,#09271c_42%,#041711_100%)]"
        />
        <video
          className="grow-video absolute inset-0 z-0 h-full w-full object-cover opacity-0"
          muted
          loop
          playsInline
          preload="metadata"
          poster={images.aerial}
          aria-label="Solar energy supporting a more sustainable future"
        >
          <source src={growthVideo} type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            background:
              "linear-gradient(to top, rgba(4, 24, 17, 0.82) 0%, rgba(4, 24, 17, 0.12) 48%, rgba(4, 24, 17, 0.22) 100%)",
          }}
        />

        {/* split words that part to reveal the image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center gap-[1.2vw] px-3"
        >
          <div className="grow-annotation absolute left-1/2 top-[19%] flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md sm:text-[10px]">
            <span className="text-[#B5F27E]">01</span>
            <span className="h-px w-6 bg-[#B5F27E]/70" />
            <span>Rooted in nature</span>
          </div>
          <span className="grow-word-l font-display text-[clamp(4.5rem,15.5vw,17rem)] leading-none tracking-[-0.09em] text-[#F5F3EA] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            GRO
          </span>
          <span className="grow-word-r font-display text-[clamp(4.5rem,15.5vw,17rem)] leading-none tracking-[-0.09em] text-[#F5F3EA] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            WTH
          </span>
          <div className="grow-annotation absolute bottom-[13%] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.25em] text-white/65 sm:text-[10px]">
            <span className="h-px w-8 bg-[#B5F27E]/80" />
            Scroll to reveal
            <ArrowUpRight size={14} className="rotate-45 text-[#B5F27E]" />
          </div>
        </div>

        <div className="grow-frame absolute inset-0 z-10 overflow-hidden">
          <img
            src={images.aerial}
            alt="Sunlight over a lush natural landscape"
            className="grow-img h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#122B20]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/85 via-transparent to-[#122B20]/10" />
        </div>

        <div className="grow-caption absolute inset-x-0 bottom-0 z-40 flex flex-col gap-8 px-6 pb-10 sm:px-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between lg:px-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9E7C9] sm:mb-6">
              <span className="h-px w-10 bg-[#D9E7C9]" />
              Growing with purpose
            </p>
            <h2 className="font-display text-[clamp(3rem,8vw,9rem)] leading-[0.88] tracking-[-0.075em] text-white">
              Agriculture meets
              <br />
              <span className="italic text-[#D9E7C9]">innovation.</span>
            </h2>
          </div>

          <div className="flex max-w-[360px] items-center gap-4 rounded-2xl border border-white/15 bg-[#061D16]/40 p-4 text-white/85 shadow-2xl shadow-black/10 backdrop-blur-md sm:p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B5F27E]/30 bg-[#B5F27E]/10 text-[#D9E7C9]">
              <Globe2 size={25} strokeWidth={1.2} />
            </span>
            <div>
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B5F27E]">
                Shared progress
              </p>
              <p className="text-xs leading-5 sm:text-[13px] sm:leading-6">
                Building stronger agricultural communities through
                sustainability, innovation, and meaningful partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}