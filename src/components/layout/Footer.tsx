import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary-dark text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
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
        }} className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold">
                <span className="text-accent">Aleze</span> Global
              </h2>
            </Link>
            <p className="text-gray-300 text-sm">
              Leading provider of dredging services, sharp sand, granite, heavy
              equipment rentals, and waterfront leasing in Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
          {/* Quick Links */}
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
        }} className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-primary pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* Services */}
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
        }} className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-primary pb-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/dredging-sharp-sand" className="text-gray-300 hover:text-accent transition-colors">
                  Dredging & Sharp Sand Sales
                </Link>
              </li>
              <li>
                <Link to="/services/granite-sales" className="text-gray-300 hover:text-accent transition-colors">
                  Granite Sales
                </Link>
              </li>
              <li>
                <Link to="/services/equipment-rentals" className="text-gray-300 hover:text-accent transition-colors">
                  Heavy Equipment Rentals
                </Link>
              </li>
              <li>
                <Link to="/services/waterfront-leasing" className="text-gray-300 hover:text-accent transition-colors">
                  Waterfront Leasing
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* Contact Info */}
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
        }} className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-primary pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-3 mt-1 text-accent" />
                <div>
                  <p className="text-gray-300">08180086527</p>
                  <p className="text-gray-300">08061205706</p>
                </div>
              </li>
              <li className="flex items-start">
                <MailIcon className="w-5 h-5 mr-3 mt-1 text-accent" />
                <p className="text-gray-300 break-all">
                  alezeglobalconcept56@gmail.com
                </p>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 text-accent" />
                <p className="text-gray-300">Lagos, Nigeria</p>
              </li>
            </ul>
            <div>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Business Hours:</span>
                <br />
                Monday-Friday: 8AM-5PM
              </p>
            </div>
          </motion.div>
        </div>
        {/* Bottom Footer */}
        <div className="border-t border-primary mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Aleze Global. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};