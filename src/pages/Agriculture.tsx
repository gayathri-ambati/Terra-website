import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, Droplets, IndianRupee, Leaf, Play, Quote, Sprout, Sun, Zap } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const HERO_IMG = img('photo-1500382017468-9049fed747ef', 2000);
const TRACTOR_IMG = img('photo-1530836369250-ef72a3f5cda8', 1200);
const IRRIGATION_IMG = img('photo-1625246333195-78d9c38ad449', 1400);
const DRONE_IMG = img('photo-1473341304170-971dccb5ac1e', 1600);

const COMMITMENTS = ['Reduce Electricity Bills', 'Power Irrigation Systems', 'Support Sustainable Farming'];

const BENEFITS = [
  { icon: Sprout, label: 'Efficient Irrigation' },
  { icon: Sun, label: 'Reliable Power Supply' },
  { icon: IndianRupee, label: 'Lower Operational Cost' },
  { icon: Leaf, label: 'Eco-Friendly Farming' },
];

const SOLUTIONS = [
  { title: 'Solar water pumps', body: 'Daylight-powered pumps for borewells and open wells, with no diesel and no meter.', image: img('photo-1625246333195-78d9c38ad449', 900) },
  { title: 'Smart irrigation power', body: 'Drip and sprinkler systems run from solar with timers and moisture-based control.', image: img('photo-1416879595882-3373a0480b5b', 900) },
  { title: 'Drying and cold storage', body: 'Solar dryers and cooled storage that cut post-harvest losses.', image: img('photo-1464226184884-fa280b87c399', 900) },
  { title: 'Farm rooftop systems', body: 'Sheds, pump houses and farm buildings generating power for daily use.', image: img('photo-1574943320219-553eb213f72d', 900) },
];

const STEPS = [
  { icon: Sun, title: 'Panels collect sunlight', body: 'Panels turn daylight into electricity.' },
  { icon: Zap, title: 'Controller manages power', body: 'A drive adjusts pump speed to the sunlight available.' },
  { icon: Droplets, title: 'Pump moves water', body: 'Water is lifted to the field or into a storage tank.' },
  { icon: Sprout, title: 'Crops get irrigated', body: 'Drip or sprinklers deliver it where it is needed.' },
];

const STORIES = [
  { quote: 'Diesel for the pump was our biggest running cost. With solar we irrigate every sunny day without buying fuel.', who: 'Chilli farmer', where: 'Guntur district' },
  { quote: 'We store water in a tank during the day and irrigate on our own schedule. The pump needs very little attention.', who: 'Groundnut farmer', where: 'Kurnool district' },
];

const FAQS = [
  { q: 'Can the pump run at night?', a: 'A standard solar pump runs in daylight. Most farms pump into a tank or pond during the day and irrigate from storage when needed.' },
  { q: 'What maintenance does a system need?', a: 'Mostly regular cleaning of the panels and a periodic check of the pump, wiring and controller. We provide a maintenance plan with every installation.' },
  { q: 'How long do the panels last?', a: 'Quality panels commonly come with performance warranties of around 25 years. Check the warranty on the specific model you choose.' },
  { q: 'Are there government subsidies?', a: 'Schemes such as PM-KUSUM support solar pumps for farmers. Eligibility and subsidy amounts vary by state, and we can help you check what applies to you.' },
  { q: 'What size pump do I need?', a: 'It depends on water depth, the area you irrigate and your crop. Our team will survey the site and recommend a size.' },
];

