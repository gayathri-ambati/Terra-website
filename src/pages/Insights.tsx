// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Clock } from 'lucide-react';
// import { articles } from '@/lib/content';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';
// import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

// const CATEGORIES = ['All', 'Energy', 'Engineering', 'Agriculture', 'Sustainability'];

// export function InsightsPage() {
//   const [cat, setCat] = useState('All');
//   const filtered = articles.filter((a) => cat === 'All' || a.category === cat);
//   const featured = filtered[0];

//   return (
//     <main>
//       <section className="bg-ivory pb-10 pt-36 md:pb-16 md:pt-44">
//         <div className="shell">
//           <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
//             <span className="h-px w-10 bg-forest-600" /> Insights
//           </p>
//           <MaskedLines
//             lines={['Field notes from', 'the work itself.']}
//             className="headline-xl max-w-5xl text-forest-800"
//             startDelay={120}
//           />
//           <Reveal delay={300}>
//             <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/75">
//               Perspectives on energy, engineering, agriculture and sustainability — written by the people doing the work.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-ivory py-10 md:py-14">
//         <div className="shell">
//           <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles">
//             {CATEGORIES.map((c) => (
//               <button
//                 key={c}
//                 role="tab"
//                 aria-selected={cat === c}
//                 onClick={() => setCat(c)}
//                 className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
//                   cat === c ? 'bg-forest-800 text-ivory' : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           {featured && (
//             <Reveal className="mt-12">
//               <article className="group grid overflow-hidden rounded-sm bg-linen lg:grid-cols-2">
//                 <ClipReveal className="relative min-h-[280px]">
//                   <SceneCanvas variant={featured.category === 'Agriculture' ? 'agri' : 'energy'} />
//                 </ClipReveal>
//                 <div className="flex flex-col justify-center p-10 md:p-14">
//                   <div className="flex items-center gap-4 font-body text-xs text-charcoal/60">
//                     <span className="label-caps text-forest-600">{featured.category}</span>
//                     <span>{featured.date}</span>
//                     <span className="flex items-center gap-1">
//                       <Clock size={12} /> {featured.read}
//                     </span>
//                   </div>
//                   <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-forest-800 md:text-4xl">
//                     {featured.title}
//                   </h2>
//                   <p className="mt-4 font-body text-base leading-relaxed text-charcoal/75">{featured.excerpt}</p>
//                   <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest-800">
//                     Read the article
//                     <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                   </span>
//                 </div>
//               </article>
//             </Reveal>
//           )}

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {filtered.slice(1).map((a, i) => (
//               <Reveal key={a.slug} delay={i * 100}>
//                 <article className="group flex h-full flex-col justify-between rounded-sm border border-forest-800/10 bg-ivory p-8 transition-all hover:border-forest-800/30 hover:shadow-lg hover:shadow-forest-900/5">
//                   <div>
//                     <div className="flex items-center gap-3 font-body text-xs text-charcoal/60">
//                       <span className="label-caps text-forest-600">{a.category}</span>
//                       <span>{a.date}</span>
//                     </div>
//                     <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-forest-800">{a.title}</h3>
//                     <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{a.excerpt}</p>
//                   </div>
//                   <div className="mt-6 flex items-center justify-between border-t border-forest-800/10 pt-4">
//                     <span className="flex items-center gap-1 font-body text-xs text-charcoal/50">
//                       <Clock size={12} /> {a.read}
//                     </span>
//                     <ArrowRight size={16} className="text-forest-800 transition-transform group-hover:translate-x-1" />
//                   </div>
//                 </article>
//               </Reveal>
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <p className="mt-16 font-body text-base text-charcoal/60">No articles in this category yet.</p>
//           )}
//         </div>
//       </section>

//       <ClosingCta title={['Ideas into', 'practice.']} to="/contact" cta="Get in touch" />
//       <div className="hidden">
//         <Link to="/contact">Contact</Link>
//       </div>
//     </main>
//   );
// }




// import { useMemo, useState } from 'react';
// import { ArrowRight, Clock, Plus, Sun, Zap, Leaf, Wallet } from 'lucide-react';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';
// import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

// /* ------------------------------------------------------------------ */
// /* Content — move this block into '@/lib/content' if you prefer.       */
// /* ------------------------------------------------------------------ */

// type Article = {
//   slug: string;
//   category: string;
//   title: string;
//   excerpt: string;
//   date: string;
//   read: string;
// };

// const CATEGORIES = ['All', 'Solar PV', 'Storage', 'Agrivoltaics', 'Finance & Policy', 'Operations'];

// const solarArticles: Article[] = [
//   {
//     slug: 'sizing-a-rooftop-system',
//     category: 'Solar PV',
//     title: 'How to size a rooftop solar system without overbuilding',
//     excerpt:
//       'Start with 12 months of bills, not the roof. We walk through load profiles, shading and tilt so the system you install matches what you actually use.',
//     date: 'Nov 18, 2026',
//     read: '8 min read',
//   },
//   {
//     slug: 'solar-plus-storage',
//     category: 'Storage',
//     title: 'Solar plus storage: when a battery pays for itself',
//     excerpt:
//       'Batteries make sense for evening peaks, outage-prone sites and time-of-day tariffs. Here is a simple test to see whether yours is one of them.',
//     date: 'Nov 06, 2026',
//     read: '6 min read',
//   },
//   {
//     slug: 'agrivoltaics-explained',
//     category: 'Agrivoltaics',
//     title: 'Farming under panels: what agrivoltaics gets right',
//     excerpt:
//       'Raised structures, partial shade and shared land use. Which crops cope well, what it does to water demand, and how layouts change for machinery.',
//     date: 'Oct 28, 2026',
//     read: '9 min read',
//   },
//   {
//     slug: 'solar-pumping-for-farms',
//     category: 'Agrivoltaics',
//     title: 'Replacing diesel pumps with solar: a field-level view',
//     excerpt:
//       'Pump sizing, daytime irrigation scheduling and what to do on cloudy days. Practical notes from replacing diesel on working farms.',
//     date: 'Oct 15, 2026',
//     read: '5 min read',
//   },
//   {
//     slug: 'reading-a-solar-proposal',
//     category: 'Finance & Policy',
//     title: 'Reading a solar proposal: ten numbers that matter',
//     excerpt:
//       'Panel wattage and brand are the easy part. Degradation, performance ratio, tariff escalation and warranty terms decide your real return.',
//     date: 'Oct 02, 2026',
//     read: '7 min read',
//   },
//   {
//     slug: 'net-metering-basics',
//     category: 'Finance & Policy',
//     title: 'Net metering, in plain language',
//     excerpt:
//       'How exported power is credited, what changes between residential and commercial connections, and the paperwork to expect with your utility.',
//     date: 'Sep 20, 2026',
//     read: '5 min read',
//   },
//   {
//     slug: 'cleaning-and-monitoring',
//     category: 'Operations',
//     title: 'Dust, heat and soiling: keeping output high year-round',
//     excerpt:
//       'A dirty array can lose a meaningful share of its output. How to set a cleaning schedule from monitoring data instead of guesswork.',
//     date: 'Sep 09, 2026',
//     read: '6 min read',
//   },
//   {
//     slug: 'inverter-health',
//     category: 'Operations',
//     title: 'Five inverter alerts you should never ignore',
//     excerpt:
//       'Ground faults, string mismatches and repeated restarts usually show up in data long before a failure. What to check and when to call an engineer.',
//     date: 'Aug 27, 2026',
//     read: '4 min read',
//   },
// ];

// const STATS = [
//   { icon: Sun, value: '1 hour', label: 'of sunlight on Earth carries about as much energy as the world uses in a year' },
//   { icon: Wallet, value: '~90%', label: 'fall in solar module prices over the last decade' },
//   { icon: Leaf, value: '25–30 yrs', label: 'typical working life of a quality solar panel' },
//   { icon: Zap, value: '100+ GW', label: 'of solar capacity now installed across India' },
// ];

// const FAQ = [
//   {
//     q: 'How much roof space does 1 kW of solar need?',
//     a: 'As a rule of thumb, about 8 to 10 square metres of shadow-free roof per kilowatt with modern panels. Tilt, spacing and walkways change the exact figure.',
//   },
//   {
//     q: 'Does solar work on cloudy or hazy days?',
//     a: 'Yes, at lower output. Panels still generate from diffuse light, often at a fraction of clear-day levels. Annual yield estimates already account for typical weather.',
//   },
//   {
//     q: 'What does a solar system cost to maintain?',
//     a: 'Mostly periodic cleaning, a visual check of wiring and mounts, and monitoring. Inverters are the main component that may need replacing within the panel lifetime.',
//   },
//   {
//     q: 'Should I add a battery from day one?',
//     a: 'Not always. If your power use is mainly in the daytime and the grid is reliable, grid-tied solar alone is simpler. Batteries help with evening peaks and outages.',
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* Small pieces                                                        */
// /* ------------------------------------------------------------------ */

// const AMBER = '#E8A317';

// /** A clear-day generation curve: the characteristic shape of solar. */
// function DayCurve() {
//   return (
//     <figure className="relative overflow-hidden rounded-sm bg-forest-800 p-6 text-ivory md:p-8">
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-60 blur-2xl"
//         style={{ background: `radial-gradient(circle, ${AMBER}aa 0%, transparent 65%)` }}
//       />
//       <figcaption className="relative font-body text-sm text-ivory/70">
//         Typical output of a rooftop array on a clear day
//       </figcaption>
//       <svg viewBox="0 0 400 190" className="relative mt-4 w-full" role="img" aria-label="Solar output rises from sunrise, peaks at midday and falls to zero at sunset">
//         <defs>
//           <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
//             <stop offset="0%" stopColor={AMBER} stopOpacity="0.55" />
//             <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
//           </linearGradient>
//         </defs>
//         {[40, 80, 120].map((y) => (
//           <line key={y} x1="20" x2="380" y1={y} y2={y} stroke="#F7F3EA" strokeOpacity="0.1" />
//         ))}
//         <path d="M20 150 C 90 150, 120 30, 200 30 S 310 150, 380 150 L380 150 L20 150 Z" fill="url(#curveFill)" />
//         <path d="M20 150 C 90 150, 120 30, 200 30 S 310 150, 380 150" fill="none" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="20" x2="380" y1="150" y2="150" stroke="#F7F3EA" strokeOpacity="0.35" />
//         <circle cx="200" cy="30" r="7" fill={AMBER} />
//         <circle cx="200" cy="30" r="14" fill="none" stroke={AMBER} strokeOpacity="0.4" />
//         <g fill="#F7F3EA" fillOpacity="0.7" fontSize="11" fontFamily="inherit">
//           <text x="20" y="172">6 am</text>
//           <text x="186" y="172">12 pm</text>
//           <text x="352" y="172">6 pm</text>
//           <text x="214" y="26">Peak</text>
//         </g>
//       </svg>
//     </figure>
//   );
// }

// function FaqItem({ q, a }: { q: string; a: string }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-forest-800/15">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         aria-expanded={open}
//         className="flex w-full items-center justify-between gap-6 py-6 text-left"
//       >
//         <span className="font-display text-xl font-medium text-forest-800 md:text-2xl">{q}</span>
//         <Plus
//           size={20}
//           className={`shrink-0 text-forest-800 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
//         />
//       </button>
//       <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
//         <p className="overflow-hidden font-body text-base leading-relaxed text-charcoal/75">{a}</p>
//       </div>
//     </div>
//   );
// }

// function Newsletter() {
//   const [email, setEmail] = useState('');
//   const [done, setDone] = useState(false);

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!/^\S+@\S+\.\S+$/.test(email)) return;
//     // TODO: send `email` to your newsletter provider here.
//     setDone(true);
//   };

//   return (
//     <div className="grid items-center gap-8 rounded-sm bg-forest-800 p-10 text-ivory md:grid-cols-2 md:p-14">
//       <div>
//         <h3 className="font-display text-3xl font-medium leading-snug md:text-4xl">
//           One solar note, once a month.
//         </h3>
//         <p className="mt-3 max-w-md font-body text-base leading-relaxed text-ivory/70">
//           New articles, tariff changes and field lessons. No promotions, and you can leave any time.
//         </p>
//       </div>
//       {done ? (
//         <p className="font-heading text-lg font-semibold" style={{ color: AMBER }} role="status">
//           You are on the list. Watch your inbox for the next note.
//         </p>
//       ) : (
//         <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
//           <label htmlFor="nl-email" className="sr-only">Email address</label>
//           <input
//             id="nl-email"
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@company.com"
//             className="w-full rounded-full border border-ivory/25 bg-transparent px-6 py-3.5 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-ivory focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="shrink-0 rounded-full px-7 py-3.5 font-heading text-sm font-semibold text-forest-900 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
//             style={{ background: AMBER }}
//           >
//             Subscribe
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* Page                                                                */
// /* ------------------------------------------------------------------ */

// export function InsightsPage() {
//   const [cat, setCat] = useState('All');

//   const filtered = useMemo(
//     () => solarArticles.filter((a) => cat === 'All' || a.category === cat),
//     [cat]
//   );
//   const featured = filtered[0];
//   const rest = filtered.slice(1);

//   return (
//     <main>
//       {/* Hero */}
//       <section className="bg-ivory pb-14 pt-36 md:pb-20 md:pt-44">
//         <div className="shell grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
//           <div>
//             <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
//               <span className="h-px w-10 bg-forest-600" /> Insights
//             </p>
//             <MaskedLines
//               lines={['Field notes from', 'the solar frontier.']}
//               className="headline-xl max-w-3xl text-forest-800"
//               startDelay={120}
//             />
//             <Reveal delay={300}>
//               <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/75">
//                 Practical guides on rooftop solar, storage, solar pumping and agrivoltaics, written by the engineers who
//                 design, install and run the systems.
//               </p>
//             </Reveal>
//           </div>
//           <Reveal delay={450}>
//             <DayCurve />
//           </Reveal>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="border-y border-forest-800/10 bg-linen">
//         <div className="shell grid gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
//           {STATS.map(({ icon: Icon, value, label }) => (
//             <div key={value} className="flex gap-4 px-2 py-8 lg:px-6">
//               <Icon size={22} className="mt-1 shrink-0" style={{ color: AMBER }} aria-hidden />
//               <div>
//                 <p className="font-display text-3xl font-medium text-forest-800">{value}</p>
//                 <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Articles */}
//       <section className="bg-ivory py-14 md:py-20">
//         <div className="shell">
//           <div className="flex flex-wrap items-end justify-between gap-6">
//             <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles">
//               {CATEGORIES.map((c) => (
//                 <button
//                   key={c}
//                   role="tab"
//                   aria-selected={cat === c}
//                   onClick={() => setCat(c)}
//                   className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800 ${
//                     cat === c
//                       ? 'bg-forest-800 text-ivory'
//                       : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
//                   }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//             <p className="font-body text-sm text-charcoal/60" aria-live="polite">
//               {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
//             </p>
//           </div>

//           {featured && (
//             <Reveal className="mt-12" key={featured.slug}>
//               <article className="group grid cursor-pointer overflow-hidden rounded-sm bg-linen lg:grid-cols-2">
//                 <ClipReveal className="relative min-h-[300px]">
//                   <SceneCanvas variant={featured.category === 'Agrivoltaics' ? 'agri' : 'energy'} />
//                   <span
//                     className="absolute left-5 top-5 rounded-full px-4 py-1.5 font-heading text-xs font-semibold text-forest-900"
//                     style={{ background: AMBER }}
//                   >
//                     Featured
//                   </span>
//                 </ClipReveal>
//                 <div className="flex flex-col justify-center p-10 md:p-14">
//                   <div className="flex flex-wrap items-center gap-4 font-body text-xs text-charcoal/60">
//                     <span className="label-caps text-forest-600">{featured.category}</span>
//                     <span>{featured.date}</span>
//                     <span className="flex items-center gap-1">
//                       <Clock size={12} /> {featured.read}
//                     </span>
//                   </div>
//                   <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-forest-800 md:text-4xl">
//                     {featured.title}
//                   </h2>
//                   <p className="mt-4 max-w-prose font-body text-base leading-relaxed text-charcoal/75">
//                     {featured.excerpt}
//                   </p>
//                   <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest-800">
//                     Read the article
//                     <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                   </span>
//                 </div>
//               </article>
//             </Reveal>
//           )}

//           <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {rest.map((a, i) => (
//               <Reveal key={a.slug} delay={(i % 3) * 100}>
//                 <article className="group flex h-full cursor-pointer flex-col justify-between rounded-sm border border-forest-800/10 bg-ivory p-8 transition-all hover:-translate-y-1 hover:border-forest-800/30 hover:shadow-lg hover:shadow-forest-900/5">
//                   <div>
//                     <div className="flex items-center gap-3 font-body text-xs text-charcoal/60">
//                       <span className="label-caps text-forest-600">{a.category}</span>
//                       <span>{a.date}</span>
//                     </div>
//                     <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-forest-800">{a.title}</h3>
//                     <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{a.excerpt}</p>
//                   </div>
//                   <div className="mt-6 flex items-center justify-between border-t border-forest-800/10 pt-4">
//                     <span className="flex items-center gap-1 font-body text-xs text-charcoal/50">
//                       <Clock size={12} /> {a.read}
//                     </span>
//                     <ArrowRight size={16} className="text-forest-800 transition-transform group-hover:translate-x-1" />
//                   </div>
//                 </article>
//               </Reveal>
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <p className="mt-16 font-body text-base text-charcoal/60">No articles in this category yet.</p>
//           )}
//         </div>
//       </section>

//       {/* Quick answers */}
//       <section className="bg-linen py-16 md:py-24">
//         <div className="shell grid gap-12 lg:grid-cols-[1fr_1.6fr]">
//           <div>
//             <p className="label-caps mb-5 flex items-center gap-3 text-forest-600">
//               <span className="h-px w-10 bg-forest-600" /> Quick answers
//             </p>
//             <h2 className="font-display text-4xl font-medium leading-tight text-forest-800 md:text-5xl">
//               Solar questions we hear most.
//             </h2>
//             <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-charcoal/70">
//               Short, honest answers. For your site, we can size a system from your bills and roof.
//             </p>
//           </div>
//           <div className="border-t border-forest-800/15">
//             {FAQ.map((f) => (
//               <FaqItem key={f.q} {...f} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="bg-ivory py-16 md:py-24">
//         <div className="shell">
//           <Newsletter />
//         </div>
//       </section>

//       <ClosingCta title={['Turn sunlight into', 'savings.']} to="/contact" cta="Get a solar estimate" />
//     </main>
//   );
// }




import { useMemo, useState } from 'react';
import { ArrowRight, Clock, Plus, Sun, Zap, Leaf, Wallet } from 'lucide-react';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas'; // Removed as it's replaced by images
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

/* ------------------------------------------------------------------ */
/* Content — move this block into '@/lib/content' if you prefer.       */
/* ------------------------------------------------------------------ */

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  image: string; // Added image field
};

const CATEGORIES = ['All', 'Solar PV', 'Storage', 'Agrivoltaics', 'Finance & Policy', 'Operations'];

const solarArticles: Article[] = [
  {
    slug: 'sizing-a-rooftop-system',
    category: 'Solar PV',
    title: 'How to size a rooftop solar system without overbuilding',
    excerpt:
      'Start with 12 months of bills, not the roof. We walk through load profiles, shading and tilt so the system you install matches what you actually use.',
    date: 'Nov 18, 2026',
    read: '8 min read',
    // Replace with your actual image URL
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop', 
  },
  {
    slug: 'solar-plus-storage',
    category: 'Storage',
    title: 'Solar plus storage: when a battery pays for itself',
    excerpt:
      'Batteries make sense for evening peaks, outage-prone sites and time-of-day tariffs. Here is a simple test to see whether yours is one of them.',
    date: 'Nov 06, 2026',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'agrivoltaics-explained',
    category: 'Agrivoltaics',
    title: 'Farming under panels: what agrivoltaics gets right',
    excerpt:
      'Raised structures, partial shade and shared land use. Which crops cope well, what it does to water demand, and how layouts change for machinery.',
    date: 'Oct 28, 2026',
    read: '9 min read',
    image: 'https://i.pinimg.com/236x/a8/15/c6/a815c64f6b336fcedf4c4ece050af35a.jpg',
  },
  {
    slug: 'solar-pumping-for-farms',
    category: 'Agrivoltaics',
    title: 'Replacing diesel pumps with solar: a field-level view',
    excerpt:
      'Pump sizing, daytime irrigation scheduling and what to do on cloudy days. Practical notes from replacing diesel on working farms.',
    date: 'Oct 15, 2026',
    read: '5 min read',
    image: 'https://i.pinimg.com/736x/4b/8b/c9/4b8bc958f25bd0148c1a62c85932e4bf.jpg',
  },
  {
    slug: 'reading-a-solar-proposal',
    category: 'Finance & Policy',
    title: 'Reading a solar proposal: ten numbers that matter',
    excerpt:
      'Panel wattage and brand are the easy part. Degradation, performance ratio, tariff escalation and warranty terms decide your real return.',
    date: 'Oct 02, 2026',
    read: '7 min read',
    image: 'https://i.pinimg.com/736x/29/e7/3d/29e73d2e7f5b435fdc6c787558801c01.jpg',
  },
  {
    slug: 'net-metering-basics',
    category: 'Finance & Policy',
    title: 'Net metering, in plain language',
    excerpt:
      'How exported power is credited, what changes between residential and commercial connections, and the paperwork to expect with your utility.',
    date: 'Sep 20, 2026',
    read: '5 min read',
    image: 'https://i.pinimg.com/736x/29/e7/3d/29e73d2e7f5b435fdc6c787558801c01.jpg',
  },
  {
    slug: 'cleaning-and-monitoring',
    category: 'Operations',
    title: 'Dust, heat and soiling: keeping output high year-round',
    excerpt:
      'A dirty array can lose a meaningful share of its output. How to set a cleaning schedule from monitoring data instead of guesswork.',
    date: 'Sep 09, 2026',
    read: '6 min read',
    image: 'https://i.pinimg.com/1200x/c5/6a/ba/c56aba23a24bcf61342b706a86091642.jpg',
  },
  {
    slug: 'inverter-health',
    category: 'Operations',
    title: 'Five inverter alerts you should never ignore',
    excerpt:
      'Ground faults, string mismatches and repeated restarts usually show up in data long before a failure. What to check and when to call an engineer.',
    date: 'Aug 27, 2026',
    read: '4 min read',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000&auto=format&fit=crop',
  },
];

const STATS = [
  { icon: Sun, value: '1 hour', label: 'of sunlight on Earth carries about as much energy as the world uses in a year' },
  { icon: Wallet, value: '~90%', label: 'fall in solar module prices over the last decade' },
  { icon: Leaf, value: '25–30 yrs', label: 'typical working life of a quality solar panel' },
  { icon: Zap, value: '100+ GW', label: 'of solar capacity now installed across India' },
];

const FAQ = [
  {
    q: 'How much roof space does 1 kW of solar need?',
    a: 'As a rule of thumb, about 8 to 10 square metres of shadow-free roof per kilowatt with modern panels. Tilt, spacing and walkways change the exact figure.',
  },
  {
    q: 'Does solar work on cloudy or hazy days?',
    a: 'Yes, at lower output. Panels still generate from diffuse light, often at a fraction of clear-day levels. Annual yield estimates already account for typical weather.',
  },
  {
    q: 'What does a solar system cost to maintain?',
    a: 'Mostly periodic cleaning, a visual check of wiring and mounts, and monitoring. Inverters are the main component that may need replacing within the panel lifetime.',
  },
  {
    q: 'Should I add a battery from day one?',
    a: 'Not always. If your power use is mainly in the daytime and the grid is reliable, grid-tied solar alone is simpler. Batteries help with evening peaks and outages.',
  },
];

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

const AMBER = '#E8A317';

/** A clear-day generation curve: the characteristic shape of solar. */
function DayCurve() {
  return (
    <figure className="relative overflow-hidden rounded-sm bg-forest-800 p-6 text-ivory md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-60 blur-2xl"
        style={{ background: `radial-gradient(circle, ${AMBER}aa 0%, transparent 65%)` }}
      />
      <figcaption className="relative font-body text-sm text-ivory/70">
        Typical output of a rooftop array on a clear day
      </figcaption>
      <svg viewBox="0 0 400 190" className="relative mt-4 w-full" role="img" aria-label="Solar output rises from sunrise, peaks at midday and falls to zero at sunset">
        <defs>
          <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={AMBER} stopOpacity="0.55" />
            <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 80, 120].map((y) => (
          <line key={y} x1="20" x2="380" y1={y} y2={y} stroke="#F7F3EA" strokeOpacity="0.1" />
        ))}
        <path d="M20 150 C 90 150, 120 30, 200 30 S 310 150, 380 150 L380 150 L20 150 Z" fill="url(#curveFill)" />
        <path d="M20 150 C 90 150, 120 30, 200 30 S 310 150, 380 150" fill="none" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" x2="380" y1="150" y2="150" stroke="#F7F3EA" strokeOpacity="0.35" />
        <circle cx="200" cy="30" r="7" fill={AMBER} />
        <circle cx="200" cy="30" r="14" fill="none" stroke={AMBER} strokeOpacity="0.4" />
        <g fill="#F7F3EA" fillOpacity="0.7" fontSize="11" fontFamily="inherit">
          <text x="20" y="172">6 am</text>
          <text x="186" y="172">12 pm</text>
          <text x="352" y="172">6 pm</text>
          <text x="214" y="26">Peak</text>
        </g>
      </svg>
    </figure>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest-800/15">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-xl font-medium text-forest-800 md:text-2xl">{q}</span>
        <Plus
          size={20}
          className={`shrink-0 text-forest-800 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden font-body text-base leading-relaxed text-charcoal/75">{a}</p>
      </div>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    // TODO: send `email` to your newsletter provider here.
    setDone(true);
  };

  return (
    <div className="grid items-center gap-8 rounded-sm bg-forest-800 p-10 text-ivory md:grid-cols-2 md:p-14">
      <div>
        <h3 className="font-display text-3xl font-medium leading-snug md:text-4xl">
          One solar note, once a month.
        </h3>
        <p className="mt-3 max-w-md font-body text-base leading-relaxed text-ivory/70">
          New articles, tariff changes and field lessons. No promotions, and you can leave any time.
        </p>
      </div>
      {done ? (
        <p className="font-heading text-lg font-semibold" style={{ color: AMBER }} role="status">
          You are on the list. Watch your inbox for the next note.
        </p>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-full border border-ivory/25 bg-transparent px-6 py-3.5 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-ivory focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full px-7 py-3.5 font-heading text-sm font-semibold text-forest-900 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
            style={{ background: AMBER }}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function InsightsPage() {
  const [cat, setCat] = useState('All');

  const filtered = useMemo(
    () => solarArticles.filter((a) => cat === 'All' || a.category === cat),
    [cat]
  );
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main>
      {/* Hero */}
      <section className="bg-ivory pb-14 pt-36 md:pb-20 md:pt-44">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-forest-600" /> Insights
            </p>
            <MaskedLines
              lines={['Field notes from', 'the solar frontier.']}
              className="headline-xl max-w-3xl text-forest-800"
              startDelay={120}
            />
            <Reveal delay={300}>
              <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/75">
                Practical guides on rooftop solar, storage, solar pumping and agrivoltaics, written by the engineers who
                design, install and run the systems.
              </p>
            </Reveal>
          </div>
          <Reveal delay={450}>
            <DayCurve />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-forest-800/10 bg-linen">
        <div className="shell grid gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex gap-4 px-2 py-8 lg:px-6">
              <Icon size={22} className="mt-1 shrink-0" style={{ color: AMBER }} aria-hidden />
              <div>
                <p className="font-display text-3xl font-medium text-forest-800">{value}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-ivory py-14 md:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={cat === c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800 ${
                    cat === c
                      ? 'bg-forest-800 text-ivory'
                      : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="font-body text-sm text-charcoal/60" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          {featured && (
            <Reveal className="mt-12" key={featured.slug}>
              <article className="group grid cursor-pointer overflow-hidden rounded-sm bg-linen lg:grid-cols-2">
                {/* Replaced SceneCanvas with an img tag */}
                <ClipReveal className="relative min-h-[300px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-5 top-5 rounded-full px-4 py-1.5 font-heading text-xs font-semibold text-forest-900"
                    style={{ background: AMBER }}
                  >
                    Featured
                  </span>
                </ClipReveal>
                <div className="flex flex-col justify-center p-10 md:p-14">
                  <div className="flex flex-wrap items-center gap-4 font-body text-xs text-charcoal/60">
                    <span className="label-caps text-forest-600">{featured.category}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featured.read}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-forest-800 md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-prose font-body text-base leading-relaxed text-charcoal/75">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest-800">
                    Read the article
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 100}>
                <article className="group flex h-full cursor-pointer flex-col justify-between rounded-sm border border-forest-800/10 bg-ivory p-8 transition-all hover:-translate-y-1 hover:border-forest-800/30 hover:shadow-lg hover:shadow-forest-900/5">
                  <div>
                    <div className="flex items-center gap-3 font-body text-xs text-charcoal/60">
                      <span className="label-caps text-forest-600">{a.category}</span>
                      <span>{a.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-forest-800">{a.title}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{a.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-forest-800/10 pt-4">
                    <span className="flex items-center gap-1 font-body text-xs text-charcoal/50">
                      <Clock size={12} /> {a.read}
                    </span>
                    <ArrowRight size={16} className="text-forest-800 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 font-body text-base text-charcoal/60">No articles in this category yet.</p>
          )}
        </div>
      </section>

      {/* Quick answers */}
      <section className="bg-linen py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="label-caps mb-5 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-forest-600" /> Quick answers
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-forest-800 md:text-5xl">
              Solar questions we hear most.
            </h2>
            <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-charcoal/70">
              Short, honest answers. For your site, we can size a system from your bills and roof.
            </p>
          </div>
          <div className="border-t border-forest-800/15">
            {FAQ.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="shell">
          <Newsletter />
        </div>
      </section>

      <ClosingCta title={['Turn sunlight into', 'savings.']} to="/contact" cta="Get a solar estimate" />
    </main>
  );
}