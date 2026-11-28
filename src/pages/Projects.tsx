// import { useEffect, useMemo, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Building2,
//   Cloud,
//   Factory,
//   Home,
//   Leaf,
//   Play,
//   TreePine,
//   Zap,
//   Activity,
//   ClipboardList,
//   MapPin,
//   PencilRuler,
//   Quote,
//   Wrench,
// } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';
// import { ProcessSection } from '@/components/ProjectsCompo/DeliveryProcess';

// const img = (id: string, w = 1200) =>
//   `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// const HERO_IMG = img('photo-1509391366360-2e959784a276', 2000);
// const CTA_IMG = img('photo-1497440001374-f26997328c1b', 1600);

// type Category = 'Residential' | 'Commercial' | 'Industrial';
// const FILTERS = ['All', 'Residential', 'Commercial', 'Industrial'] as const;
// type Filter = (typeof FILTERS)[number];

// const FILTER_ICONS: Record<Category, typeof Home> = {
//   Residential: Home,
//   Commercial: Building2,
//   Industrial: Factory,
// };

// const PROJECTS: {
//   title: string;
//   category: Category;
//   location: string;
//   capacity: string;
//   image: string;
//   slug: string;
// }[] = [
//   {
//     title: 'Modern Home Solar',
//     category: 'Residential',
//     location: 'Bangalore, India',
//     capacity: '5 kW',
//     image: img('photo-1558449028-b53a39d100fc', 900),
//     slug: 'modern-home-solar',
//   },
//   {
//     title: 'Corporate Solar Park',
//     category: 'Commercial',
//     location: 'Mumbai, India',
//     capacity: '250 kW',
//     image: img('photo-1497366216548-37526070297c', 900),
//     slug: 'corporate-solar-park',
//   },
//   {
//     title: 'Factory Solar Solution',
//     category: 'Industrial',
//     location: 'Pune, India',
//     capacity: '1 MW',
//     image: img('photo-1581091226825-a6a2a5aee158', 900),
//     slug: 'factory-solar-solution',
//   },
//   {
//     title: 'Shopping Mall Solar',
//     category: 'Commercial',
//     location: 'Delhi, India',
//     capacity: '750 kW',
//     image: img('photo-1486406146926-c627a92ad1ab', 900),
//     slug: 'shopping-mall-solar',
//   },
// ];

// const FEATURED = PROJECTS[2];

// const PROCESS = [
//   { icon: ClipboardList, title: 'Site survey', body: 'We measure roof or land, shading and your current power use.' },
//   { icon: PencilRuler, title: 'System design', body: 'A layout and capacity sized to your load, budget and space.' },
//   { icon: Wrench, title: 'Installation', body: 'Certified crews install, test and connect the system to the grid.' },
//   { icon: Activity, title: 'Monitoring', body: 'Live performance tracking and scheduled maintenance after handover.' },
// ];

// const STORIES = [
//   {
//     quote: 'Our monthly electricity bill dropped noticeably within the first quarter, and the team handled every approval for us.',
//     who: 'Homeowner',
//     where: 'Bangalore',
//   },
//   {
//     quote: 'The installation finished on schedule and the monitoring dashboard makes it easy to show savings to our board.',
//     who: 'Facilities manager',
//     where: 'Mumbai',
//   },
//   {
//     quote: 'We run production through the day on solar now. Maintenance visits are on time and the output matches the plan.',
//     who: 'Plant head',
//     where: 'Pune',
//   },
// ];

// function CountUp({ value }: { value: string }) {
//   const match = value.match(/^([\d.]+)(.*)$/);
//   const target = match ? parseFloat(match[1]) : 0;
//   const rest = match ? match[2] : value;
//   const decimals = match && match[1].includes('.') ? 1 : 0;
//   const [n, setN] = useState(0);
//   const ref = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//       setN(target);
//       return;
//     }
//     let raf = 0;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         observer.disconnect();
//         const start = performance.now();
//         const tick = (now: number) => {
//           const t = Math.min((now - start) / 1100, 1);
//           setN(target * (1 - Math.pow(1 - t, 3)));
//           if (t < 1) raf = requestAnimationFrame(tick);
//         };
//         raf = requestAnimationFrame(tick);
//       },
//       { threshold: 0.4 },
//     );
//     observer.observe(el);
//     return () => {
//       observer.disconnect();
//       cancelAnimationFrame(raf);
//     };
//   }, [target]);

