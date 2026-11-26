import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Tailwind-only scroll reveals. No custom CSS classes needed.        */
/*  State (visible / hidden) is driven by an IntersectionObserver and  */
/*  expressed purely through Tailwind utilities.                       */
/*  `motion-reduce:` variants make everything appear instantly for     */
/*  people who prefer reduced motion.                                  */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

/* ---------------------------- Reveal ------------------------------ */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'figure' | 'li' | 'article';
  /** fade = fade + rise, scale = fade + soft zoom, left/right = slide in sideways */
  variant?: 'fade' | 'scale' | 'left' | 'right';
}

const HIDDEN: Record<NonNullable<RevealProps['variant']>, string> = {
  fade: 'translate-y-8',
  scale: 'scale-95',
  left: '-translate-x-10',
  right: 'translate-x-10',
};

const SHOWN: Record<NonNullable<RevealProps['variant']>, string> = {
  fade: 'translate-y-0',
  scale: 'scale-100',
  left: 'translate-x-0',
  right: 'translate-x-0',
};

export function Reveal({ children, className = '', delay = 0, as = 'div', variant = 'fade' }: RevealProps) {
  const [ref, visible] = useInView<HTMLElement>();
  const Tag = as as ElementType;
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref}
      style={style}
      className={[
        'transition-all duration-[900ms] will-change-transform motion-reduce:transition-none',
        EASE,
        visible
          ? `opacity-100 ${SHOWN[variant]}`
          : `opacity-0 ${HIDDEN[variant]} motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100`,
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
}

/* -------------------------- MaskedLines --------------------------- */

interface MaskedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  startDelay?: number;
  step?: number;
}

export function MaskedLines({ lines, className = '', lineClassName = '', startDelay = 0, step = 120 }: MaskedLinesProps) {
  const [ref, visible] = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        // pb/-mb keeps descenders (g, y, p) from being clipped by overflow-hidden
        <span key={i} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
          <span
            style={{ transitionDelay: `${startDelay + i * step}ms` }}
            className={[
              'block transition-transform duration-[1000ms] motion-reduce:transition-none',
              EASE,
              visible ? 'translate-y-0' : 'translate-y-[110%] motion-reduce:translate-y-0',
              lineClassName,
            ].join(' ')}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}

/* --------------------------- ClipReveal --------------------------- */

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** direction the curtain opens from */
  from?: 'bottom' | 'left';
}

export function ClipReveal({ children, className = '', delay = 0, from = 'bottom' }: ClipRevealProps) {
  // The observer watches the OUTER wrapper. Browsers treat a fully clipped
  // element as "not intersecting", so observing the clipped element itself
  // would never fire and the content would stay hidden.
  const [ref, visible] = useInView<HTMLDivElement>(0.1);

  const closed = from === 'bottom' ? '[clip-path:inset(100%_0_0_0)]' : '[clip-path:inset(0_100%_0_0)]';
  const open = '[clip-path:inset(0_0_0_0)]';

  return (
    <div ref={ref} className={className}>
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={[
          'h-full w-full transition-[clip-path] duration-[1300ms] motion-reduce:transition-none',
          EASE,
          visible ? open : `${closed} motion-reduce:[clip-path:inset(0)]`,
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
}