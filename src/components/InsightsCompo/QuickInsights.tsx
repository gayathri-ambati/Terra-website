// QuickInsights.tsx
import { motion } from "framer-motion";
import {
  Footprints,
  ReceiptText,
  BatteryCharging,
  Globe2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CountUp, SectionHead, ease } from "./Common";

interface InsightItem {
  icon: LucideIcon;
  title: string;
  to: number;
  decimals?: number;
  suffix: string;
  note: string;
}

const ITEMS: InsightItem[] = [
  {
    icon: Footprints,
    title: "Reduce carbon footprint",
    to: 1.2,
    decimals: 1,
    suffix: " t",
    note: "CO₂ avoided per year by a 3 kW home system",
  },
  {
    icon: ReceiptText,
    title: "Lower electricity bills",
    to: 80,
    suffix: "%",
    note: "Typical reduction in monthly bills",
  },
  {
    icon: BatteryCharging,
    title: "Energy independence",
    to: 25,
    suffix: " yrs",
    note: "Panel performance warranty",
  },
  {
    icon: Globe2,
    title: "Sustainable future",
    to: 100,
    suffix: "%",
    note: "Clean, renewable daylight",
  },
];

export default function QuickInsights() {
  return (
    <section className="relative overflow-hidden bg-[#06281f] py-20">
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead
          light
          eyebrow="Quick Energy Insights"
          title="Small numbers, big impact"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, ...it }, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover="hover"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition-colors hover:border-[#b8f35a]/50 hover:bg-white/10"
            >
              <motion.span
                variants={{
                  hover: { rotate: [0, -12, 12, 0], scale: 1.15 },
                }}
                transition={{ duration: 0.5 }}
                className="grid h-12 w-12 place-items-center rounded-2xl bg-[#b8f35a] text-[#06281f]"
              >
                <Icon size={24} />
              </motion.span>
              <p className="mt-6 text-4xl font-extrabold text-[#b8f35a]">
                <CountUp
                  to={it.to}
                  decimals={it.decimals}
                  suffix={it.suffix}
                />
              </p>
              <h3 className="mt-2 font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-white/60">{it.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}