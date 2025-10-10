import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../ui/ServiceCard';
import { Anchor, Truck, Building, Loader } from 'lucide-react';
export const ServicesSection: React.FC = () => {
  const services = [{
    title: 'Dredging & Sharp Sand',
    description: 'Professional dredging services and high-quality sharp sand for construction projects.',
    icon: <Anchor className="w-6 h-6" />,
    link: '/services/dredging-sharp-sand'
  }, {
    title: 'Granite Sales',
    description: 'Various grades of granite for construction, landscaping, and infrastructure projects.',
    icon: <Truck className="w-6 h-6" />,
    link: '/services/granite-sales'
  }, {
    title: 'Equipment Rentals',
    description: 'Payloader, excavator, and other heavy equipment rentals for construction projects.',
    icon: <Loader className="w-6 h-6" />,
    link: '/services/equipment-rentals'
  }, {
    title: 'Waterfront Leasing',
    description: 'Prime waterfront locations for commercial and industrial use with flexible terms.',
    icon: <Building className="w-6 h-6" />,
    link: '/services/waterfront-leasing'
  }];
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="Our Services" subtitle="We provide comprehensive solutions for construction and development projects." center={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} index={index} />)}
        </div>
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
      }} className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>;
};