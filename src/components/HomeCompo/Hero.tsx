// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import video from "../../assets/From Klickpin.com- Save Fresh simple wedding cake ideas for a polished look people will notice with simple details that elevate the final look-pin.mp4"

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster?: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
//       alt: 'Regenerative farmland at sunrise',
//     },
//     video: {
//       src: video,
//       poster:
//         'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
//     },
//     eyebrow: 'Terra Ecopreneurs · Est. Coimbatore',
//     headline: ['Regenerating land,', 'restoring livelihoods.'],
//     support:
//       'We back ecopreneurs rebuilding soil, water and biodiversity across the Western Ghats.',
//     primaryCta: { label: 'Explore Our Impact', to: '/impact' },
//     secondaryCta: { label: 'Discover Terra', to: '/about' },
//     caption: 'Regenerative agriculture',
//   },
//   {
//     image: {
//       src: 'https://i.pinimg.com/736x/1b/13/95/1b13952464f12030b62ea110c527104d.jpg',
//       alt: 'Community of ecopreneurs collaborating',
//     },
//     video: {
//       src: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-1573/1080p.mp4',
//       poster:
//         'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
//     },
//     eyebrow: 'Community-led enterprise',
//     headline: ['Enterprise that', 'grows with community.'],
//     support:
//       'Local cooperatives own the value they create — from seed to shelf, profit stays in the landscape.',
//     primaryCta: { label: 'Meet the Community', to: '/community' },
//     secondaryCta: { label: 'Our Model', to: '/about' },
//     caption: 'Community-led enterprise',
//   },
//   {
//     image: {
//       src: 'https://i.pinimg.com/1200x/ee/ef/a4/eeefa433161de91367f11fa9cdffff8c.jpg',
//       alt: 'Restored Western Ghats landscape',
//     },
//     video: {
//       src: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-1573/1080p.mp4',
//       poster:
//         'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
//     },
//     eyebrow: 'Landscape restoration',
//     headline: ['Landscapes', 'brought back to life.'],
//     support:
//       'Twelve thousand hectares under restoration — native species, watershed health, and carbon drawdown.',
//     primaryCta: { label: 'See the Landscapes', to: '/impact' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Landscape restoration',
//   },
// ];

// // These masks create a smooth crossfade in the middle of the screen
// const IMAGE_MASK =
//   'linear-gradient(to right, black 0%, black 38%, rgba(0,0,0,0.85) 46%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 54%, transparent 62%)';
// const VIDEO_MASK =
//   'linear-gradient(to right, transparent 38%, rgba(0,0,0,0.15) 46%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.85) 54%, black 62%, black 100%)';

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;
//       if (i === active) {
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//       }
//     });
//   }, [active]);

//   const slide = SLIDES[active];

//   return (
//     <section className="grain relative flex min-h-screen items-stretch overflow-hidden bg-forest-900 text-ivory">
//       {/* === Media Base (Image + Video blending together) === */}
//       <div className="absolute inset-0">
        
//         {/* IMAGE layer */}
//         <div
//           className="absolute inset-0"
//           style={{ WebkitMaskImage: IMAGE_MASK, maskImage: IMAGE_MASK }}
//         >
//           {SLIDES.map((s, i) => (
//             <img
//               key={s.image.src + i}
//               src={s.image.src}
//               alt={s.image.alt}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
//                 i === active ? 'opacity-100' : 'opacity-0'
//               }`}
//               loading={i === 0 ? 'eager' : 'lazy'}
//               aria-hidden={i !== active}
//             />
//           ))}
//         </div>

//         {/* VIDEO layer */}
//         <div
//           className="absolute inset-0"
//           style={{ WebkitMaskImage: VIDEO_MASK, maskImage: VIDEO_MASK }}
//         >
//           {SLIDES.map((s, i) => (
//             <video
//               key={s.video.src + i}
//               ref={(el) => { videoRefs.current[i] = el; }}
//               src={s.video.src}
//               poster={s.video.poster}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
//                 i === active ? 'opacity-100' : 'opacity-0'
//               }`}
//               muted
//               loop
//               playsInline
//               preload={i === 0 ? 'auto' : 'metadata'}
//               aria-hidden={i !== active}
//             />
//           ))}
//         </div>
//       </div>

//       {/* === TEXT READABILITY SCRIM === 
//           This darkens the left side so the text pops, 
//           but fades out completely before the center so the video stays untouched. 
//       */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/40 to-transparent to-60%" />
//       {/* Extra bottom shadow so the carousel dots/caption are legible */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-900/80 to-transparent" />

//       {/* === Carousel Controls — bottom right === */}
//       <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
//         <button
//           type="button"
//           onClick={() => go(-1)}
//           aria-label="Previous slide"
//           className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30 bg-forest-900/40 text-ivory backdrop-blur transition hover:border-sage-400 hover:text-sage-400"
//         >
//           <ChevronLeft size={18} />
//         </button>
//         <button
//           type="button"
//           onClick={() => go(1)}
//           aria-label="Next slide"
//           className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30 bg-forest-900/40 text-ivory backdrop-blur transition hover:border-sage-400 hover:text-sage-400"
//         >
//           <ChevronRight size={18} />
//         </button>
//       </div>