//   return (
//     <span ref={ref}>
//       {n.toFixed(decimals)}
//       {rest}
//     </span>
//   );
// }

// function BeforeAfter() {
//   const [pos, setPos] = useState(50);
//   return (
//     <div className="relative aspect-[16/10] select-none overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(11,59,46,0.2)]">
//       <img
//         src={img('photo-1509391366360-2e959784a276', 1400)}
//         alt="After: solar array powering the site"
//         loading="lazy"
//         className="absolute inset-0 h-full w-full object-cover"
//       />
//       <img
//         src={img('photo-1581091226825-a6a2a5aee158', 1400)}
//         alt="Before: conventional grid and diesel powered site"
//         loading="lazy"
//         className="absolute inset-0 h-full w-full object-cover grayscale brightness-75"
//         style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
//       />
//       <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 font-body text-xs font-medium text-white backdrop-blur">
//         Before
//       </span>
//       <span className="absolute right-4 top-4 rounded-full bg-lime-400 px-3 py-1 font-body text-xs font-semibold text-[#04231c]">
//         After
//       </span>
//       <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
//         <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0b3b2e] shadow-lg">
//           <ArrowRight size={14} className="rotate-180" />
//           <ArrowRight size={14} />
//         </span>
//       </div>
//       <input
//         type="range"
//         min={0}
//         max={100}
//         value={pos}
//         onChange={(e) => setPos(Number(e.target.value))}
//         aria-label="Compare before and after"
//         className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
//       />
//     </div>
//   );
// }

// const IMPACT = [
//   { icon: Leaf, value: '500+ MW', label: 'Clean Energy' },
//   { icon: Cloud, value: '1.2M+', label: 'CO₂ Avoided' },
//   { icon: Home, value: '750K+', label: 'Homes Powered' },
//   { icon: TreePine, value: '2M+', label: 'Trees Planted' },
// ];

// export function ProjectsPage() {
//   const [filter, setFilter] = useState<Filter>('All');
//   const visible = useMemo(
//     () => PROJECTS.filter((p) => filter === 'All' || p.category === filter),
//     [filter],
//   );

//   return (
//     <main className="bg-white text-[#0b3b2e]">
//       {/* ------------------------------ HERO ------------------------------ */}
//       <section className="relative isolate overflow-hidden bg-[#04231c] text-white">
//         <img
//           src={HERO_IMG}
//           alt="Solar panels across green hills at sunrise"
//           className="absolute inset-0 -z-20 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04231c] via-[#04231c]/60 to-transparent" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#04231c]/60 via-transparent to-transparent" />

//         <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 pb-28 pt-36 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-16">
//           <div>
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-body text-xs backdrop-blur-md">
//               <span className="h-2 w-2 rounded-full bg-lime-400" />
//               Our Projects
//             </span>
//             <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
//               Our Solar
//               <span className="block text-lime-400">Projects</span>
//             </h1>
//             <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-white/85">
//               Real solutions. Measurable impact.
//               <br />A cleaner tomorrow.
//             </p>
           
//           </div>

//           <div className="lg:justify-self-end">
//             <div className="inline-flex items-center gap-5 rounded-xl border border-white/15 bg-[#04231c]/70 px-6 py-4 backdrop-blur-md">
//               <div>
//                 <p className="font-heading text-4xl font-bold leading-none">500+ MW</p>
//                 <p className="mt-1.5 font-body text-xs text-white/75">Clean Energy Generated</p>
//               </div>
//               <div className="flex h-10 items-end gap-1" aria-hidden="true">
//                 {[40, 60, 50, 80, 100].map((h, i) => (
//                   <span key={i} className="w-1.5 rounded-sm bg-lime-400" style={{ height: `${h}%` }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* curved white edge */}
//         <svg
//           className="absolute inset-x-0 bottom-0 h-16 w-full text-white sm:h-24"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           <path fill="currentColor" d="M0 70C240 10 420 20 700 60s560 50 740-10v70H0z" />
//         </svg>
//       </section>

