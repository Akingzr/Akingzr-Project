// [CHANGELOG] 2025-01-17: Updated all grey text to use hero-subtitle font styling for consistency across the site
// Contact section component for AKINGZ landing page
// Updated with new color palette and translations

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: t('contact.info.email'), link: `mailto:${t('contact.info.email')}` },
    { icon: Phone, label: 'Phone', value: t('contact.info.phone'), link: `tel:${t('contact.info.phone').replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: t('contact.info.location'), link: null }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      link: 'https://www.linkedin.com/in/angelreyes-akingz/',
      label: 'LinkedIn' 
    },
    { 
      icon: Instagram, 
      link: 'https://www.instagram.com/akingzbiz/',
      label: 'Instagram' 
    },
    { 
      icon: Twitter, 
      link: 'https://x.com/Angelreyes2_',
      label: 'Twitter' 
    },
    { 
      icon: Github, 
      link: 'https://github.com/Akingzr',
      label: 'GitHub' 
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements - Updated colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-teal-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto hero-subtitle leading-relaxed px-4">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all duration-300"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all duration-300"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.company')}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all duration-300"
                  placeholder={t('contact.form.companyPlaceholder')}
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('contact.form.send')}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8">{t('contact.info.title')}</h3>
              
                              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 font-light tracking-wide hero-subtitle">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8">{t('contact.social.title')}</h3>
              
                              <div className="flex gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="group w-14 h-14 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 rounded-2xl flex items-center justify-center hover:from-teal-600/40 hover:to-cyan-500/40 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-green-500/20 p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">{t('contact.availability.status')}</span>
              </div>
              <p className="text-gray-300 text-sm font-light tracking-wide hero-subtitle leading-relaxed">
                {t('contact.availability.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;