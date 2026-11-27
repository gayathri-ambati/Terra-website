// data.ts
// Replace image URLs / content with your existing data. Shapes are kept simple so you can map your API data here.
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("photo-1509391366360-2e959784a276", 2200),
  featured: u("photo-1508514177221-188b1cf16e9d"),
  house: u("photo-1558449028-b53a39d100fc", 900),
  wind: u("photo-1466611653911-95081537e5b7", 900),
  city: u("photo-1473341304170-971dccb5ac1e", 900),
  field: u("photo-1497440001374-f26997328c1b", 1000),
  roof: u("photo-1595437193398-f24279553f4f", 1000),
  factory: u("photo-1611365892117-00ac5ef43c90", 1000),
  cta: u("photo-1548337138-e87d889cc369", 2200),
  person1: u("photo-1573496359142-b8d87734a5a2", 800),
  person2: u("photo-1560250097-0b93528c311a", 800),
  person3: u("photo-1580489944761-15a19d654956", 800),
} as const;

export type Category =
  | "All Articles"
  | "Solar Technology"
  | "Energy Savings"
  | "Sustainability"
  | "Industry Insights"
  | "Tips & Guides";

export const CATEGORIES: Category[] = [
  "All Articles",
  "Solar Technology",
  "Energy Savings",
  "Sustainability",
  "Industry Insights",
  "Tips & Guides",
];

export interface FeaturedArticle {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: number;
  views: number;
  image: string;
  href: string;
}

export const FEATURED: FeaturedArticle = {
  date: "Nov 26, 2026",
  category: "Solar Technology",
  title: "The Future of Solar Energy: Trends to Watch in 2027",
  excerpt:
    "Discover the latest innovations in solar technology, from higher efficiency panels to smart energy solutions that are shaping a sustainable future.",
  readTime: 5,
  views: 2.5,
  image: IMG.featured,
  href: "/insights/future-of-solar-energy",
};

export interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  read: string;
  image: string;
  href: string;
}

export const ARTICLES: Article[] = [
  { id: 1, title: "How Solar Panels Can Reduce Your Electricity Bill", category: "Solar Technology", date: "Nov 20, 2026", read: "6 min read", image: IMG.house, href: "/insights/reduce-electricity-bill" },
  { id: 2, title: "Building a Sustainable Future with Clean Energy", category: "Sustainability", date: "Nov 18, 2026", read: "5 min read", image: IMG.wind, href: "/insights/sustainable-future" },
  { id: 3, title: "The Growing Role of Renewable Energy in Business", category: "Industry Insights", date: "Nov 15, 2026", read: "7 min read", image: IMG.city, href: "/insights/renewables-in-business" },
  { id: 4, title: "5 Ways to Cut Your Energy Use This Winter", category: "Energy Savings", date: "Nov 12, 2026", read: "4 min read", image: IMG.roof, href: "/insights/cut-energy-use" },
  { id: 5, title: "Solar Panel Maintenance: A Simple Seasonal Checklist", category: "Tips & Guides", date: "Nov 09, 2026", read: "6 min read", image: IMG.field, href: "/insights/maintenance-checklist" },
  { id: 6, title: "What Battery Storage Means for Home Solar", category: "Solar Technology", date: "Nov 05, 2026", read: "8 min read", image: IMG.factory, href: "/insights/battery-storage" },
];

export interface Topic {
  title: string;
  count: string;
  image: string;
}

export const TOPICS: Topic[] = [
  { title: "Solar Market Trends", count: "24 articles", image: IMG.city },
  { title: "Latest Solar Technologies", count: "18 articles", image: IMG.featured },
  { title: "Renewable Energy News", count: "32 articles", image: IMG.wind },
  { title: "Government Policies", count: "12 articles", image: IMG.field },
  { title: "Battery Storage", count: "9 articles", image: IMG.factory },
];

export interface Report {
  title: string;
  type: string;
  pages: number;
  size: string;
}

export const REPORTS: Report[] = [
  { title: "India Solar Industry Report 2026", type: "Industry report", pages: 48, size: "6.2 MB" },
  { title: "Renewable Energy Forecast 2027–2030", type: "Forecast", pages: 36, size: "4.8 MB" },
  { title: "Panel Efficiency Research Brief", type: "Technology research", pages: 22, size: "3.1 MB" },
  { title: "Homeowner's Guide to Going Solar", type: "Downloadable guide", pages: 18, size: "2.4 MB" },
];

export interface Expert {
  name: string;
  role: string;
  topic: string;
  duration: string;
  image: string;
  video: string;
}

export const EXPERTS: Expert[] = [
  { name: "Anita Rao", role: "Solar Engineer", topic: "How next-gen panels change rooftop design", duration: "12:40", image: IMG.person1, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Rahul Verma", role: "Energy Consultant", topic: "Choosing the right system size for your home", duration: "09:15", image: IMG.person2, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Suresh Kumar", role: "Customer story", topic: "A year after going solar: real savings", duration: "07:52", image: IMG.person3, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export interface Story {
  type: string;
  title: string;
  result: string;
  image: string;
}

export const STORIES: Story[] = [
  { type: "Residential", title: "Family home cuts bills by 82%", result: "5 kW rooftop system", image: IMG.roof },
  { type: "Commercial", title: "Retail complex powers its day with the sun", result: "120 kW rooftop array", image: IMG.city },
  { type: "Industrial", title: "Factory lowers its grid dependence by 60%", result: "500 kW ground mount", image: IMG.factory },
  { type: "Agriculture", title: "Farm pumps run on daylight, not diesel", result: "25 kW solar pumping", image: IMG.field },
];

export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  { q: "How long do solar panels last?", a: "Most quality panels are warrantied for 25 years and keep producing well beyond that, with output declining slowly each year." },
  { q: "Do solar panels work on cloudy days?", a: "Yes. Output drops on overcast days, but panels still generate power from diffuse light." },
  { q: "How much maintenance does a system need?", a: "Mostly occasional cleaning and a yearly inspection. There are no moving parts in the panels themselves." },
  { q: "What size system do I need?", a: "It depends on your monthly consumption, roof space and sunlight. Use the calculator to get a starting estimate." },
];