function SavingsEstimator() {
  const [hp, setHp] = useState(5);
  const [hours, setHours] = useState(6);
  const [tariff, setTariff] = useState(6);
  const kwh = hp * 0.746 * hours * 365;
  const cost = Math.round(kwh * tariff);
  const fmt = (n: number) => n.toLocaleString('en-IN');
  const field = (label: string, value: number, set: (n: number) => void, min: number, max: number, step: number, unit: string) => (
    <label className="block">
      <span className="flex items-baseline justify-between font-body text-sm text-white/80">
        {label}
        <span className="font-heading text-base font-semibold text-lime-400">
          {value} {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-2 w-full accent-lime-400"
      />
    </label>
  );
  return (
    <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-[#04231c] to-[#14532d] p-8 text-white shadow-[0_24px_70px_rgba(4,35,28,0.3)] sm:p-10 lg:grid-cols-2">
      <div className="space-y-6">
        {field('Pump size', hp, setHp, 1, 15, 1, 'HP')}
        {field('Pumping hours per day', hours, setHours, 1, 12, 1, 'hrs')}
        {field('Electricity tariff', tariff, setTariff, 1, 12, 0.5, '₹/kWh')}
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
        <p className="font-body text-sm text-white/70">Estimated yearly grid cost of running this pump</p>
        <p className="mt-2 font-heading text-4xl font-bold text-lime-400 sm:text-5xl">₹{fmt(cost)}</p>
        <p className="mt-2 font-body text-sm text-white/70">about {fmt(Math.round(kwh))} kWh of electricity per year</p>
        <p className="mt-4 border-t border-white/15 pt-4 font-body text-xs leading-relaxed text-white/55">
          Simple estimate: HP × 0.746 × hours × 365 × tariff. It ignores motor efficiency, diesel use and subsidies.
        </p>
      </div>
    </div>
  );
}

export function AgriculturePage() {
  return (
    <main className="bg-white text-[#0b3b2e]">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative isolate overflow-hidden bg-[#04231c] text-white">
        <img
          src={HERO_IMG}
          alt="Farmer checking crops on a tablet in a green field at sunrise"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04231c] via-[#04231c]/65 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:px-10 lg:px-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-body text-xs backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Agriculture Solutions
          </span>
          <h1 className="mt-6 max-w-2xl font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Solar Power
            <span className="block">
              for <span className="text-lime-400">Agriculture</span>
            </span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-white/85">
            Empowering farmers with clean energy for a brighter and more productive future.
          </p>
        
        </div>

        <svg
          className="absolute inset-x-0 bottom-0 h-16 w-full text-white sm:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="currentColor" d="M0 60C260 110 520 20 800 50s460 40 640-20v90H0z" />
        </svg>
      </section>

      {/* ---------------------------- COMMITMENT --------------------------- */}
      <section id="commitment" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:px-10 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:px-16">
        <Reveal variant="left">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(11,59,46,0.18)] sm:h-96">
            <img
              src={TRACTOR_IMG}
              alt="Tractor working a field beside solar panels"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04231c]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-[#04231c]/75 px-4 py-3 text-white backdrop-blur-md">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-green-600/50 text-lime-400">
                <Leaf size={18} />
              </span>
              <p className="font-heading text-sm font-semibold leading-snug">
                Clean Energy
                <br />
                for Smart Farming
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-body text-sm font-medium text-green-700">Our Commitment</p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-4xl">
            Sustainable Energy
            <br />
            for a Prosperous Farming
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-slate-600">
            Solar energy helps farmers reduce costs, increase productivity and contribute to a greener
            planet.
          </p>
          <ul className="mt-5 space-y-3">
            {COMMITMENTS.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm text-slate-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-green-600 text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/solutions"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b3b2e] px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-green-700"
          >
            Explore Solutions <ArrowRight size={15} />
          </Link>
        </Reveal>
      </section>

      {/* ----------------------------- BENEFITS ---------------------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-14 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-16">
          <div>
            <p className="font-body text-sm font-medium text-green-700">Benefits for Agriculture</p>
            <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Grow More with Solar</h2>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {BENEFITS.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={i * 70}>
                  <div className="flex h-full flex-col items-center rounded-xl bg-white p-4 text-center shadow-[0_8px_26px_rgba(11,59,46,0.08)] ring-1 ring-slate-100">
                    <Icon size={26} className="text-green-600" strokeWidth={1.5} />
                    <p className="mt-3 font-body text-xs font-medium leading-snug text-slate-700">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="relative hidden h-64 overflow-hidden rounded-3xl lg:block">
            <img
              src={IRRIGATION_IMG}
              alt="Sprinklers watering green crop rows"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ----------------------------- SOLUTIONS --------------------------- */}
      <section className="bg-[#f3f8f1] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="font-body text-sm font-medium text-green-700">Our solutions</p>
            <h2 className="mt-2 max-w-xl font-heading text-3xl font-bold md:text-4xl">
              Solar for every part of the farm
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_34px_rgba(11,59,46,0.08)] ring-1 ring-slate-100">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{s.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- HOW IT WORKS ------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <Reveal>
          <p className="font-body text-sm font-medium text-green-700">Solar irrigation process</p>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">From sunlight to water</h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <li className="relative">
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute left-16 right-[-2.5rem] top-8 hidden border-t-2 border-dashed border-green-600/40 lg:block"
                    aria-hidden="true"
                  />
                )}
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[#0b3b2e] text-lime-400 shadow-lg">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ----------------------------- ESTIMATOR --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <Reveal>
          <div className="mb-8 px-2">
            <p className="font-body text-sm font-medium text-green-700">Estimate your pump cost</p>
            <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">What does your pump cost today?</h2>
          </div>
          <SavingsEstimator />
        </Reveal>
      </section>

      {/* ------------------------------ STORIES ---------------------------- */}
      <section className="bg-[#f3f8f1] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="font-body text-sm font-medium text-green-700">Farmer stories</p>
            <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Heard in the field</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {STORIES.map((s, i) => (
              <Reveal key={s.where} delay={i * 100}>
                <figure className="flex h-full gap-5 rounded-2xl bg-white p-7 shadow-[0_10px_34px_rgba(11,59,46,0.08)] ring-1 ring-slate-100">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime-400 text-[#04231c]">
                    <Quote size={18} />
                  </span>
                  <div>
                    <blockquote className="font-body text-[15px] leading-relaxed text-slate-700">{s.quote}</blockquote>
                    <figcaption className="mt-4">
                      <p className="font-heading text-sm font-semibold">{s.who}</p>
                      <p className="font-body text-xs text-slate-500">{s.where}</p>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- FAQ ------------------------------ */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-16">
        <Reveal>
          <p className="font-body text-sm font-medium text-green-700">Agriculture FAQs</p>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Questions farmers ask</h2>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-slate-600">
            Can&rsquo;t find your answer? Our team will help you size a system for your land.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-green-700 hover:text-green-900">
            Talk to our team <ArrowRight size={15} />
          </Link>
        </Reveal>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={18} className="shrink-0 text-green-600 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="px-4 pb-10 sm:px-6">
        <div className="relative isolate mx-auto flex max-w-7xl items-center gap-6 overflow-hidden rounded-[2rem] px-6 py-10 text-white sm:px-10">
          <img
            src={DRONE_IMG}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04231c] via-[#04231c]/85 to-[#04231c]/30" />
          <span className="hidden h-20 w-20 shrink-0 place-items-center rounded-full border border-lime-400/60 text-lime-400 sm:grid">
            <Leaf size={34} />
          </span>
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Invest in Solar Agriculture</h2>
            <p className="mt-2 max-w-sm font-body text-sm text-white/80">
              A sustainable solution for farmers, for a healthier planet.
            </p>
          </div>
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading text-sm font-semibold text-[#04231c] transition-colors hover:bg-white sm:inline-flex"
          >
            Get a Quote <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}