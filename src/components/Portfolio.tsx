// Portfolio component for AKINGZ landing page
// Updated to show exactly 8 AI-generated projects with external video links

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ExternalLink } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';

interface Project {
  id: number;
  title: string;
  titleEs: string;
  client: string;
  clientEs: string;
  description: string;
  descriptionEs: string;
  metrics: { label: string; labelEs: string; value: string }[];
  thumbnail: string;
  video?: string;
  videoUrl?: string; // External video URL (YouTube, Vimeo, etc.)
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Product Model Campaign",
    titleEs: "Campaña Modelo de Producto IA",
    client: "IntensityLabs",
    clientEs: "IntensityLabs",
    description: "AI model showcasing products with natural poses and authentic presentation for supplement advertising",
    descriptionEs: "Modelo de IA mostrando productos con poses naturales y presentación auténtica para publicidad de suplementos",
    metrics: [
      { label: "Product Focus", labelEs: "Enfoque Producto", value: "100%" },
      { label: "Authenticity", labelEs: "Autenticidad", value: "+95%" },
      { label: "Conversion Rate", labelEs: "Conversión", value: "+180%" }
    ],
    thumbnail: "https://img.youtube.com/vi/4RV0v9EbX64/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/4RV0v9EbX64",
    tags: ["AI", "Product", "Modeling"]
  },
  {
    id: 2,
    title: "AI Coach Max Campaign",
    titleEs: "Campaña Coach Max IA",
    client: "IntensityLabs",
    clientEs: "IntensityLabs",
    description: "Created AI fitness coach persona for motivational content and supplement promotion campaigns",
    descriptionEs: "Creé una persona de coach de fitness IA para contenido motivacional y campañas de promoción de suplementos",
    metrics: [
      { label: "Engagement", labelEs: "Engagement", value: "+180%" },
      { label: "Brand Trust", labelEs: "Confianza", value: "+95%" },
      { label: "Conversions", labelEs: "Conversiones", value: "+220%" }
    ],
    thumbnail: "https://img.youtube.com/vi/fqiYa-XoXY4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/fqiYa-XoXY4",
    tags: ["AI", "Coaching", "Fitness"]
  },
  {
    id: 3,
    title: "UGC AI Campaign",
    titleEs: "Campaña UGC con IA",
    client: "Daily Ritual",
    clientEs: "Daily Ritual",
    description: "Generated authentic user-generated content using AI models to showcase product benefits naturally",
    descriptionEs: "Generé contenido auténtico generado por usuarios usando modelos de IA para mostrar beneficios del producto naturalmente",
    metrics: [
      { label: "Authenticity Score", labelEs: "Autenticidad", value: "92%" },
      { label: "Engagement", labelEs: "Engagement", value: "+340%" },
      { label: "Production Time", labelEs: "Tiempo", value: "-80%" }
    ],
    thumbnail: "https://img.youtube.com/vi/mR_BpRIs2dY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/mR_BpRIs2dY",
    tags: ["AI", "UGC", "Beauty"]
  },
  {
    id: 4,
    title: "Akingz Fashion Clone",
    titleEs: "Clon de Moda Akingz",
    client: "Personal Brand",
    clientEs: "Marca Personal",
    description: "Created AI-generated fashion content featuring digital clone for brand storytelling and product showcase",
    descriptionEs: "Creé contenido de moda generado por IA con clon digital para narrativa de marca y exhibición de productos",
    metrics: [
      { label: "Brand Recognition", labelEs: "Reconocimiento", value: "+300%" },
      { label: "Content Variety", labelEs: "Variedad", value: "Unlimited" },
      { label: "Production Cost", labelEs: "Costo", value: "-70%" }
    ],
    thumbnail: "https://img.youtube.com/vi/CrbT_Ye0g9k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/CrbT_Ye0g9k",
    tags: ["AI", "Fashion", "Personal Brand"]
  },
  {
    id: 5,
    title: "AI Fitness Model - Dante",
    titleEs: "Modelo Fitness IA - Dante",
    client: "IntensityLabs",
    clientEs: "IntensityLabs",
    description: "AI fitness model showcasing workout routines and supplement products with authentic athletic presentation",
    descriptionEs: "Modelo fitness IA mostrando rutinas de ejercicio y productos de suplementos con presentación atlética auténtica",
    metrics: [
      { label: "Athletic Appeal", labelEs: "Atractivo", value: "+280%" },
      { label: "Engagement Rate", labelEs: "Engagement", value: "+190%" },
      { label: "Conversion", labelEs: "Conversión", value: "+160%" }
    ],
    thumbnail: "https://img.youtube.com/vi/HD-GMNbMG8g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/HD-GMNbMG8g",
    tags: ["AI", "Fitness", "Modeling"]
  },
    {
    id: 6,
    title: "AI Influencer - Astrid",
    titleEs: "Influencer IA - Astrid",
    client: "Content Creation",
    clientEs: "Creación de Contenido",
    description: "Created a photorealistic AI influencer with engaging personality and authentic social media presence",
    descriptionEs: "Creé una influencer de IA fotorrealista con personalidad atractiva y presencia auténtica en redes sociales",
    metrics: [
      { label: "Engagement", labelEs: "Engagement", value: "+400%" },
      { label: "Cost Efficiency", labelEs: "Eficiencia", value: "+300%" },
      { label: "Content Output", labelEs: "Producción", value: "24/7" }
    ],
    thumbnail: "https://img.youtube.com/vi/VDFzZ_88j5o/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/VDFzZ_88j5o",
    tags: ["AI", "Influencer", "Social Media"]
  },
  {
    id: 7,
    title: "AI Ad for Ayurveda Brand",
    titleEs: "Anuncio IA para Marca Ayurveda",
    client: "Wellness Brand",
    clientEs: "Marca de Bienestar",
    description: "AI-generated advertisement showcasing Ayurveda products with authentic storytelling and natural wellness messaging",
    descriptionEs: "Anuncio generado por IA mostrando productos Ayurveda con narrativa auténtica y mensajes de bienestar natural",
    metrics: [
      { label: "Brand Authenticity", labelEs: "Autenticidad", value: "+350%" },
      { label: "Wellness Appeal", labelEs: "Atractivo", value: "+280%" },
      { label: "Conversion Rate", labelEs: "Conversión", value: "+190%" }
    ],
    thumbnail: "https://img.youtube.com/vi/jSPYtHu2iT8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/jSPYtHu2iT8",
    tags: ["AI", "Wellness", "Advertisement"]
  },
  {
    id: 8,
    title: "AI Creative Campaign for Ayurveda",
    titleEs: "Campaña Creativa IA para Ayurveda",
    client: "Wellness Brand",
    clientEs: "Marca de Bienestar",
    description: "Comprehensive AI creative campaign showcasing natural Ayurveda products with holistic wellness storytelling approach",
    descriptionEs: "Campaña creativa integral de IA mostrando productos naturales Ayurveda con enfoque narrativo de bienestar holístico",
    metrics: [
      { label: "Campaign Reach", labelEs: "Alcance", value: "+420%" },
      { label: "Wellness Engagement", labelEs: "Engagement", value: "+360%" },
      { label: "Brand Awareness", labelEs: "Reconocimiento", value: "+290%" }
    ],
    thumbnail: "https://img.youtube.com/vi/VF1anq_KGOg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/VF1anq_KGOg",
    tags: ["AI", "Wellness", "Campaign"]
  },
  {
    id: 9,
    title: "AI Model Product Photography",
    titleEs: "Fotografía de Producto Modelo IA",
    client: "Product Photography",
    clientEs: "Fotografía de Producto",
    description: "Professional AI model showcasing products with natural poses and authentic presentation for e-commerce and marketing",
    descriptionEs: "Modelo profesional de IA mostrando productos con poses naturales y presentación auténtica para e-commerce y marketing",
    metrics: [
      { label: "Photo Quality", labelEs: "Calidad", value: "4K+" },
      { label: "Production Speed", labelEs: "Velocidad", value: "+500%" },
      { label: "Cost Savings", labelEs: "Ahorro", value: "-85%" }
    ],
    thumbnail: "/portfolio/images/ai-model-holding-product.png",
    tags: ["AI", "Photography", "Product"]
  }
];

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoUrl?: string }>({ isOpen: false });
  const [imageModal, setImageModal] = useState<{ isOpen: boolean; imageUrl?: string; title?: string }>({ isOpen: false });
  const { t, language } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleVideoClick = (videoUrl?: string) => {
    console.log('=== VIDEO CLICK DEBUG ===');
    console.log('1. handleVideoClick called with URL:', videoUrl);
    console.log('2. Current videoModal state:', videoModal);
    
    if (!videoUrl) {
      console.log('ERROR: No video URL provided');
      return;
    }
    
    console.log('3. Full video path will be:', videoUrl);
    console.log('4. Setting video modal state...');
    
    const newModalState = { 
      isOpen: true, 
      videoUrl: videoUrl 
    };
    
    setVideoModal(newModalState);
    
    console.log('5. Video modal state set to:', newModalState);
    console.log('6. Checking if modal should render...');
    console.log('=== END VIDEO CLICK DEBUG ===');
  };

  const handleImageClick = (imageUrl: string, title: string) => {
    console.log('=== IMAGE CLICK DEBUG ===');
    console.log('1. handleImageClick called with URL:', imageUrl);
    console.log('2. Title:', title);
    
    setImageModal({
      isOpen: true,
      imageUrl: imageUrl,
      title: title
    });
    
    console.log('3. Image modal opened');
    console.log('=== END IMAGE CLICK DEBUG ===');
  };

  const closeVideoModal = () => {
    console.log('Closing video modal');
    setVideoModal({ isOpen: false });
  };

  const closeImageModal = () => {
    console.log('Closing image modal');
    setImageModal({ isOpen: false });
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements - Updated colors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t('portfolio.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto hero-subtitle leading-relaxed">
            My AI Work
          </p>
        </motion.div>

        {/* Projects Grid - 9 items in 3x3 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => {
            const handleMouseEnter = () => {
              setHoveredProject(project.id);
            };

            const handleMouseLeave = () => {
              setHoveredProject(null);
            };
            
            const handleClick = (e: React.MouseEvent) => {
              e.preventDefault();
              if (project.videoUrl) {
                handleVideoClick(project.videoUrl);
              } else {
                const title = language === 'es' ? project.titleEs : project.title;
                handleImageClick(project.thumbnail, title);
              }
            };

            return (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer text-left w-full hover:shadow-2xl hover:shadow-orange-500/25 hover:border-orange-500/30 hover:-translate-y-2 active:scale-95"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                {/* Media Container */}
                <div className="relative aspect-video overflow-hidden">
                  {/* YouTube thumbnail with play button */}
                  <img
                    src={project.thumbnail}
                    alt={language === 'es' ? project.titleEs : project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none bg-black/30 opacity-80 group-hover:opacity-100">
                      <div className="bg-cyan-500/90 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50 group-hover:rotate-3">
                        <Play className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Card Content */}
                <div className="p-3">
                  {/* Tags */}
                  <div className="flex items-center gap-1 mb-2">
                    {project.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs font-semibold rounded-full text-white border-none" style={{ background: 'linear-gradient(90deg, #FFA645, #FF6A00)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Title and Client */}
                  <h3 className="text-sm font-bold text-white mb-1 truncate group-hover:text-orange-400 transition-colors duration-300">
                    {language === 'es' ? project.titleEs : project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1 hero-subtitle">
                    {language === 'es' ? project.clientEs : project.client}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* External link icon */}
                <div className="absolute top-6 right-6 p-2 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-amber-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500 rounded-3xl pointer-events-none"></div>
              </motion.button>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600/30 hover:to-cyan-500/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              {t('portfolio.viewAll')}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {videoModal.isOpen && videoModal.videoUrl ? (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
          style={{ zIndex: 9999 }}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {videoModal.videoUrl.includes('youtube.com') || videoModal.videoUrl.includes('youtu.be') || videoModal.videoUrl.includes('vimeo.com') ? (
              <iframe
                src={`${videoModal.videoUrl}?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=1`}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-contain max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: 'black', aspectRatio: '16/9' }}
              />
            ) : (
              <video
                src={videoModal.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  console.error('Video error:', e);
                  console.error('Failed to load video:', videoModal.videoUrl);
                }}
                onLoadStart={() => console.log('✅ Video loading started:', videoModal.videoUrl)}
                onLoadedData={() => console.log('✅ Video loaded successfully')}
                style={{ backgroundColor: 'black' }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      ) : null}

      {/* Image Modal */}
      {imageModal.isOpen && imageModal.imageUrl ? (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
          style={{ zIndex: 9999 }}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Title */}
            {imageModal.title && (
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-white text-lg font-semibold bg-black/50 backdrop-blur-xl px-4 py-2 rounded-xl">
                  {imageModal.title}
                </h3>
              </div>
            )}
            
            <img
              src={imageModal.imageUrl}
              alt={imageModal.title || 'Full size image'}
              className="w-full h-full object-contain max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                console.error('Image error:', e);
                console.error('Failed to load image:', imageModal.imageUrl);
              }}
              onLoad={() => console.log('✅ Image loaded successfully:', imageModal.imageUrl)}
              style={{ backgroundColor: 'black' }}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Portfolio;