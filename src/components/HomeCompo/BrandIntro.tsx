// import { Link } from 'react-router-dom';
// import { ArrowUpRight, Leaf, Zap, Sprout } from 'lucide-react';
// import { company } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';

// export function BrandIntro() {
//   return (
//     <section className="relative isolate overflow-hidden bg-ivory py-20 sm:py-24 md:py-32">
//       {/* Subtle background accents */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-sage-400/15 blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-forest-600/5 blur-3xl"
//       />

//       <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
//         {/* Intro copy */}
//         <div className="lg:col-span-6">
//           <Reveal>
//             <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-forest-600">
//               <span className="h-px w-10 bg-forest-600" />
//               Who we are
//             </p>
//           </Reveal>

//           <MaskedLines
//             lines={[
//               'Nature inspires.',
//               'Engineering transforms.',
//               'Impact defines us.',
//             ]}
//             className="headline-lg max-w-4xl text-forest-800"
//           />

//           <Reveal delay={250}>
//             <p className="mt-7 max-w-2xl font-body text-base leading-8 text-charcoal/80 sm:text-lg">
//               {company.intro}
//             </p>
//           </Reveal>

//           <Reveal delay={350}>
//             <Link
//               to="/about"
//               className="group mt-8 inline-flex items-center gap-3 rounded-full border border-forest-800/20 bg-white/70 px-5 py-3 font-heading text-sm font-semibold text-forest-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-forest-800/50 hover:bg-white hover:shadow-md"
//             >
//               <span>The Terra story</span>
//               <ArrowUpRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </Link>
//           </Reveal>

//           <Reveal delay={450}>
//             <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-forest-800/10 pt-6">
//               <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-forest-700/75">
//                 <Leaf size={15} />
//                 Planet-minded
//               </span>
//               <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-forest-700/75">
//                 <Zap size={15} />
//                 Engineering-led
//               </span>
//               <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-forest-700/75">
//                 <Sprout size={15} />
//                 Built for lasting impact
//               </span>
//             </div>
//           </Reveal>
//         </div>

//         {/* Editorial image and unboxed figures */}
//         <div className="lg:col-span-6">
//           <Reveal delay={150}>
//             <figure className="group relative">
//               <div className="relative h-[360px] overflow-hidden rounded-tl-[120px] rounded-br-[120px] bg-forest-800 sm:h-[460px] lg:h-[520px]">
//                 <img
//                   src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85"
//                   alt="Solar panels generating clean energy"
//                   loading="eager"
//                   referrerPolicy="no-referrer"
//                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/75 via-transparent to-[#071610]/10" />

//                 <figcaption className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10">
//                   <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-sage-400">
//                     Energy &amp; engineering
//                   </span>
//                   <span className="block max-w-md font-display text-3xl leading-tight sm:text-4xl">
//                     Measured savings.
//                     <br />
//                     Made to last.
//                   </span>
//                 </figcaption>

//                 <span className="absolute right-6 top-6 font-mono text-xs tracking-widest text-white/85 sm:right-8 sm:top-8">
//                   TERRA / 01
//                 </span>
//               </div>
//             </figure>
//           </Reveal>

//           <Reveal delay={300}>
//             <div className="mt-7 grid grid-cols-2 border-t border-forest-800/15 pt-5">
//               <div className="pr-5 sm:pr-8">
//                 <p className="font-display text-4xl font-medium tracking-tight text-forest-800 sm:text-5xl">
//                   10<span className="text-forest-600">+</span>
//                 </p>
//                 <p className="mt-2 text-xs leading-relaxed text-charcoal/70 sm:text-sm">
//                   years of engineering for the real world
//                 </p>
//               </div>

//               <div className="border-l border-forest-800/15 pl-5 sm:pl-8">
//                 <p className="font-display text-4xl font-medium tracking-tight text-forest-800 sm:text-5xl">
//                   3
//                 </p>
//                 <p className="mt-2 text-xs leading-relaxed text-charcoal/70 sm:text-sm">
//                   verticals united by one purpose
//                 </p>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Fragment, useLayoutEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Leaf,
//   Sprout,
//   MoveUpRight,
//   Globe2,
//   Wind,
// } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { company } from "@/lib/content";

// gsap.registerPlugin(ScrollTrigger);

// const images = {
//   forest:
//     "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90",
//   aerial:
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=90",
//   leaf:
//     "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1500&q=90",
//   landscape:
//     "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=90",
//   canopy:
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=90",
//   valley:
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=90",
// };

// const CHAPTERS = [
//   {
//     no: "01",
//     label: "Nature inspired",
//     lines: ["Look to", "the forest."],
//     body: "Every forest runs on systems that waste nothing and adapt constantly. We start there, learning from nature before we design anything.",
//     image: images.forest,
//     alt: "Deep green forest with natural light",
//   },
//   {
//     no: "02",
//     label: "Thoughtful innovation",
//     lines: ["Engineer", "with care."],
//     body: "Practical engineering and clean energy, shaped by what we have learned from the natural world and built for real operations.",
//     image: images.canopy,
//     alt: "Sunlight filtering through a forest canopy",
//   },
//   {
//     no: "03",
//     label: "Lasting impact",
//     lines: ["Leave it", "better."],
//     body: "We measure success by the difference that stays behind: lower costs, stronger livelihoods and a healthier planet.",
//     image: images.valley,
//     alt: "Green valley landscape at sunrise",
//   },
// ];

// const MARQUEE_WORDS = ["Nature inspired", "Thoughtful innovation", "Lasting impact"];

// const METRICS = [
//   { value: 10, suffix: "+", pad: 2, label: "Years of experience" },
//   { value: 3, suffix: "", pad: 2, label: "Connected verticals" },
//   { value: 1, suffix: "", pad: 2, label: "Shared purpose" },
//   { value: null, suffix: "", pad: 0, label: "Possibilities ahead" },
// ];

// /* ---------- text splitting helpers (no paid GSAP plugin needed) ---------- */

// function SplitChars({
//   text,
//   charClass,
//   className = "",
// }: {
//   text: string;
//   charClass: string;
//   className?: string;
// }) {
//   const words = text.split(" ");
//   return (
//     <span className={className} aria-hidden="true">
//       {words.map((word, wi) => (
//         <Fragment key={wi}>
//           <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
//             {Array.from(word).map((char, ci) => (
//               <span
//                 key={ci}
//                 className={`${charClass} inline-block will-change-transform`}
//               >
//                 {char}
//               </span>
//             ))}
//           </span>
//           {wi < words.length - 1 ? " " : null}
//         </Fragment>
//       ))}
//     </span>
//   );
// }

// function SplitWords({ text }: { text: string }) {
//   return (
//     <>
//       {text.split(" ").map((word, i) => (
//         <span key={i} className="scrub-word mr-[0.25em] inline-block">
//           {word}
//         </span>
//       ))}
//     </>
//   );
// }

// export function BrandIntro() {
//   const root = useRef<HTMLElement>(null);

//   const [reduced] = useState(
//     () =>
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   );

//   useLayoutEffect(() => {
//     const element = root.current;
//     if (!element) return;

//     const refresh = () => ScrollTrigger.refresh();
//     window.addEventListener("load", refresh);

//     const mm = gsap.matchMedia();

//     mm.add(
//       {
//         desktop: "(min-width: 1024px)",
//         mobile: "(max-width: 1023px)",
//         reducedMotion: "(prefers-reduced-motion: reduce)",
//       },
//       (context) => {
//         const conditions = context.conditions as {
//           desktop: boolean;
//           mobile: boolean;
//           reducedMotion: boolean;
//         };

//         if (conditions.reducedMotion) return;

//         const select = gsap.utils.selector(element);
//         const cleanups: Array<() => void> = [];

//         /* ---------- PAGE SCROLL PROGRESS ---------- */
//         gsap.fromTo(
//           select(".scroll-progress"),
//           { scaleX: 0 },
//           {
//             scaleX: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: element,
//               start: "top top",
//               end: "bottom bottom",
//               scrub: 0.3,
//             },
//           }
//         );

//         /* ---------- 01 INTRO ---------- */
//         gsap.from(select(".intro-char"), {
//           yPercent: 120,
//           rotate: 5,
//           duration: 1.3,
//           stagger: 0.028,
//           ease: "power4.out",
//           scrollTrigger: { trigger: select(".living-intro")[0], start: "top 80%" },
//         });

//         gsap.from(select(".intro-detail"), {
//           y: 28,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.14,
//           delay: 0.35,
//           ease: "power3.out",
//           scrollTrigger: { trigger: select(".living-intro")[0], start: "top 80%" },
//         });

//         if (conditions.desktop) {
//           select(".intro-card").forEach((card, i) => {
//             gsap.fromTo(
//               card,
//               { y: i % 2 === 0 ? 40 : -20, opacity: 0, rotate: i % 2 === 0 ? -6 : 6 },
//               {
//                 y: i % 2 === 0 ? -140 : 120,
//                 opacity: 1,
//                 rotate: i % 2 === 0 ? 3 : -3,
//                 ease: "none",
//                 scrollTrigger: {
//                   trigger: select(".living-intro")[0],
//                   start: "top 85%",
//                   end: "bottom top",
//                   scrub: 1,
//                 },
//               }
//             );
//           });
//         }

//         /* ---------- 02 HERO: ARCH EXPANDS TO FULL BLEED ---------- */
//         const heroPin = select(".hero-pin")[0];
//         const heroFrame = select(".hero-frame")[0];
//         const heroImage = select(".intro-image")[0];

//         if (heroPin && heroFrame && heroImage) {
//           const archFrom =
//             "inset(14% 32% 10% 32% round 50% 50% 0% 0%)";
//           const archTo = "inset(0% 0% 0% 0% round 0% 0% 0% 0%)";

//           if (conditions.desktop) {
//             gsap
//               .timeline({
//                 scrollTrigger: {
//                   trigger: heroPin,
//                   start: "top top",
//                   end: "+=130%",
//                   pin: true,
//                   scrub: 1,
//                   anticipatePin: 1,
//                 },
//               })
//               .fromTo(
//                 heroFrame,
//                 { clipPath: archFrom },
//                 { clipPath: archTo, ease: "none", duration: 1 },
//                 0
//               )
//               .fromTo(
//                 heroImage,
//                 { scale: 1.4 },
//                 { scale: 1, ease: "none", duration: 1 },
//                 0
//               )
//               .fromTo(
//                 select(".earth-back"),
//                 { scale: 0.85, opacity: 0.4 },
//                 { scale: 1.15, opacity: 0, ease: "none", duration: 1 },
//                 0
//               )
//               .fromTo(
//                 select(".earth-front"),
//                 { opacity: 0, scale: 0.9 },
//                 { opacity: 1, scale: 1, ease: "power2.out", duration: 0.6 },
//                 0.35
//               )
//               .fromTo(
//                 select(".hero-bottom"),
//                 { y: 70, opacity: 0 },
//                 { y: 0, opacity: 1, ease: "power3.out", duration: 0.5 },
//                 0.6
//               )
//               .to({}, { duration: 0.4 });
//           } else {
//             gsap.fromTo(
//               heroFrame,
//               { clipPath: archFrom },
//               {
//                 clipPath: archTo,
//                 duration: 1.7,
//                 ease: "power4.out",
//                 scrollTrigger: { trigger: heroPin, start: "top 75%" },
//               }
//             );
//             gsap.to(heroImage, {
//               yPercent: 12,
//               scale: 1.1,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: heroPin,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//               },
//             });
//           }
//         }

//         /* ---------- 03 CINEMATIC CHAPTERS ---------- */
//         if (conditions.desktop) {
//           const pin = select(".chapters-pin")[0];
//           const imgs = select(".chapter-img");
//           const photos = select(".chapter-photo");
//           const texts = select(".chapter-text");
//           const dots = select(".chapter-dot");

//           if (pin && imgs.length) {
//             gsap.set(imgs.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
//             gsap.set(texts.slice(1), { opacity: 0, y: 70 });
//             gsap.set(dots.slice(1), { opacity: 0.35, height: 16 });

//             const story = gsap.timeline({
//               scrollTrigger: {
//                 trigger: pin,
//                 start: "top top",
//                 end: "+=320%",
//                 pin: true,
//                 scrub: 1,
//                 anticipatePin: 1,
//               },
//             });

//             story
//               .fromTo(
//                 photos[0],
//                 { scale: 1.25 },
//                 { scale: 1.05, duration: 2, ease: "none" },
//                 0
//               )
//               .fromTo(
//                 texts[0],
//                 { y: 70, opacity: 0 },
//                 { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//                 0.1
//               );

//             for (let i = 1; i < imgs.length; i++) {
//               const t = i * 2;
//               story
//                 .to(
//                   texts[i - 1],
//                   { opacity: 0, y: -60, duration: 0.6, ease: "power2.in" },
//                   t - 0.2
//                 )
//                 .to(
//                   imgs[i],
//                   {
//                     clipPath: "inset(0% 0% 0% 0%)",
//                     duration: 1.2,
//                     ease: "power2.inOut",
//                   },
//                   t - 0.2
//                 )
//                 .fromTo(
//                   photos[i],
//                   { scale: 1.3 },
//                   { scale: 1.05, duration: 2, ease: "none" },
//                   t - 0.2
//                 )
//                 .to(
//                   texts[i],
//                   { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
//                   t + 0.5
//                 )
//                 .to(dots[i - 1], { opacity: 0.35, height: 16, duration: 0.4 }, t)
//                 .to(dots[i], { opacity: 1, height: 56, duration: 0.4 }, t);
//             }

