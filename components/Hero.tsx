import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, Download, Github, Linkedin, Heart, Star, Sparkles, Flower2, Coffee } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundIcons = [
    { Icon: Heart, x: '10%', y: '20%', delay: 0 },
    { Icon: Star, x: '85%', y: '15%', delay: 0.5 },
    { Icon: Sparkles, x: '15%', y: '70%', delay: 1 },
    { Icon: Flower2, x: '90%', y: '60%', delay: 1.5 },
    { Icon: Coffee, x: '20%', y: '40%', delay: 2 },
    { Icon: Coffee, x: '80%', y: '80%', delay: 2.5 },
    { Icon: Heart, x: '70%', y: '25%', delay: 3 },
    { Icon: Star, x: '25%', y: '85%', delay: 3.5 },
    { Icon: Sparkles, x: '75%', y: '45%', delay: 4 },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Cute background icons */}
      {backgroundIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: [0.8, 1.2, 0.8], 
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <item.Icon size={40} className="text-soft-purple-300" />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Shreya! ✨
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Predoctoral Research Fellow passionate about privacy, AI ethics, and bridging technology with law
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="bg-soft-purple-200 hover:bg-soft-purple-300 text-soft-purple-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1vKtpboS8eCnAHSoQ_PH5IdOdoibD0vaa/view?usp=drive_link', '_blank')}
              className="border-soft-purple-200 text-soft-purple-500 hover:bg-soft-purple-50 hover:border-soft-purple-300 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              View CV
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/skochar1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-soft-purple-50 text-soft-purple-600 hover:text-soft-purple-700 hover:bg-soft-purple-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shreyakochar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 rounded-full bg-soft-purple-50 text-soft-purple-600 hover:text-soft-purple-700 hover:bg-soft-purple-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full bg-soft-purple-50 shadow-md"
        >
          <ArrowDown className="text-soft-purple-600" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}