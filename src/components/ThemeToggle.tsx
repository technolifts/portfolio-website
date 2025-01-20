// src/components/ThemeToggle.tsx
'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      setMounted(true);
    }, []);

  if (!mounted) {
        return null;
  }

  const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        >
        {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-gray-400 hover:text-gray-100 transition-colors"/>
            ) : (
                <MoonIcon className="h-5 w-5 text-gray-400 hover:text-gray-100 transition-colors"/>
            )}
        </button>
    );
}