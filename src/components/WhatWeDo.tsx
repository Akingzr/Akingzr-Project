// What We Do section component for AKINGZ landing page
// Features the services and specialties in a clean grid layout

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Camera, Globe, Zap, TrendingUp, Package } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const specialtyIcons = [
    { icon: Package, color: 'from-purple-400 to-purple-600' },
    { icon: Video, color: 'from-blue-400 to-blue-600' },
    { icon: Camera, color: 'from-green-400 to-green-600' },
    { icon: Globe, color: 'from-teal-400 to-teal-600' },
    { icon: TrendingUp, color: 'from-orange-400 to-orange-600' },
    { icon: Zap, color: 'from-cyan-400 to-cyan-600' }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-teal-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t('whatWeDo.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto hero-subtitle leading-relaxed">
            {t('whatWeDo.subtitle')}
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(t('whatWeDo.specialties')) && (t('whatWeDo.specialties') as string[]).map((specialty, index) => {
            const IconComponent = specialtyIcons[index]?.icon;
            const colorGradient = specialtyIcons[index]?.color;
            
            if (!IconComponent || !colorGradient) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-r ${colorGradient} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {specialty}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 