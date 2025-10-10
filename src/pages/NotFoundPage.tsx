import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
export const NotFoundPage: React.FC = () => {
  return <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-20">
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.5
    }} className="text-center max-w-lg">
        <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center justify-center">
            <Home className="mr-2 w-4 h-4" /> Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline flex items-center justify-center">
            <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
          </button>
        </div>
      </motion.div>
    </div>;
};