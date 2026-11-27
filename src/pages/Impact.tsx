// // ImpactFour.tsx — Hero + five alternating split rows. Images are kept at/below their real
// // resolution (no full-bleed stretching) and framed with offset plates + floating stat chips.
// // Needs: framer-motion, lucide-react. Images: /public/images. Video: /public/media/impact-film.mp4
// import { useState, type ReactNode } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowDown, Check, Leaf, Sprout, IndianRupee, CarFront, Play } from 'lucide-react';

// const DEEP = '#0F3D2A';
// const LEAF = '#2E8B4F';
// const MINT = '#A7E3B0';
// const INK = '#10261B';

// const VIDEO_SRC = '/media/impact-film.mp4'; // replace with your explainer video
// const IMG = {
//   hero: '/images/sun-earth.png',
//   split: '/images/clean-vs-polluted.png',
//   pump: '/images/solar-pump.png',
//   money: '/images/investment-case.png',
//   ev: '/images/ev-charging.png',
// };

// const TOPICS = [
//   { id: 'environment', label: 'Environment', icon: Leaf },
//   { id: 'farms', label: 'Farms', icon: Sprout },
//   { id: 'savings', label: 'Savings', icon: IndianRupee },
//   { id: 'mobility', label: 'Mobility', icon: CarFront },
// ];

// const fade = {
//   initial: { opacity: 0, y: 36 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: '-80px' },
//   transition: { duration: 0.8 },
// };

// /* ---------- building blocks ---------- */
// function Steps({ items, dark }: { items: [string, string][]; dark?: boolean }) {
//   return (
//     <ol className="space-y-4">
//       {items.map(([t, d], i) => (
//         <li key={t} className="flex gap-4">
//           <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold"
//             style={dark ? { background: MINT, color: DEEP } : { background: LEAF, color: '#fff' }}>{i + 1}</span>
//           <div>
//             <p className="font-semibold leading-snug">{t}</p>
//             <p className={`mt-0.5 text-[15px] leading-relaxed ${dark ? 'text-white/70' : 'text-[#10261B]/65'}`}>{d}</p>
//           </div>
//         </li>
//       ))}
//     </ol>
//   );
// }

// function Ticks({ items, dark }: { items: string[]; dark?: boolean }) {
//   return (
//     <ul className="space-y-2.5">
//       {items.map((t) => (
//         <li key={t} className="flex items-start gap-3">
//           <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
//             style={dark ? { background: MINT, color: DEEP } : { background: LEAF, color: '#fff' }}>
//             <Check size={12} strokeWidth={3} />
//           </span>
//           <span className="text-[15px] leading-snug md:text-base">{t}</span>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Facts({ items, dark }: { items: [string, string][]; dark?: boolean }) {
//   return (
//     <dl className={`grid gap-5 border-t pt-5 sm:grid-cols-3 ${dark ? 'border-white/15' : 'border-[#10261B]/15'}`}>
//       {items.map(([n, l]) => (
//         <div key={n}>
//           <dt className="fd text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-none" style={{ color: dark ? MINT : LEAF }}>{n}</dt>
//           <dd className={`mt-2 text-sm leading-snug ${dark ? 'text-white/70' : 'text-[#10261B]/65'}`}>{l}</dd>
//         </div>
//       ))}
//     </dl>
//   );
// }

