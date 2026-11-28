// import { useState } from "react";

// type Solution = {
//   id: string;
//   name: string;
//   summary: string;
//   points: string[];
//   href: string;
// };

// const solutions: Solution[] = [
//   {
//     id: "energy-efficiency",
//     name: "Energy Efficiency & Audit",
//     summary:
//       "Cut energy waste, lower costs and boost performance with data-driven efficiency audits and upgrades.",
//     points: ["On-site energy audit", "Loss and load analysis", "Upgrade roadmap with payback"],
//     href: "/energy",
//   },
//   {
//     id: "clean-energy",
//     name: "Clean Energy",
//     summary:
//       "Move to a greener, more resilient power supply with scalable renewable energy installations.",
//     points: ["Solar and renewable systems", "Sized to your load", "Installation and handover"],
//     href: "/energy",
//   },
//   {
//     id: "ibms",
//     name: "IBMS",
//     summary:
//       "Bring your facility's core systems onto one platform for safer, smarter and more efficient buildings.",
//     points: ["Single control dashboard", "Automated schedules and alerts", "Live energy monitoring"],
//     href: "/projects",
//   },
//   {
//     id: "digital",
//     name: "Digital Solutions",
//     summary:
//       "Digital tools and data architecture that support your business transformation.",
//     points: ["Data capture and reporting", "Custom dashboards", "Systems integration"],
//     href: "/projects",
//   },
//   {
//     id: "automation",
//     name: "Industrial Automation",
//     summary:
//       "Streamline production lines and speed up output with robotic and automation systems.",
//     points: ["Line automation", "Robotic cells", "Controls and commissioning"],
//     href: "/projects",
//   },
//   {
//     id: "prefab",
//     name: "Pre-fab Structures",
//     summary:
//       "Shorten your construction timeline with durable, rapidly deployable prefabricated structures.",
//     points: ["Factory-built components", "Fast on-site assembly", "Built for repeat use"],
//     href: "/projects",
//   },
//   {
//     id: "press",
//     name: "Press Components",
//     summary:
//       "Precision, heavy-duty press components engineered to your manufacturing requirements.",
//     points: ["Made to drawing", "Heavy-duty tolerances", "Custom batches"],
//     href: "/projects",
//   },
//   {
//     id: "management",
//     name: "Sustainable Management",
//     summary:
//       "Frameworks that tie long-term growth to environmental responsibility across the enterprise.",
//     points: ["Sustainability strategy", "Waste and resource planning", "Progress tracking"],
//     href: "/projects",
//   },
// ];

// export default function SolutionsSection() {
//   const [active, setActive] = useState(0);
//   const current = solutions[active];

//   return (
//     <section
//       aria-labelledby="solutions-heading"
//       className="bg-[#F2F5F1] px-6 py-20 text-[#16281F] md:px-12 lg:py-28"
//     >
//       <div className="mx-auto max-w-6xl">
//         <div className="max-w-2xl">
//           <h2
//             id="solutions-heading"
//             className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
//           >
//             Sustainable solutions for modern businesses
//           </h2>
//           <p className="mt-5 text-lg leading-relaxed text-[#3D5246]">
//             Terra Ecopreneurs guides businesses toward sustainable growth. We
//             optimise your operations to cut waste and protect long-term
//             profitability.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
//           {/* Selector */}
//           <div
//             role="tablist"
//             aria-label="Terra solutions"
//             className="flex flex-col border-y border-[#16281F]/15"
//           >
//             {solutions.map((s, i) => {
//               const selected = i === active;
//               return (
//                 <button
//                   key={s.id}
//                   role="tab"
//                   id={`tab-${s.id}`}
//                   aria-selected={selected}
//                   aria-controls="solution-panel"
//                   onClick={() => setActive(i)}
//                   className={`flex items-center justify-between border-b border-[#16281F]/10 px-4 py-4 text-left text-lg font-medium transition-colors last:border-b-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D4F] focus-visible:ring-inset ${
//                     selected
//                       ? "bg-[#16281F] text-white"
//                       : "text-[#16281F] hover:bg-[#16281F]/5"
//                   }`}
//                 >
//                   <span>{s.name}</span>
//                   <span
//                     aria-hidden="true"
//                     className={`h-2.5 w-2.5 rounded-full ${
//                       selected ? "bg-[#E3A92B]" : "bg-[#16281F]/20"
//                     }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           {/* Detail */}
//           <div
//             role="tabpanel"
//             id="solution-panel"
//             aria-labelledby={`tab-${current.id}`}
//             className="flex flex-col justify-between rounded-2xl bg-[#16281F] p-8 text-white md:p-10"
//           >
//             <div>
//               <h3 className="text-3xl font-semibold tracking-tight">{current.name}</h3>
//               <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
//                 {current.summary}
//               </p>

//               <ul className="mt-8 space-y-3">
//                 {current.points.map((p) => (
//                   <li key={p} className="flex items-start gap-3 text-base text-white/90">
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 20 20"
//                       className="mt-1 h-4 w-4 flex-none text-[#E3A92B]"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M4 10.5l4 4 8-9" />
//                     </svg>
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-10 flex flex-wrap items-center gap-4">
//               <a
//                 href={current.href}
//                 className="rounded-full bg-[#E3A92B] px-6 py-3 font-semibold text-[#16281F] transition-colors hover:bg-[#f0b93f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//               >
//                 Explore {current.name}
//               </a>
//               <a
//                 href="#contact"
//                 className="px-2 py-3 font-medium text-white underline underline-offset-4 hover:text-[#E3A92B] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//               >
//                 Talk to our team
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";

