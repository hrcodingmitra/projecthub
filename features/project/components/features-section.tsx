'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FeaturesSectionProps {
  project: Project;
}

export function FeaturesSection({ project }: FeaturesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Key Features</h2>
        <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">Explore the main capabilities of this project</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {project.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-xs hover:border-blue-500/30 transition-all"
          >
            <div className="flex gap-3.5">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
