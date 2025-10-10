import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { TestimonialCard } from '../ui/TestimonialCard';
export const TestimonialsSection: React.FC = () => {
  const testimonials = [{
    quote: 'Aleze Global provided exceptional dredging services for our waterfront development project. Their team was professional, efficient, and delivered on schedule.',
    author: 'Michael Johnson',
    role: 'Project Manager',
    company: 'Lagos Development Corp'
  }, {
    quote: "We've been sourcing sharp sand and granite from Aleze Global for years. Their materials are consistently high quality, and their delivery is always reliable.",
    author: 'Sarah Adeyemi',
    role: 'Procurement Director',
    company: 'Buildright Construction'
  }, {
    quote: 'The equipment rentals from Aleze Global saved our project timeline. The machines were well-maintained, and their operators were skilled professionals.',
    author: 'David Okonkwo',
    role: 'Site Supervisor',
    company: 'Horizon Builders'
  }, {
    quote: 'Leasing waterfront property through Aleze Global was a seamless process. Their team was transparent, helpful, and accommodating to our specific needs.',
    author: 'Amina Bello',
    role: 'CEO',
    company: 'Maritime Solutions Ltd'
  }];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return <section className="section-padding bg-primary text-white parallax" style={{
    backgroundImage: "linear-gradient(rgba(30, 95, 140, 0.9), rgba(15, 58, 87, 0.95)), url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
  }}>
      <div className="container-custom">
        <SectionTitle title="What Our Clients Say" subtitle="Hear from the companies and individuals who have experienced our services firsthand." center={true} light={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} company={testimonial.company} index={index} />)}
        </div>
        {/* Mobile Testimonials Slider */}
        {/* Placeholder for slider component */}
        <div className="lg:hidden mt-6">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard quote={testimonial.quote} author={testimonial.author} role={testimonial.role} company={testimonial.company} />
                </div>)}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-accent w-6' : 'bg-white bg-opacity-30'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};