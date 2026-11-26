// // components/SolutionsCompo/SolutionsList.tsx
// import { solutions } from '@/lib/content';
// import { Reveal } from '@/components/Reveal';
// import { SolutionCard } from './SolutionCard';

// const SCENE: Record<string, 'energy' | 'agri' | 'industry' | 'hero'> = {
//   'Energy Efficiency & Audit': 'energy',
//   'Clean Energy': 'hero',
//   IBMS: 'industry',
//   'Digital Solutions': 'industry',
//   'Industrial Automation': 'industry',
//   'Prefabricated Structures': 'energy',
//   'Press Components': 'industry',
//   'Sustainable Management': 'agri',
// };

// export function SolutionsList() {
//   return (
//     <section className="bg-ivory py-20 md:py-28">
//       <div className="shell space-y-6">
//         {solutions.map((s, i) => (
//           <Reveal key={s.code} delay={Math.min(i, 2) * 80}>
//             <SolutionCard
//               solution={s}
//               index={i}
//               sceneVariant={SCENE[s.title] ?? 'energy'}
//             />
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }





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
    <section className="bg-ivory py-20 md:py-28">
      <div className="shell">
        {/* gap-8 = same tight spacing between rows and columns */}
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