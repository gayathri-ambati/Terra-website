import React from "react";
import {
  Sun,
  Zap,
  PanelsTopLeft,
  BatteryCharging,
  Activity,
  Leaf,
} from "lucide-react";

const SolarInfographic: React.FC = () => {
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

  return (
    <section className="w-full bg-[#f7faf7] px-4 py-16 sm:px-8 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#163d2b] tracking-tight">
            Solar <span className="font-light">Infographic</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#789183]">
            Powering a Sustainable Future
          </p>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative mx-auto max-w-[1150px] h-[650px] hidden md:block">
          {/* Enlarged Circle */}
          <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px]">
            {/* Outer Ring */}
            <div className="absolute inset-[20px] rounded-full border-[30px] border-[#e1eee5]" />

            {/* Inner Ring */}
            <div className="absolute inset-[105px] rounded-full border-[20px] border-[#f7faf7]" />

            {/* Circular SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
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
            <div className="absolute top-[0px] left-1/2 -translate-x-1/2 z-20">
              <div className="w-[68px] h-[68px] rounded-full bg-[#3d966c] text-white flex items-center justify-center shadow-sm">
                <PanelsTopLeft size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 2. Sunlight - Upper Left */}
            <div className="absolute top-[95px] left-[10px] z-20">
              <div className="w-[68px] h-[68px] rounded-full bg-[#79b47b] text-white flex items-center justify-center shadow-sm">
                <Sun size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 3. Inverter - Upper Right */}
            <div className="absolute top-[95px] right-[10px] z-20">
              <div className="w-[68px] h-[68px] rounded-full bg-[#4b9d89] text-white flex items-center justify-center shadow-sm">
                <BatteryCharging size={25} strokeWidth={2} />
              </div>
            </div>

            {/* Center Energy Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-[78px] h-[78px] rounded-full bg-[#164f38] text-white flex items-center justify-center shadow-md">
                <Zap size={30} strokeWidth={2} />
              </div>
            </div>

            {/* 4. Clean Energy - Bottom Left */}
            <div className="absolute bottom-[95px] left-[10px] z-20">
              <div className="w-[68px] h-[68px] rounded-full bg-[#66a77b] text-white flex items-center justify-center shadow-sm">
                <Leaf size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 5. Smart Monitoring - Bottom Right */}
            <div className="absolute bottom-[95px] right-[10px] z-20">
              <div className="w-[68px] h-[68px] rounded-full bg-[#8bbd9b] text-white flex items-center justify-center shadow-sm">
                <Activity size={25} strokeWidth={2} />
              </div>
            </div>

            {/* 6. Energy Storage - Bottom */}
            <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 z-20">
              <div className="w-[68px] h-[68px] rounded-full bg-[#267a59] text-white flex items-center justify-center shadow-sm">
                <BatteryCharging size={25} strokeWidth={2} />
              </div>
            </div>

            {/* Decorative Leaf */}
            <div className="absolute bottom-[-100px] left-[55%] -translate-x-1/2 rotate-[18deg] z-30">
              <svg width="110" height="100" viewBox="0 0 110 100" fill="none">
                <path d="M8 60 L98 10 L75 90 L48 62 L8 60Z" fill="#c8dfd1" />
                <path d="M48 62 L98 10 L57 83" fill="#399a73" />
                <path d="M48 62 L57 83 L68 72" fill="#176b4b" />
                <path d="M8 60 L48 62 L57 83" fill="#a8cdb8" />
              </svg>
            </div>
          </div>

          {/* LEFT TOP - Sunlight */}
          <div className="absolute left-[1%] top-[14%] w-[25%] text-right">
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Sunlight
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Harnessing abundant natural sunlight as a renewable energy
              source.
            </p>
          </div>

          {/* RIGHT TOP - Solar Panels */}
          <div className="absolute right-[1%] top-[8%] w-[25%] text-left">
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Solar Panels
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Solar panels capture sunlight and generate clean electrical
              energy.
            </p>
          </div>

          {/* LEFT MIDDLE - Energy Storage */}
          <div className="absolute left-[-1%] top-[43%] w-[25%] text-right">
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Energy Storage
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Store excess solar power for later use and maintain energy
              availability.
            </p>
          </div>

          {/* RIGHT MIDDLE - Inverter */}
          <div className="absolute right-[-1%] top-[40%] w-[25%] text-left">
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Inverter System
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Converts solar electricity into usable power for your home or
              business.
            </p>
          </div>

          {/* LEFT BOTTOM - Clean Energy */}
          <div className="absolute left-[2%] bottom-[9%] w-[25%] text-right">
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Clean Energy
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Generate sustainable electricity while reducing dependence on
              conventional energy.
            </p>
          </div>

          {/* RIGHT BOTTOM - Smart Monitoring */}
          <div className="absolute right-[2%] bottom-[8%] w-[25%] text-left">
            <h3 className="text-base lg:text-lg font-semibold text-[#244d38]">
              Smart Monitoring
            </h3>
            <p className="text-sm lg:text-[15px] leading-6 lg:leading-7 text-[#718878] mt-2">
              Monitor system performance and solar energy production
              efficiently.
            </p>
          </div>
        </div>

        {/* ================= MOBILE & TABLET ================= */}
        <div className="md:hidden flex flex-col items-center">
          {/* Enlarged Circle */}
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
            {/* Circle */}
            <div className="absolute inset-[20px] rounded-full border-[25px] border-[#e1eee5]" />

            {/* Inner circle */}
            <div className="absolute inset-[95px] rounded-full border-[18px] border-[#f7faf7]" />

            {/* Top Icon */}
            <div className="absolute top-[0px] left-1/2 -translate-x-1/2 z-20">
              <div className="w-[58px] h-[58px] rounded-full bg-[#3d966c] text-white flex items-center justify-center">
                <PanelsTopLeft size={23} />
              </div>
            </div>

            {/* Upper Left */}
            <div className="absolute top-[85px] left-[5px] z-20">
              <div className="w-[58px] h-[58px] rounded-full bg-[#79b47b] text-white flex items-center justify-center">
                <Sun size={23} />
              </div>
            </div>

            {/* Upper Right */}
            <div className="absolute top-[85px] right-[5px] z-20">
              <div className="w-[58px] h-[58px] rounded-full bg-[#4b9d89] text-white flex items-center justify-center">
                <BatteryCharging size={23} />
              </div>
            </div>

            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-[68px] h-[68px] rounded-full bg-[#164f38] text-white flex items-center justify-center">
                <Zap size={27} />
              </div>
            </div>

            {/* Lower Left */}
            <div className="absolute bottom-[85px] left-[5px] z-20">
              <div className="w-[58px] h-[58px] rounded-full bg-[#66a77b] text-white flex items-center justify-center">
                <Leaf size={23} />
              </div>
            </div>

            {/* Lower Right */}
            <div className="absolute bottom-[85px] right-[5px] z-20">
              <div className="w-[58px] h-[58px] rounded-full bg-[#8bbd9b] text-white flex items-center justify-center">
                <Activity size={23} />
              </div>
            </div>

            {/* Bottom */}
            <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 z-20">
              <div className="w-[58px] h-[58px] rounded-full bg-[#267a59] text-white flex items-center justify-center">
                <BatteryCharging size={23} />
              </div>
            </div>

            {/* Leaf Decoration */}
            <div className="absolute bottom-[-55px] left-[55%] -translate-x-1/2 rotate-[18deg] z-30">
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
              <div key={index} className="text-center px-4 py-2">
                <h3 className="text-lg font-semibold text-[#244d38]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#718878] leading-6 sm:leading-7 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarInfographic;