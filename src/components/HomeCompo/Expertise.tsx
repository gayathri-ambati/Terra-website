



import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    id: "energy-efficiency-audit",
    title: "Energy Efficiency & Audit",
    description:
      "Cut energy waste, lower costs, and boost performance with data-driven efficiency audits and upgrades.",
    image:
      "https://static.wixstatic.com/media/3bf735_eb19d0863fd8473dbf26a9df4a0496d3~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Energy%20efficiency%20dashboard%20display.png",
    imageAlt: "Energy efficiency dashboard display",
  },
  {
    number: "02",
    id: "clean-energy",
    title: "Clean Energy",
    description:
      "Transition to a greener, more resilient future with our scalable renewable energy installations.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Solar panels under a clear sky",
  },
  {
    number: "03",
    id: "ibms",
    title: "IBMS",
    description:
      "Unify and automate your facility's core operations for smarter, safer, and highly efficient building management.",
    image:
      "https://static.wixstatic.com/media/3bf735_40bed995103643eea3cb38325b444283~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Digital%20energy%20monitoring%20display.png",
    imageAlt: "Digital energy monitoring display",
  },
  {
    number: "04",
    id: "digital-solutions",
    title: "Digital Solutions",
    description:
      "Empower your business transformation with cutting-edge digital tools and data-driven architectures.",
    image:
      "https://static.wixstatic.com/media/3bf735_d04cfe8d7c504e5da2ba5a8ef2058fbb~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
    imageAlt: "Abstract gradient bar graph",
  },
  {
    number: "05",
    id: "industrial-automation",
    title: "Industrial Automation",
    description:
      "Streamline production lines and accelerate output with state-of-the-art robotic and automation systems.",
    image:
      "https://static.wixstatic.com/media/3bf735_fe73ada7ef754d74b53daccaffb49d9e~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Display.png",
    imageAlt: "Abstract geometric display",
  },
  {
    number: "06",
    id: "prefab-structures",
    title: "Pre-fab Structures",
    description:
      "Accelerate your construction timeline with durable, high-quality, rapidly deployable prefabricated structures.",
    image:
      "https://static.wixstatic.com/media/3bf735_b7cdbef3c4b54395ae299e570da1613f~mv2.png/v1/fill/w_543,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    imageAlt: "Abstract geometric sculpture",
  },
  {
    number: "07",
    id: "press-components",
    title: "Press Components",
    description:
      "Secure precision and heavy-duty reliability for manufacturing with custom-engineered press components.",
    image:
      "https://static.wixstatic.com/media/3bf735_51e5ed1de97a47e88ae82e06098e96a3~mv2.png/v1/fill/w_543,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abstract%20Geometric%20Sculpture.png",
    imageAlt: "Abstract geometric sculpture",
  },
  {
    number: "08",
    id: "sustainable-management",
    title: "Sustainable Management",
    description:
      "Drive long-term growth and environmental responsibility with strategic frameworks built for the modern enterprise.",
    image:
      "https://static.wixstatic.com/media/3bf735_9c1af6eed6b04b9f9740e69eb72e530b~mv2.png/v1/fill/w_543,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gradient%20Bar%20Graph.png",
    imageAlt: "Abstract gradient graph",
  },
];

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia(section);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".expertise-heading", {
        y: 55,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".expertise-intro", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".expertise-row").forEach((row) => {
        gsap.from(row, {
          y: 35,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".expertise-image").forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      gsap.from(".expertise-bottom", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".expertise-bottom",
          start: "top bottom",
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#F5F7EC] pt-20 pb-8 sm:pt-[88px] sm:pb-8 lg:pt-[88px] lg:pb-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_16%,rgba(228,240,201,0.65),transparent_38%),radial-gradient(ellipse_at_82%_84%,rgba(206,225,171,0.45),transparent_43%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-72 -top-40 hidden h-[28rem] w-[28rem] overflow-hidden rounded-full border-[10px] border-white/60 shadow-2xl shadow-forest-900/10 lg:block"
      >
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 top-24 rotate-[-35deg] text-lime-700/15"
        size={58}
        strokeWidth={1}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 bottom-28 rotate-[35deg] text-lime-700/15"
        size={72}
        strokeWidth={1}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
        <div className="mb-3 flex items-center justify-between sm:mb-2">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-forest-700">
            <span className="h-px w-9 bg-forest-700" />
            What we do
          </p>
          <span className="font-mono text-[10px] tracking-[0.18em] text-forest-800/55">
            08 EXPERTISE AREAS
          </span>
        </div>

        <div className="grid gap-5 border-b border-forest-800/15 pb-4 sm:gap-6 sm:pb-4 lg:grid-cols-12 lg:items-start lg:gap-5">
          <div className="expertise-heading lg:col-span-7">
            <h2 className="font-display text-[clamp(2.8rem,5.3vw,5rem)] leading-[0.92] tracking-[-0.075em] text-forest-900">
              Solutions for
              <br />
              a better <span className="italic text-forest-700">tomorrow.</span>
            </h2>
          </div>

          <div className="expertise-intro relative z-10 lg:right-14 lg:col-span-5 lg:pb-1 lg:pl-7 lg:pr-12">
            <p className="max-w-md border-l border-forest-700/45 pl-5 text-sm leading-6 text-charcoal/80 sm:text-[13px] sm:leading-6">
              Terra Ecopreneurs helps businesses grow sustainably. We optimize
              operations to reduce waste and build lasting profitability
              through practical, eco-conscious strategies.
            </p>

            <Link
              to="/agriculture"
              className="group mt-3 inline-flex max-w-full items-center gap-1 rounded-full bg-forest-900 py-1 pl-3 pr-1 text-xs font-semibold text-white shadow-lg shadow-forest-900/15 transition-colors duration-300 hover:bg-forest-700 sm:mt-3"
            >
              <span className="truncate">
                Creating global change through green innovation
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-200 text-forest-900 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-1.5 mt-2 flex items-center justify-between gap-4 sm:mb-1.5 sm:mt-2">
          <p className="text-xs leading-5 text-charcoal/65 sm:text-sm">
            Integrated expertise. Thoughtful engineering. Sustainable impact.
          </p>
          <Link
            to="/solutions"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-forest-600 sm:inline-flex"
          >
            Explore all solutions
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* SERVICE GRID */}
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-4">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/solutions#${service.id}`}
              className="expertise-row group relative grid grid-cols-[76px_minmax(0,1fr)_32px] items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-1.5 shadow-[0_8px_24px_rgba(27,65,41,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-700/20 hover:bg-white/95 hover:shadow-[0_14px_32px_rgba(27,65,41,0.12)] sm:grid-cols-[92px_minmax(0,1fr)_36px] sm:gap-4 sm:p-1.5 lg:grid-cols-[108px_minmax(0,1fr)_36px] lg:gap-4"
            >
              <div className="relative h-[70px] w-[76px] overflow-hidden rounded-xl bg-sage-400/20 sm:h-[72px] sm:w-[92px] lg:h-[70px] lg:w-[108px]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="expertise-image absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-forest-900/15 to-transparent" />
              </div>

              <div className="min-w-0 border-l border-forest-700/35 pl-3 sm:pl-4">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="font-mono text-[9px] tracking-widest text-forest-700 sm:text-[10px]">
                    {service.number}
                  </span>
                  <span className="h-px w-5 bg-forest-700/40 transition-all duration-300 group-hover:w-8 group-hover:bg-forest-700" />
                </div>

                <h3 className="font-heading text-sm font-semibold leading-snug text-forest-900 transition-colors duration-300 group-hover:text-forest-700 sm:text-base">
                  {service.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-[1.45] text-charcoal/70 sm:text-xs sm:leading-[1.55]">
                  {service.description}
                </p>
              </div>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-100 text-forest-900 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-lime-200 sm:h-9 sm:w-9">
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <div className="expertise-bottom mt-5 rounded-full border border-forest-700/30 bg-white/45 p-0 sm:mt-6 sm:pl-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="flex min-w-0 items-center gap-3 px-2 font-display text-lg leading-tight tracking-tight text-forest-900 sm:px-0 sm:text-xl lg:text-2xl">
              <Leaf size={22} strokeWidth={1.5} className="shrink-0 text-forest-600" />
              <span>
                Better systems. Lower waste.
                <span className="ml-1 italic text-forest-700">Lasting value.</span>
              </span>
            </p>

            <span className="hidden h-px flex-1 bg-forest-700/30 sm:block" />

            <Link
              to="/solutions"
              className="group inline-flex w-full items-center justify-between gap-4 rounded-full bg-forest-900 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-forest-700 sm:w-auto"
            >
              Discover our expertise
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-200 text-forest-900 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}