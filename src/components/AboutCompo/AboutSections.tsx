

// import aboutVideo from "../../assets/solarvideo.mp4";

// type Pillar = {
//   title: string;
//   body: string;
// };

// type Step = {
//   title: string;
//   body: string;
// };

// type StepItemProps = {
//   step: Step;
//   index: number;
// };

// const pillars: Pillar[] = [
//   {
//     title: "Global impact",
//     body: "Every project is measured by what it saves: energy, material and time for the businesses we work with.",
//   },
//   {
//     title: "Innovation",
//     body: "Electrical engineering and automation, applied to problems in factories, buildings and farms.",
//   },
//   {
//     title: "Sustainability",
//     body: "Eco-friendly products and technologies that make growth last, not just grow.",
//   },
// ];

// const steps: Step[] = [
//   {
//     title: "Assess",
//     body: "We study your site, loads and processes to find where energy, material and time are being lost.",
//   },
//   {
//     title: "Design",
//     body: "We engineer a solution sized to your operation, from clean energy to automation and building systems.",
//   },
//   {
//     title: "Deliver",
//     body: "Our team installs, commissions and hands over, with training so your people can run it.",
//   },
//   {
//     title: "Improve",
//     body: "We track results against the plan and keep tuning so savings continue after go-live.",
//   },
// ];

// const badges: string[] = [
//   "from-[#F2406E] to-[#D81E5B]",
//   "from-[#2EB9EE] to-[#1497D4]",
//   "from-[#F57C3C] to-[#E85A1C]",
//   "from-[#F04C9C] to-[#D92A82]",
// ];

// function StepItem({ step, index }: StepItemProps) {
//   return (
//     <li className="flex items-start gap-4">
//       <span
//         className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${badges[index]} text-sm font-bold text-white shadow-md`}
//       >
//         0{index + 1}
//       </span>

//       <div>
//         <h3 className="text-base font-bold text-[#1A1A1A]">
//           {step.title}
//         </h3>

//         <p className="mt-1 max-w-xs text-sm leading-relaxed text-[#555]">
//           {step.body}
//         </p>
//       </div>
//     </li>
//   );
// }

// /* About section 1: Who we are */
// export function AboutIntroSection() {
//   return (
//     <section
//       aria-labelledby="about-intro-heading"
//       className="bg-transparent px-6 py-20 text-[#1A1A1A] md:px-12 lg:py-28"
//     >
//       <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">

//         {/* Left content */}
//         <div>
//           <h2
//             id="about-intro-heading"
//             className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
//           >
//             Electrical engineering for a cleaner way to grow
//           </h2>

//           <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#555]">
//             Terra Ecopreneurs LLP builds smart, eco-friendly technology and
//             automation solutions that help businesses cut waste, lower costs
//             and grow with less impact on the environment.
//           </p>

//           <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#555]">
//             From energy audits and renewable installations to industrial
//             automation and agriculture, we work as a long-term partner, not a
//             one-off vendor.
//           </p>
//         </div>

//         {/* Right content: Pillars */}
//         <ul className="flex flex-col gap-8 self-center">
//           {pillars.map((p, i) => (
//             <li
//               key={p.title}
//               className="flex items-start gap-4"
//             >
//               <span
//                 className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${badges[i]} text-sm font-bold text-white shadow-md`}
//                 aria-hidden="true"
//               >
//                 {p.title.charAt(0)}
//               </span>

//               <div>
//                 <h3 className="text-base font-bold">
//                   {p.title}
//                 </h3>

//                 <p className="mt-1 text-sm leading-relaxed text-[#555]">
//                   {p.body}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </section>
//   );
// }

// /* About section 2: How we work */
// export function AboutProcessSection() {
//   return (
//     <section
//       aria-labelledby="about-process-heading"
//       className="bg-transparent px-6 pb-20 pt-4 text-[#1A1A1A] md:px-12 lg:pb-28"
//     >
//       <div className="mx-auto max-w-6xl">

//         {/* Section heading */}
//         <h2
//           id="about-process-heading"
//           className="text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl"
//         >
//           How we work with you
//         </h2>

