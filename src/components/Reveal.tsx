import type { ReactNode, CSSProperties } from 'react';
import { useReveal } from '@/lib/reveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'figure';
  variant?: 'fade' | 'mask';
}

export function Reveal({ children, className = '', delay = 0, as = 'div', variant = 'fade' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const Tag = as;
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;
  return (
    <Tag ref={ref as never} style={style} className={`${variant === 'mask' ? '' : 'reveal'} ${className}`}>
      {children}
    </Tag>
  );
}

interface MaskedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  startDelay?: number;
  step?: number;
}

export function MaskedLines({ lines, className = '', lineClassName = '', startDelay = 0, step = 120 }: MaskedLinesProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="mask-line" style={{ '--reveal-delay': `${startDelay + i * step}ms` } as CSSProperties}>
          <span className={lineClassName}>{l}</span>
        </span>
      ))}
    </div>
  );
}

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ClipReveal({ children, className = '', delay = 0 }: ClipRevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties} className={`clip-reveal ${className}`}>
      {children}
    </div>
  );
}
