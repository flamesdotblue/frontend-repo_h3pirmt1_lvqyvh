import { Sun, Moon, Linkedin, Mail, Github } from 'lucide-react';

export default function Header({ onToggleTheme, theme }) {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Sagar Chopda
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/sagar-chopda"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </a>
          <a
            href="mailto:sagarchopda.dev@example.com"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="ml-2 inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
          >
            {theme === 'dark' ? (
              <div className="flex items-center gap-2"><Sun className="h-4 w-4" /><span className="hidden sm:inline">Light</span></div>
            ) : (
              <div className="flex items-center gap-2"><Moon className="h-4 w-4" /><span className="hidden sm:inline">Dark</span></div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
