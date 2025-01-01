import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const DownloadCV = () => {
  const { darkMode } = useTheme();

  const handleDownload = () => {
    // Replace with your CV file path
    const cvPath = '/path-to-your-cv.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'YourName-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`
        group flex items-center space-x-2 px-4 py-2 rounded-lg
        ${darkMode 
          ? 'bg-primary-500 hover:bg-primary-600' 
          : 'bg-primary-500 hover:bg-primary-600'
        }
        text-white transition-all duration-200
        shadow-lg hover:shadow-xl
        transform hover:scale-105
      `}
    >
      <ArrowDownTrayIcon className="w-5 h-5" />
      <span>Download CV</span>
    </button>
  );
};

export default DownloadCV; 