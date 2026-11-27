
// import { useEffect, useState } from 'react';
// import { MaskedLines } from '@/components/Reveal';

// const slides = [
//   {
//     eyebrow: 'About Terra',
//     title: ['A decade of engineering', 'for the real world.'],
//     description:
//       'Building meaningful solutions through engineering, innovation and a commitment to a more sustainable real world.',
//     label: 'Engineering a better tomorrow',
//     image:
//       'https://i.pinimg.com/736x/8b/7d/3b/8b7d3bd436132f1b139c298cb003e5c0.jpg',
//     imageAlt: 'Electrical power and engineering infrastructure',
//     imageLabel: 'Engineering & Innovation',
//   },
//   {
//     eyebrow: 'Clean Energy',
//     title: ['Powering progress', 'with clean energy.'],
//     description:
//       'Creating smarter energy solutions that help businesses reduce their environmental impact and build a cleaner future.',
//     label: 'Powering a sustainable future',
//     image:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90',
//     imageAlt: 'Solar panels generating renewable energy',
//     imageLabel: 'Renewable Energy',
//   },
//   {
//     eyebrow: 'Sustainable Agriculture',
//     title: ['Growing better', 'for generations.'],
//     description:
//       'Combining technology, engineering and sustainable practices to create meaningful change for agriculture and communities.',
//     label: 'Building a greener tomorrow',
//     image:
//       'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90',
//     imageAlt: 'Green agricultural fields and sustainable landscape',
//     imageLabel: 'Sustainable Agriculture',
//   },
// ];

// export function AboutHero() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const currentSlide = slides[activeSlide];

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Automatic carousel - changes every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex min-h-[auto] items-center overflow-hidden bg-[#F8F8F4] text-[#10372D]">

//       <div className="shell relative z-10 w-full py-16 sm:py-20 lg:py-24">

//         <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

//           {/* LEFT CONTENT */}
//           <div className="flex flex-col justify-center">

//             {/* Eyebrow */}
//             <p className="mb-7 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.24em] text-[#173C35] sm:mb-9 sm:text-sm">
//               <span className="h-px w-12 bg-[#173C35]" />
//               {currentSlide.eyebrow}
//             </p>

//             {/* Heading */}
//             <div className="min-h-[140px] max-w-[750px] overflow-visible pb-3 sm:min-h-[180px] lg:min-h-[220px]">
//               <MaskedLines
//                 key={`heading-${activeSlide}`}
//                 lines={currentSlide.title}
//                 className="max-w-5xl font-serif text-[clamp(3rem,6.5vw,6rem)] font-normal leading-[0.98] tracking-[-0.045em] text-[#10372D]"
//                 startDelay={100}
//               />
//             </div>

//             {/* Description */}
//             <div
//               key={`description-${activeSlide}`}
//               className="mt-5 max-w-[620px] animate-[fadeIn_0.6s_ease]"
//             >
//               <p className="text-sm leading-[1.8] text-[#536779] sm:text-base lg:text-lg">
//                 {currentSlide.description}
//               </p>
//             </div>

//             {/* Bottom Label */}
//             <div className="mt-8 flex items-center gap-5 sm:mt-10">
//               <span className="h-px w-14 bg-[#173C35]" />
//               <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#173C35] sm:text-xs">
//                 {currentSlide.label}
//               </p>
//             </div>

//             {/* Mobile Carousel Controls */}
//             <div className="mt-8 flex items-center gap-5 lg:hidden">

//               <button
//                 onClick={prevSlide}
//                 aria-label="Previous slide"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
//               >
//                 ←
//               </button>

//               <span className="text-xs tracking-[0.2em] text-[#536779]">
//                 0{activeSlide + 1} / 0{slides.length}
//               </span>

//               <button
//                 onClick={nextSlide}
//                 aria-label="Next slide"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
//               >
//                 →
//               </button>

//             </div>
//           </div>

//           {/* RIGHT IMAGE CAROUSEL */}
//           <div className="relative">

//             {/* Image Container */}
//             <div className="group relative aspect-[4/3.5] w-full overflow-hidden bg-[#E8E9E1] sm:aspect-[4/3] lg:aspect-[4/3.5]">

//               {slides.map((slide, index) => (
//                 <img
//                   key={slide.image}
//                   src={slide.image}
//                   alt={slide.imageAlt}
//                   className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
//                     activeSlide === index
//                       ? 'scale-100 opacity-100'
//                       : 'scale-105 opacity-0'
//                   }`}
//                 />
//               ))}

//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#102E25]/60 via-transparent to-transparent" />

//               {/* Image Caption */}
//               <div className="absolute bottom-0 left-0 p-6 sm:p-8">
//                 <p
//                   key={`caption-${activeSlide}`}
//                   className="animate-[fadeIn_0.6s_ease] text-xs font-medium uppercase tracking-[0.24em] text-white sm:text-sm"
//                 >
//                   {currentSlide.imageLabel}
//                 </p>
//               </div>

//               {/* Slide Number */}
//               <div className="absolute right-6 top-6 text-sm font-medium tracking-widest text-white">
//                 0{activeSlide + 1}{' '}
//                 <span className="text-white/60">/ 0{slides.length}</span>
//               </div>

//             </div>

//             {/* Desktop Carousel Controls */}
//             <div className="mt-6 hidden items-center justify-between lg:flex">

//               {/* Progress Indicators */}
//               <div className="flex items-center gap-3">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveSlide(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                     className={`h-[3px] transition-all duration-500 ${
//                       activeSlide === index
//                         ? 'w-12 bg-[#173C35]'
//                         : 'w-6 bg-[#173C35]/25 hover:bg-[#173C35]/60'
//                     }`}
//                   />
//                 ))}
//               </div>

//               {/* Arrow Buttons */}
//               <div className="flex items-center gap-3">

//                 <button
//                   onClick={prevSlide}
//                   aria-label="Previous slide"
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
//                 >
//                   ←
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173C35]/30 text-2xl text-[#173C35] transition-all duration-300 hover:bg-[#10372D] hover:text-white"
//                 >
//                   →
//                 </button>

//               </div>
//             </div>

//             {/* Mobile Progress Indicators */}
//             <div className="mt-5 flex gap-3 lg:hidden">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className={`h-[3px] transition-all duration-500 ${
//                     activeSlide === index
//                       ? 'w-12 bg-[#173C35]'
//                       : 'w-6 bg-[#173C35]/25'
//                   }`}
//                 />
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useEffect, useState, type CSSProperties } from 'react';
// import { MaskedLines } from '@/components/Reveal';

