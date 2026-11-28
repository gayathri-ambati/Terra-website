
// import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
// import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { solutions } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { IMAGES, SolutionCard } from './SolutionCard';

// const EASE = [0.22, 1, 0.36, 1] as const;
// const N = solutions.length;

// /* Time each card stays in front before moving to the next (milliseconds). */
// const AUTOPLAY_MS = 4000;

// /* Shortest signed distance from the active card, wrapping around the ends. */
// const offsetOf = (i: number, active: number) => {
//   let d = i - active;
//   if (d > N / 2) d -= N;
//   if (d < -N / 2) d += N;
//   return d;
// };

// export function SolutionsList() {
//   const reduce = useReducedMotion();
//   const [active, setActive] = useState(0);
//   const [cardW, setCardW] = useState(380);

//   useEffect(() => {
//     const set = () => setCardW(Math.min(380, Math.round(window.innerWidth * 0.74)));
//     set();
//     window.addEventListener('resize', set);
//     return () => window.removeEventListener('resize', set);
//   }, []);

//   /* Autoplay: pauses on hover, focus, dragging, or when the tab is hidden. */
//   const [paused, setPaused] = useState(false);
//   const [tabHidden, setTabHidden] = useState(false);

//   useEffect(() => {
//     const onVis = () => setTabHidden(document.hidden);
//     document.addEventListener('visibilitychange', onVis);
//     return () => document.removeEventListener('visibilitychange', onVis);
//   }, []);

//   useEffect(() => {
//     if (reduce || paused || tabHidden) return;
//     // Depends on `active`, so any manual change restarts the countdown.
//     const timer = setTimeout(() => setActive((a) => (a + 1) % N), AUTOPLAY_MS);
//     return () => clearTimeout(timer);
//   }, [active, paused, tabHidden, reduce]);

//   const go = useCallback((i: number) => setActive(((i % N) + N) % N), []);
//   const prev = () => go(active - 1);
//   const next = () => go(active + 1);

//   const onKey = (e: KeyboardEvent) => {
//     if (e.key === 'ArrowLeft') prev();
//     if (e.key === 'ArrowRight') next();
//   };

//   const current = solutions[active];
//   const bg = IMAGES[current.code];

//   return (
//     <section
//       id="solutions"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onFocus={() => setPaused(true)}
//       onBlur={() => setPaused(false)}
//       className="relative overflow-hidden bg-ivory py-20 text-forest-900 md:py-28"
//     >
//       {/* Soft colour wash from the active image; light, so everything stays visible */}
//       <AnimatePresence>
//         {bg && (
//           <motion.img
//             key={current.code}
//             src={bg.src}
//             alt=""
//             aria-hidden
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.22 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.9 }}
//             className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover blur-3xl"
//           />
//         )}
//       </AnimatePresence>

//       <div className="shell relative">
//         {/* Heading */}
//         <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
//           <Reveal>
//             <span className="label-caps text-forest-600">What we do</span>
//           </Reveal>
//           <MaskedLines
//             className="mt-4 font-display text-3xl font-medium md:text-5xl"
//             lines={['Solutions engineered', 'for measurable impact']}
//           />
//           <Reveal delay={200}>
//             <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-forest-800/70">
//               Energy, automation, structures and digital tools, each one
//               audited, delivered and monitored so the savings are proven.
//             </p>
//           </Reveal>
//         </div>

//         {/* Coverflow stage */}
//         <div
//           role="region"
//           aria-roledescription="carousel"
//           aria-label="Our solutions"
//           tabIndex={0}
//           onKeyDown={onKey}
//           className="relative mx-auto h-[540px] outline-none [perspective:1800px] focus-visible:ring-2 focus-visible:ring-forest-600/40"
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.15}
//             onDragStart={() => setPaused(true)}
//             onDragEnd={(_, info) => {
//               if (info.offset.x < -60) next();
//               else if (info.offset.x > 60) prev();
//               setPaused(false);
//             }}
//             className="absolute inset-0 cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
//           >
//             {solutions.map((s, i) => {
//               const off = offsetOf(i, active);
//               const abs = Math.abs(off);
//               const visible = abs <= 2;
//               const isActive = off === 0;

