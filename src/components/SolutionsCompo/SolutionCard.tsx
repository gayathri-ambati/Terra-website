
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


import { useState } from 'react';
import type { solutions } from '@/lib/content';

export type Solution = (typeof solutions)[number];

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=1000&q=80&auto=format&fit=crop`;

/* Keyed by `code` so each image matches its topic. Replace any URL with
   your own project photos. */
export const IMAGES: Record<string, { src: string; alt: string }> = {
  EE: { src: u('photo-1558449028-b53a39d100fc'), alt: 'Rooftop solar panels on a home' },
  CE: { src: u('photo-1509391366360-2e959784a276'), alt: 'Rows of solar panels under a blue sky' },
  IB: { src: u('photo-1473341304170-971dccb5ac1e'), alt: 'Power lines and energy infrastructure' },
  DS: { src: u('photo-1466611653911-95081537e5b7'), alt: 'Wind turbines over green fields' },
  IA: { src: u('photo-1611365892117-00ac5ef43c90'), alt: 'Industrial plant and machinery' },
  PS: { src: u('photo-1595437193398-f24279553f4f'), alt: 'Steel-framed building structure' },
  PC: { src: u('photo-1497440001374-f26997328c1b'), alt: 'Precision engineering workshop' },
  SM: { src: u('photo-1497435334941-8c899ee9e8e9'), alt: 'Solar farm at golden hour' },
};

interface SolutionCardProps {
  solution: Solution;
  index: number;
  total: number;
}

export function SolutionCard({ solution: s, index, total }: SolutionCardProps) {
  const [failed, setFailed] = useState(false);
  const image = IMAGES[s.code];

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-forest-900/10 bg-white text-forest-900 shadow-[0_30px_60px_-20px_rgba(6,40,31,0.35)]">
      {/* Image above */}
      <div className="relative h-[50%] shrink-0 overflow-hidden bg-sage-400/40">
        {image && !failed && (
          <img
            src={image.src}
            alt={image.alt}
            draggable={false}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
        <span className="absolute left-4 top-4 grid h-10 min-w-10 place-items-center rounded-full bg-white px-3 font-display text-sm tracking-wider text-forest-900 shadow-md">
          {s.code}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-forest-900/70 px-3 py-1 font-body text-xs text-ivory backdrop-blur">
          {index + 1} of {total}
        </span>
      </div>

      {/* Content below */}
      <div className="relative flex flex-1 flex-col p-6">
        <span className="absolute left-6 top-0 h-1 w-12 rounded-b bg-sage-400" />
        <h3 className="mt-2 font-display text-2xl font-medium leading-tight">
          {s.title}
        </h3>
        <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-forest-800/80">
          {s.blurb}
        </p>
        <p className="mt-auto line-clamp-3 border-t border-forest-900/10 pt-4 font-body text-xs leading-relaxed text-forest-800/60">
          {s.detail}
        </p>
      </div>
    </article>
  );
}