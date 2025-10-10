import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { CheckCircle, ArrowRight } from 'lucide-react';
export const AboutSection: React.FC = () => {
  const features = ['Professional dredging services', 'Quality construction materials', 'Heavy equipment rentals', 'Waterfront property leasing', 'Expert project management', 'Environmental compliance'];
  return <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }} className="order-2 lg:order-1">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Dredging operation with excavator" className="rounded-lg shadow-xl w-full h-auto" />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-semibold text-xl">15+ Years</p>
                <p className="text-white">Industry Experience</p>
              </div>
            </div>
          </motion.div>
          {/* Content Column */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }} className="order-1 lg:order-2">
            <SectionTitle title="About Aleze Global" subtitle="We are committed to excellence in dredging, construction materials supply, and equipment rentals." />
            <p className="mb-6 text-gray-600">
              Aleze Global is a trusted name in Nigeria's construction and
              dredging industry. We specialize in providing high-quality sharp
              sand, granite, and professional dredging services to meet the
              needs of construction firms, developers, and contractors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex items-center">
                  <CheckCircle className="text-primary mr-2 w-5 h-5" />
                  <span>{feature}</span>
                </motion.div>)}
            </div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/about" className="btn-primary">
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};