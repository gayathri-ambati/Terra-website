import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DOC_TITLES: Record<string, string> = {
  '/': 'Terra Ecopreneurs — Engineering a Sustainable Future',
  '/about': 'About Terra — Terra Ecopreneurs',
  '/impact': 'Our Impact — Terra Ecopreneurs',
  '/solutions': 'Solutions — Terra Ecopreneurs',
  '/energy-engineering': 'Energy & Engineering — Terra Ecopreneurs',
  '/agriculture': 'Agriculture & TRANSFORM — Terra Ecopreneurs',
  '/projects': 'Projects & Case Studies — Terra Ecopreneurs',
  '/insights': 'Insights — Terra Ecopreneurs',
  '/contact': 'Contact — Terra Ecopreneurs',
};

const META_DESCRIPTIONS: Record<string, string> = {
  '/about': 'The Terra Ecopreneurs story — from Coimbatore energy services to a multi-vertical sustainability enterprise.',
  '/impact': 'Verified achievements: energy saved, emissions avoided, farmers supported, communities reached.',
  '/solutions': 'Energy efficiency, clean energy, IBMS, automation, prefab structures and sustainability management.',
  '/projects': 'Case studies from Terra Ecopreneurs — challenges, solutions and measurable results.',
  '/agriculture': 'The TRANSFORM programme — building farmer capacity, FPOs and rural infrastructure.',
  '/insights': 'Field notes and perspectives on energy, engineering, agriculture and sustainability.',
  '/contact': 'Start a conversation with Terra Ecopreneurs — enquiries and partnerships.',
};

export function usePageMeta(pathname: string) {
  useEffect(() => {
    document.title = DOC_TITLES[pathname] ?? 'Terra Ecopreneurs';
    const desc = META_DESCRIPTIONS[pathname];
    if (desc) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', desc);
    }
  }, [pathname]);
}

export function useScrollTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
}
