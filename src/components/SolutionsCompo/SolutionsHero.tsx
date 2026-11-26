// // components/SolutionsCompo/SolutionsHero.tsx
// import { MaskedLines } from '@/components/Reveal';
// import { SceneCanvas } from '@/components/SceneCanvas';

// export function SolutionsHero() {
//   return (
//     <section className="grain relative flex min-h-[70vh] items-end overflow-hidden bg-forest-900 text-ivory">
//       <SceneCanvas variant="energy" className="animate-drift" />
//       <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
//       <div className="shell relative z-10 pb-20 pt-40">
//         <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
//           <span className="h-px w-10 bg-sage-400" /> Solutions
//         </p>
//         <MaskedLines
//           lines={['Eight disciplines.', 'One accountable partner.']}
//           className="headline-xl max-w-5xl"
//           startDelay={150}
//         />
//       </div>
//     </section>
//   );
// }


// components/SolutionsCompo/SolutionsHero.tsx
import { MaskedLines } from '@/components/Reveal';

export function SolutionsHero() {
  return (
    <section className="grain relative flex min-h-[65vh] items-end overflow-hidden bg-forest-900 text-ivory">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.openai.com/static-rsc-4/-FEwR74CfcvXGJVDqYNA_NxcYgfHoN98P3Q7R2iyTQtyPI55Nco0pF0-OjgEx2aBpTxdOlt8K40dYyGGkVw2QbOTmCbybbLGznOIORruoG4LvaeQ-ERQUd_xjDv_B4Cu1bf8zabdo_vD3SOnkwJOADZ--zEKKsMYZQkbU8MCt7F8ArJ_m2ijwelHKXRbKQII?purpose=fullsize')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-forest-900/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />

      {/* Content */}
      <div className="shell relative z-10 w-full pb-16 pt-32 md:pb-20 md:pt-40">
        <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
          <span className="h-px w-10 bg-sage-400" />
          Solutions
        </p>

        <MaskedLines
          lines={['Eight disciplines.', 'One accountable partner.']}
          className="headline-xl max-w-5xl"
          startDelay={150}
        />

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
          Integrated engineering, energy and sustainability solutions designed
          to deliver meaningful impact and lasting performance.
        </p>
      </div>
    </section>
  );
}