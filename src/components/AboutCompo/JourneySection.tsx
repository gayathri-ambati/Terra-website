// import { milestones } from '@/lib/content';
// import { MaskedLines } from '@/components/Reveal';
// import { MilestoneItem } from '../AboutCompo/MilestoneItem';

// export function JourneySection() {
//   return (
//     <section className="bg-ivory py-24 md:py-36">
//       <div className="shell">
//         <MaskedLines lines={['The journey']} className="headline-lg text-forest-800" />
//         <div className="relative mt-20">
//           <div
//             aria-hidden
//             className="absolute left-[7px] top-0 h-full w-px bg-forest-800/15 md:left-1/2"
//           />
//           {milestones.map((m, i) => (
//             <MilestoneItem key={m.year} milestone={m} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import { milestones } from '@/lib/content';
import { MaskedLines } from '@/components/Reveal';

// solar palette: sunrise amber → noon orange → sky blue → clean-energy green → deep teal
const COLORS = ['#f2a516', '#ee7b3a', '#4fa3d9', '#3fae7a', '#1f7a8c'];

// Node centres in the 1020 x 680 viewBox + where the text hangs
const NODES = [
  { x: 78, y: 215, text: 'below' },
  { x: 433, y: 215, text: 'below' },
  { x: 715, y: 305, text: 'above' },
  { x: 578, y: 500, text: 'below' },
  { x: 232, y: 500, text: 'below' },
] as const;

const W = 1020;
const H = 680;
const R = 54; // node radius in viewBox units

const pctX = (v: number) => `${(v / W) * 100}%`;
const pctY = (v: number) => `${(v / H) * 100}%`;

type Milestone = {
  year: string | number;
  title?: string;
  description?: string;
  text?: string;
  body?: string;
  [key: string]: unknown;
};

const copyOf = (m: Milestone) => (m.description ?? m.text ?? m.body ?? '') as string;
const pad = (n: number) => String(n + 1).padStart(2, '0');

