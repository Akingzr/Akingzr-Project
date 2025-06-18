// [CHANGELOG] 2024-06-16: Fixed image import from public folder. Directly referencing image path in src attribute instead of import statement to resolve Vite module resolution error.
// Hero section component for AKINGZ landing page
// Updated with Angel Reyes name and new color palette

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from '../hooks/useTranslation.tsx';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleViewPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-20">
      {/* Animated background elements - Updated colors */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 space-y-8">
        {/* Avatar Image with Enhanced Glass Effect */}
        <motion.div 
          className="relative mx-auto mb-8"
          initial={{ scale: 0, rotateY: -180 }}
          animate={inView ? { scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            
            {/* Glass border container */}
            <div className="relative w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl">
              <img
                src="/akingz-avatar.png"
                alt="Akingz Avatar"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-teal-500/50 to-cyan-500/50 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter hero-title">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-400 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 bg-clip-text text-transparent animate-gradient">
              AKINGZ
            </span>
          </h1>
          
          {/* Angel Reyes Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 tracking-wide"
          >
            {t('hero.name')}
          </motion.p>
        </motion.div>

        {/* Subtitle (with line break) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto hero-subtitle leading-relaxed"
        >
          {t('hero.subtitle').split('\n').map((line, idx) => (
            <span key={idx} style={{ display: 'block' }}>{line}</span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
        >
          <button 
            onClick={handleViewPortfolio}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 btn"
          >
            <span className="relative z-10">{t('hero.viewPortfolio')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={handleGetInTouch}
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105 btn"
          >
            <span className="relative z-10">{t('hero.getInTouch')}</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;