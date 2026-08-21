export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold text-slate-900 dark:text-white text-lg">ProjectHub</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Discover and learn from real-world IT projects across multiple technologies.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Categories</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  AI & ML
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800/80 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} ProjectHub. All rights reserved. Built for developers.</p>
        </div>
      </div>
    </footer>
  );
}
