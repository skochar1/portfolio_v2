import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'honors', label: 'Honors' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="text-xl font-medium">Shreya Kochar</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}