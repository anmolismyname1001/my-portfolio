import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Anmol dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 