//             story.to({}, { duration: 0.8 });
//           }
//         } else {
//           select(".chapter-card").forEach((card) => {
//             gsap.from(card.querySelector(".chapter-card-photo"), {
//               scale: 1.2,
//               duration: 1.6,
//               ease: "power3.out",
//               scrollTrigger: { trigger: card, start: "top 80%" },
//             });
//             gsap.from(card.querySelector(".chapter-card-text"), {
//               y: 50,
//               opacity: 0,
//               duration: 1,
//               ease: "power3.out",
//               scrollTrigger: { trigger: card, start: "top 65%" },
//             });
//           });
//         }

//         /* ---------- MARQUEE BAND (speeds up with scroll) ---------- */
//         const track = select(".marquee-track")[0];
//         if (track) {
//           const marquee = gsap.to(track, {
//             xPercent: -50,
//             duration: 38,
//             ease: "none",
//             repeat: -1,
//           });

//           ScrollTrigger.create({
//             trigger: select(".marquee-band")[0],
//             start: "top bottom",
//             end: "bottom top",
//             onUpdate: (self) => {
//               const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 300, 5);
//               gsap.killTweensOf(marquee);
//               marquee.timeScale(self.direction * boost);
//               gsap.to(marquee, {
//                 timeScale: self.direction,
//                 duration: 1.2,
//                 ease: "power3.out",
//               });
//             },
//           });
//         }

//         /* ---------- 04 PHILOSOPHY ---------- */
//         gsap.from(select(".phil-char"), {
//           yPercent: 120,
//           rotate: 4,
//           duration: 1.2,
//           stagger: 0.03,
//           ease: "power4.out",
//           scrollTrigger: { trigger: select(".philosophy-section")[0], start: "top 75%" },
//         });

//         gsap.fromTo(
//           select(".scrub-word"),
//           { opacity: 0.14 },
//           {
//             opacity: 1,
//             ease: "none",
//             stagger: 0.12,
//             scrollTrigger: {
//               trigger: select(".scrub-paragraph")[0],
//               start: "top 80%",
//               end: "bottom 50%",
//               scrub: true,
//             },
//           }
//         );

//         gsap.to(select(".philosophy-image"), {
//           yPercent: -12,
//           ease: "none",
//           scrollTrigger: {
//             trigger: select(".philosophy-image-wrap")[0],
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//           },
//         });

//         gsap.from(select(".philosophy-image-wrap"), {
//           clipPath: "inset(30% 20% 0% 20% round 50% 50% 0% 0%)",
//           duration: 1.6,
//           ease: "power4.out",
//           scrollTrigger: { trigger: select(".philosophy-image-wrap")[0], start: "top 85%" },
//         });

//         /* ---------- 05 PILLARS ---------- */
//         gsap.from(select(".pillar"), {
//           y: 90,
//           opacity: 0,
//           duration: 1.1,
//           stagger: 0.18,
//           ease: "power3.out",
//           scrollTrigger: { trigger: select(".pillars-section")[0], start: "top 75%" },
//         });

//         /* ---------- 06 IMPACT ---------- */
//         gsap.fromTo(
//           select(".impact-image"),
//           { yPercent: -8, scale: 1.15 },
//           {
//             yPercent: 8,
//             scale: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: select(".impact-frame")[0],
//               start: "top bottom",
//               end: "bottom top",
//               scrub: 1,
//             },
//           }
//         );

//         gsap.from(select(".impact-frame"), {
//           clipPath: "inset(12% 8% 12% 8%)",
//           duration: 1.6,
//           ease: "power4.out",
//           scrollTrigger: { trigger: select(".impact-frame")[0], start: "top 80%" },
//         });

//         gsap.from(select(".impact-item"), {
//           y: 70,
//           opacity: 0,
//           duration: 1.1,
//           stagger: 0.18,
//           ease: "power3.out",
//           scrollTrigger: { trigger: select(".metrics-grid")[0], start: "top 85%" },
//         });

//         select(".count").forEach((el) => {
//           const end = Number(el.dataset.count);
//           const pad = Number(el.dataset.pad || 0);
//           const suffix = el.dataset.suffix || "";
//           const counter = { v: 0 };
//           el.textContent = "0".padStart(pad, "0") + suffix;

//           gsap.to(counter, {
//             v: end,
//             duration: 2.2,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 88%" },
//             onUpdate: () => {
//               el.textContent =
//                 String(Math.round(counter.v)).padStart(pad, "0") + suffix;
//             },
//           });
//         });

//         /* ---------- 07 FINALE ---------- */
//         gsap.from(select(".final-char"), {
//           yPercent: 120,
//           rotate: 4,
//           stagger: 0.03,
//           duration: 1.3,
//           ease: "power4.out",
//           scrollTrigger: { trigger: select(".final-section")[0], start: "top 70%" },
//         });

//         gsap.from(select(".final-detail"), {
//           y: 40,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.15,
//           delay: 0.4,
//           ease: "power3.out",
//           scrollTrigger: { trigger: select(".final-section")[0], start: "top 70%" },
//         });

//         gsap.to(select(".final-glow"), {
//           x: -80,
//           y: 60,
//           duration: 7,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });

//         /* ---------- ORGANIC FLOATERS ---------- */
//         gsap.to(select(".organic-float"), {
//           y: -25,
//           rotation: 12,
//           duration: 4,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           stagger: 0.8,
//         });

//         /* ---------- MAGNETIC CTA (desktop only) ---------- */
//         const magnet = select(".magnetic")[0] as HTMLElement | undefined;
//         if (magnet && conditions.desktop) {
//           const xTo = gsap.quickTo(magnet, "x", { duration: 0.6, ease: "power3" });
//           const yTo = gsap.quickTo(magnet, "y", { duration: 0.6, ease: "power3" });

//           const onMove = (e: MouseEvent) => {
//             const r = magnet.getBoundingClientRect();
//             xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
//             yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
//           };
//           const onLeave = () => {
//             xTo(0);
//             yTo(0);
//           };

//           magnet.addEventListener("mousemove", onMove);
//           magnet.addEventListener("mouseleave", onLeave);
//           cleanups.push(() => {
//             magnet.removeEventListener("mousemove", onMove);
//             magnet.removeEventListener("mouseleave", onLeave);
//           });
//         }

//         return () => cleanups.forEach((fn) => fn());
//       },
//       element
//     );

//     return () => {
//       window.removeEventListener("load", refresh);
//       mm.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={root}
//       className="relative overflow-x-clip bg-ivory text-forest-800"
//     >
//       {/* scroll progress */}
//       <div className="sticky top-0 z-[60] -mb-[3px] h-[3px] w-full">
//         <div className="scroll-progress h-full origin-left scale-x-0 bg-forest-600" />
//       </div>

//       {/* ========================================
//           01 — EDITORIAL INTRODUCTION
//       ======================================== */}
//       <div className="living-intro relative px-5 pb-16 pt-28 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pt-40">
//         {/* floating image cards */}
//         <div className="intro-card pointer-events-none absolute right-[6%] top-[22%] z-0 hidden h-64 w-44 overflow-hidden rounded-t-full opacity-0 shadow-2xl shadow-forest-800/20 lg:block xl:h-80 xl:w-56">
//           <img src={images.leaf} alt="" className="h-full w-full object-cover" />
//         </div>
//         <div className="intro-card pointer-events-none absolute right-[19%] top-[48%] z-0 hidden h-40 w-40 overflow-hidden rounded-full opacity-0 shadow-2xl shadow-forest-800/20 lg:block xl:h-52 xl:w-52">
//           <img src={images.canopy} alt="" className="h-full w-full object-cover" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1700px]">
//           <div className="intro-detail mb-16 flex items-center justify-between border-b border-forest-800/20 pb-5">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-forest-700" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
//                 Terra Ecopreneurs
//               </span>
//             </div>

//             <span className="font-mono text-[10px] tracking-widest text-forest-700/50">
//               A DIFFERENT WAY FORWARD — 001
//             </span>
//           </div>

//           <h1
//             aria-label="We believe in a living future."
//             className="font-display text-[clamp(4rem,13vw,14rem)] leading-[0.88] tracking-[-0.09em]"
//           >
//             <span className="block">
//               <SplitChars text="We believe" charClass="intro-char" />
//             </span>
//             <span className="block">
//               <SplitChars text="in a" charClass="intro-char" />{" "}
//               <SplitChars
//                 text="living"
//                 charClass="intro-char"
//                 className="italic text-forest-600"
//               />{" "}
//               <SplitChars text="future." charClass="intro-char" />
//             </span>
//           </h1>

//           <div className="intro-detail mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <p className="max-w-xl text-base leading-8 text-charcoal/70 sm:text-lg">
//               {company.intro}
//             </p>

//             <div className="flex items-center gap-4">
//               <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-forest-800/30 motion-reduce:animate-none">
//                 <ArrowDown size={17} />
//               </div>

//               <span className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em]">
//                 Scroll into our world
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================
//           02 — HERO: ARCH EXPANDS TO FULL BLEED
//       ======================================== */}
//       <div className="hero-pin relative h-[88svh] min-h-[620px] overflow-hidden bg-ivory lg:h-screen">
//         {/* outlined word behind the arch */}
//         <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
//           <span className="earth-back font-display text-[clamp(5rem,22vw,26rem)] leading-none tracking-[-0.1em] text-transparent [-webkit-text-stroke:1px_rgba(27,67,50,0.28)]">
//             EARTH
//           </span>
//         </div>

//         <div className="hero-frame absolute inset-0 z-10 overflow-hidden">
//           <img
//             src={images.aerial}
//             alt="Sunlight over a lush natural landscape"
//             className="intro-image h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-[#122B20]/25" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/70 via-transparent to-[#122B20]/10" />
//         </div>

//         {/* outlined word in front, fades in as the image opens */}
//         <div className="earth-front pointer-events-none absolute inset-0 z-20 flex items-center justify-center lg:opacity-0">
//           <span className="font-display text-[clamp(5rem,22vw,26rem)] leading-none tracking-[-0.1em] text-white/[0.12] [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">
//             EARTH
//           </span>
//         </div>

//         <div className="organic-float absolute right-[13%] top-[18%] z-30 text-white/70">
//           <Leaf size={55} strokeWidth={0.8} />
//         </div>

//         <div className="hero-bottom absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end gap-8 px-6 pb-10 sm:px-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between lg:px-20">
//           <div className="max-w-3xl">
//             <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9E7C9]">
//               <span className="h-px w-10 bg-[#D9E7C9]" />
//               Beyond conventional thinking
//             </p>

//             <h2 className="font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.87] tracking-[-0.075em] text-white">
//               Inspired
//               <br />
//               by the
//               <span className="italic text-[#D9E7C9]"> natural.</span>
//             </h2>
//           </div>

//           <div className="flex max-w-[260px] items-center gap-4 text-white/80">
//             <Globe2 size={29} strokeWidth={1} />
//             <p className="text-xs leading-6">
//               A world where innovation and nature move forward together.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ========================================
//           03 — CINEMATIC CHAPTERS (pinned, desktop)
//       ======================================== */}
//       <div className={reduced ? "hidden" : "hidden lg:block"}>
//         <div className="chapters-pin relative h-screen min-h-[700px] overflow-hidden bg-[#10271D]">
//           {CHAPTERS.map((c) => (
//             <div key={c.no} className="chapter-img absolute inset-0 overflow-hidden">
//               <img
//                 src={c.image}
//                 alt={c.alt}
//                 className="chapter-photo absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-[#10271D]/45" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/80 via-transparent to-[#10271D]/25" />
//             </div>
//           ))}

//           <div className="absolute left-12 top-12 z-20">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
//               Our perspective / 002
//             </span>
//           </div>

//           <div className="organic-float absolute right-[14%] top-[18%] z-20 text-[#D9E7C9]/80">
//             <Sprout size={70} strokeWidth={0.7} />
//           </div>

//           {/* progress dots */}
//           <div className="absolute right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-20">
//             {CHAPTERS.map((c, i) => (
//               <span
//                 key={c.no}
//                 className="chapter-dot w-[3px] rounded-full bg-white"
//                 style={{ height: i === 0 ? 56 : 16 }}
//               />
//             ))}
//           </div>

//           {CHAPTERS.map((c) => (
//             <div
//               key={c.no}
//               className="chapter-text absolute inset-x-0 bottom-0 z-20 px-12 pb-20 xl:px-20"
//             >
//               <div className="mb-7 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />
//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {c.no} — {c.label}
//                 </span>
//               </div>

//               <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.88] tracking-[-0.075em] text-white">
//                 {c.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">{c.lines[1]}</span>
//               </h2>

//               <div className="mt-10 flex items-end justify-between gap-10 border-t border-white/30 pt-6">
//                 <p className="max-w-lg text-base leading-7 text-white/75">{c.body}</p>
//                 <span className="font-display text-6xl text-white/40">{c.no}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* chapters, stacked (mobile / reduced motion) */}
//       <div className={reduced ? "block" : "block lg:hidden"}>
//         {CHAPTERS.map((c) => (
//           <div
//             key={c.no}
//             className="chapter-card relative h-[85vh] min-h-[560px] overflow-hidden bg-[#10271D]"
//           >
//             <img
//               src={c.image}
//               alt={c.alt}
//               loading="lazy"
//               className="chapter-card-photo absolute inset-0 h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-[#10271D]/45" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/85 via-transparent to-[#10271D]/20" />

