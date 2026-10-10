import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#080B11]/90 backdrop-blur-xl py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-lg tracking-tight">
              {personalInfo.fullName}
            </span>
            <span className="text-[11px] font-mono text-purple-400 bg-purple-950/50 border border-purple-500/20 px-2 py-0.5 rounded-full">
              v2026.1
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Crafting modern web & mobile experiences with React, Flutter and AI.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chennai (IST): {time || '12:00:00 PM'}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white transition-colors border border-purple-500/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved. Engineered with React, Vite & Tailwind.
      </div>
    </footer>
  );
}
