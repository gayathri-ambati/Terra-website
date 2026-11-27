// ArticleList.tsx — replaces FeaturedArticle + LatestInsights (no card grid)
import { ARTICLES } from "./Data";

export default function ArticleList() {
  const [first, ...rest] = ARTICLES;
  return (
    <section id="latest" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <h2 className="text-4xl font-extrabold text-[#0b2e24] md:text-5xl">Latest reading</h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <a href={first.href} className="group block">
          <div className="overflow-hidden rounded-3xl">
            <img src={first.image} alt={first.title} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <p className="mt-4 text-sm font-semibold text-green-700">{first.category} · {first.read}</p>
          <h3 className="mt-1 text-2xl font-bold text-[#0b2e24] group-hover:underline md:text-3xl">{first.title}</h3>
        </a>
        <ul className="divide-y divide-slate-200">
          {rest.slice(0, 4).map((a) => (
            <li key={a.id}>
              <a href={a.href} className="group flex items-center gap-4 py-4">
                <img src={a.image} alt="" loading="lazy" className="h-20 w-24 shrink-0 rounded-xl object-cover" />
                <div>
                  <p className="text-xs font-semibold text-green-700">{a.category} · {a.read}</p>
                  <h3 className="mt-1 font-bold leading-snug text-[#0b2e24] group-hover:underline">{a.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}