// /** Media frame: offset colour plate behind, rounded image, floating stat chip. Capped width keeps images sharp. */
// function Media({ children, chip, flip, dark, max = 'max-w-[600px]' }: {
//   children: ReactNode; chip?: [string, string]; flip?: boolean; dark?: boolean; max?: string;
// }) {
//   return (
//     <div className={`relative mx-auto w-full ${max} pb-6`}>
//       <div aria-hidden className={`absolute inset-0 rounded-[2rem] ${flip ? '-translate-x-4' : 'translate-x-4'} translate-y-4`}
//         style={{ background: dark ? 'rgba(167,227,176,.16)' : 'rgba(46,139,79,.18)' }} />
//       <div className="relative overflow-hidden rounded-[2rem] shadow-xl ring-4 ring-white/80">{children}</div>
//       {chip && (
//         <div className={`absolute -bottom-1 rounded-2xl bg-white px-5 py-3 text-[#10261B] shadow-xl ${flip ? 'right-3 md:-right-5' : 'left-3 md:-left-5'}`}>
//           <p className="fd text-xl font-semibold leading-none" style={{ color: LEAF }}>{chip[0]}</p>
//           <p className="mt-1 text-xs text-[#10261B]/70">{chip[1]}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// /** One row: text on one side, media on the other. flip = media on the left. */
// function Split({ id, label, title, intro, media, flip, bg, dark, children }: {
//   id: string; label: string; title: string; intro: string; media: ReactNode;
//   flip?: boolean; bg: string; dark?: boolean; children?: ReactNode;
// }) {
//   return (
//     <section id={id} className="px-5 py-16 md:px-8 md:py-24" style={{ background: bg, color: dark ? '#fff' : INK }}>
//       <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
//         <motion.div {...fade} className={flip ? 'md:order-2' : ''}>
//           <p className="text-sm font-semibold" style={{ color: dark ? MINT : LEAF }}>{label}</p>
//           <h2 className="fd mt-2 text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.12]">{title}</h2>
//           <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-white/80' : 'text-[#10261B]/75'}`}>{intro}</p>
//           <div className="mt-7 space-y-7">{children}</div>
//         </motion.div>
//         <motion.div {...fade} className={flip ? 'md:order-1' : ''}>{media}</motion.div>
//       </div>
//     </section>
//   );
// }

// /* ---------- hero (split, so no image is stretched full-screen) ---------- */
// function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden text-white" style={{ background: DEEP }}>
//       <div aria-hidden className="absolute -right-40 top-10 -z-10 h-[620px] w-[620px] rounded-full opacity-60 blur-3xl"
//         style={{ background: 'radial-gradient(circle, rgba(167,227,176,.45), transparent 65%)' }} />
//       <div className="mx-auto grid min-h-[92svh] max-w-6xl items-center gap-12 px-5 pb-28 pt-36 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-8">
//         <div>
//           <p className="text-sm font-semibold" style={{ color: MINT }}>Our impact</p>
//           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
//             className="fd mt-3 text-[clamp(2.4rem,5.2vw,4.4rem)] font-semibold leading-[1.05]">
//             The same sun shines on every village.
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
//             className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
//             See how sunlight becomes power for homes, farms and vehicles, and what that changes for the people who use it.
//           </motion.p>
//           <div className="mt-8 flex flex-wrap items-center gap-3">
//             <a href="#video" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold" style={{ background: MINT, color: DEEP }}>
//               <Play size={15} fill="currentColor" /> Watch how it works
//             </a>
//             <a href="#environment" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-[#0F3D2A]">
//               See the impact <ArrowDown size={15} />
//             </a>
//           </div>
//           <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
//             {[['5–6 hrs', 'strong sun every day'], ['Up to 80%', 'lower bills'], ['25 years', 'panel warranty']].map(([n, l]) => (
//               <div key={n}>
//                 <dt className="fd text-2xl font-semibold" style={{ color: MINT }}>{n}</dt>
//                 <dd className="mt-0.5 text-sm text-white/70">{l}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>

