
// type Pillar = {
//   title: string;
//   body: string;
// };

// type Step = {
//   title: string;
//   body: string;
// };

// type Ring = {
//   base: string;
//   dark: string;
//   light: string;
//   badge: string;
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

// /* Ring colours, top to bottom (same order as the reference infographic) */
// const rings: Ring[] = [
//   { base: "#E0234E", dark: "#B01A3C", light: "#F0446C", badge: "from-[#F2406E] to-[#D81E5B]" },
//   { base: "#19AEE6", dark: "#1389B8", light: "#4DC4F0", badge: "from-[#2EB9EE] to-[#1497D4]" },
//   { base: "#EE6A2B", dark: "#C4501A", light: "#F68A55", badge: "from-[#F57C3C] to-[#E85A1C]" },
//   { base: "#E8368F", dark: "#B92674", light: "#F25AA8", badge: "from-[#F04C9C] to-[#D92A82]" },
// ];

// /* Stacked 3D rings, drawn bottom to top so upper rings overlap lower ones */
// function RingStack() {
//   const cx = 200;
//   const rx = 150;
//   const ry = 34;
//   const h = 62;
//   const gap = 66;
//   const top = 44;

//   return (
//     <svg
//       viewBox="0 0 400 340"
//       role="img"
//       aria-label="Four stacked rings representing the four steps: Assess, Design, Deliver, Improve"
//       className="mx-auto h-auto w-full max-w-[360px] drop-shadow-[0_24px_24px_rgba(0,0,0,0.18)]"
//     >
//       {rings
//         .map((r, i) => ({ ...r, i }))
//         .reverse()
//         .map(({ base, dark, light, i }) => {
//           const y = top + i * gap;
//           const isLast = i === rings.length - 1;
//           const body = `M${cx - rx},${y} L${cx - rx},${y + h} A${rx},${ry} 0 0 0 ${cx + rx},${y + h} L${cx + rx},${y} Z`;
//           const rightHalf = `M${cx},${y} L${cx},${y + h + ry} A${rx},${ry} 0 0 0 ${cx + rx},${y + h} L${cx + rx},${y} Z`;
//           return (
//             <g key={i}>
//               <path d={body} fill={base} />
//               <path d={rightHalf} fill="#fff" opacity="0.14" />
//               <ellipse cx={cx} cy={y} rx={rx} ry={ry} fill={light} />
//               <ellipse
//                 cx={cx}
//                 cy={y + 2}
//                 rx={rx - 24}
//                 ry={ry - 8}
//                 fill={isLast ? "#EDEDED" : dark}
//               />
//             </g>
//           );
//         })}
//     </svg>
//   );
// }

// function StepItem({ step, index }: StepItemProps) {
//   return (
//     <li className="flex items-start gap-4">
//       <span
//         className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${rings[index].badge} text-sm font-bold text-white shadow-md`}
//       >
//         0{index + 1}
//       </span>
//       <div>
//         <h3 className="text-base font-bold text-[#1A1A1A]">{step.title}</h3>
//         <p className="mt-1 max-w-xs text-sm leading-relaxed text-[#555]">{step.body}</p>
//       </div>
//     </li>
//   );
// }

// /* About section 1: who we are */
// export function AboutIntroSection() {
//   return (
//     <section
//       aria-labelledby="about-intro-heading"
//       className="bg-[#EFEFEF] px-6 py-20 text-[#1A1A1A] md:px-12 lg:py-28"
//     >
//       <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
//         <div>
//           <h2
//             id="about-intro-heading"
//             className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
//           >
//             Electrical engineering for a cleaner way to grow
//           </h2>
//           <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#555]">
//             Terra Ecopreneurs LLP builds smart, eco-friendly technology and
//             automation solutions that help businesses cut waste, lower costs and
//             grow with less impact on the environment.
//           </p>
//           <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#555]">
//             From energy audits and renewable installations to industrial
//             automation and agriculture, we work as a long-term partner, not a
//             one-off vendor.
//           </p>
//         </div>

