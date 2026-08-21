'use client';

import { getProjectBySlug } from '@/lib/project-utils';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { OverviewSection } from '@/features/project/components/overview-section';
import { FeaturesSection } from '@/features/project/components/features-section';
import { ModulesSection } from '@/features/project/components/modules-section';
import { RequirementsSection } from '@/features/project/components/requirements-section';
import { FAQsSection } from '@/features/project/components/faqs-section';
import { RelatedProjects } from '@/features/project/components/related-projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Project } from '@/types/project';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proj = getProjectBySlug(slug);
    setProject(proj || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-8">
              <div className="h-96 rounded-2xl bg-slate-200 dark:bg-slate-800/50" />
              <div className="space-y-4">
                <div className="h-8 w-3/4 rounded-lg bg-slate-200 dark:bg-slate-800/50" />
                <div className="h-4 w-full rounded-lg bg-slate-200 dark:bg-slate-800/50" />
                <div className="h-4 w-2/3 rounded-lg bg-slate-200 dark:bg-slate-800/50" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Project Not Found</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="mt-8 inline-block rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 font-semibold text-white transition-colors shadow-md shadow-blue-500/20">
              Back to Catalog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Back Button */}
        <div className="border-b border-slate-200/80 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/50 backdrop-blur-xs">
          <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              <ChevronLeft className="h-4 w-4" />
              Back to Catalog
            </Link>
          </div>
        </div>

        {/* Content */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <OverviewSection project={project} />
              <FeaturesSection project={project} />
              <ModulesSection project={project} />

              {/* Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-blue-500/30 transition-all shadow-xs">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Problem Statement</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{project.problemStatement}</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-blue-500/30 transition-all shadow-xs">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Workflow</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{project.workflow}</p>
                </div>
              </motion.div>

              {/* Learning Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Learning Outcomes</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="space-y-2 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{outcome.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{outcome.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Future Enhancements */}
              {project.futureEnhancements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Future Enhancements</h2>
                    <ul className="space-y-3">
                      {project.futureEnhancements.map((enhancement, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-orange-400" />
                          {enhancement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              <RequirementsSection project={project} />
              <FAQsSection project={project} />
              <RelatedProjects project={project} />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