//             <div className="chapter-card-text absolute inset-x-0 bottom-0 px-6 pb-12 sm:px-12">
//               <div className="mb-5 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />
//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {c.no} — {c.label}
//                 </span>
//               </div>

//               <h2 className="font-display text-[clamp(3.2rem,13vw,6rem)] leading-[0.9] tracking-[-0.07em] text-white">
//                 {c.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">{c.lines[1]}</span>
//               </h2>

//               <p className="mt-6 max-w-md text-sm leading-7 text-white/75">{c.body}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ========================================
//           MARQUEE BAND
//       ======================================== */}
//       <div className="marquee-band overflow-hidden bg-forest-800 py-7 text-ivory">
//         <div className="marquee-track flex w-max items-center whitespace-nowrap">
//           {[0, 1].map((k) => (
//             <div key={k} className="flex items-center" aria-hidden={k === 1}>
//               {MARQUEE_WORDS.map((word) => (
//                 <span key={`${k}-${word}`} className="flex items-center">
//                   <span className="px-8 font-display text-5xl tracking-[-0.05em] sm:text-7xl">
//                     {word}
//                   </span>
//                   <Leaf size={34} strokeWidth={1} className="text-[#B5F27E]" />
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ========================================
//           04 — PHILOSOPHY EDITORIAL
//       ======================================== */}
//       <div className="philosophy-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16 lg:py-52">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-16 flex items-center gap-4">
//             <Leaf size={19} strokeWidth={1.2} />
//             <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-forest-600">
//               Our philosophy
//             </span>
//           </div>

//           <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
//             <div className="lg:col-span-8">
//               <h2
//                 aria-label="Nature inspires everything."
//                 className="font-display text-[clamp(3.6rem,9vw,10rem)] leading-[0.9] tracking-[-0.08em]"
//               >
//                 <span className="block">
//                   <SplitChars text="Nature" charClass="phil-char" />
//                 </span>
//                 <span className="block">
//                   <SplitChars text="inspires" charClass="phil-char" />
//                 </span>
//                 <span className="block">
//                   <SplitChars
//                     text="everything."
//                     charClass="phil-char"
//                     className="italic text-forest-600"
//                   />
//                 </span>
//               </h2>

//               <Link
//                 to="/about"
//                 className="group mt-12 inline-flex items-center gap-5 text-sm font-semibold"
//               >
//                 Explore our story
//                 <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-forest-800 group-hover:text-white">
//                   <ArrowUpRight size={18} />
//                 </span>
//               </Link>
//             </div>

//             <div className="relative lg:col-span-4">
//               <div className="philosophy-image-wrap relative ml-auto h-[480px] w-[85%] overflow-hidden rounded-t-full sm:h-[620px] lg:h-[650px]">
//                 <img
//                   src={images.leaf}
//                   alt="Natural botanical leaf details"
//                   className="philosophy-image absolute inset-0 h-[120%] w-full object-cover"
//                   loading="lazy"
//                 />
//               </div>

//               <div className="organic-float absolute -left-2 top-24 flex h-20 w-20 items-center justify-center rounded-full border border-forest-800/20 bg-ivory sm:h-28 sm:w-28">
//                 <Sprout size={39} strokeWidth={0.9} />
//               </div>

//               <p className="mt-6 text-right text-[10px] uppercase tracking-[0.22em] text-forest-700/60">
//                 Rooted in nature / 03
//               </p>
//             </div>
//           </div>

//           {/* scroll-scrubbed statement */}
//           <p className="scrub-paragraph mt-24 max-w-6xl font-display text-[clamp(2rem,4.6vw,4.8rem)] leading-[1.08] tracking-[-0.045em] sm:mt-32">
//             <SplitWords text="We see nature not simply as something to protect, but as a source of inspiration for how we design, develop and build meaningful solutions." />
//           </p>
//         </div>
//       </div>

//       {/* ========================================
//           05 — THREE PILLARS
//       ======================================== */}
//       <div className="pillars-section relative overflow-hidden bg-[#E7EBDD] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//                 The Terra mindset
//               </p>

//               <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.075em]">
//                 Three ways
//                 <br />
//                 <span className="italic text-forest-600">forward.</span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-7 text-charcoal/65">
//               A connected approach to creating lasting impact through
//               thoughtful engineering and environmental responsibility.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 no: "01",
//                 icon: Leaf,
//                 title: ["Nature", "inspired"],
//                 body: "Looking to the natural world for smarter ideas and more responsible ways to create.",
//                 spin: "group-hover:rotate-12",
//               },
//               {
//                 no: "02",
//                 icon: Wind,
//                 title: ["Thoughtful", "innovation"],
//                 body: "Combining engineering and innovation to solve meaningful real-world challenges.",
//                 spin: "group-hover:-rotate-12",
//               },
//               {
//                 no: "03",
//                 icon: Globe2,
//                 title: ["Lasting", "impact"],
//                 body: "Measuring success through the positive difference we leave behind.",
//                 spin: "group-hover:rotate-12",
//               },
//             ].map((p) => {
//               const Icon = p.icon;
//               return (
//                 <div
//                   key={p.no}
//                   className="pillar group relative overflow-hidden rounded-[2rem] border border-forest-800/15 p-8 transition-colors duration-700 hover:border-forest-800 sm:p-10"
//                 >
//                   <span className="absolute inset-0 translate-y-full bg-forest-800 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

//                   <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                     <div className="flex items-start justify-between">
//                       <span className="font-mono text-xs text-forest-600 transition-colors duration-500 group-hover:text-[#B5F27E]">
//                         {p.no} /
//                       </span>
//                       <ArrowUpRight
//                         size={20}
//                         className="-translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
//                       />
//                     </div>

//                     <div className="my-12 flex h-28 items-center">
//                       <Icon
//                         size={85}
//                         strokeWidth={0.65}
//                         className={`transition-transform duration-700 group-hover:scale-110 ${p.spin}`}
//                       />
//                     </div>

//                     <h3 className="font-display text-4xl tracking-[-0.055em] sm:text-5xl">
//                       {p.title[0]}
//                       <br />
//                       {p.title[1]}
//                     </h3>

//                     <p className="mt-6 max-w-xs text-sm leading-7 text-charcoal/65 transition-colors duration-500 group-hover:text-white/75">
//                       {p.body}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ========================================
//           06 — IMPACT
//       ======================================== */}
//       <div className="impact-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="impact-frame relative mb-20 h-[420px] overflow-hidden sm:h-[600px] lg:h-[750px]">
//             <img
//               src={images.landscape}
//               alt="A lush green forest landscape"
//               loading="lazy"
//               className="impact-image absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#122B20]/30" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/60 via-transparent to-transparent" />

//             <div className="absolute bottom-8 left-7 right-7 sm:bottom-14 sm:left-14">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9E7C9]">
//                 Beyond today
//               </p>

//               <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-[-0.075em] text-white">
//                 A better world
//                 <br />
//                 is built together.
//               </h2>
//             </div>
//           </div>

//           <div className="metrics-grid grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-10">
//             {METRICS.map((item, index) => (
//               <div
//                 className="impact-item border-l border-forest-800/20 pl-5 sm:pl-8"
//                 key={item.label}
//               >
//                 <span className="font-mono text-[10px] text-forest-600">
//                   0{index + 1}
//                 </span>

//                 <p className="mt-4 font-display text-6xl tracking-[-0.075em] sm:text-8xl lg:text-9xl">
//                   {item.value === null ? (
//                     "∞"
//                   ) : (
//                     <span
//                       className="count"
//                       data-count={item.value}
//                       data-pad={item.pad}
//                       data-suffix={item.suffix}
//                     >
//                       {String(item.value).padStart(item.pad, "0")}
//                       {item.suffix}
//                     </span>
//                   )}
//                 </p>

//                 <p className="mt-4 max-w-[150px] text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-forest-700/65">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ========================================
//           07 — FINAL BRAND STATEMENT
//       ======================================== */}
//       <div className="final-section relative overflow-hidden bg-[#0F2A1E] px-5 py-32 text-ivory sm:px-10 sm:py-48 lg:px-16 lg:py-60">
//         <div className="final-glow pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-[#7ED957]/15 blur-[150px]" />
//         <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2BA6C9]/10 blur-[140px]" />

//         <div className="organic-float absolute right-[12%] top-[20%] text-[#B5F27E]/25">
//           <Leaf size={100} strokeWidth={0.5} />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1700px]">
//           <p className="final-detail mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5F27E]">
//             The future is a shared responsibility
//           </p>

//           <h2
//             aria-label="The future is ours to grow."
//             className="font-display text-[clamp(4rem,12vw,13rem)] leading-[0.88] tracking-[-0.09em]"
//           >
//             <span className="block">
//               <SplitChars text="The future" charClass="final-char" />
//             </span>
//             <span className="block">
//               <SplitChars text="is ours to" charClass="final-char" />{" "}
//               <SplitChars
//                 text="grow."
//                 charClass="final-char"
//                 className="italic text-[#B5F27E]"
//               />
//             </span>
//           </h2>

//           <div className="final-detail mt-16 flex flex-col justify-between gap-10 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
//             <p className="max-w-lg text-sm leading-7 text-white/65 sm:text-base">
//               Meaningful change starts with a different perspective.
//               Let&apos;s create a future where progress and nature thrive together.
//             </p>

//             <span className="magnetic inline-block w-fit">
//               <Link
//                 to="/about"
//                 className="group inline-flex items-center gap-6 rounded-full bg-ivory px-9 py-5 text-sm font-semibold text-forest-800 transition-colors duration-500 hover:bg-[#B5F27E]"
//               >
//                 Discover Terra
//                 <MoveUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import { Fragment, useLayoutEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Leaf,
//   Sprout,
//   Globe2,
//   Wind,
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
//   valley:
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=90",
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
//   {
//     no: "03",
//     label: "Our vision",
//     lines: ["A future", "in harmony."],
//     body: "An agricultural ecosystem where innovation and sustainability go hand in hand, farmers access better opportunities, and communities prosper alongside nature.",
//     image: images.valley,
//     alt: "A beautiful green valley surrounded by nature",
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

// function SplitWords({ text }: { text: string }) {
//   return (
//     <>
//       {text.split(" ").map((word, index) => (
//         <span
//           key={index}
//           className="scrub-word mr-[0.25em] inline-block"
//         >
//           {word}
//         </span>
//       ))}
//     </>
//   );
// }

// export function BrandIntro() {
//   const root = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const element = root.current;
//     if (!element) return;

//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // Respect reduced-motion preferences
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

//           // HERO ANIMATION
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
//                   clipPath: "inset(0% 0% 0% 0% round 0% 0% 0% 0%)",
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

//           // CINEMATIC CHAPTERS - DESKTOP
//           if (window.matchMedia("(min-width: 1024px)").matches) {
//             const pin = select(".chapters-pin")[0];
//             const images = select(".chapter-img");
//             const photos = select(".chapter-photo");
//             const texts = select(".chapter-text");
//             const dots = select(".chapter-dot");

//             if (pin && images.length) {
//               gsap.set(images.slice(1), {
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
//                   end: "+=300%",
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

//               for (let i = 1; i < images.length; i++) {
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
//                     images[i],
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

//               gsap.from(photo, {
//                 scale: 1.15,
//                 duration: 1.4,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 80%",
//                 },
//               });

//               gsap.from(text, {
//                 y: 35,
//                 opacity: 0,
//                 duration: 0.9,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 70%",
//                 },
//               });
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

//             ScrollTrigger.create({
//               trigger: select(".marquee-band")[0],
//               start: "top bottom",
//               end: "bottom top",
//               onUpdate: (self) => {
//                 const speed =
//                   1 + Math.min(Math.abs(self.getVelocity()) / 350, 4);

//                 marquee.timeScale(self.direction * speed);
//                 gsap.to(marquee, {
//                   timeScale: self.direction,
//                   duration: 1,
//                   ease: "power3.out",
//                 });
//               },
//             });
//           }

//           // PHILOSOPHY HEADING
//           gsap.from(select(".phil-char"), {
//             yPercent: 120,
//             rotate: 4,
//             duration: 1.1,
//             stagger: 0.025,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".philosophy-section")[0],
//               start: "top 75%",
//             },
//           });

//           // WORD-BY-WORD TEXT REVEAL
//           gsap.fromTo(
//             select(".scrub-word"),
//             { opacity: 0.16 },
//             {
//               opacity: 1,
//               ease: "none",
//               stagger: 0.12,
//               scrollTrigger: {
//                 trigger: select(".scrub-paragraph")[0],
//                 start: "top 80%",
//                 end: "bottom 50%",
//                 scrub: true,
//               },
//             }
//           );

//           // PHILOSOPHY IMAGE PARALLAX
//           gsap.to(select(".philosophy-image"), {
//             yPercent: -12,
//             ease: "none",
//             scrollTrigger: {
//               trigger: select(".philosophy-image-wrap")[0],
//               start: "top bottom",
//               end: "bottom top",
//               scrub: 1,
//             },
//           });

