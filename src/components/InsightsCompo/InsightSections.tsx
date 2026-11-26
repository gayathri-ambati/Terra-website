// const posts = [
//   {
//     tag: "Energy",
//     title: "Where a factory loses power, and how an audit finds it",
//     blurb: "A plain-language look at load profiles, idle consumption and the quick fixes that pay back first.",
//   },
//   {
//     tag: "Agriculture",
//     title: "Cleaner processing for coffee and spice farms",
//     blurb: "How eco-friendly equipment cuts water and fuel use at the farm gate.",
//   },
//   {
//     tag: "Buildings",
//     title: "What an IBMS actually changes day to day",
//     blurb: "From scattered controls to one dashboard: what facility teams see and save.",
//   },
// ];

// /* Insight section 1: featured project */
// export function InsightFeaturedSection() {
//   return (
//     <section
//       aria-labelledby="insight-featured-heading"
//       className="bg-[#16281F] px-6 py-20 text-white md:px-12 lg:py-28"
//     >
//       <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
//         {/* Visual placeholder: swap for the TRANSFORM project image */}
//         <div
//           role="img"
//           aria-label="Illustration of coffee plantation rows at sunrise"
//           className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-b from-[#E3A92B] via-[#8A6A3A] to-[#2F7D4F]"
//         >
//           <div className="absolute -top-8 right-10 h-24 w-24 rounded-full bg-[#FFF3D1]/80" />
//           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#16281F]/70 [clip-path:polygon(0_40%,100%_0,100%_100%,0_100%)]" />
//           <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#16281F] [clip-path:polygon(0_60%,100%_20%,100%_100%,0_100%)]" />
//         </div>

//         <div>
//           <p className="font-medium text-[#E3A92B]">Featured project</p>
//           <h2
//             id="insight-featured-heading"
//             className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
//           >
//             The TRANSFORM Project: empowering Karnataka’s coffee and spice producers
//           </h2>
//           <blockquote className="mt-6 border-l-4 border-[#E3A92B] pl-5 text-xl leading-relaxed text-white/90">
//             Terra has revolutionized hundreds of coffee farms. We provide
//             eco-friendly products and technologies for a better tomorrow.
//           </blockquote>
//           <a
//             href="/agriculture"
//             className="mt-8 inline-block rounded-full bg-[#E3A92B] px-7 py-3 font-semibold text-[#16281F] transition-colors hover:bg-[#f0b93f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//           >
//             See the project
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Insight section 2: latest articles */
// export function InsightArticlesSection() {
//   return (
//     <section
//       aria-labelledby="insight-articles-heading"
//       className="bg-[#F2F5F1] px-6 py-20 text-[#16281F] md:px-12 lg:py-28"
//     >
//       <div className="mx-auto max-w-6xl">
//         <div className="flex flex-wrap items-end justify-between gap-4">
//           <h2
//             id="insight-articles-heading"
//             className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
//           >
//             Ideas for efficient, sustainable operations
//           </h2>
//           <a
//             href="/blog"
//             className="font-semibold underline underline-offset-4 hover:text-[#2F7D4F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D4F]"
//           >
//             Read all articles
//           </a>
//         </div>

//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {posts.map((p) => (
//             <article
//               key={p.title}
//               className="flex flex-col rounded-2xl border border-[#16281F]/15 bg-white p-7"
//             >
//               <span className="w-fit rounded-full bg-[#2F7D4F]/10 px-3 py-1 text-sm font-medium text-[#1F5A38]">
//                 {p.tag}
//               </span>
//               <h3 className="mt-5 text-xl font-semibold leading-snug">
//                 <a
//                   href="/blog"
//                   className="hover:text-[#2F7D4F] focus:outline-none focus-visible:underline"
//                 >
//                   {p.title}
//                 </a>
//               </h3>
//               <p className="mt-3 leading-relaxed text-[#3D5246]">{p.blurb}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import type { ReactNode } from "react";

/* ----------------------------- Data ----------------------------- */

type Post = {
  tag: string;
  title: string;
  blurb: string;
  href: string;
};

const FEATURED_IMAGE =
  "https://i.pinimg.com/736x/ee/b6/c9/eeb6c9f13cc8c5d4938ce3a331e7acaa.jpg";
const ARTICLES_IMAGE =
  "https://i.pinimg.com/1200x/a7/b7/70/a7b7709e61eff175146b0c2b0b237c5e.jpg";

const posts: Post[] = [
  {
    tag: "Energy",
    title: "Where a factory loses power, and how an audit finds it",
    blurb:
      "A plain-language look at load profiles, idle consumption and the quick fixes that pay back first.",
    href: "/blog",
  },
  {
    tag: "Agriculture",
    title: "Cleaner processing for coffee and spice farms",
    blurb:
      "How eco-friendly equipment cuts water and fuel use at the farm gate.",
    href: "/blog",
  },
  {
    tag: "Buildings",
    title: "What an IBMS actually changes day to day",
    blurb:
      "From scattered controls to one dashboard: what facility teams see and save.",
    href: "/blog",
  },
];

/* ------------------------ Shared components ------------------------ */

type RingBadgeProps = { value: string; label: string };

