// Language toggle component for AKINGZ landing page
// Provides discreet language switching functionality

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="group flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      <Globe className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300 uppercase">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;