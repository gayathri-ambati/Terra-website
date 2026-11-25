import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const TRANSFORM_PROJECT = projects.find((p) => p.slug === 'transform-fpo-cluster')!;

const FARMER_STORIES = [
  {
    name: 'A farmer field school graduate',
    place: 'Western Tamil Nadu',
    quote: 'We used to decide by habit. Now we decide by what the soil and the season tell us. Input costs fell the first year.',
  },
  {
    name: 'An FPO board member',
    place: 'TRANSFORM cluster',
    quote: 'The collection centre changed everything. We grade together, store together and sell at a price we set together.',
  },
  {
    name: 'A young returning farmer',
    place: 'TRANSFORM village',
    quote: 'I came back to farming because it finally looked like a business, not a gamble. The programme made the maths work.',
  },
];

export function AgriculturePage() {
  return (
    <main>
      <section className="relative flex min-h-[90vh] items-end overflow-hidden text-forest-900">
        <SceneCanvas variant="agri" className="animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-t from-linen via-transparent to-transparent" />
        <div className="shell relative z-10 pb-24 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
            <span className="h-px w-10 bg-forest-600" /> Agriculture · TRANSFORM
          </p>
          <MaskedLines
            lines={['Where the work', 'takes root.']}
            className="headline-xl max-w-5xl text-forest-800"
            startDelay={150}
          />
          <Reveal delay={350}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/80">
              TRANSFORM is Terra&apos;s agriculture programme: farmer field schools, stronger producer organisations and shared
              rural infrastructure — built with communities, not just for them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="shell grid items-center gap-16 lg:grid-cols-2">
          <div>
            <MaskedLines lines={['The challenge']} className="headline-md text-forest-800" />
            <Reveal delay={150}>
              <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-charcoal/80">
                Small-holder farmers face a compound problem: fragmented holdings that cannot fund infrastructure, post-harvest
                losses that erase thin margins, and agronomy advice that arrives late or not at all.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4">
            {['Post-harvest losses erasing margins', 'No bargaining power in fragmented selling', 'Little access to timely agronomy support', 'Infrastructure priced beyond any single village'].map((c, i) => (
              <Reveal key={c} delay={i * 90} className="rounded-sm bg-linen p-6 font-body text-base text-charcoal/80">
                {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-24 text-ivory md:py-36">
        <div className="shell grid items-center gap-16 lg:grid-cols-2">
          <ClipReveal className="relative min-h-[420px] overflow-hidden rounded-sm">
            <SceneCanvas variant="agri" />
          </ClipReveal>
          <div>
            <MaskedLines lines={['Our approach:', 'build capability first.']} className="headline-md" />
            <div className="mt-10 space-y-6">
              {[
                ['Farmer field schools', 'Season-long, hands-on training on soil health, water management and integrated pest management.'],
                ['Stronger FPOs', 'Governance, collective procurement and direct marketing so members sell as one.'],
                ['Shared infrastructure', 'Prefabricated collection centres, grading lines, solar drying and cold-storage pilots.'],
                ['Digital advisories', 'Crop guidance delivered through FPO networks, timed to the season.'],
              ].map(([t, b], i) => (
                <Reveal key={t} delay={i * 100} className="flex gap-6 border-t border-ivory/15 pt-6">
                  <span className="font-heading text-sm font-bold text-sage-400">0{i + 1}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{t}</h3>
                    <p className="mt-1 max-w-md font-body text-sm leading-relaxed text-ivory/65">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-24 md:py-36">
        <div className="shell">
          <MaskedLines lines={['From the field']} className="headline-lg text-forest-800" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {FARMER_STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 110} className="flex flex-col justify-between rounded-sm bg-ivory p-8">
                <blockquote className="font-display text-xl italic leading-snug text-forest-800">“{s.quote}”</blockquote>
                <div className="mt-8 border-t border-forest-800/10 pt-4">
                  <p className="font-heading text-sm font-semibold text-forest-800">{s.name}</p>
                  <p className="font-body text-xs text-charcoal/60">{s.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 max-w-2xl font-body text-sm leading-relaxed text-charcoal/60">
              Names and photographs are withheld pending consent; these accounts are composites of field feedback until
              approved stories are published.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-36">
        <div className="shell grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MaskedLines lines={['Verified outcomes']} className="headline-md text-forest-800" />
            <Reveal delay={150}>
              <p className="mt-8 max-w-md font-body text-base leading-relaxed text-charcoal/80">
                TRANSFORM measures itself in farmer income, not footage. Current programme results, pending third-party
                verification:
              </p>
            </Reveal>
            <Reveal delay={250}>
              <Link to={`/projects/${TRANSFORM_PROJECT.slug}`} className="btn-ghost-dark mt-8">
                Read the programme case study <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 lg:col-span-7">
            {TRANSFORM_PROJECT.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 100} className="flex items-baseline justify-between border-b border-forest-800/10 pb-6">
                <span className="font-heading text-4xl font-bold text-forest-800 md:text-5xl">{r.value}</span>
                <span className="max-w-[60%] text-right font-body text-sm text-charcoal/70">{r.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Grow the programme', 'with us.']} cta="Partner with TRANSFORM" />
    </main>
  );
}
