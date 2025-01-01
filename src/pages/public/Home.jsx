import React from 'react';
import Hero from '../../components/sections/Hero';
import About from '../../components/sections/About';
import Experience from '../../components/sections/Experience';
import Education from '../../components/sections/Education';
import Skills from '../../components/sections/Skills';
import Projects from '../../components/sections/Projects';
import Contact from '../../components/sections/Contact';
import DownloadCV from '../../components/common/DownloadCV';

const Home = () => {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section with Profile */}
      <Hero />

      {/* Download CV Button - Fixed Position */}
      <div className="fixed bottom-8 right-8 z-50">
        <DownloadCV />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home; 