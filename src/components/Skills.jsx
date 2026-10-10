import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode2,
  Palette,
  Sparkles,
  Boxes,
  Layers,
  Server,
  Terminal,
  Database,
  Zap,
  Network,
  Cpu,
  Container,
  Cloud,
  GitBranch,
  TerminalSquare,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode2,
  Palette,
  Sparkles,
  Boxes,
  Layers,
  Server,
  Terminal,
  Database,
  Zap,
  Network,
  Cpu,
  Container,
  Cloud,
  GitBranch,
  TerminalSquare,
  Globe,
  ShieldCheck
};

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Tools, Languages & Stacks
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Carefully chosen modern toolsets honed across production web applications and design systems.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-glow-sm scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCategory.skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code2;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.level >= 90 ? 'Mastery' : skill.level >= 80 ? 'Proficient' : 'Skilled'}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-slate-300">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 glass-card rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 border-dashed border-purple-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Always learning — currently exploring AI, quantum ML and modern app development.
          </p>
        </div>
        <a
          href="#projects"
          className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
        >
          <span>See technologies in action</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
