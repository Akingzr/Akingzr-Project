// Navigation component for AKINGZ landing page
// Updated with language toggle and new color palette

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';
import LanguageToggle from './LanguageToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('navigation.home'), href: '#home' },
    { name: t('navigation.portfolio'), href: '#portfolio' },
    { name: t('navigation.about'), href: '#about' },
    { name: t('navigation.contact'), href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLetsTalk = () => {
    setIsOpen(false);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border border-white/10' 
            : 'bg-white/5 backdrop-blur-xl border border-white/5'
        } rounded-2xl px-8 py-4`}
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AKINGZ
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="relative text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={handleLetsTalk}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl font-semibold text-white text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              {t('navigation.letsTalk')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-6 right-6 z-40 md:hidden bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Language Toggle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="py-2"
              >
                <LanguageToggle />
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                onClick={handleLetsTalk}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl font-semibold text-white text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                {t('navigation.letsTalk')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;