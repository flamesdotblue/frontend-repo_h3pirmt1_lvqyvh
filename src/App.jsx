import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import AboutAndContact from './components/AboutAndContact.jsx';

function App() {
  const [theme, setTheme] = useState('system');

  // Initialize theme with system preference or saved preference
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else {
      setTheme('system');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (mode) => {
      const isDark = mode === 'dark' || (mode === 'system' && media.matches);
      root.classList.toggle('dark', isDark);
    };

    applyTheme(theme);

    const onChange = () => {
      if (theme === 'system') applyTheme('system');
    };

    media.addEventListener?.('change', onChange);
    return () => media.removeEventListener?.('change', onChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark';
      if (next === 'system') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', next);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header onToggleTheme={toggleTheme} theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'} />
      <main>
        <Hero />
        <Projects />
        <AboutAndContact />
      </main>
      <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Sagar Chopda. All rights reserved.</p>
          <a href="https://www.linkedin.com/in/sagar-chopda" target="_blank" rel="noreferrer" className="hover:underline">
            Connect on LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
