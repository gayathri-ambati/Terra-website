
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function InsightsHero() {
  return (
    <section className="overflow-hidden bg-[#f4f6f1] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Insights & Perspectives
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-[#173b2b] md:text-7xl">
              Ideas for a more sustainable world.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Discover perspectives, innovations and ideas shaping
              the future of energy, industry, technology and sustainability.
            </p>

            <a
              href="#latest-insights"
              className="mt-8 inline-flex items-center gap-3 text-[#173b2b] transition hover:text-green-700"
            >
              Explore our insights
              <ArrowDown size={20} />
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80"
              alt="Green forest and sustainable environment"
              className="h-[400px] w-full rounded-2xl object-cover md:h-[600px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-6 backdrop-blur-sm md:bottom-10 md:left-10 md:right-10">
              <p className="mb-3 text-xs uppercase tracking-widest text-green-700">
                Sustainability
              </p>

              <h3 className="text-xl font-semibold leading-snug text-[#173b2b] md:text-2xl">
                Building a future where innovation and nature work together.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
