'use client';

import { Project } from '@/types/project';
import { formatDate } from '@/lib/project-utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    web: 'bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30',
    mobile: 'bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400 border border-purple-500/20 dark:border-purple-500/30',
    desktop: 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/30',
    'ai-ml': 'bg-pink-500/10 dark:bg-pink-500/15 text-pink-700 dark:text-pink-400 border border-pink-500/20 dark:border-pink-500/30',
    'data-science': 'bg-orange-500/10 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 border border-orange-500/20 dark:border-orange-500/30',
    iot: 'bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 dark:border-cyan-500/30',
    cybersecurity: 'bg-red-500/10 dark:bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/20 dark:border-red-500/30',
  };

  const difficultyColors: Record<string, string> = {
    beginner: 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/30',
    intermediate: 'bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20 dark:border-amber-500/30',
    advanced: 'bg-rose-500/10 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/20 dark:border-rose-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="group h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 dark:hover:border-blue-500/40 hover:border-blue-500/40 transition-all duration-300">
          {/* Thumbnail */}
          <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60" style={{ paddingBottom: '56.25%' }}>
            {/* Ambient Blurred Backdrop */}
            <Image
              src={project.thumbnail}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover blur-xl opacity-30 dark:opacity-40 scale-110 pointer-events-none"
            />
            {/* Full Uncropped Thumbnail Image */}
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-5 flex-1 justify-between">
            <div className="space-y-3">
              {/* Title & Description */}
              <div>
                <h3 className="line-clamp-2 text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${categoryColors[project.category]}`}>
                  {project.category.replace('-', ' ').toUpperCase()}
                </span>
                <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${difficultyColors[project.difficulty]}`}>
                  {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech.name} className="inline-block rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                    {tech.name}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="inline-block rounded-full bg-blue-500/10 dark:bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-3">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{formatDate(project.lastUpdated)}</span>
                <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  View <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
