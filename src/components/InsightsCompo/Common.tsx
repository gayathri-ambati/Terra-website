// Common.tsx
import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { animate, motion, useInView } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof motion;
}

/** Fade + slide up when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  as = "div",
}: RevealProps) {
  const Tag = motion[as] as ElementType;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </Tag>
  );
}

interface CountUpProps {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/** Counts from 0 to `to` when it enters the viewport. */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v: number) => {
        if (ref.current) ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals, suffix, prefix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Smoothly tweens to a new value whenever `value` changes (used by the calculator). */
export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(0);

  useEffect(() => {
    const controls = animate(prev.current, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v: number) => {
        if (ref.current)
          ref.current.textContent =
            prefix + Math.round(v).toLocaleString("en-IN") + suffix;
      },
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  light?: boolean;
  children?: ReactNode;
}

export function SectionHead({
  eyebrow,
  title,
  light = false,
  children,
}: SectionHeadProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <Reveal>
        {eyebrow && (
          <p
            className={`mb-3 flex items-center gap-3 text-sm font-semibold ${
              light ? "text-[#b8f35a]" : "text-green-700"
            }`}
          >
            {eyebrow}
            <span
              className={`h-px w-16 ${
                light ? "bg-[#b8f35a]/50" : "bg-green-700/40"
              }`}
            />
          </p>
        )}
        <h2
          className={`max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl ${
            light ? "text-white" : "text-[#0b2e24]"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {children}
    </div>
  );
}

interface ArrowBtnProps {
  className?: string;
}

export const ArrowBtn = ({ className = "" }: ArrowBtnProps) => (
  <span
    className={`grid h-9 w-9 place-items-center rounded-full bg-green-100 text-green-800 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-green-700 group-hover:text-white ${className}`}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
);