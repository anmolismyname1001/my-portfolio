import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon as EmailIcon,
} from '@heroicons/react/24/outline';
import {
  GithubIcon as GitHubIcon,
  LinkedinIcon as LinkedInIcon,
  TwitterIcon,
} from 'lucide-react';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section className="relative h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`
              text-4xl md:text-6xl font-bold mb-4
              ${darkMode ? 'text-white' : 'text-gray-900'}
            `}>
              Anmol
            </h1>
            <h2 className={`
              text-xl md:text-2xl mb-6
              ${darkMode ? 'text-gray-300' : 'text-gray-600'}
            `}>
              Anmol Sharma / Student
            </h2>
            <p className={`
              text-lg mb-8 max-w-2xl
              ${darkMode ? 'text-gray-400' : 'text-gray-500'}
            `}>
              A brief introduction about yourself and what you do.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-full transition-colors duration-200
                    ${darkMode 
                      ? 'hover:bg-gray-800 text-gray-300' 
                      : 'hover:bg-gray-100 text-gray-600'
                    }
                  `}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className={`
              relative w-64 h-64 mx-auto overflow-hidden rounded-full
              border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}
            `}>
              <img
                src="https://ucarecdn.com/0457a12f-e78f-4e72-98a4-0220d263eb65/Professor.jpg"
                alt="Anmol Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: <GitHubIcon className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: <LinkedInIcon className="w-6 h-6" />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: <TwitterIcon className="w-6 h-6" />,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: <EmailIcon className="w-6 h-6" />,
  },
];

export default Hero; 