import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { projects } from '@/lib/content';
import { MaskedLines, Reveal, ClipReveal } from '@/components/Reveal';
import { SceneCanvas } from '@/components/SceneCanvas';
import { ClosingCta } from '@/components/HomeCompo/ClosingCta';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — Terra Ecopreneurs Case Study`;
    return () => {
      document.title = 'Projects & Case Studies — Terra Ecopreneurs';
    };
  }, [project]);

  if (!project) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-6 text-center">
        <h1 className="headline-lg text-forest-800">Case study not found</h1>
        <Link to="/projects" className="btn-ghost-dark mt-8">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </main>
    );
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main>
      <section className="grain relative flex min-h-[88vh] items-end overflow-hidden bg-forest-900 text-ivory">
        <SceneCanvas variant={project.sector === 'Agriculture' ? 'agri' : project.sector === 'Industry' ? 'industry' : 'energy'} className="animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60" />
        <div className="shell relative z-10 pb-24 pt-40">
          <Link to="/projects" className="mb-8 inline-flex items-center gap-2 font-heading text-sm text-ivory/70 transition-colors hover:text-sage-300">
            <ArrowLeft size={16} /> All projects
          </Link>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-sage-400 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-forest-900">
              {project.industry}
            </span>
            <span className="rounded-full border border-ivory/40 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide">
              {project.sector}
            </span>
          </div>
          <MaskedLines lines={[project.title]} className="headline-xl mt-6 max-w-5xl" startDelay={150} />
          <Reveal delay={350}>
            <p className="mt-4 font-body text-sm text-ivory/60">{project.client} · {project.location}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-caps mb-6 text-forest-600">Overview</p>
              <p className="font-display text-2xl leading-snug text-forest-800 md:text-3xl">{project.overview}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="label-caps mb-6 mt-16 text-forest-600">The challenge</p>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">{project.challenge}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="label-caps mb-6 mt-16 text-forest-600">Our approach</p>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-charcoal/80">{project.approach}</p>
            </Reveal>
          </div>
          <aside className="lg:col-span-5">
            <Reveal delay={150} className="rounded-sm bg-forest-800 p-10 text-ivory">
              <h3 className="label-caps text-sage-400">Project facts</h3>
              <dl className="mt-8 space-y-6">
                {[
                  ['Client', project.client],
                  ['Industry', project.industry],
                  ['Location', project.location],
                  ['Solutions', project.solutions.join(', ')],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-ivory/15 pt-4">
                    <dt className="font-heading text-xs uppercase tracking-wide text-sage-400">{k}</dt>
                    <dd className="mt-1 font-body text-sm leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-charcoal py-24 text-ivory md:py-32">
        <SceneCanvas variant="industry" className="opacity-30" />
        <div className="shell relative z-10 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MaskedLines lines={['Execution']} className="headline-md" />
            <Reveal delay={150}>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ivory/65">
                What we delivered, in sequence, without stopping the client&apos;s operations.
              </p>
            </Reveal>
          </div>
          <div className="space-y-6 lg:col-span-7">
            {project.execution.map((step, i) => (
              <Reveal key={step} delay={i * 80} className="flex gap-6 border-t border-ivory/15 pt-5">
                <span className="font-heading text-sm font-bold text-sage-400">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-base leading-relaxed text-ivory/85">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-24 md:py-32">
        <div className="shell">
          <MaskedLines lines={['Measurable results']} className="headline-md text-forest-800" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {project.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 110} className="border-t-2 border-forest-800/20 pt-6">
                <span className="font-heading text-5xl font-bold text-forest-800">{r.value}</span>
                <p className="mt-3 font-body text-sm text-charcoal/70">{r.label}</p>
              </Reveal>
            ))}
          </div>
          {project.testimonial && (
            <Reveal delay={200} className="mt-20 rounded-sm bg-forest-800 p-10 text-ivory md:p-14">
              <Quote size={32} className="text-sage-400" />
              <blockquote className="mt-6 max-w-3xl font-display text-2xl italic leading-snug md:text-3xl">
                “{project.testimonial.quote}”
              </blockquote>
              <cite className="mt-6 block font-body text-sm not-italic text-ivory/60">{project.testimonial.role}</cite>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="shell">
          <h2 className="headline-md text-forest-800">Related projects</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/projects/${p.slug}`} className="group flex items-center justify-between rounded-sm bg-linen p-8 transition-colors hover:bg-sage-300">
                  <div>
                    <span className="label-caps text-forest-600">{p.sector}</span>
                    <h3 className="mt-2 font-display text-2xl font-medium text-forest-800">{p.title}</h3>
                  </div>
                  <ArrowRight size={22} className="shrink-0 text-forest-800 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={['Have a challenge', 'like this one?']} cta="Talk to our engineers" />
    </main>
  );
}
