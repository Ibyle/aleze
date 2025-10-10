import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DredgingPage } from './pages/services/DredgingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ChatWidget } from './components/ui/ChatWidget';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
              <HomePage />
            </Layout>} />
        <Route path="/about" element={<Layout>
              <AboutPage />
            </Layout>} />
        <Route path="/services" element={<Layout>
              <ServicesPage />
            </Layout>} />
        <Route path="/services/dredging-sharp-sand" element={<Layout>
              <DredgingPage />
            </Layout>} />
        <Route path="/projects" element={<Layout>
              <ProjectsPage />
            </Layout>} />
        <Route path="/blog" element={<Layout>
              <BlogPage />
            </Layout>} />
        <Route path="/contact" element={<Layout>
              <ContactPage />
            </Layout>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>;
}