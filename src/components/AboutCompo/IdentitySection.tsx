// import { company } from '@/lib/content';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';

// export function IdentitySection() {
//   return (
//     <section className="bg-ivory py-24 md:py-36">
//       <div className="shell grid gap-16 lg:grid-cols-12">
//         <div className="lg:col-span-7">
//           <MaskedLines lines={['Our identity']} className="headline-md text-forest-800" />
//           <Reveal delay={150}>
//             <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">
//               {company.intro}
//             </p>
//           </Reveal>
//         </div>
//         <div className="grid content-start gap-6 lg:col-span-5">
//           <ClipReveal className="rounded-sm bg-forest-800 p-10 text-ivory">
//             <h3 className="label-caps text-sage-400">Vision</h3>
//             <p className="mt-4 font-display text-2xl leading-snug">{company.vision}</p>
//           </ClipReveal>
//           <ClipReveal delay={150} className="rounded-sm bg-linen p-10 text-forest-800">
//             <h3 className="label-caps text-forest-600">Mission</h3>
//             <p className="mt-4 font-body text-base leading-relaxed">{company.mission}</p>
//           </ClipReveal>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { company } from '@/lib/content';
// import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';

// export function IdentitySection() {
//   return (
//     <section className="bg-ivory py-24 md:py-36 overflow-hidden">
//       <div className="shell grid gap-16 lg:grid-cols-12 items-center">

//         {/* LEFT CONTENT - Now vertically centered to match image height */}
//         <div className="lg:col-span-5 flex flex-col justify-center h-full text-center items-center">
//           <MaskedLines
//             lines={['Our identity']}
//             className="headline-md text-forest-800"
//           />

//           <Reveal delay={150}>
//             <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">
//               {company.intro}
//             </p>
//           </Reveal>

//           <div className="mt-12 grid gap-6 w-full">
//             <ClipReveal className="rounded-sm bg-forest-800 p-8 md:p-10 text-ivory">
//               <h3 className="label-caps text-sage-400">Vision</h3>
//               <p className="mt-4 font-display text-2xl leading-snug">
//                 {company.vision}
//               </p>
//             </ClipReveal>

//             <ClipReveal
//               delay={150}
//               className="rounded-sm bg-linen p-8 md:p-10 text-forest-800"
//             >
//               <h3 className="label-caps text-forest-600">Mission</h3>
//               <p className="mt-4 font-body text-base leading-relaxed">
//                 {company.mission}
//               </p>
//             </ClipReveal>
//           </div>
//         </div>

//         {/* RIGHT SYMMETRIC IMAGE COLLAGE */}
//         <div className="lg:col-span-7">
//           <Reveal delay={200}>
//             <div className="grid grid-cols-4 gap-3 md:gap-4 h-[420px] md:h-[720px]">

//               {/* Column 1 – outer, single image, centered */}
//               <div className="flex flex-col justify-center h-full">
//                 <div className="h-[50%] overflow-hidden">
//                   <img
//                     src="https://images.openai.com/static-rsc-4/Supu0f9ZB_jbP94IW5Sa2M46qgcQJ7yXN2N9zmSujCiNzeeGjb2Fmy6W8wwKDM3khrwynwXC8Xo9Ixk9lNXOkClL7MLqUhD5tvB2YLZdCj_mZ0ee9FzCqJoSfYglw7Sb_knMJ-WPqJpEKSL71sLzI5K8vXw7O2JAQPoio0iZtXc?purpose=inline"
//                     alt="Sustainable agriculture"
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* Column 2 – inner, two images, pushed to the bottom */}
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

//               {/* Column 3 – inner, two images, pushed to the top (mirror of column 2) */}
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

//               {/* Column 4 – outer, single image, centered (same as column 1) */}
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
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';

export function IdentitySection() {
  return (
    <section className="bg-ivory py-24 md:py-36 overflow-hidden">
      <div className="shell grid gap-16 lg:grid-cols-12 items-stretch">

        {/* LEFT CONTENT - Vertically centered to entire image height */}
      <div className="lg:col-span-5 flex flex-col items-center text-center lg:relative lg:top-32">

          <MaskedLines
            lines={['Our Identity']}
            className="headline-md text-forest-800"
          />

          <Reveal delay={150}>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">
              {company.intro}
            </p>
          </Reveal>

        
        </div>

        {/* RIGHT SIDE IMAGE COLLAGE - Unchanged */}
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="grid grid-cols-4 gap-3 md:gap-4 h-[420px] md:h-[720px]">

              {/* Column 1 */}
              <div className="flex flex-col justify-center h-full">
                <div className="h-[50%] overflow-hidden">
                  <img
                    src="https://images.openai.com/static-rsc-4/Supu0f9ZB_jbP94IW5Sa2M46qgcQJ7yXN2N9zmSujCiNzeeGjb2Fmy6W8wwKDM3khrwynwXC8Xo9Ixk9lNXOkClL7MLqUhD5tvB2YLZdCj_mZ0ee9FzCqJoSfYglw7Sb_knMJ-WPqJpEKSL71sLzI5K8vXw7O2JAQPoio0iZtXc?purpose=inline"
                    alt="Sustainable agriculture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col justify-end gap-3 md:gap-4 h-full">
                <div className="h-[40%] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/ee/c0/47/eec047973b0a5f342e53175fdcc52cf9.jpg"
                    alt="Engineering innovation"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="h-[40%] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/83/06/10/8306102ef06f53f70c296ad9daced565.jpg"
                    alt="Team and field work"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col justify-start gap-3 md:gap-4 h-full">
                <div className="h-[40%] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/3e/b0/88/3eb08836cecddd8457dfe8e8bbfdc45c.jpg"
                    alt="Renewable energy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="h-[40%] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/236x/0e/fc/95/0efc95043d0ecd4930084d062419c4da.jpg"
                    alt="Sustainable farming"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col justify-center h-full">
                <div className="h-[50%] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/80/4d/c5/804dc5313bef120770570eab9d4281ac.jpg"
                    alt="Industrial automation"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
