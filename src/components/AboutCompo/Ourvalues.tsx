
// import { Leaf, Lightbulb, Handshake, ShieldCheck, Award } from "lucide-react";

// const values = [
//   {
//     number: "01",
//     title: "Sustainability",
//     text: "Making sustainability an integral part of every decision, design and solution.",
//     icon: Leaf,
//     color: "#a3b223",
//   },
//   {
//     number: "02",
//     title: "Innovation",
//     text: "Embracing forward-thinking technologies to solve real-world challenges.",
//     icon: Lightbulb,
//     color: "#3b9fbf",
//   },
//   {
//     number: "03",
//     title: "Collaboration",
//     text: "Building lasting partnerships that turn shared ambitions into impact.",
//     icon: Handshake,
//     color: "#8a6bb0",
//   },
//   {
//     number: "04",
//     title: "Integrity",
//     text: "Creating value through transparency, responsibility and trust.",
//     icon: ShieldCheck,
//     color: "#4c9a2f",
//   },
//   {
//     number: "05",
//     title: "Excellence",
//     text: "Delivering the highest standards in everything we build, from first idea to final detail.",
//     icon: Award,
//     color: "#d64545",
//   },
// ];

// /* ---- geometry (viewBox units, 1200 x 675 like the reference image) ---- */
// const W = 1200;
// const H = 675;
// const LINE_Y = 375; // main horizontal line
// const FIRST_X = 215; // first node center
// const GAP = 218; // distance between nodes
// const CIRCLE_R = 52;
// const ARC_R = 64; // radius of the curved connector
// const STEM = 140; // line -> dot distance
// const DOT_R = 11;
// const STROKE = 7;
// const LINE_START = 40;

// const pct = (n: number, total: number) => `${(n / total) * 100}%`;

// export function AboutValues() {
//   return (
//     <section className="bg-gradient-to-b from-white to-gray-200 py-20 md:py-28">
//       <div className="mx-auto max-w-7xl px-5 md:px-10">
//         <div className="mb-10 max-w-3xl lg:mb-6">
//           <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#173b2b]">
//             What Guides Us
//           </p>

//           <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-6xl">
//             Our values shape everything we do.
//           </h2>
//         </div>

//         {/* ================= Desktop timeline ================= */}
//         <div
//           className="relative mx-auto hidden w-full max-w-[1200px] lg:block"
//           style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size" }}
//         >
//           <svg
//             viewBox={`0 0 ${W} ${H}`}
//             className="absolute inset-0 h-full w-full overflow-visible"
//             aria-hidden="true"
//           >
//             <defs>
//               <filter
//                 id="circleShadow"
//                 x="-50%"
//                 y="-50%"
//                 width="200%"
//                 height="200%"
//               >
//                 <feDropShadow
//                   dx="0"
//                   dy="6"
//                   stdDeviation="7"
//                   floodColor="#000"
//                   floodOpacity="0.2"
//                 />
//               </filter>
//               <radialGradient id="innerRing" cx="50%" cy="40%" r="60%">
//                 <stop offset="0%" stopColor="#ffffff" />
//                 <stop offset="100%" stopColor="#ececec" />
//               </radialGradient>
//             </defs>

//             {/* connectors (drawn first, so circles sit on top) */}
//             {values.map((value, i) => {
//               const cx = FIRST_X + i * GAP;
//               const isUp = i % 2 === 0;
//               const startX = i === 0 ? LINE_START : cx - GAP;
//               const dotY = isUp ? LINE_Y - STEM : LINE_Y + STEM;
//               const arcEndY = isUp ? LINE_Y - ARC_R : LINE_Y + ARC_R;
//               const sweep = isUp ? 0 : 1;

//               return (
//                 <g key={value.number}>
//                   <path
//                     d={`M ${startX} ${LINE_Y} H ${cx - ARC_R} A ${ARC_R} ${ARC_R} 0 0 ${sweep} ${cx} ${arcEndY} V ${dotY}`}
//                     fill="none"
//                     stroke={value.color}
//                     strokeWidth={STROKE}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <circle cx={cx} cy={dotY} r={DOT_R} fill={value.color} />
//                 </g>
//               );
//             })}

