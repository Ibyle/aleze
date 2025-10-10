import React, { useEffect, useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PhoneIcon, MailIcon, MapPinIcon, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { ContactForm } from '../components/ui/ContactForm';
export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const faqs = [{
    question: 'What areas do you serve?',
    answer: 'We primarily serve Lagos and surrounding areas in Nigeria. For specific inquiries about service availability in your location, please contact our team.'
  }, {
    question: 'How can I get a quote for your services?',
    answer: 'You can request a quote by filling out our contact form, calling us directly at 08180086527, or sending an email to alezeglobalconcept56@gmail.com. Please provide details about your project requirements for an accurate quote.'
  }, {
    question: 'Do you deliver materials to construction sites?',
    answer: 'Yes, we provide delivery services for all our materials including sand and granite. Delivery charges may apply depending on the location and quantity of materials.'
  }, {
    question: 'What types of sand do you supply?',
    answer: 'We supply various types of sharp sand suitable for different construction needs, including fine and coarse grades. Our sand is sourced through our professional dredging operations.'
  }, {
    question: 'How can I rent equipment from Aleze Global?',
    answer: 'You can rent our equipment by contacting us directly through phone or email, or by filling out the inquiry form on our website. We offer flexible rental terms for our Payloaders and Excavators.'
  }, {
    question: 'What are your payment terms?',
    answer: 'We accept various payment methods including bank transfers and cash. For large orders, we may require a deposit upfront. Please contact us for detailed payment terms.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team for inquiries, quotes, or to discuss
              how we can support your project needs.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
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
          }} className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-neutral-dark mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneIcon className="text-primary w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-neutral-dark">Phone</h3>
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
                    <MailIcon className="text-primary w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-neutral-dark">Email</h3>
                      <p className="text-gray-600 break-all">
                        <a href="mailto:alezeglobalconcept56@gmail.com" className="hover:text-primary transition-colors">
                          alezeglobalconcept56@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="text-primary w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-neutral-dark">
                        Address
                      </h3>
                      <p className="text-gray-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-primary w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-neutral-dark">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold text-neutral-dark mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
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
          }} className="lg:col-span-2">
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Our Location" subtitle="Find us on the map" center={true} />
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }} className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46044!2d3.119151!3d6.548377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1655987614548!5m2!1sen!2sus" width="100%" height="450" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Aleze Global Location"></iframe>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Frequently Asked Questions" subtitle="Find answers to common questions about our services" center={true} />
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => <motion.div key={index} initial={{
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
          }} className="mb-4">
                <button onClick={() => toggleFaq(index)} className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors ${openFaq === index ? 'bg-primary text-white' : 'bg-gray-50 hover:bg-gray-100'}`}>
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaq === index && <motion.div initial={{
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
            }} className="bg-white p-4 border border-gray-200 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
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
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Quick Response?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Call us directly for immediate assistance with your dredging,
              construction materials, or equipment rental needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:08180086527" className="btn-accent flex items-center justify-center">
                <PhoneIcon className="mr-2 w-5 h-5" /> Call 08180086527
              </a>
              <a href="mailto:alezeglobalconcept56@gmail.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center justify-center">
                <MailIcon className="mr-2 w-5 h-5" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};