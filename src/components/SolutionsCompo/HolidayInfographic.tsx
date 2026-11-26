import React, { useEffect, useState } from "react";
import {
  Sun,
  Zap,
  PanelsTopLeft,
  BatteryCharging,
  Activity,
  Leaf,
} from "lucide-react";
import { MaskedLines, Reveal } from "@/components/Reveal";

const SolarInfographic: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Solar Panels",
      description:
        "Solar panels capture sunlight and transform it into clean electrical energy.",
    },
    {
      title: "Sunlight",
      description:
        "Harnessing abundant natural sunlight as a renewable energy source.",
    },
    {
      title: "Inverter System",
      description:
        "Converts solar electricity into usable power for your home or business.",
    },
    {
      title: "Clean Energy",
      description:
        "Generate sustainable electricity while reducing dependence on conventional energy.",
    },
    {
      title: "Smart Monitoring",
      description:
        "Monitor system performance and solar energy production efficiently.",
    },
    {
      title: "Energy Storage",
      description:
        "Store excess solar energy for use during the night or power interruptions.",
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [items.length]);

  return (
    <section className="w-full bg-[#f7faf7] px-4 py-16 sm:px-8 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="mb-10 text-center">
          <MaskedLines
            lines={["Solar Infographic"]}
            className="text-4xl font-medium tracking-tight text-[#163d2b] sm:text-5xl"
          />
          <p className="mt-3 text-sm text-[#789183] sm:text-base">
            Powering a Sustainable Future
          </p>
        </Reveal>

        {/* ================= DESKTOP ================= */}
        <Reveal
          variant="scale"
          className="relative mx-auto hidden h-[650px] max-w-[1150px] md:block"
        >
          {/* Enlarged Circle */}
          <div className="solar-orbit-track absolute left-1/2 top-[48%] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2">
            {/* Outer Ring */}
            <div className="absolute inset-[20px] rounded-full border-[30px] border-[#e1eee5]" />

            {/* Inner Ring */}
            <div className="absolute inset-[105px] rounded-full border-[20px] border-[#f7faf7]" />

            {/* Circular SVG */}
            <svg
              className="solar-orbit absolute inset-0 h-full w-full"
              viewBox="0 0 440 440"
              fill="none"
            >
              <circle
                cx="220"
                cy="220"
                r="165"
                stroke="#e1eee5"
                strokeWidth="30"
              />
            </svg>

            {/* 1. Solar Panels - Top */}
            <div className="solar-node-slot solar-slot-top z-20">
              <div className={`solar-node flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-sm transition-all duration-500 ${activeIndex === 0 ? "scale-110 bg-[#164f38] ring-[6px] ring-[#d9eadf]" : "bg-[#3d966c]"}`}>
                <PanelsTopLeft size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 2. Sunlight - Upper Left */}
            <div className="solar-node-slot solar-slot-upper-left z-20">
              <div className={`solar-node flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-sm transition-all duration-500 ${activeIndex === 1 ? "scale-110 bg-[#164f38] ring-[6px] ring-[#d9eadf]" : "bg-[#79b47b]"}`}>
                <Sun size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 3. Inverter - Upper Right */}
            <div className="solar-node-slot solar-slot-upper-right z-20">
              <div className={`solar-node flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-sm transition-all duration-500 ${activeIndex === 2 ? "scale-110 bg-[#164f38] ring-[6px] ring-[#d9eadf]" : "bg-[#4b9d89]"}`}>
                <BatteryCharging size={25} strokeWidth={2} />
              </div>
            </div>

            {/* Center Energy Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="solar-center flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#164f38] text-white shadow-md">
                <Zap size={30} strokeWidth={2} />
              </div>
            </div>

            {/* 4. Clean Energy - Bottom Left */}
            <div className="solar-node-slot solar-slot-lower-left z-20">
              <div className={`solar-node flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-sm transition-all duration-500 ${activeIndex === 3 ? "scale-110 bg-[#164f38] ring-[6px] ring-[#d9eadf]" : "bg-[#66a77b]"}`}>
                <Leaf size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 5. Smart Monitoring - Bottom Right */}
            <div className="solar-node-slot solar-slot-lower-right z-20">
              <div className={`solar-node flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-sm transition-all duration-500 ${activeIndex === 4 ? "scale-110 bg-[#164f38] ring-[6px] ring-[#d9eadf]" : "bg-[#8bbd9b]"}`}>
                <Activity size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 6. Energy Storage - Bottom */}
            <div className="solar-node-slot solar-slot-bottom z-20">
              <div className={`solar-node flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-sm transition-all duration-500 ${activeIndex === 5 ? "scale-110 bg-[#164f38] ring-[6px] ring-[#d9eadf]" : "bg-[#267a59]"}`}>
                <BatteryCharging size={25} strokeWidth={2} />
              </div>
            </div>

            {/* Decorative Leaf */}
            <div className="solar-leaf absolute bottom-[-100px] left-[55%] z-30 -translate-x-1/2 rotate-[18deg]">
              <svg width="110" height="100" viewBox="0 0 110 100" fill="none">
                <path d="M8 60 L98 10 L75 90 L48 62 L8 60Z" fill="#c8dfd1" />
                <path d="M48 62 L98 10 L57 83" fill="#399a73" />
                <path d="M48 62 L57 83 L68 72" fill="#176b4b" />
                <path d="M8 60 L48 62 L57 83" fill="#a8cdb8" />
              </svg>
            </div>
          </div>

          {/* LEFT TOP - Sunlight */}
          <div className={`absolute left-[1%] top-[14%] w-[25%] text-right transition-all duration-500 ${activeIndex === 1 ? "translate-x-[-6px] scale-[1.03]" : ""}`}>
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Sunlight
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Harnessing abundant natural sunlight as a renewable energy
              source.
            </p>
          </div>

          {/* RIGHT TOP - Solar Panels */}
          <div className={`absolute right-[1%] top-[8%] w-[25%] text-left transition-all duration-500 ${activeIndex === 0 ? "translate-x-[6px] scale-[1.03]" : ""}`}>
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Solar Panels
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Solar panels capture sunlight and generate clean electrical
              energy.
            </p>
          </div>

          {/* LEFT MIDDLE - Energy Storage */}
          <div className={`absolute left-[-1%] top-[43%] w-[25%] text-right transition-all duration-500 ${activeIndex === 5 ? "translate-x-[-6px] scale-[1.03]" : ""}`}>
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Energy Storage
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Store excess solar power for later use and maintain energy
              availability.
            </p>
          </div>

          {/* RIGHT MIDDLE - Inverter */}
          <div className={`absolute right-[-1%] top-[40%] w-[25%] text-left transition-all duration-500 ${activeIndex === 2 ? "translate-x-[6px] scale-[1.03]" : ""}`}>
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Inverter System
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Converts solar electricity into usable power for your home or
              business.
            </p>
          </div>

          {/* LEFT BOTTOM - Clean Energy */}
          <div className={`absolute left-[2%] bottom-[9%] w-[25%] text-right transition-all duration-500 ${activeIndex === 3 ? "translate-x-[-6px] scale-[1.03]" : ""}`}>
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Clean Energy
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Generate sustainable electricity while reducing dependence on
              conventional energy.
            </p>
          </div>

          {/* RIGHT BOTTOM - Smart Monitoring */}
          <div className={`absolute right-[2%] bottom-[8%] w-[25%] text-left transition-all duration-500 ${activeIndex === 4 ? "translate-x-[6px] scale-[1.03]" : ""}`}>
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Smart Monitoring
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Monitor system performance and solar energy production
              efficiently.
            </p>
          </div>
        </Reveal>

        {/* ================= MOBILE & TABLET ================= */}
        <Reveal variant="fade" className="flex flex-col items-center md:hidden">
          {/* Enlarged Circle */}
          <div className="solar-orbit-track relative h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]">
            {/* Circle */}
            <div className="absolute inset-[20px] rounded-full border-[25px] border-[#e1eee5]" />

            {/* Inner circle */}
            <div className="absolute inset-[95px] rounded-full border-[18px] border-[#f7faf7]" />

            {/* Top Icon */}
            <div className="solar-node-slot mobile-slot-top z-20">
              <div className={`solar-node flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeIndex === 0 ? "scale-110 bg-[#164f38] ring-[5px] ring-[#d9eadf]" : "bg-[#3d966c]"}`}>
                <PanelsTopLeft size={23} />
              </div>
            </div>

            {/* Upper Left */}
            <div className="solar-node-slot mobile-slot-upper-left z-20">
              <div className={`solar-node flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeIndex === 1 ? "scale-110 bg-[#164f38] ring-[5px] ring-[#d9eadf]" : "bg-[#79b47b]"}`}>
                <Sun size={23} />
              </div>
            </div>

            {/* Upper Right */}
            <div className="solar-node-slot mobile-slot-upper-right z-20">
              <div className={`solar-node flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeIndex === 2 ? "scale-110 bg-[#164f38] ring-[5px] ring-[#d9eadf]" : "bg-[#4b9d89]"}`}>
                <BatteryCharging size={23} />
              </div>
            </div>

            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="solar-center flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#164f38] text-white">
                <Zap size={27} />
              </div>
            </div>

            {/* Lower Left */}
            <div className="solar-node-slot mobile-slot-lower-left z-20">
              <div className={`solar-node flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeIndex === 3 ? "scale-110 bg-[#164f38] ring-[5px] ring-[#d9eadf]" : "bg-[#66a77b]"}`}>
                <Leaf size={23} />
              </div>
            </div>

            {/* Lower Right */}
            <div className="solar-node-slot mobile-slot-lower-right z-20">
              <div className={`solar-node flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeIndex === 4 ? "scale-110 bg-[#164f38] ring-[5px] ring-[#d9eadf]" : "bg-[#8bbd9b]"}`}>
                <Activity size={23} />
              </div>
            </div>

            {/* Bottom */}
            <div className="solar-node-slot mobile-slot-bottom z-20">
              <div className={`solar-node flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-all duration-500 ${activeIndex === 5 ? "scale-110 bg-[#164f38] ring-[5px] ring-[#d9eadf]" : "bg-[#267a59]"}`}>
                <BatteryCharging size={23} />
              </div>
            </div>

            {/* Leaf Decoration */}
            <div className="solar-leaf absolute bottom-[-55px] left-[55%] z-30 -translate-x-1/2 rotate-[18deg]">
              <svg width="80" height="80" viewBox="0 0 110 100" fill="none">
                <path d="M8 60 L98 10 L75 90 L48 62 L8 60Z" fill="#c8dfd1" />
                <path d="M48 62 L98 10 L57 83" fill="#399a73" />
                <path d="M48 62 L57 83 L68 72" fill="#176b4b" />
                <path d="M8 60 L48 62 L57 83" fill="#a8cdb8" />
              </svg>
            </div>
          </div>

          {/* Mobile descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 w-full max-w-3xl">
            {items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className={`rounded-2xl px-4 py-3 text-center transition-all duration-500 ${activeIndex === index ? "bg-white shadow-[0_10px_30px_rgba(22,79,56,.12)] -translate-y-1" : ""}`}
              >
                <h3 className="text-lg font-semibold text-[#244d38]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#718878] leading-6 sm:leading-7 mt-2">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @keyframes solar-node-in {
          0% { opacity: 0; transform: scale(.55) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes solar-center-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22, 79, 56, .18); }
          50% { box-shadow: 0 0 0 14px rgba(22, 79, 56, 0); }
        }
        @keyframes solar-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(-135px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateY(-135px) rotate(-360deg);
          }
        }
        @keyframes solar-leaf-float {
          0%, 100% { transform: translate(-50%, 0) rotate(18deg); }
          50% { transform: translate(-50%, -7px) rotate(14deg); }
        }
        @keyframes solar-orbit-drift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .solar-node {
          animation: solar-node-in .7s cubic-bezier(.22,1,.36,1) both;
        }
        .solar-node-slot {
          position: absolute;
          width: 68px;
          height: 68px;
        }
        .solar-slot-top { left: 186px; top: 0; }
        .solar-slot-upper-left { left: 10px; top: 95px; }
        .solar-slot-upper-right { right: 10px; top: 95px; }
        .solar-slot-lower-left { left: 10px; bottom: 95px; }
        .solar-slot-lower-right { right: 10px; bottom: 95px; }
        .solar-slot-bottom { left: 186px; bottom: 0; }
        .mobile-slot-top { left: calc(50% - 29px); top: 0; }
        .mobile-slot-upper-left { left: 5px; top: 85px; }
        .mobile-slot-upper-right { right: 5px; top: 85px; }
        .mobile-slot-lower-left { left: 5px; bottom: 85px; }
        .mobile-slot-lower-right { right: 5px; bottom: 85px; }
        .mobile-slot-bottom { left: calc(50% - 29px); bottom: 0; }
        .solar-center {
          animation: solar-center-pulse 2.8s ease-out infinite;
        }
        .solar-leaf {
          animation: solar-leaf-float 5s ease-in-out infinite;
        }
        .solar-orbit circle {
          stroke-dasharray: 8 13;
          transform-origin: center;
          animation: solar-orbit-drift 38s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .solar-node, .solar-center, .solar-leaf, .solar-orbit circle {
            animation: none !important;
          }
          .solar-node-slot {
            animation: none !important;
          }
        }
        @media (min-width: 768px) {
          .solar-node-slot {
            width: 68px;
            height: 68px;
          }
        }
      `}</style>
    </section>
  );
};

export default SolarInfographic;