//             {/* icon circles */}
//             {values.map((value, i) => {
//               const cx = FIRST_X + i * GAP;
//               const Icon = value.icon;

//               return (
//                 <g key={`node-${value.number}`}>
//                   <circle
//                     cx={cx}
//                     cy={LINE_Y}
//                     r={CIRCLE_R}
//                     fill="#fff"
//                     filter="url(#circleShadow)"
//                   />
//                   <circle
//                     cx={cx}
//                     cy={LINE_Y}
//                     r={CIRCLE_R - 12}
//                     fill="url(#innerRing)"
//                   />
//                   <g transform={`translate(${cx - 20}, ${LINE_Y - 20})`}>
//                     <Icon
//                       size={40}
//                       strokeWidth={2}
//                       color={value.color}
//                       fill={value.color}
//                       fillOpacity={0.18}
//                     />
//                   </g>
//                 </g>
//               );
//             })}
//           </svg>

//           {/* text overlay (same coordinate space as the SVG) */}
//           {values.map((value, i) => {
//             const cx = FIRST_X + i * GAP;
//             const isUp = i % 2 === 0;
//             const dotY = isUp ? LINE_Y - STEM : LINE_Y + STEM;

//             return (
//               <div key={`text-${value.number}`}>
//                 {/* number (where the year sits in the image) */}
//                 <span
//                   className="absolute -translate-x-1/2 -translate-y-1/2 text-[2.1cqw] font-bold italic text-gray-700"
//                   style={{
//                     left: pct(cx, W),
//                     top: pct(isUp ? LINE_Y + 93 : LINE_Y - 86, H),
//                   }}
//                 >
//                   {value.number}
//                 </span>

//                 {/* title + text, anchored to the dot */}
//                 <div
//                   className="absolute w-[18cqw] -translate-x-1/2 text-center"
//                   style={
//                     isUp
//                       ? {
//                           left: pct(cx, W),
//                           bottom: pct(H - (dotY - DOT_R - 10), H),
//                         }
//                       : {
//                           left: pct(cx, W),
//                           top: pct(dotY + DOT_R + 12, H),
//                         }
//                   }
//                 >
//                   <h3
//                     className="mb-1 text-[1.5cqw] font-bold leading-tight"
//                     style={{ color: value.color }}
//                   >
//                     {value.title}
//                   </h3>
//                   <p className="text-[1.15cqw] leading-[1.6] text-gray-600">
//                     {value.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ================= Mobile / tablet fallback ================= */}
//         <div className="relative space-y-10 lg:hidden">
//           {values.map((value) => {
//             const Icon = value.icon;

//             return (
//               <div key={value.number} className="flex items-start gap-5">
//                 <div
//                   className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
//                   style={{ border: `4px solid ${value.color}` }}
//                 >
//                   <Icon size={30} style={{ color: value.color }} />
//                 </div>

//                 <div>
//                   <span className="text-xl font-bold italic text-gray-700">
//                     {value.number}
//                   </span>
//                   <h3
//                     className="mb-1 text-xl font-bold"
//                     style={{ color: value.color }}
//                   >
//                     {value.title}
//                   </h3>
//                   <p className="leading-7 text-gray-600">{value.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useLayoutEffect, useRef } from "react";
import { Leaf, Lightbulb, Handshake, ShieldCheck, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Sustainability",
    text: "Making sustainability an integral part of every decision, design and solution.",
    icon: Leaf,
    color: "#a3b223",
  },
  {
    number: "02",
    title: "Innovation",
    text: "Embracing forward-thinking technologies to solve real-world challenges.",
    icon: Lightbulb,
    color: "#3b9fbf",
  },
  {
    number: "03",
    title: "Collaboration",
    text: "Building lasting partnerships that turn shared ambitions into impact.",
    icon: Handshake,
    color: "#8a6bb0",
  },
  {
    number: "04",
    title: "Integrity",
    text: "Creating value through transparency, responsibility and trust.",
    icon: ShieldCheck,
    color: "#4c9a2f",
  },
  {
    number: "05",
    title: "Excellence",
    text: "Delivering the highest standards in everything we build, from first idea to final detail.",
    icon: Award,
    color: "#d64545",
  },
];

