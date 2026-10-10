import React from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080B11] text-slate-100 selection:bg-purple-600 selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <ParticleCanvas />
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <Navbar />

      <main className="relative z-10 space-y-8 sm:space-y-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
