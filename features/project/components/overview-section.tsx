'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatDate } from '@/lib/project-utils';
import { Calendar, BookOpen, Zap, X } from 'lucide-react';
import { useState } from 'react';

interface OverviewSectionProps {
  project: Project;
}

export function OverviewSection({ project }: OverviewSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const difficultyColors: Record<string, string> = {
    beginner: 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/30',
    intermediate: 'bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20 dark:border-amber-500/30',
    advanced: 'bg-rose-500/10 dark:bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/20 dark:border-rose-500/30',
  };

  return (
    <section className="space-y-8">
      {/* Hero Thumbnail */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
        <div 
          className="relative w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950 cursor-pointer shadow-md group border border-slate-200/80 dark:border-slate-800" 
          style={{ paddingBottom: '52%' }} 
          onClick={() => setSelectedImage(project.thumbnail)}
          role="button"
          tabIndex={0}
          aria-label="View full size image"
        >
          {/* Ambient Blurred Backdrop */}
          <Image
            src={project.thumbnail}
            alt=""
            fill
            aria-hidden="true"
            className="object-cover blur-2xl opacity-30 dark:opacity-40 scale-110 pointer-events-none"
          />
          {/* Uncropped Full Image */}
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain p-3 group-hover:scale-102 transition-transform duration-500 cursor-pointer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-5xl tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.shortDescription}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>{formatDate(project.lastUpdated)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${difficultyColors[project.difficulty]}`}>
                {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>
                {project.projectType === 'mini' ? 'Mini Project' : 'Major Project'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Description */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Overview</h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.fullDescription}</p>
        </div>
      </motion.div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Gallery</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="relative w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 cursor-pointer group shadow-xs border border-slate-200/80 dark:border-slate-800"
                  onClick={() => setSelectedImage(image)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View screenshot ${index + 1}`}
                >
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <Image
                      src={image}
                      alt=""
                      fill
                      aria-hidden="true"
                      className="object-cover blur-xl opacity-25 scale-110 pointer-events-none"
                    />
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button 
            className="absolute top-5 right-5 p-3 text-white hover:text-slate-200 transition-all rounded-full bg-slate-800/80 hover:bg-slate-700 cursor-pointer shadow-lg z-50 border border-slate-700/60"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close image preview"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative max-w-full max-h-full cursor-default" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full size view"
              width={1920}
              height={1080}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      )}

      {/* Technologies */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Technologies Used</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {['frontend', 'backend', 'database', 'tool'].map((category) => {
              const techs = project.technologies.filter((t) => t.category === category);
              if (techs.length === 0) return null;

              const categoryLabels: Record<string, string> = {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Database',
                tool: 'Tools & Libraries',
              };

              return (
                <div key={category}>
                  <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{categoryLabels[category]}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span key={tech.name} className="inline-block rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