/* ---- geometry (viewBox units, 1200 x 675 like the reference image) ---- */
const W = 1200;
const H = 675;
const LINE_Y = 375; // main horizontal line
const FIRST_X = 215; // first node center
const GAP = 218; // distance between nodes
const CIRCLE_R = 52;
const ARC_R = 64; // radius of the curved connector
const STEM = 140; // line -> dot distance
const DOT_R = 11;
const STROKE = 7;
const LINE_START = 40;

const pct = (n: number, total: number) => `${(n / total) * 100}%`;

export function AboutValues() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ---------- Desktop timeline: replays every time you scroll to it ---------- */
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const q = gsap.utils.selector(rootRef.current as HTMLElement);

          // initial hidden state (set before paint thanks to useLayoutEffect)
          gsap.set(q(".v-path"), {
            strokeDasharray: 1,
            strokeDashoffset: 1,
            autoAlpha: 0,
          });
          gsap.set(q(".v-node"), {
            scale: 0,
            autoAlpha: 0,
            svgOrigin: (_i: number, el: Element) =>
              (el as SVGElement).dataset.origin ?? "0 0",
          });
          gsap.set(q(".v-dot"), {
            scale: 0,
            autoAlpha: 0,
            svgOrigin: (_i: number, el: Element) =>
              (el as SVGElement).dataset.origin ?? "0 0",
          });
          gsap.set(q(".v-text"), {
            autoAlpha: 0,
            y: (_i: number, el: Element) =>
              (el as HTMLElement).dataset.dir === "up" ? 18 : -18,
          });
          gsap.set(q(".v-num"), { autoAlpha: 0, scale: 0.6 });

          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: q(".v-timeline")[0],
              start: "top 70%",
              end: "bottom 20%",
              // onEnter, onLeave, onEnterBack, onLeaveBack
              toggleActions: "restart reset restart reset",
            },
          });

          values.forEach((_, i) => {
            const at = i * 0.65;

            // 1. line draws from the previous node into this one
            tl.fromTo(
              q(".v-path")[i],
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.01 },
              at
            )
              .to(
                q(".v-path")[i],
                { strokeDashoffset: 0, duration: 0.7, ease: "power1.inOut" },
                at
              )
              // 2. icon circle pops in as the line arrives
              .to(
                q(".v-node")[i],
                {
                  scale: 1,
                  autoAlpha: 1,
                  duration: 0.55,
                  ease: "back.out(1.8)",
                },
                at + 0.45
              )
              // 3. dot at the end of the stem
              .to(
                q(".v-dot")[i],
                {
                  scale: 1,
                  autoAlpha: 1,
                  duration: 0.4,
                  ease: "back.out(2.5)",
                },
                at + 0.6
              )
              // 4. title + text rise in
              .to(
                q(".v-text")[i],
                { autoAlpha: 1, y: 0, duration: 0.6 },
                at + 0.7
              )
              .to(
                q(".v-num")[i],
                { autoAlpha: 1, scale: 1, duration: 0.5 },
                at + 0.8
              );
          });
        }
      );

      /* ---------- Mobile / tablet: rows replay as they scroll in ---------- */
      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.from(".v-row", {
            autoAlpha: 0,
            y: 28,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: ".v-mobile",
              start: "top 80%",
              end: "bottom 10%",
              toggleActions: "restart reset restart reset",
            },
          });
        }
      );
    }, rootRef);

    return () => ctx.revert(); // kills tweens + ScrollTriggers, restores inline styles
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-gradient-to-b from-white to-gray-200 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 max-w-3xl lg:mb-6">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#173b2b]">
            What Guides Us
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-6xl">
            Our values shape everything we do.
          </h2>
        </div>

        {/* ================= Desktop timeline ================= */}
        <div
          className="v-timeline relative mx-auto hidden w-full max-w-[1200px] lg:block"
          style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size" }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="circleShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="7"
                  floodColor="#000"
                  floodOpacity="0.2"
                />
              </filter>
              <radialGradient id="innerRing" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ececec" />
              </radialGradient>
            </defs>

            {/* connectors (drawn first, so circles sit on top) */}
            {values.map((value, i) => {
              const cx = FIRST_X + i * GAP;
              const isUp = i % 2 === 0;
              const startX = i === 0 ? LINE_START : cx - GAP;
              const dotY = isUp ? LINE_Y - STEM : LINE_Y + STEM;
              const arcEndY = isUp ? LINE_Y - ARC_R : LINE_Y + ARC_R;
              const sweep = isUp ? 0 : 1;

              return (
                <g key={value.number}>
                  <path
                    className="v-path"
                    pathLength={1}
                    d={`M ${startX} ${LINE_Y} H ${cx - ARC_R} A ${ARC_R} ${ARC_R} 0 0 ${sweep} ${cx} ${arcEndY} V ${dotY}`}
                    fill="none"
                    stroke={value.color}
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    className="v-dot"
                    data-origin={`${cx} ${dotY}`}
                    cx={cx}
                    cy={dotY}
                    r={DOT_R}
                    fill={value.color}
                  />
                </g>
              );
            })}

            {/* icon circles */}
            {values.map((value, i) => {
              const cx = FIRST_X + i * GAP;
              const Icon = value.icon;

              return (
                <g
                  key={`node-${value.number}`}
                  className="v-node"
                  data-origin={`${cx} ${LINE_Y}`}
                >
                  <circle
                    cx={cx}
                    cy={LINE_Y}
                    r={CIRCLE_R}
                    fill="#fff"
                    filter="url(#circleShadow)"
                  />
                  <circle
                    cx={cx}
                    cy={LINE_Y}
                    r={CIRCLE_R - 12}
                    fill="url(#innerRing)"
                  />
                  <g transform={`translate(${cx - 20}, ${LINE_Y - 20})`}>
                    <Icon
                      size={40}
                      strokeWidth={2}
                      color={value.color}
                      fill={value.color}
                      fillOpacity={0.18}
                    />
                  </g>
                </g>
              );
            })}
          </svg>

          {/* text overlay (same coordinate space as the SVG).
              Outer elements keep the positioning/translate classes;
              inner elements are the ones GSAP animates, so transforms don't clash. */}
          {values.map((value, i) => {
            const cx = FIRST_X + i * GAP;
            const isUp = i % 2 === 0;
            const dotY = isUp ? LINE_Y - STEM : LINE_Y + STEM;

            return (
              <div key={`text-${value.number}`}>
                {/* number */}
                <span
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-[2.1cqw] font-bold italic text-gray-700"
                  style={{
                    left: pct(cx, W),
                    top: pct(isUp ? LINE_Y + 93 : LINE_Y - 86, H),
                  }}
                >
                  <span className="v-num inline-block">{value.number}</span>
                </span>

                {/* title + text, anchored to the dot */}
                <div
                  className="absolute w-[18cqw] -translate-x-1/2 text-center"
                  style={
                    isUp
                      ? {
                          left: pct(cx, W),
                          bottom: pct(H - (dotY - DOT_R - 10), H),
                        }
                      : {
                          left: pct(cx, W),
                          top: pct(dotY + DOT_R + 12, H),
                        }
                  }
                >
                  <div className="v-text" data-dir={isUp ? "up" : "down"}>
                    <h3
                      className="mb-1 text-[1.5cqw] font-bold leading-tight"
                      style={{ color: value.color }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-[1.15cqw] leading-[1.6] text-gray-600">
                      {value.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= Mobile / tablet fallback ================= */}
        <div className="v-mobile relative space-y-10 lg:hidden">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div key={value.number} className="v-row flex items-start gap-5">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                  style={{ border: `4px solid ${value.color}` }}
                >
                  <Icon size={30} style={{ color: value.color }} />
                </div>

                <div>
                  <span className="text-xl font-bold italic text-gray-700">
                    {value.number}
                  </span>
                  <h3
                    className="mb-1 text-xl font-bold"
                    style={{ color: value.color }}
                  >
                    {value.title}
                  </h3>
                  <p className="leading-7 text-gray-600">{value.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}