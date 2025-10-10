import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, PhoneIcon, MailIcon, X as CloseIcon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const navLinkClass = 'text-white hover:text-accent transition-colors duration-300 px-3 py-2';
  const activeNavLinkClass = 'text-accent animated-underline';
  const headerClass = scrolled ? 'fixed top-0 left-0 w-full bg-primary shadow-md z-50 transition-all duration-300' : 'fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-300';
  return <header className={headerClass}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="text-2xl font-bold text-white">
              <span className="text-accent">Aleze</span> Global
            </motion.div>
          </Link>
          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.a initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} href="tel:08180086527" className="flex items-center text-white hover:text-accent transition-colors duration-300">
              <PhoneIcon className="w-4 h-4 mr-2" />
              <span>08180086527</span>
            </motion.a>
            <motion.a initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} href="mailto:alezeglobalconcept56@gmail.com" className="flex items-center text-white hover:text-accent transition-colors duration-300">
              <MailIcon className="w-4 h-4 mr-2" />
              <span className="truncate max-w-[200px]">
                alezeglobalconcept56@gmail.com
              </span>
            </motion.a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              <Link to="/" className={location.pathname === '/' ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass}>
                Home
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }}>
              <Link to="/about" className={location.pathname === '/about' ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass}>
                About Us
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="relative">
              <button className={`flex items-center ${location.pathname.includes('/services') ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass}`} onClick={toggleServices}>
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: 10
            }} transition={{
              duration: 0.3
            }} className="absolute top-full left-0 bg-primary-dark shadow-lg rounded-md py-2 w-64 z-50">
                  <Link to="/services" className="block px-4 py-2 text-white hover:bg-primary-light hover:text-white transition-colors duration-300">
                    All Services
                  </Link>
                  <Link to="/services/dredging-sharp-sand" className="block px-4 py-2 text-white hover:bg-primary-light hover:text-white transition-colors duration-300">
                    Dredging & Sharp Sand
                  </Link>
                  <Link to="/services/granite-sales" className="block px-4 py-2 text-white hover:bg-primary-light hover:text-white transition-colors duration-300">
                    Granite Sales
                  </Link>
                  <Link to="/services/equipment-rentals" className="block px-4 py-2 text-white hover:bg-primary-light hover:text-white transition-colors duration-300">
                    Equipment Rentals
                  </Link>
                  <Link to="/services/waterfront-leasing" className="block px-4 py-2 text-white hover:bg-primary-light hover:text-white transition-colors duration-300">
                    Waterfront Leasing
                  </Link>
                </motion.div>}
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.7
          }}>
              <Link to="/projects" className={location.pathname === '/projects' ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass}>
                Projects
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }}>
              <Link to="/blog" className={location.pathname === '/blog' ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass}>
                Blog
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.9
          }}>
              <Link to="/contact" className={location.pathname === '/contact' ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass}>
                Contact
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 1
          }} className="ml-4">
              <Link to="/contact" className="btn-accent">
                Get a Quote
              </Link>
            </motion.div>
          </nav>
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="lg:hidden bg-primary-dark overflow-hidden">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className={location.pathname === '/' ? 'text-accent font-medium' : 'text-white'}>
                  Home
                </Link>
                <Link to="/about" className={location.pathname === '/about' ? 'text-accent font-medium' : 'text-white'}>
                  About Us
                </Link>
                <div>
                  <button className="flex items-center justify-between w-full text-left text-white focus:outline-none" onClick={toggleServices}>
                    Services
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.3
                }} className="pl-4 mt-2 space-y-2 overflow-hidden">
                        <Link to="/services" className="block py-1 text-white opacity-80 hover:opacity-100">
                          All Services
                        </Link>
                        <Link to="/services/dredging-sharp-sand" className="block py-1 text-white opacity-80 hover:opacity-100">
                          Dredging & Sharp Sand
                        </Link>
                        <Link to="/services/granite-sales" className="block py-1 text-white opacity-80 hover:opacity-100">
                          Granite Sales
                        </Link>
                        <Link to="/services/equipment-rentals" className="block py-1 text-white opacity-80 hover:opacity-100">
                          Equipment Rentals
                        </Link>
                        <Link to="/services/waterfront-leasing" className="block py-1 text-white opacity-80 hover:opacity-100">
                          Waterfront Leasing
                        </Link>
                      </motion.div>}
                  </AnimatePresence>
                </div>
                <Link to="/projects" className={location.pathname === '/projects' ? 'text-accent font-medium' : 'text-white'}>
                  Projects
                </Link>
                <Link to="/blog" className={location.pathname === '/blog' ? 'text-accent font-medium' : 'text-white'}>
                  Blog
                </Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'text-accent font-medium' : 'text-white'}>
                  Contact
                </Link>
                <div className="pt-4 border-t border-primary-light">
                  <Link to="/contact" className="btn-accent w-full text-center">
                    Get a Quote
                  </Link>
                </div>
                <div className="pt-4 space-y-3">
                  <a href="tel:08180086527" className="flex items-center text-white">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <span>08180086527</span>
                  </a>
                  <a href="tel:08061205706" className="flex items-center text-white">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <span>08061205706</span>
                  </a>
                  <a href="mailto:alezeglobalconcept56@gmail.com" className="flex items-center text-white">
                    <MailIcon className="w-4 h-4 mr-2" />
                    <span className="break-all">
                      alezeglobalconcept56@gmail.com
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};