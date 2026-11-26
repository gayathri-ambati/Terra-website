import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, GraduationCap, Pause, Play, Quote, Smartphone, Sprout, TrendingDown, Users, Warehouse, Wrench } from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const TRANSFORM_PROJECT = projects.find((p) => p.slug === 'transform-fpo-cluster')!;

/* Swap any URL for your own approved photography. If an image fails to load,
   the SceneCanvas artwork underneath shows instead, so nothing looks broken. */
const unsplash = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  hero: unsplash('photo-1500382017468-9049fed747ef', 2000),
  challenge: unsplash('photo-1574943320219-553eb213f72d', 1200),
  fieldSchool: unsplash('photo-1416879595882-3373a0480b5b', 900),
  fpo: unsplash('photo-1464226184884-fa280b87c399', 900),
  infra: unsplash('photo-1509391366360-2e959784a276', 900),
  digital: unsplash('photo-1473341304170-971dccb5ac1e', 900),
  story1: unsplash('photo-1530836369250-ef72a3f5cda8', 900),
  story2: unsplash('photo-1625246333195-78d9c38ad449', 900),
  story3: unsplash('photo-1560493676-04071c5f467b', 900),
  outcomes: unsplash('photo-1500382017468-9049fed747ef', 2000),
};

/* Drop your own agriculture clip into /public/videos/agriculture.mp4 (or paste any
   direct .mp4 / .webm URL here). If the file is missing, the poster photo shows instead. */
const AGRI_VIDEO = '/videos/agriculture.mp4';

const SHELL = 'mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16';

