
// import { company } from '@/lib/content';
// import { MaskedLines, Reveal } from '@/components/Reveal';

// export function ApproachSection() {
//   return (
//     <section className="relative overflow-hidden bg-linen py-24 md:py-36">
//       {/* Decorative background element */}
//       <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-forest-800/5 blur-3xl" />

//       <div className="shell relative">
//         {/* Header with eyebrow + headline */}
//         <div className="max-w-2xl">
//           <Reveal>
//             <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
//               <span className="h-px w-8 bg-forest-600" />
//               How we work
//             </span>
//           </Reveal>
//           <MaskedLines
//             lines={['Our approach']}
//             className="headline-lg mt-4 text-forest-800"
//           />
//           <Reveal delay={100}>
//             <p className="mt-6 font-body text-base leading-relaxed text-charcoal/70 md:text-lg">
//               A considered process built on intention, craft, and lasting results.
//             </p>
//           </Reveal>
//         </div>

//         {/* Cards grid */}
//         <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
//           {company.philosophy.map((p, i) => (
//             <Reveal key={p.title} delay={i * 120}>
//               <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-forest-800/10 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-forest-800/20 hover:shadow-xl hover:shadow-forest-800/5 md:p-10">
//                 {/* Large decorative number */}
//                 <span
//                   aria-hidden
//                   className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[6rem] font-medium leading-none text-forest-800/[0.06] transition-colors duration-500 group-hover:text-forest-800/10 md:text-[7rem]"
//                 >
//                   0{i + 1}
//                 </span>

//                 {/* Accent number badge */}
//                 <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-ivory">
//                   <span className="font-heading text-sm font-bold">0{i + 1}</span>
//                 </div>

//                 <h3 className="relative mt-6 font-display text-2xl font-medium text-forest-800 md:text-[1.65rem]">
//                   {p.title}
//                 </h3>

//                 {/* Animated underline */}
//                 <span className="mt-3 h-px w-10 bg-forest-600/40 transition-all duration-500 group-hover:w-16 group-hover:bg-forest-600" />

//                 <p className="relative mt-4 font-body text-sm leading-relaxed text-charcoal/70 md:text-[0.95rem]">
//                   {p.body}
//                 </p>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { company } from '@/lib/content';
import { Reveal } from '@/components/Reveal';

const icons = [
  // Delivery / process
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
    <path d="M9 18h34l-5 27H23" />
    <path d="M13 27H5M10 35H2M15 43H7" />
    <path d="M38 27h13a8 8 0 0 1 8 8l-2 10H42" />
    <circle cx="21" cy="48" r="6" />
    <circle cx="48" cy="48" r="6" />
  </svg>,

  // Communication / collaboration
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
    <path d="M8 9h27a5 5 0 0 1 5 5v15a5 5 0 0 1-5 5H22l-9 8v-8H8a5 5 0 0 1-5-5V14a5 5 0 0 1 5-5Z" />
    <path d="M13 20h17M21 13v14M45 20h10a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5h-4v7l-9-7h-5" />
    <path d="m46 29 3 3 6-7" />
    <path d="M12 49h22M22 43v12M15 55l-3 4M29 55l3 4" />
  </svg>,

  // Design / innovation
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
    <path d="M39 9a12 12 0 0 0-8 21c3 2 4 5 4 8h9c0-3 1-6 4-8a12 12 0 0 0-9-21Z" />
    <path d="M36 44h9M37 49h7M39 54h3" />
    <path d="m39 15 2 5 5 .5-4 3 1.5 5-4.5-3-4.5 3 1.5-5-4-3 5-.5Z" />
    <path d="M15 33 8 56l5 3 9-22-7-4Z" />
    <path d="m15 33 7 4M8 56l5 3" />
    <path d="M23 38c8 0 10 5 10 11" />
  </svg>,
];

export function ApproachSection() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden py-16 sm:py-20 md:min-h-[720px] md:py-24">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Light overlay */}
      <div className="absolute inset-0 -z-10 bg-[#e9e5dd]/35" />

      {/* Decorative Arrow Shapes */}
      <div className="pointer-events-none absolute left-0 top-8 hidden opacity-70 md:block">
        <svg
          viewBox="0 0 180 210"
          className="h-48 w-44 lg:h-56 lg:w-52"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M0 20 L70 78 L0 137" />
          <path d="M40 0 L140 78 L40 157" />
          <path d="M40 0 L90 78 L40 157" opacity=".6" />
        </svg>
      </div>

      <div className="shell relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <Reveal>
          <div className="flex justify-center">
            <div className="rounded-md bg-[#293d48] px-7 py-4 text-center shadow-lg sm:px-10 sm:py-4 md:px-12">
              <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
                Our Approach
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Heading underline */}
        <Reveal delay={100}>
          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-white" />
        </Reveal>

        {/* Philosophy Cards */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-5 lg:gap-6">

          {company.philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group flex min-h-[330px] h-full flex-col items-center rounded-2xl border-[3px] border-white/95 bg-white/75 px-6 py-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl sm:min-h-[320px] md:min-h-[330px] md:px-5 md:py-7 lg:px-7">

                {/* Icon */}
                <div className="flex h-16 items-center justify-center text-[#30434c] transition-transform duration-500 group-hover:scale-110">
                  {icons[i % icons.length]}
                </div>

                {/* Title */}
                <h3 className="mt-5 max-w-[230px] font-heading text-xl font-bold leading-[1.15] text-[#30434c] sm:text-xl md:text-[19px] lg:text-xl">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-7 max-w-[230px] font-body text-sm font-normal leading-[1.55] text-[#3d4549]/90 sm:text-sm">
                  {p.body}
                </p>

              </article>
            </Reveal>
          ))}

        </div>

        {/* Bottom CTA */}
        <Reveal delay={350}>
          <div className="mt-10 flex justify-center md:mt-10">
            <a
              href="/contact"
              className="inline-flex min-h-[46px] w-full max-w-[350px] items-center justify-center rounded-xl border-[3px] border-white bg-[#293d48] px-6 py-2.5 text-center font-heading text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#405b68] sm:w-auto sm:min-w-[345px] sm:text-base"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
