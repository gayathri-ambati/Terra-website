// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { company, milestones } from '@/lib/content';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';
// import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

// export function AboutPage() {
//   return (
//     <main>
//       <section className="grain relative flex min-h-[85vh] items-end overflow-hidden bg-forest-900 text-ivory">
//         <SceneCanvas variant="hero" className="animate-drift" />
//         <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/50" />
//         <div className="shell relative z-10 pb-24 pt-40">
//           <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
//             <span className="h-px w-10 bg-sage-400" /> About Terra
//           </p>
//           <MaskedLines
//             lines={['A decade of engineering', 'for the real world.']}
//             className="headline-xl max-w-5xl"
//             startDelay={150}
//           />
//         </div>
//       </section>

//       <section className="bg-ivory py-24 md:py-36">
//         <div className="shell grid gap-16 lg:grid-cols-12">
//           <div className="lg:col-span-7">
//             <MaskedLines lines={['Our identity']} className="headline-md text-forest-800" />
//             <Reveal delay={150}>
//               <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">{company.intro}</p>
//             </Reveal>
//           </div>
//           <div className="grid content-start gap-6 lg:col-span-5">
//             <ClipReveal className="rounded-sm bg-forest-800 p-10 text-ivory">
//               <h3 className="label-caps text-sage-400">Vision</h3>
//               <p className="mt-4 font-display text-2xl leading-snug">{company.vision}</p>
//             </ClipReveal>
//             <ClipReveal delay={150} className="rounded-sm bg-linen p-10 text-forest-800">
//               <h3 className="label-caps text-forest-600">Mission</h3>
//               <p className="mt-4 font-body text-base leading-relaxed">{company.mission}</p>
//             </ClipReveal>
//           </div>
//         </div>
//       </section>

//       <section className="bg-linen py-24 md:py-36">
//         <div className="shell">
//           <MaskedLines lines={['Our approach']} className="headline-lg text-forest-800" />
//           <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-forest-800/10 md:grid-cols-3">
//             {company.philosophy.map((p, i) => (
//               <Reveal key={p.title} delay={i * 120} className="bg-ivory p-10">
//                 <span className="font-heading text-sm font-bold text-forest-600">0{i + 1}</span>
//                 <h3 className="mt-6 font-display text-2xl font-medium text-forest-800">{p.title}</h3>
//                 <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{p.body}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-ivory py-24 md:py-36">
//         <div className="shell">
//           <MaskedLines lines={['The journey']} className="headline-lg text-forest-800" />
//           <div className="relative mt-20">
//             <div aria-hidden className="absolute left-[7px] top-0 h-full w-px bg-forest-800/15 md:left-1/2" />
//             {milestones.map((m, i) => (
//               <Reveal key={m.year} delay={i * 60}>
//                 <div className={`relative flex pb-14 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right'}`}>
//                   <span
//                     aria-hidden
//                     className={`absolute top-2 h-3.5 w-3.5 rounded-full bg-sage-400 ring-4 ring-ivory ${
//                       i % 2 ? 'md:-left-[7px]' : 'md:-right-[7px] md:left-auto'
//                     } left-0`}
//                   />
//                   <div className="pl-8 md:pl-0">
//                     <span className="label-caps text-forest-600">{m.year}</span>
//                     <h3 className="mt-2 font-display text-2xl font-medium text-forest-800">{m.title}</h3>
//                     <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{m.body}</p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ClosingCta
//         title={['Partner with us,', 'shape the decade ahead.']}
//         cta="Explore collaboration"
//       />
//       <div className="hidden">
//         <Link to="/impact">Impact</Link>
//         <ArrowRight size={12} />
//       </div>
//     </main>
//   );
// }





import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AboutHero } from '@/components/AboutCompo/AboutHero';
import { IdentitySection } from '@/components/AboutCompo/IdentitySection';
import { ApproachSection } from '@/components/AboutCompo/ApproachSection';
import { JourneySection } from '@/components/AboutCompo/JourneySection';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';
import Visionmission from '@/components/AboutCompo/Visionmission';
import SolarEnergyVideo from '@/components/AboutCompo/SolarEnergyvideo';
import { AboutProcessSection } from '@/components/AboutCompo/AboutSections';
import { AboutPurpose } from '@/components/AboutCompo/Ourpurpose';
import { AboutValues } from '@/components/AboutCompo/Ourvalues';
import TeamSection from '@/components/AboutCompo/TeamSection';



export function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Visionmission />
      <JourneySection />
      <SolarEnergyVideo />
      <AboutValues />
      <IdentitySection />
      <AboutProcessSection />
      <AboutPurpose />
      <ApproachSection />
      <TeamSection />
      <ClosingCta
        title={['Partner with us,', 'shape the decade ahead.']}
        cta="Explore collaboration"
      />
      <div className="hidden">
        <Link to="/impact">Impact</Link>
        <ArrowRight size={12} />
      </div>
    </main>
  );
}
