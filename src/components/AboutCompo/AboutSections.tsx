const pillars = [
  {
    title: "Global impact",
    body: "Every project is measured by what it saves: energy, material and time for the businesses we work with.",
  },
  {
    title: "Innovation",
    body: "Electrical engineering and automation, applied to problems in factories, buildings and farms.",
  },
  {
    title: "Sustainability",
    body: "Eco-friendly products and technologies that make growth last, not just grow.",
  },
];

const steps = [
  {
    title: "Assess",
    body: "We study your site, loads and processes to find where energy, material and time are being lost.",
  },
  {
    title: "Design",
    body: "We engineer a solution sized to your operation, from clean energy to automation and building systems.",
  },
  {
    title: "Deliver",
    body: "Our team installs, commissions and hands over, with training so your people can run it.",
  },
  {
    title: "Improve",
    body: "We track results against the plan and keep tuning so savings continue after go-live.",
  },
];

/* About section 1: who we are */
export function AboutIntroSection() {
  return (
    <section
      aria-labelledby="about-intro-heading"
      className="bg-[#16281F] px-6 py-20 text-white md:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2
            id="about-intro-heading"
            className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Electrical engineering for a cleaner way to grow
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Terra Ecopreneurs LLP builds smart, eco-friendly technology and
            automation solutions that help businesses cut waste, lower costs and
            grow with less impact on the environment.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            From energy audits and renewable installations to industrial
            automation and agriculture, we work as a long-term partner, not a
            one-off vendor.
          </p>
        </div>

        <dl className="divide-y divide-white/15 border-y border-white/15 self-start">
          {pillars.map((p) => (
            <div key={p.title} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-xl font-semibold text-[#E3A92B]">{p.title}</dt>
              <dd className="leading-relaxed text-white/80">{p.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* About section 2: how we work (a real sequence, so numbered) */
export function AboutProcessSection() {
  return (
    <section
      aria-labelledby="about-process-heading"
      className="bg-[#F2F5F1] px-6 py-20 text-[#16281F] md:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-process-heading"
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
        >
          How we work with you
        </h2>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-[#16281F]/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-[#F2F5F1] p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F7D4F] text-lg font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-[#3D5246]">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="rounded-full bg-[#16281F] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#24402F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D4F] focus-visible:ring-offset-2"
          >
            Start a conversation
          </a>
          <p className="text-[#3D5246]">
            Or write to{" "}
            <a
              href="mailto:ashwin@terraeco.in"
              className="font-medium text-[#16281F] underline underline-offset-4"
            >
              ashwin@terraeco.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}