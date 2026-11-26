// import React from "react";

// type SolarIconType = "sun" | "panel" | "inverter" | "home" | "battery";

// const SolarIcon = ({
//   type,
//   color = "white",
// }: {
//   type: SolarIconType;
//   color?: string;
// }) => {
//   const icons: Record<SolarIconType, React.ReactNode> = {
//     sun: (
//       <>
//         <circle cx="50" cy="50" r="18" fill="currentColor" />
//         <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
//           <path d="M50 10 V23" />
//           <path d="M50 77 V90" />
//           <path d="M10 50 H23" />
//           <path d="M77 50 H90" />
//           <path d="M22 22 L31 31" />
//           <path d="M69 69 L78 78" />
//           <path d="M22 78 L31 69" />
//           <path d="M69 31 L78 22" />
//         </g>
//       </>
//     ),

//     panel: (
//       <>
//         <path
//           d="M18 30 L82 30 L72 65 L28 65 Z"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M38 30 L34 65 M60 30 L56 65 M23 47 H77"
//           stroke="currentColor"
//           strokeWidth="4"
//         />
//         <path
//           d="M40 65 L35 82 M60 65 L65 82 M32 82 H68"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinecap="round"
//         />
//       </>
//     ),

//     inverter: (
//       <>
//         <rect
//           x="26"
//           y="15"
//           width="48"
//           height="70"
//           rx="9"
//           stroke="currentColor"
//           strokeWidth="5"
//           fill="none"
//         />
//         <circle cx="50" cy="30" r="5" fill="currentColor" />
//         <path
//           d="M38 52 L48 42 L55 52 L65 42"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//         />
//         <path
//           d="M40 68 H60"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinecap="round"
//         />
//       </>
//     ),

//     home: (
//       <>
//         <path
//           d="M15 45 L50 15 L85 45"
//           stroke="currentColor"
//           strokeWidth="6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//         />
//         <path
//           d="M25 42 V82 H75 V42"
//           stroke="currentColor"
//           strokeWidth="5"
//           fill="none"
//         />
//         <rect x="43" y="58" width="15" height="24" fill="currentColor" />
//         <rect x="30" y="50" width="10" height="10" fill="currentColor" />
//         <rect x="60" y="50" width="10" height="10" fill="currentColor" />
//       </>
//     ),

//     battery: (
//       <>
//         <rect
//           x="20"
//           y="27"
//           width="60"
//           height="50"
//           rx="8"
//           stroke="currentColor"
//           strokeWidth="5"
//           fill="none"
//         />
//         <rect x="80" y="42" width="8" height="20" rx="3" fill="currentColor" />
//         <path
//           d="M53 35 L40 53 H51 L46 68 L62 48 H52 Z"
//           fill="currentColor"
//         />
//       </>
//     ),
//   };

//   return (
//     <svg
//       viewBox="0 0 100 100"
//       className="h-7 w-7 sm:h-8 sm:w-8"
//       style={{ color }}
//       fill="none"
//     >
//       {icons[type]}
//     </svg>
//   );
// };

// const solarSteps = [
//   {
//     title: "Sunlight",
//     text: "Solar energy begins when sunlight reaches solar panels and provides a renewable source of energy.",
//     icon: "sun" as SolarIconType,
//     color: "#EAB83D",
//     position: "top",
//   },
//   {
//     title: "Solar Panels",
//     text: "Photovoltaic panels capture sunlight and convert it into direct current electricity.",
//     icon: "panel" as SolarIconType,
//     color: "#3979B8",
//     position: "right",
//   },
//   {
//     title: "Solar Inverter",
//     text: "The inverter converts DC electricity into AC power suitable for everyday electrical applications.",
//     icon: "inverter" as SolarIconType,
//     color: "#7464A9",
//     position: "bottomRight",
//   },
//   {
//     title: "Energy Usage",
//     text: "Clean electricity powers homes, offices, commercial buildings and industrial operations.",
//     icon: "home" as SolarIconType,
//     color: "#D94C86",
//     position: "bottomLeft",
//   },
//   {
//     title: "Battery Storage",
//     text: "Store surplus solar electricity and use it when sunlight is unavailable or energy demand increases.",
//     icon: "battery" as SolarIconType,
//     color: "#5C9E26",
//     position: "left",
//   },
// ];

