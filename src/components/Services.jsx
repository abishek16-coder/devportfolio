import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Server, Cpu, ArrowUpRight } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  Layers,
  Sparkles,
  Server,
  Cpu
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-500/20 px-3 py-1 rounded-full">
          What I Provide
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Specialized Services
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Delivering end-to-end digital solutions from concept to high-scale deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Sparkles;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Available for contract</span>
                <a
                  href="#contact"
                  className="p-2 rounded-full bg-white/5 group-hover:bg-purple-600/30 text-slate-300 group-hover:text-white transition-colors"
                  aria-label="Inquire about service"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