// const slides = [
//   {
//     eyebrow: 'About Terra',
//     title: ['A decade of', 'engineering', 'for the real world.'],
//     description:
//       'Building meaningful solutions through engineering, innovation and a commitment to a more sustainable real world.',
//     label: 'Engineering a better tomorrow',
//     image:
//       'https://i.pinimg.com/736x/8b/7d/3b/8b7d3bd436132f1b139c298cb003e5c0.jpg',
//     imageAlt: 'Electrical power and engineering infrastructure',
//     imageLabel: 'Engineering & Innovation',
//     features: [
//       'ENGINEERING EXCELLENCE',
//       'SMART TECHNOLOGY',
//       'SUSTAINABLE SOLUTIONS',
//       'REAL-WORLD IMPACT',
//     ],
//     badge: '10+ YEARS',
//     badgeText: 'OF ENGINEERING',
//     cta: 'EXPLORE TERRA',
//   },
//   {
//     eyebrow: 'Clean Energy',
//     title: ['Powering progress', 'with clean energy.'],
//     description:
//       'Creating smarter energy solutions that help businesses reduce their environmental impact and build a cleaner future.',
//     label: 'Powering a sustainable future',
//     image:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90',
//     imageAlt: 'Solar panels generating renewable energy',
//     imageLabel: 'Renewable Energy',
//     features: [
//       'RENEWABLE ENERGY',
//       'ENERGY OPTIMIZATION',
//       'SMART MONITORING',
//       'LOWER EMISSIONS',
//     ],
//     badge: 'CLEAN',
//     badgeText: 'ENERGY FUTURE',
//     cta: 'OUR ENERGY SOLUTIONS',
//   },
//   {
//     eyebrow: 'Sustainable Agriculture',
//     title: ['Growing better', 'for generations.'],
//     description:
//       'Combining technology, engineering and sustainable practices to create meaningful change for agriculture and communities.',
//     label: 'Building a greener tomorrow',
//     image:
//       'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90',
//     imageAlt: 'Green agricultural fields and sustainable landscape',
//     imageLabel: 'Sustainable Agriculture',
//     features: [
//       'SMART AGRICULTURE',
//       'FARMER DEVELOPMENT',
//       'RESOURCE EFFICIENCY',
//       'RURAL COMMUNITIES',
//     ],
//     badge: 'GROW',
//     badgeText: 'SUSTAINABLY',
//     cta: 'DISCOVER AGRICULTURE',
//   },
// ];

