
// import { company } from '@/lib/content';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';

// export function IdentitySection() {
//   return (
//     <section className="bg-ivory py-24 md:py-36 overflow-hidden">
//       <div className="shell grid gap-16 lg:grid-cols-12 items-stretch">

//         {/* LEFT CONTENT - Vertically centered to entire image height */}
//       <div className="lg:col-span-5 flex flex-col items-center text-center lg:relative lg:top-32">

//           <MaskedLines
//             lines={['Our Identity']}
//             className="headline-md text-forest-800"
//           />

//           <Reveal delay={150}>
//             <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">
//               {company.intro}
//             </p>
//           </Reveal>

        
//         </div>

//         {/* RIGHT SIDE IMAGE COLLAGE - Unchanged */}
//         <div className="lg:col-span-7">
//           <Reveal delay={200}>
//             <div className="grid grid-cols-4 gap-3 md:gap-4 h-[420px] md:h-[720px]">

//               {/* Column 1 */}
//               <div className="flex flex-col justify-center h-full">
//                 <div className="h-[50%] overflow-hidden">
//                   <img
//                     src="https://images.openai.com/static-rsc-4/Supu0f9ZB_jbP94IW5Sa2M46qgcQJ7yXN2N9zmSujCiNzeeGjb2Fmy6W8wwKDM3khrwynwXC8Xo9Ixk9lNXOkClL7MLqUhD5tvB2YLZdCj_mZ0ee9FzCqJoSfYglw7Sb_knMJ-WPqJpEKSL71sLzI5K8vXw7O2JAQPoio0iZtXc?purpose=inline"
//                     alt="Sustainable agriculture"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* Column 2 */}
//               <div className="flex flex-col justify-end gap-3 md:gap-4 h-full">
//                 <div className="h-[40%] overflow-hidden">
//                   <img
//                     src="https://i.pinimg.com/736x/ee/c0/47/eec047973b0a5f342e53175fdcc52cf9.jpg"
//                     alt="Engineering innovation"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>

//                 <div className="h-[40%] overflow-hidden">
//                   <img
//                     src="https://i.pinimg.com/736x/83/06/10/8306102ef06f53f70c296ad9daced565.jpg"
//                     alt="Team and field work"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* Column 3 */}
//               <div className="flex flex-col justify-start gap-3 md:gap-4 h-full">
//                 <div className="h-[40%] overflow-hidden">
//                   <img
//                     src="https://i.pinimg.com/736x/3e/b0/88/3eb08836cecddd8457dfe8e8bbfdc45c.jpg"
//                     alt="Renewable energy"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>

//                 <div className="h-[40%] overflow-hidden">
//                   <img
//                     src="https://i.pinimg.com/236x/0e/fc/95/0efc95043d0ecd4930084d062419c4da.jpg"
//                     alt="Sustainable farming"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* Column 4 */}
//               <div className="flex flex-col justify-center h-full">
//                 <div className="h-[50%] overflow-hidden">
//                   <img
//                     src="https://i.pinimg.com/736x/80/4d/c5/804dc5313bef120770570eab9d4281ac.jpg"
//                     alt="Industrial automation"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//             </div>
//           </Reveal>
//         </div>

//       </div>
//     </section>
//   );
// }





import { company } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';

/* ---------- small inline icons (no extra dependency) ---------- */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const Icons = {
  leaf: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" {...stroke}>
      <path d="M6 26C6 14 13 6 26 5c0 12-7 20-18 20" />
      <path d="M6 26c4-7 9-12 15-15" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" {...stroke}>
      <path d="M12 22v-2.5C9.5 18 8 15.7 8 13a8 8 0 0116 0c0 2.7-1.5 5-4 6.5V22z" />
      <path d="M13 26h6M14 29h4M16 2v2M4 8l1.5 1M28 8l-1.5 1" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" {...stroke}>
      <path d="M2 13l5-4 6 1 5-2 6 3 6-1v9l-4 2" />
      <path d="M7 9v13l5 3 3-2 3 2 4-3 3-3" />
      <path d="M13 10l-2 5a3 3 0 004 3l3-2" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 32 32" className="h-8 w-8" {...stroke}>
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" />
    </svg>
  ),
};

const Leaf = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} aria-hidden>
    <path d="M52 6C26 8 8 24 8 52c28 0 44-18 44-46z" fill="#7ab648" />
    <path d="M52 6C34 22 20 36 8 52" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".6" />
  </svg>
);

const values = [
  { icon: Icons.leaf, title: 'Sustainability', sub: 'Greener tomorrow' },
  { icon: Icons.bulb, title: 'Innovation', sub: 'Smarter solutions' },
  { icon: Icons.handshake, title: 'Collaboration', sub: 'Together stronger' },
  { icon: Icons.gear, title: 'Impact', sub: 'Lasting change' },
];

