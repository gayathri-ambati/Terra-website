// LatestInsights.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Sun,
  Zap,
  Leaf,
  BarChart3,
  Lightbulb,
  LayoutGrid,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ARTICLES, CATEGORIES, type Category } from "./Data";
import { ArrowBtn, ease } from "./Common";

const ICONS: Record<Category, LucideIcon> = {
  "All Articles": LayoutGrid,
  "Solar Technology": Sun,
  "Energy Savings": Zap,
  Sustainability: Leaf,
  "Industry Insights": BarChart3,
  "Tips & Guides": Lightbulb,
};

export default function LatestInsights() {
  const [active, setActive] = useState<Category>("All Articles");
  const list =
    active === "All Articles"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === active);

  return (
    <section id="latest" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      {/* Category pills */}
      <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center">
        {CATEGORIES.map((c) => {
          const Icon = ICONS[c];
          const on = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-md shadow-slate-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700 ${
                on
                  ? "text-white"
                  : "bg-white text-[#0b2e24] hover:bg-green-50"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-[#0b3b2e]"
                />
              )}
              <span className="relative flex items-center gap-2">
                {c !== "All Articles" && (
                  <Icon
                    size={16}
                    className={on ? "text-[#b8f35a]" : "text-green-700"}
                  />
                )}
                {c}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {list.map((a, i) => (
            <motion.a
              layout
              key={a.id}
              href={a.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(6,40,31,0.25)] transition-shadow hover:shadow-[0_25px_50px_-15px_rgba(6,40,31,0.35)]"
            >
              <div className="relative h-52 overflow-hidden bg-green-100">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <span className="absolute bottom-6 left-4 rounded-full bg-[#b8f35a] px-3.5 py-1 text-xs font-bold text-[#0b2e24]">
                  {a.category}
                </span>
                <svg
                  className="absolute -bottom-px left-0 w-full text-white"
                  viewBox="0 0 400 30"
                  preserveAspectRatio="none"
                  height="26"
                >
                  <path
                    d="M0 30V12C80 0 150 6 220 14s120 6 180-4v20z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="px-6 pb-6 pt-3">
                <h3 className="min-h-[3.5rem] text-lg font-bold leading-snug text-[#0b2e24]">
                  {a.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-green-700" />
                      {a.date}
                    </span>
                    <span className="h-3 w-px bg-slate-300" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-green-700" />
                      {a.read}
                    </span>
                  </div>
                  <ArrowBtn />
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}