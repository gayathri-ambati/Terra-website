// import { useEffect, useRef, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ArrowUpRight, Leaf, Menu, X } from 'lucide-react';

// const NAV = [
//   { to: '/about', label: 'About' },
//   { to: '/impact', label: 'Impact' },
//   { to: '/solutions', label: 'Solutions' },
//   { to: '/projects', label: 'Projects' },
//   { to: '/agriculture', label: 'TRANSFORM' },
//   { to: '/insights', label: 'Insights' },
// ];

// export function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const panelRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => setOpen(false), [location.pathname]);

//   useEffect(() => {
//     document.documentElement.style.overflow = open ? 'hidden' : '';
//     return () => {
//       document.documentElement.style.overflow = '';
//     };
//   }, [open]);

//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
//     window.addEventListener('keydown', onKey);
//     panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
//     return () => window.removeEventListener('keydown', onKey);
//   }, [open]);

//   return (
//     <>
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
//           scrolled && !open ? 'bg-forest-900/95 text-ivory shadow-lg shadow-forest-900/20 backdrop-blur' : 'text-ivory'
//         }`}
//       >
//         <div className="shell flex items-center justify-between py-5">
//           <Link to="/" className="group flex items-center gap-3" aria-label="Terra Ecopreneurs home">
//             <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-400 text-forest-900 transition-transform duration-500 group-hover:rotate-[20deg]">
//               <Leaf size={20} strokeWidth={2.2} />
//             </span>
//             <span className="font-heading text-base font-bold tracking-wide">TERRA</span>
//           </Link>
//           <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
//             {NAV.map((n) => (
//               <NavLink
//                 key={n.to}
//                 to={n.to}
//                 className={({ isActive }) =>
//                   `relative font-heading text-sm font-medium transition-colors hover:text-sage-300 ${
//                     isActive ? 'text-sage-300' : ''
//                   }`
//                 }
//               >
//                 {n.label}
//               </NavLink>
//             ))}
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 rounded-full border border-ivory/50 px-5 py-2.5 font-heading text-sm font-semibold transition-all hover:border-sage-400 hover:bg-sage-400 hover:text-forest-900"
//             >
//               Let&apos;s Talk
//               <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//           </nav>
//           <button
//             className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/40 lg:hidden"
//             onClick={() => setOpen((v) => !v)}
//             aria-expanded={open}
//             aria-label={open ? 'Close menu' : 'Open menu'}
//           >
//             {open ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </header>

//       <div
//         ref={panelRef}
//         className={`fixed inset-0 z-40 bg-forest-900 text-ivory transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
//           open ? '' : 'pointer-events-none'
//         }`}
//         style={{ clipPath: open ? 'circle(150% at calc(100% - 44px) 44px)' : 'circle(0% at calc(100% - 44px) 44px)' }}
//         aria-hidden={!open}
//       >
//         <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="Mobile">
//           {[...NAV, { to: '/contact', label: "Let's Talk" }].map((n, i) => (
//             <NavLink
//               key={n.to}
//               to={n.to}
//               style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
//               className={`border-b border-ivory/10 py-4 font-display text-4xl transition-all duration-500 ${
//                 open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//               }`}
//             >
//               {n.label}
//             </NavLink>
//           ))}
//           <p className="mt-8 font-body text-sm text-ivory/60">Coimbatore, Tamil Nadu — engineering a sustainable future.</p>
//         </nav>
//       </div>
//     </>
//   );
// }





import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  BarChart3,
  Lightbulb,
  FolderKanban,
  Sprout,
  Newspaper,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.avif";

const NAV = [
  { to: "/about", label: "About", icon: Leaf },
  { to: "/solutions", label: "Solutions", icon: Lightbulb },
  { to: "/insights", label: "Insights", icon: Newspaper },
  { to: "/impact", label: "Impact", icon: BarChart3 },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/agriculture", label: "Transform", icon: Sprout },
];

const GREEN_GRADIENT = "linear-gradient(135deg, #7ED957 0%, #B5F27E 100%)";

// "Let's Talk" goes straight to the enquiry form on the contact page
const CONTACT_FORM_LINK = "/contact#enquiry";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* ───────── Desktop / Tablet pill navbar ───────── */}
      <header className="fixed inset-x-0 top-3 z-50 sm:top-5">
        {/* `shell` = same container as the hero, so the pill edges line up with the headline */}
        <div className="shell">
          <div
            className={`flex items-center rounded-full bg-white py-2 pl-5 pr-2 transition-shadow duration-300 sm:pl-7 ${
              scrolled
                ? "shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
                : "shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex shrink-0 items-center"
              aria-label="Terra home"
            >
              <img
                src={logo}
                alt="Terra Logo"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>

            {/* Divider */}
            <span className="mx-6 hidden h-9 w-px bg-black/15 lg:block" />

            {/* Desktop links */}
            <nav
              className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-9"
              aria-label="Primary Navigation"
            >
              {NAV.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `group relative inline-flex items-center gap-2 py-2 font-heading text-[15px] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-green-700"
                        : "text-[#0B1A14] hover:text-green-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5"
                      />
                      <span>{label}</span>
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-[#7ED957] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Spacer on mobile pushes the burger to the right */}
            <span className="flex-1 lg:hidden" />

            {/* CTA */}
            <Link
              to={CONTACT_FORM_LINK}
              className="group hidden items-center gap-3 rounded-full bg-[#06151F] py-2 pl-6 pr-2 font-heading text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#0B2A3A] lg:inline-flex"
            >
              Let&apos;s Talk
              <span
                className="grid h-9 w-9 place-items-center rounded-full text-[#06151F] transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ backgroundImage: GREEN_GRADIENT }}
              >
                <ArrowRight size={17} strokeWidth={2.4} />
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="mr-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#06151F] text-white transition-colors hover:bg-green-700 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ───────── Mobile navigation ───────── */}
      <div
        ref={panelRef}
        className={`fixed inset-0 z-40 bg-white text-black transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        style={{
          clipPath: open
            ? "circle(150% at calc(100% - 44px) 44px)"
            : "circle(0% at calc(100% - 44px) 44px)",
        }}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col justify-center gap-1 px-8 pb-10 pt-28 sm:px-12"
          aria-label="Mobile Navigation"
        >
          {NAV.map(({ to, label, icon: Icon }, i) => (
            <NavLink
              key={to}
              to={to}
              style={{
                transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
              }}
              className={({ isActive }) =>
                `flex items-center gap-4 border-b border-black/10 py-4 text-2xl font-medium transition-all duration-500 sm:text-3xl ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                } ${isActive ? "text-green-700" : "text-black"}`
              }
            >
              <Icon size={22} strokeWidth={1.8} />
              <span>{label}</span>
              <ArrowUpRight size={18} className="ml-auto text-black/40" />
            </NavLink>
          ))}

          <Link
            to={CONTACT_FORM_LINK}
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
            className={`mt-5 flex items-center justify-between rounded-full bg-[#06151F] py-2 pl-6 pr-2 text-white transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="font-semibold">Let&apos;s Talk</span>
            <span
              className="grid h-11 w-11 place-items-center rounded-full text-[#06151F]"
              style={{ backgroundImage: GREEN_GRADIENT }}
            >
              <ArrowRight size={20} strokeWidth={2.4} />
            </span>
          </Link>

          <p className="mt-8 text-sm text-black/50">
            Coimbatore, Tamil Nadu — Engineering a sustainable future.
          </p>
        </nav>
      </div>
    </>
  );
}