//         {/* Round image with slowly turning sun ring */}
//         <div className="relative mx-auto w-full max-w-[440px]">
//           <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
//             className="absolute -inset-7 rounded-full border-2 border-dashed" style={{ borderColor: 'rgba(167,227,176,.45)' }} />
//           <div aria-hidden className="absolute -inset-3 rounded-full" style={{ background: 'rgba(167,227,176,.12)' }} />
//           <motion.img src={IMG.hero} alt="Sun, Earth and solar panels" fetchPriority="high"
//             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
//             className="relative aspect-square w-full rounded-full object-cover ring-4 ring-white/70" />
//           <div className="absolute -left-2 bottom-8 rounded-2xl bg-white px-4 py-2.5 text-[#10261B] shadow-xl md:-left-8">
//             <p className="fd text-lg font-semibold leading-none" style={{ color: LEAF }}>Free</p>
//             <p className="mt-1 text-xs text-[#10261B]/70">energy from the sun</p>
//           </div>
//         </div>
//       </div>

//       <nav aria-label="Topics" className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#0F3D2A]/70 backdrop-blur">
//         <ul className="mx-auto flex max-w-6xl justify-between gap-6 overflow-x-auto px-5 py-4 text-sm font-medium md:px-8">
//           {TOPICS.map(({ id, label, icon: Icon }) => (
//             <li key={id}>
//               <a href={`#${id}`} className="flex items-center gap-2 whitespace-nowrap text-white/80 hover:text-white">
//                 <Icon size={16} style={{ color: MINT }} /> {label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </section>
//   );
// }

// /* ---------- video player ---------- */
// function Player() {
//   const [playing, setPlaying] = useState(false);
//   const [failed, setFailed] = useState(false);
//   return (
//     <div className="relative aspect-video bg-black">
//       {playing && !failed ? (
//         <video src={VIDEO_SRC} poster={IMG.hero} controls autoPlay playsInline onError={() => setFailed(true)} className="h-full w-full object-cover" />
//       ) : (
//         <>
//           <img src={IMG.hero} alt="" className="h-full w-full object-cover" />
//           <div className="absolute inset-0 bg-[#0F3D2A]/40" />
//           <button type="button" onClick={() => { setFailed(false); setPlaying(true); }} aria-label="Play video"
//             className="group absolute inset-0 grid place-items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white">
//             <span className="relative grid h-20 w-20 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110" style={{ background: MINT, color: DEEP }}>
//               <span className="absolute inset-0 animate-ping rounded-full opacity-40" style={{ background: MINT }} />
//               <Play size={30} fill="currentColor" className="relative" />
//             </span>
//           </button>
//           {failed && <p className="absolute inset-x-0 bottom-3 text-center text-sm text-white">Add your video file at {VIDEO_SRC} to play it here.</p>}
//         </>
//       )}
//     </div>
//   );
// }

// /* ---------- page ---------- */
// export default function ImpactFour() {
//   return (
//     <main className="relative font-['Instrument_Sans',sans-serif]" style={{ color: INK }}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Instrument+Sans:wght@400;500;600&display=swap');
//         .fd{font-family:'Fraunces',serif;letter-spacing:-0.01em}`}</style>

//       <Hero />

//       <Split id="video" bg="#F5FAEF" label="Video explainer" title="Watch how sunlight becomes village power."
//         intro="A short walk through the whole journey, from the first ray of light on a rooftop to a charged battery and a running water pump."
//         media={<Media max="max-w-[660px]" chip={['Start to finish', 'the whole journey']}><Player /></Media>}>
//         <Steps items={[
//           ['Sunlight reaches the panels', 'Panels on roofs and open land turn light into DC electricity.'],
//           ['Power is cleaned, stored and shared', 'An inverter makes it usable AC, batteries hold the extra, and the rest can flow to the grid.'],
//           ['Homes, farms and vehicles run on it', 'Lights, pumps, appliances and EV chargers all draw from the same clean source.'],
//         ]} />
//       </Split>

