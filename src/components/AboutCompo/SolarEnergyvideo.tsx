
import { Check, ArrowUpRight } from 'lucide-react';
import solarVideo from '../../assets/solarteamworkvideo.mp4';


export default function SolarEnergyVideo() {
  const benefits = [
    'Customized solar solutions for commercial and industrial facilities',
    'Reduce electricity costs and dependency on conventional energy',
    'Efficient rooftop and ground-mounted solar installations',
    'Reliable renewable energy with long-term performance',
    'Sustainable operations with a reduced carbon footprint',
    'Smart monitoring and energy performance optimization',
  ];

  return (
    <section className="bg-[#f3f5f0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT - VIDEO */}
          <div className="relative h-[800px] overflow-hidden rounded-[28px] border-[3px] border-[#14532d] shadow-xl md:h-[700px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              
              className="h-full w-full object-cover"
            >
              <source src={solarVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Video Caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                Renewable Energy
              </span>

              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-snug text-white md:text-4xl">
                Powering a greener future through solar innovation.
              </h3>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="py-4">
            {/* Heading */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#14532d] md:text-5xl lg:text-6xl">
              Smart Solar Energy Solutions ☀️
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
              At <span className="font-semibold text-[#14532d]">iiiQbets</span>,
              we help businesses embrace clean and renewable energy through
              intelligent solar solutions. From solar infrastructure to
              energy optimization, we enable organizations to reduce
              operational costs, enhance energy efficiency, and build
              sustainable facilities for tomorrow.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[#14532d]">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <p className="text-base leading-7 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#14532d] px-7 py-4 text-white transition-all duration-300 hover:bg-[#166534]"
              >
                <span>Explore Solar Solutions</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#14532d] px-7 py-4 text-[#14532d] transition-all duration-300 hover:bg-[#14532d] hover:text-white"
              >
                <span>Talk to Our Experts</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}