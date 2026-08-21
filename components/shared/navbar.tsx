'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/theme-provider';

export function Navbar() {
  const { actualTheme, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl transition-colors duration-200 shadow-xs dark:shadow-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all">
              <span className="font-extrabold text-white text-base">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Project<span className="text-blue-600 dark:text-blue-400">Hub</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center gap-2 rounded-xl p-2.5 text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-700/60 shadow-xs"
              aria-label={`Current theme: ${theme}. Click to switch theme.`}
              title={`Theme: ${theme} (Click to toggle)`}
            >
              {actualTheme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300 rotate-0 scale-100" />
              )}
              {theme === 'system' && (
                <span className="flex items-center text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300">
                  SYS
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
