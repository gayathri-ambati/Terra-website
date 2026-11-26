
// import { solutions } from '@/lib/content';
// import { Reveal } from '@/components/Reveal';
// import { SolutionCard } from './SolutionCard';

// export function SolutionsList() {
//   return (
//     <section className="bg-ivory py-20 md:py-28">
//       <div className="shell">
//         {/* gap-8 = same tight spacing between rows and columns */}
//         <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {solutions.map((s, i) => (
//             <Reveal
//               key={s.code}
//               delay={Math.min(i % 3, 2) * 80}
//               className="h-full"
//             >
//               <SolutionCard solution={s} index={i} />
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { solutions } from '@/lib/content';
import { Reveal } from '@/components/Reveal';
import { SolutionCard } from './SolutionCard';

export function SolutionsList() {
  return (
    <section id="solutions" className="bg-ivory py-20 md:py-28">
      <div className="shell">
        {/* Section heading */}
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <span className="label-caps text-forest-600">What We Do</span>
          <h2 className="mt-4 font-display text-3xl font-medium text-forest-900 md:text-4xl lg:text-5xl">
            Solutions rooted in nature
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-forest-800/70">
            From reforestation to renewable energy, each of our programmes is
            designed to restore ecosystems and build resilient communities.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal
              key={s.code}
              delay={Math.min(i % 3, 2) * 80}
              className="h-full"
            >
              <SolutionCard solution={s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}