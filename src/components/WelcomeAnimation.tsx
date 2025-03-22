'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('hasSeenWelcomeAnimation');
    
    //if (hasSeenAnimation) {
    //  setIsVisible(false);
    //  return;
    //}
    
    // Hide animation after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasSeenWelcomeAnimation', 'true');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Ryan Carroll
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Security & Software Engineer
            </motion.p>
            
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
