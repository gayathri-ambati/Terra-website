import { Reveal } from '@/components/Reveal';

interface Milestone {
  year: string;
  title: string;
  body: string;
}

interface MilestoneItemProps {
  milestone: Milestone;
  index: number;
}

export function MilestoneItem({ milestone: m, index: i }: MilestoneItemProps) {
  const isOdd = i % 2 !== 0;

  return (
    <Reveal delay={i * 60}>
      <div
        className={`relative flex pb-14 md:w-1/2 ${
          isOdd ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right'
        }`}
      >
        <span
          aria-hidden
          className={`absolute top-2 h-3.5 w-3.5 rounded-full bg-sage-400 ring-4 ring-ivory ${
            isOdd ? 'md:-left-[7px]' : 'md:-right-[7px] md:left-auto'
          } left-0`}
        />
        <div className="pl-8 md:pl-0">
          <span className="label-caps text-forest-600">{m.year}</span>
          <h3 className="mt-2 font-display text-2xl font-medium text-forest-800">{m.title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{m.body}</p>
        </div>
      </div>
    </Reveal>
  );
}