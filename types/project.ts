export type ProjectType = 'mini' | 'major';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Category = 'web' | 'mobile' | 'desktop' | 'ai-ml' | 'data-science' | 'iot' | 'cybersecurity';

export interface Technology {
  name: string;
  icon?: string;
  category?: 'frontend' | 'backend' | 'database' | 'tool' | 'library';
}

export interface Badge {
  label: string;
  variant: 'default' | 'secondary' | 'outline';
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Module {
  name: string;
  description: string;
  features: string[];
}

export interface ExistingSolution {
  name: string;
  description: string;
}

export interface Architecture {
  description: string;
  diagram?: string;
}

export interface DatabaseTable {
  name: string;
  description: string;
  fields: string[];
}

export interface Screenshot {
  url: string;
  title: string;
  description?: string;
}

export interface Documentation {
  title: string;
  type: 'pdf' | 'docx' | 'md' | 'html';
  url: string;
}

export interface Requirements {
  software: string[];
  database: string[];
  ide: string[];
  ram: string;
  os: string[];
}

export interface LearningOutcome {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  gallery: string[];
  category: Category;
  technologies: Technology[];
  projectType: ProjectType;
  difficulty: Difficulty;
  tags: string[];
  features: Feature[];
  modules: Module[];
  problemStatement: string;
  existingSolutions: ExistingSolution[];
  workflow: string;
  architecture: Architecture;
  databaseTables: DatabaseTable[];
  screenshots?: Screenshot[];
  documentation: Documentation[];
  requirements: Requirements;
  learningOutcomes: LearningOutcome[];
  futureEnhancements: string[];
  faqs: FAQ[];
  relatedProjects: string[];
  lastUpdated: string;
  suitorFor: string[];
}
