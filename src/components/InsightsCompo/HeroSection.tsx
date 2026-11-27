// // HeroSection.tsx
// import { useEffect, useRef, useState, type ReactNode } from "react";
// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
// import { ArrowDown, Play, X } from "lucide-react";
// import { ease } from "./Common";

// /* ------------------------------------------------------------------ */
// /* Edit these two values. Nothing else in the file needs to change.    */
// /* ------------------------------------------------------------------ */
// const HERO_BG =
//   "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2400&q=80";

// const HERO_VIDEO = {
//   youtubeId: "dQw4w9WgXcQ", // replace with your YouTube video ID
//   title: "See how solar powers a home",
//   duration: "02:30",
// };
// /* ------------------------------------------------------------------ */

// const line1 = ["Insights", "for", "a"];
// const line2 = ["Greener", "Tomorrow"];

// interface WordProps {
//   children: ReactNode;
//   i: number;
//   accent?: boolean;
// }

// const Word = ({ children, i, accent }: WordProps) => (
//   <span className="inline-block overflow-hidden pb-2 align-bottom">
//     <motion.span
//       className={`inline-block ${accent ? "text-[#b8f35a]" : ""}`}
//       initial={{ y: "110%" }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease }}
//     >
//       {children}&nbsp;
//     </motion.span>
//   </span>
// );

// /* Video card shown on the right side of the hero */
// function VideoCard({ onPlay }: { onPlay: () => void }) {
//   return (
//     <motion.button
//       type="button"
//       onClick={onPlay}
//       aria-label={`Play video: ${HERO_VIDEO.title}`}
//       initial={{ opacity: 0, y: 30, scale: 0.96 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.9, delay: 0.9, ease }}
//       whileHover={{ y: -4 }}
//       className="group relative block w-full overflow-hidden rounded-3xl border border-white/20 bg-black/30 p-2 text-left shadow-2xl shadow-black/40 backdrop-blur-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b8f35a]/70"
//     >
//       <div className="relative aspect-video overflow-hidden rounded-2xl">
//         <img
//           src={`https://img.youtube.com/vi/${HERO_VIDEO.youtubeId}/hqdefault.jpg`}
//           alt=""
//           className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//         {/* Play button with pulse ring */}
//         <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center">
//           <span className="absolute inset-0 animate-ping rounded-full bg-[#b8f35a]/40" />
//           <span className="relative grid h-20 w-20 place-items-center rounded-full bg-[#b8f35a] text-[#06281f] shadow-lg transition group-hover:scale-110">
//             <Play size={28} fill="currentColor" className="ml-1" />
//           </span>
//         </span>

//         <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium">
//           {HERO_VIDEO.duration}
//         </span>
//       </div>
//       <div className="px-3 pb-2 pt-4">
//         <p className="text-sm text-white/70">Watch</p>
//         <p className="text-lg font-semibold leading-snug">{HERO_VIDEO.title}</p>
//       </div>
//     </motion.button>
//   );
// }

// /* Fullscreen modal that plays the video */
// function VideoModal({ onClose }: { onClose: () => void }) {
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       role="dialog"
//       aria-modal="true"
//       aria-label={HERO_VIDEO.title}
//       className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.92, y: 20 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.92, y: 20 }}
//         transition={{ duration: 0.35, ease }}
//         className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <iframe
//           className="h-full w-full"
//           src={`https://www.youtube.com/embed/${HERO_VIDEO.youtubeId}?autoplay=1&rel=0`}
//           title={HERO_VIDEO.title}
//           allow="autoplay; encrypted-media; picture-in-picture"
//           allowFullScreen
//         />
//       </motion.div>
//       <button
//         type="button"
//         onClick={onClose}
//         aria-label="Close video"
//         className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//       >
//         <X size={20} />
//       </button>
//     </motion.div>
//   );
// }

// export default function HeroSection() {
//   const ref = useRef<HTMLElement>(null);
//   const [open, setOpen] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-[680px] overflow-hidden bg-[#06281f] pb-28 pt-36 text-white md:min-h-[800px]"
//     >
//       {/* Background: slow zoom + parallax */}
//       <motion.div style={{ y: bgY }} className="absolute inset-0">
//         <motion.img
//           src={HERO_BG}
//           alt=""
//           className="h-full w-full object-cover object-center"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1.02 }}
//           transition={{ duration: 14, ease: "easeOut" }}
//         />
//       </motion.div>

//       {/* Overlays: brand tint + left-to-right readability + soft vignette */}
//       <div className="absolute inset-0 bg-[#06281f]/40 mix-blend-multiply" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#06281f] via-[#06281f]/75 to-[#06281f]/20" />
//       <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06281f] to-transparent" />
//       <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-[#b8f35a]/20 blur-[120px]" />

//       {/* Floating light particles */}
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.span
//           key={i}
//           className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#b8f35a]/70 blur-[1px]"
//           style={{ left: `${8 + i * 9}%`, top: `${30 + ((i * 17) % 50)}%` }}
//           animate={{ y: [0, -40, 0], opacity: [0.2, 0.9, 0.2] }}
//           transition={{
//             duration: 5 + (i % 4),
//             repeat: Infinity,
//             delay: i * 0.4,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <motion.div
//         style={{ y: textY, opacity: fade }}
//         className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]"
//       >
//         {/* Left: text */}
//         <div>
//           <motion.span
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease }}
//             className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
//             </span>
//             Our Insights
//           </motion.span>