//       <Split id="environment" bg="#E6F4DF" label="1. Environment" title="Cleaner air in every direction."
//         intro="Every home that makes its own power means less coal and diesel burned nearby. On the left of this picture is the future we are leaving behind. On the right is where solar leads."
//         media={
//           <Media chip={['1.2 t', 'CO₂ avoided per year, per 3 kW home']}>
//             <div className="relative">
//               <img src={IMG.split} alt="A polluted city on the left and a solar-powered green city on the right" className="block h-auto w-full" />
//               <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">Fossil fuels</span>
//               <span className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: LEAF }}>With solar</span>
//             </div>
//           </Media>
//         }>
//         <Ticks items={['Less smoke and fewer particles in the air', 'Quieter neighbourhoods with no generators running', 'Local jobs in installation and maintenance']} />
//         <div>
//           <Facts items={[['1.2 t', 'CO₂ avoided each year by a 3 kW home'], ['0', 'fuel burned while generating'], ['25 yrs', 'of clean output per installation']]} />
//           <p className="mt-3 text-xs text-[#10261B]/55">Typical estimates. Actual results depend on roof, usage and local tariffs.</p>
//         </div>
//       </Split>

//       <Split flip id="farms" bg="#F5FAEF" label="2. Farms" title="Water for crops, without the diesel bill."
//         intro="A solar pump lifts water exactly when the sun is strongest and crops need it most. There is no fuel to buy and no waiting for grid power."
//         media={
//           <Media flip chip={['₹0', 'fuel cost to run the pump']}>
//             <img src={IMG.pump} alt="Solar panel powering a water pump that irrigates a green field" loading="lazy" className="block h-auto w-full" />
//           </Media>
//         }>
//         <div>
//           <p className="mb-3 font-semibold">How a solar pump works</p>
//           <Steps items={[
//             ['Panels power the motor', 'Sunlight becomes electricity that runs the pump directly.'],
//             ['Water reaches the field', 'It flows to channels, sprinklers or drip lines while the sun is up.'],
//             ['Extra water is stored', 'A tank holds the surplus for when the sun dips.'],
//           ]} />
//         </div>
//         <Ticks items={['Running costs fall because sunlight replaces diesel', 'Quieter pumping with no fumes in the field']} />
//       </Split>

//       <Split id="savings" bg="#E6F4DF" label="3. Savings" title="A decision you can check on paper."
//         intro="We start with the home's real electricity use, size solar and storage to match, then work through financing and payback so the numbers are clear before you commit."
//         media={
//           <Media max="max-w-[540px]" chip={['Up to 80%', 'lower electricity bills']}>
//             <img src={IMG.money} alt="Decision chain from load profile to solar, financing and returns" loading="lazy" className="block aspect-square w-full" />
//           </Media>
//         }>
//         <Steps items={[
//           ['Load profile', 'We read how much power the home really uses.'],
//           ['Solar + storage', 'Panels and battery are sized to match.'],
//           ['Financing', 'Subsidy and loan options are worked out where they apply.'],
//           ['Returns', 'Payback is shown on paper before you commit.'],
//         ]} />
//         <div>
//           <p className="mb-3 font-semibold">Your proposal includes</p>
//           <div className="grid gap-2 sm:grid-cols-2">
//             {['Usage analysis', 'Recommended system size', 'Cost breakdown', 'Payback estimate'].map((t) => (
//               <p key={t} className="flex items-center gap-2 text-[15px] text-[#10261B]/75"><Check size={15} style={{ color: LEAF }} strokeWidth={3} />{t}</p>
//             ))}
//           </div>
//         </div>
//       </Split>

//       <Split flip dark id="mobility" bg={DEEP} label="4. Mobility" title="Drive on sunshine."
//         intro="Panels charge a battery and the battery charges the car. A home charger or a solar carport can run with little or no grid power."
//         media={
//           <Media flip dark max="max-w-[440px]" chip={['0 g', 'tailpipe emissions']}>
//             <img src={IMG.ev} alt="Solar-powered EV charging station" loading="lazy" className="block aspect-[3/4] w-full object-cover" style={{ objectPosition: '50% 20%' }} />
//           </Media>
//         }>
//         <Ticks dark items={['Charges from your own roof', 'Battery covers evening and night charging', 'Less dependence on the grid and fuel']} />
//         <Facts dark items={[['0 g', 'tailpipe emissions'], ['Day + night', 'solar by day, battery by night'], ['Lower', 'cost per km than petrol or diesel']]} />
//       </Split>

