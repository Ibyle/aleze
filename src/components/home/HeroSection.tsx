import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const HeroSection: React.FC = () => {
  return <section className="relative h-screen bg-hero-pattern bg-cover bg-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/2078890/dredging/sd/preview/free-video-2078890.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      {/* Hero Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center items-start">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Expert Dredging & Construction Materials Provider
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl">
            Aleze Global is a leading provider of dredging services, sharp sand,
            granite, heavy equipment rentals, and waterfront leasing in Nigeria.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/contact" className="btn-accent">
                Get a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Scroll Down Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      opacity: {
        delay: 1.5,
        duration: 1
      },
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut'
      }
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>;
};