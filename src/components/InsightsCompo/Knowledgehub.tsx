// KnowledgeHub.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Calculator } from "lucide-react";
import { FAQS } from "./Data";
import { AnimatedNumber, Reveal, SectionHead } from "./Common";

function Calc() {
  const [bill, setBill] = useState<number>(4000); // monthly bill in ₹
  const yearly = Math.round(bill * 12 * 0.8);
  const kw = Math.max(1, Math.round(bill / 900));
  const co2 = Math.round(kw * 1.2 * 10) / 10;

  return (
    <div className="rounded-3xl bg-[#06281f] p-7 text-white">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#b8f35a] text-[#06281f]">
          <Calculator size={22} />
        </span>
        <h3 className="text-xl font-bold">Solar savings calculator</h3>
      </div>
      <label
        htmlFor="bill"
        className="mt-6 flex justify-between text-sm text-white/70"
      >
        <span>Your monthly electricity bill</span>
        <span className="font-bold text-white">
          ₹{bill.toLocaleString("en-IN")}
        </span>
      </label>
      <input
        id="bill"
        type="range"
        min="1000"
        max="30000"
        step="500"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        className="mt-3 w-full accent-[#b8f35a]"
      />

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xl font-extrabold text-[#b8f35a] md:text-2xl">
            <AnimatedNumber value={yearly} prefix="₹" />
          </p>
          <p className="mt-1 text-xs text-white/60">Saved per year</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xl font-extrabold text-[#b8f35a] md:text-2xl">
            <AnimatedNumber value={kw} suffix=" kW" />
          </p>
          <p className="mt-1 text-xs text-white/60">Suggested system</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xl font-extrabold text-[#b8f35a] md:text-2xl">
            {co2} t
          </p>
          <p className="mt-1 text-xs text-white/60">CO₂ avoided / yr</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/50">
        Estimate only. Actual savings depend on roof, usage and local tariffs.
      </p>
    </div>
  );
}

export default function KnowledgeHub() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHead
        eyebrow="Energy Knowledge Hub"
        title="Answers, guides and a quick savings estimate"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const on = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.08}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    on
                      ? "border-green-700 bg-green-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#0b2e24]"
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: on ? 135 : 0 }}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-700 text-white"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p className="px-5 pb-5 text-slate-600">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <Calc />
        </Reveal>
      </div>
    </section>
  );
}