//           gsap.from(select(".philosophy-image-wrap"), {
//             clipPath:
//               "inset(20% 15% 0% 15% round 50% 50% 0% 0%)",
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".philosophy-image-wrap")[0],
//               start: "top 85%",
//             },
//           });

//           // FOUR VALUES
//           gsap.from(select(".pillar"), {
//             y: 65,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".pillars-section")[0],
//               start: "top 75%",
//             },
//           });

//           // IMPACT IMAGE PARALLAX
//           gsap.fromTo(
//             select(".impact-image"),
//             { yPercent: -8, scale: 1.12 },
//             {
//               yPercent: 8,
//               scale: 1,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: select(".impact-frame")[0],
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//               },
//             }
//           );

//           gsap.from(select(".impact-frame"), {
//             clipPath: "inset(10% 6% 10% 6%)",
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".impact-frame")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.from(select(".impact-item"), {
//             y: 50,
//             opacity: 0,
//             duration: 0.9,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".metrics-grid")[0],
//               start: "top 85%",
//             },
//           });

//           // FINAL SECTION
//           gsap.from(select(".final-char"), {
//             yPercent: 120,
//             rotate: 4,
//             stagger: 0.025,
//             duration: 1.2,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".final-section")[0],
//               start: "top 70%",
//             },
//           });

//           gsap.from(select(".final-detail"), {
//             y: 30,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".final-section")[0],
//               start: "top 70%",
//             },
//           });

//           gsap.to(select(".final-glow"), {
//             x: -60,
//             y: 50,
//             duration: 7,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//           });

//           // FLOATING DECORATIVE ELEMENTS
//           gsap.to(select(".organic-float"), {
//             y: -18,
//             rotation: 8,
//             duration: 4,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             stagger: 0.7,
//           });

//           // MAGNETIC CTA
//           const magnet = select(".magnetic")[0] as
//             | HTMLElement
//             | undefined;

//           if (
//             magnet &&
//             window.matchMedia("(min-width: 1024px)").matches
//           ) {
//             const xTo = gsap.quickTo(magnet, "x", {
//               duration: 0.5,
//               ease: "power3",
//             });

//             const yTo = gsap.quickTo(magnet, "y", {
//               duration: 0.5,
//               ease: "power3",
//             });

//             const onMove = (event: MouseEvent) => {
//               const rect = magnet.getBoundingClientRect();

//               xTo(
//                 (event.clientX - (rect.left + rect.width / 2)) * 0.25
//               );

//               yTo(
//                 (event.clientY - (rect.top + rect.height / 2)) * 0.25
//               );
//             };

//             const onLeave = () => {
//               xTo(0);
//               yTo(0);
//             };

//             magnet.addEventListener("mousemove", onMove);
//             magnet.addEventListener("mouseleave", onLeave);

//             return () => {
//               magnet.removeEventListener("mousemove", onMove);
//               magnet.removeEventListener("mouseleave", onLeave);
//             };
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
//       <div className="living-intro relative px-5 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pt-40">
//         <div className="intro-card pointer-events-none absolute right-[6%] top-[22%] z-0 hidden h-64 w-44 overflow-hidden rounded-t-full shadow-2xl shadow-forest-800/20 lg:block xl:h-80 xl:w-56">
//           <img
//             src={images.leaf}
//             alt=""
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div className="intro-card pointer-events-none absolute right-[19%] top-[48%] z-0 hidden h-40 w-40 overflow-hidden rounded-full shadow-2xl shadow-forest-800/20 lg:block xl:h-52 xl:w-52">
//           <img
//             src={images.canopy}
//             alt=""
//             className="h-full w-full object-cover"
//           />
//         </div>

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

//           <h1
//             aria-label="Building a future where agriculture and nature thrive together."
//             className="font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] tracking-[-0.09em]"
//           >
//             <span className="block">
//               <SplitChars text="Growing a" charClass="intro-char" />
//             </span>
//             <span className="block">
//               <SplitChars text="better" charClass="intro-char" />{" "}
//               <SplitChars
//                 text="future."
//                 charClass="intro-char"
//                 className="italic text-forest-600"
//               />
//             </span>
//           </h1>

//           <div className="intro-detail mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <p className="max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
//               We are a team of innovators, sustainability advocates, and
//               problem-solvers committed to transforming agriculture through
//               meaningful innovation. Together with farmers, communities,
//               and industry partners, we create opportunities for a more
//               sustainable future.
//             </p>

//             <div className="flex items-center gap-4">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/30">
//                 <ArrowDown size={17} />
//               </div>

//               <span className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em]">
//                 Discover our purpose
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           02 — CINEMATIC HERO
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
//           03 — OUR MISSION / APPROACH / VISION
//       ========================================= */}

//       {/* DESKTOP PINNED STORY */}
//       <div className="hidden lg:block">
//         <div className="chapters-pin relative h-screen min-h-[700px] overflow-hidden bg-[#10271D]">
//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-img absolute inset-0 overflow-hidden"
//             >
//               <img
//                 src={chapter.image}
//                 alt={chapter.alt}
//                 className="chapter-photo absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-[#10271D]/40" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/85 via-transparent to-[#10271D]/20" />
//             </div>
//           ))}

//           <div className="absolute left-12 top-12 z-20">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
//               Our purpose / 002
//             </span>
//           </div>

//           <div className="organic-float absolute right-[14%] top-[18%] z-20 text-[#D9E7C9]/80">
//             <Sprout size={70} strokeWidth={0.7} />
//           </div>

//           <div className="absolute right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-20">
//             {CHAPTERS.map((chapter, index) => (
//               <span
//                 key={chapter.no}
//                 className="chapter-dot w-[3px] rounded-full bg-white"
//                 style={{ height: index === 0 ? 56 : 16 }}
//               />
//             ))}
//           </div>

//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-text absolute inset-x-0 bottom-0 z-20 px-12 pb-20 xl:px-20"
//             >
//               <div className="mb-7 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />

//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {chapter.no} — {chapter.label}
//                 </span>
//               </div>

//               <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.88] tracking-[-0.075em] text-white">
//                 {chapter.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">
//                   {chapter.lines[1]}
//                 </span>
//               </h2>

//               <div className="mt-10 flex items-end justify-between gap-10 border-t border-white/30 pt-6">
//                 <p className="max-w-xl text-base leading-7 text-white/75">
//                   {chapter.body}
//                 </p>

//                 <span className="font-display text-6xl text-white/40">
//                   {chapter.no}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

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
//           05 — OUR PHILOSOPHY
//       ========================================= */}
//       <div className="philosophy-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16 lg:py-48">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-16 flex items-center gap-4">
//             <Leaf size={19} strokeWidth={1.2} />

//             <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-forest-600">
//               Our philosophy
//             </span>
//           </div>

//           <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
//             <div className="lg:col-span-8">
//               <h2
//                 aria-label="Agriculture and nature thrive together."
//                 className="font-display text-[clamp(3.6rem,9vw,10rem)] leading-[0.9] tracking-[-0.08em]"
//               >
//                 <span className="block">
//                   <SplitChars
//                     text="Agriculture"
//                     charClass="phil-char"
//                   />
//                 </span>

//                 <span className="block">
//                   <SplitChars
//                     text="and nature"
//                     charClass="phil-char"
//                   />
//                 </span>

//                 <span className="block">
//                   <SplitChars
//                     text="thrive together."
//                     charClass="phil-char"
//                     className="italic text-forest-600"
//                   />
//                 </span>
//               </h2>

//               <Link
//                 to="/about"
//                 className="group mt-12 inline-flex items-center gap-5 text-sm font-semibold"
//               >
//                 Explore our story

//                 <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-forest-800 group-hover:text-white">
//                   <ArrowUpRight size={18} />
//                 </span>
//               </Link>
//             </div>

//             <div className="relative lg:col-span-4">
//               <div className="philosophy-image-wrap relative ml-auto h-[460px] w-[85%] overflow-hidden rounded-t-full sm:h-[600px] lg:h-[650px]">
//                 <img
//                   src={images.leaf}
//                   alt="Natural botanical leaf details"
//                   loading="lazy"
//                   className="philosophy-image absolute inset-0 h-[120%] w-full object-cover"
//                 />
//               </div>

//               <div className="organic-float absolute -left-2 top-24 flex h-20 w-20 items-center justify-center rounded-full border border-forest-800/20 bg-ivory sm:h-28 sm:w-28">
//                 <Sprout size={39} strokeWidth={0.9} />
//               </div>

//               <p className="mt-6 text-right text-[10px] uppercase tracking-[0.22em] text-forest-700/60">
//                 Rooted in nature / 03
//               </p>
//             </div>
//           </div>

//           <p className="scrub-paragraph mt-24 max-w-6xl font-display text-[clamp(2rem,4.6vw,4.8rem)] leading-[1.08] tracking-[-0.045em] sm:mt-32">
//             <SplitWords text="We believe that when farmers thrive, communities grow stronger. By connecting innovation with real-world agricultural needs, we create lasting value for people, businesses, and the planet." />
//           </p>
//         </div>
//       </div>

//       {/* =========================================
//           06 — WHAT DRIVES US
//       ========================================= */}
//       <div className="pillars-section relative overflow-hidden bg-[#E7EBDD] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//                 The Terra mindset
//               </p>

//               <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.075em]">
//                 What drives
//                 <br />
//                 <span className="italic text-forest-600">
//                   us forward.
//                 </span>
//               </h2>
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

//       {/* =========================================
//           07 — THE IMPACT WE WANT TO CREATE
//       ========================================= */}
//       <div className="impact-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="impact-frame relative mb-20 h-[420px] overflow-hidden sm:h-[600px] lg:h-[750px]">
//             <img
//               src={images.landscape}
//               alt="A lush green landscape surrounded by nature"
//               loading="lazy"
//               className="impact-image absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#122B20]/30" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/75 via-transparent to-transparent" />

//             <div className="absolute bottom-8 left-7 right-7 sm:bottom-14 sm:left-14">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9E7C9]">
//                 Beyond today
//               </p>

//               <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-[-0.075em] text-white">
//                 A better world
//                 <br />
//                 is built together.
//               </h2>
//             </div>
//           </div>

//           <div className="mb-16 max-w-3xl">
//             <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//               The impact we believe in
//             </p>

//             <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em]">
//               Progress that makes
//               <span className="italic text-forest-600"> a difference.</span>
//             </h2>
//           </div>

//           <div className="metrics-grid grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
//             {IMPACTS.map((item) => (
//               <div
//                 className="impact-item border-l border-forest-800/20 pl-5 sm:pl-8"
//                 key={item.no}
//               >
//                 <span className="font-mono text-[10px] text-forest-600">
//                   {item.no}
//                 </span>

//                 <h3 className="mt-6 font-display text-3xl tracking-[-0.055em] sm:text-4xl">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 max-w-[240px] text-sm leading-7 text-charcoal/65">
//                   {item.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           08 — OUR VISION
//       ========================================= */}
//       <div className="relative overflow-hidden bg-[#E7EBDD] px-5 py-28 sm:px-10 sm:py-40 lg:px-16 lg:py-48">
//         <div className="mx-auto grid max-w-[1700px] items-center gap-16 lg:grid-cols-12">
//           <div className="lg:col-span-7">
//             <div className="mb-12 flex items-center gap-4">
//               <Globe2 size={20} strokeWidth={1.1} />

//               <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-forest-600">
//                 Our vision
//               </span>
//             </div>

//             <h2 className="font-display text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.9] tracking-[-0.08em]">
//               A thriving
//               <br />
//               agricultural
//               <br />
//               <span className="italic text-forest-600">
//                 ecosystem.
//               </span>
//             </h2>

//             <p className="mt-10 max-w-xl text-base leading-8 text-charcoal/70">
//               We envision an agricultural future where innovation and
//               sustainability go hand in hand, farmers have access to
//               better opportunities, and communities prosper while living
//               in harmony with nature.
//             </p>
//           </div>

//           <div className="relative lg:col-span-5">
//             <div className="relative h-[420px] overflow-hidden rounded-t-full sm:h-[580px]">
//               <img
//                 src={images.agriculture}
//                 alt="Green agricultural fields and natural landscape"
//                 loading="lazy"
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-forest-800/10" />
//             </div>

//             <div className="organic-float absolute -bottom-8 -left-8 flex h-24 w-24 items-center justify-center rounded-full border border-forest-800/20 bg-ivory sm:h-32 sm:w-32">
//               <Sprout size={48} strokeWidth={0.8} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           09 — FINAL BRAND STATEMENT
//       ========================================= */}
//       <div className="final-section relative overflow-hidden bg-[#0F2A1E] px-5 py-32 text-ivory sm:px-10 sm:py-48 lg:px-16 lg:py-60">
//         <div className="final-glow pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-[#7ED957]/15 blur-[150px]" />

//         <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2BA6C9]/10 blur-[140px]" />

//         <div className="organic-float absolute right-[12%] top-[20%] text-[#B5F27E]/25">
//           <Leaf size={100} strokeWidth={0.5} />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1700px]">
//           <p className="final-detail mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5F27E]">
//             The future is a shared responsibility
//           </p>

//           <h2
//             aria-label="Together, we grow a sustainable future."
//             className="font-display text-[clamp(3.5rem,12vw,13rem)] leading-[0.88] tracking-[-0.09em]"
//           >
//             <span className="block">
//               <SplitChars
//                 text="Together,"
//                 charClass="final-char"
//               />
//             </span>

//             <span className="block">
//               <SplitChars text="we" charClass="final-char" />{" "}
//               <SplitChars
//                 text="grow."
//                 charClass="final-char"
//                 className="italic text-[#B5F27E]"
//               />
//             </span>
//           </h2>

//           <div className="final-detail mt-16 flex flex-col justify-between gap-10 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
//             <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
//               Together, we're not just transforming agriculture. We're
//               growing a more sustainable future where farmers thrive,
//               communities prosper, and nature flourishes.
//             </p>

//             <span className="magnetic inline-block w-fit">
//               <Link
//                 to="/about"
//                 className="group inline-flex items-center gap-6 rounded-full bg-ivory px-9 py-5 text-sm font-semibold text-forest-800 transition-colors duration-500 hover:bg-[#B5F27E]"
//               >
//                 Discover Terra

//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { Fragment, useLayoutEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Leaf,
//   Sprout,
//   Globe2,
//   Wind,
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
//   valley:
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=90",
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
//   {
//     no: "03",
//     label: "Our vision",
//     lines: ["A future", "in harmony."],
//     body: "An agricultural ecosystem where innovation and sustainability go hand in hand, farmers access better opportunities, and communities prosper alongside nature.",
//     image: images.valley,
//     alt: "A beautiful green valley surrounded by nature",
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

// function SplitWords({ text }: { text: string }) {
//   return (
//     <>
//       {text.split(" ").map((word, index) => (
//         <span
//           key={index}
//           className="scrub-word mr-[0.25em] inline-block"
//         >
//           {word}
//         </span>
//       ))}
//     </>
//   );
// }

// export function BrandIntro() {
//   const root = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const element = root.current;
//     if (!element) return;

//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // Respect reduced-motion preferences
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

//           // HERO ANIMATION
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
//                   clipPath: "inset(0% 0% 0% 0% round 0% 0% 0% 0%)",
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

//           // CINEMATIC CHAPTERS - DESKTOP
//           if (window.matchMedia("(min-width: 1024px)").matches) {
//             const pin = select(".chapters-pin")[0];
//             const images = select(".chapter-img");
//             const photos = select(".chapter-photo");
//             const texts = select(".chapter-text");
//             const dots = select(".chapter-dot");

//             if (pin && images.length) {
//               gsap.set(images.slice(1), {
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
//                   end: "+=300%",
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

//               for (let i = 1; i < images.length; i++) {
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
//                     images[i],
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

//               gsap.from(photo, {
//                 scale: 1.15,
//                 duration: 1.4,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 80%",
//                 },
//               });

//               gsap.from(text, {
//                 y: 35,
//                 opacity: 0,
//                 duration: 0.9,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 70%",
//                 },
//               });
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

//             ScrollTrigger.create({
//               trigger: select(".marquee-band")[0],
//               start: "top bottom",
//               end: "bottom top",
//               onUpdate: (self) => {
//                 const speed =
//                   1 + Math.min(Math.abs(self.getVelocity()) / 350, 4);

//                 marquee.timeScale(self.direction * speed);
//                 gsap.to(marquee, {
//                   timeScale: self.direction,
//                   duration: 1,
//                   ease: "power3.out",
//                 });
//               },
//             });
//           }

//           // PHILOSOPHY HEADING
//           gsap.from(select(".phil-char"), {
//             yPercent: 120,
//             rotate: 4,
//             duration: 1.1,
//             stagger: 0.025,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".philosophy-section")[0],
//               start: "top 75%",
//             },
//           });

//           // WORD-BY-WORD TEXT REVEAL
//           gsap.fromTo(
//             select(".scrub-word"),
//             { opacity: 0.16 },
//             {
//               opacity: 1,
//               ease: "none",
//               stagger: 0.12,
//               scrollTrigger: {
//                 trigger: select(".scrub-paragraph")[0],
//                 start: "top 80%",
//                 end: "bottom 50%",
//                 scrub: true,
//               },
//             }
//           );

//           // PHILOSOPHY IMAGE PARALLAX
//           gsap.to(select(".philosophy-image"), {
//             yPercent: -12,
//             ease: "none",
//             scrollTrigger: {
//               trigger: select(".philosophy-image-wrap")[0],
//               start: "top bottom",
//               end: "bottom top",
//               scrub: 1,
//             },
//           });

//           gsap.from(select(".philosophy-image-wrap"), {
//             clipPath:
//               "inset(20% 15% 0% 15% round 50% 50% 0% 0%)",
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".philosophy-image-wrap")[0],
//               start: "top 85%",
//             },
//           });

//           // FOUR VALUES
//           gsap.from(select(".pillar"), {
//             y: 65,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".pillars-section")[0],
//               start: "top 75%",
//             },
//           });

//           // IMPACT IMAGE PARALLAX
//           gsap.fromTo(
//             select(".impact-image"),
//             { yPercent: -8, scale: 1.12 },
//             {
//               yPercent: 8,
//               scale: 1,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: select(".impact-frame")[0],
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//               },
//             }
//           );

//           gsap.from(select(".impact-frame"), {
//             clipPath: "inset(10% 6% 10% 6%)",
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".impact-frame")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.from(select(".impact-item"), {
//             y: 50,
//             opacity: 0,
//             duration: 0.9,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".metrics-grid")[0],
//               start: "top 85%",
//             },
//           });

//           // FLOATING DECORATIVE ELEMENTS
//           gsap.to(select(".organic-float"), {
//             y: -18,
//             rotation: 8,
//             duration: 4,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             stagger: 0.7,
//           });
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
//       <div className="living-intro relative px-5 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pt-40">
//         <div className="intro-card pointer-events-none absolute right-[6%] top-[22%] z-0 hidden h-64 w-44 overflow-hidden rounded-t-full shadow-2xl shadow-forest-800/20 lg:block xl:h-80 xl:w-56">
//           <img
//             src={images.leaf}
//             alt=""
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div className="intro-card pointer-events-none absolute right-[19%] top-[48%] z-0 hidden h-40 w-40 overflow-hidden rounded-full shadow-2xl shadow-forest-800/20 lg:block xl:h-52 xl:w-52">
//           <img
//             src={images.canopy}
//             alt=""
//             className="h-full w-full object-cover"
//           />
//         </div>

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

//           <h1
//             aria-label="Building a future where agriculture and nature thrive together."
//             className="font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] tracking-[-0.09em]"
//           >
//             <span className="block">
//               <SplitChars text="Growing a" charClass="intro-char" />
//             </span>
//             <span className="block">
//               <SplitChars text="better" charClass="intro-char" />{" "}
//               <SplitChars
//                 text="future."
//                 charClass="intro-char"
//                 className="italic text-forest-600"
//               />
//             </span>
//           </h1>

//           <div className="intro-detail mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <p className="max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
//               We are a team of innovators, sustainability advocates, and
//               problem-solvers committed to transforming agriculture through
//               meaningful innovation. Together with farmers, communities,
//               and industry partners, we create opportunities for a more
//               sustainable future.
//             </p>

//             <div className="flex items-center gap-4">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/30">
//                 <ArrowDown size={17} />
//               </div>

//               <span className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em]">
//                 Discover our purpose
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           02 — CINEMATIC HERO
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
//           03 — OUR MISSION / APPROACH / VISION
//       ========================================= */}

//       {/* DESKTOP PINNED STORY */}
//       <div className="hidden lg:block">
//         <div className="chapters-pin relative h-screen min-h-[700px] overflow-hidden bg-[#10271D]">
//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-img absolute inset-0 overflow-hidden"
//             >
//               <img
//                 src={chapter.image}
//                 alt={chapter.alt}
//                 className="chapter-photo absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-[#10271D]/40" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/85 via-transparent to-[#10271D]/20" />
//             </div>
//           ))}

//           <div className="absolute left-12 top-12 z-20">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
//               Our purpose / 002
//             </span>
//           </div>

//           <div className="organic-float absolute right-[14%] top-[18%] z-20 text-[#D9E7C9]/80">
//             <Sprout size={70} strokeWidth={0.7} />
//           </div>

//           <div className="absolute right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-20">
//             {CHAPTERS.map((chapter, index) => (
//               <span
//                 key={chapter.no}
//                 className="chapter-dot w-[3px] rounded-full bg-white"
//                 style={{ height: index === 0 ? 56 : 16 }}
//               />
//             ))}
//           </div>

//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-text absolute inset-x-0 bottom-0 z-20 px-12 pb-20 xl:px-20"
//             >
//               <div className="mb-7 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />

//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {chapter.no} — {chapter.label}
//                 </span>
//               </div>

//               <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.88] tracking-[-0.075em] text-white">
//                 {chapter.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">
//                   {chapter.lines[1]}
//                 </span>
//               </h2>

//               <div className="mt-10 flex items-end justify-between gap-10 border-t border-white/30 pt-6">
//                 <p className="max-w-xl text-base leading-7 text-white/75">
//                   {chapter.body}
//                 </p>

//                 <span className="font-display text-6xl text-white/40">
//                   {chapter.no}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

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
//           05 — OUR PHILOSOPHY
//       ========================================= */}
//       <div className="philosophy-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16 lg:py-48">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-16 flex items-center gap-4">
//             <Leaf size={19} strokeWidth={1.2} />

//             <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-forest-600">
//               Our philosophy
//             </span>
//           </div>

//           <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
//             <div className="lg:col-span-8">
//               <h2
//                 aria-label="Agriculture and nature thrive together."
//                 className="font-display text-[clamp(3.6rem,9vw,10rem)] leading-[0.9] tracking-[-0.08em]"
//               >
//                 <span className="block">
//                   <SplitChars
//                     text="Agriculture"
//                     charClass="phil-char"
//                   />
//                 </span>

//                 <span className="block">
//                   <SplitChars
//                     text="and nature"
//                     charClass="phil-char"
//                   />
//                 </span>

//                 <span className="block">
//                   <SplitChars
//                     text="thrive together."
//                     charClass="phil-char"
//                     className="italic text-forest-600"
//                   />
//                 </span>
//               </h2>

//               <Link
//                 to="/about"
//                 className="group mt-12 inline-flex items-center gap-5 text-sm font-semibold"
//               >
//                 Explore our story

//                 <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-forest-800 group-hover:text-white">
//                   <ArrowUpRight size={18} />
//                 </span>
//               </Link>
//             </div>

//             <div className="relative lg:col-span-4">
//               <div className="philosophy-image-wrap relative ml-auto h-[460px] w-[85%] overflow-hidden rounded-t-full sm:h-[600px] lg:h-[650px]">
//                 <img
//                   src={images.leaf}
//                   alt="Natural botanical leaf details"
//                   loading="lazy"
//                   className="philosophy-image absolute inset-0 h-[120%] w-full object-cover"
//                 />
//               </div>

//               <div className="organic-float absolute -left-2 top-24 flex h-20 w-20 items-center justify-center rounded-full border border-forest-800/20 bg-ivory sm:h-28 sm:w-28">
//                 <Sprout size={39} strokeWidth={0.9} />
//               </div>

//               <p className="mt-6 text-right text-[10px] uppercase tracking-[0.22em] text-forest-700/60">
//                 Rooted in nature / 03
//               </p>
//             </div>
//           </div>

//           <p className="scrub-paragraph mt-24 max-w-6xl font-display text-[clamp(2rem,4.6vw,4.8rem)] leading-[1.08] tracking-[-0.045em] sm:mt-32">
//             <SplitWords text="We believe that when farmers thrive, communities grow stronger. By connecting innovation with real-world agricultural needs, we create lasting value for people, businesses, and the planet." />
//           </p>
//         </div>
//       </div>

//       {/* =========================================
//           06 — WHAT DRIVES US
//       ========================================= */}
//       <div className="pillars-section relative overflow-hidden bg-[#E7EBDD] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//                 The Terra mindset
//               </p>

//               <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.075em]">
//                 What drives
//                 <br />
//                 <span className="italic text-forest-600">
//                   us forward.
//                 </span>
//               </h2>
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

//       {/* =========================================
//           07 — THE IMPACT WE WANT TO CREATE
//       ========================================= */}
//       <div className="impact-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="impact-frame relative mb-20 h-[420px] overflow-hidden sm:h-[600px] lg:h-[750px]">
//             <img
//               src={images.landscape}
//               alt="A lush green landscape surrounded by nature"
//               loading="lazy"
//               className="impact-image absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#122B20]/30" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/75 via-transparent to-transparent" />

//             <div className="absolute bottom-8 left-7 right-7 sm:bottom-14 sm:left-14">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9E7C9]">
//                 Beyond today
//               </p>

//               <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-[-0.075em] text-white">
//                 A better world
//                 <br />
//                 is built together.
//               </h2>
//             </div>
//           </div>

//           <div className="mb-16 max-w-3xl">
//             <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//               The impact we believe in
//             </p>

//             <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em]">
//               Progress that makes
//               <span className="italic text-forest-600"> a difference.</span>
//             </h2>
//           </div>

//           <div className="metrics-grid grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
//             {IMPACTS.map((item) => (
//               <div
//                 className="impact-item border-l border-forest-800/20 pl-5 sm:pl-8"
//                 key={item.no}
//               >
//                 <span className="font-mono text-[10px] text-forest-600">
//                   {item.no}
//                 </span>

//                 <h3 className="mt-6 font-display text-3xl tracking-[-0.055em] sm:text-4xl">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 max-w-[240px] text-sm leading-7 text-charcoal/65">
//                   {item.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Fragment, useLayoutEffect, useRef } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Leaf,
//   Sprout,
//   Users,
//   Lightbulb,
//   HeartHandshake,
// } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = {
//   agriculture:
//     "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90",
//   forest:
//     "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90",
//   canopy:
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=90",
//   landscape:
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=90",
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

//           // INTRO IMAGE REVEAL
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

//           // CINEMATIC CHAPTERS - DESKTOP
//           if (window.matchMedia("(min-width: 1024px)").matches) {
//             const pin = select(".chapters-pin")[0];
//             const images = select(".chapter-img");
//             const photos = select(".chapter-photo");
//             const texts = select(".chapter-text");
//             const dots = select(".chapter-dot");

//             if (pin && images.length) {
//               gsap.set(images.slice(1), {
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

//               for (let i = 1; i < images.length; i++) {
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
//                     images[i],
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

//               gsap.from(photo, {
//                 scale: 1.15,
//                 duration: 1.4,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 80%",
//                 },
//               });

//               gsap.from(text, {
//                 y: 35,
//                 opacity: 0,
//                 duration: 0.9,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 70%",
//                 },
//               });
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

//             ScrollTrigger.create({
//               trigger: select(".marquee-band")[0],
//               start: "top bottom",
//               end: "bottom top",
//               onUpdate: (self) => {
//                 const speed =
//                   1 + Math.min(Math.abs(self.getVelocity()) / 350, 4);

//                 marquee.timeScale(self.direction * speed);
//                 gsap.to(marquee, {
//                   timeScale: self.direction,
//                   duration: 1,
//                   ease: "power3.out",
//                 });
//               },
//             });
//           }

//           // FOUR VALUES
//           gsap.from(select(".pillar"), {
//             y: 65,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".pillars-section")[0],
//               start: "top 75%",
//             },
//           });

//           // IMPACT IMAGE PARALLAX
//           gsap.fromTo(
//             select(".impact-image"),
//             { yPercent: -8, scale: 1.12 },
//             {
//               yPercent: 8,
//               scale: 1,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: select(".impact-frame")[0],
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//               },
//             }
//           );

//           gsap.from(select(".impact-frame"), {
//             clipPath: "inset(10% 6% 10% 6%)",
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".impact-frame")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.from(select(".impact-item"), {
//             y: 50,
//             opacity: 0,
//             duration: 0.9,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".metrics-grid")[0],
//               start: "top 85%",
//             },
//           });

//           // FLOATING DECORATIVE ELEMENTS
//           gsap.to(select(".organic-float"), {
//             y: -18,
//             rotation: 8,
//             duration: 4,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             stagger: 0.7,
//           });
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
//               {/* Main organic rectangular image */}
//               <div className="intro-visual-main absolute right-0 top-0 h-[82%] w-[76%] overflow-hidden rounded-t-[180px] rounded-b-[12px] shadow-2xl shadow-forest-900/15">
//                 <img
//                   src={images.agriculture}
//                   alt="Lush green agricultural fields"
//                   className="h-[115%] w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
//               </div>

//               {/* Circular overlapping forest image */}
//               <div className="intro-visual-circle absolute bottom-[3%] left-0 z-10 h-[210px] w-[210px] overflow-hidden rounded-full border-[8px] border-ivory shadow-2xl shadow-forest-900/20 sm:h-[260px] sm:w-[260px] lg:bottom-[5%] lg:h-[290px] lg:w-[290px]">
//                 <img
//                   src={images.forest}
//                   alt="Rich green forest canopy"
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Small brand-inspired accent */}
//               <div className="organic-float absolute right-[3%] top-[12%] z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-ivory/90 text-forest-700 shadow-lg backdrop-blur-sm sm:h-20 sm:w-20">
//                 <Sprout size={35} strokeWidth={1} />
//               </div>

//               {/* Small caption */}
//               <div className="absolute bottom-[2%] right-[2%] z-20 hidden items-center gap-3 sm:flex">
//                 <span className="h-px w-8 bg-forest-600/60" />
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-700">
//                   Rooted in nature
//                 </span>
//               </div>

//               {/* Decorative outline */}
//               <div className="pointer-events-none absolute -right-3 top-6 h-[82%] w-[76%] rounded-t-[180px] rounded-b-[12px] border border-forest-800/20" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           02 — OUR MISSION / OUR APPROACH
//       ========================================= */}

//       {/* DESKTOP PINNED STORY */}
//       <div className="hidden lg:block">
//         <div className="chapters-pin relative h-screen min-h-[700px] overflow-hidden bg-[#10271D]">
//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-img absolute inset-0 overflow-hidden"
//             >
//               <img
//                 src={chapter.image}
//                 alt={chapter.alt}
//                 className="chapter-photo absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-[#10271D]/40" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/85 via-transparent to-[#10271D]/20" />
//             </div>
//           ))}

//           <div className="absolute left-12 top-12 z-20">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
//               Terra / 002
//             </span>
//           </div>

//           <div className="organic-float absolute right-[14%] top-[18%] z-20 text-[#D9E7C9]/80">
//             <Sprout size={70} strokeWidth={0.7} />
//           </div>

//           <div className="absolute right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-20">
//             {CHAPTERS.map((chapter, index) => (
//               <span
//                 key={chapter.no}
//                 className="chapter-dot w-[3px] rounded-full bg-white"
//                 style={{ height: index === 0 ? 56 : 16 }}
//               />
//             ))}
//           </div>

//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-text absolute inset-x-0 bottom-0 z-20 px-12 pb-20 xl:px-20"
//             >
//               <div className="mb-7 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />

//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {chapter.no} — {chapter.label}
//                 </span>
//               </div>

//               <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.88] tracking-[-0.075em] text-white">
//                 {chapter.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">
//                   {chapter.lines[1]}
//                 </span>
//               </h2>

//               <div className="mt-10 flex items-end justify-between gap-10 border-t border-white/30 pt-6">
//                 <p className="max-w-xl text-base leading-7 text-white/75">
//                   {chapter.body}
//                 </p>

//                 <span className="font-display text-6xl text-white/40">
//                   {chapter.no}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

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
//           03 — MARQUEE
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
//           04 — WHAT DRIVES US
//       ========================================= */}
//       <div className="pillars-section relative overflow-hidden bg-[#E7EBDD] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//                 The Terra mindset
//               </p>

//               <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.075em]">
//                 What drives
//                 <br />
//                 <span className="italic text-forest-600">
//                   us forward.
//                 </span>
//               </h2>
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

//       {/* =========================================
//           05 — THE IMPACT WE WANT TO CREATE
//       ========================================= */}
//       <div className="impact-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="impact-frame relative mb-20 h-[420px] overflow-hidden sm:h-[600px] lg:h-[750px]">
//             <img
//               src={images.landscape}
//               alt="A lush green landscape surrounded by nature"
//               loading="lazy"
//               className="impact-image absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#122B20]/30" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/75 via-transparent to-transparent" />

//             <div className="absolute bottom-8 left-7 right-7 sm:bottom-14 sm:left-14">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9E7C9]">
//                 Beyond today
//               </p>

//               <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-[-0.075em] text-white">
//                 A better world
//                 <br />
//                 is built together.
//               </h2>
//             </div>
//           </div>

//           <div className="mb-16 max-w-3xl">
//             <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
//               The impact we believe in
//             </p>

//             <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em]">
//               Progress that makes
//               <span className="italic text-forest-600"> a difference.</span>
//             </h2>
//           </div>

//           <div className="metrics-grid grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
//             {IMPACTS.map((item) => (
//               <div
//                 className="impact-item border-l border-forest-800/20 pl-5 sm:pl-8"
//                 key={item.no}
//               >
//                 <span className="font-mono text-[10px] text-forest-600">
//                   {item.no}
//                 </span>

//                 <h3 className="mt-6 font-display text-3xl tracking-[-0.055em] sm:text-4xl">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 max-w-[240px] text-sm leading-7 text-charcoal/65">
//                   {item.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





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

//               gsap.from(photo, {
//                 scale: 1.15,
//                 duration: 1.4,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 80%",
//                 },
//               });

//               gsap.from(text, {
//                 y: 35,
//                 opacity: 0,
//                 duration: 0.9,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 70%",
//                 },
//               });
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

//             ScrollTrigger.create({
//               trigger: select(".marquee-band")[0],
//               start: "top bottom",
//               end: "bottom top",
//               onUpdate: (self) => {
//                 const speed =
//                   1 + Math.min(Math.abs(self.getVelocity()) / 350, 4);

//                 marquee.timeScale(self.direction * speed);

//                 gsap.to(marquee, {
//                   timeScale: self.direction,
//                   duration: 1,
//                   ease: "power3.out",
//                 });
//               },
//             });
//           }

//           // WHAT DRIVES US REVEAL
//           gsap.from(select(".pillar"), {
//             y: 65,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".pillars-section")[0],
//               start: "top 75%",
//             },
//           });

//           // IMPACT IMAGE PARALLAX
//           gsap.fromTo(
//             select(".impact-image"),
//             { yPercent: -8, scale: 1.12 },
//             {
//               yPercent: 8,
//               scale: 1,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: select(".impact-frame")[0],
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//               },
//             }
//           );

//           gsap.from(select(".impact-frame"), {
//             clipPath: "inset(10% 6% 10% 6%)",
//             duration: 1.5,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: select(".impact-frame")[0],
//               start: "top 80%",
//             },
//           });

//           gsap.from(select(".impact-item"), {
//             y: 50,
//             opacity: 0,
//             duration: 0.9,
//             stagger: 0.14,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: select(".metrics-grid")[0],
//               start: "top 85%",
//             },
//           });

//           // FLOATING DECORATIVE ELEMENTS
//           gsap.to(select(".organic-float"), {
//             y: -18,
//             rotation: 8,
//             duration: 4,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             stagger: 0.7,
//           });
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
//               {/* Main rectangular image */}
//               <div className="intro-visual-main absolute right-0 top-0 h-[82%] w-[76%] overflow-hidden rounded-t-[180px] rounded-b-[12px] shadow-2xl shadow-forest-900/15">
//                 <img
//                   src={images.agriculture}
//                   alt="Lush green agricultural fields"
//                   className="h-[115%] w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
//               </div>

//               {/* Circular overlapping image */}
//               <div className="intro-visual-circle absolute bottom-[3%] left-0 z-10 h-[210px] w-[210px] overflow-hidden rounded-full border-[8px] border-ivory shadow-2xl shadow-forest-900/20 sm:h-[260px] sm:w-[260px] lg:bottom-[5%] lg:h-[290px] lg:w-[290px]">
//                 <img
//                   src={images.forest}
//                   alt="Rich green forest canopy"
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Brand-inspired accent */}
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
//           03 — OUR MISSION / OUR APPROACH
//       ========================================= */}

//       {/* DESKTOP PINNED STORY */}
//       {/* <div className="hidden lg:block">
//         <div className="chapters-pin relative h-screen min-h-[700px] overflow-hidden bg-[#10271D]">
//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-img absolute inset-0 overflow-hidden"
//             >
//               <img
//                 src={chapter.image}
//                 alt={chapter.alt}
//                 className="chapter-photo absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-[#10271D]/40" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/85 via-transparent to-[#10271D]/20" />
//             </div>
//           ))}

//           <div className="absolute left-12 top-12 z-20">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
//               Terra / 002
//             </span>
//           </div>

//           <div className="organic-float absolute right-[14%] top-[18%] z-20 text-[#D9E7C9]/80">
//             <Sprout size={70} strokeWidth={0.7} />
//           </div>

//           <div className="absolute right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-20">
//             {CHAPTERS.map((chapter, index) => (
//               <span
//                 key={chapter.no}
//                 className="chapter-dot w-[3px] rounded-full bg-white"
//                 style={{ height: index === 0 ? 56 : 16 }}
//               />
//             ))}
//           </div>

//           {CHAPTERS.map((chapter) => (
//             <div
//               key={chapter.no}
//               className="chapter-text absolute inset-x-0 bottom-0 z-20 px-12 pb-20 xl:px-20"
//             >
//               <div className="mb-7 flex items-center gap-3 text-[#D9E7C9]">
//                 <span className="h-px w-10 bg-[#D9E7C9]" />

//                 <span className="text-[10px] uppercase tracking-[0.25em]">
//                   {chapter.no} — {chapter.label}
//                 </span>
//               </div>

//               <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.88] tracking-[-0.075em] text-white">
//                 {chapter.lines[0]}
//                 <br />
//                 <span className="italic text-[#D9E7C9]">
//                   {chapter.lines[1]}
//                 </span>
//               </h2>

//               <div className="mt-10 flex items-end justify-between gap-10 border-t border-white/30 pt-6">
//                 <p className="max-w-xl text-base leading-7 text-white/75">
//                   {chapter.body}
//                 </p>

//                 <span className="font-display text-6xl text-white/40">
//                   {chapter.no}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}

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

//               <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.075em]">
//                 What drives
//                 <br />
//                 <span className="italic text-forest-600">
//                   us forward.
//                 </span>
//               </h2>
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

//       {/* =========================================
//           06 — IMPACT
//       ========================================= */}
//       <div className="impact-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16">
//         <div className="mx-auto max-w-[1700px]">
//           <div className="impact-frame relative mb-20 h-[420px] overflow-hidden sm:h-[600px] lg:h-[750px]">
//             <img
//               src={images.landscape}
//               alt="A lush green landscape surrounded by nature"
//               loading="lazy"
//               className="impact-image absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#122B20]/30" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/75 via-transparent to-transparent" />

//             <div className="absolute bottom-8 left-7 right-7 sm:bottom-14 sm:left-14">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9E7C9]">
//                 Beyond today
//               </p>

//               <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-[-0.075em] text-white">
//                 A better world
//                 <br />
//                 is built together.
//               </h2>
//             </div>
//           </div>

//           {/* IMPACT HEADING — LABEL REMOVED */}
//           {/* <div className="mb-16 max-w-3xl">
//             <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em]">
//               Progress that makes
//               <span className="italic text-forest-600"> a difference.</span>
//             </h2>
//           </div>

//           <div className="metrics-grid grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
//             {IMPACTS.map((item) => (
//               <div
//                 className="impact-item border-l border-forest-800/20 pl-5 sm:pl-8"
//                 key={item.no}
//               >
//                 <span className="font-mono text-[10px] text-forest-600">
//                   {item.no}
//                 </span>

//                 <h3 className="mt-6 font-display text-3xl tracking-[-0.055em] sm:text-4xl">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 max-w-[240px] text-sm leading-7 text-charcoal/65">
//                   {item.body}
//                 </p>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }





import { Fragment, useLayoutEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Leaf,
  Sprout,
  Globe2,
  Users,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = {
  forest:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90",
  aerial:
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=90",
  leaf:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1500&q=90",
  landscape:
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2400&q=90",
  canopy:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=90",
  agriculture:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90",
};

const CHAPTERS = [
  {
    no: "01",
    label: "Our mission",
    lines: ["Empower", "every farmer."],
    body: "Making agriculture more sustainable, productive, and resilient through practical solutions, accessible technology, and responsible farming practices.",
    image: images.agriculture,
    alt: "Green agricultural fields stretching across the landscape",
  },
  {
    no: "02",
    label: "Our approach",
    lines: ["Progress", "grows together."],
    body: "Working alongside farmers, local communities, and industry stakeholders to understand real challenges and develop solutions that create measurable impact.",
    image: images.canopy,
    alt: "Sunlight filtering through a lush green forest",
  },
];

const PILLARS = [
  {
    no: "01",
    icon: Users,
    title: ["People", "First"],
    body: "Empowering farmers and communities through opportunities, knowledge, and meaningful partnerships.",
  },
  {
    no: "02",
    icon: Lightbulb,
    title: ["Innovation", "with Purpose"],
    body: "Bringing together technology, practical thinking, and sustainable solutions to address real agricultural challenges.",
  },
  {
    no: "03",
    icon: Leaf,
    title: ["Sustainability", "by Design"],
    body: "Promoting responsible practices that protect natural resources and support long-term environmental balance.",
  },
  {
    no: "04",
    icon: HeartHandshake,
    title: ["Impact", "that Lasts"],
    body: "Creating measurable improvements in livelihoods, agricultural productivity, and community resilience.",
  },
];

const IMPACTS = [
  {
    no: "01",
    title: "Stronger livelihoods",
    body: "Creating better opportunities for farmers and agricultural communities.",
  },
  {
    no: "02",
    title: "Responsible farming",
    body: "Encouraging practices that protect natural resources and support productivity.",
  },
  {
    no: "03",
    title: "Meaningful innovation",
    body: "Connecting practical technology with real-world agricultural needs.",
  },
  {
    no: "04",
    title: "Lasting resilience",
    body: "Building a stronger agricultural ecosystem for future generations.",
  },
];

const MARQUEE_WORDS = [
  "People First",
  "Purposeful Innovation",
  "Sustainable Growth",
  "Lasting Impact",
];

function SplitChars({
  text,
  charClass,
  className = "",
}: {
  text: string;
  charClass: string;
  className?: string;
}) {
  return (
    <span className={className} aria-hidden="true">
      {text.split(" ").map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
            {Array.from(word).map((char, charIndex) => (
              <span
                key={charIndex}
                className={`${charClass} inline-block will-change-transform`}
              >
                {char}
              </span>
            ))}
          </span>
          {wordIndex < text.split(" ").length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

export function BrandIntro() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const select = gsap.utils.selector(element);

          // INTRO TEXT REVEAL
          gsap.from(select(".intro-char"), {
            yPercent: 120,
            rotate: 5,
            duration: 1.2,
            stagger: 0.025,
            ease: "power4.out",
            scrollTrigger: {
              trigger: select(".living-intro")[0],
              start: "top 80%",
            },
          });

          gsap.from(select(".intro-detail"), {
            y: 25,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: select(".living-intro")[0],
              start: "top 80%",
            },
          });

          // FIRST SECTION IMAGE REVEAL
          gsap.from(select(".intro-visual-main"), {
            clipPath: "inset(12% 0% 0% 0% round 180px 180px 12px 12px)",
            scale: 1.08,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: select(".intro-visual")[0],
              start: "top 80%",
            },
          });

          gsap.from(select(".intro-visual-circle"), {
            scale: 0.75,
            opacity: 0,
            rotation: -12,
            duration: 1.3,
            delay: 0.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: select(".intro-visual")[0],
              start: "top 80%",
            },
          });

          gsap.to(select(".intro-visual-main img"), {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: select(".intro-visual")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });

          // ORIGINAL GROW CINEMATIC REVEAL
          const hero = select(".hero-pin")[0];
          const heroFrame = select(".hero-frame")[0];
          const heroImage = select(".intro-image")[0];

          if (hero && heroFrame && heroImage) {
            if (window.matchMedia("(min-width: 1024px)").matches) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "+=110%",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                  },
                })
                .fromTo(
                  heroFrame,
                  {
                    clipPath:
                      "inset(13% 30% 10% 30% round 50% 50% 0% 0%)",
                  },
                  {
                    clipPath:
                      "inset(0% 0% 0% 0% round 0% 0% 0% 0%)",
                    ease: "none",
                    duration: 1,
                  },
                  0
                )
                .fromTo(
                  heroImage,
                  { scale: 1.35 },
                  { scale: 1, ease: "none", duration: 1 },
                  0
                );
            } else {
              gsap.fromTo(
                heroFrame,
                {
                  clipPath:
                    "inset(12% 12% 8% 12% round 50% 50% 0% 0%)",
                },
                {
                  clipPath:
                    "inset(0% 0% 0% 0% round 0% 0% 0% 0%)",
                  duration: 1.5,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: hero,
                    start: "top 75%",
                  },
                }
              );

              gsap.to(heroImage, {
                yPercent: 10,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              });
            }
          }

          // 02.5 — SPLIT VIDEO REVEAL
          const videoSection = select(".terra-video-section")[0];
          const videoFrame = select(".terra-video-frame")[0];
          const videoContent = select(".terra-video-content")[0];

          if (videoSection && videoFrame && videoContent) {
            gsap.from(videoFrame, {
              clipPath: "inset(8% 8% 8% 8% round 30px)",
              scale: 0.96,
              opacity: 0,
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: {
                trigger: videoSection,
                start: "top 75%",
                once: true,
              },
            });

            gsap.from(videoContent.children, {
              y: 35,
              opacity: 0,
              duration: 1,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: videoSection,
                start: "top 75%",
                once: true,
              },
            });
          }

          // CINEMATIC MISSION AND APPROACH STORY
          if (window.matchMedia("(min-width: 1024px)").matches) {
            const pin = select(".chapters-pin")[0];
            const chapterImages = select(".chapter-img");
            const photos = select(".chapter-photo");
            const texts = select(".chapter-text");
            const dots = select(".chapter-dot");

            if (pin && chapterImages.length) {
              gsap.set(chapterImages.slice(1), {
                clipPath: "inset(100% 0% 0% 0%)",
              });

              gsap.set(texts.slice(1), {
                opacity: 0,
                y: 60,
              });

              gsap.set(dots.slice(1), {
                opacity: 0.3,
                height: 16,
              });

              const story = gsap.timeline({
                scrollTrigger: {
                  trigger: pin,
                  start: "top top",
                  end: "+=200%",
                  pin: true,
                  scrub: 1,
                  anticipatePin: 1,
                },
              });

              story
                .fromTo(
                  photos[0],
                  { scale: 1.2 },
                  { scale: 1.05, duration: 2, ease: "none" },
                  0
                )
                .fromTo(
                  texts[0],
                  { y: 60, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                  },
                  0.1
                );

              for (let i = 1; i < chapterImages.length; i++) {
                const position = i * 2;

                story
                  .to(
                    texts[i - 1],
                    {
                      opacity: 0,
                      y: -45,
                      duration: 0.6,
                    },
                    position - 0.2
                  )
                  .to(
                    chapterImages[i],
                    {
                      clipPath: "inset(0% 0% 0% 0%)",
                      duration: 1.2,
                      ease: "power2.inOut",
                    },
                    position - 0.2
                  )
                  .fromTo(
                    photos[i],
                    { scale: 1.25 },
                    {
                      scale: 1.05,
                      duration: 2,
                      ease: "none",
                    },
                    position - 0.2
                  )
                  .to(
                    texts[i],
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.8,
                      ease: "power3.out",
                    },
                    position + 0.4
                  )
                  .to(
                    dots[i - 1],
                    {
                      opacity: 0.3,
                      height: 16,
                      duration: 0.4,
                    },
                    position
                  )
                  .to(
                    dots[i],
                    {
                      opacity: 1,
                      height: 56,
                      duration: 0.4,
                    },
                    position
                  );
              }

              story.to({}, { duration: 0.5 });
            }
          } else {
            // MOBILE CHAPTER REVEALS
            select(".chapter-card").forEach((card) => {
              const photo = card.querySelector(".chapter-card-photo");
              const text = card.querySelector(".chapter-card-text");

              if (photo) {
                gsap.from(photo, {
                  scale: 1.15,
                  duration: 1.4,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                  },
                });
              }

              if (text) {
                gsap.from(text, {
                  y: 35,
                  opacity: 0,
                  duration: 0.9,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                  },
                });
              }
            });
          }

          // MARQUEE
          const track = select(".marquee-track")[0];

          if (track) {
            const marquee = gsap.to(track, {
              xPercent: -50,
              duration: 35,
              ease: "none",
              repeat: -1,
            });

            const marqueeBand = select(".marquee-band")[0];

            if (marqueeBand) {
              ScrollTrigger.create({
                trigger: marqueeBand,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                  const speed =
                    1 + Math.min(Math.abs(self.getVelocity()) / 350, 4);

                  marquee.timeScale(self.direction * speed);

                  gsap.to(marquee, {
                    timeScale: self.direction,
                    duration: 1,
                    ease: "power3.out",
                  });
                },
              });
            }
          }

          // WHAT DRIVES US REVEAL
          const pillars = select(".pillar");
          const pillarsSection = select(".pillars-section")[0];

          if (pillars.length && pillarsSection) {
            gsap.from(pillars, {
              y: 65,
              opacity: 0,
              duration: 1,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: {
                trigger: pillarsSection,
                start: "top 75%",
              },
            });
          }

          // IMPACT IMAGE PARALLAX
          const impactImage = select(".impact-image")[0];
          const impactFrame = select(".impact-frame")[0];

          if (impactImage && impactFrame) {
            gsap.fromTo(
              impactImage,
              { yPercent: -8, scale: 1.12 },
              {
                yPercent: 8,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: impactFrame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );

            gsap.from(impactFrame, {
              clipPath: "inset(10% 6% 10% 6%)",
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: impactFrame,
                start: "top 80%",
              },
            });
          }

          // IMPACT ITEMS
          const impactItems = select(".impact-item");
          const metricsGrid = select(".metrics-grid")[0];

          if (impactItems.length && metricsGrid) {
            gsap.from(impactItems, {
              y: 50,
              opacity: 0,
              duration: 0.9,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: {
                trigger: metricsGrid,
                start: "top 85%",
              },
            });
          }

          // FLOATING DECORATIVE ELEMENTS
          const floatingElements = select(".organic-float");

          if (floatingElements.length) {
            gsap.to(floatingElements, {
              y: -18,
              rotation: 8,
              duration: 4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              stagger: 0.7,
            });
          }
        }
      );
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

      {/* =========================================
          01 — INTRODUCTION
      ========================================= */}
      <div className="living-intro relative px-5 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:py-40">
        <div className="relative z-10 mx-auto max-w-[1700px]">
          <div className="intro-detail mb-16 flex items-center justify-between border-b border-forest-800/20 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-forest-700" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                About Terra Ecopreneurs
              </span>
            </div>

            <span className="font-mono text-[10px] tracking-widest text-forest-700/50">
              GROWING TOGETHER — 001
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
            {/* LEFT CONTENT */}
            <div className="relative z-10 lg:col-span-7">
              <h1
                aria-label="Building a future where agriculture and nature thrive together."
                className="font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] tracking-[-0.09em]"
              >
                <span className="block">
                  <SplitChars text="Growing a" charClass="intro-char" />
                </span>

                <span className="block">
                  <SplitChars text="better" charClass="intro-char" />{" "}
                  <SplitChars
                    text="future."
                    charClass="intro-char"
                    className="italic text-forest-600"
                  />
                </span>
              </h1>

              <div className="intro-detail mt-12 flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
                <p className="max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
                  We are a team of innovators, sustainability advocates, and
                  problem-solvers committed to transforming agriculture through
                  meaningful innovation. Together with farmers, communities,
                  and industry partners, we create opportunities for a more
                  sustainable future.
                </p>

                <div className="flex shrink-0 items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/30">
                    <ArrowDown size={17} />
                  </div>

                  <span className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em]">
                    Discover more
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL COMPOSITION */}
            <div className="intro-visual relative mx-auto h-[480px] w-full max-w-[540px] lg:col-span-5 lg:h-[650px]">
              <div className="intro-visual-main absolute right-0 top-0 h-[82%] w-[76%] overflow-hidden rounded-t-[180px] rounded-b-[12px] shadow-2xl shadow-forest-900/15">
                <img
                  src={images.agriculture}
                  alt="Lush green agricultural fields"
                  className="h-[115%] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
              </div>

              <div className="intro-visual-circle absolute bottom-[3%] left-0 z-10 h-[210px] w-[210px] overflow-hidden rounded-full border-[8px] border-ivory shadow-2xl shadow-forest-900/20 sm:h-[260px] sm:w-[260px] lg:bottom-[5%] lg:h-[290px] lg:w-[290px]">
                <img
                  src={images.forest}
                  alt="Rich green forest canopy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="organic-float absolute right-[3%] top-[12%] z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-ivory/90 text-forest-700 shadow-lg backdrop-blur-sm sm:h-20 sm:w-20">
                <Sprout size={35} strokeWidth={1} />
              </div>

              <div className="absolute bottom-[2%] right-[2%] z-20 hidden items-center gap-3 sm:flex">
                <span className="h-px w-8 bg-forest-600/60" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-700">
                  Rooted in nature
                </span>
              </div>

              <div className="pointer-events-none absolute -right-3 top-6 h-[82%] w-[76%] rounded-t-[180px] rounded-b-[12px] border border-forest-800/20" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          02 — ORIGINAL GROW CINEMATIC REVEAL
      ========================================= */}
      <div className="hero-pin relative h-[88svh] min-h-[600px] overflow-hidden bg-ivory lg:h-screen">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <span className="earth-back font-display text-[clamp(5rem,22vw,26rem)] leading-none tracking-[-0.1em] text-transparent [-webkit-text-stroke:1px_rgba(27,67,50,0.28)]">
            GROW
          </span>
        </div>

        <div className="hero-frame absolute inset-0 z-10 overflow-hidden">
          <img
            src={images.aerial}
            alt="Sunlight over a lush natural landscape"
            className="intro-image h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#122B20]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/80 via-transparent to-[#122B20]/10" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <span className="font-display text-[clamp(5rem,22vw,26rem)] leading-none tracking-[-0.1em] text-white/[0.12] [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">
            GROW
          </span>
        </div>

        <div className="organic-float absolute right-[13%] top-[18%] z-30 text-white/70">
          <Leaf size={55} strokeWidth={0.8} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end gap-8 px-6 pb-10 sm:px-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between lg:px-20">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9E7C9]">
              <span className="h-px w-10 bg-[#D9E7C9]" />
              Our purpose
            </p>

            <h2 className="font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.87] tracking-[-0.075em] text-white">
              Agriculture
              <br />
              meets
              <span className="italic text-[#D9E7C9]"> innovation.</span>
            </h2>
          </div>

          <div className="flex max-w-[270px] items-center gap-4 text-white/80">
            <Globe2 size={30} strokeWidth={1} />

            <p className="text-xs leading-6">
              Building stronger agricultural communities through
              sustainability, innovation, and meaningful partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          02.5 — WHITE SPLIT VIDEO SECTION
      ========================================= */}
      <section className="terra-video-section relative overflow-hidden bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1700px]">

          {/* TOP LABEL */}
          <div className="mb-12 flex items-center justify-between gap-4 border-b border-forest-800/15 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-forest-700" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-forest-700">
                The Terra experience
              </span>
            </div>

            <span className="font-mono text-[10px] tracking-widest text-forest-700/50">
              NATURE IN MOTION — 003
            </span>
          </div>

          {/* SPLIT LAYOUT */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT — VIDEO */}
            <div className="terra-video-frame group relative h-[420px] overflow-hidden rounded-[1.5rem] bg-forest-900 sm:h-[550px] lg:h-[680px]">
              <video
                className="terra-video absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={images.aerial}
              >
                <source
                  src="https://media.istockphoto.com/id/2292801163/video/close-up-view-of-engine-gears-rotating-with-metal-chain.mp4?s=mp4-480x480-is&k=20&c=wMbt-yAUFi0xp4jKx894O7bjczc59qJMOvnLVl-XqYc="
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>

              {/* VIDEO OVERLAY */}
              <div className="absolute inset-0 bg-[#10271D]/15 transition-colors duration-700 group-hover:bg-[#10271D]/5" />

              {/* VIDEO LABEL */}
              <div className="absolute left-6 top-6 sm:left-9 sm:top-9">
                <span className="rounded-full border border-white/50 bg-black/10 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Terra / In motion
                </span>
              </div>

              {/* BOTTOM VIDEO TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <div className="flex items-center gap-3 text-white">
                  <span className="h-px w-8 bg-white" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
                    Nature in every frame
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — CONTENT */}
            <div className="terra-video-content relative py-6 lg:py-12">

              <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-forest-600">
                <span className="h-px w-10 bg-forest-600" />
                Rooted in nature
              </p>

              <h2 className="font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.075em] text-forest-900">
                Every seed
                <br />
                <span className="italic text-forest-600">
                  holds a future.
                </span>
              </h2>

              <p className="mt-9 max-w-lg text-base leading-8 text-charcoal/65 sm:text-lg">
                Every transformation begins with a small step. We believe
                in empowering farmers, embracing innovation, and nurturing
                a sustainable relationship between people and nature.
              </p>

              <div className="mt-12 flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest-800/20 text-forest-700 transition-all duration-500 hover:bg-forest-800 hover:text-white">
                  <Sprout size={26} strokeWidth={1} />
                </div>

                <div>
                  <p className="font-display text-xl tracking-tight text-forest-900">
                    Growing with purpose.
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-charcoal/50">
                    Building a greener tomorrow, together.
                  </p>
                </div>
              </div>

              {/* DECORATIVE DETAIL */}
              <div className="mt-16 flex items-center gap-4 border-t border-forest-800/15 pt-6">
                <span className="font-mono text-xs text-forest-600">
                  01 / 03
                </span>
                <div className="h-px flex-1 bg-forest-800/15" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-forest-700/50">
                  Sustainable by nature
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          03 — OUR MISSION / OUR APPROACH
      ========================================= */}

      {/* DESKTOP PINNED STORY */}
      {/* <div className="hidden lg:block">
        <div className="chapters-pin relative h-screen min-h-[700px] overflow-hidden bg-[#10271D]">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.no}
              className="chapter-img absolute inset-0 overflow-hidden"
            >
              <img
                src={chapter.image}
                alt={chapter.alt}
                className="chapter-photo absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#10271D]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/85 via-transparent to-[#10271D]/20" />
            </div>
          ))}

          <div className="absolute left-12 top-12 z-20">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
              Terra / 002
            </span>
          </div>

          <div className="organic-float absolute right-[14%] top-[18%] z-20 text-[#D9E7C9]/80">
            <Sprout size={70} strokeWidth={0.7} />
          </div>

          <div className="absolute right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 xl:right-20">
            {CHAPTERS.map((chapter, index) => (
              <span
                key={chapter.no}
                className="chapter-dot w-[3px] rounded-full bg-white"
                style={{ height: index === 0 ? 56 : 16 }}
              />
            ))}
          </div>

          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.no}
              className="chapter-text absolute inset-x-0 bottom-0 z-20 px-12 pb-20 xl:px-20"
            >
              <div className="mb-7 flex items-center gap-3 text-[#D9E7C9]">
                <span className="h-px w-10 bg-[#D9E7C9]" />

                <span className="text-[10px] uppercase tracking-[0.25em]">
                  {chapter.no} — {chapter.label}
                </span>
              </div>

              <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,10rem)] leading-[0.88] tracking-[-0.075em] text-white">
                {chapter.lines[0]}
                <br />
                <span className="italic text-[#D9E7C9]">
                  {chapter.lines[1]}
                </span>
              </h2>

              <div className="mt-10 flex items-end justify-between gap-10 border-t border-white/30 pt-6">
                <p className="max-w-xl text-base leading-7 text-white/75">
                  {chapter.body}
                </p>

                <span className="font-display text-6xl text-white/40">
                  {chapter.no}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* MOBILE STACKED STORY */}
      <div className="block lg:hidden">
        {CHAPTERS.map((chapter) => (
          <div
            key={chapter.no}
            className="chapter-card relative h-[85vh] min-h-[560px] overflow-hidden bg-[#10271D]"
          >
            <img
              src={chapter.image}
              alt={chapter.alt}
              loading="lazy"
              className="chapter-card-photo absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#10271D]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/90 via-transparent to-[#10271D]/20" />

            <div className="chapter-card-text absolute inset-x-0 bottom-0 px-6 pb-12 sm:px-12">
              <div className="mb-5 flex items-center gap-3 text-[#D9E7C9]">
                <span className="h-px w-10 bg-[#D9E7C9]" />

                <span className="text-[10px] uppercase tracking-[0.25em]">
                  {chapter.no} — {chapter.label}
                </span>
              </div>

              <h2 className="font-display text-[clamp(3.2rem,13vw,6rem)] leading-[0.9] tracking-[-0.07em] text-white">
                {chapter.lines[0]}
                <br />
                <span className="italic text-[#D9E7C9]">
                  {chapter.lines[1]}
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
                {chapter.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          04 — MARQUEE
      ========================================= */}
      <div className="marquee-band overflow-hidden bg-forest-800 py-7 text-ivory">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center"
              aria-hidden={copy === 1}
            >
              {MARQUEE_WORDS.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="flex items-center"
                >
                  <span className="px-8 font-display text-5xl tracking-[-0.05em] sm:text-7xl">
                    {word}
                  </span>

                  <Leaf
                    size={34}
                    strokeWidth={1}
                    className="text-[#B5F27E]"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          05 — WHAT DRIVES US
      ========================================= */}
      <div className="pillars-section relative overflow-hidden bg-[#E7EBDD] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
        <div className="mx-auto max-w-[1700px]">
          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
                The Terra mindset
              </p>

             <h2 className="whitespace-nowrap font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.9] tracking-[-0.075em]">
  What drives{" "}
  <span className="italic text-forest-600">us forward.</span>
</h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-charcoal/65">
              Our values shape every decision we make and every partnership
              we build. They guide us towards meaningful and lasting change.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.no}
                  className="pillar group relative min-h-[390px] overflow-hidden rounded-[1.8rem] border border-forest-800/15 p-7 transition-colors duration-700 hover:border-forest-800 sm:p-9"
                >
                  <span className="absolute inset-0 translate-y-full bg-forest-800 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

                  <div className="relative z-10 flex h-full flex-col transition-colors duration-500 group-hover:text-white">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-forest-600 transition-colors duration-500 group-hover:text-[#B5F27E]">
                        {pillar.no} /
                      </span>

                      <ArrowUpRight
                        size={20}
                        className="translate-x-0 translate-y-0 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </div>

                    <div className="my-auto py-12">
                      <Icon
                        size={65}
                        strokeWidth={0.8}
                        className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-3xl tracking-[-0.055em] sm:text-4xl">
                        {pillar.title[0]}
                        <br />
                        {pillar.title[1]}
                      </h3>

                      <p className="mt-5 max-w-xs text-sm leading-7 text-charcoal/65 transition-colors duration-500 group-hover:text-white/75">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================
          06 — IMPACT
      ========================================= */}
      {/* <div className="impact-section relative px-5 py-28 sm:px-10 sm:py-40 lg:px-16">
        <div className="mx-auto max-w-[1700px]">
          <div className="impact-frame relative mb-20 h-[420px] overflow-hidden sm:h-[600px] lg:h-[750px]">
            <img
              src={images.landscape}
              alt="A lush green landscape surrounded by nature"
              loading="lazy"
              className="impact-image absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#122B20]/30" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#122B20]/75 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-7 right-7 sm:bottom-14 sm:left-14">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9E7C9]">
                Beyond today
              </p>

              <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-[-0.075em] text-white">
                A better world
                <br />
                is built together.
              </h2>
            </div>
          </div>

          
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em]">
              Progress that makes
              <span className="italic text-forest-600"> a difference.</span>
            </h2>
          </div>

          <div className="metrics-grid grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {IMPACTS.map((item) => (
              <div
                className="impact-item border-l border-forest-800/20 pl-5 sm:pl-8"
                key={item.no}
              >
                <span className="font-mono text-[10px] text-forest-600">
                  {item.no}
                </span>

                <h3 className="mt-6 font-display text-3xl tracking-[-0.055em] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[240px] text-sm leading-7 text-charcoal/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
