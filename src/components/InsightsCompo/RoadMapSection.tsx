import React from "react";

const RoadMapSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-3 py-8 sm:px-6 md:py-14">
      <div className="relative mx-auto min-h-[560px] max-w-7xl overflow-hidden rounded-[30px] bg-white md:min-h-[650px]">

        {/* CURVED ROAD */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 650"
          preserveAspectRatio="none"
        >
          {/* Road */}
          <path
            d="M450 -50 C430 120 460 180 650 210 C800 235 830 300 760 390 C700 480 820 540 1050 530 L1250 530"
            stroke="#E5E7EB"
            strokeWidth="150"
            fill="none"
            strokeLinecap="round"
          />

          {/* Road markings */}
          <path
            d="M450 -50 C430 120 460 180 650 210 C800 235 830 300 760 390 C700 480 820 540 1050 530 L1250 530"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeDasharray="16 16"
            fill="none"
          />

          {/* Green tree */}
          <g transform="translate(510 250)">
            <ellipse cx="0" cy="0" rx="22" ry="35" fill="#76B82A" />
            <ellipse cx="-10" cy="-18" rx="13" ry="20" fill="#8BC34A" />
            <ellipse cx="10" cy="-12" rx="13" ry="22" fill="#5C9E26" />
            <rect x="-4" y="20" width="8" height="45" fill="#806C4D" />
          </g>

          <g transform="translate(1030 450)">
            <ellipse cx="0" cy="0" rx="26" ry="38" fill="#76B82A" />
            <ellipse cx="-13" cy="-18" rx="16" ry="22" fill="#8BC34A" />
            <ellipse cx="14" cy="-15" rx="15" ry="22" fill="#5C9E26" />
            <rect x="-4" y="25" width="8" height="45" fill="#806C4D" />
          </g>

          <g transform="translate(510 45)">
            <ellipse cx="0" cy="0" rx="8" ry="14" fill="#76B82A" />
            <rect x="-2" y="8" width="4" height="14" fill="#806C4D" />
          </g>

          {/* Eco vehicle */}
          <g transform="translate(940 525)">
            <rect x="0" y="0" width="54" height="20" rx="5" fill="#EAB308" />
            <rect x="8" y="-4" width="20" height="10" rx="3" fill="#F59E0B" />
            <rect x="30" y="-4" width="15" height="10" rx="3" fill="#F59E0B" />
            <circle cx="12" cy="20" r="7" fill="#292929" />
            <circle cx="42" cy="20" r="7" fill="#292929" />
          </g>
        </svg>

        {/* INTRO */}
        <div className="absolute left-[8%] top-[15%] z-10 max-w-[320px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-600">
            Sustainable Engineering
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
            Smarter <span className="text-green-600">Energy</span>
          </h2>

          <h3 className="mt-4 text-sm font-semibold text-gray-800">
            Driving Efficiency. Building Sustainability.
          </h3>

          <p className="mt-2 text-xs leading-[1.8] text-gray-600">
            We help businesses improve energy performance, reduce
            operational waste and embrace sustainable technologies
            through smart engineering and eco-friendly solutions.
          </p>
        </div>

        {/* TOP RIGHT FEATURES */}
        <div className="absolute right-[7%] top-[17%] z-10 flex max-w-[460px] gap-5">

          {/* Clean Energy */}
          <div className="flex flex-1 gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
              ☀
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-800">
                Clean Energy
              </h4>

              <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
                Transition to a greener future with scalable renewable
                energy installations.
              </p>
            </div>
          </div>

          {/* Energy Audit */}
          <div className="flex flex-1 gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
              ✓
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-800">
                Energy Efficiency
              </h4>

              <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
                Identify energy waste, optimize consumption and
                improve facility performance.
              </p>
            </div>
          </div>
        </div>

        {/* ENERGY SAVINGS */}
        <div className="absolute left-[65%] top-[48%] z-20 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[12px] border-white bg-[#E4F1D8] shadow-[0_0_0_5px_rgba(255,255,255,0.3)] md:h-[185px] md:w-[185px] md:border-[14px]">

          <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#E4F1D8]">
            <span className="text-4xl font-bold text-green-700 md:text-5xl">
              86%
            </span>

            <span className="mt-1 text-center text-[10px] font-medium text-gray-600 md:text-xs">
              Energy Savings*
            </span>
          </div>
        </div>

        {/* SOLUTIONS */}
        <div className="absolute bottom-[10%] left-[7%] z-10 grid w-[52%] grid-cols-2 gap-3">

          {/* IBMS */}
          <div className="rounded-2xl border-2 border-[#B7DCC7] bg-white p-4 transition hover:shadow-md">
            <h4 className="text-sm font-semibold text-green-700">
              Smart Building Management
            </h4>

            <p className="mt-2 text-[11px] leading-[1.8] text-gray-600">
              Integrate and automate facility operations with
              intelligent building management systems for
              smarter, safer and efficient buildings.
            </p>
          </div>

          {/* Industrial Automation */}
          <div className="rounded-2xl border-2 border-[#D6E5B9] bg-white p-4 transition hover:shadow-md">
            <h4 className="text-sm font-semibold text-green-700">
              Industrial Automation
            </h4>

            <p className="mt-2 text-[11px] leading-[1.8] text-gray-600">
              Streamline industrial processes with advanced
              automation, smart controls and technology-driven
              operational improvements.
            </p>
          </div>
        </div>

       

      

      </div>
    </section>
  );
};

export default RoadMapSection;