//         {/* Process layout */}
//         <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">

//           {/* Left steps */}
//           <ol className="order-2 flex flex-col gap-12 lg:order-1 lg:gap-24">
//             {steps.slice(0, 2).map((s, i) => (
//               <StepItem
//                 key={s.title}
//                 step={s}
//                 index={i}
//               />
//             ))}
//           </ol>

//           {/* Center video */}
//           <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:w-[420px]">
//             <video
//               className="aspect-[4/5] w-full rounded-3xl bg-transparent object-cover shadow-[0_24px_40px_rgba(0,0,0,0.2)]"
//               src={aboutVideo}
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="metadata"
//               aria-label="Terra Ecopreneurs projects video"
//             />
//           </div>

//           {/* Right steps */}
//           <ol
//             start={3}
//             className="order-3 flex flex-col gap-12 lg:gap-24"
//           >
//             {steps.slice(2).map((s, i) => (
//               <StepItem
//                 key={s.title}
//                 step={s}
//                 index={i + 2}
//               />
//             ))}
//           </ol>

//         </div>

//         {/* CTA */}
//         <div className="mt-16 flex flex-wrap items-center justify-center gap-5">

//           <a
//             href="#contact"
//             className="rounded-full bg-[#1A1A1A] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#E0234E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0234E] focus-visible:ring-offset-2"
//           >
//             Start a conversation
//           </a>

//           <p className="text-[#555]">
//             Or write to{" "}
//             <a
//               href="mailto:ashwin@terraeco.in"
//               className="font-medium text-[#1A1A1A] underline underline-offset-4"
//             >
//               ashwin@terraeco.in
//             </a>
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }



import aboutVideo from "../../assets/solarvideo.mp4";

type Pillar = {
  title: string;
  body: string;
};

type Step = {
  title: string;
  body: string;
};

type StepItemProps = {
  step: Step;
  index: number;
};

const pillars: Pillar[] = [
  {
    title: "Global impact",
    body: "Every project is measured by what it saves: energy, material and time for the businesses we work with.",
  },
  {
    title: "Innovation",
    body: "Electrical engineering and automation, applied to problems in factories, buildings and farms.",
  },
  {
    title: "Sustainability",
    body: "Eco-friendly products and technologies that make growth last, not just grow.",
  },
];

const steps: Step[] = [
  {
    title: "Assess",
    body: "We study your site, loads and processes to find where energy, material and time are being lost.",
  },
  {
    title: "Design",
    body: "We engineer a solution sized to your operation, from clean energy to automation and building systems.",
  },
  {
    title: "Deliver",
    body: "Our team installs, commissions and hands over, with training so your people can run it.",
  },
  {
    title: "Improve",
    body: "We track results against the plan and keep tuning so savings continue after go-live.",
  },
];

const badges: string[] = [
  "from-[#F2406E] to-[#D81E5B]",
  "from-[#2EB9EE] to-[#1497D4]",
  "from-[#F57C3C] to-[#E85A1C]",
  "from-[#F04C9C] to-[#D92A82]",
];

function StepItem({ step, index }: StepItemProps) {
  return (
    <li className="group flex items-start gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${badges[index]} text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-105`}
      >
        0{index + 1}
      </span>

      <div>
        <h3 className="text-base font-bold tracking-tight text-[#1A1A1A] md:text-lg">
          {step.title}
        </h3>

        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-[#555]">
          {step.body}
        </p>
      </div>
    </li>
  );
}

/* About section 1: Who we are */
export function AboutIntroSection() {
  return (
    <section
      aria-labelledby="about-intro-heading"
      className="relative overflow-hidden bg-transparent px-6 py-20 text-[#1A1A1A] md:px-12 lg:py-28"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F2406E]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#2EB9EE]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#E0234E] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E0234E]" />
            About Terra
          </span>

          <h2
            id="about-intro-heading"
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.4rem]"
          >
            Electrical engineering for a{" "}
            <span className="bg-gradient-to-r from-[#F2406E] via-[#F04C9C] to-[#2EB9EE] bg-clip-text text-transparent">
              cleaner way to grow
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#555]">
            Terra Ecopreneurs LLP builds smart, eco-friendly technology and
            automation solutions that help businesses cut waste, lower costs
            and grow with less impact on the environment.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#555]">
            From energy audits and renewable installations to industrial
            automation and agriculture, we work as a long-term partner, not a
            one-off vendor.
          </p>

          <div className="mt-8 flex items-center gap-6 border-t border-[#1A1A1A]/10 pt-6">
            <div>
              <p className="text-2xl font-bold tracking-tight text-[#1A1A1A]">100+</p>
              <p className="text-xs font-medium uppercase tracking-wider text-[#777]">Projects</p>
            </div>
            <div className="h-8 w-px bg-[#1A1A1A]/10" />
            <div>
              <p className="text-2xl font-bold tracking-tight text-[#1A1A1A]">30%</p>
              <p className="text-xs font-medium uppercase tracking-wider text-[#777]">Avg. savings</p>
            </div>
            <div className="h-8 w-px bg-[#1A1A1A]/10" />
            <div>
              <p className="text-2xl font-bold tracking-tight text-[#1A1A1A]">24/7</p>
              <p className="text-xs font-medium uppercase tracking-wider text-[#777]">Support</p>
            </div>
          </div>
        </div>

        {/* Right content: Pillars */}
        <ul className="flex flex-col gap-5">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="group flex items-start gap-4 rounded-2xl border border-[#1A1A1A]/8 bg-white/70 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1A1A1A]/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${badges[i]} text-base font-bold text-white shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-105`}
                aria-hidden="true"
              >
                {p.title.charAt(0)}
              </span>

              <div>
                <h3 className="text-base font-bold tracking-tight md:text-lg">
                  {p.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[#555]">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* About section 2: How we work */
export function AboutProcessSection() {
  return (
    <section
      aria-labelledby="about-process-heading"
      className="relative overflow-hidden bg-transparent px-6 pb-20 pt-4 text-[#1A1A1A] md:px-12 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#E0234E] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E0234E]" />
            Our process
          </span>

          <h2
            id="about-process-heading"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            How we{" "}
            <span className="bg-gradient-to-r from-[#F2406E] via-[#F04C9C] to-[#2EB9EE] bg-clip-text text-transparent">
              work with you
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#555]">
            A simple, transparent path from first conversation to long-term savings.
          </p>
        </div>

        {/* Process layout */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {/* Left steps */}
          <ol className="order-2 flex flex-col gap-10 lg:order-1 lg:gap-24">
            {steps.slice(0, 2).map((s, i) => (
              <StepItem key={s.title} step={s} index={i} />
            ))}
          </ol>

          {/* Center video */}
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:w-[420px]">
            {/* Glow ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#F2406E]/20 via-transparent to-[#2EB9EE]/20 blur-2xl"
            />

            <video
              className="relative aspect-[4/5] w-full rounded-[2rem] bg-transparent object-cover shadow-[0_24px_60px_rgba(0,0,0,0.25)] ring-1 ring-black/5"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Terra Ecopreneurs projects video"
            />

            {/* Floating caption chip */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2EB9EE]" />
              Live from our projects
            </div>
          </div>

          {/* Right steps */}
          <ol start={3} className="order-3 flex flex-col gap-10 lg:gap-24">
            {steps.slice(2).map((s, i) => (
              <StepItem key={s.title} step={s} index={i + 2} />
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-5 rounded-3xl border border-[#1A1A1A]/10 bg-white/70 p-8 backdrop-blur sm:flex-row sm:gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-[#E0234E] hover:shadow-[#E0234E]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0234E] focus-visible:ring-offset-2"
          >
            Start a conversation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <p className="text-[#555]">
            Or write to{" "}
            <a
              href="mailto:ashwin@terraeco.in"
              className="font-medium text-[#1A1A1A] underline decoration-[#E0234E]/30 decoration-2 underline-offset-4 transition-colors hover:text-[#E0234E] hover:decoration-[#E0234E]"
            >
              ashwin@terraeco.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}