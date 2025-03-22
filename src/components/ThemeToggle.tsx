// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  // Start with undefined to prevent hydration mismatch
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;
    
    // Check for the user's preferred theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check system preference if no saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    const initialDarkMode = savedTheme 
      ? savedTheme === 'dark'
      : prefersDark;
      
    setIsDarkMode(initialDarkMode);
    
    // Apply the theme to the document
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Add debugging
    console.log('[ThemeToggle] Initial setup:', { 
      savedTheme, 
      prefersDark, 
      initialDarkMode,
      classes: document.documentElement.classList.contains('dark') ? 'has dark' : 'no dark'
    });
  }, []);

  const toggleTheme = () => {
    // Only toggle if isDarkMode is defined
    if (isDarkMode !== undefined) {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
      
      if (newIsDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      // Add debugging
      console.log('[ThemeToggle] Theme toggled:', { 
        newIsDarkMode,
        classes: document.documentElement.classList.contains('dark') ? 'has dark' : 'no dark'
      });
    }
  };

  // Don't render until we know the theme to prevent flash
  if (isDarkMode === undefined) {
    return <div className="p-2 rounded-full bg-transparent"></div>; // Placeholder to maintain layout
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}