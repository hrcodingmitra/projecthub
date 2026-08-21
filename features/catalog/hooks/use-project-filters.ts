'use client';

import { useState, useCallback, useMemo } from 'react';
import { Category, Difficulty, ProjectType } from '@/types/project';
import { filterProjects, sortProjects, SortOption } from '@/lib/project-utils';

export function useProjectFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const filteredProjects = useMemo(() => {
    const filtered = filterProjects({
      searchQuery,
      categories: selectedCategories,
      technologies: selectedTechnologies,
      difficulties: selectedDifficulties,
      projectTypes: selectedTypes,
    });

    return sortProjects(filtered, sortBy);
  }, [searchQuery, selectedCategories, selectedTechnologies, selectedDifficulties, selectedTypes, sortBy]);

  const toggleCategory = useCallback((category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }, []);

  const toggleTechnology = useCallback((technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology) ? prev.filter((t) => t !== technology) : [...prev, technology]
    );
  }, []);

  const toggleDifficulty = useCallback((difficulty: Difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty]
    );
  }, []);

  const toggleType = useCallback((type: ProjectType) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTechnologies([]);
    setSelectedDifficulties([]);
    setSelectedTypes([]);
    setSortBy('latest');
  }, []);

  const hasActiveFilters =
    searchQuery ||
    selectedCategories.length > 0 ||
    selectedTechnologies.length > 0 ||
    selectedDifficulties.length > 0 ||
    selectedTypes.length > 0;

  return {
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
  };
}
