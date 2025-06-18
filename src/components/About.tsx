// [CHANGELOG] 2025-01-17: Updated About stats section labels and description text to use hero-subtitle font styling to match hero section copy text
// About section component for AKINGZ landing page
// Updated with Newsletter and Blog sections, removed Core Expertise

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Globe, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';
import Newsletter from './Newsletter';
import BlogPreview from './BlogPreview';

const About: React.FC = () => {
  const { t, language } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: Brain, label: t('about.stats.projects'), value: '100+' },
    { icon: Zap, label: t('about.stats.performance'), value: '340%' },
    { icon: Globe, label: t('about.stats.clients'), value: '10+' },
    { icon: Award, label: t('about.stats.awards'), value: 'loading' }
  ];

  const handleCollaborate = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements - Updated colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-teal-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light tracking-wide text-lg leading-relaxed">
              {((t('about.description2').trim() && t('about.description2') !== 'about.description2') || (t('about.description3').trim() && t('about.description3') !== 'about.description3')) ? (
                <>
                  <p className="hero-subtitle">{t('about.description1')}</p>
                  {(t('about.description2').trim() && t('about.description2') !== 'about.description2') && <p className="hero-subtitle">{t('about.description2')}</p>}
                  {(t('about.description3').trim() && t('about.description3') !== 'about.description3') && <p className="hero-subtitle">{t('about.description3')}</p>}
                </>
              ) : (
                <p className="hero-subtitle">{t('about.description1')}</p>
              )}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10"
            >
              <button 
                onClick={handleCollaborate}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('about.collaborate')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="group relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/15 transition-all duration-300"
                  style={{
                    boxShadow: undefined,
                    border: undefined,
                    ...(inView && {
                      boxShadow: '0 0 12px #FFA64588',
                      border: '1px solid #FFA64555',
                    }),
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #FFA645, #FF6A00)',
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 font-light tracking-wide hero-subtitle">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <Newsletter />

        {/* Blog Preview Section */}
        <BlogPreview />
      </div>
    </section>
  );
};

export default About;