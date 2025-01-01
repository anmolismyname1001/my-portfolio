import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { darkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Figma', level: 70 }
      ]
    }
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
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`
                p-6 rounded-lg
                ${darkMode ? 'bg-gray-800' : 'bg-white'}
                shadow-soft
              `}
            >
              <h3 className={`
                text-xl font-semibold mb-6
                ${darkMode ? 'text-white' : 'text-gray-900'}
              `}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {skill.name}
                      </span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`
                      h-2 rounded-full
                      ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
                    `}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 