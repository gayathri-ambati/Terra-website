
'use client';

import { useEffect, useRef, useState } from 'react';
import type { Ref } from 'react';
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

// One continuous path that the bus follows (same shape as the 5 road segments)
const BUS_PATH =
  'M55 -10 V165 Q55 225 115 225 H525 Q590 225 588 268 Q588 305 645 305 H880 ' +
  'Q962 305 962 400 Q962 495 880 495 H150 Q70 495 70 575 V690';

const SPEED = 240; // viewBox units per second
const PAUSE = 1400; // ms the bus waits at each stop
const STOP_BEFORE = R + 40; // bus parks just before the numbered circle
const LOOP = true; // restart the trip from point 01 after the last stop

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

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

function Road({
  pathRef,
  busRef,
}: {
  pathRef: Ref<SVGPathElement>;
  busRef: Ref<SVGGElement>;
}) {
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

      {/* invisible guide path for the bus */}
      <path ref={pathRef} d={BUS_PATH} fill="none" stroke="none" />

      {/* the bus (drawn facing right, positioned by the animation) */}
      <g ref={busRef} style={{ opacity: 0 }}>
        {/* body */}
        <rect x="-36" y="-17" width="72" height="30" rx="8" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
        {/* solar panel on the roof */}
        <polygon points="-26,-17 -20,-26 20,-26 26,-17" fill="#2b5d8a" stroke="#9cc9ee" strokeWidth="1.2" />
        {/* windows */}
        <rect x="-30" y="-12" width="14" height="11" rx="2" fill="#fff" />
        <rect x="-12" y="-12" width="14" height="11" rx="2" fill="#fff" />
        <rect x="6" y="-12" width="14" height="11" rx="2" fill="#fff" />
        <rect x="24" y="-12" width="9" height="14" rx="2" fill="#a9d7f1" />
        {/* headlight */}
        <circle cx="35" cy="6" r="2.5" fill="#fff7c2" />
        {/* wheels */}
        <circle cx="-20" cy="14" r="7" fill="#2f2f2f" />
        <circle cx="-20" cy="14" r="2.5" fill="#cfd8dc" />
        <circle cx="20" cy="14" r="7" fill="#2f2f2f" />
        <circle cx="20" cy="14" r="2.5" fill="#cfd8dc" />
      </g>
    </svg>
  );
}

type NodeState = 'idle' | 'current' | 'done';