//       {/* ---------------------------- PORTFOLIO ---------------------------- */}
//       <section id="portfolio" className="relative overflow-hidden bg-white py-16 md:py-24">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.6fr] lg:px-16">
//           <Reveal>
//             <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
//               <span className="h-px w-3 bg-green-700" />
//               Our Portfolio
//             </p>
//             <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
//               Powering Progress Across Industries
//             </h2>
//             <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-slate-600">
//               From homes to industries, our solar solutions are helping communities and businesses
//               embrace clean energy.
//             </p>
//             <Link
//               to="/contact"
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b3b2e] px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-green-700"
//             >
//               View All Projects <ArrowRight size={15} />
//             </Link>
//           </Reveal>

//           <div>
//             <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
//               {FILTERS.map((f) => {
//                 const Icon = f === 'All' ? null : FILTER_ICONS[f];
//                 const active = filter === f;
//                 return (
//                   <button
//                     key={f}
//                     type="button"
//                     aria-pressed={active}
//                     onClick={() => setFilter(f)}
//                     className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 font-body text-sm font-medium transition-colors ${
//                       active
//                         ? 'border-[#0b3b2e] bg-[#0b3b2e] text-white'
//                         : 'border-slate-200 bg-white text-slate-700 hover:border-green-600'
//                     }`}
//                   >
//                     {Icon && <Icon size={15} />}
//                     {f}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//               {visible.map((p) => (
//                 <Link
//                   key={p.slug}
//                   to={`/projects/${p.slug}`}
//                   className="group overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(11,59,46,0.08)] ring-1 ring-slate-100 transition-shadow hover:shadow-[0_16px_40px_rgba(11,59,46,0.16)]"
//                 >
//                   <div className="relative h-40 overflow-hidden sm:h-44">
//                     <img
//                       src={p.image}
//                       alt={`${p.title} installation`}
//                       loading="lazy"
//                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                     <span className="absolute bottom-2 left-2 rounded-md bg-lime-400 px-2 py-0.5 font-body text-[11px] font-semibold text-[#04231c]">
//                       {p.category}
//                     </span>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-heading text-base font-semibold">{p.title}</h3>
//                     <p className="mt-0.5 font-body text-xs text-slate-500">{p.location}</p>
//                     <div className="mt-3 flex items-center justify-between">
//                       <span className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold">
//                         <Zap size={14} className="text-green-600" />
//                         {p.capacity}
//                       </span>
//                       <span className="grid h-7 w-7 place-items-center rounded-full border border-green-600 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
//                         <ArrowRight size={13} />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//             {visible.length === 0 && (
//               <p className="py-10 text-center font-body text-sm text-slate-500">
//                 No projects in this category yet.
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ----------------------------- FEATURED ---------------------------- */}
//       <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//         <Reveal>
//           <div className="grid overflow-hidden rounded-3xl bg-[#04231c] text-white shadow-[0_24px_70px_rgba(4,35,28,0.25)] lg:grid-cols-[1.1fr_1fr]">
//             <div className="relative min-h-[280px]">
//               <img
//                 src={FEATURED.image}
//                 alt={`${FEATURED.title} installation`}
//                 loading="lazy"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#04231c]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#04231c]/50" />
//               <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-lime-400 px-3 py-1.5 font-body text-xs font-semibold text-[#04231c]">
//                 <Zap size={13} /> Featured project
//               </span>
//             </div>
//             <div className="flex flex-col justify-center p-8 sm:p-12">
//               <p className="inline-flex items-center gap-2 font-body text-sm text-lime-400">
//                 <MapPin size={14} /> {FEATURED.location}
//               </p>
//               <h2 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl">{FEATURED.title}</h2>
//               <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/75">
//                 A large rooftop system that supplies daytime power to a working plant, cutting grid dependence
//                 without interrupting production.
//               </p>
//               <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
//                 <div>
//                   <dt className="font-body text-xs text-white/55">Capacity</dt>
//                   <dd className="mt-1 font-heading text-xl font-bold text-lime-400">{FEATURED.capacity}</dd>
//                 </div>
//                 <div>
//                   <dt className="font-body text-xs text-white/55">Sector</dt>
//                   <dd className="mt-1 font-heading text-xl font-bold">{FEATURED.category}</dd>
//                 </div>
//                 <div>
//                   <dt className="font-body text-xs text-white/55">City</dt>
//                   <dd className="mt-1 font-heading text-xl font-bold">Pune</dd>
//                 </div>
//               </dl>
//               <Link
//                 to={`/projects/${FEATURED.slug}`}
//                 className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading text-sm font-semibold text-[#04231c] transition-colors hover:bg-white"
//               >
//                 Read the case study <ArrowRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </Reveal>
//       </section>

