
// const values = [
//   {
//     number: "01",
//     title: "Sustainability",
//     text: "Making sustainability an integral part of every decision, design and solution.",
//   },
//   {
//     number: "02",
//     title: "Innovation",
//     text: "Embracing forward-thinking technologies to solve real-world challenges.",
//   },
//   {
//     number: "03",
//     title: "Collaboration",
//     text: "Building lasting partnerships that turn shared ambitions into impact.",
//   },
//   {
//     number: "04",
//     title: "Integrity",
//     text: "Creating value through transparency, responsibility and trust.",
//   },
// ];

// export function AboutValues() {
//   return (
//     <section className="bg-[#173b2b] py-20 text-white md:py-28">
//       <div className="mx-auto max-w-7xl px-5 md:px-10">
//         <div className="mb-16 max-w-3xl">
//           <p className="mb-4 text-sm uppercase tracking-[0.25em] text-green-300">
//             What Guides Us
//           </p>

//           <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
//             Our values shape everything we do.
//           </h2>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {values.map((value) => (
//             <div
//               key={value.number}
//               className="border-t border-white/25 pt-8"
//             >
//               <span className="text-sm text-green-300">
//                 {value.number}
//               </span>

//               <h3 className="mb-5 mt-8 text-2xl font-medium">
//                 {value.title}
//               </h3>

//               <p className="leading-8 text-white/65">
//                 {value.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { Leaf, Lightbulb, Handshake, ShieldCheck, Award } from "lucide-react";

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
  return (
    <section className="bg-gradient-to-b from-white to-gray-200 py-20 md:py-28">
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
          className="relative mx-auto hidden w-full max-w-[1200px] lg:block"
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
                    d={`M ${startX} ${LINE_Y} H ${cx - ARC_R} A ${ARC_R} ${ARC_R} 0 0 ${sweep} ${cx} ${arcEndY} V ${dotY}`}
                    fill="none"
                    stroke={value.color}
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx={cx} cy={dotY} r={DOT_R} fill={value.color} />
                </g>
              );
            })}

            {/* icon circles */}
            {values.map((value, i) => {
              const cx = FIRST_X + i * GAP;
              const Icon = value.icon;

              return (
                <g key={`node-${value.number}`}>
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

          {/* text overlay (same coordinate space as the SVG) */}
          {values.map((value, i) => {
            const cx = FIRST_X + i * GAP;
            const isUp = i % 2 === 0;
            const dotY = isUp ? LINE_Y - STEM : LINE_Y + STEM;

            return (
              <div key={`text-${value.number}`}>
                {/* number (where the year sits in the image) */}
                <span
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-[2.1cqw] font-bold italic text-gray-700"
                  style={{
                    left: pct(cx, W),
                    top: pct(isUp ? LINE_Y + 93 : LINE_Y - 86, H),
                  }}
                >
                  {value.number}
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
            );
          })}
        </div>

        {/* ================= Mobile / tablet fallback ================= */}
        <div className="relative space-y-10 lg:hidden">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div key={value.number} className="flex items-start gap-5">
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