//               return (
//                 <motion.div
//                   key={s.code}
//                   onClick={() => !isActive && go(i)}
//                   initial={false}
//                   animate={{
//                     x: off * cardW * 0.7,
//                     scale: 1 - abs * 0.1,
//                     rotateY: reduce ? 0 : -off * 32,
//                     opacity: visible ? 1 : 0,
//                   }}
//                   transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
//                   style={{
//                     width: cardW,
//                     zIndex: 10 - abs,
//                     left: '50%',
//                     marginLeft: -cardW / 2,
//                     pointerEvents: visible ? 'auto' : 'none',
//                   }}
//                   className={`absolute inset-y-0 ${isActive ? '' : 'cursor-pointer'}`}
//                   aria-hidden={!isActive}
//                 >
//                   <div className="relative h-full">
//                     <SolutionCard solution={s} index={i} total={N} />
//                     {/* Gentle white fade on side cards (no black) */}
//                     <div
//                       className="pointer-events-none absolute inset-0 rounded-3xl bg-white transition-opacity duration-700"
//                       style={{ opacity: isActive ? 0 : 0.15 + abs * 0.15 }}
//                     />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Controls */}
//         <div className="mt-8 flex items-center justify-center gap-3">
//           <button
//             type="button"
//             onClick={prev}
//             aria-label="Previous solution"
//             className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/20 bg-white transition hover:bg-forest-900 hover:text-ivory"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <div
//             aria-live="polite"
//             className="flex min-w-[200px] items-center gap-3 rounded-full border border-forest-900/15 bg-white py-1.5 pl-1.5 pr-5 shadow-sm"
//           >
//             <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-800 font-display text-xs text-ivory">
//               {current.code}
//             </span>
//             <span className="font-body text-sm">{current.title}</span>
//           </div>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next solution"
//             className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/20 bg-white transition hover:bg-forest-900 hover:text-ivory"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="mt-5 flex justify-center gap-2">
//           {solutions.map((s, i) => (
//             <button
//               key={s.code}
//               type="button"
//               onClick={() => go(i)}
//               aria-label={`Show ${s.title}`}
//               aria-current={i === active}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 i === active ? 'w-6 bg-forest-800' : 'w-1.5 bg-forest-900/25 hover:bg-forest-900/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
// import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { solutions } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { IMAGES, SolutionCard } from './SolutionCard';
// import { SolutionModal } from './SolutionModal';

// const EASE = [0.22, 1, 0.36, 1] as const;
// const N = solutions.length;
// const AUTOPLAY_MS = 4000;

// const offsetOf = (i: number, active: number) => {
//   let d = i - active;
//   if (d > N / 2) d -= N;
//   if (d < -N / 2) d += N;
//   return d;
// };

// export function SolutionsList() {
//   const reduce = useReducedMotion();
//   const [active, setActive] = useState(0);
//   const [cardW, setCardW] = useState(380);
//   const [selected, setSelected] = useState<number | null>(null);

//   const modalOpen = selected !== null;

//   useEffect(() => {
//     const set = () => setCardW(Math.min(380, Math.round(window.innerWidth * 0.74)));
//     set();
//     window.addEventListener('resize', set);
//     return () => window.removeEventListener('resize', set);
//   }, []);

//   const [paused, setPaused] = useState(false);
//   const [tabHidden, setTabHidden] = useState(false);

//   useEffect(() => {
//     const onVis = () => setTabHidden(document.hidden);
//     document.addEventListener('visibilitychange', onVis);
//     return () => document.removeEventListener('visibilitychange', onVis);
//   }, []);

//   useEffect(() => {
//     if (reduce || paused || tabHidden || modalOpen) return;
//     const timer = setTimeout(() => setActive((a) => (a + 1) % N), AUTOPLAY_MS);
//     return () => clearTimeout(timer);
//   }, [active, paused, tabHidden, reduce, modalOpen]);

//   const go = useCallback((i: number) => setActive(((i % N) + N) % N), []);
//   const prev = () => go(active - 1);
//   const next = () => go(active + 1);

//   const onKey = (e: KeyboardEvent) => {
//     if (e.key === 'ArrowLeft') {
//       e.preventDefault();
//       prev();
//     }
//     if (e.key === 'ArrowRight') {
//       e.preventDefault();
//       next();
//     }
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault();
//       setSelected(active);
//     }
//   };

//   const current = solutions[active];
//   const bg = IMAGES[current.code];

//   return (
//     <section
//       id="solutions"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onFocus={() => setPaused(true)}
//       onBlur={() => setPaused(false)}
//       className="relative overflow-hidden bg-ivory py-20 text-forest-900 md:py-28"
//     >
//       <AnimatePresence>
//         {bg && (
//           <motion.img
//             key={current.code}
//             src={bg.src}
//             alt=""
//             aria-hidden
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.22 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.9 }}
//             className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover blur-3xl"
//           />
//         )}
//       </AnimatePresence>

