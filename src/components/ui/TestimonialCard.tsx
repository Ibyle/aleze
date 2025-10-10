import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  index?: number;
}
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  index = 0
}) => {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.95
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} className="bg-white shadow-lg rounded-lg p-6 relative">
      <div className="text-accent opacity-20 absolute top-4 left-4">
        <Quote size={40} />
      </div>
      <div className="pt-6">
        <p className="text-gray-700 italic mb-6 relative z-10">{quote}</p>
        <div className="border-t border-gray-200 pt-4">
          <p className="font-semibold text-neutral-dark">{author}</p>
          <p className="text-gray-600 text-sm">
            {role}
            {company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </motion.div>;
};