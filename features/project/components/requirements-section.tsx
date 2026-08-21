'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { HardDrive, Database, Code, Cpu, Monitor } from 'lucide-react';

interface RequirementsSectionProps {
  project: Project;
}

export function RequirementsSection({ project }: RequirementsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Requirements</h2>
        <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">System and software requirements to run this project</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Software */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Software</h3>
          </div>
          <ul className="space-y-2">
            {project.requirements.software.map((item) => (
              <li key={item} className="text-sm text-slate-600 dark:text-slate-400">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Database */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Database</h3>
          </div>
          <ul className="space-y-2">
            {project.requirements.database.map((item) => (
              <li key={item} className="text-sm text-slate-600 dark:text-slate-400">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IDE */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <HardDrive className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100">IDE</h3>
          </div>
          <ul className="space-y-2">
            {project.requirements.ide.map((item) => (
              <li key={item} className="text-sm text-slate-600 dark:text-slate-400">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RAM */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Minimum RAM</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{project.requirements.ram}</p>
        </div>

        {/* OS */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Operating System</h3>
          </div>
          <ul className="space-y-2">
            {project.requirements.os.map((item) => (
              <li key={item} className="text-sm text-slate-600 dark:text-slate-400">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
