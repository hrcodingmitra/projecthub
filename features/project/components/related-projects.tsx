'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { getProjectsById } from '@/lib/project-utils';
import { ProjectCard } from '@/features/catalog/components/project-card';

interface RelatedProjectsProps {
  project: Project;
}

export function RelatedProjects({ project }: RelatedProjectsProps) {
  const relatedProjects = getProjectsById(project.relatedProjects).slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Related Projects</h2>
        <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">Check out similar projects you might be interested in</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProjects.map((relatedProject, index) => (
          <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
