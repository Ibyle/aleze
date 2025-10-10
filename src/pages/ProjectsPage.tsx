import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ArrowRight, ArrowLeft } from 'lucide-react';
export const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const projects = [{
    id: 1,
    title: 'Lagos Waterfront Dredging',
    category: 'Dredging',
    description: 'A major dredging project to create usable waterfront land for a residential development in Lagos.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Lagos Development Corp',
      location: 'Lagos, Nigeria',
      duration: '6 months',
      year: '2022',
      scope: 'Hydraulic dredging, land reclamation, and shoreline stabilization for a 5-acre waterfront property.'
    }
  }, {
    id: 2,
    title: 'Granite Supply for Highway Construction',
    category: 'Granite',
    description: 'Supplied various grades of granite for a major highway construction project in Nigeria.',
    image: 'https://images.unsplash.com/photo-1518228684305-2e7e20336f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Federal Roads Authority',
      location: 'Abuja-Kaduna Highway',
      duration: '12 months',
      year: '2021',
      scope: 'Supplied over 50,000 tons of various granite grades for road construction and stabilization.'
    }
  }, {
    id: 3,
    title: 'Commercial Building Foundation',
    category: 'Sand',
    description: 'Provided high-quality sharp sand for the foundation of a major commercial building complex.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Metro Developers Ltd',
      location: 'Port Harcourt, Nigeria',
      duration: '3 months',
      year: '2022',
      scope: 'Supplied 10,000 cubic meters of premium sharp sand for foundation work and concrete mixing.'
    }
  }, {
    id: 4,
    title: 'Excavation for Residential Development',
    category: 'Equipment',
    description: 'Provided excavators and payloaders for a large residential development project.',
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Horizon Homes Ltd',
      location: 'Lekki, Lagos',
      duration: '4 months',
      year: '2023',
      scope: 'Equipment rental including 3 excavators and 2 payloaders for site preparation and foundation work.'
    }
  }, {
    id: 5,
    title: 'Industrial Waterfront Leasing',
    category: 'Waterfront',
    description: 'Leased waterfront property to a logistics company for their shipping operations.',
    image: 'https://images.unsplash.com/photo-1635770647357-3a2e9c596f52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Global Logistics Nigeria Ltd',
      location: 'Apapa, Lagos',
      duration: '5-year lease',
      year: '2021',
      scope: 'Leased 2-acre waterfront property with docking facilities and storage space.'
    }
  }, {
    id: 6,
    title: 'Beach Restoration Project',
    category: 'Dredging',
    description: 'Dredging and sand replenishment for a beach restoration project at a resort area.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Coastal Resort & Spa',
      location: 'Calabar, Nigeria',
      duration: '4 months',
      year: '2022',
      scope: 'Beach restoration through dredging and sand replenishment covering 1.5 km of coastline.'
    }
  }, {
    id: 7,
    title: 'Road Construction Material Supply',
    category: 'Granite',
    description: 'Supplied granite and sharp sand for a major urban road construction project.',
    image: 'https://images.unsplash.com/photo-1573904600697-31b48238a068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'Urban Development Authority',
      location: 'Ibadan, Nigeria',
      duration: '8 months',
      year: '2023',
      scope: 'Supplied 30,000 tons of granite and 15,000 cubic meters of sharp sand for a 12-km urban road network.'
    }
  }, {
    id: 8,
    title: 'Construction Equipment for Bridge Project',
    category: 'Equipment',
    description: 'Provided specialized heavy equipment for a bridge construction project.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      client: 'National Infrastructure Development Agency',
      location: 'Cross River, Nigeria',
      duration: '10 months',
      year: '2021',
      scope: 'Equipment rental including specialized excavators, cranes, and payloaders for bridge construction.'
    }
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  const openProjectDetails = (id: number) => {
    setSelectedProject(id);
  };
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  const getSelectedProject = () => {
    return projects.find(project => project.id === selectedProject);
  };
  return <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200">
              Explore our portfolio of successful dredging, construction
              materials supply, and equipment rental projects.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Projects Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Project Portfolio" subtitle="Browse through our completed projects across various service areas" center={true} />
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              All Projects
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setFilter('dredging')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'dredging' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Dredging
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setFilter('sand')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'sand' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Sharp Sand
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setFilter('granite')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'granite' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Granite
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setFilter('equipment')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'equipment' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Equipment
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setFilter('waterfront')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'waterfront' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Waterfront
            </motion.button>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
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
          }} className="group cursor-pointer" onClick={() => openProjectDetails(project.id)}>
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 flex flex-col justify-end p-6">
                    <span className="text-accent font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view details
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <p className="text-gray-600">
                No projects found for this category. Please try another filter.
              </p>
            </div>}
        </div>
      </section>
      {/* Project Details Modal */}
      {selectedProject !== null && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={closeProjectDetails}>
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {getSelectedProject() && <>
                <div className="relative h-80">
                  <img src={getSelectedProject()?.image} alt={getSelectedProject()?.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <span className="text-accent font-medium">
                      {getSelectedProject()?.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {getSelectedProject()?.title}
                    </h2>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors" onClick={closeProjectDetails}>
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Project Description
                    </h3>
                    <p className="text-gray-600">
                      {getSelectedProject()?.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Project Details
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex">
                          <span className="font-medium w-24">Client:</span>
                          <span className="text-gray-600">
                            {getSelectedProject()?.details.client}
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-24">Location:</span>
                          <span className="text-gray-600">
                            {getSelectedProject()?.details.location}
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-24">Duration:</span>
                          <span className="text-gray-600">
                            {getSelectedProject()?.details.duration}
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-24">Year:</span>
                          <span className="text-gray-600">
                            {getSelectedProject()?.details.year}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Scope of Work
                      </h3>
                      <p className="text-gray-600">
                        {getSelectedProject()?.details.scope}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button className="flex items-center text-primary hover:text-primary-light transition-colors" onClick={() => {
                const currentIndex = projects.findIndex(p => p.id === selectedProject);
                const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                setSelectedProject(projects[prevIndex].id);
              }}>
                      <ArrowLeft className="mr-2 w-4 h-4" /> Previous Project
                    </button>
                    <button className="flex items-center text-primary hover:text-primary-light transition-colors" onClick={() => {
                const currentIndex = projects.findIndex(p => p.id === selectedProject);
                const nextIndex = (currentIndex + 1) % projects.length;
                setSelectedProject(projects[nextIndex].id);
              }}>
                      Next Project <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>}
          </motion.div>
        </motion.div>}
      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Similar Project in Mind?
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl">
                Let's discuss how we can help you achieve your construction and
                development goals with our expertise and quality materials.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-accent">
                Contact Us
              </a>
              <a href="tel:08180086527" className="btn bg-white text-secondary hover:bg-gray-100 flex items-center justify-center">
                <PhoneIcon className="w-4 h-4 mr-2" /> Call Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};