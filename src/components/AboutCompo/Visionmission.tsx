
// import { motion, type Variants } from "framer-motion";
// import { Sprout, ArrowRight, Leaf, Users, TrendingUp, Sparkles } from "lucide-react";

// export default function Visionmission() {
//   const stats = [
//     { icon: Users, value: "10K+", label: "Farmers Empowered" },
//     { icon: Leaf, value: "500+", label: "Acres Optimized" },
//     { icon: TrendingUp, value: "35%", label: "Avg. Yield Increase" },
//   ];

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white py-24 md:py-32">
//       {/* Decorative background elements */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-green-200/30 blur-3xl" />
//         <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-200/30 blur-3xl" />
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgb(21 128 61 / 0.12) 1px, transparent 0)",
//             backgroundSize: "32px 32px",
//             maskImage:
//               "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
//             WebkitMaskImage:
//               "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
//         <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
//           {/* About Us */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.div
//               variants={itemVariants}
//               className="mb-6 flex items-center gap-3"
//             >
//               <span className="h-[2px] w-12 bg-gradient-to-r from-green-700 to-green-400" />
//               <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
//                 About Us
//               </span>
//             </motion.div>

//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
//             >
//               Growing a smarter
//               <span className="mt-2 block bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
//                 future for agriculture.
//               </span>
//             </motion.h2>

//             <motion.p
//               variants={itemVariants}
//               className="mt-8 max-w-lg text-lg leading-8 text-gray-600"
//             >
//               We are a team of innovators, problem-solvers, and partners
//               dedicated to helping farmers thrive in a new era of agriculture.
//             </motion.p>

//             {/* CTA Button */}
//             <motion.div variants={itemVariants} className="mt-10">
//               <motion.a
//                 href="#learn-more"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-green-700 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-700/25 transition-shadow hover:shadow-xl hover:shadow-green-700/30"
//               >
//                 <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
//                 <span className="relative">Learn More About Us</span>
//                 <ArrowRight
//                   size={20}
//                   className="relative transition-transform duration-300 group-hover:translate-x-1.5"
//                 />
//               </motion.a>
//             </motion.div>

//             {/* Stats Row */}
//             <motion.div
//               variants={itemVariants}
//               className="mt-14 grid grid-cols-3 gap-6 border-t border-gray-200 pt-10"
//             >
//               {stats.map((stat) => {
//                 const Icon = stat.icon;
//                 return (
//                   <motion.div
//                     key={stat.label}
//                     whileHover={{ y: -4 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="group cursor-default"
//                   >
//                     <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-700/10 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
//                       <Icon size={20} />
//                     </div>
//                     <div className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//                       {stat.value}
//                     </div>
//                     <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-gray-500">
//                       {stat.label}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </motion.div>

//           {/* Our Mission Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="relative"
//           >
//             {/* Floating accent badge */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -left-4 -top-6 z-20 rounded-2xl bg-white/90 px-5 py-3 shadow-xl shadow-green-900/10 ring-1 ring-green-100 backdrop-blur sm:-left-6"
//             >
//               <div className="flex items-center gap-2">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
//                 </span>
//                 <span className="text-xs font-semibold text-gray-700">
//                   Growing Since 2020
//                 </span>
//               </div>
//             </motion.div>

//             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f3f8ef] via-[#eaf3e2] to-[#d9ebcc] p-8 shadow-2xl shadow-green-900/10 ring-1 ring-green-100 md:p-12">
//               {/* Decorative circles */}
//               <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-green-300/50" />
//               <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-green-300/50" />
//               <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-green-300/30" />
//               <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-green-400/20 blur-2xl" />

//               <div className="relative z-10">
//                 <div className="mb-8 flex items-center gap-4">
//                   <motion.div
//                     whileHover={{ rotate: 12, scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-700 to-emerald-600 text-white shadow-lg shadow-green-700/30"
//                   >
//                     <Sprout size={26} />
//                   </motion.div>

