import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import ImpactPage  from '@/pages/Impact';
import { SolutionsPage } from '@/pages/Solutions';
import { EnergyPage } from '@/pages/EnergyEngineering';
import { AgriculturePage } from '@/pages/Agriculture';
import { ProjectsPage } from '@/pages/Projects';
import { CaseStudyPage } from '@/pages/CaseStudy';
import InsightsPage  from '@/pages/Insights';
import { ContactPage } from '@/pages/Contact';
import { usePageMeta, useScrollTopOnNav } from '@/lib/meta';

function Shell() {
  const { pathname } = useLocation();
  usePageMeta(pathname);
  useScrollTopOnNav();
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/energy-engineering" element={<EnergyPage />} />
          <Route path="/agriculture" element={<AgriculturePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<CaseStudyPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
