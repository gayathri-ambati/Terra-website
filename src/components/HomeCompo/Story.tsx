
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Leaf, Settings2, Sprout, Zap } from 'lucide-react';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Engineering first',
    body: 'Every claim we make is grounded in measurement. Audits precede action; data follows delivery.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Engineer reviewing equipment and system performance',
    imageCaption: 'Smart Engineering',
    icon: Settings2,
  },
  {
    number: '02',
    title: 'Sustainable by design',
    body: 'Sustainability that costs the business is unsustainable. We design for both margins and soil.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Solar panels generating clean energy',
    imageCaption: 'Clean Energy',
    icon: Zap,
  },
  {
    number: '03',
    title: 'A healthier tomorrow',
    body: 'We stay beyond commissioning — training teams, monitoring systems and sharing results honestly.',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Farmer working in a green field',
    imageCaption: 'Healthy Soil',
    icon: Sprout,
  },
];

const SCENE_POINTS = [
  { x: 27, y: 57 },
  { x: 65, y: 27 },
  { x: 80, y: 66 },
];

const SCENE_SIZES = [
  { width: 54, height: 54 },
  { width: 43, height: 42 },
  { width: 42, height: 46 },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getTravelerPosition(progress: number) {
  const segment = Math.min(Math.floor(progress), SCENE_POINTS.length - 2);
  const amount = clamp(progress - segment, 0, 1);
  const start = SCENE_POINTS[segment];
  const end = SCENE_POINTS[segment + 1];

  return {
    x: start.x + (end.x - start.x) * amount,
    y: start.y + (end.y - start.y) * amount,
  };
}

export function Story() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const lastIndex = PRINCIPLES.length - 1;
  const boundedProgress = clamp(progress, 0, lastIndex);
  const activeIndex = Math.round(boundedProgress);
  const traveler = getTravelerPosition(boundedProgress);

  useEffect(() => {
    let frameId = 0;

    const updateScene = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        let nextProgress = 0;
        const section = sectionRef.current;

        if (section) {
          const travel = Math.max(1, section.offsetHeight - window.innerHeight);
          nextProgress = clamp(
            (-section.getBoundingClientRect().top / travel) * lastIndex,
            0,
            lastIndex
          );
        }

        setProgress((current) =>
          Math.abs(current - nextProgress) < 0.002 ? current : nextProgress
        );

        const gallery = galleryRef.current;

        if (section && gallery) {
          const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;

          if (reduceMotion) {
            gallery.style.transform = 'none';
          } else {
            const rect = section.getBoundingClientRect();
            const drift = clamp(
              (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.015,
              -12,
              12
            );

            gallery.style.transform = `translate3d(0, ${drift}px, 0)`;
          }
        }
      });
    };

    updateScene();
    window.addEventListener('scroll', updateScene, { passive: true });
    window.addEventListener('resize', updateScene);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateScene);
      window.removeEventListener('resize', updateScene);
    };
  }, [lastIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#F6F6EF] py-14 text-forest-900 sm:py-16 lg:min-h-[220svh] lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 bottom-[-18rem] h-[36rem] w-[56rem] rounded-[50%] bg-[#CDE4B8]/55 blur-2xl" />
        <div className="absolute -right-36 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#D9EACB]/75 blur-3xl" />
        <div className="absolute right-8 top-8 rotate-[-28deg] text-forest-600/20 sm:right-16 sm:top-12">
          <Leaf size={100} strokeWidth={0.8} />
        </div>
      </div>

      <div className="shell relative z-10 grid gap-10 py-8 lg:sticky lg:top-0 lg:min-h-[100svh] lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-0">
        <div className="lg:col-span-5">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-700 sm:text-xs">
            <span className="h-px w-9 bg-forest-700" />
            Our philosophy
          </p>

          <h2 className="font-display text-[clamp(2rem,4vw,4rem)] leading-[0.98] tracking-[-0.045em] text-forest-900">
            <span className="block">Engineering done well</span>
            <span className="block">
              protects both <span className="text-[#39733A]">margins</span>
            </span>
            <span className="block">
              and <span className="text-[#39733A]">soil.</span>
            </span>
          </h2>

          <div className="relative mt-7">
            <span
              aria-hidden="true"
              className="absolute bottom-5 left-5 top-5 w-px bg-gradient-to-b from-forest-700/50 via-[#A8C98B] to-[#DDE8D6]"
            />
            {PRINCIPLES.map((principle, index) => {
              const isActive = activeIndex === index;
              const distance = Math.min(Math.abs(boundedProgress - index), 1);

              return (
                <article
                  key={principle.number}
                  className="relative flex min-h-[76px] items-start gap-4 py-2.5 sm:min-h-[82px]"
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs transition-all duration-500 ${
                      isActive
                        ? 'bg-[#12452A] text-white shadow-[0_6px_18px_rgba(18,69,42,0.2)]'
                        : 'bg-[#E8EDE3] text-forest-800/55'
                    }`}
                  >
                    {principle.number}
                  </span>

                  <div
                    className="min-w-0 flex-1 pt-0.5 transition-transform duration-500"
                    style={{
                      opacity: 1 - distance * 0.25,
                      transform: `translateX(${isActive ? 5 : 0}px)`,
                    }}
                  >
                    <h3
                      className={`font-display text-xl leading-tight transition-colors duration-500 sm:text-2xl ${
                        isActive ? 'text-forest-900' : 'text-forest-700/55'
                      }`}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="max-w-md overflow-hidden font-body text-sm leading-6 text-charcoal/70 transition-all duration-500"
                      style={{
                        maxHeight: isActive ? '5rem' : 0,
                        marginTop: isActive ? 8 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      {principle.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <a
            href="/about"
            className="group mt-5 inline-flex items-center gap-4 rounded-full bg-[#103F28] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg shadow-forest-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
          >
            Our Approach
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7F36A] text-forest-900 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={19} />
            </span>
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-[520px] sm:h-[640px] lg:h-[100svh]">
              <div
                ref={galleryRef}
                className="absolute inset-0 will-change-transform"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <path
                    d="M 27 57 C 39 48, 47 24, 65 27 S 74 53, 80 66"
                    fill="none"
                    stroke="rgba(47, 93, 74, 0.2)"
                    strokeWidth="0.45"
                    strokeDasharray="1.4 2"
                    vectorEffect="non-scaling-stroke"
                  />

                  <path
                    d="M 27 57 C 39 48, 47 24, 65 27 S 74 53, 80 66"
                    fill="none"
                    stroke="#8CB96A"
                    strokeWidth="0.6"
                    strokeDasharray="1000"
                    strokeDashoffset={
                      1000 - (boundedProgress / lastIndex) * 1000
                    }
                    pathLength="1000"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {PRINCIPLES.map((principle, index) => {
                  const distance = Math.min(
                    Math.abs(boundedProgress - index),
                    1
                  );
                  const scale = 1 - distance * 0.08;
                  const opacity = 1 - distance * 0.25;
                  const point = SCENE_POINTS[index];
                  const size = SCENE_SIZES[index];
                  const isActive = index === activeIndex;
                  const Icon = principle.icon;

                  return (
                    <figure
                      key={principle.number}
                      className="absolute"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        width: `${size.width * scale}%`,
                        height: `${size.height * scale}%`,
                        opacity,
                        transform: 'translate(-50%, -50%)',
                        filter: `saturate(${1 - distance * 0.3}) brightness(${
                          1 - distance * 0.15
                        })`,
                        zIndex: isActive ? 30 : 10 + index,
                      }}
                    >
                      <div className="relative h-full w-full rounded-[1.35rem] border-[6px] border-white bg-white p-1.5 shadow-[0_24px_55px_-24px_rgba(39,75,60,0.4)] sm:border-[8px] sm:p-2">
                        <div className="relative h-full w-full overflow-hidden rounded-[1rem]">
                          <img
                            src={principle.image}
                            alt={principle.imageAlt}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 h-full w-full object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                          <figcaption
                            className="absolute bottom-2 left-2 right-2 transition-opacity duration-500 sm:bottom-3 sm:left-3"
                            style={{ opacity: isActive ? 1 : 0.92 }}
                          >
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F9F1]/95 px-3 py-2 font-heading text-[9px] font-semibold text-forest-800 shadow-md backdrop-blur-sm sm:text-[11px]">
                              <Icon size={15} strokeWidth={1.9} />
                              {principle.imageCaption}
                            </span>
                          </figcaption>
                        </div>
                      </div>
                    </figure>
                  );
                })}

                {/* Station dots on the path */}
                {SCENE_POINTS.map((point, i) => (
                  <div
                    key={i}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  >
                    <span
                      className={`block rounded-full border-2 transition-all duration-500 ${
                        i === activeIndex
                          ? 'h-3 w-3 border-[#39733A] bg-[#B5F27E] shadow-[0_0_12px_rgba(181,242,126,0.75)]'
                          : 'h-2.5 w-2.5 border-forest-800/30 bg-[#F6F6EF]'
                      }`}
                    />
                  </div>
                ))}

                {/* Traveller */}
                <div
                  className="absolute z-30"
                  style={{
                    left: `${traveler.x}%`,
                    top: `${traveler.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 32 40"
                    className="h-8 w-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    fill="none"
                  >
                    <circle
                      cx="16"
                      cy="7"
                      r="4"
                      fill="#F6F6EF"
                      stroke="#8CB96A"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 12v11m0-7-7 5m7-5 7 4m-7-1-6 10m6-10 7 9"
                      stroke="#274B3C"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 z-30 text-right">
                <div className="font-display text-4xl leading-none text-forest-800/75">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
                <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-forest-800/40">
                  / {String(PRINCIPLES.length).padStart(2, '0')}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}