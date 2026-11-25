import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

const SECTORS = ['All', 'Energy & Engineering', 'Agriculture', 'Industry'] as const;

export function ProjectsPage() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (sector === 'All' || p.sector === sector) &&
          (query.trim() === '' ||
            (p.title + p.client + p.industry + p.solutions.join(' ')).toLowerCase().includes(query.toLowerCase()))
      ),
    [sector, query]
  );

  return (
    <main>
      <section className="grain relative flex min-h-[60vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant="energy" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
        <div className="shell relative z-10 pb-20 pt-40">
          <p className="label-caps mb-6 flex items-center gap-3 text-sage-400">
            <span className="h-px w-10 bg-sage-400" /> Projects & Case Studies
          </p>
          <MaskedLines lines={['Proof, not promises.']} className="headline-xl" startDelay={150} />
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by sector">
              {SECTORS.map((s) => (
                <button
                  key={s}
                  role="tab"
                  aria-selected={sector === s}
                  onClick={() => setSector(s)}
                  className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
                    sector === s ? 'bg-forest-800 text-ivory' : 'border border-forest-800/20 text-forest-800 hover:border-forest-800'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <label className="relative flex items-center md:w-72">
              <Search size={16} className="absolute left-4 text-charcoal/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-forest-800/20 bg-transparent py-2.5 pl-11 pr-4 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest-800 focus:outline-none"
                aria-label="Search projects"
              />
            </label>
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 font-body text-base text-charcoal/60">No projects match that search yet.</p>
          )}

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100} className={i === 0 ? 'md:col-span-2' : ''}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <ClipReveal className={`relative overflow-hidden rounded-sm ${i === 0 ? 'min-h-[380px]' : 'min-h-[300px]'}`}>
                    <SceneCanvas variant={p.sector === 'Agriculture' ? 'agri' : p.sector === 'Industry' ? 'industry' : 'energy'} />
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-900/90 to-transparent p-8">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-sage-400/90 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-forest-900">
                          {p.industry}
                        </span>
                        <span className="rounded-full border border-ivory/40 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-ivory">
                          {p.sector}
                        </span>
                      </div>
                      <h2 className={`mt-3 font-display font-medium text-ivory ${i === 0 ? 'text-4xl' : 'text-3xl'}`}>{p.title}</h2>
                      <p className="mt-1 font-body text-sm text-ivory/70">{p.location}</p>
                    </div>
                  </ClipReveal>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-body text-sm text-charcoal/70">
                      {p.results[0].value} · {p.results[0].label}
                    </span>
                    <span className="flex items-center gap-2 font-heading text-sm font-semibold text-forest-800">
                      Case study
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Your project', 'could be next.']} cta="Discuss a project" />
    </main>
  );
}
