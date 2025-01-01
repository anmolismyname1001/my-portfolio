import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      // Example: await submitForm(formData);
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FaTwitter className="w-6 h-6" />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`
          text-3xl font-bold mb-12 text-center
          ${darkMode ? 'text-white' : 'text-gray-900'}
        `}>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`
              p-6 rounded-lg
              ${darkMode ? 'bg-gray-800' : 'bg-white'}
              shadow-soft
            `}>
              <h3 className={`
                text-xl font-semibold mb-6
                ${darkMode ? 'text-white' : 'text-gray-900'}
              `}>
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary-500" />
                  <a 
                    href="mailto:your.email@example.com"
                    className={`
                      hover:text-primary-500 transition-colors
                      ${darkMode ? 'text-gray-300' : 'text-gray-600'}
                    `}
                  >
                    your.email@example.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-primary-500" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    +1 (234) 567-8900
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-primary-500" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    City, Country
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className={`
                  text-sm font-semibold mb-4
                  ${darkMode ? 'text-gray-400' : 'text-gray-500'}
                `}>
                  FOLLOW ME
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        p-2 rounded-full transition-colors
                        ${darkMode 
                          ? 'hover:bg-gray-700 text-gray-300' 
                          : 'hover:bg-gray-100 text-gray-600'
                        }
                      `}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`
            p-6 rounded-lg
            ${darkMode ? 'bg-gray-800' : 'bg-white'}
            shadow-soft
          `}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className={`
                    block text-sm font-medium mb-2
                    ${darkMode ? 'text-gray-300' : 'text-gray-700'}
                  `}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-4 py-2 rounded-lg
                    ${darkMode 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-white text-gray-900 border-gray-300'
                    }
                    border focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  `}
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className={`
                    block text-sm font-medium mb-2
                    ${darkMode ? 'text-gray-300' : 'text-gray-700'}
                  `}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-4 py-2 rounded-lg
                    ${darkMode 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-white text-gray-900 border-gray-300'
                    }
                    border focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  `}
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className={`
                    block text-sm font-medium mb-2
                    ${darkMode ? 'text-gray-300' : 'text-gray-700'}
                  `}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`
                    w-full px-4 py-2 rounded-lg
                    ${darkMode 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-white text-gray-900 border-gray-300'
                    }
                    border focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  `}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-2 px-4 rounded-lg
                  bg-primary-500 text-white
                  hover:bg-primary-600
                  transition-colors duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 