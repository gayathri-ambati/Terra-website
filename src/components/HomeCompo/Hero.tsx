// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { company } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';

// export function Hero() {
//   return (
//     <section className="grain relative flex min-h-screen items-end overflow-hidden bg-forest-900 text-ivory">
//       <SceneCanvas variant="hero" className="animate-drift" />
//       <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-forest-900/60" />
//       <div className="shell relative z-10 pb-24 pt-40 md:pb-32">
//         <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
//           <span className="h-px w-10 bg-sage-400" /> Terra Ecopreneurs · Est. Coimbatore
//         </p>
//         <MaskedLines
//           lines={company.heroHeadline}
//           className="headline-xl max-w-6xl"
//           startDelay={200}
//           step={140}
//         />
//         <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
//           <Reveal delay={700}>
//             <p className="max-w-xl font-body text-base leading-relaxed text-ivory/80 md:text-lg">
//               {company.heroSupport}
//             </p>
//           </Reveal>
//           <Reveal delay={850} className="flex flex-wrap gap-4">
//             <Link to="/impact" className="btn-primary">
//               Explore Our Impact <ArrowRight size={16} />
//             </Link>
//             <Link to="/about" className="btn-ghost-light">
//               Discover Terra
//             </Link>
//           </Reveal>
//         </div>
//       </div>
//       <div
//         aria-hidden
//         className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 text-ivory/50 md:flex"
//       >
//         <span className="label-caps" style={{ writingMode: 'vertical-rl' }}>
//           Scroll
//         </span>
//         <span className="h-16 w-px animate-pulse bg-ivory/40" />
//       </div>
//     </section>
//   );
// }import { useState, useCallback, useEffect, useRef } from 'react';





import { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { MaskedLines, Reveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import video from "../../assets/From Klickpin.com- Save Fresh simple wedding cake ideas for a polished look people will notice with simple details that elevate the final look-pin.mp4"

type Slide = {
  image: { src: string; alt: string };
  video: { src: string; poster?: string };
  eyebrow: string;
  headline: string[];
  support: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  caption: string;
};

const SLIDES: Slide[] = [
  {
    image: {
      src: 'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
      alt: 'Regenerative farmland at sunrise',
    },
    video: {
        src: video,
      poster:
        'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
    },
    eyebrow: 'Terra Ecopreneurs · Est. Coimbatore',
    headline: ['Regenerating land,', 'restoring livelihoods.'],
    support:
      'We back ecopreneurs rebuilding soil, water and biodiversity across the Western Ghats.',
    primaryCta: { label: 'Explore Our Impact', to: '/impact' },
    secondaryCta: { label: 'Discover Terra', to: '/about' },
    caption: 'Regenerative agriculture',
  },
  {
    image: {
      src: 'https://i.pinimg.com/736x/1b/13/95/1b13952464f12030b62ea110c527104d.jpg',
      alt: 'Community of ecopreneurs collaborating',
    },
    video: {
      src: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-1573/1080p.mp4',
      poster:
        'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
    },
    eyebrow: 'Community-led enterprise',
    headline: ['Enterprise that', 'grows with community.'],
    support:
      'Local cooperatives own the value they create — from seed to shelf, profit stays in the landscape.',
    primaryCta: { label: 'Meet the Community', to: '/community' },
    secondaryCta: { label: 'Our Model', to: '/about' },
    caption: 'Community-led enterprise',
  },
  {
    image: {
      src: 'https://i.pinimg.com/1200x/ee/ef/a4/eeefa433161de91367f11fa9cdffff8c.jpg',
      alt: 'Restored Western Ghats landscape',
    },
    video: {
      src: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-1573/1080p.mp4',
      poster:
        'https://i.pinimg.com/1200x/27/80/1b/27801b4262592ea66565b178b0fd6ef0.jpg',
    },
    eyebrow: 'Landscape restoration',
    headline: ['Landscapes', 'brought back to life.'],
    support:
      'Twelve thousand hectares under restoration — native species, watershed health, and carbon drawdown.',
    primaryCta: { label: 'See the Landscapes', to: '/impact' },
    secondaryCta: { label: 'Join Us', to: '/contact' },
    caption: 'Landscape restoration',
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const go = useCallback((dir: 1 | -1) => {
    setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  const slide = SLIDES[active];

  return (
    <section className="grain relative flex min-h-screen items-stretch overflow-hidden bg-forest-900 text-ivory">
      {/* === Media base — both layers fill the whole section and overlap === */}
      <div className="absolute inset-0">
        {/* IMAGE layer — masked so it dissolves toward the center */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.85) 42%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 56%, transparent 62%)',
            maskImage:
              'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.85) 42%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 56%, transparent 62%)',
          }}
        >
          {SLIDES.map((s, i) => (
            <img
              key={s.image.src + i}
              src={s.image.src}
              alt={s.image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
              aria-hidden={i !== active}
            />
          ))}
        </div>

        {/* VIDEO layer — masked so it dissolves toward the center (mirror) */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 38%, rgba(0,0,0,0.1) 44%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 58%, black 70%, black 100%)',
            maskImage:
              'linear-gradient(to right, transparent 38%, rgba(0,0,0,0.1) 44%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 58%, black 70%, black 100%)',
          }}
        >
          {SLIDES.map((s, i) => (
            <video
              key={s.video.src + i}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={s.video.src}
              poster={s.video.poster}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              loop
              playsInline
              preload={i === 0 ? 'auto' : 'metadata'}
              aria-hidden={i !== active}
            />
          ))}
        </div>

        {/* Central shadow band — dark, soft vignette where the two meet */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[26%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,26,20,0.55),rgba(10,26,20,0.15)_45%,transparent_75%)]" />

        {/* Thin luminous seam — a faint warm glow so the intersection reads as light, not a divider */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[10%] -translate-x-1/2 bg-[linear-gradient(to_right,transparent,rgba(180,220,190,0.10),rgba(220,255,230,0.18),rgba(180,220,190,0.10),transparent)] mix-blend-screen" />
      </div>

      {/* Optional generative overlay */}
      <SceneCanvas
        variant="hero"
        className="pointer-events-none animate-drift mix-blend-overlay opacity-30"
      />

      {/* Gradient wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 via-transparent to-forest-900/40" />

      {/* === Carousel controls — bottom right === */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30 bg-forest-900/40 text-ivory backdrop-blur transition hover:border-sage-400 hover:text-sage-400"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30 bg-forest-900/40 text-ivory backdrop-blur transition hover:border-sage-400 hover:text-sage-400"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* === Dots + caption — bottom center === */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
        <p className="label-caps text-ivory/70">{slide.caption}</p>
        <div className="flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-sage-400' : 'w-1.5 bg-ivory/40 hover:bg-ivory/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* === Content — changes per slide === */}
      <div className="shell relative z-10 flex w-full flex-col justify-end pb-24 pt-40 md:pb-32">
        <div key={active}>
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> {slide.eyebrow}
          </p>
          <MaskedLines
            lines={slide.headline}
            className="headline-xl max-w-3xl"
            startDelay={200}
            step={140}
          />
          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <Reveal delay={700}>
              <p className="max-w-xl font-body text-base leading-relaxed text-ivory/80 md:text-lg">
                {slide.support}
              </p>
            </Reveal>
            <Reveal delay={850} className="flex flex-wrap gap-4">
              <Link to={slide.primaryCta.to} className="btn-primary">
                {slide.primaryCta.label} <ArrowRight size={16} />
              </Link>
              <Link to={slide.secondaryCta.to} className="btn-ghost-light">
                {slide.secondaryCta.label}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}