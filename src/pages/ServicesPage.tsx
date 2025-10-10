import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Anchor, Truck, Loader, Building, ArrowRight } from 'lucide-react';
export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [{
    id: 'dredging-sharp-sand',
    title: 'Dredging & Sharp Sand Sales',
    description: 'Professional dredging services and high-quality sharp sand for all your construction and landscaping needs.',
    icon: <Anchor className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Hydraulic dredging for efficient sand extraction', 'Multiple grades of sharp sand available', 'Quality-controlled materials for construction', 'Bulk ordering options for large projects', 'Delivery services to your construction site'],
    link: '/services/dredging-sharp-sand'
  }, {
    id: 'granite-sales',
    title: 'Granite Sales',
    description: 'Various grades of high-quality granite for construction, landscaping, and infrastructure projects.',
    icon: <Truck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1518228684305-2e7e20336f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Multiple granite sizes (1/2 inch, 3/4 inch, etc.)', 'Sourced from quality quarries', 'Consistent supply for large projects', 'Color and texture options available', 'Technical specifications provided'],
    link: '/services/granite-sales'
  }, {
    id: 'equipment-rentals',
    title: 'Heavy Equipment Rentals',
    description: 'Rent high-quality Payloaders, Excavators, and other heavy equipment for your construction projects.',
    icon: <Loader className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Well-maintained Payloaders and Excavators', 'Daily, weekly, and monthly rental options', 'Operator services available', 'Delivery to your project site', 'Technical support and maintenance included'],
    link: '/services/equipment-rentals'
  }, {
    id: 'waterfront-leasing',
    title: 'Waterfront Leasing',
    description: 'Prime waterfront locations available for lease for your business operations and logistics needs.',
    icon: <Building className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Strategic waterfront locations', 'Flexible lease terms', 'Suitable for commercial and industrial use', 'Logistics support infrastructure', 'Security and maintenance services'],
    link: '/services/waterfront-leasing'
  }];
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
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions for your construction and development
              projects, from dredging and materials to equipment rentals.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="What We Offer" subtitle="Explore our comprehensive range of services designed to meet all your construction and development needs." center={true} />
          <div className="mt-16 space-y-24">
            {services.map((service, index) => <motion.div key={service.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img src={service.image} alt={service.title} className="rounded-lg shadow-xl w-full h-auto" />
                    <div className="absolute -top-6 -right-6 bg-accent p-4 rounded-full shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h3 className="text-xl font-semibold mb-4">
                    Features & Benefits:
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                  <Link to={service.link} className="inline-flex items-center btn-primary">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Why Choose Our Services" subtitle="We pride ourselves on delivering excellence in every project" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We maintain rigorous quality control processes to ensure all our
                materials and services meet the highest standards for your
                projects.
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
          }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of timelines in construction
                projects and are committed to delivering on time, every time.
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
            delay: 0.3
          }} viewport={{
            once: true
          }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                We offer competitive pricing without compromising on quality,
                ensuring you get the best value for your investment.
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
            delay: 0.4
          }} viewport={{
            once: true
          }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of professionals brings years of industry experience to
                every project, ensuring efficient and effective solutions.
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
            delay: 0.5
          }} viewport={{
            once: true
          }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Environmental Compliance
              </h3>
              <p className="text-gray-600">
                We adhere to all environmental regulations and promote
                sustainable practices in all our operations, particularly in our
                dredging activities.
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
            delay: 0.6
          }} viewport={{
            once: true
          }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is always available to
                address your queries and provide assistance when needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
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
                Ready to Get Started?
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl">
                Contact us today for a free consultation and quote on your
                project needs.
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
          }}>
              <Link to="/contact" className="btn-accent">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};