// const SolarProcessSection: React.FC = () => {
//   return (
//     <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-20">
//       <div className="mx-auto max-w-7xl">

//         {/* SECTION TITLE */}
//         <div className="mb-12 text-center md:mb-16">
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F06435]">
//             Renewable Energy
//           </p>

//           <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
//             How Solar Energy{" "}
//             <span className="text-[#F06435]">Works</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
//             Discover how sunlight is transformed into clean electricity
//             through a connected solar energy system.
//           </p>
//         </div>

//         {/* DESKTOP CIRCLE */}
//         <div className="relative mx-auto hidden h-[600px] max-w-[1100px] lg:block">

//           {/* ORBIT */}
//           <svg
//             className="absolute inset-0 h-full w-full"
//             viewBox="0 0 1100 600"
//             fill="none"
//           >
//             <ellipse
//               cx="550"
//               cy="300"
//               rx="255"
//               ry="220"
//               stroke="#DCE5E9"
//               strokeWidth="2"
//             />

//             <ellipse
//               cx="550"
//               cy="300"
//               rx="195"
//               ry="155"
//               stroke="#E8EDF1"
//               strokeWidth="2"
//               strokeDasharray="7 10"
//             />

//             {/* CONNECTING CIRCLE */}
//             <circle cx="550" cy="300" r="255" stroke="#F1F5F2" strokeWidth="1" />

//             {/* ORBIT DOTS */}
//             <circle cx="550" cy="80" r="5" fill="#EAB83D" />
//             <circle cx="805" cy="300" r="5" fill="#3979B8" />
//             <circle cx="690" cy="495" r="5" fill="#7464A9" />
//             <circle cx="410" cy="495" r="5" fill="#D94C86" />
//             <circle cx="295" cy="300" r="5" fill="#5C9E26" />
//           </svg>

//           {/* CENTRAL SOLAR ENERGY */}
//           <div className="absolute left-1/2 top-1/2 z-20 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#F06435] shadow-[0_15px_40px_rgba(240,100,53,0.20)] ring-[12px] ring-white md:h-[165px] md:w-[165px]">

//             <SolarIcon type="sun" color="white" />

//             <h3 className="mt-3 text-center text-sm font-bold text-white">
//               Solar Energy
//             </h3>

//             <p className="mt-1 text-[10px] text-white/80">
//               Clean & Renewable
//             </p>
//           </div>

//           {/* PROCESS 1 - SUN */}
//           <SolarNode
//             x="50%"
//             y="8%"
//             color="#EAB83D"
//             icon="sun"
//             title="Sunlight"
//           />

//           {/* PROCESS 2 - PANEL */}
//           <SolarNode
//             x="77%"
//             y="42%"
//             color="#3979B8"
//             icon="panel"
//             title="Solar Panels"
//           />

//           {/* PROCESS 3 - INVERTER */}
//           <SolarNode
//             x="65%"
//             y="80%"
//             color="#7464A9"
//             icon="inverter"
//             title="Inverter"
//           />

//           {/* PROCESS 4 - USAGE */}
//           <SolarNode
//             x="35%"
//             y="80%"
//             color="#D94C86"
//             icon="home"
//             title="Energy Usage"
//           />

//           {/* PROCESS 5 - BATTERY */}
//           <SolarNode
//             x="23%"
//             y="42%"
//             color="#5C9E26"
//             icon="battery"
//             title="Battery Storage"
//           />

//           {/* CONTENT TOP LEFT */}
//           <div className="absolute left-0 top-[6%] max-w-[220px]">
//             <InfoBlock item={solarSteps[0]} />
//           </div>

//           {/* CONTENT TOP RIGHT */}
//           <div className="absolute right-0 top-[6%] max-w-[220px]">
//             <InfoBlock item={solarSteps[1]} />
//           </div>

//           {/* CONTENT BOTTOM RIGHT */}
//           <div className="absolute right-0 bottom-[4%] max-w-[220px]">
//             <InfoBlock item={solarSteps[2]} />
//           </div>

//           {/* CONTENT BOTTOM LEFT */}
//           <div className="absolute left-0 bottom-[4%] max-w-[220px]">
//             <InfoBlock item={solarSteps[3]} />
//           </div>