/* ---------- collage tiles (skewed cards, positioned in % of the box) ---------- */
const tiles = [
  {
    src: 'https://images.openai.com/static-rsc-4/Supu0f9ZB_jbP94IW5Sa2M46qgcQJ7yXN2N9zmSujCiNzeeGjb2Fmy6W8wwKDM3khrwynwXC8Xo9Ixk9lNXOkClL7MLqUhD5tvB2YLZdCj_mZ0ee9FzCqJoSfYglw7Sb_knMJ-WPqJpEKSL71sLzI5K8vXw7O2JAQPoio0iZtXc?purpose=inline',
    alt: 'Sustainable agriculture',
    pos: 'left-0 top-[18%] w-[32%] h-[57%]',
  },
  {
    src: 'https://i.pinimg.com/736x/ee/c0/47/eec047973b0a5f342e53175fdcc52cf9.jpg',
    alt: 'Engineering innovation',
    pos: 'left-[28.5%] top-[1%] w-[37%] h-[49%]',
  },
  {
    src: 'https://i.pinimg.com/736x/83/06/10/8306102ef06f53f70c296ad9daced565.jpg',
    alt: 'Team and field work',
    pos: 'left-[20.5%] top-[49%] w-[36%] h-[49%]',
  },
  {
    src: 'https://i.pinimg.com/736x/3e/b0/88/3eb08836cecddd8457dfe8e8bbfdc45c.jpg',
    alt: 'Renewable energy',
    pos: 'left-[62.5%] top-[1%] w-[35%] h-[35%]',
  },
  {
    src: 'https://i.pinimg.com/236x/0e/fc/95/0efc95043d0ecd4930084d062419c4da.jpg',
    alt: 'Sustainable farming',
    pos: 'left-[50.5%] top-[67%] w-[29%] h-[32%] z-10',
  },
  {
    src: 'https://i.pinimg.com/736x/80/4d/c5/804dc5313bef120770570eab9d4281ac.jpg',
    alt: 'Industrial automation',
    pos: 'left-[55%] top-[36%] w-[45%] h-[52%]',
  },
];

export function IdentitySection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      {/* soft green wave at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest-800/10 to-transparent"
        style={{ borderTopLeftRadius: '100% 100%', borderTopRightRadius: '100% 100%' }}
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-12">
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-5">
          {/* eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-forest-800" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.3em] text-forest-800">
              Our Identity
            </span>
          </div>

          <MaskedLines
            lines={['Our Identity']}
            className="headline-md mt-3 !text-left text-forest-800"
          />

          <Reveal delay={100}>
            <h3 className="mt-6 font-body text-3xl leading-tight text-forest-800 md:text-4xl">
              <span className="font-semibold">Building</span> a Sustainable
              <br />
              <em className="text-[#5f8f1f]">and Prosperous Tomorrow</em>
            </h3>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/80 md:text-lg">
              {company.intro}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="#approach"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest-800 px-7 py-3.5 font-body text-sm font-medium text-white transition hover:bg-forest-700"
            >
              Our Approach
              <svg viewBox="0 0 24 8" className="h-2 w-6" {...stroke} stroke="#fff">
                <path d="M0 4h22M18 1l4 3-4 3" />
              </svg>
            </a>
          </Reveal>

          {/* values row */}
          <Reveal delay={250}>
            <ul className="mt-10 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {values.map((v, i) => (
                <li
                  key={v.title}
                  className={`flex flex-col items-center px-2 text-center text-forest-800 ${
                    i > 0 ? 'sm:border-l sm:border-forest-800/15' : ''
                  }`}
                >
                  {v.icon}
                  <span className="mt-2 font-body text-sm font-medium">{v.title}</span>
                  <span className="font-body text-[11px] text-charcoal/60">{v.sub}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ================= RIGHT COLLAGE ================= */}
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="relative h-[420px] w-full sm:h-[560px] lg:h-[640px]">
              {/* decorative outline frames */}
              <div
                aria-hidden
                className="absolute right-[-1%] top-[10%] h-[30%] w-[34%] rounded-2xl border border-[#7ab648]/60"
                style={{ transform: 'skewY(-8deg)' }}
              />
              <div
                aria-hidden
                className="absolute left-[15%] top-[62%] h-[32%] w-[30%] rounded-2xl border border-[#7ab648]/60"
                style={{ transform: 'skewY(-8deg)' }}
              />

              {/* leaves */}
              <Leaf className="absolute left-[24%] top-[-4%] z-20 h-14 w-14 md:h-20 md:w-20" />
              <Leaf className="absolute bottom-[4%] right-[-2%] z-20 h-12 w-12 md:h-16 md:w-16" />

              {/* skewed photo tiles */}
              {tiles.map((t) => (
                <div
                  key={t.alt}
                  className={`absolute overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_-18px_rgba(10,50,30,0.35)] ring-4 ring-white ${t.pos}`}
                  style={{ transform: 'skewY(-8deg)' }}
                >
                  {/* counter-skew so the photo itself stays upright */}
                  <div
                    className="h-full w-full scale-[1.25]"
                    style={{ transform: 'skewY(8deg) scale(1.25)' }}
                  >
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}