// src/components/ThemeToggle.tsx
'use client'
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme === 'dark' ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);
    
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
      };
  
    return (
      <button
          onClick={toggleTheme}
            className="text-terminal-text dark:text-terminal-text-dark hover:text-terminal-accent dark:hover:text-terminal-accent-dark"
      >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </button>
    );
}