//                   <div className="flex items-center">
//                     <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
//                       Our
//                     </span>
//                     <span className="ml-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
//                       Mission
//                     </span>
//                   </div>
//                 </div>

//                 <h3 className="text-3xl font-semibold leading-snug tracking-tight text-gray-900 md:text-4xl">
//                   Technology that empowers{" "}
//                   <span className="relative inline-block italic text-green-800">
//                     farmers.
//                     <svg
//                       className="absolute -bottom-1 left-0 w-full text-green-500/60"
//                       viewBox="0 0 120 8"
//                       fill="none"
//                       preserveAspectRatio="none"
//                     >
//                       <path
//                         d="M2 6C30 2 60 2 118 5"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </span>
//                 </h3>

//                 <p className="mt-6 text-lg leading-8 text-gray-700">
//                   Our mission is simple: to create smart, easy-to-use
//                   technology that makes farming more profitable and sustainable.
//                 </p>

//                 <p className="mt-4 text-lg leading-8 text-gray-700">
//                   We believe that by empowering farmers, we can build a
//                   better, more resilient food future for everyone.
//                 </p>

//                 <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-300/60 bg-white/50 px-4 py-3 backdrop-blur-sm">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700/10">
//                     <Leaf size={16} className="text-green-700" />
//                   </div>
//                   <p className="font-medium text-green-800">
//                     Innovation rooted in agriculture
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Sparkle accent */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute -right-3 -top-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-green-100 sm:flex"
//             >
//               <Sparkles size={18} className="text-green-600" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Sprout,
  Target,
  TrendingUp,
  Tractor,
  UserRound,
  Users,
} from "lucide-react";

/**
 * Hosted photos (Unsplash + Pexels, both free to use).
 * To use your own, replace any URL below with your own image URL or a
 * local path such as "/images/farmer.jpg".
 */