//       <div className="shell relative">
//         <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
//           <Reveal>
//             <span className="label-caps text-forest-600">What we do</span>
//           </Reveal>
//           <MaskedLines
//             className="mt-4 font-display text-3xl font-medium md:text-5xl"
//             lines={['Solutions engineered', 'for measurable impact']}
//           />
//           <Reveal delay={200}>
//             <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-forest-800/70">
//               Energy, automation, structures and digital tools, each one
//               audited, delivered and monitored so the savings are proven.
//             </p>
//           </Reveal>
//         </div>

//         <div
//           role="region"
//           aria-roledescription="carousel"
//           aria-label="Our solutions"
//           tabIndex={0}
//           onKeyDown={onKey}
//           className="relative mx-auto h-[540px] outline-none [perspective:1800px] focus-visible:ring-2 focus-visible:ring-forest-600/40"
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.15}
//             onDragStart={() => setPaused(true)}
//             onDragEnd={(_, info) => {
//               if (info.offset.x < -60) next();
//               else if (info.offset.x > 60) prev();
//               setPaused(false);
//             }}
//             className="absolute inset-0 cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
//           >
//             {solutions.map((s, i) => {
//               const off = offsetOf(i, active);
//               const abs = Math.abs(off);
//               const visible = abs <= 2;
//               const isActive = off === 0;

//               return (
//                 <motion.div
//                   key={s.code}
//                   onClick={() => (isActive ? setSelected(i) : go(i))}
//                   initial={false}
//                   animate={{
//                     x: off * cardW * 0.7,
//                     scale: 1 - abs * 0.1,
//                     rotateY: reduce ? 0 : -off * 32,
//                     opacity: visible ? 1 : 0,
//                   }}
//                   transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
//                   style={{
//                     width: cardW,
//                     zIndex: 10 - abs,
//                     left: '50%',
//                     marginLeft: -cardW / 2,
//                     pointerEvents: visible ? 'auto' : 'none',
//                   }}
//                   className="absolute inset-y-0 cursor-pointer"
//                   aria-hidden={!isActive}
//                 >
//                   <div className="relative h-full">
//                     <SolutionCard solution={s} index={i} total={N} />
//                     <div
//                       className="pointer-events-none absolute inset-0 rounded-3xl bg-white transition-opacity duration-700"
//                       style={{ opacity: isActive ? 0 : 0.15 + abs * 0.15 }}
//                     />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         <div className="mt-8 flex items-center justify-center gap-3">
//           <button
//             type="button"
//             onClick={prev}
//             aria-label="Previous solution"
//             className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/20 bg-white transition hover:bg-forest-900 hover:text-ivory"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <div
//             aria-live="polite"
//             className="flex min-w-[200px] items-center gap-3 rounded-full border border-forest-900/15 bg-white py-1.5 pl-1.5 pr-5 shadow-sm"
//           >
//             <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-800 font-display text-xs text-ivory">
//               {current.code}
//             </span>
//             <span className="font-body text-sm">{current.title}</span>
//           </div>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next solution"
//             className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/20 bg-white transition hover:bg-forest-900 hover:text-ivory"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         <div className="mt-5 flex justify-center gap-2">
//           {solutions.map((s, i) => (
//             <button
//               key={s.code}
//               type="button"
//               onClick={() => go(i)}
//               aria-label={`Show ${s.title}`}
//               aria-current={i === active}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 i === active
//                   ? 'w-6 bg-forest-800'
//                   : 'w-1.5 bg-forest-900/25 hover:bg-forest-900/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <SolutionModal
//         solution={selected !== null ? solutions[selected] : null}
//         onClose={() => setSelected(null)}
//       />
//     </section>
//   );
// }



// components/Solutions/SolutionsList.tsx
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { solutions, CODE_TO_INDEX } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { IMAGES, SolutionCard } from './SolutionCard';
import { SolutionModal } from './SolutionModal';

const EASE = [0.22, 1, 0.36, 1] as const;
const N = solutions.length;
const AUTOPLAY_MS = 4000;

const offsetOf = (i: number, active: number) => {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
};

