
const stories = [
  {
    number: "01",
    category: "REGENERATIVE AGRICULTURE",
    title: "Restoring the Earth, One Farm at a Time.",
    description:
      "A journey towards healthier soil, sustainable farming and a future where agriculture works with nature.",
    image: "/images/success/farming.jpg",
    impact: "Soil regeneration",
  },
  {
    number: "02",
    category: "CIRCULAR ECONOMY",
    title: "Giving Waste a Second Life.",
    description:
      "Transforming discarded resources into opportunities through smarter reuse and responsible practices.",
    image: "/images/success/recycling.jpg",
    impact: "Resource recovery",
  },
  {
    number: "03",
    category: "COMMUNITY TRANSFORMATION",
    title: "Together, We Grow Greener.",
    description:
      "Bringing people together to create cleaner spaces and build environmentally conscious communities.",
    image: "/images/success/community.jpg",
    impact: "Community action",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-[#14291f] py-28 text-[#f4f1e8]">

      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#b5c58e]">
              Our Impact · Real Stories
            </p>
            <h2 className="max-w-3xl text-5xl font-light leading-[1.1] md:text-7xl">
              Change is not just
              <br />
              <span className="font-serif italic text-[#b5c58e]">
                something we imagine.
              </span>
              <br />
              It's something we create.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/60">
            Behind every sustainable initiative is a story of people,
            purpose and positive change. Discover the journeys shaping
            a greener tomorrow.
          </p>
        </div>

        {/* Featured Story */}
        <div className="group relative mb-24 grid overflow-hidden rounded-3xl border border-white/10 bg-[#20392c] md:grid-cols-2">
          <div className="relative min-h-[350px] overflow-hidden">
            <img
              src="/images/success/featured.jpg"
              alt="Sustainable landscape project"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-8 left-8 text-xs tracking-[0.3em] text-white">
              FEATURED JOURNEY · 01
            </span>
          </div>

          <div className="flex flex-col justify-center p-9 md:p-16">
            <span className="mb-6 text-xs tracking-[0.3em] text-[#b5c58e]">
              A STORY OF TRANSFORMATION
            </span>

            <h3 className="mb-6 text-4xl font-light leading-tight md:text-5xl">
              When sustainability becomes a way of life.
            </h3>

            <p className="mb-10 max-w-lg text-sm leading-8 text-white/60">
              Every meaningful transformation starts with one decision.
              Explore how sustainable thinking can create lasting
              environmental and community value.
            </p>

            <a
              href="#more-stories"
              className="w-fit border-b border-[#b5c58e] pb-2 text-xs uppercase tracking-[0.25em] text-[#d5dfbd] transition hover:text-white"
            >
              Discover the journey ↗
            </a>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mb-24 grid grid-cols-2 gap-8 border-y border-white/15 py-12 md:grid-cols-4">
          {[
            ["01", "Stories of change"],
            ["02", "Sustainable ideas"],
            ["03", "Community action"],
            ["04", "Greener futures"],
          ].map(([number, label]) => (
            <div key={number}>
              <p className="mb-3 text-4xl font-light text-[#b5c58e]">
                {number}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/50">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* More Stories */}
        <div id="more-stories">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] text-[#b5c58e]">
                EXPLORE OUR JOURNEYS
              </p>
              <h3 className="text-4xl font-light md:text-5xl">
                Stories that matter.
              </h3>
            </div>
            <span className="hidden text-sm text-white/40 md:block">
              Discover · Learn · Inspire
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.number} className="group">
                <div className="relative mb-7 aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-5 top-5 text-sm text-white">
                    {story.number} /
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-5 left-5 text-xs uppercase tracking-widest text-[#d5dfbd]">
                    {story.impact}
                  </span>
                </div>

                <p className="mb-4 text-[10px] tracking-[0.25em] text-[#b5c58e]">
                  {story.category}
                </p>

                <h4 className="mb-4 text-2xl font-light leading-snug transition-colors group-hover:text-[#b5c58e]">
                  {story.title}
                </h4>

                <p className="text-sm leading-7 text-white/50">
                  {story.description}
                </p>

                <div className="mt-7 h-px w-full bg-white/15 transition-all duration-500 group-hover:bg-[#b5c58e]" />
              </article>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-28 rounded-3xl bg-[#dce4cf] px-8 py-14 text-center text-[#183527] md:px-16 md:py-20">
          <p className="mb-5 text-xs tracking-[0.35em]">
            BE PART OF THE CHANGE
          </p>
          <h3 className="mx-auto max-w-3xl text-4xl font-light leading-tight md:text-6xl">
            Every great story begins with a small step.
          </h3>
          <a
            href="/contact"
            className="mt-9 inline-block rounded-full bg-[#183527] px-9 py-4 text-xs uppercase tracking-widest text-white transition hover:bg-[#345b42]"
          >
            Start Your Journey ↗
          </a>
        </div>

      </div>
    </section>
  );
}
