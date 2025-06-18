// [CHANGELOG] 2025-01-17: Updated all grey text to use hero-subtitle font styling for consistency across the site
// Blog preview component for AKINGZ landing page
// 3 responsive cards with lazy-loaded images and excerpts

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation.tsx';

interface BlogPost {
  id: number;
  title: string;
  titleEs: string;
  excerpt: string;
  excerptEs: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Creative Industries",
    titleEs: "El Futuro de la IA en Industrias Creativas",
    excerpt: "Exploring how artificial intelligence is revolutionizing creative workflows and opening new possibilities for artists and designers worldwide.",
    excerptEs: "Explorando cómo la inteligencia artificial está revolucionando los flujos de trabajo creativos y abriendo nuevas posibilidades para artistas y diseñadores en todo el mundo.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-12-15",
    readTime: "5 min",
    slug: "future-ai-creative-industries"
  },
  {
    id: 2,
    title: "Building Scalable AI Systems",
    titleEs: "Construyendo Sistemas de IA Escalables",
    excerpt: "Deep dive into the architecture patterns and best practices for creating AI systems that can handle enterprise-level demands and growth.",
    excerptEs: "Inmersión profunda en los patrones de arquitectura y mejores prácticas para crear sistemas de IA que puedan manejar demandas y crecimiento a nivel empresarial.",
    image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-12-10",
    readTime: "8 min",
    slug: "building-scalable-ai-systems"
  },
  {
    id: 3,
    title: "Neural Networks: Beyond the Hype",
    titleEs: "Redes Neuronales: Más Allá del Hype",
    excerpt: "A practical guide to understanding when and how to implement neural networks in real-world business applications effectively.",
    excerptEs: "Una guía práctica para entender cuándo y cómo implementar redes neuronales en aplicaciones empresariales del mundo real de manera efectiva.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-12-05",
    readTime: "6 min",
    slug: "neural-networks-beyond-hype"
  }
];

const BlogPreview: React.FC = () => {
  const { t, language } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleCardClick = (slug: string) => {
    // Navigate to blog post
    window.location.href = `/blog/${slug}`;
  };

  return (
    <section ref={ref} className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t('blog.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto hero-subtitle leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => handleCardClick(post.slug)}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{
                boxShadow: undefined,
                border: undefined,
                ...(inView && {
                  boxShadow: '0 0 12px #FFA64588',
                  border: '1px solid #FFA64555',
                }),
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={language === 'es' ? post.titleEs : post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Date & Read Time */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium border-none"
                    style={{
                      background: 'linear-gradient(90deg, #FFA645, #FF6A00)',
                      color: '#FFFFFF',
                    }}
                  >
                    AI
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {language === 'es' ? post.titleEs : post.title}
                </h3>
                
                <p className="text-gray-300 text-sm font-light tracking-wide hero-subtitle leading-relaxed mb-4 line-clamp-2">
                  {language === 'es' ? post.excerptEs : post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                    {t('blog.readMore')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/5 group-hover:to-teal-500/5 transition-all duration-500 rounded-3xl pointer-events-none"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;