// import { company } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';

// export function ApproachSection() {
//   return (
//     <section className="bg-linen py-24 md:py-36">
//       <div className="shell">
//         <MaskedLines lines={['Our approach']} className="headline-lg text-forest-800" />
//         <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-forest-800/10 md:grid-cols-3">
//           {company.philosophy.map((p, i) => (
//             <Reveal key={p.title} delay={i * 120} className="bg-ivory p-10">
//               <span className="font-heading text-sm font-bold text-forest-600">0{i + 1}</span>
//               <h3 className="mt-6 font-display text-2xl font-medium text-forest-800">{p.title}</h3>
//               <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{p.body}</p>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { company } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-linen py-24 md:py-36">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-forest-800/5 blur-3xl" />

      <div className="shell relative">
        {/* Header with eyebrow + headline */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
              <span className="h-px w-8 bg-forest-600" />
              How we work
            </span>
          </Reveal>
          <MaskedLines
            lines={['Our approach']}
            className="headline-lg mt-4 text-forest-800"
          />
          <Reveal delay={100}>
            <p className="mt-6 font-body text-base leading-relaxed text-charcoal/70 md:text-lg">
              A considered process built on intention, craft, and lasting results.
            </p>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {company.philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-forest-800/10 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-forest-800/20 hover:shadow-xl hover:shadow-forest-800/5 md:p-10">
                {/* Large decorative number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[6rem] font-medium leading-none text-forest-800/[0.06] transition-colors duration-500 group-hover:text-forest-800/10 md:text-[7rem]"
                >
                  0{i + 1}
                </span>

                {/* Accent number badge */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-ivory">
                  <span className="font-heading text-sm font-bold">0{i + 1}</span>
                </div>

                <h3 className="relative mt-6 font-display text-2xl font-medium text-forest-800 md:text-[1.65rem]">
                  {p.title}
                </h3>

                {/* Animated underline */}
                <span className="mt-3 h-px w-10 bg-forest-600/40 transition-all duration-500 group-hover:w-16 group-hover:bg-forest-600" />

                <p className="relative mt-4 font-body text-sm leading-relaxed text-charcoal/70 md:text-[0.95rem]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}