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
  { to: "/impact", label: "Impact", icon: BarChart3 },
  { to: "/solutions", label: "Solutions", icon: Lightbulb },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/agriculture", label: "Transform", icon: Sprout },
  { to: "/insights", label: "Insights", icon: Newspaper },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
      {/* Desktop / Tablet Navbar */}
      <header className="fixed inset-x-0 top-4 sm:top-6 z-50 px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border-2 border-black bg-white px-5 sm:px-8 py-3">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Terra home"
          >
            <img
              src={logo}
              alt="Terra Logo"
              className="h-12 sm:h-12 w-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            aria-label="Primary Navigation"
          >
            {NAV.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-green-700"
                      : "text-black hover:text-green-700"
                  }`
                }
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-green-700 group"
          >
            Let's Talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-black text-black transition-all hover:bg-black hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        ref={panelRef}
        className={`fixed inset-0 z-40 bg-white text-black lg:hidden transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
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
          className="flex h-full flex-col justify-center gap-1 px-8 sm:px-12"
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
                `flex items-center gap-4 border-b border-black/10 py-4 text-2xl sm:text-3xl font-medium transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                } ${isActive ? "text-green-700" : "text-black"}`
              }
            >
              <Icon size={22} strokeWidth={1.8} />
              <span>{label}</span>
              <ArrowUpRight
                size={18}
                className="ml-auto text-black/40"
              />
            </NavLink>
          ))}

          {/* Mobile Contact */}
          <Link
            to="/contact"
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
            className={`flex items-center justify-between mt-5 rounded-full bg-black px-6 py-4 text-white transition-all duration-500 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <span className="flex items-center gap-3 font-semibold">
              <ArrowUpRight size={20} />
              Let's Talk
            </span>
            <ArrowUpRight size={20} />
          </Link>

          <p className="mt-8 text-sm text-black/50">
            Coimbatore, Tamil Nadu — Engineering a sustainable future.
          </p>
        </nav>
      </div>
    </>
  );
}
