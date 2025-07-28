import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Honors } from './components/Honors';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Projects />
        <Honors />
        <Contact />
      </main>
    </div>
  );
}