type Solution = {
  id: string;
  name: string;
  summary: string;
  points: string[];
  href: string;
  image: string;
};

const solutions: Solution[] = [
  {
    id: "energy-efficiency",
    name: "Energy Efficiency & Audit",
    summary:
      "Cut energy waste, lower costs and boost performance with data-driven efficiency audits and upgrades.",
    points: [
      "On-site energy audit",
      "Loss and load analysis",
      "Upgrade roadmap with payback",
    ],
    href: "/energy",
    image:
      "https://i.pinimg.com/1200x/33/76/04/33760477aaba407e75c57ac63111ec98.jpg",
  },
  {
    id: "clean-energy",
    name: "Clean Energy",
    summary:
      "Move to a greener, more resilient power supply with scalable renewable energy installations.",
    points: [
      "Solar and renewable systems",
      "Sized to your load",
      "Installation and handover",
    ],
    href: "/energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "ibms",
    name: "IBMS",
    summary:
      "Bring your facility's core systems onto one platform for safer, smarter and more efficient buildings.",
    points: [
      "Single control dashboard",
      "Automated schedules and alerts",
      "Live energy monitoring",
    ],
    href: "/projects",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "digital",
    name: "Digital Solutions",
    summary:
      "Digital tools and data architecture that support your business transformation.",
    points: [
      "Data capture and reporting",
      "Custom dashboards",
      "Systems integration",
    ],
    href: "/projects",
    image:
      "https://i.pinimg.com/1200x/84/9e/62/849e6238fc4b9a326589fc6f212bf90f.jpg",
  },
  {
    id: "automation",
    name: "Industrial Automation",
    summary:
      "Streamline production lines and speed up output with robotic and automation systems.",
    points: [
      "Line automation",
      "Robotic cells",
      "Controls and commissioning",
    ],
    href: "/projects",
    image:
      "https://i.pinimg.com/736x/28/ed/f2/28edf2feadc32e02a64637e83781d677.jpg",
  },
  {
    id: "prefab",
    name: "Pre-fab Structures",
    summary:
      "Shorten your construction timeline with durable, rapidly deployable prefabricated structures.",
    points: [
      "Factory-built components",
      "Fast on-site assembly",
      "Built for repeat use",
    ],
    href: "/projects",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "press",
    name: "Press Components",
    summary:
      "Precision, heavy-duty press components engineered to your manufacturing requirements.",
    points: [
      "Made to drawing",
      "Heavy-duty tolerances",
      "Custom batches",
    ],
    href: "/projects",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "management",
    name: "Sustainable Management",
    summary:
      "Frameworks that tie long-term growth to environmental responsibility across the enterprise.",
    points: [
      "Sustainability strategy",
      "Waste and resource planning",
      "Progress tracking",
    ],
    href: "/projects",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section
      aria-labelledby="solutions-heading"
      className="bg-[#F2F5F1] px-6 py-20 text-[#16281F] md:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2
            id="solutions-heading"
            className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Sustainable solutions for modern businesses
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#3D5246]">
            Terra Ecopreneurs guides businesses toward sustainable growth. We
            optimise your operations to cut waste and protect long-term
            profitability.
          </p>
        </div>

        {/* Solutions */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Left Solution List */}
          <div
            role="tablist"
            aria-label="Terra solutions"
            className="flex flex-col border-y border-[#16281F]/15"
          >
            {solutions.map((s, i) => {
              const selected = i === active;

              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls="solution-panel"
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-between border-b border-[#16281F]/10 px-4 py-4 text-left text-lg font-medium transition-all duration-300 last:border-b-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D4F] focus-visible:ring-inset ${
                    selected
                      ? "bg-[#16281F] text-white"
                      : "text-[#16281F] hover:bg-[#16281F]/5"
                  }`}
                >
                  <span>{s.name}</span>

                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      selected
                        ? "bg-[#E3A92B]"
                        : "bg-[#16281F]/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Image + Content */}
          <div
            role="tabpanel"
            id="solution-panel"
            aria-labelledby={`tab-${current.id}`}
            key={current.id}
            className="relative min-h-[540px] overflow-hidden rounded-2xl bg-[#16281F] animate-[fadeIn_0.5s_ease-in-out]"
          >
            {/* Background Image */}
            <img
              src={current.image}
              alt={current.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102319] via-[#102319]/70 to-black/10" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[540px] flex-col justify-between p-7 text-white md:p-10">
              <div>
                <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                  Sustainable Solutions
                </span>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                  {current.name}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                  {current.summary}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {current.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-base text-white/90"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 flex-none text-[#E3A92B]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>

                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={current.href}
                  className="rounded-full bg-[#E3A92B] px-6 py-3 font-semibold text-[#16281F] transition-all duration-300 hover:bg-[#f0b93f] hover:-translate-y-1"
                >
                  Explore {current.name}
                </a>

                <a
                  href="/contact"
                  className="px-2 py-3 font-medium text-white underline underline-offset-4 transition-colors hover:text-[#E3A92B]"
                >
                  Talk to our team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}