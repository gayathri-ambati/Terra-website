
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

const HEADLINE_SIZE = 'clamp(2.5rem, min(5.4vw, 9.5svh), 5.5rem)';

const riseClass = (isActive: boolean) =>
  `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
    isActive ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
  }`;

const riseStyle = (isActive: boolean, delay: number): CSSProperties => ({
  transitionDelay: isActive ? `${delay}ms` : '0ms',
});

/* ------------------------------------------------------------------ */
/*  WAVE ARC GEOMETRY                                                  */
/*  One function, arcX(y), defines the shape. The clip, glow and echo  */
/*  lines are all derived from it, so no lines can ever cross.         */
/*  x and y are fractions of the hero box (0..1).                      */
/* ------------------------------------------------------------------ */
const STEPS = 120;
const ARC_TOP = 0.68; // where the arc meets the top edge
const ARC_BOTTOM = 0.845; // where the arc lands on the bottom edge
const ARC_DEPTH = 0.125; // how far the bulge pushes left
const ARC_TAIL = 2.2; // higher = bottom sweep happens later

const arcX = (y: number) =>
  ARC_TOP +
  (ARC_BOTTOM - ARC_TOP) * Math.pow(y, ARC_TAIL) -
  ARC_DEPTH * Math.sin(Math.PI * y);

function arcPoints(w: number, h: number, d = 0) {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= STEPS; i++) {
    const y = i / STEPS;
    pts.push([(arcX(y) - d * Math.sin(Math.PI * y)) * w, y * h]);
  }
  return pts;
}

const toPath = (pts: Array<[number, number]>) =>
  pts
    .map(([x, y], i) => `${i ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(' ');

function useBox<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
}

function ArcDefs({ w, h }: { w: number; h: number }) {
  const points = arcPoints(w, h);
  const clip = `${toPath(points)} L ${w} ${h} L ${w} 0 Z`;
  const leftClip = `M 0 0 L ${points
    .map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(' L ')} L 0 ${h} Z`;

  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="hero-arc-clip" clipPathUnits="userSpaceOnUse">
          <path d={clip} />
        </clipPath>
        <clipPath id="hero-left-photo-clip" clipPathUnits="userSpaceOnUse">
          <path d={leftClip} />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArcGlow({ w, h }: { w: number; h: number }) {
  const edge = toPath(arcPoints(w, h));

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
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
          <stop offset="35%" stopColor={GREEN_SOFT} stopOpacity="1" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="1" />
        </linearGradient>

        <filter id="arc-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="arc-blur-wide" x="-40%" y="-20%" width="180%" height="140%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>

      {/* soft green haze outside the edge */}
      <path
        d={toPath(arcPoints(w, h, 0.02))}
        fill="none"
        stroke="#55C948"
        strokeWidth="60"
        opacity="0.18"
        filter="url(#arc-blur-wide)"
      />

      {/* echo lines: same curve pushed outward, converge at top/bottom */}
      <path
        d={toPath(arcPoints(w, h, 0.03))}
        fill="none"
        stroke="#9CEB62"
        strokeWidth="1.2"
        opacity="0.38"
      />
      <path
        d={toPath(arcPoints(w, h, 0.065))}
        fill="none"
        stroke="#9CEB62"
        strokeWidth="1"
        opacity="0.22"
      />

      {/* glowing green edge */}
      <path
        d={edge}
        fill="none"
        stroke={GREEN}
        strokeWidth="8"
        opacity="0.5"
        filter="url(#arc-blur)"
      />
      <path
        d={edge}
        fill="none"
        stroke="url(#arc-green)"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* moving shimmer */}
      <path
        d={edge}
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

/* Original bottom wave lines, restored as they were */
function BackdropWaves() {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[42%] w-[82%] lg:block"
    >
      <defs>
        <linearGradient id="wave-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E6A3A" stopOpacity="0" />
          <stop offset="55%" stopColor="#58B94E" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#9CEB62" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 9} C 320 ${230 + i * 6}, 760 ${
            200 + i * 5
          }, 1200 ${230 + i * 11}`}
          fill="none"
          stroke="url(#wave-fade)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
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
      className="relative w-full overflow-hidden bg-[#041F18] text-white selection:bg-[#7ED957]/30"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {/* background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_35%,#0B3C2B_0%,#06271D_46%,#041B15_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
        style={{ clipPath: 'url(#hero-left-photo-clip)' }}
      >
        <img
          src={SLIDES[1].image.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
        />
        <div className="absolute inset-0 bg-[#041F18]/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(14, 23, 20, 0.58) 0%, rgba(3, 18, 14, 0.28) 30%, transparent 68%)',
          }}
        />
      </div>
      <BackdropWaves />
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

          <div className="absolute inset-0 bg-[#041F18]/70 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#041F18]/48 via-[#041F18]/12 to-transparent lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#041F18]/60 to-transparent" />
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
      <div className="shell relative z-30 flex min-h-[clamp(700px,100svh,920px)] items-center pb-28 pt-28 sm:pb-28 lg:pt-32">
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
                  className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300 sm:text-xs ${riseClass(
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
                  className="font-display font-normal leading-[0.99] tracking-[-0.035em]"
                  style={{
                    fontSize: `calc(${HEADLINE_SIZE} * ${item.headlineScale})`,
                  }}
                >
                  {item.headline.map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-[0.06em]">
                      <span
                        className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:whitespace-nowrap ${
                          isActive ? 'translate-y-0' : 'translate-y-[110%]'
                        } ${i === 1                         ? 'bg-clip-text text-transparent italic' : 'text-white'}`}
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
                    className="rounded-full border border-white/55 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-[#7ED957] hover:bg-white/10 hover:text-[#B5F27E]"
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
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 border-t border-white/20 pt-3 sm:pt-4">
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