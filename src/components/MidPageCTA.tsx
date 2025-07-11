// Mid-Page CTA section component for AKINGZ landing page
// Features a prominent call-to-action with Calendly integration

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';

const MidPageCTA: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleBookCall = () => {
    window.open('https://calendly.com/akingz/consultation-consulta', '_blank');
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-600/40 to-cyan-500/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 md:p-16"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-3xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t('midPageCTA.title')}
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto hero-subtitle leading-relaxed mb-10">
            {t('midPageCTA.subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <button 
              onClick={handleBookCall}
              className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                {t('midPageCTA.button')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-light hero-subtitle">
              {t('midPageCTA.trust')}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA; 