//         <ul className="flex flex-col gap-8 self-center">
//           {pillars.map((p, i) => (
//             <li key={p.title} className="flex items-start gap-4">
//               <span
//                 className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${rings[i].badge} text-sm font-bold text-white shadow-md`}
//                 aria-hidden="true"
//               >
//                 {p.title.charAt(0)}
//               </span>
//               <div>
//                 <h3 className="text-base font-bold">{p.title}</h3>
//                 <p className="mt-1 text-sm leading-relaxed text-[#555]">{p.body}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// /* About section 2: how we work (infographic: 2 steps left, rings centre, 2 steps right) */
// export function AboutProcessSection() {
//   return (
//     <section
//       aria-labelledby="about-process-heading"
//       className="bg-[#EFEFEF] px-6 pb-20 pt-4 text-[#1A1A1A] md:px-12 lg:pb-28"
//     >
//       <div className="mx-auto max-w-6xl">
//         <h2
//           id="about-process-heading"
//           className="text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl"
//         >
//           How we work with you
//         </h2>

//         <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
//           <ol className="order-2 flex flex-col gap-12 lg:order-1 lg:gap-24">
//             {steps.slice(0, 2).map((s, i) => (
//               <StepItem key={s.title} step={s} index={i} />
//             ))}
//           </ol>

//           <div className="order-1 w-full lg:order-2 lg:w-[360px]">
//             <RingStack />
//           </div>

//           <ol start={3} className="order-3 flex flex-col gap-12 lg:gap-24">
//             {steps.slice(2).map((s, i) => (
//               <StepItem key={s.title} step={s} index={i + 2} />
//             ))}
//           </ol>
//         </div>

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
    <li className="flex items-start gap-4">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${badges[index]} text-sm font-bold text-white shadow-md`}
      >
        0{index + 1}
      </span>

      <div>
        <h3 className="text-base font-bold text-[#1A1A1A]">
          {step.title}
        </h3>

        <p className="mt-1 max-w-xs text-sm leading-relaxed text-[#555]">
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
      className="bg-transparent px-6 py-20 text-[#1A1A1A] md:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Left content */}
        <div>
          <h2
            id="about-intro-heading"
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Electrical engineering for a cleaner way to grow
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
        </div>

        {/* Right content: Pillars */}
        <ul className="flex flex-col gap-8 self-center">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="flex items-start gap-4"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${badges[i]} text-sm font-bold text-white shadow-md`}
                aria-hidden="true"
              >
                {p.title.charAt(0)}
              </span>

              <div>
                <h3 className="text-base font-bold">
                  {p.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-[#555]">
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
      className="bg-transparent px-6 pb-20 pt-4 text-[#1A1A1A] md:px-12 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <h2
          id="about-process-heading"
          className="text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          How we work with you
        </h2>

        {/* Process layout */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">

          {/* Left steps */}
          <ol className="order-2 flex flex-col gap-12 lg:order-1 lg:gap-24">
            {steps.slice(0, 2).map((s, i) => (
              <StepItem
                key={s.title}
                step={s}
                index={i}
              />
            ))}
          </ol>

          {/* Center video */}
          <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:w-[420px]">
            <video
              className="aspect-[4/5] w-full rounded-3xl bg-transparent object-cover shadow-[0_24px_40px_rgba(0,0,0,0.2)]"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Terra Ecopreneurs projects video"
            />
          </div>

          {/* Right steps */}
          <ol
            start={3}
            className="order-3 flex flex-col gap-12 lg:gap-24"
          >
            {steps.slice(2).map((s, i) => (
              <StepItem
                key={s.title}
                step={s}
                index={i + 2}
              />
            ))}
          </ol>

        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-5">

          <a
            href="#contact"
            className="rounded-full bg-[#1A1A1A] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#E0234E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0234E] focus-visible:ring-offset-2"
          >
            Start a conversation
          </a>

          <p className="text-[#555]">
            Or write to{" "}
            <a
              href="mailto:ashwin@terraeco.in"
              className="font-medium text-[#1A1A1A] underline underline-offset-4"
            >
              ashwin@terraeco.in
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}
