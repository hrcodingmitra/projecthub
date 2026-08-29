'use client';

import { useCallback, useState } from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SearchInput } from '@/features/search/components/search-input';
import { ProjectCard } from '@/features/catalog/components/project-card';
import { FiltersSidebar } from '@/features/catalog/components/filters-sidebar';
import { useProjectFilters } from '@/features/catalog/hooks/use-project-filters';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CatalogPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    selectedCategories,
    toggleCategory,
    selectedTechnologies,
    toggleTechnology,
    selectedDifficulties,
    toggleDifficulty,
    selectedTypes,
    toggleType,
    sortBy,
    setSortBy,
    filteredProjects,
    clearAllFilters,
    hasActiveFilters,
  } = useProjectFilters();

  const toggleFilters = useCallback(() => {
    setFiltersOpen((prev) => !prev);
  }, []);

  const handleClearFilters = useCallback(() => {
    clearAllFilters();
    setFiltersOpen(false);
  }, [clearAllFilters]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 lg:py-24 overflow-hidden transition-colors duration-200">
          {/* Background accent */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                Discover Real-World{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  IT Projects
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Explore and learn from comprehensive project examples across multiple technologies. Perfect for students and developers to build practical skills.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  40+ Featured Projects
                </span>
                <span className="flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1.5 text-orange-700 dark:text-orange-300 border border-orange-500/20">
                  <span className="h-2 w-2 rounded-full bg-orange-600 dark:bg-orange-400" />
                  10+ Tech Stacks
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Search & Sort Bar */}
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <SearchInput value={searchQuery} onChange={setSearchQuery} />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={toggleFilters}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-4 py-2.5 text-slate-800 dark:text-slate-200 transition-all md:hidden font-medium text-sm shadow-xs"
                >
                  <Menu className="h-4 w-4" />
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-4 py-2.5 text-slate-800 dark:text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium text-sm shadow-xs cursor-pointer"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="popular">Popular</option>
                </select>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-8 md:grid-cols-[260px_1fr] lg:gap-12">
              {/* Desktop Sidebar - Hidden on mobile */}
              <div className="hidden md:block md:sticky md:top-24 md:h-fit">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-sm p-6 shadow-xs dark:shadow-none">
                  <FiltersSidebar
                    isOpen={true}
                    onClose={() => {}}
                    selectedCategories={selectedCategories}
                    onToggleCategory={toggleCategory}
                    selectedTechnologies={selectedTechnologies}
                    onToggleTechnology={toggleTechnology}
                    selectedDifficulties={selectedDifficulties}
                    onToggleDifficulty={toggleDifficulty}
                    selectedTypes={selectedTypes}
                    onToggleType={toggleType}
                    hasActiveFilters={hasActiveFilters}
                    onClearFilters={handleClearFilters}
                  />
                </div>
              </div>

              {/* Projects Grid */}
              <div className="md:col-start-2">
                {filteredProjects.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/40 py-16 px-4 text-center shadow-xs"
                  >
                    <div className="text-5xl mb-4">🔍</div>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-200">No projects found</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Try adjusting your filters or search query
                    </p>
                    {hasActiveFilters && (
                      <button
                        onClick={handleClearFilters}
                        className="mt-6 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors shadow-md shadow-blue-500/20"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </motion.div>
                )}

                {/* Results Count */}
                {filteredProjects.length > 0 && (
                  <div className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
                    Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Filters Drawer */}
            <div className="md:hidden">
              <FiltersSidebar
                isOpen={filtersOpen}
                onClose={() => setFiltersOpen(false)}
                selectedCategories={selectedCategories}
                onToggleCategory={toggleCategory}
                selectedTechnologies={selectedTechnologies}
                onToggleTechnology={toggleTechnology}
                selectedDifficulties={selectedDifficulties}
                onToggleDifficulty={toggleDifficulty}
                selectedTypes={selectedTypes}
                onToggleType={toggleType}
                hasActiveFilters={hasActiveFilters}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
