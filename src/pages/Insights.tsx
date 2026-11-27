

// import { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
// import { articles } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { ClosingCta } from '@/components/HomeCompo/ClosingCta';
// import { InsightsHero } from '@/components/InsightsCompo/Insightshero';
// import { LatestInsights } from '@/components/InsightsCompo/LatestInsights';
// import { InsightArticlesSection } from '@/components/InsightsCompo/InsightSections';
// import RoadMapSection from '@/components/InsightsCompo/RoadMapSection';
// import DigitalMarketingSection from '@/components/InsightsCompo/DigitalMarketingSection';

// import {
//   SolarHero,
//   FeaturedArticle,
//   ArticleExplorer,
//   QuickInsights,
//   NewsletterSection,
// } from '@/components/InsightsCompo/SolorInsights';

// const CATEGORIES = ['All', 'Energy', 'Engineering', 'Agriculture', 'Sustainability'];

// /* Soft fade/rise used to ease each section into view */
// function Section({ children }: { children: React.ReactNode }) {
//   const reduce = useReducedMotion();
//   return (
//     <motion.div
//       initial={reduce ? false : { opacity: 0, y: 48 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-12% 0px' }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export function InsightsPage() {
//   const [cat, setCat] = useState('All');
//   const filtered = articles.filter((a) => cat === 'All' || a.category === cat);
//   const featured = filtered[0];

//   const reduce = useReducedMotion();
//   const heroRef = useRef<HTMLElement>(null);

//   // page-level reading progress
//   const { scrollYProgress } = useScroll();
//   const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

//   // hero parallax
//   const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
//   const imgY = useTransform(heroP, [0, 1], reduce ? [0, 0] : [0, 70]);
//   const blobY = useTransform(heroP, [0, 1], reduce ? [0, 0] : [0, -90]);

//   return (
//     <main>
//       <motion.div
//         aria-hidden="true"
//         style={{ scaleX: progress }}
//         className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-forest-600 via-[#8DBB5A] to-[#E3A92B]"
//       />

//       <section ref={heroRef} className="relative overflow-hidden bg-ivory pb-16 pt-32 md:pb-28 md:pt-44">
//         {/* Ambient background */}
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//           <motion.div
//             style={{ y: blobY }}
//             animate={reduce ? undefined : { scale: [1, 1.12, 1], x: [0, 30, 0] }}
//             transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//             className="absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-[#B9D19E]/40 blur-3xl"
//           />
//           <motion.div
//             animate={reduce ? undefined : { scale: [1.1, 1, 1.1], y: [0, -24, 0] }}
//             transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//             className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-forest-600/10 blur-3xl"
//           />
//           <div className="absolute inset-0 bg-[radial-gradient(rgba(23,59,43,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
//         </div>

//         <div className="shell relative">
//           <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
//             {/* Left Content */}
//             <div className="relative z-10">
//               <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
//                 <motion.span
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: 0.8, delay: 0.1 }}
//                   className="h-px w-10 origin-left bg-forest-600"
//                 />
//                 Insights
//               </p>

//               <MaskedLines
//                 lines={['Field notes from', 'the work itself.']}
//                 className="headline-xl max-w-2xl text-forest-800"
//                 startDelay={120}
//               />

//               <Reveal delay={300}>
//                 <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/75 md:text-lg">
//                   Perspectives on energy, engineering, agriculture and
//                   sustainability — written by the people doing the work.
//                 </p>
//               </Reveal>

//               <Reveal delay={450}>
//                 <div className="mt-10 flex items-center gap-4">
//                   <span className="h-px w-12 bg-forest-600" />
//                   <span className="font-body text-xs uppercase tracking-[0.2em] text-forest-700">
//                     Ideas for a better tomorrow
//                   </span>
//                 </div>
//               </Reveal>
//             </div>

//             {/* Right Image */}
//             <Reveal delay={250}>
//               <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
//                 <motion.div
//                   style={{ y: imgY }}
//                   whileHover={{ y: -4 }}
//                   className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-forest-100 shadow-[0_30px_80px_-20px_rgba(23,59,43,0.35)] ring-1 ring-forest-900/10"
//                 >
//                   <img
//                     src="https://images.openai.com/static-rsc-4/_XWCHah7VybwyyGVORdALx_9q5SO4uUszrpGj2AUam6MVslBdIp95CDfAp12bpiGJ7TIdKBlGMc5mfSSDzGfaPTSjVTsmY2UG_7boh2jLFDno9NnO47BCKK2ERb2NCA83-yh-4e1Y_fSYu_s_SR3k0kU0r2mqW1wX3v9LqC5pyqhDiAxtfsXaZTTPzCdNFEg?purpose=fullsize"
//                     alt="Sustainable energy and engineering innovation"
//                     className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-forest-900/5 to-transparent" />

//                   <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:inset-x-6 md:bottom-6">
//                     <p className="font-body text-xs uppercase tracking-[0.2em] text-white/80">
//                       Explore • Learn • Innovate
//                     </p>
//                     <p className="mt-2 font-heading text-xl text-white md:text-2xl">
//                       Stories that inspire change.
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   aria-hidden="true"
//                   animate={reduce ? undefined : { rotate: 360 }}
//                   transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//                   className="absolute -bottom-8 -left-8 -z-10 h-28 w-28 rounded-full border border-dashed border-forest-600/30"
//                 />
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── New solar insights block ── */}
//       <Section><SolarHero /></Section>
//       <Section><FeaturedArticle /></Section>
//       <Section><ArticleExplorer /></Section>
//       <Section><QuickInsights /></Section>

//       {/* ── Existing sections ── */}
//       <Section><LatestInsights /></Section>
//       <Section><RoadMapSection /></Section>
//       <Section><DigitalMarketingSection /></Section>
//       <Section><InsightArticlesSection /></Section>

//       {/* ── Closing newsletter + CTA ── */}
//       <Section><NewsletterSection /></Section>

//       <ClosingCta title={['Ideas into', 'practice.']} to="/contact" cta="Get in touch" />
//       <div className="hidden">
//         <Link to="/contact">Contact</Link>
//       </div>
//     </main>
//   );
// }

// Insights.tsx

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

import HeroSection from "../components/InsightsCompo/HeroSection";
import { Journey, Benefits } from "../components/InsightsCompo/SolorJourney";
import ArticleList from "../components/InsightsCompo/ArticleList";
import KnowledgeHub from "../components/InsightsCompo/Knowledgehub";
import ClosingCTA from "../components/InsightsCompo/ClosingCTA";

export default function InsightsPage() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    let id: number;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-white font-sans">
        <HeroSection />
        <Journey />
        <Benefits />
        <ArticleList />
        <KnowledgeHub />
        <ClosingCTA />
      </main>
    </MotionConfig>
  );
}