import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index?: number;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  index = 0
}) => {
  return <motion.div initial={{
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
  }} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={link} className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors">
          Learn More <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>;
};