// const secondImages = [
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=90',
//   'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=90',
//   'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=90',
// ];

// const thirdImages = [
//   'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=90',
//   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=90',
//   'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=90',
// ];

// /* Green palette */
// const GREEN = '#2D7A4F';
// const GREEN_DARK = '#1C4D35';
// const GREEN_LIGHT = '#3A8B5C';
// const INK = '#1C3F2E';

// const scriptFont = "'Caveat','Mrs Saint Delafield','Brush Script MT',cursive";

// const HEX_CLIP =
//   'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

// /* ---------- small building blocks ---------- */

// const Waves = ({ stroke }: { stroke: string }) => (
//   <svg width="70" height="26" viewBox="0 0 70 26" fill="none">
//     {[0, 7, 14].map((y) => (
//       <path
//         key={y}
//         d={`M2 ${y + 5} Q10 ${y - 2} 18 ${y + 5} T34 ${y + 5} T50 ${y + 5} T66 ${y + 5}`}
//         stroke={stroke}
//         strokeWidth="1.2"
//       />
//     ))}
//   </svg>
// );

// /* hexagon photo with double outline, like the reference */
// const HexImage = ({
//   src,
//   alt,
//   style,
// }: {
//   src: string;
//   alt: string;
//   style: CSSProperties;
// }) => (
//   <div className="absolute drop-shadow-xl" style={style}>
//     <div
//       className="relative h-full w-full"
//       style={{ clipPath: HEX_CLIP, background: GREEN }}
//     >
//       <div
//         className="absolute inset-[2.5%] bg-white"
//         style={{ clipPath: HEX_CLIP }}
//       />
//       <div
//         className="absolute inset-[5%]"
//         style={{ clipPath: HEX_CLIP, background: GREEN_DARK }}
//       />
//       <div
//         className="absolute inset-[6.5%] overflow-hidden"
//         style={{ clipPath: HEX_CLIP }}
//       >
//         <img
//           src={src}
//           alt={alt}
//           className="h-full w-full object-cover transition-all duration-700"
//         />
//       </div>
//     </div>
//   </div>
// );

// export function AboutHero() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const currentSlide = slides[activeSlide];

//   const nextSlide = () => setActiveSlide((p) => (p + 1) % slides.length);
//   const prevSlide = () =>
//     setActiveSlide((p) => (p - 1 + slides.length) % slides.length);

//   const arrows: { label: string; onClick: () => void; icon: string }[] = [
//     { label: 'Previous slide', onClick: prevSlide, icon: '←' },
//     { label: 'Next slide', onClick: nextSlide, icon: '→' },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((p) => (p + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full bg-[#F3F6F4]">
//       <div className="relative w-full overflow-hidden">

//         <div className="relative grid min-h-[600px] lg:min-h-[640px] lg:grid-cols-[1.1fr_1fr]">
//           {/* ================= LEFT ================= */}
//           <div className="relative z-20 flex flex-col justify-between px-6 py-10 sm:px-10 lg:pl-20 lg:pr-8 lg:py-12">
//             {/* BRAND */}
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div
//                   className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
//                   style={{ background: GREEN }}
//                 >
//                   <svg viewBox="0 0 40 40" fill="none" className="h-7 w-7">
//                     <path
//                       d="M6 31V19L15 13V31M15 31V8L25 14V31M25 31V19L34 12V31"
//                       stroke="currentColor"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p
//                     className="text-base font-bold leading-none tracking-tight"
//                     style={{ color: INK }}
//                   >
//                     Terra Ecopreneurs
//                   </p>
//                   <p className="mt-1 text-[9px] tracking-[0.18em] text-slate-500">
//                     ENGINEERING A BETTER FUTURE
//                   </p>
//                 </div>
//               </div>

