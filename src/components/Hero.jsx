import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Cpu, Layers, ExternalLink, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Full-Stack Developer",
  "Flutter Developer",
  "AI Enthusiast",
  "React & FastAPI Developer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono shadow-glow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-slate-400 font-mono text-sm tracking-wider uppercase">
              Hello world, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.08]">
              {personalInfo.fullName}
            </h1>
            <div className="h-12 sm:h-14 flex items-center">
              <span className="text-2xl sm:text-4xl font-display font-semibold text-gradient-purple">
                {roles[currentRoleIndex]}
              </span>
            </div>
          </div>

          <p className="text-slate-300/90 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
            >
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 text-slate-400">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect</span>
            <div className="h-px w-8 bg-slate-800" />
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 hover:text-purple-300 border border-white/5 hover:border-purple-500/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 hover:text-purple-300 border border-white/5 hover:border-purple-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 hover:text-purple-300 border border-white/5 hover:border-purple-500/30 transition-all duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-tr from-purple-500/30 via-indigo-500/20 to-cyan-500/30 shadow-2xl backdrop-blur-3xl">
            <div className="w-full h-full rounded-[22px] bg-[#0D1322]/90 border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  developer.config.ts
                </div>
              </div>

              <div className="py-4 space-y-2 font-mono text-xs text-slate-300">
                <p className="text-purple-400"><span className="text-cyan-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.fullName}"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">focus:</span> <span className="text-emerald-300">"Web & Mobile Apps"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">strengths:</span> [</p>
                <p className="pl-8 text-amber-300">"React.js", "Flutter", "Python",</p>
                <p className="pl-8 text-amber-300">"FastAPI", "Firebase"</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-cyan-300">"Learning & Building Daily"</span></p>
                <p className="text-purple-400">&#125;;</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xl font-display font-bold text-white">
                    {personalInfo.projectsCompleted}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Shipped Projects</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xl font-display font-bold text-gradient-cyan">
                    {personalInfo.satisfactionRate}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Commitment</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-[#161F30]/90 backdrop-blur-xl border border-purple-500/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Full-Stack Core</p>
              <p className="text-[10px] font-mono text-purple-300">React • Node • Python</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 -right-6 bg-[#161F30]/90 backdrop-blur-xl border border-cyan-500/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Mobile Ready</p>
              <p className="text-[10px] font-mono text-cyan-300">Flutter • Responsive UI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll Down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full border border-white/20 text-slate-300"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
