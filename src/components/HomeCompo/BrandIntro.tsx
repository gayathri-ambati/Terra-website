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



import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  MoveUpRight,
  Sprout,
  Sun,
  Wind,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { company } from '@/lib/content';

gsap.registerPlugin(ScrollTrigger);

export function BrandIntro() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: '(min-width: 1024px)',
          mobile: '(max-width: 1023px)',
          reducedMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, reducedMotion } = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reducedMotion: boolean;
          };

          if (reducedMotion) return;

          // Opening typography
          gsap.from('.intro-word', {
            yPercent: 120,
            rotate: 5,
            opacity: 0,
            duration: 1.35,
            stagger: 0.13,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: '.intro-heading',
              start: 'top 85%',
            },
          });

          gsap.from('.intro-meta', {
            y: 25,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.intro-heading',
              start: 'top 85%',
            },
          });

          // Main pinned cinematic sequence
          const story = section.querySelector('.story-stage');
          const visual = section.querySelector('.story-visual');
          const image = section.querySelector('.story-image');
          const overlay = section.querySelector('.story-overlay');
          const storyTitle = section.querySelector('.story-title');
          const storyCopy = section.querySelector('.story-copy');
          const storyIndex = section.querySelector('.story-index');

          if (story && visual && image && desktop) {
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: story,
                start: 'top top',
                end: '+=230%',
                pin: visual,
                scrub: 1.2,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            timeline
              .fromTo(
                image,
                { scale: 1.25, xPercent: -3 },
                { scale: 1, xPercent: 0, ease: 'none', duration: 2 },
                0
              )
              .fromTo(
                '.story-orbit',
                { rotation: -25, scale: 0.65, opacity: 0 },
                {
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                  ease: 'none',
                  duration: 1.5,
                },
                0.3
              )
              .fromTo(
                storyTitle,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, ease: 'power2.out', duration: 1 },
                0.5
              )
              .fromTo(
                storyCopy,
                { y: 45, opacity: 0 },
                { y: 0, opacity: 1, ease: 'power2.out', duration: 1 },
                1
              )
              .to(
                image,
                { scale: 1.12, yPercent: -5, ease: 'none', duration: 2 },
                2
              )
              .to(
                overlay,
                { opacity: 0.9, ease: 'none', duration: 2 },
                2
              )
              .to(
                storyTitle,
                { y: -70, opacity: 0.15, ease: 'none', duration: 1 },
                2
              )
              .to(
                storyIndex,
                { textContent: '02', duration: 0.5 },
                2
              );
          } else {
            // Mobile: keep the story natural and avoid pinning
            gsap.from('.story-visual', {
              scale: 0.94,
              opacity: 0,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.story-visual',
                start: 'top 85%',
              },
            });

            gsap.from('.story-title, .story-copy', {
              y: 35,
              opacity: 0,
              duration: 0.9,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.story-content',
                start: 'top 80%',
              },
            });
          }

          // Image parallax for mobile
          if (!desktop) {
            gsap.fromTo(
              '.story-image',
              { yPercent: -4, scale: 1.08 },
              {
                yPercent: 4,
                scale: 1.08,
                ease: 'none',
                scrollTrigger: {
                  trigger: '.story-visual',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                },
              }
            );
          }

          // Organic decorative elements
          gsap.to('.floating-leaf', {
            y: -22,
            rotation: 12,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: 0.7,
          });

          // Philosophy horizontal marquee
          gsap.to('.philosophy-track', {
            xPercent: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: '.philosophy-marquee',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Closing typography
          gsap.from('.closing-line', {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: '.closing-section',
              start: 'top 75%',
            },
          });

          // Metric reveal
          gsap.from('.metric-item', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.metrics-area',
              start: 'top 80%',
            },
          });

          return () => mm.revert();
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-ivory text-forest-800"
    >
      {/* ==========================================
          01 — EDITORIAL OPENING
      ========================================== */}

      <div className="relative z-10 px-5 pb-16 pt-28 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pt-44">
        <div className="mx-auto max-w-[1600px]">

          <div className="intro-meta mb-12 flex items-center justify-between border-b border-forest-800/15 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-forest-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-forest-600">
                Terra Ecopreneurs
              </span>
            </div>

            <span className="hidden font-mono text-[10px] tracking-widest text-forest-700/50 sm:block">
              OUR WORLD / 001
            </span>
          </div>

          <div className="intro-heading relative">
            <div className="overflow-hidden">
              <h2 className="intro-word font-display text-[clamp(4rem,13vw,13rem)] font-medium leading-[0.82] tracking-[-0.085em]">
                We don't
              </h2>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-[0.18em] overflow-hidden">
              <h2 className="intro-word font-display text-[clamp(4rem,13vw,13rem)] font-medium leading-[0.92] tracking-[-0.085em]">
                just
              </h2>

              <h2 className="intro-word font-display text-[clamp(4rem,13vw,13rem)] italic leading-[0.92] tracking-[-0.085em] text-forest-600">
                imagine.
              </h2>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <p className="intro-meta max-w-xl text-base leading-8 text-charcoal/70 sm:text-lg">
                We are a team of innovators, problem-solvers and partners
                dedicated to creating a more sustainable future through
                practical engineering and nature-led thinking.
              </p>

              <div className="intro-meta flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/25">
                  <ArrowDown size={17} />
                </span>
                <span className="max-w-[120px] text-[10px] font-semibold uppercase leading-5 tracking-[0.17em] text-forest-700">
                  Scroll to experience our philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          02 — PINNED CINEMATIC STORY
      ========================================== */}

      <div className="story-stage relative lg:min-h-[330vh]">
        <div className="story-visual relative h-[75vh] min-h-[540px] overflow-hidden sm:h-[85vh] lg:h-screen lg:min-h-[700px]">

          <img
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=90"
            alt="Sunlight spreading across a natural green landscape"
            className="story-image absolute inset-0 h-full w-full object-cover"
          />

          <div className="story-overlay absolute inset-0 bg-[#10271D]/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/75 via-transparent to-[#10271D]/10" />

          {/* Decorative giant typography */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center">
            <span className="story-orbit inline-block font-display text-[clamp(6rem,19vw,20rem)] font-medium leading-none tracking-[-0.09em] text-white/[0.13]">
              NATURE
            </span>
          </div>

          {/* Floating leaf icon */}
          <div className="floating-leaf absolute right-[12%] top-[15%] hidden text-[#D5E3C4]/70 sm:block">
            <Leaf size={65} strokeWidth={0.7} />
          </div>

          <div className="floating-leaf absolute bottom-[20%] left-[12%] hidden text-[#D5E3C4]/50 sm:block">
            <Sprout size={50} strokeWidth={0.7} />
          </div>

          {/* Main story content */}
          <div className="story-content absolute inset-0 flex flex-col justify-end px-7 pb-12 sm:px-14 sm:pb-16 lg:px-20 lg:pb-20">

            <div className="mb-7 flex items-center gap-3 text-[#D5E3C4]">
              <span className="h-px w-10 bg-[#D5E3C4]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                The Terra approach
              </span>
            </div>

            <h3 className="story-title max-w-5xl font-display text-[clamp(3rem,8vw,9rem)] leading-[0.91] tracking-[-0.065em] text-white">
              The future
              <br />
              is something
              <br />
              <span className="italic text-[#D5E3C4]">
                we cultivate.
              </span>
            </h3>

            <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/30 pt-6 sm:flex-row sm:items-end">
              <p className="story-copy max-w-md text-sm leading-7 text-white/75 sm:text-base">
                By bringing together technology, engineering and
                environmental responsibility, we help create solutions
                that make a lasting difference.
              </p>

              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-white/75">
                <span className="story-index">01</span>
                <span className="h-px w-12 bg-white/40" />
                <span>02</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          03 — PHILOSOPHY MARQUEE
      ========================================== */}

      <div className="philosophy-marquee relative overflow-hidden border-y border-forest-800/15 py-9 sm:py-14">
        <div className="philosophy-track flex w-max items-center gap-10 whitespace-nowrap">
          {[0, 1].map((item) => (
            <div key={item} className="flex items-center gap-10">
              <span className="font-display text-[clamp(3rem,7vw,7rem)] tracking-[-0.06em] text-forest-800">
                Nature inspires
              </span>

              <Leaf className="text-forest-600" size={38} strokeWidth={1} />

              <span className="font-display text-[clamp(3rem,7vw,7rem)] italic tracking-[-0.06em] text-forest-600">
                Engineering transforms
              </span>

              <Sprout className="text-forest-600" size={38} strokeWidth={1} />

              <span className="font-display text-[clamp(3rem,7vw,7rem)] tracking-[-0.06em] text-forest-800">
                Impact matters
              </span>

              <Sun className="text-forest-600" size={38} strokeWidth={1} />
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          04 — BRAND PHILOSOPHY
      ========================================== */}

      <div className="relative px-5 py-24 sm:px-10 sm:py-36 lg:px-16 lg:py-48">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12 lg:gap-10">

          <div className="relative lg:col-span-8">
            <div className="absolute -left-5 -top-24 select-none font-display text-[clamp(15rem,30vw,30rem)] leading-none tracking-tighter text-forest-800/[0.035]">
              01
            </div>

            <div className="relative z-10">
              <p className="mb-9 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
                <Wind size={15} />
                What drives us
              </p>

              <h3 className="max-w-5xl font-display text-[clamp(3.3rem,8vw,8.5rem)] leading-[0.91] tracking-[-0.07em]">
                Progress
                <br />
                should work
                <br />
                <span className="italic text-forest-600">
                  with nature.
                </span>
              </h3>

              <p className="mt-12 max-w-xl text-base leading-8 text-charcoal/70 sm:text-lg">
                {company.intro}
              </p>

              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-4 text-sm font-bold text-forest-800"
              >
                Discover our story

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-forest-800 group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* Floating editorial visual */}
          <div className="relative flex items-center justify-center lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-t-full bg-forest-800">

              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=90"
                alt="Sunlight filtering through a green forest"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10271D]/65 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D5E3C4]">
                  Our philosophy
                </p>
                <p className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                  Rooted in nature.
                  <br />
                  Driven by purpose.
                </p>
              </div>
            </div>

            <div className="absolute -left-5 top-16 flex h-20 w-20 items-center justify-center rounded-full border border-forest-800/20 bg-ivory shadow-xl sm:-left-10 sm:h-28 sm:w-28">
              <Sprout size={34} className="text-forest-600" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          05 — IMPACT METRICS
      ========================================== */}

      <div className="metrics-area border-y border-forest-800/15">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 px-5 sm:px-10 lg:grid-cols-4 lg:px-16">

          {[
            { number: '10+', label: 'Years of engineering' },
            { number: '03', label: 'Connected verticals' },
            { number: '01', label: 'Shared purpose' },
            { number: '∞', label: 'Possibilities ahead' },
          ].map((metric, index) => (
            <div
              key={metric.label}
              className={`metric-item py-12 sm:py-16 ${
                index % 2 === 0 ? 'pr-5' : 'border-l border-forest-800/15 pl-5'
              } ${
                index > 1 ? 'border-t border-forest-800/15 lg:border-t-0' : ''
              } ${
                index === 2 ? 'lg:border-l lg:pl-10' : ''
              } ${
                index === 3 ? 'lg:border-l lg:pl-10' : ''
              } lg:px-10`}
            >
              <p className="font-display text-6xl tracking-[-0.07em] text-forest-800 sm:text-8xl">
                {metric.number}
              </p>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-forest-700/65 sm:text-xs">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          06 — FINAL BRAND STATEMENT
      ========================================== */}

      <div className="closing-section relative overflow-hidden px-5 py-28 sm:px-10 sm:py-40 lg:px-16 lg:py-52">

        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-sage-400/15 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[1600px]">

          <p className="closing-line mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-forest-600">
            The journey continues
          </p>

          <div className="overflow-hidden">
            <h3 className="closing-line font-display text-[clamp(3.8rem,11vw,12rem)] leading-[0.85] tracking-[-0.085em]">
              Let's grow
            </h3>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-5 overflow-hidden">
            <h3 className="closing-line font-display text-[clamp(3.8rem,11vw,12rem)] leading-[0.9] tracking-[-0.085em]">
              something
            </h3>

            <h3 className="closing-line font-display text-[clamp(3.8rem,11vw,12rem)] italic leading-[0.9] tracking-[-0.085em] text-forest-600">
              meaningful.
            </h3>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-forest-800/20 pt-8 sm:flex-row sm:items-center">

            <p className="max-w-md text-sm leading-7 text-charcoal/65 sm:text-base">
              A better future is built through thoughtful ideas,
              purposeful innovation and meaningful partnerships.
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-5 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-forest-600"
            >
              Get to know Terra
              <MoveUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
