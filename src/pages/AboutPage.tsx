import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [{
    title: 'Quality',
    description: 'We deliver only the highest quality materials and services to ensure customer satisfaction and project success.'
  }, {
    title: 'Reliability',
    description: 'We honor our commitments and ensure timely delivery of materials and completion of projects.'
  }, {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings.'
  }, {
    title: 'Environmental Responsibility',
    description: 'We prioritize sustainable practices and compliance with environmental regulations in all our operations.'
  }];
  const team = [{
    name: 'Eze Ikechukwu',
    position: 'Chief Executive Officer',
    image: 'https://randomuser.me/api/portraits/men/32jpg',
    description: 'With over 15 years of experience in the dredging and construction industry, Oluwaseun leads our team with vision and expertise.'
  }, {
    name: 'Chioma Nwosu',
    position: 'Operations Director',
    image: 'https://randomuser.me/api/portraits/women/44jpg',
    description: 'Chioma ensures the smooth operation of our dredging and material supply services with efficiency and attention to detail.'
  }, {
    name: 'Emmanuel Okonkwo',
    position: 'Technical Director',
    image: 'https://randomuser.me/api/portraits/men/67jpg',
    description: 'Emmanuel oversees the technical aspects of our operations, ensuring we employ the best practices and technologies.'
  }, {
    name: 'Amina Ibrahim',
    position: 'Business Development Manager',
    image: 'https://randomuser.me/api/portraits/women/68.pg',
    description: 'Amina leads our business development efforts, building strong relationships with clients and identifying new opportunities.'
  }];
  const milestones = [{
    year: '2010',
    title: 'Company Foundation',
    description: 'Aleze Global was established with a focus on dredging and construction material supply.'
  }, {
    year: '2013',
    title: 'Expansion of Services',
    description: 'Added granite sales and expanded our dredging operations to meet growing demand.'
  }, {
    year: '2016',
    title: 'Equipment Fleet Acquisition',
    description: 'Invested in heavy equipment including Payloaders and Excavators to enhance our capabilities.'
  }, {
    year: '2019',
    title: 'Waterfront Property Acquisition',
    description: 'Acquired prime waterfront locations to offer leasing services to businesses.'
  }, {
    year: '2022',
    title: 'Sustainability Initiative',
    description: 'Implemented environmentally friendly practices across all our operations.'
  }];
  return <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-about-pattern bg-cover bg-center">
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
              About Aleze Global
            </h1>
            <p className="text-xl text-gray-200">
              Learn about our history, our values, and the team behind our
              success in the dredging and construction materials industry.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Our Story Section */}
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
              <SectionTitle title="Our Story" subtitle="From humble beginnings to becoming a leading provider in the industry" />
              <p className="text-gray-600 mb-6">
                Founded in 2010, Aleze Global started as a small dredging
                operation with a vision to provide high-quality construction
                materials to the Nigerian market. Our founder recognized the
                growing demand for reliable dredging services and quality
                construction materials in the rapidly developing Nigerian
                construction sector.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have grown our operations to include sharp
                sand sales, granite supply, heavy equipment rentals, and
                waterfront leasing. Through dedication to quality, reliability,
                and customer satisfaction, we have built a reputation as a
                trusted partner for construction firms and developers across
                Nigeria.
              </p>
              <p className="text-gray-600">
                Today, Aleze Global continues to expand its operations while
                maintaining its commitment to excellence, environmental
                responsibility, and sustainable practices in all aspects of our
                business.
              </p>
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
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Dredging operations at Aleze Global" className="rounded-lg shadow-xl w-full h-auto" />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-semibold text-xl">15+ Years</p>
                <p className="text-white">Combined Industry Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Our Values" subtitle="The principles that guide our business and relationships" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => <motion.div key={index} initial={{
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
          }} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Leadership Team" subtitle="Meet the experts behind Aleze Global's success" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => <motion.div key={index} initial={{
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
          }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Milestones Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Our Milestones" subtitle="Key moments in our journey of growth and excellence" center={true} />
          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary transform md:translate-x-[-50%] hidden md:block"></div>
            {/* Timeline Items */}
            {milestones.map((milestone, index) => <motion.div key={index} initial={{
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
          }} className={`flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-end md:pr-12">
                  <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center mb-3">
                      <Clock className={`text-primary w-5 h-5 ${index % 2 === 0 ? 'md:order-2 md:ml-3' : 'mr-3'}`} />
                      <h3 className="text-2xl font-bold text-primary">
                        {milestone.year}
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white transform translate-x-[-10px] md:translate-x-[-50%]" style={{
              top: `calc(${index * 100 / milestones.length}% + 24px)`
            }}></div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Certifications" subtitle="We adhere to industry standards and best practices" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Certified for Quality Management Systems, ensuring consistent
                quality in our services and products.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ISO 14001:2015</h3>
              <p className="text-gray-600">
                Environmental Management System certification, demonstrating our
                commitment to sustainable operations.
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
          }} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Nigerian Environmental Standards
              </h3>
              <p className="text-gray-600">
                Compliant with all Nigerian environmental regulations for
                dredging and construction activities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
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
                Ready to Work With Us?
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl">
                Contact our team today to discuss how we can support your
                construction and development projects.
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
                Contact Us Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};