//       <section className="px-5 py-20 text-center text-white md:px-8 md:py-24" style={{ background: `linear-gradient(135deg, ${LEAF}, ${DEEP})` }}>
//         <h2 className="fd mx-auto max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.1]">Ready to put the sun to work?</h2>
//         <p className="mx-auto mt-4 max-w-lg text-base text-white/85 md:text-lg">Tell us about your home, farm or business and we will show you what solar can do for it.</p>
//         <div className="mt-8 flex flex-wrap justify-center gap-3">
//           <a href="/contact" className="rounded-full px-7 py-3.5 text-sm font-semibold" style={{ background: MINT, color: DEEP }}>Talk to our team</a>
//           <a href="/solutions" className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold hover:bg-white hover:text-[#0F3D2A]">Explore solutions</a>
//         </div>
//       </section>
//     </main>
//   );
// }


// ImpactFour.tsx — Hero + five alternating split rows. Images are kept at/below their real
// resolution (no full-bleed stretching) and framed with offset plates + floating stat chips.
// Needs: framer-motion, lucide-react. Video + images imported from ../assets.
import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check, Leaf, Sprout, IndianRupee, CarFront, Play } from 'lucide-react';

// 👇 assets — imported so Vite/webpack bundles & hashes them
import impactFilm from '../assets/impactvideo.mp4';
import heroImg from '/images/sun-earth.png';
import splitImg from '/images/clean-vs-polluted.png';
import pumpImg from '/images/solar-pump.png';
import moneyImg from '/images/investment-case.png';
import evImg from '/images/ev-charging.png';

const DEEP = '#0F3D2A';
const LEAF = '#2E8B4F';
const MINT = '#A7E3B0';
const INK = '#10261B';

const VIDEO_SRC = impactFilm;
const IMG = {
  hero: heroImg,
  split: splitImg,
  pump: pumpImg,
  money: moneyImg,
  ev: evImg,
};

const TOPICS = [
  { id: 'environment', label: 'Environment', icon: Leaf },
  { id: 'farms', label: 'Farms', icon: Sprout },
  { id: 'savings', label: 'Savings', icon: IndianRupee },
  { id: 'mobility', label: 'Mobility', icon: CarFront },
];

const fade = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

