// FeaturedArticle.tsx
import { motion } from "framer-motion";
import { CalendarDays, Clock, Eye, ArrowRight, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FEATURED } from "./Data";
import { CountUp, ease } from "./Common";

export default function FeaturedArticle() {
  const f = FEATURED;
  return (
    <section className="relative z-10 -mt-16 px-4 md:px-6">
      <motion.article
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease }}
        className="relative mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_20px_60px_-20px_rgba(6,40,31,0.35)] lg:grid-cols-[1.1fr_1fr_0.45fr] lg:items-center"
      >
        <a
          href={f.href}
          className="group relative block overflow-hidden rounded-3xl"
        >
          <img
            src={f.image}
            alt={f.title}
            className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 lg:h-[240px]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-green-700 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
            Featured
          </span>
        </a>

        <div className="px-3 lg:px-2">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} className="text-green-700" />
              {f.date}
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-green-700" />
              {f.category}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-bold leading-snug text-[#0b2e24] md:text-3xl">
            {f.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            {f.excerpt}
          </p>
          <a
            href={f.href}
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 hover:shadow-lg hover:shadow-green-800/30"
          >
            Read More{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Reading stats */}
        <div className="relative flex gap-6 rounded-3xl bg-slate-50 p-6 lg:flex-col lg:gap-8 lg:self-stretch lg:justify-center">
          <Leaf className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-12 text-green-200/60" />
          <Stat icon={Clock} label="Read Time">
            <CountUp to={f.readTime} suffix=" min" />
          </Stat>
          <Stat icon={Eye} label="Views">
            <CountUp to={f.views} decimals={1} suffix="K+" />
          </Stat>
        </div>
      </motion.article>
    </section>
  );
}

interface StatProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}

const Stat = ({ icon: Icon, label, children }: StatProps) => (
  <div className="relative flex items-center gap-3">
    <span className="grid h-12 w-12 place-items-center rounded-full bg-green-100 text-green-700">
      <Icon size={22} />
    </span>
    <div>
      <p className="text-2xl font-bold text-[#0b2e24]">{children}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  </div>
);