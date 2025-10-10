import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { CtaSection } from '../components/home/CtaSection';
export const HomePage: React.FC = () => {
  return <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProjectsSection />
      <CtaSection />
    </>;
};