//       {/* ------------------------------ IMPACT ----------------------------- */}
//       <section className="px-4 pb-6 sm:px-6">
//         <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-3xl bg-gradient-to-r from-[#04231c] via-[#0b3b2e] to-[#14532d] px-6 py-10 text-white sm:px-10 lg:grid-cols-[1fr_1.6fr]">
//           <div>
//             <p className="font-body text-sm font-medium text-lime-400">Our Project Impact</p>
//             <h2 className="mt-2 font-heading text-3xl font-bold leading-tight">
//               Together for a Greener Planet
//             </h2>
//             <p className="mt-3 max-w-xs font-body text-sm text-white/70">
//               Our projects are making a real difference in reducing carbon emissions.
//             </p>
//           </div>
//           <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
//             {IMPACT.map(({ icon: Icon, value, label }) => (
//               <div key={label} className="flex flex-col items-center text-center">
//                 <span className="grid h-12 w-12 place-items-center rounded-full bg-green-600/40 text-lime-400 ring-1 ring-lime-400/30">
//                   <Icon size={20} />
//                 </span>
//                 <dd className="mt-3 font-heading text-xl font-bold"><CountUp value={value} /></dd>
//                 <dt className="mt-0.5 font-body text-xs text-white/65">{label}</dt>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </section>

//       {/* ------------------------------ PROCESS ---------------------------- */}
//       {/* <section className="bg-[#f3f8f1] py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
//               <span className="h-px w-3 bg-green-700" /> How we deliver
//             </p>
//             <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold md:text-4xl">
//               From first visit to lasting performance
//             </h2>
//           </Reveal>
//           <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-green-600/40 to-transparent lg:block" aria-hidden="true" />
//             {PROCESS.map(({ icon: Icon, title, body }, i) => (
//               <Reveal key={title} delay={i * 90}>
//                 <li className="relative">
//                   <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#0b3b2e] text-lime-400 shadow-lg ring-4 ring-[#f3f8f1]">
//                     <Icon size={22} />
//                   </span>
//                   <h3 className="mt-5 font-heading text-lg font-semibold">
//                     <span className="mr-2 text-green-600">{i + 1}.</span>
//                     {title}
//                   </h3>
//                   <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{body}</p>
//                 </li>
//               </Reveal>
//             ))}
//           </ol>
//         </div>
//       </section> */}

//       <ProcessSection />

//       {/* --------------------------- BEFORE / AFTER ------------------------ */}
//       <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
//         <Reveal>
//           <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
//             <span className="h-px w-3 bg-green-700" /> Before &amp; after
//           </p>
//           <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-4xl">
//             See the site change
//           </h2>
//           <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-slate-600">
//             Drag the slider to compare a conventionally powered site with the same site running on solar.
//           </p>
//           <ul className="mt-6 space-y-3 font-body text-sm text-slate-700">
//             {['Lower daytime grid demand', 'Quieter, cleaner on-site power', 'Output visible in a live dashboard'].map((t) => (
//               <li key={t} className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-lime-500" /> {t}
//               </li>
//             ))}
//           </ul>
//         </Reveal>
//         <Reveal delay={120}>
//           <BeforeAfter />
//         </Reveal>
//       </section>