//               <div className="hidden pr-24 sm:block">
//                 <Waves stroke="#9CA3AF" />
//               </div>
//             </div>

//             {/* HEADING */}
//             <div className="relative">
//               <p
//                 className="mb-2 text-xs font-bold uppercase tracking-[0.25em]"
//                 style={{ color: GREEN_LIGHT }}
//               >
//                 {currentSlide.eyebrow}
//               </p>

//               <div
//                 key={`title-${activeSlide}`}
//                 className="max-w-[620px] overflow-visible pb-2"
//               >
//                 <MaskedLines
//                   lines={currentSlide.title}
//                   className="font-sans text-[clamp(2.2rem,4vw,4.2rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-[#1C3F2E]"
//                   startDelay={100}
//                 />
//               </div>

//               {/* short accent line under the heading */}
//               <div
//                 className="mt-3 h-[2px] w-20"
//                 style={{ background: GREEN_LIGHT }}
//               />

//               {/* SUBTITLE */}
//               <div className="mt-4">
//                 <p
//                   className="text-lg font-extrabold sm:text-xl"
//                   style={{ color: GREEN }}
//                 >
//                   {currentSlide.label}
//                 </p>
//                 <p
//                   className="mt-0 text-3xl leading-tight sm:text-4xl"
//                   style={{ fontFamily: scriptFont, color: INK }}
//                 >
//                   Engineering change that matters.
//                 </p>
//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <p
//               key={`desc-${activeSlide}`}
//               className="mt-5 max-w-[470px] animate-[fadeIn_0.6s_ease] text-sm leading-relaxed text-slate-600 sm:text-base"
//             >
//               {currentSlide.description}
//             </p>

//             {/* CTA + CONTACT (same row, like the reference) */}
//             <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById('about')
//                     ?.scrollIntoView({ behavior: 'smooth' })
//                 }
//                 className="group flex items-stretch overflow-hidden rounded-[3px] text-xs font-bold uppercase tracking-wider text-white shadow-md"
//                 style={{ background: GREEN }}
//               >
//                 <span className="px-6 py-3">{currentSlide.cta}</span>
//                 <span
//                   className="flex w-12 items-center justify-center text-base transition-transform duration-300 group-hover:translate-x-0.5"
//                   style={{ background: GREEN_DARK }}
//                 >
//                   →
//                 </span>
//               </button>

//               <div className="flex items-center gap-3">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-7 w-7"
//                   fill="none"
//                   stroke={GREEN}
//                   strokeWidth="1.6"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 2 11 13" />
//                   <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
//                 </svg>
//                 <div>
//                   <p className="text-[9px] uppercase tracking-widest text-slate-400">
//                     Get in touch
//                   </p>
//                   <p className="text-sm font-bold" style={{ color: INK }}>
//                     Let's build a better future
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* SLIDE INDICATORS + ARROWS */}
//             <div className="mt-6 flex items-center justify-start gap-4 pb-6">

//               <div className="flex gap-3">
//                 {arrows.map(({ label, onClick, icon }) => (
//                   <button
//                     key={label}
//                     onClick={onClick}
//                     aria-label={label}
//                     className="flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:text-white"
//                     style={{ borderColor: `${INK}33`, color: INK }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.background = INK)
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.background = '#fff')
//                     }
//                   >
//                     {icon}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT: HONEYCOMB ================= */}
//           <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 pb-14 pt-24 lg:px-8 lg:pb-12 lg:pt-28">

//             {/* hexagon stage */}
//             <div
//               className="relative"
//               style={
//                 {
//                   '--w': 'clamp(140px, min(18vw, 29vh), 310px)',
//                   width: 'calc(var(--w) * 2.04)',
//                   height: 'calc(var(--w) * 2.056)',
//                 } as CSSProperties
//               }
//             >
//               <HexImage
//                 src={currentSlide.image}
//                 alt={currentSlide.imageAlt}
//                 style={{
//                   left: 0,
//                   top: 0,
//                   width: 'var(--w)',
//                   height: 'calc(var(--w) * 1.1547)',
//                 }}
//               />
//               <HexImage
//                 src={secondImages[activeSlide]}
//                 alt="Terra Ecopreneurs sustainable project"
//                 style={{
//                   left: 'calc(var(--w) * 1.04)',
//                   top: 0,
//                   width: 'var(--w)',
//                   height: 'calc(var(--w) * 1.1547)',
//                 }}
//               />
//               <HexImage
//                 src={thirdImages[activeSlide]}
//                 alt="Terra Ecopreneurs project highlight"
//                 style={{
//                   left: 'calc(var(--w) * 0.52)',
//                   top: 'calc(var(--w) * 0.901)',
//                   width: 'var(--w)',
//                   height: 'calc(var(--w) * 1.1547)',
//                 }}
//               />

