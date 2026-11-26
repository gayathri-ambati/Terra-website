

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Droplets,
  Leaf,
  Recycle,
  Sun,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Capability = {
  code: string;
  title: string;
  blurb: string;
};

const ITEMS: Capability[] = [
  {
    code: '01',
    title: 'Energy Efficiency & Audit',
    blurb:
      'Walk-through to investment-grade audits; metering, benchmarking and retrofit roadmaps.',
  },
  {
    code: '02',
    title: 'Clean Energy',
    blurb:
      'Solar PV, hybrid systems and decentralised renewables for industry and agriculture.',
  },
  {
    code: '03',
    title: 'IBMS',
    blurb:
      'Integrated building management systems that make every plant visible and controllable.',
  },
  {
    code: '04',
    title: 'Digital Solutions',
    blurb:
      'Energy dashboards, IoT metering and analytics that keep savings honest after handover.',
  },
  {
    code: '05',
    title: 'Industrial Automation',
    blurb:
      'PLC, SCADA and process control engineered for reliability on the factory floor.',
  },
  {
    code: '06',
    title: 'Prefabricated Structures',
    blurb:
      'Fast, low-waste steel buildings for industry and rural infrastructure.',
  },
  {
    code: '07',
    title: 'Press Components',
    blurb:
      'Precision sheet-metal press parts manufactured to client specification.',
  },
  {
    code: '08',
    title: 'Sustainable Management',
    blurb:
      'ESG advisory, carbon accounting and sustainability reporting for growing companies.',
  },
];

const COLORS = [
  '#075B43',
  '#0A6845',
  '#0B563B',
  '#0C4B36',
  '#0A6441',
  '#105A3E',
  '#0A5038',
  '#12633F',
];

const ICONS: LucideIcon[] = [
  Leaf,
  Sun,
  Zap,
  BarChart3,
  Building2,
  Droplets,
  Wind,
  Recycle,
];

const BANNER_IMG =
  'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=2200&q=85';

const W = 560;
const H = 570;
const CX = 280;
const CY = 290;
const RING_OUTER = 230;
const RING_INNER = 172;
const ARC_START = 285;
const ARC_SPAN = 360;
const GAP = 2;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function polar(radius: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: CX + radius * Math.cos(radians),
    y: CY + radius * Math.sin(radians),
  };
}

function ringSegment(start: number, end: number) {
  const outerStart = polar(RING_OUTER, start);
  const outerEnd = polar(RING_OUTER, end);
  const innerEnd = polar(RING_INNER, end);
  const innerStart = polar(RING_INNER, start);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${RING_OUTER} ${RING_OUTER} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${RING_INNER} ${RING_INNER} 0 0 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
}

const DROP_PATH =
  'M280 135 A155 155 0 1 1 279.9 135 Z';

function CapabilityChip({
  index,
  size = 48,
}: {
  index: number;
  size?: number;
}) {
  const Icon = ICONS[index % ICONS.length];

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full text-white shadow-md ring-2 ring-white"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, #0E3B3A)`,
      }}
    >
      <Icon size={size * 0.45} strokeWidth={1.6} />
    </span>
  );
}