/* ---------- building blocks ---------- */
function Steps({ items, dark }: { items: [string, string][]; dark?: boolean }) {
  return (
    <ol className="space-y-4">
      {items.map(([t, d], i) => (
        <li key={t} className="flex gap-4">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold"
            style={dark ? { background: MINT, color: DEEP } : { background: LEAF, color: '#fff' }}>{i + 1}</span>
          <div>
            <p className="font-semibold leading-snug">{t}</p>
            <p className={`mt-0.5 text-[15px] leading-relaxed ${dark ? 'text-white/70' : 'text-[#10261B]/65'}`}>{d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Ticks({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
            style={dark ? { background: MINT, color: DEEP } : { background: LEAF, color: '#fff' }}>
            <Check size={12} strokeWidth={3} />
          </span>
          <span className="text-[15px] leading-snug md:text-base">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Facts({ items, dark }: { items: [string, string][]; dark?: boolean }) {
  return (
    <dl className={`grid gap-5 border-t pt-5 sm:grid-cols-3 ${dark ? 'border-white/15' : 'border-[#10261B]/15'}`}>
      {items.map(([n, l]) => (
        <div key={n}>
          <dt className="fd text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-none" style={{ color: dark ? MINT : LEAF }}>{n}</dt>
          <dd className={`mt-2 text-sm leading-snug ${dark ? 'text-white/70' : 'text-[#10261B]/65'}`}>{l}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Media frame: offset colour plate behind, rounded image, floating stat chip. Capped width keeps images sharp. */
function Media({ children, chip, flip, dark, max = 'max-w-[600px]' }: {
  children: ReactNode; chip?: [string, string]; flip?: boolean; dark?: boolean; max?: string;
}) {
  return (
    <div className={`relative mx-auto w-full ${max} pb-6`}>
      <div aria-hidden className={`absolute inset-0 rounded-[2rem] ${flip ? '-translate-x-4' : 'translate-x-4'} translate-y-4`}
        style={{ background: dark ? 'rgba(167,227,176,.16)' : 'rgba(46,139,79,.18)' }} />
      <div className="relative overflow-hidden rounded-[2rem] shadow-xl ring-4 ring-white/80">{children}</div>
      {chip && (
        <div className={`absolute -bottom-1 rounded-2xl bg-white px-5 py-3 text-[#10261B] shadow-xl ${flip ? 'right-3 md:-right-5' : 'left-3 md:-left-5'}`}>
          <p className="fd text-xl font-semibold leading-none" style={{ color: LEAF }}>{chip[0]}</p>
          <p className="mt-1 text-xs text-[#10261B]/70">{chip[1]}</p>
        </div>
      )}
    </div>
  );
}

/** One row: text on one side, media on the other. flip = media on the left. */
function Split({ id, label, title, intro, media, flip, bg, dark, children }: {
  id: string; label: string; title: string; intro: string; media: ReactNode;
  flip?: boolean; bg: string; dark?: boolean; children?: ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-16 md:px-8 md:py-24" style={{ background: bg, color: dark ? '#fff' : INK }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div {...fade} className={flip ? 'md:order-2' : ''}>
          <p className="text-sm font-semibold" style={{ color: dark ? MINT : LEAF }}>{label}</p>
          <h2 className="fd mt-2 text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-[1.12]">{title}</h2>
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-white/80' : 'text-[#10261B]/75'}`}>{intro}</p>
          <div className="mt-7 space-y-7">{children}</div>
        </motion.div>
        <motion.div {...fade} className={flip ? 'md:order-1' : ''}>{media}</motion.div>
      </div>
    </section>
  );
}

/* ---------- hero (split, so no image is stretched full-screen) ---------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white" style={{ background: DEEP }}>
      <div aria-hidden className="absolute -right-40 top-10 -z-10 h-[620px] w-[620px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(167,227,176,.45), transparent 65%)' }} />
      <div className="mx-auto grid min-h-[92svh] max-w-6xl items-center gap-12 px-5 pb-28 pt-36 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-8">
        <div>
          <p className="text-sm font-semibold" style={{ color: MINT }}>Our impact</p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="fd mt-3 text-[clamp(2.4rem,5.2vw,4.4rem)] font-semibold leading-[1.05]">
            The same sun shines on every village.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            See how sunlight becomes power for homes, farms and vehicles, and what that changes for the people who use it.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#video" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold" style={{ background: MINT, color: DEEP }}>
              <Play size={15} fill="currentColor" /> Watch how it works
            </a>
            <a href="#environment" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-[#0F3D2A]">
              See the impact <ArrowDown size={15} />
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[['5–6 hrs', 'strong sun every day'], ['Up to 80%', 'lower bills'], ['25 years', 'panel warranty']].map(([n, l]) => (
              <div key={n}>
                <dt className="fd text-2xl font-semibold" style={{ color: MINT }}>{n}</dt>
                <dd className="mt-0.5 text-sm text-white/70">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Round image with slowly turning sun ring */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-7 rounded-full border-2 border-dashed" style={{ borderColor: 'rgba(167,227,176,.45)' }} />
          <div aria-hidden className="absolute -inset-3 rounded-full" style={{ background: 'rgba(167,227,176,.12)' }} />
          <motion.img src={IMG.hero} alt="Sun, Earth and solar panels" fetchPriority="high"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="relative aspect-square w-full rounded-full object-cover ring-4 ring-white/70" />
          <div className="absolute -left-2 bottom-8 rounded-2xl bg-white px-4 py-2.5 text-[#10261B] shadow-xl md:-left-8">
            <p className="fd text-lg font-semibold leading-none" style={{ color: LEAF }}>Free</p>
            <p className="mt-1 text-xs text-[#10261B]/70">energy from the sun</p>
          </div>
        </div>
      </div>

      <nav aria-label="Topics" className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#0F3D2A]/70 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl justify-between gap-6 overflow-x-auto px-5 py-4 text-sm font-medium md:px-8">
          {TOPICS.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a href={`#${id}`} className="flex items-center gap-2 whitespace-nowrap text-white/80 hover:text-white">
                <Icon size={16} style={{ color: MINT }} /> {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

/* ---------- video player ---------- */
function Player({ src = VIDEO_SRC, poster = IMG.hero }: { src?: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-video bg-black">
      {playing && !failed ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <img src={poster} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#0F3D2A]/40" />
          <button type="button" onClick={() => { setFailed(false); setPlaying(true); }} aria-label="Play video"
            className="group absolute inset-0 grid place-items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-white">
            <span className="relative grid h-20 w-20 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110" style={{ background: MINT, color: DEEP }}>
              <span className="absolute inset-0 animate-ping rounded-full opacity-40" style={{ background: MINT }} />
              <Play size={30} fill="currentColor" className="relative" />
            </span>
          </button>
          {failed && <p className="absolute inset-x-0 bottom-3 text-center text-sm text-white">Could not load the video. Check the file at src/assets/impact-film.mp4.</p>}
        </>
      )}
    </div>
  );
}

/* ---------- page ---------- */
export default function ImpactFour() {
  return (
    <main className="relative font-['Instrument_Sans',sans-serif]" style={{ color: INK }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Instrument+Sans:wght@400;500;600&display=swap');
        .fd{font-family:'Fraunces',serif;letter-spacing:-0.01em}`}</style>

      <Hero />

      <Split id="video" bg="#F5FAEF" label="Video explainer" title="Watch how sunlight becomes village power."
        intro="A short walk through the whole journey, from the first ray of light on a rooftop to a charged battery and a running water pump."
        media={<Media max="max-w-[660px]" chip={['Start to finish', 'the whole journey']}><Player /></Media>}>
        <Steps items={[
          ['Sunlight reaches the panels', 'Panels on roofs and open land turn light into DC electricity.'],
          ['Power is cleaned, stored and shared', 'An inverter makes it usable AC, batteries hold the extra, and the rest can flow to the grid.'],
          ['Homes, farms and vehicles run on it', 'Lights, pumps, appliances and EV chargers all draw from the same clean source.'],
        ]} />
      </Split>

      <Split id="environment" bg="#E6F4DF" label="1. Environment" title="Cleaner air in every direction."
        intro="Every home that makes its own power means less coal and diesel burned nearby. On the left of this picture is the future we are leaving behind. On the right is where solar leads."
        media={
          <Media chip={['1.2 t', 'CO₂ avoided per year, per 3 kW home']}>
            <div className="relative">
              <img src={IMG.split} alt="A polluted city on the left and a solar-powered green city on the right" className="block h-auto w-full" />
              <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">Fossil fuels</span>
              <span className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: LEAF }}>With solar</span>
            </div>
          </Media>
        }>
        <Ticks items={['Less smoke and fewer particles in the air', 'Quieter neighbourhoods with no generators running', 'Local jobs in installation and maintenance']} />
        <div>
          <Facts items={[['1.2 t', 'CO₂ avoided each year by a 3 kW home'], ['0', 'fuel burned while generating'], ['25 yrs', 'of clean output per installation']]} />
          <p className="mt-3 text-xs text-[#10261B]/55">Typical estimates. Actual results depend on roof, usage and local tariffs.</p>
        </div>
      </Split>

      <Split flip id="farms" bg="#F5FAEF" label="2. Farms" title="Water for crops, without the diesel bill."
        intro="A solar pump lifts water exactly when the sun is strongest and crops need it most. There is no fuel to buy and no waiting for grid power."
        media={
          <Media flip chip={['₹0', 'fuel cost to run the pump']}>
            <img src={IMG.pump} alt="Solar panel powering a water pump that irrigates a green field" loading="lazy" className="block h-auto w-full" />
          </Media>
        }>
        <div>
          <p className="mb-3 font-semibold">How a solar pump works</p>
          <Steps items={[
            ['Panels power the motor', 'Sunlight becomes electricity that runs the pump directly.'],
            ['Water reaches the field', 'It flows to channels, sprinklers or drip lines while the sun is up.'],
            ['Extra water is stored', 'A tank holds the surplus for when the sun dips.'],
          ]} />
        </div>
        <Ticks items={['Running costs fall because sunlight replaces diesel', 'Quieter pumping with no fumes in the field']} />
      </Split>

      <Split id="savings" bg="#E6F4DF" label="3. Savings" title="A decision you can check on paper."
        intro="We start with the home's real electricity use, size solar and storage to match, then work through financing and payback so the numbers are clear before you commit."
        media={
          <Media max="max-w-[540px]" chip={['Up to 80%', 'lower electricity bills']}>
            <img src={IMG.money} alt="Decision chain from load profile to solar, financing and returns" loading="lazy" className="block aspect-square w-full" />
          </Media>
        }>
        <Steps items={[
          ['Load profile', 'We read how much power the home really uses.'],
          ['Solar + storage', 'Panels and battery are sized to match.'],
          ['Financing', 'Subsidy and loan options are worked out where they apply.'],
          ['Returns', 'Payback is shown on paper before you commit.'],
        ]} />
        <div>
          <p className="mb-3 font-semibold">Your proposal includes</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {['Usage analysis', 'Recommended system size', 'Cost breakdown', 'Payback estimate'].map((t) => (
              <p key={t} className="flex items-center gap-2 text-[15px] text-[#10261B]/75"><Check size={15} style={{ color: LEAF }} strokeWidth={3} />{t}</p>
            ))}
          </div>
        </div>
      </Split>

      <Split flip dark id="mobility" bg={DEEP} label="4. Mobility" title="Drive on sunshine."
        intro="Panels charge a battery and the battery charges the car. A home charger or a solar carport can run with little or no grid power."
        media={
          <Media flip dark max="max-w-[440px]" chip={['0 g', 'tailpipe emissions']}>
            <img src={IMG.ev} alt="Solar-powered EV charging station" loading="lazy" className="block aspect-[3/4] w-full object-cover" style={{ objectPosition: '50% 20%' }} />
          </Media>
        }>
        <Ticks dark items={['Charges from your own roof', 'Battery covers evening and night charging', 'Less dependence on the grid and fuel']} />
        <Facts dark items={[['0 g', 'tailpipe emissions'], ['Day + night', 'solar by day, battery by night'], ['Lower', 'cost per km than petrol or diesel']]} />
      </Split>

      <section className="px-5 py-20 text-center text-white md:px-8 md:py-24" style={{ background: `linear-gradient(135deg, ${LEAF}, ${DEEP})` }}>
        <h2 className="fd mx-auto max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.1]">Ready to put the sun to work?</h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/85 md:text-lg">Tell us about your home, farm or business and we will show you what solar can do for it.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/contact" className="rounded-full px-7 py-3.5 text-sm font-semibold" style={{ background: MINT, color: DEEP }}>Talk to our team</a>
          <a href="/solutions" className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold hover:bg-white hover:text-[#0F3D2A]">Explore solutions</a>
        </div>
      </section>
    </main>
  );
}