// FinalCTA.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Phone, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IMG } from "./Data";
import { ease } from "./Common";

interface Action {
  icon: LucideIcon;
  label: string;
  href: string;
  primary?: boolean;
}

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.25, 1]);

  const actions: Action[] = [
    { icon: Sun, label: "Explore solar solutions", href: "/solutions", primary: true },
    { icon: Phone, label: "Contact the company", href: "/contact" },
    { icon: CalendarCheck, label: "Request a consultation", href: "/contact#consultation" },
  ];

  return (
    <section
      ref={ref}
      className="relative mt-10 overflow-hidden bg-[#06281f] py-28 text-white md:py-40"
    >
      <motion.img
        src={IMG.cta}
        alt=""
        style={{ y, scale }}
        className="absolute inset-0 h-[130%] w-full -translate-y-[8%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06281f]/90 via-[#06281f]/60 to-[#06281f]/90" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Let’s Build a Cleaner, Greener Tomorrow
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          {actions.map(({ icon: Icon, label, href, primary }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${
                primary
                  ? "bg-[#b8f35a] text-[#06281f] hover:bg-white"
                  : "border border-white/40 text-white hover:bg-white hover:text-[#06281f]"
              }`}
            >
              <Icon size={18} />
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}