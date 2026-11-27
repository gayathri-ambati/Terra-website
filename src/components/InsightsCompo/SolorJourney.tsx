// SolarJourney.tsx — "how sunlight reaches a village" + benefits
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useSpring } from "framer-motion";
import { Sun, Zap, Cpu, Home, BatteryCharging, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StepData {
  icon: LucideIcon;
  short: string;
  title: string;
  text: string;
  stat: string;
  statLabel: string;
  points: string[];
  image: string;
}

const STEPS: StepData[] = [
  {
    icon: Sun, short: "Sun", title: "Sunlight arrives",
    text: "Every hour the sun sends more energy to Earth than the world uses in a year. A village in a sunny region gets 5–6 peak sun hours every day, free.",
    stat: "5–6 hrs", statLabel: "of peak sunlight every day",
    points: ["Free and renewable, every single day", "Strongest between 10 am and 4 pm", "Clear skies give the best output"],
    image: "/images/sun-earth.png",
  },
  {
    icon: Zap, short: "Panels", title: "Panels turn light into electricity",
    text: "Solar panels on rooftops and open land convert sunlight into direct current (DC). No fuel, no moving parts, no smoke.",
    stat: "~20%", statLabel: "of sunlight becomes power",
    points: ["Light frees electrons inside the solar cells", "Produces clean DC electricity", "Little upkeep, a 25-year warranty"],
    image: "/images/solar-bom.png",
  },
  {
    icon: Cpu, short: "Inverter", title: "Inverter and safety boxes make it usable",
    text: "Cables and DCDB/ACDB boxes carry the power safely to an inverter, which converts DC into the AC that fans, lights and pumps run on.",
    stat: "DC → AC", statLabel: "ready for homes and pumps",
    points: ["Solar cables carry power with low loss", "DCDB and ACDB boxes protect against surges", "The inverter matches home and grid voltage"],
    image: "/images/solar-bom.png",
  },
  {
    icon: Home, short: "Village", title: "Power reaches every home",
    text: "Rows of rooftop systems feed the village directly. Extra power goes to the grid or into batteries, so homes stay lit after sunset.",
    stat: "3 kW", statLabel: "typical home rooftop system",
    points: ["Each roof powers its own home", "Extra units flow back to the grid", "Shared systems run pumps and streetlights"],
    image: "/images/village-solar.png",
  },
  {
    icon: BatteryCharging, short: "Home", title: "Homes use it smartly",
    text: "Lights, appliances, the water pump and even an electric vehicle draw from the roof first. The battery covers the evening.",
    stat: "24 hrs", statLabel: "of power with battery storage",
    points: ["Daytime loads run directly on solar", "The battery covers evening and night", "A smart meter shows what you save"],
    image: "/images/smart-home.png",
  },
];

const BENEFITS = [
  ["Up to 80% lower bills", "Most of a home's daytime power comes from its own roof."],
  ["1.2 t CO₂ avoided every year", "For a typical 3 kW home system, about the same as planting 50 trees."],
  ["25-year panel warranty", "One installation keeps working for decades with little upkeep."],
  ["Power that stays on", "Batteries and local generation reduce the impact of grid cuts."],
];

function Step({ i, active, onActive }: { i: number; active: boolean; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  useEffect(() => {
    if (inView) onActive(i);
  }, [inView, i, onActive]);
  const s = STEPS[i];
  const Icon = s.icon;

  return (
    <div id={`step-${i}`} ref={ref} className="relative min-h-[62vh] py-10 pl-16 md:pl-20">
      {/* Node on the timeline rail */}
      <span
        className={`absolute left-0 top-12 grid h-12 w-12 place-items-center rounded-full border-2 transition-all duration-500 md:h-14 md:w-14 ${
          active ? "scale-110 border-[#b8f35a] bg-[#06281f] text-[#b8f35a] shadow-[0_0_30px_rgba(184,243,90,0.6)]" : "border-green-200 bg-white text-green-700"
        }`}
      >
        <Icon size={22} />
      </span>

      {/* Big watermark number */}
      <span className="pointer-events-none absolute -top-2 right-0 select-none text-[9rem] font-black leading-none text-green-100/70 md:text-[11rem]">
        {i + 1}
      </span>

      <div className={`relative transition-opacity duration-500 ${active ? "opacity-100" : "opacity-40"}`}>
        <img src={s.image} alt={s.title} loading="lazy" className="mb-6 aspect-video w-full rounded-2xl object-cover lg:hidden" />
        <h3 className="max-w-md text-3xl font-extrabold leading-tight text-[#0b2e24] md:text-4xl">{s.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">{s.text}</p>

        <div className="mt-6 inline-flex items-baseline gap-3 rounded-2xl bg-[#06281f] px-5 py-3 text-white">
          <span className="text-3xl font-extrabold text-[#b8f35a]">{s.stat}</span>
          <span className="text-sm text-white/70">{s.statLabel}</span>
        </div>

        <ul className="mt-6 space-y-2.5">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] text-slate-700">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-700 text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Journey() {
  const [active, setActive] = useState(0);
  const list = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 55%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const go = (i: number) => document.getElementById(`step-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  const cur = STEPS[active];

  return (
    <section id="journey" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-extrabold leading-tight text-[#0b2e24] md:text-5xl">
          From sunshine to a lit-up village, in five steps
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Follow one ray of sunlight as it becomes the power behind a home, a school and a water pump.
        </p>
      </div>

      {/* Flow strip: click a stop to jump to that step */}
      <div className="relative mt-10 flex items-start justify-between">
        <div className="absolute left-6 right-6 top-6 border-t-2 border-dashed border-green-300" />
        <motion.div
          className="absolute left-6 top-6 h-0.5 origin-left bg-green-700"
          style={{ right: "1.5rem", scaleX: fill }}
        />
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const on = i <= active;
          return (
            <button key={s.short} onClick={() => go(i)} className="group relative flex flex-col items-center gap-2" aria-label={`Go to step ${i + 1}: ${s.short}`}>
              <span className={`grid h-12 w-12 place-items-center rounded-full border-2 transition-all duration-500 ${
                on ? "border-green-700 bg-green-700 text-white" : "border-green-200 bg-white text-green-700 group-hover:border-green-700"
              }`}>
                <Icon size={20} />
              </span>
              <span className={`text-xs font-semibold ${i === active ? "text-green-800" : "text-slate-500"}`}>{s.short}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div ref={list} className="relative">
          {/* Vertical rail that fills as you scroll */}
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-green-100 md:left-7">
            <motion.div style={{ scaleY: fill }} className="h-full origin-top bg-gradient-to-b from-green-600 to-[#b8f35a]" />
          </div>
          {STEPS.map((_, i) => (
            <Step key={i} i={i} active={i === active} onActive={setActive} />
          ))}
        </div>

        {/* Sticky image with live caption */}
        <div className="relative hidden lg:block">
          <div className="sticky top-28 h-[66vh] overflow-hidden rounded-[2rem] bg-green-900 shadow-2xl shadow-green-900/20">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active}
                src={cur.image}
                alt={cur.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#06281f]/90 via-transparent to-[#06281f]/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-x-0 bottom-0 p-7 text-white"
              >
                <span className="rounded-full bg-[#b8f35a] px-3 py-1 text-xs font-bold text-[#06281f]">
                  Step {active + 1} of {STEPS.length}
                </span>
                <p className="mt-3 text-2xl font-bold">{cur.title}</p>
                <div className="mt-4 flex gap-2">
                  {STEPS.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-[#b8f35a]" : "w-3 bg-white/50"}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating stat */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${active}`}
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45 }}
                className="absolute right-5 top-5 rounded-2xl bg-white/90 px-4 py-3 text-[#06281f] backdrop-blur"
              >
                <p className="text-2xl font-extrabold">{cur.stat}</p>
                <p className="text-xs text-slate-600">{cur.statLabel}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="bg-[#06281f] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <img src="/images/smart-home.png" alt="Home powered by rooftop solar" loading="lazy" className="mx-auto max-h-[560px] w-full rounded-[2rem] object-cover" />
        <div>
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">What a village gains once the sun works for it</h2>
          <ul className="mt-8 divide-y divide-white/15">
            {BENEFITS.map(([t, d]) => (
              <li key={t} className="py-5">
                <p className="text-2xl font-bold text-[#b8f35a]">{t}</p>
                <p className="mt-1 max-w-lg text-white/70">{d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/50">Figures are typical estimates. Actual results depend on roof, usage and local tariffs.</p>
        </div>
      </div>
    </section>
  );
}