/* Circular badge with progress arc, sits on the seam between image and content */
function RingBadge({ value, label }: RingBadgeProps) {
  const r = 46;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative z-10 mx-auto -mt-20 flex h-44 w-44 items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="absolute inset-0 rounded-full bg-white/70 shadow-[0_10px_40px_rgba(22,40,31,0.18)] backdrop-blur" />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#16281F"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#2F7D4F"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.25}
        />
      </svg>
      <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#2F7D4F] text-white shadow-[0_8px_24px_rgba(47,125,79,0.35)]">
        <span className="text-4xl font-bold leading-none">{value}</span>
        <span className="mt-1 px-3 text-center text-xs font-medium leading-tight text-white/85">
          {label}
        </span>
      </div>
    </div>
  );
}

/* Three connector lines from the badge to each item (desktop only) */
const CONNECTOR_PATHS = [
  "0,50 55,16.67 100,16.67",
  "0,50 100,50",
  "0,50 55,83.33 100,83.33",
];
const DOT_POSITIONS = ["16.67%", "50%", "83.33%"];

function Connectors() {
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-36 lg:block"
        aria-hidden="true"
      >
        {CONNECTOR_PATHS.map((points) => (
          <polyline
            key={points}
            points={points}
            fill="none"
            stroke="#2F7D4F"
            strokeOpacity="0.55"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {DOT_POSITIONS.map((top) => (
        <span
          key={top}
          className="absolute hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F7D4F] lg:block"
          style={{ left: "9rem", top }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

type SplitSectionProps = {
  headingId: string;
  imageSrc: string;
  imageAlt: string;
  badge: RingBadgeProps;
  minHeight: string;
  children: ReactNode;
};

/* 50/50 card: image on the left, ring badge on the seam, content on the right */
function SplitSection({
  headingId,
  imageSrc,
  imageAlt,
  badge,
  minHeight,
  children,
}: SplitSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="bg-white px-4 py-10 text-[#16281F] md:px-10 lg:px-16 lg:py-16"
    >
      <div
        className={`relative mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#F2F5F1] lg:grid-cols-2 ${minHeight}`}
      >
        <div className="relative min-h-[280px] overflow-hidden bg-[#16281F]">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <RingBadge value={badge.value} label={badge.label} />

        {children}
      </div>
    </section>
  );
}

/* ------------------------ Section 1: featured ------------------------ */

export function InsightFeaturedSection() {
  return (
    <SplitSection
      headingId="insight-featured-heading"
      imageSrc={FEATURED_IMAGE}
      imageAlt="The TRANSFORM Project"
      badge={{ value: "100s", label: "of coffee farms transformed" }}
      minHeight="lg:min-h-[600px]"
    >
      <div className="flex flex-col justify-center px-6 pb-16 pt-12 md:px-12 lg:py-24 lg:pl-40 lg:pr-16">
        <p className="font-semibold text-[#2F7D4F]">Featured project</p>
        <h2
          id="insight-featured-heading"
          className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          The TRANSFORM Project:{" "}
          <span className="text-[#2F7D4F]">
            empowering Karnataka’s coffee and spice producers
          </span>
        </h2>
        <blockquote className="mt-6 border-l-4 border-[#E3A92B] pl-5 text-lg leading-relaxed text-[#3D5246]">
          Terra has revolutionized hundreds of coffee farms. We provide
          eco-friendly products and technologies for a better tomorrow.
        </blockquote>
        <a
          href="/agriculture"
          className="mt-8 inline-block w-fit rounded-full bg-[#2F7D4F] px-7 py-3 font-semibold text-white shadow-lg shadow-[#2F7D4F]/25 transition-colors hover:bg-[#256a41] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16281F] focus-visible:ring-offset-2"
        >
          See the project
        </a>
      </div>
    </SplitSection>
  );
}

/* ------------------------ Section 2: articles ------------------------ */

export function InsightArticlesSection() {
  return (
    <SplitSection
      headingId="insight-articles-heading"
      imageSrc={ARTICLES_IMAGE}
      imageAlt="Efficient, sustainable operations"
      badge={{ value: String(posts.length), label: "focus areas" }}
      minHeight="lg:min-h-[620px]"
    >
      <div className="px-6 pb-16 pt-12 md:px-12 lg:py-20 lg:pl-0 lg:pr-16">
        <div className="lg:pl-40">
          <h2
            id="insight-articles-heading"
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Ideas for efficient,{" "}
            <span className="text-[#2F7D4F]">sustainable operations</span>
          </h2>
          <a
            href="/blog"
            className="mt-4 inline-block font-semibold text-[#2F7D4F] underline underline-offset-4 hover:text-[#1F5A38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D4F]"
          >
            Read all articles
          </a>
        </div>

        <div className="relative mt-10 grid gap-8 lg:mt-12 lg:h-[460px] lg:grid-rows-3 lg:gap-0 lg:pl-40">
          <Connectors />
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col justify-center border-l-2 border-[#2F7D4F]/30 pl-5 lg:border-0 lg:pl-0"
            >
              <span className="w-fit rounded-full bg-[#2F7D4F]/10 px-3 py-1 text-sm font-semibold text-[#1F5A38]">
                {post.tag}
              </span>
              <h3 className="mt-2 text-xl font-bold leading-snug">
                <a
                  href={post.href}
                  className="hover:text-[#2F7D4F] focus:outline-none focus-visible:underline"
                >
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-[#3D5246]">
                {post.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}