//       {/* ------------------------------ STORIES ---------------------------- */}
//       <section className="bg-[#f3f8f1] py-16 md:py-24">
//         <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
//               <span className="h-px w-3 bg-green-700" /> Customer stories
//             </p>
//             <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">What our customers say</h2>
//           </Reveal>
//           <div className="mt-10 grid gap-5 md:grid-cols-3">
//             {STORIES.map((s, i) => (
//               <Reveal key={s.where} delay={i * 90}>
//                 <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_10px_34px_rgba(11,59,46,0.08)] ring-1 ring-slate-100">
//                   <span className="grid h-10 w-10 place-items-center rounded-full bg-lime-400 text-[#04231c]">
//                     <Quote size={18} />
//                   </span>
//                   <blockquote className="mt-5 flex-1 font-body text-[15px] leading-relaxed text-slate-700">
//                     {s.quote}
//                   </blockquote>
//                   <figcaption className="mt-6 border-t border-slate-100 pt-4">
//                     <p className="font-heading text-sm font-semibold">{s.who}</p>
//                     <p className="font-body text-xs text-slate-500">{s.where}</p>
//                   </figcaption>
//                 </figure>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ------------------------------- CTA ------------------------------- */}
//       <section className="px-4 pb-10 sm:px-6">
//         <div className="relative isolate mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl px-6 py-9 text-white sm:flex-row sm:items-center sm:px-10">
//           <img
//             src={CTA_IMG}
//             alt=""
//             aria-hidden="true"
//             loading="lazy"
//             className="absolute inset-0 -z-20 h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04231c] via-[#04231c]/80 to-[#04231c]/30" />
//           <div>
//             <h2 className="font-heading text-2xl font-bold sm:text-3xl">
//               Let&rsquo;s Build a Cleaner Future Together
//             </h2>
//             <p className="mt-2 font-body text-sm text-white/80">
//               Partner with us for sustainable solar solutions.
//             </p>
//           </div>
//           <Link
//             to="/contact"
//             className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading text-sm font-semibold text-[#04231c] transition-colors hover:bg-white"
//           >
//             Get in Touch <ArrowRight size={15} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Cloud,
  Factory,
  Home,
  Leaf,
  TreePine,
  Zap,
  MapPin,
  Quote,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ProcessSection } from '@/components/ProjectsCompo/DeliveryProcess';

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Save the generated banner to public/images/projects-banner.png
const HERO_IMG = '/images/projects-banner.png';
const CTA_IMG = img('photo-1497440001374-f26997328c1b', 1600);

type Category = 'Residential' | 'Commercial' | 'Industrial';
const FILTERS = ['All', 'Residential', 'Commercial', 'Industrial'] as const;
type Filter = (typeof FILTERS)[number];

const FILTER_ICONS: Record<Category, typeof Home> = {
  Residential: Home,
  Commercial: Building2,
  Industrial: Factory,
};

const PROJECTS: {
  title: string;
  category: Category;
  location: string;
  capacity: string;
  image: string;
  slug: string;
}[] = [
  {
    title: 'Modern Home Solar',
    category: 'Residential',
    location: 'Bangalore, India',
    capacity: '5 kW',
    image: img('photo-1558449028-b53a39d100fc', 900),
    slug: 'modern-home-solar',
  },
  {
    title: 'Corporate Solar Park',
    category: 'Commercial',
    location: 'Mumbai, India',
    capacity: '250 kW',
    image: img('photo-1497366216548-37526070297c', 900),
    slug: 'corporate-solar-park',
  },
  {
    title: 'Factory Solar Solution',
    category: 'Industrial',
    location: 'Pune, India',
    capacity: '1 MW',
    image: img('photo-1581091226825-a6a2a5aee158', 900),
    slug: 'factory-solar-solution',
  },
  {
    title: 'Shopping Mall Solar',
    category: 'Commercial',
    location: 'Delhi, India',
    capacity: '750 kW',
    image: img('photo-1486406146926-c627a92ad1ab', 900),
    slug: 'shopping-mall-solar',
  },
];

const FEATURED = PROJECTS[2];

const STORIES = [
  {
    quote:
      'Our monthly electricity bill dropped noticeably within the first quarter, and the team handled every approval for us.',
    who: 'Homeowner',
    where: 'Bangalore',
  },
  {
    quote:
      'The installation finished on schedule and the monitoring dashboard makes it easy to show savings to our board.',
    who: 'Facilities manager',
    where: 'Mumbai',
  },
  {
    quote:
      'We run production through the day on solar now. Maintenance visits are on time and the output matches the plan.',
    who: 'Plant head',
    where: 'Pune',
  },
];

