
import { MaskedLines } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';

export function AboutHero() {
  return (
    <section className="grain relative flex min-h-[90vh] items-center overflow-hidden bg-forest-900 text-ivory">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac8e?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Background Scene */}
      <SceneCanvas
        variant="hero"
        className="animate-drift"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/80 to-forest-900/50" />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-900/30" />

      {/* Ambient Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-green-400/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="shell relative z-10 w-full py-28 sm:py-36 lg:py-40">

        {/* Eyebrow */}
        <p className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-sage-400 sm:mb-10 sm:text-sm">
          <span className="h-px w-12 bg-sage-400" />
          About Terra
        </p>

        {/* Headline */}
        <div className="max-w-[1200px] overflow-visible pb-5 sm:pb-8">
          <MaskedLines
            lines={[
              'A decade of engineering',
              'for the real world.',
            ]}
            className="headline-xl max-w-5xl !leading-[1.15] tracking-[-0.035em]"
            startDelay={150}
          />
        </div>

        {/* Supporting Text */}
        <div className="mt-8 max-w-xl sm:mt-10">
          <p className="text-sm leading-7 text-ivory/75 sm:text-base sm:leading-8">
            Building meaningful solutions through engineering,
            innovation and a commitment to a more sustainable
            real world.
          </p>
        </div>

      </div>
    </section>
  );
}


