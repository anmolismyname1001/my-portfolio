import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <ThemeProvider>
        
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App; 