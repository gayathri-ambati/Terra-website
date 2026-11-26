
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Clean Energy",
    title: "Why energy efficiency is the next big business advantage",
    description:
      "Explore how smarter energy management can reduce operational costs and support sustainable business growth.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Technology",
    title: "The role of automation in sustainable industries",
    description:
      "Discover how modern automation technologies are helping industries improve productivity and resource efficiency.",
    image:
      "https://i.pinimg.com/736x/05/10/e6/0510e6c6e28e12f480007d2be21a544c.jpg",
  },
  {
    category: "Sustainability",
    title: "Creating a greener future through responsible innovation",
    description:
      "A closer look at how sustainable thinking and innovation can create long-term environmental value.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
  },
];

export function LatestInsights() {
  return (
    <section
      id="latest-insights"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Explore & Learn
            </p>

            <h2 className="text-4xl font-semibold text-[#173b2b] md:text-6xl">
              Latest insights
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-500">
            Ideas, knowledge and perspectives that inspire
            smarter and more sustainable decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-green-700">
                  {article.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#173b2b]">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {article.description}
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-[#173b2b] transition group-hover:text-green-700"
                >
                  Read more
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