/* ------------------------------------------------------------------ */
/*  Image with a built-in fallback                                     */
/* ------------------------------------------------------------------ */
function FieldImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`overflow-hidden bg-forest-700 ${className}`}>
      <SceneCanvas variant="agri" />
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 motion-reduce:transition-none ${imgClassName}`}
        />
      )}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Looping muted video with play / pause and a photo fallback         */
/* ------------------------------------------------------------------ */
function VideoPanel({ src, poster, className = '' }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [failed, setFailed] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-forest-900 ${className}`}>
      {failed ? (
        <FieldImage src={poster} alt="A farmer walking through a crop field" className="absolute inset-0" />
      ) : (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Footage of farmers working in the field"
          onError={() => setFailed(true)}
        >
          <source src={src} onError={() => setFailed(true)} />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-forest-900/10" />
      {!failed && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-ivory/30 bg-forest-900/50 py-2 pl-3 pr-4 font-heading text-xs font-semibold text-ivory backdrop-blur-md transition-colors hover:bg-forest-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  );
}

const CHALLENGES = [
  { icon: TrendingDown, title: 'Post-harvest losses', body: 'Spoilage and rough handling erase already thin margins.' },
  { icon: Users, title: 'Fragmented selling', body: 'Each farmer sells alone, so nobody has bargaining power.' },
  { icon: GraduationCap, title: 'Late agronomy advice', body: 'Guidance arrives after the decision has already been made.' },
  { icon: Warehouse, title: 'Unaffordable infrastructure', body: 'Storage and grading cost more than any one village can fund.' },
];

const APPROACH = [
  {
    icon: Sprout,
    img: IMG.fieldSchool,
    alt: 'Young crops growing in healthy soil',
    title: 'Farmer field schools',
    body: 'Season-long, hands-on training on soil health, water management and integrated pest management.',
  },
  {
    icon: Users,
    img: IMG.fpo,
    alt: 'Farmland managed by a producer organisation',
    title: 'Stronger FPOs',
    body: 'Governance, collective procurement and direct marketing so members sell as one.',
  },
  {
    icon: Wrench,
    img: IMG.infra,
    alt: 'Solar panels powering a drying and storage hub',
    title: 'Shared infrastructure',
    body: 'Prefabricated collection centres, grading lines, solar drying and cold-storage pilots.',
  },
  {
    icon: Smartphone,
    img: IMG.digital,
    alt: 'Energy infrastructure at dusk',
    title: 'Digital advisories',
    body: 'Crop guidance delivered through FPO networks, timed to the season.',
  },
];

const FARMER_STORIES = [
  {
    img: IMG.story1,
    alt: 'Seedlings in a nursery tray',
    name: 'A farmer field school graduate',
    place: 'Western Tamil Nadu',
    quote: 'We used to decide by habit. Now we decide by what the soil and the season tell us. Input costs fell the first year.',
  },
  {
    img: IMG.story2,
    alt: 'Irrigated crop rows at a collection hub',
    name: 'An FPO board member',
    place: 'TRANSFORM cluster',
    quote: 'The collection centre changed everything. We grade together, store together and sell at a price we set together.',
  },
  {
    img: IMG.story3,
    alt: 'Green crop rows stretching to the horizon',
    name: 'A young returning farmer',
    place: 'TRANSFORM village',
    quote: 'I came back to farming because it finally looked like a business, not a gamble. The programme made the maths work.',
  },
];

export function AgriculturePage() {
  return (
    <main className="bg-linen">
      {/* ============================ BANNER ============================ */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-ivory">
        {/* background: photo over artwork fallback */}
        <FieldImage src={IMG.hero} alt="Green farmland beneath an open sky" className="absolute inset-0 -z-20" />
        {/* readability layers */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 via-forest-900/75 to-forest-900/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900 via-transparent to-forest-900/40" />

        <div className={`${SHELL} grid min-h-[92svh] items-center gap-12 pb-32 pt-36 lg:grid-cols-12 lg:pb-36`}>
          {/* copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-7 inline-flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
                <Sprout size={16} />
                Agriculture programme · TRANSFORM
              </p>
            </Reveal>

            <MaskedLines
              lines={['Where the work', 'takes root.']}
              className="font-display text-6xl font-medium leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl"
              startDelay={150}
            />

            <Reveal delay={400}>
              <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-ivory/75 md:text-lg">
                TRANSFORM is Terra&apos;s agriculture programme: farmer field schools, stronger producer organisations and shared
                rural infrastructure — built with communities, not just for them.
              </p>
            </Reveal>

            <Reveal delay={550} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-sage-300 py-2 pl-6 pr-2 font-heading text-sm font-semibold text-forest-900 transition-colors duration-300 hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              >
                Partner with TRANSFORM
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-900 text-ivory transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link
                to={`/projects/${TRANSFORM_PROJECT.slug}`}
                className="inline-flex items-center rounded-full border border-ivory/40 px-6 py-3.5 font-heading text-sm font-semibold text-ivory backdrop-blur-sm transition-colors duration-300 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              >
                Read the case study
              </Link>
            </Reveal>
          </div>

          {/* floating photo card (desktop) */}
          <Reveal delay={500} variant="scale" className="hidden lg:col-span-5 lg:block">
            <div className="relative ml-auto w-full max-w-md">
              <FieldImage
                src={IMG.story3}
                alt="Crop rows stretching across a village field"
                className="relative aspect-[4/5] rounded-sm shadow-[0_40px_90px_rgba(0,0,0,0.45)]"
              />
              <div className="absolute -bottom-5 -left-8 flex items-center gap-5 border-l-2 border-sage-400 bg-ivory px-6 py-4 text-forest-900 shadow-xl">
                <div>
                  <p className="font-heading text-3xl font-bold leading-none">{TRANSFORM_PROJECT.results[0].value}</p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-charcoal/70">farmers supported</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <a
          href="#challenge"
          aria-label="Scroll to the challenge section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-body text-xs text-ivory/60 transition-colors hover:text-ivory md:flex"
        >
          Scroll
          <ArrowDown size={16} className="animate-bounce motion-reduce:animate-none" />
        </a>
      </section>

      {/* ============================ STATS STRIP ============================ */}
      <div className={`${SHELL} relative z-20 -mt-20`}>
        <Reveal>
          <dl className="grid grid-cols-1 divide-y divide-forest-800/15 border-y border-forest-800/10 bg-ivory shadow-[0_18px_50px_rgba(16,47,39,0.08)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {TRANSFORM_PROJECT.results.map((r) => (
              <div key={r.label} className="flex flex-col-reverse gap-2 p-6 md:p-8">
                <dt className="font-body text-xs leading-snug text-charcoal/65 md:text-sm">{r.label}</dt>
                <dd className="font-display text-5xl font-semibold leading-none text-forest-800 md:text-6xl">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* ========================== CHALLENGE ========================= */}
      <section id="challenge" className="bg-ivory py-24 md:py-32">
        <div className={SHELL}>
          <div className="mb-12 grid gap-8 border-b border-forest-800/15 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="label-caps mb-4 text-forest-600">The context</p>
              <MaskedLines lines={['The challenge']} className="headline-lg text-forest-800" />
            </div>
            <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-base leading-relaxed text-charcoal/70 md:text-lg">
                Small-holder farmers face a compound problem: fragmented holdings that cannot fund infrastructure, post-harvest
                losses that erase thin margins, and agronomy advice that arrives late or not at all.
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="relative lg:col-span-5">
              <ClipReveal className="aspect-[4/3] lg:aspect-[4/5]">
                <VideoPanel
                  src={AGRI_VIDEO}
                  poster={IMG.challenge}
                  className="h-full w-full shadow-[0_24px_60px_rgba(16,47,39,0.16)]"
                />
              </ClipReveal>
              <Reveal delay={500} variant="scale" className="absolute -bottom-5 right-4 max-w-[17rem] bg-forest-800 p-5 text-ivory shadow-xl sm:-right-5">
                <p className="font-display text-2xl font-medium leading-snug">Small farms, shared problems.</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-ivory/70">
                  Four obstacles compound each other. TRANSFORM tackles them together.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-forest-800/15 border-y border-forest-800/15">
                {CHALLENGES.map(({ icon: Icon, title, body }, i) => (
                  <Reveal key={title} delay={i * 90} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
                    <span className="grid h-10 w-10 place-items-center bg-sage-300/60 text-forest-800">
                      <Icon size={18} />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-heading text-base font-semibold text-forest-800">{title}</h3>
                        <span className="font-heading text-xs font-semibold tracking-widest text-forest-600/60">0{i + 1}</span>
                      </div>
                      <p className="mt-1 font-body text-sm leading-relaxed text-charcoal/65">{body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== APPROACH ========================= */}
      <section className="bg-forest-800 py-24 text-ivory md:py-32">
        <div className={SHELL}>
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label-caps mb-4 text-sage-300">How we work</p>
              <MaskedLines
                lines={['Our approach:', 'build capability first.']}
                className="headline-lg"
              />
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <p className="font-body text-base leading-relaxed text-ivory/70">
                Four parts, one programme. Training gives farmers the skills, producer organisations give them scale, and shared
                infrastructure and advice make both pay off.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map(({ icon: Icon, img, alt, title, body }, i) => (
              <Reveal key={title} delay={i * 110} as="article" className="group flex flex-col overflow-hidden bg-forest-800">
                <FieldImage src={img} alt={alt} className="relative aspect-[5/3]">
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center bg-sage-300 text-forest-900">
                    <Icon size={18} />
                  </span>
                </FieldImage>
                <div className="flex flex-1 flex-col border-t border-ivory/15 p-6">
                  <span className="font-heading text-xs font-semibold tracking-widest text-sage-300">0{i + 1}</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ivory/65">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FARMER STORIES ===================== */}
      <section className="bg-linen py-24 md:py-32">
        <div className={SHELL}>
          <div className="flex flex-col justify-between gap-5 border-b border-forest-800/15 pb-8 md:flex-row md:items-end">
            <div>
              <p className="label-caps mb-4 text-forest-600">People & place</p>
              <MaskedLines lines={['From the field']} className="headline-lg text-forest-800" />
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal/65">
              Progress is personal. Here is what change can feel like for the people building it.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <Reveal delay={0} as="figure" className="group lg:col-span-7">
              <FieldImage src={FARMER_STORIES[0].img} alt={FARMER_STORIES[0].alt} className="relative aspect-[16/9]">
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 grid h-10 w-10 place-items-center bg-sage-300 text-forest-900">
                  <Quote size={18} />
                </span>
              </FieldImage>
              <div className="grid gap-5 border-b border-forest-800/15 py-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <blockquote className="font-display text-2xl italic leading-snug text-forest-800 md:text-3xl">“{FARMER_STORIES[0].quote}”</blockquote>
                <figcaption className="sm:text-right">
                  <p className="font-heading text-sm font-semibold text-forest-800">{FARMER_STORIES[0].name}</p>
                  <p className="font-body text-xs text-charcoal/60">{FARMER_STORIES[0].place}</p>
                </figcaption>
              </div>
            </Reveal>

            <div className="flex flex-col justify-between gap-8 lg:col-span-5">
              {FARMER_STORIES.slice(1).map((s, i) => (
                <Reveal key={s.name} delay={i * 110} as="figure" className="group flex gap-5 border-t border-forest-800/15 pt-5">
                  <FieldImage src={s.img} alt={s.alt} className="relative aspect-square w-24 shrink-0 sm:w-32">
                    <div className="absolute inset-0 bg-forest-900/10" />
                  </FieldImage>
                  <div className="flex flex-col justify-between gap-4">
                    <blockquote className="font-display text-xl italic leading-snug text-forest-800">“{s.quote}”</blockquote>
                    <figcaption>
                      <p className="font-heading text-sm font-semibold text-forest-800">{s.name}</p>
                      <p className="font-body text-xs text-charcoal/60">{s.place}</p>
                    </figcaption>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl font-body text-xs leading-relaxed text-charcoal/55">
              Names and photographs of farmers are withheld pending consent. These accounts are composites of field feedback until
              approved stories are published, and the images show the landscapes they come from.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================== OUTCOMES ========================= */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-24 text-ivory md:py-32">
        <FieldImage src={IMG.outcomes} alt="Farmland at sunrise" className="absolute inset-0 -z-10 opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900 via-forest-900/70 to-forest-900" />

        <div className={`${SHELL} grid items-start gap-12 lg:grid-cols-12`}>
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <p className="label-caps mb-4 text-sage-300">The measure of progress</p>
            <MaskedLines lines={['Verified outcomes']} className="headline-lg" />
            <Reveal delay={150}>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ivory/75">
                TRANSFORM measures itself in farmer income, not footage. Current programme results, pending third-party
                verification:
              </p>
            </Reveal>
            <Reveal delay={250}>
              <Link
                to={`/projects/${TRANSFORM_PROJECT.slug}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ivory py-2 pl-6 pr-2 font-heading text-sm font-semibold text-forest-900 transition-colors duration-300 hover:bg-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
              >
                Read the programme case study
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-800 text-ivory transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="divide-y divide-ivory/20 border-y border-ivory/20 lg:col-span-7">
            {TRANSFORM_PROJECT.results.map((r, i) => (
              <Reveal
                key={r.label}
                delay={i * 100}
                variant="right"
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:py-8"
              >
                <span className="font-display text-5xl font-semibold leading-none text-sage-300 md:text-6xl">{r.value}</span>
                <span className="max-w-xs font-body text-sm leading-relaxed text-ivory/75 sm:text-right">{r.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Grow the programme', 'with us.']} cta="Partner with TRANSFORM" />
    </main>
  );
}