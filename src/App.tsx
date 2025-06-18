// Main App component for AKINGZ landing page
// Updated with i18n support and SEO meta tags

import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import { TranslationProvider, useTranslation } from './hooks/useTranslation';

const AppContent: React.FC = () => {
  const { language } = useTranslation();

  useEffect(() => {
    // Set document language for SEO and accessibility
    document.documentElement.lang = language;
    
    // Update meta tags for SEO
    const updateMetaTags = () => {
      const title = language === 'es' 
        ? 'AKINGZ - Angel Reyes - Soluciones de IA Pioneras'
        : 'AKINGZ - Angel Reyes - AI Solutions Pioneer';
      
      const description = language === 'es'
        ? 'Soluciones de IA Pioneras para las Marcas del Mañana. Desarrollo de IA de vanguardia y soluciones tecnológicas innovadoras.'
        : 'Pioneering AI Solutions for Tomorrow\'s Brands. Cutting-edge AI development and innovative technology solutions.';

      document.title = title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      // Add hreflang tags for SEO
      const existingHreflang = document.querySelectorAll('link[hreflang]');
      existingHreflang.forEach(link => link.remove());

      const hreflangs = [
        { lang: 'en', href: window.location.origin + '/' },
        { lang: 'es', href: window.location.origin + '/?lang=es' },
        { lang: 'x-default', href: window.location.origin + '/' }
      ];

      hreflangs.forEach(({ lang, href }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = href;
        document.head.appendChild(link);
      });
    };

    updateMetaTags();

    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Magnetic effect for buttons
    const addMagneticEffect = () => {
      const buttons = document.querySelectorAll('button');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
        });
        
        button.addEventListener('mouseleave', (e) => {
          e.currentTarget.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mousemove', (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        });
      });
    };

    // Apply magnetic effect after component mount
    setTimeout(addMagneticEffect, 100);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [language]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CursorTrail />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}

export default App;