//           <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
//             <span className="block">
//               {line1.map((w, i) => (
//                 <Word key={w} i={i}>
//                   {w}
//                 </Word>
//               ))}
//             </span>
//             <span className="block">
//               {line2.map((w, i) => (
//                 <Word key={w} i={i + 3} accent={i === 0}>
//                   {w}
//                 </Word>
//               ))}
//             </span>
//           </h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1, ease }}
//             className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
//           >
//             Explore the latest trends, expert insights and practical tips on
//             solar energy, renewable solutions and clean technology.
//           </motion.p>

//           <motion.a
//             href="#latest"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.4 }}
//             className="group mt-10 inline-flex items-center gap-3 text-sm"
//           >
//             <span className="grid h-11 w-11 place-items-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-[#06281f]">
//               <motion.span
//                 animate={{ y: [0, 4, 0] }}
//                 transition={{ duration: 1.6, repeat: Infinity }}
//               >
//                 <ArrowDown size={18} />
//               </motion.span>
//             </span>
//             Scroll to explore
//           </motion.a>
//         </div>

//         {/* Right: video */}
//         <div className="w-full max-w-xl justify-self-center lg:justify-self-end">
//           <VideoCard onPlay={() => setOpen(true)} />
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {open && <VideoModal onClose={() => setOpen(false)} />}
//       </AnimatePresence>
//     </section>
//   );
// }


// HeroSection.tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play, X } from "lucide-react";
import { ease } from "./Common";

/* ------------------------------------------------------------------ */
/* Local video from assets, poster served from /public                */
/* ------------------------------------------------------------------ */
import heroVideo from "../../assets/inshightsvideo.mp4";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */
const HERO_BG =
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2400&q=80";

const HERO_VIDEO = {
  src: heroVideo,
  poster: "/images/village-solar.png", // from /public — NOT imported
  title: "See how solar powers a home",
  duration: "02:30",
};
/* ------------------------------------------------------------------ */

const line1 = ["Insights", "for", "a"];
const line2 = ["Greener", "Tomorrow"];

interface WordProps {
  children: ReactNode;
  i: number;
  accent?: boolean;
}

const Word = ({ children, i, accent }: WordProps) => (
  <span className="inline-block overflow-hidden pb-2 align-bottom">
    <motion.span
      className={`inline-block ${accent ? "text-[#b8f35a]" : ""}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease }}
    >
      {children}&nbsp;
    </motion.span>
  </span>
);

/* Video card shown on the right side of the hero */
function VideoCard({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onPlay}
      aria-label={`Play video: ${HERO_VIDEO.title}`}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.9, ease }}
      whileHover={{ y: -4 }}
      className="group relative block w-full overflow-hidden rounded-3xl border border-white/20 bg-black/30 p-2 text-left shadow-2xl shadow-black/40 backdrop-blur-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b8f35a]/70"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        {/* ✅ Thumbnail: poster image */}
        <img
          src={HERO_VIDEO.poster}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Play button with pulse ring */}
        <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#b8f35a]/40" />
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-[#b8f35a] text-[#06281f] shadow-lg transition group-hover:scale-110">
            <Play size={28} fill="currentColor" className="ml-1" />
          </span>
        </span>

        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium">
          {HERO_VIDEO.duration}
        </span>
      </div>
      <div className="px-3 pb-2 pt-4">
        <p className="text-sm text-white/70">Watch</p>
        <p className="text-lg font-semibold leading-snug">{HERO_VIDEO.title}</p>
      </div>
    </motion.button>
  );
}

/* Fullscreen modal that plays the local video */
function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={HERO_VIDEO.title}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease }}
        className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Local video player — poster is the image, src is the video */}
        <video
          className="h-full w-full object-contain"
          src={HERO_VIDEO.src}
          poster={HERO_VIDEO.poster}
          controls
          autoPlay
          playsInline
        />
      </motion.div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X size={20} />
      </button>
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[680px] overflow-hidden bg-[#06281f] pb-28 pt-36 text-white md:min-h-[800px]"
    >
      {/* Background: slow zoom + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 14, ease: "easeOut" }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#06281f]/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06281f] via-[#06281f]/75 to-[#06281f]/20" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06281f] to-transparent" />
      <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-[#b8f35a]/20 blur-[120px]" />

      {/* Floating light particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#b8f35a]/70 blur-[1px]"
          style={{ left: `${8 + i * 9}%`, top: `${30 + ((i * 17) % 50)}%` }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* Left: text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Our Insights
          </motion.span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            <span className="block">
              {line1.map((w, i) => (
                <Word key={w} i={i}>
                  {w}
                </Word>
              ))}
            </span>
            <span className="block">
              {line2.map((w, i) => (
                <Word key={w} i={i + 3} accent={i === 0}>
                  {w}
                </Word>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Explore the latest trends, expert insights and practical tips on
            solar energy, renewable solutions and clean technology.
          </motion.p>

          <motion.a
            href="#latest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="group mt-10 inline-flex items-center gap-3 text-sm"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-[#06281f]">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <ArrowDown size={18} />
              </motion.span>
            </span>
            Scroll to explore
          </motion.a>
        </div>

        {/* Right: video */}
        <div className="w-full max-w-xl justify-self-center lg:justify-self-end">
          <VideoCard onPlay={() => setOpen(true)} />
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <VideoModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}