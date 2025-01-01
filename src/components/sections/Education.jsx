import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const { darkMode } = useTheme();

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      school: 'Your University Name',
      duration: '2019 - 2023',
      location: 'City, Country',
      achievements: [
        'Graduated with First Class Honours',
        'Specialized in Web Technologies',
        'Led student tech community'
      ]
    },
    // Add more education entries if needed
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
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className={`
                p-6 rounded-lg
                ${darkMode ? 'bg-gray-800' : 'bg-white'}
                shadow-soft
              `}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className={`
                  p-2 rounded-lg
                  ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}
                `}>
                  <AcademicCapIcon className="w-6 h-6 text-primary-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`
                    text-xl font-semibold mb-1
                    ${darkMode ? 'text-white' : 'text-gray-900'}
                  `}>
                    {edu.degree} in {edu.field}
                  </h3>
                  
                  <p className={`
                    text-base mb-2
                    ${darkMode ? 'text-gray-300' : 'text-gray-600'}
                  `}>
                    {edu.school}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`
                      text-sm
                      ${darkMode ? 'text-gray-400' : 'text-gray-500'}
                    `}>
                      {edu.duration}
                    </span>
                    <span className={`
                      text-sm
                      ${darkMode ? 'text-gray-400' : 'text-gray-500'}
                    `}>
                      {edu.location}
                    </span>
                  </div>

                  <ul className="list-disc list-inside space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education; 