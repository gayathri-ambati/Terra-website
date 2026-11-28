
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ChevronRight,
//   Facebook,
//   Instagram,
//   Leaf,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
//   Users,
//   Youtube,
// } from "lucide-react";
// import logo from "@/assets/logo.avif";

// const NAV = [
//   { to: "/about", label: "About" },
//   { to: "/solutions", label: "Solutions" },
//   { to: "/insights", label: "Insights" },
//   { to: "/impact", label: "Impact" },
//   { to: "/projects", label: "Projects" },
//   { to: "/agriculture", label: "Transform" },
// ];

// const SOCIALS = [
//   { label: "LinkedIn", href: "#", icon: Linkedin },
//   { label: "YouTube", href: "#", icon: Youtube },
//   { label: "X", href: "#", icon: Twitter },
//   { label: "Instagram", href: "#", icon: Instagram },
//   { label: "Facebook", href: "#", icon: Facebook },
// ];

// export function Footer() {
//   return (
//     <footer className="relative isolate overflow-hidden bg-[#F8FAEF] text-[#10271E]">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-10 top-4 text-[#8DBD4A]/20"
//       >
//         <Leaf size={130} strokeWidth={1.2} className="-rotate-45" />
//       </div>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-8 -top-8 text-[#8DBD4A]/20"
//       >
//         <Leaf size={160} strokeWidth={1.2} className="rotate-[135deg]" />
//       </div>

//       <svg
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[230px] w-full"
//         viewBox="0 0 1440 260"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#E7F0D0"
//           d="M0 96C126 76 202 114 334 104c126-10 176-53 304-42 121 11 184 58 309 54 151-5 232-62 493-47v191H0Z"
//         />
//         <path
//           fill="#D7E9B5"
//           d="M0 139c124-23 204-16 328 0 145 19 223 54 356 35 141-20 184-72 317-54 157 22 266 71 439 24v118H0Z"
//         />
//         <path
//           fill="#8CC85A"
//           d="M0 169c113-31 185-30 297-5 117 26 205 66 347 36 138-29 209-68 341-43 166 32 270 72 455 29v76H0Z"
//         />
//         <g fill="#3D873C" opacity=".78">
//           <path d="M72 176h8v37h-8zM67 175l9-27 9 27zM58 179l18-34 18 34z" />
//           <path d="M154 186h7v30h-7zM150 186l8-22 8 22zM142 190l16-29 16 29z" />
//           <path d="M1297 177h8v38h-8zM1292 177l9-29 9 29zM1283 181l18-36 18 36z" />
//           <path d="M1382 170h9v45h-9zM1376 171l10-31 10 31zM1367 175l19-39 19 39z" />
//         </g>
//         <path
//           fill="#062A20"
//           d="M0 187c117-24 189-26 311-8 128 19 202 40 328 19 147-25 210-40 337-20 173 28 282 13 464-9v91H0Z"
//         />
//       </svg>

//       <div className="shell relative z-10 pb-6 pt-14 sm:pt-16">
//         <div className="grid gap-x-0 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.82fr_1.23fr_1.22fr] lg:gap-y-0">
//           <div className="lg:pr-10">
//             <Link to="/" className="inline-flex rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8C2F]">
//               <img
//                 src={logo}
//                 alt="Terra Ecopreneurs"
//                 className="h-24 w-auto object-contain sm:h-28"
//               />
//             </Link>
//             <p className="mt-4 max-w-sm font-body text-[15px] leading-7 text-[#21372C]/85">
//               Terra Ecopreneurs drives sustainable innovation through
//               engineering, clean energy, and smart solutions for a greener
//               tomorrow.
//             </p>
//             <span className="mt-5 block h-[2px] w-12 bg-[#4A9A2B]" />
//             <Link
//               to="/about"
//               className="group mt-5 inline-flex items-center gap-4 rounded-full border border-[#8EBB62] bg-white/80 py-1.5 pl-5 pr-1.5 font-body text-sm font-semibold text-[#10271E] shadow-sm transition hover:bg-[#EFF6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//             >
//               Read About Us
//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A542B] text-white transition-transform group-hover:translate-x-0.5">
//                 <ArrowRight size={19} />
//               </span>
//             </Link>
//           </div>

