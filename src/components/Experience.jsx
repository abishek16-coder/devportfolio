import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
          Career Path
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Experience & Milestones
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Internships, leadership roles and hands-on learning experiences.
        </p>
      </div>

      <div className="relative border-l border-purple-500/20 ml-4 sm:ml-32 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-10 group"
          >
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-purple-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-glow-sm" />

            <div className="hidden sm:block absolute -left-36 top-1 text-xs font-mono font-semibold text-purple-400">
              {exp.period}
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="space-y-1">
                  <span className="sm:hidden text-xs font-mono text-purple-400 font-semibold block">
                    {exp.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 mb-4">
                {exp.description}
              </p>

              <div className="space-y-2 mb-5">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-mono text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