//         </div>

//         {/* TABLET & MOBILE PROCESS CIRCLE */}
//         <div className="lg:hidden">

//           {/* CIRCLE */}
//           <div className="relative mx-auto mb-12 aspect-square w-full max-w-[500px]">

//             {/* ORBIT */}
//             <div className="absolute inset-[8%] rounded-full border-2 border-[#E5EBEF]" />

//             <div className="absolute inset-[19%] rounded-full border border-dashed border-[#DCE5E9]" />

//             <div className="absolute inset-[29%] rounded-full border border-[#F0F2F4]" />

//             {/* CENTER */}
//             <div className="absolute left-1/2 top-1/2 z-20 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#F06435] shadow-lg ring-8 ring-white sm:h-[130px] sm:w-[130px]">

//               <SolarIcon type="sun" color="white" />

//               <h3 className="mt-2 text-xs font-bold text-white sm:text-sm">
//                 Solar Energy
//               </h3>

//               <p className="mt-1 text-[9px] text-white/80 sm:text-[10px]">
//                 Clean & Renewable
//               </p>
//             </div>

//             {/* TOP */}
//             <SolarNode
//               x="50%"
//               y="5%"
//               color="#EAB83D"
//               icon="sun"
//               title="Sunlight"
//               mobile
//             />

//             {/* RIGHT */}
//             <SolarNode
//               x="87%"
//               y="36%"
//               color="#3979B8"
//               icon="panel"
//               title="Panels"
//               mobile
//             />

//             {/* BOTTOM RIGHT */}
//             <SolarNode
//               x="73%"
//               y="82%"
//               color="#7464A9"
//               icon="inverter"
//               title="Inverter"
//               mobile
//             />

//             {/* BOTTOM LEFT */}
//             <SolarNode
//               x="27%"
//               y="82%"
//               color="#D94C86"
//               icon="home"
//               title="Usage"
//               mobile
//             />

//             {/* LEFT */}
//             <SolarNode
//               x="13%"
//               y="36%"
//               color="#5C9E26"
//               icon="battery"
//               title="Storage"
//               mobile
//             />
//           </div>

//           {/* PROCESS CONTENT */}
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
//             {solarSteps.map((item, index) => (
//               <InfoBlock key={index} item={item} />
//             ))}
//           </div>
//         </div>

        

//       </div>
//     </section>
//   );
// };

// /* SOLAR PROCESS NODE */
// const SolarNode = ({
//   x,
//   y,
//   color,
//   icon,
//   title,
//   mobile = false,
// }: {
//   x: string;
//   y: string;
//   color: string;
//   icon: SolarIconType;
//   title: string;
//   mobile?: boolean;
// }) => {
//   return (
//     <div
//       className={`absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${
//         mobile ? "max-w-[85px]" : ""
//       }`}
//       style={{ left: x, top: y }}
//     >
//       <div
//         className={`flex items-center justify-center rounded-full border-4 border-white shadow-lg ${
//           mobile
//             ? "h-[58px] w-[58px] sm:h-[72px] sm:w-[72px]"
//             : "h-[85px] w-[85px]"
//         }`}
//         style={{ backgroundColor: color }}
//       >
//         <SolarIcon type={icon} color="white" />
//       </div>

//       <span
//         className={`mt-2 text-center font-semibold text-gray-800 ${
//           mobile ? "text-[10px] sm:text-xs" : "text-xs"
//         }`}
//       >
//         {title}
//       </span>
//     </div>
//   );
// };

// /* PROCESS DESCRIPTION */
// const InfoBlock = ({
//   item,
// }: {
//   item: {
//     title: string;
//     text: string;
//     color: string;
//     icon: SolarIconType;
//   };
// }) => {
//   return (
//     <div className="flex items-start gap-4">
//       <div
//         className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
//         style={{ backgroundColor: item.color }}
//       >
//         <SolarIcon type={item.icon} color="white" />
//       </div>

//       <div>
//         <h3
//           className="text-sm font-bold sm:text-base"
//           style={{ color: item.color }}
//         >
//           {item.title}
//         </h3>

//         <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
//           {item.text}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SolarProcessSection;


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SolarIconType = "sun" | "panel" | "inverter" | "home" | "battery";

