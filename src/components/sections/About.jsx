import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className={`
          text-3xl font-bold mb-8 text-center
          ${darkMode ? 'text-white' : 'text-gray-900'}
        `}>
          About Me
        </h2>

        {/* Main Content */}
        <div className={`
          prose max-w-none
          ${darkMode ? 'prose-invert' : ''}
        `}>
          <p className="text-lg leading-relaxed mb-6">
            I am a passionate developer with expertise in building modern web applications.
            My focus is on creating clean, efficient, and user-friendly solutions that solve
            real-world problems.
          </p>

          {/* Key Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className={`
              p-6 rounded-lg
              ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}
            `}>
              <h3 className="font-semibold mb-4">Professional Focus</h3>
              <ul className="space-y-2">
                <li>Frontend Development</li>
                <li>React & Next.js</li>
                <li>UI/UX Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className={`
              p-6 rounded-lg
              ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}
            `}>
              <h3 className="font-semibold mb-4">Current Goals</h3>
              <ul className="space-y-2">
                <li>Exploring AI Integration</li>
                <li>Cloud Architecture</li>
                <li>Mobile Development</li>
                <li>Open Source Contribution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
