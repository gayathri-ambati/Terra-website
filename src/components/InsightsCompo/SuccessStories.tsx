import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { STORIES } from "./Data";
import { SectionHead, ease } from "./Common";

export default function SuccessStories() {
  // ✅ FIX: typed ref for useScroll container
  const track = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: track });
  const progress = useSpring(scrollXProgress, { stiffness: 120, damping: 24 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHead
        eyebrow="Solar Success Stories"
        title="Real projects, real results"
      />

      <div
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {STORIES.map((s, i) => (
          <motion.article
            key={s.title}
            // ✅ FIX: use `initial` + `animate` so cards are always visible
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="group relative h-[420px] w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl bg-green-900 sm:w-[46%] lg:w-[36%]"
          >
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06281f] via-[#06281f]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="rounded-full bg-[#b8f35a] px-3 py-1 text-xs font-bold text-[#06281f]">
                {s.type}
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-snug">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {s.result}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Scroll progress */}
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-green-100">
        <motion.div
          style={{ scaleX: progress }}
          className="h-full origin-left rounded-full bg-green-700"
        />
      </div>
    </section>
  );
}