import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { ContactForm } from '../../components/ui/ContactForm';
import { CheckCircle, ArrowRight } from 'lucide-react';
export const DredgingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              Dredging & Sharp Sand Sales
            </h1>
            <p className="text-xl text-gray-200">
              Professional dredging services and high-quality sharp sand for all
              your construction and landscaping needs.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          }}>
              <SectionTitle title="Professional Dredging Services" subtitle="Expert extraction of high-quality sand for construction projects" />
              <p className="text-gray-600 mb-6">
                Aleze Global offers comprehensive dredging services using
                state-of-the-art equipment and techniques to extract
                high-quality sharp sand from waterways. Our hydraulic dredging
                operations are conducted with precision and care for the
                environment, ensuring minimal disruption to aquatic ecosystems.
              </p>
              <p className="text-gray-600 mb-8">
                We specialize in both small and large-scale dredging projects,
                providing materials for construction, land reclamation, and
                beach nourishment. Our experienced team ensures that all
                dredging operations comply with environmental regulations while
                meeting the specific requirements of your project.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold">Hydraulic Dredging</h4>
                    <p className="text-gray-600">
                      Efficient extraction of sand using powerful hydraulic
                      systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold">Environmental Compliance</h4>
                    <p className="text-gray-600">
                      Operations conducted with strict adherence to
                      environmental regulations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold">Custom Project Planning</h4>
                    <p className="text-gray-600">
                      Tailored dredging solutions based on your specific project
                      requirements
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
          }} className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <video autoPlay muted loop playsInline className="w-full h-auto" poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
                  <source src="https://videos.pexels.com/video-files/2078890/dredging/sd/preview/free-video-2078890.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Sharp Sand Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sharp sand for construction" className="rounded-lg shadow-md h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1518228684305-2e7e20336f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sharp sand pile" className="rounded-lg shadow-md h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1573904600697-31b48238a068?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Construction with sharp sand" className="rounded-lg shadow-md h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sand delivery" className="rounded-lg shadow-md h-48 w-full object-cover" />
              </div>
            </motion.div>
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
              <SectionTitle title="Premium Sharp Sand" subtitle="High-quality materials for superior construction results" />
              <p className="text-gray-600 mb-6">
                Our sharp sand is carefully extracted and processed to ensure
                the highest quality for your construction and landscaping
                projects. The angular particles of our sharp sand provide
                excellent binding properties, making it ideal for concrete
                mixing, mortar preparation, and other construction applications.
              </p>
              <p className="text-gray-600 mb-8">
                We offer different grades of sharp sand to meet specific project
                requirements, from fine sand for detailed work to coarser
                varieties for general construction. All our sand is thoroughly
                washed and screened to remove impurities, ensuring a clean
                product that meets industry standards.
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Available Sand Types:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary">
                    Fine Sharp Sand
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ideal for fine concrete work, rendering, and detailed
                    masonry
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary">
                    Medium Sharp Sand
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Perfect for general concrete mixing and most construction
                    applications
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary">
                    Coarse Sharp Sand
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Suitable for heavy-duty concrete work and foundations
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary">
                    Washed Sharp Sand
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cleaned and screened for projects requiring higher purity
                  </p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <SectionTitle title="Why Choose Our Dredging & Sand Services" subtitle="The advantages that set us apart from the competition" center={true} light={true} />
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
          }} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-200">
                Our sand undergoes rigorous quality control to ensure it meets
                the highest standards for construction materials, resulting in
                stronger, more durable structures.
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
          }} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-200">
                We understand the importance of schedules in construction
                projects and ensure prompt delivery of materials to keep your
                project on track.
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
          }} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Environmental Responsibility
              </h3>
              <p className="text-gray-200">
                Our dredging operations follow strict environmental guidelines
                to minimize impact on aquatic ecosystems and surrounding areas.
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
          }} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-200">
                Our skilled professionals bring years of expertise to every
                project, ensuring efficient and effective dredging operations.
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
          }} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-200">
                We offer fair and transparent pricing for our dredging services
                and sand products, ensuring excellent value for your investment.
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
          }} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Customized Solutions
              </h3>
              <p className="text-gray-200">
                We tailor our services to meet your specific project
                requirements, providing the exact type and quantity of sand
                needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Applications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Applications of Our Sharp Sand" subtitle="Versatile materials for various construction and landscaping needs" center={true} />
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Concrete Production
              </h3>
              <p className="text-gray-600">
                Our sharp sand is an essential component in concrete mixing,
                providing the necessary structure and strength for foundations,
                slabs, and other concrete elements.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Masonry Work</h3>
              <p className="text-gray-600">
                Used in mortar mixes for bricklaying, block laying, and stone
                masonry, our sharp sand ensures strong bonds between building
                elements.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Landscaping</h3>
              <p className="text-gray-600">
                Ideal for creating drainage systems, paving bases, and as a
                component in artificial soil mixes for landscaping projects.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Road Construction</h3>
              <p className="text-gray-600">
                Used in road base layers and asphalt mixes, our sand contributes
                to durable and stable road surfaces with proper drainage.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Rendering & Plastering
              </h3>
              <p className="text-gray-600">
                Our finer grades of sharp sand are perfect for rendering and
                plastering work, creating smooth and durable wall finishes.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Land Reclamation</h3>
              <p className="text-gray-600">
                Our dredged sand is used in land reclamation projects to create
                new usable land from waterlogged or submerged areas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          }}>
              <SectionTitle title="Request a Quote" subtitle="Contact us for pricing and availability of our dredging services and sharp sand" />
              <p className="text-gray-600 mb-8">
                Whether you need dredging services for a waterfront project or
                high-quality sharp sand for your construction work, our team is
                ready to assist you. Fill out the form to request a quote or
                discuss your specific requirements.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">
                        <a href="tel:08180086527" className="hover:text-primary transition-colors">
                          08180086527
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:08061205706" className="hover:text-primary transition-colors">
                          08061205706
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">
                        <a href="mailto:alezeglobalconcept56@gmail.com" className="hover:text-primary transition-colors break-all">
                          alezeglobalconcept56@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
          }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle title="Related Services" subtitle="Explore our other construction material services" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
          }} className="bg-gray-50 rounded-lg overflow-hidden shadow-md group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518228684305-2e7e20336f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Granite Sales" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Granite Sales</h3>
                <p className="text-gray-600 mb-4">
                  Various grades of high-quality granite for construction,
                  landscaping, and infrastructure projects.
                </p>
                <Link to="/services/granite-sales" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Learn More{' '}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
                </Link>
              </div>
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
          }} className="bg-gray-50 rounded-lg overflow-hidden shadow-md group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Equipment Rentals" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Equipment Rentals
                </h3>
                <p className="text-gray-600 mb-4">
                  Rent high-quality Payloaders, Excavators, and other heavy
                  equipment for your construction projects.
                </p>
                <Link to="/services/equipment-rentals" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Learn More{' '}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
                </Link>
              </div>
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
          }} className="bg-gray-50 rounded-lg overflow-hidden shadow-md group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Waterfront Leasing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Waterfront Leasing
                </h3>
                <p className="text-gray-600 mb-4">
                  Prime waterfront locations available for lease for your
                  business operations and logistics needs.
                </p>
                <Link to="/services/waterfront-leasing" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Learn More{' '}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};