import React from "react";



interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jimmy Parkjun",
    role: "Business consultant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation",
  },
  {
    name: "Clarisa Aguero",
    role: "Accounting Manager",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
    description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation",
  },
  {
    name: "Peter Swengers",
    role: "Graphic design",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation",
  },
  {
    name: "David Montana",
    role: "Web developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation",
  },
];

/**
 * Circle arcs drawn with SVG. pathLength=360 lets us use degrees
 * for dash length (first number) and rotate() for the start angle.
 */
const arcs = [
  // r, stroke width, color, arc length (deg), start angle (deg)
  { r: 100, w: 7, c: "#0a56bd", len: 105, start: 195 }, // thick top-left
  { r: 100, w: 4, c: "#0b4fb0", len: 95, start: 95 }, // bottom
  { r: 100, w: 2, c: "#1f7ae0", len: 150, start: 275 }, // thin top/right
  { r: 93, w: 3, c: "#0d63cf", len: 230, start: 290 }, // inner wide arc
  { r: 93, w: 3, c: "#0a56bd", len: 70, start: 150 }, // inner left
];

const RingArcs: React.FC = () => (
  <svg
    viewBox="0 0 210 210"
    className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:rotate-[40deg]"
    aria-hidden="true"
  >
    {arcs.map((a, i) => (
      <circle
        key={i}
        cx="105"
        cy="105"
        r={a.r}
        fill="none"
        stroke={a.c}
        strokeWidth={a.w}
        strokeLinecap="butt"
        pathLength={360}
        strokeDasharray={`${a.len} ${360 - a.len}`}
        transform={`rotate(${a.start - 90} 105 105)`}
      />
    ))}
  </svg>
);

const TeamSection: React.FC = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white pb-14 font-['Titillium_Web',sans-serif] lg:h-[620px] lg:pb-0 mt-12">
      {/* ---------- Curved navy bowl ---------- */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[330px] overflow-hidden rounded-b-[50%] bg-[#0a2a63] [border-bottom-left-radius:50%_100%] [border-bottom-right-radius:50%_100%] lg:h-[365px]">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#0a2a63]/80" />
      </div>

      {/* ---------- Heading ---------- */}
      <div className="relative z-10 mx-auto max-w-[600px] px-5 pt-8 text-center">
        <h2 className="text-[34px] font-semibold leading-tight tracking-tight text-white sm:text-[44px]">
          Our Team Members 
        </h2>

        <div className="mx-auto mt-3 flex w-[100px] items-center">
          <span className="h-[8px] w-[8px] rounded-full bg-[#82C9FF]" />
          <span className="h-[2px] flex-1 bg-[#82C9FF]" />
          <span className="h-[8px] w-[8px] rounded-full bg-[#82C9FF]" />
        </div>

        <p className="mx-auto mt-5 max-w-[570px] text-[13px] leading-[23px] text-white/90">
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis
        </p>
      </div>

      {/* ---------- Members ---------- */}
      <div className="relative z-10 mx-auto mt-14 grid max-w-[1280px] grid-cols-1 justify-items-center gap-y-12 px-5 sm:grid-cols-2 lg:absolute lg:inset-x-0 lg:top-[100px] lg:mt-0 lg:grid-cols-4 lg:items-start lg:gap-y-0 lg:px-4">
        {teamMembers.map((member, index) => {
          const isInner = index === 1 || index === 2;
          return (
            <article
              key={member.name}
              className={`group flex w-full max-w-[260px] flex-col items-center text-center ${
                isInner ? "lg:mt-[145px]" : ""
              }`}
            >
              {/* Portrait with rings */}
              <div className="relative h-[210px] w-[210px] shrink-0">
                <RingArcs />

                {/* white gap + thin ring */}
                <div className="absolute inset-[14px] rounded-full bg-white" />
                <div className="absolute inset-[18px] rounded-full border border-[#cfe0f2]" />

                {/* photo */}
                <div className="absolute inset-[22px] overflow-hidden rounded-full bg-[#d9d9d9]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 w-full lg:mt-9">
                <h3 className="text-[26px] font-semibold leading-none text-[#141414]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[14px] italic text-[#2f7ab8]">
                  {member.role}
                </p>
                <p className="mx-auto mt-3 max-w-[205px] font-['Calibri','Carlito',sans-serif] text-[14.5px] leading-[24px] text-[#1c1c1c]">
                  {member.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;