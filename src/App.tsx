import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Credentials from './components/sections/Credentials';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ThemeToggle from './components/ui/ThemeToggle';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check user preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App min-h-screen bg-secondary-light dark:bg-dark-dark text-dark-dark dark:text-secondary-light transition-colors duration-300">
      <CustomCursor />
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </motion.main>

      <footer className="py-6 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} | Designed & Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
