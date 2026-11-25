// import { Link } from 'react-router-dom';
// import { ArrowRight, ArrowUpRight } from 'lucide-react';
// import { company, impactStats, verticals, solutions, milestones, testimonials } from '@/lib/content';
// import { CountUp } from '@/lib/reveal';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';



// export function HomePage() {
//   return (
//     <main>
//       <Hero />
//       <BrandIntro />
//       <ImpactStats />
//       <Story />
//       <Expertise />
//       <SolutionIndex />
//       <AgricultureStrip />
//       <Journey />
//       <Testimonials />
//       <ClosingCta />
//     </main>
//   );
// }

// function Hero() {
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
//             <p className="max-w-xl font-body text-base leading-relaxed text-ivory/80 md:text-lg">{company.heroSupport}</p>
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
//       <div aria-hidden className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 text-ivory/50 md:flex">
//         <span className="label-caps" style={{ writingMode: 'vertical-rl' }}>
//           Scroll
//         </span>
//         <span className="h-16 w-px animate-pulse bg-ivory/40" />
//       </div>
//     </section>
//   );
// }

// function BrandIntro() {
//   return (
//     <section className="bg-ivory py-24 md:py-36">
//       <div className="shell grid gap-16 lg:grid-cols-12">
//         <div className="lg:col-span-7">
//           <Reveal>
//             <p className="label-caps mb-8 flex items-center gap-3 text-forest-600">
//               <span className="h-px w-10 bg-forest-600" /> Who we are
//             </p>
//           </Reveal>
//           <MaskedLines
//             lines={['Nature inspires.', 'Engineering transforms.', 'Impact defines us.']}
//             className="headline-lg text-forest-800"
//           />
//           <Reveal delay={250}>
//             <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">{company.intro}</p>
//           </Reveal>
//           <Reveal delay={350}>
//             <Link to="/about" className="group mt-10 inline-flex items-center gap-3 font-heading text-sm font-semibold text-forest-800">
//               <span className="border-b border-forest-800/40 pb-1 transition-colors group-hover:border-forest-800">The Terra story</span>
//               <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//           </Reveal>
//         </div>
//         <div className="grid gap-5 lg:col-span-5">
//           <ClipReveal className="relative min-h-[280px] overflow-hidden rounded-sm bg-forest-800">
//             <SceneCanvas variant="energy" />
//             <div className="relative z-10 flex h-full flex-col justify-end p-8 text-ivory">
//               <span className="label-caps text-sage-400">Energy & Engineering</span>
//               <p className="mt-2 font-display text-2xl">Measured savings, engineered.</p>
//             </div>
//           </ClipReveal>
//           <div className="grid grid-cols-2 gap-5">
//             <ClipReveal delay={150} className="min-h-[220px] rounded-sm bg-sage-400 p-6 text-forest-900">
//               <span className="font-display text-5xl font-medium">10<span className="text-forest-600">+</span></span>
//               <p className="mt-3 font-body text-sm leading-snug">years of engineering for the real world</p>
//             </ClipReveal>
//             <ClipReveal delay={300} className="min-h-[220px] rounded-sm bg-linen p-6 text-forest-800">
//               <span className="font-display text-5xl font-medium">3</span>
//               <p className="mt-3 font-body text-sm leading-snug">verticals united by one purpose</p>
//             </ClipReveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ImpactStats() {
//   return (
//     <section className="grain relative overflow-hidden bg-forest-900 py-24 text-ivory md:py-36">
//       <SceneCanvas variant="impact" className="opacity-60" />
//       <div className="shell relative z-10">
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <MaskedLines lines={['Impact, in numbers']} className="headline-lg" />
//           <Reveal>
//             <p className="max-w-sm font-body text-sm leading-relaxed text-ivory/60">
//               Figures shown are illustrative pending verified client data. Every published metric will carry its source,
//               period and unit.
//             </p>
//           </Reveal>
//         </div>
//         <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
//           {impactStats.map((s, i) => (
//             <Reveal key={s.label} delay={i * 90} className="border-t border-ivory/15 pt-6">
//               <span className="font-heading text-5xl font-bold tracking-tight text-sage-400 md:text-6xl">
//                 <CountUp value={s.value} suffix={s.suffix} duration={1800 + i * 150} />
//               </span>
//               <p className="mt-3 font-heading text-base font-semibold">{s.label}</p>
//               <p className="mt-1 font-body text-sm text-ivory/55">{s.note}</p>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Story() {
//   return (
//     <section className="bg-linen py-24 md:py-36">
//       <div className="shell grid items-center gap-16 lg:grid-cols-2">
//         <ClipReveal className="relative min-h-[420px] overflow-hidden rounded-sm">
//           <SceneCanvas variant="agri" />
//         </ClipReveal>
//         <div>
//           <Reveal>
//             <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
//               <span className="h-px w-10 bg-forest-600" /> Our philosophy
//             </p>
//           </Reveal>
//           <MaskedLines lines={['Engineering done well', 'protects both margins', 'and soil.']} className="headline-md text-forest-800" />
//           <div className="mt-10 space-y-8">
//             {company.philosophy.map((p, i) => (
//               <Reveal key={p.title} delay={i * 120} className="flex gap-6 border-t border-forest-800/10 pt-6">
//                 <span className="font-heading text-sm font-bold text-forest-600">0{i + 1}</span>
//                 <div>
//                   <h3 className="font-heading text-lg font-semibold text-forest-800">{p.title}</h3>
//                   <p className="mt-1 max-w-md font-body text-sm leading-relaxed text-charcoal/70">{p.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Expertise() {
//   return (
//     <section className="bg-ivory py-24 md:py-36">
//       <div className="shell">
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <Reveal>
//               <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
//                 <span className="h-px w-10 bg-forest-600" /> What we do
//               </p>
//             </Reveal>
//             <MaskedLines lines={['Three verticals,', 'one measure: outcomes.']} className="headline-lg text-forest-800" />
//           </div>
//           <Reveal>
//             <Link to="/solutions" className="btn-ghost-dark">
//               All solutions <ArrowRight size={16} />
//             </Link>
//           </Reveal>
//         </div>
//         <div className="mt-16 space-y-5">
//           {verticals.map((v, i) => (
//             <Reveal key={v.id} delay={i * 100}>
//               <Link
//                 to={v.href}
//                 className={`group grid items-center gap-6 rounded-sm p-8 transition-all duration-500 md:grid-cols-12 md:p-12 ${
//                   v.theme === 'dark'
//                     ? 'bg-forest-800 text-ivory hover:bg-forest-700'
//                     : 'bg-sage-400 text-forest-900 hover:bg-sage-300'
//                 }`}
//               >
//                 <span className="font-heading text-sm font-bold opacity-60 md:col-span-1">0{i + 1}</span>
//                 <h3 className="font-display text-3xl font-medium md:col-span-4 md:text-4xl">{v.title}</h3>
//                 <p className="max-w-xl font-body text-sm leading-relaxed opacity-75 md:col-span-6">{v.summary}</p>
//                 <span className="hidden justify-end md:col-span-1 md:flex">
//                   <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </span>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function SolutionIndex() {
//   return (
//     <section className="grain relative overflow-hidden bg-charcoal py-24 text-ivory md:py-36">
//       <SceneCanvas variant="industry" className="opacity-40" />
//       <div className="shell relative z-10">
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <MaskedLines lines={['Capabilities']} className="headline-lg" />
//           <Reveal>
//             <p className="max-w-md font-body text-sm leading-relaxed text-ivory/60">
//               Eight disciplines, delivered end-to-end — from the first audit to years of monitored performance.
//             </p>
//           </Reveal>
//         </div>
//         <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
//           {solutions.map((s, i) => (
//             <Reveal key={s.code} delay={(i % 4) * 80}>
//               <Link
//                 to="/solutions"
//                 className="group flex h-full flex-col justify-between bg-charcoal/80 p-7 transition-colors duration-300 hover:bg-forest-800"
//               >
//                 <span className="label-caps text-sage-400">{s.code}</span>
//                 <div className="mt-16">
//                   <h3 className="font-heading text-lg font-semibold leading-snug">{s.title}</h3>
//                   <p className="mt-2 max-h-0 overflow-hidden font-body text-sm leading-relaxed text-ivory/60 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
//                     {s.blurb}
//                   </p>
//                 </div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function AgricultureStrip() {
//   return (
//     <section className="bg-linen py-24 md:py-36">
//       <div className="shell grid items-center gap-16 lg:grid-cols-12">
//         <div className="lg:col-span-6">
//           <Reveal>
//             <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
//               <span className="h-px w-10 bg-forest-600" /> TRANSFORM programme
//             </p>
//           </Reveal>
//           <MaskedLines
//             lines={['From factory', 'floors to farm', 'fields.']}
//             className="headline-lg text-forest-800"
//           />
//           <Reveal delay={250}>
//             <p className="mt-8 max-w-lg font-body text-lg leading-relaxed text-charcoal/80">
//               TRANSFORM is Terra&apos;s commitment to rural prosperity — farmer field schools, FPO strengthening and shared
//               infrastructure that turns small-holder agriculture into a viable, dignified business.
//             </p>
//           </Reveal>
//           <Reveal delay={350}>
//             <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
//               {[
//                 { v: '7,500+', l: 'farmers' },
//                 { v: '64', l: 'communities' },
//                 { v: '18%', l: 'income gain' },
//               ].map((s) => (
//                 <div key={s.l} className="border-l-2 border-forest-600 pl-4">
//                   <span className="font-heading text-2xl font-bold text-forest-800">{s.v}</span>
//                   <p className="font-body text-xs uppercase tracking-wide text-charcoal/60">{s.l}</p>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//           <Reveal delay={450}>
//             <Link to="/agriculture" className="btn-primary mt-10">
//               The TRANSFORM story <ArrowRight size={16} />
//             </Link>
//           </Reveal>
//         </div>
//         <div className="lg:col-span-6">
//           <ClipReveal className="relative min-h-[480px] overflow-hidden rounded-sm">
//             <SceneCanvas variant="agri" />
//             <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-900/80 to-transparent p-8">
//               <blockquote className="max-w-md font-display text-xl italic leading-snug text-ivory">
//                 “The farmer field school changed how our village thinks about soil and water.”
//               </blockquote>
//               <cite className="mt-3 block font-body text-xs not-italic text-ivory/70">FPO Director, TRANSFORM participant</cite>
//             </div>
//           </ClipReveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Journey() {
//   return (
//     <section className="bg-ivory py-24 md:py-36">
//       <div className="shell">
//         <MaskedLines lines={['The journey so far']} className="headline-lg text-forest-800" />
//         <div className="relative mt-20">
//           <div aria-hidden className="absolute left-[7px] top-0 h-full w-px bg-forest-800/15 md:left-1/2" />
//           {milestones.map((m, i) => (
//             <Reveal key={m.year} delay={i * 60}>
//               <div className={`relative flex pb-14 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right'}`}>
//                 <span
//                   aria-hidden
//                   className={`absolute top-2 h-3.5 w-3.5 rounded-full bg-sage-400 ring-4 ring-ivory ${
//                     i % 2 ? 'md:-left-[7px]' : 'md:-right-[7px] md:left-auto'
//                   } left-0`}
//                 />
//                 <div className="pl-8 md:pl-0">
//                   <span className="label-caps text-forest-600">{m.year}</span>
//                   <h3 className="mt-2 font-display text-2xl font-medium text-forest-800">{m.title}</h3>
//                   <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{m.body}</p>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   return (
//     <section className="grain relative overflow-hidden bg-forest-900 py-24 text-ivory md:py-36">
//       <SceneCanvas variant="impact" className="opacity-40" />
//       <div className="shell relative z-10 grid gap-10 md:grid-cols-3">
//         {testimonials.map((t, i) => (
//           <Reveal key={t.role} delay={i * 120} className="flex flex-col justify-between border-t border-ivory/15 pt-8">
//             <blockquote className="font-display text-xl italic leading-snug">“{t.quote}”</blockquote>
//             <div className="mt-8">
//               <p className="font-heading text-sm font-semibold text-sage-400">{t.role}</p>
//               <p className="font-body text-xs text-ivory/50">{t.org}</p>
//             </div>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// export function ClosingCta({ title = ['Let us build', 'what lasts.'], to = '/contact', cta = 'Start a conversation' }: { title?: string[]; to?: string; cta?: string }) {
//   return (
//     <section className="grain relative overflow-hidden bg-forest-800 py-28 text-ivory md:py-40">
//       <SceneCanvas variant="contact" className="opacity-70" />
//       <div className="shell relative z-10 text-center">
//         <MaskedLines lines={title} className="headline-xl mx-auto max-w-4xl" />
//         <Reveal delay={300}>
//           <Link to={to} className="btn-primary mt-12">
//             {cta} <ArrowUpRight size={16} />
//           </Link>
//         </Reveal>
//       </div>
//     </section>
//   );
// }




import { AgricultureStrip } from "@/components/HomeCompo/AgricultureStrip";
import { BrandIntro } from "@/components/HomeCompo/BrandIntro";
import { ClosingCta } from "@/components/HomeCompo/ClosingCta";
import { Expertise } from "@/components/HomeCompo/Expertise";
import { Hero } from "@/components/HomeCompo/Hero";
import { ImpactStats } from "@/components/HomeCompo/ImpactStats";
import { Journey } from "@/components/HomeCompo/Journey";
import { SolutionIndex } from "@/components/HomeCompo/SolutionIndex";
import { Story } from "@/components/HomeCompo/Story";
import { Testimonials } from "@/components/HomeCompo/Testimonials";

export function HomePage() {
  return (
    <main>
      <Hero />
      <BrandIntro />
      <ImpactStats />
      <Story />
      <Expertise />
      <SolutionIndex />
      <AgricultureStrip />
      <Journey />
      <Testimonials />
      <ClosingCta />
    </main>
  );
}
