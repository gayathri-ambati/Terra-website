import { ArrowRight, Sun, Zap, Leaf, Activity, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MaskedLines, Reveal } from '@/components/Reveal';

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
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-forest-800/10 to-transparent"
      />

      <div className="shell">
        <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] md:items-end">
          <div>
            <p className="label-caps mb-5 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-sage-500" />
              Renewable Energy Solutions
            </p>
            <MaskedLines
              lines={['Harness the power', 'of the sun.']}
              className="headline-lg max-w-3xl text-forest-900"
            />
          </div>

          <p className="max-w-xl text-base leading-8 text-charcoal/70 md:justify-self-end md:text-lg">
            Practical solar systems designed around your operational needs,
            site conditions and long-term energy objectives.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] lg:items-stretch lg:gap-10">
          <Reveal variant="left" className="min-h-[440px] md:min-h-[560px]">
            <figure className="group relative h-full min-h-[440px] overflow-hidden rounded-[1.25rem] md:min-h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
                alt="Solar panels generating clean renewable energy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent" />

              <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-sage-300 backdrop-blur-md">
                    <Sun size={17} />
                  </span>
                  <span className="label-caps text-white/70">Clean energy</span>
                </div>
                <h3 className="max-w-md font-display text-3xl font-medium leading-tight text-white md:text-4xl">
                  Reliable solar. Measurable impact.
                </h3>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal variant="right" className="flex">
            <div className="flex w-full flex-col rounded-[1.25rem] border border-forest-800/10 bg-white p-6 shadow-[0_20px_60px_rgba(11,33,27,.06)] sm:p-8 md:p-10">
              <div className="border-b border-forest-800/10 pb-7">
                <p className="label-caps mb-4 text-forest-600">What we deliver</p>
                <p className="max-w-xl text-base leading-8 text-charcoal/70 md:text-lg">
                  From feasibility and system design to installation and
                  performance monitoring, we help organisations transition to
                  cleaner, more efficient energy infrastructure.
                </p>
              </div>

              <div className="grid flex-1 gap-x-7 sm:grid-cols-2">
                {benefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group flex gap-4 border-b border-forest-800/10 py-6 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-300/45 text-forest-700 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-sage-300">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-forest-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-charcoal/65">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-2 flex flex-col gap-5 border-t border-forest-800/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-forest-700">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-forest-500" />
                    End-to-end delivery
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-forest-500" />
                    Ongoing support
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center justify-between gap-5 rounded-full bg-forest-800 py-2 pl-5 pr-2 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
                >
                  Discuss a project
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-400 text-forest-900 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={17} />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}