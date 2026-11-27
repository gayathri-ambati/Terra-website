// ResearchReports.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Download, Check, Loader2 } from "lucide-react";
import { REPORTS } from "./Data";
import { SectionHead, ease } from "./Common";

type DownloadState = "idle" | "loading" | "done";

interface DownloadBtnProps {
  href?: string;
}

function DownloadBtn({ href = "#" }: DownloadBtnProps) {
  const [state, setState] = useState<DownloadState>("idle");

  const click = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state !== "idle") {
      e.preventDefault();
      return;
    }
    setState("loading");
    setTimeout(() => setState("done"), 1200);
    setTimeout(() => setState("idle"), 3200);
    // Hook up your real file here: window.open(href)
  };

  return (
    <button
      onClick={click}
      className="flex min-w-[8.5rem] items-center justify-center gap-2 rounded-full bg-green-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          {state === "idle" && (
            <>
              <Download size={16} />
              Download
            </>
          )}
          {state === "loading" && (
            <>
              <Loader2 size={16} className="animate-spin" />
              Preparing
            </>
          )}
          {state === "done" && (
            <>
              <Check size={16} />
              Ready
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function ResearchReports() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHead
        eyebrow="Research & Reports"
        title="Reports and guides you can keep"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {REPORTS.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: i % 2 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: Math.floor(i / 2) * 0.12, ease }}
            whileHover={{ y: -6 }}
            className="group flex items-center gap-5 rounded-3xl bg-white p-5 shadow-[0_10px_40px_-15px_rgba(6,40,31,0.25)]"
          >
            <div className="relative grid h-28 w-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-green-700 to-[#06281f] text-[#b8f35a] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
              <FileText size={34} />
              <span className="absolute bottom-0 h-1.5 w-full bg-[#b8f35a]" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-green-700">{r.type}</p>
              <h3 className="mt-1 text-lg font-bold leading-snug text-[#0b2e24]">
                {r.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {r.pages} pages · PDF · {r.size}
              </p>
              <div className="mt-3">
                <DownloadBtn />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}