function Road() {
  const [c1, c2, c3, c4, c5] = COLORS;
  const road = 52;
  const dash = {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 2.5,
    strokeDasharray: '14 12',
    opacity: 0.95,
  } as const;

  const segments = [
    { c: c1, d: 'M55 -10 V165 Q55 225 115 225 H255' },
    { c: c2, d: 'M252 225 H525 Q590 225 588 268' },
    { c: c3, d: 'M588 262 Q588 305 645 305 H880 Q962 305 962 400 Q962 495 880 495 H805' },
    { c: c4, d: 'M806 495 H410' },
    { c: c5, d: 'M412 495 H150 Q70 495 70 575 V690' },
  ];

  // wind turbine blades (3 blades, 120° apart)
  const blades = (cx: number, cy: number, len: number) =>
    [-90, 30, 150].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      return (
        <line
          key={deg}
          x1={cx}
          y1={cy}
          x2={cx + Math.cos(rad) * len}
          y2={cy + Math.sin(rad) * len}
          stroke="#cfd8dc"
          strokeWidth="5"
          strokeLinecap="round"
        />
      );
    });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="absolute inset-0 h-full w-full"
      aria-hidden
      role="presentation"
    >
      {/* scenery behind the road */}
      <g>
        {/* wind turbines */}
        <polygon points="512,215 518,215 516,112 514,112" fill="#b0bec5" />
        {blades(515, 110, 46)}
        <circle cx="515" cy="110" r="5" fill="#90a4ae" />
        <polygon points="548,214 552,214 551,150 549,150" fill="#b0bec5" />
        {blades(550, 148, 28)}
        <circle cx="550" cy="148" r="3.5" fill="#90a4ae" />

        {/* sun rising over green hills */}
        <g stroke="#fbbf24" strokeWidth="4" strokeLinecap="round">
          {Array.from({ length: 12 }).map((_, k) => {
            const a = (k * 30 * Math.PI) / 180;
            return (
              <line
                key={k}
                x1={925 + Math.cos(a) * 34}
                y1={212 + Math.sin(a) * 34}
                x2={925 + Math.cos(a) * 46}
                y2={212 + Math.sin(a) * 46}
              />
            );
          })}
        </g>
        <circle cx="925" cy="212" r="26" fill="#fdc83a" />
        <path d="M785 285 Q850 215 915 255 Q955 232 996 285Z" fill="#6cbf8b" />
        <path d="M850 285 Q910 240 960 262 Q980 268 996 285Z" fill="#3fae7a" />
      </g>

      {/* road bodies */}
      {segments.map((s, i) => (
        <path key={i} d={s.d} fill="none" stroke={s.c} strokeWidth={road} />
      ))}
      {/* white centre dashes */}
      {segments.map((s, i) => (
        <path key={`d${i}`} d={s.d} {...dash} />
      ))}

      {/* solar farm row at the end of the blue straight */}
      <g>
        {[0, 1, 2, 3].map((k) => (
          <g key={k}>
            <polygon
              points={`${836 + k * 36},324 ${850 + k * 36},294 ${882 + k * 36},294 ${868 + k * 36},324`}
              fill="#2b5d8a"
              stroke="#9cc9ee"
              strokeWidth="1.5"
            />
            <line x1={859 + k * 36} y1="294" x2={845 + k * 36} y2="324" stroke="#9cc9ee" strokeWidth="1" />
            <line x1={843 + k * 36} y1="309" x2={875 + k * 36} y2="309" stroke="#9cc9ee" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* solar installation van */}
      <g>
        <polygon points="168,152 262,152 252,130 178,130" fill="#2b5d8a" stroke="#9cc9ee" strokeWidth="1.5" />
        <line x1="215" y1="130" x2="215" y2="152" stroke="#9cc9ee" strokeWidth="1" />
        <rect x="155" y="152" width="116" height="48" rx="10" fill="#fbbf24" />
        <rect x="165" y="162" width="22" height="20" rx="2" fill="#fff" />
        <rect x="192" y="162" width="22" height="20" rx="2" fill="#fff" />
        <rect x="224" y="162" width="36" height="20" rx="2" fill="#fff" />
        <circle cx="178" cy="198" r="9" fill="#2f2f2f" />
        <circle cx="250" cy="198" r="9" fill="#2f2f2f" />
      </g>

      {/* house with rooftop solar */}
      <g>
        <rect x="300" y="432" width="76" height="37" fill="#f3e3c3" />
        <polygon points="290,434 338,396 386,434" fill="#e0794a" />
        <polygon points="306,428 336,402 350,414 320,432" fill="#2b5d8a" stroke="#9cc9ee" strokeWidth="1.2" />
        <rect x="328" y="444" width="14" height="25" fill="#c98b4b" />
        <rect x="350" y="444" width="16" height="12" fill="#a9d7f1" />
        <rect x="308" y="444" width="14" height="12" fill="#a9d7f1" />
      </g>

      {/* battery storage */}
      <g>
        <rect x="684" y="410" width="14" height="8" rx="2" fill="#2f8f66" />
        <rect x="662" y="418" width="58" height="52" rx="9" fill="#3fae7a" />
        <polygon points="694,426 678,449 689,449 685,466 705,440 693,440 700,426" fill="#fff" />
      </g>
    </svg>
  );
}

