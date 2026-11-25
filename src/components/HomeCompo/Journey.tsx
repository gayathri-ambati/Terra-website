import { milestones } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';

export function Journey() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="shell">
        <MaskedLines lines={['The journey so far']} className="headline-lg text-forest-800" />
        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-[7px] top-0 h-full w-px bg-forest-800/15 md:left-1/2"
          />
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 60}>
              <div
                className={`relative flex pb-14 md:w-1/2 ${
                  i % 2 ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right'
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute top-2 h-3.5 w-3.5 rounded-full bg-sage-400 ring-4 ring-ivory ${
                    i % 2 ? 'md:-left-[7px]' : 'md:-right-[7px] md:left-auto'
                  } left-0`}
                />
                <div className="pl-8 md:pl-0">
                  <span className="label-caps text-forest-600">{m.year}</span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-forest-800">
                    {m.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}