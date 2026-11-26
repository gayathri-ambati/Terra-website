
import { ArrowUpRight } from "lucide-react";

export function AboutPurpose() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/1200x/26/41/87/26418733d5724ea2e4d0860174507329.jpg"
            alt="Sustainable energy landscape"
            className="h-[400px] w-full rounded-2xl object-cover md:h-[560px]"
          />

          <div className="absolute -bottom-6 -right-5 hidden rounded-2xl bg-[#173b2b] p-8 text-white md:block">
            <p className="text-4xl font-semibold">Future</p>
            <p className="mt-2 text-sm tracking-wide text-white/70">
              Driven by sustainability
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Who We Are
          </p>

          <h2 className="mb-8 text-4xl font-semibold leading-tight text-[#173b2b] md:text-6xl">
            Innovation with purpose. Progress with impact.
          </h2>

          <p className="mb-5 text-lg leading-8 text-gray-600">
            We believe a sustainable future is built through smarter
            decisions, responsible innovation and meaningful collaboration.
          </p>

          <p className="mb-8 leading-8 text-gray-500">
            Our work brings technology and sustainability together to
            help organizations optimize resources, embrace innovation
            and create lasting environmental and economic value.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#173b2b] px-7 py-4 text-white transition hover:bg-green-800"
          >
            Get to know us
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
