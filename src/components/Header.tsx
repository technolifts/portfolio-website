// src/components//Header.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navigation = [
{ name: 'Home', href: '/' },
{ name: 'Projects', href: '/projects' },
{ name: 'Experience', href: '/experience' },
{ name: 'Blog', href: '/blog' },
];

export default function Header() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const pathname = usePathname();

return (
    <header className="bg-gray-800 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
            <div className="flex lg:flex-1">
            <Link href="/" className="text-xl font-bold text-accent">
                Ryan Carroll
            </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
            </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 text-gray-200 hover:text-accent transition-colors
                    ${pathname === item.href ? 'text-accent' : 'text-gray-200'}`}
                    
                >
                {item.name}
                </Link>
            ))}
            </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
            <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-base font-semibold text-gray-200 hover:bg-gray-700
                        ${pathname === item.href ? 'bg-gray-700 text-accent' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {item.name}
                </Link>
                ))}
            </div>
            </div>
        )}
        </nav>
    </header>
);
}