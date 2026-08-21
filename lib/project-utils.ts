import { Project, Category, Difficulty, ProjectType } from '@/types/project';
import { projects } from '@/data/projects';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsById(ids: string[]): Project[] {
  return ids
    .map((id) => projects.find((p) => p.id === id))
    .filter((p) => p !== undefined) as Project[];
}

interface FilterOptions {
  categories?: Category[];
  technologies?: string[];
  difficulties?: Difficulty[];
  projectTypes?: ProjectType[];
  searchQuery?: string;
}

export function filterProjects(options: FilterOptions): Project[] {
  return projects.filter((project) => {
    // Category filter
    if (options.categories && options.categories.length > 0) {
      if (!options.categories.includes(project.category)) {
        return false;
      }
    }

    // Difficulty filter
    if (options.difficulties && options.difficulties.length > 0) {
      if (!options.difficulties.includes(project.difficulty)) {
        return false;
      }
    }

    // Project type filter
    if (options.projectTypes && options.projectTypes.length > 0) {
      if (!options.projectTypes.includes(project.projectType)) {
        return false;
      }
    }

    // Technology filter
    if (options.technologies && options.technologies.length > 0) {
      const projectTechs = project.technologies.map((t) => t.name.toLowerCase());
      const hasMatchingTech = options.technologies.some((tech) =>
        projectTechs.includes(tech.toLowerCase())
      );
      if (!hasMatchingTech) {
        return false;
      }
    }

    // Search filter
    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase();
      const matches =
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        project.technologies.some((tech) => tech.name.toLowerCase().includes(query));
      if (!matches) {
        return false;
      }
    }

    return true;
  });
}

export type SortOption = 'latest' | 'oldest' | 'a-z' | 'z-a' | 'popular';

export function sortProjects(projectList: Project[], sortBy: SortOption): Project[] {
  const sorted = [...projectList];

  switch (sortBy) {
    case 'latest':
      return sorted.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime());
    case 'a-z':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'z-a':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'popular':
      // Sort by number of related projects as a simple popularity metric
      return sorted.sort((a, b) => b.relatedProjects.length - a.relatedProjects.length);
    default:
      return sorted;
  }
}

export function getUniqueCategories(): Category[] {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories);
}

export function getUniqueTechnologies(): string[] {
  const technologies = new Set<string>();
  projects.forEach((p) => {
    p.technologies.forEach((t) => {
      technologies.add(t.name);
    });
  });
  return Array.from(technologies).sort();
}

export function getUniqueDifficulties(): Difficulty[] {
  const difficulties = new Set(projects.map((p) => p.difficulty));
  return Array.from(difficulties);
}

export function getUniqueProjectTypes(): ProjectType[] {
  const types = new Set(projects.map((p) => p.projectType));
  return Array.from(types);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function getTotalProjects(): number {
  return projects.length;
}
