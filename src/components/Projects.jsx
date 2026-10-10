import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Full Stack', 'AI / ML', 'Frontend', 'Mobile'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full">
          Featured Creations
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Selected Engineering Work
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          A curated collection of web apps, AI tools and mobile projects built during my learning journey.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-900/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
                  
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/40 text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-1 shadow-glow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white inline-flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold tracking-wide uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/80 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-white/[0.02] text-[10px] font-mono text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs font-mono text-purple-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
