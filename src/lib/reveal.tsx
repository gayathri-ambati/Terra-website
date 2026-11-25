import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement>(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            if (options?.once !== false) obs.unobserve(e.target);
          }
        });
      },
      { threshold: options?.threshold ?? 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options?.threshold, options?.once]);

  return ref;
}

export function CountUp({ value, suffix, duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          el.textContent = value.toLocaleString('en-IN');
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(value * eased).toLocaleString('en-IN');
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}