//               {/* FLOATING BADGE */}
//               <div
//                 className="absolute z-30 flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border-4 border-white text-center text-white shadow-xl sm:h-[128px] sm:w-[128px]"
//                 style={{
//                   background: GREEN_LIGHT,
//                   left: 'calc(var(--w) * -0.42)',
//                   top: 'calc(var(--w) * 1.2)',
//                 }}
//               >
//                 <p className="whitespace-nowrap px-2 text-[8px] font-semibold uppercase tracking-[0.08em] sm:text-[9px]">
//                   {currentSlide.badgeText}
//                 </p>
//                 <p className="mt-1 text-lg font-black leading-none sm:text-2xl">
//                   {currentSlide.badge}
//                 </p>
//                 <div className="mt-2 h-px w-10 bg-white/80" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useState, type CSSProperties } from 'react';
import { MaskedLines } from '@/components/Reveal';

const slides = [
  {
    eyebrow: 'About Terra',
    title: ['A decade of', 'engineering', 'for the real world.'],
    description:
      'Building meaningful solutions through engineering, innovation and a commitment to a more sustainable real world.',
    label: 'Engineering a better tomorrow',
    image:
      'https://i.pinimg.com/736x/8b/7d/3b/8b7d3bd436132f1b139c298cb003e5c0.jpg',
    imageAlt: 'Electrical power and engineering infrastructure',
    imageLabel: 'Engineering & Innovation',
    features: [
      'ENGINEERING EXCELLENCE',
      'SMART TECHNOLOGY',
      'SUSTAINABLE SOLUTIONS',
      'REAL-WORLD IMPACT',
    ],
    badge: '10+ YEARS',
    badgeText: 'OF ENGINEERING',
    cta: 'EXPLORE TERRA',
  },
  {
    eyebrow: 'Clean Energy',
    title: ['Powering progress', 'with clean energy.'],
    description:
      'Creating smarter energy solutions that help businesses reduce their environmental impact and build a cleaner future.',
    label: 'Powering a sustainable future',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90',
    imageAlt: 'Solar panels generating renewable energy',
    imageLabel: 'Renewable Energy',
    features: [
      'RENEWABLE ENERGY',
      'ENERGY OPTIMIZATION',
      'SMART MONITORING',
      'LOWER EMISSIONS',
    ],
    badge: 'CLEAN',
    badgeText: 'ENERGY FUTURE',
    cta: 'OUR ENERGY SOLUTIONS',
  },
  {
    eyebrow: 'Sustainable Agriculture',
    title: ['Growing better', 'for generations.'],
    description:
      'Combining technology, engineering and sustainable practices to create meaningful change for agriculture and communities.',
    label: 'Building a greener tomorrow',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90',
    imageAlt: 'Green agricultural fields and sustainable landscape',
    imageLabel: 'Sustainable Agriculture',
    features: [
      'SMART AGRICULTURE',
      'FARMER DEVELOPMENT',
      'RESOURCE EFFICIENCY',
      'RURAL COMMUNITIES',
    ],
    badge: 'GROW',
    badgeText: 'SUSTAINABLY',
    cta: 'DISCOVER AGRICULTURE',
  },
];

const secondImages = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=90',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=90',
  'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=90',
];

const thirdImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=90',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=90',
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=90',
];

/* Green palette */
const TEAL_DARK = '#1C4D35';
const TEAL = '#2D7A4F';
const CYAN = '#3A8B5C';
const INK = '#1C3F2E';

const scriptFont = "'Caveat','Mrs Saint Delafield','Brush Script MT',cursive";

const Check = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/80">
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  </span>
);

