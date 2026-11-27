// TrendingTopics.tsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { TOPICS } from "./Data";
import { SectionHead, ease } from "./Common";

export default function TrendingTopics() {
  const row = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    row.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHead
        eyebrow="Trending Topics"
        title="What the solar world is talking about"
      >
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              onClick={() => scroll(d)}
              aria-label={d < 0 ? "Previous" : "Next"}
              className="grid h-11 w-11 place-items-center rounded-full border border-green-800/20 text-green-800 transition hover:bg-green-800 hover:text-white"
            >
              {d < 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          ))}
        </div>
      </SectionHead>

      <div
        ref={row}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TOPICS.map((t, i) => (
          <motion.a
            key={t.title}
            href="#"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="group relative h-72 w-72 shrink-0 snap-start overflow-hidden rounded-3xl bg-green-900"
          >
            <img
              src={t.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06281f] via-[#06281f]/40 to-transparent" />
            <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-[#b8f35a] backdrop-blur transition group-hover:rotate-12 group-hover:bg-[#b8f35a] group-hover:text-[#06281f]">
              <TrendingUp size={18} />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-xl font-bold leading-snug">{t.title}</h3>
              <p className="mt-1 text-sm text-white/70">{t.count}</p>
              <span className="mt-3 block h-0.5 w-8 bg-[#b8f35a] transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}