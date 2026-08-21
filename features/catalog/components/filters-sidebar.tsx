'use client';

import { Category, Difficulty, ProjectType } from '@/types/project';
import { X, Filter, RotateCcw } from 'lucide-react';
import { getUniqueTechnologies } from '@/lib/project-utils';
import { motion } from 'framer-motion';

interface FiltersSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: Category[];
  onToggleCategory: (category: Category) => void;
  selectedTechnologies: string[];
  onToggleTechnology: (technology: string) => void;
  selectedDifficulties: Difficulty[];
  onToggleDifficulty: (difficulty: Difficulty) => void;
  selectedTypes: ProjectType[];
  onToggleType: (type: ProjectType) => void;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop' },
  { value: 'ai-ml', label: 'AI & ML' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'iot', label: 'IoT' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
];

const difficulties: { value: Difficulty; label: string }[] = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const projectTypes: { value: ProjectType; label: string }[] = [
  { value: 'mini', label: 'Mini Project' },
  { value: 'major', label: 'Major Project' },
];

export function FiltersSidebar({
  isOpen,
  onClose,
  selectedCategories,
  onToggleCategory,
  selectedTechnologies,
  onToggleTechnology,
  selectedDifficulties,
  onToggleDifficulty,
  selectedTypes,
  onToggleType,
  hasActiveFilters,
  onClearFilters,
}: FiltersSidebarProps) {
  const technologies = getUniqueTechnologies();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: isOpen ? 0 : -400 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 z-50 h-screen w-80 overflow-y-auto border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl md:static md:top-auto md:z-auto md:h-auto md:w-auto md:overflow-visible md:border-r-0 md:bg-transparent md:shadow-none"
      >
        <div className="space-y-6 p-5 md:p-0">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center gap-2 mb-2">
            <Filter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Filters</h2>
          </div>

          {/* Mobile Header */}
          <div className="flex items-center justify-between md:hidden">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-foreground">
              <Filter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Filters
            </h2>
            <button onClick={onClose} className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 py-2.5 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 border border-orange-500/20 dark:border-orange-500/30 transition-all shadow-xs"
            >
              <RotateCcw className="h-4 w-4" />
              Clear All
            </button>
          )}

          {/* Categories */}
          <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-4 md:pb-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.value)}
                    onChange={() => onToggleCategory(category.value)}
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-blue-600 accent-blue-600 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors font-medium">
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Difficulties */}
          <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-4 md:pb-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base">Difficulty</h3>
            <div className="space-y-2">
              {difficulties.map((difficulty) => (
                <label key={difficulty.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedDifficulties.includes(difficulty.value)}
                    onChange={() => onToggleDifficulty(difficulty.value)}
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-blue-600 accent-blue-600 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors font-medium">
                    {difficulty.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Types */}
          <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-4 md:pb-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base">Project Type</h3>
            <div className="space-y-2">
              {projectTypes.map((type) => (
                <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.value)}
                    onChange={() => onToggleType(type.value)}
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-blue-600 accent-blue-600 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors font-medium">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base">Technologies</h3>
            <div className="max-h-64 space-y-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-slate-100 dark:scrollbar-track-slate-800">
              {technologies.map((technology) => (
                <label key={technology} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedTechnologies.includes(technology)}
                    onChange={() => onToggleTechnology(technology)}
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-blue-600 accent-blue-600 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors font-medium">
                    {technology}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
