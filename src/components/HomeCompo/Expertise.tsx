import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MaskedLines, Reveal } from '@/components/Reveal';

const services = [
  {
    number: '01',
    id: 'energy-efficiency-audit',
    title: 'Energy Efficiency & Audit',
    description:
      'Cut energy waste, lower costs, and boost performance with data-driven efficiency audits and upgrades.',
    image:
      'https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png',
    imageAlt: 'Energy efficiency dashboard display',
  },
  {
    number: '02',
    id: 'clean-energy',
    title: 'Clean Energy',
    description:
      'Transition to a greener, more resilient future with our scalable renewable energy installations.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=85',
    imageAlt: 'Solar panels under a clear sky',
  },
  {
    number: '03',
    id: 'ibms',
    title: 'IBMS',
    description:
      "Unify and automate your facility's core operations for smarter, safer, and highly efficient building management.",
    image:
      'https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png',
    imageAlt: 'Digital energy monitoring display',
  },
  {
    number: '04',
    id: 'digital-solutions',
    title: 'Digital Solutions',
    description:
      'Empower your business transformation with cutting-edge digital tools and data-driven architectures.',
    image:
      'https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png',
    imageAlt: 'Abstract gradient bar graph',
  },
  {
    number: '05',
    id: 'industrial-automation',
    title: 'Industrial Automation',
    description:
      'Streamline production lines and accelerate output with state-of-the-art robotic and automation systems.',
    image:
      'https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png',
    imageAlt: 'Abstract geometric display',
  },
  {
    number: '06',
    id: 'prefab-structures',
    title: 'Pre-fab Structures',
    description:
      'Accelerate your construction timeline with durable, high-quality, rapidly deployable prefabricated structures.',
    image:
      'https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f~mv2.png/v1/fill/w_543,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png',
    imageAlt: 'Abstract geometric sculpture',
  },
  {
    number: '07',
    id: 'press-components',
    title: 'Press Components',
    description:
      'Secure precision and heavy-duty reliability for manufacturing with custom-engineered press components.',
    image:
      'https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png',
    imageAlt: 'Abstract geometric sculpture',
  },
  {
    number: '08',
    id: 'sustainable-management',
    title: 'Sustainable Management',
    description:
      'Drive long-term growth and environmental responsibility with strategic frameworks built for the modern enterprise.',
    image:
      'https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_543,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png',
    imageAlt: 'Abstract gradient graph',
  },
];

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    let frameId = 0;

    const updateParallax = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        imageRefs.current.forEach((image, index) => {
          if (!image) return;

          if (reduceMotion) {
            image.style.translate = '0 0';
            return;
          }

          const bounds = image.getBoundingClientRect();
          const imageCenter = bounds.top + bounds.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distanceFromCenter = imageCenter - viewportCenter;
          const direction = index % 2 === 0 ? 1 : -1;
          const offset = Math.max(
            -10,
            Math.min(10, distanceFromCenter * -0.025 * direction)
          );

          // Individual translate keeps the hover scale animation working.
          image.style.translate = `0 ${offset}px`;
        });
      });
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-ivory py-20 md:py-28"
    >
      <div className="shell">
        {/* Full-width heading row prevents overlap with the intro */}
        <Reveal>
          <div className="border-b border-forest-800/15 pb-8 md:pb-10">
            <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
              <span className="h-px w-10 bg-forest-600" />
              What we do
            </p>

            <MaskedLines
              lines={['Sustainable Solutions for Modern Businesses']}
              className="whitespace-normal text-[clamp(2rem,3.8vw,3.65rem)] leading-[1.08] text-forest-800 lg:whitespace-nowrap"
            />
          </div>
        </Reveal>

        {/* Intro sits beneath the heading with its own space */}
        <div className="grid gap-8 border-b border-forest-800/15 py-8 md:grid-cols-12 md:items-end md:py-10">
          <div className="md:col-span-7">
            <Reveal>
              <Link
                to="/agriculture"
                className="group inline-flex max-w-full items-center gap-2 font-heading text-sm font-semibold text-forest-700"
              >
                <span className="border-b border-forest-700/30 pb-1 transition-colors group-hover:border-forest-700">
                  Creating Global Change via Green Innovation
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-charcoal/75">
                Terra Ecopreneurs guides businesses toward sustainable growth.
                We optimize operations to minimize waste and ensure lasting
                profitability through eco-conscious strategies.
              </p>
            </Reveal>
          </div>

          <Reveal className="md:col-span-5 md:flex md:justify-end">
            <Link to="/solutions" className="btn-ghost-dark inline-flex">
              Explore all solutions <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* Editorial service list */}
        <div className="mt-2 grid gap-x-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 2) * 80}>
              <Link
                to={`/solutions#${service.id}`}
                className="group grid min-h-[150px] grid-cols-[76px_minmax(0,1fr)_20px] items-center gap-4 border-b border-forest-800/15 py-6 sm:grid-cols-[92px_minmax(0,1fr)_24px] sm:gap-5"
              >
                <div className="relative h-[76px] w-[76px] overflow-hidden rounded-full bg-sage-400/30 sm:h-[92px] sm:w-[92px]">
                  <img
                    ref={(element) => {
                      imageRefs.current[index] = element;
                    }}
                    src={service.image}
                    alt={service.imageAlt}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-forest-800/10" />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-forest-600/70">
                      {service.number}
                    </span>
                    <span className="h-px w-5 bg-forest-600/30 transition-all duration-300 group-hover:w-9 group-hover:bg-forest-600" />
                  </div>

                  <h3 className="font-heading text-base font-semibold text-forest-800 transition-colors group-hover:text-forest-600 sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-charcoal/70">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-forest-700/45 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-forest-700"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex items-center gap-4 md:mt-14">
            <span className="h-px flex-1 bg-forest-800/15" />
            <p className="label-caps text-center text-forest-800/55">
              Better systems. Lower waste. Lasting value.
            </p>
            <span className="h-px flex-1 bg-forest-800/15" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}