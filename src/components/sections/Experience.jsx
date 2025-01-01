import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { darkMode } = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Company Name',
      duration: 'Jan 2022 - Present',
      description: 'Led the development of modern web applications using React and Next.js.',
      responsibilities: [
        'Architected and implemented scalable frontend solutions',
        'Mentored junior developers and conducted code reviews',
        'Optimized application performance and user experience',
        'Collaborated with design and backend teams'
      ]
    },
    // Add more experiences here
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`
          text-3xl font-bold mb-12 text-center
          ${darkMode ? 'text-white' : 'text-gray-900'}
        `}>
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className={`
                p-6 rounded-lg cursor-pointer
                ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
                transition-all duration-200 shadow-soft
              `}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`
                    text-xl font-semibold mb-1
                    ${darkMode ? 'text-white' : 'text-gray-900'}
                  `}>
                    {exp.role}
                  </h3>
                  <p className={`
                    text-base
                    ${darkMode ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {exp.company}
                  </p>
                </div>
                <span className={`
                  text-sm
                  ${darkMode ? 'text-gray-400' : 'text-gray-500'}
                `}>
                  {exp.duration}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expandedId === exp.id ? 'auto' : 0 }}
                className="overflow-hidden mt-4"
              >
                <p className="mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 