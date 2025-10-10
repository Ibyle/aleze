import React from 'react';
import { motion } from 'framer-motion';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false
}) => {
  const textAlign = center ? 'text-center' : 'text-left';
  const textColor = light ? 'text-white' : 'text-neutral-dark';
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-600';
  return <div className={`mb-12 ${textAlign}`}>
      <motion.h2 initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} viewport={{
      once: true
    }} className={`${textColor} font-bold relative inline-block`}>
        {title}
        <span className="absolute -bottom-3 left-0 w-20 h-1 bg-accent"></span>
      </motion.h2>
      {subtitle && <motion.p initial={{
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
    }} className={`mt-6 ${subtitleColor} max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </motion.p>}
    </div>;
};