
// import { Link } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import type { solutions } from '@/lib/content';

// type Solution = (typeof solutions)[number];

// interface SolutionCardProps {
//   solution: Solution;
//   index: number;
// }

// const PANEL_STYLES = [
//   'bg-forest-800 text-ivory',
//   'bg-linen text-forest-800',
//   'bg-sage-400 text-forest-900',
// ];

// // One distinct image per card. Keys match solution.code —
// // adjust keys if your content uses different codes.
// const SOLUTION_IMAGES: Record<string, { src: string; alt: string }> = {
//   '01': {
//     src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop',
//     alt: 'Sunlight streaming through a dense old-growth forest',
//   },
//   '02': {
//     src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop',
//     alt: 'Wind turbines standing over green fields at dusk',
//   },
//   '03': {
//     src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop',
//     alt: 'Young seedlings growing in rows inside a greenhouse nursery',
//   },
//   '04': {
//     src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80&auto=format&fit=crop',
//     alt: 'Aerial view of a winding river cutting through woodland',
//   },
//   '05': {
//     src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop',
//     alt: 'Rows of solar panels under a clear blue sky',
//   },
//   '06': {
//     src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop',
//     alt: 'Hands cradling a young green plant in dark soil',
//   },
// };

// const DEFAULT_IMAGE = {
//   src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop',
//   alt: 'Misty forest landscape at sunrise',
// };

// export function SolutionCard({ solution: s, index: i }: SolutionCardProps) {
//   const panelStyle = PANEL_STYLES[i % 3];
//   const labelStyle = i % 3 === 0 ? 'text-sage-400' : 'text-forest-600';
//   const image = SOLUTION_IMAGES[s.code] ?? DEFAULT_IMAGE;

//   return (
//     <article
//       className={`group flex h-full flex-col overflow-hidden rounded-sm ${panelStyle}`}
//     >
//       {/* Image — fixed aspect ratio keeps every card's image the same height */}
//       <div className="relative aspect-[16/10] w-full overflow-hidden">
//         <img
//           src={image.src}
//           alt={image.alt}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />
//         <div className="pointer-events-none absolute inset-0 bg-forest-900/0 transition-colors duration-500 group-hover:bg-forest-900/10" />
//       </div>

//       {/* Content */}
//       <div className="flex flex-1 flex-col p-8 md:p-10">
//         <span className={`label-caps ${labelStyle}`}>{s.code}</span>

//         <h2 className="mt-4 font-display text-2xl font-medium md:text-3xl">
//           {s.title}
//         </h2>

//         <p className="mt-4 flex-1 font-body text-sm leading-relaxed opacity-80">
//           {s.blurb}
//         </p>

//         {/* Footer link, always at the bottom so all cards in a row align */}
//         <Link
//           to="/contact"
//           aria-label={`Enquire about ${s.title}`}
//           className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium transition-all duration-300 group-hover:gap-3"
//         >
//           Enquire
//           <ArrowUpRight size={16} />
//         </Link>
//       </div>
//     </article>
//   );
// }



import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { solutions } from '@/lib/content';

type Solution = (typeof solutions)[number];

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

const PANEL_STYLES = [
  'bg-forest-800 text-ivory',
  'bg-linen text-forest-800',
  'bg-sage-400 text-forest-900',
];

// One distinct image per card. Keyed by position (index) so every card
// gets a unique image regardless of what `code` values your content uses.
const SOLUTION_IMAGES: { src: string; alt: string }[] = [
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop',
    alt: 'Sunlight streaming through a dense old-growth forest',
  },
  {
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop',
    alt: 'Wind turbines standing over green fields at dusk',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop',
    alt: 'Young seedlings growing in rows inside a greenhouse nursery',
  },
  {
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80&auto=format&fit=crop',
    alt: 'Aerial view of a winding river cutting through woodland',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop',
    alt: 'Rows of solar panels under a clear blue sky',
  },
  {
    src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop',
    alt: 'Hands cradling a young green plant in dark soil',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop',
    alt: 'Misty forest landscape at sunrise',
  },
  {
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=80&auto=format&fit=crop',
    alt: 'Sun rays filtering through tall trees onto a forest floor',
  },
  {
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&auto=format&fit=crop',
    alt: 'Mountain valley with a river and evergreen forest',
  },
];

export function SolutionCard({ solution: s, index: i }: SolutionCardProps) {
  const panelStyle = PANEL_STYLES[i % 3];
  const labelStyle = i % 3 === 0 ? 'text-sage-400' : 'text-forest-600';

  // Index-based lookup guarantees a unique image per card, even if `code`
  // values differ from what we expect. Falls back to cycling the array
  // if there are more cards than images.
  const image = SOLUTION_IMAGES[i % SOLUTION_IMAGES.length];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-sm ${panelStyle}`}
    >
      {/* Image — fixed aspect ratio keeps every card's image the same height */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-forest-900/0 transition-colors duration-500 group-hover:bg-forest-900/10" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <span className={`label-caps ${labelStyle}`}>{s.code}</span>

        <h3 className="mt-4 font-display text-2xl font-medium md:text-3xl">
          {s.title}
        </h3>

        <p className="mt-4 flex-1 font-body text-sm leading-relaxed opacity-80">
          {s.blurb}
        </p>

        {/* Footer link, always at the bottom so all cards in a row align */}
        <Link
          to="/contact"
          aria-label={`Enquire about ${s.title}`}
          className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium transition-all duration-300 group-hover:gap-3"
        >
          Enquire
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}