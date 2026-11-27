
import { ArrowUpRight, Leaf, Sparkles } from "lucide-react";

export function AboutPurpose() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F4] py-20 md:py-28 lg:py-32">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full border border-[#173b2b]/5" />
      <div className="pointer-events-none absolute -right-20 top-40 h-[300px] w-[300px] rounded-full border border-[#173b2b]/5" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">

        {/* LEFT - IMAGE */}
        <div className="relative">

          {/* Image Frame */}
          <div className="relative overflow-hidden rounded-[28px]">
            <img
              src="https://i.pinimg.com/1200x/26/41/87/26418733d5724ea2e4d0860174507329.jpg"
              alt="Sustainable energy landscape"
              className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px] md:h-[560px]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10271B]/70 via-transparent to-transparent" />

            {/* Image Bottom Content */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-9">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur-md">
                <Leaf size={14} />
                Our philosophy
              </span>

              <h3 className="max-w-md text-3xl font-medium leading-tight text-white sm:text-4xl">
                Building a better future through
                <span className="block font-serif italic text-[#C8D9A5]">
                  meaningful innovation.
                </span>
              </h3>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-7 right-3 flex items-center gap-4 rounded-2xl bg-[#173B2B] p-5 text-white shadow-xl sm:-right-5 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Sparkles size={22} className="text-[#C8D9A5]" />
            </div>

            <div>
              <p className="text-xl font-semibold">Future</p>
              <p className="mt-1 text-xs tracking-wide text-white/65">
                Driven by sustainability
              </p>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute -left-3 -top-3 -z-10 h-24 w-24 rounded-tl-[30px] border-l-2 border-t-2 border-[#8FA66B] sm:-left-5 sm:-top-5" />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="pt-4 lg:pt-0">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#829B51]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#829B51]">
              Who We Are
            </p>
          </div>

          {/* Heading */}
          <h2 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-[#173B2B] sm:text-5xl md:text-6xl">
            Innovation with purpose.
            <span className="mt-2 block font-serif font-normal italic text-[#819A55]">
              Progress with impact.
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="my-8 h-px w-full max-w-[100px] bg-[#B6C49B]" />

          {/* Main Description */}
          <p className="max-w-xl text-lg leading-8 text-[#59665B]">
            We believe a sustainable future is built through smarter
            decisions, responsible innovation and meaningful collaboration.
          </p>

          {/* Supporting Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-[#778078]">
            Our work brings technology and sustainability together to
            help organizations optimize resources, embrace innovation
            and create lasting environmental and economic value.
          </p>

          {/* Bottom Highlight */}
          <div className="mt-9 flex items-start gap-4 border-l-2 border-[#8FA66B] bg-[#EDF0E7] px-5 py-5">
            <Leaf size={21} className="mt-1 shrink-0 text-[#799449]" />

            <p className="text-sm leading-7 text-[#435446]">
              Creating solutions that deliver lasting value for
              businesses, communities and the planet.
            </p>
          </div>

        

        </div>
      </div>
    </section>
  );
}
