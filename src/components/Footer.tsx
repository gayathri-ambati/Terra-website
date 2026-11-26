// import { Link } from 'react-router-dom';
// import { ArrowUpRight, Leaf, Mail, MapPin, Phone } from 'lucide-react';
// import { MaskedLines } from '@/components/Reveal';

// const NAV = [
//   { to: '/about', label: 'About' },
//   { to: '/impact', label: 'Impact' },
//   { to: '/solutions', label: 'Solutions' },
//   { to: '/projects', label: 'Projects' },
//   { to: '/agriculture', label: 'Agriculture' },
//   { to: '/insights', label: 'Insights' },
// ];

// const SOCIALS = ['LinkedIn', 'Twitter / X', 'YouTube'];

// export function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-forest-900 text-ivory">
//       <div className="shell pb-10 pt-24 md:pt-32">
//         <MaskedLines
//           lines={['More than a website.', 'A story of impact.']}
//           className="headline-xl max-w-5xl text-ivory"
//         />
//         <div className="mt-6 flex flex-wrap items-center gap-4">
//           <Link to="/contact" className="btn-ghost-light">
//             Start a conversation <ArrowUpRight size={16} />
//           </Link>
//           <span className="font-body text-sm text-ivory/50">or write to us directly — we reply within two working days.</span>
//         </div>

//         <div className="mt-20 grid gap-12 border-t border-ivory/10 pt-14 md:grid-cols-2 lg:grid-cols-4">
//           <div>
//             <div className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-400 text-forest-900">
//                 <Leaf size={20} strokeWidth={2.2} />
//               </span>
//               <span className="font-heading text-lg font-bold">TERRA</span>
//             </div>
//             <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ivory/60">
//               Terra Ecopreneurs engineers energy, automation and agricultural solutions that deliver verified outcomes for
//               industry, communities and the environment.
//             </p>
//           </div>

//           <nav aria-label="Footer">
//             <h3 className="label-caps text-sage-400">Explore</h3>
//             <ul className="mt-5 space-y-3">
//               {NAV.map((n) => (
//                 <li key={n.to}>
//                   <Link to={n.to} className="font-body text-sm text-ivory/70 transition-colors hover:text-sage-300">
//                     {n.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div>
//             <h3 className="label-caps text-sage-400">Contact</h3>
//             <ul className="mt-5 space-y-4 font-body text-sm text-ivory/70">
//               <li className="flex gap-3">
//                 <MapPin size={16} className="mt-0.5 shrink-0 text-sage-400" />
//                 <span>Coimbatore, Tamil Nadu, India</span>
//               </li>
//               <li className="flex gap-3">
//                 <Mail size={16} className="mt-0.5 shrink-0 text-sage-400" />
//                 <a href="mailto:hello@terraeco.in" className="transition-colors hover:text-sage-300">
//                   hello@terraeco.in
//                 </a>
//               </li>
//               <li className="flex gap-3">
//                 <Phone size={16} className="mt-0.5 shrink-0 text-sage-400" />
//                 <span>+91 (0) 422 000 0000</span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="label-caps text-sage-400">Follow</h3>
//             <ul className="mt-5 space-y-3">
//               {SOCIALS.map((s) => (
//                 <li key={s}>
//                   <a
//                     href="#"
//                     className="group inline-flex items-center gap-2 font-body text-sm text-ivory/70 transition-colors hover:text-sage-300"
//                   >
//                     {s}
//                     <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
//           <span>© {new Date().getFullYear()} Terra Ecopreneurs. All rights reserved.</span>
//           <span>Nature inspires. Engineering transforms. Impact defines us.</span>
//         </div>
//       </div>
//       <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-forest-600/40 blur-3xl" />
//     </footer>
//   );
// }




import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
} from "lucide-react";
import { MaskedLines } from "@/components/Reveal";
import logo from "@/assets/logo.avif"; 

const NAV = [
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/agriculture", label: "Agriculture" },
  { to: "/insights", label: "Insights" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: Twitter,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black">
      <div className="shell pb-10 pt-24 md:pt-32">

        {/* Footer Heading */}
        {/* <MaskedLines
          lines={["More than a website.", "A story of impact."]}
          className="headline-xl max-w-5xl text-black"
        />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="btn-ghost-light border border-black text-black hover:bg-black hover:text-white"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>

          <span className="font-body text-sm text-black/50">
            or write to us directly — we reply within two working days.
          </span>
        </div> */}

        {/* Footer Content */}
        <div className="mt-20 grid gap-12 border-t border-black/10 pt-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
             <img
              src={logo}
              alt="Terra Ecopreneurs"
              className="h-20 w-26 object-contain"
            />
            </Link>

            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-black/60">
              Terra Ecopreneurs engineers energy, automation and agricultural
              solutions that deliver verified outcomes for industry,
              communities and the environment.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer Navigation">
            <h3 className="label-caps text-green-700">Explore</h3>

            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="font-body text-sm text-black/70 transition-colors hover:text-green-700"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="label-caps text-green-700">Contact</h3>

            <ul className="mt-5 space-y-4 font-body text-sm text-black/70">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-green-700"
                />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>

              <li className="flex gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-green-700"
                />
                <a
                  href="mailto:hello@terraeco.in"
                  className="transition-colors hover:text-green-700"
                >
                  hello@terraeco.in
                </a>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-green-700"
                />
                <span>+91 (0) 422 000 0000</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="label-caps text-green-700">Follow</h3>

            <ul className="mt-5 space-y-4">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 font-body text-sm text-black/70 transition-colors duration-300 hover:text-green-700"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    <span>{label}</span>

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-3 border-t border-black/10 pt-8 text-xs text-black/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Terra Ecopreneurs. All rights reserved.
          </span>

          <span>
            Nature inspires. Engineering transforms. Impact defines us.
          </span>
        </div>
      </div>
    </footer>
  );
}
