import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Screenshots from './components/Screenshots';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Update HTML class for Tailwind dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1100px] flex-1">
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main className="w-full">
              <Hero />
              <Features />
              <Benefits />
              <Screenshots />
              <CallToAction />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;