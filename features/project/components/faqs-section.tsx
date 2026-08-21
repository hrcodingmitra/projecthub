'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQsSectionProps {
  project: Project;
}

export function FAQsSection({ project }: FAQsSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">Common questions about this project</p>
      </div>

      <div className="space-y-3">
        {project.faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs"
          >
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="flex w-full items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base pr-4">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                  expanded === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <motion.div
              animate={{
                height: expanded === index ? 'auto' : 0,
                opacity: expanded === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-slate-100 dark:border-slate-800"
            >
              <p className="p-4 sm:p-5 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
