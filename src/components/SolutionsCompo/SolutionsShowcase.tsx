
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Clean Energy",
    description:
      "Harness renewable energy to build efficient, resilient and sustainable energy systems for businesses and communities.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Smart Industries",
    description:
      "Transform industrial operations through intelligent automation, energy optimization and connected technologies.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Sustainable Agriculture",
    description:
      "Support agricultural communities with modern practices, efficient resources and climate-conscious solutions.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function SolutionsShowcase() {
  return (
    <section className="bg-[#f4f6f1] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
          
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-[#173b2b] md:text-6xl">
              Solutions for a greener tomorrow.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-600 md:justify-self-end">
            We bring together technology, innovation and sustainable thinking
            to create solutions that make businesses more efficient and
            communities more resilient.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.number}
              className="group relative min-h-[420px] overflow-hidden rounded-2xl md:min-h-[500px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <span className="w-fit rounded-full border border-white/40 px-4 py-2 text-sm text-white">
                  {item.number}
                </span>

                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mb-6 max-w-sm leading-7 text-white/80">
                    {item.description}
                  </p>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