function CountUp({ value }: { value: string }) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const rest = match ? match[2] : value;
  const decimals = match && match[1].includes('.') ? 1 : 0;
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1100, 1);
          setN(target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {rest}
    </span>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[16/10] select-none overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(11,59,46,0.2)] ring-1 ring-[#0b3b2e]/10">
      <img
        src={img('photo-1509391366360-2e959784a276', 1400)}
        alt="After: solar array powering the site"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={img('photo-1581091226825-a6a2a5aee158', 1400)}
        alt="Before: conventional grid and diesel powered site"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale brightness-75"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-body text-xs font-medium text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-lime-400 px-3 py-1 font-body text-xs font-semibold text-[#04231c]">
        After
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0b3b2e] shadow-lg">
          <ArrowRight size={14} className="rotate-180" />
          <ArrowRight size={14} />
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

const IMPACT = [
  { icon: Leaf, value: '500+ MW', label: 'Clean Energy' },
  { icon: Cloud, value: '1.2M+', label: 'CO₂ Avoided' },
  { icon: Home, value: '750K+', label: 'Homes Powered' },
  { icon: TreePine, value: '2M+', label: 'Trees Planted' },
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = useMemo(
    () => PROJECTS.filter((p) => filter === 'All' || p.category === filter),
    [filter],
  );

  return (
    <main className="bg-white text-[#0b3b2e]">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative isolate overflow-hidden bg-[#04231c] text-white">
        <img
          src={HERO_IMG}
          alt="Modern sustainable campus glowing in golden sunlight surrounded by green trees"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_25%] brightness-105"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#04231c]/90 via-[#04231c]/50 to-[#04231c]/15" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#04231c]/70 to-transparent" />

        <div className="mx-auto grid min-h-[580px] max-w-7xl items-center gap-10 px-6 pb-28 pt-36 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-body text-xs backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              Our Projects
            </span>
            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Our Solar
              <span className="block text-lime-400">Projects</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-white/90">
              Real solutions. Measurable impact.
              <br />A cleaner tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading text-sm font-semibold text-[#04231c] transition-colors hover:bg-white"
              >
                Explore Projects <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="inline-flex items-center gap-5 rounded-2xl border border-white/20 bg-[#04231c]/75 px-6 py-4 shadow-2xl backdrop-blur-md">
              <div>
                <p className="font-heading text-4xl font-bold leading-none text-white">
                  500+ MW
                </p>
                <p className="mt-1.5 font-body text-xs text-white/80">
                  Clean Energy Generated
                </p>
              </div>
              <div className="flex h-10 items-end gap-1" aria-hidden="true">
                {[40, 60, 50, 80, 100].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-sm bg-lime-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* curved white edge */}
        <svg
          className="absolute inset-x-0 bottom-0 h-16 w-full text-white sm:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 70C240 10 420 20 700 60s560 50 740-10v70H0z"
          />
        </svg>
      </section>

      {/* ---------------------------- PORTFOLIO ---------------------------- */}
      <section
        id="portfolio"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.6fr] lg:px-16">
          <Reveal>
            <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
              <span className="h-px w-3 bg-green-700" />
              Our Portfolio
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Powering Progress Across Industries
            </h2>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-slate-600">
              From homes to industries, our solar solutions are helping
              communities and businesses embrace clean energy.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b3b2e] px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Start a Project <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div>
            <div
              className="mb-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects"
            >
              {FILTERS.map((f) => {
                const Icon = f === 'All' ? null : FILTER_ICONS[f];
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 font-body text-sm font-medium transition-colors ${
                      active
                        ? 'border-[#0b3b2e] bg-[#0b3b2e] text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-green-600'
                    }`}
                  >
                    {Icon && <Icon size={15} />}
                    {f}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {visible.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,59,46,0.08)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,59,46,0.16)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} installation`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-lime-400 px-3 py-0.5 font-body text-[11px] font-semibold text-[#04231c]">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 font-body text-xs text-slate-500">
                      {p.location}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold">
                        <Zap size={14} className="text-green-600" />
                        {p.capacity}
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-green-600 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {visible.length === 0 && (
              <p className="py-10 text-center font-body text-sm text-slate-500">
                No projects in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------- FEATURED ---------------------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl bg-[#04231c] text-white shadow-[0_24px_70px_rgba(4,35,28,0.25)] lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[280px]">
              <img
                src={FEATURED.image}
                alt={`${FEATURED.title} installation`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04231c]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#04231c]/50" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-lime-400 px-3 py-1.5 font-body text-xs font-semibold text-[#04231c]">
                <Zap size={13} /> Featured project
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="inline-flex items-center gap-2 font-body text-sm text-lime-400">
                <MapPin size={14} /> {FEATURED.location}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                {FEATURED.title}
              </h2>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/75">
                A large rooftop system that supplies daytime power to a working
                plant, cutting grid dependence without interrupting production.
              </p>
              <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                <div>
                  <dt className="font-body text-xs text-white/55">Capacity</dt>
                  <dd className="mt-1 font-heading text-xl font-bold text-lime-400">
                    {FEATURED.capacity}
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs text-white/55">Sector</dt>
                  <dd className="mt-1 font-heading text-xl font-bold">
                    {FEATURED.category}
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs text-white/55">City</dt>
                  <dd className="mt-1 font-heading text-xl font-bold">Pune</dd>
                </div>
              </dl>
              <Link
                to={`/projects/${FEATURED.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading text-sm font-semibold text-[#04231c] transition-colors hover:bg-white"
              >
                Read the case study <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------ IMPACT ----------------------------- */}
      <section className="px-4 pb-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-3xl bg-gradient-to-r from-[#04231c] via-[#0b3b2e] to-[#14532d] px-6 py-10 text-white shadow-lg sm:px-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="font-body text-sm font-medium text-lime-400">
              Our Project Impact
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold leading-tight">
              Together for a Greener Planet
            </h2>
            <p className="mt-3 max-w-xs font-body text-sm text-white/70">
              Our projects are making a real difference in reducing carbon
              emissions.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {IMPACT.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-green-600/40 text-lime-400 ring-1 ring-lime-400/30">
                  <Icon size={20} />
                </span>
                <dd className="mt-3 font-heading text-xl font-bold">
                  <CountUp value={value} />
                </dd>
                <dt className="mt-0.5 font-body text-xs text-white/65">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------ PROCESS ---------------------------- */}
      <ProcessSection />

      {/* --------------------------- BEFORE / AFTER ------------------------ */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
        <Reveal>
          <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
            <span className="h-px w-3 bg-green-700" /> Before &amp; after
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-4xl">
            See the site change
          </h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-slate-600">
            Drag the slider to compare a conventionally powered site with the
            same site running on solar.
          </p>
          <ul className="mt-6 space-y-3 font-body text-sm text-slate-700">
            {[
              'Lower daytime grid demand',
              'Quieter, cleaner on-site power',
              'Output visible in a live dashboard',
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-lime-500" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <BeforeAfter />
        </Reveal>
      </section>

      {/* ------------------------------ STORIES ---------------------------- */}
      <section className="bg-[#f3f8f1] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="flex items-center gap-2 font-body text-sm font-medium text-green-700">
              <span className="h-px w-3 bg-green-700" /> Customer stories
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              What our customers say
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.where} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_10px_34px_rgba(11,59,46,0.08)] ring-1 ring-slate-100">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-lime-400 text-[#04231c]">
                    <Quote size={18} />
                  </span>
                  <blockquote className="mt-5 flex-1 font-body text-[15px] leading-relaxed text-slate-700">
                    {s.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-heading text-sm font-semibold">{s.who}</p>
                    <p className="font-body text-xs text-slate-500">{s.where}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="px-4 pb-10 sm:px-6">
        <div className="relative isolate mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl px-6 py-9 text-white shadow-xl sm:flex-row sm:items-center sm:px-10">
          <img
            src={CTA_IMG}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04231c] via-[#04231c]/80 to-[#04231c]/30" />
          <div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Let&rsquo;s Build a Cleaner Future Together
            </h2>
            <p className="mt-2 font-body text-sm text-white/80">
              Partner with us for sustainable solar solutions.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading text-sm font-semibold text-[#04231c] transition-colors hover:bg-white"
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}