const SolarIcon = ({
  type,
  color = "white",
}: {
  type: SolarIconType;
  color?: string;
}) => {
  const icons: Record<SolarIconType, React.ReactNode> = {
    sun: (
      <>
        <circle cx="50" cy="50" r="18" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <path d="M50 10 V23" />
          <path d="M50 77 V90" />
          <path d="M10 50 H23" />
          <path d="M77 50 H90" />
          <path d="M22 22 L31 31" />
          <path d="M69 69 L78 78" />
          <path d="M22 78 L31 69" />
          <path d="M69 31 L78 22" />
        </g>
      </>
    ),
    panel: (
      <>
        <path
          d="M18 30 L82 30 L72 65 L28 65 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M38 30 L34 65 M60 30 L56 65 M23 47 H77"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M40 65 L35 82 M60 65 L65 82 M32 82 H68"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </>
    ),
    inverter: (
      <>
        <rect
          x="26"
          y="15"
          width="48"
          height="70"
          rx="9"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        />
        <circle cx="50" cy="30" r="5" fill="currentColor" />
        <path
          d="M38 52 L48 42 L55 52 L65 42"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M40 68 H60"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </>
    ),
    home: (
      <>
        <path
          d="M15 45 L50 15 L85 45"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M25 42 V82 H75 V42"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        />
        <rect x="43" y="58" width="15" height="24" fill="currentColor" />
        <rect x="30" y="50" width="10" height="10" fill="currentColor" />
        <rect x="60" y="50" width="10" height="10" fill="currentColor" />
      </>
    ),
    battery: (
      <>
        <rect
          x="20"
          y="27"
          width="60"
          height="50"
          rx="8"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        />
        <rect x="80" y="42" width="8" height="20" rx="3" fill="currentColor" />
        <path
          d="M53 35 L40 53 H51 L46 68 L62 48 H52 Z"
          fill="currentColor"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-7 w-7 sm:h-8 sm:w-8"
      style={{ color }}
      fill="none"
    >
      {icons[type]}
    </svg>
  );
};

const solarSteps = [
  {
    title: "Sunlight",
    text: "Solar energy begins when sunlight reaches solar panels and provides a renewable source of energy.",
    icon: "sun" as SolarIconType,
    color: "#EAB83D",
  },
  {
    title: "Solar Panels",
    text: "Photovoltaic panels capture sunlight and convert it into direct current electricity.",
    icon: "panel" as SolarIconType,
    color: "#3979B8",
  },
  {
    title: "Solar Inverter",
    text: "The inverter converts DC electricity into AC power suitable for everyday electrical applications.",
    icon: "inverter" as SolarIconType,
    color: "#7464A9",
  },
  {
    title: "Energy Usage",
    text: "Clean electricity powers homes, offices, commercial buildings and industrial operations.",
    icon: "home" as SolarIconType,
    color: "#D94C86",
  },
  {
    title: "Battery Storage",
    text: "Store surplus solar electricity and use it when sunlight is unavailable or energy demand increases.",
    icon: "battery" as SolarIconType,
    color: "#5C9E26",
  },
];

const SolarProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const mobileCenterRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Rotating wrappers
  const desktopOrbitWrapRef = useRef<HTMLDivElement>(null);
  const desktopNodeWrapRef = useRef<HTMLDivElement>(null);
  const mobileOrbitWrapRef = useRef<HTMLDivElement>(null);
  const mobileNodeWrapRef = useRef<HTMLDivElement>(null);
  const centerSunRef = useRef<HTMLDivElement>(null);
  const mobileCenterSunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const replay: ScrollTrigger.Vars = {
        toggleActions: "play none none reverse",
      };

      /* ================================================================
         ONE-WAY ROTATION HELPER
         Rotates clockwise ONLY when scrolling DOWN.
         Scrolling up freezes position (no reverse).
      ================================================================ */
      const createOneWayRotation = (
        targets: (Element | null)[],
        trigger: Element,
        direction: 1 | -1 = 1, // 1 = clockwise, -1 = counter-clockwise
        degreesPerPass = 360
      ) => {
        const valid = targets.filter(Boolean) as Element[];
        if (!valid.length) return;

        let lastProgress = 0;
        let accumulated = 0;

        ScrollTrigger.create({
          trigger,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const p = self.progress;
            if (p > lastProgress) {
              const delta = p - lastProgress;
              accumulated += delta * degreesPerPass * direction;
              gsap.set(valid, {
                rotation: accumulated,
                transformOrigin: "50% 50%",
              });
            }
            lastProgress = p;
          },
          onLeaveBack: () => {
            accumulated = 0;
            lastProgress = 0;
            gsap.set(valid, { rotation: 0 });
          },
        });
      };

      /* ---------------- TITLE ---------------- */
      gsap.from(titleRef.current!.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          ...replay,
        },
      });

      /* ==================== DESKTOP ==================== */
      if (desktopRef.current) {
        const orbit = orbitRef.current;
        const nodes = desktopRef.current.querySelectorAll(".solar-node");
        const infos = desktopRef.current.querySelectorAll(".solar-info");

        // Orbit entrance
        if (orbit) {
          gsap.from(orbit.querySelectorAll("ellipse, circle"), {
            scale: 0.4,
            opacity: 0,
            transformOrigin: "center center",
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: desktopRef.current,
              start: "top 75%",
              ...replay,
            },
          });
        }

        // Center entrance
        if (centerRef.current) {
          gsap.from(centerRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: desktopRef.current,
              start: "top 75%",
              ...replay,
            },
          });
        }

        // Nodes entrance
        gsap.from(nodes, {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          stagger: 0.18,
          delay: 0.4,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: desktopRef.current,
            start: "top 70%",
            ...replay,
          },
        });

        // Info entrance
        gsap.from(infos, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: desktopRef.current,
            start: "top 70%",
            ...replay,
          },
        });

        /* 🔄 ONE-WAY CLOCKWISE ORBIT */
        if (desktopNodeWrapRef.current && desktopOrbitWrapRef.current) {
          createOneWayRotation(
            [desktopNodeWrapRef.current, desktopOrbitWrapRef.current],
            desktopRef.current,
            1, // clockwise
            360
          );

          // Counter-rotate inner contents so icons + labels stay upright
          const inners = Array.from(
            desktopRef.current.querySelectorAll(".node-inner")
          );
          createOneWayRotation(inners, desktopRef.current, -1, 360);
        }
      }

      /* ==================== MOBILE ==================== */
      if (mobileRef.current) {
        const mobileNodes = mobileRef.current.querySelectorAll(".solar-node");
        const mobileInfos = mobileRef.current.querySelectorAll(".solar-info");
        const rings = mobileRef.current.querySelectorAll(".orbit-ring");

        gsap.from(rings, {
          scale: 0.3,
          opacity: 0,
          transformOrigin: "center center",
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mobileRef.current,
            start: "top 80%",
            ...replay,
          },
        });

        if (mobileCenterRef.current) {
          gsap.from(mobileCenterRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.9,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: mobileRef.current,
              start: "top 80%",
              ...replay,
            },
          });
        }

        gsap.from(mobileNodes, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: mobileRef.current,
            start: "top 75%",
            ...replay,
          },
        });

        gsap.from(mobileInfos, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mobileRef.current,
            start: "top 70%",
            ...replay,
          },
        });

        /* 🔄 MOBILE ONE-WAY ORBIT */
        if (mobileNodeWrapRef.current && mobileOrbitWrapRef.current) {
          createOneWayRotation(
            [mobileNodeWrapRef.current, mobileOrbitWrapRef.current],
            mobileRef.current,
            1,
            360
          );

          const inners = Array.from(
            mobileRef.current.querySelectorAll(".node-inner")
          );
          createOneWayRotation(inners, mobileRef.current, -1, 360);
        }
      }

      /* ==================== AMBIENT LOOPS ==================== */
      [centerRef.current, mobileCenterRef.current].forEach((el) => {
        if (el) {
          gsap.to(el, {
            boxShadow: "0 15px 60px rgba(240,100,53,0.45)",
            repeat: -1,
            yoyo: true,
            duration: 1.8,
            ease: "sine.inOut",
          });
        }
      });

      // Continuous sun spin inside center
      [centerSunRef.current, mobileCenterSunRef.current].forEach((el) => {
        if (el) {
          gsap.to(el, {
            rotation: 360,
            transformOrigin: "50% 50%",
            duration: 20,
            repeat: -1,
            ease: "none",
          });
        }
      });

      // Floating node icons
      if (desktopRef.current) {
        const nodes = desktopRef.current.querySelectorAll(".solar-node");
        nodes.forEach((node, i) => {
          const icon = node.querySelector(".node-icon");
          if (icon) {
            gsap.to(icon, {
              y: i % 2 === 0 ? -8 : 8,
              duration: 2 + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        });
      }
    }, sectionRef);

    /* ==================== HOVER ==================== */
    const hoverTargets = sectionRef.current?.querySelectorAll(
      ".solar-node, .solar-info, .center-badge"
    );
    const cleanups: (() => void)[] = [];

    hoverTargets?.forEach((el) => {
      const onEnter = () =>
        gsap.to(el, { scale: 1.08, duration: 0.3, ease: "power2.out" });
      const onLeave = () =>
        gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <div ref={titleRef} className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F06435]">
            Renewable Energy
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            How Solar Energy <span className="text-[#F06435]">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Discover how sunlight is transformed into clean electricity
            through a connected solar energy system.
          </p>
        </div>

        {/* ==================== DESKTOP ==================== */}
        <div
          ref={desktopRef}
          className="relative mx-auto hidden h-[600px] max-w-[1100px] lg:block"
        >
          {/* Rotating orbit SVG */}
          <div
            ref={desktopOrbitWrapRef}
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <svg
              ref={orbitRef}
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1100 600"
              fill="none"
            >
              <ellipse
                cx="550"
                cy="300"
                rx="255"
                ry="220"
                stroke="#DCE5E9"
                strokeWidth="2"
              />
              <ellipse
                cx="550"
                cy="300"
                rx="195"
                ry="155"
                stroke="#E8EDF1"
                strokeWidth="2"
                strokeDasharray="7 10"
              />
              <circle
                cx="550"
                cy="300"
                r="255"
                stroke="#F1F5F2"
                strokeWidth="1"
              />

              {/* Orbit dots */}
              <circle cx="550" cy="80" r="5" fill="#EAB83D" />
              <circle cx="805" cy="300" r="5" fill="#3979B8" />
              <circle cx="690" cy="495" r="5" fill="#7464A9" />
              <circle cx="410" cy="495" r="5" fill="#D94C86" />
              <circle cx="295" cy="300" r="5" fill="#5C9E26" />
            </svg>
          </div>

          {/* Rotating nodes wrapper */}
          <div
            ref={desktopNodeWrapRef}
            className="pointer-events-none absolute inset-0"
          >
            <div className="pointer-events-auto">
              <SolarNode x="50%" y="8%" color="#EAB83D" icon="sun" title="Sunlight" />
            </div>
            <div className="pointer-events-auto">
              <SolarNode x="77%" y="42%" color="#3979B8" icon="panel" title="Solar Panels" />
            </div>
            <div className="pointer-events-auto">
              <SolarNode x="65%" y="80%" color="#7464A9" icon="inverter" title="Inverter" />
            </div>
            <div className="pointer-events-auto">
              <SolarNode x="35%" y="80%" color="#D94C86" icon="home" title="Energy Usage" />
            </div>
            <div className="pointer-events-auto">
              <SolarNode x="23%" y="42%" color="#5C9E26" icon="battery" title="Battery Storage" />
            </div>
          </div>

          {/* Stationary center */}
          <div
            ref={centerRef}
            className="center-badge absolute left-1/2 top-1/2 z-20 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#F06435] shadow-[0_15px_40px_rgba(240,100,53,0.20)] ring-[12px] ring-white md:h-[165px] md:w-[165px]"
          >
            <div ref={centerSunRef}>
              <SolarIcon type="sun" color="white" />
            </div>
            <h3 className="mt-3 text-center text-sm font-bold text-white">
              Solar Energy
            </h3>
            <p className="mt-1 text-[10px] text-white/80">Clean & Renewable</p>
          </div>

          {/* Static info blocks */}
          <div className="solar-info absolute left-0 top-[6%] max-w-[220px]">
            <InfoBlock item={solarSteps[0]} />
          </div>
          <div className="solar-info absolute right-0 top-[6%] max-w-[220px]">
            <InfoBlock item={solarSteps[1]} />
          </div>
          <div className="solar-info absolute right-0 bottom-[4%] max-w-[220px]">
            <InfoBlock item={solarSteps[2]} />
          </div>
          <div className="solar-info absolute left-0 bottom-[4%] max-w-[220px]">
            <InfoBlock item={solarSteps[3]} />
          </div>
        </div>

        {/* ==================== MOBILE ==================== */}
        <div ref={mobileRef} className="lg:hidden">
          <div className="relative mx-auto mb-12 aspect-square w-full max-w-[500px]">
            {/* Rotating orbit rings */}
            <div
              ref={mobileOrbitWrapRef}
              className="pointer-events-none absolute inset-0"
            >
              <div className="orbit-ring absolute inset-[8%] rounded-full border-2 border-[#E5EBEF]" />
              <div className="orbit-ring absolute inset-[19%] rounded-full border border-dashed border-[#DCE5E9]" />
              <div className="orbit-ring absolute inset-[29%] rounded-full border border-[#F0F2F4]" />
            </div>

            {/* Rotating nodes */}
            <div
              ref={mobileNodeWrapRef}
              className="pointer-events-none absolute inset-0"
            >
              <div className="pointer-events-auto">
                <SolarNode x="50%" y="5%" color="#EAB83D" icon="sun" title="Sunlight" mobile />
              </div>
              <div className="pointer-events-auto">
                <SolarNode x="87%" y="36%" color="#3979B8" icon="panel" title="Panels" mobile />
              </div>
              <div className="pointer-events-auto">
                <SolarNode x="73%" y="82%" color="#7464A9" icon="inverter" title="Inverter" mobile />
              </div>
              <div className="pointer-events-auto">
                <SolarNode x="27%" y="82%" color="#D94C86" icon="home" title="Usage" mobile />
              </div>
              <div className="pointer-events-auto">
                <SolarNode x="13%" y="36%" color="#5C9E26" icon="battery" title="Storage" mobile />
              </div>
            </div>

            {/* Stationary mobile center */}
            <div
              ref={mobileCenterRef}
              className="center-badge absolute left-1/2 top-1/2 z-20 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#F06435] shadow-lg ring-8 ring-white sm:h-[130px] sm:w-[130px]"
            >
              <div ref={mobileCenterSunRef}>
                <SolarIcon type="sun" color="white" />
              </div>
              <h3 className="mt-2 text-xs font-bold text-white sm:text-sm">
                Solar Energy
              </h3>
              <p className="mt-1 text-[9px] text-white/80 sm:text-[10px]">
                Clean & Renewable
              </p>
            </div>
          </div>

          {/* Mobile info cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {solarSteps.map((item, index) => (
              <div key={index} className="solar-info">
                <InfoBlock item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================== SOLAR NODE ==================== */
const SolarNode = ({
  x,
  y,
  color,
  icon,
  title,
  mobile = false,
}: {
  x: string;
  y: string;
  color: string;
  icon: SolarIconType;
  title: string;
  mobile?: boolean;
}) => {
  return (
    <div
      className={`solar-node absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${
        mobile ? "max-w-[85px]" : ""
      }`}
      style={{ left: x, top: y }}
    >
      {/* node-inner gets counter-rotated so labels stay upright */}
      <div className="node-inner flex flex-col items-center">
        <div
          className={`node-icon flex items-center justify-center rounded-full border-4 border-white shadow-lg ${
            mobile
              ? "h-[58px] w-[58px] sm:h-[72px] sm:w-[72px]"
              : "h-[85px] w-[85px]"
          }`}
          style={{ backgroundColor: color }}
        >
          <SolarIcon type={icon} color="white" />
        </div>
        <span
          className={`mt-2 text-center font-semibold text-gray-800 ${
            mobile ? "text-[10px] sm:text-xs" : "text-xs"
          }`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

/* ==================== INFO BLOCK ==================== */
const InfoBlock = ({
  item,
}: {
  item: {
    title: string;
    text: string;
    color: string;
    icon: SolarIconType;
  };
}) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: item.color }}
      >
        <SolarIcon type={item.icon} color="white" />
      </div>
      <div>
        <h3
          className="text-sm font-bold sm:text-base"
          style={{ color: item.color }}
        >
          {item.title}
        </h3>
        <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default SolarProcessSection;