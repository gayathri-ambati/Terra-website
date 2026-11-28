import { ClipboardList, PencilRuler, Wrench, Activity } from "lucide-react";

import { Reveal } from "@/components/Reveal";

const PROCESS = [
  {
    icon: ClipboardList,
    title: "Site survey",
    body: "We measure roof or land, shading and your current power use.",
  },
  {
    icon: PencilRuler,
    title: "System design",
    body: "A layout and capacity sized to your load, budget and space.",
  },
  {
    icon: Wrench,
    title: "Installation",
    body: "Certified crews install, test and connect the system to the grid.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    body: "Live performance tracking and scheduled maintenance after handover.",
  },
];

/* ---------- desktop geometry (all in a 1000-wide coordinate space) ---------- */
const W = 1000; // canvas width
const ROW = 128; // height of one row
const CIRCLE = 100; // circle diameter
const OFFSET = 40; // how far circles swing left / right of centre
const N = PROCESS.length;
const H = N * ROW;

// circle centre for each row (zigzag: left, right, left, right ...)
const centres = PROCESS.map((_, i) => ({
  x: W / 2 + (i % 2 === 0 ? -OFFSET : OFFSET),
  y: i * ROW + ROW / 2,
}));

// smooth S-curve that joins every circle centre
const PATH = centres
  .map((c, i) => {
    if (i === 0) return `M ${c.x} ${c.y}`;
    const p = centres[i - 1];
    const mid = (c.y - p.y) / 2;
    return `C ${p.x} ${p.y + mid}, ${c.x} ${c.y - mid}, ${c.x} ${c.y}`;
  })
  .join(" ");

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2f8ee] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        {/* SECTION HEADING */}
        <Reveal>
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-3 font-body text-base font-medium text-[#2f8f4e]">
              How we deliver
            </p>

            <h2 className="font-heading text-3xl font-bold leading-tight text-[#202321] sm:text-4xl md:text-5xl lg:text-[48px]">
              From first visit to{" "}
              <span className="relative inline-block text-[#2f8f4e]">
                lasting performance
                <span />
              </span>
            </h2>
          </div>
        </Reveal>

        {/* ================= DESKTOP : zigzag timeline ================= */}
        <Reveal>
          <div
            className="relative mx-auto hidden w-full max-w-[1000px] lg:block"
            style={{ aspectRatio: `${W} / ${H}` }}
          >
            {/* 1. dashed pills (behind everything) */}
            {PROCESS.map(({ title, body }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`pill-${title}`}
                  className={`absolute flex items-center border-2 border-dashed border-[#6dbd88] ${
                    isLeft
                      ? "rounded-l-[999px] border-r-0 pl-[9%] pr-[24%]"
                      : "rounded-r-[999px] border-l-0 pl-[24%] pr-[9%]"
                  }`}
                  style={{
                    top: pct(i * ROW + 5, H),
                    height: pct(ROW - 10, H),
                    left: isLeft ? 0 : "50%",
                    width: "50%",
                  }}
                >
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#202321]">
                      {title}
                    </h3>
                    <p className="mt-1.5 max-w-[260px] font-body text-sm leading-relaxed text-[#555b55]">
                      {body}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* 2. thick glowing orange path */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox={`0 0 ${W} ${H}`}
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="process-path" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a6dcb8" />
                  <stop offset="100%" stopColor="#5fb77f" />
                </linearGradient>
                <filter id="process-glow" x="-20%" y="-5%" width="140%" height="110%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* soft glow */}
              <path
                d={PATH}
                stroke="#4fae73"
                strokeWidth="84"
                strokeLinecap="round"
                opacity="0.35"
                filter="url(#process-glow)"
              />
              {/* main band */}
              <path
                d={PATH}
                stroke="url(#process-path)"
                strokeWidth="76"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>

            {/* 3. circles with icons */}
            {PROCESS.map(({ icon: Icon, title }, i) => (
              <div
                key={`icon-${title}`}
                className="group absolute aspect-square -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: pct(centres[i].x, W),
                  top: pct(centres[i].y, H),
                  width: pct(CIRCLE, W),
                }}
              >
                <div
                  className="
                    flex h-full w-full items-center justify-center
                    rounded-full border-[6px] border-[#7cc896]
                    bg-[#fafdf8] text-[#2f8f4e]
                    shadow-[0_10px_24px_rgba(30,120,70,0.30),inset_0_2px_6px_rgba(255,255,255,0.9)]
                    transition-transform duration-500 group-hover:scale-105
                  "
                >
                  <Icon className="h-[46%] w-[46%]" strokeWidth={1.6} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ================= MOBILE / TABLET : stacked ================= */}
        <div className="relative mx-auto flex max-w-xl flex-col lg:hidden">
          {/* vertical orange band behind the icons */}
          <div className="pointer-events-none absolute bottom-10 left-[36px] top-10 w-[44px] -translate-x-1/2 rounded-full bg-[#8fd1a5]/70 sm:left-[44px]" />

          {PROCESS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="relative flex items-center gap-4 py-2 sm:gap-5">
                <div
                  className="
                    relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center
                    rounded-full border-[6px] border-[#7cc896] bg-[#fafdf8] text-[#2f8f4e]
                    shadow-[0_8px_18px_rgba(30,120,70,0.28)]
                    sm:h-[88px] sm:w-[88px]
                  "
                >
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <div className="min-w-0 flex-1 rounded-r-[60px] rounded-l-none border-2 border-l-0 border-dashed border-[#6dbd88] py-4 pl-10 pr-5 -ml-10">
                  <h3 className="font-heading text-lg font-bold text-[#202321] sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-[#555b55] sm:text-base">
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}