function Node({ m, i }: { m: Milestone; i: number }) {
  const color = COLORS[i % COLORS.length];
  const n = NODES[i];
  const above = n.text === 'above';
  const stemLen = above ? 235 : 118;
  const stemTop = above ? n.y - R - stemLen : n.y + R;
  const textTop = above ? n.y - R - stemLen + 12 : n.y + R + 12;

  return (
    <>
      {/* stem + dot */}
      <div
        className="absolute"
        style={{
          left: pctX(n.x),
          top: pctY(stemTop),
          height: pctY(stemLen),
          width: 2,
          marginLeft: -1,
          background: color,
        }}
      >
        <span
          className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
          style={{ background: color, [above ? 'top' : 'bottom']: -8 }}
        />
      </div>

      {/* numbered circle */}
      <div
        className="absolute z-10 flex aspect-square items-center justify-center rounded-full font-display text-3xl font-semibold text-white xl:text-4xl"
        style={{
          left: pctX(n.x),
          top: pctY(n.y),
          width: pctX(R * 2),
          transform: 'translate(-50%, -50%)',
          background: color,
          boxShadow: `0 0 0 3px #faf8f3, 0 0 0 4.5px ${color}, inset 0 0 0 5px ${color}, inset 0 0 0 6.5px rgba(255,255,255,.9)`,
        }}
      >
        {pad(i)}
      </div>

      {/* copy */}
      <div
        className="absolute"
        style={{
          left: `calc(${pctX(n.x)} + 26px)`,
          top: pctY(textTop),
          width: '21%',
          color,
        }}
      >
        <p className="font-display text-2xl tracking-wide xl:text-[28px]">{m.year}</p>
        {m.title && <p className="mt-1 text-sm font-semibold leading-snug">{m.title}</p>}
        <p className="mt-1 text-[13px] leading-relaxed">{copyOf(m)}</p>
      </div>
    </>
  );
}

export function JourneySection() {
  const list = milestones as Milestone[];
  const onRoad = list.slice(0, NODES.length);
  const rest = list.slice(NODES.length);

  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="shell">
        <MaskedLines lines={['The journey']} className="headline-lg text-forest-800" />

        {/* ───────── Desktop: winding road ───────── */}
        <div className="mx-auto mt-20 hidden max-w-[1020px] lg:block">
          <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
            <Road />
            {onRoad.map((m, i) => (
              <Node key={`${m.year}-${i}`} m={m} i={i} />
            ))}
          </div>

          {/* any milestones beyond the 5 road stops */}
          {rest.length > 0 && (
            <ol className="mt-16 grid grid-cols-2 gap-10">
              {rest.map((m, k) => {
                const i = NODES.length + k;
                const color = COLORS[i % COLORS.length];
                return (
                  <li key={`${m.year}-${i}`} className="flex gap-5" style={{ color }}>
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-2xl text-white"
                      style={{ background: color }}
                    >
                      {pad(i)}
                    </span>
                    <div>
                      <p className="font-display text-2xl">{m.year}</p>
                      {m.title && <p className="text-sm font-semibold">{m.title}</p>}
                      <p className="mt-1 text-[13px] leading-relaxed">{copyOf(m)}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>

        {/* ───────── Mobile / tablet: vertical road ───────── */}
        <ol className="relative mt-16 lg:hidden">
          {list.map((m, i) => {
            const color = COLORS[i % COLORS.length];
            const next = COLORS[(i + 1) % COLORS.length];
            const last = i === list.length - 1;
            return (
              <li key={`${m.year}-${i}`} className="relative flex gap-5 pb-12 last:pb-0">
                {/* road segment */}
                {!last && (
                  <span
                    aria-hidden
                    className="absolute left-[27px] top-14 bottom-0 w-[14px] -translate-x-1/2"
                    style={{
                      background: `linear-gradient(${color}, ${next})`,
                      backgroundClip: 'padding-box',
                    }}
                  >
                    <span className="absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 border-l-2 border-dashed border-white/90" />
                  </span>
                )}
                <span
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-xl text-white"
                  style={{
                    background: color,
                    boxShadow: `inset 0 0 0 4px ${color}, inset 0 0 0 5.5px rgba(255,255,255,.9)`,
                  }}
                >
                  {pad(i)}
                </span>
                <div className="pt-1" style={{ color }}>
                  <p className="font-display text-2xl tracking-wide">{m.year}</p>
                  {m.title && <p className="mt-1 text-sm font-semibold">{m.title}</p>}
                  <p className="mt-1 text-sm leading-relaxed">{copyOf(m)}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}