const Waves = ({ stroke }: { stroke: string }) => (
  <svg width="70" height="26" viewBox="0 0 70 26" fill="none">
    {[0, 7, 14].map((y) => (
      <path
        key={y}
        d={`M2 ${y + 5} Q10 ${y - 2} 18 ${y + 5} T34 ${y + 5} T50 ${y + 5} T66 ${y + 5}`}
        stroke={stroke}
        strokeWidth="1.2"
      />
    ))}
  </svg>
);

export function AboutHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const nextSlide = () => setActiveSlide((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((p) => (p - 1 + slides.length) % slides.length);

  const arrows: { label: string; onClick: () => void; icon: string }[] = [
    { label: 'Previous slide', onClick: prevSlide, icon: '←' },
    { label: 'Next slide', onClick: nextSlide, icon: '→' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden bg-white">
        {/* Height is content-driven: the section ends right after the CTA row */}
        <div className="relative grid min-h-[560px] lg:grid-cols-2">
          {/* ================= LEFT (WHITE) ================= */}
          <div className="relative z-20 flex flex-col justify-between bg-white px-6 py-6 sm:px-10 lg:bg-transparent lg:pl-16 lg:pr-28 lg:py-8">
            {/* BRAND */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                  style={{ background: TEAL }}
                >
                  <svg viewBox="0 0 40 40" fill="none" className="h-7 w-7">
                    <path
                      d="M6 31V19L15 13V31M15 31V8L25 14V31M25 31V19L34 12V31"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-base font-bold leading-none tracking-tight"
                    style={{ color: INK }}
                  >
                    Terra Ecopreneurs
                  </p>
                  <p className="mt-1 text-[9px] tracking-[0.18em] text-slate-500">
                    ENGINEERING A BETTER FUTURE
                  </p>
                </div>
              </div>

              <div className="hidden pr-24 sm:block">
                <Waves stroke="#9CA3AF" />
              </div>
            </div>

            {/* HEADING */}
            <div className="relative">
              <p
                className="mb-2 text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: CYAN }}
              >
                {currentSlide.eyebrow}
              </p>

              <div
                key={`title-${activeSlide}`}
                className="max-w-[620px] overflow-visible pb-2"
              >
                <MaskedLines
                  lines={currentSlide.title}
                  className="font-sans text-[clamp(2rem,min(4vw,6.5vh),3.8rem)] font-black uppercase leading-[0.98] tracking-[-0.02em] text-[#1C3F2E]"
                  startDelay={100}
                />
              </div>

              {/* SUBTITLE */}
              <div className="mt-3">
                <p
                  className="text-lg font-extrabold sm:text-xl"
                  style={{ color: TEAL }}
                >
                  {currentSlide.label}
                </p>
                <p
                  className="mt-0 text-3xl leading-tight sm:text-4xl"
                  style={{ fontFamily: scriptFont, color: INK }}
                >
                  Engineering change that matters.
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              key={`desc-${activeSlide}`}
              className="mt-3 max-w-[500px] animate-[fadeIn_0.6s_ease] text-base leading-relaxed text-slate-600"
            >
              {currentSlide.description}
            </p>

            {/* CTA + SLIDE CONTROLS (last row of the section) */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
              <button
                onClick={() =>
                  document
                    .getElementById('about')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group flex items-center gap-3 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:brightness-90"
                style={{ background: CYAN }}
              >
                {currentSlide.cta}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="h-[3px] transition-all duration-500"
                    style={{
                      width: activeSlide === index ? 48 : 24,
                      background: activeSlide === index ? CYAN : `${CYAN}55`,
                    }}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                {arrows.map(({ label, onClick, icon }) => (
                  <button
                    key={label}
                    onClick={onClick}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:text-white"
                    style={{ borderColor: `${INK}33`, color: INK }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = INK)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = '#fff')
                    }
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT (GREEN) ================= */}
          <div
            className="relative min-h-[560px] overflow-hidden lg:-ml-24"
            style={{
              background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 60%, ${CYAN} 100%)`,
            }}
          >
            {/* SHAPES (SVG background) */}
            <svg
              viewBox="0 0 500 600"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {/* lighter diagonal block, bottom right */}
              <path d="M170 600 L500 290 L500 600 Z" fill="#4FA874" opacity="0.55" />
              {/* darker diagonal band, bottom left */}
              <path d="M95 600 L330 600 L120 420 Z" fill="#103826" opacity="0.55" />
              {/* soft diagonal highlight, top right */}
              <path d="M330 0 L500 0 L500 160 Z" fill="#3A8B5C" opacity="0.35" />

              {/* white shape with S-curve edge (desktop) */}
              <g className="hidden lg:block">
                <path
                  d="M150 0 C118 95 18 125 38 245 C54 340 128 372 78 600"
                  fill="none"
                  stroke={TEAL_DARK}
                  strokeWidth="5"
                  transform="translate(14 0)"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M0 0 H150 C118 95 18 125 38 245 C54 340 128 372 78 600 H0 Z"
                  fill="#fff"
                />
              </g>
            </svg>

            {/* FEATURE LIST */}
            <div className="absolute bottom-6 left-6 z-20 sm:bottom-8 lg:left-[26%]">
              <ul className="space-y-2.5">
                {currentSlide.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.08em] text-white sm:text-xs"
                  >
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE STAGE: two rounded diamonds placed side by side, always fully visible */}
            <div
              className="absolute left-1/2 top-[52%] z-10 -translate-x-1/2 -translate-y-1/2 lg:left-[58%]"
              style={
                {
                  '--s': 'clamp(120px, min(13vw, 21vh), 210px)',
                  width: 'calc(var(--s) * 2.154)',
                  height: 'calc(var(--s) * 2.894)',
                } as CSSProperties
              }
            >
              {/* FIRST IMAGE */}
              <div
                className="absolute rotate-45 overflow-hidden rounded-[28px] border-[6px] border-white shadow-2xl"
                style={{
                  left: 'calc(var(--s) * 0.207)',
                  top: 'calc(var(--s) * 0.947)',
                  width: 'var(--s)',
                  height: 'var(--s)',
                }}
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.imageAlt}
                  className="h-full w-full -rotate-45 scale-[1.5] object-cover transition-all duration-700"
                />
              </div>

              {/* SECOND IMAGE */}
              <div
                className="absolute rotate-45 overflow-hidden rounded-[28px] border-[6px] border-white shadow-2xl"
                style={{
                  left: 'calc(var(--s) * 0.947)',
                  top: 'calc(var(--s) * 1.687)',
                  width: 'var(--s)',
                  height: 'var(--s)',
                }}
              >
                <img
                  src={secondImages[activeSlide]}
                  alt="Terra Ecopreneurs sustainable project"
                  className="h-full w-full -rotate-45 scale-[1.5] object-cover transition-all duration-700"
                />
              </div>

              {/* THIRD IMAGE */}
              <div
                className="absolute rotate-45 overflow-hidden rounded-[28px] border-[6px] border-white shadow-2xl"
                style={{
                  left: 'calc(var(--s) * 0.947)',
                  top: 'calc(var(--s) * 0.207)',
                  width: 'var(--s)',
                  height: 'var(--s)',
                }}
              >
                <img
                  src={thirdImages[activeSlide]}
                  alt="Terra Ecopreneurs project highlight"
                  className="h-full w-full -rotate-45 scale-[1.5] object-cover transition-all duration-700"
                />
              </div>
            </div>

            {/* FLOATING BADGE (sits on the curve) */}
            <div
              className="absolute left-[4%] top-[52%] z-30 flex h-[110px] w-[110px] -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white text-center text-white shadow-xl sm:h-[150px] sm:w-[150px] lg:left-[3%]"
              style={{ background: CYAN }}
            >
              <p className="whitespace-nowrap px-2 text-[8px] font-semibold uppercase tracking-[0.08em] sm:text-[9px]">
                {currentSlide.badgeText}
              </p>
              <p className="mt-1 text-xl font-black leading-none sm:text-2xl">
                {currentSlide.badge}
              </p>
              <div className="mt-2 h-px w-10 bg-white/80" />
            </div>

            {/* CAPTION + COUNTER (replaces price block) */}
            <div className="absolute bottom-6 right-6 z-20 text-right text-white sm:bottom-8 sm:right-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                Terra Ecopreneurs
              </p>
              <p className="text-xl font-extrabold sm:text-2xl">
                {currentSlide.imageLabel}
              </p>
              <p className="mt-1 text-sm tracking-widest">
                0{activeSlide + 1}
                <span className="text-white/60"> / 0{slides.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}