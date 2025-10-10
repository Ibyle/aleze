import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
export const CtaSection: React.FC = () => {
  return <section className="py-16 bg-secondary">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl">
              Contact us today for a free consultation and quote on your
              dredging, construction materials, or equipment rental needs.
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
            <Link to="/contact" className="btn-accent whitespace-nowrap">
              Get a Quote
            </Link>
            <a href="tel:08180086527" className="btn bg-white text-secondary hover:bg-gray-100 flex items-center justify-center whitespace-nowrap">
              <Phone className="w-4 h-4 mr-2" /> Call Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};