const IMAGES = {
  // Farmer in a green field
  farmer:
    "https://images.unsplash.com/photo-1627475320102-d73fcb4eb427?auto=format&fit=crop&w=1400&q=80",
  // Solar panels on green land
  solar:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  // Colleagues working on laptops and plans outdoors
  team: "https://images.pexels.com/photos/8062306/pexels-photo-8062306.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

/**
 * Optional: add this once in index.html (or your global CSS) for the serif look:
 * <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;1,6..72,600&display=swap" rel="stylesheet" />
 */
const SERIF = "'Newsreader', 'Source Serif 4', Georgia, 'Times New Roman', serif";

const stats = [
  { icon: UserRound, value: "10K+", label: "Farmers Empowered" },
  { icon: Tractor, value: "500+", label: "Acres Optimized" },
  { icon: TrendingUp, value: "35%", label: "Avg. Yield Increase" },
];

const pillars = [
  {
    icon: Users,
    eyebrow: "Who we are",
    title: ["A team of innovators", "with a practical mindset."],
    body: "Engineers, technologists and domain experts working together to solve real-world challenges in agriculture, energy and sustainability.",
  },
  {
    icon: Target,
    eyebrow: "Our purpose",
    title: ["Technology that", "empowers farmers."],
    body: "Our mission is to make farming more profitable and sustainable through smart, easy-to-use solutions.",
    extra: "We believe that by empowering farmers, we can build a better, more resilient food future for everyone.",
  },
  {
    icon: Sprout,
    eyebrow: "Our vision",
    title: ["A partner for measurable,", "lasting sustainability."],
    body: "To be the partner of choice for organisations and communities pursuing a greener, more prosperous future.",
  },
];

export default function Visionmission() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#fcfaf3] py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      {/* Decorative leaves (right) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-4 top-6 hidden h-64 w-64 md:block lg:right-4"
        viewBox="0 0 260 260"
        fill="none"
      >
        <path d="M120 220C130 160 160 100 235 20C230 100 190 170 120 220Z" fill="#cfe0b8" opacity="0.85" />
        <path d="M120 220C100 160 60 130 10 120C30 170 70 200 120 220Z" fill="#dbe8c8" opacity="0.8" />
        <path d="M130 200C170 170 215 150 255 135C230 175 185 195 130 200Z" fill="#c4d9a8" opacity="0.8" />
        <path d="M120 220C140 150 175 90 235 20" stroke="#fcfaf3" strokeWidth="1.5" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        {/* Header */}
        <motion.div variants={item} className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-green-800 sm:w-20" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-green-900">
              About Terra
            </span>
            <span className="h-px w-12 bg-green-800 sm:w-20" />
          </div>

          <h2
            id="about-heading"
            style={{ fontFamily: SERIF }}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#12301f] sm:text-5xl lg:text-[3.4rem]"
          >
            Engineering progress.
            <span className="block italic text-green-800">Growing a better tomorrow.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We are a team of innovators, problem-solvers, and partners dedicated to
            helping farmers thrive through practical technology and sustainable
            solutions.
          </p>
        </motion.div>

        {/* Image strip */}
        <motion.div
          variants={item}
          className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-[1.45fr_1fr_1fr] md:items-end md:gap-3"
        >
          {/* Farmer */}
          <figure
            className="relative h-64 overflow-hidden rounded-[28px] md:h-[19rem] md:rounded-bl-[28px]"
            style={{ clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 100%)" }}
          >
            <img
              src={IMAGES.farmer}
              alt="Farmer reviewing crop data on a tablet in a green field"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute left-5 top-8 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm backdrop-blur">
              <Leaf size={16} className="text-green-700" />
              People • Purpose • Progress
            </figcaption>
          </figure>

          {/* Solar + sensor */}
          <figure
            className="relative h-56 overflow-hidden rounded-[24px] md:h-[14.5rem]"
            style={{ clipPath: "polygon(0 3%, 100% 0, 100% 100%, 0 100%)" }}
          >
            <img
              src={IMAGES.solar}
              alt="Solar panels with a weather and soil sensor station"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
              </span>
              Growing Since 2020
            </figcaption>
          </figure>

          {/* Team */}
          <figure
            className="relative h-56 overflow-hidden rounded-[24px] md:h-[16rem]"
            style={{ clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)" }}
          >
            <img
              src={IMAGES.team}
              alt="Three Terra team members working together on a laptop"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.eyebrow}
                className={`flex gap-5 md:px-8 ${
                  i === 0 ? "md:pl-2" : "md:border-l md:border-green-800/50"
                } ${i === pillars.length - 1 ? "md:pr-0" : ""}`}
              >
                <Icon
                  size={44}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-green-800"
                  aria-hidden
                />
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-green-900">
                    {p.eyebrow}
                  </p>
                  <h3
                    style={{ fontFamily: SERIF }}
                    className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-[#12301f]"
                  >
                    {p.title[0]}
                    <br className="hidden lg:block" /> {p.title[1]}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-6 text-gray-600">
                    {p.body}
                  </p>
                  {p.extra && (
                    <p className="mt-2 max-w-sm text-[15px] leading-6 text-gray-600">
                      {p.extra}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-1 gap-6 rounded-3xl bg-[#e9f0dc] px-6 py-6 sm:grid-cols-3 sm:gap-0 sm:px-4 md:py-7"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`flex items-center justify-center gap-4 ${
                  i > 0 ? "sm:border-l sm:border-green-800/40" : ""
                }`}
              >
                <Icon size={46} strokeWidth={1.3} className="text-green-800" aria-hidden />
                <div>
                  <div
                    style={{ fontFamily: SERIF }}
                    className="text-4xl font-semibold leading-none tracking-tight text-[#12301f] md:text-5xl"
                  >
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.22em] text-green-900">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

       
      </motion.div>
    </section>
  );
}