function Node({ m, i, state }: { m: Milestone; i: number; state: NodeState }) {
  const show = state !== 'idle';
  const isNext = state === 'current'; // the bus is stopped at this point right now
  const color = COLORS[i % COLORS.length];
  const n = NODES[i];
  const above = n.text === 'above';
  const stemLen = above ? 235 : 118;
  const stemTop = above ? n.y - R - stemLen : n.y + R;
  const textTop = above ? n.y - R - stemLen + 12 : n.y + R + 12;

  const stemFade = {
    opacity: show ? 1 : isNext ? 0.55 : 0.2,
    transition: 'opacity .6s ease',
  } as const;

  const copyFade = {
    opacity: show ? 1 : isNext ? 0.4 : 0,
    transition: 'opacity .6s ease, transform .6s ease',
  } as const;

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
          ...stemFade,
        }}
      >
        <span
          className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
          style={{ background: color, [above ? 'top' : 'bottom']: -8 }}
        />
      </div>

      {/* pulsing highlight ring on the next stop */}
      {isNext && (
        <div
          aria-hidden
          className="pointer-events-none absolute z-0 aspect-square"
          style={{
            left: pctX(n.x),
            top: pctY(n.y),
            width: pctX(R * 2),
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="journey-pulse h-full w-full rounded-full"
            style={{ border: `4px solid ${color}`, boxShadow: `0 0 28px 6px ${color}88` }}
          />
        </div>
      )}

      {/* numbered circle */}
      <div
        className="absolute z-10 flex aspect-square items-center justify-center rounded-full font-display text-3xl font-semibold text-white xl:text-4xl"
        style={{
          left: pctX(n.x),
          top: pctY(n.y),
          width: pctX(R * 2),
          transform: `translate(-50%, -50%) scale(${isNext ? 1.12 : show ? 1 : 0.85})`,
          opacity: show || isNext ? 1 : 0.4,
          filter: show || isNext ? 'none' : 'grayscale(1)',
          transition:
            'opacity .6s ease, filter .6s ease, transform .6s cubic-bezier(.34,1.56,.64,1)',
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
          ...copyFade,
          transform: show ? 'none' : 'translateY(8px)',
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

  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const busRef = useRef<SVGGElement>(null);
  const [active, setActive] = useState(-1); // last stop the bus has reached
  const [current, setCurrent] = useState(-1); // stop the bus is parked at right now
  const [started, setStarted] = useState(false);

  // start when the road scrolls into view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const path = pathRef.current;
    const bus = busRef.current;
    if (!path || !bus) return;

    // respect reduced motion: just show everything
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(list.length - 1);
      return;
    }

    const total = path.getTotalLength();
    const finalStop = Math.max(0, total - 60); // ~y=630, bus stays inside the 680 high drawing

    // find where each node sits along the path, park a bit before it
    const stops = NODES.map((n) => {
      let best = 0;
      let bestD = Infinity;
      for (let l = 0; l <= total; l += 2) {
        const p = path.getPointAtLength(l);
        const d = (p.x - n.x) ** 2 + (p.y - n.y) ** 2;
        if (d < bestD) {
          bestD = d;
          best = l;
        }
      }
      return Math.max(0, best - STOP_BEFORE);
    });

    let cancelled = false;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const place = (len: number) => {
      const p = path.getPointAtLength(len);
      const a = path.getPointAtLength(Math.min(total, len + 2));
      const b = path.getPointAtLength(Math.max(0, len - 2));
      const angle = (Math.atan2(a.y - b.y, a.x - b.x) * 180) / Math.PI;
      const flip = Math.abs(angle) > 90 ? ' scale(1,-1)' : ''; // keep bus upright when heading left
      bus.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle})${flip}`);
      bus.style.opacity = '1';
    };

    const drive = (from: number, to: number) =>
      new Promise<void>((res) => {
        const dur = Math.max(700, (Math.abs(to - from) / SPEED) * 1000);
        const t0 = performance.now();
        const tick = (now: number) => {
          if (cancelled) return;
          const t = Math.min(1, (now - t0) / dur);
          place(from + (to - from) * ease(t));
          if (t < 1) raf = requestAnimationFrame(tick);
          else res();
        };
        raf = requestAnimationFrame(tick);
      });

    const wait = (ms: number) => new Promise<void>((r) => (timer = setTimeout(r, ms)));

    (async () => {
      do {
        setActive(-1);
        setCurrent(-1);
        place(0);
        let pos = 0;
        await wait(600);
        for (let i = 0; i < stops.length; i++) {
          if (cancelled) return;
          await drive(pos, stops[i]); // drive to stop i
          pos = stops[i];
          setActive(i); // reveal milestone i
          setCurrent(i); // highlight this point while the bus is stopped
          await wait(PAUSE); // bus waits
          if (cancelled) return;
          setCurrent(-1); // bus leaves, point stays revealed
        }
        if (cancelled) return;

        // final stop: park fully inside the drawing (not clipped) and highlight point 06
        if (list.length > NODES.length) {
          await drive(pos, finalStop);
          setActive(NODES.length);
          setCurrent(NODES.length);
          await wait(PAUSE);
          if (cancelled) return;
          setCurrent(-1);
          setActive(list.length - 1); // reveal any remaining points
        }
        await wait(1200);
      } while (LOOP && !cancelled);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [started]);

  return (
    <section className="bg-ivory py-24 md:py-36">
      <style>{`
        @keyframes journeyPulse {
          0% { transform: scale(1); opacity: .85; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .journey-pulse { animation: journeyPulse 1.3s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .journey-pulse { animation: none; }
        }
      `}</style>
      <div className="shell">
        <MaskedLines lines={['The Journey']} className="headline-lg text-forest-800" />

        {/* ───────── Desktop: winding road ───────── */}
        <div className="mx-auto mt-20 hidden max-w-[1020px] lg:block">
          <div ref={wrapRef} className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
            <Road pathRef={pathRef} busRef={busRef} />
            {onRoad.map((m, i) => (
              <Node
                key={`${m.year}-${i}`}
                m={m}
                i={i}
                state={i === current ? 'current' : i <= active ? 'done' : 'idle'}
              />
            ))}
          </div>

          {/* any milestones beyond the 5 road stops */}
          {rest.length > 0 && (
            <ol className="mt-16 grid grid-cols-2 gap-10">
              {rest.map((m, k) => {
                const i = NODES.length + k;
                const color = COLORS[i % COLORS.length];
                const isCur = i === current;
                const isDone = i <= active;
                return (
                  <li
                    key={`${m.year}-${i}`}
                    className="flex gap-5"
                    style={{
                      color,
                      opacity: isDone ? 1 : 0.35,
                      transition: 'opacity .6s ease',
                    }}
                  >
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-2xl text-white"
                      style={{
                        background: color,
                        filter: isDone ? 'none' : 'grayscale(1)',
                        transform: isCur ? 'scale(1.12)' : 'none',
                        boxShadow: isCur ? `0 0 0 4px #faf8f3, 0 0 0 7px ${color}` : 'none',
                        transition: 'transform .6s cubic-bezier(.34,1.56,.64,1), box-shadow .4s ease, filter .6s ease',
                      }}
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