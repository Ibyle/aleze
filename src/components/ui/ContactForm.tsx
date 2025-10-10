import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
      {submitStatus === 'success' && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          Thank you for your message! We'll get back to you shortly.
        </motion.div>}
      {submitStatus === 'error' && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          There was an error sending your message. Please try again later.
        </motion.div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Full Name *
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Your name" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email *
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Your phone number" />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-gray-700 mb-2">
            Service Interested In
          </label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
            <option value="">Select a service</option>
            <option value="dredging">Dredging Services</option>
            <option value="sharp-sand">Sharp Sand Sales</option>
            <option value="granite">Granite Sales</option>
            <option value="equipment">Equipment Rentals</option>
            <option value="waterfront">Waterfront Leasing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message *
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
        </div>
        <div>
          <motion.button type="submit" disabled={isSubmitting} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {isSubmitting ? <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </> : <>
                Send Message <Send className="ml-2 w-4 h-4" />
              </>}
          </motion.button>
        </div>
      </form>
    </motion.div>;
};