'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [showPuzzle, setShowPuzzle] = useState(false);
  
  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('hasSeenWelcomeAnimation');
    
    // Keep this section commented out
    //if (hasSeenAnimation) {
    //  setIsVisible(false);
    //  return;
    //}
    
    // Show welcome for 2 seconds, then start puzzle animation
    const welcomeTimer = setTimeout(() => {
      setShowPuzzle(true);
    }, 2000);
    
    // Hide animation after puzzle pieces complete (total 3.5s)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasSeenWelcomeAnimation', 'true');
    }, 2000);
    
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Create a grid of puzzle pieces
  const puzzlePieces = [];
  const gridSize = 8; // More pieces for a smoother effect
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      puzzlePieces.push({ x: i, y: j });
    }
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay that will be revealed as pieces fall away */}
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />
          
          {/* Welcome Text */}
          <motion.div 
            className="text-center absolute z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: showPuzzle ? 0 : 1,
            }}
            transition={{ 
              duration: 0.5,
              opacity: { duration: 0.3 }
            }}
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
          
          {/* Puzzle Pieces - these are covering the page and will fall away */}
          <div className="absolute inset-0">
            {puzzlePieces.map((piece, index) => (
              <motion.div
                key={index}
                className="absolute bg-gray-50 dark:bg-gray-900"
                style={{
                  width: `${100/gridSize}%`,
                  height: `${100/gridSize}%`,
                  top: `${piece.y * (100/gridSize)}%`,
                  left: `${piece.x * (100/gridSize)}%`,
                  border: '1px solid rgba(255,255,255,0.05)',
                  zIndex: 40,
                }}
                initial={{ 
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  y: 0
                }}
                animate={showPuzzle ? { 
                  opacity: 0,
                  scale: Math.random() * 0.5 + 0.5,
                  rotate: Math.random() * 180 - 90,
                  x: (Math.random() * 2000 - 1000),
                  y: 1000 + Math.random() * 500,
                } : {}}
                transition={{ 
                  duration: 1.2,
                  delay: showPuzzle ? 0.2 + (Math.random() * 0.8) : 0,
                  type: "tween",
                  ease: [0.2, 0.8, 0.2, 1]
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
