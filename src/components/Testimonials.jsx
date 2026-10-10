import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-500/20 px-3 py-1 rounded-full">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          What Mentors & Peers Say
        </h2>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-purple-500/20 shadow-2xl">
        <Quote className="w-16 h-16 text-purple-500/10 absolute -top-2 -left-2 pointer-events-none" />

        <div className="flex items-center gap-1 mb-6 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light italic">
              "{current.content}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
              />
              <div>
                <h4 className="font-display font-bold text-white text-base">{current.name}</h4>
                <p className="text-xs text-purple-300 font-medium">
                  {current.role} • <span className="text-slate-400">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-end gap-2 mt-6">
          <button
            onClick={prev}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
