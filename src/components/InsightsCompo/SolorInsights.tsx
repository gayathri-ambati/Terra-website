import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
  animate,
  type Variants,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowDown,
  Calendar,
  Clock,
  Eye,
  Sun,
  Zap,
  Leaf,
  Building2,
  Lightbulb,
  Send,
  Check,
  TrendingDown,
  Globe2,
  BatteryCharging,
} from "lucide-react";

// ✅ FIX: cast to mutable tuple for framer-motion `Easing`
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ----------------------------- Data ----------------------------- */

// ✅ FIX: explicit type instead of `as const` (avoids readonly literal union issues)
type Category = {
  name: string;
  icon: LucideIcon | null;
};

const CATS: Category[] = [
  { name: "All Articles", icon: null },
  { name: "Solar Technology", icon: Sun },
  { name: "Energy Savings", icon: Zap },
  { name: "Sustainability", icon: Leaf },
  { name: "Industry Insights", icon: Building2 },
  { name: "Tips & Guides", icon: Lightbulb },
];

type Article = {
  cat: string;
  title: string;
  date: string;
  read: string;
  img: string;
};

const ARTICLES: Article[] = [
  { cat: "Solar Technology", title: "How Solar Panels Can Reduce Your Electricity Bill", date: "Nov 20, 2026", read: "6 min read", img: U("photo-1558449028-b53a39d100fc") },
  { cat: "Sustainability", title: "Building a Sustainable Future with Clean Energy", date: "Nov 18, 2026", read: "5 min read", img: U("photo-1532601224476-15c79f2f7a51") },
  { cat: "Industry Insights", title: "The Growing Role of Renewable Energy in Business", date: "Nov 15, 2026", read: "7 min read", img: U("photo-1497435334941-8c899ee9e8e9") },
  { cat: "Energy Savings", title: "Five Quick Wins to Cut Your Factory's Power Use", date: "Nov 10, 2026", read: "5 min read", img: U("photo-1509391366360-2e959784a276") },
  { cat: "Tips & Guides", title: "A Simple Guide to Maintaining Rooftop Solar", date: "Nov 06, 2026", read: "4 min read", img: U("photo-1473341304170-971dccb5ac1e") },
  { cat: "Solar Technology", title: "Battery Storage: When It Pays Back", date: "Nov 02, 2026", read: "6 min read", img: U("photo-1508514177221-188b1cf16e9d") },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------- 1. Cinematic hero ------------------------- */
export function SolarHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ FIX: reduce is boolean | null; use explicit comparison
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? (["0%", "0%"] as const) : (["0%", "25%"] as const)
  );

  const words = ["Insights", "for", "a"];

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[640px] overflow-hidden bg-[#06261c] pb-40 pt-36 text-white md:min-h-[720px] md:pt-44"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <motion.img
          src={U("photo-1508514177221-188b1cf16e9d", 2000)}
          alt="Solar panels at sunrise"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 14, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06261c] via-[#06261c]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06261c]/60 via-transparent to-transparent" />
      </motion.div>

      {/* floating particles */}
      {!reduce &&
        [...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="absolute -z-0 h-2 w-2 rounded-full bg-[#B9F36B]/60 blur-[1px]"
            style={{ left: `${10 + i * 11}%`, top: `${30 + (i % 4) * 14}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-5 md:px-10"
      >
        <motion.p
          variants={fade}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#7CE35A]" /> Our
          Insights
        </motion.p>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          <span className="block overflow-hidden">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="mr-4 inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.1 }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {["Greener", "Tomorrow"].map((w, i) => (
              <motion.span
                key={w}
                className={`mr-4 inline-block ${i === 0 ? "text-[#B9F36B]" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 + i * 0.12 }}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          variants={fade}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Explore the latest trends, expert insights and practical tips on solar
          energy, renewable solutions and clean technology.
        </motion.p>

        <motion.a
          variants={fade}
          href="#featured"
          className="group mt-10 inline-flex items-center gap-3 text-sm"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-[#06261c]">
            <ArrowDown size={18} className="animate-bounce" />
          </span>
          Scroll to explore
        </motion.a>
      </motion.div>

      {/* curved white edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-16 w-full text-white"
      >
        <path
          fill="currentColor"
          d="M0 80V40C240 0 480 0 720 20s480 30 720-10v70z"
        />
      </svg>
    </section>
  );
}

/* ------------------------ 2. Featured article ------------------------ */
type StatItem = { i: LucideIcon; v: string; l: string };

export function FeaturedArticle() {
  const stats: StatItem[] = [
    { i: Clock, v: "5 min", l: "Read Time" },
    { i: Eye, v: "2.5K+", l: "Views" },
  ];

  return (
    <section id="featured" className="relative -mt-24 scroll-mt-20 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 1, ease: EASE }}
        className="group mx-auto grid max-w-7xl gap-6 rounded-[2rem] bg-white p-3 shadow-[0_30px_80px_-30px_rgba(6,38,28,0.35)] ring-1 ring-black/5 lg:grid-cols-[1.1fr_1fr_auto]"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={U("photo-1509391366360-2e959784a276")}
            alt="Solar farm at sunset"
            className="h-72 w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 lg:h-full"
          />
          <span className="absolute left-5 top-5 rounded-full bg-[#0F7A43] px-4 py-1.5 text-sm font-semibold text-white">
            Featured
          </span>
        </div>

        <div className="flex flex-col justify-center px-3 py-4 lg:px-2">
          <p className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-green-700" /> Nov 26, 2026
            </span>
            <span className="h-3 w-px bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <Sun size={14} className="text-green-700" /> Solar Technology
            </span>
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0B2A1E] md:text-4xl">
            The Future of Solar Energy: Trends to Watch in 2027
          </h2>
          <p className="mt-4 max-w-md leading-7 text-gray-600">
            Discover the latest innovations in solar technology, from higher
            efficiency panels to smart energy solutions shaping a sustainable
            future.
          </p>
          <motion.a
            href="/blog"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0F7A43] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition hover:bg-[#0B5E33]"
          >
            Read More{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        <div className="flex gap-4 rounded-3xl bg-[#F3F7F1] p-6 lg:w-56 lg:flex-col lg:justify-center lg:gap-8">
          {stats.map(({ i: Icon, v, l }) => (
            <div key={l} className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#DDEBD7] text-green-800">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xl font-bold text-[#0B2A1E]">{v}</p>
                <p className="text-xs text-gray-500">{l}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- 3 + 4. Category filters & article grid ---------------- */
export function ArticleExplorer() {
  const [active, setActive] = useState<string>("All Articles");
  const list = ARTICLES.filter(
    (a) => active === "All Articles" || a.cat === active
  );

  return (
    <section className="bg-white px-4 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Filter articles"
          className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 md:justify-center"
        >
          {CATS.map(({ name, icon: Icon }) => {
            const on = active === name;
            return (
              <button
                key={name}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(name)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 ${
                  on
                    ? "text-white"
                    : "bg-white text-[#0B2A1E] hover:bg-[#F3F7F1]"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 rounded-full bg-[#0B3D2B]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {Icon && <Icon size={16} />}
                  {name}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((a, i) => (
              <motion.a
                key={a.title}
                layout
                href="/blog"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(6,38,28,0.25)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_30px_60px_-20px_rgba(6,38,28,0.35)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#9BE564] px-3.5 py-1 text-xs font-semibold text-[#0B2A1E]">
                    {a.cat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-snug text-[#0B2A1E]">
                    {a.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {a.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {a.read}
                      </span>
                    </p>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#DDEBD7] text-green-800 transition group-hover:bg-[#0F7A43] group-hover:text-white">
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------- 6. Quick energy insights (counters) ------------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const c = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v: number) => {
        if (ref.current)
          ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      },
    });
    return () => c.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

type QuickStat = { icon: LucideIcon; to: number; suffix: string; label: string };

export function QuickInsights() {
  const stats: QuickStat[] = [
    { icon: Leaf, to: 31, suffix: "k t", label: "CO₂ emissions avoided" },
    { icon: TrendingDown, to: 23, suffix: "%", label: "Average bill reduction" },
    { icon: BatteryCharging, to: 42, suffix: " GWh", label: "Energy saved" },
    { icon: Globe2, to: 64, suffix: "", label: "Communities reached" },
  ];

  return (
    <section className="bg-[#F3F7F1] px-4 py-16 md:px-10 md:py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map(({ icon: Icon, to, suffix, label }) => (
          <motion.div
            key={label}
            variants={fade}
            whileHover={{ y: -6 }}
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#DDEBD7] text-green-800 transition group-hover:rotate-6 group-hover:bg-[#0F7A43] group-hover:text-white">
              <Icon size={22} />
            </span>
            <p className="mt-6 text-4xl font-bold tracking-tight text-[#0B2A1E]">
              <Counter to={to} suffix={suffix} />
            </p>
            <p className="mt-1 text-sm text-gray-500">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ----------------------- 11. Newsletter subscription ----------------------- */
export function NewsletterSection() {
  const [email, setEmail] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const reduce = useReducedMotion();
  const valid = /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) setDone(true);
  };

  return (
    <section className="bg-white px-4 py-12 md:px-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: EASE }}
        className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-[#06261c] px-6 py-14 text-white md:px-14 lg:grid-cols-[1fr_1fr_auto]"
      >
        <motion.div
          aria-hidden="true"
          animate={
            reduce
              ? undefined
              : { opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }
          }
          transition={{ duration: 6, repeat: Infinity }}
          className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#4FBF4A]/30 blur-3xl"
        />

        <div className="relative">
          <p className="flex items-center gap-3 font-semibold text-[#7CE35A]">
            Stay Updated <span className="h-px w-16 bg-[#7CE35A]/60" />
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Get the Latest Insights{" "}
            <span className="text-[#B9F36B]">Delivered to Your Inbox</span>
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            Subscribe to our newsletter for expert tips, industry updates and the
            latest innovations in solar energy.
          </p>
        </div>

        <form className="relative" onSubmit={handleSubmit} noValidate>
          <label htmlFor="nl-email" className="sr-only">
            Email address
          </label>
          <div className="flex items-center rounded-full border border-white/25 bg-white/5 p-1.5 transition focus-within:border-[#B9F36B] focus-within:shadow-[0_0_0_4px_rgba(185,243,107,0.15)]">
            <input
              id="nl-email"
              type="email"
              value={email}
              disabled={done}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              disabled={!valid || done}
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#B9F36B] px-5 py-2.5 text-sm font-semibold text-[#06261c] transition disabled:opacity-60"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={done ? "d" : "s"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2"
                >
                  {done ? (
                    <>
                      Subscribed <Check size={16} />
                    </>
                  ) : (
                    <>
                      Subscribe <Send size={15} />
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
          <p
            role="status"
            className="mt-3 min-h-5 pl-4 text-xs text-white/60"
          >
            {done
              ? "Thanks — you're on the list."
              : email && !valid
              ? "Enter a valid email address."
              : ""}
          </p>
        </form>

        <div className="relative hidden h-48 w-56 lg:block" aria-hidden="true">
          <motion.div
            animate={
              reduce ? undefined : { y: [0, -10, 0], rotate: [-3, 3, -3] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-4 grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-[#4FBF4A]/40 to-transparent"
          >
            <Leaf size={84} className="text-[#B9F36B]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}