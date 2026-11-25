import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { verticals } from '@/lib/content';
import { MaskedLines, Reveal } from '@/components/Reveal';

export function Expertise() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="label-caps mb-6 flex items-center gap-3 text-forest-600">
                <span className="h-px w-10 bg-forest-600" /> What we do
              </p>
            </Reveal>
            <MaskedLines
              lines={['Three verticals,', 'one measure: outcomes.']}
              className="headline-lg text-forest-800"
            />
          </div>
          <Reveal>
            <Link to="/solutions" className="btn-ghost-dark">
              All solutions <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 space-y-5">
          {verticals.map((v, i) => (
            <Reveal key={v.id} delay={i * 100}>
              <Link
                to={v.href}
                className={`group grid items-center gap-6 rounded-sm p-8 transition-all duration-500 md:grid-cols-12 md:p-12 ${
                  v.theme === 'dark'
                    ? 'bg-forest-800 text-ivory hover:bg-forest-700'
                    : 'bg-sage-400 text-forest-900 hover:bg-sage-300'
                }`}
              >
                <span className="font-heading text-sm font-bold opacity-60 md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl font-medium md:col-span-4 md:text-4xl">
                  {v.title}
                </h3>
                <p className="max-w-xl font-body text-sm leading-relaxed opacity-75 md:col-span-6">
                  {v.summary}
                </p>
                <span className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowUpRight
                    size={28}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}