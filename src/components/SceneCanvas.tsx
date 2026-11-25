import type { CSSProperties, ReactNode } from 'react';

/** Deterministic abstract landscape built from layered SVG gradients — a
    zero-asset stand-in for the cinematic video hero, replaceable with a
    real MP4/WebM when client footage is approved. */
export function SceneCanvas({ variant, className = '' }: { variant: string; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {variant === 'hero' && <HeroScene />}
      {variant === 'energy' && <EnergyScene />}
      {variant === 'agri' && <AgriScene />}
      {variant === 'industry' && <IndustryScene />}
      {variant === 'impact' && <ImpactScene />}
      {variant === 'contact' && <ContactScene />}
    </div>
  );
}

function blob(tx: number, ty: number, scale: number, from: string, to: string, opacity: number, dur: number, delay: number) {
  const style = {
    animation: `drift ${dur}s ease-in-out ${delay}s infinite`,
    transformOrigin: 'center',
  } as CSSProperties;
  return (
    <g transform={`translate(${tx} ${ty}) scale(${scale})`} style={style}>
      <defs>
        <radialGradient id={`g${tx}${ty}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={from} stopOpacity={opacity} />
          <stop offset="100%" stopColor={to} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="0" cy="0" r="420" fill={`url(#g${tx}${ty})`} />
    </g>
  );
}

function ridge(points: string, fill: string, opacity: number) {
  return <path d={points} fill={fill} opacity={opacity} />;
}

function HeroScene() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B211B" />
          <stop offset="55%" stopColor="#16382D" />
          <stop offset="100%" stopColor="#244B3C" />
        </linearGradient>
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B7CC9B" stopOpacity="0" />
          <stop offset="100%" stopColor="#B7CC9B" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      {blob(300, 250, 1.3, '#B7CC9B', '#B7CC9B', 0.16, 26, 0)}
      {blob(1300, 650, 1.6, '#2F5D4A', '#2F5D4A', 0.5, 30, 3)}
      {blob(900, 180, 1.0, '#CFDDB4', '#CFDDB4', 0.12, 22, 6)}
      {ridge('M0 620 Q 260 480 520 600 T 1040 570 T 1600 640 V900 H0 Z', '#102F27', 0.9)}
      {ridge('M0 720 Q 340 600 680 700 T 1300 690 T 1600 760 V900 H0 Z', '#0B211B', 0.95)}
      <rect y="560" width="1600" height="340" fill="url(#mist)" />
      {blob(1400, 200, 0.8, '#B7CC9B', '#B7CC9B', 0.1, 18, 2)}
    </svg>
  );
}

function EnergyScene() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect width="1600" height="900" fill="#0B211B" />
      {blob(400, 700, 1.7, '#244B3C', '#0B211B', 0.8, 28, 0)}
      {blob(1200, 300, 1.2, '#B7CC9B', '#B7CC9B', 0.08, 24, 4)}
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i} opacity={0.5 + i * 0.08}>
          <line x1={200 + i * 300} y1={220} x2={200 + i * 300} y2={700} stroke="#B7CC9B" strokeOpacity="0.12" strokeWidth="2" />
          <circle cx={200 + i * 300} cy={220 + (i % 2) * 90} r={5} fill="#B7CC9B" fillOpacity="0.3" />
        </g>
      ))}
      {ridge('M0 700 Q 400 620 800 690 T 1600 680 V900 H0 Z', '#102F27', 1)}
    </svg>
  );
}

function AgriScene() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="agrisk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E9E7DC" />
          <stop offset="100%" stopColor="#B7CC9B" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#agrisk)" />
      {blob(1300, 220, 1.1, '#F8F8F3', '#F8F8F3', 0.7, 26, 0)}
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 200 - 100} 900 Q ${i * 200 + 30} ${520 - (i % 3) * 60} ${i * 200 + 160} 900 Z`}
          fill={i % 2 ? '#244B3C' : '#2F5D4A'}
          opacity={0.25 + (i % 4) * 0.12}
        />
      ))}
    </svg>
  );
}

function IndustryScene() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect width="1600" height="900" fill="#202722" />
      {blob(800, 450, 1.8, '#244B3C', '#202722', 0.9, 30, 0)}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={140 + i * 190} y={380 + (i % 3) * 70} width="90" height="420" rx="4" fill="#102F27" opacity={0.85} />
      ))}
      <line x1="0" y1="360" x2="1600" y2="360" stroke="#B7CC9B" strokeOpacity="0.25" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx={90 + i * 130} cy="360" r="4" fill="#B7CC9B" fillOpacity="0.4" />
      ))}
    </svg>
  );
}

function ImpactScene() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect width="1600" height="900" fill="#102F27" />
      {blob(500, 300, 1.5, '#B7CC9B', '#102F27', 0.2, 26, 0)}
      {blob(1200, 650, 1.4, '#2F5D4A', '#102F27', 0.6, 32, 5)}
      <circle cx="800" cy="450" r="260" fill="none" stroke="#B7CC9B" strokeOpacity="0.15" strokeWidth="1.5" />
      <circle cx="800" cy="450" r="180" fill="none" stroke="#B7CC9B" strokeOpacity="0.2" strokeWidth="1.5" />
      <circle cx="800" cy="450" r="100" fill="none" stroke="#B7CC9B" strokeOpacity="0.3" strokeWidth="1.5" />
    </svg>
  );
}

function ContactScene() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ct" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B211B" />
          <stop offset="100%" stopColor="#244B3C" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#ct)" />
      {blob(1100, 250, 1.3, '#B7CC9B', '#244B3C', 0.18, 24, 2)}
      {blob(300, 700, 1.2, '#2F5D4A', '#0B211B', 0.7, 30, 0)}
    </svg>
  );
}

interface SplitPanelProps {
  children: ReactNode;
  className?: string;
}

export function SplitPanel({ children, className = '' }: SplitPanelProps) {
  return <div className={`relative overflow-hidden rounded-sm ${className}`}>{children}</div>;
}