//       {/* === Dots + Caption — bottom center === */}
//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
//         <p className="label-caps text-ivory/70">{slide.caption}</p>
//         <div className="flex gap-2">
//           {SLIDES.map((s, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => setActive(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               aria-current={i === active}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 i === active ? 'w-8 bg-sage-400' : 'w-1.5 bg-ivory/40 hover:bg-ivory/70'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* === Content — left half only === */}
//       <div className="shell relative z-10 flex w-full flex-col justify-end pb-24 pt-40 md:pb-32">
//         <div key={active} className="max-w-[calc(50%-2rem)]">
//           <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
//             <span className="h-px w-10 bg-sage-400" /> {slide.eyebrow}
//           </p>
//           <MaskedLines
//             lines={slide.headline}
//             className="headline-xl max-w-3xl"
//             startDelay={200}
//             step={140}
//           />
//           <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
//             <Reveal delay={700}>
//               <p className="max-w-xl font-body text-base leading-relaxed text-ivory/80 md:text-lg">
//                 {slide.support}
//               </p>
//             </Reveal>
//             <Reveal delay={850} className="flex flex-wrap gap-4">
//               <Link to={slide.primaryCta.to} className="btn-primary">
//                 {slide.primaryCta.label} <ArrowRight size={16} />
//               </Link>
//               <Link to={slide.secondaryCta.to} className="btn-ghost-light">
//                 {slide.secondaryCta.label}
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { MaskedLines, Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://i.pinimg.com/1200x/5a/30/d7/5a30d7fc45858e4816c60d2722cf54ea.jpg',
//       alt: 'Green farmland at sunrise',
//     },
//     video: {
//       src: 'https://media.istockphoto.com/id/1130253645/video/rotating-windmills-and-energy-panels.mp4?s=mp4-640x640-is&k=20&c=rmtmZRcZg5MZrKPiFfCYK0e75HTwBKDU1eZb1RIPcCc=',
//       poster:
//         'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Terra Ecopreneurs · Est. Coimbatore',
//     headline: ['Regenerating land,', 'restoring livelihoods.'],
//     support:
//       'We back ecopreneurs rebuilding soil, water and biodiversity across the Western Ghats.',
//     primaryCta: { label: 'Explore Our Impact', to: '/impact' },
//     secondaryCta: { label: 'Discover Terra', to: '/about' },
//     caption: 'Regenerative agriculture',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=85',
//       alt: 'People working together in a community',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Community-led enterprise',
//     headline: ['Enterprise that', 'grows with community.'],
//     support:
//       'Local cooperatives own the value they create — from seed to shelf, profit stays in the landscape.',
//     primaryCta: { label: 'Meet the Community', to: '/community' },
//     secondaryCta: { label: 'Our Model', to: '/about' },
//     caption: 'Community-led enterprise',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=85',
//       alt: 'Green mountain landscape',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Landscape restoration',
//     headline: ['Landscapes', 'brought back to life.'],
//     support:
//       'Twelve thousand hectares under restoration — native species, watershed health, and carbon drawdown.',
//     primaryCta: { label: 'See the Landscapes', to: '/impact' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Landscape restoration',
//   },
// ];

// const VIDEO_BLEND_MASK =
//   'linear-gradient(to right, transparent 0%, transparent 38%, rgba(0,0,0,0.25) 46%, rgba(0,0,0,0.7) 54%, black 62%, black 100%)';

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((index) => (index + dir + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;

//       if (index === active) {
//         currentVideo.play().catch(() => {});
//       } else {
//         currentVideo.pause();
//       }
//     });
//   }, [active]);

//   const slide = SLIDES[active];

//   return (
//     <section className="grain relative h-[90svh] min-h-[720px] max-h-[900px] overflow-hidden bg-[#071610] text-white">
//       {/* Full-width image with video softly blended over the right side */}
//       <div className="absolute inset-0">
//         {SLIDES.map((item, index) => (
//           <img
//             key={item.image.src}
//             src={item.image.src}
//             alt={item.image.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               index === active ? 'opacity-100' : 'opacity-0'
//             }`}
//             loading={index === 0 ? 'eager' : 'lazy'}
//             aria-hidden={index !== active}
//           />
//         ))}

//         {SLIDES.map((item, index) => (
//           <video
//             key={item.video.src}
//             ref={(element) => {
//               videoRefs.current[index] = element;
//             }}
//             src={item.video.src}
//             poster={item.video.poster}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               index === active ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               WebkitMaskImage: VIDEO_BLEND_MASK,
//               maskImage: VIDEO_BLEND_MASK,
//             }}
//             muted
//             loop
//             playsInline
//             preload={index === 0 ? 'auto' : 'metadata'}
//             aria-hidden={index !== active}
//           />
//         ))}

//         {/* Light contrast overlays preserve the background detail */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
//       </div>

//       {/* Hero copy, positioned below the fixed navbar */}
//       <div className="shell relative z-10 flex h-full w-full items-center pb-32 pt-40 sm:pb-36 sm:pt-44">
//         <div
//           key={active}
//           className="w-full max-w-full rounded-r-2xl border-l-2 border-sage-400 bg-black/60 px-5 py-6 shadow-2xl backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10"
//         >
//           <p className="label-caps mb-4 flex items-center gap-3 text-sage-300 sm:mb-6">
//             <span className="h-px w-10 bg-sage-400" />
//             {slide.eyebrow}
//           </p>

//           <MaskedLines
//             lines={[slide.headline.join(' ')]}
//             className="max-w-none whitespace-nowrap text-[clamp(1.05rem,3.5vw,3.5rem)] leading-none tracking-[-0.04em] text-white [text-shadow:0_3px_18px_rgba(0,0,0,0.9)]"
//             startDelay={200}
//             step={140}
//           />

//           <div className="mt-6 flex flex-col gap-5 sm:mt-8">
//             <Reveal delay={700}>
//               <p className="max-w-lg font-body text-base leading-relaxed text-white sm:text-lg">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={850} className="flex flex-wrap gap-3 sm:gap-4">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="btn-primary inline-flex items-center gap-3 rounded-full"
//               >
//                 {slide.primaryCta.label}
//                 <ArrowRight size={16} />
//               </Link>

//               <Link
//                 to={slide.secondaryCta.to}
//                 className="btn-ghost-light rounded-full"
//               >
//                 {slide.secondaryCta.label}
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* Slide caption and dots */}
//       <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-7 sm:gap-3">
//         <p className="label-caps text-center text-white">{slide.caption}</p>

//         <div className="flex gap-2">
//           {SLIDES.map((item, index) => (
//             <button
//               key={item.caption}
//               type="button"
//               onClick={() => setActive(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               aria-current={index === active}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 index === active
//                   ? 'w-8 bg-sage-400'
//                   : 'w-1.5 bg-white/60 hover:bg-white/90'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Previous and next slide controls */}
//       <div className="absolute bottom-6 right-4 z-20 flex items-center gap-2 sm:bottom-7 sm:right-7">
//         <button
//           type="button"
//           onClick={() => go(-1)}
//           aria-label="Previous slide"
//           className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-black/60 text-white backdrop-blur transition hover:border-sage-400 hover:text-sage-300 sm:h-11 sm:w-11"
//         >
//           <ChevronLeft size={18} />
//         </button>

//         <button
//           type="button"
//           onClick={() => go(1)}
//           aria-label="Next slide"
//           className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-black/60 text-white backdrop-blur transition hover:border-sage-400 hover:text-sage-300 sm:h-11 sm:w-11"
//         >
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </section>
//   );
// }






// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://i.pinimg.com/1200x/5a/30/d7/5a30d7fc45858e4816c60d2722cf54ea.jpg',
//       alt: 'Green farmland at sunrise',
//     },
//     video: {
//       src: 'https://media.istockphoto.com/id/1130253645/video/rotating-windmills-and-energy-panels.mp4?s=mp4-640x640-is&k=20&c=rmtmZRcZg5MZrKPiFfCYK0e75HTwBKDU1eZb1RIPcCc=',
//       poster: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Terra Ecopreneurs',
//     headline: ['Regenerating land,', 'restoring livelihoods.'],
//     support: 'We back ecopreneurs rebuilding soil, water and biodiversity across the Western Ghats.',
//     primaryCta: { label: 'Explore Impact', to: '/impact' },
//     secondaryCta: { label: 'Our Story', to: '/about' },
//     caption: 'Regenerative agriculture',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=85',
//       alt: 'People working together in a community',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Community-led',
//     headline: ['Enterprise that', 'grows with community.'],
//     support: 'Local cooperatives own the value they create — from seed to shelf, profit stays in the landscape.',
//     primaryCta: { label: 'Meet Community', to: '/community' },
//     secondaryCta: { label: 'Our Model', to: '/about' },
//     caption: 'Community-led enterprise',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=85',
//       alt: 'Green mountain landscape',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Landscape restoration',
//     headline: ['Landscapes', 'brought back to life.'],
//     support: 'Twelve thousand hectares under restoration — native species, watershed health, and carbon drawdown.',
//     primaryCta: { label: 'See Landscapes', to: '/impact' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Landscape restoration',
//   },
// ];

// // A sophisticated mask that makes the video look like a glowing window fading into the landscape
// const VIDEO_MASK = 'radial-gradient(ellipse at 70% 50%, black 30%, rgba(0,0,0,0.7) 60%, transparent 85%)';

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((index) => (index + dir + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;
//       if (index === active) {
//         currentVideo.play().catch(() => {});
//       } else {
//         currentVideo.pause();
//       }
//     });
//   }, [active]);

//   const slide = SLIDES[active];

//   return (
//     <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#05100a] text-white">
      
//       {/* === IMMERSIVE BACKGROUND === */}
//       <div className="absolute inset-0 z-0">
//         {/* Images with a slow Ken Burns zoom effect */}
//         {SLIDES.map((item, index) => (
//           <img
//             key={item.image.src}
//             src={item.image.src}
//             alt={item.image.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-out ${
//               index === active ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
//             }`}
//             loading={index === 0 ? 'eager' : 'lazy'}
//           />
//         ))}

//         {/* Video layer — perfectly masked to blend into the image */}
//         {SLIDES.map((item, index) => (
//           <video
//             key={item.video.src}
//             ref={(element) => { videoRefs.current[index] = element; }}
//             src={item.video.src}
//             poster={item.video.poster}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               index === active ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ WebkitMaskImage: VIDEO_MASK, maskImage: VIDEO_MASK }}
//             muted
//             loop
//             playsInline
//             preload={index === 0 ? 'auto' : 'metadata'}
//           />
//         ))}

//         {/* Cinematic Vignette & Lighting (This makes the text pop without a visible box) */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05100a] via-[#05100a]/80 to-transparent to-70%" />
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05100a] via-transparent to-black/30" />
//         <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
//       </div>

//       {/* === MAIN CONTENT (Editorial Layout) === */}
//       <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-24 sm:px-12 lg:px-20 xl:px-32">
//         <div key={active} className="max-w-5xl">
          
//           {/* Eyebrow */}
//           <Reveal delay={100}>
//             <p className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#85A98F]">
//               <span className="h-px w-12 bg-[#85A98F]" />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           {/* Massive Editorial Headline */}
//           <h1 className="flex flex-col font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[1.05] tracking-tight text-white drop-shadow-2xl">
//             {slide.headline.map((line, i) => (
//               <span key={`${active}-${i}`} className="overflow-hidden block">
//                 <span 
//                   className="block translate-y-full animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${200 + i * 150}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           {/* Support Text & CTAs */}
//           <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
//             <Reveal delay={700}>
//               <p className="max-w-md font-body text-lg leading-relaxed text-white/70">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={850} className="flex flex-wrap items-center gap-6">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-[#05100a] transition-transform hover:scale-105"
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 {/* Shine effect */}
//                 <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
//               </Link>
              
//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-[#85A98F]"
//               >
//                 {slide.secondaryCta.label}
//                 <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-all group-hover:border-[#85A98F] group-hover:bg-[#85A98F]/10">
//                   <ArrowUpRight size={16} />
//                 </span>
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* === FLOATING UI CONTROLS === */}
      
//       {/* Left: Slide Info */}
//       <div className="absolute bottom-10 left-6 z-20 sm:left-12 lg:left-20 xl:left-32">
//         <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
//           {slide.caption}
//         </p>
//       </div>

//       {/* Right: Kinetic Navigation */}
//       <div className="absolute bottom-10 right-6 z-20 flex flex-col items-end gap-6 sm:right-12 lg:right-20 xl:right-32">
        
//         {/* Vertical Progress Bar */}
//         <div className="flex items-center gap-4">
//           <span className="font-mono text-sm text-white/60">
//             0{active + 1} <span className="text-white/20">/ 0{SLIDES.length}</span>
//           </span>
//           <div className="h-[2px] w-24 overflow-hidden rounded-full bg-white/20">
//             <div 
//               className="h-full bg-white transition-all duration-500 ease-out"
//               style={{ width: `${((active + 1) / SLIDES.length) * 100}%` }}
//             />
//           </div>
//         </div>

//         {/* Arrow Controls */}
//         <div className="flex items-center gap-3">
//           <button
//             type="button"
//             onClick={() => go(-1)}
//             className="group grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black"
//           >
//             <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-1" />
//           </button>
//           <button
//             type="button"
//             onClick={() => go(1)}
//             className="group grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-black"
//           >
//             <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
//           </button>
//         </div>
//       </div>

//       {/* Global Keyframes for the smooth animations */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes slideUp {
//           from { transform: translateY(100%); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//       `}} />
//     </section>
//   );
// }



// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Play, Pause, ChevronDown } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://i.pinimg.com/1200x/5a/30/d7/5a30d7fc45858e4816c60d2722cf54ea.jpg',
//       alt: 'Green farmland at sunrise',
//     },
//     video: {
//       src: 'https://media.istockphoto.com/id/1130253645/video/rotating-windmills-and-energy-panels.mp4?s=mp4-640x640-is&k=20&c=rmtmZRcZg5MZrKPiFfCYK0e75HTwBKDU1eZb1RIPcCc=',
//       poster: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Terra Ecopreneurs · Est. Coimbatore',
//     headline: ['Regenerating', 'the Earth.'],
//     support: 'We back ecopreneurs rebuilding soil, water and biodiversity across the Western Ghats.',
//     primaryCta: { label: 'Explore Our Impact', to: '/impact' },
//     secondaryCta: { label: 'Our Mission', to: '/about' },
//     caption: 'Regenerative agriculture',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=85',
//       alt: 'People working together in a community',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Community-Led Enterprise',
//     headline: ['Growth', 'Together.'],
//     support: 'Local cooperatives own the value they create — from seed to shelf, profit stays in the landscape.',
//     primaryCta: { label: 'Meet the Community', to: '/community' },
//     secondaryCta: { label: 'The Model', to: '/about' },
//     caption: 'Community-led enterprise',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=85',
//       alt: 'Green mountain landscape',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=85',
//     },
//     eyebrow: 'Landscape Restoration',
//     headline: ['Breathe', 'Again.'],
//     support: 'Twelve thousand hectares under restoration — native species, watershed health, and carbon drawdown.',
//     primaryCta: { label: 'See the Landscapes', to: '/impact' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Landscape restoration',
//   },
// ];

// // The "Liquid Window" mask for the video
// const VIDEO_MASK = 'radial-gradient(ellipse at 65% 50%, black 20%, rgba(0,0,0,0.6) 50%, transparent 75%)';

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((index: number) => {
//     setActive(index);
//   }, []);

//   // Handle parallax on mouse move
//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;
//     const { innerWidth, innerHeight } = window;
//     // Normalize mouse position from -1 to 1
//     const x = (clientX / innerWidth - 0.5) * 2;
//     const y = (clientY / innerHeight - 0.5) * 2;
//     setMousePos({ x, y });
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//     videoRefs.current.forEach((vid) => {
//       if (!vid) return;
//       if (isPlaying) vid.pause();
//       else vid.play().catch(() => {});
//     });
//   };

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;
//       if (index === active && isPlaying) {
//         currentVideo.play().catch(() => {});
//       } else {
//         currentVideo.pause();
//       }
//     });
//   }, [active, isPlaying]);

//   const slide = SLIDES[active];

//   return (
//     <section 
//       className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#050B08] text-white selection:bg-[#85A98F]/30"
//       onMouseMove={handleMouseMove}
//     >
//       {/* === LAYER 1: THE MEDIA (Images & Videos) === */}
//       <div className="absolute inset-0 z-0">
        
//         {/* Images (Base Layer) */}
//         {SLIDES.map((item, index) => (
//           <div 
//             key={item.image.src}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             {/* Parallax Image Wrapper */}
//             <div 
//               className="absolute inset-0 scale-110 transition-transform duration-1000 ease-out"
//               style={{
//                 transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) scale(1.1)`
//               }}
//             >
//               <img
//                 src={item.image.src}
//                 alt={item.image.alt}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         ))}

//         {/* Videos (The "Glowing Window") */}
//         {SLIDES.map((item, index) => (
//           <video
//             key={item.video.src}
//             ref={(element) => { videoRefs.current[index] = element; }}
//             src={item.video.src}
//             poster={item.video.poster}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//             style={{ WebkitMaskImage: VIDEO_MASK, maskImage: VIDEO_MASK }}
//             muted
//             loop
//             playsInline
//             preload={index === 0 ? 'auto' : 'metadata'}
//           />
//         ))}

//         {/* Cinematic Overlays (Vignette & Color Grading) */}
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#050B08] via-[#050B08]/80 to-transparent to-70%" />
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050B08] via-transparent to-black/40" />
        
//         {/* Film Grain */}
//         <div className="pointer-events-none absolute inset-0 z-30 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
//       </div>

//       {/* === LAYER 2: THE TYPOGRAPHY === */}
//       {/* The text moves slightly opposite to the mouse for a 3D depth effect */}
//       <div 
//         className="relative z-30 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32"
//         style={{
//           transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`
//         }}
//       >
//         <div className="max-w-4xl">
//           <Reveal delay={100}>
//             <p className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#85A98F]">
//               <span className="h-px w-12 bg-[#85A98F]" />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           {/* Huge Editorial Headline */}
//           <h1 className="flex flex-col font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] tracking-tighter">
//             {slide.headline.map((line, i) => (
//               <span key={`${active}-${i}`} className="overflow-hidden block">
//                 <span 
//                   className="block translate-y-full animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${200 + i * 150}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-center">
//             <Reveal delay={700}>
//               <p className="max-w-sm font-body text-lg leading-relaxed text-white/70">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={850} className="flex items-center gap-8">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-[#050B08] transition-all hover:scale-105"
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <div className="grid h-6 w-6 place-items-center rounded-full bg-[#050B08] text-white transition-transform group-hover:rotate-45">
//                   <ArrowRight size={14} />
//                 </div>
//               </Link>
              
//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
//               >
//                 {slide.secondaryCta.label}
//                 <span className="h-px w-6 bg-white/30 transition-all group-hover:w-10 group-hover:bg-white" />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* === LAYER 3: KINETIC UI (Bottom Bar) === */}
//       <div className="absolute bottom-0 left-0 z-40 flex w-full items-end justify-between px-6 pb-8 sm:px-12 lg:px-24 xl:px-32">
        
//         {/* Left: Play/Pause & Caption */}
//         <div className="flex items-center gap-6">
//           <button 
//             onClick={togglePlay}
//             className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
//           >
//             {isPlaying ? <Pause size={16} className="fill-current" /> : <Play size={16} className="fill-current ml-1" />}
//           </button>
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Now Viewing</p>
//             <p className="text-sm font-medium text-white">{slide.caption}</p>
//           </div>
//         </div>

//         {/* Center: Scroll Indicator */}
//         <div className="hidden flex-col items-center gap-2 md:flex">
//           <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
//           <ChevronDown size={16} className="animate-bounce text-white/40" />
//         </div>

//         {/* Right: Custom Slide Navigator */}
//         <div className="flex items-center gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => go(index)}
//               className="group relative flex flex-col items-center gap-2"
//             >
//               <span className={`text-xs font-mono transition-colors ${index === active ? 'text-white' : 'text-white/30'}`}>
//                 0{index + 1}
//               </span>
//               {/* The animated line */}
//               <div className="relative h-12 w-[2px] bg-white/20 overflow-hidden">
//                 <div 
//                   className={`absolute left-0 top-0 w-full bg-[#85A98F] transition-all duration-500 ease-out ${
//                     index === active ? 'h-full' : 'h-0 group-hover:h-1/3'
//                   }`}
//                 />
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Global Keyframes for the smooth animations */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes slideUp {
//           from { transform: translateY(100%); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//       `}} />
//     </section>
//   );
// }


// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight, Plus, Minus, Compass } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//       alt: 'Misty mountains at sunrise',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//     },
//     eyebrow: 'Regenerative Terrains',
//     headline: ['Beyond', 'the Horizon.'],
//     support: 'We are restoring the delicate balance of the Western Ghats through radical, community-first agriculture.',
//     primaryCta: { label: 'Our Philosophy', to: '/philosophy' },
//     secondaryCta: { label: 'The Impact', to: '/impact' },
//     caption: 'Restoring the Western Ghats',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Lush green forest canopy',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Sovereign Seed Systems',
//     headline: ['Rooted', 'in Nature.'],
//     support: 'Empowering local farmers with indigenous seeds and chemical-free practices to cultivate a resilient future.',
//     primaryCta: { label: 'Meet the Farmers', to: '/farmers' },
//     secondaryCta: { label: 'Our Methods', to: '/methods' },
//     caption: 'Indigenous seed preservation',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Sunlight piercing through the forest',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Living Landscapes',
//     headline: ['Breathe', 'Deeply.'],
//     support: 'Fostering biodiversity corridors that breathe life back into the soil, the water, and the communities.',
//     primaryCta: { label: 'Explore the Land', to: '/land' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Biodiversity corridor restoration',
//   },
// ];

// // A sophisticated, organic mask for the video portal
// const VIDEO_MASK = 'radial-gradient(ellipse at 50% 50%, black 40%, rgba(0,0,0,0.8) 65%, transparent 90%)';

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   // Handle slide change with a custom "shutter" delay
//   const go = useCallback((newIndex: number) => {
//     if (isTransitioning || newIndex === active) return;
//     setIsTransitioning(true);
    
//     // Start the shutter close, then change slide, then open
//     setTimeout(() => {
//       setActive(newIndex);
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 400); // Time for shutter to open
//     }, 400); // Time for shutter to close
//   }, [active, isTransitioning]);

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;
//       if (index === active) {
//         currentVideo.play().catch(() => {});
//       } else {
//         currentVideo.pause();
//       }
//     });
//   }, [active]);

//   // Parallax mouse tracking
//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;
//     const x = (clientX / window.innerWidth - 0.5) * 2;
//     const y = (clientY / window.innerHeight - 0.5) * 2;
//     setMousePos({ x, y });
//   };

//   const slide = SLIDES[active];

//   return (
//     <section 
//       className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0A1C16] text-[#E5D9C5] selection:bg-[#A3C2B8]/30"
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* === THE SHUTTER TRANSITION (Frosted Glass Sweep) === */}
//       <div 
//         className={`pointer-events-none absolute inset-y-0 left-0 z-50 w-full bg-[#0A1C16]/80 backdrop-blur-2xl transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
//           isTransitioning ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         <div className="flex h-full items-center justify-center">
//           <Compass size={48} className="animate-[spin_4s_linear_infinite] text-[#A3C2B8]/50" />
//         </div>
//       </div>

//       {/* === BACKGROUND LAYER (Images & Video) === */}
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => (
//           <div 
//             key={item.image.src}
//             className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
//               index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             {/* Image with Parallax */}
//             <div 
//               className="absolute inset-0 scale-110 transition-transform duration-1000 ease-out"
//               style={{
//                 transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`
//               }}
//             >
//               <img
//                 src={item.image.src}
//                 alt={item.image.alt}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         ))}

//         {/* The Video "Window" with Organic Mask */}
//         {SLIDES.map((item, index) => (
//           <video
//             key={item.video.src}
//             ref={(element) => { videoRefs.current[index] = element; }}
//             src={item.video.src}
//             poster={item.video.poster}
//             className={`absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-80 transition-opacity duration-1000 ${
//               index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//             style={{ WebkitMaskImage: VIDEO_MASK, maskImage: VIDEO_MASK }}
//             muted
//             loop
//             playsInline
//             preload={index === 0 ? 'auto' : 'metadata'}
//           />
//         ))}

//         {/* Heavy Cinematic Overlays */}
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#0A1C16] via-[#0A1C16]/80 to-transparent to-80%" />
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0A1C16] via-transparent to-[#0A1C16]/40" />
        
//         {/* Fine Film Grain */}
//         <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
//       </div>

//       {/* === TYPOGRAPHY LAYER === */}
//       <div 
//         className="relative z-30 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32"
//         style={{
//           transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`
//         }}
//       >
//         <div className="max-w-5xl">
//           <Reveal delay={100}>
//             <div className="mb-8 flex items-center gap-4">
//               <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A3C2B8]/30 bg-[#A3C2B8]/10">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#A3C2B8] animate-pulse" />
//               </span>
//               <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#A3C2B8]">
//                 {slide.eyebrow}
//               </p>
//             </div>
//           </Reveal>

//           {/* Massive, Editorial Typography */}
//           <h1 className="flex flex-col font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-[-0.02em] text-[#E5D9C5]">
//             {slide.headline.map((line, i) => (
//               <span key={`${active}-${i}`} className="overflow-hidden block">
//                 <span 
//                   className="block translate-y-full animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${300 + i * 200}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
//             <Reveal delay={800}>
//               <p className="max-w-md font-body text-lg leading-relaxed text-[#E5D9C5]/70">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={1000} className="flex flex-wrap items-center gap-8">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-[#E5D9C5] px-8 py-4 font-semibold text-[#0A1C16] transition-transform hover:scale-105"
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <div className="grid h-6 w-6 place-items-center rounded-full bg-[#0A1C16] text-[#E5D9C5] transition-transform group-hover:rotate-45">
//                   <ArrowUpRight size={14} />
//                 </div>
//               </Link>
              
//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#E5D9C5]/60 transition-colors hover:text-[#E5D9C5]"
//               >
//                 {slide.secondaryCta.label}
//                 <span className="h-px w-8 bg-[#E5D9C5]/30 transition-all group-hover:w-12 group-hover:bg-[#E5D9C5]" />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* === FLOATING KINETIC UI === */}
      
//       {/* Right Side: Vertical Slide Navigator */}
//       <div className="absolute right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-6 sm:right-12 lg:right-16">
//         <div className="flex flex-col gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => go(index)}
//               className="group relative flex h-16 w-8 items-center justify-center"
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               {/* The track */}
//               <div className="absolute h-full w-[2px] bg-[#E5D9C5]/10 transition-colors group-hover:bg-[#E5D9C5]/20" />
//               {/* The thumb */}
//               <div 
//                 className={`absolute w-[2px] bg-[#A3C2B8] transition-all duration-500 ease-out ${
//                   index === active ? 'h-full' : 'h-0 group-hover:h-1/2'
//                 }`}
//               />
//               {/* The dot */}
//               <div 
//                 className={`absolute h-1.5 w-1.5 rounded-full transition-all duration-500 ${
//                   index === active ? 'bg-[#A3C2B8] scale-150' : 'bg-[#E5D9C5]/30'
//                 }`}
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar: Meta & Controls */}
//       <div className="absolute bottom-0 left-0 z-40 flex w-full items-end justify-between px-6 pb-8 sm:px-12 lg:px-24 xl:px-32">
        
//         {/* Left: Caption & Play/Pause */}
//         <div className="flex items-center gap-6">
//           <div className="flex flex-col">
//             <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A3C2B8]/60">Currently Viewing</span>
//             <span className="text-sm font-medium text-[#E5D9C5]">{slide.caption}</span>
//           </div>
//         </div>

//         {/* Center: Scroll Hint */}
//         <div className="hidden items-center gap-2 md:flex">
//           <span className="text-[10px] uppercase tracking-[0.2em] text-[#E5D9C5]/30">Scroll to Discover</span>
//           <div className="h-8 w-px bg-gradient-to-b from-[#E5D9C5]/50 to-transparent" />
//         </div>

//         {/* Right: Pagination Indicator */}
//         <div className="flex items-center gap-4 font-mono text-sm">
//           <span className="text-[#A3C2B8]">0{active + 1}</span>
//           <span className="text-[#E5D9C5]/20">/</span>
//           <span className="text-[#E5D9C5]/40">0{SLIDES.length}</span>
//         </div>
//       </div>

//       {/* Global Keyframes */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes slideUp {
//           from { transform: translateY(100%); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//       `}} />
//     </section>
//   );
// }


/////////////////




// import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight, Compass, Disc, MousePointer2 } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//       alt: 'Misty mountains at sunrise',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//     },
//     eyebrow: 'Regenerative Terrains',
//     headline: ['BEYOND', 'THE HORIZON'],
//     support: 'We are restoring the delicate balance of the Western Ghats through radical, community-first agriculture.',
//     primaryCta: { label: 'Our Philosophy', to: '/philosophy' },
//     secondaryCta: { label: 'The Impact', to: '/impact' },
//     caption: 'Restoring the Western Ghats',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Lush green forest canopy',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Sovereign Seed Systems',
//     headline: ['ROOTED', 'IN NATURE'],
//     support: 'Empowering local farmers with indigenous seeds and chemical-free practices to cultivate a resilient future.',
//     primaryCta: { label: 'Meet the Farmers', to: '/farmers' },
//     secondaryCta: { label: 'Our Methods', to: '/methods' },
//     caption: 'Indigenous seed preservation',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Sunlight piercing through the forest',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Living Landscapes',
//     headline: ['BREATHE', 'DEEPLY'],
//     support: 'Fostering biodiversity corridors that breathe life back into the soil, the water, and the communities.',
//     primaryCta: { label: 'Explore the Land', to: '/land' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Biodiversity corridor restoration',
//   },
// ];

// // A fluid, organic SVG mask to make the video look like a living window
// const ORGANIC_MASK = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 100' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3C/filter%3E%3C/defs%3E%3Cpath d='M50,0 C70,10 90,30 90,60 C90,80 75,95 50,100 C25,95 10,80 10,60 C10,30 30,10 50,0 Z' fill='black' filter='url(%23blur)'/%3E%3C/svg%3E")`;

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
  
//   // 3D Tilt & Lighting State
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((newIndex: number) => {
//     if (isTransitioning || newIndex === active) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setActive(newIndex);
//       setTimeout(() => setIsTransitioning(false), 400);
//     }, 400);
//   }, [active, isTransitioning]);

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;
//       if (index === active) currentVideo.play().catch(() => {});
//       else currentVideo.pause();
//     });
//   }, [active]);

//   // Global Mouse Tracking for Parallax & Lighting
//   const handleMouseMove = (e: React.MouseEvent) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 2;
//     const y = (e.clientY / window.innerHeight - 0.5) * 2;
//     setMousePos({ x, y });
//   };

//   // Custom Scramble Text Component
//   const ScrambleText = ({ text, delay }: { text: string; delay: number }) => {
//     const [displayText, setDisplayText] = useState('');
//     const chars = '!<>-_\\/[]{}—=+*^?#________';

//     useEffect(() => {
//       let iteration = 0;
//       const interval = setInterval(() => {
//         setDisplayText(
//           text.split('').map((char, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join('')
//         );
        
//         if (iteration >= text.length) clearInterval(interval);
//         iteration += 1 / 3;
//       }, 30);

//       return () => clearInterval(interval);
//     }, [text]);

//     return <span className="inline-block">{displayText || '\u00A0'}</span>;
//   };

//   const slide = SLIDES[active];

//   return (
//     <section 
//       className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#07130E] text-[#E5D9C5] selection:bg-[#A3C2B8]/30"
//       onMouseMove={handleMouseMove}
//       style={{ perspective: '1200px' }}
//     >
      
//       {/* === LAYER 1: AMBIENT MOUSE LIGHT === */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-50 mix-blend-soft-light transition-opacity duration-300"
//         style={{
//           background: `radial-gradient(circle 400px at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(163, 194, 184, 0.4), transparent 80%)`
//         }}
//       />

//       {/* === LAYER 2: THE 3D CANVAS === */}
//       <div 
//         className="absolute inset-0 transition-transform duration-100 ease-out"
//         style={{
//           transform: `rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg) scale(1.05)`,
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         {/* Background Images */}
//         {SLIDES.map((item, index) => (
//           <div 
//             key={item.image.src}
//             className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
//               index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             <img
//               src={item.image.src}
//               alt={item.image.alt}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         ))}

//         {/* Organic Video Portal */}
//         {SLIDES.map((item, index) => (
//           <div
//             key={item.video.src}
//             className={`absolute right-[-10%] top-1/2 h-[120vh] w-[80vw] -translate-y-1/2 transition-opacity duration-[1500ms] ${
//               index === active ? 'opacity-100 z-20' : 'opacity-0 z-0'
//             }`}
//             style={{
//               WebkitMaskImage: ORGANIC_MASK,
//               maskImage: ORGANIC_MASK,
//               mixBlendMode: 'luminosity',
//             }}
//           >
//             <video
//               ref={(element) => { videoRefs.current[index] = element; }}
//               src={item.video.src}
//               poster={item.video.poster}
//               className="h-full w-full object-cover"
//               muted
//               loop
//               playsInline
//               preload={index === 0 ? 'auto' : 'metadata'}
//             />
//           </div>
//         ))}

//         {/* Deep Cinematic Overlays & Grain */}
//         <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-[#07130E] via-[#07130E]/80 to-transparent to-80%" />
//         <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#07130E] via-transparent to-black/30" />
//         <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
//       </div>

//       {/* === LAYER 3: THE TYPOGRAPHY (Floating in 3D) === */}
//       <div 
//         className="relative z-40 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32"
//         style={{ transform: 'translateZ(50px)' }}
//       >
//         <div className="max-w-4xl">
          
//           <div className="mb-8 flex items-center gap-4">
//             <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A3C2B8]/20 bg-[#A3C2B8]/5 backdrop-blur-md">
//               <Compass size={18} className="text-[#A3C2B8] animate-[spin_8s_linear_infinite]" />
//             </span>
//             <div className="flex flex-col">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#A3C2B8]">Coordinates</span>
//               <span className="text-sm font-medium text-[#E5D9C5]">{slide.eyebrow}</span>
//             </div>
//           </div>

//           <h1 className="flex flex-col font-serif text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.9] tracking-tighter text-[#E5D9C5]">
//             {slide.headline.map((line, i) => (
//               <span key={`${active}-${i}`} className="block">
//                 <ScrambleText text={line} delay={i * 200} />
//               </span>
//             ))}
//           </h1>

//           <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
//             <p className="max-w-sm font-body text-lg leading-relaxed text-[#E5D9C5]/60">
//               {slide.support}
//             </p>

//             <div className="flex items-center gap-6">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#E5D9C5] px-8 py-4 font-semibold text-[#07130E] transition-transform hover:scale-105"
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <div className="grid h-6 w-6 place-items-center rounded-full bg-[#07130E] text-[#E5D9C5] transition-transform group-hover:rotate-45">
//                   <ArrowUpRight size={14} />
//                 </div>
//               </Link>
              
//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#E5D9C5]/50 transition-colors hover:text-[#E5D9C5]"
//               >
//                 {slide.secondaryCta.label}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* === LAYER 4: FLOATING KINETIC UI (BOTTOM) === */}
//       <div className="absolute bottom-0 left-0 z-50 flex w-full items-end justify-between px-6 pb-10 sm:px-12 lg:px-24 xl:px-32">
        
//         {/* Left: Mouse Parallax Hint */}
//         <div className="flex items-center gap-3 text-[#E5D9C5]/40">
//           <MousePointer2 size={16} className="animate-pulse" />
//           <span className="text-[10px] uppercase tracking-widest">Move mouse to explore</span>
//         </div>

//         {/* Center: The Kinetic Dial */}
//         <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">
//           <button 
//             onClick={() => go((active - 1 + SLIDES.length) % SLIDES.length)}
//             className="group grid h-12 w-12 place-items-center rounded-full border border-[#E5D9C5]/10 bg-[#07130E]/50 backdrop-blur-md transition-all hover:border-[#A3C2B8]/50 hover:bg-[#A3C2B8]/10"
//           >
//             <Disc size={20} className="text-[#E5D9C5] transition-transform duration-500 group-hover:-rotate-45" />
//           </button>

//           <div className="flex flex-col items-center gap-2">
//             <span className="font-mono text-2xl font-light text-[#E5D9C5]">0{active + 1}</span>
//             <div className="h-[1px] w-12 bg-[#E5D9C5]/20" />
//             <span className="font-mono text-xs text-[#E5D9C5]/30">0{SLIDES.length}</span>
//           </div>

//           <button 
//             onClick={() => go((active + 1) % SLIDES.length)}
//             className="group grid h-12 w-12 place-items-center rounded-full border border-[#E5D9C5]/10 bg-[#07130E]/50 backdrop-blur-md transition-all hover:border-[#A3C2B8]/50 hover:bg-[#A3C2B8]/10"
//           >
//             <Disc size={20} className="text-[#E5D9C5] transition-transform duration-500 group-hover:rotate-45" />
//           </button>
//         </div>

//         {/* Right: Dynamic Caption */}
//         <div className="flex flex-col items-end">
//           <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A3C2B8]/60">Current Environment</span>
//           <span className="text-sm font-medium text-[#E5D9C5] transition-all duration-500">{slide.caption}</span>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//       alt: 'Misty mountains at sunrise',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//     },
//     eyebrow: 'Regenerative Terrains',
//     headline: ['Beyond the', 'Horizon.'],
//     support: 'We are restoring the delicate balance of the Western Ghats through radical, community-first agriculture.',
//     primaryCta: { label: 'Our Philosophy', to: '/philosophy' },
//     secondaryCta: { label: 'The Impact', to: '/impact' },
//     caption: 'Restoring the Western Ghats',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Lush green forest canopy',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Sovereign Seed Systems',
//     headline: ['Rooted in', 'Nature.'],
//     support: 'Empowering local farmers with indigenous seeds and chemical-free practices to cultivate a resilient future.',
//     primaryCta: { label: 'Meet the Farmers', to: '/farmers' },
//     secondaryCta: { label: 'Our Methods', to: '/methods' },
//     caption: 'Indigenous seed preservation',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Sunlight piercing through the forest',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Living Landscapes',
//     headline: ['Breathe', 'Deeply.'],
//     support: 'Fostering biodiversity corridors that breathe life back into the soil, the water, and the communities.',
//     primaryCta: { label: 'Explore the Land', to: '/land' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Biodiversity corridor restoration',
//   },
// ];

// // The morphing clip-path for the video portal
// const PORTAL_CLIP_PATH = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'; // Fallback
// const ORGANIC_CLIP_PATH = 'circle(45% at 70% 50%)'; // The actual shape

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((index) => (index + dir + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;
//       if (index === active && isPlaying) {
//         currentVideo.play().catch(() => {});
//       } else {
//         currentVideo.pause();
//       }
//     });
//   }, [active, isPlaying]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 2;
//     const y = (e.clientY / window.innerHeight - 0.5) * 2;
//     setMousePos({ x, y });
//   };

//   const togglePlay = () => setIsPlaying(!isPlaying);

//   const slide = SLIDES[active];

//   return (
//     <section 
//       className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#07100B] text-white selection:bg-[#A3C2B8]/30"
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* === LAYER 1: AMBIENT CURSOR SPOTLIGHT === */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-50 mix-blend-soft-light transition-opacity duration-300"
//         style={{
//           background: `radial-gradient(circle 500px at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(200, 220, 210, 0.15), transparent 80%)`
//         }}
//       />

//       {/* === LAYER 2: THE 3D CANVAS === */}
//       <div 
//         className="absolute inset-0 transition-transform duration-100 ease-out"
//         style={{
//           transform: `rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg) scale(1.02)`,
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         {/* Background Image (Base Layer) */}
//         {SLIDES.map((item, index) => (
//           <div 
//             key={item.image.src}
//             className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
//               index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             <img
//               src={item.image.src}
//               alt={item.image.alt}
//               className="h-full w-full object-cover scale-110"
//             />
//           </div>
//         ))}

//         {/* Video (The Organic Portal) */}
//         {SLIDES.map((item, index) => (
//           <div
//             key={item.video.src}
//             className={`absolute right-0 top-1/2 h-[120vh] w-[80vw] -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//               index === active ? 'opacity-100 z-20 scale-100' : 'opacity-0 z-0 scale-90'
//             }`}
//             style={{
//               clipPath: ORGANIC_CLIP_PATH,
//               WebkitClipPath: ORGANIC_CLIP_PATH,
//             }}
//           >
//             <video
//               ref={(element) => { videoRefs.current[index] = element; }}
//               src={item.video.src}
//               poster={item.video.poster}
//               className="h-full w-full object-cover"
//               muted
//               loop
//               playsInline
//               preload={index === 0 ? 'auto' : 'metadata'}
//             />
//             {/* Inner shadow for the portal depth */}
//             <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
//           </div>
//         ))}

//         {/* Deep Cinematic Overlays & Grain */}
//         <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-[#07100B] via-[#07100B]/90 to-transparent to-[70%]" />
//         <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#07100B] via-transparent to-black/30" />
//         <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
//       </div>

//       {/* === LAYER 3: THE TYPOGRAPHY (Floating in 3D) === */}
//       <div 
//         className="relative z-40 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32"
//         style={{ transform: 'translateZ(60px)' }}
//       >
//         <div className="max-w-3xl">
          
//           <Reveal delay={100}>
//             <p className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#A3C2B8]">
//               <span className="h-px w-12 bg-[#A3C2B8]/50" />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           <h1 className="flex flex-col font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] tracking-tight">
//             {slide.headline.map((line, i) => (
//               <span key={`${active}-${i}`} className="overflow-hidden block">
//                 <span 
//                   className="block translate-y-full animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${200 + i * 150}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
//             <Reveal delay={700}>
//               <p className="max-w-md font-body text-lg leading-relaxed text-white/60">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={900} className="flex items-center gap-6">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#A3C2B8] px-8 py-4 font-semibold text-[#07100B] transition-all hover:scale-105"
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-full" />
//               </Link>
              
//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
//               >
//                 {slide.secondaryCta.label}
//                 <span className="h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-white" />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* === LAYER 4: FLOATING GLASS CONSOLE (BOTTOM) === */}
//       <div className="absolute bottom-8 left-0 right-0 z-50 px-6 sm:px-12 lg:px-24 xl:px-32">
//         <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border border-white/10 bg-[#07100B]/60 px-6 py-4 backdrop-blur-xl shadow-2xl">
          
//           {/* Left: Play/Pause & Status */}
//           <div className="flex items-center gap-6">
//             <button 
//               onClick={togglePlay}
//               className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white hover:text-black"
//             >
//               {isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-1" />}
//             </button>
//             <div className="hidden sm:flex flex-col">
//               <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A3C2B8]">Now Playing</span>
//               <span className="text-sm font-medium text-white">{slide.caption}</span>
//             </div>
//           </div>

//           {/* Center: Elegant Timeline */}
//           <div className="flex items-center gap-6">
//             {SLIDES.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className="group relative flex items-center justify-center h-8 w-8"
//               >
//                 <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
//                   index === active ? 'bg-[#A3C2B8] scale-150' : 'bg-white/30 group-hover:bg-white/60'
//                 }`} />
//                 {index === active && (
//                   <div className="absolute inset-0 rounded-full border border-[#A3C2B8]/30 animate-ping" />
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Right: Arrows & Expand */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => go(-1)}
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition-all hover:border-[#A3C2B8]/50 hover:bg-white/5"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <button
//                 onClick={() => go(1)}
//                 className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition-all hover:border-[#A3C2B8]/50 hover:bg-white/5"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//             <div className="h-6 w-px bg-white/10 hidden sm:block" />
//             <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full text-white/50 transition-colors hover:text-white">
//               <Maximize2 size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Global Keyframes */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes slideUp {
//           from { transform: translateY(100%); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//       `}} />
//     </section>
//   );
// }




// import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight, Aperture } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   color: string; // The dynamic accent color
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//       alt: 'Misty mountains at sunrise',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//     },
//     eyebrow: 'Regenerative Terrains',
//     headline: ['Beyond the', 'Horizon.'],
//     support: 'We are restoring the delicate balance of the Western Ghats through radical, community-first agriculture.',
//     primaryCta: { label: 'Our Philosophy', to: '/philosophy' },
//     secondaryCta: { label: 'The Impact', to: '/impact' },
//     caption: 'Restoring the Western Ghats',
//     color: '#A3C2B8',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Lush green forest canopy',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Sovereign Seed Systems',
//     headline: ['Rooted in', 'Nature.'],
//     support: 'Empowering local farmers with indigenous seeds and chemical-free practices to cultivate a resilient future.',
//     primaryCta: { label: 'Meet the Farmers', to: '/farmers' },
//     secondaryCta: { label: 'Our Methods', to: '/methods' },
//     caption: 'Indigenous seed preservation',
//     color: '#D4C4A8',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Sunlight piercing through the forest',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
//       poster: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Living Landscapes',
//     headline: ['Breathe', 'Deeply.'],
//     support: 'Fostering biodiversity corridors that breathe life back into the soil, the water, and the communities.',
//     primaryCta: { label: 'Explore the Land', to: '/land' },
//     secondaryCta: { label: 'Join Us', to: '/contact' },
//     caption: 'Biodiversity corridor restoration',
//     color: '#E5C1A8',
//   },
// ];

// // --- THE CANVAS PARTICLE TERRAIN COMPONENT ---
// const ParticleTerrain = ({ color, active }: { color: string; active: number }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const particles = useRef<Array<{ x: number; y: number; z: number; baseX: number; baseY: number; size: number; speed: number }>>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     // Initialize particles in a grid that forms a terrain
//     const initParticles = () => {
//       particles.current = [];
//       const spacing = 40; // Grid spacing
//       const cols = Math.ceil(width / spacing);
//       const rows = Math.ceil(height / spacing);
      
//       for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//           const x = i * spacing + (Math.random() - 0.5) * 10;
//           const y = j * spacing + (Math.random() - 0.5) * 10;
//           // Z acts as depth/height
//           const z = Math.sin(i * 0.2) * Math.cos(j * 0.2) * 100;
          
//           particles.current.push({
//             x,
//             y,
//             z,
//             baseX: x,
//             baseY: y,
//             size: Math.random() * 1.5 + 0.5,
//             speed: Math.random() * 0.5 + 0.1,
//           });
//         }
//       }
//     };

//     initParticles();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//       initParticles();
//     };
//     window.addEventListener('resize', handleResize);

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener('mousemove', handleMouseMove);

//     let time = 0;

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
//       time += 0.01;

//       particles.current.forEach((p) => {
//         // Gentle floating animation
//         const floatX = Math.sin(time * p.speed + p.z) * 15;
//         const floatY = Math.cos(time * p.speed + p.z) * 15;

//         // Mouse repulsion effect
//         const dx = p.baseX + floatX - mouse.current.x;
//         const dy = p.baseY + floatY - mouse.current.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         const maxDist = 300;
        
//         let offsetX = 0;
//         let offsetY = 0;
        
//         if (dist < maxDist) {
//           const force = (maxDist - dist) / maxDist;
//           offsetX = (dx / dist) * force * 50;
//           offsetY = (dy / dist) * force * 50;
//         }

//         p.x = p.baseX + floatX + offsetX;
//         p.y = p.baseY + floatY + offsetY;

//         // Draw particle
//         ctx.beginPath();
//         // Size varies based on depth (z) to create a 3D effect
//         const size = Math.max(0.1, p.size * (1 - p.z / 200));
//         ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        
//         // Color and opacity based on depth
//         ctx.fillStyle = color;
//         ctx.globalAlpha = 0.15 + (1 - p.z / 200) * 0.4;
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [color, active]);

//   return <canvas ref={canvasRef} className="absolute inset-0 z-10" />;
// };

// // --- THE MAIN HERO COMPONENT ---
// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((dir: 1 | -1) => {
//     setActive((index) => (index + dir + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((currentVideo, index) => {
//       if (!currentVideo) return;
//       if (index === active && isPlaying) {
//         currentVideo.play().catch(() => {});
//       } else {
//         currentVideo.pause();
//       }
//     });
//   }, [active, isPlaying]);

//   // Scroll-driven parallax
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const slide = SLIDES[active];

//   // Scroll-driven transforms
//   const textScale = 1 - Math.min(scrollY / 1000, 0.2);
//   const textY = Math.min(scrollY * 0.5, 300);
//   const opacity = 1 - Math.min(scrollY / 600, 0.8);
//   const videoScale = 1 + Math.min(scrollY / 2000, 0.1);

//   return (
//     <section 
//       className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#050B08] text-white selection:bg-[#A3C2B8]/30"
//       style={{ 
//         '--accent': slide.color,
//       } as React.CSSProperties}
//     >
      
//       {/* === LAYER 1: THE LIVE PARTICLE TERRAIN === */}
//       <div className="absolute inset-0 z-0">
//         {/* Base image underneath the particles */}
//         {SLIDES.map((item, index) => (
//           <img
//             key={item.image.src}
//             src={item.image.src}
//             alt={item.image.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               index === active ? 'opacity-30' : 'opacity-0'
//             }`}
//           />
//         ))}
        
//         {/* The Canvas Particle System */}
//         <ParticleTerrain color={slide.color} active={active} />
        
//         {/* Deep Vignette to make the text pop */}
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#050B08] via-[#050B08]/80 to-transparent to-70%" />
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050B08] via-transparent to-[#050B08]/50" />
//       </div>

//       {/* === LAYER 2: MAIN CONTENT (Scroll-Driven) === */}
//       <div 
//         className="relative z-30 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32"
//         style={{
//           transform: `translateY(${textY}px) scale(${textScale})`,
//           opacity: opacity,
//         }}
//       >
//         <div className="max-w-3xl">
          
//           <Reveal delay={100}>
//             <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>
//               <Aperture size={16} className="animate-[spin_4s_linear_infinite]" />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           <h1 className="flex flex-col font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] tracking-tight drop-shadow-2xl">
//             {slide.headline.map((line, i) => (
//               <span key={`${active}-${i}`} className="overflow-hidden block">
//                 <span 
//                   className="block translate-y-full animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${200 + i * 150}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center">
//             <Reveal delay={700}>
//               <p className="max-w-md font-body text-lg leading-relaxed text-white/60">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={900} className="flex items-center gap-6">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-[#050B08] transition-all hover:scale-105"
//                 style={{ backgroundColor: 'var(--accent)' }}
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//               </Link>
              
//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
//               >
//                 {slide.secondaryCta.label}
//                 <span className="h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-white" />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* === LAYER 3: THE "LENS" VIDEO PORTAL === */}
//       <div 
//         className="absolute right-[5%] top-1/2 z-20 hidden lg:block -translate-y-1/2"
//         style={{
//           transform: `translateY(-50%) scale(${videoScale})`,
//         }}
//       >
//         <div 
//           className="group relative aspect-square w-[45vw] max-w-[700px] cursor-pointer overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-105"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {/* The Video inside the lens */}
//           {SLIDES.map((item, index) => (
//             <video
//               key={item.video.src}
//               ref={(element) => { videoRefs.current[index] = element; }}
//               src={item.video.src}
//               poster={item.video.poster}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                 index === active ? 'opacity-100' : 'opacity-0'
//               }`}
//               muted
//               loop
//               playsInline
//               preload={index === 0 ? 'auto' : 'metadata'}
//             />
//           ))}

//           {/* Lens Glass Reflection */}
//           <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 mix-blend-screen" />
          
//           {/* Inner shadow for depth */}
//           <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
          
//           {/* Play/Pause Overlay on hover */}
//           <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
//             <div className="grid h-20 w-20 place-items-center rounded-full bg-white/20 backdrop-blur-md">
//               {isPlaying ? <Pause size={32} className="fill-white" /> : <Play size={32} className="fill-white ml-2" />}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* === LAYER 4: FLOATING UI CONSOLE === */}
//       <div 
//         className="absolute bottom-0 left-0 z-40 w-full px-6 pb-8 sm:px-12 lg:px-24 xl:px-32"
//         style={{ opacity: opacity }}
//       >
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between border-t border-white/10 pt-6">
          
//           {/* Left: Playback Status */}
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white hover:text-black"
//             >
//               {isPlaying ? <Pause size={16} className="fill-current" /> : <Play size={16} className="fill-current ml-0.5" />}
//             </button>
//             <span className="text-xs font-medium uppercase tracking-widest text-white/50">
//               {slide.caption}
//             </span>
//           </div>

//           {/* Center: Minimal Timeline */}
//           <div className="flex items-center gap-8">
//             {SLIDES.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className="group relative flex h-8 items-center"
//               >
//                 <span className={`text-[10px] font-mono transition-colors ${
//                   index === active ? 'text-[var(--accent)]' : 'text-white/30'
//                 }`}>
//                   0{index + 1}
//                 </span>
//                 <div className={`ml-3 h-[2px] transition-all duration-500 ${
//                   index === active ? 'w-16 bg-[var(--accent)]' : 'w-4 bg-white/20'
//                 }`} />
//               </button>
//             ))}
//           </div>

//           {/* Right: Navigation Arrows */}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => go(-1)}
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
//             >
//               <ChevronLeft size={18} />
//             </button>
//             <button
//               onClick={() => go(1)}
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Global Keyframes */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes slideUp {
//           from { transform: translateY(100%); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//       `}} />
//     </section>
//   );
// }




// import { useState, useCallback, useEffect, useRef, type CSSProperties } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Aperture,
// } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: string[];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   color: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//       alt: 'Misty mountains at sunrise',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//     },
//     eyebrow: 'Regenerative terrains',
//     headline: ['Beyond the', 'horizon.'],
//     support:
//       'We are restoring the Western Ghats through community-led agriculture and long-term care for the land.',
//     primaryCta: { label: 'Our philosophy', to: '/philosophy' },
//     secondaryCta: { label: 'Explore our impact', to: '/impact' },
//     caption: 'Restoring the Western Ghats',
//     color: '#A3C2B8',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Lush green forest canopy',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/854478/854478-hd_1920_1080_25fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Sovereign seed systems',
//     headline: ['Rooted in', 'nature.'],
//     support:
//       'We work with local farmers to protect indigenous seeds and strengthen resilient, chemical-free growing practices.',
//     primaryCta: { label: 'Meet the farmers', to: '/farmers' },
//     secondaryCta: { label: 'Our methods', to: '/methods' },
//     caption: 'Indigenous seed preservation',
//     color: '#D4C4A8',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Sunlight filtering through a forest',
//     },
//     video: {
//       src: 'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Living landscapes',
//     headline: ['Breathe', 'deeply.'],
//     support:
//       'We help restore biodiversity corridors that support healthier soil, cleaner water, and thriving communities.',
//     primaryCta: { label: 'Explore the land', to: '/land' },
//     secondaryCta: { label: 'Join us', to: '/contact' },
//     caption: 'Biodiversity corridor restoration',
//     color: '#E5C1A8',
//   },
// ];

// type Particle = {
//   x: number;
//   y: number;
//   baseX: number;
//   baseY: number;
//   depth: number;
//   size: number;
//   speed: number;
// };

// function ParticleTerrain({ color }: { color: string }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouseRef = useRef({ x: -1000, y: -1000 });
//   const particlesRef = useRef<Particle[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');

//     if (!canvas || !context) return;

//     let frameId = 0;
//     let width = 0;
//     let height = 0;
//     let time = 0;

//     const prefersReducedMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)',
//     ).matches;

//     const createParticles = () => {
//       const rect = canvas.getBoundingClientRect();
//       width = rect.width;
//       height = rect.height;

//       const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
//       canvas.width = width * pixelRatio;
//       canvas.height = height * pixelRatio;
//       context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

//       const spacing = window.innerWidth < 768 ? 64 : 52;
//       const particles: Particle[] = [];

//       for (let x = 0; x < width; x += spacing) {
//         for (let y = 0; y < height; y += spacing) {
//           const baseX = x + (Math.random() - 0.5) * 8;
//           const baseY = y + (Math.random() - 0.5) * 8;

//           particles.push({
//             x: baseX,
//             y: baseY,
//             baseX,
//             baseY,
//             depth: Math.sin(x * 0.008) * Math.cos(y * 0.008) * 80,
//             size: Math.random() * 1.2 + 0.5,
//             speed: Math.random() * 0.3 + 0.1,
//           });
//         }
//       }

//       particlesRef.current = particles;
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseRef.current = {
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top,
//       };
//     };

//     const handleMouseLeave = () => {
//       mouseRef.current = { x: -1000, y: -1000 };
//     };

//     const draw = () => {
//       context.clearRect(0, 0, width, height);
//       time += 0.01;

//       particlesRef.current.forEach((particle) => {
//         const floatX = prefersReducedMotion
//           ? 0
//           : Math.sin(time * particle.speed + particle.depth) * 8;
//         const floatY = prefersReducedMotion
//           ? 0
//           : Math.cos(time * particle.speed + particle.depth) * 8;

//         const currentX = particle.baseX + floatX;
//         const currentY = particle.baseY + floatY;
//         const dx = currentX - mouseRef.current.x;
//         const dy = currentY - mouseRef.current.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         let repelX = 0;
//         let repelY = 0;

//         if (distance > 0 && distance < 180) {
//           const force = (180 - distance) / 180;
//           repelX = (dx / distance) * force * 22;
//           repelY = (dy / distance) * force * 22;
//         }

//         const depthFactor = 1 - particle.depth / 200;
//         const radius = Math.max(0.3, particle.size * depthFactor);

//         context.beginPath();
//         context.arc(
//           currentX + repelX,
//           currentY + repelY,
//           radius,
//           0,
//           Math.PI * 2,
//         );
//         context.fillStyle = color;
//         context.globalAlpha = 0.18 + depthFactor * 0.24;
//         context.fill();
//       });

//       context.globalAlpha = 1;

//       if (!prefersReducedMotion) {
//         frameId = window.requestAnimationFrame(draw);
//       }
//     };

//     createParticles();
//     draw();

//     window.addEventListener('resize', createParticles);
//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.cancelAnimationFrame(frameId);
//       window.removeEventListener('resize', createParticles);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, [color]);

//   return (
//     <canvas
//       ref={canvasRef}
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
//     />
//   );
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const slide = SLIDES[active];

//   const go = useCallback((direction: 1 | -1) => {
//     setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;

//       if (index === active && isPlaying) {
//         video.play().catch(() => setIsPlaying(false));
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, isPlaying]);

//   const togglePlayback = () => {
//     setIsPlaying((playing) => !playing);
//   };

//   return (
//     <section
//       className="relative isolate h-[100svh] min-h-[700px] max-h-[960px] w-full overflow-hidden bg-[#08120E] text-white selection:bg-[#A3C2B8]/30"
//       style={{ '--accent': slide.color } as CSSProperties}
//       aria-label="Terra Ecopreneurs introduction"
//     >
//       {/* Background photography */}
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => (
//           <img
//             key={item.image.src}
//             src={item.image.src}
//             alt={item.image.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//               index === active ? 'opacity-100' : 'opacity-0'
//             }`}
//             loading={index === 0 ? 'eager' : 'lazy'}
//             aria-hidden={index !== active}
//           />
//         ))}

//         <ParticleTerrain color={slide.color} />

//         {/* Contrast shading keeps the heading legible over changing imagery */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#08120E]/90 via-[#08120E]/70 to-[#08120E]/30 lg:to-[#08120E]/10" />
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08120E]/90 via-transparent to-[#08120E]/45" />
//       </div>

//       {/* Main content, with room beneath the fixed navbar */}
//       <div className="relative z-30 flex h-full items-center px-6 pb-32 pt-36 sm:px-12 sm:pb-36 sm:pt-40 lg:px-20 xl:px-28">
//         <div className="w-full max-w-2xl lg:max-w-[54%]">
//           <Reveal delay={100}>
//             <p
//               className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] sm:mb-7 sm:text-xs"
//               style={{ color: 'var(--accent)' }}
//             >
//               <Aperture size={16} aria-hidden="true" />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           <h1 className="font-serif text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.92] tracking-[-0.045em] text-white [text-shadow:0_3px_24px_rgba(0,0,0,0.45)]">
//             {slide.headline.map((line, index) => (
//               <span key={`${active}-${index}`} className="block overflow-hidden pb-1">
//                 <span
//                   className="block translate-y-full animate-[hero-slide-up_800ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${180 + index * 130}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <div className="mt-7 flex max-w-2xl flex-col gap-6 sm:mt-9 md:flex-row md:items-end md:gap-8">
//             <Reveal delay={550}>
//               <p className="max-w-md text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={700} className="flex shrink-0 flex-wrap items-center gap-3">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group inline-flex min-h-12 items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-[#08120E] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
//                 style={{ backgroundColor: 'var(--accent)' }}
//               >
//                 {slide.primaryCta.label}
//                 <ArrowUpRight
//                   size={17}
//                   aria-hidden="true"
//                   className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </Link>

//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
//               >
//                 {slide.secondaryCta.label}
//                 <ArrowUpRight
//                   size={15}
//                   aria-hidden="true"
//                   className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* Circular video feature, hidden on smaller screens */}
//       <div className="absolute right-[6%] top-[47%] z-20 hidden -translate-y-1/2 lg:block">
//         <button
//           type="button"
//           onClick={togglePlayback}
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//           aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
//           className="group relative aspect-square w-[34vw] max-w-[520px] overflow-hidden rounded-full border border-white/30 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.4)] outline-none transition duration-700 hover:scale-[1.025] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#08120E]"
//         >
//           {SLIDES.map((item, index) => (
//             <video
//               key={item.video.src}
//               ref={(element) => {
//                 videoRefs.current[index] = element;
//               }}
//               src={item.video.src}
//               poster={item.video.poster}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                 index === active ? 'opacity-100' : 'opacity-0'
//               }`}
//               muted
//               loop
//               playsInline
//               preload={index === 0 ? 'auto' : 'metadata'}
//               aria-hidden="true"
//             />
//           ))}

//           <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/15 via-transparent to-transparent" />
//           <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]" />

//           <span
//             className={`absolute inset-0 grid place-items-center bg-black/30 transition-opacity duration-300 ${
//               isHovering ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <span className="grid h-16 w-16 place-items-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-sm">
//               {isPlaying ? (
//                 <Pause size={22} fill="currentColor" />
//               ) : (
//                 <Play size={22} fill="currentColor" className="ml-1" />
//               )}
//             </span>
//           </span>
//         </button>
//       </div>

//       {/* Bottom controls */}
//       <div className="absolute bottom-0 left-0 z-40 w-full px-6 pb-6 sm:px-12 sm:pb-8 lg:px-20 xl:px-28">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 border-t border-white/20 pt-4 sm:pt-5">
//           <div className="flex min-w-0 items-center gap-3 sm:gap-4">
//             <button
//               type="button"
//               onClick={togglePlayback}
//               aria-label={isPlaying ? 'Pause video' : 'Play video'}
//               className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//             >
//               {isPlaying ? (
//                 <Pause size={15} fill="currentColor" />
//               ) : (
//                 <Play size={15} fill="currentColor" className="ml-0.5" />
//               )}
//             </button>

//             <span className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
//               {slide.caption}
//             </span>
//           </div>

//           <div className="hidden items-center gap-4 sm:flex sm:gap-6">
//             {SLIDES.map((item, index) => (
//               <button
//                 key={item.caption}
//                 type="button"
//                 onClick={() => setActive(index)}
//                 aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                 aria-current={index === active}
//                 className="group flex h-8 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//               >
//                 <span
//                   className={`font-mono text-[10px] transition-colors ${
//                     index === active ? 'text-[var(--accent)]' : 'text-white/50'
//                   }`}
//                 >
//                   0{index + 1}
//                 </span>
//                 <span
//                   className={`ml-3 h-px transition-all duration-500 ${
//                     index === active
//                       ? 'w-12 bg-[var(--accent)] sm:w-16'
//                       : 'w-4 bg-white/30 group-hover:bg-white/70'
//                   }`}
//                 />
//               </button>
//             ))}
//           </div>

//           <div className="flex shrink-0 items-center gap-2">
//             <button
//               type="button"
//               onClick={() => go(-1)}
//               aria-label="Previous slide"
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//             >
//               <ChevronLeft size={18} />
//             </button>
//             <button
//               type="button"
//               onClick={() => go(1)}
//               aria-label="Next slide"
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes hero-slide-up {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-\\[hero-slide-up_800ms-cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\] {
//             animation: none;
//             transform: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// import { useState, useCallback, useEffect, useRef, type CSSProperties } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Aperture,
// } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: [string, string];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   color: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://i.pinimg.com/736x/4e/c5/f6/4ec5f651f387f720b68fcb5a8c4807c4.jpg',
//       alt: 'Misty mountains at sunrise',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/31079999/',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2940&auto=format&fit=crop',
//     },
//     eyebrow: 'Engineering · Energy · Sustainability',
//     headline: ['Smarter systems.', 'A sustainable future.'],
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     color: '#A3C2B8',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Lush green forest canopy',
//     },
//     video: {
//       src: '/videos/14160939_1920_1080_60fps.mp4',
//       poster:
//         'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'Clean energy · Efficient operations',
//     headline: ['Use less energy.', 'Achieve more.'],
//     support:
//       'From energy audits to clean energy, we help organisations lower operating costs and build more resilient operations.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'Contact our team', to: '/contact' },
//     caption: 'Efficiency, clean energy, and smarter buildings',
//     color: '#D4C4A8',
//   },
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//       alt: 'Sunlight filtering through a forest',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/33234773/',
//       poster:
//         'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560&auto=format&fit=crop',
//     },
//     eyebrow: 'TRANSFORM · Karnataka',
//     headline: ['Growing opportunity.', 'Restoring livelihoods.'],
//     support:
//       'Through the TRANSFORM project, we support Karnataka’s coffee and spice producers with sustainable practices and stronger market connections.',
//     primaryCta: { label: 'Discover TRANSFORM', to: '/agriculture' },
//     secondaryCta: { label: 'See our impact', to: '/impact' },
//     caption: 'Working with coffee and spice producers',
//     color: '#E5C1A8',
//   },
// ];

// function ParticleTerrain({
//   color,
//   active,
// }: {
//   color: string;
//   active: number;
// }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const particles = useRef<
//     Array<{
//       x: number;
//       y: number;
//       z: number;
//       baseX: number;
//       baseY: number;
//       size: number;
//       speed: number;
//     }>
//   >([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     const initParticles = () => {
//       particles.current = [];
//       const spacing = 40;
//       const cols = Math.ceil(width / spacing);
//       const rows = Math.ceil(height / spacing);

//       for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//           const x = i * spacing + (Math.random() - 0.5) * 10;
//           const y = j * spacing + (Math.random() - 0.5) * 10;
//           const z = Math.sin(i * 0.2) * Math.cos(j * 0.2) * 100;

//           particles.current.push({
//             x,
//             y,
//             z,
//             baseX: x,
//             baseY: y,
//             size: Math.random() * 1.5 + 0.5,
//             speed: Math.random() * 0.5 + 0.1,
//           });
//         }
//       }
//     };

//     initParticles();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//       initParticles();
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       mouse.current = { x: event.clientX, y: event.clientY };
//     };

//     window.addEventListener('resize', handleResize);
//     window.addEventListener('mousemove', handleMouseMove);

//     let time = 0;

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
//       time += 0.01;

//       particles.current.forEach((particle) => {
//         const floatX = Math.sin(time * particle.speed + particle.z) * 15;
//         const floatY = Math.cos(time * particle.speed + particle.z) * 15;
//         const dx = particle.baseX + floatX - mouse.current.x;
//         const dy = particle.baseY + floatY - mouse.current.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const maxDistance = 300;

//         let offsetX = 0;
//         let offsetY = 0;

//         if (distance > 0 && distance < maxDistance) {
//           const force = (maxDistance - distance) / maxDistance;
//           offsetX = (dx / distance) * force * 50;
//           offsetY = (dy / distance) * force * 50;
//         }

//         particle.x = particle.baseX + floatX + offsetX;
//         particle.y = particle.baseY + floatY + offsetY;

//         ctx.beginPath();
//         const size = Math.max(0.1, particle.size * (1 - particle.z / 200));
//         ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
//         ctx.fillStyle = color;
//         ctx.globalAlpha = 0.15 + (1 - particle.z / 200) * 0.4;
//         ctx.fill();
//       });

//       ctx.globalAlpha = 1;
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [color, active]);

//   return <canvas ref={canvasRef} className="absolute inset-0 z-10" />;
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((direction: 1 | -1) => {
//     setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;

//       if (index === active && isPlaying) {
//         video.muted = true;
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, isPlaying]);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const slide = SLIDES[active];
//   const textScale = 1 - Math.min(scrollY / 1000, 0.2);
//   const textY = Math.min(scrollY * 0.5, 300);
//   const opacity = 1 - Math.min(scrollY / 600, 0.8);
//   const videoScale = 1 + Math.min(scrollY / 2000, 0.1);

//   return (
//     <section
//       className="relative h-[88svh] min-h-[700px] max-h-[860px] w-full overflow-hidden bg-[#050B08] text-white selection:bg-[#A3C2B8]/30"
//       style={{ '--accent': slide.color } as CSSProperties}
//     >
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => (
//           <img
//             key={item.image.src}
//             src={item.image.src}
//             alt={item.image.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               index === active ? 'opacity-30' : 'opacity-0'
//             }`}
//           />
//         ))}

//         <ParticleTerrain color={slide.color} active={active} />

//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#050B08] via-[#050B08]/80 to-transparent to-70%" />
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050B08] via-transparent to-[#050B08]/50" />
//       </div>

//       <div
//         className="relative z-30 flex h-full flex-col justify-center px-6 pb-24 pt-32 sm:px-12 sm:pb-28 sm:pt-36 lg:px-24 xl:px-32"
//         style={{
//           transform: `translateY(${textY}px) scale(${textScale})`,
//           opacity,
//         }}
//       >
//         <div className="w-full max-w-full lg:max-w-[46vw]">
//           <Reveal delay={100}>
//             <p
//               className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em]"
//               style={{ color: 'var(--accent)' }}
//             >
//               <Aperture size={16} className="animate-[spin_4s_linear_infinite]" />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           <h1 className="flex flex-col font-serif text-[clamp(2rem,4.1vw,5rem)] leading-[0.95] tracking-tight drop-shadow-2xl">
//             {slide.headline.map((line, index) => (
//               <span
//                 key={`${active}-${index}`}
//                 className="block overflow-hidden"
//               >
//                 <span
//                   className="block translate-y-full whitespace-nowrap animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${200 + index * 150}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-center">
//             <Reveal delay={700}>
//               <p className="max-w-md font-body text-lg leading-relaxed text-white/75">
//                 {slide.support}
//               </p>
//             </Reveal>

//             <Reveal delay={900} className="flex flex-wrap items-center gap-4">
//               <Link
//                 to={slide.primaryCta.to}
//                 className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-[#050B08] transition-all hover:scale-105"
//                 style={{ backgroundColor: 'var(--accent)' }}
//               >
//                 <span className="relative z-10">{slide.primaryCta.label}</span>
//                 <ArrowUpRight
//                   size={18}
//                   className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>

//               <Link
//                 to={slide.secondaryCta.to}
//                 className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
//               >
//                 {slide.secondaryCta.label}
//                 <span className="h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-white" />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </div>

//       {/* Circular video lens */}
//       <div
//         className="absolute right-[5%] top-1/2 z-20 hidden -translate-y-1/2 lg:block"
//         style={{ transform: `translateY(-50%) scale(${videoScale})` }}
//       >
//         <div
//           className="group relative aspect-square w-[40vw] max-w-[620px] cursor-pointer overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-105"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//           onClick={() => setIsPlaying((playing) => !playing)}
//         >
//           {SLIDES.map((item, index) => (
//             <video
//               key={item.video.src}
//               ref={(element) => {
//                 videoRefs.current[index] = element;
//               }}
//               src={item.video.src}
//               poster={item.video.poster}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                 index === active ? 'opacity-100' : 'opacity-0'
//               }`}
//               muted
//               loop
//               playsInline
//               autoPlay
//               preload={index === 0 ? 'auto' : 'metadata'}
//               onError={(event) => {
//                 event.currentTarget.style.display = 'none';
//               }}
//             />
//           ))}

//           <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 mix-blend-screen" />
//           <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />

//           <div
//             className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
//               isHovering ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="grid h-20 w-20 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md">
//               {isPlaying ? (
//                 <Pause size={32} fill="currentColor" />
//               ) : (
//                 <Play size={32} fill="currentColor" className="ml-2" />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Playback and slide controls */}
//       <div
//         className="absolute bottom-0 left-0 z-40 w-full px-6 pb-6 sm:px-12 sm:pb-7 lg:px-24 xl:px-32"
//         style={{ opacity }}
//       >
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between border-t border-white/10 pt-5">
//           <div className="flex min-w-0 items-center gap-4">
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause video' : 'Play video'}
//               className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white hover:text-black"
//             >
//               {isPlaying ? (
//                 <Pause size={16} fill="currentColor" />
//               ) : (
//                 <Play size={16} fill="currentColor" className="ml-0.5" />
//               )}
//             </button>

//             <span className="truncate text-xs font-medium uppercase tracking-widest text-white/60">
//               {slide.caption}
//             </span>
//           </div>

//           <div className="hidden items-center gap-8 sm:flex">
//             {SLIDES.map((item, index) => (
//               <button
//                 key={item.caption}
//                 type="button"
//                 onClick={() => setActive(index)}
//                 aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                 aria-current={index === active}
//                 className="group relative flex h-8 items-center"
//               >
//                 <span
//                   className={`font-mono text-[10px] transition-colors ${
//                     index === active
//                       ? 'text-[var(--accent)]'
//                       : 'text-white/40'
//                   }`}
//                 >
//                   0{index + 1}
//                 </span>
//                 <span
//                   className={`ml-3 h-[2px] transition-all duration-500 ${
//                     index === active
//                       ? 'w-16 bg-[var(--accent)]'
//                       : 'w-4 bg-white/20'
//                   }`}
//                 />
//               </button>
//             ))}
//           </div>

//           <div className="flex shrink-0 items-center gap-2">
//             <button
//               type="button"
//               onClick={() => go(-1)}
//               aria-label="Previous slide"
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <button
//               type="button"
//               onClick={() => go(1)}
//               aria-label="Next slide"
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideUp {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
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
//   Aperture,
// } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string;
//   headline: [string, string];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   color: string;
// };

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Renewable energy panels in a green landscape',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/31079999/',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: 'Engineering · Energy · Sustainability',
//     headline: ['Smarter systems.', 'A sustainable future.'],
//     support:
//       'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'About Terra', to: '/about' },
//     caption: 'Engineering progress with purpose',
//     color: '#A3C2B8',
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
//     eyebrow: 'Clean energy · Efficient operations',
//     headline: ['Use less energy.', 'Achieve more.'],
//     support:
//       'From energy audits to clean energy, we help organisations lower operating costs and build more resilient operations.',
//     primaryCta: { label: 'Explore our solutions', to: '/solutions' },
//     secondaryCta: { label: 'Contact our team', to: '/contact' },
//     caption: 'Efficiency, clean energy, and smarter buildings',
//     color: '#D4C4A8',
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
//     eyebrow: 'TRANSFORM · Karnataka',
//     headline: ['Growing opportunity.', 'Restoring livelihoods.'],
//     support:
//       'Through the TRANSFORM project, we support Karnataka’s coffee and spice producers with sustainable practices and stronger market connections.',
//     primaryCta: { label: 'Discover TRANSFORM', to: '/agriculture' },
//     secondaryCta: { label: 'See our impact', to: '/impact' },
//     caption: 'Working with coffee and spice producers',
//     color: '#E5C1A8',
//   },
// ];

// function ParticleTerrain({ color }: { color: string }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouseRef = useRef({ x: -1000, y: -1000 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');
//     if (!canvas || !context) return;

//     const reduceMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     let width = 0;
//     let height = 0;
//     let frameId = 0;
//     let time = 0;

//     let particles: Array<{
//       x: number;
//       y: number;
//       depth: number;
//       size: number;
//       speed: number;
//     }> = [];

//     const resize = () => {
//       const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

//       width = window.innerWidth;
//       height = window.innerHeight;

//       canvas.width = width * pixelRatio;
//       canvas.height = height * pixelRatio;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

//       particles = [];
//       const spacing = width < 768 ? 58 : 48;
//       const columns = Math.ceil(width / spacing);
//       const rows = Math.ceil(height / spacing);

//       for (let column = 0; column < columns; column += 1) {
//         for (let row = 0; row < rows; row += 1) {
//           particles.push({
//             x: column * spacing + (Math.random() - 0.5) * 12,
//             y: row * spacing + (Math.random() - 0.5) * 12,
//             depth: Math.sin(column * 0.22) * Math.cos(row * 0.18),
//             size: Math.random() * 1.2 + 0.4,
//             speed: Math.random() * 0.4 + 0.15,
//           });
//         }
//       }
//     };

//     const onMouseMove = (event: MouseEvent) => {
//       mouseRef.current = { x: event.clientX, y: event.clientY };
//     };

//     const draw = () => {
//       if (!context) return;

//       context.clearRect(0, 0, width, height);
//       time += 0.008;

//       particles.forEach((particle) => {
//         const floatX = reduceMotion
//           ? 0
//           : Math.sin(time * particle.speed + particle.depth * 5) * 9;
//         const floatY = reduceMotion
//           ? 0
//           : Math.cos(time * particle.speed + particle.depth * 5) * 9;

//         const baseX = particle.x + floatX;
//         const baseY = particle.y + floatY;

//         const dx = baseX - mouseRef.current.x;
//         const dy = baseY - mouseRef.current.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const force = distance > 0 && distance < 190
//           ? (190 - distance) / 190
//           : 0;

//         const x = baseX + (force ? (dx / distance) * force * 20 : 0);
//         const y = baseY + (force ? (dy / distance) * force * 20 : 0);

//         context.beginPath();
//         context.arc(
//           x,
//           y,
//           Math.max(0.3, particle.size * (1 - particle.depth * 0.25)),
//           0,
//           Math.PI * 2
//         );
//         context.fillStyle = color;
//         context.globalAlpha = 0.15 + (1 - particle.depth * 0.25) * 0.22;
//         context.fill();
//       });

//       context.globalAlpha = 1;

//       if (!reduceMotion) {
//         frameId = requestAnimationFrame(draw);
//       }
//     };

//     resize();
//     draw();

//     window.addEventListener('resize', resize);
//     window.addEventListener('mousemove', onMouseMove, { passive: true });

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('mousemove', onMouseMove);
//     };
//   }, [color]);

//   return (
//     <canvas
//       ref={canvasRef}
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 z-10"
//     />
//   );
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isHoveringMedia, setIsHoveringMedia] = useState(false);
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
//   const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());
//   const [mediaOffset, setMediaOffset] = useState(0);

//   const heroRef = useRef<HTMLElement>(null);
//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((direction: 1 | -1) => {
//     setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;

//       if (index === active && isPlaying && !failedVideos.has(index)) {
//         video.muted = true;
//         video.play().catch(() => {
//           // The still image remains visible if playback is blocked.
//         });
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, isPlaying, failedVideos]);

//   useEffect(() => {
//     let frameId = 0;

//     const updateParallax = () => {
//       cancelAnimationFrame(frameId);

//       frameId = requestAnimationFrame(() => {
//         const hero = heroRef.current;
//         if (!hero) return;

//         const bounds = hero.getBoundingClientRect();
//         const progress = Math.min(
//           1,
//           Math.max(0, -bounds.top / Math.max(bounds.height, 1))
//         );

//         setMediaOffset(progress * 16);
//       });
//     };

//     updateParallax();
//     window.addEventListener('scroll', updateParallax, { passive: true });

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('scroll', updateParallax);
//     };
//   }, []);

//   const slide = SLIDES[active];

//   const markVideoReady = (index: number) => {
//     setReadyVideos((current) => new Set(current).add(index));
//   };

//   const markVideoFailed = (index: number) => {
//     setFailedVideos((current) => new Set(current).add(index));
//   };

//   return (
//     <section
//       ref={heroRef}
//       className="relative h-[90svh] min-h-[650px] max-h-[900px] w-full overflow-hidden bg-[#050B08] text-white selection:bg-[#A3C2B8]/30"
//       style={{ '--accent': slide.color } as CSSProperties}
//     >
//       {/* Background image fallback and video layers */}
//       <div className="absolute inset-0 z-0">
//         {SLIDES.map((item, index) => {
//           const isActive = index === active;
//           const videoIsVisible =
//             isActive &&
//             readyVideos.has(index) &&
//             !failedVideos.has(index);

//           return (
//             <div
//               key={item.image.src}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 isActive ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <img
//                 src={item.image.src}
//                 alt={item.image.alt}
//                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                   videoIsVisible ? 'opacity-35' : 'opacity-55'
//                 }`}
//               />

//               <video
//                 ref={(element) => {
//                   videoRefs.current[index] = element;
//                 }}
//                 src={item.video.src}
//                 poster={item.video.poster}
//                 muted
//                 loop
//                 playsInline
//                 preload={index === 0 ? 'auto' : 'metadata'}
//                 autoPlay={isActive && isPlaying}
//                 onCanPlay={() => markVideoReady(index)}
//                 onError={() => markVideoFailed(index)}
//                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                   videoIsVisible ? 'opacity-55' : 'opacity-0'
//                 }`}
//               />
//             </div>
//           );
//         })}

//         <ParticleTerrain color={slide.color} />

//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#050B08] via-[#050B08]/75 to-[#050B08]/10 lg:to-[#050B08]/20" />
//         <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050B08] via-transparent to-[#050B08]/45" />
//       </div>

//       {/* Main copy */}
//       <div className="shell relative z-30 flex h-full items-center pb-28 pt-28 sm:pb-32">
//         <div className="w-full max-w-2xl lg:max-w-[52%]">
//           <Reveal delay={100}>
//             <p
//               className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs"
//               style={{ color: 'var(--accent)' }}
//             >
//               <Aperture size={16} />
//               {slide.eyebrow}
//             </p>
//           </Reveal>

//           <h1
//             key={`headline-${active}`}
//             className="font-serif text-[clamp(2.7rem,5.2vw,5.5rem)] leading-[0.96] tracking-tight text-white [text-shadow:0_8px_40px_rgba(0,0,0,0.35)]"
//           >
//             {slide.headline.map((line, index) => (
//               <span
//                 key={`${active}-${index}`}
//                 className="block overflow-hidden"
//               >
//                 <span
//                   className="block translate-y-full animate-[heroLineIn_800ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                   style={{ animationDelay: `${150 + index * 130}ms` }}
//                 >
//                   {line}
//                 </span>
//               </span>
//             ))}
//           </h1>

//           <Reveal delay={420}>
//             <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
//               {slide.support}
//             </p>
//           </Reveal>

//           <Reveal delay={550} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
//             <Link
//               to={slide.primaryCta.to}
//               className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-heading text-sm font-semibold text-[#07110D] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:px-7"
//               style={{ backgroundColor: 'var(--accent)' }}
//             >
//               {slide.primaryCta.label}
//               <ArrowUpRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </Link>

//             <Link
//               to={slide.secondaryCta.to}
//               className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
//             >
//               {slide.secondaryCta.label}
//               <span className="h-px w-7 bg-white/40 transition-all duration-300 group-hover:w-11 group-hover:bg-white" />
//             </Link>
//           </Reveal>
//         </div>
//       </div>

//       {/* Circular video feature */}
//       <div
//         className="absolute right-[5%] top-1/2 z-20 hidden -translate-y-1/2 lg:block"
//         style={{ translate: `0 ${-mediaOffset}px` }}
//       >
//         <div
//           className="group relative aspect-square w-[min(37vw,590px)] cursor-pointer overflow-hidden rounded-full border border-white/25 shadow-[0_0_100px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:scale-[1.03]"
//           onMouseEnter={() => setIsHoveringMedia(true)}
//           onMouseLeave={() => setIsHoveringMedia(false)}
//         >
//           <img
//             src={slide.image.src}
//             alt={slide.image.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//               readyVideos.has(active) && !failedVideos.has(active)
//                 ? 'opacity-0'
//                 : 'opacity-100'
//             }`}
//           />

//           <video
//             key={`feature-video-${active}`}
//             src={slide.video.src}
//             poster={slide.video.poster}
//             muted
//             loop
//             playsInline
//             autoPlay={isPlaying}
//             preload="metadata"
//             onCanPlay={() => markVideoReady(active)}
//             onError={() => markVideoFailed(active)}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//               readyVideos.has(active) && !failedVideos.has(active)
//                 ? 'opacity-100'
//                 : 'opacity-0'
//             }`}
//           />

//           <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/15 via-transparent to-transparent" />
//           <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.55)]" />

//           <button
//             type="button"
//             onClick={() => setIsPlaying((playing) => !playing)}
//             aria-label={isPlaying ? 'Pause featured video' : 'Play featured video'}
//             className={`absolute inset-0 z-10 flex items-center justify-center bg-black/35 transition-opacity duration-300 ${
//               isHoveringMedia ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <span className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/15 text-white shadow-xl backdrop-blur-md">
//               {isPlaying ? (
//                 <Pause size={25} fill="currentColor" />
//               ) : (
//                 <Play size={25} fill="currentColor" className="ml-1" />
//               )}
//             </span>
//           </button>

//           <span className="absolute bottom-[13%] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
//             {slide.caption}
//           </span>
//         </div>
//       </div>

//       {/* Slide controls */}
//       <div className="absolute bottom-0 left-0 z-40 w-full px-5 pb-5 sm:px-10 sm:pb-7 lg:px-16 xl:px-24">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 border-t border-white/15 pt-4 sm:pt-5">
//           <div className="flex min-w-0 items-center gap-3 sm:gap-4">
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause hero video' : 'Play hero video'}
//               className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/[0.04] text-white transition-colors hover:bg-white hover:text-[#07110D]"
//             >
//               {isPlaying ? (
//                 <Pause size={15} fill="currentColor" />
//               ) : (
//                 <Play size={15} fill="currentColor" className="ml-0.5" />
//               )}
//             </button>

//             <span className="truncate text-[9px] font-semibold uppercase tracking-[0.13em] text-white/60 sm:text-xs sm:tracking-[0.16em]">
//               {slide.caption}
//             </span>
//           </div>

//           <div className="hidden items-center gap-5 sm:flex">
//             {SLIDES.map((item, index) => (
//               <button
//                 key={item.caption}
//                 type="button"
//                 onClick={() => setActive(index)}
//                 aria-label={`Show slide ${index + 1}: ${item.caption}`}
//                 aria-current={index === active ? 'true' : undefined}
//                 className="group flex h-8 items-center"
//               >
//                 <span
//                   className={`font-mono text-[10px] transition-colors ${
//                     index === active
//                       ? 'text-[var(--accent)]'
//                       : 'text-white/40 group-hover:text-white/75'
//                   }`}
//                 >
//                   0{index + 1}
//                 </span>

//                 <span
//                   className={`ml-3 h-[2px] transition-all duration-500 ${
//                     index === active
//                       ? 'w-14 bg-[var(--accent)]'
//                       : 'w-4 bg-white/20 group-hover:bg-white/50'
//                   }`}
//                 />
//               </button>
//             ))}
//           </div>

//           <div className="flex shrink-0 items-center gap-2">
//             <button
//               type="button"
//               onClick={() => go(-1)}
//               aria-label="Previous slide"
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <button
//               type="button"
//               onClick={() => go(1)}
//               aria-label="Next slide"
//               className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroLineIn {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-\\[heroLineIn_800ms_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\] {
//             animation: none !important;
//             transform: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



// import { useState, useCallback, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Leaf,
// } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';

// type Slide = {
//   image: { src: string; alt: string };
//   video: { src: string; poster: string };
//   eyebrow: string[];
//   headline: [string, string];
//   support: string;
//   primaryCta: { label: string; to: string };
//   secondaryCta: { label: string; to: string };
//   caption: string;
//   tag: string;
// };

// const AUTOPLAY_MS = 8000;

// // Brand greens taken from the reference design
// const GREEN = '#7ED957';
// const GREEN_SOFT = '#B5F27E';

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Renewable energy panels in a green landscape',
//     },
//     video: {
//       src: 'https://www.pexels.com/download/video/31079999/',
//       poster:
//         'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1400&q=85',
//     },
//     eyebrow: ['Engineering', 'Energy', 'Sustainability'],
//     headline: ['Smarter systems.', 'A sustainable future.'],
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
//     headline: ['Use less energy.', 'Achieve more.'],
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
//     headline: ['Growing opportunity.', 'Restoring livelihoods.'],
//     support:
//       'Through the TRANSFORM project, we support Karnataka’s coffee and spice producers with sustainable practices and stronger market connections.',
//     primaryCta: { label: 'Discover TRANSFORM', to: '/agriculture' },
//     secondaryCta: { label: 'See our impact', to: '/impact' },
//     caption: 'Working with coffee and spice producers',
//     tag: 'Rooted in Karnataka’s farms',
//   },
// ];

// /**
//  * The curved edge of the media panel. The same path is used to clip the media
//  * (objectBoundingBox units, 0–1) and to draw the glowing green edge (0–100).
//  */
// const EDGE_PATH = 'M30 0 C15 8 2 20 2 42 C2 70 15 95 55 100';

// function PanelDefs() {
//   return (
//     <svg width="0" height="0" className="absolute" aria-hidden="true">
//       <defs>
//         <clipPath id="hero-panel-clip" clipPathUnits="objectBoundingBox">
//           <path d="M0.30 0 C0.15 0.08 0.02 0.20 0.02 0.42 C0.02 0.70 0.15 0.95 0.55 1 L1 1 L1 0 Z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// function EdgeGlow() {
//   return (
//     <svg
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
//     >
//       <defs>
//         <linearGradient id="edge-green" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={GREEN} stopOpacity="0.2" />
//           <stop offset="45%" stopColor={GREEN_SOFT} stopOpacity="1" />
//           <stop offset="100%" stopColor={GREEN} stopOpacity="0.9" />
//         </linearGradient>
//         <linearGradient id="edge-blue" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#1E6FA8" stopOpacity="0" />
//           <stop offset="60%" stopColor="#2BA6C9" stopOpacity="0.55" />
//           <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.2" />
//         </linearGradient>
//         <filter id="edge-blur" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="1.2" />
//         </filter>
//       </defs>

//       {/* soft swoosh lines trailing off the edge */}
//       <path
//         d={'M26 0 C8 10 -4 24 -4 46 C-4 76 14 99 62 100'}
//         fill="none"
//         stroke="url(#edge-blue)"
//         strokeWidth="1.4"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d={'M22 0 C2 12 -9 26 -9 48 C-9 80 12 100 70 100'}
//         fill="none"
//         stroke="url(#edge-blue)"
//         strokeWidth="1"
//         opacity="0.6"
//         vectorEffect="non-scaling-stroke"
//       />

//       {/* glow + crisp green edge */}
//       <path
//         d={EDGE_PATH}
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="6"
//         opacity="0.45"
//         filter="url(#edge-blur)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d={EDGE_PATH}
//         fill="none"
//         stroke="url(#edge-green)"
//         strokeWidth="2.5"
//         vectorEffect="non-scaling-stroke"
//       />
//     </svg>
//   );
// }

// function BackdropWaves() {
//   return (
//     <svg
//       viewBox="0 0 1200 800"
//       preserveAspectRatio="xMidYMid slice"
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
//     >
//       <defs>
//         <linearGradient id="wave-fade" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor="#1E6FA8" stopOpacity="0" />
//           <stop offset="60%" stopColor="#2BA6C9" stopOpacity="0.5" />
//           <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.35" />
//         </linearGradient>
//       </defs>
//       {[0, 1, 2, 3, 4].map((i) => (
//         <path
//           key={i}
//           d={`M0 ${640 + i * 14} C 380 ${700 + i * 10}, 700 ${560 - i * 8}, 1200 ${
//             470 + i * 18
//           }`}
//           fill="none"
//           stroke="url(#wave-fade)"
//           strokeWidth="1"
//         />
//       ))}
//     </svg>
//   );
// }

// export function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
//   const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());

//   const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

//   const go = useCallback((direction: 1 | -1) => {
//     setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
//   }, []);

//   // Play only the active slide's video
//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;

//       if (index === active && isPlaying && !failedVideos.has(index)) {
//         video.muted = true;
//         video.play().catch(() => {
//           // Poster/still image stays visible if playback is blocked.
//         });
//       } else {
//         video.pause();
//       }
//     });
//   }, [active, isPlaying, failedVideos]);

//   // Auto-advance while playing (skipped for reduced-motion users)
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

//   return (
//     <section
//       className="relative h-[90svh] min-h-[680px] max-h-[920px] w-full overflow-hidden bg-[#04101A] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured highlights"
//     >
//       <PanelDefs />

//       {/* ───────── Dark backdrop (left side) ───────── */}
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_20%_30%,#0B2A3A_0%,#06151F_45%,#04101A_100%)]" />
//       <BackdropWaves />
//       <div className="pointer-events-none absolute -bottom-16 -left-16 z-0 h-64 w-64 rounded-full bg-[#4C9A2A]/30 blur-3xl" />

//       {/* ───────── Media panel (right side, curved) ───────── */}
//       <div className="absolute inset-0 z-10 lg:left-auto lg:right-0 lg:w-[58%]">
//         <div className="absolute inset-0 overflow-hidden lg:[clip-path:url(#hero-panel-clip)]">
//           {SLIDES.map((item, index) => {
//             const isActive = index === active;
//             const videoIsVisible =
//               isActive && readyVideos.has(index) && !failedVideos.has(index);

//             return (
//               <div
//                 key={item.image.src}
//                 aria-hidden={!isActive}
//                 className={`absolute inset-0 transition-opacity duration-1000 ${
//                   isActive ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <img
//                   src={item.image.src}
//                   alt={isActive ? item.image.alt : ''}
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//                 <video
//                   ref={(element) => {
//                     videoRefs.current[index] = element;
//                   }}
//                   src={item.video.src}
//                   poster={item.video.poster}
//                   muted
//                   loop
//                   playsInline
//                   preload={index === 0 ? 'auto' : 'metadata'}
//                   autoPlay={isActive && isPlaying}
//                   onCanPlay={() => markVideoReady(index)}
//                   onError={() => markVideoFailed(index)}
//                   className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                     videoIsVisible ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 />
//               </div>
//             );
//           })}

//           {/* Mobile: image sits behind the copy, so darken it */}
//           <div className="absolute inset-0 bg-[#04101A]/70 lg:hidden" />
//           {/* Desktop: soften the inner curved edge into the dark side */}
//           <div className="absolute inset-0 hidden bg-gradient-to-r from-[#04101A]/50 via-transparent to-transparent lg:block" />
//           <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#04101A]/60 to-transparent" />
//         </div>

//         <EdgeGlow />

//         {/* Pill caption on the image */}
//         <div className="absolute bottom-[17%] right-[4%] z-20 hidden lg:block">
//           <span
//             key={`tag-${active}`}
//             className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#06151F]/55 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
//           >
//             <Leaf size={18} style={{ color: GREEN }} />
//             {slide.tag}
//           </span>
//         </div>
//       </div>

//       {/* ───────── Copy ───────── */}
//       <div className="shell relative z-30 flex h-full items-center pb-28 pt-32 sm:pb-32">
//         <div className="w-full max-w-2xl lg:max-w-[50%]">
//           <Reveal delay={100}>
//             <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 sm:text-xs">
//               <span
//                 className="mr-2 h-[3px] w-12 rounded-full"
//                 style={{ backgroundColor: GREEN }}
//               />
//               {slide.eyebrow.map((item, index) => (
//                 <span key={item} className="flex items-center gap-3">
//                   {index > 0 && (
//                     <span
//                       className="h-1.5 w-1.5 rounded-full"
//                       style={{ backgroundColor: GREEN }}
//                     />
//                   )}
//                   {item}
//                 </span>
//               ))}
//             </p>
//           </Reveal>

//           <h1
//             key={`headline-${active}`}
//             aria-live="polite"
//             className="font-heading text-[clamp(2.6rem,5.3vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.03em]"
//           >
//             <span className="block overflow-hidden pb-1">
//               <span
//                 className="block translate-y-full text-white animate-[heroLineIn_800ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                 style={{ animationDelay: '150ms' }}
//               >
//                 {slide.headline[0]}
//               </span>
//             </span>
//             <span className="block overflow-hidden pb-2">
//               <span
//                 className="block translate-y-full bg-clip-text text-transparent animate-[heroLineIn_800ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
//                 style={{
//                   animationDelay: '280ms',
//                   backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//                 }}
//               >
//                 {slide.headline[1]}
//               </span>
//             </span>
//           </h1>

//           <Reveal delay={420}>
//             <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
//               {slide.support}
//             </p>
//           </Reveal>

//           <Reveal
//             delay={550}
//             className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
//           >
//             <Link
//               to={slide.primaryCta.to}
//               className="group inline-flex items-center gap-4 rounded-full px-7 py-4 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.4)]"
//               style={{
//                 backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
//               }}
//             >
//               {slide.primaryCta.label}
//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to={slide.secondaryCta.to}
//               className="border-b border-white/70 pb-1 font-heading text-sm font-medium text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               {slide.secondaryCta.label}
//             </Link>
//           </Reveal>
//         </div>
//       </div>

//       {/* ───────── Bottom controls ───────── */}
//       <div className="absolute bottom-0 left-0 z-40 w-full px-5 pb-5 sm:px-10 sm:pb-7 lg:px-16 xl:px-24">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
//           {/* Play / pause + caption */}
//           <div className="flex min-w-0 items-center gap-4">
//             <button
//               type="button"
//               onClick={() => setIsPlaying((playing) => !playing)}
//               aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
//               className="grid h-12 w-12 shrink-0 place-items-center rounded-full border text-white transition-colors hover:bg-[#7ED957] hover:text-[#07110D]"
//               style={{ borderColor: GREEN }}
//             >
//               {isPlaying ? (
//                 <Pause size={16} fill="currentColor" />
//               ) : (
//                 <Play size={16} fill="currentColor" className="ml-0.5" />
//               )}
//             </button>

//             <span className="hidden h-6 w-px bg-white/25 sm:block" />

//             <span
//               key={`caption-${active}`}
//               className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs"
//             >
//               {slide.caption}
//             </span>
//           </div>

//           {/* 01 ——— 02 — 03 */}
//           <div className="hidden items-center gap-6 sm:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
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
//                     className={`relative ml-3 h-[3px] overflow-hidden rounded-full transition-all duration-500 ${
//                       isCurrent ? 'w-16 bg-white/20' : 'w-5 bg-white/30'
//                     }`}
//                   >
//                     {isCurrent && (
//                       <span
//                         key={`progress-${active}`}
//                         className="absolute inset-0 origin-left rounded-full animate-[heroProgress_linear_forwards]"
//                         style={{
//                           backgroundColor: GREEN,
//                           animationDuration: `${AUTOPLAY_MS}ms`,
//                           animationPlayState: isPlaying ? 'running' : 'paused',
//                         }}
//                       />
//                     )}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Prev / next */}
//           <div className="flex shrink-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => go(-1)}
//               aria-label="Previous slide"
//               className="grid h-12 w-12 place-items-center rounded-full border border-white/70 text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               <ChevronLeft size={20} />
//             </button>

//             <button
//               type="button"
//               onClick={() => go(1)}
//               aria-label="Next slide"
//               className="grid h-12 w-12 place-items-center rounded-full border border-white/70 text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes heroLineIn {
//           from { transform: translateY(100%); opacity: 0; }
//           to   { transform: translateY(0);    opacity: 1; }
//         }

//         @keyframes heroProgress {
//           from { transform: scaleX(0); }
//           to   { transform: scaleX(1); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           [class*='animate-[heroLineIn'] {
//             animation: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//           [class*='animate-[heroProgress'] {
//             animation: none !important;
//             transform: scaleX(1) !important;
//           }
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

// const SLIDES: Slide[] = [
//   {
//     image: {
//       src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
//       alt: 'Renewable energy panels in a green landscape',
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

// const HEADLINE_SIZE = 'clamp(2.4rem, min(4.7vw, 8.5svh), 5rem)';

// const riseClass = (isActive: boolean) =>
//   `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
//     isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//   }`;

// const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
//   transitionDelay: isActive ? `${delay}ms` : '0ms',
// });

// const EDGE_PATH = 'M26 0 C12 10 5 28 5 49 C5 66 14 86 60 100';

// function PanelDefs() {
//   return (
//     <svg width="0" height="0" className="absolute" aria-hidden="true">
//       <defs>
//         <clipPath id="hero-panel-clip" clipPathUnits="objectBoundingBox">
//           <path d="M0.26 0 C0.12 0.10 0.05 0.28 0.05 0.49 C0.05 0.66 0.14 0.86 0.60 1 L1 1 L1 0 Z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// function EdgeGlow() {
//   return (
//     <svg
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
//     >
//       <defs>
//         <linearGradient id="edge-green" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={GREEN} stopOpacity="0.25" />
//           <stop offset="40%" stopColor={GREEN_SOFT} stopOpacity="1" />
//           <stop offset="100%" stopColor={GREEN} stopOpacity="0.95" />
//         </linearGradient>
//         <linearGradient id="edge-blue" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#1E6FA8" stopOpacity="0" />
//           <stop offset="55%" stopColor="#2BA6C9" stopOpacity="0.6" />
//           <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.3" />
//         </linearGradient>
//         <filter id="edge-blur" x="-20%" y="-20%" width="140%" height="140%">
//           <feGaussianBlur stdDeviation="1.2" />
//         </filter>
//         <filter id="edge-blur-wide" x="-60%" y="-10%" width="220%" height="120%">
//           <feGaussianBlur stdDeviation="7" />
//         </filter>
//       </defs>

//       <path
//         d={EDGE_PATH}
//         fill="none"
//         stroke="#1B8DA6"
//         strokeWidth="46"
//         opacity="0.28"
//         filter="url(#edge-blur-wide)"
//         transform="translate(-3 0)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M22 0 C6 10 -2 28 -2 49 C-2 70 10 90 58 100"
//         fill="none"
//         stroke="url(#edge-blue)"
//         strokeWidth="1.4"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d="M18 0 C0 12 -9 30 -9 50 C-9 76 8 96 66 100"
//         fill="none"
//         stroke="url(#edge-blue)"
//         strokeWidth="1"
//         opacity="0.6"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d={EDGE_PATH}
//         fill="none"
//         stroke={GREEN}
//         strokeWidth="6"
//         opacity="0.5"
//         filter="url(#edge-blur)"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d={EDGE_PATH}
//         fill="none"
//         stroke="url(#edge-green)"
//         strokeWidth="2.5"
//         vectorEffect="non-scaling-stroke"
//       />
//       <path
//         d={EDGE_PATH}
//         pathLength="100"
//         fill="none"
//         stroke="#F2FFE3"
//         strokeWidth="3"
//         strokeLinecap="round"
//         strokeDasharray="6 94"
//         filter="url(#edge-blur)"
//         vectorEffect="non-scaling-stroke"
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
//           <stop offset="0%" stopColor="#1E6FA8" stopOpacity="0" />
//           <stop offset="55%" stopColor="#2BA6C9" stopOpacity="0.55" />
//           <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.5" />
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

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#04101A] text-white selection:bg-[#7ED957]/30"
//       aria-roledescription="carousel"
//       aria-label="Featured highlights"
//     >
//       <PanelDefs />

//       <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_35%,#0A2636_0%,#06151F_45%,#04101A_100%)]" />
//       <BackdropWaves />
//       <BlurredLeaves />

//       <div className="absolute inset-0 z-10 lg:left-auto lg:right-0 lg:w-[46%]">
//         <div className="absolute inset-0 overflow-hidden lg:[clip-path:url(#hero-panel-clip)]">
//           {SLIDES.map((item, index) => {
//             const isActive = index === active;
//             const videoIsVisible =
//               isActive && readyVideos.has(index) && !failedVideos.has(index);

//             return (
//               <div
//                 key={item.image.src}
//                 aria-hidden={!isActive}
//                 className={`absolute inset-0 transition-opacity duration-1000 ${
//                   isActive ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <div
//                   className={`absolute inset-0 transition-transform ease-out motion-reduce:transition-none ${
//                     isActive
//                       ? 'scale-[1.08] duration-[9000ms]'
//                       : 'scale-100 duration-[1200ms]'
//                   }`}
//                 >
//                   <img
//                     src={item.image.src}
//                     alt={isActive ? item.image.alt : ''}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                   <video
//                     ref={(element) => {
//                       videoRefs.current[index] = element;
//                     }}
//                     src={item.video.src}
//                     poster={item.video.poster}
//                     muted
//                     loop
//                     playsInline
//                     preload={index === 0 ? 'auto' : 'metadata'}
//                     autoPlay={isActive && isPlaying}
//                     onCanPlay={() => markVideoReady(index)}
//                     onError={() => markVideoFailed(index)}
//                     className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//                       videoIsVisible ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   />
//                 </div>
//               </div>
//             );
//           })}

//           <div className="absolute inset-0 bg-[#04101A]/70 lg:hidden" />
//           <div className="absolute inset-0 hidden bg-gradient-to-r from-[#04101A]/45 via-transparent to-transparent lg:block" />
//           <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#04101A]/55 to-transparent" />
//         </div>
//         <EdgeGlow />
//       </div>

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

//       {/* Increased section height */}
//       <div className="shell relative z-30 flex min-h-[clamp(660px,86svh,860px)] items-center pb-28 pt-28 sm:pb-28 lg:pt-32">
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
//                   className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 sm:text-xs ${riseClass(
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
//                   className="font-heading font-bold leading-[1.03] tracking-[-0.03em]"
//                   style={{
//                     fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
//                   }}
//                 >
//                   {item.headline.map((line, i) => (
//                     <span key={line} className="block overflow-hidden pb-[0.06em]">
//                       <span
//                         className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
//                           isActive ? 'translate-y-0' : 'translate-y-[110%]'
//                         } ${i === 1 ? 'bg-clip-text text-transparent' : 'text-white'}`}
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
//                     className="border-b border-white/70 pb-1 font-heading text-sm font-medium text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
//                   >
//                     {item.secondaryCta.label}
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 z-40 w-full px-5 pb-5 sm:px-10 sm:pb-6 lg:px-16 xl:px-24">
//         <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4">
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



import {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type CSSProperties,
} from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from 'lucide-react';

type Slide = {
  image: { src: string; alt: string };
  video: { src: string; poster: string };
  eyebrow: string[];
  headline: [string, string, string];
  headlineScale: number;
  support: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  caption: string;
  tag: string;
};

const AUTOPLAY_MS = 8000;
const GREEN = '#7ED957';
const GREEN_SOFT = '#B5F27E';
const RING_LENGTH = 138.2;
const DESKTOP_MIN = 1024;

const SLIDES: Slide[] = [
  {
    image: {
      src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85',
      alt: 'Wind turbines over green hills',
    },
    video: {
      src: 'https://www.pexels.com/download/video/31079999/',
      poster:
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1400&q=85',
    },
    eyebrow: ['Engineering', 'Energy', 'Sustainability'],
    headline: ['Smarter systems.', 'A sustainable', 'future.'],
    headlineScale: 1,
    support:
      'We help businesses improve efficiency, reduce waste, and grow through practical engineering and eco-friendly solutions.',
    primaryCta: { label: 'Explore our solutions', to: '/solutions' },
    secondaryCta: { label: 'About Terra', to: '/about' },
    caption: 'Engineering progress with purpose',
    tag: 'Powering progress with purpose',
  },
  {
    image: {
      src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2200&q=85',
      alt: 'Lush forest canopy',
    },
    video: {
      src: '/videos/14160939_1920_1080_60fps.mp4',
      poster:
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=85',
    },
    eyebrow: ['Clean energy', 'Efficient operations'],
    headline: ['Use less energy.', 'Achieve', 'more.'],
    headlineScale: 1,
    support:
      'From energy audits to clean energy, we help organisations lower operating costs and build more resilient operations.',
    primaryCta: { label: 'Explore our solutions', to: '/solutions' },
    secondaryCta: { label: 'Contact our team', to: '/contact' },
    caption: 'Efficiency, clean energy, and smarter buildings',
    tag: 'Smarter buildings, cleaner power',
  },
  {
    image: {
      src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=2200&q=85',
      alt: 'Sunlight filtering through a forest',
    },
    video: {
      src: 'https://www.pexels.com/download/video/33234773/',
      poster:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=85',
    },
    eyebrow: ['TRANSFORM', 'Karnataka'],
    headline: ['Growing opportunity.', 'Restoring', 'livelihoods.'],
    headlineScale: 0.82,
    support:
      'Through the TRANSFORM project, we support Karnataka’s coffee and spice producers with sustainable practices and stronger market connections.',
    primaryCta: { label: 'Discover TRANSFORM', to: '/agriculture' },
    secondaryCta: { label: 'See our impact', to: '/impact' },
    caption: 'Working with coffee and spice producers',
    tag: 'Rooted in Karnataka’s farms',
  },
];

const HEADLINE_SIZE = 'clamp(2.4rem, min(4.7vw, 8.5svh), 5rem)';

const riseClass = (isActive: boolean) =>
  `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
    isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
  }`;

const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
  transitionDelay: isActive ? `${delay}ms` : '0ms',
});

/* ------------------------------------------------------------------ */
/*  ARC GEOMETRY (pixel based, so nothing is ever stretched)           */
/*                                                                     */
/*  Anchor points, as fractions of the hero box:                       */
/*    top       (0.715, 0.00)                                          */
/*    leftmost  (0.564, 0.51)   <- the bulge of the ellipse            */
/*    bottom    (0.830, 1.00)                                          */
/* ------------------------------------------------------------------ */
function edgePath(w: number, h: number, off = 0) {
  const x0 = 0.715 * w - off * 0.9;
  const xm = 0.564 * w - off;
  const x2 = 0.83 * w - off * 1.6;
  return [
    `M ${x0} 0`,
    `C ${0.61 * w - off} ${0.06 * h}, ${xm} ${0.27 * h}, ${xm} ${0.51 * h}`,
    `C ${xm} ${0.72 * h}, ${0.68 * w - off} ${0.9 * h}, ${x2} ${h}`,
  ].join(' ');
}

function wavePath(w: number, h: number, i: number, n: number) {
  const t = i / (n - 1); // 0..1 across the bundle
  const y0 = (0.9 + t * 0.07) * h; // start spread at the left
  const yMid = (0.79 + t * 0.035) * h; // crest spread
  const endX = (0.8 + t * 0.07) * w; // all converge on the edge near the bottom
  return [
    `M ${0.04 * w} ${y0}`,
    `C ${0.28 * w} ${y0 + 0.03 * h}, ${0.4 * w} ${yMid - 0.01 * h}, ${0.58 * w} ${yMid}`,
    `C ${0.68 * w} ${yMid + 0.012 * h}, ${0.76 * w} ${0.93 * h}, ${endX} ${h}`,
  ].join(' ');
}

function useBox<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setSize({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
}

function ArcDefs({ w, h }: { w: number; h: number }) {
  const clip = `${edgePath(w, h)} L ${w} ${h} L ${w} 0 Z`;
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="hero-arc-clip" clipPathUnits="userSpaceOnUse">
          <path d={clip} />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArcGlow({ w, h }: { w: number; h: number }) {
  const waves = 9;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-visible"
    >
      <defs>
        <linearGradient
          id="arc-green"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2={h}
        >
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.25" />
          <stop offset="35%" stopColor={GREEN_SOFT} stopOpacity="1" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0.95" />
        </linearGradient>

        <linearGradient
          id="arc-blue"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2={h}
        >
          <stop offset="0%" stopColor="#2BA6C9" stopOpacity="0" />
          <stop offset="50%" stopColor="#2BA6C9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.35" />
        </linearGradient>

        <linearGradient
          id="arc-wave"
          gradientUnits="userSpaceOnUse"
          x1={0.04 * w}
          y1="0"
          x2={0.7 * w}
          y2="0"
        >
          <stop offset="0%" stopColor="#1E6FA8" stopOpacity="0" />
          <stop offset="50%" stopColor="#2BA6C9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.95" />
        </linearGradient>

        <filter id="arc-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="arc-blur-wide" x="-40%" y="-20%" width="180%" height="140%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>

      {/* soft teal haze outside the edge */}
      <path
        d={edgePath(w, h, 18)}
        fill="none"
        stroke="#1B8DA6"
        strokeWidth="60"
        opacity="0.3"
        filter="url(#arc-blur-wide)"
      />

      {/* outer echo lines */}
      <path
        d={edgePath(w, h, 0.03 * w)}
        fill="none"
        stroke="url(#arc-blue)"
        strokeWidth="1.3"
      />
      <path
        d={edgePath(w, h, 0.065 * w)}
        fill="none"
        stroke="url(#arc-blue)"
        strokeWidth="1"
        opacity="0.55"
      />

      {/* bottom wave bundle */}
      {Array.from({ length: waves }).map((_, i) => (
        <path
          key={i}
          d={wavePath(w, h, i, waves)}
          fill="none"
          stroke="url(#arc-wave)"
          strokeWidth="1"
          opacity={0.95 - i * 0.08}
        />
      ))}

      {/* glowing green edge */}
      <path
        d={edgePath(w, h)}
        fill="none"
        stroke={GREEN}
        strokeWidth="8"
        opacity="0.5"
        filter="url(#arc-blur)"
      />
      <path
        d={edgePath(w, h)}
        fill="none"
        stroke="url(#arc-green)"
        strokeWidth="3"
      />

      {/* moving shimmer */}
      <path
        d={edgePath(w, h)}
        pathLength="100"
        fill="none"
        stroke="#F2FFE3"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="6 94"
        filter="url(#arc-blur)"
        className="hero-shimmer"
      />
    </svg>
  );
}

function BlurredLeaves() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
      <div
        className="absolute -left-12 bottom-[12%] h-60 w-28 rotate-[38deg] opacity-80 blur-[3px]"
        style={{
          borderRadius: '0 100% 0 100%',
          backgroundImage:
            'linear-gradient(135deg, #78D14B 0%, #2C7A27 55%, #123D17 100%)',
        }}
      />
      <div
        className="absolute -left-8 bottom-[-4%] h-44 w-20 rotate-[72deg] opacity-70 blur-[5px]"
        style={{
          borderRadius: '0 100% 0 100%',
          backgroundImage: 'linear-gradient(135deg, #5FBF3C 0%, #1F5E21 100%)',
        }}
      />
    </div>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [readyVideos, setReadyVideos] = useState<Set<number>>(() => new Set());
  const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());

  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [boxRef, { w, h }] = useBox<HTMLDivElement>();
  const isDesktop = w >= DESKTOP_MIN && h > 0;

  const go = useCallback((direction: 1 | -1) => {
    setActive((index) => (index + direction + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active && isPlaying && !failedVideos.has(index)) {
        video.muted = true;
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [active, isPlaying, failedVideos]);

  useEffect(() => {
    if (!isPlaying) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, isPlaying, go]);

  const slide = SLIDES[active];

  const markVideoReady = (index: number) =>
    setReadyVideos((current) => new Set(current).add(index));
  const markVideoFailed = (index: number) =>
    setFailedVideos((current) => new Set(current).add(index));

  const clipStyle = useMemo<CSSProperties | undefined>(
    () => (isDesktop ? { clipPath: 'url(#hero-arc-clip)' } : undefined),
    [isDesktop]
  );

  return (
    <section
      className="relative w-full overflow-hidden bg-[#04101A] text-white selection:bg-[#7ED957]/30"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {/* background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_35%,#0A2636_0%,#06151F_45%,#04101A_100%)]" />
      <BlurredLeaves />

      {/* ---------- ARC MEDIA PANEL ---------- */}
      <div ref={boxRef} className="absolute inset-0 z-10">
        {isDesktop && <ArcDefs w={w} h={h} />}

        <div className="absolute inset-0 overflow-hidden" style={clipStyle}>
          <div className="absolute inset-0 lg:left-[54%]">
            {SLIDES.map((item, index) => {
              const isActive = index === active;
              const videoIsVisible =
                isActive && readyVideos.has(index) && !failedVideos.has(index);

              return (
                <div
                  key={item.image.src}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div
                    className={`absolute inset-0 transition-transform ease-out motion-reduce:transition-none ${
                      isActive
                        ? 'scale-[1.08] duration-[9000ms]'
                        : 'scale-100 duration-[1200ms]'
                    }`}
                  >
                    <img
                      src={item.image.src}
                      alt={isActive ? item.image.alt : ''}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      src={item.video.src}
                      poster={item.video.poster}
                      muted
                      loop
                      playsInline
                      preload={index === 0 ? 'auto' : 'metadata'}
                      autoPlay={isActive && isPlaying}
                      onCanPlay={() => markVideoReady(index)}
                      onError={() => markVideoFailed(index)}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        videoIsVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute inset-0 bg-[#04101A]/70 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#04101A]/40 via-transparent to-transparent lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#04101A]/55 to-transparent" />
        </div>

        {isDesktop && <ArcGlow w={w} h={h} />}
      </div>

      {/* floating tag chip */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <div className="shell relative h-full">
          <span
            key={`tag-${active}`}
            className="hero-chip-in absolute bottom-[19%] right-0 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#06151F]/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            style={{ animationDelay: '300ms' }}
          >
            <Leaf size={18} style={{ color: GREEN }} />
            {slide.tag}
          </span>
        </div>
      </div>

      {/* ---------- TEXT CONTENT ---------- */}
      <div className="shell relative z-30 flex min-h-[clamp(660px,86svh,860px)] items-center pb-28 pt-28 sm:pb-28 lg:pt-32">
        <div className="grid w-full max-w-2xl lg:max-w-[54%]">
          {SLIDES.map((item, index) => {
            const isActive = index === active;
            const Heading = index === 0 ? 'h1' : 'h2';

            return (
              <div
                key={item.caption}
                aria-hidden={!isActive}
                className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
                  isActive ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                <p
                  className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 sm:text-xs ${riseClass(
                    isActive
                  )}`}
                  style={riseStyle(isActive, 100)}
                >
                  <span
                    className="mr-2 h-[3px] w-12 rounded-full"
                    style={{ backgroundColor: GREEN }}
                  />
                  {item.eyebrow.map((label, i) => (
                    <span key={label} className="flex items-center gap-3">
                      {i > 0 && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: GREEN }}
                        />
                      )}
                      {label}
                    </span>
                  ))}
                </p>

                <Heading
                  className="font-heading font-bold leading-[1.03] tracking-[-0.03em]"
                  style={{
                    fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
                  }}
                >
                  {item.headline.map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-[0.06em]">
                      <span
                        className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
                          isActive ? 'translate-y-0' : 'translate-y-[110%]'
                        } ${i === 1 ? 'bg-clip-text text-transparent' : 'text-white'}`}
                        style={{
                          transitionDelay: isActive ? `${180 + i * 120}ms` : '0ms',
                          ...(i === 1
                            ? {
                                backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
                              }
                            : null),
                        }}
                      >
                        {line}
                      </span>
                    </span>
                  ))}
                </Heading>

                <p
                  className={`mt-6 max-w-[34rem] text-sm leading-relaxed text-white/75 sm:text-base lg:text-[1.05rem] ${riseClass(
                    isActive
                  )}`}
                  style={riseStyle(isActive, 500)}
                >
                  {item.support}
                </p>

                <div
                  className={`mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 ${riseClass(
                    isActive
                  )}`}
                  style={riseStyle(isActive, 620)}
                >
                  <Link
                    to={item.primaryCta.to}
                    tabIndex={isActive ? 0 : -1}
                    className="group inline-flex items-center gap-4 rounded-full px-7 py-3.5 font-heading text-sm font-semibold text-[#07110D] shadow-[0_10px_30px_rgba(126,217,87,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(126,217,87,0.4)]"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_SOFT} 100%)`,
                    }}
                  >
                    {item.primaryCta.label}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to={item.secondaryCta.to}
                    tabIndex={isActive ? 0 : -1}
                    className="border-b border-white/70 pb-1 font-heading text-sm font-medium text-white transition-colors hover:border-[#7ED957] hover:text-[#7ED957]"
                  >
                    {item.secondaryCta.label}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- CONTROLS ---------- */}
      <div className="absolute bottom-0 left-0 z-40 w-full px-5 pb-5 sm:px-10 sm:pb-6 lg:px-16 xl:px-24">
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full text-white transition-colors hover:text-[#07110D]"
            >
              <svg
                viewBox="0 0 48 48"
                className="absolute inset-0 h-full w-full -rotate-90"
                aria-hidden="true"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke={GREEN}
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                <circle
                  key={`ring-${active}`}
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke={GREEN}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={RING_LENGTH}
                  className="hero-ring"
                  style={{
                    animationDuration: `${AUTOPLAY_MS}ms`,
                    animationPlayState: isPlaying ? 'running' : 'paused',
                  }}
                />
              </svg>
              <span className="absolute inset-[4px] rounded-full bg-[#7ED957] opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">
                {isPlaying ? (
                  <Pause size={16} fill="currentColor" />
                ) : (
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                )}
              </span>
            </button>

            <span className="hidden h-6 w-px bg-white/25 sm:block" />
            <span
              key={`caption-${active}`}
              className="hero-chip-in truncate text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs"
            >
              {slide.caption}
            </span>
          </div>

          <div className="hidden items-center gap-6 sm:flex lg:absolute lg:left-[57%] lg:-translate-x-1/2">
            {SLIDES.map((item, index) => {
              const isCurrent = index === active;
              return (
                <button
                  key={item.caption}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}: ${item.caption}`}
                  aria-current={isCurrent ? 'true' : undefined}
                  className="group flex h-8 items-center"
                >
                  <span
                    className={`font-heading text-xs font-semibold transition-colors ${
                      isCurrent
                        ? 'text-white'
                        : 'text-white/45 group-hover:text-white/80'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`ml-3 h-[3px] rounded-full transition-all duration-500 ${
                      isCurrent
                        ? 'w-16 bg-[#7ED957] shadow-[0_0_12px_rgba(126,217,87,0.7)]'
                        : 'w-5 bg-white/30 group-hover:bg-white/60'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/60 text-white backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-[#06151F]/60 text-white backdrop-blur-sm transition-all hover:translate-x-0.5 hover:border-[#7ED957] hover:text-[#7ED957]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroChipIn {
          from { opacity: 0; transform: translateX(18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroRing {
          from { stroke-dashoffset: ${RING_LENGTH}; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes heroShimmer {
          from { stroke-dashoffset: 6; }
          to { stroke-dashoffset: -94; }
        }
        .hero-chip-in {
          opacity: 0;
          animation: heroChipIn 700ms cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-ring {
          stroke-dashoffset: ${RING_LENGTH};
          animation-name: heroRing;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        .hero-shimmer {
          animation: heroShimmer 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-chip-in { animation: none; opacity: 1; }
          .hero-shimmer { animation: none; }
          .hero-ring { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}