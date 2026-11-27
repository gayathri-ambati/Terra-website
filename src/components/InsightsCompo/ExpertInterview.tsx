// ExpertInterviews.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { EXPERTS, type Expert } from "./Data";
import { SectionHead, ease } from "./Common";

export default function ExpertInterviews() {
  // 👇 typed state — required in TSX
  const [open, setOpen] = useState<Expert | null>(null);

  useEffect(() => {
    // 👇 typed event — required in TSX
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead
          eyebrow="Expert Opinions & Interviews"
          title="Hear it from the people who do this every day"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERTS.map((e, i) => (
            <motion.button
              key={e.name}
              onClick={() => setOpen(e)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="group text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-green-900">
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06281f]/80 via-transparent to-transparent transition-opacity group-hover:from-[#06281f]/60" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#b8f35a]/50" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[#b8f35a] text-[#06281f] shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play size={26} fill="currentColor" />
                  </span>
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                  {e.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0b2e24]">{e.topic}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {e.name}, {e.role}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.topic}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
              onClick={(ev: React.MouseEvent<HTMLDivElement>) => ev.stopPropagation()}
            >
              <iframe
                src={`${open.video}?autoplay=1`}
                title={open.topic}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
              <button
                onClick={() => setOpen(null)}
                aria-label="Close video"
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}