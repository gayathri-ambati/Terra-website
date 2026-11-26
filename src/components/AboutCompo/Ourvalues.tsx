
const values = [
  {
    number: "01",
    title: "Sustainability",
    text: "Making sustainability an integral part of every decision, design and solution.",
  },
  {
    number: "02",
    title: "Innovation",
    text: "Embracing forward-thinking technologies to solve real-world challenges.",
  },
  {
    number: "03",
    title: "Collaboration",
    text: "Building lasting partnerships that turn shared ambitions into impact.",
  },
  {
    number: "04",
    title: "Integrity",
    text: "Creating value through transparency, responsibility and trust.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-[#173b2b] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-green-300">
            What Guides Us
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Our values shape everything we do.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.number}
              className="border-t border-white/25 pt-8"
            >
              <span className="text-sm text-green-300">
                {value.number}
              </span>

              <h3 className="mb-5 mt-8 text-2xl font-medium">
                {value.title}
              </h3>

              <p className="leading-8 text-white/65">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
