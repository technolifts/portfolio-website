// src/components/Footer.tsx
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">About</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Security & Software Engineer passionate about building secure,
              scalable solutions and sharing knowledge with the community.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> $myFirstName.acarroll@yahoo.com
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Projects', 'Experience', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent"
              >
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent"
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Ryan Carroll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
