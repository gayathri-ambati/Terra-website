import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { articles } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const CATEGORIES = ['All', 'Energy', 'Engineering', 'Agriculture', 'Sustainability'];

export function InsightsPage() {
  const [cat, setCat] = useState('All');
  const filtered = articles.filter((a) => cat === 'All' || a.category === cat);
  const featured = filtered[0];

  return (
    <main>
      <section className="bg-ivory pb-10 pt-36 md:pb-16 md:pt-44">
        <div className="shell">
          <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
            <span className="h-px w-10 bg-forest-600" /> Insights
          </p>
          <MaskedLines
            lines={['Field notes from', 'the work itself.']}
            className="headline-xl max-w-5xl text-forest-800"
            startDelay={120}
          />
          <Reveal delay={300}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/75">
              Perspectives on energy, engineering, agriculture and sustainability — written by the people doing the work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-10 md:py-14">
        <div className="shell">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
                  cat === c ? 'bg-forest-800 text-ivory' : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <Reveal className="mt-12">
              <article className="group grid overflow-hidden rounded-sm bg-linen lg:grid-cols-2">
                <ClipReveal className="relative min-h-[280px]">
                  <SceneCanvas variant={featured.category === 'Agriculture' ? 'agri' : 'energy'} />
                </ClipReveal>
                <div className="flex flex-col justify-center p-10 md:p-14">
                  <div className="flex items-center gap-4 font-body text-xs text-charcoal/60">
                    <span className="label-caps text-forest-600">{featured.category}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featured.read}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-forest-800 md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 font-body text-base leading-relaxed text-charcoal/75">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest-800">
                    Read the article
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          )}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {filtered.slice(1).map((a, i) => (
              <Reveal key={a.slug} delay={i * 100}>
                <article className="group flex h-full flex-col justify-between rounded-sm border border-forest-800/10 bg-ivory p-8 transition-all hover:border-forest-800/30 hover:shadow-lg hover:shadow-forest-900/5">
                  <div>
                    <div className="flex items-center gap-3 font-body text-xs text-charcoal/60">
                      <span className="label-caps text-forest-600">{a.category}</span>
                      <span>{a.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-forest-800">{a.title}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{a.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-forest-800/10 pt-4">
                    <span className="flex items-center gap-1 font-body text-xs text-charcoal/50">
                      <Clock size={12} /> {a.read}
                    </span>
                    <ArrowRight size={16} className="text-forest-800 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 font-body text-base text-charcoal/60">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <ClosingCta title={['Ideas into', 'practice.']} to="/contact" cta="Get in touch" />
      <div className="hidden">
        <Link to="/contact">Contact</Link>
      </div>
    </main>
  );
}
