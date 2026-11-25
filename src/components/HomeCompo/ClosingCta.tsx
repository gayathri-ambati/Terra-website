// import { Link } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import { MaskedLines, Reveal } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';

// interface ClosingCtaProps {
//   title?: string[];
//   to?: string;
//   cta?: string;
// }

// export function ClosingCta({
//   title = ['Let us build', 'what lasts.'],
//   to = '/contact',
//   cta = 'Start a conversation',
// }: ClosingCtaProps) {
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


import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MaskedLines, Reveal } from '@/components/Reveal';

interface ClosingCtaProps {
  title?: string[];
  to?: string;
  cta?: string;
}

export function ClosingCta({
  title = ['Let us build', 'what lasts.'],
  to = '/contact',
  cta = 'Start a conversation',
}: ClosingCtaProps) {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Solar Energy Background */}
      <img
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Content */}
      <div className="shell relative z-10 text-center">
        <MaskedLines
          lines={title}
          className="headline-xl mx-auto max-w-4xl text-forest-800"
        />

        <Reveal delay={300}>
          <Link
            to={to}
            className="btn-primary mt-12 inline-flex items-center gap-2"
          >
            {cta}
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}