//           <nav
//             id="footer-explore"
//             aria-label="Footer navigation"
//             className="lg:border-l lg:border-[#C8D6B5] lg:px-8"
//           >
//             <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
//               <Leaf size={23} className="text-[#63A934]" />
//               Explore
//             </h2>
//             <ul className="mt-5 space-y-2.5">
//               {NAV.map(({ to, label }) => (
//                 <li key={to}>
//                   <Link
//                     to={to}
//                     className="group flex items-center justify-between gap-3 py-1 font-display text-lg text-[#172C22] transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                   >
//                     {label}
//                     <ChevronRight
//                       size={18}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div className="lg:border-l lg:border-[#C8D6B5] lg:px-8">
//             <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
//               <Phone size={23} className="text-[#286B2B]" />
//               Contact
//             </h2>
//             <ul className="mt-5 space-y-3.5 font-body text-sm text-[#20372B]">
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
//                   <MapPin size={19} />
//                 </span>
//                 <span>Coimbatore, Tamil Nadu, India</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
//                   <Mail size={19} />
//                 </span>
//                 <a
//                   href="mailto:hello@terraeco.in"
//                   className="transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                 >
//                   hello@terraeco.in
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
//                   <Phone size={18} />
//                 </span>
//                 <a
//                   href="tel:+9104220000000"
//                   className="transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                 >
//                   +91 (0) 422 000 0000
//                 </a>
//               </li>
//             </ul>
//             <div className="mt-6 border-t border-[#CBD9B8] pt-4 text-center">
//               <p className="font-display text-xl italic leading-tight text-[#17382A] sm:text-2xl">
//                 Let’s build a
//                 <br />
//                 sustainable future together.
//               </p>
//               <svg
//                 aria-hidden="true"
//                 viewBox="0 0 200 16"
//                 className="mx-auto mt-2 h-3 w-44 text-[#62AD37]"
//               >
//                 <path
//                   d="M4 13C59 1 124 1 196 8"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           <div className="lg:border-l lg:border-[#C8D6B5] lg:pl-8">
//             <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
//               <Users size={23} className="text-[#1E552C]" />
//               Follow
//             </h2>
//             <ul className="mt-5 flex flex-wrap gap-2.5">
//               {SOCIALS.map(({ label, href, icon: Icon }) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4F0CB] text-[#10271E] transition duration-200 hover:-translate-y-0.5 hover:bg-[#CFE5A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                   >
//                     <Icon size={20} strokeWidth={2} />
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-7 rounded-[1.35rem] border border-[#CADDB4] bg-white/45 p-4 shadow-[0_12px_30px_rgba(27,67,50,0.06)] backdrop-blur-sm sm:p-5">
//               <div className="flex items-start gap-3">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F1D2] text-[#438E2E]">
//                   <Leaf size={25} />
//                 </span>
//                 <div>
//                   <h3 className="font-heading text-base font-bold text-[#10271E]">
//                     Stay Updated
//                   </h3>
//                   <p className="mt-1 text-sm leading-5 text-[#3D5145]">
//                     Get the latest insights on sustainability and innovation.
//                   </p>
//                 </div>
//               </div>
//               <form
//                 action="mailto:hello@terraeco.in?subject=Terra%20Ecopreneurs%20updates"
//                 method="post"
//                 encType="text/plain"
//                 className="mt-4 flex items-center gap-2 rounded-full border border-[#D5E4C0] bg-white p-1"
//               >
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   aria-label="Email address for updates"
//                   placeholder="Enter your email"
//                   className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#10271E] outline-none placeholder:text-[#657369]"
//                 />
//                 <button
//                   type="submit"
//                   aria-label="Request email updates"
//                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A542B] text-white transition hover:bg-[#16713C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                 >
//                   <ArrowRight size={21} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="mt-20 flex flex-col gap-4 border-t border-white/40 pt-5 text-xs text-white/85 sm:mt-24 md:flex-row md:items-center md:justify-between">
//           <span>
//             © {new Date().getFullYear()} Terra Ecopreneurs. All rights reserved.
//           </span>
//           <div className="flex items-center gap-3">
//             <Link to="/contact" className="transition-colors hover:text-[#B5F27E]">
//               Contact
//             </Link>
//             <span aria-hidden="true" className="h-4 w-px bg-white/45" />
//             <a href="#footer-explore" className="transition-colors hover:text-[#B5F27E]">
//               Sitemap
//             </a>
//           </div>
//           <p className="flex items-center gap-2 font-display text-sm italic sm:text-base">
//             <Leaf size={20} className="text-[#8FD14F]" />
//             Engineering a Greener Tomorrow
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ChevronRight,
//   Facebook,
//   Instagram,
//   Leaf,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Users,
//   Youtube,
// } from "lucide-react";
// import logo from "@/assets/logo.avif";

// const NAV = [
//   { to: "/about", label: "About" },
//   { to: "/solutions", label: "Solutions" },
//   { to: "/insights", label: "Insights" },
//   { to: "/impact", label: "Impact" },
//   { to: "/projects", label: "Projects" },
//   { to: "/agriculture", label: "Transform" },
// ];

// const SOCIALS = [
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/company/terraecopreneurs/",
//     icon: Linkedin,
//   },
//   {
//     label: "YouTube",
//     href: "https://www.youtube.com/@TerraEcopreneurs",
//     icon: Youtube,
//   },
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/terraecopreneurs/",
//     icon: Instagram,
//   },
//   {
//     label: "Facebook",
//     href: "https://www.facebook.com/TerraEcopreneurs",
//     icon: Facebook,
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="relative isolate overflow-hidden bg-[#F8FAEF] text-[#10271E]">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-10 top-4 text-[#8DBD4A]/20"
//       >
//         <Leaf size={130} strokeWidth={1.2} className="-rotate-45" />
//       </div>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-8 -top-8 text-[#8DBD4A]/20"
//       >
//         <Leaf size={160} strokeWidth={1.2} className="rotate-[135deg]" />
//       </div>

//       <svg
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[230px] w-full"
//         viewBox="0 0 1440 260"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#E7F0D0"
//           d="M0 96C126 76 202 114 334 104c126-10 176-53 304-42 121 11 184 58 309 54 151-5 232-62 493-47v191H0Z"
//         />
//         <path
//           fill="#D7E9B5"
//           d="M0 139c124-23 204-16 328 0 145 19 223 54 356 35 141-20 184-72 317-54 157 22 266 71 439 24v118H0Z"
//         />
//         <path
//           fill="#8CC85A"
//           d="M0 169c113-31 185-30 297-5 117 26 205 66 347 36 138-29 209-68 341-43 166 32 270 72 455 29v76H0Z"
//         />
//         <g fill="#3D873C" opacity=".78">
//           <path d="M72 176h8v37h-8zM67 175l9-27 9 27zM58 179l18-34 18 34z" />
//           <path d="M154 186h7v30h-7zM150 186l8-22 8 22zM142 190l16-29 16 29z" />
//           <path d="M1297 177h8v38h-8zM1292 177l9-29 9 29zM1283 181l18-36 18 36z" />
//           <path d="M1382 170h9v45h-9zM1376 171l10-31 10 31zM1367 175l19-39 19 39z" />
//         </g>
//         <path
//           fill="#062A20"
//           d="M0 187c117-24 189-26 311-8 128 19 202 40 328 19 147-25 210-40 337-20 173 28 282 13 464-9v91H0Z"
//         />
//       </svg>

//       <div className="shell relative z-10 pb-6 pt-14 sm:pt-16">
//         <div className="grid gap-x-0 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.82fr_1.23fr_1.22fr] lg:gap-y-0">
//           <div className="lg:pr-10">
//             <Link
//               to="/"
//               className="inline-flex rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8C2F]"
//             >
//               <img
//                 src={logo}
//                 alt="Terra Ecopreneurs"
//                 className="h-24 w-auto object-contain sm:h-28"
//               />
//             </Link>
//             <p className="mt-4 max-w-sm font-body text-[15px] leading-7 text-[#21372C]/85">
//               Terra Ecopreneurs drives sustainable innovation through
//               engineering, clean energy, and smart solutions for a greener
//               tomorrow.
//             </p>
//             <span className="mt-5 block h-[2px] w-12 bg-[#4A9A2B]" />
//             <Link
//               to="/about"
//               className="group mt-5 inline-flex items-center gap-4 rounded-full border border-[#8EBB62] bg-white/80 py-1.5 pl-5 pr-1.5 font-body text-sm font-semibold text-[#10271E] shadow-sm transition hover:bg-[#EFF6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//             >
//               Read About Us
//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A542B] text-white transition-transform group-hover:translate-x-0.5">
//                 <ArrowRight size={19} />
//               </span>
//             </Link>
//           </div>

//           <nav
//             id="footer-explore"
//             aria-label="Footer navigation"
//             className="lg:border-l lg:border-[#C8D6B5] lg:px-8"
//           >
//             <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
//               <Leaf size={23} className="text-[#63A934]" />
//               Explore
//             </h2>
//             <ul className="mt-5 space-y-2.5">
//               {NAV.map(({ to, label }) => (
//                 <li key={to}>
//                   <Link
//                     to={to}
//                     className="group flex items-center justify-between gap-3 py-1 font-display text-lg text-[#172C22] transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                   >
//                     {label}
//                     <ChevronRight
//                       size={18}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div className="lg:border-l lg:border-[#C8D6B5] lg:px-8">
//             <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
//               <Phone size={23} className="text-[#286B2B]" />
//               Contact
//             </h2>
//             <ul className="mt-5 space-y-3.5 font-body text-sm text-[#20372B]">
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
//                   <MapPin size={19} />
//                 </span>
//                 <span>Coimbatore, Tamil Nadu, India</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
//                   <Mail size={19} />
//                 </span>
//                 <a
//                   href="mailto:ashwin@terraeco.in"
//                   className="transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                 >
//                   ashwin@terraeco.in
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
//                   <Phone size={18} />
//                 </span>
//                 <a
//                   href="tel:+919110692701"
//                   className="transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                 >
//                   +91 91106 92701
//                 </a>
//               </li>
//             </ul>
//             <div className="mt-6 border-t border-[#CBD9B8] pt-4 text-center">
//               <p className="font-display text-xl italic leading-tight text-[#17382A] sm:text-2xl">
//                 Let's build a
//                 <br />
//                 sustainable future together.
//               </p>
//               <svg
//                 aria-hidden="true"
//                 viewBox="0 0 200 16"
//                 className="mx-auto mt-2 h-3 w-44 text-[#62AD37]"
//               >
//                 <path
//                   d="M4 13C59 1 124 1 196 8"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           <div className="lg:border-l lg:border-[#C8D6B5] lg:pl-8">
//             <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
//               <Users size={23} className="text-[#1E552C]" />
//               Follow
//             </h2>
//             <ul className="mt-5 flex flex-wrap gap-2.5">
//               {SOCIALS.map(({ label, href, icon: Icon }) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4F0CB] text-[#10271E] transition duration-200 hover:-translate-y-0.5 hover:bg-[#CFE5A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                   >
//                     <Icon size={20} strokeWidth={2} />
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-7 rounded-[1.35rem] border border-[#CADDB4] bg-white/45 p-4 shadow-[0_12px_30px_rgba(27,67,50,0.06)] backdrop-blur-sm sm:p-5">
//               <div className="flex items-start gap-3">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F1D2] text-[#438E2E]">
//                   <Leaf size={25} />
//                 </span>
//                 <div>
//                   <h3 className="font-heading text-base font-bold text-[#10271E]">
//                     Stay Updated
//                   </h3>
//                   <p className="mt-1 text-sm leading-5 text-[#3D5145]">
//                     Get the latest insights on sustainability and innovation.
//                   </p>
//                 </div>
//               </div>
//               <form
//                 action="mailto:ashwin@terraeco.in?subject=Terra%20Ecopreneurs%20updates"
//                 method="post"
//                 encType="text/plain"
//                 className="mt-4 flex items-center gap-2 rounded-full border border-[#D5E4C0] bg-white p-1"
//               >
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   aria-label="Email address for updates"
//                   placeholder="Enter your email"
//                   className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#10271E] outline-none placeholder:text-[#657369]"
//                 />
//                 <button
//                   type="submit"
//                   aria-label="Request email updates"
//                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A542B] text-white transition hover:bg-[#16713C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
//                 >
//                   <ArrowRight size={21} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="mt-20 flex flex-col gap-4 border-t border-white/40 pt-5 text-xs text-white/85 sm:mt-24 md:flex-row md:items-center md:justify-between">
//           <span>
//             © {new Date().getFullYear()} Terra Ecopreneurs. All rights reserved.
//           </span>
//           <div className="flex items-center gap-3">
//             <Link
//               to="/contact"
//               className="transition-colors hover:text-[#B5F27E]"
//             >
//               Contact
//             </Link>
//             <span aria-hidden="true" className="h-4 w-px bg-white/45" />
//             <a
//               href="#footer-explore"
//               className="transition-colors hover:text-[#B5F27E]"
//             >
//               Sitemap
//             </a>
//           </div>
//           <p className="flex items-center gap-2 font-display text-sm italic sm:text-base">
//             <Leaf size={20} className="text-[#8FD14F]" />
//             Engineering a Greener Tomorrow
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo.avif";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/insights", label: "Insights" },
  { to: "/impact", label: "Impact" },
  { to: "/projects", label: "Projects" },
  { to: "/agriculture", label: "Transform" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/terraecopreneurs/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TerraEcopreneurs",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/terraecopreneurs/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TerraEcopreneurs",
    icon: Facebook,
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#F8FAEF] text-[#10271E]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-4 text-[#8DBD4A]/20"
      >
        <Leaf size={130} strokeWidth={1.2} className="-rotate-45" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 text-[#8DBD4A]/20"
      >
        <Leaf size={160} strokeWidth={1.2} className="rotate-[135deg]" />
      </div>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[230px] w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          fill="#E7F0D0"
          d="M0 96C126 76 202 114 334 104c126-10 176-53 304-42 121 11 184 58 309 54 151-5 232-62 493-47v191H0Z"
        />
        <path
          fill="#D7E9B5"
          d="M0 139c124-23 204-16 328 0 145 19 223 54 356 35 141-20 184-72 317-54 157 22 266 71 439 24v118H0Z"
        />
        <path
          fill="#8CC85A"
          d="M0 169c113-31 185-30 297-5 117 26 205 66 347 36 138-29 209-68 341-43 166 32 270 72 455 29v76H0Z"
        />
        <g fill="#3D873C" opacity=".78">
          <path d="M72 176h8v37h-8zM67 175l9-27 9 27zM58 179l18-34 18 34z" />
          <path d="M154 186h7v30h-7zM150 186l8-22 8 22zM142 190l16-29 16 29z" />
          <path d="M1297 177h8v38h-8zM1292 177l9-29 9 29zM1283 181l18-36 18 36z" />
          <path d="M1382 170h9v45h-9zM1376 171l10-31 10 31zM1367 175l19-39 19 39z" />
        </g>
        <path
          fill="#062A20"
          d="M0 187c117-24 189-26 311-8 128 19 202 40 328 19 147-25 210-40 337-20 173 28 282 13 464-9v91H0Z"
        />
      </svg>

      <div className="shell relative z-10 pb-6 pt-14 sm:pt-16">
        <div className="grid gap-x-0 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.82fr_1.23fr_1.22fr] lg:gap-y-0">
          <div className="lg:pr-10">
            <Link
              to="/"
              className="inline-flex rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8C2F]"
            >
              <img
                src={logo}
                alt="Terra Ecopreneurs"
                className="h-24 w-auto object-contain sm:h-28"
              />
            </Link>
            <p className="mt-4 max-w-sm font-body text-[15px] leading-7 text-[#21372C]/85">
              Terra Ecopreneurs drives sustainable innovation through
              engineering, clean energy, and smart solutions for a greener
              tomorrow.
            </p>
            <span className="mt-5 block h-[2px] w-12 bg-[#4A9A2B]" />
            <Link
              to="/about"
              className="group mt-5 inline-flex items-center gap-4 rounded-full border border-[#8EBB62] bg-white/80 py-1.5 pl-5 pr-1.5 font-body text-sm font-semibold text-[#10271E] shadow-sm transition hover:bg-[#EFF6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
            >
              Read About Us
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A542B] text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={19} />
              </span>
            </Link>
          </div>

          <nav
            id="footer-explore"
            aria-label="Footer navigation"
            className="lg:border-l lg:border-[#C8D6B5] lg:px-8"
          >
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
              <Leaf size={23} className="text-[#63A934]" />
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center justify-between gap-3 py-1 font-display text-lg text-[#172C22] transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
                  >
                    {label}
                    <ChevronRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:border-l lg:border-[#C8D6B5] lg:px-8">
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
              <Phone size={23} className="text-[#286B2B]" />
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5 font-body text-sm text-[#20372B]">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
                  <MapPin size={19} />
                </span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
                  <Mail size={19} />
                </span>
                <a
                  href="mailto:ashwin@terraeco.in"
                  className="transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
                >
                  ashwin@terraeco.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F0CB] text-[#1E552C]">
                  <Phone size={18} />
                </span>
                <a
                  href="tel:+919110692701"
                  className="transition-colors hover:text-[#438E2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
                >
                  +91 91106 92701
                </a>
              </li>
            </ul>
            <div className="mt-6 border-t border-[#CBD9B8] pt-4 text-center">
              <p className="font-display text-xl italic leading-tight text-[#17382A] sm:text-2xl">
                Let's build a
                <br />
                sustainable future together.
              </p>
              <svg
                aria-hidden="true"
                viewBox="0 0 200 16"
                className="mx-auto mt-2 h-3 w-44 text-[#62AD37]"
              >
                <path
                  d="M4 13C59 1 124 1 196 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="lg:border-l lg:border-[#C8D6B5] lg:pl-8">
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#10271E]">
              <Users size={23} className="text-[#1E552C]" />
              Follow
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4F0CB] text-[#10271E] transition duration-200 hover:-translate-y-0.5 hover:bg-[#CFE5A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
                  >
                    <Icon size={20} strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-[1.35rem] border border-[#CADDB4] bg-white/45 p-4 shadow-[0_12px_30px_rgba(27,67,50,0.06)] backdrop-blur-sm sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F1D2] text-[#438E2E]">
                  <Leaf size={25} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#10271E]">
                    Stay Updated
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#3D5145]">
                    Get the latest insights on sustainability and innovation.
                  </p>
                </div>
              </div>
              <form
                action="mailto:ashwin@terraeco.in?subject=Terra%20Ecopreneurs%20updates"
                method="post"
                encType="text/plain"
                className="mt-4 flex items-center gap-2 rounded-full border border-[#D5E4C0] bg-white p-1"
              >
                <input
                  type="email"
                  name="email"
                  required
                  aria-label="Email address for updates"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#10271E] outline-none placeholder:text-[#657369]"
                />
                <button
                  type="submit"
                  aria-label="Request email updates"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A542B] text-white transition hover:bg-[#16713C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8C2F]"
                >
                  <ArrowRight size={21} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/40 pt-5 text-xs text-white/85 sm:mt-24 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Terra Ecopreneurs. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="transition-colors hover:text-[#B5F27E]"
            >
              Contact
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-white/45" />
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#B5F27E]"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-white/45" />
            <Link
              to="/terms-of-service"
              className="transition-colors hover:text-[#B5F27E]"
            >
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-white/45" />
            <a
              href="#footer-explore"
              className="transition-colors hover:text-[#B5F27E]"
            >
              Sitemap
            </a>
          </div>
          <p className="flex items-center gap-2 font-display text-sm italic sm:text-base">
            <Leaf size={20} className="text-[#8FD14F]" />
            Engineering a Greener Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}