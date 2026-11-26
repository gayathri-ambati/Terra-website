import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Settings2,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/content";

const stories = [
  {
    project: projects[0],
    category: "Energy efficiency",
    title: "Making industrial operations more efficient.",
    description:
      "A targeted retrofit helped a Coimbatore textile mill cut energy use without stopping production.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Solar panels generating clean energy",
  },
  {
    project: projects[1],
    category: "Agriculture · TRANSFORM",
    title: "TRANSFORM FPO Cluster Programme",
    description:
      "Training and shared infrastructure are opening stronger market access for small-holder farmers.",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Farmer working in a green field",
  },
  {
    project: projects[2],
    category: "Industrial automation",
    title: "Auto Component Line Automation",
    description:
      "Automation is helping a precision components maker increase throughput and trace every batch.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Engineer reviewing equipment and system performance",
  },
];

const impactHighlights = [
  {
    value: projects[0].results[0].value,
    label: "Energy use reduced",
    context: "Textile mill retrofit",
    icon: Zap,
  },
  {
    value: projects[0].results[2].value,
    label: "CO₂ avoided per year",
    context: "Textile mill retrofit",
    icon: Leaf,
  },
  {
    value: projects[2].results[0].value,
    label: "Line throughput",
    context: "Auto-component automation",
    icon: Settings2,
  },
  {
    value: projects[1].results[0].value,
    label: "Farmers supported",
    context: "TRANSFORM programme",
    icon: Users,
  },
];

export default function SuccessStories() {
  const [featuredStory, ...supportingStories] = stories;

  return (
    <section className="relative isolate overflow-hidden bg-[#F4F7EB] py-14 text-[#14352A] sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.96),transparent_58%),radial-gradient(ellipse_at_0%_70%,rgba(185,222,133,0.25),transparent_34%),radial-gradient(ellipse_at_100%_58%,rgba(193,229,151,0.28),transparent_36%)]"
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-16 rotate-[-35deg] text-lime-700/[0.14]"
        size={80}
        strokeWidth={0.8}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute right-4 bottom-16 rotate-[35deg] text-lime-700/[0.14]"
        size={80}
        strokeWidth={0.8}
      />

      <div className="shell relative z-10">
        <header className="relative mx-auto max-w-7xl pb-9 text-center sm:pb-11">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#347A35] sm:text-xs sm:tracking-[0.24em]">
              <span className="h-px w-8 bg-[#8ABF55] sm:w-12" />
              Real-world results · Success stories
              <span className="h-px w-8 bg-[#8ABF55] sm:w-12" />
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.045em] text-[#103A2B]">
              Real challenges.
              <br />
              Measurable{" "}
              <span className="font-display italic text-[#68A93C]">
                impact.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#4D6256] sm:text-base sm:leading-7">
              Discover how Terra turns engineering challenges into sustainable
              progress for industries, businesses, and communities.
            </p>
          </div>

          <Link
            to="/projects"
            className="group mt-5 inline-flex items-center gap-3 rounded-full border border-[#397A48] px-4 py-2 text-xs font-semibold text-[#174D35] transition hover:bg-[#E8F1D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F] lg:absolute lg:bottom-11 lg:right-0 lg:mt-0"
          >
            View all stories
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <Link
            to={`/projects/${featuredStory.project.slug}`}
            aria-label={`Read case study: ${featuredStory.project.title}`}
            className="group grid overflow-hidden rounded-[1.6rem] border border-[#DDE7D0] bg-white/80 shadow-[0_16px_45px_rgba(27,67,50,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(27,67,50,0.16)] sm:grid-cols-2 lg:min-h-[410px]"
          >
            <div className="relative min-h-[250px] overflow-hidden sm:min-h-[370px]">
              <img
                src={featuredStory.image}
                alt={featuredStory.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092D21]/65 via-transparent to-[#092D21]/10" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-[#0A3A29]/65 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:left-6 sm:top-6">
                <Leaf size={13} className="text-lime-300" />
                {featuredStory.category}
              </span>
              <span className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:bottom-6 sm:left-6">
                Featured case study · {featuredStory.project.location}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#578A43]">
                {featuredStory.project.title}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.65rem,2.4vw,2.2rem)] leading-[1.08] tracking-[-0.025em] text-[#123B2C]">
                {featuredStory.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#52655A]">
                {featuredStory.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#DDE7D0] pt-4">
                {[featuredStory.project.results[0], featuredStory.project.results[2]].map(
                  (result) => (
                    <div key={result.label}>
                      <p className="font-display text-2xl leading-none text-[#15543A] sm:text-3xl">
                        {result.value}
                      </p>
                      <p className="mt-1.5 text-[10px] leading-4 text-[#617267] sm:text-xs">
                        {result.label}
                      </p>
                    </div>
                  )
                )}
              </div>

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#14533A]">
                Explore case study
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          <div className="grid gap-4 lg:grid-rows-2">
            {supportingStories.map((story) => (
              <Link
                key={story.project.slug}
                to={`/projects/${story.project.slug}`}
                aria-label={`Read case study: ${story.project.title}`}
                className="group grid overflow-hidden rounded-[1.45rem] border border-[#DDE7D0] bg-white/80 shadow-[0_12px_32px_rgba(27,67,50,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(27,67,50,0.14)] sm:grid-cols-2 lg:min-h-[197px]"
              >
                <div className="relative min-h-[180px] overflow-hidden sm:min-h-[197px]">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092D21]/35 to-transparent" />
                </div>
                <div className="flex min-w-0 flex-col justify-center p-5 sm:p-5 lg:p-5">
                  <span className="w-fit rounded-full bg-[#EAF2DC] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#28633B] sm:text-[9px]">
                    {story.category}
                  </span>
                  <h3 className="mt-2.5 font-display text-xl leading-[1.08] tracking-[-0.02em] text-[#123B2C] sm:text-[1.35rem]">
                    {story.project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#52655A]">
                    {story.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-[#28633B]">
                    Read story
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lime-500/60 text-[#28633B] transition group-hover:bg-lime-300 group-hover:translate-x-0.5">
                      <ArrowUpRight size={14} />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 rounded-[1.6rem] border border-white/20 bg-gradient-to-r from-[#062D22] via-[#0B4A34] to-[#062D22] px-5 py-5 text-white shadow-[0_20px_45px_rgba(12,60,37,0.18)] sm:px-7 sm:py-6 lg:grid-cols-4">
          {impactHighlights.map(({ value, label, context, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 ${
                index < impactHighlights.length - 1
                  ? "lg:border-r lg:border-white/20 lg:pr-4"
                  : ""
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-lime-400/80 bg-lime-300/10 text-lime-300 sm:h-12 sm:w-12">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-2xl leading-none text-white sm:text-[1.8rem]">
                  {value}
                </span>
                <span className="mt-1 block text-[10px] font-medium leading-4 text-white/90 sm:text-xs">
                  {label}
                </span>
                <span className="mt-0.5 block text-[9px] leading-4 text-white/55">
                  {context}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
