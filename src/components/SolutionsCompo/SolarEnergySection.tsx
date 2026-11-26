import { ArrowUpRight, Sun, Zap, Leaf, Activity } from 'lucide-react';

export default function SolarEnergySection() {
  const benefits = [
    {
      icon: Sun,
      title: 'Solar Energy Integration',
      description:
        'Integrate renewable solar energy into your facility with scalable and efficient solutions.',
    },
    {
      icon: Zap,
      title: 'Energy Cost Optimization',
      description:
        'Reduce dependence on conventional electricity and optimize long-term operational costs.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Infrastructure',
      description:
        'Build environmentally responsible facilities powered by clean and renewable energy.',
    },
    {
      icon: Activity,
      title: 'Smart Energy Management',
      description:
        'Monitor energy performance and maximize efficiency with intelligent energy systems.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Renewable Energy Solutions
          </span>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Harness the Power
            <span className="text-green-700"> of the Sun.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Transform your energy infrastructure with intelligent solar solutions
            designed to reduce costs, improve efficiency, and support a
            sustainable future.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="group relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
              alt="Solar panels generating clean renewable energy"
              className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                Powering a sustainable tomorrow
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Clean energy for a better future.
              </h3>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-10 text-base leading-8 text-slate-600 md:text-lg">
              From energy integration to performance optimization, our solar
              energy solutions empower organizations to embrace renewable
              energy, strengthen operational efficiency, and move towards
              responsible energy consumption.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group border-t border-slate-200 pt-6 transition-all duration-300 hover:border-green-700"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-800 hover:gap-5"
            >
              Explore Solar Solutions
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}