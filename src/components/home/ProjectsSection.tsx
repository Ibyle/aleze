import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ArrowRight, ArrowLeft } from 'lucide-react';
export const ProjectsSection: React.FC = () => {
  const projects = [{
    id: 1,
    title: 'Lagos Waterfront Dredging',
    category: 'Dredging',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/projects'
  }, {
    id: 2,
    title: 'Granite Supply for Highway Construction',
    category: 'Granite Sales',
    image: 'https://images.unsplash.com/photo-1518228684305-2e7e20336f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/projects'
  }, {
    id: 3,
    title: 'Commercial Building Foundation',
    category: 'Sharp Sand',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/projects'
  }, {
    id: 4,
    title: 'Excavation for Residential Development',
    category: 'Equipment Rental',
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/projects'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projects.length - 1);
    }
  };
  return <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <SectionTitle title="Recent Projects" subtitle="Explore our portfolio of successful dredging and construction material supply projects." />
          <div className="mt-6 md:mt-0">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Link to={project.link}>
                <div className="h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-sm text-accent font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </Link>
            </motion.div>)}
        </div>
        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="relative h-80 rounded-lg shadow-lg overflow-hidden">
              <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm text-accent font-medium">
                  {projects[currentIndex].category}
                </span>
                <h3 className="text-xl font-semibold">
                  {projects[currentIndex].title}
                </h3>
              </div>
            </motion.div>
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-3">
              <button onClick={prevSlide} className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all" aria-label="Previous project">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all" aria-label="Next project">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300'}`} aria-label={`Go to project ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};