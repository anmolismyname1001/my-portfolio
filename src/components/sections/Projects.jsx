import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const Projects = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'Brief description of the project and its key features.',
      image: '/path-to-project-image.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/username/project1',
    },
    // Add more projects here
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'other', name: 'Other' },
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' ? true : project.category === selectedCategory
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`
          text-3xl font-bold mb-12 text-center
          ${darkMode ? 'text-white' : 'text-gray-900'}
        `}>
          Featured Projects
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-full transition-all duration-200
                ${selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : darkMode
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`
                rounded-lg overflow-hidden
                ${darkMode ? 'bg-gray-800' : 'bg-white'}
                shadow-soft
              `}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`
                  text-xl font-semibold mb-2
                  ${darkMode ? 'text-white' : 'text-gray-900'}
                `}>
                  {project.title}
                </h3>
                
                <p className={`
                  mb-4 text-sm
                  ${darkMode ? 'text-gray-300' : 'text-gray-600'}
                `}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`
                        px-2 py-1 text-xs rounded-full
                        ${darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-600'
                        }
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center space-x-2 text-sm
                        ${darkMode ? 'text-primary-400' : 'text-primary-600'}
                        hover:underline
                      `}
                    >
                      <GlobeAltIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center space-x-2 text-sm
                        ${darkMode ? 'text-primary-400' : 'text-primary-600'}
                        hover:underline
                      `}
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      <span>Source Code</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 