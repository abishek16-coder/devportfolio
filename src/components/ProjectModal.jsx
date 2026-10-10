import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0F172A] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white z-20 backdrop-blur-md transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-purple-300 font-medium">{project.tagline}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.metrics && (
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <span className="text-xs font-mono text-purple-300 font-semibold uppercase">Impact & Performance</span>
                  <p className="text-sm text-white font-medium">{project.metrics}</p>
                </div>
              </div>
            )}

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">Tech Stack & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
