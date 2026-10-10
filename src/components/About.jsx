import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Compass, MapPin, CheckCircle2, Award, Zap } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const tabs = [
  { id: 'story', label: 'My Journey', icon: Compass },
  { id: 'philosophy', label: 'Engineering Philosophy', icon: Heart },
  { id: 'capabilities', label: 'Core Strengths', icon: Zap }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full">
          About Me
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Curious, Consistent & Always Learning
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          A BCA student turning real-world problems into practical, user-friendly digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative group">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-lg font-display font-bold text-white">{personalInfo.fullName}</p>
                <div className="flex items-center gap-1.5 text-xs text-purple-300">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xl font-display font-bold text-white text-gradient-purple">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5 max-w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8 min-h-[360px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  <h3 className="text-xl font-display font-semibold text-white">
                    From classroom projects to real-world applications.
                  </h3>
                  <p>
                    I'm a Bachelor of Computer Applications (BCA) student at Avichi College of Arts and Science, Chennai. My journey started with a curiosity for how websites and apps work — and grew into hands-on building with React.js, Flutter, Python and FastAPI.
                  </p>
                  <p>
                    Over the past two years I have worked on document automation, an NGO portal, AI-powered spam detection and a hybrid quantum ML research platform. Each project taught me to combine clean code, thoughtful design and real user needs into something that actually works.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20">
                      ⚡ Hands-On Projects
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/20">
                      📚 Continuous Learning
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/20">
                      🚀 Modern Web & Mobile Tools
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'philosophy' && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  <h3 className="text-xl font-display font-semibold text-white">
                    Learn continuously, build creatively, solve real problems.
                  </h3>
                  <p>
                    My motto is simple: technology is a tool, and great software is what people can actually use. I focus on apps and websites that are practical, fast and easy to understand — then I keep refining them based on feedback and real-world use.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="font-semibold text-white text-sm">Practical & Reliable</p>
                      <p className="text-xs text-slate-400 mt-1">Clean, maintainable code that delivers working features — not just demos.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="font-semibold text-white text-sm">User-First Design</p>
                      <p className="text-xs text-slate-400 mt-1">Simple, friendly and responsive interfaces that anyone can navigate.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'capabilities' && (
                <motion.div
                  key="capabilities"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-display font-semibold text-white">
                    Specialized Technical Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Web apps with React.js & Next.js",
                      "REST APIs with Node.js, Express & FastAPI",
                      "Database work with PostgreSQL, MongoDB & Firebase",
                      "Cross-platform apps with Flutter & Dart",
                      "Deployments with Vercel, Streamlit & Firebase",
                      "AI integration with Gemini, Hugging Face & ML"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Status: Open to internships, freelance projects & collaborations</span>
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group"
              >
                <span>Inquire About Collaboration</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
