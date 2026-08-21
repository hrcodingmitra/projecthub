'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';

interface ModulesSectionProps {
  project: Project;
}

export function ModulesSection({ project }: ModulesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Project Modules</h2>
        <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">Key components and their responsibilities</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {project.modules.map((module, index) => (
          <motion.div
            key={module.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs hover:border-blue-500/30 transition-all"
          >
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">{module.name}</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{module.description}</p>
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Features:</p>
              <ul className="space-y-1.5">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