export function SolutionsList() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(380);
  const [selected, setSelected] = useState<number | null>(null);

  const modalOpen = selected !== null;

  // Responsive card width
  useEffect(() => {
    const set = () =>
      setCardW(Math.min(380, Math.round(window.innerWidth * 0.74)));
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  // Autoplay pause controls
  const [paused, setPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    if (reduce || paused || tabHidden || modalOpen) return;
    const timer = setTimeout(
      () => setActive((a) => (a + 1) % N),
      AUTOPLAY_MS
    );
    return () => clearTimeout(timer);
  }, [active, paused, tabHidden, reduce, modalOpen]);

  // ---------------------------------------------------------------
  // 1) On mount — read `#solutions-<CODE>` from the URL hash
  // ---------------------------------------------------------------
  useEffect(() => {
    const hash = window.location.hash; // "#solutions-EE"
    const match = hash.match(/^#solutions-([A-Z]{2})$/);
    if (!match) return;
    const idx = CODE_TO_INDEX[match[1]];
    if (typeof idx === 'number') setActive(idx);
  }, []);

  // ---------------------------------------------------------------
  // 2) Listen for hero-slide clicks fired on the same page
  // ---------------------------------------------------------------
  useEffect(() => {
    const onSelect = (e: Event) => {
      const detail = (e as CustomEvent<{ code: string; open?: boolean }>)
        .detail;
      if (!detail?.code) return;

      const idx = CODE_TO_INDEX[detail.code];
      if (typeof idx !== 'number') return;

      setActive(idx);

      if (detail.open) setSelected(idx);

      // Pause autoplay so it doesn't immediately jump
      setPaused(true);
      const t = setTimeout(() => setPaused(false), 8000);
      return () => clearTimeout(t);
    };

    window.addEventListener('solutions:select', onSelect);
    return () =>
      window.removeEventListener('solutions:select', onSelect);
  }, []);

  // ---------------------------------------------------------------
  // 3) Navigation helpers
  // ---------------------------------------------------------------
  const go = useCallback(
    (i: number) => setActive(((i % N) + N) % N),
    []
  );
  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelected(active);
    }
  };

  const current = solutions[active];
  const bg = IMAGES[current.code];

  return (
    <section
      id="solutions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative overflow-hidden bg-ivory py-20 text-forest-900 md:py-28"
    >
      <AnimatePresence>
        {bg && (
          <motion.img
            key={current.code}
            src={bg.src}
            alt=""
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover blur-3xl"
          />
        )}
      </AnimatePresence>

      <div className="shell relative">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <Reveal>
            <span className="label-caps text-forest-600">What we do</span>
          </Reveal>
          <MaskedLines
            className="mt-4 font-display text-3xl font-medium md:text-5xl"
            lines={['Solutions engineered', 'for measurable impact']}
          />
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-forest-800/70">
              Energy, automation, structures and digital tools, each one
              audited, delivered and monitored so the savings are proven.
            </p>
          </Reveal>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Our solutions"
          tabIndex={0}
          onKeyDown={onKey}
          className="relative mx-auto h-[540px] outline-none [perspective:1800px] focus-visible:ring-2 focus-visible:ring-forest-600/40"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
              setPaused(false);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
          >
            {solutions.map((s, i) => {
              const off = offsetOf(i, active);
              const abs = Math.abs(off);
              const visible = abs <= 2;
              const isActive = off === 0;

              return (
                <motion.div
                  key={s.code}
                  onClick={() => (isActive ? setSelected(i) : go(i))}
                  initial={false}
                  animate={{
                    x: off * cardW * 0.7,
                    scale: 1 - abs * 0.1,
                    rotateY: reduce ? 0 : -off * 32,
                    opacity: visible ? 1 : 0,
                  }}
                  transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
                  style={{
                    width: cardW,
                    zIndex: 10 - abs,
                    left: '50%',
                    marginLeft: -cardW / 2,
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                  className="absolute inset-y-0 cursor-pointer"
                  aria-hidden={!isActive}
                >
                  <div className="relative h-full">
                    <SolutionCard solution={s} index={i} total={N} />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl bg-white transition-opacity duration-700"
                      style={{ opacity: isActive ? 0 : 0.15 + abs * 0.15 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous solution"
            className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/20 bg-white transition hover:bg-forest-900 hover:text-ivory"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            aria-live="polite"
            className="flex min-w-[200px] items-center gap-3 rounded-full border border-forest-900/15 bg-white py-1.5 pl-1.5 pr-5 shadow-sm"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-800 font-display text-xs text-ivory">
              {current.code}
            </span>
            <span className="font-body text-sm">{current.title}</span>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next solution"
            className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/20 bg-white transition hover:bg-forest-900 hover:text-ivory"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {solutions.map((s, i) => (
            <button
              key={s.code}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${s.title}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active
                  ? 'w-6 bg-forest-800'
                  : 'w-1.5 bg-forest-900/25 hover:bg-forest-900/50'
              }`}
            />
          ))}
        </div>
      </div>

      <SolutionModal
        solution={selected !== null ? solutions[selected] : null}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}