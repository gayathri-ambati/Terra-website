import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import type { Solution } from '@/lib/content';
import { IMAGES } from './SolutionCard';

const EASE = [0.22, 1, 0.36, 1] as const;

const DEFAULT_FEATURES = [
  'Site audit & feasibility',
  'Design & engineering',
  'Turnkey installation',
  'Monitoring & maintenance',
];

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
}

export function SolutionModal({ solution, onClose }: SolutionModalProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = !!solution;
  const image = solution ? IMAGES[solution.code] : null;

  // ✅ Type-safe access to an optional `features` field even if it isn't
  // declared on your `Solution` type.
  const features: string[] =
    (solution as (Solution & { features?: string[] }) | null)?.features ??
    DEFAULT_FEATURES;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && solution && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 grid place-items-center bg-forest-900/60 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="solution-modal-title"
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-ivory shadow-2xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-forest-900 shadow-md transition hover:bg-forest-900 hover:text-ivory"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto">
              <div className="relative h-56 w-full overflow-hidden bg-sage-400/40 md:h-72">
                {image && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/10 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="label-caps text-ivory/80">Solution</span>
                    <h2
                      id="solution-modal-title"
                      className="mt-1 font-display text-2xl font-medium text-ivory md:text-3xl"
                    >
                      {solution.title}
                    </h2>
                  </div>
                  <span className="grid h-11 min-w-11 place-items-center rounded-full bg-white px-3 font-display text-sm tracking-wider text-forest-900 shadow-md">
                    {solution.code}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="font-body text-base leading-relaxed text-forest-800/85">
                  {solution.blurb}
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-forest-800/70">
                  {solution.detail}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {features.map((item: string) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-forest-900/10 bg-white p-3 font-body text-sm text-forest-800"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage-400/40 text-forest-900">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 border-t border-forest-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-body text-sm text-forest-800/60">
                    Want a quote for {solution.title.toLowerCase()}?
                  </p>
                  <a
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-5 py-3 font-body text-sm font-medium text-ivory transition hover:bg-forest-800"
                  >
                    Request a consultation
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}