export function SolutionIndex() {
  const step = ARC_SPAN / ITEMS.length;

  const sectionRef = useRef<HTMLElement>(null);
  const bannerImageRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<SVGGElement>(null);

  const [hasEntered, setHasEntered] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll-linked banner parallax and subtle ring movement.
  useEffect(() => {
    let frame = 0;

    const updateMotion = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (reduceMotion) {
          if (bannerImageRef.current) {
            bannerImageRef.current.style.transform = 'scale(1.04)';
          }
          if (ringRef.current) {
            ringRef.current.style.transform = 'none';
          }
          return;
        }

        const bounds = section.getBoundingClientRect();
        const progress = clamp(
          (window.innerHeight - bounds.top) /
            (window.innerHeight + bounds.height),
          0,
          1
        );

        if (bannerImageRef.current) {
          const imageOffset = (progress - 0.5) * -34;
          bannerImageRef.current.style.transform =
            `scale(1.12) translate3d(0, ${imageOffset}px, 0)`;
        }

        if (ringRef.current) {
          const ringOffset = (progress - 0.5) * -12;
          const rotation = (progress - 0.5) * 3;
          ringRef.current.style.transform =
            `translate3d(0, ${ringOffset}px, 0) rotate(${rotation}deg)`;
        }
      });
    };

    updateMotion();
    window.addEventListener('scroll', updateMotion, { passive: true });
    window.addEventListener('resize', updateMotion);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateMotion);
      window.removeEventListener('resize', updateMotion);
    };
  }, []);

  function renderCapability(
    index: number,
    side: 'left' | 'right',
    rank: number
  ) {
    const capability = ITEMS[index];
    const isLeft = side === 'left';
    const isActive = hovered === index;

    return (
      <Reveal key={capability.code} delay={rank * 100}>
        <Link
          to="/solutions"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(index)}
          onBlur={() => setHovered(null)}
          className="group relative flex min-h-[84px] min-w-0 items-center gap-3 rounded-[1.25rem] border border-lime-700/15 bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(23,66,38,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-600/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(23,66,38,0.12)] sm:gap-3.5 sm:px-4"
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/2 h-px w-5 bg-lime-600/60 ${
              isLeft ? 'right-[-20px]' : 'left-[-20px]'
            }`}
          />
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-lime-500 ${
              isLeft ? 'right-[-23px]' : 'left-[-23px]'
            }`}
          />

          <span
            className="shrink-0 transition-transform duration-300"
            style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
          >
            <CapabilityChip index={index} />
          </span>

          <span aria-hidden="true" className="h-12 w-px shrink-0 bg-forest-700/25" />

          <span className="min-w-0 flex-1">
            <span
              className={`flex items-start gap-1.5 font-display text-sm font-semibold leading-snug transition-colors sm:text-base ${
                isActive ? 'text-forest-600' : 'text-forest-900'
              }`}
            >
              {capability.title}
              <ArrowUpRight
                size={15}
                className="mt-0.5 shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </span>

            <span className="mt-1 block text-xs leading-[1.4] text-charcoal/70">
              {capability.blurb}
            </span>
          </span>
        </Link>
      </Reveal>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#F1F6E8]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_57%,rgba(255,255,255,0.94),transparent_43%),radial-gradient(ellipse_at_90%_46%,rgba(191,232,133,0.42),transparent_42%)]"
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-7 top-24 rotate-[-35deg] text-lime-700/20"
        size={90}
        strokeWidth={0.8}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-7 bottom-20 rotate-[35deg] text-lime-700/20"
        size={100}
        strokeWidth={0.8}
      />

      <div className="relative pt-4 sm:pt-5">
        <div className="shell relative">
          <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
            <div className="relative h-[260px] sm:h-[240px] lg:h-[250px]">
              <img
                ref={bannerImageRef}
                src={BANNER_IMG}
                alt="Wind turbines across rolling green hills at sunset"
                className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#052D24]/90 via-[#073F30]/65 to-[#073F30]/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062D24]/35 via-transparent to-[#062D24]/10" />

              {/* Text overlay */}
              <div className="relative z-10 flex h-full items-center px-6 py-6 sm:px-10 lg:px-12">
                <Reveal className="w-full max-w-[660px]">
                  <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-300 sm:text-xs">
                    <span className="h-px w-10 bg-lime-300" />
                    Terra Ecopreneurs capabilities
                  </p>

                  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.035em] text-white">
                    Eight disciplines.{' '}
                    <span className="font-semibold text-lime-300">
                      One purpose.
                    </span>
                  </h2>

                  <p className="mt-2 max-w-[470px] text-sm leading-6 text-white/85 sm:text-base">
                    Every discipline works as part of one connected system,
                    from the first audit to long-term performance.
                  </p>

                  <Link
                    to="/solutions"
                    className="group mt-4 inline-flex items-center gap-3 rounded-full border border-lime-300/80 py-1 pl-4 pr-1 text-xs font-semibold text-white transition-colors hover:bg-lime-300/10 sm:text-sm"
                  >
                    Explore our capabilities
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-forest-900 transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shell relative z-10 pb-8 pt-2 sm:pb-10 lg:pt-2">
        <div className="grid items-center gap-y-8 lg:grid-cols-[minmax(0,1fr)_360px_minmax(0,1fr)] lg:gap-x-5 xl:grid-cols-[minmax(0,1fr)_400px_minmax(0,1fr)]">
          {/* Capabilities 01–04 */}
          <div className="hidden flex-col gap-3 lg:flex">
            {[0, 1, 2, 3].map((index) =>
              renderCapability(index, 'left', index)
            )}
          </div>

          {/* Animated capability ring */}
          <div
            className="mx-auto w-full max-w-[360px] xl:max-w-[400px]"
            style={{ aspectRatio: `${W} / ${H}` }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              aria-label="Eight capabilities surrounding the Terra Ecopreneurs approach"
              className="h-full w-full overflow-visible"
            >
              <defs>
                <filter
                  id="dropShadow"
                  x="-25%"
                  y="-20%"
                  width="150%"
                  height="150%"
                >
                  <feDropShadow
                    dx="0"
                    dy="16"
                    stdDeviation="16"
                    floodColor="#0B2F2A"
                    floodOpacity="0.22"
                  />
                </filter>

                <linearGradient id="dropFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#EDF1EE" />
                </linearGradient>
              </defs>

              <g
                ref={ringRef}
                style={{
                  transformOrigin: `${CX}px ${CY}px`,
                  transition: 'transform 80ms linear',
                }}
              >
                {ITEMS.map((capability, index) => {
                  const end = ARC_START - index * step - GAP / 2;
                  const start = ARC_START - (index + 1) * step + GAP / 2;
                  const middle = ARC_START - (index + 0.5) * step;
                  const isActive = hovered === index;
                  const push = polar(isActive ? 7 : 0, middle);
                  const center = polar((RING_OUTER + RING_INNER) / 2, middle);
                  const Icon = ICONS[index % ICONS.length];

                  return (
                    <g
                      key={capability.code}
                      style={{
                        opacity: hasEntered ? 1 : 0,
                        transform: hasEntered ? 'scale(1)' : 'scale(0.78)',
                        transformOrigin: `${CX}px ${CY}px`,
                        transition:
                          'opacity 650ms ease, transform 800ms cubic-bezier(0.2,0.75,0.25,1)',
                        transitionDelay: `${index * 80}ms`,
                      }}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <g
                        style={{
                          transform: `translate(${push.x - CX}px, ${push.y - CY}px)`,
                          transition:
                            'transform 280ms cubic-bezier(0.2,0.75,0.25,1)',
                        }}
                      >
                        <path
                          d={ringSegment(start, end)}
                          fill={COLORS[index % COLORS.length]}
                          style={{
                            filter: isActive
                              ? 'brightness(1.2)'
                              : 'brightness(1)',
                            transition: 'filter 250ms ease',
                          }}
                        />

                        <Icon
                          x={center.x - 13}
                          y={center.y - 21}
                          size={26}
                          color="white"
                          strokeWidth={1.5}
                        />

                        <text
                          x={center.x}
                          y={center.y + 20}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fillOpacity="0.85"
                          fontSize="11"
                          fontFamily="ui-monospace, monospace"
                          letterSpacing="1.5"
                        >
                          {capability.code}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>

              {/* Center droplet reveals after the ring */}
              <path
                d={DROP_PATH}
                fill="url(#dropFill)"
                filter="url(#dropShadow)"
                style={{
                  opacity: hasEntered ? 1 : 0,
                  transform: hasEntered
                    ? 'translateY(0)'
                    : 'translateY(-24px)',
                  transition:
                    'opacity 700ms ease, transform 900ms cubic-bezier(0.2,0.75,0.25,1)',
                  transitionDelay: '250ms',
                }}
              />

              {/* Center message */}
              <g
                style={{
                  opacity: hasEntered ? 1 : 0,
                  transition: 'opacity 900ms ease 500ms',
                }}
              >
                <path
                  d="M280 178c-19-2-29-12-30-28 17 0 28 8 30 28Zm0 0c2-20 13-29 30-30-1 16-11 27-30 30Zm0 0v14"
                  fill="none"
                  stroke="#4F8761"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />

                <text
                  x={CX}
                  y="244"
                  textAnchor="middle"
                  fill="#3E6A55"
                  fontSize="10"
                  fontWeight="700"
                  letterSpacing="2.5"
                  fontFamily="sans-serif"
                >
                  THE TERRA APPROACH
                </text>

                <line x1="215" y1="260" x2="345" y2="260" stroke="#C9D3CB" />

                <text
                  x={CX}
                  y="294"
                  textAnchor="middle"
                  fill="#12382C"
                  fontSize="30"
                  fontFamily="Georgia, serif"
                >
                  SUSTAINABLE
                </text>

                <text
                  x={CX}
                  y="330"
                  textAnchor="middle"
                  fill="#12382C"
                  fontSize="30"
                  fontFamily="Georgia, serif"
                >
                  PROGRESS.
                </text>

                <line x1="215" y1="353" x2="345" y2="353" stroke="#C9D3CB" />

                <text
                  x={CX}
                  y="375"
                  textAnchor="middle"
                  fill="#526A5B"
                  fontSize="10.5"
                  fontFamily="sans-serif"
                >
                  Practical change, lasting impact.
                </text>
              </g>
            </svg>
          </div>

          {/* Capabilities 08–05 */}
          <div className="hidden flex-col gap-3 lg:flex">
            {[7, 6, 5, 4].map((index, rank) =>
              renderCapability(index, 'right', rank)
            )}
          </div>
        </div>

        {/* Mobile and tablet capability list */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-x-8 sm:grid-cols-2 lg:hidden">
          {ITEMS.map((capability, index) => (
            <Reveal key={capability.code} delay={(index % 2) * 80}>
              <Link
                to="/solutions"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                className="group flex items-start gap-4 border-t border-forest-800/15 py-3 transition-colors hover:border-forest-600"
              >
                <CapabilityChip index={index} size={40} />

                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-base font-semibold text-forest-900 transition-colors group-hover:text-forest-600">
                    {capability.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-charcoal/65">
                    {capability.blurb}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-forest-800/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-7 flex items-center justify-center gap-4 text-center">
            <span className="h-px w-8 bg-forest-700/30 sm:w-12" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-forest-800/65 sm:text-xs sm:tracking-[0.2em]">
              A greener. Smarter. More sustainable future.
            </p>
            <span className="h-px w-8 bg-forest-700/30 sm:w-12" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}